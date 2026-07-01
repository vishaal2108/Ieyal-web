import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '@/data/company';
import logoImg from '@/assets/logo/logo.png';

const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '/' },
      { label: 'OwnChat', href: '/products' },
      { label: 'OwnTasks', href: '/products' },
      { label: 'OwnCart', href: '/products' },
      { label: 'All Products', href: '/products' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Web Development', href: '/services' },
      { label: 'Mobile App Development', href: '/services' },
      { label: 'WhatsApp Business API', href: '/services' },
      { label: 'CRM Development', href: '/services' },
      { label: 'AI & Automation', href: '/services' },
      { label: 'SEO & Marketing', href: '/services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries' },
      { label: 'Education', href: '/industries' },
      { label: 'Real Estate', href: '/industries' },
      { label: 'Retail & E-Commerce', href: '/industries' },
      { label: 'Manufacturing', href: '/industries' },
      { label: 'All Industries', href: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership Team', href: '/about' },
      { label: 'Company Culture', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Legal & Support',
    links: [
      { label: 'Privacy Policy', href: '/' },
      { label: 'Terms & Conditions', href: '/' },
      { label: 'Security', href: '/' },
      { label: 'Help & FAQ', href: '/' },
      { label: 'Chat on WhatsApp', href: COMPANY.contact.whatsappMsg, isExternal: true },
    ],
  },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 font-sans shadow-sm" aria-label="Site footer">
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main 5-Column Navigation Grid (iLovePDF style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 font-sans">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-base font-bold text-slate-900 mb-4 tracking-tight">
                {col.title}
              </h3>
              <ul className="space-y-3 p-0 m-0 list-none">
                {col.links.map((link) => (
                  <li key={link.label} className="m-0">
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-600 hover:text-[#FF001E] font-medium transition-colors block py-0.5"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-sm text-slate-600 hover:text-[#FF001E] font-medium transition-colors block py-0.5"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Horizontal Separator Line */}
        <div className="border-t border-slate-200 my-10"></div>

        {/* Bottom Bar (Language, Brand, Social & Copyright) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 font-sans">
          {/* Left: Language & Logo / Location */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-600">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
              <img src={logoImg} alt="IEYAL Solutions" className="h-9 sm:h-10 w-auto object-contain block" />
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200/80 shadow-2xs">
              <Globe size={14} className="text-[#FF001E]" aria-hidden="true" />
              English
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="text-xs text-slate-500 font-medium">{COMPANY.contact.address}</span>
          </div>

          {/* Right: Social icons & Copyright slogan */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-5">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: 'LinkedIn', href: COMPANY.social.linkedin },
                { label: 'Facebook', href: COMPANY.social.facebook },
                { label: 'Instagram', href: COMPANY.social.instagram },
                { label: 'WhatsApp', href: COMPANY.contact.whatsappMsg },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-700 hover:bg-[#FF001E] hover:border-[#FF001E] hover:text-white transition-all shadow-2xs"
                  aria-label={`IEYAL Solutions on ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="text-xs font-bold text-slate-700 tracking-wide">
              &copy; {year} {COMPANY.name} &reg; - Your Technology Partner
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
