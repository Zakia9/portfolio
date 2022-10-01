import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const social_media = [
      { Component: FiInstagram, name: "Insta",link:"https://www.google.com" },
      { Component: FiFacebook, name: "FB",link:"https://www.google.com" },
      { Component: FiLinkedin, name: "LinkedIn" ,link:"https://www.google.com"},
    ];
 
  const contact_info = [
    {  text: "info@zsa.com" ,Component:BiMailSend},
    { 
      text: "Canada",
      Component:MdOutlineAddLocationAlt
    },
  ];
  const handleSubmit  = ()=>{
    if(!name||!email||!message){
      toast.error("Please provide all details", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }else{

    toast.success("Message sent successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
    });
    }
     
  }
 
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-5xl font-semibold">
          Contact <span className="text-black">Me</span>
        </h3>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-slate-200 md:p-6 p-2 rounded-lg mx-auto"
        >
          <div className="flex flex-col flex-1 gap-5">
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" />
            <input type="Email" value={email}  onChange={e=>setEmail(e.target.value)}placeholder="Your Email Address" />
            <textarea placeholder="Your Message" value={message}  onChange={e=>setMessage(e.target.value)} rows={10}></textarea>
            <button className="btn-primary w-fit" onClick={handleSubmit}>Send Message</button>
          </div>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map(({text,Component},i) => (
              <div
                key={i+text}
                className="flex flex-row  text-black  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3rem]  md:text-3xl text-2xl min-h-[3rem] flex items-center 
                justify-center text-white bg-purple-700 hover:bg-black rounded-full">
                <Component/>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {text}
                </p>
              </div>
            ))}
             <div className="my-4 text-3xl flex items-center justify-center gap-5">
            {social_media?.map(({ Component,name,link }) => (
              <div
                key={name}
                className="text-purple-700  hover:text-black cursor-pointer "
              >
                <a href={link}>

                <Component />
                </a>
              </div>
            ))}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
