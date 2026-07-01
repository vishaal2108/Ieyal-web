import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import rafiyudeenImg from '@/assets/founders/mohamed-rafiyudeen.jpeg';
import dineshkumarImg from '@/assets/founders/dinesh-kumar.jpeg';
import hajeabuthahirImg from '@/assets/founders/haje-abudhahir.jpeg';

const FOUNDERS = [
  {
    name:        'Abdul Raseed Mohamed Rafiyudeen',
    designation: 'Co-Founder & CEO',
    bio:         'Visionary leader driving IEYAL\'s strategic direction and client relationships.',
    quote:       'Technology should empower businesses, not complicate them.',
    linkedin:    'https://www.linkedin.com/in/amrafiyudeen/',
    initials:    'AR',
    color:       '#1A6FDB',
    image:       rafiyudeenImg,
  },
  {
    name:        'Marimuthu Dineshkumar',
    designation: 'Co-Founder & CTO',
    bio:         'Engineering architect behind IEYAL\'s core products and technical innovation.',
    quote:       'Great software is built on a foundation of understanding and craftsmanship.',
    linkedin:    'https://www.linkedin.com/in/dinesh-kumar-4a5562133/',
    initials:    'MD',
    color:       '#25D366',
    image:       dineshkumarImg,
  },
  {
    name:        'Syed Farook Haje Abuthahir',
    designation: 'Co-Founder & COO',
    bio:         'Operations expert ensuring delivery excellence and client success at every stage.',
    quote:       'Success is measured by the impact we create for our clients.',
    linkedin:    'https://www.linkedin.com/in/hajeabudhahir-syed/',
    initials:    'SF',
    color:       '#F59E0B',
    image:       hajeabuthahirImg,
  },
];

export const LeadershipSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="leadership"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-slate-50 border-none shadow-none font-sans overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Founder & Leadership"
          title="The Team Behind IEYAL"
          titleHighlight="Behind IEYAL"
          subtitle="IEYAL was founded by three engineers who share a conviction that technology should serve businesses — practically, affordably, and effectively."
          centered
          className="mb-14"
          id="leadership-heading"
        />

        <div className="grid md:grid-cols-3 gap-8 font-sans">
          {FOUNDERS.map(({ name, designation, bio, quote, linkedin, image }, i) => (
            <article
              key={name}
              className={`bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#FF001E] flex flex-col items-center text-center gap-5 transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              aria-label={`${name}, ${designation}`}
            >
              {/* Founder Image */}
              <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#FF001E] via-[#E600E6] to-slate-200 shadow-md flex-shrink-0 group hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
                <p className="text-sm font-bold text-[#E600E6]">{designation}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">{bio}</p>

              <blockquote className="text-sm italic text-slate-700 border-l-2 border-[#FF001E] pl-4 text-left font-normal bg-red-50/40 py-2.5 px-3 rounded-r-xl w-full">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#FF001E] hover:text-[#E600E6] transition-colors mt-auto"
                aria-label={`${name} on LinkedIn`}
              >
                LinkedIn Profile
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
