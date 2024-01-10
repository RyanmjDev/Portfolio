import React from 'react';
import EmailIcon from '../assets/email.svg';
import GithubIcon from '../assets/github.svg';

 const contacts = [
   { name: 'Ryanmj.dev@gmail.com', icon: EmailIcon, link: 'mailto:Ryanmj.dev@gmail' },
   { name: 'github.com/ryanmjdev', icon: GithubIcon, link: 'https://github.com/ryanmjdev/'  },
 ];

const Contact = () => {
  return (
    <section className=" text-white py-12 " >
    <div className="container w-2/3 lg:w-1/2 mx-auto px-4 " data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
      <h2 className="text-4xl font-bold mb-10 text-center">
            Let's Connect
        </h2>

        <div className='flex items-center justify-center gap-4'>
        {contacts.map((contact, index) => (
          <div className='flex ' key={index}>
             <img src={contact.icon} alt={contact.name} className="h-6 w-6 mr-2" />
             <a href={contact.link}>{contact.name}</a>
              {/* Display a vertical line between each contact except last element */}
             {contacts.length - 1 !== index && <div className="border-l border-gray-400 h-6 mx-6" />} 
          </div>
          ))}
          </div>  
        
             
      </div>
    </section>
  );
};
export default Contact;
