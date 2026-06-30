import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useInView } from '@/hooks/useInView';
import { Workflow, Bot, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const AutomationSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="section-padding bg-surface-subtle" id="automation">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <SectionHeader
              eyebrow="Business Automation"
              title="Work Smarter, Not "
              titleHighlight="Harder"
              subtitle="We build intelligent automation solutions that connect your tools, handle repetitive tasks, and let your team focus on high-value work."
            />
            <div className="mt-8 space-y-6">
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                     <Bot className="text-ieyal-primary" size={24} />
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold text-neutral-800">AI-Powered Workflows</h3>
                     <p className="text-neutral-500 text-sm mt-1">Integrate AI into your processes to automatically categorize, route, and respond to common requests.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                     <Workflow className="text-ieyal-secondary" size={24} />
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold text-neutral-800">System Integration</h3>
                     <p className="text-neutral-500 text-sm mt-1">Connect disparate software systems so data flows seamlessly between your CRM, ERP, and support tools.</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                     <Zap className="text-accent-500" size={24} />
                  </div>
                  <div>
                     <h3 className="text-lg font-semibold text-neutral-800">Zero Manual Data Entry</h3>
                     <p className="text-neutral-500 text-sm mt-1">Eliminate human error and save hours of manual work by automating data entry and synchronization.</p>
                  </div>
               </div>
            </div>
            <div className="mt-10">
               <Button variant="outline" href="/services">Explore Automation Solutions <ArrowRight size={16} /></Button>
            </div>
          </div>
          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="bg-white p-8 rounded-2xl shadow-soft-lg border border-neutral-100 relative z-10">
                {/* Abstract Automation Visual */}
                <div className="flex flex-col gap-4">
                   <div className="h-12 bg-neutral-50 rounded-lg animate-pulse border border-neutral-100 flex items-center px-4"><div className="w-24 h-4 bg-neutral-200 rounded"></div></div>
                   <div className="flex justify-center my-2"><ArrowRight className="text-ieyal-secondary rotate-90" /></div>
                   <div className="h-16 bg-blue-50 rounded-lg border border-blue-100 flex items-center px-4 gap-3">
                      <Bot className="text-ieyal-secondary" size={24} />
                      <div className="flex-1 space-y-2">
                         <div className="w-3/4 h-3 bg-blue-200 rounded"></div>
                         <div className="w-1/2 h-3 bg-blue-100 rounded"></div>
                      </div>
                   </div>
                   <div className="flex justify-center my-2"><ArrowRight className="text-ieyal-secondary rotate-90" /></div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-green-50 rounded-lg border border-green-100 flex items-center justify-center text-green-700 text-sm font-semibold">CRM Updated</div>
                      <div className="h-12 bg-amber-50 rounded-lg border border-amber-100 flex items-center justify-center text-amber-700 text-sm font-semibold">Email Sent</div>
                   </div>
                </div>
             </div>
             {/* Decorative background elements */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-amber-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
