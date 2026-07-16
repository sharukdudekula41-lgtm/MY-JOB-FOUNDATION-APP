import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem(
      "theme"
    ) as Theme | null;

    if (
      storedTheme === "light" ||
      storedTheme === "dark"
    ) {
      return storedTheme;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  };

  const [theme, setThemeState] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (
      event: MediaQueryListEvent
    ) => {
      if (!localStorage.getItem("theme")) {
        setThemeState(
          event.matches ? "dark" : "light"
        );
      }
    };

    media.addEventListener(
      "change",
      handleChange
    );

    return () => {
      media.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export default ThemeContext;