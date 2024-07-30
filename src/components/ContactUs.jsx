import React, { useEffect, useState } from 'react';
import './ContactUs.css'; // Asegúrate de tener este archivo CSS

function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    titulo: 'Dónde encontrarnos',
    ubicaciones: [
      {
        nombre: 'Devoto',
        direccion: 'Av. San Martín 6800',
        ciudad: 'Capital Federal - Villa Devoto',
        telefono: '1123577896',
        horario: 'Lunes a Viernes de 09:00 a 19:00 Hs. Sábados de 10:00 a 19:00 Hs.',
      },
    ],
  });

  useEffect(() => {
    try {
      const storedContactInfo = JSON.parse(localStorage.getItem('contactInfo'));
      if (storedContactInfo) {
        setContactInfo(storedContactInfo);
      }
    } catch (error) {
      console.error('Error parsing contactInfo from localStorage', error);
      // Restablecer contactInfo en localStorage con valor por defecto si hay un error
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    }
  }, []);

  return (
    <div>
      <main>
        <section className="contact-container">
          <div className="contact-form">
            <h2>Contáctenos</h2>
            <label htmlFor="motivo">Seleccioná el motivo de tu contacto</label>
            <select id="motivo" name="motivo">
              <option value="">SELECCIONÁ</option>
              <option value="consulta">Consulta</option>
              <option value="venta">Venta</option>
              <option value="soporte">Soporte</option>
            </select>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" name="telefono" placeholder="Teléfono" />
            <label htmlFor="email">E-Mail</label>
            <input type="email" id="email" name="email" placeholder="E-Mail" />
            <label htmlFor="detalle">Detalle de su consulta (máx. 250 caracteres)</label>
            <textarea id="detalle" name="detalle" placeholder="Detalle de su consulta"></textarea>
            <div className="captcha">
              <input type="checkbox" id="captcha" name="captcha" />
              <label htmlFor="captcha">No soy un robot</label>
            </div>
            <button type="submit">Enviar solicitud</button>
          </div>
          <div className="contact-info">
            <h2>{contactInfo.titulo}</h2>
            {contactInfo.ubicaciones.map((ubicacion, index) => (
              <div key={index} className="ubicacion">
                <p><strong>{ubicacion.nombre}</strong></p>
                <p>{ubicacion.direccion}</p>
                <p>{ubicacion.ciudad}</p>
                <p>{ubicacion.telefono}</p>
                <p>{ubicacion.horario}</p>
              </div>
            ))}
            <a href="#">Ver Ubicaciones y Teléfonos</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
