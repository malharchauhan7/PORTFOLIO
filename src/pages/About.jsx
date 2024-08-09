import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigation = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center"
      data-theme="light"
    >
      <main className="p-10  text-lg font-mono w-[80%] md:w-[50%]">
        <Logo />
        <div className="flex flex-col gap-5 text-slate-700 text-xs md:text-lg">
          {" "}
          <h1 className="font-bold">About me</h1>
          <p>
            Hello, I'm Malhar Chauhan, a final-year BE Computer Engineering
            student with a passion for technology and design.
          </p>
          <p>
            I specialize in web development and have strong skills in Java ☕,
            Figma 🎨, UI design 🖥️, and graphic design ✏️. My goal is to create
            intuitive and visually appealing digital experiences that combine
            functionality with aesthetics.
          </p>
          <p>Welcome to my portfolio!🚀</p>
        </div>
        <div className="mt-4 ">
          <h1 className="font-thin" onClick={() => navigation("/connect")}>
            <button className="btn btn-sm btn-primary">Connect</button>
          </h1>
        </div>
      </main>
    </motion.div>
  );
};

export default About;
