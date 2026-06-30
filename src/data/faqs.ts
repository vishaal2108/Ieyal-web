// ============================================================
// FAQ Data — IEYAL Solutions
// ============================================================

export interface FAQ {
  id:       string;
  question: string;
  answer:   string;
  category: 'general' | 'products' | 'services' | 'pricing' | 'technical';
}

export const FAQS: FAQ[] = [
  {
    id:       'what-does-ieyal-do',
    question: 'What does IEYAL Solutions do?',
    answer:   'IEYAL Solutions is an IT services and consulting company based in Thiruvarur, Tamil Nadu. We help businesses grow by building software products, automating operations, and delivering digital transformation — including web development, mobile apps, WhatsApp automation, CRM development, and AI-powered workflows.',
    category: 'general',
  },
  {
    id:       'ownchat-what-is',
    question: 'What is OwnChat and how can it help my business?',
    answer:   'OwnChat is our WhatsApp Business CRM and automation platform. It allows businesses to manage all customer conversations from a shared team inbox, build chatbots, run broadcast campaigns, and automate follow-ups — using the official WhatsApp Business API. It is suitable for any business that communicates with customers on WhatsApp.',
    category: 'products',
  },
  {
    id:       'owntasks-what-is',
    question: 'What is OwnTasks?',
    answer:   'OwnTasks is a task and team management platform designed for growing businesses. It allows managers to assign tasks, track progress, monitor employee productivity, manage attendance, and automate internal workflows — all from one interface.',
    category: 'products',
  },
  {
    id:       'owncart-what-is',
    question: 'What is OwnCart?',
    answer:   'OwnCart is our e-commerce platform that allows businesses to launch a professional online store quickly. It includes product management, order tracking, payment gateway integration, inventory control, and a simple admin dashboard — no coding required.',
    category: 'products',
  },
  {
    id:       'whatsapp-api-legal',
    question: 'Is the WhatsApp Business API integration official and safe?',
    answer:   'Yes. We use the official Meta-approved WhatsApp Business API. This means your account is protected from bans, messages are delivered reliably, and your use is fully compliant with Meta\'s platform policies.',
    category: 'technical',
  },
  {
    id:       'how-long-to-deliver',
    question: 'How long does it take to deliver a project?',
    answer:   'Delivery timelines depend on the scope and complexity of the project. A standard business website typically takes 2–4 weeks. A custom software product or automation setup may take 4–12 weeks. We always provide a clear timeline during our initial consultation before any commitment.',
    category: 'services',
  },
  {
    id:       'do-you-provide-support',
    question: 'Do you provide post-launch support and maintenance?',
    answer:   'Yes. We offer post-launch support plans for all our projects. This includes bug fixes, performance monitoring, updates, and feature enhancements. Details of support coverage are agreed upon before the project begins.',
    category: 'services',
  },
  {
    id:       'can-you-integrate-existing-systems',
    question: 'Can you integrate your solutions with our existing software?',
    answer:   'In most cases, yes. We have experience integrating with a wide range of third-party tools including ERPs, payment gateways, CRMs, and communication platforms via APIs and webhooks. We will assess your existing systems during consultation.',
    category: 'technical',
  },
  {
    id:       'pricing-model',
    question: 'How is pricing structured for your services?',
    answer:   'Our pricing depends on the nature of the engagement — project-based, retainer, or subscription (for our products). We offer transparent, fixed-scope pricing for most projects. Contact us for a detailed quote tailored to your requirements.',
    category: 'pricing',
  },
  {
    id:       'which-industries-do-you-serve',
    question: 'Which industries do you specialise in?',
    answer:   'We work across 15+ industries including hotels, restaurants, healthcare, education, retail, real estate, logistics, manufacturing, finance, travel, automotive, construction, startups, SMEs, and enterprises. Our solutions are adaptable to the specific needs of each industry.',
    category: 'general',
  },
  {
    id:       'location-remote',
    question: 'Are you based in India? Do you work with clients internationally?',
    answer:   'We are headquartered in Thiruvarur, Tamil Nadu, India. We work with clients across India and are open to international engagements that can be managed remotely.',
    category: 'general',
  },
  {
    id:       'demo-how-to',
    question: 'How do I request a product demo?',
    answer:   'You can request a free demo by filling out the contact form on our website, reaching out via WhatsApp at +91 97914 67587, or emailing us directly. We will schedule a personalised walkthrough of the product or service relevant to your needs.',
    category: 'general',
  },
];
