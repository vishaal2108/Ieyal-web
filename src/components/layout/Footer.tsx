import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

const FOOTER_LINKS = {
  Products: [
    { label: 'OwnChat', href: '/products/ownchat' },
    { label: 'OwnTasks', href: '/products/owntasks' },
    { label: 'OwnCart', href: '/products/owncart' },
  ],
  Services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'WhatsApp Business API', href: '/services/whatsapp-business-api' },
    { label: 'CRM Development', href: '/services/crm-development' },
    { label: 'AI & Automation', href: '/services/ai-automation' },
    { label: 'SEO', href: '/services/seo' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ieyal-darker text-white border-t border-white/10" aria-label="Site footer">
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          <div className="flex flex-col">
            <Link to="/" className="inline-flex items-center mb-6" aria-label="IEYAL Solutions Home">
              <span className="rounded-2xl bg-white flex items-center justify-center px-4 py-3 shadow-glass" aria-hidden="true">
                <img src="/logo.svg" alt="IEYAL Solutions" className="h-10 w-auto object-contain" />
              </span>
            </Link>

            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mb-8">
              IT services and consulting company helping businesses grow through intelligent software,
              automation, and digital transformation.
            </p>

            <div className="grid gap-4 mb-8">
              <a
                href={`tel:${COMPANY.contact.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
                aria-label={`Call us at ${COMPANY.contact.phone}`}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ieyal-primary transition-colors">
                  <Phone size={14} className="text-ieyal-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </span>
                <span>{COMPANY.contact.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
                aria-label={`Email us at ${COMPANY.contact.email}`}
              >
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-ieyal-primary transition-colors">
                  <Mail size={14} className="text-ieyal-primary group-hover:text-white transition-colors" aria-hidden="true" />
                </span>
                <span className="break-all">{COMPANY.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-ieyal-primary" aria-hidden="true" />
                </span>
                <span>{COMPANY.contact.address}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { label: 'LinkedIn', href: COMPANY.social.linkedin },
                { label: 'Facebook', href: COMPANY.social.facebook },
                { label: 'Instagram', href: COMPANY.social.instagram },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/70 hover:bg-ieyal-primary hover:border-ieyal-primary hover:text-white transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} footer links`} className="lg:pl-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-white/10 inline-block w-full">
                {category}
              </h3>
              <ul className="space-y-4 p-0" role="list">
                {links.map((link) => (
                  <li key={link.href} className="m-0">
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ArrowRight
                        size={14}
                        className="text-ieyal-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-white/[0.025]">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-sm text-white/65">
              Have a project in mind? Let us talk.
            </p>
            <a
              href={COMPANY.contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/12 border border-[#25D366]/25 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/20 transition-all"
              aria-label="Start a WhatsApp conversation with IEYAL Solutions"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Start a WhatsApp Conversation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45 text-center sm:text-left">
            <p>&copy; {year} {COMPANY.name}. All rights reserved.</p>
            <p>Headquartered in Thiruvarur, Tamil Nadu, India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
