import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../data";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../Blogs/BlogPostContent";
import { projects } from "../data/projects";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const latestPosts = blogPosts.slice(0, 2);
  const latestProjects = projects.slice(0, 5);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const LinkWithArrow = ({ to, children }) => (
    <Link
      to={to}
      className="group flex items-center text-sm text-gray-400 hover:text-slate-800 transition-colors duration-200"
    >
      <motion.span
        className="inline-block ml-1"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <span>{children}</span> →
      </motion.span>
    </Link>
  );
  return (
    <motion.div layout>
      {/* Overlay Loading Screen */}
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      )}
      <div className="flex pt-20 flex-col items-center justify-start h-100vw md:h-screen">
        <main className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
          <div>
            <Header />
          </div>
          <div className="my-8">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-sm font-sans text-gray-400 tracking-wider select-none">
                BLOGS
              </h1>

              <LinkWithArrow to="/blog">View all</LinkWithArrow>
            </div>
            <div className="space-y-4">
              {latestPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-sm font-sans text-gray-400 tracking-wider select-none">
                PROJECTS
              </h1>
              <LinkWithArrow to="/projects">View all</LinkWithArrow>
            </div>
            <div className="w-full ">
              {latestProjects.map((item, index) => (
                <ProjectCard data={item} key={index} />
              ))}
            </div>
          </div>
        </main>
        <div className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] my-3 ">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
