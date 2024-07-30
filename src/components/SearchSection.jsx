import React, { useState, useEffect } from 'react';

const brands = ['Fiat', 'Chevrolet', 'Renault', 'Volkswagen', 'Peugeot', 'Citroën'];
const models = {
  Fiat: ['Strada', 'Siena'],
  Chevrolet: ['Trailblazer', 'Spin'],
  Renault: ['Duster', 'Stepway'],
  Volkswagen: ['Suran', 'Saveiro'],
  Peugeot: ['208'],
  Citroën: ['Berlingo'],
};

function SearchSection({ onSearch }) {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    const storedAutos = JSON.parse(localStorage.getItem('autos')) || [];
    setAutos(storedAutos);
  }, []);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedModel('');
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearch = () => {
    const criteria = {
      brand: selectedBrand,
      model: selectedModel,
      maxPrice: maxPrice,
    };
    const filteredAutos = autos.filter(auto => {
      return (
        (criteria.brand ? auto.marca === criteria.brand : true) &&
        (criteria.model ? auto.modelo === criteria.model : true) &&
        (criteria.maxPrice ? parseFloat(auto.precio) <= parseFloat(criteria.maxPrice) : true)
      );
    });
    onSearch(filteredAutos);
  };

  return (
    <section className="search-section">
      <h2>BUSCÁ TU USADO</h2>
      <div className="search-bar">
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">Marca</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select value={selectedModel} onChange={handleModelChange} disabled={!selectedBrand}>
          <option value="">Modelo</option>
          {selectedBrand &&
            models[selectedBrand].map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
        </select>
        <input
          type="text"
          placeholder="Precio Máximo"
          value={maxPrice}
          onChange={handlePriceChange}
        />
        <button className="btn" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </section>
  );
}

export default SearchSection;
