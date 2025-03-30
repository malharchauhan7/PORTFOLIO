import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Header = () => {
  const name = "Malhar Chauhan";
  const roles = ["Developer", "Designer"];
  const description = `Full-stack developer and UI designer with a passion for creating seamless digital experiences. 
    I specialize in modern web technologies and thoughtful design patterns to build intuitive user interfaces.`;

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start">
        <Logo />

        {/* Animated Name */}
        <motion.h1
          className="text-2xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Roles */}
        <motion.div
          className="flex gap-2 text-lg text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {roles.map((role, index) => (
            <React.Fragment key={role}>
              <span>{role}</span>
              {index < roles.length - 1 && <span>&</span>}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-sm font-sans text-gray-400 tracking-wider">
          ABOUT
        </h2>
        <p className="text-base md:text-md  leading-relaxed max-w-xl text-pretty">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
