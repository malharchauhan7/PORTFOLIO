/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const ContentData = ({ data }) => {
  return (
    <motion.div className="flex flex-col gap-4 md:gap-5 p-4 md:p-6">
      {/* Date */}
      <div className="text-base md:text-lg text-gray-600">{data.date}</div>
      {/* Title */}

      <div className="flex gap-2">
        <div className="text-2xl md:text-4xl font-bold">{data.title}</div>
        {/* {link} */}
        <a
          href={data.link}
          target="_blank"
          className="font-semibold text-blue-500 hover:text-blue-800 transition-colors mt-2"
        >
          <FaExternalLinkAlt size={15} />
        </a>
      </div>
      {/* Subtitle */}
      <div className="text-lg md:text-xl font-medium text-gray-800">
        {data.subtitle}
      </div>

      {/* Image */}
      <div className="rounded-md overflow-hidden my-4">
        <img
          src={data.image.link}
          alt={data.title}
          className="w-auto h-auto object-cover"
        />
      </div>

      {/* Content */}
      {data && (
        <>
          <div className="text-base md:text-xl text-gray-700 my-2">
            {data.content.section1}
          </div>
          <div className="text-base md:text-xl text-gray-700  font-semibold">
            {data.content.subtitle2}
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-1"> {data.content.section2.h1}</div>
            <div>{data.content.section2.paragraph1}</div>
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-1"> {data.content.section4.h1}</div>
            <div>{data.content.section4.paragraph1}</div>
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-1"> {data.content.section5.h1}</div>
            <div>{data.content.section5.paragraph1}</div>
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-1"> {data.content.section6.h1}</div>
            <div>{data.content.section6.paragraph1}</div>
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-3 font-semibold">{data.content.section7.h1}</div>
            <div>{data.content.section7.paragraph1}</div>
          </div>
          <div className="text-base md:text-xl text-gray-700 my-1 ">
            <div className="my-3 font-semibold">{data.content.section8.h1}</div>
            <div>
              <div className="my-3">{data.content.section8.points.h2}</div>
              <div className="my-2">
                {data.content.section8.points.paragraph1}
              </div>
              <div className="my-2">
                {data.content.section8.points.paragraph2}
              </div>
            </div>
          </div>
          <div>
            <div className="text-base md:text-xl text-gray-700 my-1 font-semibold">
              {data.content.conclusion.h1}
            </div>
            <div className="text-base md:text-xl text-gray-700 my-1">
              {data.content.conclusion.paragraph1}
            </div>
            <div className="text-base md:text-xl text-gray-700 my-1">
              {data.content.conclusion.paragraph2}
            </div>
          </div>
          <div>
            <h2 className="">Thank you for Reading</h2>
          </div>
          <div>
            <a
              href={data.link}
              target="_blank"
              className="flex gap-2 font-semibold text-blue-500 hover:text-blue-800 transition-colors"
            >
              Link
              <div className="mt-2">
                <FaExternalLinkAlt size={12} />
              </div>
            </a>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ContentData;
