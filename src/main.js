import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./assets/sass/main.sass";

const STAGES = [
  {
    kicker: "Begin with the ordinary",
    title: "A solid sphere",
    body: "Imagine an ideal mathematical ball—not atoms, not clay, but the infinite set of all points inside a sphere.",
    note: "The theorem lives in pure geometry. Physical matter is finite and cannot behave this way.",
  },
  {
    kicker: "The hidden structure",
    title: "Sort points by orbit",
    body: "Rotations generate families of related points. With the axiom of choice, one representative can be selected from each family and gathered into a handful of sets.",
    note: "Each colored set is scattered everywhere. It is not a tidy peel, wedge, or chunk you could manufacture.",
  },
  {
    kicker: "The counterintuitive cut",
    title: "Five wild pieces",
    body: "The ball is partitioned into five non-measurable sets. They have no consistently defined ordinary volume, so “the volumes must add up” no longer applies.",
    note: "This finite point cloud is only a metaphor. A true Banach–Tarski piece cannot be drawn point-by-point.",
  },
  {
    kicker: "Rigid motions only",
    title: "One becomes two",
    body: "Rotate and translate those same sets—without stretching—and they can be reassembled into two balls, each congruent to the original.",
    note: "No matter is created. The surprise comes from infinite sets, non-measurability, and the axiom of choice.",
  },
];

const PIECES = [
  { name: "α", color: "#ff6b4a", offset: [-1.2, 0.65, 0.1] },
  { name: "β", color: "#f7c455", offset: [-0.7, -0.85, 0.35] },
  { name: "γ", color: "#8bd3b0", offset: [0.05, 1.05, -0.25] },
  { name: "δ", color: "#58a6d8", offset: [0.85, -0.7, 0.2] },
  { name: "ε", color: "#bd8ce6", offset: [1.2, 0.55, -0.2] },
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
            <article><span>01 / Claim</span><h3>Duplication without scaling</h3><p>A three-dimensional ball can be divided into five disjoint sets and moved by rotations and translations to form two balls identical to the first.</p></article>
            <article><span>02 / Escape hatch</span><h3>Volume is not defined</h3><p>The pieces are non-measurable. Asking for their individual volumes is not difficult—it is mathematically invalid under the usual notion of volume.</p></article>
            <article><span>03 / Engine</span><h3>The axiom of choice</h3><p>The construction selects representatives from infinitely many orbits. This choice principle guarantees the sets exist without giving a practical recipe for listing their points.</p></article>
            <article><span>04 / Boundary</span><h3>Not a physical process</h3><p>Real objects contain finitely many atoms. The theorem applies to ideal point sets and uses discontinuous, infinitely intricate pieces that no blade could cut.</p></article>
          </div>
          <footer><span>Stefan Banach &amp; Alfred Tarski · 1924</span><button data-restart>Replay the idea →</button></footer>
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
    this.keyEl = this.root.querySelector(".piece-key");
    this.steps = [...this.root.querySelectorAll(".stage-step")];
    this.prev = this.root.querySelector(".stage-prev");
    this.next = this.root.querySelector(".stage-next");
    this.guide = this.root.querySelector(".guide");
  }

  setupScene() {
    this.scene = new THREE.Scene();
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
    this.controls.maxDistance = 8;
    this.controls.autoRotate = !this.reducedMotion;
    this.controls.autoRotateSpeed = 0.32;

    this.world = new THREE.Group();
    this.world.rotation.set(-0.08, -0.28, 0.04);
    this.scene.add(this.world);

    this.guideSphere = this.makeGuideSphere(1.52);
    this.world.add(this.guideSphere);

    this.isNarrow = window.innerWidth < 700;
    this.targetGuides = new THREE.Group();
    const targetRadius = this.isNarrow ? 0.5 : 1.18;
    const targetOffset = this.isNarrow ? 0.5 : 1.42;
    this.targetGuides.add(this.makeGuideSphere(targetRadius, -targetOffset), this.makeGuideSphere(targetRadius, targetOffset));
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
      const hash = Math.abs(Math.sin(x * 91.7 + py * 117.3 + z * 73.9) * 43758.5453);
      const pieceIndex = Math.floor((hash % 1) * PIECES.length);
      const piece = PIECES[pieceIndex];
      originals[pieceIndex].push(x, py, z);
      separated[pieceIndex].push(x * 0.8 + piece.offset[0], py * 0.8 + piece.offset[1], z * 0.8 + piece.offset[2]);

      const side = ((i * 31 + pieceIndex * 7) % 11) < 5 ? -1 : 1;
      const angle = (pieceIndex - 2) * 0.48 * side;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const tx = x * cos - z * sin;
      const tz = x * sin + z * cos;
      const targetScale = this.isNarrow ? 0.33 : 0.77;
      const targetCenter = this.isNarrow ? 0.5 : 1.42;
      doubled[pieceIndex].push(tx * targetScale + side * targetCenter, py * targetScale, tz * targetScale);
    }

    PIECES.forEach((piece, index) => {
      const geometry = new THREE.BufferGeometry();
      const current = new Float32Array(originals[index]);
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
      this.pieces.push({
        points,
        original: new Float32Array(originals[index]),
        separated: new Float32Array(separated[index]),
        doubled: new Float32Array(doubled[index]),
        color: new THREE.Color(piece.color),
      });
    });
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
    this.steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === this.stage);
      step.classList.toggle("is-past", index < this.stage);
      step.setAttribute("aria-current", index === this.stage ? "step" : "false");
    });
    this.prev.disabled = this.stage === 0;
    this.next.disabled = this.stage === STAGES.length - 1;
    this.next.textContent = this.stage === STAGES.length - 1 ? "✓" : "→";
  }

  updateGeometry() {
    const stage = this.visualStage;
    const segment = Math.min(Math.floor(stage), 2);
    const mix = ease(stage - segment);
    this.targetGuides.visible = stage > 2.35;
    this.targetGuides.children.forEach((guide) => {
      guide.scale.setScalar(clamp((stage - 2.25) / 0.75, 0, 1));
    });
    this.guideSphere.visible = stage < 2.7;
    if (this.guideSphere.visible) {
      const fade = stage > 2 ? 1 - (stage - 2) / 0.7 : 1;
      this.guideSphere.children.forEach((child) => (child.material.opacity = child.type === "LineLoop" ? 0.2 * fade : 0.09 * fade));
    }

    this.pieces.forEach((piece) => {
      const position = piece.points.geometry.attributes.position.array;
      let from = piece.original;
      let to = piece.original;
      if (segment === 1) to = piece.separated;
      if (segment === 2) {
        from = piece.separated;
        to = piece.doubled;
      }
      for (let i = 0; i < position.length; i += 1) position[i] = from[i] + (to[i] - from[i]) * mix;
      piece.points.geometry.attributes.position.needsUpdate = true;
      piece.points.material.color.copy(new THREE.Color("#e5d7ad")).lerp(piece.color, clamp(stage, 0, 1));
      piece.points.material.opacity = 0.7 + Math.min(stage, 1) * 0.18;
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
