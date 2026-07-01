import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/data/company';

export const DemoCTASection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="demo-cta"
      style={{ marginTop: '50px', marginBottom: '60px' }}
      className="py-12 relative bg-transparent font-sans border-none shadow-none flex flex-col items-center justify-center w-full z-20"
      aria-labelledby="demo-cta-heading"
    >
      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 20% 50%, rgba(255,0,30,0.03) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 85% 40%, rgba(230,0,230,0.03) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto bg-gradient-to-br from-slate-50 via-white to-red-50/20 rounded-[2.5rem] border border-slate-200/80 relative z-10 w-full flex flex-col items-center justify-center"
          style={{
            padding: '20px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.15), 0 0 30px rgba(0, 0, 0, 0.05)'
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#FF001E] border border-red-200 bg-red-50 mb-6">
            <Calendar size={14} aria-hidden="true" />
            Free 30-Minute Demo Call
          </span>

          <h2
            id="demo-cta-heading"
            className="font-display font-black text-slate-900 mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.2 }}
          >
            Ready to See What We Can{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FF001E 0%, #E600E6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Build for Your Business?
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Book a free, no-pressure demo call. We will understand your requirements and show you exactly how IEYAL can help — with a tailored walkthrough of our products and services.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Link
              to="/contact"
              style={{ padding: '10px 16px' }}
              className="rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/25 hover:scale-105 hover:shadow-xl transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
            >
              Request a Free Demo
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={COMPANY.contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '10px 16px' }}
              className="rounded-full bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-200 hover:text-slate-900 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <p className="text-slate-400 text-xs font-normal m-0">
            No commitments. No pressure. Just a conversation about your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
