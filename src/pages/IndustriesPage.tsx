import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { COMPANY } from '@/data/company';

export const IndustriesPage: React.FC = () => {
  return (
    <PageWrapper
      title={`Industries We Serve - ${COMPANY.name}`}
      description="We provide technology solutions for Healthcare, Education, Real Estate, Retail, Manufacturing, and more."
      canonical="/industries"
    >
      <div className="pt-10">
        <IndustriesSection />
        <TestimonialsSection />
      </div>
    </PageWrapper>
  );
};
