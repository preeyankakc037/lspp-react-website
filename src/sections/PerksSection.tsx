import React from 'react';
import PerkCard from '../components/common/PerkCard';
import { perksData } from '../data/perksData';

const PerksSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-12">
      <h2 className="text-4xl font-extrabold text-orange-600 tracking-tight text-center">
          What are the perks?
        </h2>
      </div>

      {/* Responsive CSS Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {perksData.map((perk) => (
          <PerkCard 
            key={perk.id}
            id={perk.id}
            title={perk.title}
            bulletPoints={perk.bulletPoints}
            iconSymbol={perk.iconSymbol}
          />
        ))}
      </div>
      
    </section>
  );
};

export default PerksSection;