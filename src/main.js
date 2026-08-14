import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import paperUrl from "../main.pdf?url";
import "./assets/sass/main.sass";

const STAGES = [
  {
    kicker: "Step I · the geometric stage",
    title: "Begin on the sphere S²",
    body: "The proof first works on the unit sphere, where rotations act without changing distance or shape. The solid ball comes later by radial extension.",
    note: "This opening shell follows Section 3.2 of the paper. It is a mathematical sphere, not a physical material.",
  },
  {
    kicker: "Step II · a free subgroup",
    title: "Two free rotations",
    body: "Choose rotations A and B about orthogonal axes through θ = arccos(1/3). Their reduced words form a copy of the free group F₂ inside SO(3).",
    note: "Colors track the four first-letter classes S(a), S(a⁻¹), S(b), S(b⁻¹); E marks the exceptional remainder.",
  },
  {
    kicker: "Step III · the axiom of choice",
    title: "One seed per orbit",
    body: "Remove the countable fixed-point set D, then choose a set M containing one representative from every F₂-orbit. Each word class acting on M becomes a scattered piece of S².",
    note: "The exploded colors symbolize Eᵢ·M. The exact sets are non-measurable and cannot be explicitly rendered point-by-point.",
  },
  {
    kicker: "Step IV · radial invariance",
    title: "From shell to solid ball",
    body: "Extend every spherical piece along its radial segment: Ãᵢ = { rx : x ∈ Aᵢ, 0 < r ≤ 1 }. Rotations commute with this extension, filling B ∖ {0}.",
    note: "The center and the countable set D are restored by equidecomposability—the paper’s countable absorption step.",
  },
  {
    kicker: "Conclusion · paradoxical decomposition",
    title: "One ball becomes two",
    body: "The free-group identities now become two rigid reassemblies. No color is split, stretched, or copied; every displayed piece receives one rotation and one translation.",
    note: "Left: S(a) ∪ A·S(a⁻¹). Right: S(b) ∪ B·S(b⁻¹), with E absorbed into the finite decomposition.",
  },
];

const PIECES = [
  { name: "S(a)", color: "#ff6b4a", offset: [-1.2, 0.65, 0.1] },
  { name: "S(a⁻¹)", color: "#f7c455", offset: [-0.7, -0.85, 0.35] },
  { name: "S(b)", color: "#8bd3b0", offset: [0.05, 1.05, -0.25] },
  { name: "S(b⁻¹)", color: "#58a6d8", offset: [0.85, -0.7, 0.2] },
  { name: "E", color: "#bd8ce6", offset: [1.2, 0.55, -0.2] },
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const ease = (value) => value * value * (3 - 2 * value);

class ParadoxLab {
  constructor(root) {
    this.root = root;
    const requestedStage = Number(new URLSearchParams(window.location.search).get("stage"));
    this.stage = Number.isInteger(requestedStage) ? clamp(requestedStage, 0, STAGES.length - 1) : 0;
    this.visualStage = this.stage;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.clock = new THREE.Clock();
    this.pieces = [];
    this.pointer = new THREE.Vector2();
    this.generatorAngle = Math.acos(1 / 3);
    this.frame = null;

    this.renderShell();
    this.cacheDom();
    this.setupScene();
    this.buildSphere();
    this.bindEvents();
    this.setStage(this.stage, true);
    this.animate();
  }

  renderShell() {
    this.root.innerHTML = `
      <div class="experience">
        <div class="ambient ambient--one"></div>
        <div class="ambient ambient--two"></div>

        <header class="topbar">
          <a class="brand" href="#" aria-label="Banach–Tarski interactive home">
            <span class="brand__mark" aria-hidden="true"><i></i><i></i></span>
            <span>Impossible Objects</span>
          </a>
          <div class="topbar__meta">
            <span class="edition">Visual essay · 01</span>
            <a class="icon-button" href="https://github.com/PicInfiniti/banach-tarski-paradox" target="_blank" rel="noreferrer" aria-label="View this project on GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.09c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.29 5.68.42.36.78 1.07.78 2.16v3.26c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
            </a>
            <button class="text-button" data-open-guide>Field guide <span>↗</span></button>
          </div>
        </header>

        <section class="intro" aria-labelledby="page-title">
          <p class="eyebrow"><span></span> The Banach–Tarski paradox</p>
          <h1 id="page-title">One sphere.<br /><em>Two spheres.</em></h1>
          <p class="lede">How infinity breaks our everyday intuition about volume.</p>
        </section>

        <div class="viewport" aria-label="Interactive visualization of an abstract sphere decomposition"></div>

        <aside class="stage-card" aria-live="polite">
          <div class="stage-card__topline">
            <span class="stage-number">01</span>
            <span class="stage-kicker"></span>
          </div>
          <h2 class="stage-title"></h2>
          <p class="stage-body"></p>
          <div class="stage-note">
            <span aria-hidden="true">✦</span>
            <p></p>
          </div>
          <div class="piece-key" aria-label="Five abstract pieces">
            ${PIECES.map((piece) => `<span style="--piece:${piece.color}"><i></i>${piece.name}</span>`).join("")}
          </div>
        </aside>

        <div class="stage-nav" aria-label="Visualization stages">
          <button class="stage-arrow stage-prev" aria-label="Previous stage">←</button>
          <div class="stage-track">
            ${STAGES.map(
              (stage, index) => `
                <button class="stage-step" data-stage="${index}" aria-label="Stage ${index + 1}: ${stage.title}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <i></i>
                </button>`,
            ).join("")}
          </div>
          <button class="stage-arrow stage-next" aria-label="Next stage">→</button>
        </div>

        <div class="interaction-hint"><span class="mouse-icon"></span> Drag to orbit</div>
        <p class="figure-label"><span>Fig. 1</span> A finite analogy for an infinite construction</p>

        <dialog class="guide">
          <div class="guide__head">
            <div>
              <p class="eyebrow"><span></span> Field guide</p>
              <h2>What the paradox<br /><em>actually says</em></h2>
            </div>
            <button class="guide__close" aria-label="Close field guide">×</button>
          </div>
          <div class="guide__grid">
            <article><span>01 / Free group</span><h3>Reduced words in F₂</h3><p>The classes S(a), S(a⁻¹), S(b), and S(b⁻¹) partition all nonidentity reduced words by their first letter. Cancellation produces two paradoxical reassemblies.</p></article>
            <article><span>02 / Rotations</span><h3>Embed F₂ in SO(3)</h3><p>Rotations A and B use orthogonal axes and θ = arccos(1/3). No nontrivial reduced word becomes the identity, so they generate a free subgroup.</p></article>
            <article><span>03 / Exceptional set</span><h3>Remove the fixed poles</h3><p>Every nonidentity rotation fixes two antipodal points. Their union D is countable; on S² ∖ D, the free-group action has no fixed points.</p></article>
            <article><span>04 / Choice</span><h3>Select the orbit seeds M</h3><p>The axiom of choice supplies exactly one representative from every orbit. Acting on M transfers the word decomposition of F₂ onto the sphere.</p></article>
            <article><span>05 / Radial lift</span><h3>Turn S² into a ball</h3><p>Each surface piece is extended along 0 &lt; r ≤ 1. Because rotations preserve radial lines, the same paradoxical relations hold throughout B ∖ {0}.</p></article>
            <article><span>06 / Boundary</span><h3>A proof map, not the pieces</h3><p>The colored particles show the paper’s logical structure. The true pieces are non-measurable infinite sets, and no finite rendering can literally construct them.</p></article>
          </div>
          <footer><span>Self-contained proof · March 2026</span><div><a href="${paperUrl}" target="_blank" rel="noreferrer">Read the paper ↗</a><button data-restart>Replay the proof →</button></div></footer>
        </dialog>
      </div>`;
  }

  cacheDom() {
    this.viewport = this.root.querySelector(".viewport");
    this.numberEl = this.root.querySelector(".stage-number");
    this.kickerEl = this.root.querySelector(".stage-kicker");
    this.titleEl = this.root.querySelector(".stage-title");
    this.bodyEl = this.root.querySelector(".stage-body");
    this.noteEl = this.root.querySelector(".stage-note p");
    this.cardEl = this.root.querySelector(".stage-card");
    this.keyEl = this.root.querySelector(".piece-key");
    this.steps = [...this.root.querySelectorAll(".stage-step")];
    this.prev = this.root.querySelector(".stage-prev");
    this.next = this.root.querySelector(".stage-next");
    this.guide = this.root.querySelector(".guide");
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.isNarrow = window.innerWidth < 700;
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(0, 0.15, 6.2);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setClearColor(0x000000, 0);
    this.viewport.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;
    this.controls.minDistance = 4.5;
    this.controls.maxDistance = this.isNarrow ? 24 : 12;
    this.controls.autoRotate = !this.reducedMotion;
    this.controls.autoRotateSpeed = 0.32;

    this.world = new THREE.Group();
    this.world.rotation.set(-0.08, -0.28, 0.04);
    this.scene.add(this.world);

    this.guideSphere = this.makeGuideSphere(1.52);
    this.world.add(this.guideSphere);

    this.baseCameraDistance = 6.2;
    this.choiceCameraDistance = this.isNarrow ? 17.5 : 10;
    this.finalCameraDistance = this.isNarrow ? 19.5 : 9.2;
    this.cameraGoalDistance = this.baseCameraDistance;
    this.cameraIsTweening = false;
    this.targetGuides = new THREE.Group();
    this.targetGuides.add(this.makeGuideSphere(1.52, -1.65), this.makeGuideSphere(1.52, 1.65));
    this.targetGuides.visible = false;
    this.world.add(this.targetGuides);

    this.resize();
  }

  makeGuideSphere(radius, x = 0) {
    const group = new THREE.Group();
    group.position.x = x;
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(radius, 24, 16)),
      new THREE.LineBasicMaterial({ color: 0xb8c9bd, transparent: true, opacity: 0.09 }),
    );
    const ring = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 96 }, (_, i) => {
          const angle = (i / 96) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
        }),
      ),
      new THREE.LineBasicMaterial({ color: 0xdfeae3, transparent: true, opacity: 0.2 }),
    );
    group.add(wire, ring);
    return group;
  }

  buildSphere() {
    const count = this.isNarrow ? 10500 : 18000;
    const surfaces = Array.from({ length: PIECES.length }, () => []);
    const originals = Array.from({ length: PIECES.length }, () => []);
    const separated = Array.from({ length: PIECES.length }, () => []);
    const doubled = Array.from({ length: PIECES.length }, () => []);
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i += 1) {
      const y = 1 - (2 * (i + 0.5)) / count;
      const radial = Math.sqrt(1 - y * y);
      const theta = i * golden;
      const shell = i % 4 !== 0;
      const radius = shell ? 1.5 * (0.965 + ((i * 17) % 31) / 1000) : 1.5 * Math.cbrt(((i * 67) % 997) / 997);
      const x = Math.cos(theta) * radial * radius;
      const py = y * radius;
      const z = Math.sin(theta) * radial * radius;
      const length = Math.hypot(x, py, z) || 1;
      const sx = (x / length) * 1.5;
      const sy = (py / length) * 1.5;
      const sz = (z / length) * 1.5;
      const hash = Math.abs(Math.sin(x * 91.7 + py * 117.3 + z * 73.9) * 43758.5453);
      const unitHash = hash % 1;
      const thresholds = [0.249, 0.498, 0.747, 0.996, 1];
      const pieceIndex = thresholds.findIndex((threshold) => unitHash < threshold);
      const piece = PIECES[pieceIndex];
      surfaces[pieceIndex].push(sx, sy, sz);
      originals[pieceIndex].push(x, py, z);

      const splitPoint = this.rotatePoint(sx, sy, sz, (pieceIndex - 2) * 0.16, (pieceIndex - 2) * 0.27);
      separated[pieceIndex].push(
        splitPoint.x + piece.offset[0] * 1.15,
        splitPoint.y + piece.offset[1] * 1.15,
        splitPoint.z + piece.offset[2] * 1.15,
      );

      const destination = pieceIndex < 2 ? -1 : 1;
      let targetPoint = { x, y: py, z };
      if (pieceIndex === 1) targetPoint = this.rotateAroundZ(x, py, z, this.generatorAngle);
      if (pieceIndex === 3) targetPoint = this.rotatePoint(x, py, z, this.generatorAngle, 0);
      if (pieceIndex === 4) targetPoint = this.rotatePoint(x, py, z, 0, this.generatorAngle);
      doubled[pieceIndex].push(targetPoint.x + destination * 1.65, targetPoint.y, targetPoint.z);
    }

    PIECES.forEach((piece, index) => {
      const geometry = new THREE.BufferGeometry();
      const current = new Float32Array(surfaces[index]);
      geometry.setAttribute("position", new THREE.BufferAttribute(current, 3));
      const material = new THREE.PointsMaterial({
        color: new THREE.Color("#e5d7ad"),
        size: this.isNarrow ? 0.026 : 0.022,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.78,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const points = new THREE.Points(geometry, material);
      this.world.add(points);
      const splitMatrix = new THREE.Matrix4()
        .makeRotationY((index - 2) * 0.27)
        .multiply(new THREE.Matrix4().makeRotationX((index - 2) * 0.16));
      const splitQuaternion = new THREE.Quaternion().setFromRotationMatrix(splitMatrix);
      const finalQuaternion = new THREE.Quaternion();
      if (index === 1) finalQuaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.generatorAngle);
      if (index === 3) finalQuaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.generatorAngle);
      if (index === 4) finalQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.generatorAngle);
      this.pieces.push({
        points,
        surface: new Float32Array(surfaces[index]),
        original: new Float32Array(originals[index]),
        separated: new Float32Array(separated[index]),
        doubled: new Float32Array(doubled[index]),
        color: new THREE.Color(piece.color),
        baseSize: material.size,
        splitQuaternion,
        splitTranslation: new THREE.Vector3(...piece.offset).multiplyScalar(1.15),
        finalQuaternion,
        finalTranslation: new THREE.Vector3(index < 2 ? -1.65 : 1.65, 0, 0),
      });
    });
  }

  rotatePoint(x, y, z, angleX, angleY) {
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const y1 = y * cosX - z * sinX;
    const z1 = y * sinX + z * cosX;
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    return {
      x: x * cosY + z1 * sinY,
      y: y1,
      z: -x * sinY + z1 * cosY,
    };
  }

  rotateAroundZ(x, y, z, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return { x: x * cos - y * sin, y: x * sin + y * cos, z };
  }

  bindEvents() {
    this.steps.forEach((step) => step.addEventListener("click", () => this.setStage(Number(step.dataset.stage))));
    this.prev.addEventListener("click", () => this.setStage(this.stage - 1));
    this.next.addEventListener("click", () => this.setStage(this.stage + 1));
    this.root.querySelector("[data-open-guide]").addEventListener("click", () => this.guide.showModal());
    this.root.querySelector(".guide__close").addEventListener("click", () => this.guide.close());
    this.root.querySelector("[data-restart]").addEventListener("click", () => {
      this.guide.close();
      this.setStage(0);
    });
    this.guide.addEventListener("click", (event) => {
      if (event.target === this.guide) this.guide.close();
    });
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("keydown", (event) => {
      if (this.guide.open) return;
      if (event.key === "ArrowRight") this.setStage(this.stage + 1);
      if (event.key === "ArrowLeft") this.setStage(this.stage - 1);
    });
    this.viewport.addEventListener("pointermove", (event) => {
      this.pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      this.pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    });
  }

  setStage(index, immediate = false) {
    this.stage = clamp(index, 0, STAGES.length - 1);
    if (immediate) this.visualStage = this.stage;
    const url = new URL(window.location.href);
    if (this.stage === 0) url.searchParams.delete("stage");
    else url.searchParams.set("stage", this.stage);
    window.history.replaceState({}, "", url);
    const content = STAGES[this.stage];
    this.numberEl.textContent = String(this.stage + 1).padStart(2, "0");
    this.kickerEl.textContent = content.kicker;
    this.titleEl.textContent = content.title;
    this.bodyEl.textContent = content.body;
    this.noteEl.textContent = content.note;
    this.keyEl.classList.toggle("is-visible", this.stage > 0);
    this.keyEl.classList.toggle("is-final", this.stage === STAGES.length - 1);
    this.cardEl.classList.toggle("is-final", this.stage === 2 || this.stage === STAGES.length - 1);
    this.steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === this.stage);
      step.classList.toggle("is-past", index < this.stage);
      step.setAttribute("aria-current", index === this.stage ? "step" : "false");
    });
    this.prev.disabled = this.stage === 0;
    this.next.disabled = this.stage === STAGES.length - 1;
    this.next.textContent = this.stage === STAGES.length - 1 ? "✓" : "→";
    if (this.stage === 2) this.cameraGoalDistance = this.choiceCameraDistance;
    else if (this.stage === STAGES.length - 1) this.cameraGoalDistance = this.finalCameraDistance;
    else this.cameraGoalDistance = this.baseCameraDistance;
    if (immediate) this.setCameraDistance(this.cameraGoalDistance);
    else this.cameraIsTweening = true;
  }

  setCameraDistance(distance) {
    const offset = this.camera.position.clone().sub(this.controls.target);
    if (offset.lengthSq() === 0) offset.set(0, 0, 1);
    offset.setLength(distance);
    this.camera.position.copy(this.controls.target).add(offset);
    this.controls.update();
  }

  updateGeometry() {
    const stage = this.visualStage;
    const segment = Math.min(Math.floor(stage), 3);
    const mix = ease(stage - segment);
    this.targetGuides.visible = stage > 3.35;
    this.targetGuides.children.forEach((guide) => {
      guide.scale.setScalar(clamp((stage - 3.25) / 0.75, 0, 1));
    });
    this.guideSphere.visible = stage < 3.7;
    if (this.guideSphere.visible) {
      const fade = stage > 3 ? 1 - (stage - 3) / 0.7 : 1;
      this.guideSphere.children.forEach((child) => (child.material.opacity = child.type === "LineLoop" ? 0.2 * fade : 0.09 * fade));
    }

    this.pieces.forEach((piece) => {
      const position = piece.points.geometry.attributes.position.array;
      const states = [piece.surface, piece.surface, piece.separated, piece.original, piece.doubled];
      const from = states[segment];
      const to = states[segment + 1];
      if (segment === 1 || segment === 3) {
        const base = segment === 1 ? piece.surface : piece.original;
        const targetQuaternion = segment === 1 ? piece.splitQuaternion : piece.finalQuaternion;
        const targetTranslation = segment === 1 ? piece.splitTranslation : piece.finalTranslation;
        const quaternion = new THREE.Quaternion().slerpQuaternions(new THREE.Quaternion(), targetQuaternion, mix);
        const point = new THREE.Vector3();
        for (let i = 0; i < position.length; i += 3) {
          point.set(base[i], base[i + 1], base[i + 2]).applyQuaternion(quaternion).addScaledVector(targetTranslation, mix);
          position[i] = point.x;
          position[i + 1] = point.y;
          position[i + 2] = point.z;
        }
      } else {
        for (let i = 0; i < position.length; i += 1) position[i] = from[i] + (to[i] - from[i]) * mix;
      }
      piece.points.geometry.attributes.position.needsUpdate = true;
      piece.points.material.color.copy(new THREE.Color("#e5d7ad")).lerp(piece.color, clamp(stage, 0, 1));
      piece.points.material.opacity = 0.7 + Math.min(stage, 1) * 0.18;
      const finale = clamp(stage - 3, 0, 1);
      piece.points.material.size = piece.baseSize * (1 + finale * (this.isNarrow ? 2.2 : 0.15));
    });
  }

  resize() {
    const { clientWidth, clientHeight } = this.viewport;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight, false);
  }

  animate() {
    const delta = Math.min(this.clock.getDelta(), 0.05);
    const speed = this.reducedMotion ? 10 : 2.6;
    this.visualStage += (this.stage - this.visualStage) * Math.min(1, delta * speed);
    if (Math.abs(this.stage - this.visualStage) < 0.001) this.visualStage = this.stage;
    this.updateGeometry();
    if (this.cameraIsTweening) {
      const distance = this.camera.position.distanceTo(this.controls.target);
      const nextDistance = distance + (this.cameraGoalDistance - distance) * Math.min(1, delta * 2.8);
      this.setCameraDistance(nextDistance);
      if (Math.abs(this.cameraGoalDistance - nextDistance) < 0.01) {
        this.setCameraDistance(this.cameraGoalDistance);
        this.cameraIsTweening = false;
      }
    }
    this.controls.update();
    if (!this.reducedMotion) {
      this.world.position.x += (this.pointer.x * 0.05 - this.world.position.x) * delta;
      this.world.rotation.x += (-this.pointer.y * 0.025 - this.world.rotation.x - 0.08) * delta;
    }
    this.renderer.render(this.scene, this.camera);
    this.frame = requestAnimationFrame(() => this.animate());
  }
}

new ParadoxLab(document.querySelector("#app"));
