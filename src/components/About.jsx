import { portfolioData } from '../data/portfolioData';

export default function About() {

  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        {/* Section Header */}
        <div className=" text-center">
          <span className="section-tag">
            <i className="fa-solid fa-id-card-clip"></i> Engineer Spotlight & Roots
          </span>
        </div>

        {/* Top Showcase: Engineer Portrait Card + Background & Philosophy */}
        <div className="about-spotlight-grid">
          {/* Left Column: Executive Portrait Card with Real/Studio Switcher */}
          <div className="engineer-card glass-panel">


            {/* Portrait Frame */}
            <div className="about-portrait-frame">
              <img
                src={portfolioData.personal.aiAvatar}
                alt={portfolioData.personal.name}
                className="about-portrait-img"
              />
              <div className="portrait-status-ribbon">
                <span className="live-dot"></span>
                <span>Open for Full-Time Roles</span>
              </div>
            </div>

            {/* Engineer Profile Details */}
            <div className="engineer-details">
              <h3 className="engineer-name">{portfolioData.personal.name}</h3>
              <p className="engineer-tagline">{portfolioData.personal.role}</p>

              <div className="engineer-meta-list">
                <div className="meta-item">
                  <i className="fa-solid fa-location-dot text-cyan"></i>
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="meta-item">
                  <i className="fa-solid fa-graduation-cap text-purple"></i>
                  <span>MCA (GLS University) — CGPA 8.44/10</span>
                </div>
                <div className="meta-item">
                  <i className="fa-solid fa-briefcase text-emerald"></i>
                  <span>Hyperlink Infosystem & AristoMax Tech</span>
                </div>
              </div>

              {/* Direct Quick Actions */}
              <div className="engineer-actions">
                <a
                  href={portfolioData.personal.resumePdf}
                  download="Jay_Mange_Resume.pdf"
                  className="btn btn-sm btn-primary btn-block"
                >
                  <i className="fa-solid fa-download"></i>
                  <span>Download Official CV</span>
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="btn btn-sm btn-glass btn-block"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>Contact Jay</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Background Story & Philosophy */}
          <div className="about-story-card glass-panel">
            <div className="about-icon-header">
              <div className="icon-avatar-glow">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div>
                <h3>Full Stack Engineering Philosophy</h3>
                <span className="story-sub">Architecture First • Scalability Always • High Velocity</span>
              </div>
            </div>

            <p>
              I am a results-oriented software engineer completed my <strong>Master of Computer Applications (MCA)</strong>
              at <strong>GLS University, Ahmedabad</strong> (CGPA: 8.44/10) with a strong foundational degree in <strong>BCA</strong>
              from <strong>Saurashtra University</strong> (71.27%).
            </p>

            <p>
              My commercial experience stems from developing enterprise software at <strong>Hyperlink Infosystem</strong> — one of India’s
              leading IT solutions firms — where I worked hands-on across React.js, Express.js, and MySQL. I engineered
              production REST APIs following strict <strong>MVC and 4-layer architectures</strong> (Service, Controller, Repository, Validator),
              delivering high maintainability, resilient WebSocket concurrency (Map/Set), and bank-grade security with
              <strong> JWT authentication, bcrypt salted hashing, and AES payload encryption</strong>.
            </p>

            <p>
              Beyond traditional CRUD applications, I have architected <strong>Generative AI applications</strong> with Google Gemini API
              featuring prompt pipelines, candidate resume ingestion, and real-time streaming interfaces.
            </p>

            <div className="key-traits-grid">
              <div className="trait-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Clean MVC & 4-Layer Modular Code</span>
              </div>
              <div className="trait-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>High-Concurrency WebSocket Engines</span>
              </div>
              <div className="trait-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Deep GenAI & Gemini API Pipelines</span>
              </div>
              <div className="trait-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>Two-Layer Frontend & Backend Validation</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architecture Pillars Row */}
        <div className="architecture-pillars-wrapper" style={{ marginTop: '3rem' }}>
          <div className="pillar-card glass-panel">
            <div className="pillar-icon pillar-cyan">
              <i className="fa-solid fa-network-wired"></i>
            </div>
            <div className="pillar-info">
              <h4>Production RESTful & WebSocket Backends</h4>
              <p>
                Authored 50+ REST APIs with full Swagger UI documentation, Joi/Yup schema validation, multi-tenant socket connection management with Map/Set, and AES encryption.
              </p>
            </div>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon pillar-purple">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <div className="pillar-info">
              <h4>GenAI & Prompt Engineering</h4>
              <p>
                Integrated Google Gemini API for personalized contextual job assistance, dynamic prompt construction from resumes, and persistent one-chat-per-entity conversation threads.
              </p>
            </div>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon pillar-emerald">
              <i className="fa-solid fa-database"></i>
            </div>
            <div className="pillar-info">
              <h4>Optimized Relational & NoSQL Data Architecture</h4>
              <p>
                Extensive hands-on schema modeling with MySQL, Sequelize ORM, MongoDB, SQLite, and Redis caching. Mastered query indexing and TanStack Query state synchronization.
              </p>
            </div>
          </div>

          <div className="pillar-card glass-panel">
            <div className="pillar-icon pillar-gold">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div className="pillar-info">
              <h4>Modern Reactive Frontend Systems</h4>
              <p>
                Built responsive, high-fidelity React applications with Redux Toolkit, Formik/Yup, Axios interceptors, dynamic PDF semantic search viewers, and localized internationalization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
