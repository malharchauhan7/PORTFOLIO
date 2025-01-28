import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import data from "../data";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
      <div className=" flex pt-20 flex-col items-center justify-start h-100vw md:h-screen ">
        <main className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%]">
          <div>
            <Header />
          </div>
          <div>
            <h1 className="font-mono font-bold md:font-bold sm:text-semibold md:text-sm text-lg text-gray-400 opacity-70">
              RECENT WORK
            </h1>
          </div>
          <div className="w-full ">
            {/* {data.map((item, index) => (
              <Accordination data={item} key={index} />
            ))} */}
            {data.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </div>
        </main>
        <div className="w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] my-2 ">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
