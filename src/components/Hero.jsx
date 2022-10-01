import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import hero from "../images/my1.png";
const Hero = () => {
  const social_media = [
    { Component: FiInstagram, title: "Insta",link:"#"},
    { Component: FiFacebook, title: "FB",link:"#"},
    { Component: FiLinkedin, title: "LinkedIn" ,link:"#"},
  ];
 
  return (
    <section
      id="home"
      className="min-h-screen flex py-5 md:flex-row flex-col-reverse items-center"
    >
     
      <div className="flex-1">
        <div className="md:text-right text-center">
          <h1 className="md:text-6xl text-2xl md:leading-normal leading-8 text-white font-bold">
            My Name is <span> Z.S.A </span>
          </h1>
          <h4 className="md:text-3xl text-lg md:leading-normal leading-5 mt-4 font-bold text-black">
            Web Developer
          </h4>

          <div className="mt-8 text-4xl flex items-center md:justify-end justify-center gap-5">
            {social_media?.map(({ Component,title,link }) => (
              <div
                key={title}
                className="text-black hover:text-white cursor-pointer "
              >
                <a href={link}>

                <Component />
                </a>
              </div> 
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center  md:mx-0 mx-4">
        <img
          src={hero}
          alt=""
          className="w-72 h-72 border-white border-[5px]  md:w-[27rem] md:h-[27rem] object-cover rounded-[50%]"
        />
      </div>
    </section>
  );
};

export default Hero;
