import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import CodeLaptop from "./CodeLaptop";

const coreStack = [
  "PHP",
  "WordPress",
  "WooCommerce",
  "React.js",
  "JavaScript",
  "MySQL",
  "REST API",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Vite",
  "Supabase",
  "jQuery",
  "Git"
];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-prompt">~ $ whoami</span>

          <h1 className="hero-heading">
            {personalInfo.name}.{" "}
            <span className="hero-heading-muted">Web Developer.</span>
          </h1>

          <p className="hero-description">
            I build websites, WordPress plugins, and React apps that are fast, secure, and easy to use.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">View projects</a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>

          <div className="hero-meta">
            <span className="hero-status">
              <span className="live-pulse" />
              {personalInfo.status}
            </span>
            <div className="social-links-list">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn profile">
                <LinkedInIcon size={17} />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub profile">
                <GitHubIcon size={17} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Send email">
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-code">
          <CodeLaptop />
        </div>
      </div>

      <div className="hero-stack">
        <span className="hero-stack-label">// core stack</span>
        <div className="hero-marquee">
          {/* List is rendered twice so the loop scrolls seamlessly */}
          <ul className="hero-marquee-track">
            {[...coreStack, ...coreStack].map((tech, i) => (
              <li key={`${tech}-${i}`} aria-hidden={i >= coreStack.length || undefined}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
