# AVA-Code — Front-End Portfolio

React + CSS (no UI libs) • Dark theme • Gradient accents • Glass/halo effects

---

## ✨ Features

- **Layout**
  - Desktop sidebar + content area
  - Mobile topbar with dropdown navigation
  - Smooth section reveal via `IntersectionObserver`
- **Hero**
  - SVG laptop illustration (line-draw + caret blink)
  - Lightweight mouse-parallax (no React re-renders)
  - Gradient headline with animated shine
- **About**
  - Avatar **halo** style with soft glow + gentle float
  - Two-column card: **Skills** (left) + **Services preview** (right)
  - Pills/tags, icons (inline SVG), and consistent glass surface
  - Responsive: stacks to one column and centers content on mobile
  - Content driven by 3 arrays (`HIGHLIGHTS`, `SKILLS`, `SERVICES`)
- **Typography**
  - Per-letter hover micro-interaction on hero title
- **Brand**
  - Logo with gradient hotspot following cursor
- **UX / A11y**
  - Visible focus states
  - `prefers-reduced-motion` fallbacks
  - ARIA labels for navigation and controls
- **Theming**
  - Centralized CSS tokens (`:root`) for colors, layout, gradients

---

## 🧱 Tech Stack

- **React 18+** (functional components + hooks)
- **Vite** (fast dev & build)
- **Vanilla CSS** with modern features (`color-mix`, `-webkit-text-fill-color`)
- **No UI libraries** (icons are inline SVG)

---

## 📁 Project Structure

```
src/
  components/
    Hero/
      Hero.jsx
      Hero.css
    Sidebar/
      Sidebar.jsx
      Sidebar.css
    TopbarMobile/
      TopbarMobile.jsx
      TopbarMobile.css
    About/
      About.jsx        # data-driven content (arrays at top)
      About.css        # local tokens + surfaces + responsive
  assets/
    avatar.png
    logo.svg
  App.jsx
  index.css           # global design tokens (:root)
  main.jsx
index.html
```

---

## ▶️ Getting Started

**Prerequisites**
- Node.js 18+
- pnpm / npm / yarn

**Install & Run**
```bash
# pnpm
pnpm install
pnpm dev

# npm
npm install
npm run dev

# yarn
yarn
yarn dev
```

**Build & Preview**
```bash
pnpm build
pnpm preview
```

---

## 🎛️ Customizing the About Section

All copy is data-driven. Open `src/components/About/About.jsx` and edit these arrays:

```js
// 1) Quick stats cards
const HIGHLIGHTS = [
  { title: "Experience", value: "+3 years" },
  { title: "Core Stack", value: "React · TypeScript · PixiJS" },
  { title: "Focus", value: "Component Systems · Canvas UI" },
  { title: "Availability", value: "Full-time & Freelance" },
];

// 2) Skills groups (label + tag pills)
const SKILLS = [
  { label: "Core Front-End", tags: ["React", "TypeScript", "Haxe"] },
  { label: "UI & Styling",   tags: ["HTML", "CSS", "SASS"] },
  // ...
];

// 3) Services preview tiles (right column)
const SERVICES = [
  { icon: "code",  kicker: "UI Development",        title: "React/TS components",  note: "Clean, reusable, consistent" },
  { icon: "wand",  kicker: "Game UI / Canvas",      title: "PixiJS & Spine",       note: "Animations · performance" },
  // ...
];
```

**Styling knobs**

`src/components/About/About.css` uses **local tokens** scoped to `.about-shell`:
```css
.about-shell {
  --pad-x: 80px;
  --gap: 24px;
  --radius: 18px;
  --chip-h: 30px;
  --card-bg-top: color-mix(in oklab, var(--bg), transparent 6%);
  --card-bg-btm: color-mix(in oklab, var(--bg), transparent 14%);
  --card-border: color-mix(in oklab, var(--ring), transparent 35%);
}
```
Tweak these to adjust spacing, chip height, and glass surfaces without touching rules below.

---

## 🎨 Theming (Global Tokens)

All global tokens live in `src/index.css`:

```css
:root{
  --bg:#0e1324;
  --bg-2:#0b0f1c;
  --text:#e6e9ff;
  --muted:#8a93b2;
  --ring:#2b3356;

  --accent-1:#ff4fa0;
  --accent-2:#9b5cff;
  --gradient-accent: linear-gradient(135deg, var(--accent-1), var(--accent-2));

  --sidebar-w: 240px;
}
```

Update `--accent-*` or `--sidebar-w` to change the look globally.

---

## ♿ Accessibility

- Focus outlines for links and buttons  
- Animations respect `prefers-reduced-motion`  
- ARIA labels for nav and interactive controls

---

## ⚙️ Performance Notes

- Parallax and shine effects run with CSS variables / GPU-friendly properties  
- IntersectionObserver reveals elements once, then unobserves (no wasted work)  
- No heavy CSS frameworks or component libraries

---

## 🚀 Deployment

Any static host works (Vercel, Netlify, GitHub Pages, etc.).

```bash
pnpm build   # outputs to /dist
# deploy /dist with your preferred provider
```

---

## 🧭 Scripts

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm preview   # preview built app locally
pnpm lint      # (optional) add ESLint if you like
```

---

## 📝 License

MIT — free to use and adapt.

---

## 👤 Author

**Vieru Adrian Alexandru (sKy)**  
📧 `alexandru.vieru298@gmail.com`  
Social links are available in the UI.
