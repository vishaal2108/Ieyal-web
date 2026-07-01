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
          eyebrow="Our Products"
          title="Software Built for Real Business Problems"
          titleHighlight="Real Business Problems"
          subtitle="Three SaaS products, built from the ground up based on conversations with business owners who needed better tools."
          centered
          className="mb-16 md:mb-20"
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
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md relative flex h-full flex-col overflow-hidden transition-all duration-300"
              aria-label={`${product.name} - ${product.tagline}`}
            >
              <div
                className="px-6 sm:px-8 pt-8 pb-7 border-b border-slate-200"
                style={{
                  background: `linear-gradient(135deg, ${product.color}15 0%, #FFFFFF 100%)`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                  style={{ backgroundColor: product.color }}
                >
                  {productIcons[product.id]}
                </div>

                <h3 className="font-bold text-2xl md:text-3xl text-slate-900 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-base font-bold mb-4 text-[#E600E6]">
                  {product.tagline}
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4 font-normal">
                  {product.description}
                </p>
              </div>

              <div className="px-6 sm:px-8 py-7 flex-grow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF001E] mb-5">
                  Key Capabilities
                </p>
                <ul className="grid gap-3 p-0 flex-grow" role="list">
                  {product.features.slice(0, 5).map((feature, idx) => (
                    <li
                      key={`${feature.title}-${idx}`}
                      className="m-0 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-sm shadow-sm transition-colors hover:border-[#FF001E]"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0 bg-[#FF001E]"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed text-slate-600 font-normal">
                          <strong className="font-bold text-slate-900 block mb-1">{feature.title}</strong>
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="px-6 sm:px-8 pb-8 pt-6 flex flex-col gap-3 mt-auto border-t border-slate-200"
              >
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold text-base shadow-md shadow-red-500/20 hover:scale-105 transition-all w-full cursor-pointer"
                >
                  {product.cta.primary}
                </a>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600 hover:text-[#FF001E] transition-colors py-2"
                  aria-label={`Visit ${product.name} website`}
                >
                  <ExternalLink size={14} aria-hidden="true" />
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
