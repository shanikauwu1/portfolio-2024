import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className={`px-2 py-2 rounded-full ${
          darkMode ? "bg-white" : "bg-green-900"
        } ${
          darkMode ? "text-gray-900" : "text-white"
        } transition-colors duration-200`}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </>
  );
};

export default DarkModeToggle;
