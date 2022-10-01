import React from "react";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
const Skills = () => {
  const skills = [
    {
      level: "Intermediate",
      title: "CSS3",

      count: 65,
      Component: IoLogoCss3,
    },
    {
      level: "Intermediate",
      title: "JavaScript",
      count: 70,
      Component: IoLogoJavascript,
    },
    {
      level: "Pro",
      count: 90,
      title: "HTML",

      Component: IoLogoHtml5,
    },
    {
      level: "Pro",
      count: 80,
      title: "ReactJs",

      Component: IoLogoReact,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-purple-600 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-5xl font-semibold">
          My <span className="text-black">Skills</span>
        </h3>
        <br/>
        <div className="flex items-center justify-center mt-12 md:gap-10 gap-5 flex-wrap">
          {skills?.map(({ level, count, Component, title }, i) => (
            <div
              key={i}
              className="border-2  flex flex-col justify-center items-center cursor-pointer group
               border-black hover:border-white relative
              w-[9rem]  bg-gray-100 hover:bg-purple-700 transition 
               duration-100  md:p-10 p-3 rounded-xl text-black hover:text-white"
            >
              <div
                className="text-4xl w-16 h-16 text-white bg-gray-900 rounded-full flex items-center
               justify-center"
              >
                <Component />
              </div>

              <p className="text-xl mt-3 ">
                {title}
                <br />
                <span className="text-xs ">{level}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
