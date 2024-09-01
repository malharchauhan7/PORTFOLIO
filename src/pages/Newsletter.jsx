/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
// import NewsCard from "../components/NewsCard";
import newsdata from "../newsletter";
import ContentData from "../components/ContentData";

const Newsletter = () => {
  const [content, setContent] = useState();
  const handleContentClick = (content) => {
    setContent(content);
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start p-4 md:p-12 gap-4 md:gap-8 h-full bg-white"
      data-theme="light"
    >
      <div className="w-full md:w-1/3 h-auto flex flex-col items-start pt-4 md:pt-10 px-4 md:px-5">
        <Logo />
        <h1 className="font-semibold text-lg md:text-xl my-2">All Articles</h1>
        <motion.div className="w-full h-auto">
          {newsdata.map((data) => (
            <motion.div
              key={data.id}
              onClick={() => handleContentClick(data)}
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-sm md:text-base px-3 py-2 my-1 rounded-lg hover:cursor-pointer flex gap-2 justify-between border border-base-200 hover:bg-gray-100">
                <div className="text-gray-900 font-sans font-normal">
                  {data.title}
                </div>
                <div className="text-gray-900 font-sans font-normal hidden md:block">
                  {data.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full md:w-2/3 h-auto p-4 md:p-10">
        {content ? (
          <ContentData data={content} />
        ) : (
          <>
            <div className=" text-lg font-semibold">{"Click on Articles"}</div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Newsletter;
