import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import "../styles/components/HeaderApp.css";

const TABS = [
  { to: "/", file: "home.json", end: true, color: "var(--accent-key)" },
  { to: "/projects", file: "projects.json", color: "var(--accent-blue)" },
  { to: "/skills", file: "skills.json", color: "var(--accent-purple)" },
  { to: "/contact", file: "contact.json", color: "var(--accent-green)" },
];

export function HeaderApp() {
  const barRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { y: -32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
  }, []);

  return (
    <header className="header-app" ref={barRef}>
      <div className="header-app-titlebar">
        <span className="window-dot dot-red" />
        <span className="window-dot dot-yellow" />
        <span className="window-dot dot-green" />
        <span className="header-app-path">
          jeisson@portfolio<span className="path-sep">:</span>
          <span className="path-active">~{pathname === "/" ? "/home.json" : pathname + ".json"}</span>
        </span>
      </div>

      <nav className="header-app-tabs">
        {TABS.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) =>
              "editor-tab" + (isActive ? " active" : "")
            }
            style={{ "--tab-color": tab.color }}
          >
            <span className="tab-icon">{`{ }`}</span>
            <span className="tab-name">{tab.file}</span>
            <span className="tab-dot" />
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
