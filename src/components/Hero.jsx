import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Hero() {
  const { state } = useAppContext();
  
  return (
    <section 
      id="hero" 
      className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${state.highlightedElement === 'hero' ? 'ai-highlight ai-focus' : ''}`}
    >
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000"
        >
          {/* Using image as we might not have a free public video that fits perfectly, could just use a background image */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
          Aetheria Motors
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Experience the pure electric adrenaline. Tomorrow's driving, today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#models" className="btn-accent">Explore Models</a>
          <a href="#booking" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'white' }}>Test Drive</a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#models" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
