import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../Blogs/BlogPostContent";
import Logo from "./Logo";
import ThemeController from "./ThemeController";

const ContentBlock = ({ block, index }) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-xl font-medium  mt-8 mb-4">{block.content}</h2>
      );
    case "paragraph":
      return <p className=" leading-relaxed mb-4">{block.content}</p>;
    case "list":
      return (
        <ul className="list-disc pl-6 space-y-2 mb-4">
          {block.items?.map((item, i) => (
            <li key={i} className="">
              {item}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm font-mono text-gray-800">
            {block.content}
          </code>
        </pre>
      );
    case "quote":
      return (
        <blockquote className="border-l-4 border-gray-200 pl-4 italic  mb-4">
          {block.content}
        </blockquote>
      );
    default:
      return null;
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen px-4 py-10"
    >
      <div className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto flex justify-between items-center">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <motion.span
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            ← Back to Blog
          </motion.span>
        </Link>
        <ThemeController />
      </div>

      <div className="my-6">
        <Logo />
      </div>

      <article className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto">
        {post.image && (
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />
        )}

        <header className="space-y-4 mb-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-2xl font-medium ">{post.title}</h1>
        </header>

        <div className="space-y-6">
          {post.content.map((block, index) => (
            <ContentBlock key={index} block={block} index={index} />
          ))}
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
