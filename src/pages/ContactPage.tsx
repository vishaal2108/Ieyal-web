import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { ContactSection } from '@/components/sections/ContactSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { COMPANY } from '@/data/company';

export const ContactPage: React.FC = () => {
  return (
    <PageWrapper
      title={`Contact Us - ${COMPANY.name}`}
      description={`Get in touch with ${COMPANY.name}. Request a demo, ask a question, or start a project.`}
      canonical="/contact"
    >
      <div className="pt-10 pb-10">
        <ContactSection />
        <DemoCTASection />
      </div>
    </PageWrapper>
  );
};
