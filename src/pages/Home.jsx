import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../data";

import Resume from "./Resume";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <motion.div>
      <Resume />
    </motion.div>
  );
};

export default Home;
