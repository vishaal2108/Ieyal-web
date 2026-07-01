import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { MessageSquare, FileSearch, Layers, Rocket, Headphones } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon:   MessageSquare,
    title:  'Discovery & Consultation',
    desc:   'We begin with a structured consultation to understand your business, goals, existing systems, and constraints. No assumptions — just focused questions that lead to clear answers.',
    duration: '1–2 Days',
  },
  {
    number: '02',
    icon:   FileSearch,
    title:  'Proposal & Roadmap',
    desc:   'We prepare a transparent proposal covering scope, timeline, budget, and key milestones. You know exactly what we are building and when you will see it.',
    duration: '2–3 Days',
  },
  {
    number: '03',
    icon:   Layers,
    title:  'Design & Architecture',
    desc:   'Before writing a line of production code, we design the system architecture and user experience — ensuring the foundation is solid and the experience is intuitive.',
    duration: 'Varies by scope',
  },
  {
    number: '04',
    icon:   Rocket,
    title:  'Build, Test & Deploy',
    desc:   'We build in sprints, share progress regularly, and test thoroughly before any deployment. You are involved throughout, not just at handover.',
    duration: 'Varies by scope',
  },
  {
    number: '05',
    icon:   Headphones,
    title:  'Support & Optimisation',
    desc:   'Launch is the beginning, not the end. We monitor, support, and optimise after go-live — ensuring the system performs well and adapts as your needs evolve.',
    duration: 'Ongoing',
  },
];

export const ProcessSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="process"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-slate-50 border-none shadow-none font-sans"
      aria-labelledby="process-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title="A Clear Process for "
          titleHighlight="Every Project"
          subtitle="We follow a structured delivery process that keeps projects on track, keeps you informed, and consistently delivers results."
          centered
          className="mb-16"
          id="process-heading"
        />

        {/* Steps */}
        <div className="relative font-sans">
          {/* Connector Line — Desktop */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {STEPS.map(({ number, icon: Icon, title, desc, duration }, i) => (
              <div
                key={number}
                className={`flex flex-col items-center text-center gap-4 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Step Bubble */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-200/80 shadow-sm flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-[#FF001E] hover:shadow-md hover:scale-105 group">
                    <Icon size={24} className="text-[#FF001E]" aria-hidden="true" />
                    <span className="text-xs font-bold text-[#E600E6]">{number}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{desc}</p>
                  <div className="inline-block mt-3 px-3.5 py-1 rounded-full bg-red-50 border border-red-100">
                    <span className="text-xs font-bold text-[#FF001E]">{duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
