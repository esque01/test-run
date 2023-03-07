import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import './index.css';
interface OwnProps { }

type Props = OwnProps;

class About extends PureComponent<Props> {
  render() {
    return (
      // create a home page 
      <div className='container'>
        <div className='nav'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/">Blah</Link>
          <Link className='link' to="/">Blah</Link>
          <Link className='link' to="/about">About</Link>
        </div>
        <img className='headshot' src="edwardEsquedaHeadshot.jpeg" alt="Edward Esqueda Headshot" />
        <h1>About Me</h1>
        <p>Hello, I am Edward Esqueda. I am currently a student at Purdue University Fort Wayne studying Computer Science. I am an experienced Java Programmer, with a passion for problem solving using logic and critical thinking.</p>
        <p>In my free time I enjoy playing Tom Clancy's Rainbow Six Siege with my friends. It is a tactical FPS game that involves teamwork and strategy to win.</p>
        <h1>Experience</h1>
        <h2>Application Developer, MedPro Group</h2>
        <p>June 2019 - Present</p>
        <p>Developed a web application using Java, Spring Boot, and React to allow users to create and manage their own medical records.</p>
        {/* create another experience  */}
        <h2>Software Developer, Purdue University Fort Wayne</h2>
        <p>May 2018 - May 2019</p>
        <p>Developed a web application using Java, Spring Boot, and React to allow users to create and manage their own medical records.</p>
        <h1>Education</h1>
        <h2>Purdue University Fort Wayne</h2>
        <p>Computer Science</p>
        <p>Expected Graduation: May 2021</p>
        <h2>Indiana University Purdue University Fort Wayne</h2>
        <p>Computer Science</p>
        <p>Graduated: May 2019</p>
        <h1>Skills</h1>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Agile</li>
          <li>Scrum</li>
          <li>Test Driven Development</li>
          <li>Object Oriented Programming</li>
          <li>Functional Programming</li>
          <li>RESTful APIs</li>
          <li>Linux</li>
          <li>Windows</li>
          <li>MacOS</li>
          <li>Microsoft Office</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
          <li>Adobe Premiere Pro</li>
          <li>Adobe After Effects</li>
          <li>Adobe Lightroom</li>
          <li>Adobe Audition</li>
          <li>Adobe XD</li>
          <li>Adobe Animate</li>
          <li>Adobe Dreamweaver</li>
        </ul>
      </div>

    );
  }
}

export default About;
