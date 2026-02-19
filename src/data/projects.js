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
  {
    id: 3,
    title: "Travel Finder",
    category: "Search",
    stack: ["React", "REST API", "Responsive UI"],
    level: "Advanced",
    score: 88,
    status: "Prototype",
    demoUrl: "",
    repoUrl: "https://github.com/matiasmorenog/travel-finder",
    summary:
      "Destination search app using external APIs with responsive cards and mobile-first flows.",
    impact:
      "Validated API-driven search patterns for scalable location discovery experiences.",
  },
  {
    id: 4,
    title: "Dev Portfolio v2",
    category: "Personal Brand",
    stack: ["React", "Animations", "Accessibility"],
    level: "Advanced",
    score: 95,
    status: "Live",
    demoUrl: "https://react-skill-showcase.vercel.app/",
    repoUrl: "https://github.com/matiasmorenog/dev-portfolio-v2",
    summary:
      "Personal website focused on performance, accessibility, and technical storytelling.",
    impact:
      "Strengthened recruiter conversion with clearer project presentation and faster page load.",
  },
  {
    id: 5,
    title: "Food Delivery UI",
    category: "Frontend",
    stack: ["React", "State Management", "Design System"],
    level: "Intermediate",
    score: 79,
    status: "Archived",
    demoUrl: "",
    repoUrl: "https://github.com/matiasmorenog/food-delivery-ui",
    summary:
      "Order flow interface with reusable components and controlled loading states.",
    impact:
      "Provided a reusable UI baseline for future ecommerce and ordering features.",
  },
  {
    id: 6,
    title: "Crypto Monitor",
    category: "Data",
    stack: ["React", "WebSocket", "Charting"],
    level: "Advanced",
    score: 90,
    status: "Prototype",
    demoUrl: "",
    repoUrl: "https://github.com/matiasmorenog/crypto-monitor",
    summary:
      "Market tracker with live updates, visual alerts, and chart-driven interaction.",
    impact:
      "Demonstrated reliable real-time UI patterns for data-intensive dashboards.",
  },
];

export const categories = ["All", ...new Set(projects.map((item) => item.category))];
export const levels = ["All", "Intermediate", "Advanced"];
export const statusOptions = ["All", "Live", "Prototype", "Archived"];
