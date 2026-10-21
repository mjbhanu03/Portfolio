import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="education-section section-padding" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i> Academic Excellence
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text gradient-cyan-purple">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Rigorous computer science curriculum, competitive coding, and campus technical leadership.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="edu-card glass-panel">
              <div className="edu-header">
                <div className={`edu-icon-badge ${idx === 1 ? 'badge-bca' : ''}`}>
                  <i className={`fa-solid ${idx === 0 ? 'fa-graduation-cap' : 'fa-building-columns'}`}></i>
                </div>
                <div className="edu-title-block">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  {edu.college && <span className="college-subname">{edu.college}</span>}
                </div>
                <div className="edu-year-badge">{edu.period}</div>
              </div>

              <div className="edu-score-highlight">
                <div className="score-pill">
                  <span className="score-label">Graduation Score:</span>
                  <span className="score-value">{edu.score}</span>
                </div>
                <span className="score-subtext">First Class with Distinction</span>
              </div>

              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Honors & Key Activities Banner */}
        <div className="achievements-card glass-panel">
          <div className="achieve-heading">
            <i className="fa-solid fa-trophy text-gold"></i>
            <h3>Honors, Activities & Competitive Accomplishments</h3>
          </div>

          <div className="achieve-grid">
            {portfolioData.achievements.map((ach, idx) => (
              <div key={idx} className="achieve-item">
                <div className={`achieve-icon ${idx === 0 ? 'medal-silver' : idx === 1 ? 'tech-fest' : 'leetcode-badge'}`}>
                  <i className={`fa-solid ${ach.icon === 'trophy' ? 'fa-medal' : ach.icon === 'cpu' ? 'fa-microchip' : 'fa-code'}`}></i>
                </div>
                <div className="achieve-content">
                  <h4>{ach.title}</h4>
                  <p>
                    {ach.description}{' '}
                    {ach.link && (
                      <a href={ach.link} target="_blank" rel="noopener">
                        View Profile &rarr;
                      </a>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
