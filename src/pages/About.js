import React, { useState } from 'react';

export default function About() {
    const scrollDown = () => { window.scrollBy({top: window.innerHeight, behavior: 'smooth'}); }
    const scrollUp = () => { window.scrollTo({top: 0, behavior: 'smooth'}); }
    const [scrollBehaviourIndex, setScrollBehaviourIndex] = useState(0)
    const scrollBehaviours = [scrollDown, scrollUp];
    const toggleScroll = (scrollBehaviourIndex) => {
      setScrollBehaviourIndex((scrollBehaviourIndex + 1) % scrollBehaviours.length);
    }

    return (
      <div className='about'>
        <div className='about-blurb-container'>
          <img src='nathan.jpg' />
          <p className='about-blurb'>Hi, my name is Nathan Fletcher.<br />I'm a freelance web developer and designer with a background in quality assurance.</p>
          <div class="arrow" onClick={() => {scrollBehaviours[scrollBehaviourIndex](); toggleScroll(scrollBehaviourIndex);}} />
        </div>
        <div className='about-body-container'>
          <p className='about-body'>
            {/* todo: cut in half */}
            I am a web developer based in Chicago, with a strong foundation in design. I recently graduated from Loyola University Chicago 
            with a B.S. in Software Engineering and a B.A. in Visual Communications.
            <br />
            I posess a broad range of skills in software development, cloud computing, database management, and user interface design.
            Throughout my professional life, I have gained experience working with web development technologies across the stack,
            such as Django, uWSGI, nginx, React, and Node, as well as testing tools like Selenium and Chrome DevTools.
            <br />
            I am driven by a dedication to continuous learning and a passion for pushing the boundaries of design and technology.
            Contact me today to discuss how my technical proficiency, creative mindset, and commitment to excellence can 
            benefit your software projects and drive them to new heights of success.            
          </p>
        </div>
      </div>
    );
  }
  
  