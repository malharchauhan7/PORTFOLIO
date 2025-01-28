import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  return (
    <>
      <motion.div
        className="flex  my-2 select-none"
        whileHover={{ marginLeft: "7px" }}
      >
        <a href={data.link} target="_blank">
          <div className="md:text-lg text-xl font-semibold ">{data.title}</div>
        </a>
      </motion.div>
    </>
  );
};

export default ProjectCard;
