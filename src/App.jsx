import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Booking from './components/Booking';
import AiAssistant from './components/AiAssistant';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Models />
        <Features />
        <Comparison />
        <Booking />
      </main>
      
      <footer className="bg-[#050505] py-12 border-t border-border-color text-center">
        <div className="container">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white mb-4">AETHERIA</h2>
          <p className="text-text-muted text-sm mb-8">© {new Date().getFullYear()} Aetheria Motors Inc. Fictional demo for DriveAI challenge.</p>
        </div>
      </footer>
      
      <AiAssistant />
    </>
  );
}

export default App;
