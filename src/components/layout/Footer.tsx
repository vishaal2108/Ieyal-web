import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data/company';

const FOOTER_LINKS = {
  Products: [
    { label: 'OwnChat',  href: '/products/ownchat' },
    { label: 'OwnTasks', href: '/products/owntasks' },
    { label: 'OwnCart',  href: '/products/owncart' },
  ],
  Services: [
    { label: 'Web Development',        href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'WhatsApp Business API',  href: '/services/whatsapp-business-api' },
    { label: 'CRM Development',        href: '/services/crm-development' },
    { label: 'AI & Automation',        href: '/services/ai-automation' },
    { label: 'SEO',                    href: '/services/seo' },
  ],
  Company: [
    { label: 'About Us',    href: '/about' },
    { label: 'Industries',  href: '/industries' },
    { label: 'Contact',     href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ieyal-dark text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column — spans 2 on large */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-3" aria-label="IEYAL Solutions – Home">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #1A6FDB 0%, #0F4490 100%)' }}
                aria-hidden="true"
              >
                IE
              </div>
              <span className="font-display font-bold text-white text-xl">
                IEYAL <span className="text-primary-400">Solutions</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              IT services and consulting company helping businesses grow through intelligent software, automation, and digital transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.contact.phone}`}
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
                aria-label={`Call us at ${COMPANY.contact.phone}`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition-colors">
                  <Phone size={14} className="text-primary-300" aria-hidden="true" />
                </div>
                {COMPANY.contact.phone}
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
                aria-label={`Email us at ${COMPANY.contact.email}`}
              >
                <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-700 transition-colors">
                  <Mail size={14} className="text-primary-300" aria-hidden="true" />
                </div>
                {COMPANY.contact.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary-300" aria-hidden="true" />
                </div>
                {COMPANY.contact.address}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 hover:bg-primary-700 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 hover:bg-primary-700 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 hover:bg-primary-700 hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                {category}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA Strip */}
      <div className="border-t border-white/5">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">
              Have a project in mind? Let us talk.
            </p>
            <a
              href={COMPANY.contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-all"
              aria-label="Start a WhatsApp conversation with IEYAL Solutions"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Start a WhatsApp Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
            <p>
              &copy; {year} {COMPANY.name}. All rights reserved.
            </p>
            <p>
              Headquartered in Thiruvarur, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
