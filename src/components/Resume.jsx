import React from "react";
import { motion } from "framer-motion";
//https://drive.google.com/file/d/1jiKgzeiR-86gLXfDf5Eyc7X3dOIs9V3O/view?usp=sharing
const Resume = () => {
  return (
    <div>
      <a href="https://malharchauhan7.github.io/resume.cv/">
        <motion.button className="btn btn-xs " whileHover={{ scale: 1.05 }}>
          Resume
        </motion.button>
      </a>
    </div>
  );
};

export default Resume;
