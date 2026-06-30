import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS_DATA } from "../constants.js";
import "../styles/pages/Skills.css";
import {
  HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon,
  NodejsIcon, ExpressjsIcon, SqlIcon, GitIcon, GitHubIcon,
} from "../components/IconsLanguages.jsx";

gsap.registerPlugin(ScrollTrigger);

const IconComponents = {
  HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon,
  NodejsIcon, ExpressjsIcon, SqlIcon, GitIcon, GitHubIcon,
};

export function Skills() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-title",
        { opacity: 0, y: -14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );

      document.querySelectorAll(".skill-category").forEach((cat) => {
        gsap.fromTo(
          cat.querySelector(".category-header"),
          { opacity: 0, x: -20 },
          {
            opacity: 1, x: 0, duration: 0.45, ease: "power3.out",
            scrollTrigger: { trigger: cat, start: "top 85%", once: true },
          }
        );
        const cards = cat.querySelectorAll(".skill-card");
        gsap.fromTo(cards,
          { opacity: 0, y: 22, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.5, ease: "power3.out", stagger: 0.07,
            scrollTrigger: { trigger: cat, start: "top 82%", once: true },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="skills-page" ref={pageRef}>
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="kw-c">const</span>{" "}
          <span className="kw-v">skills</span>
          <span className="kw-p"> = {"{"}</span>
        </h2>

        <div className="skills-categories">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-emoji">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
                <span className="category-colon">:</span>
                <span className="category-bracket">[</span>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = IconComponents[skill.icon];
                  return (
                    <div key={skillIndex} className="skill-card">
                      <div className="skill-bg-icon" aria-hidden="true">
                        {IconComponent ? <IconComponent /> : null}
                      </div>

                      <div className="skill-content">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-icon-small">
                            {IconComponent ? <IconComponent /> : null}
                          </span>
                        </div>

                        <p className="skill-description">{skill.description}</p>

                        <div className="skill-tags">
                          {skill.tags.map((tag, ti) => (
                            <span key={ti} className="skill-tag">{tag}</span>
                          ))}
                        </div>

                        <div className="skill-experience">
                          <span className="experience-badge">{skill.experience}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="category-close-bracket">],</div>
            </div>
          ))}
        </div>

        <div className="skills-closing kw-p">{"}"}</div>
      </div>
    </section>
  );
}
