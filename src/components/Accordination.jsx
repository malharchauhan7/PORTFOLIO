import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Accordination = ({ data }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="hover:bg-gray-100 rounded-lg "
    >
      <div className="my-1">
        <div className="collapse join-item border-base-200 border rounded-lg">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-md font-medium">{data.title}</div>
          <div className="collapse-content text-sm">
            <div className="flex gap-2 flex-wrap items-center">
              <p className="">{data.year}</p>
              <span className="text-gray-400">•</span>
              <p className="">{data.Tech}</p>
              {data.link && (
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-gray-600 hover:text-gray-900 transition-all ease-linear"
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
            <div className="mt-2">
              <p className="text-sm leading-relaxed">{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordination;
