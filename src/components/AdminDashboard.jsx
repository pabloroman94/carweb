import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div id="root">
      <main className="admin-dashboard">
        <h1>Panel de Administración</h1>
        <div className="admin-buttons">
          <Link to="/abm-autos" className="btn">Administrar Autos</Link>
          <Link to="/about-us-abm" className="btn">Administrar About Us</Link>
          <Link to="/carousel-abm" className="btn">Administrar Carrusel</Link>
          <Link to="/contact-us-abm" className="btn">Administrar Contact Us</Link>
          <Link to="/footer-abm" className="btn">Administrar Footer</Link>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
