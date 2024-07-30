import React, { useState } from 'react';
import './SellYourCar.css';

const SellYourCar = () => {
  const [kms, setKms] = useState(0);

  return (
    <div>
      <main>
        <section className="quote-section">
          <h2>Cotizá tu usado</h2>
          <p>Ingresá los datos del vehículo que te gustaría cotizar</p>
          <form>
            <div className="form-group">
              <label htmlFor="marca">Marca</label>
              <select id="marca" name="marca">
                <option value="">SELECCIONÁ LA MARCA</option>
                <option value="marca1">Marca 1</option>
                <option value="marca2">Marca 2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="modelo">Modelo</label>
              <select id="modelo" name="modelo">
                <option value="">Modelo</option>
                <option value="modelo1">Modelo 1</option>
                <option value="modelo2">Modelo 2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="anio">Año</label>
              <input type="number" id="anio" name="anio" />
            </div>
            <div className="form-group">
              <label htmlFor="version">Versión</label>
              <select id="version" name="version">
                <option value="">Versión</option>
                <option value="version1">Versión 1</option>
                <option value="version2">Versión 2</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="kms">Kms</label>
              <input
                type="range"
                id="kms"
                name="kms"
                min="0"
                max="500000"
                step="1000"
                value={kms}
                onChange={(e) => setKms(e.target.value)}
              />
              <output>{kms}</output>
            </div>
            <button type="submit">Continuar</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SellYourCar;
