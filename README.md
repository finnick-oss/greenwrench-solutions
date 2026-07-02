# Bhakti Auto Scrap Traders — Website

Marketing website for **Bhakti Auto Scrap Traders**, a car scrapping & recycling service in Delhi NCR. Visitors can browse services, check what their car is worth, and reach the team via call or WhatsApp.

Built with **React 19 + TypeScript + Vite**, styled with CSS Modules, animated with Framer Motion.

---

## 1. Prerequisites (install these first)

You only need **Node.js** (which includes `npm`). Everything else is installed automatically in step 2.

### Check if you already have it

Open a terminal and run:

```bash
node -v
npm -v
```

If both print a version number (Node **v20 or newer** recommended), skip to step 2.

### If you don't have Node.js

- **Windows / macOS (easiest):** Download the **LTS** installer from <https://nodejs.org> and run it.
- **macOS with Homebrew:**
  ```bash
  brew install node
  ```
- **Linux (Debian/Ubuntu):**
  ```bash
  sudo apt update && sudo apt install nodejs npm
  ```

You'll also need **Git** to clone the repo — check with `git -v`, or download it from <https://git-scm.com/downloads>.

---

## 2. Setup after cloning

Run these commands one by one:

```bash
# 1. Clone the repository
git clone https://github.com/finnick-oss/greenwrench-solutions.git

# 2. Go into the project folder
cd greenwrench-solutions

# 3. Install all dependencies (one-time, creates node_modules/)
npm install

# 4. Start the development server
npm run dev
```

Then open the URL printed in the terminal (usually **http://localhost:5173**) in your browser. The site auto-reloads whenever you save a file.

---

## 3. All available commands

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm install`     | Installs dependencies. Run once after cloning (and after pulling if `package.json` changed). |
| `npm run dev`     | Starts the local dev server with hot reload.                        |
| `npm run build`   | Type-checks and builds the production site into `dist/`.            |
| `npm run preview` | Serves the built `dist/` folder locally to test the production build. |
| `npm run lint`    | Runs ESLint over the codebase.                                      |

---

## 4. Changing phone number, address & other business details

**All contact and business data lives in one file:**

```
src/constants/siteConfig.ts
```

Edit it to change — in one place, reflected across the whole site:

- `PHONE` — the 10-digit phone number (drives every Call button and WhatsApp link)
- `phoneDisplay` — how the number is shown on screen
- `email`, `website`
- `address` — lines, city, and full address (also drives the Google Map on Contact page)
- `name`, `tagline`, `description` — brand name and copy (also sets the browser tab title)
- `establishedYear`, `stats` — the numbers shown on Home and About

The car makes/models list for the quote form lives in `src/constants/vehicleData.ts`.

> ⚠️ The phone number is currently a `0000000000` placeholder — replace it with the real number before going live.

---

## 5. Project structure

```
src/
├── constants/
│   ├── siteConfig.ts     # ← all business/contact data (edit here)
│   └── vehicleData.ts    # car makes, models, fuel types for the quote form
├── components/
│   ├── Navbar.tsx        # top navigation
│   ├── Footer.tsx        # footer
│   └── VehicleSearch.tsx # "What is your car worth" quote form
├── pages/
│   ├── Home.tsx          # hero, services, how it works, testimonials
│   ├── About.tsx         # story, values, team
│   ├── Services.tsx      # detailed service list
│   ├── Videos.tsx        # YouTube shorts + Cloudinary videos
│   └── Contact.tsx       # contact methods, map, FAQ
├── App.tsx               # routes + page transitions
└── main.tsx              # entry point (sets tab title from siteConfig)
```

Each page/component has a matching `.module.css` file for its styles.

---

## 6. Deployment

The repo includes a `vercel.json`, so it deploys to **Vercel** out of the box:

1. Push to GitHub.
2. Import the repo at <https://vercel.com/new>.
3. Vercel auto-detects Vite — just click **Deploy**.

Any other static host works too: run `npm run build` and serve the `dist/` folder (configure the host to rewrite all routes to `index.html`, since this is a single-page app).

---

## 7. Good to know

- **The quote form's email field doesn't send email anywhere yet** — there's no backend. If a visitor enters an email, the site shows a thank-you message only. To actually receive leads by email, wire the form to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com).
- WhatsApp buttons open a pre-filled chat using the `PHONE` value from `siteConfig.ts`.
- Videos on the Videos page are hosted on Cloudinary/YouTube — URLs are inside `src/pages/Videos.tsx`.
