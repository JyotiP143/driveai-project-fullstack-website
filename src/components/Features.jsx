import { Shield, Sparkles, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Features() {
  const { state } = useAppContext();

  return (
    <section
      id="features"
      className={`relative py-20 overflow-hidden bg-gradient-to-b from-black via-[#0a0a0f] to-black border-y border-white/10 ${
        state.highlightedElement === 'features'
          ? 'ai-highlight ai-focus'
          : ''
      }`}
    >
      {/* 🔥 Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-4">
            Engineering Excellence
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every Aetheria vehicle is a masterclass in technology, safety, and comfort.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-purple-500/40 transition duration-500">
            <div className="glass-panel p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:scale-105 transition duration-500">
              
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6 text-purple-400 group-hover:scale-110 transition">
                <Shield size={32} />
              </div>

              <h3 className="text-xl mb-4 font-semibold text-white">
                Fortress Safety
              </h3>

              <p className="text-gray-400">
                Predictive AI with 360° sensors for safer driving
                </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-blue-500/40 transition duration-500">
            <div className="glass-panel p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:scale-105 transition duration-500">
              
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-blue-400 group-hover:scale-110 transition">
                <Zap size={32} />
              </div>

              <h3 className="text-xl mb-4 font-semibold text-white">
                HyperCharge API
              </h3>

              <p className="text-gray-400">
                Add 300km of range in just 15 minutes with solid-state battery tech.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-pink-500/40 transition duration-500">
            <div className="glass-panel p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 group-hover:scale-105 transition duration-500">
              
              <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-6 text-pink-400 group-hover:scale-110 transition">
                <Sparkles size={32} />
              </div>

              <h3 className="text-xl mb-4 font-semibold text-white">
                Neuro-Connect
              </h3>

              <p className="text-gray-400">
                Cabin adapts to your biometric state for optimal focus and relaxation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}