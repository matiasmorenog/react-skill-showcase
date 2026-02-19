import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function SelectField({ label, value, onChange, options }) {
  return (
    <TextField
      select
      label={label}
      value={value}
      size="small"
      onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default function Filters({
  query,
  setQuery,
  category,
  setCategory,
  level,
  setLevel,
  status,
  setStatus,
  categories,
  levels,
  statusOptions,
  onReset,
}) {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 1 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1.2}
        useFlexGap
        flexWrap="wrap">
        <TextField
          label="Search"
          placeholder="React, API, dashboard..."
          value={query}
          size="small"
          onChange={(event) => setQuery(event.target.value)}
          sx={{ minWidth: { xs: "100%", md: 260 }, flex: 1 }}
        />

        <SelectField
          label="Category"
          value={category}
          onChange={setCategory}
          options={categories}
        />

        <SelectField label="Level" value={level} onChange={setLevel} options={levels} />

        <SelectField
          label="Status"
          value={status}
          onChange={setStatus}
          options={statusOptions}
        />

        <Button variant="outlined" color="inherit" onClick={onReset}>
          Reset
        </Button>
      </Stack>
    </Paper>
  );
}
