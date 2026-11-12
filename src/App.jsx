import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Hash routing keeps project pages working on GitHub Pages: #/projects/<id>
const PROJECT_ROUTE = /^#\/projects\/([\w-]+)$/;

function getProjectSlug() {
  const match = window.location.hash.match(PROJECT_ROUTE);
  return match ? match[1] : null;
}

function App() {
  const [toastMessage, setToastMessage] = useState(null);
  const [projectSlug, setProjectSlug] = useState(getProjectSlug);
  const previousSlug = useRef(projectSlug);

  useEffect(() => {
    // A link like .../#contact opened fresh: jump once the section has rendered
    const sectionId = window.location.hash.slice(1);
    if (sectionId && !PROJECT_ROUTE.test(window.location.hash)) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant" });
    }

    const onHashChange = () => setProjectSlug(getProjectSlug());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to the right place after switching between the home page and a project page
  useEffect(() => {
    if (projectSlug) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (previousSlug.current) {
      const sectionId = window.location.hash.slice(1);
      const target = (sectionId && document.getElementById(sectionId)) || document.getElementById("projects");
      target?.scrollIntoView({ behavior: "instant" });
    }
    previousSlug.current = projectSlug;
  }, [projectSlug]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-root">
      {toastMessage && (
        <div className="app-toast">
          <span className="toast-dot" />
          <span>{toastMessage}</span>
        </div>
      )}

      <Navbar />

      <main className="main-content">
        {projectSlug ? (
          <ProjectDetail slug={projectSlug} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact onShowToast={showToast} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
