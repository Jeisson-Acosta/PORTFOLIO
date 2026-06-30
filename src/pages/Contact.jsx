import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/pages/Contact.css";
import {
  WhatsAppIcon,
  LinkedInIcon,
  MailIcon,
} from "../components/ContactIcons.jsx";
import { GitHubIcon } from "../components/IconsLanguages.jsx";

gsap.registerPlugin(ScrollTrigger);

const contactData = [
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    value: "Escríbeme por WhatsApp",
    description: "Disponible para consultas rápidas y proyectos.",
    link: "https://wa.me/573107400953",
    color: "#25D366",
    buttonText: "Enviar mensaje",
    key: "whatsapp",
  },
  {
    name: "Correo Electrónico",
    icon: <MailIcon />,
    value: "jeidacosta@hotmail.com",
    description: "Para propuestas formales y contacto profesional.",
    link: "mailto:jeidacosta@hotmail.com",
    color: "var(--accent-cyan)",
    buttonText: "Enviar correo",
    key: "email",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    value: "Conectemos en LinkedIn",
    description: "Mira mi trayectoria profesional y red de contactos.",
    link: "https://www.linkedin.com/in/jeisson-david-acosta-grizales-2a7a58287/",
    color: "#0077B5",
    buttonText: "Ver perfil",
    key: "linkedin",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    value: "Mira mis repositorios",
    description: "Explora mis proyectos y contribuciones de código.",
    link: "https://github.com/Jeisson-Acosta",
    color: "var(--fg-default)",
    buttonText: "Ver GitHub",
    key: "github",
  },
];

export function Contact() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-title",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(".contact-card",
        { opacity: 0, y: 28, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.55, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: ".contact-grid", start: "top 85%", once: true },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-page" ref={pageRef}>
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="kw-const">const</span>{" "}
          <span className="kw-var">contact</span>
          <span> = {"{"}</span>
        </h2>

        <div className="contact-grid">
          {contactData.map((item) => (
            <div
              key={item.key}
              className="contact-card"
              style={{ "--item-color": item.color }}
            >
              <div className="contact-card-glow" />

              <div className="contact-icon-container">
                <div className="contact-icon-bg">{item.icon}</div>
              </div>

              <div className="contact-info">
                <h3 className="contact-name">{item.name}</h3>
                <span className="contact-value">{item.value}</span>
                <p className="contact-description">{item.description}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                {item.buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18" height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="button-arrow"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7,7 17,7 17,17" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="contact-closing kw-brace">{"}"}</div>
      </div>
    </section>
  );
}
