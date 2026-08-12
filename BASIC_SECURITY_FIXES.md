# Basic security fixes applied

## Contact form

- Privacy consent and disclaimer acceptance are enforced on the server after boolean normalization.
- A maximum of five contact submissions per IP per hour is applied.
- The API returns only the new record ID and creation time, not the customer's personal data.

## Logging and headers

- API response bodies are no longer written to server logs.
- Error responses do not expose internal server error details.
- Basic security, privacy, and no-index headers are added.
- JSON and URL-encoded request bodies are limited to 100 KB.

## Chatbot

- A chat message must match both the database conversation ID and the browser's session ID.
- Message length is limited to 2,000 characters.
- IP and conversation rate limits reduce automated OpenAI cost abuse.
- Only the latest 20 messages are sent to the model.
- The OpenAI model and human handoff email are configured through environment variables.
- User-generated text is HTML-escaped before being inserted into handoff emails.

## Administrator area

- The administrator password is sent only to the login endpoint.
- Successful login creates an HTTP-only, same-site server session.
- Sessions expire after eight hours and can be explicitly logged out.
- Login attempts are rate-limited.
- Delete operations require browser confirmation.
- Admin pages and APIs receive no-index/no-store headers.

## Configuration

- Added `.env.example`, an expanded `.gitignore`, and setup/security instructions in `README.md`.
- Removed the unused `zod-validation-error` dependency.

## Remaining production work

- Replace the in-memory rate limiter with Redis when running multiple server instances.
- Complete and legally review Impressum and Datenschutz.
- Run integration tests against the actual production PostgreSQL, OpenAI, and SMTP configurations.
