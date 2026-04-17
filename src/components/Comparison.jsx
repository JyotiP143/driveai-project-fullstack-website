import React from 'react';
import { useAppContext } from '../context/AppContext';
import { cars } from '../data/cars';

export default function Comparison() {
  const { state } = useAppContext();
  const { comparisonModels, highlightedElement } = state;

  const model1 = cars.find(c => c.id === comparisonModels[0]) || cars[0];
  const model2 = cars.find(c => c.id === comparisonModels[1]) || cars[1];

  return (
    <section id="comparison" className={`bg-bg-color ${highlightedElement === 'comparison' ? 'ai-highlight ai-focus' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Head to Head</h2>
          <p>Compare our leading models to find your perfect match.</p>
        </div>

        <div className="glass-panel overflow-x-auto rounded-3xl p-8">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border-color">
                <th className="p-4 text-text-muted font-medium w-1/3">Specification</th>
                <th className="p-4 text-xl font-semibold w-1/3 text-center">{model1.name}</th>
                <th className="p-4 text-xl font-semibold w-1/3 text-center">{model2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-border-color/50 text-text-muted">Category</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model1.type}</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model2.type}</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border-color/50 text-text-muted">Range (EPA Est.)</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model1.range} km</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model2.range} km</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border-color/50 text-text-muted">Acceleration (0-100 km/h)</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model1.acceleration}s</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model2.acceleration}s</td>
              </tr>
              <tr>
                <td className="p-4 border-b border-border-color/50 text-text-muted">Top Speed</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model1.topSpeed} km/h</td>
                <td className="p-4 border-b border-border-color/50 text-center">{model2.topSpeed} km/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
