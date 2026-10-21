import React, { useState, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function Contact({ onShowToast }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setFormSubmitted(false);

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      // 1. Direct Background Delivery via EmailJS Library
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            to_name: portfolioData.personal.name,
            to_email: portfolioData.personal.email
          },
          emailjsPublicKey
        );
      }
      // 2. Direct Background Delivery via Web3Forms
      else if (web3FormsKey) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio Inquiry] ${formData.subject}`,
            message: formData.message,
            from_name: formData.name,
            to: portfolioData.personal.email
          })
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || 'Failed to deliver message.');
        }
      }
      // 3. Neither configured yet
      else {
        throw new Error(
          'EmailJS is not configured yet. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
        );
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 }
      });
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (onShowToast) {
        onShowToast('Your message was sent directly to Jay!');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitError(
        err?.text || err?.message || 'Unable to send message. Please check EmailJS configuration.'
      );
      if (onShowToast) {
        onShowToast('Could not send message.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onShowToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fa-solid fa-envelope-open-text"></i> Let's Collaborate
          </span>
          <h2 className="section-title">
            Get In Touch with <span className="gradient-text gradient-cyan-purple">Jay Mange</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a full-time engineering opportunity, freelance contract, or technical question, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-cards-col">
            {/* Email Card */}
            <div className="contact-info-card glass-panel">
              <div className="c-icon icon-email">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="c-details">
                <span className="c-label">Direct Email</span>
                <a href={`mailto:${portfolioData.personal.email}`} className="c-value">
                  {portfolioData.personal.email}
                </a>
                <span className="c-sub">Fastest response within 24 hours</span>
              </div>
              <button
                className="c-copy-btn"
                onClick={() => copyToClipboard(portfolioData.personal.email, 'Email')}
                title="Copy Email"
              >
                <i className="fa-regular fa-copy"></i>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="contact-info-card glass-panel">
              <div className="c-icon icon-phone">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="c-details">
                <span className="c-label">Phone & WhatsApp</span>
                <a href={`tel:${portfolioData.personal.phone}`} className="c-value">
                  {portfolioData.personal.phone}
                </a>
                <span className="c-sub">Available Mon–Sat, 9 AM – 9 PM IST</span>
              </div>
              <div className="c-actions">
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noopener"
                  className="wa-btn"
                  title="Chat on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <button
                  className="c-copy-btn"
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'Phone')}
                  title="Copy Phone"
                >
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-info-card glass-panel">
              <div className="c-icon icon-location">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="c-details">
                <span className="c-label">Base Location</span>
                <span className="c-value">{portfolioData.personal.location}</span>
                <span className="c-sub">Open to in-office, hybrid & remote worldwide</span>
              </div>
            </div>

            {/* Socials Box */}
            <div className="contact-socials-box glass-panel">
              <h4>Professional Profiles</h4>
              <div className="social-links-row">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener"
                  className="social-btn"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="social-btn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.leetcode}
                  target="_blank"
                  rel="noopener"
                  className="social-btn"
                >
                  <i className="fa-solid fa-code"></i>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="contact-form-col">
            <div className="form-card glass-panel">
              <div className="form-header">
                <h3>
                  <i className="fa-solid fa-paper-plane text-cyan"></i> Send a Direct Message
                </h3>
                <p>
                  Fill out the fields below to connect with Jay directly regarding engineering opportunities.
                </p>
              </div>

              <form ref={formRef} className="styled-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email <span className="required">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. sarah@company.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Full Stack Developer Opening @ TechCorp"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hello Jay, we reviewed your projects and would love to discuss a Software Engineer role..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-send" disabled={isSubmitting}>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message to Jay'}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>

                {formSubmitted && (
                  <div className="form-status success" style={{ display: 'block' }}>
                    <i className="fa-solid fa-circle-check"></i> Message sent successfully! Jay will reply to your email shortly.
                  </div>
                )}

                {submitError && (
                  <div className="form-status error" style={{ display: 'block' }} role="alert">
                    <i className="fa-solid fa-circle-exclamation"></i> {submitError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
