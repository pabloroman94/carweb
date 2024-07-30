import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [contactInfo, setContactInfo] = useState('');
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    const storedContactInfo = localStorage.getItem('contactInfo') || 'Córdoba Capital: Av. Colón 4851 - Córdoba Capital (Córdoba) - (0800) 345-0439';
    const storedSocialMediaLinks = JSON.parse(localStorage.getItem('socialMediaLinks')) || [
      { id: 1, name: 'Facebook', url: '#' },
      { id: 2, name: 'Instagram', url: '#' }
    ];

    setContactInfo(storedContactInfo);
    setSocialMediaLinks(storedSocialMediaLinks);
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>{contactInfo}</p>
        </div>
        <div className="social-media">
          <h3>Redes Sociales</h3>
          {socialMediaLinks.map(link => (
            <a key={link.id} href={link.url}>{link.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
