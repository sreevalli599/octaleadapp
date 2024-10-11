import React, { useState, useEffect } from 'react';
import './ContactForm.css'; // Ensure this path is correct
import { useLocation } from 'react-router-dom';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();

useEffect(() => {
    
        const path = window.location.pathname;
        const segments = path.split('/').filter(Boolean);
         // Split and filter out empty segments
         console.log(segments);
        const service = segments[segments.length - 1];
    setMessage(service);
}, [location.pathname]); 

 


  return (
    <div className="contact-form-wrapper">
      <div className="contact-text">
        <h2>Thinking about improving your {message} ? We're here to assist you with tailored solutions.</h2>
      </div>
      <div className="contact-form">
      <form
        className="contact-form"
        action="https://formspree.io/f/myzyygrp" // Replace with your Formspree form ID
        method="POST"
      >
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              name="name"
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Phone:
            <input 
              type="tel" 
              value={phone} 
              name="phone"
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              name="email"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}; 


export default ContactForm;
