# Shivam Electrical Works (`shivamelectricalworks.com`)

Modern, production-grade website and interactive RFQ (Request for Quotation) engine for **Shivam Electrical Works** — a government-licensed electrical contracting and engineering firm delivering turnkey HT/LT power distribution, custom-fabricated control panels (PCC, MCC, APFC, VFD, AMF), captive DG installations, and statutory Electrical Inspectorate liaisoning across Maharashtra and Pan-India.

Built with **Next.js 15 (App Router, Static HTML Export)**, **Tailwind CSS**, **TypeScript**, and **Lucide Icons**.

---

## ⚡ Architectural Highlights

* **100% Pure Static Architecture (`output: "export"`):**
  Zero backend server overhead, zero database dependencies, zero cold-starts, and rock-solid uptime via global CDN distribution.
* **Serverless Native RFQ & BOQ Dispatch:**
  Eliminates fragile third-party email API keys (no Resend/SendGrid/SMTP credentials required). Quotation requests launch directly through the client's **native email client (`mailto:`)** or **WhatsApp (`wa.me`)** with pre-formatted line items, allowing clients to attach drawings, tender PDFs, and Single Line Diagrams (SLD) seamlessly from mobile or desktop.
* **Automated CI/CD Deployment:**
  Pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to **GitHub Pages** with custom domain support (`shivamelectricalworks.com`) on every push to `main`.
* **Complete Search Engine Optimization (SEO) & Web Vitals:**
  Configured `metadataBase`, comprehensive OpenGraph and Twitter card social previews with official SEW logo branding, dynamic XML sitemap (`/sitemap.xml`), automated `robots.txt`, and branded 404 handler.

---

## 🎨 Design System & Palette

Engineered specifically for an industrial B2B electrical engineering contractor:

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Primary Slate** | `#0F172A` | Primary brand canvas, top utility bar, sticky navigation, hero, and footer |
| **Dark Surface** | `#1E293B` | Secondary dark surfaces, cards, 10-Second Spec Builder, and BOQ Cart header |
| **Copper CTA** | `#D97706` | Primary conversion CTAs, badges, accents, and interactive hover states |
| **Copper Dark** | `#92400E` | High-contrast text labels, section subheadings, and category badges |
| **WhatsApp** | `#059669` | Dedicated WhatsApp direct chat and instant RFQ actions |
| **Tech Gray** | `#F8FAFC` | Alternating section canvases and subtle light surfaces |

---

## 📁 Complete Pages & Capabilities

1. **Home (`/`)**: Value proposition hero with trust metrics, Vision & Mission, 8 client value proposition pillars, workmanship gallery preview, client trust strip, and RFQ conversion banner.
2. **About Us & Safety (`/about`)**: Corporate profile, statutory liaisoning background, Leadership Desk, core values, team strength breakdown, calibrated testing instruments inventory, and zero-compromise safety protocol.
3. **Services & BOQ Catalog (`/services`)**:
   - **10-Second Spec Builder**: Interactive package selector for rapid scope sizing (HT Substation, Industrial Electrification, Control Panels).
   - **Interactive BOQ Catalog**: 18 pre-configured BOQ items across HT systems, LT cabling, and custom panels with one-click additions to the live cart.
4. **Clients & Projects (`/clients`)**: Sectors served, client trust badges, detailed completed project portfolio (scope & location), and ongoing execution tracker.
5. **Project Gallery (`/gallery`)**: Filterable project gallery with category tabs (Substations, Panels, Cabling, Testing) and high-res lightbox modals.
6. **Contact & Commercial Desk (`/contact`)**: Commercial desk coordinates (phone, WhatsApp, email, office address, operating hours) + **Quick Project Enquiry** form with native email and WhatsApp dispatch.
7. **Privacy Policy (`/privacy`)**: Comprehensive Indian B2B statutory privacy disclosures, detailing client-side `localStorage` for the BOQ Cart and zero third-party tracking pixels.
8. **Terms of Use (`/terms`)**: Clarifies non-binding RFQ estimates, drawing approvals, IS/CEI standards, intellectual property, and Maharashtra legal jurisdiction.
9. **Global Live BOQ Builder Drawer**: Slide-out drawer (`localStorage` persisted) with quantity steppers, execution scope selector, **WhatsApp BOQ**, **Email Official BOQ**, and **Copy Formatted BOQ Text**.
10. **Branded 404 Not Found (`/_not-found`)**: Custom branded error screen directing visitors back to the home page, services catalog, or commercial desk.

---

## 🛠️ Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD automated deployment
├── public/
│   ├── images/
│   │   ├── gallery/            # Project execution diagrams & photos (.svg / .webp)
│   │   └── logo.png            # Official SEW high-resolution logo
│   └── .nojekyll               # Prevents GitHub Pages Jekyll processing
├── src/
│   ├── app/
│   │   ├── about/              # About Us & safety credentials page
│   │   ├── clients/            # Client portfolio & project tracker
│   │   ├── contact/            # Commercial desk & quick RFQ page
│   │   ├── gallery/            # Filterable project gallery with lightbox
│   │   ├── privacy/            # Privacy Policy statutory page
│   │   ├── services/           # Services catalog & 10-Second Spec Builder
│   │   ├── terms/              # Terms of Use page
│   │   ├── globals.css         # Tailwind utility imports & base styling
│   │   ├── icon.png            # App Router auto-generated favicon & tab icon
│   │   ├── layout.tsx          # Root layout, Google Fonts, SEO metadataBase
│   │   ├── not-found.tsx       # Branded 404 page
│   │   ├── page.tsx            # High-conversion homepage
│   │   ├── robots.ts           # Static /robots.txt generator
│   │   └── sitemap.ts          # Static /sitemap.xml generator
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Responsive navigation with compact mobile branding
│   │   │   └── Footer.tsx      # Multi-column footer with legal & contact links
│   │   └── rfq/
│   │       ├── BoqCartDrawer.tsx      # Slide-out interactive BOQ cart
│   │       ├── DirectRfqForm.tsx      # Direct contact enquiry form
│   │       ├── FloatingBoqButton.tsx  # Persistent bottom-right floating cart pill
│   │       └── SpecBuilder.tsx        # 10-Second package selector
│   ├── context/
│   │   └── BoqCartContext.tsx  # React Context & localStorage cart state manager
│   └── data/                   # Zero-code business configuration files
│       ├── catalog.json        # 18 BOQ specifications & scope packages
│       ├── clients.json        # Completed & ongoing project listings
│       ├── company.json        # Company metadata, contact, address, & credentials
│       └── gallery.json        # Project photographs, locations & categories
├── .eslintrc.json              # Next.js core-web-vitals linter configuration
├── next.config.ts              # Next.js static HTML export configuration
├── package.json                # Project dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Brand colors, typography & breakpoints
└── tsconfig.json               # TypeScript strict configuration
```

---

## 💻 Local Development

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Linting & Type-Checking
```bash
npm run lint
npx tsc --noEmit
```

### 4. Production Static Build
```bash
npm run build
```
This generates the optimized static export in the `./out/` directory.

---

## 📝 Updating Business Content (Zero Layout Code Changes)

All business details, credentials, and offerings are decoupled from the UI and managed via JSON files in `src/data/`:

* **`src/data/company.json`**:
  - `name`: Company display name
  - `licenseClass`: Government Electrical Contractor License number
  - `gstin`: 15-digit GSTIN
  - `contact.whatsappNumber`: Digits-only WhatsApp number for direct chat (e.g. `9198XXXXXXXX`)
  - `contact.phoneDisplay`: Formatted display phone number
  - `contact.email` / `contact.salesEmail`: Destination inboxes for customer RFQs
  - `contact.registeredOffice`: Registered office / factory address
  - `about`: Leadership details, company story, team counts, and testing equipment
* **`src/data/catalog.json`**:
  - Add, edit, or remove BOQ items, specifications, and scope presets.
* **`src/data/clients.json`**:
  - Update completed and ongoing project records, client names, and site locations.
* **`src/data/gallery.json`**:
  - Add new gallery entries. To update photos, drop `.webp` or `.jpg` images into `public/images/gallery/` and reference their file paths in `gallery.json`.

---

## 🚀 Deployment

### Option A: GitHub Pages (Pre-Configured Automated Workflow)
This repository includes `.github/workflows/deploy.yml`:
1. Push your code to the `main` branch on GitHub.
2. Go to **Repository Settings -> Pages**:
   - **Source:** Set to **GitHub Actions**.
3. Under **Custom domain**, enter `shivamelectricalworks.com` (ensure Enforce HTTPS is checked).
4. The workflow will automatically compile the static build and deploy to GitHub Pages.

### Option B: Cloudflare Pages / Vercel / Netlify
This project compiles into standard static HTML/CSS/JS:
* **Build Command:** `npm run build`
* **Output Directory:** `out`
* **Node Version:** `20.x` or higher
* No server environment variables or functions required.
