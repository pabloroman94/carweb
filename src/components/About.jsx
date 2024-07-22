import React from 'react';
import Header from './Header';

function About() {
  return (
    <section className="about">

      <h2>Acerca de AUTO HAUS</h2>
      <div className="about-content">
        <div className="about-item">
          <img src="https://via.placeholder.com/300x200" alt="Más de 25 años de trayectoria" />
          <h3>Más de 25 años de trayectoria</h3>
          <p>Te ayudamos a elegir el mejor vehículo.</p>
        </div>
        <div className="about-item">
          <img src="https://via.placeholder.com/300x200" alt="Compramos tu Usado" />
          <h3>Compramos tu Usado</h3>
          <p>Consultá precios y beneficios.</p>
        </div>
        <div className="about-item">
          <img src="https://via.placeholder.com/300x200" alt="Conocé todos los beneficios" />
          <h3>Conocé todos los beneficios</h3>
          <p>Consultá los beneficios que tenemos para vos.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
