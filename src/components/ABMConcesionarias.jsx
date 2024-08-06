import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import './ABMConcesionarias.css';

const ABMConcesionarias = () => {
  const [sucursales, setSucursales] = useState([]);
  const [currentSucursal, setCurrentSucursal] = useState(null);
  const [form, setForm] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    codigoPostal: '',
    telefono: '',
    email: '',
    fechaApertura: '',
    gerenteId: '',
    foto: null
  });
  const [qrData, setQrData] = useState('');
  const qrCodeRef = useRef();

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'foto') {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [id]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = { ...form };
    if (form.foto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newForm.foto = reader.result;
        saveSucursal(newForm);
      };
      reader.readAsDataURL(form.foto);
    } else {
      saveSucursal(newForm);
    }
  };

  const saveSucursal = (newForm) => {
    if (currentSucursal === null) {
      setSucursales([...sucursales, newForm]);
    } else {
      const updatedSucursales = [...sucursales];
      updatedSucursales[currentSucursal] = newForm;
      setSucursales(updatedSucursales);
    }
    clearForm();
  };

  const handleEdit = (index) => {
    setCurrentSucursal(index);
    setForm(sucursales[index]);
  };

  const handleDelete = (index) => {
    setSucursales(sucursales.filter((_, i) => i !== index));
    clearForm();
  };

  const clearForm = () => {
    setForm({
      nombre: '',
      direccion: '',
      ciudad: '',
      provincia: '',
      codigoPostal: '',
      telefono: '',
      email: '',
      fechaApertura: '',
      gerenteId: '',
      foto: null
    });
    setCurrentSucursal(null);
    setQrData('');
  };

  const generateQRCode = (index) => {
    const sucursal = sucursales[index];
    const data = `Nombre: ${sucursal.nombre}\nDirección: ${sucursal.direccion}\nCiudad: ${sucursal.ciudad}\nProvincia: ${sucursal.provincia}\nTeléfono: ${sucursal.telefono}\nEmail: ${sucursal.email}`;
    setQrData(data);
  };

  const downloadQRCode = (index) => {
    const canvas = document.getElementById(`qrCanvas-${index}`);
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `qr_code_${index}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="abm-container">
      <h1>Gestión de Sucursales</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={form.nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" value={form.direccion} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" id="ciudad" value={form.ciudad} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="provincia">Provincia:</label>
          <input type="text" id="provincia" value={form.provincia} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input type="text" id="codigoPostal" value={form.codigoPostal} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="text" id="telefono" value={form.telefono} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fechaApertura">Fecha de Apertura:</label>
          <input type="date" id="fechaApertura" value={form.fechaApertura} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gerenteId">Gerente ID:</label>
          <input type="number" id="gerenteId" value={form.gerenteId} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="foto">Foto:</label>
          <input type="file" id="foto" onChange={handleChange} />
        </div>
        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={clearForm}>Limpiar</button>
          {currentSucursal !== null && (
            <button type="button" onClick={() => handleDelete(currentSucursal)}>Eliminar</button>
          )}
        </div>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Ciudad</th>
              <th>Provincia</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Foto</th>
              <th>QR</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sucursales.map((sucursal, index) => (
              <tr key={index}>
                <td>{sucursal.nombre}</td>
                <td>{sucursal.direccion}</td>
                <td>{sucursal.ciudad}</td>
                <td>{sucursal.provincia}</td>
                <td>{sucursal.telefono}</td>
                <td>{sucursal.email}</td>
                <td>
                  {sucursal.foto && (
                    <img src={sucursal.foto} alt="Foto" width="50" height="50" />
                  )}
                </td>
                <td>
                  <div className="qr-code">
                    <QRCode id={`qrCanvas-${index}`} value={`Nombre: ${sucursal.nombre}\nDirección: ${sucursal.direccion}\nCiudad: ${sucursal.ciudad}\nProvincia: ${sucursal.provincia}\nTeléfono: ${sucursal.telefono}\nEmail: ${sucursal.email}`} size={64} />
                    <button onClick={() => downloadQRCode(index)}>Descargar</button>
                  </div>
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
};

export default ABMConcesionarias;
