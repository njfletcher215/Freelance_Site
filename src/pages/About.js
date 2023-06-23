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
            Nathan Fletcher is a web developer based in Chicago, with a strong foundation in design and a passion for 
            pushing the boundaries of technology. He recently graduated from Loyola University Chicago with a B.S. in Software Engineering
            and a B.A. in Visual Communications, where he honed his technical expertise and expanded his creative abilities.
            <br />
            Throughout his academic journey, Nathan acquired a broad range of skills in software development, cloud computing, 
            database management, and user interface design. He successfully completed various software development projects, including 
            the creation of a social media web application and a React Native app for recipe sharing. 
            <br />
            Nathan began his professional experience as a web development intern at the Atlanta-based startup ReviewRamp
            and later as a quality assurance automation engineering intern at Encyclopædia Britannica. During his time at ReviewRamp, he 
            refined his skills in monitoring products and code for defects while implementing effective solutions. His tenure at 
            Encyclopædia Britannica further enhanced his abilities as part of a software development team, where he focused on code and 
            product quality. Nathan gained expertise in Python, Selenium, PyCharm, Git/GitHub, and Chrome DevTools while analyzing web 
            applications and optimizing code for improved performance.
            <br />
            Beyond his technical aptitude, Nathan possesses strong problem-solving and analytical skills, enabling him to dissect complex 
            technical requirements and communicate them clearly to non-technical colleagues. He thrives in collaborative team environments.
            <br />
            Nathan's comprehensive knowledge of programming languages and frameworks, including HTML, CSS, JavaScript, TypeScript, React, 
            React Native, Java, Python, and more, positions him as a versatile software engineer capable of tackling diverse challenges. 
            He also has hands-on experience with cloud computing platforms such as AWS, GCP, and Oracle Cloud.
            <br />
            Driven by a dedication to continuous learning and his passion for pushing the boundaries of design and programming, 
            Nathan is a valuable asset to any software engineering team. He eagerly seeks out new opportunities for growth and innovation, 
            ready to contribute his skills and expertise to the industry.
            <br />
            Contact Nathan Fletcher today to discuss how his technical proficiency, creative mindset, and commitment to excellence can 
            benefit your software projects and drive them to new heights of success.
          </p>
        </div>
      </div>
    );
  }
  
  