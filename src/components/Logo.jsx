import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { easeIn, motion, easeOut } from "framer-motion";
import { PiCoffeeFill } from "react-icons/pi";
import { LuCoffee } from "react-icons/lu";
import { FaCoffee } from "react-icons/fa";
import { PiCoffeeBold } from "react-icons/pi";
const Logo = ({ currentTheme }) => {
  const navigation = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 1 }}
      whileInView={{ opacity: 1 }}
      className="hoverable"
    >
      <div
        className="hover:cursor-pointer my-2 tooltip tooltip-bottom"
        onClick={() => navigation("/")}
        data-tip="Chai☕"
      >
        {/* <img src={logo} alt="" className="w-11 my-4" /> */}
        <PiCoffeeBold size={25} />
      </div>
    </motion.div>
  );
};

export default Logo;
