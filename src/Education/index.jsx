import React from 'react'
import './style.css'
const Education = () => {
  return (
    <div className="developer-education" id="education">
          <div className="education-container">
            <div className="isometric-laptop">
              
              <div className="education-heading">Education</div> {/* Or use an inline SVG */}
              <img src="edulogo.png" alt="Isometric Laptop" />
            </div>
            <div className="education-list">
              <div className="education-item ">
                <div className="education-date">2022-Present</div>
                <div className="education-details">
                  <div className="education-title">BACHELOR DEGREE</div>
                  <div>CGPA : 9.0</div>
                  <div className="education-institute">Rajeev Gandhi Memorial College of Eng & Tech - Nandyal</div>
                </div>
                <div className='visit-edu'><a href="https://www.rgmcet.edu.in/" target="_blank"><button>Visit</button></a></div>
              </div>
              <div className="education-item">
                <div className="education-date">2020-2022</div>
                <div className="education-details">
                  <div className="education-title">HIGHER SECONDARY CERTIFICATE</div>
                  <div>Percentage: 90%</div>
                  <div className="education-institute">Andhra Pradesh Model School & Junior College</div>
                </div>
                <div className='visit-edu'><a href="https://schools.org.in/kurnool/28213100622/ap-model-school-panyam.html" target="_blank"><button>Visit</button></a></div>
              </div>
              <div className="education-item" >
                <div className="education-date">2020</div>
                <div className="education-details">
                  <div className="education-title">SECONDARY SCHOOL CERTIFICATE</div>
                   <div>Percentage: 93%</div>
                  <div className="education-institute">Andhra Pradesh Model School & Junior College</div>
                 
                </div>
                <div className='visit-edu'><a href="https://schools.org.in/kurnool/28213100622/ap-model-school-panyam.html" target="_blank"><button>Visit</button></a></div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Education
