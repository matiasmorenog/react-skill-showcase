import { createTheme } from "@mui/material/styles";

export function createPortfolioTheme(darkMode) {
  return createTheme({
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
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: darkMode ? "#7de2db" : "#0a7f78",
              outlineOffset: 2,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "&.Mui-focusVisible": {
              outline: "2px solid",
              outlineColor: darkMode ? "#7de2db" : "#0a7f78",
              outlineOffset: 2,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          },
        },
      },
    },
  });
}
