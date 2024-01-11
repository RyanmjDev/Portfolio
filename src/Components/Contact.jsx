import React from 'react';
import EmailIcon from '../assets/contact/email.png';
import GithubIcon from '../assets/contact/computer.png';
import footer from '../assets/illustration/footerill.png';

 const contacts = [
   { name: 'Ryanmj.dev@gmail.com', icon: EmailIcon, link: 'mailto:Ryanmj.dev@gmail' },
   { name: 'github.com/ryanmjdev', icon: GithubIcon, link: 'https://github.com/ryanmjdev/'  },
 ];

const Contact = () => {
  return (
    <section className=" text-white pt-12 " >
    <div className="container w-2/3 lg:w-1/2 mx-auto px-4 " data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
      <h2 className="text-4xl font-bold mb-10 text-center">
            Let's Connect
        </h2>  


        <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
        {contacts.map((contact, index) => (
          <div className='flex ' key={index}>
             <img src={contact.icon} alt={contact.name} className="h-6 w-6 mr-2" />
             <a href={contact.link}>{contact.name}</a>
              {/* Display a vertical line between each contact except last element */}
             {contacts.length - 1 !== index && <div className="hidden lg:block border-l border-gray-400 h-6 ml-4" />} 
          </div>
          ))}
          </div>               
      </div>
      <img src={footer} alt="footer" className="w-full" />
    
    </section>
  );
};
export default Contact;
