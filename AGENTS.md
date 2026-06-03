# AGENTS.md

## Project overview

Single-page static institutional website for CLP Advocacia Estratégica (Cristina Loschiavo Pepino). No framework, no build pipeline — the entire site lives in `index.html`.

## Architecture

- **Single file:** `index.html` contains all HTML, CSS (in a `<style>` block), and JS (in a `<script>` block at the end of `<body>`).
- **No dependencies:** No npm packages, no bundler. Google Fonts are loaded via CDN `<link>` tags.
- **Netlify deploy:** `netlify.toml` sets `publish = "."` so Netlify serves the repo root directly.

## Key sections (by anchor ID)

| ID           | Section           |
|--------------|-------------------|
| `#sobre`     | About / profile   |
| `#atuacao`   | Practice areas    |
| `#trajetoria`| Career timeline   |
| `#formacao`  | Education         |
| `#contato`   | Contact / CTA     |

## Design system

CSS custom properties in `:root` define the full palette:
- `--green-900/800/700/600` — background greens
- `--gold-300/400/500/600` — gold accent scale
- `--cream` — primary text color
- `--ink` — darkest background (footer)

`.gold-text` applies a gradient via `background-clip: text`.

`.reveal` + `.reveal.in` drive scroll-triggered fade-up animations via `IntersectionObserver`.

## Conventions

- All content is in Brazilian Portuguese.
- Contact phone numbers use Brazilian format (+55 11 …).
- WhatsApp links use `https://wa.me/<number>` format.
- Responsive breakpoint: `@media(max-width:900px)`.
