import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './VehicleDetail.css';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const storedAutos = JSON.parse(localStorage.getItem('autos')) || [];
    const selectedVehicle = storedAutos.find(v => `${v.marca}-${v.modelo}` === id);
    setVehicle(selectedVehicle);
  }, [id]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  if (!vehicle) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Header />
      <main>
        <section className="vehicle-detail">
          <div className="vehicle-image">
            <div className="carousel-container">
              <div className="carousel-slide">
                <img src={vehicle.imageUrl} alt={vehicle.modelo} />
              </div>
              <a className="prev" onClick={() => moveSlide(-1)}>&#10094;</a>
              <a className="next" onClick={() => moveSlide(1)}>&#10095;</a>
            </div>
          </div>
          <div className="vehicle-info">
            <h2>{vehicle.marca} {vehicle.modelo}</h2>
            <p><strong>Año:</strong> {vehicle.anio} | <strong>Kms:</strong> {vehicle.kilometraje}</p>
            <h3>${vehicle.precio}</h3>
            <p><strong>Combustible:</strong> {vehicle.combustible}</p>
            <p><strong>Ubicación:</strong> {vehicle.ubicacion}</p>
            <p><strong>Marca:</strong> {vehicle.marca}</p>
            <p><strong>Modelo:</strong> {vehicle.modelo}</p>
            <p><strong>Versión:</strong> {vehicle.version}</p>
            <p><strong>Segmento:</strong> {vehicle.segmento}</p>
            <p><strong>Color:</strong> {vehicle.color}</p>
            <p><strong>Comentarios:</strong> {vehicle.comentarios}</p>
            <p><strong>Forma de pago:</strong> {vehicle.formaPago}</p>
            <button className="info-button" onClick={openModal}>Solicitar más información</button>
          </div>
        </section>
        <section className="similar-vehicles">
          <h3>Usados similares en precio</h3>
          <table>
            <thead>
              <tr>
                <th>Marca y Modelo</th>
                <th>Año</th>
                <th>Kilometraje</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renault Duster</td>
                <td>2018</td>
                <td>85.022</td>
                <td>$ 18.650.000</td>
              </tr>
              <tr>
                <td>Renault Captur</td>
                <td>2018</td>
                <td>33.948</td>
                <td>$ 19.575.000</td>
              </tr>
              <tr>
                <td>Citroen C4 Cactus</td>
                <td>2022</td>
                <td>72.134</td>
                <td>$ 19.900.000</td>
              </tr>
            </tbody>
          </table>
          <h3>Usados similares en modelo</h3>
          <table>
            <thead>
              <tr>
                <th>Marca y Modelo</th>
                <th>Año</th>
                <th>Kilometraje</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Volkswagen Suran</td>
                <td>2019</td>
                <td>125.000</td>
                <td>$ 15.000.000</td>
              </tr>
              <tr>
                <td>Renault Sandero</td>
                <td>2018</td>
                <td>120.000</td>
                <td>$ 15.000.000</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer>
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto</h3>
            <p>Córdoba Capital: Av. Colón 4851 - Córdoba Capital (Córdoba) - (0800) 345-0439</p>
            <p>Río Tercero: Hnos. Apez 481 - L.S.M - Río Tercero (Córdoba) - (0800) 345-0439</p>
            <p>Villa Carlos Paz: Av. Sabattini 257 - Villa Carlos Paz (Córdoba) - (03541) 1568-5031</p>
            <p>San Francisco: Av. Mitre 100 - San Francisco (Córdoba) - (0810) 555-0321</p>
          </div>
          <div className="social-media">
            <h3>Redes Sociales</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
      {modalOpen && (
        <div id="myModal" className="modal" style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Solicitar más información</h3>
              <span className="close-btn" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
              <form className="contact-form">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="surname">Apellido</label>
                <input type="text" id="surname" name="surname" />
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="contact_time">Horario de contacto</label>
                <input type="text" id="contact_time" name="contact_time" />
                <label htmlFor="comments">Comentarios</label>
                <textarea id="comments" name="comments"></textarea>
                <div className="captcha">
                  <input type="checkbox" id="captcha" name="captcha" />
                  <label htmlFor="captcha">No soy un robot</label>
                </div>
                <button type="submit">Enviar solicitud</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetail;
