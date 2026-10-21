import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar({
  theme = "dark",
  onToggleTheme,
  onOpenCopilot,
  onOpenCmdPalette,
  onOpenResume,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Live clock for Ahmedabad (IST - UTC+5:30)
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Status Announcement Bar */}
      <div className="top-status-bar">
        <div className="status-inner container">
          <div>
            <span className="status-pulse-dot"></span>
            <span className="status-text">
              <strong>Open for Opportunities</strong> — Full-Time Software
              Engineer / MERN Stack Roles
            </span>
          </div>
          <div className="status-actions">
            <span className="location-badge">
              <i className="fa-solid fa-location-dot"></i>{" "}
              {portfolioData.personal.location}
            </span>
            <span className="local-time">
              <i className="fa-regular fa-clock"></i> IST{" "}
              {currentTime || "Loading..."}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container container">
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo">
            <div className="logo-mark">
              <span className="logo-letters">JM</span>
              <span className="logo-glow"></span>
            </div>
            <div className="brand-text">
              <span className="brand-name">{portfolioData.personal.name}</span>
              <span className="brand-tagline">Full Stack & AI Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a
                  href="#about"
                  className="nav-link"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="nav-link"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="nav-link"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="nav-link"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="nav-link"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#resumeModal"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenResume) onOpenResume();
                  }}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Header Utilities */}
          <div className="header-utilities">
            {/* Command Palette Trigger */}
            <button
              className="btn-cmd-k"
              onClick={() => {
                onOpenCmdPalette();
              }}
              title="Open Command Palette (Ctrl+K)"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
              <span className="kbd-shortcut">
                <kbd>Ctrl</kbd>+<kbd>K</kbd>
              </span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              className="btn-icon-toggle btn-theme-toggle"
              onClick={() => {
                if (onToggleTheme) onToggleTheme();
              }}
              title={
                theme === "dark"
                  ? "Switch to Light Mode (☀️)"
                  : "Switch to Dark Mode (🌙)"
              }
              aria-label="Toggle Dark and Light Mode"
            >
              <i
                className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
              ></i>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              <span
                style={{
                  transform: mobileMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              ></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span
                style={{
                  transform: mobileMenuOpen
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                }}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              About Jay
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              Featured Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              Technical Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              Education & Honors
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              Get In Touch
            </a>
          </li>
        </ul>
        <div className="drawer-footer">
          <div
            style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}
          >
            <button
              className="btn btn-glass btn-block btn-sm"
              onClick={() => {
                if (onToggleTheme) onToggleTheme();
              }}
            >
              <i
                className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
              ></i>
              <span>{theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}</span>
            </button>
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              handleLinkClick();
              onOpenResume();
            }}
            style={{ marginBottom: "1rem" }}
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span>View Resume</span>
          </button>
          <a
            href="#contact"
            className="btn btn-glass btn-block"
            onClick={handleLinkClick}
          >
            Hire Jay Mange
          </a>
          <div className="drawer-socials">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href={portfolioData.personal.leetcode}
              target="_blank"
              rel="noopener"
            >
              <i className="fa-solid fa-code"></i>
            </a>
            <a href={`mailto:${portfolioData.personal.email}`}>
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
