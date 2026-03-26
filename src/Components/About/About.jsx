import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="aboutme" className="about section-padding">
      <div className="container">
        <h1 className="section-title gradient-text">About Me</h1>
        <div className="about-wrapper glass">
          <div className="about-info">
            <p className="about-summary">
              A Passionate Software Engineer with strong problem-solving skills and the ability to quickly learn and apply emerging technologies, including AI-driven tools and frameworks. Proficient in JavaScript, HTML, and CSS, with practical experience in Java and SQL. Seeking opportunities to contribute to backend and full-stack development projects while leveraging AI innovations to deliver scalable and efficient solutions.
            </p>
            <div className="about-education">
              <h3>Education</h3>
              <div className="edu-item">
                <div className="edu-head">
                  <h4>Bachelor of Engineering in Computer Science</h4>
                  <span className="edu-grade">CGPA: 7.5</span>
                </div>
                <p className="edu-coll">CARE College of Engineering, Trichy</p>
                <p className="edu-year">2021 – 2025</p>
              </div>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <div className="skill-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Bootstrap</span>
                  <span>Java</span>
                  <span>JDBC</span>
                  <span>SQL</span>
                  <span>Git</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skill-tags">
                  <span>Adaptability</span>
                  <span>Critical Thinking</span>
                  <span>Leadership</span>
                  <span>Time Management</span>
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

