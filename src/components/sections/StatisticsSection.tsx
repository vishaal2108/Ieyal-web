import React from 'react';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';

// PLACEHOLDER values — to be updated with real company statistics
const STATS = [
  { target: 50,  suffix: '+',  label: 'Clients Served',     description: 'Businesses across industries' },
  { target: 100, suffix: '+',  label: 'Projects Delivered', description: 'Websites, apps & automations' },
  { target: 15,  suffix: '+',  label: 'Industries Served',  description: 'From hotels to enterprises' },
  { target: 3,   suffix: '',   label: 'SaaS Products',      description: 'OwnChat, OwnTasks & OwnCart' },
  { target: 98,  suffix: '%',  label: 'Client Satisfaction',description: 'Based on client feedback' },    // PLACEHOLDER
  { target: 3,   suffix: '+',  label: 'Years of Experience', description: 'Building digital solutions' },
];

export const StatisticsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-dark-section relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(26,111,219,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="eyebrow" style={{ color: '#4090FF' }} aria-label="By the numbers">
            By the Numbers
          </span>
          <h2
            id="stats-heading"
            className="mt-4 font-display font-bold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          >
            Delivering Real Impact for Real Businesses
          </h2>
          <p className="text-blue-100/60 mt-3 max-w-xl mx-auto text-base">
            These are not projections. They represent businesses we have worked with and solutions we have delivered.
          </p>
          <p className="text-blue-100/30 mt-2 text-xs">* Statistics subject to update as IEYAL grows. Awaiting official numbers from client.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {STATS.map(({ target, suffix, label, description }, i) => (
            <div
              key={label}
              className={`bg-ieyal-primary/80 backdrop-blur-sm p-8 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="text-4xl md:text-5xl font-display font-black mb-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #4090FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {inView && (
                  <AnimatedCounter target={target} suffix={suffix} duration={2000} />
                )}
              </div>
              <p className="text-sm font-semibold text-white mb-1">{label}</p>
              <p className="text-xs text-blue-100/40">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
