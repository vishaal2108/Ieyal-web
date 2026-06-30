import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Code2, MessageCircle, LayoutDashboard, Bot, Search, Palette, Cloud, Zap, Plug, Workflow, Cpu } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { SERVICES } from '@/data/services';

const iconMap: Record<string, React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Globe, Smartphone, Code2, MessageCircle, LayoutDashboard, Bot,
  Search, Palette, Cloud, Zap, Plug, Workflow, Cpu,
  Instagram: ({ size, className, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={style?.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
};

const CATEGORY_COLORS: Record<string, { bg: string; icon: string; border: string }> = {
  development:  { bg: 'rgba(215,0,41,0.05)',   icon: '#d70029', border: 'rgba(215,0,41,0.1)' },
  automation:   { bg: 'rgba(215,0,41,0.05)',   icon: '#ce0037', border: 'rgba(215,0,41,0.1)' },
  marketing:    { bg: 'rgba(22,47,98,0.05)',   icon: '#162f62', border: 'rgba(22,47,98,0.1)' },
  design:       { bg: 'rgba(145,0,148,0.05)',  icon: '#910094', border: 'rgba(145,0,148,0.1)' },
  consulting:   { bg: 'rgba(215,0,41,0.05)',   icon: '#d70029', border: 'rgba(215,0,41,0.1)' },
};

export const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="services"
      className="section-padding bg-light-section border-b border-ieyal-border"
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        {/* Header with View All Link */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-14 md:mb-20">
          <div className="flex-1">
            <SectionHeader
              eyebrow="What We Do"
              title="Services Designed to Drive Growth"
              titleHighlight="Drive Growth"
              subtitle="From custom software to intelligent automation, every service we offer is built around a single goal — measurable business impact."
              id="services-heading"
            />
          </div>
          <Link
            to="/services"
            className="btn btn-outline btn-md self-start md:self-end whitespace-nowrap"
            aria-label="View all services"
          >
            View All Services <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.slice(0, 12).map((service, i) => {
            const Icon   = iconMap[service.icon] as React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>;
            const colors = CATEGORY_COLORS[service.category];

            return (
              <div
                key={service.id}
                className={`card-elevated group p-6 md:p-7 flex flex-col h-full transition-all duration-500 relative ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="absolute inset-0 z-20 rounded-xl focus-visible:outline-2 focus-visible:outline-ieyal-primary"
                  aria-label={`${service.title} service — ${service.shortDesc}`}
                />
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mb-5"
                  style={{ background: colors.bg, border: `1.5px solid ${colors.border}` }}
                >
                  {Icon && <Icon size={24} style={{ color: colors.icon }} aria-hidden="true" />}
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-ieyal-darker mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary-500 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                    Learn More <ArrowRight size={14} aria-hidden="true" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All Button */}
        {SERVICES.length > 12 && (
          <div className="mt-14 md:mt-20 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-gradient text-white font-semibold rounded-lg hover:shadow-soft-md transition-all duration-300"
              aria-label="View all IEYAL services"
            >
              View All {SERVICES.length} Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
