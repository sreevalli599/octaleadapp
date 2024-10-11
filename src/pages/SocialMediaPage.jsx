import React from 'react';
import './SocialMediaPage.css'; // Import your CSS file
import SMMImage from './working-desk-with-paper-sheet-with-social-media-pl-2023-11-27-05-24-56-utc.jpg'

const SocialMediaPage = () => {
  return (
    <div className="smm-page">
      <header >
      <div className="seo-image-right">
          <img src={SMMImage} alt="SEO Concept" />
        </div>
        <h1>Social Media Marketing</h1>
        <p>Elevate your brand's presence and engage with your audience effectively.</p>
      </header>

     

      <section className="smm-intro">
        <h2>What is Social Media Marketing?</h2>
        <p>
          Social media marketing involves promoting your brand and engaging with your audience through platforms like Facebook, Instagram, LinkedIn, and Twitter.
        </p>
      </section>

      <section className="smm-benefits">
        <h2>How Can It Help in Digital Marketing?</h2>
        <p>
          Social media marketing enhances brand visibility, fosters community engagement, and drives traffic to your website. It also provides valuable insights into customer behavior and preferences.
        </p>
      </section>

      <section className="smm-services">
        <h2>What We Provide</h2>
        <ul className="service-list">
          <li className="service-item">
            <h3>Strategy Development</h3>
            <p>Tailored to your target audience for effective outreach.</p>
          </li>
          <li className="service-item">
            <h3>Content Creation</h3>
            <p>Engaging posts and media scheduled across various platforms.</p>
          </li>
          <li className="service-item">
            <h3>Engagement Management</h3>
            <p>Responsive management of comments and messages.</p>
          </li>
          <li className="service-item">
            <h3>Targeted Advertising</h3>
            <p>Effective campaigns aimed at your ideal customer demographics.</p>
          </li>
          <li className="service-item">
            <h3>Performance Analysis</h3>
            <p>Continuous optimization based on real-time metrics.</p>
          </li>
        </ul>
      </section>

      <section className="smm-cta">
        <h2>Ready to Take Your Social Media to the Next Level?</h2>
        <button className="cta-button">Contact Us Today</button>
      </section>
    </div>
  );
};

export default SocialMediaPage;
