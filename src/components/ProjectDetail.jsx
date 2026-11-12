import React, { useEffect } from "react";
import { projectsData, personalInfo } from "../data/portfolioData";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, MessageSquare, Clock } from "lucide-react";
import { GitHubIcon } from "./Icons";
import ProjectCover from "./ProjectCover";
import BrowserFrame from "./BrowserFrame";

function TextSection({ heading, paragraphs }) {
  return (
    <section className="detail-section">
      <h2 className="detail-heading">{heading}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

export default function ProjectDetail({ slug }) {
  const index = projectsData.findIndex((p) => p.id === slug);
  const project = projectsData[index];

  useEffect(() => {
    if (!project) return undefined;
    const previousTitle = document.title;
    document.title = `${project.title} | ${personalInfo.name}`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="project-detail">
        <div className="detail-container">
          <a href="#projects" className="detail-back">
            <ArrowLeft size={16} />
            Back to projects
          </a>
          <h1 className="detail-title">Project not found</h1>
          <p className="detail-summary">This project may have been moved or renamed.</p>
        </div>
      </section>
    );
  }

  const next = projectsData[(index + 1) % projectsData.length];
  const liveHost = project.live ? new URL(project.live).host : "";
  // Address bar text: the live site's domain, or a label such as "WooCommerce → Order Board"
  const galleryProps = (shot) => ({
    src: shot.src,
    alt: `${project.title}: ${shot.caption}`,
    caption: shot.caption,
    url: liveHost || project.frameLabel,
    secure: Boolean(liveHost),
    plain: Boolean(shot.plain)
  });

  return (
    <article className="project-detail">
      <div className="detail-container">
        <a href="#projects" className="detail-back">
          <ArrowLeft size={16} />
          Back to projects
        </a>

        <header className="detail-header">
          <div className="project-badges">
            {project.status && (
              <span className={`project-status-badge ${project.status === "Live" ? "is-live" : ""}`}>
                {project.status}
              </span>
            )}
            <span className="project-category-badge">{project.category}</span>
          </div>
          <h1 className="detail-title">{project.title}</h1>
          {project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}
          <p className="detail-summary">{project.summary}</p>

          <div className="detail-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                <ExternalLink size={17} />
                <span>Live Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={project.live ? "btn-secondary" : "btn-primary"}
              >
                <GitHubIcon size={17} />
                <span>View Code</span>
              </a>
            )}
            {!project.github && !project.live && (
              <a href="#contact" className="btn-secondary">
                <MessageSquare size={17} />
                <span>Ask me about this work</span>
              </a>
            )}
          </div>
        </header>

        {project.gallery ? (
          <div className="detail-gallery">
            <BrowserFrame
              {...galleryProps(project.gallery[0])}
              className="detail-showcase"
              eager
            />
            {project.gallery.length > 1 && (
              <div className={`detail-gallery-grid ${project.gallery.length === 2 ? "is-single" : ""}`}>
                {project.gallery.slice(1).map((shot) => (
                  <BrowserFrame key={shot.caption} {...galleryProps(shot)} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <ProjectCover project={project} className="detail-cover" />
        )}

        <div className="detail-body">
          <div className="detail-main">
            {project.story ? (
              project.story.map((block) => (
                <TextSection key={block.heading} heading={block.heading} paragraphs={block.paragraphs} />
              ))
            ) : (
              <TextSection heading="Overview" paragraphs={project.overview} />
            )}

            {project.palette && (
              <div className="detail-palette">
                {project.palette.map((color) => (
                  <div key={color.hex} className="palette-swatch">
                    <span className="palette-chip" style={{ background: color.hex }} />
                    <span className="palette-name">{color.name}</span>
                    <span className="palette-hex">{color.hex}</span>
                    <span className="palette-use">{color.use}</span>
                  </div>
                ))}
              </div>
            )}

            {project.features && (
              <section className="detail-section">
                <h2 className="detail-heading">Key features</h2>
                <div className="detail-modules">
                  {project.features.map((feature, i) => (
                    <div key={feature.title} className="detail-module">
                      <div className="detail-module-header">
                        <span className="detail-module-index">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="detail-module-title">{feature.title}</h3>
                      </div>
                      <p className="detail-module-text">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.modules && (
              <section className="detail-section">
                <h2 className="detail-heading">{project.modulesTitle || "Key features & modules"}</h2>
                <div className="detail-modules">
                  {project.modules.map((module, i) => (
                    <div key={module.title} className="detail-module">
                      <div className="detail-module-header">
                        <span className="detail-module-index">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="detail-module-title">{module.title}</h3>
                        {module.status && (
                          <span className="project-status-badge">{module.status}</span>
                        )}
                      </div>
                      <ul>
                        {module.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.technical && (
              <section className="detail-section">
                <h2 className="detail-heading">{project.technicalTitle || "Technical highlights"}</h2>
                <div className="detail-technical">
                  {project.technical.map((item) => (
                    <div key={item.title} className="detail-technical-item">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.challenges && (
              <section className="detail-section">
                <h2 className="detail-heading">Challenges &amp; solutions</h2>
                <div className="detail-challenges">
                  {project.challenges.map((item) => (
                    <div key={item.problem} className="challenge-row">
                      <div>
                        <span className="challenge-label">Challenge</span>
                        <p>{item.problem}</p>
                      </div>
                      <div>
                        <span className="challenge-label is-solution">Solution</span>
                        <p>{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.highlights && (
              <section className="detail-section">
                <h2 className="detail-heading">
                  {project.highlightsTitle || (project.modules ? "Development highlights" : "Key features")}
                </h2>
                <ul className="detail-features">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.learnings && (
              <TextSection heading={project.learnings.heading} paragraphs={project.learnings.paragraphs} />
            )}

            {project.nextSteps && (
              <section className="detail-section">
                <h2 className="detail-heading">Next steps</h2>
                <ul className="detail-features">
                  {project.nextSteps.map((item) => (
                    <li key={item}>
                      <ArrowRight size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.myRole && (
              <section className="detail-section">
                <h2 className="detail-heading">My role</h2>
                <p>{project.myRole}</p>
              </section>
            )}

            {project.statusNote && (
              <section className="detail-section">
                <h2 className="detail-heading">Project status</h2>
                <div className="detail-status-note">
                  <Clock size={20} />
                  <p>{project.statusNote}</p>
                </div>
              </section>
            )}
          </div>

          <aside className="detail-sidebar">
            <dl className="detail-meta-list">
              <div>
                <dt>Timeline</dt>
                <dd>{project.period}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.category}</dd>
              </div>
              {project.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
              )}
              {project.status && (
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
              )}
            </dl>

            <h3 className="detail-meta-heading">Tech stack</h3>
            {project.techStack ? (
              <dl className="detail-tech-list">
                {project.techStack.map((row) => (
                  <div key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <ul className="project-tags-list">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-tag-pill">{tag}</li>
                ))}
              </ul>
            )}
          </aside>
        </div>

        {next.id !== project.id && (
          <a href={`#/projects/${next.id}`} className="detail-next">
            <span className="detail-next-label">Next project</span>
            <span className="detail-next-title">
              {next.title}
              <ArrowRight size={22} />
            </span>
          </a>
        )}
      </div>
    </article>
  );
}
