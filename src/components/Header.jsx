import { Globe, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Header() {
  const { state, dispatch } = useAppContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 px-4">

      <div
        className={`flex items-center justify-between rounded-full px-6 transition-all duration-500 ${scrolled
          ? 'bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl py-3'
          : 'bg-white/5 backdrop-blur-md border border-white/10 py-4'
          }`}
      >

        {/* LOGO */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
        >
          AETHERIA
        </a>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Models', 'Features', 'Compare', 'Test Drive'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="relative text-gray-400 hover:text-white transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* CURRENCY */}
          <div className="hidden sm:flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-md">
            <Globe size={14} className="text-gray-400" />
            <select
              className="bg-transparent text-gray-300 focus:outline-none cursor-pointer"
              value={state.currency}
              onChange={(e) =>
                dispatch({ type: 'SET_CURRENCY', payload: e.target.value })
              }
            >
              <option className="text-black" value="INR">INR</option>
              <option className="text-black" value="USD">USD</option>
            </select>
          </div>

          {/* CTA */}
          <a
            href="#booking"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition shadow-lg hover:shadow-xl"
          >
            Book Now
          </a>

          {/* MOBILE MENU */}
          <button className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md border border-white/10">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* GLOW BORDER EFFECT */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[90%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl opacity-40"></div>
      </div>
    </header>
  );
}