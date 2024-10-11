import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>
            Octaleads Pvt Ltd is a leading provider of innovative digital marketing solutions.
            We specialize in SEO, PPC, social media marketing, and more to help businesses grow
            and reach their target audiences effectively.
          </p>
        </div>
        <div className="footer-section footer-links">
          <h2>Important Links</h2>
          <a href="/about">About Us</a>
          <a href="/blogs">Blog</a>
          <a href="/pricing-plans">Pricing Plans</a>
          <a href="/careers">Careers</a>
          <a href="/faqs">FAQs</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/site-map">Site Map</a>
          <a href="/request-quote">Request a Quote</a>
        </div>
        <div className="footer-section footer-contact">
          <h2>Contact Us</h2>
          <p>
            Address: Thub Phase2, 20, Inorbit Mall Rd, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana - 500081
          </p>
          <p>Phone: +91-9000056498</p>
          <p>Email: <a href="mailto:contact@capitallead.in">contact@capitallead.in</a></p>
        </div>
      </div>
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
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Octaleads Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
