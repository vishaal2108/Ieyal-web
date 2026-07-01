import React from 'react';
import { Users, Lightbulb, Trophy, Heart, BookOpen, Zap } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';

const CULTURE_VALUES = [
  { icon: Users,     title: 'Team Collaboration',     desc: 'Every great product is built by people who communicate openly and support each other without politics.' },
  { icon: Lightbulb, title: 'Innovation Culture',     desc: 'We encourage experimentation, fast feedback, and building better solutions — even when the current one is good enough.' },
  { icon: Heart,     title: 'Client-First Mindset',   desc: 'Our team measures its success by how much value the client gets — not how many hours were logged.' },
  { icon: BookOpen,  title: 'Continuous Learning',    desc: 'Technology does not stand still and neither do we. Learning is built into how we work, not reserved for training days.' },
  { icon: Trophy,    title: 'Ownership & Excellence', desc: 'Everyone on the team takes full ownership of their work — the quality, the deadline, and the outcome.' },
  { icon: Zap,       title: 'Transparency',           desc: 'Within the team and with our clients, we communicate honestly — about progress, problems, and priorities.' },
];

export const CultureSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="culture"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-white relative overflow-hidden border-none shadow-none font-sans"
      aria-labelledby="culture-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(255,0,30,0.03) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Our Culture"
          title="How We Work, Every Day"
          titleHighlight="Every Day"
          subtitle="Culture is not a poster on the wall. It is the collection of small decisions we make every day about how we treat our team, our clients, and our work."
          centered
          className="mb-14"
          id="culture-heading"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {CULTURE_VALUES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`bg-slate-50 border border-slate-200/80 p-7 rounded-3xl flex flex-col gap-4 transition-all duration-500 hover:border-[#FF001E] hover:shadow-md hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-[#FF001E]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
