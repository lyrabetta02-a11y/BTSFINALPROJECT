# AI Coding Guidelines for PT Benua Teknik Solusindo Website

## Architecture Overview
This is a full-stack TypeScript web application with separate client (React/Vite) and server (Express) components. The client serves a company website for HVAC services with multi-language support (English/Indonesian).

## Key Technologies & Patterns
- **Frontend**: React 19 + Vite, shadcn/ui components, Tailwind CSS, Framer Motion animations
- **Backend**: Express.js with custom routing, PostgreSQL + Drizzle ORM
- **State Management**: TanStack Query for server state, custom LanguageContext for i18n
- **Routing**: Wouter for client-side navigation
- **Build**: Custom esbuild script bundles client and server separately

## Development Workflow
- `npm run dev` - Runs server with Vite dev middleware (port 5000)
- `npm run dev:client` - Runs standalone Vite dev server
- `npm run build` - Builds both client and server to `dist/`
- `npm run db:push` - Applies database schema changes via Drizzle
- `npm run check` - TypeScript type checking

## Code Organization
- **Client Components**: `client/src/components/` - Grouped by feature (home/, layout/, projects/)
- **Pages**: `client/src/pages/` - Route components (Home, Projects, Contact)
- **Shared Schema**: `shared/schema.ts` - Database tables and Zod schemas
- **Translations**: `client/src/lib/translations.ts` - Nested key structure for i18n
- **UI Components**: `client/src/components/ui/` - shadcn/ui library components

## Translation System
Use `useLanguage()` hook and `t()` function for all user-facing text:
```tsx
const { t } = useLanguage();
// Access nested keys: t("hero.title"), t("services.items.installation.title")
```

## Component Patterns
- Wrap interactive elements with `motion.div` from Framer Motion for animations
- Use shadcn/ui components from `@/components/ui/` with consistent styling
- Follow Tailwind utility-first approach with custom CSS variables for theming
- Import images from `@assets/` alias for generated/attached assets

## Database & API
- Define schemas in `shared/schema.ts` using Drizzle table builders
- Use `storage` interface in `server/routes.ts` for CRUD operations
- API routes prefixed with `/api` are auto-logged with timing

## File Structure Conventions
- Server files: `server/` directory with index.ts, routes.ts, static.ts
- Client root: `client/src/` with App.tsx as entry
- Shared code: `shared/` for cross-runtime schemas
- Build output: `dist/` with bundled server and client assets

## Deployment
- Production serves static client files via Express
- Environment variables: `DATABASE_URL`, `PORT` (defaults to 5000)
- Vercel configuration in `vercel.json` for deployment</content>
<parameter name="filePath">c:\Users\user\Documents\website BTS\ptbenuatekniksolusindo(1)\ptbenuatekniksolusindo\.github\copilot-instructions.md