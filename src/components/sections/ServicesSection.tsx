import React from 'react';
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
  development:  { bg: 'rgba(255,0,30,0.06)',   icon: '#FF001E', border: '#E2E8F0' },
  automation:   { bg: 'rgba(230,0,230,0.06)',  icon: '#E600E6', border: '#E2E8F0' },
  marketing:    { bg: 'rgba(255,0,30,0.06)',   icon: '#FF001E', border: '#E2E8F0' },
  design:       { bg: 'rgba(230,0,230,0.06)',  icon: '#E600E6', border: '#E2E8F0' },
  consulting:   { bg: 'rgba(255,0,30,0.06)',   icon: '#FF001E', border: '#E2E8F0' },
};

export const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="services"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-white border-none shadow-none font-sans"
      aria-labelledby="services-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-[16px] py-[10px] rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm hover:bg-[#FF001E] hover:border-[#FF001E] hover:text-white transition-all self-start md:self-end whitespace-nowrap shadow-sm"
            aria-label="Get a consultation"
          >
            Get a Free Consultation <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 font-sans">
          {SERVICES.slice(0, 12).map((service, i) => {
            const Icon   = iconMap[service.icon] as React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>;
            const colors = CATEGORY_COLORS[service.category];

            return (
              <div
                key={service.id}
                className={`bg-slate-50 border border-slate-200/80 rounded-3xl p-6 md:p-7 flex flex-col h-full transition-all duration-500 relative hover:border-[#FF001E] hover:shadow-md hover:-translate-y-1 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-[#FF001E] cursor-pointer"
                  aria-label={`${service.title} service — ${service.shortDesc}`}
                />
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mb-5 bg-white shadow-sm"
                  style={{ border: `1.5px solid ${colors.icon}30` }}
                >
                  {Icon && <Icon size={24} style={{ color: colors.icon }} aria-hidden="true" />}
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF001E] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#FF001E] transition-all duration-200 translate-x-0 group-hover:translate-x-1">
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
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-[16px] py-[10px] bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-base rounded-full shadow-lg shadow-red-500/25 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
              aria-label="Get a consultation for our services"
            >
              Inquire About All Services
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
