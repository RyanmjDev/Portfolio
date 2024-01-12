import React from 'react';
import tasklister from '../assets/Projects/tasklister.png';
import barker from '../assets/Projects/barker.png';
import kaiwakun from '../assets/Projects/kaiwakun.png';


const projects = [
  {
    title: 'Barker',
    image: barker,
    description: 'Barker is a social media platform inspired by Twitter, offering a space for users to share short messages, or "barks," engage with others, and stay connected in a dynamic, user-friendly online community.',
    demo: 'https://google.com/',
    repo: 'https://github.com/',
  },
  {
    title: 'Kaiwakun',
    image: kaiwakun,
    description: 'KaiwaKun is an interactive app for learning Japanese through conversation, blending AI technology with user-friendly design to make language mastery engaging and accessible.',
    demo: 'https://google.com/',
    repo: 'https://github.com/',
  },
  {
    title: 'Tasklister',
    image: tasklister,
    demo: 'https://google.com/',
    repo: 'https://github.com/RyanmjDev/tasklister', 
    description: 'A convient and responsive task manager built with the MERN stack, allowing users register, login to create, edit, and delete tasks, as well as mark them as complete.',
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-12 text-center">
      <div className="container mx-auto max-w-7xl px-4 lg:px-12" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-stretch justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-accent border-card-blue gradient-blue p-4 rounded-lg shadow-lg
                max-w-md lg:max-w-lg xl:max-w-sm w-full h-auto glow transform transition-transform duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-2 text-left">{project.description}</p>

   

                  <div className="flex justify-between items-end gap-2 border-t border-t-divider-blue  pt-4">
              
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent border border-steel-blue border-accent rounded-full w-32 py-2"
                    >
                      Demo
                    </a>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent border border-steel-blue border-accent rounded-full w-32 py-2"
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
