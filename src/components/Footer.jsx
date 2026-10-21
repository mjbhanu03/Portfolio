import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#hero" className="brand-logo">
              <div className="logo-mark">
                <span className="logo-letters">JM</span>
              </div>
              <div className="brand-text">
                <span className="brand-name">{portfolioData.personal.name}</span>
                <span className="brand-tagline">Full Stack MERN & GenAI Engineer</span>
              </div>
            </a>
            <p className="footer-bio" style={{ marginTop: '1rem' }}>
              Crafting scalable software systems, resilient REST APIs, real-time WebSockets, and AI integrations with relentless engineering excellence.
            </p>
          </div>

          {/* Navigation Col */}
          <div className="footer-nav-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Tech Stack</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Featured Works Col */}
          <div className="footer-projects-col">
            <h4>Featured Works</h4>
            <ul>
              <li><a href="#project-job-portal">Indeed Job Portal (AI)</a></li>
              <li><a href="#project-eauction">eAuction Live Platform</a></li>
              <li><a href="#project-saleh">Saleh E-Commerce API</a></li>
              <li><a href="#project-car-booking">Car Booking Platform</a></li>
            </ul>
          </div>

          {/* Direct Connect Col */}
          <div className="footer-cta-col">
            <h4>Direct Connect</h4>
            <p>Ready to bring high-impact full-stack expertise to your engineering team?</p>
            <a 
              href={`mailto:${portfolioData.personal.email}`} 
              className="btn btn-sm btn-primary"
            >
              {portfolioData.personal.email}
            </a>
            <span className="footer-phone">{portfolioData.personal.phone}</span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved. Engineered with React & modern web aesthetics.</p>
          <div className="footer-social-links">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={portfolioData.personal.leetcode} target="_blank" rel="noopener" title="LeetCode">
              <i className="fa-solid fa-code"></i>
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} title="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <button className="back-to-top-btn" onClick={scrollToTop} title="Back to top">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
