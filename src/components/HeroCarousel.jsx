import React from 'react';

function HeroCarousel() {
  return (
    <section className="hero">
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500')" }}>
          <div className="hero-content">
            <h2>Seguros</h2>
            <p>Pensando en tu tranquilidad</p>
            <a href="#" className="btn">Conocé más</a>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500')" }}>
          <div className="hero-content">
            <h2>Usados Seleccionados</h2>
            <p>Más de 200 unidades en Stock</p>
            <a href="#" className="btn">Conocé más</a>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500')" }}>
          <div className="hero-content">
            <h2>Encuentra tu Auto Ideal</h2>
            <p>Con la mejor financiación</p>
            <a href="#" className="btn">Conocé más</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
