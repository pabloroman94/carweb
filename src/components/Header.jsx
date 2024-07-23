import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1><Link to="/">DreamCar</Link></h1>
        <nav>
          <ul>
            <li><Link to="/all-featured-vehicles">Usados</Link></li>
            <li><Link to="/sell-your-car">Vendé tu usado</Link></li>
            <li><Link to="/about-us">Quiénes somos</Link></li>
            <li><Link to="/contact-us">Contáctenos</Link></li>
            <li><Link to="/carousel-abm">Admin Carrusel</Link></li> {/* Enlace agregado */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
