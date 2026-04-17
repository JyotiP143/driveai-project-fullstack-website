import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Shield, Zap, Sparkles } from 'lucide-react';

export default function Features() {
  const { state } = useAppContext();
  
  return (
    <section id="features" className={`bg-bg-color border-y border-border-color ${state.highlightedElement === 'features' ? 'ai-highlight ai-focus' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Engineering Excellence</h2>
          <p>Every Aetheria vehicle is a masterclass in technology, safety, and comfort.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 text-center rounded-3xl hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent-color/10 flex items-center justify-center mx-auto mb-6 text-accent-color">
              <Shield size={32} />
            </div>
            <h3 className="text-xl mb-4 font-semibold">Fortress Safety</h3>
            <p className="text-text-muted">
              Advanced suite of 360° sensors and predictive AI that anticipates hazards before they happen. 5-star global safety rating across all models.
            </p>
          </div>

          <div className="glass-panel p-8 text-center rounded-3xl hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent-color/10 flex items-center justify-center mx-auto mb-6 text-accent-color">
              <Zap size={32} />
            </div>
            <h3 className="text-xl mb-4 font-semibold">HyperCharge API</h3>
            <p className="text-text-muted">
              Add 300km of range in just 15 minutes. Our proprietary solid-state battery tech ensures minimal degradation over decades.
            </p>
          </div>

          <div className="glass-panel p-8 text-center rounded-3xl hover:bg-white/5 transition-colors">
            <div className="w-16 h-16 rounded-full bg-accent-color/10 flex items-center justify-center mx-auto mb-6 text-accent-color">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl mb-4 font-semibold">Neuro-Connect Layout</h3>
            <p className="text-text-muted">
              The cabin adapts to your biometric state, adjusting lighting, acoustics, and climate to optimize your driving focus and relaxation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
