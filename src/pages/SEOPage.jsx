import React from 'react';
import './SEOPage.css'; // Make sure to import the CSS file
import SEO from './SEO.webp';


const SEOPage = () => {
  return (
    <div className="seo-page">
      <header className="seo-header">
        <h1>Search Engine Optimization</h1>
      </header>
      <section className="seo-content">
        <div className="seo-image-left">
          <img src={SEO} alt="SEO Concept" />
        </div>
        <div className="seo-text">
          <h2>What is SEO?</h2>
          <p>SEO stands for “search engine optimization.” In simple terms, SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for:</p>
          <ul>
            <li>Products you sell.</li>
            <li>Services you provide.</li>
            <li>Information on topics in which you have deep expertise and/or experience.</li>
          </ul>
          <p>The better visibility your pages have in search results, the more likely you are to be found and clicked on. Ultimately, the goal of search engine optimization is to help attract website visitors who will become customers, clients, or an audience that keeps coming back.</p>
          <h2>How Can It Help in Digital Marketing?</h2>
          <p>SEO increases your website's organic traffic by improving its ranking in search results. This drives more qualified leads to your site and enhances your brand’s visibility.</p>
        </div>
        <div className="seo-image-right">
          <img src="path/to/your/second-image.jpg" alt="SEO Benefits" />
        </div>
      </section>
    </div>
  );
};

export default SEOPage;
