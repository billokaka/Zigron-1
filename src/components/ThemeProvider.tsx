"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to get initial theme (runs only on client)
function getInitialTheme(): Theme {
  return "light";
}

// Helper to apply theme to DOM
function applyThemeToDOM(theme: Theme) {
  if (typeof document === "undefined") return;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with light, will sync on mount
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Sync theme on mount (only applies DOM class, no setState in effect)
  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyThemeToDOM(initialTheme);
    // Use a microtask to batch the state update
    queueMicrotask(() => {
      setThemeState(initialTheme);
      setMounted(true);
    });
  }, []);

  // Set theme function
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("zigron-theme", newTheme);
    applyThemeToDOM(newTheme);
  }, []);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    // Disabled dark mode toggle
  }, []);

  // Context value - use actual theme after mount, "light" before
  const contextValue: ThemeContextType = {
    theme: mounted ? theme : "light",
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
