import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Card from "../components/Card";
import data from "../data";
import Accordination from "../components/Accordination";
//<a class="btn line-btn-dark btn-icon btn-radius" href="1.pdf" title="" download>
const Home = () => {
  const text = "Malhar Chauhan";
  const navigation = useNavigate();
  //onClick={() => navigation("/")}
  return (
    <motion.div
      layout
      // initial={{ scale: 1.01 }}
      // animate={{
      //   scale: 1,
      // }}
      // transition={{ duration: 1 }}
    >
      <div
        className=" flex p-12 pt-20 flex-col items-center justify-center h-100vw md:h-screen"
        data-theme="light"
      >
        <main className=" w-[80%] md:w-[30%]">
          <div className="">
            <div className="flex flex-col items-center">
              <Logo />
              {/* <motion.h1
                className="font-mono font-semibold text-lg"
                animate={{
                  color: ["#000", "#ff2323", "#000"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Malhar Chauhan
              </motion.h1> */}
              <motion.div className="text font-mono font-semibold">
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
              <h3 className="font-mono text-base ">
                Developer & <motion.span>Designer</motion.span>
              </h3>
              <a href="https://drive.google.com/file/d/1sp9jT6OxPN1Cs6mMbp44Z2QwHB9nTTVx/view?usp=sharing">
                <motion.button
                  className="btn btn-xs btn-primary btn-outline mt-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  whileInView={{}}
                >
                  Resume
                </motion.button>
              </a>
            </div>
            <div className="w-auto h-10  mt-3 mb-5 flex items-center justify-center gap-5  font-semibold ">
              <motion.h1
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.03, opacity: 1 }}
                onClick={() => navigation("/about")}
                className="hover:underline hover:cursor-pointer  decoration-indigo-500"
              >
                About
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.03, opacity: 1 }}
                onClick={() => navigation("/connect")}
                className="hover:underline hover:cursor-pointer decoration-amber-400"
              >
                Connect
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.03, opacity: 1 }}
                onClick={() => navigation("/articles")}
                className="hover:underline hover:cursor-pointer decoration-lime-600"
              >
                Articles
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.03, opacity: 1 }}
                onClick={() => navigation("/games")}
                className="hover:underline hover:cursor-pointer decoration-red-400"
              >
                Games
              </motion.h1>
            </div>
          </div>
          <div>
            {data.map((item, index) => (
              // <Card data={item} key={index} />
              <Accordination data={item} key={index} />
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default Home;
