import React, { useState, useEffect } from 'react';

function FooterABM() {
  const [contactInfo, setContactInfo] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', url: '' });

  useEffect(() => {
    const storedContactInfo = localStorage.getItem('contactInfo') || '';
    const storedSocialMediaLinks = JSON.parse(localStorage.getItem('socialMediaLinks')) || [];

    setContactInfo(storedContactInfo);
    setSocialMediaLinks(storedSocialMediaLinks);
  }, []);

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      setSocialMediaLinks([...socialMediaLinks, { ...form, id: Date.now() }]);
    } else {
      setSocialMediaLinks(
        socialMediaLinks.map((link) =>
          link.id === form.id ? { ...form } : link
        )
      );
    }
    setForm({ id: null, name: '', url: '' });
  };

  const handleEdit = (id) => {
    const link = socialMediaLinks.find((link) => link.id === id);
    setForm(link);
  };

  const handleDelete = (id) => {
    setSocialMediaLinks(socialMediaLinks.filter((link) => link.id !== id));
  };

  const handleSave = () => {
    localStorage.setItem('contactInfo', contactInfo);
    localStorage.setItem('socialMediaLinks', JSON.stringify(socialMediaLinks));
    alert('Información guardada exitosamente');
  };

  return (
    <div>
      <h2>Administrar Footer</h2>
      <div>
        <h3>Información de Contacto</h3>
        <textarea
          value={contactInfo}
          onChange={handleContactInfoChange}
          placeholder="Información de contacto"
          rows="4"
          cols="50"
        />
      </div>
      <div>
        <h3>Redes Sociales</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleSocialMediaChange}
            placeholder="Nombre de la Red Social"
            required
          />
          <input
            type="text"
            name="url"
            value={form.url}
            onChange={handleSocialMediaChange}
            placeholder="URL"
            required
          />
          <button type="submit">{form.id === null ? 'Agregar' : 'Modificar'}</button>
        </form>
      </div>
      <h3>Redes Sociales Actuales</h3>
      <ul>
        {socialMediaLinks.map((link) => (
          <li key={link.id}>
            <h4>{link.name}</h4>
            <a href={link.url}>{link.url}</a>
            <button onClick={() => handleEdit(link.id)}>Editar</button>
            <button onClick={() => handleDelete(link.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}

export default FooterABM;
