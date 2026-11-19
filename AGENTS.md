<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Parlance Agent Guidelines

## Project Overview

Parlance — Speech/Text to Indian Sign Language (ISL) Translator. A Next.js 16 frontend-only application that converts spoken/typed English/Hindi into ISL gloss, signed by a 3D avatar (react-three-fiber/three.js).

## Key Commands

```bash
npm run dev          # Development server (Turbopack)
npm run build        # Production build
npm start            # Production server
npm run typecheck    # TypeScript strict check
npm test             # 164 tests (Node.js native runner)
npm run coverage:sign # ISL vocabulary coverage report
npm run check        # Full CI: coverage + typecheck + tests + build
```

## Architecture

- **App Router**: `app/` — pages, API routes, sign training/validation
- **Components**: `components/avatar/` (3D avatar, animations), `components/sign/` (recognition, training), `components/ui/` (shadcn)
- **Lib**: `lib/` — ISL translator, live speech, local auth, sign tracking (MediaPipe + k-NN/DTW)
- **Public Assets**: `public/models/` (ISL vocab, temporal forest, YBot GLB), `public/mediapipe/` (MediaPipe tasks + WASM)
- **Tests**: `test/` — 164 unit/integration tests

## Critical Files

- `app/page.tsx` — Main landing page (hero, ISL demo, how-it-works, impact, CTA)
- `components/avatar/AvatarPlayer.tsx` — 3D avatar rendering, animation queue
- `lib/islTranslator.ts` — Dual-engine translation (Gemini + offline fallback)
- `lib/sign/use-sign-mode.ts` — Sign mode state, camera, recognition loop
- `lib/sign/use-sign-recognition.ts` — Real-time sign classification

## Conventions

- **TypeScript strict**: All code must pass `tsc --noEmit`
- **Path aliases**: Use `@/` for internal imports (`@/lib/islTranslator`)
- **Client components**: Mark with `'use client'` only when needed (hooks, browser APIs)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion`
- **No backend**: No database, no auth server, no external API except optional Gemini

## Common Tasks

### Add a new ISL sign
1. Add animation to `components/avatar/animations/Words/`
2. Register in `components/avatar/animations/words.js`
3. Add gloss mapping in `components/avatar/textToGloss.js`
4. Run `npm run coverage:sign` to update coverage

### Modify translation logic
- Online: `app/api/translate-isl/route.ts` → calls `@google/genai`
- Offline: `lib/islTranslator.ts` + `components/avatar/textToGloss.js`

### Add sign recognition word
1. Record samples via `/sign/train`
2. Update `public/models/isl-samples.json`
3. Retrain: `npm run coverage:sign` (updates temporal forest)

## Testing

```bash
npm test                    # All tests
npm run test:sign           # Sign-specific tests
npm run test:app            # App/API tests
npm run test:browser        # Playwright browser tests
```

## Do Not

- Add backend/server code (API routes are frontend-only Next.js handlers)
- Commit `.env.local` or API keys
- Remove `prefers-reduced-motion` support
- Break TypeScript strict mode
- Modify `public/mediapipe/` WASM/binaries without updating `SIGNER-MODELS.md`