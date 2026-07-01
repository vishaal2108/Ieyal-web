import React from 'react';
import { motion } from 'framer-motion';

const HERO_STATS = [
  { value: '50+', label: 'Clients Served' },
  { value: '3', label: 'Products Built' },
  { value: '15+', label: 'Industries Served' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      style={{ marginBottom: '60px' }}
      className="relative w-full flex flex-col items-center justify-center bg-white grid-overlay overflow-hidden py-24 lg:py-36 font-sans border-none shadow-none"
      aria-labelledby="hero-heading"
    >
      {/* Radial glow for light mode */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,0,30,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}
        aria-hidden="true"
      />

      <div className="container-xl max-w-7xl relative z-10 w-full flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto"
        >
          {/* 1. Headline & Description Spacing Fixes: reduced margin-bottom, reduced margin-top to h1 */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '10px', marginBottom: '1.25rem', width: '100%' }}
            className="w-full flex flex-col items-center justify-center mt-4"
          >
            <h1
              id="hero-heading"
              className="w-full text-center font-display font-extrabold text-slate-900 leading-[1.15] tracking-tight max-w-4xl mx-auto mt-2"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', marginTop: '0.5rem' }}
            >
              Empowering businesses with{' '}
              <span className="text-[#FF001E] inline-block font-black drop-shadow-sm">
                innovative
              </span>{' '}
              technology solutions
            </h1>
          </motion.div>

          {/* Description (<motion.p>): text-align: justify with text-align-last: center and reduced margin-bottom */}
          <motion.p
            variants={itemVariants}
            style={{ textAlign: 'justify', textAlignLast: 'center', marginBottom: '1.75rem' }}
            className="w-full text-justify text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal px-4"
          >
            At IEYAL Solutions, we engineer custom software, automate core operations, and drive digital transformation across more than 15 industries. We streamline your workflows so your team can focus less on manual tasks and more on strategic growth.
          </motion.p>

          {/* 2. Feature Tags Container Fix: 15px margin-bottom, uniform inner padding */}
          <motion.div
            variants={itemVariants}
            style={{ marginBottom: '15px', width: '100%', position: 'relative' }}
            className="w-full flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <span
              style={{ padding: '1rem 2.25rem', marginTop: '0', marginBottom: '15px', position: 'relative' }}
              className="px-9 py-4 rounded-full bg-slate-50 border border-slate-200 text-sm md:text-base font-bold text-slate-800 shadow-sm hover:border-[#FF001E] hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap flex items-center justify-center mb-4"
            >
              WhatsApp Business API Partner
            </span>
            <span
              style={{ padding: '1rem 2.25rem', marginTop: '0', marginBottom: '15px', position: 'relative' }}
              className="px-9 py-4 rounded-full bg-slate-50 border border-slate-200 text-sm md:text-base font-bold text-slate-800 shadow-sm hover:border-[#FF001E] hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap flex items-center justify-center mb-4"
            >
              Custom Software Development
            </span>
            <span
              style={{ padding: '1rem 2.25rem', marginTop: '0', marginBottom: '15px', position: 'relative' }}
              className="px-9 py-4 rounded-full bg-slate-50 border border-slate-200 text-sm md:text-base font-bold text-slate-800 shadow-sm hover:border-[#FF001E] hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default whitespace-nowrap flex items-center justify-center mb-4"
            >
              Enterprise AI Automation
            </span>
          </motion.div>

          {/* 3. Bottom Metrics Component: uniform card padding, light mode shadow and borders */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '0', position: 'relative', zIndex: 10, width: '100%' }}
            className="w-full flex flex-row flex-wrap items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto"
          >
            {HERO_STATS.map(({ value, label }) => (
              <div
                key={label}
                style={{ padding: '1.25rem 2.5rem', marginTop: '0', position: 'relative' }}
                className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#FF001E] hover:shadow-md hover:scale-105 transition-all duration-300 min-w-[220px] justify-center cursor-default overflow-hidden whitespace-nowrap"
              >
                <span className="text-2xl md:text-3xl font-display font-extrabold bg-[linear-gradient(to_right,#FF001E,#E600E6)] bg-clip-text text-transparent flex-shrink-0">
                  {value}
                </span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-600 text-left flex-shrink-0 truncate">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
