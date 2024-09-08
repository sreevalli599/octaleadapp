import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { PublicClientApplication } from '@azure/msal-browser';
import './Header.css';

const pca = new PublicClientApplication({
  auth: {
    clientId: 'YOUR_MICROSOFT_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:3000',
  },
});

const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUp(false);
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login success', response);
  };

  const handleGoogleError = (error) => {
    console.error('Google login error', error);
  };

  const handleMicrosoftLogin = async () => {
    try {
      const loginResponse = await pca.loginPopup({
        scopes: ['user.read'],
      });
      console.log('Microsoft login success', loginResponse);
    } catch (error) {
      console.error('Microsoft login error', error);
    }
  };

  const handleTruecallerLogin = () => {
    console.log('Truecaller login clicked');
  };

  return (
    <>
      <header className="nav-header">
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
        <div className="headerRight">
          <button className="login-button" onClick={() => { setIsSignUp(false); openModal(); }}>Login</button>
        </div>
      </header>

      {/* Modal for Login/Sign Up */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            {isSignUp ? (
              <form className="login-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
            ) : (
              <form className="login-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            )}
            <div className="social-login">
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Continue with Google"
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                cookiePolicy={'single_host_origin'}
              />
              <button className="social-button" onClick={handleMicrosoftLogin}>Continue with Hotmail</button>
              <button className="social-button" onClick={handleTruecallerLogin}>Continue with Truecaller</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header2;
