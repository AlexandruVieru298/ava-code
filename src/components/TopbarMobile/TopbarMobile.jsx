import { useMemo, useState, useEffect } from "react";
import "./TopbarMobile.css";

const NAV = [
  { label: "Home", href: "" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function TopbarMobile({ currentPath }) {
  const [open, setOpen] = useState(false);

  const pathname = useMemo(
    () =>
      currentPath ||
      (typeof window !== "undefined" ? window.location.pathname : "/"),
    [currentPath]
  );
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className={`mb-overlay ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <header className="mb-topbar" role="banner">
        <a className="mb-brand" href="/" aria-label="Home">
          AVA-CODE
        </a>

        <button
          className={`mb-burger ${open ? "is-active" : ""}`}
          aria-label="Deschide meniul"
          aria-expanded={open}
          aria-controls="mb-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </header>

      <nav
        id="mb-menu"
        className={`mb-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <ul role="list" className="mb-navlist">
          {NAV.map(({ label, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <a
                  className={`mb-link ${active ? "is-active" : ""}`}
                  href={href}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="mb-bar" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mb-socials">
          <a
            className="mb-chip"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="mb-chip"
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="mb-chip"
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </>
  );
}
