import React from 'react'
import './style.css'
const projectsData = [
  {
    name: 'Student Activity Clubs Application',
    tools: ['HTML5', 'CSS3','JavaScript'],
    myRole: 'FrontEnd Developer',
    description: "Developed a Student Activity Clubs application to facilitate registration and information sharing for all students in the Computer Science and Engineering (CSE) branch. The user interface was built using HTML and CSS, with JavaScript implemented to provide dynamic capabilities and enhance user experience.",
    githubLink: "https://github.com/boyaravikumar42/rgmcet-cisc", 
    liveLink: "https://boyaravikumar42.github.io/cisk/" ,
  },
  {
    name: 'Real Time Chat Application',
    tools: ['React', 'Node.js', 'MongoDB', 'Redux','Express', 'Socket.io'],
    myRole: 'MERN Stack Developer',
    description: `Developed a responsive real-time chat application using MERN Stack(MongoDB, Express, React, Node.js) with Socket.IO. Implemented secure user authentication (JWT), profile management, online/offline indicators, notifications, and multimedia messaging (text, emojis, images). Designed for scalability (>2000 messages/day) and deployed on Render and Netlify for high availability.`,
    githubLink: "https://github.com/SomalaRamakrishna/MERN-RealTimeCoolChat-Application", 
    liveLink: "https://frabjous-stroopwafel-b1f61c.netlify.app" ,
  },
    
];

const Projects = () => {
  return (
    <div className="developer-projects" id='projects'>
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-header">
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
              <h3>{project.name}</h3>
            </div>
            <div className="project-content">
              <pre>
                <code>
                  {`const project = { 
                name: '${project.name}',
                tools: [${project.tools.map(tool => `'${tool}'`).join(', ')}],
                myRole: '${project.myRole}',
                Description: '${project.description}',
                  };`}
                </code>
              </pre>
          <div className="button-container">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="github">
                <span className="button-icon">🐙</span> GitHub
              </button>
            </a>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <button className="live">
                <span className="button-icon">🌐</span> LIVE
              </button>
            </a>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
  )
}

export default Projects;
