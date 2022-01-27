import { useEffect, useState } from "react";

const KEY = "theme";
const LIGHT = "light";
const DARK = "dark";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => {
    if (theme === LIGHT) {
      window.localStorage.setItem(KEY, DARK);
      setTheme(DARK);
    } else {
      window.localStorage.setItem(KEY, LIGHT);
      setTheme(LIGHT);
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem(KEY);
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};
