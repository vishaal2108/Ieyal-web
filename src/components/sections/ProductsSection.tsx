import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, ExternalLink } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { PRODUCTS } from '@/data/products';
import ownchatImg from '@/assets/products/ownchat.png';
import owncartImg from '@/assets/products/owncart.png';

const productIcons: Record<string, React.ReactNode> = {
  ownchat: <img src={ownchatImg} alt="OwnChat" className="w-12 h-12 object-contain" />,
  owntasks: <CheckSquare size={28} className="text-white" />,
  owncart: <img src={owncartImg} alt="OwnCart" className="w-12 h-12 object-contain" />,
};

export const ProductsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="products"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-slate-50 border-none shadow-none font-sans"
      aria-labelledby="products-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Growth Suite"
          title="How Each Product Works for Your Business"
          titleHighlight="Works for Your Business"
          subtitle="One connected platform. Three powerful SaaS products built to grow your revenue, automate your customer service, and streamline your operations."
          centered
          className="mb-14 md:mb-16"
          id="products-heading"
        />

        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 items-stretch font-sans">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="bg-white rounded-[2.5rem] border-2 border-slate-200/80 shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-3 hover:scale-[1.015] hover:border-[#FF001E] hover:shadow-[0_25px_50px_-12px_rgba(255,0,30,0.18)] relative flex h-full flex-col overflow-hidden transition-all duration-500 ease-out group cursor-default"
              aria-label={`${product.name} - ${product.tagline}`}
            >
              {/* Card Header (Centered) */}
              <div
                className="px-6 sm:px-8 pt-10 pb-6 flex flex-col items-center text-center border-b border-slate-100"
                style={{
                  background: `linear-gradient(180deg, ${product.color}10 0%, #FFFFFF 100%)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: product.color, marginBottom: '10px' }}
                >
                  {productIcons[product.id]}
                </div>

                <h3
                  style={{ marginBottom: '10px' }}
                  className="font-display font-black text-2xl md:text-3xl text-slate-900 leading-tight"
                >
                  {product.name}
                </h3>
                <p
                  style={{ marginBottom: '10px' }}
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E600E6]"
                >
                  {product.tagline}
                </p>
                <p
                  style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px' }}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-sm mx-auto px-[10px]"
                >
                  {product.description}
                </p>
              </div>

              {/* Clean Minimalist Typography Features (No Emojis or Dots, Left Aligned One by One) */}
              <div className="px-6 sm:px-8 py-8 flex-grow flex flex-col justify-center bg-slate-50/50">
                <p
                  style={{ fontWeight: 800, marginBottom: '10px' }}
                  className="text-center text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF001E]"
                >
                  Key Capabilities
                </p>
                <ul className="flex flex-col max-w-xs sm:max-w-sm mx-auto w-full p-0 list-none" role="list">
                  {product.features.slice(0, 4).map((feature, idx) => (
                    <li
                      key={`${feature.title}-${idx}`}
                      style={{ marginBottom: '10px', paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}
                      className="py-1 text-center text-sm sm:text-base font-semibold text-slate-800 m-0 transition-colors group-hover:text-[#FF001E] block w-full"
                    >
                      {feature.title}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer with Standalone Pill Button */}
              <div className="px-6 sm:px-8 pb-9 pt-7 flex flex-col items-center justify-center mt-auto border-t border-slate-100 bg-white">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ marginBottom: '10px' }}
                  className="inline-flex items-center justify-center gap-2 px-[16px] py-[10px] rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-sm sm:text-base shadow-md shadow-red-500/20 hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                >
                  {product.cta.primary}
                </a>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '10px' }}
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-slate-500 hover:text-[#FF001E] transition-colors py-1"
                  aria-label={`Visit ${product.name} website`}
                >
                  <ExternalLink size={13} aria-hidden="true" />
                  Visit {product.name} Website
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
