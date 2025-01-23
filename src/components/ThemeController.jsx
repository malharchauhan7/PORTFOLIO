import React, { useState, useEffect } from "react";

const ThemeController = () => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const currentTheme = themes[currentThemeIndex];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <div className="">
      <button className="text-sm md:text-base " onClick={toggleTheme}>
        THEME
      </button>
    </div>
  );
};

export default ThemeController;
