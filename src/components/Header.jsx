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
        {/* <div>
          <NavLinks />
        </div> */}
        <div className="my-4 md:w-[90%] select-none">
          <h2 className="text-sm font-mono text-gray-400 tracking-wider mb-4 select-none">
            ABOUT
          </h2>
          <p className="text-wrap font-medium my-2 md:text-base sm:text-lg">
            Full-stack developer and UI designer. Creating seamless digital
            experiences with modern web technologies and thoughtful design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
