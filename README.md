# Jay Mange — Ultra-Luxury Full Stack (MERN) & GenAI Developer Portfolio

A state-of-the-art, high-performance personal portfolio built for **Jay Mange** using **React 19 + Vite + Vanilla CSS Glassmorphic Design System** and an integrated **Node.js/Express MERN API Backend**.

---

## 🌟 Key Highlights & Engineering Features

1. **Rich Modern Aesthetics**:
   - Cyberpunk dark luxury theme (`#07090e`, glowing cyan `#00f0ff`, royal purple `#8b5cf6`, and emerald `#10b981`).
   - Frosted glass cards (`backdrop-filter: blur(16px)`), mesh gradient glow, and interactive cursor spotlight.
   - 3D Holographic Developer Card featuring Jay's executive studio portrait with floating parallax tech tags (`React`, `Node & Express`, `MySQL & Redis`, `Gemini GenAI`).
   - Dynamic real-time Ahmedabad time badge (IST).

2. **Interactive JayAI Copilot (Powered by Google Gemini)**:
   - Interactive chat terminal trained on Jay's production code, internships, and system architecture decisions.
   - Pre-loaded prompt chips for one-click technical evaluation.

3. **Production Projects Showcase**:
   - **Indeed Job Portal (Flagship GenAI & MERN Stack)**: 21 REST APIs, AES encryption, dual-file Multer upload, Joi + Yup two-layer validation, Map/Set WebSocket manager, and Google Gemini assistant integration.
   - **eAuction Platform**: Real-time bidding engine, auto-bid processing logic, Sequelize ORM, and dual admin/bidder dashboards.
   - **Saleh E-Commerce Platform API**: 4-layer architecture (Service, Controller, Repository, Validator), Swagger UI docs, and localizify i18n.
   - **Car Booking Platform**: Full-stack fleet management with role-based access control (RBAC), bcrypt hashing, and AES encryption.
   - Interactive **Deep Dive / Architecture Modal** with system breakdown diagrams.

4. **Executive ATS Resume Modal**:
   - Complete 1:1 ATS-formatted resume matching Jay's credentials.
   - 1-Click **Print / Save as PDF** (`window.print()`) with confetti celebration.

5. **Command Palette (`Ctrl + K` / `Cmd + K`)**:
   - Floating quick navigation menu to jump to sections, view resume, or copy email instantly.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Vanilla CSS3 (Custom Design System), Lucide Icons, FontAwesome, Canvas Confetti.
- **Backend (MERN)**: Node.js, Express.js, REST APIs, CORS.
- **Email delivery**: Nodemailer SMTP integration for the portfolio contact form.
- **Database & Storage**: MySQL, MongoDB, Redis, Sequelize ORM, Multer.
- **AI / LLMs**: Google Gemini API, Prompt Engineering, Semantic Document Search.

---

## 🚀 Running Locally

### 1. Start the React Frontend:
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Configure Contact Form Email Delivery (Choose Option A or B):

#### Option A: Serverless Frontend-Only (Recommended — Zero Backend to Deploy!)
You do **not** need to deploy a separate backend server. The portfolio can run 100% standalone and be deployed to Vercel, Netlify, or GitHub Pages for free with a single click.
1. Get a free access key at [Web3Forms](https://web3forms.com/) (enter `jaymange52@gmail.com`).
2. Add `VITE_WEB3FORMS_KEY=your_access_key` in `.env` (or in Vercel/Netlify Environment Variables).
3. Even without an API key, the form features an instant direct email client launcher (`mailto:`) fallback so you never miss an inquiry!

#### Option B: Self-Hosted Node.js/Express Backend (Optional)
If you wish to demonstrate full-stack MERN deployment by running the custom Express server in `server/server.js`:
```bash
npm run server
```
Configure these environment variables for the server:
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-sending-account@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=jaymange52@gmail.com
```
And set `VITE_API_URL` on the frontend to point to your deployed backend URL.

### 4. Build for Production:
```bash
npm run build
```

---

## 📬 Contact & Profiles
- **Email**: [jaymange52@gmail.com](mailto:jaymange52@gmail.com)
- **Phone**: [+91 7016515225](tel:+917016515225)
- **GitHub**: [https://github.com/JayMange](https://github.com/JayMange)
- **LinkedIn**: [https://linkedin.com/in/jaymange](https://linkedin.com/in/jaymange)
- **LeetCode**: [https://leetcode.com/u/jaymange/](https://leetcode.com/u/jaymange/)
