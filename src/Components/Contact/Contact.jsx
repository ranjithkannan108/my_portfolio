import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contactus" className="contact section-padding">
      <div className="container">
        <h1 className="section-title gradient-text">Get In Touch</h1>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="contact-heading">Let's talk</h2>
            <p className="contact-desc">
              Looking for a passionate Software Engineer? I’m ready to join your team—reach out to me via the form or my social profiles.
            </p>
            <div className="contact-details">
              <div className="contact-item glass">
                <span className="label">Email</span>
                <a href="mailto:ranjithkannanu@gmail.com" className="value">ranjithkannanu@gmail.com</a>
              </div>
              <div className="contact-item glass">
                <span className="label">Phone</span>
                <span className="value">+91 78100 93398</span>
              </div>
              <div className="contact-item glass">
                <span className="label">Socials</span>
                <div className="social-links">
                  <a href="https://linkedin.com/in/ranjith-kannan-u" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://github.com/ranjithkannan108" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <form action="https://api.web3forms.com/submit" method="POST" className="contact-form glass">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" name='name' className="form-input" required />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" name="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" rows="6" placeholder="Enter your message" className="form-input" required></textarea>
            </div>
            <button className="contact-submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

