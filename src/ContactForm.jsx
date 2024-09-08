import React from 'react';
import './ContactForm.css'; // Create this CSS file to style the contact form

const ContactForm = ({ page }) => {
  const message = page
    ? `Still figuring out whether you need ${page} service? Why don't you let us help you? We are just a click away.`
    : 'Need help? Fill out the form below to get in touch with us.';

  return (
    <div className="contact-form-container">
      <h2>{message}</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email Address" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
