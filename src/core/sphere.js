// src/test/test.js
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

export default class Sphere {
  constructor(app) {
    this.app = app;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.pointsObj = null;
    this.poleGroup = null;
    this.sphereRef = null;
    this.gui = null;
    this.axes = null;

    this.pointGroups = {}; // key -> THREE.Points
    this.colorGroups = {}; // key -> THREE.Group wrapper for per-color rotation

    this.animationFrameId = null;
    this.pointTexture = null;
    this.clock = new THREE.Clock();

    this.params = {
      depth: 6,
      starts: 60,
      pointSize: 2.0,
      rotateScene: true,
      angleR: Math.PI * (Math.sqrt(2) - 1),
      angleU: Math.PI * (Math.sqrt(5) - 2),

      show: {
        identity: true,
        R: true,
        L: true,
        U: true,
        D: true,
      },

      rotation: {
        identity: { x: 0, y: 0, z: 0 },
        R: { x: 0, y: 0, z: 0 },
        L: { x: 0, y: 0, z: 0 },
        U: { x: 0, y: 0, z: 0 },
        D: { x: 0, y: 0, z: 0 },
      },

      edit: {
        enabled: false,
        target: "R",
        isolate: false,
      },

      showAxes: true,
    };

    this.palette = {
      "": new THREE.Color("#00c853"),
      R: new THREE.Color("#e53935"),
      L: new THREE.Color("#8e24aa"),
      U: new THREE.Color("#fb8c00"),
      D: new THREE.Color("#3949ab"),
    };

    this.inv = { R: "L", L: "R", U: "D", D: "U" };

    this.dragState = {
      active: false,
      pointerId: null,
      lastX: 0,
      lastY: 0,
    };

    this._onResize = this.onResize.bind(this);
    this._tick = this.tick.bind(this);
    this._onPointerDown = this.onPointerDown.bind(this);
    this._onPointerMove = this.onPointerMove.bind(this);
    this._onPointerUp = this.onPointerUp.bind(this);
  }

  init() {
    this.setupThree();
    this.setupGUI();
    this.pointTexture = this.makeCircleTexture(64, 1.6);
    this.build();

    window.addEventListener("resize", this._onResize);
    this.renderer.domElement.addEventListener(
      "pointerdown",
      this._onPointerDown,
    );
    window.addEventListener("pointermove", this._onPointerMove);
    window.addEventListener("pointerup", this._onPointerUp);
    window.addEventListener("pointercancel", this._onPointerUp);

    this.animationFrameId = requestAnimationFrame(this._tick);
  }

  setupThree() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    this.camera.position.set(0, 0, 4);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    this.sphereRef = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 32),
      new THREE.MeshBasicMaterial({
        color: 0x222222,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      }),
    );
    this.scene.add(this.sphereRef);

    this.axes = new THREE.AxesHelper(1.5);
    this.axes.visible = this.params.showAxes;
    this.scene.add(this.axes);
  }

  setupGUI() {
    this.gui = new GUI();

    this.gui
      .add(this.params, "depth", 1, 8, 1)
      .name("Word depth")
      .onFinishChange(() => this.build());

    this.gui
      .add(this.params, "starts", 6, 200, 1)
      .name("Starting points")
      .onFinishChange(() => this.build());

    this.gui
      .add(this.params, "pointSize", 1, 6, 0.1)
      .name("Point size")
      .onChange(() => this.updatePointSize());

    this.gui.add(this.params, "rotateScene").name("Auto-rotate");

    this.gui
      .add(this.params, "angleR", 0.1, Math.PI * 1.9, 0.0001)
      .name("Angle R (z)")
      .onFinishChange(() => this.build());

    this.gui
      .add(this.params, "angleU", 0.1, Math.PI * 1.9, 0.0001)
      .name("Angle U (x)")
      .onFinishChange(() => this.build());

    const fg = this.gui.addFolder("Show colors");
    fg.add(this.params.show, "identity")
      .name("Identity (G)")
      .onChange(() => this.updateEditIsolation());
    fg.add(this.params.show, "R")
      .name("R")
      .onChange(() => this.updateEditIsolation());
    fg.add(this.params.show, "L")
      .name("L")
      .onChange(() => this.updateEditIsolation());
    fg.add(this.params.show, "U")
      .name("U")
      .onChange(() => this.updateEditIsolation());
    fg.add(this.params.show, "D")
      .name("D")
      .onChange(() => this.updateEditIsolation());

    const editFolder = this.gui.addFolder("Edit one color");

    editFolder
      .add(this.params.edit, "enabled")
      .name("Rotate selected")
      .onChange((value) => {
        this.controls.enabled = !value;
        if (!value) this.dragState.active = false;
        this.updateEditIsolation();
      });

    editFolder
      .add(this.params.edit, "target", ["identity", "R", "L", "U", "D"])
      .name("Selected color")
      .onChange(() => this.updateEditIsolation());

    editFolder
      .add(this.params.edit, "isolate")
      .name("Hide others")
      .onChange(() => this.updateEditIsolation());

    const rot = this.gui.addFolder("Selected rotation");
    ["identity", "R", "L", "U", "D"].forEach((key) => {
      const f = rot.addFolder(key);
      f.add(this.params.rotation[key], "x", -Math.PI, Math.PI, 0.01)
        .name("X")
        .onChange(() => this.updateColorRotations());
      f.add(this.params.rotation[key], "y", -Math.PI, Math.PI, 0.01)
        .name("Y")
        .onChange(() => this.updateColorRotations());
      f.add(this.params.rotation[key], "z", -Math.PI, Math.PI, 0.01)
        .name("Z")
        .onChange(() => this.updateColorRotations());

      f.close();
    });

    this.gui
      .add(this.params, "showAxes")
      .name("Show axes")
      .onChange(() => {
        this.axes.visible = this.params.showAxes;
      });
  }

  rotX(theta) {
    return new THREE.Matrix4().makeRotationX(theta);
  }

  rotZ(theta) {
    return new THREE.Matrix4().makeRotationZ(theta);
  }

  generateWords(maxLen) {
    const words = [
      { letters: "", mat: new THREE.Matrix4().identity(), last: null },
    ];

    let frontier = words.slice(0);

    const gens = [
      { key: "R", mat: this.rotZ(this.params.angleR) },
      { key: "L", mat: this.rotZ(-this.params.angleR) },
      { key: "U", mat: this.rotX(this.params.angleU) },
      { key: "D", mat: this.rotX(-this.params.angleU) },
    ];

    for (let len = 1; len <= maxLen; len++) {
      const next = [];

      for (const w of frontier) {
        for (const g of gens) {
          if (w.last && g.key === this.inv[w.last]) continue;
          const mat = w.mat.clone().premultiply(g.mat);
          next.push({ letters: g.key + w.letters, mat, last: g.key });
        }
      }

      words.push(...next);
      frontier = next;
    }

    return words;
  }

  fibonacciSphere(n) {
    if (n <= 1) return [new THREE.Vector3(0, 1, 0)];

    const pts = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = i * phi;
      pts.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r));
    }

    return pts;
  }

  build() {
    this.disposeGroup(this.pointsObj);
    this.disposeGroup(this.poleGroup);

    this.pointsObj = new THREE.Group();
    this.scene.add(this.pointsObj);

    this.pointGroups = {};
    this.colorGroups = {};

    const words = this.generateWords(this.params.depth);
    const seeds = this.fibonacciSphere(this.params.starts);
    const groups = { identity: [], R: [], L: [], U: [], D: [] };

    for (const w of words) {
      const key = w.last ?? "identity";
      for (const s of seeds) {
        const p = s.clone().applyMatrix4(w.mat).normalize();
        groups[key].push(p.x, p.y, p.z);
      }
    }

    for (const key of Object.keys(groups)) {
      const arr = groups[key];
      if (!arr.length) continue;

      const geom = new THREE.BufferGeometry();
      geom.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(arr), 3),
      );

      const baseColor = this.palette[key === "identity" ? "" : key];
      const colorBuf = new Float32Array((arr.length / 3) * 3);

      for (let i = 0; i < colorBuf.length; i += 3) {
        colorBuf[i] = baseColor.r;
        colorBuf[i + 1] = baseColor.g;
        colorBuf[i + 2] = baseColor.b;
      }

      geom.setAttribute("color", new THREE.BufferAttribute(colorBuf, 3));

      const mat = new THREE.PointsMaterial({
        size: this.params.pointSize / 100,
        vertexColors: true,
        sizeAttenuation: true,
        map: this.pointTexture,
        transparent: true,
        alphaTest: 0.5,
        depthWrite: false,
      });

      const cloud = new THREE.Points(geom, mat);

      const colorGroup = new THREE.Group();
      colorGroup.add(cloud);

      this.pointsObj.add(colorGroup);
      this.pointGroups[key] = cloud;
      this.colorGroups[key] = colorGroup;
    }

    this.updateColorRotations();
    this.updateEditIsolation();
    this.addPoles();
  }

  addPoles() {
    this.poleGroup = new THREE.Group();

    const poles = [
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
    ];

    const mat = new THREE.MeshBasicMaterial({ color: 0xffeb3b });
    const g = new THREE.SphereGeometry(0.02, 16, 8);

    poles.forEach((p) => {
      const m = new THREE.Mesh(g, mat);
      m.position.copy(p.multiplyScalar(1.001));
      this.poleGroup.add(m);
    });

    this.scene.add(this.poleGroup);
  }

  getActiveColorGroup() {
    const key = this.params.edit.target;
    return this.colorGroups[key] || null;
  }

  onPointerDown(event) {
    if (!this.params.edit.enabled) return;

    const group = this.getActiveColorGroup();
    if (!group) return;

    this.dragState.active = true;
    this.dragState.pointerId = event.pointerId;
    this.dragState.lastX = event.clientX;
    this.dragState.lastY = event.clientY;

    this.renderer.domElement.setPointerCapture?.(event.pointerId);
  }

  onPointerMove(event) {
    if (!this.params.edit.enabled) return;
    if (!this.dragState.active) return;
    if (event.pointerId !== this.dragState.pointerId) return;

    const group = this.getActiveColorGroup();
    if (!group) return;

    const dx = event.clientX - this.dragState.lastX;
    const dy = event.clientY - this.dragState.lastY;

    this.dragState.lastX = event.clientX;
    this.dragState.lastY = event.clientY;

    const speed = 0.01;

    group.rotation.y += dx * speed;
    group.rotation.x -= dy * speed;

    const key = this.params.edit.target;
    this.params.rotation[key].x = group.rotation.x;
    this.params.rotation[key].y = group.rotation.y;
    this.params.rotation[key].z = group.rotation.z;

    this.gui.controllersRecursive().forEach((c) => c.updateDisplay());
  }

  onPointerUp(event) {
    if (event.pointerId !== this.dragState.pointerId) return;
    this.dragState.active = false;
    this.dragState.pointerId = null;
  }

  updateColorRotations() {
    for (const key in this.colorGroups) {
      const group = this.colorGroups[key];
      const r = this.params.rotation[key];
      if (!group || !r) continue;
      group.rotation.set(r.x, r.y, r.z);
    }
  }

  updatePointSize() {
    for (const points of Object.values(this.pointGroups)) {
      points.material.size = this.params.pointSize / 100;
      points.material.needsUpdate = true;
    }
  }

  updateEditIsolation() {
    const editMode = this.params.edit.enabled;
    const isolate = editMode && this.params.edit.isolate;
    const target = this.params.edit.target;

    for (const key in this.colorGroups) {
      const group = this.colorGroups[key];
      if (!group) continue;

      if (isolate) {
        group.visible = key === target;
      } else {
        group.visible = this.params.show[key];
      }
    }
  }

  tick() {
    const t = this.clock.getElapsedTime();

    if (this.params.rotateScene && !this.params.edit.enabled) {
      const rot = t * 0.15;
      this.sphereRef.rotation.y = rot;
      if (this.pointsObj) this.pointsObj.rotation.y = rot;
      if (this.poleGroup) this.poleGroup.rotation.y = rot;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this._tick);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  disposeGroup(group) {
    if (!group) return;

    this.scene.remove(group);

    group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) {
          o.material.forEach((m) => m?.dispose?.());
        } else {
          o.material.dispose?.();
        }
      }
    });
  }

  destroy() {
    window.removeEventListener("resize", this._onResize);

    this.renderer?.domElement?.removeEventListener(
      "pointerdown",
      this._onPointerDown,
    );
    window.removeEventListener("pointermove", this._onPointerMove);
    window.removeEventListener("pointerup", this._onPointerUp);
    window.removeEventListener("pointercancel", this._onPointerUp);

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.gui?.destroy();
    this.controls?.dispose();

    this.disposeGroup(this.pointsObj);
    this.disposeGroup(this.poleGroup);

    if (this.sphereRef) {
      this.scene.remove(this.sphereRef);
      this.sphereRef.geometry?.dispose();
      this.sphereRef.material?.dispose?.();
    }

    if (this.axes) {
      this.scene.remove(this.axes);
    }

    this.pointTexture?.dispose();
    this.renderer?.dispose();

    if (this.renderer?.domElement?.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }

  makeCircleTexture(size = 64, feather = 1.5) {
    const c = document.createElement("canvas");
    c.width = c.height = size;

    const ctx = c.getContext("2d");
    const r = size * 0.5;

    const g = ctx.createRadialGradient(r, r, r / feather, r, r, r);
    g.addColorStop(0.0, "rgba(255,255,255,1)");
    g.addColorStop(1.0, "rgba(255,255,255,0)");

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(c);
    tex.generateMipmaps = true;
    tex.needsUpdate = true;
    return tex;
  }
}
