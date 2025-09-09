import { useRef, useEffect } from "react";
import "./Hero.css";

/* Split a word into characters; expose index as CSS var --i */
function Word({ text, className = "" }) {
  const chars = Array.from(text);
  return (
    <span className={`t word ${className}`}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className={`ch${ch === " " ? " is-space" : ""}`}
          aria-hidden="true"
          style={{ "--i": i }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });

  /* Lightweight parallax via rAF + CSS vars (no re-renders) */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      targetRef.current.x = Math.max(-1, Math.min(1, nx));
      targetRef.current.y = Math.max(-1, Math.min(1, ny));
      tick();
    };
    const onLeave = () => {
      targetRef.current.x = 0;
      targetRef.current.y = 0;
      tick();
    };
    const tick = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const { x, y } = targetRef.current;
        el.style.setProperty("--parallax-tx", `${x * 12}px`);
        el.style.setProperty("--parallax-ty", `${y * 8}px`);
        el.style.setProperty("--parallax-rx", `${y * -3}deg`);
        el.style.setProperty("--parallax-ry", `${x * 4}deg`);
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="hero-splash" ref={heroRef}>
      {/* Left column (copy) */}
      <div className="hero-left">
        <div className="overline">
          Vieru Adrian Alexandru <span className="alias">/ sKy</span>
        </div>

        <h1
          className="hero-title"
          aria-label="Hi, I'm Alexandru, Front-end Developer"
        >
          <Word text="Hi," className="u-white u-hover-gradient" />
          <br />
          <Word text="I’m" className="u-white u-hover-gradient" />{" "}
          <Word text="Alexandru," className="u-gradient u-hover-white" />
          <br />
          <Word text="FRONT-END" className="u-gradient u-hover-white" />
          <br />
          <Word text="DEVELOPER" className="u-white u-hover-gradient" />
        </h1>

        <p className="hero-sub">
          // Junior front-end dev — clean code, solid performance, and attention
          to detail.
          <br />
          // Open to projects and collaborations.
        </p>

        <button className="cta-gradient">View Portfolio</button>
      </div>

      {/* Right column (decorative SVG) */}
      <div className="hero-art" aria-hidden="true">
        <svg
          className="laptop-svg"
          viewBox="0 0 600 380"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradCode" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4fa0" />
              <stop offset="100%" stopColor="#9b5cff" />
            </linearGradient>
            <clipPath id="screenClip">
              <rect x="180" y="110" width="240" height="140" rx="6" />
            </clipPath>
          </defs>

          <path
            className="bg-curve c1"
            d="M60,270 C190,170 410,360 540,240"
            stroke="url(#gradCode)"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="bg-curve c2"
            d="M40,300 C200,180 420,380 560,260"
            stroke="url(#gradCode)"
            strokeWidth="2"
            fill="none"
          />
          <path
            className="bg-curve c3"
            d="M90,320 C210,200 430,370 520,250"
            stroke="url(#gradCode)"
            strokeWidth="2"
            fill="none"
          />

          <rect
            className="lap-stroke"
            x="160"
            y="90"
            width="280"
            height="180"
            rx="12"
            ry="12"
            stroke="url(#gradCode)"
            strokeWidth="3"
            fill="none"
            pathLength="1"
          />
          <rect
            className="lap-stroke d2"
            x="120"
            y="290"
            width="360"
            height="24"
            rx="12"
            ry="12"
            stroke="url(#gradCode)"
            strokeWidth="3"
            fill="none"
            pathLength="1"
          />

          <rect
            className="screen-fill"
            x="180"
            y="110"
            width="240"
            height="140"
            rx="6"
          />

          <g clipPath="url(#screenClip)">
            <rect x="180" y="110" width="240" height="22" fill="#131a2e" />
            <circle cx="192" cy="121" r="4" fill="#ff5f56" />
            <circle cx="204" cy="121" r="4" fill="#ffbd2e" />
            <circle cx="216" cy="121" r="4" fill="#27c93f" />
            <rect
              x="232"
              y="114"
              width="10"
              height="10"
              rx="2"
              fill="#8a93b2"
            />
            <text
              x="248"
              y="123"
              fontSize="10"
              fill="#cfd5ff"
              fontFamily="ui-monospace, monospace"
            >
              hero.jsx
            </text>

            <rect className="code-line l1" x="190" y="142" />
            <rect className="code-line l2" x="190" y="160" />
            <rect className="code-line l3" x="190" y="178" />
            <rect className="code-line l4" x="190" y="196" />
            <rect className="code-line l5" x="190" y="214" />
            <rect className="code-line l6" x="190" y="232" />
            <rect className="code-line l7" x="190" y="250" />
            <rect
              className="caret"
              x="190"
              y="250"
              width="8"
              height="14"
              rx="2"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
