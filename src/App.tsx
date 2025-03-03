import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection/Hero';
import FeaturesSection from './components/FeaturesSection';
import NetworkingSection from './components/NetworkingSection/NetworkingSection';
import Features from './components/FeaturesSection/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
        <Hero />
        <FeaturesSection />
        <NetworkingSection />
        <Features />
      <Footer />
    </div>
  );
};

export default App;