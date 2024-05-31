import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "cyberpunk"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "cyberpunk" ? "coffee" : "cyberpunk");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg focus:outline-none"
      aria-label="Toggle Theme"
    >
      {theme === "cyberpunk" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-8.66l-.707.707M4.34 4.34l-.707.707M21 12h1M3 12H2m16.66-6.66l.707.707M7.34 19.34l.707.707M17 7h.01M7 17h.01M12 5a7 7 0 000 14 7 7 0 000-14z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-8.66l-.707.707M4.34 4.34l-.707.707M21 12h1M3 12H2m16.66-6.66l.707.707M7.34 19.34l.707.707M17 7h.01M7 17h.01M12 5a7 7 0 000 14 7 7 0 000-14z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
