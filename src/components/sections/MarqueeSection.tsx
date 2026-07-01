import React from 'react';
import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';

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
    style={{ margin: '0 28px' }}
    className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 px-3 transition-all duration-300 hover:scale-110 cursor-default"
    title={`${name}`}
  >
    <img
      src={src}
      alt={`${name} logo`}
      className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain block filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    />
  </div>
);

export const MarqueeSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ marginTop: '30px', marginBottom: '50px' }}
      className="py-14 md:py-16 bg-slate-50 border-y border-slate-200/80 w-full overflow-hidden"
      aria-labelledby="trusted-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 w-full flex flex-col items-center justify-center">
        <div
          className={`w-full flex flex-col items-center justify-center text-center font-sans transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2
            id="trusted-heading"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            className="w-full text-center font-extrabold tracking-tight text-slate-900 mb-2"
          >
            Trusted by Growing Brands Across India
          </h2>
        </div>
      </div>

      {/* Top Line Marquee Strip */}
      <div
        style={{ marginTop: '20px', marginBottom: '20px' }}
        className="marquee-wrapper my-6 overflow-hidden w-full py-4"
        role="region"
        aria-label="Clients logo strip — client names scroll automatically"
      >
        <div className="marquee-track flex items-center" aria-hidden="true">
          {ALL_ITEMS.map((item, i) => (
            <LogoCard key={`${item.name}-${i}`} name={item.name} src={item.src} />
          ))}
        </div>
      </div>

      {/* Content & CTA Button after image strip like uengage.io */}
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full flex flex-col items-center justify-center text-center font-sans">
        <p className="w-full text-center text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal px-4 mb-8">
          We are proud to partner with ambitious businesses and industry leaders who rely on IEYAL Solutions for their digital transformation.
        </p>
        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center gap-2 px-[16px] py-[10px] rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-sm sm:text-base shadow-md shadow-red-500/20 hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
        >
          Join With Us
        </Link>
      </div>
    </section>
  );
};
