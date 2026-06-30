import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { Quote, Star, User } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "IEYAL transformed how we manage customer communications. OwnChat cut our response time by 70% and freed up our team to focus on sales.",
    author: "Raj Kumar",
    role: "CEO, Retail Solutions Ltd",
    rating: 5,
    initials: "RK",
  },
  {
    quote: "The custom CRM they built for us streamlined our entire sales process. Professional, responsive, and delivered on time.",
    author: "Priya Sharma",
    role: "Founder, E-commerce Ventures",
    rating: 5,
    initials: "PS",
  },
  {
    quote: "Unlike typical vendors, IEYAL actually cares about our success. They stuck around after launch to ensure everything works perfectly.",
    author: "Arun Patel",
    role: "Director, Hospitality Group",
    rating: 5,
    initials: "AP",
  }
];

export const TestimonialsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>} 
      className="section-padding bg-light-section relative overflow-hidden" 
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(215,0,41,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          titleHighlight="Say"
          subtitle="Real stories from businesses we have partnered with to drive growth and transform operations."
          centered
          className="mb-20"
          id="testimonials-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((testimonial, i) => (
             <div 
               key={i} 
               className={`card-base p-10 md:p-12 lg:p-14 flex flex-col gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft-lg group relative overflow-hidden ${
                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
               }`}
               style={{ transitionDelay: `${i * 150}ms` }}
             >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Star Rating & Quote Icon */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1.5">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={20} className="text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="text-primary-500 opacity-20" size={36} aria-hidden="true" />
                </div>

                {/* Quote Text */}
                <p className="text-lg md:text-xl text-ieyal-dark leading-relaxed italic flex-grow relative z-10 font-light">
                  "{testimonial.quote}"
                </p>

                {/* Divider */}
                <div className="h-px bg-ieyal-border relative z-10 w-full my-2"></div>

                {/* Author Info */}
                <div className="flex items-center gap-5 relative z-10 mt-auto">
                  {/* Author Avatar Placeholder (Initials) */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-soft-sm border border-white/20"
                    style={{
                      background: `linear-gradient(to right, #de001d, #ce0037)`
                    }}
                    aria-label={`Photo placeholder for ${testimonial.author}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-ieyal-darker font-bold text-lg mb-1 tracking-wide">{testimonial.author}</h4>
                    <p className="text-neutral-500 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
