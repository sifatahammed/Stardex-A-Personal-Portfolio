import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar, StarsCanvas, Tech, Works } from './components';
import backgroundImage from '../public/herobg.png';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
      <div
          className="px-0 w-full min-h-screen  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})`}}
        >
          <div className="relative z-0">
            <StarsCanvas />
            <About />
          </div>
      </div>
        <Tech />
        <Experience />
        
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
