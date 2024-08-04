// src/components/Header.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
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
          href="https://twitter.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
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
          href="https://www.pinterest.com/yourcompany"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
        >
          <FaPinterest />
        </a>
        <a
          href="https://www.linkedin.com/company/capital-lead-solutions/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="headerRight">
        <a href="#request-quote" className="quoteButton">Request a Quote</a>
      </div>
    </header>
  );
};

export default Header;
