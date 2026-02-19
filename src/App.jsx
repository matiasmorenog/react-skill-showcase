import { useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Filters from "./components/Filters";
import ProjectCard from "./components/ProjectCard";
import StatCard from "./components/StatCard";
import { categories, levels, projects, statusOptions } from "./data/projects";
import { useProjectFilters } from "./hooks/useProjectFilters";

const profile = {
  name: "Matias Adrian Moreno Gallo",
  role: "Frontend Developer specialized in React",
  tagline:
    "I build business-focused React products with strong JavaScript foundations, high Web Performance, and reliable REST APIs integrations.",
  location: "Argentina - Open to remote work",
  email: "matiasmorenog@gmail.com",
  github: "https://github.com/matiasmorenog",
  linkedin: "https://www.linkedin.com/in/matias-moreno/",
  resumeSource: "https://www.linkedin.com/in/matias-moreno/",
};

const profileSummary = [
  "Frontend Developer with over 10 years in software development and strong experience shipping web products for real business environments.",
  "Focused on React architecture, reusable components, and JavaScript code quality that improves team velocity and product maintainability.",
  "I work with REST APIs, responsive UI systems, and performance optimization to deliver reliable user experiences.",
  "Currently open to remote opportunities where product impact and engineering standards matter.",
];

const experienceHighlights = [
  {
    role: "Frontend Web Developer - Santander Tecnologia Argentina",
    period: "Mar 2022 - Jul 2025",
    impact:
      "Delivered production frontend features for banking flows, improving UI consistency and collaboration with backend and product teams.",
  },
  {
    role: "Software Developer - Genetrics",
    period: "Dec 2021 - Mar 2022",
    impact:
      "Built internal and client-facing modules with an emphasis on maintainable code and iterative delivery in short cycles.",
  },
  {
    role: "Full Stack Developer - Envenue",
    period: "Jul 2018 - Jun 2021",
    impact:
      "Implemented full-stack features end-to-end, contributing to stable releases and faster feature rollout across product areas.",
  },
];

const educationHighlights = [
  "Advanced Technician in Programming - Universidad Tecnologica Nacional (UTN)",
  "Business Administration and Accounting - Colegio San Martin de Tours",
];

const coreSkills = [
  "React",
  "Material UI",
  "JavaScript",
  "REST APIs",
  "Component Architecture",
  "Accessibility",
  "Responsive Design",
  "Web Performance",
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#0a7f78" },
          secondary: { main: "#ff9f43" },
          background: {
            default: darkMode ? "#0e1320" : "#f4f1ea",
            paper: darkMode ? "rgba(21,29,40,0.9)" : "rgba(255,255,255,0.78)",
          },
        },
        shape: { borderRadius: 8 },
        typography: {
          fontFamily: "Space Grotesk, Avenir Next, Segoe UI, sans-serif",
          h3: { fontWeight: 700 },
          h6: { fontWeight: 700 },
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                borderColor: darkMode ? "rgba(255,255,255,0.14)" : "rgba(21,32,41,0.12)",
                boxShadow: darkMode
                  ? "0 6px 18px rgba(0,0,0,0.28)"
                  : "0 4px 14px rgba(21,32,41,0.08)",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                borderColor: darkMode ? "rgba(255,255,255,0.14)" : "rgba(21,32,41,0.12)",
                boxShadow: darkMode
                  ? "0 6px 18px rgba(0,0,0,0.24)"
                  : "0 3px 12px rgba(21,32,41,0.07)",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: "none",
                fontWeight: 600,
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [darkMode],
  );

  const {
    query,
    setQuery,
    category,
    setCategory,
    level,
    setLevel,
    status,
    setStatus,
    resetFilters,
    filteredProjects,
  } = useProjectFilters(projects);

  const stats = useMemo(() => {
    const total = filteredProjects.length;
    const live = filteredProjects.filter((item) => item.status === "Live").length;
    const avgScore =
      total === 0
        ? 0
        : Math.round(
            filteredProjects.reduce((acc, current) => acc + current.score, 0) / total,
          );

    return { total, live, avgScore };
  }, [filteredProjects]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle at 92% 3%, #264866 0%, #0e1320 55%)"
            : "radial-gradient(circle at 95% 5%, #ffe5bf 0%, #f4f1ea 50%, #dbe9ff 100%)",
          py: { xs: 2, md: 4 },
        }}>
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Paper variant="outlined" sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 1 }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between">
                <Box sx={{ maxWidth: 820 }}>
                  <Typography variant="overline" color="primary.main" sx={{ fontWeight: 700, letterSpacing: 1.4 }}>
                    React Portfolio Hub
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 0.6, fontSize: { xs: "1.8rem", md: "2.6rem" } }}>
                    {profile.name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mt: 0.4 }}>
                    {profile.role}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 1.2, maxWidth: 760 }}>
                    {profile.tagline}
                  </Typography>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.4 }}>
                    <Chip size="small" color="primary" label="Available for freelance / full-time" />
                    <Chip size="small" variant="outlined" label={profile.location} />
                  </Stack>

                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1.5 }}>
                    <Button size="small" variant="outlined" component="a" href={profile.github} target="_blank" rel="noreferrer">
                      GitHub
                    </Button>
                    <Button size="small" variant="outlined" component="a" href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </Button>
                    <Button size="small" variant="outlined" component="a" href={`mailto:${profile.email}`}>
                      Contact
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                      component="a"
                      href={profile.resumeSource}
                      target="_blank"
                      rel="noreferrer">
                      CV on LinkedIn
                    </Button>
                  </Stack>
                </Box>

                <Stack spacing={1} sx={{ minWidth: { md: 270 } }}>
                  <Button
                    variant="outlined"
                    onClick={() => setDarkMode((prev) => !prev)}
                    startIcon={darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </Button>

                  <Paper variant="outlined" sx={{ p: 1.4, borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Summary
                    </Typography>
                    {profileSummary.map((item) => (
                      <Typography key={item} variant="body2" color="text.secondary" sx={{ mt: 0.8, lineHeight: 1.45 }}>
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </Stack>
              </Stack>
            </Paper>

            <Box
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              }}>
              <StatCard label="Visible Projects" value={stats.total} hint="Current filtered results" />
              <StatCard label="Live Projects" value={stats.live} hint="Production-ready demos" />
              <StatCard label="Average Score" value={`${stats.avgScore}%`} hint="Portfolio quality index" />
            </Box>

            <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 1 }}>
              <Stack direction="row" spacing={0.9} useFlexGap flexWrap="wrap">
                {coreSkills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Paper>

            <Box
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              }}>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Experience Highlights
                </Typography>
                {experienceHighlights.map((item, index) => (
                  <Box key={item.role} sx={{ pt: index === 0 ? 0 : 1.2 }}>
                    {index > 0 ? <Divider sx={{ mb: 1.2 }} /> : null}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {item.role}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                      {item.impact}
                    </Typography>
                  </Box>
                ))}
              </Paper>

              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Education & Certifications
                </Typography>
                {educationHighlights.map((item) => (
                  <Typography key={item} variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                  component="a"
                  href={profile.resumeSource}
                  target="_blank"
                  rel="noreferrer">
                  Open CV on LinkedIn
                </Button>
              </Paper>
            </Box>

            <Filters
              query={query}
              setQuery={setQuery}
              category={category}
              setCategory={setCategory}
              level={level}
              setLevel={setLevel}
              status={status}
              setStatus={setStatus}
              categories={categories}
              levels={levels}
              statusOptions={statusOptions}
              onReset={resetFilters}
            />

            <Box
              id="projects"
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
              }}>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                  <Typography variant="h6">No results found</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Try adjusting filters or clearing your search query.
                  </Typography>
                </Paper>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
