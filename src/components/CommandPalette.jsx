import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose, onOpenResume, onOpenCopilot, onShowToast, theme = 'dark', onToggleTheme }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    {
      id: 'toggle-theme',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      category: 'Preferences',
      icon: theme === 'dark' ? 'fa-sun' : 'fa-moon',
      action: () => {
        if (onToggleTheme) onToggleTheme();
        onClose();
      }
    },
    {
      id: 'projects',
      label: 'Explore Featured Projects',
      category: 'Navigation',
      icon: 'fa-rocket',
      action: () => { window.location.hash = '#projects'; }
    },
    {
      id: 'resume',
      label: 'View / Print Executive Resume',
      category: 'Document',
      icon: 'fa-file-pdf',
      action: onOpenResume
    },
    {
      id: 'copilot',
      label: 'Ask JayAI Copilot (Gemini)',
      category: 'AI Assistant',
      icon: 'fa-wand-magic-sparkles',
      action: onOpenCopilot
    },
    {
      id: 'experience',
      label: 'View Work Experience (Hyperlink Infosystem)',
      category: 'Navigation',
      icon: 'fa-briefcase',
      action: () => { window.location.hash = '#experience'; }
    },
    {
      id: 'skills',
      label: 'Browse Technical Skills Matrix',
      category: 'Navigation',
      icon: 'fa-microchip',
      action: () => { window.location.hash = '#skills'; }
    },
    {
      id: 'copy-email',
      label: `Copy Email (${portfolioData.personal.email})`,
      category: 'Action',
      icon: 'fa-copy',
      action: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        onShowToast(`Copied ${portfolioData.personal.email} to clipboard!`);
      }
    },
    {
      id: 'github',
      label: 'Visit GitHub Profile (@mjbhanu03)',
      category: 'External',
      icon: 'fa-brands fa-github',
      action: () => { window.open(portfolioData.personal.github, '_blank'); }
    },
    {
      id: 'linkedin',
      label: 'Connect on LinkedIn',
      category: 'External',
      icon: 'fa-brands fa-linkedin-in',
      action: () => { window.open(portfolioData.personal.linkedin, '_blank'); }
    },
    {
      id: 'leetcode',
      label: 'View LeetCode Coding Profile',
      category: 'External',
      icon: 'fa-code',
      action: () => { window.open(portfolioData.personal.leetcode, '_blank'); }
    },
    {
      id: 'contact',
      label: 'Get in Touch / Hire Jay',
      category: 'Contact',
      icon: 'fa-envelope',
      action: () => { window.location.hash = '#contact'; }
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cmd.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="custom-modal cmd-palette-modal open" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={() => { onClose(); }}></div>
      <div className="cmd-palette-box glass-panel">
        <div className="cmd-input-wrapper">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type a command or jump to section (e.g. projects, resume, copy email)..."
            autoFocus
          />
          <span className="cmd-esc-tag">ESC</span>
        </div>

        <div className="cmd-results">
          {filteredCommands.length === 0 ? (
            <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => (
              <div
                key={cmd.id}
                className={`cmd-item ${idx === selectedIndex ? 'selected' : ''}`}
                onClick={() => {
                  cmd.action();
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="cmd-item-left">
                  <i className={`fa-solid ${cmd.icon}`}></i>
                  <span>{cmd.label}</span>
                </div>
                <span className="cmd-item-badge">{cmd.category}</span>
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span><kbd>&uarr;</kbd> <kbd>&darr;</kbd> Navigate</span>
          <span><kbd>Enter</kbd> Select</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
