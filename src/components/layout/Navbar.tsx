import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, MessageCircle, CheckSquare, ShoppingCart, Globe, Smartphone, Code2, LayoutDashboard, Bot, Search, Palette, Cloud, Zap, Plug, Workflow, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY } from '@/data/company';
const logoImg = COMPANY.logo;

const iconMap: Record<string, React.FC<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  MessageCircle, CheckSquare, ShoppingCart, Globe, Smartphone, Code2,
  LayoutDashboard, Bot, Search, Palette, Cloud, Zap, Plug, Workflow, Cpu,
};

const PRODUCTS = [
  { label: 'OwnChat',  href: '/products',  description: 'WhatsApp CRM, Chatbot & Automation', icon: 'MessageCircle', color: '#25D366' },
  { label: 'OwnTasks', href: '/products', description: 'Task management & productivity',      icon: 'CheckSquare',   color: '#4F46E5' },
  { label: 'OwnCart',  href: '/products',  description: 'E-commerce & digital store',         icon: 'ShoppingCart',  color: '#F59E0B' },
];

const SERVICES_NAV = [
  { label: 'Web Development',        href: '/services', icon: 'Globe' },
  { label: 'Mobile App Development', href: '/services', icon: 'Smartphone' },
  { label: 'Custom Software',        href: '/services', icon: 'Code2' },
  { label: 'WhatsApp Business API',  href: '/services', icon: 'MessageCircle' },
  { label: 'CRM Development',        href: '/services', icon: 'LayoutDashboard' },
  { label: 'AI & Automation',        href: '/services', icon: 'Bot' },
  { label: 'SEO',                    href: '/services', icon: 'Search' },
  { label: 'UI/UX Design',           href: '/services', icon: 'Palette' },
  { label: 'Cloud Solutions',        href: '/services', icon: 'Cloud' },
  { label: 'Digital Transformation', href: '/services', icon: 'Zap' },
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
  const [isHidden, setIsHidden]               = useState(false);
  const [isScrolled, setIsScrolled]           = useState(false);
  const hideTimerRef                          = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHiddenRef                           = useRef(false);
  const location                              = useLocation();

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  };

  // 1. Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
      if (!scrolled) {
        setIsHidden(false);
        isHiddenRef.current = false;
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Auto-hide after inactivity when scrolled down, reappear on any mouse/scroll/touch activity
  useEffect(() => {
    if (!isScrolled || mobileOpen || activeDropdown) {
      setIsHidden(false);
      isHiddenRef.current = false;
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      return;
    }

    const resetTimerAndShow = () => {
      if (isHiddenRef.current) {
        setIsHidden(false);
        isHiddenRef.current = false;
      }
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

      if (window.scrollY > 100) {
        hideTimerRef.current = setTimeout(() => {
          setIsHidden(true);
          isHiddenRef.current = true;
        }, 2500);
      }
    };

    resetTimerAndShow();

    const events = ['mousemove', 'scroll', 'keydown', 'click', 'touchstart', 'touchmove'];
    events.forEach((event) => window.addEventListener(event, resetTimerAndShow, { passive: true }));

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      events.forEach((event) => window.removeEventListener(event, resetTimerAndShow));
    };
  }, [isScrolled, mobileOpen, activeDropdown]);

  return (
    <>
      {/* Navbar (Centered Glassmorphism floating pill like uengage.io) */}
      <header
        className={`sticky top-4 z-50 px-3 sm:px-6 lg:px-8 transition-all duration-500 pointer-events-none mt-4 flex justify-center w-full ${
          isHidden ? '-translate-y-[150%] opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-7xl mx-auto pointer-events-auto bg-white/70 backdrop-blur-xl border border-white/80 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.12)] hover:shadow-[0_8px_36px_0_rgba(31,38,135,0.16)] transition-all duration-300 px-4 sm:px-6 lg:px-8 py-1.5 overflow-visible">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3 lg:gap-4 xl:gap-6 w-full">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeAll}
              className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none py-1 group cursor-pointer"
              aria-label="IEYAL Solutions – Home"
            >
              <img
                src={logoImg}
                alt="IEYAL Solutions"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-3 flex-shrink-0" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.dropdownKey!)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      onClick={closeAll}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-base font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'text-[#FF001E] bg-red-50 font-bold shadow-sm'
                          : 'text-slate-700 hover:text-[#FF001E] hover:bg-slate-100'
                      }`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${activeDropdown === link.dropdownKey ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Products Dropdown */}
                    {link.dropdownKey === 'products' && activeDropdown === 'products' && (
                      <div
                        className="absolute top-full left-0 mt-3 w-96 bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-50 p-6"
                        role="menu"
                        aria-label="Products menu"
                      >
                        <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our SaaS Suite</span>
                          <span className="text-xs font-bold text-[#FF001E]">3 Products</span>
                        </div>
                        <div className="space-y-3">
                          {PRODUCTS.map((product) => {
                            const Icon = iconMap[product.icon] as React.FC<{ size?: number; style?: React.CSSProperties }>;
                            return (
                              <Link
                                key={product.label}
                                to={product.href}
                                onClick={closeAll}
                                className="flex items-start gap-4 p-3.5 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-slate-200/60 hover:shadow-sm"
                                role="menuitem"
                              >
                                <div
                                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:scale-105"
                                  style={{ background: `${product.color}15` }}
                                >
                                  {Icon && <Icon size={20} style={{ color: product.color }} />}
                                </div>
                                <div className="flex-grow pt-0.5">
                                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#FF001E] transition-colors flex items-center justify-between">
                                    <span>{product.label}</span>
                                  </p>
                                  <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{product.description}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="border-t border-slate-100 mt-4 pt-3">
                          <Link
                            to="/products"
                            onClick={closeAll}
                            className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-[#FF001E] rounded-xl transition-colors cursor-pointer"
                            role="menuitem"
                          >
                            Explore All Products
                            <ChevronDown size={14} className="-rotate-90" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Services Dropdown */}
                    {link.dropdownKey === 'services' && activeDropdown === 'services' && (
                      <div
                        className="absolute top-full left-0 mt-3 w-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-50 p-6"
                        role="menu"
                        aria-label="Services menu"
                      >
                        <div className="mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">IT Services & Consulting</span>
                          <span className="text-xs font-bold text-[#FF001E]">10 Specialties</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {SERVICES_NAV.map((svc) => {
                            const Icon = iconMap[svc.icon] as React.FC<{ size?: number; className?: string }>;
                            return (
                              <Link
                                key={svc.label}
                                to={svc.href}
                                onClick={closeAll}
                                className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 group cursor-pointer border border-transparent hover:border-slate-200/60 hover:shadow-sm"
                                role="menuitem"
                              >
                                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF001E] transition-colors shadow-sm">
                                  {Icon && <Icon size={16} className="text-[#FF001E] group-hover:text-white transition-colors flex-shrink-0" />}
                                </div>
                                <span className="text-sm text-slate-700 group-hover:text-[#FF001E] transition-colors font-bold truncate">{svc.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                        <div className="border-t border-slate-100 mt-4 pt-3">
                          <Link
                            to="/services"
                            onClick={closeAll}
                            className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-red-50 hover:text-[#FF001E] rounded-xl transition-colors cursor-pointer"
                            role="menuitem"
                          >
                            Explore All Services
                            <ChevronDown size={14} className="-rotate-90" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
              <a
                href={COMPANY.contact.whatsappMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebd5a] transition-all !px-[14px] xl:!px-[16px] !py-[9px] xl:!py-[10px] !rounded-full shadow-sm whitespace-nowrap !h-[40px] xl:!h-[42px] flex-shrink-0"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp
              </a>
              <Link
                to="/contact"
                onClick={closeAll}
                className="inline-flex items-center justify-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-bold text-white bg-transparent border-2 border-[#FF001E] text-[#FF001E] hover:bg-[#FF001E] hover:text-white transition-all !px-[14px] xl:!px-[16px] !py-[9px] xl:!py-[10px] !rounded-full shadow-sm whitespace-nowrap !h-[40px] xl:!h-[42px] cursor-pointer flex-shrink-0"
              >
                Get a Free Demo
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden pointer-events-auto max-w-7xl mx-auto mt-3 rounded-3xl border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="container-xl py-4 space-y-1.5 px-4">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === link.dropdownKey ? null : link.dropdownKey!)}
                        aria-expanded={mobileExpanded === link.dropdownKey}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={18} className={`transition-transform duration-200 ${mobileExpanded === link.dropdownKey ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileExpanded === 'products' && link.dropdownKey === 'products' && (
                        <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-red-500 ml-4 mt-1 bg-slate-50/50 rounded-r-xl">
                          {PRODUCTS.map((product) => (
                            <Link
                              key={product.label}
                              to={product.href}
                              onClick={closeAll}
                              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF001E] rounded-lg hover:bg-white"
                            >
                              {product.label}
                            </Link>
                          ))}
                        </div>
                      )}

                      {mobileExpanded === 'services' && link.dropdownKey === 'services' && (
                        <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-red-500 ml-4 mt-1 bg-slate-50/50 rounded-r-xl">
                          {SERVICES_NAV.map((svc) => (
                            <Link
                              key={svc.label}
                              to={svc.href}
                              onClick={closeAll}
                              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#FF001E] rounded-lg hover:bg-white"
                            >
                              {svc.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={closeAll}
                      className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                        location.pathname === link.href ? 'text-[#FF001E] bg-red-50' : 'text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-200 mt-4 flex flex-col gap-3">
                <a
                  href={COMPANY.contact.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-[10px] px-[16px] rounded-full bg-[#25D366] text-white font-bold shadow-sm"
                >
                  WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  onClick={closeAll}
                  className="w-full flex items-center justify-center gap-2 py-[10px] px-[16px] rounded-full bg-[linear-gradient(to_right,#FF001E,#E600E6)] text-white font-bold shadow-md"
                >
                  Get a Free Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
