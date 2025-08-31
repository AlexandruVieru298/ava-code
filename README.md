# AVA-Code — Front-End Portfolio

React + CSS (no UI libs) • Dark theme • Gradient accents • Glass effects

---

## ✨ Features

- **Layout**
  - Fixed left sidebar (desktop)
  - Mobile topbar with dropdown navigation
- **Hero**
  - SVG laptop illustration (line-draw + caret blink)
  - Lightweight parallax on mouse move
- **Typography**
  - Per-letter hover effect (white ⇄ gradient, scale micro-interaction, wave delay)
- **Brand**
  - Logo with gradient hotspot following cursor
- **UX / A11y**
  - Visible focus states
  - `prefers-reduced-motion` fallbacks
  - ARIA labels for nav, controls
- **Theming**
  - Centralized CSS tokens (`:root`) for colors, layout, gradients

---

## 🧱 Tech Stack

- **React 18+** (functional components, hooks)
- **Vite** (dev server & build)
- **CSS (vanilla)** with modern features (`color-mix`, `-webkit-text-fill-color`)
- **No UI libraries** (icons inline SVG if needed)

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
  assets/
    logo.svg
  App.jsx
  index.css
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
# with pnpm
pnpm install
pnpm dev

# or npm
npm install
npm run dev

# or yarn
yarn
yarn dev
```

**Build for production**
```bash
pnpm build
pnpm preview
```

---

## 🎨 Theming (Design Tokens)

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

Update the accents or `--sidebar-w` here to change theme.

---

## ♿ Accessibility

- Focus outlines for links and buttons
- Animations disabled with `prefers-reduced-motion`
- ARIA support for navs, burger button, current page

---

## ⚙️ Performance Notes

- Parallax runs via CSS variables + requestAnimationFrame (no React re-renders)
- SVG animations are short, GPU-friendly
- Minimal CSS, no heavy dependencies

---

## 📝 License

**MIT** — free to use and adapt.

---

## 👤 Author

**Vieru Adrian Alexandru (sKy)**  
📧 `alexandru.vieru298@gmail.com`  
Links to GitHub / Instagram / LinkedIn are in the UI.
