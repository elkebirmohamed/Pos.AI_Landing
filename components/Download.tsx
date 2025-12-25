import React from 'react';
import { AppWindow, Apple, Download as DownloadIcon, Info, PlayCircle } from 'lucide-react';
// Import du bouton conservé pour le style global si nécessaire
import Button from './Button'; 

interface DownloadProps {
  t: any;
}

const Download: React.FC<DownloadProps> = ({ t }) => {
  // Fonction pour les boutons en cours de développement
  const handleUnderConstruction = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("En construction : Cette fonctionnalité sera disponible très prochainement !");
  };

  return (
    <section id="download" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6">
            <DownloadIcon className="w-4 h-4 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-4">
            {t.title}
          </h2>
          <div className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            <p>{t.desc1}</p>
            <p className="text-brand-600 dark:text-brand-400 font-medium">{t.desc2}</p>
          </div>
        </div>

        {/* GRILLE : Côte à côte sur ordinateur (md:grid-cols-2) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Windows Card */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-xl mb-6 shadow-lg shadow-blue-600/20">
              <AppWindow className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.winTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">{t.winSub}</p>
            
            <a 
              href="https://github.com/elkebirmohamed/smart-pos-application/releases/download/v1.0.0/Smart.POS.Assistant_0.1.0_x64_en-US.msi" 
              download
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center shadow-lg"
            >
              {t.winBtn}
            </a>
            <p className="mt-4 text-xs text-slate-400">.msi installer • ~10 MB</p>
          </div>

          {/* MacOS Card */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="bg-slate-900 dark:bg-black p-4 rounded-xl mb-6 shadow-lg shadow-slate-900/20 border border-slate-800">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.macTitle}</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">{t.macSub}</p>
            
            {/* Remplacé par un bouton "En construction" */}
            <button 
              onClick={handleUnderConstruction}
              className="w-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed transition-all"
            >
              {t.macBtn}
            </button>
            <p className="mt-4 text-xs text-slate-400">.dmg installer • En construction</p>
          </div>
        </div>

        {/* Bouton Voir la démo aligné à gauche sous la carte Windows */}
        <div className="max-w-4xl mx-auto mt-8 flex justify-start">
          <button 
            onClick={handleUnderConstruction}
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
          >
            <PlayCircle className="w-5 h-5" />
            Voir la démo
          </button>
        </div>

        {/* Boîte d'info conservée telle quelle */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-6 flex items-start">
            <Info className="w-6 h-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mr-4 mt-1" />
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-400 text-lg mb-2">{t.infoTitle}</h4>
              <p className="text-amber-800 dark:text-amber-300/80 leading-relaxed">
                {t.infoDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;