import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo7.png'; // Asegúrate de que la ruta sea correcta

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          
        <h1 className="title"><Link to="/">DreamCar</Link></h1>
          <Link to="/">
            <img src={logo} alt="DreamCarQR Logo" className="logo" />
          </Link>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/all-featured-vehicles">Vehículos</Link></li>
            <li><Link to="/sell-your-car">Vendé tu usado</Link></li>
            <li><Link to="/about-us">Quiénes somos</Link></li>
            <li><Link to="/contact-us">Contáctenos</Link></li>
            <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
