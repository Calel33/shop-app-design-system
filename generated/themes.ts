/**
 * Auto-generated theme tokens
 */

export const themes = {
  "dark": {
    name: "dark",
    tokens: {
      colors: {
        primary: "#0A84FF",
        secondary: "#00C7FF",
        background: "#1C1C1E",
        text: "#FFFFFF",
        border: "#424245",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
  "high-contrast": {
    name: "high-contrast",
    tokens: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        background: "#FFFFFF",
        text: "#000000",
        border: "#000000",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
      },
    },
  },
  "light": {
    name: "light",
    tokens: {
      colors: {
        primary: "#007AFF",
        secondary: "#5AC8FA",
        background: "#FFFFFF",
        text: "#000000",
        border: "#E0E0E0",
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
      },
    },
  },
} as const;

export type ThemeId = keyof typeof themes;