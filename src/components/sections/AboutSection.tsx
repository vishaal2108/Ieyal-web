import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Eye, Zap, Users, Heart, Shield } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';

type Tab = 'story' | 'mission' | 'vision' | 'values';

const TABS: { key: Tab; label: string; icon: React.ReactNode }[] = [
  { key: 'story',   label: 'Our Story',    icon: <Heart size={16} /> },
  { key: 'mission', label: 'Our Mission',  icon: <Target size={16} /> },
  { key: 'vision',  label: 'Our Vision',   icon: <Eye size={16} /> },
  { key: 'values',  label: 'Core Values',  icon: <Zap size={16} /> },
];

const CONTENT: Record<Tab, React.ReactNode> = {
  story: (
    <div className="space-y-4 font-sans pt-1">
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          IEYAL Solutions was founded in 2023 by a group of engineers and entrepreneurs who kept seeing the same problem: small and mid-sized businesses in India were being left behind in the digital revolution. Enterprise tools were too expensive. Generic software did not fit their workflows. And most technology vendors were not invested in their outcomes.
        </p>
      </div>
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          We built IEYAL to change that. Starting from Thiruvarur, Tamil Nadu, we set out to create practical, affordable, and genuinely effective technology software that business owners can understand, teams can actually use, and that delivers a return people can measure.
        </p>
      </div>
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          Today, we build custom software, automate business operations, and develop our own SaaS products OwnChat, OwnTasks, and OwnCart all built from conversations with real business owners about real problems.
        </p>
      </div>
    </div>
  ),
  mission: (
    <div className="space-y-4 font-sans pt-1">
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          Our mission is to make enterprise-quality technology accessible to every business not just the ones with large IT budgets. We build solutions that are affordable without being basic, powerful without being complicated, and tailored without being expensive to maintain.
        </p>
      </div>
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          We measure our success by the growth our clients achieve from leads converted and hours saved to processes automated and teams empowered. Every project we take on is a commitment to delivering something that genuinely moves the needle.
        </p>
      </div>
    </div>
  ),
  vision: (
    <div className="space-y-4 font-sans pt-1">
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          We see a future where every business in India regardless of size or sector has access to the same quality of technology that powers the country's largest companies.
        </p>
      </div>
      <div className="py-1">
        <p className="text-slate-700 leading-relaxed text-base md:text-lg">
          Our vision is to become the technology backbone for India's growing businesses, delivering products and services that scale with ambition and adapt with change. We are building for the next decade, with a focus on AI-powered automation, deep industry expertise, and a client-first culture that never compromises on outcomes.
        </p>
      </div>
    </div>
  ),
  values: (
    <div className="grid sm:grid-cols-2 gap-6 font-sans pt-1">
      {[
        { icon: <Users size={20} />,   label: 'Client First',    desc: 'Every decision starts with what is right for our client, not what is convenient for us.' },
        { icon: <Shield size={20} />,  label: 'Accountability',  desc: 'We deliver what we commit to. If something is not working, we fix it without excuses.' },
        { icon: <Zap size={20} />,     label: 'Practical Speed', desc: 'We move fast without cutting corners. Good solutions delivered on time.' },
        { icon: <Heart size={20} />,   label: 'Genuine Care',    desc: 'We invest in the success of every client as if it were our own business.' },
      ].map(({ icon, label, desc }) => (
        <div key={label} className="flex gap-4 py-2 transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 text-[#FF001E]">
            {icon}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-base mb-1">{label}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
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
      style={{ marginBottom: '60px' }}
      className="py-24 bg-white border-none shadow-none w-full scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-start">

          {/* Left — Text */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <SectionHeader
              eyebrow="About IEYAL"
              title="Built by Engineers Who Understand Business"
              titleHighlight="Understand Business"
              subtitle="We are an IT services and consulting company based in Tamil Nadu, India. We build software that works — and support the businesses using it."
              id="about-heading"
            />

            {/* Tabs - Formatted as buttons without border/container wrapper, margin-bottom 6px */}
            <div
              style={{ marginBottom: '6px' }}
              className="flex flex-wrap gap-3 mt-8"
              role="tablist"
              aria-label="About IEYAL sections"
            >
              {TABS.map(({ key, label, icon }) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={activeTab === key}
                  aria-controls={`tab-panel-${key}`}
                  id={`tab-${key}`}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 border ${
                    activeTab === key
                      ? 'bg-[#FF001E] text-white border-[#FF001E] shadow-md shadow-red-500/25 scale-105'
                      : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-[#FF001E] hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Content — With 10px bottom margin */}
            <div
              style={{ marginBottom: '10px' }}
              className="relative min-h-[24rem] bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-start mt-4"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  id={`tab-panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="w-full"
                >
                  {CONTENT[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Centered Get In Touch Button */}
            <div className="mt-8 flex justify-center w-full">
              <Link
                to="/contact"
                className="px-[16px] py-[10px] rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-base shadow-lg shadow-red-500/25 hover:scale-105 hover:shadow-xl hover:shadow-red-500/35 transition-all duration-300 inline-flex items-center gap-3"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right — Professional Executive Step-by-Step Layout */}
          <div
            style={{ marginTop: '36px' }}
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="font-sans w-full">
              <div style={{ marginBottom: '28px' }} className="border-b border-slate-200/80 pb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF001E] block mb-2">How It Works</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2.5">
                  The IEYAL Progression
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  A structured, step-by-step approach to solving business challenges, building custom software, and scaling operations reliably.
                </p>
              </div>

              {/* Clean Professional Vertical Progress List */}
              <div className="space-y-0">
                {[
                  { step: '01', year: '2023', title: 'Founded with a Clear Purpose', desc: 'Started in Thiruvarur, Tamil Nadu with a mission to make enterprise-grade digital tools accessible to growing Indian businesses without bloat or high costs.' },
                  { step: '02', year: '2023', title: 'Custom Engineering & Impact', desc: 'Delivered high-performance web applications, mobile tools, and automated workflows that immediately reduced manual effort for initial clients.' },
                  { step: '03', year: '2024', title: 'Launching OwnChat SaaS Suite', desc: 'Built and released our flagship WhatsApp CRM and automation suite, empowering brands to manage customer conversations from a unified shared inbox.' },
                  { step: '04', year: '2024', title: 'Expanding the SaaS Ecosystem', desc: 'Introduced OwnTasks for team productivity and OwnCart for instant e-commerce storefronts, forming a complete business growth toolkit.' },
                  { step: '05', year: '2025+', title: 'AI Automation & National Scale', desc: 'Scaling across 15+ industry verticals with intelligent AI chatbots, predictive analytics, and enterprise cloud infrastructure built for the next decade.' },
                ].map(({ step, year, title, desc }, i) => (
                  <div
                    key={i}
                    style={{ marginBottom: '24px', padding: '16px' }}
                    className="rounded-2xl bg-white border border-slate-200/80 border-l-4 border-l-slate-300 hover:border-l-[#FF001E] hover:shadow-md transition-all duration-300 group last:mb-0"
                  >
                    <div style={{ padding: '10px', marginBottom: '10px' }} className="flex items-center justify-between gap-3 border-b border-slate-100">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#FF001E]">STEP {step}</span>
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{year}</span>
                    </div>
                    <h4
                      style={{ padding: '0 10px', marginBottom: '10px' }}
                      className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:text-[#FF001E] transition-colors"
                    >
                      {title}
                    </h4>
                    <p style={{ padding: '0 10px', marginBottom: '10px' }} className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
