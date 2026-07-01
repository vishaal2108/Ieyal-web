import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { COMPANY } from '@/data/company';

export const ServicesPage: React.FC = () => {
  return (
    <PageWrapper
      title={`Our Services - ${COMPANY.name}`}
      description="Explore our IT services including Web Development, Custom Software, WhatsApp Automation, and Digital Transformation."
      canonical="/services"
    >
      <div className="pt-10">
        <ServicesSection />
        <ProcessSection />
        <DemoCTASection />
      </div>
    </PageWrapper>
  );
};
