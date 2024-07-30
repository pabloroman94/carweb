import React, { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs() {
  const [aboutData, setAboutData] = useState({
    header: 'Más de 54 Años de Trayectoria',
    imageUrl: 'ruta_de_tu_imagen.jpg',
    paragraphs: [
      'Somos una empresa con más de 54 años en el mercado orientada a satisfacer las expectativas del público más exigente.',
      'Usted encontrará en nuestras concesionarias oficiales la más amplia gama de modelos 0 KM y Usados. Dentro de las líneas que comercializamos, armamos con usted el plan de financiación que más le convenga para que pueda disfrutar su nuevo auto de la manera más simple.',
      'Nuestra misión consiste en trabajar, día a día, para llegar a ser el concesionario más prestigioso de Argentina, en base a la excelencia en nuestra calidad del servicio, el respeto a las comunidades con las que convivimos y el compromiso de nuestro equipo de colaboradores. Todo esto, a través de los pilares básicos de nuestra compañía: VISIÓN, DESAFÍO, EMPRENDIMIENTO Y PERSEVERANCIA.'
    ]
  });

  useEffect(() => {
    const storedAboutData = JSON.parse(localStorage.getItem('aboutData'));
    if (storedAboutData) {
      setAboutData(storedAboutData);
    }
  }, []);

  return (
    <div>
      <main>
        <section className="about-container">
          <div className="about-header">
            <h1>{aboutData.header}</h1>
          </div>
          <div className="about-content">
            <img src={aboutData.imageUrl} alt="Grupo DARC" />
            <div className="about-text">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
