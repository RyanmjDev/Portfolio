import React from 'react';
import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github.svg';

const contacts = [
  { name: 'Email', link: 'mailto:Ryanmj.dev@gmail', icon: emailIcon },
  { name: 'Github', link: 'https://github.com/ryanmjdev/', icon: githubIcon },
];

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4" >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-6 text-lg text-gray-800 leading-relaxed">
          I'm currently open to new opportunities and would love to hear from
          you. Feel free to reach out through any of the platforms below.
        </p>
        <div className="flex space-x-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline flex items-center"
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-8 h-8 mr-2"
              />
             {contact.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
