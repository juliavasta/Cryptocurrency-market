import {
  useCallback,
  useMemo,
  useState,
  useContext,
  createContext,
  useEffect
} from "react";
import { getItem, storeItem } from "utils/localStorage";

const ThemeContext = createContext({});

const storedKeyTheme = "theme";
const storedTheme = getItem(storedKeyTheme) || "dark";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    storeItem(storedKeyTheme, theme);
  }, [theme]);

  const toggleDarkMode = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  const value = useMemo(() => {
    return {
      theme,
      toggle: toggleDarkMode
    };
  }, [theme, toggleDarkMode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    console.log("error");
    throw new Error("useThemeContext must be wrapped in ThemeContextProvider");
  }
  return context;
}

export { ThemeContextProvider, useThemeContext };
