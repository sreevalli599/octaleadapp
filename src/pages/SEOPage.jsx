import React from 'react';
import './SEOPage.css'; // Import your CSS file
import SEO from './SEO.webp'; // Main SEO image
import clock from './biological-clock.png';
import content from './content-creation.png';
import cost from './cost-of-living.png';
import digitalMarketing from './digital-marketing.png';
import results from './experiment-results.png';
import growth from './growth-graph.png';
import visibility from './visibility-off.png';

const SEOPage = () => {
  // Expanded benefits of SEO with icons
  const benefits = [
    {
      title: "Increased Organic Traffic",
      description: "Attract more visitors searching for your products or services.",
      icon: growth,
    },
    {
      title: "Enhanced Brand Visibility",
      description: "Foster trust and credibility through a strong SEO presence.",
      icon: visibility,
    },
    {
      title: "Cost-Effectiveness",
      description: "A sustainable way to drive traffic compared to paid ads.",
      icon: cost,
    },
    {
      title: "Improved User Experience",
      description: "Optimized content and site structure lead to better engagement.",
      icon: clock,
    },
    {
      title: "Targeted Marketing",
      description: "Reach the right audience based on specific search intents.",
      icon: digitalMarketing,
    },
    {
      title: "Long-Term Results",
      description: "The benefits of SEO compound over time, providing ongoing traffic.",
      icon: results,
    },
    {
      title: "Better Conversion Rates",
      description: "High-ranking content is more likely to convert visitors into customers.",
      icon: growth,
    },
    {
      title: "Valuable Insights",
      description: "SEO tools provide data on user behavior to refine strategies.",
      icon: content,
    },
  ];

  // Expanded reasons to choose Octaleads with icons
  const octaleadsReasons = [
    {
      title: "Expertise",
      description: "Our team consists of seasoned SEO professionals.",
      icon: clock,
    },
    {
      title: "Customized Strategies",
      description: "We develop personalized SEO strategies tailored to your audience.",
      icon: content,
    },
    {
      title: "Comprehensive Approach",
      description: "Our services include on-page optimization, content marketing, and more.",
      icon: growth,
    },
    {
      title: "Data-Driven Decisions",
      description: "We leverage analytics for informed strategy adjustments.",
      icon: results,
    },
    {
      title: "Transparent Reporting",
      description: "Receive regular updates and insights about your SEO performance.",
      icon: visibility,
    },
    {
      title: "Long-Term Growth",
      description: "Focus on building sustainable SEO results over time.",
      icon: clock,
    },
    {
      title: "Competitive Edge",
      description: "Stay ahead of competitors with tailored SEO strategies.",
      icon: growth,
    },
    {
      title: "Local SEO Advantages",
      description: "Optimize for local searches to attract nearby customers.",
      icon: content,
    },
  ];

  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1>Search Engine Optimization</h1>
      </header>

      <section className="seo-content">
        <div className="seo-image-right">
          <img src={SEO} alt="SEO Concept" />
        </div>
        <div className="seo-text">
          <h2>What is SEO?</h2>
          <p>
            SEO stands for “search engine optimization.” It involves improving your website to increase visibility in search engines when users search for:
          </p>
          <ul>
            <li>Products you sell.</li>
            <li>Services you provide.</li>
            <li>Information in your area of expertise.</li>
          </ul>
          <p>
            The ultimate goal is to attract visitors who can become customers or a loyal audience.
          </p>
        </div>
      </section>

      <section className="seo-benefits">
        <h2>How Can SEO Help in Digital Marketing?</h2>
        <p>
          SEO increases organic traffic by improving rankings. Here’s how it can benefit you:
        </p>
        <div className="benefit-boxes">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-box">
              <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-octaleads">
        <h2>Why SEO with Octaleads?</h2>
        <p>
          Partnering with Octaleads ensures tailored strategies that align with your business goals:
        </p>
        <div className="octaleads-boxes">
          {octaleadsReasons.map((reason, index) => (
            <div key={index} className="octaleads-box">
              <img src={reason.icon} alt={reason.title} className="octaleads-icon" />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SEOPage;
