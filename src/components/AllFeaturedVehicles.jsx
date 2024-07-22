import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './AllFeaturedVehicles.css';

function AllFeaturedVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem('autos')) || [];
    setVehicles(storedVehicles);
  }, []);

  const handleCardClick = (vehicle) => {
    navigate(`/vehicle/${vehicle.marca}-${vehicle.modelo}`, { state: { vehicle } });
  };

  return (
    <div>
      <Header />
      <section className="featured-vehicles">
        <h2>Usados Destacados</h2>
        <p>Estas son unidades seleccionadas especialmente por su estado, precio y condiciones especiales.</p>
        <div className="vehicle-cards">
          {vehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index} onClick={() => handleCardClick(vehicle)}>
              <img src={vehicle.imageUrl} alt={vehicle.modelo} />
              <h3>{vehicle.precio}</h3>
              <p>{vehicle.marca} {vehicle.modelo}</p>
              <p>{vehicle.descripcion}</p>
              <p>{vehicle.detalles}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AllFeaturedVehicles;
