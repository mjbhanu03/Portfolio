import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="experience-section section-padding" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fa-solid fa-briefcase"></i> Work History
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text gradient-cyan-purple">Experience</span>
          </h2>
          <p className="section-subtitle">
            Real-world commercial software development experience in fast-paced software organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-track"></div>

          {portfolioData.experience.map((exp) => (
            <div
              key={exp.id}
              className={`timeline-item ${exp.featured ? 'timeline-featured' : ''}`}
            >
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>

              <div className="timeline-card glass-panel">
                <div className="timeline-card-header">
                  <div className="company-brand">
                    <div className={`company-logo-badge ${exp.id === 'aristomax' ? 'badge-aristomax' : ''}`}>
                      {exp.id === 'hyperlink' ? 'HI' : 'AM'}
                    </div>
                    <div>
                      <h3 className="role-title">{exp.role}</h3>
                      <h4 className="company-name">
                        {exp.website ? (
                          <a href={exp.website} target="_blank" rel="noopener">
                            {exp.company} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                    </div>
                  </div>

                  <div className="tenure-badge">
                    <i className="fa-regular fa-calendar-days"></i>
                    <span>{exp.period} ({exp.duration})</span>
                  </div>
                </div>

                <div className="role-summary">
                  <span className="role-tag">
                    <i className="fa-solid fa-check"></i> {exp.summary}
                  </span>
                </div>

                <ul className="experience-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <i className="fa-solid fa-caret-right"></i>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-stack-pills">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="stack-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
