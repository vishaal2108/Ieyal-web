import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

const WHY_FEATURES = [
  {
    title:   'Experienced Engineering Team',
    desc:    'Our team brings hands-on experience across web, mobile, cloud, and AI — delivering solutions that are built correctly from the start.',
  },
  {
    title:   'Business Automation Expertise',
    desc:    'We specialise in automating the workflows that consume the most time — sales follow-ups, support queues, document processing, and internal approvals.',
  },
  {
    title:   'Customer-Centric Approach',
    desc:    'We do not ship and disappear. We stay involved to ensure what we build actually delivers value in your day-to-day operations.',
  },
  {
    title:   'Scalable, Maintainable Code',
    desc:    'Every system we build is designed to grow with you — architected for scale, documented for clarity, and built without shortcuts.',
  },
  {
    title:   'Fast Deployment, No Bloat',
    desc:    'We focus on shipping what matters, fast. Lean scopes, rapid iterations, and clear milestones mean you see results sooner.',
  },
  {
    title:   'Transparent Communication',
    desc:    'You will always know where your project stands. Regular updates, honest timelines, and zero hidden surprises.',
  },
  {
    title:   'Affordable Without Compromise',
    desc:    'We built our pricing to serve Indian businesses at every stage of growth — without sacrificing the quality of what we deliver.',
  },
  {
    title:   'Reliable Post-Launch Support',
    desc:    'When something needs attention after launch, we respond quickly. Our support structure is designed around your schedule, not ours.',
  },
];

export const WhyChooseSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="why-ieyal"
      className="section-padding bg-white"
      aria-labelledby="why-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            aria-hidden="true"
          >
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1A3D7A 50%, #0D1F47 100%)' }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 80% 20%, rgba(26,111,219,0.3) 0%, transparent 60%)' }}
              />
              <div className="relative z-10 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-300">Why businesses choose us</p>
                <p className="text-3xl font-display font-bold text-white leading-tight">
                  We treat your business like it is our own.
                </p>
                <p className="text-blue-100/60 leading-relaxed text-sm">
                  When you work with IEYAL, you are not just getting developers or consultants. You are getting a team that is genuinely invested in making your technology work — and keeping it working.
                </p>
                <Button variant="outline-white" href="/contact">
                  Start a Conversation
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {[
                    { v: '50+',  l: 'Clients' },
                    { v: '15+',  l: 'Industries' },
                    { v: '3+',   l: 'Years' },
                  ].map(({ v, l }) => (
                    <div key={l} className="text-center">
                      <p className="text-2xl font-display font-bold text-white">{v}</p>
                      <p className="text-xs text-white/40 mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Feature List */}
          <div
            className={`transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <SectionHeader
              eyebrow="Why Choose IEYAL"
              title="What Sets Us Apart"
              titleHighlight="Sets Us Apart"
              subtitle="We have built a service model around the things that actually matter to business owners — reliability, speed, honest communication, and results."
              id="why-heading"
            />

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {WHY_FEATURES.map(({ title, desc }, i) => (
                <div
                  key={title}
                  className={`p-4 rounded-xl bg-surface-subtle border border-neutral-100 transition-all duration-500 hover:border-primary-200 hover:shadow-soft-sm ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-ieyal-secondary flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 mb-1">{title}</p>
                      <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
