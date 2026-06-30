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
      className="section-padding bg-light-section relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(215,0,41,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="eyebrow text-primary-500" aria-label="By the numbers">
            By the Numbers
          </span>
          <h2
            id="stats-heading"
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-ieyal-darker leading-tight"
          >
            Delivering Real Impact for Real Businesses
          </h2>
          <p className="text-base md:text-lg text-neutral-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            These metrics represent the real impact we've delivered to businesses across India through our software, automation, and consulting services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STATS.map(({ target, suffix, label, description }, i) => (
            <div
              key={label}
              className={`card-base p-8 md:p-10 text-center group relative overflow-hidden ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-none relative z-10"
                style={{
                  background: 'linear-gradient(to right, #de001d, #910094)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {inView && (
                  <AnimatedCounter target={target} suffix={suffix} duration={2000} />
                )}
              </div>
              <p className="text-base md:text-lg font-semibold text-ieyal-darker mb-2 relative z-10">{label}</p>
              <p className="text-sm text-neutral-600 relative z-10">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
