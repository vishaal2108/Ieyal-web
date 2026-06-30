import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, CheckSquare, ShoppingCart } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { PRODUCTS } from '@/data/products';
import { Button } from '@/components/ui/Button';

const productIcons: Record<string, React.ReactNode> = {
  ownchat: <MessageCircle size={28} className="text-white" />,
  owntasks: <CheckSquare size={28} className="text-white" />,
  owncart: <ShoppingCart size={28} className="text-white" />,
};

export const ProductsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="products"
      className="section-padding bg-light-section border-b border-ieyal-border"
      aria-labelledby="products-heading"
    >
      <div className="container-xl">
        <SectionHeader
          eyebrow="Our Products"
          title="Software Built for Real Business Problems"
          titleHighlight="Real Business Problems"
          subtitle="Three SaaS products, built from the ground up based on conversations with business owners who needed better tools."
          centered
          className="mb-16 md:mb-20"
          id="products-heading"
        />

        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="card-elevated relative flex h-full flex-col overflow-hidden"
              aria-label={`${product.name} - ${product.tagline}`}
            >
              <div
                className="px-6 sm:px-8 pt-8 pb-7 border-b"
                style={{
                  background: `linear-gradient(135deg, ${product.color}18 0%, #FFFFFF 75%)`,
                  borderColor: `${product.color}24`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-soft-sm"
                  style={{ backgroundColor: product.color }}
                >
                  {productIcons[product.id]}
                </div>

                <h3 className="font-bold text-2xl md:text-3xl text-ieyal-darker mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-base font-semibold mb-4" style={{ color: product.color }}>
                  {product.tagline}
                </p>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>

              <div className="px-6 sm:px-8 py-7 flex-grow flex flex-col">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">
                  Key Capabilities
                </p>
                <ul className="grid gap-3 p-0 flex-grow" role="list">
                  {product.features.slice(0, 5).map((feature, idx) => (
                    <li
                      key={`${feature.title}-${idx}`}
                      className="m-0 rounded-xl border border-neutral-100 bg-neutral-50/50 p-4 text-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-colors hover:bg-white"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2.5 w-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: product.color }}
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed text-neutral-600">
                          <strong className="font-semibold text-ieyal-darker block mb-1">{feature.title}</strong>
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="px-6 sm:px-8 pb-8 pt-6 flex flex-col gap-3 mt-auto"
                style={{ borderTop: `1px solid ${product.color}24` }}
              >
                <Button variant="primary" href={product.cta.primaryUrl} className="w-full justify-center">
                  {product.cta.primary}
                </Button>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-neutral-600 hover:text-primary-500 transition-colors py-2"
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
