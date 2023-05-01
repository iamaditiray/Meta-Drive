import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
 <div className="flex justify-start items-start flex-col mt-5">
  <p className="text-white text-m text-left">THIS PROJECT IS CREATED BY</p>
</div>


    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Mursalin Sheikh</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Shagun Singh</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Aditi Ray</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Ansuk Sinha Roy</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Himanshu Shaw</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Chandradeep Mondal</p>
      </div>
    </div>

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@metadrive2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;