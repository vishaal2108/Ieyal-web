import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQS } from '@/data/faqs';
import { useInView } from '@/hooks/useInView';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId]   = useState<string | null>(null);
  const { ref, inView }       = useInView({ threshold: 0.05 });

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="faq"
      className="section-padding bg-[#1C2626] border-b border-[#344646]"
      aria-labelledby="faq-heading"
    >
      <div className="container-xl">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions We Hear "
          titleHighlight="Most Often"
          subtitle="Straight answers to the things businesses typically want to know before working with us."
          centered
          className="mb-14"
          id="faq-heading"
        />

        <div
          className="max-w-3xl mx-auto space-y-3"
          role="list"
          aria-label="Frequently Asked Questions"
        >
          {FAQS.map(({ id, question, answer }, i) => (
            <div
              key={id}
              role="listitem"
              className={`card-base overflow-hidden transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                id={`faq-btn-${id}`}
                aria-expanded={openId === id}
                aria-controls={`faq-panel-${id}`}
                onClick={() => toggle(id)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-[#263333] transition-colors"
              >
                <span className="font-semibold text-[#FFFFFF] text-base leading-snug">{question}</span>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                  style={{ background: openId === id ? 'rgba(255,0,30,0.15)' : 'rgba(230,0,230,0.15)' }}
                  aria-hidden="true"
                >
                  {openId === id ? (
                    <Minus size={16} className="text-[#FF001E]" />
                  ) : (
                    <Plus size={16} className="text-[#E600E6]" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === id && (
                  <motion.div
                    id={`faq-panel-${id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="h-px bg-[#344646] mb-4" />
                      <p className="text-[#A0B2B2] text-sm leading-relaxed">{answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
