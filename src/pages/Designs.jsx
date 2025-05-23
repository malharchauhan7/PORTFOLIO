/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import ThemeController from "../components/ThemeController";
const Designs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <motion.div>
      {/* Overlay Loading Screen */}
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
        {/* Logo and Header */}
        <Logo />
        <div className="font-bold text-2xl  my-4 flex gap-2">
          <h1>DesignFolio</h1>
          <ThemeController />
        </div>

        {/* Content Section */}
        <div className="space-y-10 w-[88%] lg:w-[25%] md:w-[50%] sm:w-[50%] mx-auto">
          {/* Block 1: Google Drive Redesign */}
          <div>
            <h2 className="text-lg font-medium  mb-3 text-center">
              Google Drive UI Redesign with Neumorphism
            </h2>

            <motion.img
              src="https://i.ibb.co/yBbDNRr/driveredesign.png"
              alt="Google Drive UI Redesign"
              className="w-full rounded-lg shadow-lg "
            />
          </div>

          {/* Block 2: Instagram Carousel Designs */}
          <div>
            <h2 className="text-lg font-medium  mb-3 text-center">
              Instagram Carousel Designs
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <motion.img
                src="https://i.ibb.co/hFcjq64/Frame-1.png"
                alt="Instagram Carousel 1"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
              <motion.img
                src="https://i.ibb.co/H4wyGyd/3.png"
                alt="Instagram Carousel 2"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
              <motion.img
                src="https://i.ibb.co/6sQpYFZ/2.png"
                alt="Instagram Carousel 3"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
              <motion.img
                src="https://i.ibb.co/NmnvnYP/1.png"
                alt="Instagram Carousel 4"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
            </div>
          </div>

          {/* Block 3: Logo & Product Designs */}
          <div>
            <h2 className="text-lg font-medium mb-3 text-center">
              Logo & Product Designs
            </h2>
            <div className="space-y-4">
              <motion.img
                src="https://i.ibb.co/dQKZkX8/anveshan-logo-design.png"
                alt="Logo Design"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
              <motion.img
                src="https://i.ibb.co/KKB0rn7/PRODUCT-3-VIDEO.png"
                alt="Product Design"
                className="w-full rounded-lg transition-transform duration-200 shadow-lg"
              />
            </div>
            <div className="mt-3 text-sm text-center ">
              Explore more designs on{" "}
              <motion.a
                href="https://www.etsy.com/shop/dribbins/?etsrc=sdt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-bold hover:text-blue-700 transition-transform duration-200"
              >
                ETSY <FaExternalLinkAlt className="inline-block ml-1 mb-1" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Designs;
