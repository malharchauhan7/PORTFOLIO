import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import { Reorder } from "framer-motion";
const List = [
  {
    link: "mailto:malharchauhan02@gmail.com",
    title: "Email",
  },
  {
    link:
      "https://www.linkedin.com/in/malhar-chauhan-539100238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    title: "LinkedIn",
  },
  {
    link: "https://github.com/malharchauhan7",
    title: "GitHub",
  },
  {
    link: "https://x.com/Malhar_7?t=AOSeo52_MVYwdtSzNqfl2A&s=09",
    title: "Twitter",
  },
  {
    link: "https://mrpurrfect.gumroad.com/",
    title: "GumRoad",
  },
  {
    link: "https://dribbins.etsy.com/",
    title: "Etsy",
  },
  {
    link: "https://www.behance.net/malharchauhan1",
    title: "Behance",
  },
  {
    link: "https://monkeytype.com/profile/Malhar7",
    title: "MonkeyType",
  },
];

const SocialsItems = ({ List }) => {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
    >
      <a href={List.link} target="_blank" className="font-mono text-lg">
        {List.title}
      </a>
    </motion.div>
  );
};

const Connect = () => {
  const [items, setItems] = useState(List);

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center"
      data-theme="light"
    >
      <div className="">
        <Logo />
        <div className=" flex flex-col gap-4 my-8 opacity-95">
          {items.map((item) => (
            <SocialsItems List={item} key={item.title} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
