import React, { useState, useEffect } from 'react';
import './SearchAndCarousel.css';

const agencies = [
  "Concesionaria 1",
  "Concesionaria 2",
  "Concesionaria 3",
  "Concesionaria 4",
  "Concesionaria 5",
  "Concesionaria 6",
  "Concesionaria 7",
  "Concesionaria 8",
  "Concesionaria 9"
];

function SearchAndCarousel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAgencies, setFilteredAgencies] = useState(agencies);
  const [carouselItems, setCarouselItems] = useState({});

  useEffect(() => {
    const storedCarouselItems = JSON.parse(localStorage.getItem('carouselItems')) || {};
    setCarouselItems(storedCarouselItems);
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setFilteredAgencies(
      agencies.filter((agency) =>
        agency.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSelect = (value) => {
    setSearchTerm(value);
    setFilteredAgencies(
      agencies.filter((agency) =>
        agency.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const moveSlide = (direction, trackId) => {
    const track = document.getElementById(trackId);
    const slides = track.querySelectorAll('.carousel-slide');
    const currentSlide = Array.from(slides).findIndex(
      (slide) => slide.style.transform === 'translateX(0%)'
    );
    let newSlideIndex = currentSlide + direction;
    if (newSlideIndex < 0) {
      newSlideIndex = slides.length - 1;
    } else if (newSlideIndex >= slides.length) {
      newSlideIndex = 0;
    }
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - newSlideIndex) * 100}%)`;
    });
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar concesionaria..."
        />
        {searchTerm && (
          <div id="autocomplete-list" className="autocomplete-suggestions">
            {filteredAgencies.map((agency) => (
              <div
                key={agency}
                className="autocomplete-suggestion"
                onMouseDown={() => handleSelect(agency)}
              >
                {agency}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="container">
        {filteredAgencies.map((agency, agencyIndex) => (
          <div className="card" key={agency} data-agency={agency}>
            <div className="carousel">
              <div className="carousel-track" id={`carousel-track-${agencyIndex}`}>
                <div className="carousel-slide" style={{ transform: `translateX(0%)` }}>
                  <img src="https://via.placeholder.com/200x150" alt={`${agency} - Imagen`} />
                </div>
              </div>
              <button
                className="carousel-button carousel-button--left"
                onClick={() => moveSlide(-1, `carousel-track-${agencyIndex}`)}
              >
                &lt;
              </button>
              <button
                className="carousel-button carousel-button--right"
                onClick={() => moveSlide(1, `carousel-track-${agencyIndex}`)}
              >
                &gt;
              </button>
            </div>
            <h3>{agency}</h3>
            <p>Detalles sobre la {agency.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchAndCarousel;
