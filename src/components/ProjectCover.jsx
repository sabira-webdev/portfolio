import React from "react";
import { Puzzle, ClipboardCheck, KanbanSquare, Wrench, Layers } from "lucide-react";

const ICONS = { Puzzle, ClipboardCheck, KanbanSquare, Wrench };

// Shows the project screenshot, or a themed placeholder with the project icon
// until a screenshot is added in portfolioData.js.
export default function ProjectCover({ project, className = "" }) {
  const Icon = ICONS[project.icon] || Layers;

  return (
    <div className={`project-cover ${className}`}>
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={`${project.title} ${project.imageIsConcept ? "design concept" : "screenshot"}`}
            className="project-cover-img"
            loading="lazy"
          />
          {project.imageIsConcept && <span className="project-cover-tag">Concept preview</span>}
        </>
      ) : (
        <div className="project-cover-placeholder" aria-hidden="true">
          <span className="project-cover-icon">
            <Icon size={36} />
          </span>
        </div>
      )}
    </div>
  );
}
