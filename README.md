# SMOS - Resource Hub

A secure, login-protected resource hub for team members. Houses Loom videos, SOPs, downloadable resources, ticketing systems, and submission forms with a premium Notion/Whop-inspired interface.

## Features

- **Magic Link Authentication** — Passwordless login via email, invite-only access
- **Gallery Views** — Browse resources by contributor section or category
- **Loom Video Embedding** — Protected video players with copy deterrents
- **Ticketing System** — Copy review and tech support request tracking
- **Submission Forms** — Weekly call notes and rep hiring applications
- **Content Protection** — Disabled text selection, right-click prevention, no-index headers
- **Responsive Design** — Works on desktop, tablet, and mobile

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env

# 3. Set up the database
npx prisma db push

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). In dev mode (no `RESEND_API_KEY`), magic links are logged to the console.

## Configuration

### Adding Team Members

Edit `ALLOWED_EMAILS` in `.env`:

```
ALLOWED_EMAILS=andres@company.com,rene@company.com,virgile@company.com
```

### Adding/Editing Resources

All resources are defined in `src/data/resources.ts`. Each resource has:
- `id` — Unique identifier
- `title`, `description` — Display text
- `type` — `loom_video`, `document`, `download`, `external_link`, `course`, `ticket_system`, `submission_form`
- `contributor` — `andres`, `rene`, `virgile`, or `backend`
- `category` — Determines which category filter it appears under
- `url` / `loomUrl` / `content` — Type-specific content

Replace the `#` placeholder URLs with actual Loom/booking/download links.

### Email Setup (Production)

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day)
2. Verify your domain
3. Add `RESEND_API_KEY` and `EMAIL_FROM` to `.env`

## Deploy to Vercel

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. For database: Set up [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) or [Neon](https://neon.tech)
5. Update `prisma/schema.prisma` datasource to `postgresql`
6. Set `DATABASE_URL` in Vercel env vars

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — Premium UI with dark sidebar
- **Prisma + SQLite** (local) / **PostgreSQL** (production)
- **jose** — JWT signing for magic links and sessions
- **Resend** — Transactional email delivery
- **lucide-react** — Icon library
