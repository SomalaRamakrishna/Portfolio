import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file
import Navbar from './Header/Navbar';
import Home from './Home/index';
import About from './About/index'
import Projects from './Projects/index'
import Contact from './Contact/index'
import Certifications from './Certifications/index'
import Education from './Education/index'
import Skills from './Skills';
const  App=()=> {
  const [open,setOpen]=useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const isMobile = windowWidth <= 767;
   const scrollToContact = (id) => {
    const contactElement = document.getElementById(`${id}`);
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    if(isMobile){
      setOpen(false);
    }
    
  };
   

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

 
  return (
    <div className="container">
       <Navbar scrollToContact={scrollToContact} open={open} setOpen={setOpen} isMobile={isMobile}/>
      <Home  isMobile={isMobile}/> 
      <About />
      <Education />
      <Skills isMobile={isMobile}/>
        <Projects /> 
       {/* <Certifications /> */}
        <Contact  /> 
    </div>
  );
}

export default App;