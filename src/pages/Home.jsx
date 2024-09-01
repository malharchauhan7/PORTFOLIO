import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Card from "../components/Card";
import data from "../data";
import Accordination from "../components/Accordination";
import Header from "../components/Header";
//<a class="btn line-btn-dark btn-icon btn-radius" href="1.pdf" title="" download>
const Home = () => {
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
        className=" flex  pt-20 flex-col items-center justify-center h-100vw md:h-screen"
        data-theme="light"
      >
        <main className=" w-[80%] md:w-[30%]">
          <div>
            {" "}
            <Header />
          </div>
          <div className="w-full ">
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
