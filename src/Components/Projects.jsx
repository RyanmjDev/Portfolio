import React from 'react';
import tasklister from '../assets/Projects/tasklister.png';
import barker from '../assets/Projects/barker.png';
import kaiwakun from '../assets/Projects/kaiwakun.png';
import Divider from './Divider';


const projects = [
  {
    title: 'Barker',
    image: barker,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut quam repudiandae dolorum dolorem harum provident qui fuga porro atque tempore incidunt accusamus earum culpa maxime? Sunt veniam accusantium dignissimos!',
    demo: 'https://google.com/',
    repo: 'https://github.com/',
  },
  {
    title: 'Kaiwakun',
    image: kaiwakun,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut quam repudiandae dolorum dolorem harum provident qui fuga porro atque tempore incidunt accusamus earum culpa maxime? Sunt veniam accusantium dignissimos!',
    demo: 'https://google.com/',
    repo: 'https://github.com/',
  },
  {
    title: 'Tasklister',
    image: tasklister,
    demo: 'https://google.com/',
    repo: 'https://github.com/RyanmjDev/tasklister', 
    description: 'This application is a task management system built using the MERN stack. The app utilizes Tailwind CSS for styling and Axios for making HTTP requests to the RESTful API built with Node.js and Express.js on the server side.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 text-center">
      <div className="container w-full md:w-1/2 mx-auto px-4" data-aos="fade-up"  data-aos-once="false" data-aos-duration="1000">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 place-items-center">
  {projects.map((project, index) => (
    <div
      key={index}
      className=" border-2 border-accent border-card-blue gradient-blue  p-4 rounded-lg shadow-lg
        max-w-sm  glow transform transition-transform duration-500 "
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-2 text-left">{project.description}</p>
      <Divider />

      <div className="flex flex-wrap justify-between gap-2">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-accent border border-steel-blue border-accent rounded-full w-36  py-2 "
              >
                Demo
              </a>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-accent border border-steel-blue border-accent rounded-full  w-36  py-2  "
              >
                Repository
              </a>

            </div>
    </div>
  ))}
</div>
</div>
</section>
);
};

export default Projects;

