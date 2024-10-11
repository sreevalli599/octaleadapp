import React from 'react';
import './App.css';
import Header2 from './Header2';
import ContactUsForm from './ContactUsForm';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useChatbot from './useChatbot'; // Import the custom hook

// Importing pages
import CareersPage from './careers';
import BlogsPage from './Blog';
import ContactPage from './ContactPage';
import RequestQuotePage from './pages/RequestQuotePage';
import DronePhotography from './pages/DronePhotography';
import PPC from './pages/PPC';
import SearchEngineListing from './pages/SearchEngineListing';

import VideoEditing from './pages/VideoEditing';
import GraphicDesigning from './pages/GraphicDesigning';

import SEOPage from './pages/SEOPage';
import SocialMediaPage from './pages/SocialMediaPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import WebsiteDesigningPage from './pages/WebsiteDesigningPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import InfluencerMarketingPage from './pages/InfluencerMarketingPage';
import WhatsAppMarketingPage from './pages/WhatsAppMarketingPage';
import OnlineReputationPage from './pages/OnlineReputationPage';
import PRAgencyPage from './pages/PRAgencyPage';
import EmailMarketingPage from './pages/EmailMarketingPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './AboutUsPage';

function App() {
  useChatbot(); // Initialize chatbot

  return (
    <Router>
      <div className="App">
        <header className="App-header">
         
          <Header2 />
          <div className="logo-container">
          
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            <Route path="/services/google-ads" element={<GoogleAdsPage />} />
            <Route path="/services/website-designing" element={<WebsiteDesigningPage />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
            <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
            <Route path="/services/online-reputation" element={<OnlineReputationPage />} />
            <Route path="/services/pr-agency" element={<PRAgencyPage />} />
            <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
        <Route path="/services/graphic-designing" element={<GraphicDesigning/>} />
        <Route path="/services/video-editing" element={<VideoEditing/>} />
        <Route path="/services/search-engine-listing" element={<SearchEngineListing/>} />
        <Route path="/services/ppc" element={<PPC/>} />
        <Route path="/services/drone-photography" element={<DronePhotography/>} />
            <Route path="/" element={<HomePage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <ContactUsForm/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
