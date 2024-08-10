import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../images/logo.png";
import { easeIn, motion, easeOut } from "framer-motion";

const Logo = () => {
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
    >
      <div className=" hover:cursor-pointer" onClick={() => navigation("/")}>
        <img src={Image} alt="" className="w-11 my-4" />
      </div>
    </motion.div>
  );
};

export default Logo;
