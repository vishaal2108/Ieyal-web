import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { AboutSection } from '@/components/sections/AboutSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { CultureSection } from '@/components/sections/CultureSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { COMPANY } from '@/data/company';

export const AboutPage: React.FC = () => {
  return (
    <PageWrapper
      title={`About Us - ${COMPANY.name}`}
      description="Learn about IEYAL Solutions, our mission, vision, core values, leadership team, and company culture."
      canonical="/about"
    >
      <div className="pt-10">
        <AboutSection />
        <LeadershipSection />
        <CultureSection />
        <DemoCTASection />
      </div>
    </PageWrapper>
  );
};
