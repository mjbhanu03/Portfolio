import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
    window.print();
  };

  return (
    <div className="custom-modal resume-modal open" role="dialog" aria-modal="true" id="resumeModal">
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-dialog glass-panel resume-dialog">
        {/* Top Actions */}
        <div className="modal-top-actions">
          <div className="modal-badge-info">
            <i className="fa-solid fa-file-invoice"></i>
            <span>Official Curriculum Vitae — Jay Mange</span>
          </div>
          <div className="modal-action-buttons">
            <button className="btn btn-sm btn-primary" onClick={handlePrint}>
              <i className="fa-solid fa-print"></i>
              <span>Print / Save as PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Printable ATS Resume */}
        <div className="resume-paper" id="printableResumeArea">
          {/* Header */}
          <header className="resume-paper-header">
            <h1 className="r-name">JAY MANGE</h1>
            <div className="r-title">Full Stack Developer (MERN Stack)</div>
            <div className="r-contact-line">
              <span><i className="fa-solid fa-location-dot"></i> Ahmedabad, Gujarat</span>
              <span>&bull;</span>
              <span><i className="fa-solid fa-phone"></i> +91 7016515225</span>
              <span>&bull;</span>
              <a href="mailto:jaymange52@gmail.com"><i className="fa-solid fa-envelope"></i> jaymange52@gmail.com</a>
              <span>&bull;</span>
              <a href="https://github.com/mjbhanu03" target="_blank" rel="noopener">GitHub</a>
              <span>&bull;</span>
              <a href="https://www.linkedin.com/in/jay-mange-6a18a428a" target="_blank" rel="noopener">LinkedIn</a>
              <span>&bull;</span>
              <a href="https://leetcode.com/u/jaymange/" target="_blank" rel="noopener">LeetCode</a>
            </div>
          </header>

          {/* Experience */}
          <section className="r-section">
            <h2 className="r-heading">EXPERIENCE</h2>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Software Engineer Trainee — Hyperlink Infosystem, Ahmedabad</span>
                <span className="r-date">Jan 2026 – Jul 2026 (6 months)</span>
              </div>
              <ul className="r-bullet-list">
                <li>Worked as a Full Stack Developer Fresher across React.js, Express.js and MySQL.</li>
                <li>Developed React.js applications using Hooks, Formik, Yup and Axios for form handling, validation and API integration.</li>
                <li>Built and maintained REST APIs with Node.js, Express.js and MySQL following MVC architecture, with JWT authentication and authorization.</li>
                <li>Worked with middleware, Multer, Swagger API documentation and Postman for testing and debugging.</li>
              </ul>
            </div>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">React Developer Intern — AristoMax Technologies Pvt. Ltd., Ahmedabad</span>
                <span className="r-date">Jun 2025 – Jul 2025 (2 months)</span>
              </div>
              <ul className="r-bullet-list">
                <li>Built a React.js feature for a PDF viewer with semantic search, highlighting matched text for quick reference.</li>
                <li>Explored n8n workflow automation and Power BI for analytics and data visualization.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="r-section">
            <h2 className="r-heading">PROJECTS</h2>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Indeed Job Portal</span>
                <span className="r-links">
                  <a href="https://github.com/mjbhanu03/indeed" target="_blank" rel="noopener">GitHub</a> | <a href="https://indeed.jaymange263.workers.dev/" target="_blank" rel="noopener">Live Demo</a>
                </span>
              </div>
              <div className="r-subtech">React.js, Redux Toolkit, TanStack Query, Node.js, Express.js, MySQL</div>
              <ul className="r-bullet-list">
                <li>Built a full-stack job portal with 21 REST APIs, JWT authentication, forgot/reset password flow using Nodemailer, and AES encryption for sensitive request/response data.</li>
                <li>Implemented a live job feed with TanStack Query caching and user-data synchronization to reduce redundant API calls.</li>
                <li>Built a dual-file upload system using Multer for resumes and cover letters with separate storage paths and independent validation.</li>
                <li>Enforced two-layer validation using Joi on the backend and Yup/Formik on the frontend, with multi-language API responses via localizify.</li>
                <li>Integrated Google Gemini API for an AI-powered job assistant using job description, resume and cover letter context for personalized responses.</li>
                <li>Implemented persistent one-chat-per-job conversations, allowing users to return to existing job-specific chat history.</li>
                <li>Implemented WebSocket-based real-time messaging/updates with multi-tab and multi-connection handling using Map/Set-based socket management.</li>
                <li>Added real-time message handling and automatic UI refresh flow so newly received messages update the conversation without manual page refresh.</li>
                <li>Deployed the AI-enabled full-stack application to production with server-side Gemini integration and environment-based API key configuration.</li>
              </ul>
            </div>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">eAuction Platform</span>
                <span className="r-links">
                  <a href="https://github.com/mjbhanu03/eAuction" target="_blank" rel="noopener">GitHub</a>
                </span>
              </div>
              <div className="r-subtech">React.js, Node.js, Express.js, Sequelize, MySQL</div>
              <ul className="r-bullet-list">
                <li>Built a full-stack online auction platform with JWT authentication and separate admin/user dashboards for listings, bids and payments.</li>
                <li>Developed an automated bid-processing engine handling live bid tracking, auto-bid logic and interval-based price refresh.</li>
                <li>Implemented payment/transaction tracking, region-state-city hierarchy management and secure document uploads using Multer.</li>
              </ul>
            </div>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Saleh — E-Commerce Platform API</span>
                <span className="r-links">
                  <a href="https://github.com/mjbhanu03/Saleh" target="_blank" rel="noopener">GitHub</a>
                </span>
              </div>
              <div className="r-subtech">Node.js, Express, MySQL</div>
              <ul className="r-bullet-list">
                <li>Built a modular REST backend using Service/Controller/Repository/Validator layers, JWT authentication and localizify.</li>
                <li>Designed a MySQL schema for catalog, cart, orders, wishlist, payments, advertisements, discounts and banners; documented APIs with Swagger UI.</li>
              </ul>
            </div>

            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Car Booking Platform</span>
                <span className="r-links">
                  <a href="https://github.com/mjbhanu03/Car-Booking" target="_blank" rel="noopener">GitHub</a>
                </span>
              </div>
              <div className="r-subtech">React.js, Redux Toolkit, Node.js, Express.js, MySQL</div>
              <ul className="r-bullet-list">
                <li>Built a full-stack car booking platform with role-based access for admin, user and public views using JWT, bcrypt and AES encryption.</li>
                <li>Developed car listing, booking and admin management modules with multi-language API support.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="r-section">
            <h2 className="r-heading">TECHNICAL SKILLS</h2>
            <div className="r-skill-line"><strong>Frontend:</strong> React.js, Redux Toolkit, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS</div>
            <div className="r-skill-line"><strong>Backend:</strong> Node.js, Express.js, REST APIs, WebSockets, Python, PHP, C++, C</div>
            <div className="r-skill-line"><strong>Database & Caching:</strong> MySQL, MongoDB, SQLite, Redis</div>
            <div className="r-skill-line"><strong>AI / GenAI:</strong> Google Gemini API, LLM Integration, Prompt Engineering, Dynamic Prompting, AI Chat Integration</div>
            <div className="r-skill-line"><strong>Libraries & Tools:</strong> TanStack Query, Axios, Formik, Yup, Joi, Multer, Git, GitHub, Swagger, Postman, Power BI, n8n</div>
            <div className="r-skill-line"><strong>Concepts:</strong> JWT Authentication, Authorization, CRUD, MVC Architecture, Real-Time Communication, Socket Connection Management, OOPs</div>
          </section>

          {/* Education */}
          <section className="r-section">
            <h2 className="r-heading">EDUCATION</h2>
            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Master of Computer Applications (MCA) — GLS University, Ahmedabad</span>
                <span className="r-date">2024 – May 2026</span>
              </div>
              <div>CGPA: <strong>8.44 / 10</strong></div>
            </div>
            <div className="r-item">
              <div className="r-item-header">
                <span className="r-bold">Bachelor of Computer Applications (BCA) — Saurashtra University</span>
                <span className="r-date">2021 – 2024</span>
              </div>
              <div>Smt. CZMG BCA College, Jamnagar | Percentage: <strong>71.27%</strong></div>
            </div>
          </section>

          {/* Achievements */}
          <section className="r-section">
            <h2 className="r-heading">ACHIEVEMENTS & ACTIVITIES</h2>
            <ul className="r-bullet-list">
              <li><strong>2nd Place</strong> — Code Rewind Event, GLS University</li>
              <li><strong>Participant</strong> — IoT Event (College Tech Fest)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
