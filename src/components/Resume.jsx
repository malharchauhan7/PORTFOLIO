import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div>
      <a href="https://drive.google.com/file/d/1jiKgzeiR-86gLXfDf5Eyc7X3dOIs9V3O/view?usp=sharing">
        <motion.button
          className="btn btn-xs btn-outline"
          whileHover={{ scale: 1.03 }}
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
};

export default Resume;
