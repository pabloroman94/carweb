import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import SearchSection from './SearchSection';
import FeaturedVehicles from './FeaturedVehicles';
import About from './About';
import Footer from './Footer';

function Home() {
  useEffect(() => {
    const carouselItems = [
      {
        id: 1,
        title: 'Seguros',
        description: 'Pensando en tu tranquilidad',
        imageUrl: 'https://via.placeholder.com/1200x500',
      },
      {
        id: 2,
        title: 'Usados Seleccionados',
        description: 'Más de 200 unidades en Stock',
        imageUrl: 'https://via.placeholder.com/1200x500',
      },
      {
        id: 3,
        title: 'Encuentra tu Auto Ideal',
        description: 'Con la mejor financiación',
        imageUrl: 'https://via.placeholder.com/1200x500',
      },
    ];

    if (!localStorage.getItem('carouselItems')) {
      localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
    }
  }, []);

  return (
    <div>
      <Header />
      <HeroCarousel />
      <SearchSection />
      <FeaturedVehicles />
      <About />
      <Footer />
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
