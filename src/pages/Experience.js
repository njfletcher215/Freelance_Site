import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

export default function Experience() {
  return (
    <div className='experience'>
      <h3 className='section-header'>OBJECTIVE</h3>
      <div className='experience-section'>
        <div className='objective experience-text'>
          Seeking a challenging and rewarding position in the technology industry where I can utilize my 
          technical and analasis skills to create, optimize, and/or refine software products.
        </div>
      </div>
      <h3 className='section-header'>WORK EXPERIENCE</h3>
      <div className='work-experience experience-section'>
        <ExperienceItem institution='Encyclopaedia Britannica' location='Chicago, IL' title='Quality Assurance Automation Engineer Intern' startDate='MAY 2022' endDate='APRIL 2023'>
          In this role I developed the necessary skills to work as a part of a software development team and ensure code and product 
          quality. I learned to create functional test cases, analyze web applications for potential points of failure, and optimize 
          code to minimize runtime. I also gained working knowledge of Python, Selenium, PyCharm, git/GitHub, and Chrome DevTools.
        </ExperienceItem>
        <ExperienceItem institution='Loyola University Chicago' location='Chicago, IL' title='Computer Science Tutor' startDate='JANUARY 2022' endDate='APRIL 2023'>
          In this role I developed the necessary skills to communicate technical concepts clearly to people with little to no technical 
          background, and to break down complex technical requirements into easy-to-follow steps. I also learned to quickly pick up new 
          concepts and information.
        </ExperienceItem>
        <ExperienceItem institution='ReviewRamp' location='Atlanta, GA' title='Web Development Intern' startDate='JUNE 2021' endDate='DECEMBER 2021'>
          In this role I developed the necessary skills to work independently, monitoring both product and code for potential 
          defects—then implementing a solution to undo or prevent said defects. I also learned to work within multiple environments 
          (prod and test), and manage those environments both directly through their CLIs and through cloud management software. 
          I learned to look for places where automation could save time and/or resources, and spearhead the automation process. 
          I gained working knowledge of Python, Django, Typescript, Node.js, AWS, CI/CD, git/GitHub, and Linux.
        </ExperienceItem>
        <ExperienceItem institution='Self-Employed' location='Chicago, IL' title='Freelance Web Developer' startDate='JANUARY 2022' endDate='PRESENT'>
          In this role I developed the necessary skills to manage my time and resources around a specific goal. I learned to clearly 
          communicate goals and expectations with clients and cemented web development skills I gained during my internships. I gained 
          working knowledge of React.js, GCP, and HTML/CSS.
        </ExperienceItem>
      </div>
      <h3 className='section-header'>EDUCATION</h3>
      <div className='education experience-section'>
        <ExperienceItem institution='Loyola University Chicago' location='Chicago, IL' title='B.S. in Software Engineering, B.A. in Visual Communications' startDate='AUGUST 2019' endDate='MAY 2023'>
          3.8 GPA, Graduated Magna Cum Laude
        </ExperienceItem>
      </div>
      <h3 className='section-header'>SKILLS</h3>
      <table className='skills experience-section'>
        <tbody>
          <tr>
            <td className='skill drop-shadow' colSpan={2}>
              Direct experience with many coding languages and frameworks, including HTML, CSS, Javascript, Typescript, React, 
              React Native, Java, Python, Selenium, Django, C, C#, Bash, Scala, SQL, and Go.
            </td>
          </tr>
          <tr>
            <td className='skill drop-shadow'>
              Experience with cloud computing, using AWS, GCP, and Oracle Cloud.
            </td>
            <td className='skill drop-shadow'>
              Ability to create easy to use databases and modern style websites for businesses.
            </td>
          </tr>
          <tr>
            <td className='skill drop-shadow'>
              Proficient in Microsoft Office Applications.
            </td>
            <td className='skill drop-shadow'>
              Experience in customer service.
            </td>
          </tr>
          <tr>
            <td className='skill drop-shadow'>
              Experience working with a team to complete large company projects.
            </td>
            <td className='skill drop-shadow'>
              Experience with various IDEs, including VSCode, Visual Studio, PyCharm, IntelliJ, Android Studio, and XCode.
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className='section-header'>LANGUAGES</h3>
      <div className='languages experience-section experience-text'>
        English, German
      </div>
      <div className='references experience-text'>
        References available upon request.
      </div>
      <div className='view-as-pdf-button-container'>
        <a className='styled-button' href='Fletcher_Resume.pdf'>VIEW AS PDF</a>
      </div>
    </div>
  );
}
  
  