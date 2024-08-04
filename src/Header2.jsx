// src/components/Header.js
import React from 'react';
import './Header.css'; // Import the CSS file for styling
import capitalleadlogo from './capitalleadlogo.jpeg';

const Header = () => {
  return (
    <header className="nav-header">
      <div className="logo">
        <img src={capitalleadlogo} alt="capitalleadlogo" ></img>
      </div>
      <nav className="nav-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <div className="nav-item dropdown">
          <a href="#services" className="nav-link">Services</a>
          <div className="dropdown-content">
            <a href="#seo" className="dropdown-link">SEO</a>
            <a href="#social-media" className="dropdown-link">Social Media Marketing</a>
            <a href="#google-ads" className="dropdown-link">Google Ads</a>
            <a href="#website-designing" className="dropdown-link">Website Designing</a>
            <a href="#mobile-app-development" className="dropdown-link">Mobile App Development</a>
            <a href="#influencer-marketing" className="dropdown-link">Influencer Marketing</a>
            <a href="#whatsapp-marketing" className="dropdown-link">WhatsApp Marketing</a>
            <a href="#online-reputation" className="dropdown-link">Online Reputation Management</a>
            <a href="#pr-agency" className="dropdown-link">PR Agency</a>
            <a href="#email-marketing" className="dropdown-link">Email Marketing</a>
          </div>
        </div>
        <a href="#careers" className="nav-link">Careers</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
