import React, { useState } from "react";
import { skillsData } from "../data/portfolioData";
import { 
  Code2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Monitor, 
  Database, 
  Sparkles 
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={20} />;
      case "Layers":
        return <Layers size={20} />;
      case "Cpu":
        return <Cpu size={20} />;
      case "ShieldCheck":
        return <ShieldCheck size={20} />;
      case "Monitor":
        return <Monitor size={20} />;
      case "Database":
        return <Database size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  const categories = [
    { id: "all", label: "All Skills" },
    ...skillsData.map((group) => ({ id: group.category, label: group.category }))
  ];

  const displayedGroups = selectedCategory === "all"
    ? skillsData
    : skillsData.filter((g) => g.category === selectedCategory);

  return (
    <section className="section-wrapper bg-subtle" id="skills">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">TECH STACK & TOOLING</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of languages, frameworks, developer tools, and architecture principles I apply in production.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Groups Grid */}
        <div className="skills-categories-container">
          {displayedGroups.map((group) => (
            <div key={group.category} className="skills-group-card">
              <div className="group-header">
                <div className="group-icon-badge">
                  {getCategoryIcon(group.icon)}
                </div>
                <h3 className="group-title">{group.category}</h3>
              </div>

              <div className="skills-pills-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill-card">
                    <div className="skill-pill-top">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Highlight Banner */}
        <div className="ai-highlight-card">
          <div className="ai-card-icon">
            <Sparkles size={28} />
          </div>
          <div className="ai-card-content">
            <h4 className="ai-card-title">AI-Augmented Engineering Practice</h4>
            <p className="ai-card-desc">
              I use <strong>Claude</strong>, <strong>ChatGPT</strong>, <strong>Gemini</strong>, <strong>Cursor</strong>, and <strong>Antigravity</strong> to speed up debugging, refactoring, and documentation, while reviewing every change to keep production code secure and maintainable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
