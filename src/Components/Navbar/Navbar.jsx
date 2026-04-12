import React, { useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css'
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.png'

const Navbar = () => {
  const menuRef = useRef();
  const location = useLocation();

  const openMenu = () => {
    menuRef.current.classList.add('nav-active');
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.classList.remove('nav-active');
    menuRef.current.style.right = "-350px";
  }

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

  return (
    <nav className='navbar' key={location.pathname}>
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
        <li onClick={closeMenu}><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink></li>
        <li onClick={closeMenu}><NavLink to="/aboutme" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        <li onClick={closeMenu}><NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Internships</NavLink></li>
        <li onClick={closeMenu}><NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
        <li onClick={closeMenu}><NavLink to="/contactus" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
