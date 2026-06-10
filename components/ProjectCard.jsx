import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const statusColorMap = {
  Live: "success",
  Prototype: "warning",
  Archived: "default",
};

export default function ProjectCard({ project }) {
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 1, height: "100%", display: "flex", flexDirection: "column" }}
    >
      {project.previewImage ? (
        <Box
          sx={{
            width: "100%",
            height: 150,
            borderBottom: 1,
            borderColor: "divider",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={project.previewImage}
            alt={project.previewAlt ?? `${project.title} preview`}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
      ) : null}
      <CardContent sx={{ pb: 1.2, flexGrow: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Chip
            size="small"
            label={project.status}
            color={statusColorMap[project.status] ?? "default"}
            variant="outlined"
          />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            {project.level}
          </Typography>
        </Stack>

        <Typography variant="h6" sx={{ mt: 1.4, fontWeight: 700 }}>
          {project.title}
        </Typography>

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

        <Typography variant="caption" color="text.secondary" sx={{ alignSelf: "flex-end" }}>
          {project.category} • {project.scoreLabel ?? "Project score"}: {project.score}/100
        </Typography>
      </CardActions>
    </Card>
  );
}
