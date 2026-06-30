import React from 'react';
import { Link } from 'react-router-dom';
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
      className="section-padding bg-gradient-section"
      aria-labelledby="industries-heading"
    >
      <div className="container-xl">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions for Every "
          titleHighlight="Sector"
          subtitle="Whether you run a hotel, a hospital, or a startup — we have deep experience delivering technology that fits how your industry actually works."
          centered
          className="mb-14"
          id="industries-heading"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 items-stretch">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.id}
                className={`card-base group p-6 h-full flex flex-col items-start text-left gap-4 transition-all duration-500 relative ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="absolute inset-0 z-20 rounded-xl focus-visible:outline-2 focus-visible:outline-ieyal-primary"
                  aria-label={`${industry.name} — ${industry.shortDesc}`}
                />
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                  {Icon && (
                    <Icon
                      size={24}
                      className="text-ieyal-secondary group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-ieyal-darker group-hover:text-ieyal-primary transition-colors leading-snug">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed mb-6">
                    {industry.shortDesc}
                  </p>
                  
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary-500 transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="btn btn-outline btn-md"
            aria-label="View all industries IEYAL serves"
          >
            Explore All Industries
          </Link>
        </div>
      </div>
    </section>
  );
};
