import React from "react";
import { FaGraduationCap } from "react-icons/fa";
const Education = () => {
  return (
    <section id="education" className="md:p-6 p-4 text-white">
      <div className="text-center mt-8">
        <h3 className="text-5xl font-semibold">
          My <span className="text-black">Education</span>
        </h3>
      </div>

      <div className=" text-center mt-8 flex flex-wrap items-center md:gap-10 gap-5 justify-around py-[1rem]">
        <div className="relative border-l-4 border-black md:w-[30%] w-[90%]  p-5">
          <p className="text-4xl text-black text-left md:mb-5 mb-2 flex items-center justify-start">
           <FaGraduationCap className="mr-2 text-5xl text-white"/> <strong>2010</strong>
          </p>

          <h3 className="text-3xl italic text-white mt-5 text-left">
            High School Certificate{" "}
          </h3>
        </div>

        <div className="relative border-l-4 border-black md:w-[30%] w-[90%]  p-5">
          <p className="text-4xl text-black text-left md:mb-5 mb-2 flex items-center justify-start">
           <FaGraduationCap className="mr-2 text-5xl text-white"/> <strong>2012</strong>
          </p>

          <h3 className="text-3xl italic text-white mt-5 text-left">
            Medical Assistant{" "}
          </h3>
        </div>

        <div className="relative border-l-4 border-black md:w-[30%] w-[90%] p-5">
          <p className="text-4xl text-black text-left md:mb-5 mb-2 flex items-center justify-start">
            <FaGraduationCap className="mr-2 text-5xl text-white"/><strong>2022</strong>
          </p>

          <h3 className="text-3xl italic text-white mt-5 text-left">
            Full Stack Web Development{" "}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Education;
