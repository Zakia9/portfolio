import React from "react";
import { Swiper as SwiperJs, SwiperSlide as SwiperJsSlide } from "swiper/react";
import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.jpg";
import project3 from "../images/project-3.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Currency Converter",
      status : false,

      github_link: "https://github.com/",
      live_link: "https://google.com",
    },
    {
      img: project2,
      name: "React Counter App",
      status : true,

       github_link: "https://github.com/",
       live_link: "https://google.com",

    },  {
      img: project3,
      name: "Portfolio",
      status : false,
      github_link: "https://github.com/",
      live_link: "https://google.com",
    },
  ];
  return (
    <section id="projects" className="py-10 bg-purple-600 text-white">
      <div className="text-center">
        <h3 className="text-5xl font-semibold">
          My <span className="text-black">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="w-full">
          {/* Using Swipper Js */}
          <SwiperJs
            slidesPerview={1.5}
            spaceBetween={60}
            cardsEffect="true"
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1160:{
                slidesPerView: 2,

              }
            }}
            loop={false}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperJsSlide key={i}>
                <div className="h-fit w-full p-5 my-10 bg-slate-200 rounded-xl text-black">
                  <img src={project_info.img} alt="" className="rounded-lg w-full md:h-52 h-44" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                  {project_info.status &&  <a
                      href={project_info.github_link}
                    
                      className="text-white bg-purple-800 px-2 p-3 inline-block rounded-md"
                    >
                      Github
                    </a>}
                    <a
                      href={project_info.live_link}
                    
                      className="text-white bg-purple-800 px-2 p-3 inline-block rounded-md"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperJsSlide>
            ))}
          </SwiperJs>
        </div>
       
      </div>
    </section>
  );
};

export default Project;
