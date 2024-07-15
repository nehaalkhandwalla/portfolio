import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Home = () => {
  const textRef = useRef(null);
  const [prefix, setPrefix] = useState("I AM A");

  useEffect(() => {
    const options = {
      strings: ["WEB DESIGNER", "WEB DEVELOPER", "STUDENT", "HAAFIDHAH", "ICE-SKATER"],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 2000,
      showCursor: true,
      loop: true,
      preStringTyped: (arrayPos) => {
        const currentString = options.strings[arrayPos];
        const firstLetter = currentString.charAt(0).toLowerCase();
        const newPrefix = 'aeiou'.includes(firstLetter) ? 'I AM AN' : 'I AM A';
        setPrefix(newPrefix);
      },
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      // Cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="section">
      <section className="hero">
        <div className="hero-text">
          <p className='hero-sentence'>
            {prefix} <span ref={textRef}></span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
