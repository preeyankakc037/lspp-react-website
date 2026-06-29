import React from 'react';
import type { PerkCardData } from '../../types';

const PerkCard: React.FC<PerkCardData> = ({ title, bulletPoints, icon: Icon, variant = 'orange' }) => {
  
  const styles = {
    orange: {
      cardBg: "bg-[#fef5f3]",
      iconBg: "bg-orange-500",
      bulletColor: "text-orange-500"
    },
    blue: {
      cardBg: "bg-[#f4f9ff]",
      iconBg: "bg-blue-600",
      bulletColor: "text-blue-600"
    }
  };

  const currentStyle = styles[variant];

  return (
    <div className={`${currentStyle.cardBg} rounded-2xl p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow`}>

      <div className={`${currentStyle.iconBg} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-inner`}>
        <Icon size={24} strokeWidth={2} />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-base text-gray-700">

            <span className={`${currentStyle.bulletColor} mt-1 text-sm`}>⬟</span> 
            <span>{point}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default PerkCard;