import React, { useState } from 'react';
import './RequestQuotePage.css'; // Import CSS for the page styling

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    services: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className="request-quote-container">
      <h1>Request a Quote</h1>
      <div className="dialog-box">
        <h2>Let us help you with your journey</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email ID:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preferred Time for Callback:
            <input
              type="text"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              required
            />
          </label>
          <fieldset>
            <legend>Select Services:</legend>
            {['SEO', 'Social Media Marketing', 'Google Ads', 'Website Designing', 'Mobile App Development', 'Influencer Marketing', 'WhatsApp Marketing', 'Online Reputation Management', 'PR Agency', 'Email Marketing'].map(service => (
              <label key={service}>
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={handleChange}
                />
                {service}
              </label>
            ))}
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RequestQuotePage;
