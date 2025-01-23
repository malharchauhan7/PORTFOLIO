import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SmoothCursor = ({ size = 20 }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("#ffffff");

  // Track the actual mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  // Add a delay to the cursor movement
  useEffect(() => {
    const delayFollow = setInterval(() => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 1.5,
        y: prev.y + (mousePosition.y - prev.y) * 1.5,
      }));
    }, 16);

    return () => clearInterval(delayFollow);
  }, [mousePosition]);

  // Detect DaisyUI theme changes
  useEffect(() => {
    const updateCursorTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        setCursorColor(generateRandomColor);
      } else if (currentTheme === "light") {
        setCursorColor(generateRandomColor);
      } else {
        setCursorColor(generateRandomColor); // Default fallback
      }
    };

    updateCursorTheme();

    const observer = new MutationObserver(updateCursorTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: cursorColor,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      animate={{
        x: cursorPosition.x - size / 2,
        y: cursorPosition.y - size / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    />
  );
};

export default SmoothCursor;
