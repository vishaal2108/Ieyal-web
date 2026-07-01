import React from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';

const STATS = [
  { target: 50,  suffix: '+',  label: 'Clients Served',     description: 'Businesses across industries' },
  { target: 100, suffix: '+',  label: 'Projects Delivered', description: 'Websites, apps & automations' },
  { target: 15,  suffix: '+',  label: 'Industries Served',  description: 'From hotels to enterprises' },
  { target: 3,   suffix: '',   label: 'SaaS Products',      description: 'OwnChat, OwnTasks & OwnCart' },
  { target: 98,  suffix: '%',  label: 'Client Satisfaction',description: 'Based on feedback & results' },
  { target: 3,   suffix: '+',  label: 'Years of Excellence', description: 'Proven track record' },
];

export const StatisticsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ marginBottom: '60px' }}
      className="py-24 bg-white relative border-none shadow-none"
      aria-labelledby="stats-heading"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,0,30,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2
            id="stats-heading"
            style={{ fontSize: 'clamp(2rem, 4.1vw, 3.375rem)' }}
            className="w-full text-center font-extrabold text-slate-900 leading-tight mx-auto"
          >
            Delivering Real Impact for Real Businesses
          </h2>
          <p
            style={{ marginBottom: '15px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%', display: 'block' }}
            className="w-full text-center mx-auto max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed font-sans mt-4 block"
          >
            These metrics represent the real impact we've delivered to businesses across India through our software, automation, and consulting services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-sans">
          {STATS.map(({ target, suffix, label, description }, i) => (
            <div
              key={label}
              className={`bg-slate-50 border border-slate-200/80 rounded-3xl p-8 md:p-10 text-center group relative overflow-hidden shadow-sm hover:shadow-md hover:border-[#FF001E] hover:-translate-y-1 transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-none relative z-10"
                style={{
                  background: 'linear-gradient(to right, #FF001E, #E600E6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {inView && (
                  <AnimatedCounter target={target} suffix={suffix} duration={2000} />
                )}
              </div>
              <p className="text-base md:text-lg font-bold text-slate-900 mb-2 relative z-10">{label}</p>
              <p className="text-sm text-slate-500 relative z-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
