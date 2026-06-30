import { useEffect, useRef } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS_DATA } from "../constants.js";
import "../styles/pages/Projects.css";

gsap.registerPlugin(ScrollTrigger);

const STATUS_META = {
  production: { label: "production", color: "var(--accent-green)" },
  beta:       { label: "beta",       color: "var(--accent-key)"   },
  development:{ label: "development",color: "var(--accent-cyan)"  },
};

export function Projects() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".projects-title",
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      const cards = document.querySelectorAll(".project-card");
      gsap.fromTo(cards,
        { opacity: 0, y: 32, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.55, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: ".projects-grid", start: "top 85%", once: true },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-page" ref={pageRef}>
      <div className="projects-container">
        <h2 className="projects-title">
          <span className="kw-c">const</span>{" "}
          <span className="kw-v">projects</span>
          <span className="kw-p"> = [</span>
        </h2>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => {
            const meta = STATUS_META[project.status] || STATUS_META.development;
            return (
              <article key={project.id} className="project-card">
                {/* image */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-button"
                    >
                      <Github size={16} />
                      Ver repositorio
                    </a>
                  </div>
                  {/* line numbers column */}
                  <div className="line-numbers-col" aria-hidden="true">
                    {Array.from({ length: 6 }, (_, i) => (
                      <span key={i}>{String(i + 1).padStart(2, "0")}</span>
                    ))}
                  </div>
                </div>

                {/* content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">
                      <Code2 size={16} className="project-icon" />
                      {project.title}
                    </h3>
                    <span
                      className="project-status"
                      style={{ color: meta.color }}
                    >
                      ● {meta.label}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-footer-link"
                  >
                    <ExternalLink size={14} />
                    <span>View repo</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-closing kw-p">]</div>
      </div>
    </section>
  );
}
