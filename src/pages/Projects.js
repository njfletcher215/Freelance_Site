import React from 'react';
import Project from '../components/Project';

export default function Projects() {
    return (
      <div className='projects'>
        <Project image="/ReviewRamp_HomePage.png" title="REVIEWRAMP" link="https://www.reviewramp.com">ReviewRamp is a b2b SaaS product geared towards generating positive online reviews for small businesses, and increasing customer engagement with a suite of messaging options.<br />I worked primarily on the backend, using Python and Django to create new API endpoints and rework existing ones. I did some light work on the frontend as well, using Angular and TypeScript to create new menus.</Project>
      </div>
    );
  }
  
  