import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div id="root">
      <main className="admin-dashboard">
        <h1>Panel de Administración</h1>
        <div className="admin-buttons">
          <Link to="/abm-concesionarias" className="btn">Administrar concesionarias</Link>
          <Link to="/abm-autos" className="btn">Administrar autos</Link>
          <Link to="/about-us-abm" className="btn">Administrar quiénes somos</Link>
          <Link to="/carousel-abm" className="btn">Administrar carrusel</Link>
          <Link to="/contact-us-abm" className="btn">Administrar contáctenos</Link>
          <Link to="/footer-abm" className="btn">Administrar pie de página</Link>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
