import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import AWSBadges from './components/AWSBadges';
import ESANSection from './components/ESANSection';
import FerreyrosSection from './components/FerreyrosSection';
import TenisMesaSection from './components/TenisMesaSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans" id="home">
      <Navigation />
      <Header />
      <About />
      <AWSBadges />
      <ESANSection />
      <FerreyrosSection />
      <TenisMesaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;