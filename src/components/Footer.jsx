import "../styles/components/Footer.css";

export function Footer() {
  return (
    <footer className="footer-page">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">
            <span className="f-brace">{"{"}</span>{" "}
            <span className="f-name">JSON</span>{" "}
            <span className="f-brace">{"}"}</span>
          </span>
          <span className="footer-tagline">// Full Stack Developer</span>
        </div>
        <p className="footer-copy">
          © 2026 Jeisson Acosta — Crafted with{" "}
          <span style={{ color: "var(--accent-blue)" }}>React</span>
          {" + "}
          <span style={{ color: "var(--accent-key)" }}>GSAP</span>
          {" & "}
          <span style={{ color: "var(--accent-red)" }}>❤</span>
        </p>
      </div>
    </footer>
  );
}
