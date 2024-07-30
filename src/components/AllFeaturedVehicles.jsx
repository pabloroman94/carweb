import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllFeaturedVehicles.css';

function AllFeaturedVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const storedVehicles = JSON.parse(localStorage.getItem('autos')) || [];
    setVehicles(storedVehicles);
    // Initialize current slide index for each vehicle
    const initialSlide = {};
    storedVehicles.forEach((_, index) => {
      initialSlide[index] = 0;
    });
    setCurrentSlide(initialSlide);
  }, []);

  const handleCardClick = (vehicle) => {
    navigate(`/vehicle/${vehicle.marca}-${vehicle.modelo}`, { state: { vehicle } });
  };

  const handlePrevSlide = (index) => {
    setCurrentSlide((prevState) => ({
      ...prevState,
      [index]: prevState[index] === 0 ? vehicles[index].imageUrls.length - 1 : prevState[index] - 1,
    }));
  };

  const handleNextSlide = (index) => {
    setCurrentSlide((prevState) => ({
      ...prevState,
      [index]: prevState[index] === vehicles[index].imageUrls.length - 1 ? 0 : prevState[index] + 1,
    }));
  };

  return (
    <div>
      <section className="featured-vehicles">
        <h2>Usados Destacados</h2>
        <p>Estas son unidades seleccionadas especialmente por su estado, precio y condiciones especiales.</p>
        <div className="vehicle-cards">
          {vehicles.map((vehicle, index) => (
            <div className="vehicle-card" key={index} onClick={() => handleCardClick(vehicle)}>
              {vehicle.imageUrls && vehicle.imageUrls.length > 0 ? (
                <div className="carousel">
                  <button onClick={(e) => { e.stopPropagation(); handlePrevSlide(index); }}>❮</button>
                  <img src={vehicle.imageUrls[currentSlide[index] || 0]} alt={vehicle.modelo} />
                  <button onClick={(e) => { e.stopPropagation(); handleNextSlide(index); }}>❯</button>
                </div>
              ) : (
                <img src={vehicle.imageUrl} alt={vehicle.modelo} />
              )}
              <h3>{vehicle.precio}</h3>
              <p>{vehicle.marca} {vehicle.modelo}</p>
              <p>{vehicle.descripcion}</p>
              <p>{vehicle.detalles}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllFeaturedVehicles;
