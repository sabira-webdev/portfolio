import React from "react";
import { educationData, languagesData } from "../data/portfolioData";
import { GraduationCap, Calendar, MapPin, Languages } from "lucide-react";

export default function Education() {
  return (
    <section className="section-wrapper" id="education">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering foundations and continuous learning.
          </p>
        </div>

        <div className="education-cards-wrapper">
          {educationData.map((edu) => (
            <div key={edu.degree} className="education-card">
              <div className="edu-icon-col">
                <div className="edu-icon-badge">
                  <GraduationCap size={28} />
                </div>
              </div>

              <div className="edu-details-col">
                <div className="edu-header-row">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                  </div>
                  <div className="edu-meta-badges">
                    <span className="edu-meta-badge">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="edu-meta-badge">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="edu-description">{edu.description}</p>
              </div>
            </div>
          ))}

          <div className="edu-languages">
            <Languages size={18} className="edu-languages-icon" />
            <span className="edu-languages-label">Languages:</span>
            {languagesData.map((lang) => (
              <span key={lang} className="edu-meta-badge">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
