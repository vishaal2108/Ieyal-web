import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle, CheckSquare, ShoppingCart, Globe, Smartphone, Code2, LayoutDashboard, Bot, Search, Palette, Cloud, Zap, Plug, Workflow, Cpu } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  MessageCircle, CheckSquare, ShoppingCart, Globe, Smartphone, Code2,
  LayoutDashboard, Bot, Search, Palette, Cloud, Zap, Plug, Workflow, Cpu,
};

const PRODUCTS = [
  { label: 'OwnChat',  href: '/products/ownchat',  description: 'WhatsApp CRM, Chatbot & Automation', icon: 'MessageCircle', color: '#25D366' },
  { label: 'OwnTasks', href: '/products/owntasks', description: 'Task management & productivity',      icon: 'CheckSquare',   color: '#4F46E5' },
  { label: 'OwnCart',  href: '/products/owncart',  description: 'E-commerce & digital store',         icon: 'ShoppingCart',  color: '#F59E0B' },
];

const SERVICES_NAV = [
  { label: 'Web Development',        href: '/services/web-development',       icon: 'Globe' },
  { label: 'Mobile App Development', href: '/services/mobile-app-development', icon: 'Smartphone' },
  { label: 'Custom Software',        href: '/services/custom-software',        icon: 'Code2' },
  { label: 'WhatsApp Business API',  href: '/services/whatsapp-business-api',  icon: 'MessageCircle' },
  { label: 'CRM Development',        href: '/services/crm-development',        icon: 'LayoutDashboard' },
  { label: 'AI & Automation',        href: '/services/ai-automation',          icon: 'Bot' },
  { label: 'SEO',                    href: '/services/seo',                    icon: 'Search' },
  { label: 'UI/UX Design',           href: '/services/ui-ux-design',           icon: 'Palette' },
  { label: 'Cloud Solutions',        href: '/services/cloud-solutions',        icon: 'Cloud' },
  { label: 'Digital Transformation', href: '/services/digital-transformation', icon: 'Zap' },
];

const NAV_LINKS = [
  { label: 'Home',        href: '/',           hasDropdown: false },
  { label: 'Products',    href: '/products',   hasDropdown: true,  dropdownKey: 'products' },
  { label: 'Services',    href: '/services',   hasDropdown: true,  dropdownKey: 'services' },
  { label: 'Industries',  href: '/industries', hasDropdown: false },
  { label: 'About',       href: '/about',      hasDropdown: false },
  { label: 'Contact',     href: '/contact',    hasDropdown: false },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [activeDropdown, setActiveDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded]   = useState<string | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="bg-ieyal-primary text-white text-center py-2 px-4 text-sm"
        role="banner"
      >
        <span className="font-medium">New:</span> OwnChat now supports Instagram Automation.{' '}
        <Link
          to="/products/ownchat"
          className="underline font-semibold hover:text-yellow-300 transition-colors"
          onClick={closeAll}
        >
          Learn More
        </Link>
      </div>

      {/* Navbar */}
      <header
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100"
        style={{ boxShadow: 'var(--shadow-navbar)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-18 gap-4">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeAll}
              className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none"
              aria-label="IEYAL Solutions – Home"
            >
              {/* SVG Logo Placeholder — replace src with official logo */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1A6FDB 100%)' }}
                aria-hidden="true"
              >
                IE
              </div>
              <span className="font-display font-bold text-ieyal-primary text-lg leading-tight hidden xs:block">
                IEYAL <span className="text-ieyal-secondary font-semibold">Solutions</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.dropdownKey!)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={closeAll}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                        isActive
                          ? 'text-ieyal-secondary bg-primary-50'
                          : 'text-neutral-600 hover:text-ieyal-primary hover:bg-neutral-50'
                      }`
                    }
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.dropdownKey ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    )}
                  </NavLink>

                  {/* Products Dropdown */}
                  {link.dropdownKey === 'products' && activeDropdown === 'products' && (
                    <div
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-2xl shadow-soft-xl border border-neutral-100 overflow-hidden z-50 p-2"
                      role="menu"
                      aria-label="Products menu"
                    >
                      {PRODUCTS.map((product) => {
                        const Icon = iconMap[product.icon] as React.FC<{ size?: number; style?: React.CSSProperties }>;
                        return (
                          <Link
                            key={product.href}
                            to={product.href}
                            onClick={closeAll}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                            role="menuitem"
                          >
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ background: `${product.color}18` }}
                            >
                              {Icon && <Icon size={18} style={{ color: product.color }} />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-neutral-800 group-hover:text-ieyal-primary transition-colors">{product.label}</p>
                              <p className="text-xs text-neutral-500 mt-0.5">{product.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                      <div className="border-t border-neutral-100 mt-2 pt-2">
                        <Link
                          to="/products"
                          onClick={closeAll}
                          className="flex items-center justify-center gap-1 p-2 text-sm text-ieyal-secondary font-medium hover:bg-primary-50 rounded-xl transition-colors"
                          role="menuitem"
                        >
                          View All Products
                          <ChevronDown size={14} className="-rotate-90" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Services Dropdown */}
                  {link.dropdownKey === 'services' && activeDropdown === 'services' && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-soft-xl border border-neutral-100 overflow-hidden z-50 p-2"
                      role="menu"
                      aria-label="Services menu"
                    >
                      {SERVICES_NAV.map((svc) => {
                        const Icon = iconMap[svc.icon] as React.FC<{ size?: number; className?: string }>;
                        return (
                          <Link
                            key={svc.href}
                            to={svc.href}
                            onClick={closeAll}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-50 transition-colors group"
                            role="menuitem"
                          >
                            {Icon && <Icon size={16} className="text-ieyal-secondary flex-shrink-0" />}
                            <span className="text-sm text-neutral-700 group-hover:text-ieyal-primary transition-colors font-medium">{svc.label}</span>
                          </Link>
                        );
                      })}
                      <div className="border-t border-neutral-100 mt-2 pt-2">
                        <Link
                          to="/services"
                          onClick={closeAll}
                          className="flex items-center justify-center gap-1 p-2 text-sm text-ieyal-secondary font-medium hover:bg-primary-50 rounded-xl transition-colors"
                          role="menuitem"
                        >
                          All Services
                          <ChevronDown size={14} className="-rotate-90" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={COMPANY.contact.whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-[#25D366] transition-colors px-2 py-1.5"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp
              </a>
              <Button variant="primary" size="sm" href="/contact">
                Get a Free Demo
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-neutral-100 bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-xl py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === link.dropdownKey ? null : link.dropdownKey!)}
                        aria-expanded={mobileExpanded === link.dropdownKey}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileExpanded === link.dropdownKey ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>
                      {mobileExpanded === link.dropdownKey && (
                        <div className="pl-4 mt-1 space-y-1">
                          {(link.dropdownKey === 'products' ? PRODUCTS : SERVICES_NAV).map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={closeAll}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 hover:text-ieyal-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.href}
                      end={link.href === '/'}
                      onClick={closeAll}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-ieyal-secondary'
                            : 'text-neutral-700 hover:bg-neutral-50 hover:text-ieyal-primary'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                <a
                  href={COMPANY.contact.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-md justify-center border border-[#25D366] text-[#25D366] hover:bg-green-50"
                  onClick={closeAll}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <Button variant="primary" size="md" href="/contact" onClick={closeAll}>
                  Get a Free Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
