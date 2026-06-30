// ============================================================
// Products Data — IEYAL Solutions
// ============================================================

export interface ProductFeature {
  title:       string;
  description: string;
  icon:        string;
}

export interface Product {
  id:           string;
  slug:         string;
  name:         string;
  tagline:      string;
  description:  string;
  url:          string;
  icon:         string;
  color:        string;       // brand color for the product
  gradientFrom: string;
  gradientTo:   string;
  features:     ProductFeature[];
  useCases:     string[];
  industries:   string[];
  cta: {
    primary:   string;
    secondary: string;
    primaryUrl:string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id:          'ownchat',
    slug:        'ownchat',
    name:        'OwnChat',
    tagline:     'Your Complete WhatsApp Business CRM',
    description: 'OwnChat is an all-in-one WhatsApp CRM and automation platform that helps businesses manage customer conversations, automate responses, generate leads, and track performance — from a single shared inbox.',
    url:         'https://ownchat.app/',
    icon:        'MessageCircle',
    color:       '#25D366',
    gradientFrom:'#128C7E',
    gradientTo:  '#25D366',
    features: [
      { title: 'WhatsApp Business API',  description: 'Official Meta API integration for reliable, high-volume messaging without risk of bans.',            icon: 'MessageCircle' },
      { title: 'Shared Inbox',           description: 'Multiple team members manage customer conversations from one unified inbox with assignment and notes.',  icon: 'Inbox' },
      { title: 'CRM & Lead Management',  description: 'Capture, track, and nurture leads directly within OwnChat with a built-in contact and pipeline view.',  icon: 'LayoutDashboard' },
      { title: 'Chatbot Builder',        description: 'Build no-code chatbot flows for FAQs, lead qualification, bookings, and order status — 24/7.',          icon: 'Bot' },
      { title: 'Broadcast Campaigns',    description: 'Send personalised bulk messages to segmented contact lists for promotions, alerts, and follow-ups.',    icon: 'Send' },
      { title: 'Analytics & Reports',    description: 'Track message delivery, open rates, agent performance, and conversation volume with clear dashboards.', icon: 'BarChart3' },
      { title: 'Automation Workflows',   description: 'Trigger automated sequences based on keywords, time delays, or customer actions across the journey.',   icon: 'Workflow' },
    ],
    useCases: [
      'Automate lead responses from your website',
      'Send order confirmations and shipping updates',
      'Run promotional campaigns to opted-in customers',
      'Handle support tickets without increasing headcount',
      'Book appointments and send reminders automatically',
    ],
    industries: ['Retail', 'Healthcare', 'Education', 'Real Estate', 'Hotels', 'Restaurants'],
    cta: {
      primary:    'Request a Free Demo',
      secondary:  'Visit OwnChat Website',
      primaryUrl: '/contact?product=ownchat',
    },
  },
  {
    id:          'owntasks',
    slug:        'owntasks',
    name:        'OwnTasks',
    tagline:     'Manage Work. Empower Teams. Deliver Results.',
    description: 'OwnTasks is a task and project management platform designed for growing teams. It combines task tracking, employee productivity monitoring, attendance, and workflow automation in one clean interface.',
    url:         'https://owntasks.app/',
    icon:        'CheckSquare',
    color:       '#4F46E5',
    gradientFrom:'#4F46E5',
    gradientTo:  '#7C3AED',
    features: [
      { title: 'Task Management',       description: 'Create, assign, and track tasks with priorities, due dates, and status updates that keep projects moving.', icon: 'CheckSquare' },
      { title: 'Employee Productivity', description: 'Monitor team output, completion rates, and workload distribution with real-time productivity reports.',     icon: 'TrendingUp' },
      { title: 'Workflow Automation',   description: 'Automate task assignments, status transitions, and notifications based on custom trigger rules.',          icon: 'Workflow' },
      { title: 'Attendance Tracking',   description: 'Log attendance digitally with location support, shift management, and leave request workflows.',           icon: 'Clock' },
      { title: 'Team Collaboration',    description: 'Comment threads, file attachments, and team mentions keep everyone aligned without unnecessary meetings.', icon: 'Users' },
    ],
    useCases: [
      'Replace spreadsheet-based project tracking',
      'Track remote team attendance and productivity',
      'Automate repetitive internal approval workflows',
      'Manage client projects with clear milestones',
      'Generate team performance reports for reviews',
    ],
    industries: ['Startups', 'SMEs', 'Enterprises', 'Manufacturing', 'Real Estate', 'IT Companies'],
    cta: {
      primary:    'Request a Free Demo',
      secondary:  'Visit OwnTasks Website',
      primaryUrl: '/contact?product=owntasks',
    },
  },
  {
    id:          'owncart',
    slug:        'owncart',
    name:        'OwnCart',
    tagline:     'Launch Your Digital Store. Sell Anywhere.',
    description: 'OwnCart is a complete e-commerce platform that lets businesses launch a professional digital store quickly. From product listings to payments and inventory management, everything is built in.',
    url:         'https://owncart.shop/',
    icon:        'ShoppingCart',
    color:       '#F59E0B',
    gradientFrom:'#F59E0B',
    gradientTo:  '#EF4444',
    features: [
      { title: 'Digital Storefront',  description: 'Launch a professional online store with customisable product pages, categories, and brand identity.',       icon: 'ShoppingBag' },
      { title: 'Order Management',    description: 'Track orders from placement to delivery with status updates, invoicing, and customer notifications.',        icon: 'ClipboardList' },
      { title: 'Payment Integration', description: 'Accept payments via UPI, credit/debit cards, and net banking through integrated payment gateways.',         icon: 'CreditCard' },
      { title: 'Inventory Control',   description: 'Manage stock levels, receive low-stock alerts, and track product variants across your catalogue.',          icon: 'Package' },
      { title: 'Analytics & Insights',description: 'Understand revenue trends, best-selling products, and customer behaviour with clear sales dashboards.',     icon: 'BarChart3' },
    ],
    useCases: [
      'Launch an online store in days, not months',
      'Accept digital payments without a developer',
      'Manage bulk inventory across product lines',
      'Track fulfilment and reduce delivery errors',
      'Analyse sales performance and top-selling items',
    ],
    industries: ['Retail', 'Restaurants', 'Grocery', 'Fashion', 'Electronics', 'Startups'],
    cta: {
      primary:    'Request a Free Demo',
      secondary:  'Visit OwnCart Website',
      primaryUrl: '/contact?product=owncart',
    },
  },
];
