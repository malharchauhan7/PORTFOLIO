import React, { useState, useEffect } from "react";
import { IoColorPaletteSharp } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";
import { MdOutlineColorLens } from "react-icons/md";
const ThemeController = () => {
  const themes = [
    "cmyk",
    "dark",
    "lofi",
    "light",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "emerald",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "cupcake",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "bumblebee",
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
      <button className="text-sm md:text-base my-2 " onClick={toggleTheme}>
        <MdOutlineColorLens size={17} />
      </button>
    </div>
  );
};

export default ThemeController;
