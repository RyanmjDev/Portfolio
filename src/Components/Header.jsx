import React from 'react';
import MainIllustration from '../assets/illustration/mainill.png';
const Header = () => {
  return (

    <section id="header" className="py-12 bg-fixed bg-center bg-cover h-screen flex justify-center items-center" >
    <div className="container mx-auto px-4" data-aos="fade-up"  data-aos-duration="1000">

      <div className="flex flex-wrap items-center justify-center">
        <div className="flex justify-center mb-0 md:mb-8 overflow-hidden ">
          <img
            src={MainIllustration}
            alt="Ryan Johnson"
            className=" w-3/5 h-3/5 mb-2 lg:mb-0 lg:w-full lg:h-full md:mr-16 object-cover"
          />
        </div>

        <div className=" max-w-md flex flex-col items-center sm:items-start">
          <span className="text-xl sm:text-center mb-2">Hello there, I'm </span>
          <p className="font-bold text-4xl mb-4 ">Ryan Johnson</p>
          <p className="text-lg leading-relaxedfont-semibold">
            A <span className=" font-bold"> Front-End Web Developer</span> with a passion for crafting engaging applications and immersive experiences on the web.
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 py-2 px-8  text-white font-bold hover:shadow-lg mt-4 ">
            Resumé
          </button>
          
        </div>
      </div>
    </div>


  </section>

  );
};

export default Header;
