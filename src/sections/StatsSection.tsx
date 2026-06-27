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
    <section ref={sectionRef} className="bg-[#1C1D1B] py-20 px-6 my-12 text-white font-sans w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Building it, bit by bit
          </h2>
          <p className="text-gray-400 text-lg">
            Real numbers, real impact — updated every cohort
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat) => {
            const IconComponent = iconMap[stat.iconName] || Users;
            
            return (
              <div key={stat.id} className="bg-[#2C2D2B] rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center text-center relative hover:-translate-y-1 transition-transform duration-300">
                
                {/* Icon graphic spot */}
                <div className="text-[#00BFA5] mb-4">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                
                {/* Numbers */}
                <div className="flex items-start justify-center gap-1">
                  <span className="text-5xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </span>
                </div>
                
                {/* Label text */}
                <p className="text-gray-300 text-sm font-medium mt-3 mb-1 px-4 leading-tight">
                  {stat.label}
                </p>

                {/* Optional Badge */}
                {stat.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#00BFA5]/10 text-[#00BFA5] border border-[#00BFA5]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5] animate-pulse"></span>
                      {stat.badge}
                    </span>
                  </div>
                )}
                
                {/* Sub text */}
                {stat.subText && (
                  <p className="text-gray-500 text-xs mt-3 pt-3 border-t border-gray-700/50 w-full">
                    {stat.subText}
                  </p>
                )}
                
                {/* Optional Goal for cards if we wanted, but we have a dedicated bar */}
                {stat.goal && (
                  <p className="text-[#00BFA5] text-xs mt-3 pt-3 border-t border-gray-700/50 w-full flex items-center justify-center gap-1">
                    Goal: {new Intl.NumberFormat('en-US').format(stat.goal)} <span className="rotate-[-45deg] leading-none">→</span>
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar Section */}
        {goalStat && goalStat.goal && (
          <div className="mb-16">
            <div className="flex justify-between items-end mb-3">
              <span className="text-white font-medium text-lg">Students impacted toward goal</span>
              <span className="text-[#00BFA5] font-bold text-lg">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full bg-[#2C2D2B] h-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#00BFA5] transition-all duration-1000 ease-out rounded-full"
                style={{ width: isVisible ? `${progressPercentage}%` : '0%', transitionDelay: '300ms' }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
              <span>0</span>
              <span>Goal: {new Intl.NumberFormat('en-US').format(goalStat.goal)}</span>
            </div>
          </div>
        )}

        {/* Where Alumni Work Section */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-white">Where LSP alumni work now</h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00BFA5]/10 text-[#00BFA5] border border-[#00BFA5]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFA5] animate-pulse"></span>
              growing
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Former student partners now building at these companies
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#2C2D2B] border border-gray-700 rounded-full hover:border-[#00BFA5]/50 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5]"></span>
              <span className="font-semibold text-white">Leapfrog Technology</span>
              <span className="px-2 py-0.5 bg-[#1C1D1B] rounded-full text-xs text-gray-400 font-medium">5</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm mt-8">
            Most recent hire: <span className="text-[#00BFA5] font-medium">Software Engineer @ Leapfrog Technology</span> · 3 weeks ago
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;