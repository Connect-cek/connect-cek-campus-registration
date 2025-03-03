import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection/Hero';
import FeaturesSection from './components/FeaturesSection';
import NetworkingSection from './components/NetworkingSection/NetworkingSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <NetworkingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;