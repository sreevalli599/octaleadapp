import React from 'react';
import './Footer.css'; // Ensure this CSS file styles the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            Octaleads Pvt Ltd is a leading provider of innovative digital marketing solutions. 
            We specialize in SEO, PPC, social media marketing, and more to help businesses grow 
            and reach their target audiences effectively. Our team of experts is dedicated to 
            delivering results-driven strategies and exceptional service.
          </p>
        </div>
        <div className="footer-links">
          <h2>Important Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/pricing-plans">Pricing Plans</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/site-map">Site Map</a></li>
            <li><a href="/request-quote">Request a Quote</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h2 className="emailref">Contact Us</h2>
        <p >Address: Thub Phase2,20,Inorbit Mall Rd,Vittal Rao Nagar,Madhapur,Hyderabad,Telangana-500081</p>
        <p >Phone: +91-9000056498</p>
        <p >Email: <a href="mailto: contact@capitallead.in">contact@capitallead.in</a></p>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Octaleads Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
