import React, { useRef, useEffect, useState } from 'react';
import './Navbar.css'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const menuRef = useRef();
  const [activeSection, setActiveSection] = useState('home');

  const openMenu = () => {
    menuRef.current.classList.add('nav-active');
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.classList.remove('nav-active');
    menuRef.current.style.right = "-350px";
  }

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }

      const menuLinks = Array.from(document.querySelectorAll('.nav-menu li a'));
      const focusedElement = document.activeElement;
      const isInputFocused = focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA';
      const currentIndex = menuLinks.indexOf(focusedElement);

      if (isInputFocused) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % menuLinks.length;
        menuLinks[nextIndex].focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + menuLinks.length) % menuLinks.length;
        menuLinks[prevIndex].focus();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        window.scrollBy({ top: 200, behavior: 'smooth' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollBy({ top: -200, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Spy to highlight the active section in navigation
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'aboutme', 'experience', 'project', 'contactus'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      let currentActive = 'home';
      const navbarHeight = 90; // offset height of navbar + padding

      for (const el of sectionElements) {
        const rect = el.getBoundingClientRect();
        // If the section is currently overlapping the viewport center area
        if (rect.top <= navbarHeight + 120 && rect.bottom >= navbarHeight) {
          currentActive = el.id;
        }
      }
      setActiveSection(currentActive);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav className='navbar'>
      <div className="nav-logo gradient-text">
        <h1>Ranjith Kannan</h1>
      </div>
      <button className='nav-toggle open' onClick={openMenu} aria-label="Open Menu">
        <img src={menu_open} alt="" />
      </button>
      <ul ref={menuRef} className='nav-menu'>
        <button className='nav-toggle close' onClick={closeMenu} aria-label="Close Menu">
          <img src={menu_close} alt="" />
        </button>
        <li onClick={closeMenu}><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Profile</a></li>
        <li onClick={closeMenu}><a href="#aboutme" className={activeSection === 'aboutme' ? 'active' : ''}>About</a></li>
        <li onClick={closeMenu}><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Internships</a></li>
        <li onClick={closeMenu}><a href="#project" className={activeSection === 'project' ? 'active' : ''}>Projects</a></li>
        <li onClick={closeMenu}><a href="#contactus" className={activeSection === 'contactus' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
