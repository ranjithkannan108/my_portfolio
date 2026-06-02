import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Profile_img from '/src/assets/profile.JPG'
import resume from '../../assets/Resume_Ranjith_kannan_U.pdf';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className="container hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            I'm <span className="hero-name-wrap">Ranjith Kannan U</span>
          </h1>
          <h2 className="hero-role gradient-text">Software Engineer</h2>
          <p className="hero-desc">
            A motivated Full Stack Developer with hands‑on experience in building scalable web applications using Java, Spring Boot, JDBC, MySQL, HTML, CSS, and JavaScript. My background includes internships at Marcello Tech, VEI Technologies, Codexaon Bengaluru, and multiple real‑world projects such as MEDREMINDER, Titan Fitness, and EdSpark Clone.
            <br /><br />
            With a strong foundation in Data Structures, RESTful APIs, and Agile methodologies, I am eager to contribute to engineering teams that value responsive design, efficient database management, and user‑focused solutions.
          </p>
          <div className="hero-actions">
            <Link to="/contactus" className="hero-btn primary">Connect with me</Link>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-btn secondary">My Resume</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-img-container">
            <div className="profile-img-bg"></div>
            <img src={Profile_img} alt="Ranjith Kannan" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
