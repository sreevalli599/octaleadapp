import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import RequestQuoteModal from './RequestQuoteModal'; // Import the modal component
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/capitallead.in?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/capitalleads.in?igsh=MXd0dGxzaWlrZGR6NA=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/capital-lead-solutions/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="headerRight">
        <button onClick={openModal} className="quoteButton">Request a Quote</button>
      </div>
      {isModalOpen && <RequestQuoteModal closeModal={closeModal} />}
    </header>
  );
};

export default Header;
