import { useEffect, useRef } from 'react';

interface SEOProps {
  title:       string;
  description: string;
  canonical?:  string;
  ogImage?:    string;
  ogType?:     string;
  noIndex?:    boolean;
  keywords?:   string;
}

const BASE_URL = 'https://www.ieyalsolutions.com'; // PLACEHOLDER — update on deployment

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSEO({
  title,
  description,
  canonical,
  ogImage = '/assets/og-image.png',
  ogType  = 'website',
  noIndex = false,
  keywords,
}: SEOProps) {
  const prevTitle = useRef(document.title);

  useEffect(() => {
    const fullTitle = title.includes('IEYAL')
      ? title
      : `${title} | IEYAL Solutions Private Limited`;

    document.title = fullTitle;

    setMeta('description', description);
    if (keywords)  setMeta('keywords', keywords);
    if (noIndex)   setMeta('robots', 'noindex, nofollow');
    else           setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:type',        ogType,       true);
    setMeta('og:title',       fullTitle,    true);
    setMeta('og:description', description,  true);
    setMeta('og:image',       ogImage,      true);
    setMeta('og:site_name',   'IEYAL Solutions', true);
    if (canonical) setMeta('og:url', `${BASE_URL}${canonical}`, true);

    // Twitter Card
    setMeta('twitter:card',        'summary_large_image');
    setMeta('twitter:title',       fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image',       ogImage);
    setMeta('twitter:site',        '@ieyalsolutions');

    // Canonical
    if (canonical) setLink('canonical', `${BASE_URL}${canonical}`);

    return () => {
      document.title = prevTitle.current;
    };
  }, [title, description, canonical, ogImage, ogType, noIndex, keywords]);
}
