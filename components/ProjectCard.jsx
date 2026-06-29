"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { keyframes } from "@mui/material/styles";
import { getProjectPreviewComponent } from "@/components/project-previews";
import { useDemoUrlStatus } from "@/hooks/useDemoUrlStatus";

const statusColorMap = {
  Live: "success",
  Prototype: "warning",
  Archived: "default",
};

const livePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(2.2);
    opacity: 0;
  }
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
`;

function LiveStatusChip({ projectStatus, liveStatus }) {
  if (projectStatus !== "Live") {
    return (
      <Chip
        size="small"
        label={projectStatus}
        color={statusColorMap[projectStatus] ?? "default"}
        variant="outlined"
      />
    );
  }

  const label =
    liveStatus === "checking" ? "Checking…" : liveStatus === "offline" ? "Offline" : "Live";

  const color =
    liveStatus === "offline" ? "warning" : liveStatus === "live" ? "success" : "default";

  return (
    <Chip
      size="small"
      label={label}
      color={color}
      variant="outlined"
      aria-live="polite"
      icon={
        liveStatus === "live" ? (
          <Box
            aria-hidden
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "success.main",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                bgcolor: "success.main",
                animation: `${livePulse} 1.6s ease-out infinite`,
              },
            }}
          />
        ) : undefined
      }
      sx={{
        ...(liveStatus === "checking" && { opacity: 0.85 }),
        ...(liveStatus === "live" && {
          "& .MuiChip-icon": {
            ml: 1,
            mr: 0.25,
          },
        }),
      }}
    />
  );
}

export default function ProjectCard({ project }) {
  const PreviewComponent = getProjectPreviewComponent(project.previewKey);
  const shouldPingLive = project.status === "Live" && Boolean(project.demoUrl);
  const liveStatus = useDemoUrlStatus(project.demoUrl, shouldPingLive);

  const previewSx = {
    width: { xs: "100%", md: 340 },
    height: { xs: 190, sm: 210, md: "auto" },
    minHeight: { md: 221 },
    flexShrink: 0,
    alignSelf: { md: "stretch" },
    display: "flex",
    overflow: "hidden",
    borderBottom: { xs: 1, md: 0 },
    borderRight: { xs: 0, md: 1 },
    borderColor: "divider",
    bgcolor: "#152535",
    textDecoration: "none",
    color: "inherit",
    cursor: project.demoUrl ? "pointer" : "default",
    transition: "opacity 0.2s ease",
    "&:hover": project.demoUrl
      ? {
          opacity: 0.92,
        }
      : undefined,
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 1,
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "stretch" },
        overflow: "hidden",
      }}
    >
      {PreviewComponent ? (
        <Box
          component={project.demoUrl ? "a" : "div"}
          href={project.demoUrl ?? undefined}
          target={project.demoUrl ? "_blank" : undefined}
          rel={project.demoUrl ? "noreferrer" : undefined}
          aria-label={project.demoUrl ? `Open live demo: ${project.title}` : undefined}
          sx={previewSx}
        >
          <PreviewComponent
            aria-label={project.previewAlt ?? `${project.title} preview`}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              pointerEvents: "none",
            }}
          />
        </Box>
      ) : null}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
        }}
      >
        <CardContent sx={{ pb: 1.2, flexGrow: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {project.title}
            </Typography>
            <LiveStatusChip projectStatus={project.status} liveStatus={liveStatus} />
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              {project.level}
            </Typography>
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
            {project.summary}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.9 }}>
            My role: {project.role ?? "Not specified"}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1.1, fontWeight: 600 }}>
            Focus: {project.impact}
          </Typography>

          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.8, display: "block" }}>
            {project.usage}
          </Typography>

          <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 1.4 }}>
            {project.stack.map((tech) => (
              <Chip key={tech} label={tech} size="small" variant="outlined" />
            ))}
          </Stack>
        </CardContent>

        <CardActions
          sx={{
            px: 2,
            pb: 2,
            pt: 1.2,
            mt: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 1,
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ width: "100%" }}>
            {project.demoUrl ? (
              <Button
                size="small"
                variant="contained"
                component="a"
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                sx={{ flex: 1 }}
              >
                Live Demo
              </Button>
            ) : (
              <Button size="small" variant="outlined" disabled sx={{ flex: 1 }}>
                Demo Soon
              </Button>
            )}

            {project.repoUrl ? (
              <Button
                size="small"
                variant="outlined"
                component="a"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                sx={{ flex: 1 }}
              >
                Source Code
              </Button>
            ) : null}
          </Stack>
        </CardActions>
      </Box>
    </Card>
  );
}
