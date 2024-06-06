import { useEffect, useState } from 'react';

const INITIAL_THEME =
  localStorage.theme ??
  (!('theme' in localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');

export const useTheme = () => {
  const [theme, setTheme] = useState(INITIAL_THEME);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.theme = theme;
  }, [theme]);

  return { theme, setTheme };
};
