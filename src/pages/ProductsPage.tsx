import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { COMPANY } from '@/data/company';

export const ProductsPage: React.FC = () => {
  return (
    <PageWrapper
      title={`Our Products - ${COMPANY.name}`}
      description="Discover our SaaS products: OwnChat, OwnTasks, and OwnCart, built to solve real business problems."
      canonical="/products"
    >
      <div className="pt-10">
        <ProductsSection />
        <DemoCTASection />
      </div>
    </PageWrapper>
  );
};
