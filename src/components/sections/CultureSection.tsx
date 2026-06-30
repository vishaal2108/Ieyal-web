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
      className="section-padding bg-dark-section relative overflow-hidden"
      aria-labelledby="culture-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(26,111,219,0.2) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <SectionHeader
          eyebrow="Our Culture"
          title="How We Work, Every Day"
          titleHighlight="Every Day"
          subtitle="Culture is not a poster on the wall. It is the collection of small decisions we make every day about how we treat our team, our clients, and our work."
          centered
          dark
          className="mb-14"
          id="culture-heading"
        />

        {/* Placeholder office image notice */}
        <div className="mb-10 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-blue-100/50 text-center">
          Office and team photographs are awaiting client input. Placeholder values grid shown.
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CULTURE_VALUES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`glass-dark p-7 rounded-2xl flex flex-col gap-4 transition-all duration-700 hover:bg-white/10 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary-700/50 border border-primary-600/30 flex items-center justify-center">
                <Icon size={20} className="text-primary-300" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-blue-100/55 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
