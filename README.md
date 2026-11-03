# 🌐 World Leaders Showdown — Global Rumble

A free, original, lighthearted **2D cartoon fighting game** featuring satirical portrayals of internationally known political figures. Built using HTML5 Canvas, CSS, and vanilla JavaScript.

## Play

[Play World Leaders Showdown](https://yashvinodbhaipatel.github.io/world-leaders-showdown/), or open `index.html` in a browser.

## Characters

- Donald Trump 🇺🇸
- Narendra Modi 🇮🇳
- Vladimir Putin 🇷🇺
- Giorgia Meloni 🇮🇹
- Emmanuel Macron 🇫🇷
- Xi Jinping 🇨🇳

## Arcade edition (0.2)\n\nA new illustrated roster, live versus preview, immersive arena layout, full-screen button, landscape phone controls, animated fighting stances, attack trails, hit-stop, combo feedback and short attack buffering. The original six leaders, three arenas and politically neutral parody remain.\n\n## Features

- Six original illustrated caricatures with animated procedural bodies
- 3 stages: New York, Delhi and Rome
- 3 CPU difficulty levels
- Punch, kick, grab, super moves, jump, duck and blocking
- Health and energy bars, timers, hit particles and sound
- Responsive layout with touch-friendly controls
- No build step, account, or third-party game engine required; keep `assets/leaders.png` alongside `index.html`

## Controls

| Action | Keyboard | Mobile |
|---|---|---|
| Walk | A / D or ← / → | Direction buttons |
| Jump | W / ↑ | ▲ |
| Duck | S / ↓ | ▼ |
| Punch | J | PUNCH |
| Kick | K | KICK |
| Grab | I | GRAB |
| Super | L or Space | SUPER (requires full blue energy bar) |
| Pause | Esc | PAUSE |

Choose **CHOOSE YOUR FIGHTER** or **CHOOSE CPU**, then select a portrait. Shift-click and right-click remain available for CPU selection. Hold away from the opponent to block; grabs bypass blocking. Super requires a full blue meter.

## Deployment

This is a static HTML game. To publish with GitHub Pages:

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose the default branch (`main`), folder **/(root)**, then **Save**.
4. After GitHub processes the deployment, open https://yashvinodbhaipatel.github.io/world-leaders-showdown/ .

No GitHub Actions or build configuration is required.

## Release

`v0.1.0` — initial playable release. Original procedural artwork, non-graphic combat and equal character stats.\n\n## Validation\n\nRun `node test.cjs` (Node.js 18+) for gameplay regression checks: countdown, hit damage, single-hit attacks, block/grab, super meter, collisions, movement/pause, knockout/rematch, roster, stages and CPU difficulties. No packages are required.\n\nBrowser checks covered desktop canvas rendering, keyboard and pointer controls, CPU selection, pause, and a 390px mobile layout. These checks do not substitute for testing every physical phone or browser.

## Disclaimer

This game contains fictional caricatures for entertainment and political satire. It is not endorsed by, affiliated with, or sponsored by the political figures, governments, organizations, or parties depicted. The portrayals and gameplay do not constitute factual claims about any individual.

## License

The source code is available in this repository. The character atlas was created with built-in image generation for this project. Bodies and arenas are drawn procedurally. No FightKaro code or assets are included. See [ARTWORK.md](ARTWORK.md) for provenance.
