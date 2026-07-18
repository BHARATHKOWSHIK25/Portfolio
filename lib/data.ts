// ============================================================
// lib/data.ts — All portfolio content lives here
// ============================================================

export const personalInfo = {
  name: "Bharath Kowshik",
  fullName: "Bharath Kowshik Ullangula",
  title: "Software Engineer · AI Builder · IoT Innovator",
  tagline: "I design and build intelligent products at the intersection of software engineering, artificial intelligence, and IoT — turning ambitious ideas into real-world solutions.",
  location: "Guntur, Andhra Pradesh, India",
  status: "Open to Internships & Collaborations",
  email: "bharathkowshik25@gmail.com",
  college: "KKR & KSR Institute of Technology and Sciences",
  degree: "B.Tech — Computer Science & Engineering",
  academicPeriod: "2024–2028",
  roles: [
    "Software Engineer",
    "AI Builder",
    "IoT Innovator",
    "Creative Technologist",
    "Future Founder",
  ],
  about: [
    "I'm Bharath Kowshik, a Computer Science undergraduate with a strong focus on building impactful, production-ready products. My work spans full-stack development, AI-powered applications, and IoT systems — including a farmer-to-consumer marketplace, an AI home-maintenance assistant, and a real-time IoT sleep-tracking platform.",
    "I actively leverage modern AI tools, LLM APIs, and agentic workflows to rapidly prototype and ship solutions. Beyond engineering, I bring a creative dimension through professional video editing, motion graphics, and graphic design — skills I have applied across technical events and brand campaigns.",
    "I am driven by a relentless curiosity and a desire to turn ideas into products that matter. I am currently seeking internship opportunities and collaborations where I can contribute meaningfully while continuing to grow as an engineer and builder.",
  ],
  stats: [
    { number: "4+", label: "Live Projects" },
    { number: "6+", label: "Certifications" },
    { number: "2+", label: "Events Organised" },
    { number: "4+", label: "Tech Domains" },
  ],
};

export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/BHARATHKOWSHIK25",
    handle: "@BHARATHKOWSHIK25",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/bharathkowshik25/",
    handle: "Bharath Kowshik",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/bharathkowshik.ullangula",
    handle: "@bharathkowshik.ullangula",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/bharathkowsik25",
    handle: "@bharathkowsik25",
  },
];

export const projects = [
  {
    id: 1,
    title: "Farm2Buyer",
    description:
      "A Flutter & Firebase mobile platform that eliminates agricultural middlemen by enabling direct farmer-to-consumer transactions. Features include real-time produce listings, in-app buyer–seller chat, and location-based product discovery — giving rural farmers fair pricing and direct market access.",
    tags: ["Flutter", "Firebase", "Dart", "Real-time Database"],
    category: "Mobile App",
    image: "/Projects_images/FARM2BUYER.png",
    featured: true,
    github: "https://github.com/BHARATHKOWSHIK25/Farm2Buyer-app",
    live: "",
    color: "#22c55e",
  },
  {
    id: 2,
    title: "Sleep Mate",
    description:
      "An end-to-end IoT system combining custom hardware and a software dashboard to monitor and improve sleep quality. Sensor data covering movement, ambient conditions, and duration is processed in real-time and visualised as actionable insights and personalised improvement suggestions.",
    tags: ["IoT", "Arduino", "Python", "Sensors", "Dashboard"],
    category: "IoT System",
    image: "/Projects_images/SLEEPMATE.png",
    featured: false,
    github: "https://github.com/BHARATHKOWSHIK25/SleepMate",
    live: "",
    color: "#00E5FF",
  },
  {
    id: 3,
    title: "HOMEFIX AI",
    description:
      "An AI-powered home-maintenance assistant that diagnoses household problems and delivers step-by-step repair guidance, tool recommendations, and cost estimates through a clean conversational interface. Built with LLM APIs and advanced prompt engineering to ensure accurate, context-aware responses.",
    tags: ["AI", "LLM", "Python", "Prompt Engineering", "Conversational UI"],
    category: "AI Application",
    image: "/Projects_images/HOMEFIX_AI.png",
    featured: false,
    github: "https://www.kaggle.com/code/bharathkowshik25/homefix-ai-agent",
    live: "",
    color: "#a855f7",
  },
  {
    id: 4,
    title: "QuickServe",
    description:
      "An autonomous AI agent framework capable of executing multi-step tasks without human intervention — browsing the web, retrieving information, reasoning over results, and producing structured outputs. Demonstrates practical mastery of agentic AI design patterns and LLM orchestration.",
    tags: ["AI Agents", "LLM", "Python", "Automation"],
    category: "Software Product",
    image: "/Projects_images/QUICK_SERVE.png",
    featured: false,
    github: "https://github.com/BHARATHKOWSHIK25/QUICK_SERVE",
    live: "",
    color: "#FF6B35",
  },
  {
    id: 5,
    title: "Prospect Assist AI",
    description:
      "Smarter Conversations. Better Investments. Qualified Leads. Prospect Assist AI is an intelligent conversational banking assistant designed to transform customer onboarding and wealth management. Powered by Retrieval-Augmented Generation (RAG), it delivers accurate, policy-compliant financial product recommendations and qualifies leads for relationship managers.",
    tags: ["Flutter", "Node.js", "Firebase", "RAG", "Gemini/OpenAI"],
    category: "FinTech | Conversational AI",
    image: "/Projects_images/PROSPECT_ASSISTANCE.png",
    featured: true,
    github: "https://github.com/BHARATHKOWSHIK25/PROSPECT-ASSISTANCE",
    live: "",
    color: "#3b82f6",
  },
  {
    id: 6,
    title: "LifeMate AI",
    description:
      "One AI. Every Goal. A Better Life. LifeMate AI is an intelligent all-in-one personal assistant that helps users organize every aspect of their daily lives through AI-driven recommendations and automation. It combines productivity, health, finance, learning, and habit tracking into one seamless experience.",
    tags: ["Flutter", "Node.js", "Firebase", "Gemini/OpenAI"],
    category: "AI Productivity | Lifestyle",
    image: "/Projects_images/LIFEMATE-AI.png",
    featured: false,
    github: "https://github.com/BHARATHKOWSHIK25/LIFEMATE-AI",
    live: "",
    color: "#f43f5e",
  },
  {
    id: 7,
    title: "MedSaathi",
    description:
      "Your Health. Our Priority. AI That Cares. MedSaathi is an AI-powered healthcare platform designed to simplify access to medical services through a single intelligent application. It connects users with verified doctors, online consultations, medicine delivery, diagnostic lab tests, and secure digital health records while providing personalized AI-driven health assistance.",
    tags: ["Flutter", "Node.js", "Firebase", "Gemini/OpenAI", "Google Maps API"],
    category: "HealthTech | AI Healthcare",
    image: "/Projects_images/MedSaathi.png",
    featured: true,
    github: "https://github.com/BHARATHKOWSHIK25/MedSaathi",
    live: "",
    color: "#10b981",
  },
];

export const skillCategories = [
  {
    name: "Languages",
    icon: "Code",
    skills: ["Python", "JavaScript", "Dart", "HTML5", "CSS3", "SQL"],
  },
  {
    name: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    name: "Backend & DB",
    icon: "Server",
    skills: ["Node.js", "Firebase", "MongoDB", "REST APIs", "SQL"],
  },
  {
    name: "Mobile",
    icon: "Smartphone",
    skills: ["Flutter", "Firebase", "Dart"],
  },
  {
    name: "AI & ML",
    icon: "Brain",
    skills: [
      "Machine Learning",
      "AI Agents",
      "LLM Applications",
      "Prompt Engineering",
      "Google AI Studio",
    ],
  },
  {
    name: "IoT",
    icon: "Cpu",
    skills: ["Arduino", "Sensors", "Embedded Systems", "IoT Monitoring"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    name: "Creative",
    icon: "Palette",
    skills: [
      "Video Editing",
      "Graphic Design",
      "Motion Graphics",
      "AI-Assisted Design",
    ],
  },
];

export const creativeItems = [
  {
    type: "video" as const,
    title: "AI Cinematic Showreel",
    thumbnail: "/creative/ai-showreel-thumb.jpg",
    videoUrl: "/creative/ai-showreel.mp4",
    tags: ["AI", "Cinematic", "Showreel"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "INOVESTA 2K26 — Event Highlights (Part 1)",
    videoUrl: "/creative/INOVESTA_2K26_1.mp4",
    tags: ["Event", "College", "Highlights"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "INOVESTA 2K26 — Event Highlights (Part 2)",
    videoUrl: "/creative/INOVESTA_2K26_2.mp4",
    tags: ["Event", "Aftermovie", "VFX"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "Sleep Mate IoT — Product Promo",
    videoUrl: "/creative/SLEEP_MATE_IOT.mp4",
    tags: ["IoT", "Hardware", "Product Video"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "Sankrathi Sambaralu 2K26",
    videoUrl: "/creative/Sankrathi_Sambaralu_2K26.mp4",
    tags: ["Culture", "Festival", "Cinematic"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "The Beginning — Official Promo",
    videoUrl: "/creative/The_Beginnig_Promo.mp4",
    tags: ["Promo", "Cine Core", "Teaser"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "The Beginning — Official Teaser",
    videoUrl: "/creative/The_Beginnig_Treaser.mp4",
    tags: ["Teaser", "Cinematic", "Drama"],
    category: "Video Edits",
  },
  {
    type: "shortfilm" as const,
    title: "The Beginning — College Short Film",
    image: "/creative/the-beginning-website.png",
    websiteUrl: "https://the-beginning-frame-founders.netlify.app/",
    tags: ["Short Film", "Contest", "Director", "Editor"],
    category: "Short Film",
    featured: true,
    description: "Directed and edited for the college Short Film Contest. View the official film website.",
  },
  {
    type: "banner" as const,
    title: "INOVESTA 2K26 — Official Poster",
    image: "/creative/Inovesta_2K26.jpeg",
    tags: ["Poster", "Event", "INOVESTA"],
    category: "Banner Design",
  },
  {
    type: "banner" as const,
    title: "Alumni Reunion Poster",
    image: "/creative/Reunion_Poster.jpeg",
    tags: ["Poster", "Event", "Reunion"],
    category: "Banner Design",
  },
];

export const certifications = [
  {
    title: "IoT Training Certificate",
    issuer: "MAKESKILLED",
    year: "2025",
    icon: "Cpu",
    color: "#00E5FF",
    image: "/certificates/IOT.jpg",
  },
  {
    title: "Python Programming Certificate",
    issuer: "KAGGLE",
    year: "2025",
    icon: "Code",
    color: "#3b82f6",
    image: "/certificates/Python Coder.png",
  },
  {
    title: "Full Stack Development Certificate",
    issuer: "TFI",
    year: "2025",
    icon: "Layers",
    color: "#a855f7",
    image: "/certificates/FSD CERTIFICATE.jpeg",
  },
  {
    title: "5-Day AI Agents Intensive",
    issuer: "KAGGLE × GOOGLE",
    year: "2025",
    icon: "Brain",
    color: "#FF6B35",
    image: "/certificates/5-Day AI Agents Intensive Course with Google.png",
  },
  {
    title: "Vibe Coding Certification",
    issuer: "GRADXPERT",
    year: "2025",
    icon: "Zap",
    color: "#22c55e",
    image: "/certificates/Vide Coding.jpeg",
  },
  {
    title: "INOVESTA Lead Organiser Certificate",
    issuer: "RDIO-HUB & SYNC-AI-LABS",
    year: "2026",
    icon: "Award",
    color: "#f59e0b",
    image: "/certificates/INOVESTA Organizer Certificate.jpeg",
  },
  {
    title: "WISER Quantum 101",
    issuer: "WISER",
    year: "2026",
    icon: "Cpu",
    color: "#8b5cf6",
    image: "/certificates/WISER_QUANTUM101.png",
  },
  {
    title: "Kaggle Vampire Certification",
    issuer: "VAMPIRE",
    year: "2025",
    icon: "Zap",
    color: "#ef4444",
    image: "/certificates/Vampire.png",
  },
];

export const leadershipItems = [
  {
    title: "Lead Organiser — INOVESTA",
    organization: "KKR & KSR Institute of Technology and Sciences",
    period: "2025",
    description:
      "Spearheaded the planning and execution of INOVESTA, a college-wide technical symposium. Oversaw event management, inter-departmental coordination, marketing strategy, and on-ground operations — ensuring a seamless experience for 200+ participants.",
    icon: "Trophy",
  },
  {
    title: "Member — HackNex & E-Cell",
    organization: "KKR & KSR Institute of Technology and Sciences",
    period: "2025 – Present",
    description:
      "Active contributor to technical club initiatives including hackathons, workshops, and entrepreneurship programmes. Involved in department branding, coding challenges, and cross-functional team projects that strengthen the campus tech ecosystem.",
    icon: "Users",
  },
  {
    title: "Active Organiser — Department Events",
    organization: "KKR & KSR Institute of Technology and Sciences",
    period: "2025 – Present",
    description:
      "Regularly coordinates and manages department-level technical programmes, cultural showcases, and college-wide events. Plays a key role in logistics, creative direction, and post-event media production.",
    icon: "Video",
  },
];
