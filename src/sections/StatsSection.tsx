import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Users, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
  shape: 'rect' | 'circle' | 'star';
}

const ConfettiCanvas: React.FC<{ active: boolean; originX: number; originY: number }> = ({
  active,
  originX,
  originY,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  const spawnParticles = useCallback(() => {
    const colors = ['#00875A', '#00BFA5', '#FFD600', '#FF6B35', '#7C3AED', '#EC4899', '#3B82F6', '#F59E0B'];
    const count = 120;
    particlesRef.current = Array.from({ length: count }, (_, i) => {
      const angle = (Math.random() * Math.PI * 2);
      const speed = 4 + Math.random() * 8;
      return {
        id: i,
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        size: 6 + Math.random() * 8,
        opacity: 1,
        shape: (['rect', 'circle', 'star'] as const)[Math.floor(Math.random() * 3)],
      };
    });
  }, [originX, originY]);

  useEffect(() => {
    if (!active) return;
    cancelAnimationFrame(rafRef.current);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    spawnParticles();

    const drawStar = (ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25;
        p.vx *= 0.99;
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.012;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;

          if (p.shape === 'rect') {
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          } else if (p.shape === 'circle') {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            drawStar(ctx, 0, 0, p.size / 2);
            ctx.fill();
          }
          ctx.restore();
        }
      });

      if (alive) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, spawnParticles]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

const AnimatedCounter: React.FC<{
  value: number;
  suffix?: string;
  isVisible: boolean;
  duration?: number;
}> = ({ value, suffix = '', isVisible, duration = 2200 }) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;
    cancelAnimationFrame(rafRef.current);
    let start: number | null = null;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, value, duration]);

  return (
    <span>
      {new Intl.NumberFormat('en-US').format(count)}{suffix}
    </span>
  );
};

const stats = [
  {
    id: 'stat-1',
    icon: Users,
    value: 95,
    suffix: '',
    label: 'Student Partners',
    labelHighlight: 'enrolled',
    isHired: false,
    textGradient: 'from-rose-500 to-orange-400',
    iconColor: 'text-rose-500',
    highlightColor: '#f43f5e'
  },
  {
    id: 'stat-2',
    icon: BookOpen,
    value: 80,
    suffix: '+',
    label: 'Knowledge sharing',
    labelHighlight: 'sessions delivered',
    isHired: false,
    textGradient: 'from-purple-600 to-pink-500',
    iconColor: 'text-purple-500',
    highlightColor: '#9333ea'
  },
  {
    id: 'stat-3',
    icon: Briefcase,
    value: 5,
    suffix: '',
    label: 'Student Partners',
    labelHighlight: 'hired',
    isHired: true,
    textGradient: 'from-blue-600 to-cyan-500',
    iconColor: 'text-blue-500',
    highlightColor: '#2563eb'
  },
  {
    id: 'stat-4',
    icon: GraduationCap,
    value: 2100,
    suffix: '+',
    label: 'Students impacted',
    labelHighlight: 'by LSPs',
    isHired: false,
    textGradient: 'from-emerald-500 to-teal-400',
    iconColor: 'text-emerald-500',
    highlightColor: '#10b981'
  },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const hiredCardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [confettiOrigin, setConfettiOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setConfettiActive(false);

          setTimeout(() => {
            if (hiredCardRef.current) {
              const rect = hiredCardRef.current.getBoundingClientRect();
              setConfettiOrigin({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
              });
            }
            setConfettiActive(true);
          }, 1200);
        } else {
          setConfettiActive(false);
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ConfettiCanvas active={confettiActive} originX={confettiOrigin.x} originY={confettiOrigin.y} />

      <section
        ref={sectionRef}
        id="stats"
        style={{ backgroundColor: '#FEFAEE' }}
        className="py-20 px-6 w-full overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 pb-2"
            >
              Building it, bit by bit
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.id}
                ref={stat.isHired ? hiredCardRef : undefined}
                className="flex flex-col items-center text-center relative group"
              >
                <div
                  className={`mb-5 transition-transform duration-300 group-hover:scale-110 ${stat.iconColor}`}
                >
                  <stat.icon size={44} strokeWidth={1.5} />
                </div>

                <div
                  className={`text-5xl md:text-6xl font-black leading-none mb-3 text-transparent bg-clip-text bg-gradient-to-br ${stat.textGradient} pb-2`}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    duration={stat.isHired ? 1800 : 2200}
                  />
                </div>

                <p className="text-gray-700 text-sm font-medium leading-snug max-w-[120px]">
                  {stat.label}{' '}
                  <span
                    className="font-semibold"
                    style={{ color: stat.isHired ? '#e11d48' : stat.highlightColor }}
                  >
                    {stat.labelHighlight}
                  </span>
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StatsSection;