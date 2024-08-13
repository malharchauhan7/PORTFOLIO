import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Accordination = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="hover:bg-gray-50 rounded-2xl"
    >
      <div className="my-1 ">
        <div className="collapse join-item border-base-200 border rounded-lg">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-lg font-semibold">
            {data.title}
          </div>
          <div className="collapse-content text-sm md:text-base lg:text-lg">
            <div className="flex gap-2 flex-wrap items-center ">
              <p className="">{data.year}</p>
              {" . "}
              <p className="">{data.Tech}</p>
              <a
                href={data.link}
                target="_blank"
                className="transition-all ease-linear ml-auto text-gray-600 hover:text-gray-900 transition-colors"
              >
                {data.link === null ? null : <FaExternalLinkAlt size={15} />}
              </a>
            </div>
            <div className="mt-2 font-sans">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                {data.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordination;
