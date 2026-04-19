import { ChevronDown } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Hero() {
  const { state } = useAppContext();

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        state.highlightedElement === "hero" ? "ai-highlight ai-focus" : ""
      }`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="/video/car-video.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        {/* GLOW EFFECT */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[180px] rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="container relative z-10 text-center px-4">
        {/* SMALL TAGLINE */}
        <p className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4">
          Future of Mobility
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">Aetheria</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-500">
            Motors
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the pure electric adrenaline. Precision engineering meets
          futuristic design.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* PRIMARY */}
          <a
            href="#models"
            className="px-8 py-3 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Models
          </a>

          {/* SECONDARY */}
          <a
            href="#booking"
            className="px-8 py-3 rounded-full text-sm font-semibold border border-white/20 text-white hover:bg-white/10 backdrop-blur-md transition duration-300"
          >
            Test Drive
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
        <a href="#models" className="text-gray-400 hover:text-white transition">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
