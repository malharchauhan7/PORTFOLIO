import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Accordination = ({ data }) => {
  return (
    <motion.div>
      <div className="my-1">
        <div className="collapse join-item border-base-200 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-normal font-medium">
            {data.title}
          </div>
          <div className="collapse-content">
            <div className="flex gap-2">
              <p className="text-base">{data.year}</p>
              {" . "}
              <p className="text-base">{data.Tech}</p>
              <a
                href={data.link}
                target="_blank"
                className="opacity-50 mt-1 hover:opacity-95 transition-all ease-linear"
              >
                {data.link === null ? null : <FaExternalLinkAlt size={15} />}
              </a>
            </div>
            <div className="mt-2 font-sans">
              <p className="text-[16px]">{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Accordination;
