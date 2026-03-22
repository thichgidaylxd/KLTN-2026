/**
 * Theme Configuration
 * Cấu hình Dark/Light Theme cho ứng dụng
 */

export type ThemeType = "light" | "dark";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  border: string;
}

const lightTheme: ThemeConfig = {
  primary: "#3b82f6", // Blue-500
  secondary: "#10b981", // Green-500
  background: "#ffffff",
  text: "#1f2937", // Gray-900
  border: "#e5e7eb", // Gray-200
};

const darkTheme: ThemeConfig = {
  primary: "#60a5fa", // Blue-400
  secondary: "#34d399", // Green-400
  background: "#111827", // Gray-900
  text: "#f3f4f6", // Gray-100
  border: "#374151", // Gray-700
};

/**
 * Get theme configuration
 * @param theme - Theme type ("light" or "dark")
 * @returns Theme configuration object
 */
export const getTheme = (theme: ThemeType): ThemeConfig => {
  return theme === "dark" ? darkTheme : lightTheme;
};

/**
 * Get theme from localStorage or system preference
 * @returns Current theme type
 */
export const getCurrentTheme = (): ThemeType => {
  const stored = localStorage.getItem("theme") as ThemeType | null;
  if (stored) {
    return stored;
  }

  // Check system preference
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
};

/**
 * Save theme preference to localStorage
 * @param theme - Theme to save
 */
export const setTheme = (theme: ThemeType): void => {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
};

/**
 * Apply theme to document
 * @param theme - Theme to apply
 */
export const applyTheme = (theme: ThemeType): void => {
  const root = document.documentElement;
  const config = getTheme(theme);

  root.style.setProperty("--color-primary", config.primary);
  root.style.setProperty("--color-secondary", config.secondary);
  root.style.setProperty("--color-background", config.background);
  root.style.setProperty("--color-text", config.text);
  root.style.setProperty("--color-border", config.border);

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export default {
  getTheme,
  getCurrentTheme,
  setTheme,
  applyTheme,
};
