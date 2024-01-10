import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-fixed bg-center bg-cover flex justify-center items-center"  >
      <div className="container mx-auto px-4 w-full xl:w-1/2" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000">
        <div className=" mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-8">
            A Little About Me 
          </h2>
          <div className="py-4 rounded-lg ">
            <p className="text-lg leading-relaxed">
            I have cultivated a strong passion for creating elegant, responsive websites using modern technologies as a self taught developer. 
            I pride myself on staying current with the latest trends in web development, ensuring that my projects consistently exceed expectations.
            When I'm not coding, I love to explore new challenges and expanding my skillset to continue delivering exceptional results. 
            I'm always looking to take my skills to the next level!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
