import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Globe, Smartphone } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { Button } from '@/components/ui/Button';

const HERO_STATS = [
  { value: '50+', label: 'Clients Served' },
  { value: '3',   label: 'Products Built' },
  { value: '15+', label: 'Industries Served' },
];

const TRUST_BADGES = [
  'WhatsApp Business API Partner',
  'Custom Software Development',
  'Enterprise AI Automation',
];

const FLOATING_CARDS = [
  {
    icon:  <MessageCircle size={20} className="text-[#25D366]" aria-hidden="true" />,
    bg:    'rgba(37,211,102,0.10)',
    title: 'OwnChat',
    sub:   'WhatsApp CRM & Automation',
    delay: 0,
  },
  {
    icon:  <Globe size={20} className="text-ieyal-secondary" aria-hidden="true" />,
    bg:    'rgba(26,111,219,0.10)',
    title: 'Web & Mobile',
    sub:   'Custom Development',
    delay: 0.3,
  },
  {
    icon:  <Smartphone size={20} className="text-accent-500" aria-hidden="true" />,
    bg:    'rgba(245,158,11,0.10)',
    title: 'AI Automation',
    sub:   'Intelligent Workflows',
    delay: 0.6,
  },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-hero grid-overlay overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 75% 50%, rgba(26,111,219,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-300 border border-primary-600/30 bg-primary-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true" />
                IT Services & Consulting — Thiruvarur, India
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1
                id="hero-heading"
                className="font-display font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)', letterSpacing: '-0.02em' }}
              >
                Technology That{' '}
                <span
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #4090FF 0%, #25D366 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Moves Businesses
                </span>{' '}
                Forward
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-blue-100/70 leading-relaxed max-w-xl"
            >
              IEYAL Solutions builds custom software, automates operations, and delivers digital transformation for businesses across 15+ industries — so your team spends less time on manual work and more time on growth.
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-blue-100/60">
                  <CheckCircle2 size={14} className="text-[#25D366] flex-shrink-0" aria-hidden="true" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <Button variant="primary" size="lg" href="/contact">
                Get a Free Demo
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                href={COMPANY.contact.whatsappMsg}
                external
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
                </svg>
                Chat on WhatsApp
              </Button>
            </motion.div>

            {/* Stat Strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-6 border-t border-white/10"
            >
              {HERO_STATS.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-display font-bold text-white">{value}</p>
                  <p className="text-xs text-blue-100/50 mt-0.5 font-medium uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Floating Visual Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-5 relative"
            aria-hidden="true"
          >
            {/* Main Visual Card */}
            <div className="glass-dark rounded-2xl p-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <div className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
              </div>
              <div className="space-y-3">
                {[
                  { label: 'WhatsApp Automation', color: '#25D366', w: '80%' },
                  { label: 'Custom CRM Built',    color: '#1A6FDB', w: '60%' },
                  { label: 'AI Workflows Active', color: '#F59E0B', w: '70%' },
                ].map(({ label, color, w }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-white/60">{label}</span>
                      <span className="text-xs text-white/40">{w}</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: color, width: 0 }}
                        animate={{ width: w }}
                        transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  { n: '3', l: 'Products' },
                  { n: '14+', l: 'Services' },
                  { n: '15+', l: 'Industries' },
                ].map(({ n, l }) => (
                  <div key={l} className="bg-white/5 rounded-xl p-3">
                    <p className="text-xl font-bold text-white font-display">{n}</p>
                    <p className="text-xs text-white/40 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Micro Cards */}
            {FLOATING_CARDS.map(({ icon, bg, title, sub, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + delay }}
                className="self-end glass-dark rounded-xl px-4 py-3 flex items-center gap-3 max-w-xs"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-white/40">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};
