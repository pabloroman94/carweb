import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de tener este archivo CSS

function Header() {
  return (
    <header>
      <div className="header-content">
        <h1>DreamCar</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-featured-vehicles">Vehículos</Link></li>
            <li><Link to="/sell-your-car">Vendé tu usado</Link></li>
            <li><Link to="/about-us">Quiénes somos</Link></li>
            <li><Link to="/contact-us">Contáctenos</Link></li>
            <li><Link to="/admin-dashboard">Admin Dashboard</Link></li> {/* Nuevo enlace */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
