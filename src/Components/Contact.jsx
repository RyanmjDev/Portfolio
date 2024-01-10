import React from 'react';
import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';

// const contacts = [
//   { name: 'Email', link: 'mailto:Ryanmj.dev@gmail', icon: EmailIcon },
//   { name: 'Github', link: 'https://github.com/ryanmjdev/', icon: GithubIcon },
// ];

const Contact = () => {
  return (
    <section className=" text-white py-12" >
      <div className="container mx-auto px-6 py-10 flex justify-between items-center">
      <h2 className="text-4xl font-bold text-center">Let's Connect</h2>

        <div className="flex items-center">
    
          <span className="ml-3"> ryanmj.dev@gmail.com</span>
          <div className="border-l border-gray-400 h-6 mx-6" />
        
          <span className="ml-3">github.com/ryanmjdev</span>
        </div>
        <div className="hidden sm:flex items-center">
  
        </div>

        <div className="flex items-center">
          <div className="border-l border-gray-400 h-6 mx-6 sm:hidden" />

        </div>
      </div>
    </section>
  );
};
export default Contact;
