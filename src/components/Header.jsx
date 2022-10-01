import React, { useState } from "react";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "EDUCATION", link: "#education" },
    { name: "SKILLS", link: "#skills" },
    { name: "EXPERIENCE", link: "#experience" },

    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <nav className="bg-back shadow-lg ">
      <div className="max-w-full py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="flex mx-5 ">
            <h4 className="text-4xl text-white cursor-pointer uppercase font-bold">
              Z.S.A <span className="text-black"> Portfolio  </span>
            </h4>
          </div>

          <div className="flex md:mx-10">
            {/* <!-- Actual Header --> */}
            <div className="hidden md:flex text-black">
              {menuLinks?.map((menu, i) => (
                <a
                  href={menu?.link}
                  key={menu?.link + i}
                  className="py-4 mx-3 text-lg hover:text-white font-medium  "
                >
                  {menu?.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => settoggle((e) => !e)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className=" w-6 h-6 text-white hover:text-black "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          toggle ? "mobile-menu h-screen bg-purple-600 text-black" : "hidden   mobile-menu"
        }
      >
        <ul className="">
          {menuLinks?.map((menu, i) => (
            <li key={menu?.link + i} 
            onClick={()=>settoggle(e=>!e)}
            >
              <a
                href={menu?.link}
                
                className="block text-md px-3 py-8 hover:bg-purple-800 hover:text-gray-200 transition duration-300"
              >
                {menu?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
