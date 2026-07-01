import React from 'react';
import { useInView } from '@/hooks/useInView';

import cust1 from '@/assets/customers/imgi_42_Bigg Basz.png';
import cust2 from '@/assets/customers/imgi_43_Building doctor.png';
import cust3 from '@/assets/customers/imgi_44_E sandhai.png';
import cust4 from '@/assets/customers/imgi_45_KPN.jpg';
import cust5 from '@/assets/customers/imgi_46_KSM.png';
import cust6 from '@/assets/customers/imgi_47_Kurinji Retails.png';
import cust7 from '@/assets/customers/imgi_48_Mejastic Maharaja.png';
import cust8 from '@/assets/customers/imgi_49_Merry Berry.png';
import cust9 from '@/assets/customers/imgi_50_Muscletech.png';
import cust10 from '@/assets/customers/imgi_51_Rate4gold.png';
import cust11 from '@/assets/customers/imgi_52_Roshan Bags.png';
import cust12 from '@/assets/customers/imgi_53_Startup TN.png';
import cust13 from '@/assets/customers/imgi_54_Tamilpreneur.png';
import cust14 from '@/assets/customers/imgi_55_Tositos India.png';
import cust15 from '@/assets/customers/imgi_56_VB World.png';
import cust16 from '@/assets/customers/imgi_57_Zam Zam.png';
import cust17 from '@/assets/customers/imgi_58_my harvestfrms.png';

const CUSTOMERS = [
  { name: 'Bigg Basz', src: cust1 },
  { name: 'Building Doctor', src: cust2 },
  { name: 'E Sandhai', src: cust3 },
  { name: 'KPN', src: cust4 },
  { name: 'KSM', src: cust5 },
  { name: 'Kurinji Retails', src: cust6 },
  { name: 'Mejastic Maharaja', src: cust7 },
  { name: 'Merry Berry', src: cust8 },
  { name: 'Muscletech', src: cust9 },
  { name: 'Rate4gold', src: cust10 },
  { name: 'Roshan Bags', src: cust11 },
  { name: 'Startup TN', src: cust12 },
  { name: 'Tamilpreneur', src: cust13 },
  { name: 'Tositos India', src: cust14 },
  { name: 'VB World', src: cust15 },
  { name: 'Zam Zam', src: cust16 },
  { name: 'My Harvest Farms', src: cust17 },
];

// Duplicate for seamless infinite loop
const ALL_ITEMS = [...CUSTOMERS, ...CUSTOMERS];

const LogoCard: React.FC<{ name: string; src: string }> = ({ name, src }) => (
  <div
    style={{ marginTop: '8px', marginRight: '2.5px', marginBottom: '0', marginLeft: '2.5px' }}
    className="flex-shrink-0 flex items-center justify-center w-60 h-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:scale-105 hover:border-[#FF001E] hover:shadow-md transition-all duration-300 cursor-default mt-2"
    title={`${name}`}
  >
    <img src={src} alt={`${name} logo`} className="max-h-16 max-w-full object-contain block border-none outline-none shadow-none" />
  </div>
);

export const MarqueeSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ marginTop: '40px', marginBottom: '60px' }}
      className="py-24 bg-slate-50 overflow-hidden w-full mt-10 mb-12 border-none shadow-none"
      aria-labelledby="trusted-heading"
    >
      <div style={{ marginTop: '40px' }} className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 w-full flex flex-col items-center justify-center mt-10">
        <div
          className={`w-full flex flex-col items-center justify-center text-center font-sans transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2
            id="trusted-heading"
            style={{ fontSize: 'clamp(2rem, 4.1vw, 3.375rem)' }}
            className="w-full text-center font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Trusted by Growing Brands Across India
          </h2>
          <p className="w-full text-center text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal px-4">
            We are proud to partner with ambitious businesses and industry leaders who rely on IEYAL Solutions for their digital transformation.
          </p>
        </div>
      </div>

      {/* Marquee Strip */}
      <div
        style={{ marginTop: '10px' }}
        className="marquee-wrapper mt-2"
        role="region"
        aria-label="Clients logo strip — client names scroll automatically"
      >
        <div className="marquee-track" aria-hidden="true">
          {ALL_ITEMS.map((item, i) => (
            <LogoCard key={`${item.name}-${i}`} name={item.name} src={item.src} />
          ))}
        </div>
      </div>
    </section>
  );
};
