import React, { useEffect, useState } from 'react'
import "./style.css"
import SkillsButtons from '../SkillsButtons/SkillsButtons';
import { FaFilePdf} from 'react-icons/fa';
const Block = ({isMobile}) => {
   
  return (
    <center>
        <div className="developer-details" id="home">
            <div className="developer-sub-containers">
                <div className="developer-photo">
                   <div className='dev'>
                     <div className="circle-rotate">
                        <img src="developerpic7.jpg" alt="developerPic" className="developerimage"/>
                     </div>
                     <div id='name'>Somala Rama Krishna 
                      <a href="https://drive.google.com/file/d/1aENSZhEU5JlZahC1fKjBtMYOjNN5PjSO/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                          <FaFilePdf style={{color:"white",fontSize:'40px'}}/> 
                      </a>
                     </div>
                   </div>
                </div>
              {!isMobile && <SkillsButtons />}
            </div>
        </div>
        </center>
  )
}

export default Block;