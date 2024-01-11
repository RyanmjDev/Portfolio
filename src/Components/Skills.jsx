import React from 'react';

import htmlIcon from '../assets/skills/html.png';
import cssIcon from '../assets/skills/css.png';
import jsIcon from '../assets/skills/javascript.png';
import reactIcon from '../assets/skills/react.png'
import tailwindIcon from '../assets/skills/tailwind.png';
import nodeJSIcon from '../assets/skills/node.png';
import mongoIcon from '../assets/skills/mongo.png';
import expressIcon from '../assets/skills/express.png';
import bootstrapIcon from '../assets/skills/bootstrap.png';
import responsiveIcon from '../assets/skills/responsive.png';
import githubIcon from '../assets/skills/github.png';
import typescriptIcon from '../assets/skills/typescript.png';

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
        <ul className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-6 
         gap-y-2 gap-x-12
         md:gap-2
         2xl:gap-12 
         place-items-center">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="border-card-blue gradient-blue border-2 border-solid w-32 h-32
              p-6 text-center rounded-lg transition-all duration-300 relative overflow-hidden hover:scale-105">

              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="font-semibold text-center">{skill.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;