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
    <Card variant="outlined" sx={{ borderRadius: 1, height: "100%" }}>
      <CardContent sx={{ pb: 1.2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
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

        <Typography variant="body2" sx={{ mt: 1.1, fontWeight: 600 }}>
          Impact: {project.impact}
        </Typography>

        <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 1.4 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0.6, display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {project.demoUrl ? (
            <Button size="small" variant="contained" component="a" href={project.demoUrl} target="_blank" rel="noreferrer">
              Live Demo
            </Button>
          ) : (
            <Button size="small" variant="outlined" disabled>
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
              rel="noreferrer">
              Source Code
            </Button>
          ) : null}
        </Box>

        <Typography variant="caption" color="text.secondary">
          {project.category} • {project.score}/100
        </Typography>
      </CardActions>
    </Card>
  );
}
