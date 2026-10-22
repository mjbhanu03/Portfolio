import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import ResumeModal from "./components/ResumeModal";
import Contact from "./components/Contact";
import CommandPalette from "./components/CommandPalette";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("jay_portfolio_theme") || "dark";
  });
  const themeRef = useRef(theme);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const canvasRef = useRef(null);

  // Sync theme with document root & localStorage
  useEffect(() => {
    themeRef.current = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("jay_portfolio_theme", theme);
  }, [theme]);

  // Toggle Dark / Light Theme
  const toggleTheme = () => {
    showToast(
      `Switched to ${theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙" }`,
    );
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      console.log("Check here")
      return next;
    });
  };

  // Toast System
  const showToast = (message) => {
    const id = Date.now() + Math.random() * 1000;
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Keyboard Shortcuts (Ctrl + K / Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCmdPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll Progress Bar & Cursor Spotlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollBar = document.getElementById("scrollProgressBar");
      if (scrollBar) {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollBar.style.width = `${progress}%`;
      }
    };

    const handleMouseMove = (e) => {
      const cursorGlow = document.getElementById("cursorGlow");
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Ambient Canvas Constellation / Particle Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 25000), 55);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        color:
          i % 2 === 0 ? "rgba(0, 240, 255, 0.4)" : "rgba(139, 92, 246, 0.4)",
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = themeRef.current === "dark";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 2 === 0
            ? isDark
              ? "rgba(0, 240, 255, 0.45)"
              : "rgba(2, 132, 199, 0.4)"
            : isDark
              ? "rgba(139, 92, 246, 0.45)"
              : "rgba(124, 58, 237, 0.35)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(0, 240, 255, ${0.12 * (1 - dist / 130)})`
              : `rgba(2, 132, 199, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Top Scroll Progress Bar */}
      <div id="scrollProgressBar" className="scroll-progress-bar"></div>

      {/* Mouse Follower Spotlight */}
      <div id="cursorGlow" className="cursor-glow"></div>

      {/* Canvas Particle Background */}
      <canvas ref={canvasRef} className="ambient-canvas"></canvas>
      <div className="mesh-gradient-bg"></div>

      {/* Main Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCopilot={() => {
          const el = document.getElementById("aiCopilotSection");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onOpenCmdPalette={() => setIsCmdPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main id="mainContent">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />
        <About />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <TechStack />
        <Education />

        {/* Resume Callout Section */}
        <section className="resume-cta-section section-padding">
          <div className="container">
            <div className="resume-cta-card glass-panel">
              <div className="cta-left">
                <div className="cta-badge">
                  <i className="fa-solid fa-file-lines"></i> Verified
                  Credentials
                </div>
                <h2>Need Jay's Executive Resume for Your Hiring Team?</h2>
                <p>
                  View the interactive ATS-compliant resume directly in your
                  browser or print/save the complete dossier as a PDF with one
                  click.
                </p>
              </div>
              <div className="cta-right">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsResumeOpen(true)}
                >
                  <i className="fa-solid fa-eye"></i>
                  <span>View Executive Resume</span>
                </button>
                <button
                  className="btn btn-glass btn-lg"
                  onClick={() => setIsResumeOpen(true)}
                >
                  <i className="fa-solid fa-print"></i>
                  <span>Print / Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandPalette
        isOpen={isCmdPaletteOpen}
        onClose={() => setIsCmdPaletteOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCopilot={() => {
          const el = document.getElementById("aiCopilotSection");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onShowToast={showToast}
      />

      {/* Floating Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-cyan)' }}></i>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
