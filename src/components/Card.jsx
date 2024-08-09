/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <motion.div>
      <div className="w-auto px-3 py-1 h-auto rounded-md my-2 font-sans font-medium hover:bg-gray-200 transition-all ease-linear">
        <div className="flex justify-between">
          <h1 className="hover:cursor-default opacity-90">{data.title}</h1>
          <a
            href={data.link}
            target="_blank"
            className="opacity-50 mt-2 mr-2 hover:opacity-95 transition-all ease-linear"
          >
            {data.link === null ? null : <FaExternalLinkAlt size={15} />}
          </a>
        </div>
        <div className="flex  gap-2  opacity-60 font-normal">
          <h2 className="hover:cursor-default">{data.year}</h2>
          {" . "}
          <h2 className="hover:cursor-default"> {data.Tech}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
