import React, {useEffect} from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Divider from './Components/Divider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 10000,
      once: true,
    });
  }, []);

  return ( 
    <div >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
