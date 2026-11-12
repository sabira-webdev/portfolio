import React, { useCallback, useEffect, useRef, useState } from "react";
import { projectsData } from "../data/portfolioData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectCover from "./ProjectCover";

const MAX_TAGS = 3;
const SLIDE_MS = 550;
const COUNT = projectsData.length;

// The list is rendered three times (copy · real · copy) so the carousel can
// keep sliding in either direction. Position COUNT is the first real card.
const LOOP = [...projectsData, ...projectsData, ...projectsData];

function ProjectCard({ project, isClone }) {
  const extraTags = project.tags.length - MAX_TAGS;
  return (
    <a
      href={`#/projects/${project.id}`}
      className="project-card"
      aria-hidden={isClone || undefined}
      tabIndex={isClone ? -1 : undefined}
    >
      <ProjectCover project={project} />

      <div className="project-card-body">
        <div className="project-badges">
          {project.status && (
            <span className={`project-status-badge ${project.status === "Live" ? "is-live" : ""}`}>
              {project.status}
            </span>
          )}
          <span className="project-category-badge">{project.category}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-tags-list">
          {project.tags.slice(0, MAX_TAGS).map((tag) => (
            <li key={tag} className="project-tag-pill">{tag}</li>
          ))}
          {extraTags > 0 && <li className="project-tag-pill">+{extraTags}</li>}
        </ul>

        <span className="project-action-link">
          View details
          <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  const [pos, setPos] = useState(COUNT);
  const [animate, setAnimate] = useState(true);
  const busy = useRef(false);
  const touchStartX = useRef(null);

  const active = ((pos % COUNT) + COUNT) % COUNT;

  // Move by one card (or jump to a card) with a slide; ignore clicks mid-slide
  const go = useCallback((next) => {
    if (busy.current) return;
    busy.current = true;
    setAnimate(true);
    setPos(next);
  }, []);

  // After each slide, quietly jump from a copy back to the matching real card
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const timer = setTimeout(() => {
      if (pos < COUNT || pos >= COUNT * 2) {
        setAnimate(false);
        setPos(COUNT + (((pos % COUNT) + COUNT) % COUNT));
      }
      busy.current = false;
    }, reduceMotion ? 0 : SLIDE_MS);
    return () => clearTimeout(timer);
  }, [pos]);

  // Re-enable the slide on the frame after a silent jump
  useEffect(() => {
    if (animate) return undefined;
    const frame = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(frame);
  }, [animate]);

  const prev = () => go(pos - 1);
  const next = () => go(pos + 1);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
  };

  return (
    <section className="section-wrapper" id="projects">
      <div className="section-container">
        <div className="projects-head">
          <div className="section-header">
            <span className="section-badge">selected work</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Commercial WooCommerce plugins, web apps, and WordPress websites I've built. Open any project for the full story.
            </p>
          </div>
          <div className="projects-nav">
            <span className="projects-counter" aria-live="polite">
              {String(active + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
            </span>
            <button type="button" className="projects-arrow" onClick={prev} aria-label="Previous project">
              <ArrowLeft size={18} />
            </button>
            <button type="button" className="projects-arrow" onClick={next} aria-label="Next project">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          className="projects-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className={`projects-track ${animate ? "" : "no-anim"}`} style={{ "--pos": pos }}>
            {LOOP.map((project, i) => (
              <ProjectCard
                key={`${project.id}-${i}`}
                project={project}
                isClone={i < COUNT || i >= COUNT * 2}
              />
            ))}
          </div>
        </div>

        <div className="projects-dots">
          {projectsData.map((project, i) => (
            <button
              key={project.id}
              type="button"
              className={`projects-dot ${i === active ? "is-active" : ""}`}
              aria-label={`Show ${project.title}`}
              aria-current={i === active || undefined}
              onClick={() => go(COUNT + i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
