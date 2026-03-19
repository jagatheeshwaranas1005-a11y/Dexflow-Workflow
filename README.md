# DexFlow – Ad Production Workflow

A professional ad production workflow management system with role-based access for **Artists**, **Proofers**, **Supervisors**, and **Admins**.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Backend/DB**: Supabase (PostgreSQL)
- **Hosting**: Cloudflare Pages

## Features

- 🎨 **Artist** — Submit ads, view errors, raise appeals, manage queries
- 🔍 **Proofer** — QC audit with Yes/N/A checklist, manage queries
- 📋 **Supervisor** — Review appeals, resolve queries, view all errors
- ⚙️ **Admin** — Dashboard analytics, reports, user management, configuration

## Local Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## Database Setup

Run the `supabase_schema.sql` file in your Supabase SQL editor to set up all required tables.

## Deployment (Cloudflare Pages)

1. Push code to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variables: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
