import React from "react";
const About = () => {
  return (
    <section id="about" className="py-5 text-white bg-purple-600">
      <div className="text-center md:mt-8 mt-5">
        <h3 className="text-5xl font-semibold">
          About <span className="text-black">Me</span>
        </h3>
       
        <div className="flex items-center justify-center max-w-5xl md:mt-4 mx-auto">
          <div className="p-2">
            <div className="text-white my-2">
              <p className="text-justify md:leading-10 leading-7 md:text-lg text-md w-11/12 mx-auto">
               
              </p>
              <p className="text-justify leading-10 text-lg w-11/12 mx-auto">
                Dependable employee seeking opportunity to expand skills and contribute to company success. 
                My ex-coworkers consider me as hardworking, ethical, and detail oriented.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
