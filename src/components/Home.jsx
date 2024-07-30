import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import SearchAndCarousel from './SearchAndCarousel';
import FeaturedVehicles from './FeaturedVehicles';
import About from './About';

function Home() {
  useEffect(() => {
    const carouselItems = {
      'Concesionaria 1': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 2': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 3': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 4': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 5': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 6': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 7': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 8': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ],
      'Concesionaria 9': [
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500',
        'https://via.placeholder.com/1200x500'
      ]
    };

    if (!localStorage.getItem('carouselItems')) {
      localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
    }
  }, []);

  return (
    <div>
      <HeroCarousel />
      <SearchAndCarousel />
      <FeaturedVehicles />
      <About />
      <nav>
        <ul>
          <li><Link to="/all-featured-vehicles">Ver Vehículos Destacados</Link></li>
          <li><Link to="/abm-autos">Administrar Autos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
