import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Globe } from 'lucide-react';

export default function Header() {
  const { state, dispatch } = useAppContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-border-color py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-2xl font-display font-bold tracking-tighter">
          AETHERIA
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#models" className="hover:text-white transition-colors">Models</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#comparison" className="hover:text-white transition-colors">Compare</a>
          <a href="#booking" className="hover:text-white transition-colors">Test Drive</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
            <Globe size={16} className="text-text-muted" />
            <select 
              className="bg-transparent text-white focus:outline-none appearance-none cursor-pointer"
              value={state.currency}
              onChange={(e) => dispatch({ type: 'SET_CURRENCY', payload: e.target.value })}
            >
              <option className="text-black" value="INR">INR</option>
              <option className="text-black" value="USD">USD</option>
            </select>
          </div>
          <button className="md:hidden">Menu</button>
        </div>
      </div>
    </header>
  );
}
