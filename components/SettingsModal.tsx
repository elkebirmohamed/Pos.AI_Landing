import React from 'react';
import { X, Moon, Sun, Languages } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  lang: 'fr' | 'en';
  setLang: (lang: 'fr' | 'en') => void;
  t: any;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, theme, setTheme, lang, setLang, t }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="relative inline-block align-bottom bg-white dark:bg-slate-900 rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-slate-200 dark:border-slate-800">
          <div className="flex justify-between items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">{t.title}</h3>
            <button 
              onClick={onClose} 
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Appearance Section */}
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center">
                <Sun className="w-4 h-4 mr-2" />
                {t.appearance}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setTheme('light')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    theme === 'light' 
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400 bg-transparent'
                  }`}
                >
                  <Sun className="w-8 h-8 mb-3" />
                  <span className="font-semibold">{t.light}</span>
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    theme === 'dark' 
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400 bg-transparent'
                  }`}
                >
                  <Moon className="w-8 h-8 mb-3" />
                  <span className="font-semibold">{t.dark}</span>
                </button>
              </div>
            </div>

            {/* Language Section */}
            <div>
              <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center">
                <Languages className="w-4 h-4 mr-2" />
                {t.language}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setLang('fr')}
                  className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    lang === 'fr' 
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400 bg-transparent'
                  }`}
                >
                  <span className="mr-2 text-xl">🇫🇷</span>
                  <span className="font-semibold">{t.fr}</span>
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`flex items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 ${
                    lang === 'en' 
                      ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/20 dark:text-brand-400' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-brand-200 dark:hover:border-slate-600 text-slate-600 dark:text-slate-400 bg-transparent'
                  }`}
                >
                  <span className="mr-2 text-xl">🇬🇧</span>
                  <span className="font-semibold">{t.en}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;