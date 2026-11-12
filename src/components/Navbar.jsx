import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const cvUrl = `${import.meta.env.BASE_URL}Sabira-K-CV.pdf`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight the nav link for the section in view
      const scrollPosition = window.scrollY + 200;
      let current = "home";
      for (const { href } of navLinks) {
        const el = document.getElementById(href.slice(1));
        if (el && scrollPosition >= el.offsetTop) current = href.slice(1);
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      // On a project page the section isn't rendered: go back home to it
      window.location.hash = href;
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, "#home")}>
          sabira.k<span className="brand-caret">_</span>
        </a>

        <nav className="desktop-nav" aria-label="Main">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={cvUrl} download="Sabira-K-CV.pdf" className="btn-nav-cta">
            <span>Resume</span>
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={cvUrl} download="Sabira-K-CV.pdf" className="btn-primary full-width">
            Download resume
          </a>
        </div>
      </div>
    </header>
  );
}
