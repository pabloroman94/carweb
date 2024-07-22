import React, { useState, useEffect } from 'react';

function ABMAutos() {
  const [autos, setAutos] = useState([]);
  const [editingAuto, setEditingAuto] = useState(null);
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    anio: '',
    kilometraje: '',
    precio: '',
    imageUrl: '',
    descripcion: '',
    detalles: ''
  });

  useEffect(() => {
    const storedAutos = JSON.parse(localStorage.getItem('autos')) || [];
    setAutos(storedAutos);
  }, []);

  useEffect(() => {
    localStorage.setItem('autos', JSON.stringify(autos));
  }, [autos]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAuto !== null) {
      const updatedAutos = autos.map((auto, index) =>
        index === editingAuto ? form : auto
      );
      setAutos(updatedAutos);
      setEditingAuto(null);
    } else {
      setAutos([...autos, form]);
    }
    setForm({
      marca: '',
      modelo: '',
      anio: '',
      kilometraje: '',
      precio: '',
      imageUrl: '',
      descripcion: '',
      detalles: ''
    });
  };

  const handleEdit = (index) => {
    setEditingAuto(index);
    setForm(autos[index]);
  };

  const handleDelete = (index) => {
    const updatedAutos = autos.filter((_, i) => i !== index);
    setAutos(updatedAutos);
  };

  return (
    <div style={styles.abmContainer}>
      <h1>Administración de Autos</h1>
      <form style={styles.abmForm} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Marca:
          <input type="text" name="marca" value={form.marca} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Modelo:
          <input type="text" name="modelo" value={form.modelo} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Año:
          <input type="number" name="anio" value={form.anio} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Kilometraje:
          <input type="number" name="kilometraje" value={form.kilometraje} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Precio:
          <input type="number" name="precio" value={form.precio} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          URL de la Imagen:
          <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleChange} style={styles.input} />
        </label>
        <label style={styles.label}>
          Descripción:
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} style={styles.textarea} />
        </label>
        <label style={styles.label}>
          Detalles:
          <textarea name="detalles" value={form.detalles} onChange={handleChange} style={styles.textarea} />
        </label>
        <button type="submit" style={styles.button}>Guardar</button>
      </form>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th>Kilometraje</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto, index) => (
            <tr key={index}>
              <td><img src={auto.imageUrl} alt={auto.modelo} style={styles.autoImage} /></td>
              <td>{auto.marca}</td>
              <td>{auto.modelo}</td>
              <td>{auto.anio}</td>
              <td>{auto.kilometraje}</td>
              <td>{auto.precio}</td>
              <td>{auto.descripcion}</td>
              <td>{auto.detalles}</td>
              <td>
                <button onClick={() => handleEdit(index)} style={styles.editButton}>Editar</button>
                <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  abmContainer: {
    padding: '20px'
  },
  abmForm: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  label: {
    marginBottom: '10px'
  },
  input: {
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%'
  },
  textarea: {
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    height: '100px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  autoImage: {
    width: '100px',
    height: 'auto'
  },
  editButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ABMAutos;
