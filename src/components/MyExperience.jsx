import React from "react";
import experience from "../images/my1.png";
const MyExperience = () => {
  return (
    <section id="experience" className="py-10 px-3">
      <div className="text-center">
        <h3 className="text-5xl font-semibold text-white">
          My <span className="text-black">Experience</span>
        </h3>
      </div>
      <div
        className="bg-slate-200 relative text-black px-8 rounded-2xl md:py-5 py-3 
      lg:max-w-4xl mx-auto min-h-[24rem] md:mt-24 mt-12 flex gap-6 lg:flex-row flex-col-reverse items-center"
      >
        <div>
          <h2 className="md:text-2xl text-xl font-semibold">
            How much Experience I have?
          </h2>
          <p className="lg:text-left text-justify max-w-lg md:text-xl text-md mt-4 text-gray-700 leading-6">
            <ul>
              <li>
                <h4 className="text-2xl"> 
                  <span className="text-black"> Medical Office Assistant  </span> 
                </h4>
                <small> January 2020-September 2021 </small> <br/>
                <small> Med Express | Calgary, AB </small>
              </li>
              <br/>
              <li>
                <h4 className="text-2xl"> 
                  <span className="text-black"> Receptionist   </span> 
                </h4>
                <small> March 2013-January2019  </small> <br/>
                <small> Sareya Beauty Supply | Calgary, AB  </small>
              </li>
              <br/>
              <li>
                <h4 className="text-2xl"> 
                  <span className="text-black"> Marv’s No frill | | Calgary, AB  </span> 
                </h4>
                <small> February 2018-Dcember2019 </small> <br/>
                <small> Med Express | Calgary, AB </small>
              </li>
              <br/>
              <li>
                <h4 className="text-2xl"> 
                  <span className="text-black"> McDonald's Restaurant | Calgary, AB   </span> 
                </h4>
                <small> January 2020-September 2021 </small> <br/>
                <small> Marv’s No frill | | Calgary, AB </small>
              </li>
            </ul>
          </p>
          <a href="#contact">
            <button className="btn-primary md:mt-10 mt-5">Ask more?</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
