import React from "react";
import { projectsData } from "../data/portfolioData";
import { ArrowRight } from "lucide-react";
import ProjectCover from "./ProjectCover";

const MAX_TAGS = 3;

export default function Projects() {
  return (
    <section className="section-wrapper bg-subtle" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">FEATURED WORK</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Commercial WooCommerce plugins and the web apps I've built. Open any project for the full story.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const extraTags = project.tags.length - MAX_TAGS;
            return (
              <a key={project.id} href={`#/projects/${project.id}`} className="project-card">
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
          })}
        </div>

        <p className="projects-swipe-hint" aria-hidden="true">
          Swipe to see more <ArrowRight size={14} />
        </p>
      </div>
    </section>
  );
}
