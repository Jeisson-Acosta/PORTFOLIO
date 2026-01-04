import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Code,
  Terminal,
  Zap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";

import Layout from "./components/Layout.jsx";
import { HomeApp } from "./pages/HomeApp.jsx";
import { Projects } from "./pages/Projects.jsx";

function App() {
  const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });

  const handleChangePositionCursor = (e) => {
    setPositionCursor({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleChangePositionCursor);
    return () => {
      document.removeEventListener("mousemove", handleChangePositionCursor);
    };
  }, []);

  return (
    <section
      className="body-app"
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "cyan",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BACKGROUND APP */}
      <section
        className="background-app"
        style={{
          position: "fixed",
          inset: "0",
          opacity: "10",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </section>
      {/* CURSOR CUSTOMIZED */}
      <div
        className="cursor-customized"
        style={{
          left: positionCursor.x - 192 + "px",
          top: positionCursor.y - 192 + "px",
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      ></div>
      {/* ROUTER APP */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeApp />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
