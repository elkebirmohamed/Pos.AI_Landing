import React from 'react';
import { Mail, Globe, Twitter, BrainCircuit } from 'lucide-react';

interface FooterProps {
  t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BrainCircuit className="w-8 h-8 text-brand-500 mr-2" />
              <span className="text-2xl font-bold">POS.AI</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              {t.desc}
            </p>
            <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">{t.col1Title}</h3>
            <ul className="space-y-3">
              <li><a href="#ai-features" className="text-slate-400 hover:text-brand-400 transition-colors">Intelligence Artificielle</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-brand-400 transition-colors">Fonctionnalités</a></li>
              <li><a href="#download-hero" className="text-slate-400 hover:text-brand-400 transition-colors">V1</a></li>
              <li><a href="#roadmap" className="text-slate-400 hover:text-brand-400 transition-colors">Roadmap V2</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">{t.col2Title}</h3>
            <ul className="space-y-3">
              <li><a href="https://activation-cl-pos.vercel.app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">{t.buy}</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-brand-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-400 transition-colors">Contact</a></li>
              <li className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-2" /> 
                support@pos.ai
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} POS.AI Systems. {t.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-white">{t.privacy}</a>
            <a href="#" className="hover:text-white">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;