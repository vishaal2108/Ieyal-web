import React from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { HeroSection } from '@/components/sections/HeroSection';
import { MarqueeSection } from '@/components/sections/MarqueeSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { AutomationSection } from '@/components/sections/AutomationSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { CultureSection } from '@/components/sections/CultureSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { ContactSection } from '@/components/sections/ContactSection';
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
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <AutomationSection />
      <WhyChooseSection />
      <LeadershipSection />
      <CultureSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <DemoCTASection />
      <ContactSection />
    </PageWrapper>
  );
};
