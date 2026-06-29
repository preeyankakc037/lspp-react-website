import React, { useEffect, useRef, useState } from 'react';
import { statsData } from '../data/statsData';
import { Users, Dumbbell, Briefcase, BookOpen } from 'lucide-react';

// Icon Map
const iconMap: Record<string, React.ElementType> = {
  Users,
  Dumbbell,
  Briefcase,
  BookOpen
};

const AnimatedCounter: React.FC<{ value: number; duration?: number; suffix?: string; isVisible: boolean }> = ({ value, duration = 2000, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);

  // format number with commas
  const formattedNumber = new Intl.NumberFormat('en-US').format(count);
  return <span>{formattedNumber}{suffix}</span>;
};

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Find the stat with a goal for the progress bar (stat-4)
  const goalStat = statsData.find(s => s.goal);
  const progressPercentage = goalStat && goalStat.goal ? Math.min((goalStat.value / goalStat.goal) * 100, 100) : 0;

  return (
    <section ref={sectionRef} className="py-20 px-6 my-12 font-sans w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Building it, bit by bit
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Real numbers, real impact — updated every cohort
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.iconName] || Users;
            
            return (
              <div key={stat.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center relative hover:-translate-y-1 transition-transform duration-300">
                
                {/* Icon graphic spot */}
                <div className="text-[#048E43] mb-4">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                
                {/* Numbers */}
                <div className="flex items-start justify-center gap-1">
                  <span className="text-5xl font-black text-gray-900 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </span>
                </div>
                
                {/* Label text */}
                <p className="text-gray-700 text-sm font-semibold mt-3 mb-1 px-4 leading-tight">
                  {stat.label}
                </p>

                {/* Optional Badge */}
                {stat.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#048E43]/10 text-[#048E43] border border-[#048E43]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#048E43] animate-pulse"></span>
                      {stat.badge}
                    </span>
                  </div>
                )}
                
                {/* Sub text */}
                {stat.subText && (
                  <p className="text-gray-500 text-xs mt-3 pt-3 border-t border-gray-100 w-full font-medium">
                    {stat.subText}
                  </p>
                )}
                
                {/* Optional Goal for cards if we wanted, but we have a dedicated bar */}
                {stat.goal && (
                  <p className="text-[#048E43] text-xs mt-3 pt-3 border-t border-gray-100 w-full flex items-center justify-center gap-1 font-bold">
                    Goal: {new Intl.NumberFormat('en-US').format(stat.goal)} <span className="rotate-[-45deg] leading-none">→</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar Section */}
        {goalStat && goalStat.goal && (
          <div>
            <div className="flex justify-between items-end mb-3">
              <span className="text-gray-900 font-bold text-lg">Students impacted toward goal</span>
              <span className="text-[#048E43] font-black text-lg">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#048E43] transition-all duration-1000 ease-out rounded-full"
                style={{ width: isVisible ? `${progressPercentage}%` : '0%', transitionDelay: '300ms' }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-500 font-medium">
              <span>0</span>
              <span>Goal: {new Intl.NumberFormat('en-US').format(goalStat.goal)}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default StatsSection;