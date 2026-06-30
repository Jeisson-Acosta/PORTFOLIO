import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, FileUser, Terminal } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/pages/HomeApp.css";
import { CARDS_INFO, OBJECT_DESCRIPTION, BASE64_CV } from "../constants.js";

gsap.registerPlugin(ScrollTrigger);

/* Split the name into individually-animated spans */
function AnimatedName({ name }) {
  return (
    <span className="my-name-gradient">
      {name.split("").map((ch, i) => (
        <span key={i} className="name-char">{ch}</span>
      ))}
    </span>
  );
}

/* JSON card with editor chrome */
function MyInfoJson() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "SQL"];
  const lines = [
    [null, "{"],
    ["\"name\"", `"Jeisson"`],
    ["\"alias\"", `"JSON"`],
    ["\"skills\"", "["],
    ...skills.map((s) => [null, `"${s}"`]),
    [null, "],"],
    ["\"available\"", "true"],
    [null, "}"],
  ];

  return (
    <div className="info-json">
      <div className="container-info-json">
        {/* tab bar */}
        <div className="json-card-tab">
          <span className="json-card-tab-dot" />
          <span className="json-card-tab-name">developer.json</span>
        </div>
        {/* body */}
        <div className="json-card-body">
          <div className="json-line-numbers">
            {lines.map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
          <div className="json-code">
            {lines.map(([key, value], i) => {
              const isKeyword = value === "true" || value === "false";
              const isArr = value === "[" || value === "]," || value === "{" || value === "}";
              const isIndented = i >= 3 && i < 3 + skills.length + 1;
              return (
                <div key={i} style={{ paddingLeft: isIndented ? 24 : 0, display: "block" }}>
                  {key && <span className="js-key">{key}</span>}
                  {key && <span className="js-punc">: </span>}
                  {isArr ? (
                    <span className="js-arr">{value}</span>
                  ) : isKeyword ? (
                    <span className="js-bool">{value}</span>
                  ) : (
                    <span className="js-string">{value}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeApp() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".home-declaration",  { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.45 })
        .fromTo(".developer-name",    { opacity: 0, x: -28 }, { opacity: 1, x: 0, duration: 0.55 }, "-=0.2")
        .fromTo(".name-char",
          { opacity: 0, y: 16, rotateX: -60 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.4, stagger: 0.045 },
          "-=0.3"
        )
        .fromTo(".elements-description-item",
          { opacity: 0, x: -18 },
          { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 },
          "-=0.15"
        )
        .fromTo(".home-closing", { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=0.05")
        .fromTo(".home-buttons", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.1")
        .fromTo(".info-json",
          { opacity: 0, y: 28, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65 },
          "-=0.4"
        );

      // stats
      gsap.fromTo(
        cardsRef.current?.querySelectorAll(".card-info-item") || [],
        { opacity: 0, y: 22 },
        {
          opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%", once: true },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleClickShowProjects = () => navigate("/projects");

  const handleClickDownloadCV = () => {
    const byteCharacters = atob(BASE64_CV);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const blob = new Blob([new Uint8Array(byteNumbers)], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV_Jeisson_Acosta.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="home-app" ref={heroRef}>
      <section className="principal-container">
        {/* ── LEFT: hero ── */}
        <div className="variable">
          <div className="home-declaration">
            <Terminal size={13} style={{ color: "var(--accent-key)" }} />
            <span className="kw-const">const</span>{" "}
            <span className="kw-var">developer</span>
            <span className="kw-eq"> = </span>
            <span className="kw-brace">{"{"}</span>
          </div>

          <div className="variable-info">
            <h1 className="developer-name">
              Hi, I&apos;m
              <br />
              <AnimatedName name="Jeisson" />
            </h1>

            {Object.entries(OBJECT_DESCRIPTION).map(([key, value], i) => (
              <div className="elements-description-item" key={i}>
                <span className="prop-key">{key}</span>
                <span className="prop-colon">:</span>
                <span
                  className="prop-value"
                  style={key === "status" ? { color: "var(--accent-green)" } : {}}
                >
                  &quot;{value}&quot;
                </span>
              </div>
            ))}
          </div>

          <div className="home-closing kw-brace">{"}"}</div>

          <div className="home-buttons">
            <button className="button-projects" onClick={handleClickShowProjects}>
              <Zap size={16} />
              Show projects
            </button>
            <button className="button-cv" onClick={handleClickDownloadCV}>
              <FileUser size={16} />
              Download CV
            </button>
          </div>
        </div>

        {/* ── RIGHT: JSON card ── */}
        <MyInfoJson />
      </section>

      {/* ── Stats ── */}
      <section className="cards-info" ref={cardsRef}>
        {CARDS_INFO.map((item, i) => (
          <div key={i} className="card-info-item">
            <div className="card-info-line-number">{String(i + 1).padStart(2, "0")}</div>
            <div className="value-item">{item.value}</div>
            <div className="label-item">// {item.label}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
