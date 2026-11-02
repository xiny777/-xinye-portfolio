# Xin Ye — Personal Tech & Data Portfolio

A starter portfolio built with Next.js (App Router), TypeScript and custom CSS, configured as a fully **static export** for Cloudflare Pages.

## What's included

- Responsive homepage with selected projects, about and contact sections.
- Case study for the existing public `ai-procurement-workflow` repository.
- Explicitly labelled *in preparation* page for the local AI content generator.
- Responsive navigation, metadata, accessible link labels and a favicon.
- No paid services, API keys, or backend required.

## Local setup (Windows CMD / PowerShell)

Install Node.js LTS first. From inside the extracted project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before you share the site, edit the personal introduction and confirm project descriptions.

## Test the static build

```bash
npm run lint
npm run build
```

Output is in `out/`. The site is ready for Cloudflare Pages once the build succeeds.

## Publish to GitHub

1. Go to https://github.com/new and create a **public**, empty repository called `xinye-portfolio` (no README or .gitignore at creation).
2. Run these commands from the extracted project folder:

```bash
git init
git add .
git commit -m "Initial tech portfolio"
git branch -M main
git remote add origin https://github.com/xiny777/xinye-portfolio.git
git push -u origin main
```

If Git asks for your identity, set `git config --global user.name "Your Name"` and `git config --global user.email "your-github-email"`, then retry. GitHub authentication may require signing in via the browser or Git Credential Manager.

## Deploy to Cloudflare Pages

1. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Import an existing Git repository.
2. Select `xiny777/xinye-portfolio`.
3. Select **Next.js (Static HTML Export)**.
4. Production branch: `main`; build command: `npx next build`; build output: `out`.
5. Once the `*.pages.dev` URL works, go to **Custom domains**, add `xinye.co.nz`, and follow the on-screen DNS / certificate instructions. Add `www` only if desired.

Docs: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Important editorial / privacy checks

- Replace or confirm all personal statements in `src/app/page.tsx` before public release.
- The contact link points to GitHub only; no personal email address is published.
- The AI Content Automation page is marked as **in preparation**; do not present incomplete work as completed.
- The procurement case study paraphrases the README at `https://github.com/xiny777/ai-procurement-workflow`; review the case study if the code or README changes.
- Never commit API keys, `.env` files, employer confidential data, or private customer information.
- Private repositories such as `jinlo-ecommerce` are intentionally excluded.

## Edit these files

- Homepage: `src/app/page.tsx`
- Site header, footer and SEO: `src/app/layout.tsx`
- Colors & typography: `src/app/globals.css`
- Procurement write-up: `src/app/projects/ai-procurement-workflow/page.tsx`
- Content automation write-up: `src/app/projects/ai-content-automation/page.tsx`
