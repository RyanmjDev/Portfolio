import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'My First Project',
    image: 'https://via.placeholder.com/350x200',
    repo: 'https://github.com/',
  },
  {
    title: 'Project 2',
    description: 'My Second Project',
    image: 'https://via.placeholder.com/350x200',
    repo: 'https://github.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up"  data-aos-once="false" data-aos-duration="1000">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className=" border-2 border-accent p-4 rounded-lg shadow-lg shadow-neutral-200 bg-white "
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="text-accent hover:underline"
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

