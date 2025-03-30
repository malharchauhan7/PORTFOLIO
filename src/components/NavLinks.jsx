import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThemeController from "./ThemeController";
const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div className="w-auto h-10 flex  items-center justify-start ">
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
        <motion.div
          className="flex items-center space-x-6 "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              opacity: 1,
              x: 2,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/Designs")}
            className="text-lg font-medium tracking-wide 
                    transition-colors duration-200 font-sans
                   select-none focus:outline-none"
          >
            DesignFolio
          </motion.button>
        </motion.div>
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
