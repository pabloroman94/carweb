import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const defaultCarouselItems = [
  {
    id: 1,
    title: 'Autonova Pinamar',
    description: 'La mejor concesionaria de Pinamar',
    imageUrl: 'https://usadosautohaus.com/_red/autohaususados/userfiles/images/banners/01.webp'
  },
  {
    id: 2,
    title: 'Motorspace Pinamar',
    description: 'Concesionaria de autos de lujo',
    imageUrl: 'https://usadosautohaus.com/_red/autohaususados/userfiles/images/banners/02.webp'
  },
  {
    id: 3,
    title: 'Carzona Pinamar',
    description: 'Gran variedad de autos',
    imageUrl: 'https://usadosautohaus.com/_red/autohaususados/userfiles/images/banners/03.webp'
  }
];

function HeroCarousel() {
  const [carouselItems, setCarouselItems] = useState(() => {
    const storedCarouselItems = JSON.parse(localStorage.getItem('carouselItems'));
    return storedCarouselItems || defaultCarouselItems;
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  if (carouselItems.length === 0) {
    return <div>No hay elementos en el carrusel.</div>;
  }

  return (
    <section className="hero">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="hero-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href="#" className="btn">Conocé más</a>
            </div>
          </div>
        ))}
      </div>
      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </section>
  );
}

export default HeroCarousel;
