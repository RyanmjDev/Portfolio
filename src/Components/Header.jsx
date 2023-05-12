import React from 'react';
import profilePic from '../assets/profile.jpg';

const Header = () => {
  return (
    <section id="about" className="py-24 bg-gray-100 bg-fixed bg-center bg-cover h-screen flex justify-center items-center" >
    <div className="container mx-auto px-4" data-aos="fade-up"  data-aos-duration="1000">

      <div className="flex flex-wrap items-center justify-center">
        <div className="w-64 h-64 mb-8 sm:mb-0 sm:mr-12 rounded-full overflow-hidden about-image transform transition-transform duration-500 hover:scale-110">
          <img
            src={profilePic}
            alt="Ryan Johnson"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start">
          <span className="text-2xl sm:text-center">Hi! My name is </span>
          <p className="font-bold text-blue-600 text-4xl mb-4 ">Ryan Johnson</p>
          <p className="text-lg leading-relaxed text-gray-600 font-semibold">
            A <span className="text-blue-600">Front-End Web Developer</span> with a passion for crafting engaging applications and immersive experiences on the web.
          </p>
          <button className="bg-blue-600 py-2 px-8 rounded-full text-white font-bold hover:shadow-lg mt-4">
            Resumé
          </button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Header;
