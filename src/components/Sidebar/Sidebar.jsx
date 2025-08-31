import React, { useState } from 'react';
import './Sidebar.css'

function Sidebar() {
    const [open, setOpen] = useState(false);

    const LINKS = [
        {href: "#portfolio", label: "Portofoliu"},
        {href: "#skills", label: "Skills"},
        {href: "#about", label: "Despre mine"},
        {href: "#contact", label: "Contact"},
        {href: "#blog", label: "Blog"},
    ]
    return (
         <>
      {/* TOPBAR (apare doar pe mobil) */}
      <header className="topbar" aria-label="Bară de navigare (mobil)">
        <div className="brand">AVA-CODE</div>

        {/* buton pentru deschiderea/închiderea meniului */}
        <button
          type="button"
          className="menu-btn"
          aria-controls="mPanel"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)} // toggle la open
        >
          Meniu
        </button>
      </header>

      {/* MENIU MOBIL (ascuns/afișat la click pe buton) */}
      <nav
        id="mPanel"
        className={"mobile-panel" + (open ? " open" : "")}
        aria-label="Meniu principal (mobil)"
      >
        <ul className="navlist">
          {LINKS.map(link => (
            <li key={link.href}>
              <a
                className="navlink"
                href={link.href}
                onClick={() => setOpen(false)} // când apeși pe link, închizi meniul
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="github"
              href="#"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* SIDEBAR (apare doar pe desktop) */}
      <aside className="sidebar" aria-label="Meniu principal (desktop)">
        <div className="brand">AVA-CODE</div>

        <nav>
          <ul className="navlist">
            {LINKS.map(link => (
              <li key={link.href}>
                <a className="navlink" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer împinge GitHub + footer jos */}
        <div className="spacer" />

        <a className="github" href="#">GitHub</a>
        <div className="foot">©2025 sKy</div>
      </aside>
    </>
    );
}

export default Sidebar;