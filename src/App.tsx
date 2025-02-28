import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import WhyConnect from './components/WhyConnect';
import MissionVision from './components/MissionVision';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 max-w-7xl mx-auto -mt-16">
            <ValueProposition />
            <WhyConnect />
          </div>
          <div className="px-4 md:px-8 max-w-7xl mx-auto mt-6">
            <MissionVision />
          </div>
          <TestimonialSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;