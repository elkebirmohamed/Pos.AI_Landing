import React, { useState, useEffect } from 'react';
import { Menu, X, Download, BrainCircuit, Settings } from 'lucide-react';
import Button from './Button';

interface HeaderProps {
  onOpenSettings: () => void;
  t: any;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-slate-200 dark:border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div className="bg-brand-600 group-hover:bg-brand-500 transition-colors p-2 rounded-lg mr-2">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'}`}>
              POS<span className="text-brand-600">.AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('ai-features')} className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">{t.ai}</button>
            <button onClick={() => scrollToSection('features')} className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">{t.features}</button>
            <button onClick={() => scrollToSection('roadmap')} className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">{t.roadmap}</button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">{t.pricing}</button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors">{t.faq}</button>
          </nav>

          {/* CTA & Settings */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={onOpenSettings}
              className="p-2 text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5" />
            </button>
            <Button variant="primary" size="sm" onClick={() => scrollToSection('download')}>
              <Download className="w-4 h-4 mr-2" />
              {t.trial}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
              onClick={onOpenSettings}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              <Settings className="w-6 h-6" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 dark:text-slate-200">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-lg md:hidden flex flex-col p-4 space-y-4 animate-fade-in-down">
          <button onClick={() => scrollToSection('ai-features')} className="text-left py-2 font-medium text-slate-700 dark:text-slate-200">{t.ai}</button>
          <button onClick={() => scrollToSection('features')} className="text-left py-2 font-medium text-slate-700 dark:text-slate-200">{t.features}</button>
          <button onClick={() => scrollToSection('roadmap')} className="text-left py-2 font-medium text-slate-700 dark:text-slate-200">{t.roadmap}</button>
          <button onClick={() => scrollToSection('pricing')} className="text-left py-2 font-medium text-slate-700 dark:text-slate-200">{t.pricing}</button>
          <button onClick={() => scrollToSection('faq')} className="text-left py-2 font-medium text-slate-700 dark:text-slate-200">{t.faq}</button>
          <Button variant="primary" fullWidth onClick={() => scrollToSection('download')}>
            {t.trial}
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;