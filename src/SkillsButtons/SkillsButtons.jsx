import React from 'react'
import './style.css'
const SkillsButtons = () => {
  return (
     <div className="developer-skills"> 
                    <div className="block">
                        <div id="button-name">---Front-End & Back-End Development---</div>
                        <div className='buttons'>
                            <button>HTML5</button>
                            <button>CSS3</button>
                            <button>Bootstrap</button>
                            <button>JavaScript (ES6+)</button>
                            <button>MongoDB</button>
                            <button>Express.js</button>
                            <button>React</button>
                            <button> Node.js</button>
                            <button>SQL (MySQL)</button>
                            <button>Responsive Designing</button>
                            <button>RESTful APIs</button>
                            <button>API Integration</button>
                        </div>                   
                        <div>
                            
                    </div>
                        
                    </div>
                    <div className="block">
                        <div id="button-name">---DevOps Tools---</div>
                        <div className='buttons'>
                            <button> Git&GitHub </button>
                            <button>VS Code</button>
                            <button>AWS (Azure)</button>
                            <button>Postman</button>
                            <button>CI/CD ( Render, Netlify, Vendor)</button>
                        </div>
                        
                    </div>
                    <div className="block">
                        <div id="button-name">---Programming Languages---</div>
                        <div className='buttons'>
                            <button>Java</button>
                            <button>C++</button>
                            <button>C</button>
                            <button>Python</button>
                        </div>
                    </div>         
                    <div className="block">
                        <div id="button-name">---Relevant Courseworks---</div>
                        <div className='buttons'>
                            <button>Data Structures & Algorithms (C++) </button>
                            <button> Operating Systems</button>
                            <button> DBMS</button>
                            <button>Computer Networks</button>
                        </div>
                    </div>               
                 </div> 
  )
}

export default SkillsButtons
