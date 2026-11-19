# Parlance — Speech/Text to Indian Sign Language (ISL) Translator

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)
![Tests](https://img.shields.io/badge/tests-164%20passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Parlance converts spoken or typed English/Hindi into Indian Sign Language, signed live by a 3D avatar in the browser. Built for accessibility-first communication.

## Demo

[![Parlance demo: typed English is translated to ISL gloss and signed by the 3D avatar](docs/demo/parlance-demo.gif)](docs/demo/parlance-demo.mp4)

▶ **[Watch the full demo video (MP4, 2 min)](docs/demo/parlance-demo.mp4)** — typing sentences, quick signs, A–Z fingerspelling for unknown words, switching to the Human avatar, and the full-canvas view. Recorded with the built-in offline translator (no API key required).

## How it works

- **Input**: live speech (Web Speech API streaming) or typed text.
- **Translation**: `app/api/translate-isl` calls Google Gemini to convert text into ISL gloss. If no `GEMINI_API_KEY` is set (or the API is unreachable), the app falls back to an offline rule-based gloss engine (`lib/islTranslator.ts`, `components/avatar/textToGloss.js`).
- **Signing**: the gloss sequence drives a 3D avatar (`components/avatar/AvatarPlayer.tsx`) built with `react-three-fiber` / `three.js`, playing per-word/per-letter sign animations (including first-person signs and fingerspelling for unknown words).

## Architecture

<a href="docs/architecture/parlance-architecture-walkthrough.mp4">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/architecture/parlance-architecture-trace-dark.gif" />
    <img src="docs/architecture/parlance-architecture-trace-light.gif" alt="Parlance runtime architecture: browser input and translation, the Next.js API route, and the Gemini fallback path" width="900" />
  </picture>
</a>

Generated with [Archify](https://github.com/tt-a1i/archify) from this repository's source. Every component and arrow cites the file and line range it comes from, and the diagram passed Archify's validation and real-browser checks.

- ▶ **[Watch the walkthrough (MP4, 51 s)](docs/architecture/parlance-architecture-walkthrough.mp4)**: source passports, downstream reach, the Translator UI → Gemini path, lenses and themes.
- **[Interactive diagram](docs/architecture/parlance.html)**: download it and open it in a browser to click components, trace paths and export PNG/SVG.
- Static exports: [light PNG](docs/architecture/parlance-architecture-light.png) · [dark PNG](docs/architecture/parlance-architecture-dark.png) · typed source: [`parlance.architecture.json`](docs/architecture/parlance.architecture.json)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional: copy `.env.example` to `.env.local` and set `GEMINI_API_KEY` (get one at https://aistudio.google.com/apikey) to enable the online translator. Without it, the app still works via the offline fallback.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run typecheck` | TypeScript type checking |
| `npm test` | Run all 164 tests |
| `npm run coverage:sign` | Generate ISL vocabulary coverage report |
| `npm run check` | Full CI pipeline (coverage + typecheck + tests + build) |

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS 4, shadcn/ui, Motion
- **3D**: react-three-fiber, three.js, @react-three/drei
- **ML/Computer Vision**: MediaPipe (hand/gesture/pose), @mediapipe/tasks-vision
- **AI**: Google Gemini API (@google/genai)
- **Testing**: Node.js native test runner, Playwright

## Project Structure

- `app/` — Next.js App Router pages and API routes
- `components/avatar/` — 3D avatar, sign animations, gloss/text conversion
- `components/sign/` — Camera-based sign recognition, training studio, validation
- `components/ui/` — Base UI components (shadcn)
- `lib/` — ISL translation logic, vocabulary, live speech, local auth, sign tracking
- `scripts/` — Vocabulary coverage generation, evaluation, data prep
- `test/` — Unit and integration tests for translation, recognition, auth
- `public/models/` — ISL vocabulary, temporal forest, word samples, YBot GLB
- `public/mediapipe/` — MediaPipe task files and WASM binaries

## Accessibility

- Semantic HTML5, ARIA labels throughout
- Keyboard-operable controls, visible focus states
- `prefers-reduced-motion` support (disables marquee, scroll animations, pulse effects)
- Sufficient contrast (cream/dark theme)
- Skip-to-content link, live regions for avatar status

