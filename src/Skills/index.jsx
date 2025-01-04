import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faReact,
    faNodeJs,
    faBootstrap, 
    faGitAlt, 
    faGithub, 
    faAws, 
} from '@fortawesome/free-brands-svg-icons';
import {
    faDatabase, // For databases like MongoDB and MySQL
    faServer, // For Express (backend)
    faCode, // General coding icon for C, C++, Java, Python
    faTerminal, // For CI/CD (terminal/command line)
    faCloud, // For Azure (cloud)
    faFileCode, // For VS Code (code editor)
   faRocket,
} from '@fortawesome/free-solid-svg-icons';
import './style.css';
import SkillsButtons from '../SkillsButtons/SkillsButtons';

const Skills = ({isMobile}) => {
    const skillsData = [
        { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} /> ,rating:90},
        { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} />,rating:90 },
        { name: 'JavaScript (ES6+)', icon: <FontAwesomeIcon icon={faCode} /> ,rating:85}, // Generic code icon
        { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} /> ,rating:80},
        { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> ,rating:90},
        { name: 'NodeJS', icon: <FontAwesomeIcon icon={faNodeJs} /> ,rating:90},
        { name: 'Express', icon: <FontAwesomeIcon icon={faServer} /> ,rating:90}, // Server icon
        { name: 'MongoDB', icon: <FontAwesomeIcon icon={faDatabase} /> ,rating:90}, // Database icon
        { name: 'SQL (MySQL)', icon: <FontAwesomeIcon icon={faDatabase} /> ,rating:80}, // Database icon
        { name: 'Java', icon: <FontAwesomeIcon icon={faCode} /> ,rating:80},
        { name: 'C++', icon: <FontAwesomeIcon icon={faCode} /> ,rating:90},
        { name: 'C', icon: <FontAwesomeIcon icon={faCode} /> ,rating:80},
        { name: 'Python', icon: <FontAwesomeIcon icon={faCode} /> ,rating:80},
        { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} /> ,rating:90},
        { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} /> ,rating:90},
        { name: 'Postman', icon: <FontAwesomeIcon icon={faRocket} />,rating:90 }, // Consider a more suitable icon if needed
        { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} /> ,rating:80},
        { name: 'CI/CD', icon: <FontAwesomeIcon icon={faTerminal} />,rating:90 },
        { name: 'VSCode', icon: <FontAwesomeIcon icon={faFileCode} /> ,rating:90},
    ];
    const carouselRef = useRef(null);

  useEffect(() => {
    let scrollAmount = 0;
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 2; // Adjust scroll speed here
        scrollAmount += 2;
        if (scrollAmount >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 30); // Adjust interval for smoother/faster scroll

    return () => clearInterval(scrollInterval); // Clear interval on unmount
  }, []);
  return (
   <div className='developer-skills' id='skills'>
    
    <div className="skills-carousel-container">
      <h2 id="skill-title">Skills</h2>
      <div className="skills-carousel" ref={carouselRef}>
        <div className="skills-track">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
             <div className="skill-rating-bar">
              <div className="skill-rating" data-rating={skill.rating} style={{ width: `${skill.rating}%` }}>
                {skill.rating}%
              </div>
            </div>
            </div>
          ))}
           {/* Duplicate items for smoother infinite scroll */}
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={`duplicate-${index}`}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-rating-bar">
              <div className="skill-rating" data-rating={skill.rating} style={{ width: `${skill.rating}%` }}>
                {skill.rating}%
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {isMobile && <SkillsButtons />}
   </div>
      )
}

export default Skills;

{/* <div>
        <h1>About</h1>
      {/* <aside className="sidebar">
        <div className="profile">
          <h1 className="name">Somala Ramakrishna</h1>
          <p className="title">Web Developer</p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:somalaramakrishna1003d@gmail.com">somalaramakrishna1003d@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone No :</span>
            <a href="tel:+919177975108">9177975108</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Birthday</span>
            <span>March 1, 2004</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Kurnool - Andhra Pradesh,India</span>
          </div>
        </div>
      </aside> 
      {/* <main className="main-content">
        <nav className="navigation">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I
            enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover,
            I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your message and identity in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </section>
        <section className="what-i-do">
          <h2>What I'm Doing</h2>
          <div className="services">
            <div className="service">
              <h3>Web Design</h3>
              <p>The most modern and high-quality design made at a professional level.</p>
            </div>
            <div className="service">
              <h3>Web Development</h3>
              <p>High-quality development of sites at the professional level.</p>
            </div>
            <div className="service">
              <h3>Mobile Apps</h3>
              <p>Professional development of applications for iOS and Android</p>
            </div>
            <div className="service">
              <h3>Photography</h3>
              <p>I make high-quality photos of any category at a professional level</p>
            </div>
          </div>
        </section>
      </main> 
    </div> */}
