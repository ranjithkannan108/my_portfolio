import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Codexaon",
            role: "Web Development Internship",
            location: "Bengaluru",
            duration: "Nov 2025 – Jan 2026",
            desc: "Internship focused on web development technologies and practical application."
        },
        {
            company: "VEI Technologies",
            role: "Full Stack Development Internship",
            location: "Trichy",
            duration: "Aug 2024 – Oct 2024",
            desc: "Gained hands-on experience in full-stack development and project lifecycle."
        },
        {
            company: "Marcello Tech",
            role: "Java Programming Internship",
            location: "Trichy",
            duration: "Jan 2024 – Mar 2024",
            desc: "Deepened knowledge in Java programming and backend fundamentals."
        }
    ];

    return (
        <section id="experience" className="experience section-padding">
            <div className="container">
                <h1 className="section-title gradient-text">Internships</h1>
                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item glass">
                            <div className="exp-left">
                                <h3 className="exp-role">{exp.role}</h3>
                                <h4 className="exp-company">{exp.company}</h4>
                                <p className="exp-location">{exp.location}</p>
                            </div>
                            <div className="exp-right">
                                <span className="exp-duration">{exp.duration}</span>
                                <p className="exp-desc">{exp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
