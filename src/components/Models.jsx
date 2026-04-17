import React from 'react';
import { useAppContext } from '../context/AppContext';
import { cars, formatPrice } from '../data/cars';
import { Car, Zap, Gauge } from 'lucide-react';

export default function Models() {
  const { state, dispatch } = useAppContext();
  const { modelFilter, currency, highlightedElement } = state;

  const filteredCars = cars.filter(car => {
    if (modelFilter.type !== 'All' && car.type !== modelFilter.type) return false;
    // Check max price after converting appropriately if needed, or assume maxPrice is in INR
    // For simplicity, modelFilter.maxPrice will be loosely matched, or handled locally here.
    const priceLimit = modelFilter.maxPrice || Infinity;
    return car.price.INR <= priceLimit;
  });

  return (
    <section id="models" className={`bg-bg-color-alt ${highlightedElement === 'models' ? 'ai-highlight ai-focus' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Our Lineup</h2>
          <p>Discover the perfect vehicle for your lifestyle. Engineered for performance, designed for comfort.</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['All', 'Sedan', 'SUV', 'Luxury SUV', 'Sports'].map(type => (
            <button
              key={type}
              className={`px-6 py-2 rounded-full border border-border-color transition-all ${modelFilter.type === type ? 'bg-text-main text-bg-color' : 'hover:bg-white/10'}`}
              onClick={() => dispatch({ type: 'SET_FILTER', payload: { type } })}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div 
              key={car.id} 
              id={`model-${car.id}`}
              className={`glass-panel overflow-hidden group ${highlightedElement === `model-${car.id}` ? 'ai-highlight ai-focus' : ''}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium">
                  {car.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-2xl">{car.name}</h3>
                  <span className="text-accent font-semibold">{formatPrice(car.price, currency)}</span>
                </div>
                <p className="text-text-muted mb-6">{car.tagline}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-accent" />
                    <span className="text-sm">{car.range} km range</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={18} className="text-accent" />
                    <span className="text-sm">{car.acceleration}s 0-100</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                        dispatch({ type: 'SET_BOOKING_DETAILS', payload: { model: car.id } });
                        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 btn-primary text-sm py-2"
                  >
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredCars.length === 0 && (
            <div className="col-span-full text-center py-12 text-text-muted">
              No models found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
