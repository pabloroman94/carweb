import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './ContactUs.css'; // Asegúrate de crear este archivo CSS para los estilos

function ContactUs() {
  return (
    <div>
      <Header />
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
            <h2>Dónde encontrarnos</h2>
            <p><strong>DEVOTO</strong></p>
            <p>Av. San Martín 6800</p>
            <p>Capital Federal - Villa Devoto</p>
            <p>Tel: 1123577896</p>
            <p>Horario de Atención: Lunes a Viernes de 09:00 a 19:00 Hs. Sábados de 10:00 a 19:00 Hs.</p>
            <a href="#">Ver Ubicaciones y Teléfonos</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
