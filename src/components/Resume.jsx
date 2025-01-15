import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="my-1">
      {" "}
      <a href="https://drive.google.com/file/d/1jiKgzeiR-86gLXfDf5Eyc7X3dOIs9V3O/view?usp=sharing">
        <motion.button
          className="btn btn-xs btn-primary btn-outline mt-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{}}
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
};

export default Resume;
