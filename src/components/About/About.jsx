import { useEffect, useRef } from "react";
import avatar from "../../assets/avatar.png";
import "./About.css";

/**
 * Content config
 * Update these arrays to change copy without touching markup.
 */
const HIGHLIGHTS = [
  { title: "Experience", value: "+3 years" },
  { title: "Core Stack", value: "React · TypeScript · PixiJS" },
  { title: "Focus", value: "Component Systems · Canvas UI" },
  { title: "Availability", value: "Full-time & Freelance" },
];

const SKILLS = [
  { label: "Core Front-End", tags: ["React", "TypeScript", "Haxe"] },
  { label: "UI & Styling", tags: ["HTML", "CSS", "SASS"] },
  { label: "Game/Canvas", tags: ["PixiJS", "Spine"] },
  { label: "Workflow", tags: ["Git", "Jira", "Confluence", "Kanban"] },
  { label: "CMS & Builders", tags: ["WordPress", "Elementor"] },
  {
    label: "Design & Handoff",
    tags: ["Figma (basic)", "Adobe XD", "Photoshop", "Canva"],
  },
];

const SERVICES = [
  {
    icon: "code",
    kicker: "UI Development",
    title: "React/TS components",
    note: "Clean, reusable, consistent",
  },
  {
    icon: "wand",
    kicker: "Game UI / Canvas",
    title: "PixiJS & Spine",
    note: "Animations · performance",
  },
  {
    icon: "bag",
    kicker: "WordPress Builds",
    title: "Sites & E-commerce",
    note: "Elementor · custom blocks",
  },
  {
    icon: "speed",
    kicker: "Performance & Cleanup",
    title: "Refactor & fixes",
    note: "Speed-ups · bug-free",
  },
];

/**
 * Inline icon set (no external deps)
 */
const Icons = {
  code: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline
        points="7 8 3 12 7 16"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="17 8 21 12 17 16"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="14"
        y1="7"
        x2="10"
        y2="17"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  wand: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20L16 8" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 4l2-2 2 2-2 2-2-2" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18.5 10.5l1.5-1.5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  bag: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 016 0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  speed: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 14a8 8 0 1116 0" strokeWidth="2" />
      <path d="M12 14l4-6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" />
    </svg>
  ),
  arrow: () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 5l7 7-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

/** Small, reusable UI bits */
function Tag({ children }) {
  return <span className="about-tag reveal">{children}</span>;
}

function Stat({ title, value }) {
  return (
    <div className="about-stat reveal">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function SkillsGroup({ label, tags }) {
  return (
    <div className="skills-group reveal">
      <div className="skills-label">{label}</div>
      <div className="skills-tags">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ icon, kicker, title, note }) {
  const Icon = Icons[icon];
  const Arrow = Icons.arrow;
  return (
    <a
      className="svc-item reveal tilt"
      href="#services"
      aria-label={`${kicker} — ${title}`}
    >
      <div className="svc-row">
        <span className="svc-icon">{Icon && <Icon />}</span>
        <div className="svc-content">
          <div className="svc-kicker">{kicker}</div>
          <div className="svc-title">{title}</div>
          <div className="svc-note">{note}</div>
        </div>
        <span className="svc-arrow">
          <Arrow />
        </span>
      </div>
    </a>
  );
}

/**
 * About section
 * - IO-based reveal animation
 * - Content is data-driven via config above
 */
export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          obs.unobserve(entry.target); // reveal once, then stop observing
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section id="about" className="about-shell" ref={rootRef}>
      {/* Header */}
      <header className="about-header">
        <div className="about-titles">
          <h2 className="about-title force-hero-gradient fx-shine reveal">
            About Me
          </h2>
          <h3 className="about-name reveal">Vieru Adrian Alexandru</h3>
          <div className="about-role reveal">/ FRONT-END DEVELOPER</div>
        </div>

        <div className="about-avatar reveal">
          <img
            className="avatar-image"
            src={avatar}
            alt="Portrait"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="avatar-fallback" aria-hidden="true">
            A
          </div>
        </div>
      </header>

      {/* Main grid */}
      <div className="about-grid">
        {/* Bio */}
        <article className="about-card about-bio reveal">
          <h4 className="card-title">Bio</h4>

          <p className="bio-text">
            I build <b>websites and web apps</b> with React, JavaScript, and CSS
            — fast, modern, and user-friendly. As a <b>Game Client Developer</b>
            , I’ve worked with TypeScript, PixiJS, and Haxe to bring casino
            games to life. On the <b>WordPress</b> side, I create presentation
            sites and online stores that look great and work seamlessly. Always
            blending <b>technology and design</b> to deliver projects that are
            clean, stable, and visually impactful.
          </p>

          <h5 className="section-subtitle">Highlights</h5>
          <div className="about-highlights">
            {HIGHLIGHTS.map((h) => (
              <Stat key={h.title} title={h.title} value={h.value} />
            ))}
          </div>

          <div className="about-cta reveal">
            <a
              className="btn-base cta-gradient fx-sheen"
              href="/cv.pdf"
              download
            >
              Download CV
            </a>
            <a
              className="btn-base btn-ghost"
              href="mailto:alexandru.vieru298@gmail.com"
            >
              Hire Me
            </a>
            <a className="btn-base btn-ghost" href="/contact">
              Contact
            </a>
          </div>
        </article>

        {/* Skills + Services */}
        <aside className="about-card about-skills-services reveal">
          <h4 className="card-title">Skills</h4>

          <div className="skills-services-grid">
            {/* Skills (left column) */}
            <div className="skills-col">
              {SKILLS.map((group) => (
                <SkillsGroup
                  key={group.label}
                  label={group.label}
                  tags={group.tags}
                />
              ))}
            </div>

            {/* Services (right column) */}
            <div className="svc-preview-col">
              {SERVICES.map((s, i) => (
                <ServiceItem key={`${s.icon}-${i}`} {...s} />
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Services (bottom) */}
      <section className="about-card about-services reveal" id="services">
        <h4 className="card-title">Services</h4>

        <div className="services-block">
          <h5 className="services-block-title">Open to Roles — Any</h5>
          <p className="services-block-sub">
            Full-time · Part-time · Project-based · Remote/Onsite
          </p>
        </div>

        <div className="services-block">
          <h5 className="services-block-title">Freelancer</h5>
          <ul className="services-list">
            <li>
              <b>WordPress Sites</b> — fast, easy to manage. Presentation
              websites & online stores (Elementor, custom blocks, basic SEO).
            </li>
            <li>
              <b>Bug Fixes (HTML/CSS/React)</b> — clean hotfixes for responsive,
              cross-browser, layout & build issues.
            </li>
            <li>
              <b>React UI Components</b> — reusable, documented, type-safe
              (TypeScript) · Storybook · theming.
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
