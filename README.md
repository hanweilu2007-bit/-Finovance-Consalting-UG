# Finovance Consulting Website

A trilingual full-stack website built with React, TypeScript, Express, PostgreSQL, and Drizzle ORM.

## Local setup

1. Copy `.env.example` to `.env`.
2. Fill in `DATABASE_URL`, `SESSION_SECRET`, and `ADMIN_SECRET`.
3. Add OpenAI and SMTP values only when those features are needed.
4. Install dependencies:

```bash
npm install
```

5. Create/update the database tables:

```bash
npm run db:push
```

6. Start the development server:

```bash
npm run dev
```

The website normally runs on `http://localhost:5000`.

## Required environment variables

- `DATABASE_URL`: PostgreSQL connection string.
- `SESSION_SECRET`: encrypts administrator session cookies. Use at least 32 random characters.
- `ADMIN_SECRET`: password used to sign in to `/admin`.

## Optional integrations

- `AI_INTEGRATIONS_OPENAI_API_KEY`: enables AI chatbot answers.
- `AI_INTEGRATIONS_OPENAI_BASE_URL`: optional custom OpenAI-compatible endpoint.
- `OPENAI_MODEL`: defaults to `gpt-5.2`.
- `HUMAN_HANDOFF_EMAIL`: recipient for human-service requests.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`: email delivery settings.

## Security notes

- Never put API keys, database passwords, or administrator secrets directly in source files.
- Never upload `.env` files to GitHub.
- Contact-form consent is validated again on the server.
- API logs contain request metadata only, not response bodies or customer details.
- Chat messages are rate-limited and bound to the browser's chat session ID.
- Administrator access uses an HTTP-only server session and expires after eight hours.
- The current rate limiter is stored in application memory. For multiple server instances, replace it with a shared Redis-backed limiter.

## Production checklist

Before public launch:

- Complete and legally review `Impressum` and `Datenschutz`.
- Configure a production PostgreSQL database and backups.
- Set all secrets in the hosting platform's secret manager.
- Test contact form, administrator login/logout, AI limits, and human handoff.
- Confirm the hosting provider and OpenAI/SMTP data-processing details in the privacy notice.
