import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, CheckSquare, ShoppingCart } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { PRODUCTS } from '@/data/products';
import { Button } from '@/components/ui/Button';

const productIcons: Record<string, React.ReactNode> = {
  ownchat:  <MessageCircle size={24} className="text-[#25D366]" />,
  owntasks: <CheckSquare  size={24} className="text-[#4F46E5]" />,
  owncart:  <ShoppingCart size={24} className="text-[#F59E0B]" />,
};

export const ProductsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="products"
      className="section-padding bg-white"
      aria-labelledby="products-heading"
    >
      <div className="container-xl">
        <SectionHeader
          eyebrow="Our Products"
          title="Software We Built for "
          titleHighlight="Real Business Problems"
          subtitle="Three SaaS products, built from the ground up based on conversations with business owners who needed better tools."
          centered
          className="mb-14"
          id="products-heading"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col rounded-2xl border border-neutral-100 overflow-hidden bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500 group"
              aria-label={`${product.name} — ${product.tagline}`}
            >
              {/* Card Header */}
              <div
                className="relative p-8 pb-6"
                style={{
                  background: `linear-gradient(135deg, ${product.gradientFrom}12 0%, ${product.gradientTo}08 100%)`,
                  borderBottom: `1px solid ${product.color}18`,
                }}
              >
                {/* Product Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-soft-sm"
                  style={{ background: `${product.color}18`, border: `1.5px solid ${product.color}30` }}
                >
                  {productIcons[product.id]}
                </div>

                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-1">
                  {product.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: product.color }}
                >
                  {product.tagline}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features List */}
              <div className="p-8 pt-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Key Capabilities</p>
                <ul className="space-y-2.5" role="list">
                  {product.features.slice(0, 5).map((feature) => (
                    <li key={feature.title} className="flex items-start gap-2.5 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: product.color }}
                        aria-hidden="true"
                      />
                      <span className="text-neutral-600 leading-relaxed">
                        <span className="font-medium text-neutral-800">{feature.title}</span>
                        {' '}&mdash; {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div
                className="px-8 pb-8 flex flex-col gap-3"
                style={{ borderTop: `1px solid ${product.color}12` }}
              >
                <div className="pt-6" />
                <Button
                  variant="primary"
                  href={product.cta.primaryUrl}
                  className="w-full justify-center"
                >
                  {product.cta.primary}
                </Button>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-500 hover:text-ieyal-primary transition-colors py-1"
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
