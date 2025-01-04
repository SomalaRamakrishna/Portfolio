// Navbar.jsx
import React, { useState } from 'react';
import "./style.css";

const Navbar = ({scrollToContact,open,setOpen,isMobile}) => {

   const toggleMenu=()=> {
            setOpen(!open);
            const nav = document.getElementById('menu-nav');
            nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
        }

     const handleScrollTo = (section) => {
        setOpen(false); // Close the menu *first*

        // Use setTimeout to ensure the menu is closed BEFORE scrolling
        setTimeout(() => {
            scrollToContact(section);
        }, 0); // 0ms is usually sufficient
    };
  return (
    <div id="main-nav">
       <div class="menu-icon" onClick={toggleMenu} >
            <img src={open?"menu_close.png" : "menu1.png"} alt="Menu" width="40" height="40"style={{paddingRight:"10px"}}/>
        </div>
        <nav id='menu-nav' style={{display:(isMobile && !open)?"none":"block"}}>
            <ul>
              <li><button onClick={()=>handleScrollTo ('home')}>Home</button></li> 
              <li><button onClick={()=>handleScrollTo ('about')}>About</button></li>
              <li><button onClick={()=>handleScrollTo ('education')}>Education</button></li>
              <li><button onClick={()=>handleScrollTo ('skills')}>Skills</button></li>
              <li><button onClick={()=>handleScrollTo ('projects')}>Projects</button></li>
              {/* <li><button onClick={()=>handleScrollTo ('certifications')}>Certifications</button></li> */}
              <li><button onClick={()=>handleScrollTo ('contact')}>Contact</button></li>
            </ul>
       </nav>
    </div>
    
  );
};

export default Navbar;