import React, { useState, useEffect } from 'react';

function ABMAutos() {
  const [autos, setAutos] = useState([]);
  const [editingAuto, setEditingAuto] = useState(null);
  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    version: '',
    anio: '',
    motor: '',
    transmision: '',
    kilometraje: '',
    tipoCombustible: '',
    color: '',
    puertas: '',
    hidraulica: '',
    alarma: '',
    airbag: '',
    frenosABS: '',
    capacidadTanque: '',
    llantasAlineacion: '',
    controlTraccion: '',
    precio: '',
    imageUrls: ['', '', '', '', ''],
    descripcion: '',
    detalles: '',
    currentSlide: 0,
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

  const handleImageChange = (index, value) => {
    const newImageUrls = [...form.imageUrls];
    newImageUrls[index] = value;
    setForm({
      ...form,
      imageUrls: newImageUrls,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingAuto !== null) {
      const updatedAutos = autos.map((auto, index) =>
        index === editingAuto ? { ...form, currentSlide: 0 } : auto
      );
      setAutos(updatedAutos);
      setEditingAuto(null);
    } else {
      setAutos([...autos, { ...form, currentSlide: 0 }]);
    }
    setForm({
      marca: '',
      modelo: '',
      version: '',
      anio: '',
      motor: '',
      transmision: '',
      kilometraje: '',
      tipoCombustible: '',
      color: '',
      puertas: '',
      hidraulica: '',
      alarma: '',
      airbag: '',
      frenosABS: '',
      capacidadTanque: '',
      llantasAlineacion: '',
      controlTraccion: '',
      precio: '',
      imageUrls: ['', '', '', '', ''],
      descripcion: '',
      detalles: '',
      currentSlide: 0,
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

  const handlePrevSlide = (index) => {
    const updatedAutos = autos.map((auto, i) => {
      if (i === index) {
        const newSlide = auto.currentSlide === 0 ? auto.imageUrls.length - 1 : auto.currentSlide - 1;
        return { ...auto, currentSlide: newSlide };
      }
      return auto;
    });
    setAutos(updatedAutos);
  };

  const handleNextSlide = (index) => {
    const updatedAutos = autos.map((auto, i) => {
      if (i === index) {
        const newSlide = auto.currentSlide === auto.imageUrls.length - 1 ? 0 : auto.currentSlide + 1;
        return { ...auto, currentSlide: newSlide };
      }
      return auto;
    });
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
          Versión:
          <input type="text" name="version" value={form.version} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Año:
          <input type="number" name="anio" value={form.anio} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Motor:
          <input type="text" name="motor" value={form.motor} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Transmisión:
          <input type="text" name="transmision" value={form.transmision} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Kilometraje:
          <input type="number" name="kilometraje" value={form.kilometraje} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Tipo de Combustible:
          <input type="text" name="tipoCombustible" value={form.tipoCombustible} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Color:
          <input type="text" name="color" value={form.color} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Puertas:
          <input type="number" name="puertas" value={form.puertas} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Hidráulica:
          <input type="text" name="hidraulica" value={form.hidraulica} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Alarma:
          <input type="text" name="alarma" value={form.alarma} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Airbag:
          <input type="text" name="airbag" value={form.airbag} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Frenos ABS:
          <input type="text" name="frenosABS" value={form.frenosABS} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Capacidad del Tanque:
          <input type="number" name="capacidadTanque" value={form.capacidadTanque} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Llantas de Alineación:
          <input type="text" name="llantasAlineacion" value={form.llantasAlineacion} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Control de Tracción:
          <input type="text" name="controlTraccion" value={form.controlTraccion} onChange={handleChange} required style={styles.input} />
        </label>
        <label style={styles.label}>
          Precio:
          <input type="number" name="precio" value={form.precio} onChange={handleChange} required style={styles.input} />
        </label>
        {form.imageUrls.map((url, index) => (
          <div style={styles.imageInputContainer} key={index}>
            <label style={styles.label}>
              URL de la Imagen {index + 1}:
              <input
                type="text"
                value={url}
                onChange={(e) => handleImageChange(index, e.target.value)}
                style={styles.input}
              />
            </label>
            {url && <img src={url} alt={`Imagen ${index + 1}`} style={styles.thumbnail} />}
          </div>
        ))}
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
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Versión</th>
              <th>Año</th>
              <th>Motor</th>
              <th>Transmisión</th>
              <th>Kilometraje</th>
              <th>Combustible</th>
              <th>Color</th>
              <th>Puertas</th>
              <th>Hidráulica</th>
              <th>Alarma</th>
              <th>Airbag</th>
              <th>Frenos ABS</th>
              <th>Capacidad del Tanque</th>
              <th>Llantas de Alineación</th>
              <th>Control de Tracción</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Detalles</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {autos.map((auto, index) => (
              <tr key={index}>
                <td>
                  {auto.imageUrls && auto.imageUrls.length > 0 ? (
                    <div style={styles.carousel}>
                      <button onClick={() => handlePrevSlide(index)} style={styles.carouselButton}>❮</button>
                      <img src={auto.imageUrls[auto.currentSlide]} alt={auto.modelo} style={styles.autoImage} />
                      <button onClick={() => handleNextSlide(index)} style={styles.carouselButton}>❯</button>
                    </div>
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{auto.marca}</td>
                <td>{auto.modelo}</td>
                <td>{auto.version}</td>
                <td>{auto.anio}</td>
                <td>{auto.motor}</td>
                <td>{auto.transmision}</td>
                <td>{auto.kilometraje}</td>
                <td>{auto.tipoCombustible}</td>
                <td>{auto.color}</td>
                <td>{auto.puertas}</td>
                <td>{auto.hidraulica}</td>
                <td>{auto.alarma}</td>
                <td>{auto.airbag}</td>
                <td>{auto.frenosABS}</td>
                <td>{auto.capacidadTanque}</td>
                <td>{auto.llantasAlineacion}</td>
                <td>{auto.controlTraccion}</td>
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
    </div>
  );
}

const styles = {
  abmContainer: {
    padding: '20px',
  },
  abmForm: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    height: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  autoImage: {
    width: '100px',
    height: 'auto',
  },
  editButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  imageInputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  thumbnail: {
    width: '50px',
    height: 'auto',
    marginLeft: '10px',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
  },
  carouselButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5em',
    color: '#007bff',
  },
};

export default ABMAutos;
