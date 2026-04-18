import { useAppContext } from '../context/AppContext';
import { cars } from '../data/cars';

export default function Comparison() {
  const { state } = useAppContext();
  const { comparisonModels, highlightedElement } = state;

  const model1 = cars.find(c => c.id === comparisonModels[0]) || cars[0];
  const model2 = cars.find(c => c.id === comparisonModels[1]) || cars[1];

  return (
    <section
      id="comparison"
      className={`relative py-20 bg-gradient-to-b from-black via-[#0a0a0f] to-black ${
        highlightedElement === 'comparison' ? 'ai-highlight ai-focus' : ''
      }`}
    >
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 mb-4">
            Head to Head
          </h2>
          <p className="text-gray-400">
            Compare our leading models to find your perfect match.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              
              {/* Header */}
              <thead className="bg-white/5 backdrop-blur-md">
                <tr className="border-b border-white/10">
                  <th className="p-5 text-gray-400 font-medium">
                    Specification
                  </th>
                  <th className="p-5 text-center text-white text-lg font-semibold">
                    {model1.name}
                  </th>
                  <th className="p-5 text-center text-white text-lg font-semibold">
                    {model2.name}
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {[
                  {
                    label: "Category",
                    v1: model1.type,
                    v2: model2.type,
                  },
                  {
                    label: "Range",
                    v1: `${model1.range} km`,
                    v2: `${model2.range} km`,
                  },
                  {
                    label: "Acceleration",
                    v1: `${model1.acceleration}s`,
                    v2: `${model2.acceleration}s`,
                  },
                  {
                    label: "Top Speed",
                    v1: `${model1.topSpeed} km/h`,
                    v2: `${model2.topSpeed} km/h`,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-5 text-gray-400">{row.label}</td>

                    <td className="p-5 text-center text-white font-medium">
                      {row.v1}
                    </td>

                    <td className="p-5 text-center text-white font-medium">
                      {row.v2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}