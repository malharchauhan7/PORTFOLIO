import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../images/logo.png";

const Logo = () => {
  const navigation = useNavigate();

  return (
    <div>
      <div className=" hover:cursor-pointer" onClick={() => navigation("/")}>
        <img src={Image} alt="" className="w-11 my-4" />
      </div>
    </div>
  );
};

export default Logo;
