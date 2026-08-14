# One Becomes Two

### An interactive visual proof map of the Banach–Tarski paradox

[![Live experience](https://img.shields.io/badge/live-paradox.picinfiniti.net-e9c96f?style=flat-square)](https://paradox.picinfiniti.net)
[![Three.js](https://img.shields.io/badge/Three.js-181-8bd3b0?style=flat-square)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-58a6d8?style=flat-square)](https://vite.dev/)

**One Becomes Two** is an interactive Three.js essay about one of mathematics' most startling theorems: a solid ball can be partitioned into finitely many non-measurable sets and reassembled, using rigid motions alone, into two balls congruent to the first.

The experience is designed as a guided proof map rather than a magic trick. Its five stages follow the structure of the included self-contained paper, moving from free-group actions on the sphere to the radial construction on the solid ball.

**[Launch the experience →](https://paradox.picinfiniti.net)**

## The journey

| Stage | Idea | What the visualization represents |
| --- | --- | --- |
| **01 · Sphere** | Begin on the unit sphere $S^2$ | Rotations act on the surface without changing distance or shape. |
| **02 · Free rotations** | Embed $F_2$ into $SO(3)$ | Rotations $A$ and $B$ use orthogonal axes and $\theta=\arccos(1/3)$. |
| **03 · Choice** | Select one representative per orbit | The colored families symbolize $E_i\!\cdot M$ after removing the countable fixed-point set $D$. |
| **04 · Radial lift** | Extend the surface pieces into the ball | Each $A_i\subset S^2$ becomes $\widetilde A_i=\{rx:0<r\leq1\}$. |
| **05 · Decomposition** | Reassemble one ball as two | Whole colors move by one rotation and one translation; none is split or scaled. |

The final color allocation mirrors the free-group identities

$$
F_2=S(a)\cup aS(a^{-1}),
\qquad
F_2=S(b)\cup bS(b^{-1}).
$$

## Mathematical honesty

This is a finite visual analogy, not a literal construction of Banach–Tarski pieces.

The genuine sets are infinite, non-measurable, and distributed through the ball in a way that cannot be explicitly rendered or physically cut. The particles communicate the proof's relationships—word classes, orbits, radial extension, and rigid motions—while the in-app field guide explains where the analogy ends.

In particular:

- each color is treated as one whole set;
- the final reassembly uses rigid quaternion rotations and translations;
- the two target balls retain the original model radius;
- camera movement, rather than geometric scaling, keeps the construction visible on small screens;
- the exceptional countable sets and center point are described through the paper's equidecomposability argument.

## Source paper

The repository includes **[Banach–Tarski Paradox: a self-contained proof](./main.pdf)** by Mohammad Javad Moghaddas Mehr (2026).

The paper develops the construction through:

1. group actions, equidecomposability, and paradoxical decomposition;
2. a paradoxical decomposition of the free group $F_2$;
3. an embedding of $F_2$ into the rotation group $SO(3)$;
4. orbit representatives chosen with the axiom of choice;
5. removal and absorption of countable exceptional sets;
6. radial extension from $S^2$ to the closed unit ball.

The PDF is bundled with production builds and can be opened directly from the app's **Field guide**.

## Controls

- Select a numbered step or use the left and right arrow keys to move through the proof.
- Drag the scene to orbit around the construction.
- Scroll or pinch to zoom.
- Open **Field guide** for definitions, proof context, and the source paper.
- Individual stages can be linked with `?stage=0` through `?stage=4`.

Reduced-motion preferences are respected, and the explanatory interface remains usable on desktop and mobile layouts.

## Development

Requirements: a current Node.js release and npm.

```bash
git clone git@github.com:PicInfiniti/banach-tarski-paradox.git
cd banach-tarski-paradox
npm install
npm run dev
```

Create and inspect a production build:

```bash
npm run build
npm run preview
```

## Deployment

The project deploys the Vite production output to the `gh-pages` branch. The custom domain is configured through [`public/CNAME`](./public/CNAME).

```bash
npm run deploy
```

## Built with

- [Three.js](https://threejs.org/) for the particle geometry, rigid transforms, and orbit controls
- [Vite](https://vite.dev/) for development and production builds
- [Sass](https://sass-lang.com/) for the responsive visual system
- [`gh-pages`](https://github.com/tschaub/gh-pages) for publishing

---

Created as an invitation to explore the boundary between geometric intuition, measure, infinity, and choice.
