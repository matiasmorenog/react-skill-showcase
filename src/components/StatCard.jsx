import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function StatCard({ label, value, hint }) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 1 }}>
      <CardContent sx={{ pb: 2.2 }}>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
          {label}
        </Typography>
        <Typography variant="h4" sx={{ mt: 0.6, mb: 0.2, fontWeight: 700 }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hint}
        </Typography>
      </CardContent>
    </Card>
  );
}
