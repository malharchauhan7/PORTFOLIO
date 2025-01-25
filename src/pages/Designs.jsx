/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Designs = () => {
  const navigation = useNavigate();

  return (
    <motion.div>
      <div
        className="flex pt-20 flex-col items-center justify-center h-100vw md:h-auto "
        data-theme="light"
      >
        <Logo />
        <div className="font-semibold text-2xl ">
          <h1>DesignFolio</h1>
        </div>
        {/* Contents */}
        <div>
          {/* main div */}
          <div>
            {/* content blocks */}

            {/* block-1 */}
            <div className="rounded-xl overflow-hidden my-4 w-full max-w-[600px] flex flex-col gap-2 mx-auto p-4 sm:p-6">
              <h1 className="md:text-2xl sm:text-xl font-semibold text-center mb-2">
                Google Drive UI Redesign with Neumorphism
              </h1>
              <a
                href="https://googledrive-neumorphism.vercel.app/"
                target="_blank"
              >
                <img
                  src="https://i.ibb.co/yBbDNRr/driveredesign.png"
                  className="w-full object-cover rounded-lg hover:cursor-pointer"
                />
              </a>
              {/* <p className="font-sans text-sm sm:text-base text-justify ">
                <span
                  className="m-2 font-bold text-slate-600 hover:text-slate-500 hover:cursor-pointer"
                  onClick={() => navigation("/articles")}
                >
                  Click here
                </span>
              </p> */}
            </div>
            {/* block-2 */}
            <div className="rounded-xl overflow-hidden my-4 w-full max-w-[600px] flex flex-col gap-3 mx-auto p-4 sm:p-6">
              <h1 className="md:text-2xl sm:text-xl font-semibold text-center mb-2">
                Instagram Carousel Designs
              </h1>
              <img
                src="https://i.ibb.co/hFcjq64/Frame-1.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co/H4wyGyd/3.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />

              <img
                src="https://i.ibb.co/6sQpYFZ/2.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co/NmnvnYP/1.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />
            </div>
            {/* block-3  */}
            <div className="rounded-xl overflow-hidden my-4 w-full max-w-[600px] flex flex-col gap-3 mx-auto p-4 sm:p-6">
              <h1 className="md:text-2xl sm:text-xl font-semibold text-center mb-2">
                Logo & Product Designs
              </h1>
              <img
                src="https://i.ibb.co/dQKZkX8/anveshan-logo-design.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />
              <img
                src="https://i.ibb.co/KKB0rn7/PRODUCT-3-VIDEO.png"
                alt=""
                className="w-full object-cover rounded-lg"
              />
              <div className="md:text-lg sm:text-lg font-semibold text-left mb-2 flex">
                More Product designs on
                <a
                  href="https://www.etsy.com/shop/dribbins/?etsrc=sdt"
                  className="text-bold hover:text-slate-600 cursor-pointer mx-2"
                  target="_blank"
                >
                  ETSY{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Designs;
