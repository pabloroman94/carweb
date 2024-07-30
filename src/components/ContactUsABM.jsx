import React, { useState, useEffect } from 'react';
import './ContactUs.css'; // Asegúrate de tener este archivo CSS

function ContactUsABM() {
  const [form, setForm] = useState({
    motivo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    detalle: '',
    captcha: false,
  });

  const [contactInfo, setContactInfo] = useState({
    titulo: 'Dónde encontrarnos',
    ubicaciones: [
      {
        nombre: 'DEVOTO',
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
      localStorage.removeItem('contactInfo'); // Borrar datos inválidos
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleContactInfoChange = (e, index) => {
    const { name, value } = e.target;
    const updatedUbicaciones = [...contactInfo.ubicaciones];
    updatedUbicaciones[index][name] = value;
    const updatedContactInfo = {
      ...contactInfo,
      ubicaciones: updatedUbicaciones,
    };
    setContactInfo(updatedContactInfo);
    localStorage.setItem('contactInfo', JSON.stringify(updatedContactInfo));
  };

  const addUbicacion = () => {
    const updatedContactInfo = {
      ...contactInfo,
      ubicaciones: [
        ...contactInfo.ubicaciones,
        {
          nombre: '',
          direccion: '',
          ciudad: '',
          telefono: '',
          horario: '',
        },
      ],
    };
    setContactInfo(updatedContactInfo);
    localStorage.setItem('contactInfo', JSON.stringify(updatedContactInfo));
  };

  const removeUbicacion = (index) => {
    const updatedUbicaciones = contactInfo.ubicaciones.filter((_, i) => i !== index);
    const updatedContactInfo = {
      ...contactInfo,
      ubicaciones: updatedUbicaciones,
    };
    setContactInfo(updatedContactInfo);
    localStorage.setItem('contactInfo', JSON.stringify(updatedContactInfo));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
  };

  return (
    <div>
      <main>
        <section className="contact-container">
          <div className="contact-form">
            <h2>Contáctenos</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="motivo">Seleccioná el motivo de tu contacto</label>
              <select id="motivo" name="motivo" value={form.motivo} onChange={handleChange}>
                <option value="">SELECCIONÁ</option>
                <option value="consulta">Consulta</option>
                <option value="venta">Venta</option>
                <option value="soporte">Soporte</option>
              </select>
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
              <label htmlFor="apellido">Apellido</label>
              <input type="text" id="apellido" name="apellido" value={form.apellido} onChange={handleChange} placeholder="Apellido" />
              <label htmlFor="telefono">Teléfono</label>
              <input type="text" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" />
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="E-Mail" />
              <label htmlFor="detalle">Detalle de su consulta (máx. 250 caracteres)</label>
              <textarea id="detalle" name="detalle" value={form.detalle} onChange={handleChange} placeholder="Detalle de su consulta"></textarea>
              <div className="captcha">
                <input type="checkbox" id="captcha" name="captcha" checked={form.captcha} onChange={handleChange} />
                <label htmlFor="captcha">No soy un robot</label>
              </div>
              <button type="submit">Enviar solicitud</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>{contactInfo.titulo}</h2>
            {contactInfo.ubicaciones.map((ubicacion, index) => (
              <div key={index} className="ubicacion">
                <input
                  type="text"
                  name="nombre"
                  value={ubicacion.nombre}
                  onChange={(e) => handleContactInfoChange(e, index)}
                  placeholder="Nombre de la ubicación"
                />
                <input
                  type="text"
                  name="direccion"
                  value={ubicacion.direccion}
                  onChange={(e) => handleContactInfoChange(e, index)}
                  placeholder="Dirección"
                />
                <input
                  type="text"
                  name="ciudad"
                  value={ubicacion.ciudad}
                  onChange={(e) => handleContactInfoChange(e, index)}
                  placeholder="Ciudad"
                />
                <input
                  type="text"
                  name="telefono"
                  value={ubicacion.telefono}
                  onChange={(e) => handleContactInfoChange(e, index)}
                  placeholder="Teléfono"
                />
                <input
                  type="text"
                  name="horario"
                  value={ubicacion.horario}
                  onChange={(e) => handleContactInfoChange(e, index)}
                  placeholder="Horario"
                />
                <button type="button" onClick={() => removeUbicacion(index)}>Eliminar</button>
              </div>
            ))}
            <button type="button" onClick={addUbicacion}>Agregar Ubicación</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUsABM;
