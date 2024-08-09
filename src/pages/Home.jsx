import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Card from "../components/Card";
import data from "../data";

import Accordination from "../components/Accordination";
//<a class="btn line-btn-dark btn-icon btn-radius" href="1.pdf" title="" download>
const Home = () => {
  const navigation = useNavigate();
  //onClick={() => navigation("/")}
  return (
    <motion.div>
      <div
        className=" flex p-12 pt-20 flex-col items-center justify-center h-100vw md:h-screen"
        data-theme="light"
      >
        <main className=" w-[80%] md:w-[30%]">
          <div className="">
            <div className="flex flex-col items-center">
              <Logo />
              <h1 className="font-mono font-semibold text-lg">
                Malhar Chauhan
              </h1>
              <h3 className="font-mono text-base ">Developer & Designer</h3>
              <a href="https://drive.google.com/file/d/1sp9jT6OxPN1Cs6mMbp44Z2QwHB9nTTVx/view?usp=sharing">
                <button className="btn btn-xs btn-primary btn-outline mt-2">
                  Resume
                </button>
              </a>
            </div>
            <div className="w-auto h-10  mt-3 mb-5 flex items-center justify-center gap-5 opacity-65 font-semibold ">
              <h1
                onClick={() => navigation("/about")}
                className="hover:underline hover:cursor-pointer  decoration-indigo-500"
              >
                About
              </h1>
              <h1
                onClick={() => navigation("/connect")}
                className="hover:underline hover:cursor-pointer decoration-amber-400"
              >
                Connect
              </h1>
              <h1
                onClick={() => navigation("/blogs")}
                className="hover:underline hover:cursor-pointer decoration-lime-600"
              >
                Blogs
              </h1>
              <h1
                onClick={() => navigation("/games")}
                className="hover:underline hover:cursor-pointer decoration-red-400"
              >
                Fun
              </h1>
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
