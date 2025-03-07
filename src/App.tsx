import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection/Hero';
import FeaturesSection from './components/FeaturesSection';
import NetworkingSection from './components/NetworkingSection/NetworkingSection';
import Features from './components/FeaturesSection/Features';
import Footer from './components/Footer';
import Admincred from './pages/Admincred';
import Regcollege from './pages/Regcollege';
import Regform from './pages/Regform';
import RegOTP from './pages/RegOTP';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero">
                <Hero />
              </div>
              <div id="features-section">
                <FeaturesSection />
              </div>
              <div id="networking">
                <NetworkingSection />
              </div>
              <div id="features">
                <Features />
              </div>
            </>
          } />
          <Route path="/1" element={<Admincred />} />
          <Route path="/register" element={<Regcollege />} />
          <Route path="/3" element={<Regform />} />
          <Route path="/verify" element={<RegOTP />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;