import React from 'react';
import { Sparkles, TrendingUp, BrainCircuit, Tag, ArrowRight } from 'lucide-react';

interface AIFeatureProps {
  t: any;
}

const AIFeature: React.FC<AIFeatureProps> = ({ t }) => {
  return (
    <section id="ai-features" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
         <div className="absolute top-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-bold mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
            {t.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            {t.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              {t.subtitle}
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 hover:border-indigo-400 transition-all hover:-translate-y-1 shadow-2xl shadow-indigo-900/20">
            <div className="bg-indigo-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
                <Tag className="text-indigo-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t.card1Title}</h3>
            <p className="text-slate-400 mb-4">
              {t.card1Desc}
            </p>
            <ul className="text-sm text-indigo-300 space-y-2">
                {t.card1List.map((item: string, i: number) => (
                  <li key={i} className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> {item}</li>
                ))}
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-1 shadow-2xl shadow-cyan-900/20">
            <div className="bg-cyan-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
                <TrendingUp className="text-cyan-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t.card2Title}</h3>
            <p className="text-slate-400 mb-4">
              {t.card2Desc}
            </p>
             <ul className="text-sm text-cyan-300 space-y-2">
                {t.card2List.map((item: string, i: number) => (
                  <li key={i} className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> {item}</li>
                ))}
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all hover:-translate-y-1 shadow-2xl shadow-purple-900/20">
            <div className="bg-purple-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                <BrainCircuit className="text-purple-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{t.card3Title}</h3>
            <p className="text-slate-400 mb-4">
              {t.card3Desc}
            </p>
             <ul className="text-sm text-purple-300 space-y-2">
                {t.card3List.map((item: string, i: number) => (
                  <li key={i} className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> {item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;