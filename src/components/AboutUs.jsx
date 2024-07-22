import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './AboutUs.css'; // Asegúrate de crear este archivo CSS para los estilos

function AboutUs() {
  return (
    <div>
      <Header />
      <main>
        <section className="about-container">
          <div className="about-header">
            <h1>Más de 54 Años de Trayectoria</h1>
          </div>
          <div className="about-content">
            <img src="ruta_de_tu_imagen.jpg" alt="Grupo DARC" />
            <div className="about-text">
              <p>
                Somos una empresa con más de 54 años en el mercado orientada a satisfacer las expectativas del público más exigente.
              </p>
              <p>
                Usted encontrará en nuestras concesionarias oficiales la más amplia gama de modelos 0 KM y Usados. Dentro de las líneas que comercializamos, armamos con usted el plan de financiación que más le convenga para que pueda disfrutar su nuevo auto de la manera más simple.
              </p>
              <p>
                Nuestra misión consiste en trabajar, día a día, para llegar a ser el concesionario más prestigioso de Argentina, en base a la excelencia en nuestra calidad del servicio, el respeto a las comunidades con las que convivimos y el compromiso de nuestro equipo de colaboradores. Todo esto, a través de los pilares básicos de nuestra compañía: VISIÓN, DESAFÍO, EMPRENDIMIENTO Y PERSEVERANCIA.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
