// useChatbot.js
import { useEffect } from 'react';

const useChatbot = () => {
  useEffect(() => {
    // Example for a chatbot service with an SDK
    const script = document.createElement('script');
    script.src = 'https://path-to-chatbot-service.js'; // Replace with your chatbot service script URL
    script.async = true;
    script.onload = () => {
      // Initialize chatbot if needed
      window.Chatbot.init({ /* options if needed */ });
    };
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useChatbot;
