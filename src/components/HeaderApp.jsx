import { Terminal } from "lucide-react";
import { NavLink } from "react-router-dom";
import '../styles/components/HeaderApp.css'

export function HeaderApp() {
  return (
    <header className="header-app">
      <section className="header-app-content">
        <div className="header-app-content-left">
          <Terminal
            className="terminal-icon"
            style={{ color: "yellow", width: "32px", height: "32px" }}
          />
          <div className="header-app-content-left-text">
            <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>
              <span style={{ color: "#fff" }}>{"{ "}</span>
              <span style={{ color: "yellow" }}>JSON</span>
              <span style={{ color: "#fff" }}>{" }"}</span>
            </h1>
            <p style={{ fontSize: "12px", color: "cyan", opacity: "0.7" }}>
              // Full Stack Developer
            </p>
          </div>
        </div>

        <nav className="header-app-content-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </section>
    </header>
  );
}
