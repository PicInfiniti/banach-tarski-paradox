// src/test/test.js
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

export default class Test {
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
    this.pointGroups = {}; // name → THREE.Points

    this.params = {
      depth: 6, // max reduced word length
      starts: 60, // number of seed points on sphere
      pointSize: 2.0, // px
      rotateScene: true,
      angleR: Math.PI * (Math.sqrt(2) - 1), // ~ irrational * π, z-axis
      angleU: Math.PI * (Math.sqrt(5) - 2), // ~ irrational * π, x-axis

      show: {
        identity: true,
        R: true,
        L: true,
        U: true,
        D: true,
      },

      showAxes: true,
    };

    this.palette = {
      "": new THREE.Color("#00c853"), // identity (green)
      R: new THREE.Color("#e53935"),
      L: new THREE.Color("#8e24aa"),
      U: new THREE.Color("#fb8c00"),
      D: new THREE.Color("#3949ab"),
    };
    this.inv = { R: "L", L: "R", U: "D", D: "U" };
    this.clock = new THREE.Clock();
    this._onResize = this.onResize.bind(this);
    this._tick = this.tick.bind(this);
  }

  init() {
    this.setupThree();
    this.setupGUI();
    this.build();
    window.addEventListener("resize", this._onResize);
    requestAnimationFrame(this._tick);
  }

  // ---------- THREE setup ----------
  setupThree() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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

    // a faint wire sphere
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

    // little axes
    this.axes = new THREE.AxesHelper(1.5);
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
      .onChange(() => this.updateVisibility());
    fg.add(this.params.show, "R")
      .name("R")
      .onChange(() => this.updateVisibility());
    fg.add(this.params.show, "L")
      .name("L")
      .onChange(() => this.updateVisibility());
    fg.add(this.params.show, "U")
      .name("U")
      .onChange(() => this.updateVisibility());
    fg.add(this.params.show, "D")
      .name("D")
      .onChange(() => this.updateVisibility());

    this.gui
      .add(this.params, "showAxes")
      .name("Show axes")
      .onChange(() => {
        this.axes.visible = this.params.showAxes;
      });
  }

  // ---------- math ----------
  rotX(theta) {
    const m = new THREE.Matrix4();
    const c = Math.cos(theta),
      s = Math.sin(theta);
    m.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
    return m;
  }
  rotZ(theta) {
    const m = new THREE.Matrix4();
    const c = Math.cos(theta),
      s = Math.sin(theta);
    m.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return m;
  }

  generateWords(maxLen) {
    // word: { letters, mat, last }
    const words = [
      { letters: "", mat: new THREE.Matrix4().identity(), last: null },
    ];
    let frontier = words.slice(0);
    const gens = [
      { key: "R", mat: () => this.rotZ(this.params.angleR) },
      { key: "L", mat: () => this.rotZ(-this.params.angleR) },
      { key: "U", mat: () => this.rotX(this.params.angleU) },
      { key: "D", mat: () => this.rotX(-this.params.angleU) },
    ];
    for (let len = 1; len <= maxLen; len++) {
      const next = [];
      for (const w of frontier) {
        for (const g of gens) {
          if (w.last && g.key === this.inv[w.last]) continue; // no backtracking
          const mat = w.mat.clone().premultiply(g.mat()); // left-multiply (last letter = leftmost)
          next.push({ letters: g.key + w.letters, mat, last: g.key });
        }
      }
      words.push(...next);
      frontier = next;
    }
    return words;
  }

  fibonacciSphere(n) {
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

  // ---------- build cloud ----------

  build() {
    // clear previous
    if (this.pointsObj) {
      this.scene.remove(this.pointsObj);
      this.pointsObj.traverse((o) => {
        if (o.isPoints) {
          o.geometry?.dispose();
          o.material?.dispose?.();
        }
      });
      this.pointsObj = null;
    }

    if (this.poleGroup) {
      this.scene.remove(this.poleGroup);
      this.poleGroup.children.forEach((c) => {
        c.geometry.dispose();
        c.material.dispose();
      });
      this.poleGroup = null;
    }

    this.pointGroups = {};

    // parent group for all clouds
    this.pointsObj = new THREE.Group();
    this.scene.add(this.pointsObj);

    // ---------- generate data ----------
    const words = this.generateWords(this.params.depth); // includes identity
    const seeds = this.fibonacciSphere(this.params.starts);

    // buckets per color
    const groups = { identity: [], R: [], L: [], U: [], D: [] };
    for (const w of words) {
      const key = w.last ?? "identity";
      for (const s of seeds) {
        const p = s.clone().applyMatrix4(w.mat).normalize();
        groups[key].push(p.x, p.y, p.z);
      }
    }

    // ---------- build clouds ----------
    const roundTex = this.makeCircleTexture(64, 1.6); // soft circular sprite
    const ensureShow = (k) =>
      this.params.show && k in this.params.show ? this.params.show[k] : true;

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
        map: roundTex,
        transparent: true,
        alphaTest: 0.5,
        depthWrite: false,
      });

      const cloud = new THREE.Points(geom, mat);
      cloud.visible = ensureShow(key);

      this.pointsObj.add(cloud); // parent group gets the cloud
      this.pointGroups[key] = cloud; // keep reference by color
    }

    // poles
    this.addPoles();
  }

  addPoles() {
    this.poleGroup = new THREE.Group();
    const poles = [
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1), // z-axis (R/L)
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0), // x-axis (U/D)
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

  updatePointSize() {
    if (this.pointsObj)
      this.pointsObj.material.size = this.params.pointSize / 100;
  }

  // ---------- loop / resize / dispose ----------
  tick() {
    const t = this.clock.getElapsedTime();
    if (this.params.rotateScene) {
      this.sphereRef.rotation.y = t * 0.15;
      if (this.pointsObj) this.pointsObj.rotation.y = t * 0.15;
      if (this.poleGroup) this.poleGroup.rotation.y = t * 0.15;
    }
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._tick);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  destroy() {
    window.removeEventListener("resize", this._onResize);
    this.gui?.destroy();
    this.scene.traverse((o) => {
      if (o.isMesh) {
        o.geometry?.dispose();
        o.material?.dispose?.();
      }
    });
    this.renderer.dispose();
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

  updateVisibility() {
    for (const key in this.pointGroups) {
      this.pointGroups[key].visible = this.params.show[key];
    }
  }
}
