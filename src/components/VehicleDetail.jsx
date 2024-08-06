import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './VehicleDetail.css';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const qrRef = React.createRef();

  useEffect(() => {
    const storedAutos = JSON.parse(localStorage.getItem('autos')) || [];
    const selectedVehicle = storedAutos.find(v => `${v.marca}-${v.modelo}` === id);
    setVehicle(selectedVehicle);
  }, [id]);

  const moveSlide = (direction) => {
    if (vehicle && vehicle.imageUrls) {
      let newSlide = currentSlide + direction;
      if (newSlide < 0) newSlide = vehicle.imageUrls.length - 1;
      if (newSlide >= vehicle.imageUrls.length) newSlide = 0;
      setCurrentSlide(newSlide);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr_code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  if (!vehicle) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <main>
        <section className="vehicle-detail">
          <div className="vehicle-image">
            <div className="carousel-container">
              {vehicle.imageUrls && vehicle.imageUrls.length > 0 ? (
                <div className="carousel">
                  <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
                  <img src={vehicle.imageUrls[currentSlide]} alt={vehicle.modelo} />
                  <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
                </div>
              ) : (
                <img src={vehicle.imageUrl} alt={vehicle.modelo} />
              )}
            </div>
          </div>
          <div className="vehicle-info">
            <h2>{vehicle.marca} {vehicle.modelo}</h2>
            <p><strong>Año:</strong> {vehicle.anio} | <strong>Kms:</strong> {vehicle.kilometraje}</p>
            <h3>${vehicle.precio}</h3>
            <p><strong>Motor:</strong> {vehicle.motor}</p>
            <p><strong>Transmisión:</strong> {vehicle.transmision}</p>
            <p><strong>Combustible:</strong> {vehicle.tipoCombustible}</p>
            <p><strong>Color:</strong> {vehicle.color}</p>
            <p><strong>Puertas:</strong> {vehicle.puertas}</p>
            <p><strong>Hidráulica:</strong> {vehicle.hidraulica}</p>
            <p><strong>Alarma:</strong> {vehicle.alarma}</p>
            <p><strong>Airbag:</strong> {vehicle.airbag}</p>
            <p><strong>Frenos ABS:</strong> {vehicle.frenosABS}</p>
            <p><strong>Capacidad del Tanque:</strong> {vehicle.capacidadTanque} litros</p>
            <p><strong>Llantas de Alineación:</strong> {vehicle.llantasAlineacion}</p>
            <p><strong>Control de Tracción:</strong> {vehicle.controlTraccion}</p>
            <p><strong>Descripción:</strong> {vehicle.descripcion}</p>
            <p><strong>Detalles:</strong> {vehicle.detalles}</p>
            <button className="info-button" onClick={openModal}>Solicitar más información</button>
            <div className="qr-code" ref={qrRef}>
              <QRCode value={window.location.href} size={128} />
              <button onClick={downloadQRCode}>Descargar QR</button>
            </div>
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
