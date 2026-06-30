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

const CATEGORY_COLORS = {
  development:  { bg: 'rgba(26,111,219,0.08)',   icon: '#1A6FDB', border: 'rgba(26,111,219,0.15)' },
  automation:   { bg: 'rgba(37,211,102,0.08)',   icon: '#25D366', border: 'rgba(37,211,102,0.15)' },
  marketing:    { bg: 'rgba(245,158,11,0.08)',   icon: '#F59E0B', border: 'rgba(245,158,11,0.15)' },
  design:       { bg: 'rgba(139,92,246,0.08)',   icon: '#8B5CF6', border: 'rgba(139,92,246,0.15)' },
  consulting:   { bg: 'rgba(239,68,68,0.08)',    icon: '#EF4444', border: 'rgba(239,68,68,0.15)' },
};

export const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="services"
      className="section-padding bg-gradient-section"
      aria-labelledby="services-heading"
    >
      <div className="container-xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeader
            eyebrow="What We Do"
            title="Services Designed to "
            titleHighlight="Drive Growth"
            subtitle="From custom software to intelligent automation, every service we offer is built around a single goal — measurable business impact."
            id="services-heading"
          />
          <Link
            to="/services"
            className="flex items-center gap-2 text-sm font-semibold text-ieyal-secondary hover:text-ieyal-primary transition-colors whitespace-nowrap self-end lg:self-auto"
            aria-label="View all services"
          >
            View All Services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.slice(0, 12).map((service, i) => {
            const Icon   = iconMap[service.icon] as React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>;
            const colors = CATEGORY_COLORS[service.category];

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className={`card-base group p-6 flex flex-col gap-4 transition-all duration-700 focus-visible:outline-2 focus-visible:outline-ieyal-secondary ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
                aria-label={`${service.title} service — ${service.shortDesc}`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  {Icon && <Icon size={22} style={{ color: colors.icon }} aria-hidden="true" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-neutral-800 group-hover:text-ieyal-primary transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-xs font-semibold text-ieyal-secondary opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
                  Learn More <ArrowRight size={12} aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* See All */}
        {SERVICES.length > 12 && (
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="btn btn-outline btn-md"
              aria-label="View all IEYAL services"
            >
              View All {SERVICES.length} Services
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
