import React from 'react';
import Header from './components/Header';
import About from './components/About';
import AWSBadges from './components/AWSBadges';
import ESANSection from './components/ESANSection';
import FerreyrosSection from './components/FerreyrosSection';
import TenisMesaSection from './components/TenisMesaSection';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <AWSBadges />
      <ESANSection />
      <FerreyrosSection />
      <TenisMesaSection />
    </div>
  );
}

export default App;