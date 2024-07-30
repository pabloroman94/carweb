import React, { useState } from 'react';

function ABMConcesionarias() {
  const [agencies, setAgencies] = useState([]);
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    description: '',
    images: ['', '', '']
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('image')) {
      const index = parseInt(name.split('-')[2]);
      const newImages = [...form.images];
      newImages[index] = value;
      setForm({ ...form, images: newImages });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    const { name, address, phone, description, images } = form;
    if (name && address && phone) {
      setAgencies([...agencies, { name, address, phone, description, images: images.filter(img => img) }]);
      setForm({ name: '', address: '', phone: '', description: '', images: ['', '', ''] });
    }
  };

  const handleEdit = (index) => {
    const agency = agencies[index];
    setForm({ ...agency, images: [...agency.images, '', '', ''].slice(0, 3) });
    handleDelete(index);
  };

  const handleDelete = (index) => {
    setAgencies(agencies.filter((_, i) => i !== index));
  };

  return (
    <div className="form-container">
      <h2>Administración de Concesionarias</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre de la Concesionaria"
      />
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Dirección"
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Teléfono"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <input
        type="text"
        name="image-0"
        value={form.images[0]}
        onChange={handleChange}
        placeholder="URL de la Imagen 1"
      />
      <input
        type="text"
        name="image-1"
        value={form.images[1]}
        onChange={handleChange}
        placeholder="URL de la Imagen 2"
      />
      <input
        type="text"
        name="image-2"
        value={form.images[2]}
        onChange={handleChange}
        placeholder="URL de la Imagen 3"
      />
      <button onClick={handleSubmit}>Guardar</button>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Descripción</th>
              <th>Imágenes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency, index) => (
              <tr key={index}>
                <td>{agency.name}</td>
                <td>{agency.address}</td>
                <td>{agency.phone}</td>
                <td>{agency.description}</td>
                <td>
                  {agency.images.map((img, i) => (
                    <img key={i} src={img} alt={agency.name} style={{ width: '50px', height: '50px' }} />
                  ))}
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => handleDelete(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ABMConcesionarias;
