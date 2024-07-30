import React, { useState, useEffect } from 'react';
import './AboutUsABM.css';

function AboutUsABM() {
  const [formData, setFormData] = useState({
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
      setFormData(storedAboutData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('paragraph')) {
      const index = parseInt(name.split('-')[1], 10);
      const newParagraphs = [...formData.paragraphs];
      newParagraphs[index] = value;
      setFormData({ ...formData, paragraphs: newParagraphs });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    localStorage.setItem('aboutData', JSON.stringify(formData));
    alert('Datos guardados correctamente');
  };

  return (
    <div className="about-us-abm">
      <h2>Administrar About Us</h2>
      <form className="about-us-form">
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            name="header"
            value={formData.header}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>URL de la Imagen:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {formData.paragraphs.map((paragraph, index) => (
          <div className="form-group" key={index}>
            <label>Párrafo {index + 1}:</label>
            <textarea
              name={`paragraph-${index}`}
              value={paragraph}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        ))}
        <button type="button" onClick={handleSave} className="btn-save">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default AboutUsABM;
