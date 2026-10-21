import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import EyeTrackingAvatar from './EyeTrackingAvatar';

export default function Hero({ onOpenResume, onShowToast }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for role titles
  useEffect(() => {
    const roles = portfolioData.rolesList;
    const currentFullRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 90;

    if (!isDeleting && displayText === currentFullRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullRole.substring(0, displayText.length - 1)
          : currentFullRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const copyEmail = () => {
    sound.click();
    navigator.clipboard.writeText(portfolioData.personal.email);
    onShowToast(`Copied ${portfolioData.personal.email} to clipboard!`);
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        {/* Left Column: Intro & Impact */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="pulsing-radar"></span>
            <span>Full Stack Software Engineer & GenAI Builder</span>
          </div>

          <h1 className="hero-headline">
            Hello, I'm <span className="gradient-text gradient-cyan-purple">Jay Mange</span> 
          </h1>

          <div className="dynamic-typed-box">
            <span className="static-prefix">Specialized in</span>
            <span className="typed-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-bio">
            A Full Stack Software Developer with commercial
            experience at <strong>Hyperlink Infosystem</strong> and <strong>AristoMax Technologies</strong>.
            I build high-throughput <strong>Node.js/Express</strong> backends APIs, reactive <strong>React.js</strong> frontends,
            resilient <strong>WebSocket</strong> real-time systems, and deeply integrated <strong>Google Gemini AI</strong> applications.
          </p>

          {/* Quick Stats Grid */}
          <div className="hero-stats-row">
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">
                  {stat.number}
                  <span className="stat-accent">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              className="btn btn-primary btn-glow"
            >
              <span>Explore Featured Work</span>
              <i className="fa-solid fa-arrow-down"></i>
            </a>

            <button
              className="btn btn-glass"
            >
              <i className="fa-solid fa-file-pdf"></i>
              <span>Interactive Resume</span>
            </button>

            <a
              href={portfolioData.personal.resumePdf}
              download="Jay_Mange_Resume.pdf"
              className="btn btn-glass"
              title="Download Official PDF Resume"
            >
              <i className="fa-solid fa-download"></i>
              <span>Download PDF</span>
            </a>

            <button
              className="btn btn-glass"
              onClick={copyEmail}
              title="Copy Email"
            >
              <i className="fa-solid fa-copy"></i>
              <span>Copy Email</span>
            </button>
          </div>

          {/* Social Quick Links with verified genuine links */}
          <div className="hero-social-bar">
            <span className="social-label">Verified Profiles:</span>
            <div className="social-pills">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener"
                className="social-pill"
                onClick={() => sound.click()}
                title="GitHub - @mjbhanu03"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub (mjbhanu03)</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener"
                className="social-pill"
                onClick={() => sound.click()}
                title="LinkedIn - Jay Mange"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener"
                className="social-pill"
                onClick={() => sound.click()}
                title="LeetCode Profile"
              >
                <i className="fa-solid fa-code"></i>
                <span>LeetCode</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="social-pill"
                onClick={() => sound.click()}
              >
                <i className="fa-solid fa-envelope"></i>
                <span>{portfolioData.personal.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="social-pill"
                onClick={() => sound.click()}
              >
                <i className="fa-solid fa-phone"></i>
                <span>{portfolioData.personal.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Developer Avatar */}
        <div className="hero-right">
          <div className="developer-3d-card">

            {/* Display Interactive Eye Tracking 3D Developer Avatar */}
            <div className="card-portrait-wrapper avatar-main-frame">
              <EyeTrackingAvatar />

              {/* 4 Floating Tech Badges */}
              <div className="floating-badge badge-top-left">
                <i className="fa-brands fa-react tech-icon-react"></i>
                <span>React.js</span>
              </div>
              <div className="floating-badge badge-top-right">
                <i className="fa-brands fa-node-js tech-icon-node"></i>
                <span>Node & Express</span>
              </div>
              <div className="floating-badge badge-bottom-left">
                <i className="fa-solid fa-database tech-icon-db"></i>
                <span>MySQL & Redis</span>
              </div>
              <div className="floating-badge badge-bottom-right">
                <i className="fa-solid fa-brain tech-icon-ai"></i>
                <span>Gemini GenAI</span>
              </div>
            </div>


            {/* Code Snippet Box */}
            <div className="code-snippet-box">
              <div className="code-line">
                <span className="token-keyword">const</span> <span className="token-var">developer</span> = &#123;
              </div>
              <div className="code-line indent">
                <span className="token-prop">name</span>: <span className="token-str">'{portfolioData.personal.name}'</span>,
              </div>
              <div className="code-line indent">
                <span className="token-prop">github</span>: <span className="token-str">'mjbhanu03'</span>,
              </div>
              <div className="code-line indent">
                <span className="token-prop">skills</span>: [<span className="token-str">'MERN'</span>, <span className="token-str">'GenAI'</span>, <span className="token-str">'WebSockets'</span>],
              </div>
              <div className="code-line indent">
                <span className="token-prop">hireReady</span>: <span className="token-bool">true</span>
              </div>
              <div className="code-line">&#125;;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
