import React from "react";
import { personalInfo, educationData } from "../data/portfolioData";
import profileImg from "../assets/sabira-k.webp";
import { Globe, Puzzle, LayoutDashboard, Wrench, ArrowRight, Download } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    desc: "Responsive business websites in WordPress and Elementor, SEO-ready and easy for clients to update."
  },
  {
    icon: Puzzle,
    title: "Plugins",
    desc: "Custom WordPress and WooCommerce plugins built on hooks, filters, custom post types, and the REST API."
  },
  {
    icon: LayoutDashboard,
    title: "Web apps",
    desc: "React applications and dashboards, backed by Supabase or the WordPress REST API."
  },
  {
    icon: Wrench,
    title: "Developer tools",
    desc: "Browser-based utilities, such as formatters and code generators, that speed up everyday work."
  }
];

export default function About() {
  const degree = educationData[0];

  const facts = [
    { label: "Experience", value: personalInfo.experienceLabel, sub: "Professional web development" },
    { label: "What I build", value: "Websites, plugins & web apps", sub: "WordPress, WooCommerce, React" },
    { label: "Core stack", value: "PHP, JavaScript, React.js", sub: "MySQL, Supabase, REST APIs" },
    { label: "Education", value: "B.Tech", sub: `University of Calicut, ${degree.period.slice(-4)}` }
  ];

  return (
    <section className="section-wrapper" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">about</span>
          <h2 className="section-title">
            Building for the web, <span className="gradient-text">end to end.</span>
          </h2>
        </div>

        <div className="about-layout">
          <aside className="about-profile">
            <div className="about-photo">
              <img src={profileImg} alt={`Portrait of ${personalInfo.name}`} width="900" height="900" loading="lazy" />
            </div>
            <div className="about-identity">
              <span className="about-name">{personalInfo.name}</span>
              <span className="about-role">{personalInfo.shortRole}</span>
              <span className="about-available">
                <span className="live-pulse" />
                {personalInfo.status}
              </span>
            </div>
          </aside>

          <div className="about-intro">
            <p className="about-text">
              I'm a Web Developer with {personalInfo.experienceLabel.toLowerCase()} of experience building for the
              web. I work across WordPress and modern JavaScript: business websites, custom plugins, React
              applications, and small tools that make everyday work easier.
            </p>
            <p className="about-text">
              I care about the details that make a project last: clean, readable code, security best practices,
              good performance, and layouts that work on every screen. I enjoy turning requirements into something
              simple to use, and I keep learning new tools so I can build better and faster.
            </p>

            <dl className="about-facts">
              {facts.map((fact) => (
                <div key={fact.label} className="about-fact">
                  <dt>{fact.label}</dt>
                  <dd>
                    <span className="about-fact-value">{fact.value}</span>
                    <span className="about-fact-sub">{fact.sub}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="about-actions">
              <a href="#projects" className="btn-primary">
                <span>View my work</span>
                <ArrowRight size={16} />
              </a>
              <a href={`${import.meta.env.BASE_URL}Sabira-K-CV.pdf`} download="Sabira-K-CV.pdf" className="btn-secondary">
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-services">
          <h3 className="about-services-title">What I do</h3>
          <div className="about-services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="about-service">
                  <Icon size={20} className="about-service-icon" />
                  <h4 className="about-service-name">{service.title}</h4>
                  <p className="about-service-desc">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
