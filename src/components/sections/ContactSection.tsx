import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { COMPANY } from '@/data/company';
import { useInView } from '@/hooks/useInView';

interface FormData {
  name:     string;
  email:    string;
  phone:    string;
  company:  string;
  service:  string;
  message:  string;
}

const SERVICES_LIST = [
  'Web Development', 'Mobile App Development', 'Custom Software', 'WhatsApp Business API',
  'CRM Development', 'AI & Automation', 'SEO', 'OwnChat', 'OwnTasks', 'OwnCart', 'Other',
];

export const ContactSection: React.FC = () => {
  const [form, setForm]       = useState<FormData>({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [errors, setErrors]   = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView }       = useInView({ threshold: 0.1 });

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim())    errs.name    = 'Name is required.';
    if (!form.email.trim())   errs.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.message.trim()) errs.message = 'Please tell us about your project.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate network delay — integrate real endpoint here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      style={{ marginBottom: '60px' }}
      className="py-24 bg-white border-none shadow-none font-sans"
      aria-labelledby="contact-heading"
    >
      <div className="container-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let Us Talk About "
          titleHighlight="Your Project"
          subtitle="Fill out the form and one of our team members will reach out within one business day. Or reach us directly via WhatsApp or phone."
          id="contact-heading"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-12 font-sans">

          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 space-y-5 shadow-sm">
              {[
                { Icon: Phone,  label: 'Phone',   value: COMPANY.contact.phone,    href: `tel:${COMPANY.contact.phone}` },
                { Icon: Mail,   label: 'Email',   value: COMPANY.contact.email,    href: `mailto:${COMPANY.contact.email}` },
                { Icon: MapPin, label: 'Location', value: COMPANY.contact.address, href: undefined },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon size={18} className="text-[#FF001E]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FF001E] uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-slate-900 hover:text-[#FF001E] transition-colors font-bold">{value}</a>
                    ) : (
                      <p className="text-sm text-slate-900 font-bold">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={COMPANY.contact.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-3xl border border-[#25D366]/30 bg-[#25D366]/05 hover:bg-[#25D366]/10 transition-colors group shadow-sm"
              aria-label="Chat with IEYAL Solutions on WhatsApp"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.047L.787 23.561l4.635-1.477A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.014-1.375l-.358-.213-3.713 1.183 1.204-3.604-.234-.375A9.818 9.818 0 0112 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.429-4.39 9.818-9.818 9.818z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#25D366] transition-colors">
                  Chat on WhatsApp
                </p>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">Instant response during business hours</p>
              </div>
            </a>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold text-[#FF001E] uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { href: COMPANY.social.linkedin,  label: 'LinkedIn' },
                  { href: COMPANY.social.facebook,  label: 'Facebook' },
                  { href: COMPANY.social.instagram, label: 'Instagram' },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 hover:border-[#FF001E] hover:text-[#FF001E] hover:bg-white transition-all shadow-sm"
                    aria-label={`IEYAL Solutions on ${label}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl border border-slate-200/80 bg-slate-50 gap-5 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-slate-600 max-w-md text-sm leading-relaxed font-normal">
                  Your message has been received. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-[#FF001E] transition-all mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 space-y-5 shadow-sm"
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="form-label">Full Name <span className="text-error" aria-hidden="true">*</span></label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className={`form-input ${errors.name ? 'border-error' : ''}`}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="form-label">Email Address <span className="text-error" aria-hidden="true">*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`form-input ${errors.email ? 'border-error' : ''}`}
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="form-label">Company Name</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="form-input"
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="contact-service" className="form-label">I am interested in</label>
                  <select
                    id="contact-service"
                    name="service"
                    className="form-input"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service or product...</option>
                    {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="form-label">Tell Us About Your Project <span className="text-error" aria-hidden="true">*</span></label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className={`form-input resize-none ${errors.message ? 'border-error' : ''}`}
                    placeholder="Briefly describe your business challenge or what you are looking to build..."
                    value={form.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  rightIcon={<Send size={16} aria-hidden="true" />}
                  className="w-full justify-center"
                  aria-label="Submit contact form"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                <p className="text-xs text-slate-500 text-center font-medium">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
