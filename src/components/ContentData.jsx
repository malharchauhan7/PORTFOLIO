/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const ContentData = ({ data }) => {
  return (
    <motion.div className="flex flex-col gap-4 md:gap-6 p-4 md:p-6">
      {/* Date */}
      <div className="text-base md:text-lg text-gray-600">{data.date}</div>
      {/* Title */}
      <div className="text-2xl md:text-4xl font-bold">{data.title}</div>
      {/* Subtitle */}
      <div className="text-lg md:text-xl font-medium text-gray-800">
        {data.subtitle}
      </div>
      {/* Image */}
      <div className="rounded-md overflow-hidden my-4">
        <img
          src={data.image}
          alt={data.title}
          className="w-2/3 h-auto object-cover"
        />
      </div>
      {/* Content */}
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section1}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section2}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section3}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section3}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section4}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section5}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section6}
      </div>
      <div className="text-base md:text-lg text-gray-700 my-2">
        {data.content.section7}
      </div>
    </motion.div>
  );
};

export default ContentData;
