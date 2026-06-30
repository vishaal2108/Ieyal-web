import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

// PLACEHOLDER — Founder details to be provided by client
// Replace: name, designation, bio, image, linkedin, quote with real data
const FOUNDERS = [
  {
    name:        'Abdul Raseed Mohamed Rafiyudeen',
    designation: 'Co-Founder & CEO',
    bio:         'Founder detail — bio to be provided by client. Placeholder shown for layout purposes.',
    quote:       'Leadership quote — awaiting input from client.',
    linkedin:    'https://www.linkedin.com/company/ieyalsolutions/',
    initials:    'AR',
    color:       '#1A6FDB',
  },
  {
    name:        'Marimuthu Dineshkumar',
    designation: 'Co-Founder & CTO',
    bio:         'Founder detail — bio to be provided by client. Placeholder shown for layout purposes.',
    quote:       'Leadership quote — awaiting input from client.',
    linkedin:    'https://www.linkedin.com/company/ieyalsolutions/',
    initials:    'DK',
    color:       '#25D366',
  },
  {
    name:        'Syed Farook Haje Abuthahir',
    designation: 'Co-Founder & COO',
    bio:         'Founder detail — bio to be provided by client. Placeholder shown for layout purposes.',
    quote:       'Leadership quote — awaiting input from client.',
    linkedin:    'https://www.linkedin.com/company/ieyalsolutions/',
    initials:    'SF',
    color:       '#F59E0B',
  },
];

export const LeadershipSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="leadership"
      className="section-padding bg-gradient-section"
      aria-labelledby="leadership-heading"
    >
      <div className="container-xl">
        <SectionHeader
          eyebrow="Founder & Leadership"
          title="The Team Behind IEYAL"
          titleHighlight="Behind IEYAL"
          subtitle="IEYAL was founded by three engineers who share a conviction that technology should serve businesses — practically, affordably, and effectively."
          centered
          className="mb-14"
          id="leadership-heading"
        />

        {/* Placeholder notice */}
        <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-700 text-center">
          Founder photographs and official bios are awaiting client input. Placeholder layout shown.
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FOUNDERS.map(({ name, designation, bio, quote, linkedin, initials, color }, i) => (
            <article
              key={name}
              className={`card-base p-8 flex flex-col items-center text-center gap-5 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              aria-label={`${name}, ${designation}`}
            >
              {/* Avatar Placeholder */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold font-display flex-shrink-0 shadow-soft-md"
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)` }}
                aria-label={`Photo placeholder for ${name}`}
              >
                {initials}
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-1">{name}</h3>
                <p className="text-sm font-semibold" style={{ color }}>{designation}</p>
              </div>

              <p className="text-sm text-neutral-500 leading-relaxed">{bio}</p>

              <blockquote className="text-sm italic text-neutral-400 border-l-2 border-neutral-200 pl-4 text-left">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-ieyal-secondary hover:text-ieyal-primary transition-colors mt-auto"
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
