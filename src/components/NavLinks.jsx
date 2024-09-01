import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigation = useNavigate();

  return (
    <div>
      {" "}
      <div className="w-auto h-10  flex items-center justify-center gap-5  font-semibold ">
        <motion.h1
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/about")}
          // className="hover:underline hover:cursor-pointer  decoration-indigo-500"
          className=" hover:cursor-pointer"
        >
          About
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/connect")}
          // className="hover:underline hover:cursor-pointer decoration-amber-400"
          className=" hover:cursor-pointer"
        >
          Connect
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/articles")}
          // className="hover:underline hover:cursor-pointer decoration-lime-600"
          className=" hover:cursor-pointer"
        >
          Articles
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.03, opacity: 1 }}
          onClick={() => navigation("/games")}
          // className="hover:underline hover:cursor-pointer decoration-red-400"
          className=" hover:cursor-pointer"
        >
          Games
        </motion.h1>
      </div>
    </div>
  );
};

export default NavLinks;
