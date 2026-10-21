import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="custom-modal open" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog glass-panel">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-content">
          <div style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
            <div>
              <span className="project-badge badge-flagship" style={{ position: 'static', display: 'inline-flex', marginBottom: '0.5rem' }}>
                {project.badge}
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800 }}>
                {project.title}
              </h2>
              <h4 style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                {project.subtitle}
              </h4>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href={project.github} target="_blank" rel="noopener" className="btn btn-glass btn-sm">
                <i className="fa-brands fa-github"></i>
                <span>Source Code</span>
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener" className="btn btn-primary btn-sm">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Live View</span>
              </a>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Architecture Breakdown Card */}
          {project.architecture && (
            <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-sitemap"></i> System Architecture & Data Flow
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
                {Object.entries(project.architecture).map(([layer, desc], idx) => (
                  <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
                    <span style={{ textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-purple)', display: 'block', marginBottom: '0.25rem', fontWeight: 700 }}>
                      {layer}
                    </span>
                    <span style={{ color: 'var(--text-secondary)' }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Bullet Points */}
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Key Engineering Deliverables & Implementation Details:
          </h4>
          <ul className="experience-bullets" style={{ marginBottom: '1.5rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx}>
                <i className="fa-solid fa-caret-right" style={{ color: 'var(--accent-cyan)' }}></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Full Tech Stack Pills */}
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
            Technologies & Libraries Utilized:
          </h4>
          <div className="project-tags">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="p-tag" style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(0, 240, 255, 0.2)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
