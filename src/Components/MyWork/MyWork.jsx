import React from 'react'
import './MyWork.css'
import mywork_data from '/src/assets/services_data'

const MyWork = () => {
  const internshipProject = mywork_data.find(work => work.w_name.includes("Edspark"));
  const otherProjects = mywork_data.filter(work => !work.w_name.includes("Edspark"));

  return (
    <section id='project' className='mywork section-padding'>
      <div className="container">
        
        {/* Internship Section */}
        {internshipProject && (
          <div className="internship-section">
            <h1 className="section-title gradient-text">My Internship Work</h1>
            <div className="internship-container">
              <div className="internship-img-wrapper">
                <img src={internshipProject.w_img} alt={internshipProject.w_name} />
              </div>
              <div className="internship-info">
                <h3>{internshipProject.w_name}</h3>
                <p>{internshipProject.w_desc}</p>
                <a href={internshipProject.w_url} target="_blank" rel="noopener noreferrer" className="view-btn">View Website</a>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Section */}
        <h1 className="section-title gradient-text" style={{ marginTop: '4rem' }}>My Latest Work</h1>
        <div className="mywork-container">
          {otherProjects.map((work, index) => {
            return (
              <div key={index} className="work-card glass">
                <div className="work-img-wrapper">
                  <img src={work.w_img} alt={work.w_name} />
                  <div className="work-overlay">
                    <a href={work.w_url} target="_blank" rel="noopener noreferrer" className="view-btn">View Code</a>
                  </div>
                </div>
                <div className="work-info">
                  <h3>{work.w_name}</h3>
                  <p>{work.w_desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MyWork
