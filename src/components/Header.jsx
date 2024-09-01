import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import NavLinks from "./NavLinks";
import Resume from "./Resume";
const Header = () => {
  const text = "Malhar Chauhan";
  const navigation = useNavigate();
  return (
    <div>
      {" "}
      <div className="">
        <div className="flex flex-col items-center">
          <Logo />
          {/* <motion.h1
        className="font-mono font-semibold text-lg"
        animate={{
          color: ["#000", "#ff2323", "#000"],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        Malhar Chauhan
      </motion.h1> */}
          <motion.div className="text font-mono font-bold">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          <h3 className="font-mono text-base ">
            Developer & <motion.span>Designer</motion.span>
          </h3>
          <Resume />
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Header;
