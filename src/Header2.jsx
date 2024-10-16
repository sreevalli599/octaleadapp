import React from 'react';
import { Link } from 'react-router-dom';
import capitalLeadLogo from './capitalleadlogo.jpeg';
import './Header.css';



const Header2 = () => {

  return (
    <div>
      <header className="nav-header">
       
        <div>
  <img src={capitalLeadLogo} alt="Capital Lead Logo" style={{ width: '30%', height: 'auto' }} />
</div>
<nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <div className="dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-content">
              <Link to="/services/seo" className="dropdown-link">SEO</Link>
              <Link to="/services/social-media" className="dropdown-link">Social Media Marketing</Link>
              <Link to="/services/google-ads" className="dropdown-link">Google Ads</Link>
              <Link to="/services/website-designing" className="dropdown-link">Website Designing</Link>
              <Link to="/services/mobile-app-development" className="dropdown-link">Mobile App Development</Link>
              <Link to="/services/influencer-marketing" className="dropdown-link">Influencer Marketing</Link>
              <Link to="/services/whatsapp-marketing" className="dropdown-link">WhatsApp Marketing</Link>
              <Link to="/services/online-reputation" className="dropdown-link">Online Reputation Management</Link>
              <Link to="/services/pr-agency" className="dropdown-link">PR Agency</Link>
              <Link to="/services/email-marketing" className="dropdown-link">Email Marketing</Link>
              <Link to="/services/graphic-designing" className="dropdown-link">Graphic Designing</Link>
              <Link to="/services/video-editing" className="dropdown-link">Video Editing</Link>
              <Link to="/services/search-engine-listing" className="dropdown-link">Search Engine Listing</Link>
              <Link to="/services/ppc" className="dropdown-link">PPC</Link>
              <Link to="/services/drone-photography" className="dropdown-link">Drone Photography</Link>
            </div>
          </div>
          <Link to="/careers" className="nav-link">Careers</Link>
          <Link to="/blogs" className="nav-link">Blogs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      
      </header>

    
      
        
          </div>
       
      
    
  );
};

export default Header2;
