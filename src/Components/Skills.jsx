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
import vscodeIcon from '../assets/vscode.svg';

const skills = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon},
  { name: 'React', icon: reactIcon},
  { name: 'Node.js', icon: nodeJSIcon},
  { name: 'MongoDB', icon: mongoIcon},
  { name: 'Express', icon: expressIcon},
  { name: 'Tailwind CSS', icon: tailwindIcon},
  { name: 'Bootstrap', icon: bootstrapIcon},
  { name: 'Responsive Design', icon: responsiveIcon },
  { name: 'Github', icon: githubIcon },
  { name: 'Visual Studio Code', icon: vscodeIcon },
];
const Skills = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
    <div className="container mx-auto px-4" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
      <h2 className="text-3xl font-bold mb-6">
            Skills
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="p-6 text-center border-2 border-transparent rounded-lg  transition-all duration-300 relative overflow-hidden hover:scale-110"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;