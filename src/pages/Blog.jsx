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
      <div className="font-bold text-2xl my-4 flex gap-2 items-center">
        <h1>Blogs</h1>
        <ThemeController />
      </div>

      <div className="space-y-6 w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{
              transition: {
                duration: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
            className="rounded-lg transition-all duration-200 group relative"
          >
            <div className="rounded-lg p-4 relative transition-all duration-200 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <Link
                to={`/blog/${post.slug}`}
                className="block relative z-10"
                aria-label={`Read blog post: ${post.title}`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-medium">{post.date}</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-medium transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 group/link">
                    <span className="group-hover/link:text-gray-700 transition-colors">
                      Read more
                    </span>
                    <motion.svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      animate={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
