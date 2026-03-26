import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import Profile_img from '/src/assets/profile.JPG'
import resume from '/src/assets/Ranjith kannan U (resume).pdf';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div className="container hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            <span>I'm Ranjith Kannan U</span>
          </h1>
          <h2 className="hero-role gradient-text">Software Engineer</h2>
          <p className="hero-desc">
            Passionate Software Engineer with strong problem-solving skills and a focus on AI-driven tools. Proficient in JavaScript, HTML, and CSS, with practical experience in Java and SQL. Committed to delivering scalable and efficient solutions.
          </p>
          <div className="hero-actions">
            <Link to="/contactus" className="hero-btn primary">Connect with me</Link>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-btn secondary">My Resume</a>
          </div>
        </div>
        <div className="hero-right">
          <img src={Profile_img} alt="Ranjith Kannan" className="profile-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
