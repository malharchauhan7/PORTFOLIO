import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";
const NavLinks = () => {
  const navigation = useNavigate();

  return (
    <div>
      {" "}
      <div className="w-auto h-10 flex  items-center justify-start gap-2 md:gap-3  ">
        {/* <motion.h1
          initial={{ opacity: 0.4 }}
          whileHover={{ scale: 1.02, opacity: 1 }}
          onClick={() => navigation("/about")}
          className=" hover:cursor-pointer text-sm md:text-base"
        >
          About
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.4 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/connect")}
          className=" hover:cursor-pointer text-sm md:text-base"
        >
          Connect
        </motion.h1> */}
        <motion.h1
          initial={{ opacity: 0.4 }}
          whileHover={{ scale: 1.03, opacity: 1, transition: 1.5 }}
          onClick={() => navigation("/Designs")}
          className=" hover:cursor-pointer text-base font-sans font-semibold select-none"
        >
          DesignFolio
        </motion.h1>
        {/* <motion.h1
          initial={{ opacity: 0.4 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/articles")}
          className=" hover:cursor-pointer text-base font-mono"
        >
          ARTICLES
        </motion.h1> */}
      </div>
    </div>
  );
};

export default NavLinks;
