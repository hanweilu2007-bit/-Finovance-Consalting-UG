# PostgreSQL database connection (required)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE

# Use long, unique random values. Never commit real secrets to GitHub.
SESSION_SECRET=replace-with-at-least-32-random-characters
ADMIN_SECRET=replace-with-a-strong-admin-password

# OpenAI / Replit AI integration
AI_INTEGRATIONS_OPENAI_API_KEY=
AI_INTEGRATIONS_OPENAI_BASE_URL=
OPENAI_MODEL=gpt-5.2

# Human handoff email
HUMAN_HANDOFF_EMAIL=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=

# Runtime
PORT=5000
NODE_ENV=development
