import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import ThemeController from "../components/ThemeController";
import { blogPosts } from "../Blogs/BlogPostContent";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen px-4 py-10"
    >
      <Logo />
      <div className="font-bold text-2xl my-4 flex gap-2">
        <h1>Blogs</h1>
        <ThemeController />
      </div>

      <div className="space-y-10 w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <Link to={`/blog/${post.slug}`} className="block">
              {/* {post.image && (
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )} */}

              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-medium  hover:text-gray-600">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
