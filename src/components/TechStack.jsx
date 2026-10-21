import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function TechStack() {
  const getCatIcon = (icon) => {
    switch (icon) {
      case 'react': return <i className="fa-brands fa-react"></i>;
      case 'server': return <i className="fa-brands fa-node-js"></i>;
      case 'brain': return <i className="fa-solid fa-brain"></i>;
      case 'database': return <i className="fa-solid fa-database"></i>;
      case 'shield': return <i className="fa-solid fa-shield-halved"></i>;
      case 'tools': return <i className="fa-solid fa-toolbox"></i>;
      default: return <i className="fa-solid fa-code"></i>;
    }
  };

  const getCatColorClass = (idx) => {
    const classes = ['cat-cyan', 'cat-purple', 'cat-emerald', 'cat-gold', 'cat-cyan', 'cat-purple'];
    return classes[idx % classes.length];
  };

  return (
    <section className="skills-section section-padding" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fa-solid fa-microchip"></i> Technical Repertoire
          </span>
          <h2 className="section-title">
            Engineered with Modern <span className="gradient-text gradient-cyan-purple">Tools & Technologies</span>
          </h2>
          <p className="section-subtitle">
            Categorized breakdown of Jay's technical competencies, libraries, frameworks, and architecture principles.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-categories-grid">
          {portfolioData.skillsCategories.map((category, cIdx) => (
            <div key={cIdx} className="skill-category-card glass-panel">
              <div className="cat-header">
                <div className={`cat-icon ${getCatColorClass(cIdx)}`}>
                  {getCatIcon(category.icon)}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-pills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
