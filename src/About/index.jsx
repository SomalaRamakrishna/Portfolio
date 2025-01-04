import React, { useEffect, useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import the icons
const About = () => {

   const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTranslateX(prevTranslateX => prevTranslateX >0 ? prevTranslateX-8 :prevTranslateX+8 ); 
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <div className="developer-about" id="about">
       <main className="main-content">
          
          <h2 id="about-me">About Me <FontAwesomeIcon icon={faUser} className='user-icon' style={{ transform: `translateX(${translateX}px)` }}/> </h2>
          <p>
            I'm Creative Person and 🎗️ MERN Stack Developer 🎗️ from AndhraPradesh, India, working in web development . I
            enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website 🌐 so that it is functional and user-friendly but at the same time attractive. Moreover,
            I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your message and identity in the most creative way. I created web design for many projects 💝✍️.
          </p>
      </main> 
      </div>
  )
}

export default About;
 
      
