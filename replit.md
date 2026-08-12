# Finovance Consulting

## Overview

A bilingual (Chinese/German) financial consulting website for Finovance Consulting, targeting high-net-worth Chinese clients in Germany. The application provides information about financial services (private health insurance, mortgages, pensions, corporate services) and captures leads through a contact form. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for page transitions
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: REST endpoints defined in `shared/routes.ts` with Zod schemas for type-safe contracts
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

### Data Storage
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` defines tables using Drizzle
- **Current Tables**: `leads`, `conversations`, `messages`, `knowledge_base`
- **Migrations**: Managed via `drizzle-kit push` command

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Database table definitions and Zod validation schemas
- `routes.ts`: API contract definitions with paths, methods, and response types

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Client built to `dist/public`, server bundled with esbuild to `dist/index.cjs`
- The build script (`script/build.ts`) bundles specific dependencies to reduce cold start times

### Key Design Decisions

1. **Trilingual Content**: Primary content in Chinese, English, and German; German legal pages (Impressum, Datenschutz) for GDPR compliance
2. **Type-Safe API Contracts**: Zod schemas in `shared/routes.ts` ensure frontend and backend stay in sync
3. **Component Library**: shadcn/ui provides accessible, customizable components with Radix UI primitives
4. **Font Strategy**: Noto Sans SC and Noto Serif SC for optimal Chinese character rendering

## External Dependencies

### Database
- **PostgreSQL**: Required, connection via `DATABASE_URL` environment variable
- **Session Storage**: `connect-pg-simple` for PostgreSQL-backed sessions

### UI Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, select, tabs, etc.)
- **shadcn/ui**: Pre-built components in `client/src/components/ui/`

### Development Tools
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, cartographer, dev-banner for enhanced Replit development experience

### AI Chatbot System
- **AI Provider**: OpenAI via Replit AI Integrations (GPT-5.2)
- **Chat Widget**: Floating widget in bottom-right corner (`client/src/components/ChatWidget.tsx`)
- **Backend**: `server/chatbot.ts` handles sessions, streaming responses, knowledge base search, human handoff
- **Knowledge Base Admin**: `/admin` page using an HTTP-only server session after authentication with `ADMIN_SECRET`
- **Human Handoff**: Detects keywords like "人工", "human", "Berater" and sends email notification via nodemailer
- **Email**: Handoff recipient is configured with `HUMAN_HANDOFF_EMAIL`

### Required Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for application to start)
- `ADMIN_SECRET`: Secret token for admin knowledge base management (required for /admin access)
- `SESSION_SECRET`: Session encryption key (required in production)
- `HUMAN_HANDOFF_EMAIL`: Optional recipient for human handoff notifications
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`: Optional email settings