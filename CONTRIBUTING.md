# Contributing to Parlance

Thank you for your interest in contributing to Parlance! This guide will help you get started.

## Development Setup

```bash
# Clone the repository
git clone https://github.com/Watson-69/parlance-frontend.git
cd parlance-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Code Style

- **TypeScript**: Strict mode enabled. All new code must pass `npm run typecheck`.
- **Formatting**: Follow existing code style. No separate formatter config — consistency over preference.
- **Imports**: Use `@/` path aliases for internal imports (e.g., `@/lib/islTranslator`).
- **Components**: Prefer server components by default. Mark client components with `'use client'` only when needed.

## Testing

Run the full test suite before submitting:

```bash
npm test              # All 164 tests
npm run typecheck     # TypeScript validation
npm run build         # Production build verification
npm run check         # Full CI pipeline (coverage + typecheck + tests + build)
```

### Test Structure

- `test/app-*.test.cjs` — API routes, avatar, speech, translation
- `test/sign-*.test.cjs` — ISL translation, recognition, training, validation
- `test/browser/` — Playwright browser tests

## Pull Request Process

1. **Fork** the repository and create a feature branch
2. **Write tests** for new functionality
3. **Ensure all checks pass**: `npm run check`
4. **Update documentation** if behavior changes
5. **Submit PR** with a clear description of changes

### Commit Guidelines

- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`
- Keep commits atomic and focused
- Reference issues in commit messages when applicable

## Key Areas for Contribution

- **ISL Vocabulary**: Add missing signs, improve gloss mappings
- **Avatar Animations**: New word animations, smoother transitions
- **Sign Recognition**: Improve accuracy, add new word models
- **Accessibility**: Enhanced keyboard navigation, screen reader support
- **Performance**: Bundle size, animation frame rate, startup time

## Reporting Issues

Use the GitHub issue tracker. Include:
- Clear reproduction steps
- Expected vs actual behavior
- Browser/OS version
- Relevant logs or screenshots

## Code of Conduct

Be respectful, inclusive, and constructive. We follow the [Contributor Covenant](https://www.contributor-covenant.org/).