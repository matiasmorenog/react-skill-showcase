"use client";

import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import Filters from "@/components/Filters";
import ProjectCard from "@/components/ProjectCard";
import { categories, levels, projects, statusOptions } from "@/data/projects";
import { useProjectFilters } from "@/hooks/useProjectFilters";
import { createPortfolioTheme } from "@/app/theme";

const profile = {
  name: "Matias Adrian Moreno Gallo",
  role: "Frontend Developer specialized in React",
  tagline:
    "I build React products for business-critical environments with maintainable architecture, strong performance, and reliable REST API integrations.",
  location: "Argentina - Open to remote work",
  email: "matiasmorenog@gmail.com",
  github: "https://github.com/matiasmorenog",
  linkedin: "https://www.linkedin.com/in/matias-moreno/",
  resumePdf: "/MatiasMoreno_resume.pdf",
  profilePhoto: "/profile-photo.jpg",
};

const profileSummary = [
  "Frontend Developer with 10+ years in software development, including 7+ years building production web products in fintech, SaaS, and internal platforms.",
  "Delivered frontend solutions across 4 companies, with emphasis on React architecture, reusable component systems, and code quality that improves release confidence.",
  "Focused on REST API integration, responsive UI systems, and web performance optimization for high-trust user journeys.",
  "Open to remote opportunities where product impact and engineering standards are both first-class priorities.",
];

const experienceHighlights = [
  {
    role: "Frontend Web Developer",
    company: "INE",
    period: "Mar 2022 - Jul 2025",
    details: "Full-time · Remote",
  },
  {
    role: "Software Developer",
    company: "Santander Tecnologia Argentina",
    period: "Dec 2021 - Mar 2022",
    details: "Full-time · Hybrid · Buenos Aires, Argentina",
  },
  {
    role: "Full Stack Developer",
    company: "Genetrics",
    period: "Jul 2021 - Sep 2021",
    details: "Full-time · Buenos Aires, Argentina",
  },
  {
    role: "Full-stack Developer",
    company: "Envone",
    period: "Jul 2015 - Jun 2021",
    details: "CABA, Colegiales",
  },
];

const educationHighlights = [
  "Higher Technician in Programming (Tecnico Superior en Programacion) - Universidad Tecnologica Nacional (UTN)",
  "High School Diploma in Economics and Business Administration (Bachiller en Economia y Administracion) - Colegio San Martin de Tours",
];

const coreSkills = [
  "React",
  "Vue",
  "Web Performance",
  "TypeScript",
  "REST APIs",
  "Component Architecture",
  "Responsive Design",
];

const credibilityChips = [
  "10+ years shipping web products",
  "Banking frontend at Santander",
  "React architecture and performance",
];

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(() => createPortfolioTheme(darkMode), [darkMode]);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        component="main"
        id="main-content"
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle at 92% 3%, #264866 0%, #0e1320 55%)"
            : "radial-gradient(circle at 95% 5%, #ffe5bf 0%, #f4f1ea 50%, #dbe9ff 100%)",
          py: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Paper
              component="section"
              aria-labelledby="hero-heading"
              variant="outlined"
              sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 1 }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                justifyContent="space-between"
              >
                <Box sx={{ maxWidth: 820 }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.2}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                  >
                    <Avatar
                      src={profile.profilePhoto}
                      alt={`${profile.name} profile photo`}
                      sx={{
                        width: 52,
                        height: 52,
                        bgcolor: "primary.main",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      MM
                    </Avatar>
                    <Box>
                      <Typography
                        variant="overline"
                        color="primary.main"
                        sx={{ fontWeight: 700, letterSpacing: 1.4 }}
                      >
                        React Portfolio Hub
                      </Typography>
                      <Typography
                        variant="h3"
                        component="h1"
                        id="hero-heading"
                        sx={{ mt: 0.2, fontSize: { xs: "1.8rem", md: "2.6rem" } }}
                      >
                        {profile.name}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="h6" color="text.secondary" sx={{ mt: 0.4 }}>
                    {profile.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 1.2, maxWidth: 760 }}
                  >
                    {profile.tagline}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.4 }}
                  >
                    <Chip
                      size="small"
                      color="primary"
                      label="Available for freelance / full-time"
                    />
                    <Chip size="small" variant="outlined" label={profile.location} />
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.4 }}
                  >
                    {credibilityChips.map((chip) => (
                      <Chip key={chip} size="small" variant="outlined" label={chip} />
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1.5 }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      component="a"
                      href="#projects"
                    >
                      View Projects
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={`mailto:${profile.email}`}
                    >
                      Contact Me
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                    </Button>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    sx={{ mt: 1 }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      component="a"
                      href={profile.resumePdf}
                      endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download CV (PDF)
                    </Button>
                  </Stack>
                </Box>

                <Stack spacing={1} sx={{ minWidth: { md: 270 } }}>
                  <Button
                    variant="outlined"
                    onClick={() => setDarkMode((prev) => !prev)}
                    startIcon={
                      darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />
                    }
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </Button>

                  <Paper component="section" variant="outlined" sx={{ p: 1.4, borderRadius: 1 }}>
                    <Typography
                      component="h2"
                      variant="subtitle2"
                      sx={{ fontWeight: 700 }}
                    >
                      Summary
                    </Typography>
                    {profileSummary.map((item) => (
                      <Typography
                        key={item}
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.8, lineHeight: 1.45 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </Stack>
              </Stack>
            </Paper>

            <Paper component="section" variant="outlined" sx={{ p: 1.5, borderRadius: 1 }}>
              <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                Core Skills
              </Typography>
              <Stack direction="row" spacing={0.9} useFlexGap flexWrap="wrap">
                {coreSkills.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Paper>

            <Box
              component="section"
              aria-labelledby="experience-heading"
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              }}
            >
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography id="experience-heading" component="h2" variant="h6" sx={{ mb: 1 }}>
                  Experience Highlights
                </Typography>
                {experienceHighlights.map((item, index) => (
                  <Box key={item.role} sx={{ pt: index === 0 ? 0 : 1.2 }}>
                    {index > 0 ? <Divider sx={{ mb: 1.2 }} /> : null}
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {item.role} - {item.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                      {item.details}
                    </Typography>
                  </Box>
                ))}
              </Paper>

              <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
                <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
                  Education & Certifications
                </Typography>
                {educationHighlights.map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {item}
                  </Typography>
                ))}
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                  component="a"
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV (PDF)
                </Button>
              </Paper>
            </Box>

            <Box component="section" aria-labelledby="projects-heading">
              <Typography id="projects-heading" component="h2" variant="h6" sx={{ mb: 1 }}>
                Projects
              </Typography>
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
            </Box>

            <Box
              id="projects"
              component="section"
              aria-labelledby="projects-heading"
              sx={{
                display: "grid",
                gap: 1,
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                },
              }}
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
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
