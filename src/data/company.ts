// ============================================================
// Company Constants — IEYAL Solutions Private Limited
// ============================================================

export const COMPANY = {
  name:          'IEYAL Solutions Private Limited',
  shortName:     'IEYAL Solutions',
  tagline:       'Technology That Moves Businesses Forward',
  description:   'IEYAL Solutions is an IT services and consulting company helping businesses grow through intelligent software, automation, and digital transformation.',
  founded:       '2023',
  industry:      'IT Services & IT Consulting',
  location:      'Thiruvarur, Tamil Nadu, India',

  contact: {
    phone:       '+91 97914 67587',
    phoneRaw:    '919791467587',
    whatsapp:    'https://wa.me/919791467587',
    whatsappMsg: 'https://wa.me/919791467587?text=Hello%20IEYAL%20Solutions%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
    // email and address to be provided by client
    email:       'hello@ieyalsolutions.com',      // PLACEHOLDER
    address:     'Thiruvarur, Tamil Nadu, India', // PLACEHOLDER
  },

  social: {
    linkedin:  'https://www.linkedin.com/company/ieyalsolutions/',
    facebook:  'https://www.facebook.com/ieyalsolutions',
    instagram: 'https://www.instagram.com/ieyalsolutions/',
  },

  meta: {
    siteUrl:       'https://www.ieyalsolutions.com', // PLACEHOLDER — update on deployment
    ogImage:       '/assets/og-image.png',           // PLACEHOLDER
    twitterHandle: '@ieyalsolutions',
  },
} as const;

// ============================================================
// Navigation Data
// ============================================================
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href:  '/products',
    children: [
      {
        label:       'OwnChat',
        href:        '/products/ownchat',
        description: 'WhatsApp CRM, Chatbot & Automation platform',
        icon:        'MessageCircle',
      },
      {
        label:       'OwnTasks',
        href:        '/products/owntasks',
        description: 'Task management & employee productivity suite',
        icon:        'CheckSquare',
      },
      {
        label:       'OwnCart',
        href:        '/products/owncart',
        description: 'E-commerce & digital store platform',
        icon:        'ShoppingCart',
      },
    ],
  },
  {
    label: 'Services',
    href:  '/services',
    children: [
      { label: 'Web Development',           href: '/services/web-development',          icon: 'Globe' },
      { label: 'Mobile App Development',    href: '/services/mobile-app-development',   icon: 'Smartphone' },
      { label: 'Custom Software',           href: '/services/custom-software',          icon: 'Code2' },
      { label: 'WhatsApp Business API',     href: '/services/whatsapp-business-api',    icon: 'MessageCircle' },
      { label: 'CRM Development',           href: '/services/crm-development',          icon: 'LayoutDashboard' },
      { label: 'AI & Automation',           href: '/services/ai-automation',            icon: 'Bot' },
      { label: 'SEO',                       href: '/services/seo',                      icon: 'Search' },
      { label: 'UI/UX Design',              href: '/services/ui-ux-design',             icon: 'Palette' },
      { label: 'Cloud Solutions',           href: '/services/cloud-solutions',          icon: 'Cloud' },
      { label: 'Digital Transformation',    href: '/services/digital-transformation',   icon: 'Zap' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
] as const;
