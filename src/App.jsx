import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop'
import MouseTrail from './Components/MouseTrail/MouseTrail'

const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12, // Trigger when 12% of the section is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MouseTrail />
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <MyWork />
          <Contact />
        </main>
        <footer className="footer-simple glass">
          <p>&copy; {new Date().getFullYear()} Ranjith Kannan U. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App