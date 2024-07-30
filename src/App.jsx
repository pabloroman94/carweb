import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AllFeaturedVehicles from './components/AllFeaturedVehicles';
import VehicleDetail from './components/VehicleDetail';
import ABMAutos from './components/ABMAutos';
import AboutUs from './components/AboutUs';
import SellYourCar from './components/SellYourCar';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import CarouselABM from './components/CarouselABM';
import Dashboard from './components/AdminDashboard';
import FooterABM from './components/FooterABM';
import ContactUsABM from './components/ContactUsABM';
import AboutUsABM from './components/AboutUsABM';
import ABMConcesionarias from './components/ABMConcesionarias'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-featured-vehicles" element={<AllFeaturedVehicles />} />
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            <Route path="/abm-autos" element={<ABMAutos />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sell-your-car" element={<SellYourCar />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/carousel-abm" element={<CarouselABM />} />
            <Route path="/footer-abm" element={<FooterABM />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/contact-us-abm" element={<ContactUsABM />} />
            <Route path="/about-us-abm" element={<AboutUsABM />} />
            <Route path="/abm-concesionarias" element={<ABMConcesionarias />} /> {/* Nueva ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
