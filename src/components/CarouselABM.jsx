import React, { useState, useEffect } from 'react';
import HeroCarousel from './HeroCarousel';

function CarouselABM() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [form, setForm] = useState({ id: null, title: '', description: '', imageUrl: '' });

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('carouselItems')) || [];
    setCarouselItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('carouselItems', JSON.stringify(carouselItems));
  }, [carouselItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      setCarouselItems([...carouselItems, { ...form, id: Date.now() }]);
    } else {
      setCarouselItems(
        carouselItems.map((item) =>
          item.id === form.id ? { ...form } : item
        )
      );
    }
    setForm({ id: null, title: '', description: '', imageUrl: '' });
  };

  const handleEdit = (id) => {
    const item = carouselItems.find((item) => item.id === id);
    setForm(item);
  };

  const handleDelete = (id) => {
    setCarouselItems(carouselItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Administrar Carrusel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título"
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          placeholder="URL de la Imagen"
          required
        />
        <button type="submit">{form.id === null ? 'Agregar' : 'Modificar'}</button>
      </form>

      <h3>Elementos del Carrusel</h3>
      <ul>
        {carouselItems.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={item.imageUrl} alt={item.title} style={{ width: '100px', height: '50px' }} />
            <button onClick={() => handleEdit(item.id)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarouselABM;