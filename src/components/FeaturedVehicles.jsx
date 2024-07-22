import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FeaturedVehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => setVehicles(data.vehicles));
  }, []);

  return (
    <section className="featured-vehicles">
      <h2>Vehículos Destacados</h2>
      <div className="vehicle-cards">
        {vehicles.slice(0, 3).map(vehicle => (
          <div className="vehicle-card" key={vehicle.id}>
            <img src={vehicle.image} alt={vehicle.name} />
            <h3>{vehicle.price}</h3>
            <p>{vehicle.description}</p>
            <p>{vehicle.details}</p>
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
