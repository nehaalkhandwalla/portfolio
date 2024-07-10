import React from 'react';
import './App.css'; // Ensure this path matches your directory structure
import Navbar from './Navbar'; // Ensure this path matches your directory structure
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Experience from './pages/Experience';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
    </div>
  );
};

export default App;
