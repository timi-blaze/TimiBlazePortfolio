import React from 'react'
import './Skills.css';
import { FaCode, FaTools, FaLayerGroup, FaVial, FaDatabase, FaCloud } from 'react-icons/fa';


const Skills: React.FC = () => {
  return (
   <section id="skills" className="skills fade-in">
     <h2>Technical Skills</h2>
     <p className="skills-subtext">
        Comprehensive expertise across modern development stack with focus on scalable
        web applications and software development practices
     </p>

     <div className="skills-grid">
        <div className="skill-card">
            <FaCode />
            <h3>Programming Languages</h3>
            <div className="tags">
                <span>Javascript</span>
                <span>Typescript</span>
                <span>CSS</span>
                <span>HTML</span>
            </div>
        </div>

        <div className="skill-card">
            <FaLayerGroup />
          <h3>Libraries & Frameworks</h3>
          <div className="tags">
            <span>React</span>
            <span>Tailwind</span>
            <span>Bootstrap5</span>
            <span>Node.js</span>
          </div>
        </div>

    
        <div className="skill-card">
            <FaTools />
          <h3>Tools</h3>
          <div className="tags">
            <span>Git</span>
            <span>Github</span>
            <span>Vscode</span>
            <span>Figma</span>
          </div>
        </div>

        <div className="skill-card">
            <FaCloud />
          <h3>Project Management</h3>
          <div className="tags">
            <span>Project Management</span>
          </div>
        </div>

        <div className="skill-card">
            <FaDatabase />
          <h3>Web Framework</h3>
          <div className="tags">
            <span>React Js</span>
          </div>
        </div>

       <div className="skill-card">
        <FaVial />
          <h3>Testing</h3>
          <div className="tags">
            <span>Jest</span>
            <span>Vercel</span>
            <span>Netlify</span>
          </div>
        </div>

     </div>
   </section>
  )
}

export default Skills