import React from 'react';
import PerkCard from '../components/common/PerkCard';
import { contributingData } from '../data/contributingData';

const ContributingSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">

      <div className="mb-12 text-center">

        <h2 className="text-4xl font-extrabold text-blue-600 tracking-tight">
          How will you be contributing?
        </h2>
        <p className="text-gray-500 mt-3 text-lg font-medium">
          Your core responsibilities as a Leapfrog Student Partner
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contributingData.map((item) => (
          <PerkCard 
            key={item.id}
            id={item.id}
            title={item.title}
            bulletPoints={item.bulletPoints}
            iconSymbol={item.iconSymbol}
            variant="blue"
          />
        ))}
      </div>
      
    </section>
  );
};

export default ContributingSection;