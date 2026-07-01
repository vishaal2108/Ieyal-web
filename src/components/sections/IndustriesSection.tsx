import React from 'react';
import { Building2, UtensilsCrossed, Heart, GraduationCap, ShoppingBag, Home, Factory, Truck, Landmark, Rocket, Briefcase, Plane, Car, HardHat, Building, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { INDUSTRIES } from '@/data/industries';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Building2, UtensilsCrossed, Heart, GraduationCap, ShoppingBag, Home,
  Factory, Truck, Landmark, Rocket, Briefcase, Plane, Car, HardHat, Building,
};

export const IndustriesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="industries"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-slate-50 border-none shadow-none font-sans"
      aria-labelledby="industries-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions for Every "
          titleHighlight="Sector"
          subtitle="Whether you run a hotel, a hospital, or a startup — we have deep experience delivering technology that fits how your industry actually works."
          centered
          className="mb-14"
          id="industries-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 items-stretch font-sans">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.id}
                className={`bg-white border border-slate-200/80 rounded-3xl p-6 h-full flex flex-col items-start text-left gap-4 transition-all duration-500 relative hover:border-[#FF001E] hover:shadow-md hover:-translate-y-1 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="absolute inset-0 z-20 rounded-3xl focus-visible:outline-2 focus-visible:outline-[#FF001E] cursor-pointer"
                  aria-label={`${industry.name} — ${industry.shortDesc}`}
                />
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-[#FF001E] transition-colors duration-300 shadow-sm">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-[#FF001E] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF001E] transition-colors leading-snug">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {industry.shortDesc}
                  </p>
                  
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#FF001E] transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-2 px-[16px] py-[10px] rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-base shadow-md shadow-red-500/20 hover:scale-105 transition-all cursor-pointer inline-block"
            aria-label="Inquire about all industries IEYAL serves"
          >
            Explore All Industries
          </a>
        </div>
      </div>
    </section>
  );
};
