import { useMemo } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";

/* EN: Main nav config
   RO: Configurația linkurilor de navigație */
const NAV = [
  { label: "Portofoliu", href: "/portofoliu" },
  { label: "Skills", href: "/skills" },
  { label: "Despre mine", href: "/despre" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Sidebar({ currentPath }) {
  const pathname = useMemo(
    () =>
      currentPath ||
      (typeof window !== "undefined" ? window.location.pathname : "/"),
    [currentPath]
  );

  // EN: Update radial gradient position on logo hover
  // RO: Actualizează poziția gradientului radial pe hover pe logo
  const onLogoMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };
  const onLogoEnter = (e) => {
    e.currentTarget.style.setProperty("--x", "50%");
    e.currentTarget.style.setProperty("--y", "50%");
  };

  return (
    <aside className="aside centered" aria-label="Primary sidebar">
      {/* Brand */}
      <div className="brand brand--stack">
        <div
          className="logo-wrap"
          onMouseMove={onLogoMove}
          onMouseEnter={onLogoEnter}
        >
          <img src={logo} alt="AVA-CODE logo" className="logo-img logo-white" />
          <span
            className="logo-ink"
            aria-hidden="true"
            style={{
              WebkitMaskImage: `url(${logo})`,
              maskImage: `url(${logo})`,
            }}
          />
        </div>

        <div className="brand-title">AVA-CODE</div>
        <div className="brand-role">
          <span className="muted">sKy</span>
          <span className="role-sep">/</span>
          <span className="role-accent">Front-End&nbsp;Developer</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav" aria-label="Main navigation">
        <ul role="list">
          {NAV.map(({ label, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`link ${active ? "active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="bar" aria-hidden="true" />
                  <span className="lbl">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Socials */}
      <div className="socials" aria-label="Social links">
        <a
          className="chip"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="chip"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          className="chip"
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* Footer */}
      <footer className="aside-footer">
        <div>© {new Date().getFullYear()}</div>
        <div>Vieru Adrian Alexandru (sKy)</div>
        <a href="mailto:alexandru.vieru298@gmail.com" className="muted">
          alexandru.vieru298@gmail.com
        </a>
      </footer>
    </aside>
  );
}
