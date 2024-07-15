import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["STUDENT", "WEB DEVELOPER", "WEB DESIGNER", "HAAFIDHAH", "ICE-SKATER"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000,
      showCursor: true,
      loop: true,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="section">
      <section className="hero">
        <div className="hero-text">
          <p> 
            I AM A <span ref={textRef}></span> 
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
