import React from 'react';
import { Router } from './components/Router';
import { NavBar } from './components/NavBar';
import { SocialLinks } from './components/SocialLinks';
import { ScrollIndicator } from './components/ScrollIndicator';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1D21] text-gray-200 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none z-0"></div>
      
      <NavBar />
      <SocialLinks />
      <ScrollIndicator />
      
      <main className="relative z-10">
        <Router />
      </main>
    </div>
  );
}

export default App;