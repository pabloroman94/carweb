import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllFeaturedVehicles from './components/AllFeaturedVehicles';
import VehicleDetail from './components/VehicleDetail';
import ABMAutos from './components/ABMAutos';
import AboutUs from './components/AboutUs';
import SellYourCar from './components/SellYourCar'; // Importa el nuevo componente
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import CarouselABM from './components/CarouselABM'; // Importa el nuevo componente


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-featured-vehicles" element={<AllFeaturedVehicles />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/abm-autos" element={<ABMAutos />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sell-your-car" element={<SellYourCar />} /> {/* Nueva ruta */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/carousel-abm" element={<CarouselABM />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;
