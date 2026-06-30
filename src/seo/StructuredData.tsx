import React from 'react';
import { COMPANY } from '@/data/company';

export const StructuredData: React.FC = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY.name,
    "url": COMPANY.meta.siteUrl,
    "logo": `${COMPANY.meta.siteUrl}/assets/logo.png`,
    "description": COMPANY.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thiruvarur",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY.contact.phone,
      "contactType": "customer service"
    },
    "sameAs": [
      COMPANY.social.linkedin,
      COMPANY.social.facebook,
      COMPANY.social.instagram
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
    />
  );
};
