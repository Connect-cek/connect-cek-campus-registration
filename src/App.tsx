import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import Adminregs from './pages/Adminregsuss';
import VerificationPage from './pages/verificationprog';
import FeedWall from "./feedsection/feedwall";  
import ChatPage from "./feedsection/chats";
import MyNetwork from "./feedsection/mynetwork";
import PageTransition from './components/PageTransition';
import AdminLogin from './pages/AdminLogin';

// Debugging component to verify routes are being accessed
const RouteDebugger: React.FC<{name: string, children: React.ReactNode}> = ({ name, children }) => {
  useEffect(() => {
    console.log(`Route mounted: ${name}`);
    return () => console.log(`Route unmounted: ${name}`);
  }, [name]);
  
  return <>{children}</>;
};

// Wrapper component to access location for AnimatePresence
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log(`Current location: ${location.pathname}`);
  }, [location]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <RouteDebugger name="Home">
              <PageTransition>
                <div className="home-content">
                  <section id="hero">
                    <Hero />
                  </section>
                  <section id="features-section">
                    <FeaturesSection />
                  </section>
                  <section id="networking">
                    <NetworkingSection />
                  </section>
                  <section id="features">
                    <Features />
                  </section>
                </div>
              </PageTransition>
            </RouteDebugger>
          } 
        />
        <Route path="/1" element={<RouteDebugger name="Admincred"><PageTransition><Admincred /></PageTransition></RouteDebugger>} />
        <Route path="/register" element={<RouteDebugger name="Regcollege"><PageTransition><Regcollege /></PageTransition></RouteDebugger>} />
        <Route path="/3" element={<RouteDebugger name="Regform"><PageTransition><Regform /></PageTransition></RouteDebugger>} />
        <Route path="/verify" element={<RouteDebugger name="RegOTP"><PageTransition><RegOTP /></PageTransition></RouteDebugger>} />
        <Route path="/4" element={<RouteDebugger name="Adminregs"><PageTransition><Adminregs /></PageTransition></RouteDebugger>} />
        <Route path="/waiting" element={<RouteDebugger name="VerificationPage"><PageTransition><VerificationPage /></PageTransition></RouteDebugger>} />
        <Route path="/n" element={<RouteDebugger name="FeedWall"><PageTransition><FeedWall /></PageTransition></RouteDebugger>} />
        <Route path="/chat" element={<RouteDebugger name="ChatPage"><PageTransition><ChatPage /></PageTransition></RouteDebugger>} />
        <Route path="/mynetwork" element={<RouteDebugger name="MyNetwork"><PageTransition><MyNetwork /></PageTransition></RouteDebugger>} />
        <Route path="/login/admin" element={<RouteDebugger name="AdminLogin"><PageTransition><AdminLogin /></PageTransition></RouteDebugger>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <Router>
      <div className="app-container min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col w-full">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;