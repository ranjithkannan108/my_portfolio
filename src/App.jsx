import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="portfolio-app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<MyWork />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer-simple glass">
          <p>&copy; {new Date().getFullYear()} Ranjith Kannan U. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App