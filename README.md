# Shivam Electrical Works (`shivamelectricalworks.com`)

Next.js (App Router, static export) + Tailwind CSS + Cloudflare Pages Functions starter repository for **Shivam Electrical Works**.

## Palette & Design System (Slate & Copper-Gold)
- **Primary Slate (`#0F172A`):** Primary brand color, top utility bar, sticky navigation, hero, and footer.
- **Dark Surface (`#1E293B`):** Secondary dark surfaces, cards, 10-Second Spec Builder, and BOQ Cart header.
- **Copper CTA (`#D97706` / `#92400E` text variant):** Primary CTAs, highlights, active badges, and interactive states.
- **WhatsApp (`#059669`):** Dedicated WhatsApp RFQ actions.
- **Tech Gray (`#F8FAFC`):** Alternating section canvases and subtle light surfaces.

## Key Features Included
1. **Six Complete Pages:** Home (with Company Snapshot, Vision & Mission in Hero), About Us, Services & Panels (with 10-Second Spec Builder + 18-item BOQ catalog), Clients, Filterable Gallery with Lightbox, and Contact & Direct RFQ.
2. **Dual-Pathway RFQ System:**
   - **Pathway A:** **10-Second Spec Builder** (on Services & Panels page) + Site-wide **Live BOQ Cart Drawer** (`localStorage` persisted) with quantity steppers, execution scope selector, **WhatsApp BOQ**, **Email Official BOQ**, and **Copy formatted BOQ text**.
   - **Pathway B:** Contact Page **Quick Project Enquiry** form with **Send via WhatsApp** and **Submit Official RFQ**.
3. **Cloudflare Pages Function (`functions/api/rfq.ts`):** Edge-compatible `POST /api/rfq` handler that validates fields, optionally verifies Cloudflare Turnstile, emails the structured RFQ via **Resend**, and returns a Reference ID (`SEW-YYYYMMDD-XXXX`).

## Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

> Note: Next.js dev mode serves static pages; to test `/api/rfq` locally, run `npm run build` followed by `npx wrangler pages dev out`.

## Replacing Dummy Data (Zero Layout Code Changes)
All placeholder copy, company credentials, catalog items, clients, and gallery metadata live in `src/data/`:
- `src/data/company.json` — Company name, license, GSTIN, phone, WhatsApp number (digits only for `wa.me`), email, addresses, director bio, team strength, testing equipment, and safety/QA copy.
- `src/data/catalog.json` — 18 BOQ offerings + 10-Second Spec Builder package presets.
- `src/data/clients.json` — Industries served, client logos, Major Completed Projects, and Ongoing Projects.
- `src/data/gallery.json` — Gallery categories, captions, and image paths (replace SVG placeholders in `public/images/gallery/` with real `.webp`/`.jpg` site photos).

## Deploying to Cloudflare Pages (Free Tier)
1. Push this repository to GitHub or GitLab.
2. In **Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git**:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Under **Settings -> Environment variables**, add:
   - `RESEND_API_KEY` (from [resend.com](https://resend.com) — free tier includes 3,000 emails/month)
   - `RFQ_TO_EMAIL` (destination inbox for Shivam Electrical Works)
   - `RFQ_FROM_EMAIL` (verified sender address on Resend, e.g., `rfq@shivamelectricalworks.com`)
   - *(Optional)* `TURNSTILE_SECRET_KEY` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
4. Under **Custom domains**, add `shivamelectricalworks.com` and `www.shivamelectricalworks.com` and update your GoDaddy DNS records as prompted by Cloudflare.
