import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, UtensilsCrossed, Heart, GraduationCap, ShoppingBag, Home, Factory, Truck, Landmark, Rocket, Briefcase, Plane, Car, HardHat, Building } from 'lucide-react';
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <Link
                key={industry.id}
                to={`/industries/${industry.slug}`}
                className={`card-base group p-5 flex flex-col items-center text-center gap-3 transition-all duration-700 focus-visible:outline-2 focus-visible:outline-ieyal-secondary ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
                aria-label={`${industry.name} — ${industry.shortDesc}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-ieyal-secondary group-hover:scale-110 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="text-sm font-semibold text-neutral-700 group-hover:text-ieyal-primary transition-colors leading-snug">
                  {industry.name}
                </p>
              </Link>
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
