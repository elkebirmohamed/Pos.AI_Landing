import React from 'react';
import { WifiOff, BrainCircuit, TrendingUp, Key } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="download-hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-100 dark:bg-brand-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen pointer-events-none transition-all duration-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              {t.badge}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              {t.title1} <br/>
              <span className="bg-gradient-to-r from-brand-600 to-indigo-500 gradient-text text-transparent">
                {t.titleGradient}
              </span> <br/>
              {t.title2}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button 
                onClick={() => window.open('https://activation-cl-pos.vercel.app', '_blank', 'noopener,noreferrer')} 
                variant="primary" 
                size="lg" 
                className="shadow-xl shadow-brand-500/20"
              >
                <Key className="w-5 h-5 mr-2" />
                {t.buyBtn}
              </Button>
              <Button 
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })} 
                variant="outline" 
                size="lg"
              >
                {t.trialBtn}
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <WifiOff className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-2" />
                {t.feat1}
              </div>
              <div className="flex items-center">
                <BrainCircuit className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mr-2" />
                {t.feat2}
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-500 dark:text-green-400 mr-2" />
                {t.feat3}
              </div>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-800 rounded-b-lg"></div>
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 aspect-[4/3] flex flex-col">
                {/* Mockup Top Bar */}
                <div className="h-8 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">POS.AI v1.0 [LOCAL]</div>
                </div>
                {/* Mockup Content */}
                <div className="flex-1 flex bg-slate-900 text-slate-300 relative">
                    {/* IA Notification Overlay */}
                    <div className="absolute top-4 right-4 z-10 animate-fade-in-up">
                        <div className="bg-indigo-600 text-white text-xs px-3 py-2 rounded shadow-lg flex items-center border border-indigo-400">
                            <BrainCircuit className="w-3 h-3 mr-2" />
                            {t.mockupSuggestion}
                        </div>
                    </div>

                  {/* Sidebar */}
                  <div className="w-16 border-r border-slate-700 flex flex-col items-center py-4 space-y-6">
                    <div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-bold">P</div>
                    <div className="w-8 h-8 bg-slate-700 rounded"></div>
                    <div className="w-8 h-8 bg-slate-700 rounded"></div>
                    <div className="w-8 h-8 bg-slate-700 rounded"></div>
                  </div>
                  {/* Grid */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between mb-6">
                      <div className="h-8 w-32 bg-slate-700 rounded"></div>
                      <div className="h-8 w-24 bg-green-600 rounded"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-slate-800 rounded border border-slate-700 hover:border-brand-500 transition-colors cursor-pointer flex items-center justify-center flex-col p-2 relative overflow-hidden">
                            {i === 2 && (
                                <div className="absolute top-0 right-0 bg-red-500 text-[8px] font-bold px-1 text-white uppercase">{t.mockupStock}</div>
                            )}
                            <div className="w-full h-2/3 bg-slate-700/50 rounded mb-2"></div>
                            <div className="w-1/2 h-2 bg-slate-600 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="w-64 border-l border-slate-700 bg-slate-800 p-4 flex flex-col">
                    <div className="flex-1 space-y-2">
                         <div className="h-10 bg-slate-700 rounded w-full flex items-center px-2">
                             <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                             <span className="text-xs text-indigo-300">{t.mockupCrossSell}</span>
                         </div>
                         <div className="h-10 bg-slate-700 rounded w-full"></div>
                         <div className="h-10 bg-slate-700 rounded w-full"></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-600">
                        <div className="h-12 bg-brand-600 rounded w-full flex items-center justify-center font-bold text-white uppercase">TOTAL 45.00€</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;