import React from 'react';
import { useInView } from '@/hooks/useInView';

// PLACEHOLDER section — logos to be replaced once client provides official assets
// Each item renders a styled text placeholder with the client's industry name

const PLACEHOLDER_ITEMS = [
  { name: 'Hotel Chain A',      industry: 'Hospitality' },
  { name: 'Clinic Network',     industry: 'Healthcare' },
  { name: 'EdTech Platform',    industry: 'Education' },
  { name: 'Retail Brand',       industry: 'Retail' },
  { name: 'Real Estate Firm',   industry: 'Real Estate' },
  { name: 'Logistics Co.',      industry: 'Logistics' },
  { name: 'Auto Dealership',    industry: 'Automotive' },
  { name: 'Restaurant Group',   industry: 'Food & Beverage' },
  { name: 'Finance Advisor',    industry: 'Finance' },
  { name: 'Manufacturing Ltd',  industry: 'Manufacturing' },
  { name: 'Travel Agency',      industry: 'Travel & Tourism' },
  { name: 'Construction Pvt',   industry: 'Construction' },
];

// Duplicate for seamless infinite loop
const ALL_ITEMS = [...PLACEHOLDER_ITEMS, ...PLACEHOLDER_ITEMS];

const LogoPlaceholder: React.FC<{ name: string; industry: string }> = ({ name, industry }) => (
  <div
    className="flex-shrink-0 flex flex-col items-center justify-center gap-1 w-44 h-20 rounded-2xl border border-neutral-100 bg-surface-subtle mx-4 px-5 opacity-60 hover:opacity-100 hover:border-primary-200 hover:shadow-soft transition-all duration-300 cursor-default"
    title={`${name} — ${industry} (Placeholder)`}
    aria-label={`${name}, ${industry} — client placeholder`}
  >
    <p className="text-sm font-semibold text-neutral-600 text-center leading-tight">{name}</p>
    <p className="text-xs text-neutral-400">{industry}</p>
  </div>
);

export const MarqueeSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 bg-white border-t border-b border-neutral-100 overflow-hidden"
      aria-labelledby="trusted-heading"
    >
      <div className="container-xl mb-10">
        <div
          className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p
            id="trusted-heading"
            className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4"
          >
            Trusted by Growing Businesses
          </p>
          <p className="text-sm text-neutral-500">
            Client logos — awaiting official assets. Placeholders shown for layout.
          </p>
        </div>
      </div>

      {/* Marquee Strip */}
      <div
        className="marquee-wrapper"
        role="region"
        aria-label="Clients logo strip — client names scroll automatically, pauses on focus"
      >
        <div className="marquee-track" aria-hidden="true">
          {ALL_ITEMS.map((item, i) => (
            <LogoPlaceholder key={`${item.name}-${i}`} name={item.name} industry={item.industry} />
          ))}
        </div>
      </div>
    </section>
  );
};
