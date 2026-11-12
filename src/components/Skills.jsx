import React from "react";
import { skillsData } from "../data/portfolioData";
import { Code2, Layers, Monitor, Database, ShieldCheck, Cpu, Sparkles } from "lucide-react";

const ICONS = { Code2, Layers, Monitor, Database, ShieldCheck, Cpu };

export default function Skills() {
  return (
    <section className="section-wrapper" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">skills</span>
          <h2 className="section-title">
            Tools I <span className="gradient-text">build with.</span>
          </h2>
          <p className="section-subtitle">The languages, platforms, and practices I use every day.</p>
        </div>

        <div className="skills-list">
          {skillsData.map((group) => {
            const Icon = ICONS[group.icon] || Sparkles;
            return (
              <div key={group.category} className="skills-row">
                <div className="skills-row-head">
                  <Icon size={18} className="skills-row-icon" />
                  <h3 className="skills-row-title">{group.category}</h3>
                </div>
                <ul className="skills-row-items">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="skill-item" title={skill.desc}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
