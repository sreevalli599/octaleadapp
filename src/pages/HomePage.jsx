import React from 'react';

const HomePage = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f4f4f4', textAlign: 'center', color: '#333' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#1a1a1a' }}>Elevate Your Online Presence</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '40px', lineHeight: '1.6' }}>
        Unlock the potential of your brand with our expert digital marketing solutions. From SEO to Social Media and everything in between, we craft strategies tailored to your business for maximum results.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
        <div style={{ width: '45%', textAlign: 'left' }}>
          <h2>Search Engine Optimization (SEO)</h2>
          <p>
            Boost your website’s visibility with our proven SEO techniques that drive organic traffic and improve search rankings.
          </p>
        </div>
        <div style={{ width: '45%', textAlign: 'left' }}>
          <h2>Social Media Marketing (SMM)</h2>
          <p>
            Connect with your audience on their favorite platforms and turn followers into loyal customers through engaging social media campaigns.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '50px' }}>
        <div style={{ width: '45%', textAlign: 'left' }}>
          <h2>Pay-Per-Click (PPC)</h2>
          <p>
            Maximize your ROI with targeted PPC advertising that puts your brand in front of the right audience at the right time.
          </p>
        </div>
        <div style={{ width: '45%', textAlign: 'left' }}>
          <h2>Website Development</h2>
          <p>
            Craft modern, responsive websites that not only look great but also perform seamlessly across all devices.
          </p>
        </div>
      </div>

      <button style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '50px' }}>
        Get Started
      </button>

      {/* Additional Services Section */}
      <h2 style={{ fontSize: '2.5em', color: '#1a1a1a', marginBottom: '30px' }}>Our Additional Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>Graphic Designing</h3>
          <p>
            Stunning visual content tailored to your brand's identity. From logos to marketing materials, we design with purpose and creativity.
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>Video Production</h3>
          <p>
            Create engaging videos that capture attention and deliver your message effectively. We produce high-quality content that resonates with your audience.
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>Email Marketing</h3>
          <p>
            Reach your audience directly with targeted email campaigns that drive engagement and conversions. Our email strategies are designed for results.
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>BTL Advertising</h3>
          <ul>
            <li><strong>Cab Advertising:</strong> Reach potential customers on the go with high-visibility ads on cabs.</li>
            <li><strong>Auto Advertising:</strong> Advertise on auto-rickshaws to capture attention in densely populated areas.</li>
            <li><strong>Newspaper Advertising:</strong> Place your ads in local newspapers to target specific communities effectively.</li>
          </ul>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>Online Reputation Management</h3>
          <p>
            Manage and protect your brand’s image online. We monitor, respond, and implement strategies to maintain a positive digital footprint.
          </p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ color: '#007BFF' }}>Influencer Marketing</h3>
          <p>
            Leverage the power of influencers to promote your brand. We connect you with the right people to amplify your message and grow your audience.
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default HomePage;
