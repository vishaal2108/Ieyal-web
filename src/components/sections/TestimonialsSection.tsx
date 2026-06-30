import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Placeholder testimonial text. Awaiting real feedback from clients.",
    author: "Client Name",
    role: "CEO, Company Name",
  },
  {
    quote: "Placeholder testimonial text. Awaiting real feedback from clients.",
    author: "Client Name",
    role: "Founder, Company Name",
  },
  {
    quote: "Placeholder testimonial text. Awaiting real feedback from clients.",
    author: "Client Name",
    role: "Director, Company Name",
  }
];

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-dark-section relative overflow-hidden" id="testimonials">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(26,111,219,0.15) 0%, transparent 70%)' }}
      />
      <div className="container-xl relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients "
          titleHighlight="Say"
          subtitle="Real stories from businesses we have partnered with to drive growth."
          centered
          dark
          className="mb-14"
        />

        <div className="mb-10 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-blue-100/50 text-center">
          Testimonials are awaiting client input. Placeholder layout shown to ensure zero fabrication.
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
             <div key={i} className={`glass-dark p-8 rounded-2xl transition-all duration-700 hover:-translate-y-1 hover:bg-white/10 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <Quote className="text-ieyal-secondary mb-5 opacity-80" size={32} />
                <p className="text-white/90 leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="border-t border-white/10 pt-4 mt-auto">
                   <h4 className="text-white font-semibold font-display">{t.author}</h4>
                   <p className="text-blue-100/60 text-sm">{t.role}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
