import React from 'react';
import './Hero.css';
import profileImg from '../../assets/timi.png'
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


const Hero: React.FC = () => {
  return (
    <section id="Hero" className="hero">
        <div className="hero-house">
      <div className="hero-content">

          
       
        
        <h1>Hello, I'm <br /><span className="highlight">Timi Blaze</span></h1>
        
        <p className="hero-description">
          Frontend Engineer crafting digital experiences with 
          <strong> 1+ years</strong> of expertise.
        </p>
        
        <p className="hero-subtext">
          Specializing in Frontend development, Software practices, 
          and scalable solutions that drive business growth.
        </p>

        <div className="hero-btns">
          <button className="btn-primary">
            <span className="icon">⬇️</span> Download Resume
          </button>
          <button className="btn-secondary"><a href="#projects">View My Work </a></button>
        </div>
        </div>
        
        <div className="hero-image-container">
        <div className="profile-circle">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>

      </div>

   <div className="hero-footer">
     <div className="social-links">
        <a href="https://github.com/timi-blaze" className="icon-circle">
            <FaGithub />
        </a>
       <a href="#" className="icon-circle">
        <FaLinkedinIn />
       </a>
       <a href="https://wa.me/2349036244262?text=Hello%20Timi" className="icon-circle">
        <FaWhatsapp />
       </a>
       <a href="#" className="icon-circle">
        <FaFacebook/>
       </a>
       
     </div>

     <div className="stats-row">
        <div className='stat-box'>
            <h2>10+</h2>
            <span>Projects</span>
        </div>
        <div className="stat-box">
            <h2>100%</h2>
            <span>Client Satisfaction</span>
        </div>
     </div>


   </div>



    </section>
  );
};

export default Hero;


