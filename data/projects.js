export const projects = [
  {
    id: 1,
    title: "E-commerce Analytics",
    category: "Dashboard",
    stack: ["React", "Vite", "Charts"],
    level: "Advanced",
    score: 92,
    scoreLabel: "Portfolio project score",
    status: "Live",
    demoUrl: "https://mmoreno-ecommerce-analytics.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/ecommerce-analytics",
    role: "Solo developer (portfolio demo)",
    summary:
      "Interactive KPI dashboard with reusable widgets and advanced filtering for sales monitoring.",
    impact:
      "Portfolio demo focused on reusable widgets, filtering, and dashboard UI architecture.",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "Productivity",
    stack: ["React", "Hooks", "LocalStorage"],
    level: "Intermediate",
    score: 84,
    scoreLabel: "Portfolio project score",
    status: "Live",
    demoUrl: "https://taskflow-pro-mmoreno.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/taskflow-pro",
    role: "Solo developer (portfolio demo)",
    summary:
      "Task management interface with status filters, priority handling, and local persistence.",
    impact:
      "Portfolio demo focused on CRUD flows, local persistence, and clean state management.",
  },
];

export const categories = ["All", ...new Set(projects.map((item) => item.category))];
export const levels = ["All", "Intermediate", "Advanced"];
export const statusOptions = ["All", "Live", "Prototype", "Archived"];
