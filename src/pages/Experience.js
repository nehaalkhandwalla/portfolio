import React, { useEffect } from 'react';
// import './App.css'; // Ensure to create and import a CSS file for the styles

const Experience = () => {
  useEffect(() => {
    function qs(selector, all = false) {
      return all ? document.querySelectorAll(selector) : document.querySelector(selector);
    }

    const sections = qs('.section', true);
    const timeline = qs('.timeline');
    const line = qs('.line');
    line.style.top = '20px';
    // line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler() {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();

      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        // line.style.bottom = `calc(100% - ${set}px)`;
        line.style.height = `${set}px`;
      }

      if (dist > timeline.offsetHeight && !full) {
        full = true;
        // line.style.bottom = `-50px`;
        line.style.height = `${timeline.offsetHeight}px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add('show-me');
        }
      });

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = 'block';
    window.addEventListener('scroll', scrollHandler);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div id="experience" className="section">
      <h1>Experience</h1>
      <p>
      Download My CV 
      <a href="/cv.pdf" download> here</a>
      </p>
      

      <div className="container">
        <div className="top-section">
          {/* <h1>My Journey</h1> */}
          <p>
            Since beginning my Computer Science degree at QMUL in 2021, I have progressed from a complete beginner at programming to 
            a confident and capable developer. I have completed a number of projects, both in groups and individually, and have
            developed a strong understanding of the principles of software development. 
          </p>
        </div>
        <div className="timeline">
          <div className="line"></div>

          <div className="section">
            <div className="bead"></div>
            <div className="content">
              <h4>May 2019 - July 2019</h4>
              <h2>Floorwalker</h2>
              <h4>Ashford Hospital</h4>
              <p>
                After engaging in an intesive 4 days of training on the use of the Cerner Millennium system, I spent 2 weeks
                providing support to NHS staff in their understanding of this EPR system to make the transition as seamless as possible.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead"></div>
            <div className="content">
              <h4>June 2023 - Aug 2023</h4>
              <h2>Data Analytics Summer Intern</h2>
              <h4>Infosys Technologies</h4>
              <p>
                Developed a python script to automate the process of data storage and reconciliation with Google Cloud Platform.
                Created code to generate randomised synthetic data for testing purposes.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="bead"></div>
            <div className="content">
                <h4>Sep 2022 - present</h4>
                <h2>Demonstrator</h2>
                <h4>Queen Mary University of London</h4>
              <p>
                Assisted students with their understanding of the course material and provided support with their assignments.
                Marked assignments and provided feedback to students.
              </p>
            </div>
          </div>

          {/* <div className="section">
            <div className="bead"></div>
            <div className="content">
              <h4>1998 - 2016</h4>
              <h2>Grew up in sunny San Diego, CA</h2>
              <p>
                Grew up building RC planes and drones, riding dirt bikes out in Glamis, and Ocotillo.
                Practicing jiu-jitsu & wrestling every other day since elementary school. Learned to paraglide
                & paramotor at 16 with my dad.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
