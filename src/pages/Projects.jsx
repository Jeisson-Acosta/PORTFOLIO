import { ExternalLink, Code } from "lucide-react";
import { PROJECTS_DATA } from "../constants.js";
import "../styles/pages/Projects.css";

export function Projects() {
  const getStatusColor = (status) => {
    const colors = {
      production: "#4ade80",
      beta: "#facc15",
      development: "#22d3ee",
    };
    return colors[status] || "#22d3ee";
  };

  return (
    <section className="projects-page">
      <div className="projects-container">
        <h2 className="projects-title">
          <span>const</span> projects = [
        </h2>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="project-card">
              {/* Image Container */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button"
                  >
                    <ExternalLink size={20} />
                    View Repository
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                {/* Header */}
                <div className="project-header">
                  <h3 className="project-title">
                    <Code size={20} className="project-icon" />
                    {project.title}
                  </h3>
                  <span
                    className="project-status"
                    style={{ color: getStatusColor(project.status) }}
                  >
                    ● {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-closing">]</div>
      </div>
    </section>
  );
}
