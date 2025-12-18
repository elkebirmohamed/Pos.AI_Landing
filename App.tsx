import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIFeature from './components/AIFeature';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Pricing from './components/Pricing';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MachineIdModal from './components/MachineIdModal';
import SettingsModal from './components/SettingsModal';
import { translations } from './translations';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Theme management
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
       const savedTheme = localStorage.getItem('theme');
       if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
       if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  // Language management
  const [lang, setLang] = useState<'fr' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'fr' || savedLang === 'en') return savedLang as 'fr' | 'en';
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'fr' ? 'fr' : 'en';
    }
    return 'fr';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-300">
      <Header t={t.nav} onOpenSettings={() => setIsSettingsOpen(true)} />
      <main className="flex-grow">
        <Hero t={t.hero} />
        <AIFeature t={t.ai} />
        <Features t={t.features} />
        <Roadmap t={t.roadmap} />
        <Pricing t={t.pricing} />
        <Download t={t.download} />
        <FAQ t={t.faq} />
      </main>
      <Footer t={t.footer} />
      <MachineIdModal t={t.modal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        t={t.settings}
      />
    </div>
  );
};

export default App;