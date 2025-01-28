import React from "react";
import ThemeController from "./ThemeController";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import NavLinks from "./NavLinks";
import Resume from "./Resume";
const Footer = () => {
  return (
    <>
      <div>
        <NavLinks />
      </div>
      <motion.div className=" flex justify-between items-center h-10 ">
        <div className="flex gap-3">
          <a target="_blank" href="mailto:malharchauhan02@gmail.com">
            <motion.div
              className="github w-[25px] h-[25px]  flex justify-center items-center rounded tooltip tooltip-bottom "
              whileHover={{
                // backgroundColor: "#e8e8e8",
                transition: { duration: 0.2 },
                scale: 1.02,
                opacity: 1,
              }}
              data-tip="Email"
            >
              <MdMailOutline size={17} />
            </motion.div>
          </a>
          <a target="_blank" href="https://github.com/malharchauhan7">
            <motion.div
              className="github w-[25px] h-[25px]  flex justify-center items-center rounded tooltip tooltip-bottom "
              whileHover={{
                // backgroundColor: "#e8e8e8",
                transition: { duration: 0.2 },
                scale: 1.02,
                opacity: 1,
              }}
              data-tip="Github"
            >
              <LuGithub size={17} />
            </motion.div>
          </a>
          <a
            target="_blank"
            href="https://x.com/Malhar_7?t=AOSeo52_MVYwdtSzNqfl2A&s=09"
          >
            <motion.div
              className="github w-[25px] h-[25px]  flex justify-center items-center rounded tooltip tooltip-bottom "
              whileHover={{
                transition: { duration: 0.2 },
                scale: 1.02,
              }}
              data-tip="Twitter"
            >
              <FaXTwitter size={17} />
            </motion.div>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/malhar-chauhan-539100238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fmalharportfolio.vercel.app%2F"
          >
            <motion.div
              className="github w-[25px] h-[25px]  flex justify-center items-center rounded tooltip tooltip-bottom "
              whileHover={{
                transition: { duration: 0.2 },
                scale: 1.02,
              }}
              data-tip="LinkedIn"
            >
              <FiLinkedin size={17} />
            </motion.div>
          </a>
          <div>
            <Resume />
          </div>
        </div>

        <motion.div
          className="tooltip tooltip-bottom"
          data-tip="Theme"
          whileHover={{
            transition: { duration: 0.2 },
            scale: 1.02,
          }}
        >
          <ThemeController />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Footer;
