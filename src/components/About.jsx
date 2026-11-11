import React from "react";
import { 
  Puzzle, 
  Terminal, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Puzzle className="pillar-icon" size={22} />,
      title: "Extensible Plugin Architecture",
      desc: "Deep mastery of WordPress hooks, filters, custom post types, custom taxonomies, and REST endpoints for maintainable and scalable plugins."
    },
    {
      icon: <Terminal className="pillar-icon" size={22} />,
      title: "Full-Stack & React UI",
      desc: "Combining robust PHP and MySQL backend logic with modern React.js frontend interfaces to deliver snappy, intuitive admin dashboards."
    },
    {
      icon: <Sparkles className="pillar-icon" size={22} />,
      title: "AI-Augmented Velocity",
      desc: "Using AI-assisted tools (Claude, ChatGPT, Gemini, Cursor, Antigravity) for faster debugging, refactoring, and documentation."
    },
    {
      icon: <ShieldCheck className="pillar-icon" size={22} />,
      title: "Security & Optimization",
      desc: "Strict adherence to nonces, data sanitization, transient caching, and database query optimization across major core updates."
    }
  ];

  return (
    <section className="section-wrapper" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ABOUT ME</span>
          <h2 className="section-title">
            Engineering Scalable Web & <span className="gradient-text">Plugin Solutions</span>
          </h2>
          <p className="section-subtitle">
            Bridging complex backend business logic with high-performance user experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Left bio column */}
          <div className="about-bio-card">
            <h3 className="about-card-title">Professional Summary</h3>
            <p className="about-bio-text">
              I am a <strong>Web Developer with nearly 4 years of experience</strong> building, maintaining, and supporting commercial WordPress and WooCommerce plugins using PHP, JavaScript, React.js, and MySQL.
            </p>
            <p className="about-bio-text">
              Currently working at <strong>Acodez IT Solutions</strong>, I develop and maintain 3 commercial WooCommerce plugins (checkout fields, email customization, and PDF invoices & packing slips), ship regular releases aligned with WooCommerce Marketplace guidelines, and support a live user base through the WordPress support forum.
            </p>
            <p className="about-bio-text">
              Outside work I build React apps such as a <strong>Food Safety Management System</strong> on Supabase and an <strong>Order Kanban Board</strong> for WooCommerce. I am based in <strong>Dubai, UAE</strong>.
            </p>

            <div className="about-quick-facts">
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>3 commercial WooCommerce plugins in active development</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>WordPress Hooks, Filters, CPTs & REST API</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>React.js, Vite, Tailwind CSS & Supabase</span>
              </div>
              <div className="fact-item">
                <CheckCircle2 size={18} className="fact-icon" />
                <span>B.Tech, University of Calicut</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#experience" className="btn-secondary">
                <span>View Career Timeline</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right pillars column */}
          <div className="about-pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
