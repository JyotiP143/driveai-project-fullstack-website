import React from 'react';
import { useAppContext } from '../context/AppContext';
import { cars } from '../data/cars';

export default function Booking() {
  const { state, dispatch } = useAppContext();
  const { bookingDetails, highlightedElement } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Test drive booked for ${bookingDetails.model} on ${bookingDetails.date} in ${bookingDetails.city}!`);
    dispatch({ type: 'SET_BOOKING_DETAILS', payload: { model: '', date: '', city: '' } });
  };

  return (
    <section id="booking" className={`bg-bg-color-alt ${highlightedElement === 'booking' ? 'ai-highlight ai-focus' : ''}`}>
      <div className="container max-w-4xl">
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-color rounded-full blur-[100px] opacity-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl mb-4">Book a Test Drive</h2>
              <p className="text-text-muted mb-8">
                Experience the future of driving firsthand. Schedule your test drive today and feel the difference.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Select your model</h4>
                    <p className="text-sm text-text-muted">Choose the Aetheria that fits your lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Choose a location & time</h4>
                    <p className="text-sm text-text-muted">We have dealerships in all major cities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Get behind the wheel</h4>
                    <p className="text-sm text-text-muted">Our experts will guide you through the features.</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-muted">Model</label>
                <select 
                  className="w-full bg-[#111] border border-border-color rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors"
                  value={bookingDetails.model}
                  onChange={(e) => dispatch({ type: 'SET_BOOKING_DETAILS', payload: { model: e.target.value } })}
                  required
                >
                  <option value="" disabled>Select a model</option>
                  {cars.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-text-muted">City</label>
                <input 
                  type="text" 
                  placeholder="e.g. Mumbai, New York" 
                  className="w-full bg-[#111] border border-border-color rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors"
                  value={bookingDetails.city}
                  onChange={(e) => dispatch({ type: 'SET_BOOKING_DETAILS', payload: { city: e.target.value } })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-muted">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-[#111] border border-border-color rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-color transition-colors [color-scheme:dark]"
                  value={bookingDetails.date}
                  onChange={(e) => dispatch({ type: 'SET_BOOKING_DETAILS', payload: { date: e.target.value } })}
                  required
                />
              </div>

              <button type="submit" className="w-full btn-accent mt-4 py-3 text-lg">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
