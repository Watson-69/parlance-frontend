# Changelog

All notable changes to Parlance are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-11-19

### Added
- Initial Parlance release (rebrand from Yap & Render)
- 3D ISL avatar with per-word/per-letter animations (26 letters + 164 words)
- Dual translation engines: Google Gemini (online) + rule-based fallback (offline)
- Live speech input via Web Speech API (English/Hindi)
- Quick-phrase chips for common signs (YOU, HOME, HELLO, THANK YOU, etc.)
- Camera-based sign recognition (MediaPipe hands + k-NN/DTW classifiers)
- Sign training studio (record personal vocabulary)
- Sign validation studio (test recognition accuracy)
- Real-time transcript with undo/backspace/clear
- Local auth (sign up/in, profiles stored in localStorage)
- Full accessibility: semantic HTML, ARIA, keyboard navigation, reduced-motion
- 164 passing tests (unit + integration)
- Vocabulary coverage reporting (164 words, 26 letters, 10 digits)

### Tech Stack
- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript 5.7
- Tailwind CSS 4, shadcn/ui, Motion
- react-three-fiber / three.js for 3D avatar
- MediaPipe Tasks Vision (hand/gesture/pose)
- Google Gemini API (@google/genai) with offline fallback
- Node.js native test runner, Playwright

### Changed
- Rebranded from "Yap & Render" to "Parlance" across all UI, metadata, assets
- New Parlance logo (SVG) replacing old PNG mark
- Updated all docs, README, AGENTS.md with Parlance branding

### Fixed
- TypeScript strict mode compliance across entire codebase
- Duplicate `features` declaration in page.tsx
- JSX syntax error in AboutDialog (`</motion.p>otion.div>`)

## [Unreleased]

### Planned
- Dark mode theme toggle
- Hindi speech-to-gloss improvements
- Offline-first service worker
- Export/import personal vocabulary
- Mobile PWA support
- Multi-user rooms (WebRTC signaling)

---

*For detailed commit history, see `git log --oneline`.*