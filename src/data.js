export const personal = {
  name:        "Ernest Mpiani",
  title:       "Computer Engineering Student",
  tagline:     "Backend Developer · Data Scientist · Virtual Assistant",
  university:  "KNUST, Ghana",
  year:        "3rd Year",
  email:       "ernest.mpiani@email.com",
  github:      "https://github.com/ernestmpiani",
  linkedin:    "https://linkedin.com/in/ernestmpiani",
  formspreeId: "YOUR_FORMSPREE_ID",
  bio: [
    "I'm a 3rd-year Computer Engineering student at KNUST, Ghana, building at the intersection of backend systems, data science, and intelligent automation.",
    "I write clean, scalable backend code, extract insights from complex datasets, and help people work smarter through virtual assistance. Every project I ship is a step toward building technology that actually matters.",
    "When I'm not coding, I'm learning — always. The field moves fast and I move with it.",
  ],
  roles: ["Backend Developer", "Data Scientist", "Virtual Assistant", "Computer Engineer"],
};

export const skills = [
  { category: "Backend",            items: ["Python", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Django"] },
  { category: "Data Science",       items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter", "SQL"] },
  { category: "Tools",              items: ["Git", "Docker", "Linux", "VS Code", "Postman", "Vercel"] },
  { category: "Currently Learning", items: ["FastAPI", "Machine Learning", "AWS", "System Design"] },
];

export const projects = [
  {
    id: 1,
    title: "API Gateway Service",
    description: "A scalable REST API gateway built with Node.js handling authentication, rate limiting, and request routing for microservice architecture.",
    tech: ["Node.js", "Express", "Redis", "PostgreSQL"],
    status: "Completed",
    github: "#",
    live: null,
  },
  {
    id: 2,
    title: "Sales Data Analyzer",
    description: "Python pipeline that ingests, cleans, and visualizes large retail datasets — surfacing key business insights with automated reporting.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    status: "Completed",
    github: "#",
    live: null,
  },
  {
    id: 3,
    title: "Smart Task Automator",
    description: "A virtual assistant workflow tool that automates repetitive tasks — scheduling, email triage, and file organization — saving hours per week.",
    tech: ["Python", "Google APIs", "Zapier", "Notion API"],
    status: "In Progress",
    github: "#",
    live: null,
  },
  {
    id: 4,
    title: "Student Resource Portal",
    description: "Full-stack web app for KNUST students to share notes, past questions, and study resources.",
    tech: ["Django", "PostgreSQL", "HTML/CSS", "JavaScript"],
    status: "In Progress",
    github: "#",
    live: null,
  },
];

export const certifications = [
  {
    id: 1,
    title: "Backend Development Certification",
    issuer: "Coursera / Meta",
    date: "2024",
    description: "Comprehensive certification covering server-side development, APIs, databases, and deployment.",
    badge: "01",
  },
  {
    id: 2,
    title: "Data Science Professional Certificate",
    issuer: "IBM / Coursera",
    date: "2024",
    description: "End-to-end data science workflow: data wrangling, visualization, machine learning, and deployment.",
    badge: "02",
  },
  {
    id: 3,
    title: "Virtual Assistant Certification",
    issuer: "ALX Africa",
    date: "2023",
    description: "Professional virtual assistance skills — project management, communication, and digital tools mastery.",
    badge: "03",
  },
];
