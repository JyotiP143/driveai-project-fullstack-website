import { ArrowRight, Gauge, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cars, formatPrice } from '../data/cars';

export default function Models() {
  const { state, dispatch } = useAppContext();
  const { currency } = state;

  return (
    <section id="models" className="bg-black py-24">
      <div className="container space-y-32">

        {cars.map((car, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={car.id}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >

              {/* IMAGE */}
              <div
                className={`relative group ${isReverse ? 'md:order-2' : ''
                  }`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* CONTENT */}
              <div className={`${isReverse ? 'md:order-1' : ''}`}>

                <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
                  {car.type}
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {car.name}
                </h2>

                <p className="text-gray-400 mb-6 max-w-md">
                  {car.tagline}
                </p>

                {/* SPECS */}
                <div className="flex gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-white" />
                    {car.range} km range
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={18} className="text-white" />
                    {car.acceleration}s 0-100
                  </div>
                </div>

                {/* PRICE */}
                <p className="text-xl font-semibold mb-6 text-gray-200">
                  {formatPrice(car.price, currency)}
                </p>

                {/* CTA */}
                <button
                  onClick={() => {
                    dispatch({ type: 'SET_BOOKING_DETAILS', payload: { model: car.id } });
                    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Book Test Drive
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}