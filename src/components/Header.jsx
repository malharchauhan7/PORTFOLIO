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
      <div className="">
        <div className="flex flex-col items-start">
          <Logo />
          <motion.div className="text font-sans font-bold select-none">
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
          <h3 className="font-sans text-base select-none">
            Developer & <motion.span>Designer</motion.span>
          </h3>
          {/* <Resume /> */}
        </div>

        <div className="my-4 md:w-[90%] select-none">
          <h1 className="font-mono font-bold md:font-bold sm:text-semibold md:text-sm text-lg text-gray-400 opacity-70">
            ABOUT
          </h1>
          <p className="text-pretty font-medium my-2 md:text-base sm:text-lg ">
            I am passionate about technology and design, specializing in web
            development, Python, MERN, Figma, UI design, and graphic design to
            create digital experiences that combine functionality and
            aesthetics.
          </p>
        </div>
        {/* <div>
          <NavLinks />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
