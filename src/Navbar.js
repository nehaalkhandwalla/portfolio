import React from 'react';
import { Link } from 'react-scroll';
import './App.css'; // Ensure this path matches your directory structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className='me'><Link to="home" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">Nehaal Khandwalla</Link></li>
        <li><Link to="about" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">About Me</Link></li>
        <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">Projects</Link></li>
        <li><Link to="experience" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">Experience</Link></li>
        <li><Link to="footer" smooth={true} duration={500} spy={true} offset={-70} activeClass="active">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
