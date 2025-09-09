import { useMemo } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg"; // logo-ul tău alb (static)

const NAV = [
  { label: "Home", href: "" },
  { label: "About Me", href: "#about" },
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

  return (
    <aside className="aside centered" aria-label="Primary sidebar">
      {/* BRAND (stacked, centered) */}
      <div className="brand brand--stack">
        <img src={logo} alt="AVA-CODE logo" className="logo-img logo-white" />
        <div className="brand-title">AVA-CODE</div>
        <div className="brand-role">
          <span className="muted">sKy</span>
          <span className="role-sep">/</span>
          <span className="role-accent">Front-End&nbsp;Developer</span>
        </div>
      </div>

      {/* SEPARATOR – între brand și navigație */}
      <div className="brand-sep" role="separator" aria-hidden="true" />

      {/* NAV */}
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

      {/* SOCIALS */}
      <div className="socials" aria-label="Social links">
        <a className="chip" href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="chip" href="https://instagram.com/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a className="chip" href="https://linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>

      {/* FOOTER */}
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
