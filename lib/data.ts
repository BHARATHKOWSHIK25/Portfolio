// ============================================================
// lib/data.ts — All portfolio content lives here
// ============================================================

export const personalInfo = {
  name: "Bharath Kowshik",
  fullName: "Bharath Kowshik Ullangula",
  title: "Software Engineer | AI Builder | IoT Innovator",
  tagline: "Building intelligent products that combine software, AI, IoT, and creativity to solve real-world problems.",
  location: "Guntur, Andhra Pradesh, India",
  status: "Open to Internships & Collaborations",
  email: "bharathkowshik25@gmail.com",
  college: "KKR & KSR Institute of Technology and Sciences",
  degree: "B.Tech – Computer Science & Engineering",
  academicPeriod: "2024–2028",
  roles: [
    "Software Engineer",
    "AI Builder",
    "IoT Innovator",
    "Creative Technologist",
    "Future Founder",
  ],
  about: [
    "I'm Bharath Kowshik, A B.Tech CSE student at KKR & KSR Institute of Technology and Sciences (2024–2028), passionate about building products that sit at the intersection of AI, IoT, and software engineering.",
    "From building an AI-powered home maintenance assistant to designing IoT sleep monitoring systems, I love turning complex problems into elegant solutions. Beyond engineering, I'm a video editor, banner designer, and aspiring startup founder.",
    "I'm driven by one goal: to build technology that makes a real difference — whether it's for farmers, families, or future industries.",
  ],
  stats: [
    { number: "4+", label: "Projects Built" },
    { number: "5+", label: "Certifications" },
    { number: "2+", label: "Events Organized" },
    { number: "3+", label: "Tech Domains" },
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
      "An agriculture marketplace that directly connects farmers with consumers, removing middlemen and ensuring fair pricing for both sides.",
    tags: ["Flutter", "Firebase", "Dart"],
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
      "An IoT-based sleep monitoring system using Arduino sensors to track, analyze, and report sleep quality in real time.",
    tags: ["Arduino", "Sensors", "Python", "IoT"],
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
      "An AI-powered home maintenance assistant that uses LLM-based AI agents to diagnose household problems and suggest solutions intelligently.",
    tags: ["Python", "AI Agents", "LLMs", "Prompt Engineering"],
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
      "A smart service and product management platform designed to streamline workflows and improve operational efficiency.",
    tags: ["React", "Node.js", "Firebase"],
    category: "Software Product",
    image: "/Projects_images/QUICK_SERVE.png",
    featured: false,
    github: "https://github.com/BHARATHKOWSHIK25/QUICK_SERVE",
    live: "",
    color: "#FF6B35",
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
      "Google AI",
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
      "Banner Design",
      "Motion Graphics",
      "AI-Generated Design",
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
    title: "INOVESTA 2K26 - Highlights (Part 1)",
    videoUrl: "/creative/INOVESTA_2K26_1.mp4",
    tags: ["Event", "College", "Highlights"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "INOVESTA 2K26 - Highlights (Part 2)",
    videoUrl: "/creative/INOVESTA_2K26_2.mp4",
    tags: ["Event", "Aftermovie", "VFX"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "Sleep Mate IoT Promo",
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
    title: "The Beginning - Promo",
    videoUrl: "/creative/The_Beginnig_Promo.mp4",
    tags: ["Promo", "Cine Core", "Teaser"],
    category: "Video Edits",
  },
  {
    type: "video" as const,
    title: "The Beginning - Teaser",
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
    description: "Edited and directed for the college Short Film Contest. Watch the official film website.",
  },
  {
    type: "banner" as const,
    title: "INOVESTA 2K26 Poster",
    image: "/creative/Inovesta_2K26.jpeg",
    tags: ["Poster", "Event", "INOVESTA"],
    category: "Banner Design",
  },
  {
    type: "banner" as const,
    title: "Reunion Poster",
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
    title: "AI Agents Intensive",
    issuer: "KAGGLE (GOOGLE)",
    year: "2025",
    icon: "Brain",
    color: "#FF6B35",
    image: "/certificates/5-Day AI Agents Intensive Course with Google.png",
  },
  {
    title: "Vibe Coding Certificate",
    issuer: "GRADXPERT",
    year: "2025",
    icon: "Zap",
    color: "#22c55e",
    image: "/certificates/Vide Coding.jpeg",
  },
  {
    title: "INOVESTA Organizer Certificate",
    issuer: "RDIO-HUB & SYNC-AI-LABS",
    year: "2025",
    icon: "Award",
    color: "#f59e0b",
    image: "/certificates/INOVESTA Organizer Certificate.jpeg",
  },
];

export const leadershipItems = [
  {
    title: "Organizer — INOVESTA",
    organization: "KKR & KSR Institute of Technology and Sciences",
    period: "2025",
    description:
      "Organized and managed the INOVESTA technical event. Led event management, promotion, and technical coordination across departments.",
    icon: "Trophy",
  },
  {
    title: "Member — HackNex & E-cell",
    organization: "CSE Department, KKR & KSR ITS",
    period: "2025–Present",
    description:
      "Active involvement in technical activities, department branding, and club events. Contributing to workshops, coding initiatives, and entrepreneurship activities.",
    icon: "Users",
  },
  {
    title: "Active Organiser — Department Activities",
    organization: "KKR & KSR Institute of Technology and Sciences",
    period: "2025–Present",
    description:
      "Actively involved in organising and coordinating department-level activities, cultural events, and technical programmes across various college events.",
    icon: "Video",
  },
];
