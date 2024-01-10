import React from 'react';
import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';

// const contacts = [
//   { name: 'Email', link: 'mailto:Ryanmj.dev@gmail', icon: EmailIcon },
//   { name: 'Github', link: 'https://github.com/ryanmjdev/', icon: GithubIcon },
// ];

const Contact = () => {
  return (
    <section className=" text-white py-12 " >
    <div className="container w-2/3 lg:w-1/2 mx-auto px-4 " data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
      <h2 className="text-4xl font-bold mb-10 text-center">
            Let's Connect
        </h2>
        <div className='flex items-center justify-center'>
          ryanmjdev
          
          <div className="border-l border-gray-400 h-6 mx-6" />
          github 
          </div>

        
      </div>
    </section>
  );
};
export default Contact;
