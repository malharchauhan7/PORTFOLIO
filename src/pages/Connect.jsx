import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const Connect = () => {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center"
      data-theme="light"
    >
      <div className="">
        <Logo />
        <div className=" transition-all ease-in-out flex flex-col gap-4 my-8 opacity-95">
          <a
            href="mailto:malharchauhan02@gmail.com"
            className="font-mono text-lg hover:underline decoration-slate-400 "
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/malhar-chauhan-539100238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="font-mono text-lg hover:underline decoration-slate-400  "
          >
            Linkedin
          </a>
          <a
            href="https://github.com/malharchauhan7"
            target="_blank"
            className="font-mono text-lg hover:underline decoration-slate-400 "
          >
            GitHub
          </a>
          <a
            href="https://x.com/Malhar_7?t=AOSeo52_MVYwdtSzNqfl2A&s=09"
            target="_blank"
            className="font-mono text-lg hover:underline decoration-slate-400  "
          >
            Twitter
          </a>
          <a
            href="https://dribbins.etsy.com/"
            target="_blank"
            className="font-mono text-lg hover:underline decoration-slate-400  "
          >
            Etsy
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
