# One Becomes Two

An interactive visual essay about the Banach–Tarski paradox. The experience follows the included self-contained proof: a free subgroup of `SO(3)`, reduced-word classes in `F₂`, orbit representatives selected by the axiom of choice, removal of the countable fixed-point set, radial extension from `S²` to the ball, and the final paradoxical decomposition.

The visualization deliberately labels itself as a finite analogy: genuine Banach–Tarski pieces are infinitely intricate, non-measurable point sets and cannot be rendered or physically manufactured.

The source paper is included as [`main.pdf`](./main.pdf) and is available from the in-app field guide in production builds.

## Run locally

```sh
npm install
npm run dev
```

Create the production build with `npm run build`.

## Controls

- Use the numbered timeline or left/right arrow keys to move between stages.
- Drag the visualization to orbit and scroll to zoom.
- Open **Field guide** for a concise explanation of the theorem's assumptions and limits.
