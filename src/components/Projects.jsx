import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'mern', label: 'MERN Stack' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'realtime', label: 'Real-Time WebSockets' }
  ];

  const filteredProjects = portfolioData.projects.filter((p) =>
    activeFilter === 'all' ? true : p.category.includes(activeFilter)
  );

  const getBadgeClass = (badge) => {
    if (badge.includes('Flagship')) return 'badge-flagship';
    if (badge.includes('Live')) return 'badge-realtime';
    if (badge.includes('Enterprise')) return 'badge-backend';
    return 'badge-mern';
  };

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fa-solid fa-rocket"></i> Portfolio Showcase
          </span>
          <h2 className="section-title">
            Production-Grade <span className="gradient-text gradient-cyan-purple">Full-Stack Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world systems highlighting complex backend architectures, GenAI APIs, real-time WebSockets, and secure databases.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card glass-panel" id={`project-${project.id}`}>
              {/* Card Banner Image */}
              <div className="project-banner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button
                    className="btn btn-sm btn-glass"
                    onClick={() => onSelectProject(project)}
                  >
                    <i className="fa-solid fa-eye"></i> Quick Architecture View
                  </button>
                </div>
                <span className={`project-badge ${getBadgeClass(project.badge)}`}>
                  <i className="fa-solid fa-crown"></i> {project.badge}
                </span>
              </div>

              {/* Project Body */}
              <div className="project-body">
                <div className="project-meta-row">
                  <span className="project-year">{project.year}</span>
                  <span className="project-type">
                    <i className="fa-solid fa-layer-group"></i> {project.apisCount}
                  </span>
                </div>

                <h3 className="project-title">
                  {project.title}
                  <span className="sub-title">— {project.subtitle}</span>
                </h3>

                <p className="project-description">{project.description}</p>

                {/* Key Highlights */}
                <ul className="project-spec-list">
                  {project.highlights.slice(0, 3).map((hl, hIdx) => (
                    <li key={hIdx}>
                      <i className={`fa-solid fa-check ${hIdx === 0 ? 'text-cyan' : hIdx === 1 ? 'text-purple' : 'text-emerald'}`}></i>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="p-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-sm btn-glass"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>GitHub Repo</span>
                  </a>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onSelectProject(project)}
                  >
                    <i className="fa-solid fa-circle-info"></i>
                    <span>Deep Dive Specs</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
