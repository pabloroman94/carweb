import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from './HeroCarousel';
import SearchAndCarousel from './SearchAndCarousel';
import FeaturedVehicles from './FeaturedVehicles';
import About from './About';

function Home() {
  useEffect(() => {
    const carouselItems = {
        'Autonova Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Motorspace Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Carzona Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Vehimundo Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Autoparadise Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Rodadictos Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Automax Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Motorealm Pinamar': [
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500',
          'https://via.placeholder.com/1200x500'
        ],
        'Vehistars Pinamar': [
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
