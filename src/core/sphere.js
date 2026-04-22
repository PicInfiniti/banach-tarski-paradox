import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

export default class Sphere {
  constructor({ env, container = document.body }) {
    this.env = env;
    this.container = container;

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.controls = null;
    this.pointsGroup = null;
    this.poleGroup = null;
    this.sphereRef = null;
    this.axes = null;
    this.gui = null;
    this.pointGroups = {};
    this.animationFrameId = null;
    this.clock = new THREE.Clock();
    this.pointTexture = null;

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
      showAxes: true,
    };

    this.palette = {
      identity: new THREE.Color("#00c853"),
      R: new THREE.Color("#e53935"),
      L: new THREE.Color("#8e24aa"),
      U: new THREE.Color("#fb8c00"),
      D: new THREE.Color("#3949ab"),
    };

    this.inverse = {
      R: "L",
      L: "R",
      U: "D",
      D: "U",
    };

    this._onResize = this.onResize.bind(this);
    this._tick = this.tick.bind(this);
  }

  init() {
    this.setupThree();
    this.setupGUI();
    this.pointTexture = this.makeCircleTexture(64, 1.6);
    this.build();

    window.addEventListener("resize", this._onResize);
    this.animationFrameId = requestAnimationFrame(this._tick);
  }

  setupThree() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

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

    const showFolder = this.gui.addFolder("Show colors");
    showFolder
      .add(this.params.show, "identity")
      .name("Identity (G)")
      .onChange(() => this.updateVisibility());
    showFolder
      .add(this.params.show, "R")
      .name("R")
      .onChange(() => this.updateVisibility());
    showFolder
      .add(this.params.show, "L")
      .name("L")
      .onChange(() => this.updateVisibility());
    showFolder
      .add(this.params.show, "U")
      .name("U")
      .onChange(() => this.updateVisibility());
    showFolder
      .add(this.params.show, "D")
      .name("D")
      .onChange(() => this.updateVisibility());

    this.gui
      .add(this.params, "showAxes")
      .name("Show axes")
      .onChange((value) => {
        this.axes.visible = value;
      });
  }

  makeRotationX(theta) {
    return new THREE.Matrix4().makeRotationX(theta);
  }

  makeRotationZ(theta) {
    return new THREE.Matrix4().makeRotationZ(theta);
  }

  generateWords(maxLen) {
    const generators = {
      R: this.makeRotationZ(this.params.angleR),
      L: this.makeRotationZ(-this.params.angleR),
      U: this.makeRotationX(this.params.angleU),
      D: this.makeRotationX(-this.params.angleU),
    };

    const words = [{ letters: "", mat: new THREE.Matrix4(), last: null }];

    let frontier = words;

    for (let len = 1; len <= maxLen; len++) {
      const next = [];

      for (const word of frontier) {
        for (const [key, matrix] of Object.entries(generators)) {
          if (word.last && key === this.inverse[word.last]) continue;

          next.push({
            letters: key + word.letters,
            mat: word.mat.clone().premultiply(matrix),
            last: key,
          });
        }
      }

      words.push(...next);
      frontier = next;
    }

    return words;
  }

  fibonacciSphere(count) {
    if (count <= 1) return [new THREE.Vector3(0, 1, 0)];

    const points = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = i * goldenAngle;

      points.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          y,
          Math.sin(theta) * radius,
        ),
      );
    }

    return points;
  }

  clearGroup(group) {
    if (!group) return;

    this.scene.remove(group);
    group.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((m) => m.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }

  build() {
    this.clearGroup(this.pointsGroup);
    this.clearGroup(this.poleGroup);

    this.pointGroups = {};
    this.pointsGroup = new THREE.Group();
    this.scene.add(this.pointsGroup);

    const words = this.generateWords(this.params.depth);
    const seeds = this.fibonacciSphere(this.params.starts);
    const groups = { identity: [], R: [], L: [], U: [], D: [] };

    for (const word of words) {
      const key = word.last ?? "identity";

      for (const seed of seeds) {
        const p = seed.clone().applyMatrix4(word.mat).normalize();
        groups[key].push(p.x, p.y, p.z);
      }
    }

    for (const [key, values] of Object.entries(groups)) {
      if (!values.length) continue;

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(values), 3),
      );

      const baseColor = this.palette[key];
      const colors = new Float32Array((values.length / 3) * 3);

      for (let i = 0; i < colors.length; i += 3) {
        colors[i] = baseColor.r;
        colors[i + 1] = baseColor.g;
        colors[i + 2] = baseColor.b;
      }

      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: this.params.pointSize / 100,
        vertexColors: true,
        sizeAttenuation: true,
        map: this.pointTexture,
        transparent: true,
        alphaTest: 0.5,
        depthWrite: false,
      });

      const points = new THREE.Points(geometry, material);
      points.visible = this.params.show[key];
      this.pointsGroup.add(points);
      this.pointGroups[key] = points;
    }

    this.addPoles();
  }

  addPoles() {
    this.poleGroup = new THREE.Group();

    const positions = [
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
    ];

    const geometry = new THREE.SphereGeometry(0.02, 16, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffeb3b });

    for (const position of positions) {
      const pole = new THREE.Mesh(geometry, material);
      pole.position.copy(position).multiplyScalar(1.001);
      this.poleGroup.add(pole);
    }

    this.scene.add(this.poleGroup);
  }

  updatePointSize() {
    for (const points of Object.values(this.pointGroups)) {
      points.material.size = this.params.pointSize / 100;
      points.material.needsUpdate = true;
    }
  }

  updateVisibility() {
    for (const [key, points] of Object.entries(this.pointGroups)) {
      points.visible = this.params.show[key];
    }
  }

  tick() {
    const elapsed = this.clock.getElapsedTime();

    if (this.params.rotateScene) {
      const rotation = elapsed * 0.15;
      this.sphereRef.rotation.y = rotation;
      if (this.pointsGroup) this.pointsGroup.rotation.y = rotation;
      if (this.poleGroup) this.poleGroup.rotation.y = rotation;
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

  makeCircleTexture(size = 64, feather = 1.5) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;

    const ctx = canvas.getContext("2d");
    const radius = size * 0.5;

    const gradient = ctx.createRadialGradient(
      radius,
      radius,
      radius / feather,
      radius,
      radius,
      radius,
    );

    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
    return texture;
  }

  destroy() {
    window.removeEventListener("resize", this._onResize);

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.gui?.destroy();
    this.controls?.dispose();

    this.clearGroup(this.pointsGroup);
    this.clearGroup(this.poleGroup);

    if (this.sphereRef) {
      this.scene.remove(this.sphereRef);
      this.sphereRef.geometry.dispose();
      this.sphereRef.material.dispose();
    }

    if (this.pointTexture) {
      this.pointTexture.dispose();
      this.pointTexture = null;
    }

    this.renderer?.dispose();

    if (this.renderer?.domElement?.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
}
