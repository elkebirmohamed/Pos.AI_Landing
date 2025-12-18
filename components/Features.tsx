import React from 'react';
import { ShoppingCart, Package, Users, BarChart3, WifiOff, Lock } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  const featureList = [
    { icon: WifiOff, title: t.f1Title, description: t.f1Desc },
    { icon: ShoppingCart, title: t.f2Title, description: t.f2Desc },
    { icon: Package, title: t.f3Title, description: t.f3Desc },
    { icon: Users, title: t.f4Title, description: t.f4Desc },
    { icon: BarChart3, title: t.f5Title, description: t.f5Desc },
    { icon: Lock, title: t.f6Title, description: t.f6Desc }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase">{t.badge}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:border-brand-200 dark:hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-100 dark:bg-brand-900/40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-2xl"></div>
              
              <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;