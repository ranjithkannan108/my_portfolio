import React, { useRef } from 'react';
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

  return (
    <nav className='navbar' key={location.pathname}>
      <div className="nav-logo gradient-text">
        <h1>Ranjith Kannan</h1>
      </div>
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='close' />
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