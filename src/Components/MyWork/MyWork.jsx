import React from 'react'
import './MyWork.css'
import mywork_data from '/src/assets/services_data'

const MyWork = () => {
  return (
    <section id='project' className='mywork section-padding'>
      <div className="container">
        <h1 className="section-title gradient-text">My Latest Work</h1>
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
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



