import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedVehicles.css'; // Asegúrate de tener este archivo CSS

function FeaturedVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem('autos')) || [];
    setVehicles(storedVehicles);
  }, []);

  const handlePrevSlide = (index) => {
    const updatedVehicles = vehicles.map((vehicle, i) => {
      if (i === index) {
        const newSlide = vehicle.currentSlide === 0 ? vehicle.imageUrls.length - 1 : vehicle.currentSlide - 1;
        return { ...vehicle, currentSlide: newSlide };
      }
      return vehicle;
    });
    setVehicles(updatedVehicles);
  };

  const handleNextSlide = (index) => {
    const updatedVehicles = vehicles.map((vehicle, i) => {
      if (i === index) {
        const newSlide = vehicle.currentSlide === vehicle.imageUrls.length - 1 ? 0 : vehicle.currentSlide + 1;
        return { ...vehicle, currentSlide: newSlide };
      }
      return vehicle;
    });
    setVehicles(updatedVehicles);
  };

  return (
    <section className="featured-vehicles">
      <h2>Vehículos Destacados</h2>
      <div className="vehicle-cards">
        {vehicles.slice(0, 3).map((vehicle, index) => (
          <div className="vehicle-card" key={index}>
            <div className="carousel">
              <button onClick={() => handlePrevSlide(index)} className="carousel-button">❮</button>
              <img src={vehicle.imageUrls[vehicle.currentSlide]} alt={vehicle.modelo} className="vehicle-image" />
              <button onClick={() => handleNextSlide(index)} className="carousel-button">❯</button>
            </div>
            <h3>{vehicle.precio}</h3>
            <p>{vehicle.marca} {vehicle.modelo}</p>
            <p>{vehicle.descripcion}</p>
            <p>{vehicle.detalles}</p>
          </div>
        ))}
      </div>
      <Link to="/all-featured-vehicles" className="btn">
        Ver todos los destacados
      </Link>
    </section>
  );
}

export default FeaturedVehicles;
