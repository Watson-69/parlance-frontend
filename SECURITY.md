# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in Parlance, please report it responsibly:

1. **Email**: security@parlance.example.com (or open a private GitHub Security Advisory)
2. **Do not** open a public issue for security vulnerabilities
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We aim to acknowledge reports within 48 hours and provide a fix timeline within 7 days.

## Security Considerations

### Client-Side Only
Parlance is a **frontend-only** application:
- No backend server, database, or API authentication
- All processing (translation, recognition, avatar) runs in the browser
- User data (profiles, recordings) stored only in localStorage on the user's device
- No data transmitted to external servers except optional Gemini API calls

### Gemini API Key
- Stored only in `.env.local` (never committed)
- Used server-side in Next.js API routes (`app/api/translate-isl/route.ts`)
- Never exposed to client bundle

### MediaPipe Models
- Loaded from `/public/mediapipe/` (static assets)
- No external model loading at runtime
- WASM binaries served from same origin

### localStorage
- User profiles: name, email, password hash (bcrypt)
- Personal sign recordings: base64-encoded landmark data
- No sensitive PII beyond what user provides

## Dependencies

Run `npm audit` regularly. Critical/high vulnerabilities in dependencies are addressed promptly. Current policy: no known critical vulnerabilities in production dependencies.

## Content Security Policy

Next.js default CSP applies. For stricter CSP, configure `next.config.mjs` with `Content-Security-Policy` header.