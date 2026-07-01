import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { COMPANY } from '@/data/company';

export const HomePage: React.FC = () => {
  return (
    <PageWrapper
      title={`${COMPANY.name} - ${COMPANY.tagline}`}
      description={COMPANY.description}
      canonical="/"
    >
      <HeroSection />
      <MarqueeSection />
      <StatisticsSection />
      <DemoCTASection />
    </PageWrapper>
  );
};
