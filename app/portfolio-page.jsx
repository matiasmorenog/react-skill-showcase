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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { createPortfolioTheme } from "@/app/theme";

const profile = {
  name: "Matías Moreno",
  role: "Senior Frontend Engineer — React & TypeScript | Scalable UI Systems",
  location: "Tigre, Buenos Aires — Open to remote work",
  email: "matiasmorenog@gmail.com",
  github: "https://github.com/matiasmorenog",
  linkedin: "https://www.linkedin.com/in/matias-moreno/",
  resumePdf: "/MatiasMoreno_resume.pdf",
  profilePhoto: "/profile-photo.jpg",
};

const profileSummary = [
  "Senior Frontend Engineer with extensive experience developing high-demand SaaS platforms and B2B solutions, specializing in React and TypeScript. I have worked in complex environments such as banking, healthcare, and global certification platforms, with a focus on performance, scalability, and product quality.",
  "I excel at building robust, maintainable, and user-oriented interfaces, combining frontend architecture best practices with testing and continuous improvement. Proven track record leading the evolution of production systems and ensuring consistent experiences for thousands of active users.",
];

const experienceHighlights = [
  {
    role: "Frontend Engineer",
    company: "INE",
    period: "Mar 2022 - Jul 2025",
    details:
      "SaaS learning platforms (cybersecurity, networking, cloud). React, Vue & TypeScript. B2C/B2B products, subscriptions, certifications, and user management.",
  },
  {
    role: "Software Engineer (Fullstack)",
    company: "Santander Tecnología Argentina",
    period: "Dec 2021 - Mar 2022",
    details:
      "Banking processes and enterprise architecture. Legacy systems support, SQL Server stored procedures, and regulated high-compliance environments.",
  },
  {
    role: "Software Engineer (Fullstack)",
    company: "Genetrics",
    period: "Jul 2021 - Sep 2021",
    details:
      "Healthcare applications during COVID-19. React interfaces for hospital workflows, patient screening systems, and government API integration.",
  },
  {
    role: "Software Engineer (Fullstack)",
    company: "Envone",
    period: "Jul 2015 - Jun 2021",
    details:
      "Modular CRM platform for enterprise clients in Latin America. Node.js & Vue.js. Sales, billing, automation, and operational management modules.",
  },
];

const educationHighlights = [
  "Higher Technical Degree in Programming — Universidad Tecnológica Nacional (UTN) · 2012 - 2015",
  "Bachelor's in Economics and Administration — Colegio San Martín de Tours · 2007 - 2010",
  "Certifications: Stock Market Diffusion Program (PRO.DI.BUR), Microsoft Office Suite (Advanced/Intermediate)",
  "Languages: English (Professional — B2 Level)",
];

const coreSkills = [
  "React",
  "Next.js",
  "Vue.js",
  "TypeScript",
  "Node.js",
  "Jest & Cypress",
  "Performance Optimization",
  "Scalable Frontend Architecture",
  "SaaS Product Development",
];

const credibilityChips = [
  "10+ years in software development",
  "Banking, healthcare & SaaS platforms",
  "React, TypeScript & scalable UI systems",
];

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(() => createPortfolioTheme(darkMode), [darkMode]);

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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Tooltip title={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
                <IconButton
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  size="small"
                  sx={{
                    border: 1,
                    borderColor: "divider",
                    bgcolor: "background.paper",
                  }}
                >
                  {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                </IconButton>
              </Tooltip>
            </Box>

            <Paper
              component="section"
              aria-labelledby="hero-heading"
              variant="outlined"
              sx={{ p: { xs: 2, md: 2.5 }, borderRadius: 1 }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" },
                  alignItems: "start",
                }}
              >
                <Box>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.2}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                  >
                    <Avatar
                      src={profile.profilePhoto}
                      alt={`${profile.name} profile photo`}
                      sx={{
                        width: 120,
                        height: 120,
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
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      mt: 0.4,
                      fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.35,
                      maxWidth: 640,
                    }}
                  >
                    {profile.role}
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
                  </Stack>
                </Box>

                <Stack spacing={2} sx={{ pl: { md: 1 }, borderLeft: { md: 1 }, borderColor: { md: "divider" } }}>
                  <Box>
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
                  </Box>

                  <Divider />

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      Quick Links
                    </Typography>
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
                        href={profile.resumePdf}
                        endIcon={<OpenInNewRoundedIcon fontSize="small" />}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download CV
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Paper>

            <Paper
              component="section"
              variant="outlined"
              sx={{ p: 1.5, borderRadius: 1 }}
            >
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
                <Typography
                  id="experience-heading"
                  component="h2"
                  variant="h6"
                  sx={{ mb: 1 }}
                >
                  Experience Highlights
                </Typography>
                {experienceHighlights.map((item, index) => (
                  <Box
                    key={item.company}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 1.5,
                      pb: index < experienceHighlights.length - 1 ? 1.5 : 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pt: 0.3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "primary.main",
                          flexShrink: 0,
                        }}
                      />
                      {index < experienceHighlights.length - 1 ? (
                        <Box
                          sx={{
                            width: 2,
                            flexGrow: 1,
                            minHeight: 24,
                            mt: 0.5,
                            bgcolor: "divider",
                            borderRadius: 1,
                          }}
                        />
                      ) : null}
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "1fr 10.5rem" },
                          columnGap: 2,
                          rowGap: 0.25,
                          alignItems: "baseline",
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {item.role} — {item.company}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          component="time"
                          sx={{
                            fontWeight: 600,
                            fontVariantNumeric: "tabular-nums",
                            whiteSpace: "nowrap",
                            textAlign: { sm: "right" },
                          }}
                        >
                          {item.period}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.4 }}>
                        {item.details}
                      </Typography>
                    </Box>
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
              </Paper>
            </Box>

            <Paper
              component="section"
              variant="outlined"
              aria-labelledby="projects-heading"
              sx={{ p: 2, borderRadius: 1 }}
            >
              <Typography
                id="projects-heading"
                component="h2"
                variant="h6"
                sx={{ mb: 1.5 }}
              >
                Live demo projects
              </Typography>
              <Box
                id="projects"
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
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </Box>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
