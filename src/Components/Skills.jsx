import React from 'react';

import htmlIcon from '../assets/html5.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/js.svg';
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwind.svg';
import nodeJSIcon from '../assets/node-js.svg';
import mongoIcon from '../assets/mongodb-icon.svg';
import expressIcon from '../assets/expressjs-icon.svg';
import bootstrapIcon from '../assets/bootstrap.svg';
import responsiveIcon from '../assets/responsive.svg';
import githubIcon from '../assets/github.svg';
import typescriptIcon from '../assets/typescript.svg';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon},
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'React', icon: reactIcon},
  { name: 'Node.js', icon: nodeJSIcon},
  { name: 'MongoDB', icon: mongoIcon},
  { name: 'Express', icon: expressIcon},
  { name: 'Tailwind', icon: tailwindIcon},
  { name: 'Bootstrap', icon: bootstrapIcon},
  { name: 'Responsive', icon: responsiveIcon },
  { name: 'Github', icon: githubIcon },
];
const Skills = () => {
  return (
    <section id="projects" className="py-24">
    <div className="container w-2/3 lg:w-1/2 mx-auto px-4" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
      <h2 className="text-4xl font-bold mb-10 text-center">
            Skills
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20 lg:gap-6  place-items-center">
          {skills.map((skill, index) => (

            <li
              key={index}
              className="border-card-blue gradient-blue  border-2 border-solid w-32 h-32
               p-6 text-center  rounded-lg  transition-all duration-300 relative overflow-hidden hover:scale-105 ">

              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4 mx-auto" />
              <h3 className=" font-semibold text-center">{skill.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;