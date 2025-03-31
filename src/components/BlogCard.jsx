import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ post, index }) => {
  return (
    <div className="relative group ">
      <motion.div
        className="relative block w-full my-2 group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          x: 8,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0,
          },
        }}
      >
        <Link to={`/blog/${post.slug}`}>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium transition-colors duration-300 peer">
              {post.title}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
        </Link>

        <div
          className="absolute left-full top-1/2 ml-4 -translate-y-1/2 px-3 py-2 
          bg-gray-800 text-white text-sm rounded-lg opacity-0 
          pointer-events-none transition-opacity group-hover:opacity-100
          min-w-[250px] whitespace-normal
          before:content-[''] before:absolute before:top-1/2 before:right-full 
          before:-translate-y-1/2 before:border-8 before:border-y-transparent 
          before:border-l-transparent before:border-r-gray-800 shadow-lg"
        >
          <div className="space-y-1">
            <p>{post.excerpt}</p>
            <p className="text-xs  text-gray-400 ">{post.readTime}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCard;
