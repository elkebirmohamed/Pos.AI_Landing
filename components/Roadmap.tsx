import React from 'react';
import { Cloud, Store, Globe } from 'lucide-react';

interface RoadmapProps {
  t: any;
}

const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
              {t.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              {t.title} <br/>
              <span className="text-blue-400">{t.v2}</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
                  <Cloud className="w-6 h-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{t.f1Title}</h3>
                  <p className="text-slate-400 text-sm">{t.f1Desc}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500/20 p-2 rounded-lg">
                  <Store className="w-6 h-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{t.f2Title}</h3>
                  <p className="text-slate-400 text-sm">{t.f2Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-sm">
             <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-2">
                        <Globe className="text-blue-500 w-5 h-5"/>
                        <span className="font-bold">{t.cardTitle}</span>
                    </div>
                    <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded uppercase">{t.cardBadge}</span>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center bg-slate-800 p-3 rounded">
                        <span className="text-sm">{t.storeParis}</span>
                        <div className="flex items-center text-green-400 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> {t.online}
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800 p-3 rounded">
                        <span className="text-sm">{t.storeLyon}</span>
                        <div className="flex items-center text-green-400 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div> {t.online}
                        </div>
                    </div>
                    <div className="h-24 bg-slate-800/50 rounded border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-500 text-sm">
                        {t.addStore}
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Roadmap;