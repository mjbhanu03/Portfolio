export const portfolioData = {
  personal: {
    name: "Jay Mange",
    role: "Full Stack Developer (MERN Stack) & GenAI Engineer",
    tagline: "Architecting Scalable Systems & AI-Driven Digital Experiences",
    location: "Ahmedabad, Gujarat, India",
    phone: "+91 7016515225",
    email: "jaymange52@gmail.com",
    avatar: "/assets/jay-mange.jpg",
    aiAvatar: "/assets/jay-ai-dev.jpg",
    resumePdf: "/Jay_Mange_Resume.pdf",
    github: "https://github.com/mjbhanu03",
    linkedin: "https://www.linkedin.com/in/jay-mange-6a18a428a",
    leetcode: "https://leetcode.com/u/jaymange/",
    whatsapp: "https://wa.me/917016515225",
    status: "Available for Full-Time & High-Impact Software Engineering Roles",
    bio: "Full Stack Software Developer with experience at Hyperlink Infosystem and AristoMax Technologies. Specialist in building high-throughput Node.js/Express REST APIs (50+ in production), reactive React.js frontends, resilient WebSocket concurrency engines (Map/Set), and Google Gemini GenAI integrations."
  },
  stats: [
    { number: 50, suffix: "+", label: "REST APIs in Production" },
    { number: 8.44, decimals: 2, suffix: "/10", label: "MCA CGPA (GLS Univ)" },
    { number: 8, suffix: "+ Mo", label: "Hyperlink Infosystem" },
    { number: 100, suffix: "%", label: "Real-Time WebSocket Ready" }
  ],
  rolesList: [
    "MERN Stack Architect",
    "GenAI & Gemini API Builder",
    "High-Concurrency WebSocket Engineer",
    "RESTful API & System Designer"
  ],
  experience: [
    {
      id: "hyperlink",
      company: "Hyperlink Infosystem",
      location: "Ahmedabad, Gujarat",
      role: "Software Engineer Trainee",
      period: "Jan 2026 – Jul 2026",
      duration: "6 months",
      featured: true,
      website: "https://www.hyperlinkinfosystem.com/",
      summary: "Worked as a Full Stack Developer Trainee across React.js, Express.js, and MySQL.",
      bullets: [
        "Trained as a full stack developer with React.js, Express.js and MySQL, building projects on this stack.",
        "Built React.js applications using Hooks, Formik, Yup and Axios for form handling, validation and API integration.",
        "Developed REST APIs with Node.js, Express.js and MySQL using MVC architecture, with JWT authentication and authorization.",
        "Used middleware, Multer, Swagger and Postman for file uploads, API documentation."
      ],
      skills: ["React.js", "Node.js", "Express.js", "MySQL", "JWT Auth", "Multer", "Swagger", "Formik", "Yup", "Axios", "Postman"]
    },
    {
      id: "aristomax",
      company: "AristoMax Technologies Pvt. Ltd.",
      location: "Ahmedabad, Gujarat",
      role: "React Developer Intern",
      period: "Jun 2025 – Jul 2025",
      duration: "2 months",
      featured: false,
      summary: "Engineered smart document search features and explored workflow automations and BI dashboards.",
      bullets: [
        "Built a React.js feature for a PDF viewer with semantic search, highlighting matched text for quick reference.",
        "Explored n8n workflow automation pipelines and Power BI for enterprise analytics and data visualization."
      ],
      skills: ["React.js", "Semantic PDF Search", "n8n Automation", "Power BI", "Data Analytics", "JavaScript ES6+"]
    }
  ],
  projects: [
    {
      id: "job-portal",
      title: "Indeed Job Portal",
      subtitle: "AI-Powered Career Ecosystem with Live WebSockets",
      badge: "Flagship GenAI & Full Stack",
      category: ["all", "ai", "mern", "realtime", "backend"],
      image: "/assets/project-job-portal.jpg",
      year: "2026",
      apisCount: "21 REST APIs",
      description: "A high-concurrency full-stack recruitment platform featuring 21 secured REST APIs, Google Gemini API for contextual AI candidate assistance, dual-file resume/cover-letter storage, and zero-page-refresh WebSocket messaging.",
      highlights: [
        "Built a full-stack job portal with 21 REST APIs, JWT authentication, forgot/reset password flow using Nodemailer, and AES encryption for sensitive request/response data.",
        "Implemented a live job feed with TanStack Query caching and user-data synchronization to reduce redundant API calls.",
        "Built a dual-file upload system using Multer for resumes and cover letters with separate storage paths and independent validation.",
        "Enforced two-layer validation using Joi on the backend and Yup/Formik on the frontend, with multi-language API responses via localizify.",
        "Integrated Google Gemini API for an AI-powered job assistant using job description, resume and cover letter context for personalized responses.",
        "Implemented persistent one-chat-per-job conversations, allowing users to return to existing job-specific chat history.",
        "Implemented WebSocket-based real-time messaging/updates with multi-tab and multi-connection handling using Map/Set-based socket management.",
        "Added real-time message handling and automatic UI refresh flow so newly received messages update the conversation without manual page refresh.",
        "Deployed the AI-enabled full-stack application to production with server-side Gemini integration and environment-based API key configuration."
      ],
      techStack: [
        "React.js", "Redux Toolkit", "TanStack Query", "Node.js", "Express.js",
        "MySQL", "Google Gemini API", "WebSockets", "Multer", "Nodemailer", "AES Encryption", "localizify"
      ],
      github: "https://github.com/mjbhanu03/indeed",
      liveDemo: "https://indeed.jaymange263.workers.dev/",
      architecture: {
        frontend: "React.js + Redux Toolkit + TanStack Query caching layer",
        backend: "Node.js + Express.js modular MVC REST API (21 endpoints)",
        sockets: "Map/Set connection manager for multi-tab WebSocket synchronization",
        ai: "Google Gemini API contextual prompt pipeline with candidate resume ingestion",
        database: "MySQL with indexed job schemas and persistent chat history",
        security: "JWT role-based access + AES encryption for payloads + Joi/Yup validation"
      }
    },
    {
      id: "eauction",
      title: "eAuction Platform",
      subtitle: "Real-Time Automated Bidding & Auction Marketplace",
      badge: "Live Bidding Engine",
      category: ["all", "mern", "realtime", "backend"],
      image: "/assets/project-eauction.jpg",
      year: "2025",
      apisCount: "Real-Time Engine",
      description: "A full-stack online auction solution with separate admin and bidder dashboards, an automated bid-processing engine, interval-based price refresh, and payment transaction tracking.",
      highlights: [
        "Built a full-stack online auction platform with JWT authentication and separate admin/user dashboards for listings, bids and payments.",
        "Developed an automated bid-processing engine handling live bid tracking, auto-bid logic and interval-based price refresh.",
        "Implemented payment/transaction tracking, region-state-city hierarchy management and secure document uploads using Multer."
      ],
      techStack: [
        "React.js", "Node.js", "Express.js", "Sequelize ORM", "MySQL", "JWT Auth", "Multer", "Auto-Bid Engine"
      ],
      github: "https://github.com/mjbhanu03/eAuction",
      liveDemo: "https://github.com/mjbhanu03/eAuction",
      architecture: {
        frontend: "React.js dynamic bidder & admin dashboards",
        backend: "Express.js with automated cron interval bid pricing engine",
        database: "MySQL managed through Sequelize ORM with cascading region hierarchy",
        storage: "Multer for KYC & product document uploads"
      }
    },
    {
      id: "saleh",
      title: "Saleh — E-Commerce Platform API",
      subtitle: "Scalable Headless Commerce RESTful Services",
      badge: "Enterprise API Architecture",
      category: ["all", "backend"],
      image: "/assets/project-saleh.jpg",
      year: "2025",
      apisCount: "Swagger UI Documented",
      description: "An enterprise-grade modular REST backend designed with clean Service/Controller/Repository/Validator layers, JWT authentication, Swagger UI documentation, and multi-language API support.",
      highlights: [
        "Built a modular REST backend using Service/Controller/Repository/Validator layers, JWT authentication and localizify.",
        "Designed a MySQL schema for catalog, cart, orders, wishlist, payments, advertisements, discounts and banners; documented APIs with Swagger UI."
      ],
      techStack: [
        "Node.js", "Express.js", "MySQL", "Swagger UI", "JWT Authentication", "localizify", "Repository Pattern"
      ],
      github: "https://github.com/mjbhanu03/Saleh",
      liveDemo: "https://github.com/mjbhanu03/Saleh",
      architecture: {
        layers: "Controller -> Validator -> Service -> Repository Pattern",
        database: "Relational schema for catalogs, wishlists, carts, orders, discounts & banners",
        docs: "Interactive Swagger OpenAPI 3.0 specification",
        i18n: "Multi-language localized API error and success messages via localizify"
      }
    },
    {
      id: "car-booking",
      title: "Car Booking Platform",
      subtitle: "Executive Vehicle Fleet & Reservation Ecosystem",
      badge: "Full-Stack Fleet System",
      category: ["all", "mern", "backend"],
      image: "/assets/project-car-booking.jpg",
      year: "2025",
      apisCount: "Role-Based REST APIs",
      description: "A full-stack car booking platform engineered with role-based access for admin, user, and public visitors, fortified with JWT tokens, bcrypt credential hashing, and AES encryption.",
      highlights: [
        "Built a full-stack car booking platform with role-based access for admin, user and public views using JWT, bcrypt and AES encryption.",
        "Developed car listing, booking and admin management modules with multi-language API support."
      ],
      techStack: [
        "React.js", "Redux Toolkit", "Node.js", "Express.js", "MySQL", "bcrypt", "AES Encryption", "RBAC"
      ],
      github: "https://github.com/mjbhanu03/Car-Booking",
      liveDemo: "https://github.com/mjbhanu03/Car-Booking",
      architecture: {
        frontend: "React.js + Redux Toolkit with responsive vehicle cards & booking calendar",
        backend: "Node.js/Express with granular Role-Based Access Control (RBAC)",
        security: "bcrypt salted password hashing and AES data encryption for sensitive user records",
        localization: "Multi-language and multi-currency support"
      }
    }
  ],
  skillsCategories: [
    {
      title: "Frontend Engineering",
      icon: "react",
      skills: [
        { name: "React.js & Hooks", level: 95 },
        { name: "Redux Toolkit & State Management", level: 90 },
        { name: "TanStack Query (React Query)", level: 88 },
        { name: "JavaScript (ES6+) & TypeScript", level: 92 },
        { name: "HTML5, CSS3, Tailwind CSS & Bootstrap", level: 94 }
      ]
    },
    {
      title: "Backend & Systems",
      icon: "server",
      skills: [
        { name: "Node.js & Express.js", level: 95 },
        { name: "RESTful API Architecture (50+ APIs)", level: 96 },
        { name: "WebSockets (Map/Set Sockets)", level: 90 },
        { name: "MVC & 4-Layer Architecture", level: 92 },
        { name: "Python, PHP, C++, C", level: 82 }
      ]
    },
    {
      title: "AI & GenAI Integration",
      icon: "brain",
      skills: [
        { name: "Google Gemini API Integration", level: 92 },
        { name: "LLM Context Ingestion (Resumes/JDs)", level: 90 },
        { name: "Dynamic Prompt Engineering", level: 88 },
        { name: "Persistent Chat History Pipelines", level: 90 },
        { name: "Semantic Document Search", level: 85 }
      ]
    },
    {
      title: "Databases & Caching",
      icon: "database",
      skills: [
        { name: "MySQL & Relational Modeling", level: 94 },
        { name: "MongoDB & NoSQL Schemas", level: 85 },
        { name: "Sequelize ORM", level: 88 },
        { name: "Redis Caching & SQLite", level: 82 },
        { name: "Query Indexing & Optimization", level: 86 }
      ]
    },
    {
      title: "Security & Validation",
      icon: "shield",
      skills: [
        { name: "JWT Auth & Role-Based Access (RBAC)", level: 96 },
        { name: "AES Encryption & bcrypt Hashing", level: 90 },
        { name: "Two-Layer Validation (Joi + Yup/Formik)", level: 92 },
        { name: "Multer Multi-File Upload Handling", level: 94 },
        { name: "Nodemailer & localizify (i18n)", level: 88 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "tools",
      skills: [
        { name: "Git & GitHub Version Control", level: 95 },
        { name: "Postman Testing & Debugging", level: 94 },
        { name: "Swagger / OpenAPI Documentation", level: 90 },
        { name: "n8n Workflow Automation", level: 82 },
        { name: "Power BI Analytics Dashboards", level: 80 }
      ]
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "GLS University, Ahmedabad",
      period: "2024 – May 2026",
      score: "CGPA: 8.44 / 10.0",
      description: "Advanced study of distributed web applications, cloud architectures, database design, software engineering methodologies, and advanced object-oriented paradigms."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Saurashtra University",
      college: "Smt. CZMG BCA College, Jamnagar",
      period: "2021 – 2024",
      score: "Percentage: 71.27%",
      description: "Comprehensive foundation in Data Structures, Algorithms, C++, Java, Relational Database Management Systems (RDBMS), Web Technologies, and Computer Networks."
    }
  ],
  achievements: [
    {
      title: "2nd Place — Code Rewind Event",
      organizer: "GLS University, Ahmedabad",
      icon: "trophy",
      description: "Runner-Up in the university-wide competitive coding and reverse-engineering competition, solving algorithmic problems under rigorous time constraints."
    },
    {
      title: "Participant — IoT Innovation Event",
      organizer: "College Tech Fest",
      icon: "cpu",
      description: "Developed and showcased integrated hardware-software communication prototypes with real-time sensor telemetry."
    },
    {
      title: "LeetCode Problem Solver",
      organizer: "Algorithms & Data Structures",
      icon: "code",
      link: "https://leetcode.com/u/jaymange/",
      description: "Regularly practicing algorithm challenges covering Arrays, HashMaps, Two-Pointers, and Tree/Graph traversal to maintain sharp algorithmic rigor."
    }
  ]
};
