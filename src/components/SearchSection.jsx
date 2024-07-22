import React from 'react';

function SearchSection() {
  return (
    <section className="search-section">
      <h2>BUSCÁ TU USADO</h2>
      <div className="search-bar">
        <select>
          <option>Marca</option>
          {/* Add more options here */}
        </select>
        <select>
          <option>Modelo</option>
          {/* Add more options here */}
        </select>
        <input type="text" placeholder="Precio Máximo" />
        <button className="btn">Buscar</button>
      </div>
    </section>
  );
}

export default SearchSection;
