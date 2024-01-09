import React from 'react';
import tasklister from '../assets/Projects/Tasklister.png';
import barker from '../assets/Projects/Barker.png';
import kaiwakun from '../assets/Projects/Kaiwakun.png';


const projects = [
  {
    title: 'Barker',
    image: barker,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut quam repudiandae dolorum dolorem harum provident qui fuga porro atque tempore incidunt accusamus earum culpa maxime? Sunt veniam accusantium dignissimos!',
    repo: 'https://github.com/',
  },
  {
    title: 'Kaiwakun',
    image: kaiwakun,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut quam repudiandae dolorum dolorem harum provident qui fuga porro atque tempore incidunt accusamus earum culpa maxime? Sunt veniam accusantium dignissimos!',
    repo: 'https://github.com/',
  },
  {
    title: 'Tasklister',
    image: tasklister,
    repo: 'https://github.com/RyanmjDev/tasklister', 
    description: 'This application is a task management system built using the MERN stack. The app utilizes Tailwind CSS for styling and Axios for making HTTP requests to the RESTful API built with Node.js and Express.js on the server side. State management in the app is handled using React hooks, and it also includes features for user authentication using JSON Web Tokens stored in browser cookies',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto px-4" data-aos="fade-up"  data-aos-once="false" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
  {projects.map((project, index) => (
    <div
      key={index}
      className=" border-2 border-accent border-card-blue p-4 rounded-lg shadow-lg  bg-accent-blue "
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full  mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="text-accent border-2 p-2 border-accent rounded-full "
      >
        View Repository
      </a>
    </div>
  ))}
</div>
</div>
</section>
);
};

export default Projects;

