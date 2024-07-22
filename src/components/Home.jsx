import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import HeroCarousel from './HeroCarousel';
import SearchSection from './SearchSection';
import FeaturedVehicles from './FeaturedVehicles';
import About from './About';
import Footer from './Footer';

function Home() {
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
