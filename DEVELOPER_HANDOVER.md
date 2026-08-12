# Finovance Website — Developer Handover

Date: 2026-08-12

This archive is the latest full source package provided for second-stage development.
It includes the original project plus the security and baseline maintenance changes completed in the previous review.

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Node.js + Express 5 + TypeScript
- PostgreSQL + Drizzle ORM
- Multilingual UI: Chinese / German / English
- OpenAI-based chatbot integration

## Baseline fixes already included
- Server-side enforcement of privacy/disclaimer consent for lead submissions
- Reduced exposure of personal data in API responses and server logs
- Rate limiting for lead and chatbot endpoints
- Chat session ownership validation using conversation ID + browser session identifier
- Admin authentication moved to server-side cookie sessions
- Admin logout and login throttling
- Safer human-handoff email handling and HTML escaping
- Environment-variable based configuration for secrets and AI model
- Expanded .gitignore for local environment files and logs
- Added .env.example, README.md and BASIC_SECURITY_FIXES.md

## Important environment variables
See `.env.example`. At minimum, configure:
- DATABASE_URL
- SESSION_SECRET
- ADMIN_SECRET

For AI chatbot:
- AI_INTEGRATIONS_OPENAI_API_KEY
- AI_INTEGRATIONS_OPENAI_BASE_URL
- OPENAI_MODEL

For email handoff:
- HUMAN_HANDOFF_EMAIL
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- SMTP_FROM

Do not commit real credentials to GitHub.

## Before production deployment
1. Install dependencies with the intended Node/npm environment.
2. Run TypeScript checks and production build.
3. Configure the production PostgreSQL database and run required migrations.
4. Verify all legal-page placeholders (Impressum / Datenschutz) with the business owner.
5. Test contact form, admin login/logout, chatbot, rate limiting and email handoff end-to-end.
6. Review hosting, OpenAI and email data-processing requirements for GDPR compliance.

## Existing documentation
- `README.md` — project setup and run instructions
- `BASIC_SECURITY_FIXES.md` — details of the baseline security changes
- `.env.example` — required environment variable template

This package intentionally does not contain real passwords, API keys, production `.env` files, or `node_modules`.
