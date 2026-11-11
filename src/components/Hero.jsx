import React from "react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/sabira-k.webp";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

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
        {/* Text column */}
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="live-pulse" />
            {personalInfo.status}
          </span>

          <h1 className="hero-heading">
            Hi, I'm {personalInfo.name}.
            <span className="hero-role">
              I build <span className="text-accent">WordPress &amp; WooCommerce</span> plugins
              and React apps.
            </span>
          </h1>

          <p className="hero-description">
            Web Developer with {personalInfo.experienceLabel.toLowerCase()} of experience building,
            maintaining, and supporting commercial WooCommerce plugins, using PHP, JavaScript,
            React.js, and MySQL.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={17} />
              <span>Contact Me</span>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Sabira-K-CV.pdf`}
              download="Sabira-K-CV.pdf"
              className="btn-ghost"
            >
              <Download size={17} />
              <span>Download CV</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="social-links-list">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub profile"
              >
                <GitHubIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-btn" aria-label="Send email">
                <Mail size={18} />
              </a>
            </div>
            <span className="hero-location">
              <MapPin size={16} />
              {personalInfo.location}
            </span>
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-photo-ring">
            <div className="hero-photo-frame">
              <img
                src={profileImg}
                alt={`Portrait of ${personalInfo.name}`}
                className="hero-photo"
                width="900"
                height="900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stack">
        <span className="hero-stack-label">Core stack</span>
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
