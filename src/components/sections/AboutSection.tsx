import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Eye, Zap, Users, Heart, Shield } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

type Tab = 'story' | 'mission' | 'vision' | 'values';

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'story',   label: 'Our Story',    icon: <Heart size={16} /> },
  { key: 'mission', label: 'Our Mission',  icon: <Target size={16} /> },
  { key: 'vision',  label: 'Our Vision',   icon: <Eye size={16} /> },
  { key: 'values',  label: 'Core Values',  icon: <Zap size={16} /> },
];

const CONTENT: Record<Tab, React.ReactNode> = {
  story: (
    <div className="space-y-5">
      <p className="text-neutral-600 leading-relaxed">
        IEYAL Solutions was founded in 2023 by a group of engineers and entrepreneurs who kept seeing the same problem: small and mid-sized businesses in India were being left behind in the digital revolution. Enterprise tools were too expensive. Generic software did not fit their workflows. And most technology vendors were not invested in their outcomes.
      </p>
      <p className="text-neutral-600 leading-relaxed">
        We built IEYAL to change that. Starting from Thiruvarur, Tamil Nadu, we set out to create practical, affordable, and genuinely effective technology — software that business owners can understand, teams can actually use, and that delivers a return people can measure.
      </p>
      <p className="text-neutral-600 leading-relaxed">
        Today, we build custom software, automate business operations, and develop our own SaaS products — OwnChat, OwnTasks, and OwnCart — all built from conversations with real business owners about real problems.
      </p>
    </div>
  ),
  mission: (
    <div className="space-y-5">
      <p className="text-neutral-600 leading-relaxed">
        Our mission is to make enterprise-quality technology accessible to every business — not just the ones with large IT budgets. We build solutions that are affordable without being basic, powerful without being complicated, and tailored without being expensive to maintain.
      </p>
      <p className="text-neutral-600 leading-relaxed">
        We measure our success by the growth our clients achieve — leads converted, hours saved, processes automated, and teams empowered. Every project we take on is a commitment to delivering something that genuinely moves the needle.
      </p>
    </div>
  ),
  vision: (
    <div className="space-y-5">
      <p className="text-neutral-600 leading-relaxed">
        We see a future where every business in India — regardless of size or sector — has access to the same quality of technology that powers the country's largest companies.
      </p>
      <p className="text-neutral-600 leading-relaxed">
        Our vision is to become the technology backbone for India's growing businesses, delivering products and services that scale with ambition and adapt with change. We are building for the next decade, with a focus on AI-powered automation, deep industry expertise, and a client-first culture that never compromises on outcomes.
      </p>
    </div>
  ),
  values: (
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { icon: <Users size={18} />,   label: 'Client First',    desc: 'Every decision starts with what is right for our client, not what is convenient for us.' },
        { icon: <Shield size={18} />,  label: 'Accountability',  desc: 'We deliver what we commit to. If something is not working, we fix it — no excuses.' },
        { icon: <Zap size={18} />,     label: 'Practical Speed', desc: 'We move fast without cutting corners. Good solutions delivered on time.' },
        { icon: <Heart size={18} />,   label: 'Genuine Care',    desc: 'We invest in the success of every client as if it were our own business.' },
      ].map(({ icon, label, desc }) => (
        <div key={label} className="flex gap-4 p-4 rounded-xl bg-surface-subtle border border-neutral-100">
          <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 text-ieyal-secondary">
            {icon}
          </div>
          <div>
            <p className="font-semibold text-neutral-800 text-sm mb-1">{label}</p>
            <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('story');
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <SectionHeader
              eyebrow="About IEYAL"
              title="Built by Engineers Who Understand Business"
              titleHighlight="Understand Business"
              subtitle="We are an IT services and consulting company based in Tamil Nadu, India. We build software that works — and support the businesses using it."
              id="about-heading"
            />

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mt-8 mb-6" role="tablist" aria-label="About IEYAL sections">
              {TABS.map(({ key, label, icon }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`tab-panel-${key}`}
                  id={`tab-${key}`}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-ieyal-primary text-white shadow-soft-sm'
                      : 'bg-surface-subtle text-neutral-600 hover:bg-surface-muted hover:text-neutral-900'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`tab-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {CONTENT[activeTab]}
              </motion.div>
            </AnimatePresence>

            <div className="mt-8">
              <Button variant="primary" href="/about" rightIcon={<ArrowRight size={16} />}>
                Our Full Story
              </Button>
            </div>
          </div>

          {/* Right — Visual Feature Cards */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            aria-hidden="true"
          >
            {/* Journey Timeline */}
            <div className="bg-surface-subtle rounded-2xl border border-neutral-100 p-6 space-y-6">
              <p className="text-sm font-semibold text-neutral-700 mb-4">IEYAL Journey</p>
              {[
                { year: '2023', title: 'Founded in Thiruvarur, Tamil Nadu', color: '#1A6FDB' },
                { year: '2023', title: 'Launched first client web projects',  color: '#1A6FDB' },
                { year: '2024', title: 'Developed OwnChat — WhatsApp CRM',    color: '#25D366' },
                { year: '2024', title: 'Launched OwnTasks & OwnCart',         color: '#4F46E5' },
                { year: '2025', title: 'Expanded to 15+ industry verticals',  color: '#F59E0B' },
                { year: '2025+', title: 'AI automation & scale',              color: '#EF4444' },
              ].map(({ year, title, color }, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: color }}
                    />
                    {i < 5 && <div className="w-px flex-1 bg-neutral-200 mt-1.5 min-h-[2rem]" />}
                  </div>
                  <div className="pb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${color}18`, color }}
                    >
                      {year}
                    </span>
                    <p className="text-sm text-neutral-700 mt-1.5">{title}</p>
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
