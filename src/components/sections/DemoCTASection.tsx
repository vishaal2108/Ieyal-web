import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';
import { COMPANY } from '@/data/company';

export const DemoCTASection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="demo-cta"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060E1F 0%, #0F2B5B 50%, #0D1F47 100%)' }}
      aria-labelledby="demo-cta-heading"
    >
      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 20% 50%, rgba(26,111,219,0.20) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 40%, rgba(245,158,11,0.08) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary-300 border border-primary-600/30 bg-primary-900/30 mb-6">
            <Calendar size={12} aria-hidden="true" />
            Free 30-Minute Demo Call
          </span>

          <h2
            id="demo-cta-heading"
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.2 }}
          >
            Ready to See What We Can{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #4090FF 0%, #25D366 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Build for Your Business?
            </span>
          </h2>

          <p className="text-blue-100/60 text-lg leading-relaxed mb-10">
            Book a free, no-pressure demo call. We will understand your requirements and show you exactly how IEYAL can help — with a tailored walkthrough of our products and services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="xl" href="/contact">
              Request a Free Demo
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              variant="outline-white"
              size="xl"
              href={COMPANY.contact.whatsappMsg}
              external
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
              </svg>
              Chat on WhatsApp
            </Button>
          </div>

          <p className="text-blue-100/30 text-xs mt-6">
            No commitments. No pressure. Just a conversation about your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
