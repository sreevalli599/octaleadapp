import React from 'react';
import './GoogleAdsPage.css'; // Ensure you create this CSS file for styles
 // Add a relevant image

const GoogleAdsPage = () => {
  return (
    <div className="google-ads-page">
      <header className="google-ads-header">
        <h1>Google Ads</h1>
      </header>

      <section className="google-ads-content">
       
        <div className="google-ads-text">
          <h2>What is it?</h2>
          <p>
            Google Ads is an online advertising platform where you can create ads that appear on Google’s search results 
            and partner websites, targeting users based on their search queries and interests.
          </p>
        </div>
      </section>

      <section className="google-ads-benefits">
        <h2>How Can It Help in Digital Marketing?</h2>
        <p>
          Google Ads provides immediate visibility for your brand, driving targeted traffic to your website. It allows 
          you to reach users actively searching for relevant products or services.
        </p>
      </section>

      <section className="google-ads-services">
        <h2>What We Can Provide</h2>
        <ul>
          <li>Keyword research and selection for targeted ad campaigns.</li>
          <li>Creation of compelling ad copy and design.</li>
          <li>Management of ad budgets and bid strategies.</li>
          <li>Ongoing campaign monitoring and optimization.</li>
          <li>Detailed reporting on ad performance and ROI.</li>
        </ul>
      </section>
    </div>
  );
};

export default GoogleAdsPage;
