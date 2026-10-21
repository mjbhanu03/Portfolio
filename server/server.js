const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory inquiries store
const contactInquiries = [];
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS
};
const contactEmail = process.env.CONTACT_EMAIL || 'jaymange52@gmail.com';

const mailTransport = smtpConfig.host && smtpConfig.user && smtpConfig.pass
  ? nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: { user: smtpConfig.user, pass: smtpConfig.pass }
    })
  : null;

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'Jay Mange Portfolio MERN Backend API',
    uptime: process.uptime()
  });
});

// Portfolio Data Endpoint
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Jay Mange',
    role: 'Full Stack Developer (MERN Stack) & GenAI Engineer',
    location: 'Ahmedabad, Gujarat, India',
    email: 'jaymange52@gmail.com',
    phone: '+91 7016515225',
    github: 'https://github.com/JayMange',
    linkedin: 'https://linkedin.com/in/jaymange',
    leetcode: 'https://leetcode.com/u/jaymange/',
    experience: [
      {
        company: 'Hyperlink Infosystem, Ahmedabad',
        role: 'Software Engineer Trainee',
        period: 'Jan 2026 – Jul 2026',
        stack: ['React.js', 'Express.js', 'MySQL', 'JWT', 'Multer', 'Swagger', 'Postman']
      },
      {
        company: 'AristoMax Technologies Pvt. Ltd., Ahmedabad',
        role: 'React Developer Intern',
        period: 'Jun 2025 – Jul 2025',
        stack: ['React.js', 'Semantic PDF Search', 'n8n', 'Power BI']
      }
    ],
    stats: {
      restApis: '50+',
      mcaCgpa: '8.44 / 10',
      experienceMonths: '8+ months'
    }
  });
});

// Contact Submission API
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  if (!mailTransport) {
    console.error('[Contact Configuration Error] SMTP_HOST, SMTP_USER, and SMTP_PASS are required.');
    return res.status(503).json({ error: 'The contact service is not configured yet. Please email Jay directly.' });
  }

  const newInquiry = {
    id: Date.now().toString(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
    receivedAt: new Date().toISOString()
  };

  mailTransport.sendMail({
    from: smtpConfig.user,
    to: contactEmail,
    replyTo: email,
    subject: `[Portfolio] ${newInquiry.subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  })
    .then(() => {
      contactInquiries.push(newInquiry);
      console.log(`[New Contact Inquiry] From: ${name} <${email}> - Subject: ${newInquiry.subject}`);
      res.status(201).json({
        success: true,
        message: 'Inquiry received successfully. Jay Mange will reach out shortly!',
        inquiryId: newInquiry.id
      });
    })
    .catch((error) => {
      console.error('[Contact Delivery Error]', error);
      res.status(502).json({ error: 'We could not deliver your message. Please try again or email Jay directly.' });
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Jay Mange Portfolio MERN Server listening on port ${PORT}`);
});
