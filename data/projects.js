export const projects = [
  {
    id: 1,
    title: "E-commerce Analytics",
    category: "Dashboard",
    stack: ["React", "Vite", "Charts"],
    level: "Advanced",
    score: 92,
    status: "Live",
    demoUrl: "https://mmoreno-ecommerce-analytics.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/ecommerce-analytics",
    summary:
      "Interactive KPI dashboard with reusable widgets and advanced filtering for sales monitoring.",
    impact:
      "Improved decision speed by centralizing key ecommerce metrics into one real-time view.",
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    category: "Productivity",
    stack: ["React", "Hooks", "LocalStorage"],
    level: "Intermediate",
    score: 84,
    status: "Live",
    demoUrl: "https://taskflow-pro-mmoreno.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/taskflow-pro",
    summary:
      "Task management interface with status filters, priority handling, and local persistence.",
    impact:
      "Reduced task tracking friction with a clear UI and reliable day-to-day state persistence.",
  },
];

export const categories = ["All", ...new Set(projects.map((item) => item.category))];
export const levels = ["All", "Intermediate", "Advanced"];
export const statusOptions = ["All", "Live", "Prototype", "Archived"];
