import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQProps {
  t: any;
}

const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 dark:bg-brand-900/30 rounded-lg mb-4">
            <HelpCircle className="w-6 h-6 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.items.map((faq: any, index: number) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-200 ${
                openIndex === index 
                  ? 'border-brand-200 dark:border-brand-800 bg-brand-50/30 dark:bg-brand-900/10 shadow-sm' 
                  : 'border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-slate-700'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-700 dark:text-brand-400' : 'text-slate-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            {t.contact} <a href="mailto:support@pos.ai" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">{t.contactLink}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;