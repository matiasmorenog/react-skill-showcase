export const projects = [
  {
    id: 1,
    title: "E-commerce Analytics",
    category: "Dashboard",
    stack: ["React", "Vite", "Charts"],
    level: "Advanced",
    score: 92,
    scoreLabel: "Self-assessment",
    status: "Live",
    previewImage: "/project-ecommerce-preview.svg",
    previewAlt: "Preview of E-commerce Analytics dashboard",
    demoUrl: "https://mmoreno-ecommerce-analytics.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/ecommerce-analytics",
    role: "Individual contributor (portfolio demo)",
    summary:
      "Interactive KPI dashboard with reusable widgets and advanced filtering for sales monitoring.",
    impact:
      "Portfolio demo focused on reusable widgets, filtering, and dashboard UI architecture.",
    usage: "Portfolio demo (not in active production use).",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "Productivity",
    stack: ["React", "Hooks", "LocalStorage"],
    level: "Intermediate",
    score: 84,
    scoreLabel: "Self-assessment",
    status: "Live",
    previewImage: "/project-taskflow-preview.svg",
    previewAlt: "Preview of TaskFlow Pro task board",
    demoUrl: "https://taskflow-pro-mmoreno.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/taskflow-pro",
    role: "Individual contributor (portfolio demo)",
    summary:
      "Task management interface with status filters, priority handling, and local persistence.",
    impact:
      "Portfolio demo focused on CRUD flows, local persistence, and clean state management.",
    usage: "Portfolio demo (not in active production use).",
  },
];

export const categories = ["All", ...new Set(projects.map((item) => item.category))];
export const levels = ["All", "Intermediate", "Advanced"];
export const statusOptions = ["All", "Live", "Prototype", "Archived"];
