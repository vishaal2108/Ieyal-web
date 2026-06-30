import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { StructuredData } from '@/seo/StructuredData';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  title,
  description,
  canonical,
  noIndex = false,
}) => {
  useSEO({ title, description, canonical, noIndex });
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="flex-grow">
      <StructuredData />
      {children}
    </main>
  );
};
