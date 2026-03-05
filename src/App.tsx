import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Database, Crosshair, Sparkles, Menu, X } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Lookalike from './pages/Lookalike';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import IdolEncyclopedia from './components/IdolEncyclopedia';

import './App.css';

function AppLayout() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isIdentification = location.pathname === '/lookalike';
  const isEncyclopedia = location.pathname === '/encyclopedia';

  return (
    <div className="min-h-screen text-slate-50 font-sans flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="stage-container">
        <div className="stage-glow glow-1"></div>
        <div className="stage-glow glow-2"></div>
        <div className="stage-glow glow-3"></div>
        <div className="stage-grid"></div>
      </div>
      <div className="scanlines"></div>

      {/* Header */}
      <header className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-blue rounded-xl flex items-center justify-center neon-shadow-purple rotate-3">
              <Star className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
            </div>
            <div>
              <div className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter leading-none glitch-text pr-1">
                {t('app_title')}
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden md:flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            <Link 
              to="/lookalike"
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${isIdentification ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white neon-shadow-blue' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Crosshair className="w-4 h-4" />
              {t('nav_identification')}
            </Link>
            <Link 
              to="/encyclopedia"
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${isEncyclopedia ? 'bg-gradient-to-r from-neon-pink to-neon-orange text-white neon-shadow-pink' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Database className="w-4 h-4" />
              {t('nav_encyclopedia')}
            </Link>
          </nav>

          <button 
            onClick={toggleLanguage}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-green/50 transition-all flex items-center gap-2 text-xs font-mono font-bold text-neon-green"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden xs:inline">{i18n.language.toUpperCase()}</span>
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:hidden">
          <nav className="flex flex-col gap-6 w-full max-w-xs">
            <Link 
              to="/lookalike"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full py-5 rounded-2xl text-lg font-black uppercase transition-all flex items-center justify-center gap-3 border ${isIdentification ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent neon-shadow-blue' : 'bg-white/5 text-slate-400 border-white/10'}`}
            >
              <Crosshair className="w-6 h-6" />
              {t('nav_identification')}
            </Link>
            <Link 
              to="/encyclopedia"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`w-full py-5 rounded-2xl text-lg font-black uppercase transition-all flex items-center justify-center gap-3 border ${isEncyclopedia ? 'bg-gradient-to-r from-neon-pink to-neon-orange text-white border-transparent neon-shadow-pink' : 'bg-white/5 text-slate-400 border-white/10'}`}
            >
              <Database className="w-6 h-6" />
              {t('nav_encyclopedia')}
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto z-10 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lookalike" element={<Lookalike />} />
          <Route path="/encyclopedia" element={<IdolEncyclopedia />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="p-8 md:p-12 flex flex-col items-center border-t border-white/5 bg-black/40 backdrop-blur-md z-10 mt-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-8">
          <Link to="/privacy" className="text-slate-400 hover:text-neon-blue transition-colors text-xs font-mono uppercase tracking-widest">Privacy Policy</Link>
          <Link to="/terms" className="text-slate-400 hover:text-neon-pink transition-colors text-xs font-mono uppercase tracking-widest">Terms of Service</Link>
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-blue animate-pulse neon-shadow-blue"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-pink animate-pulse neon-shadow-pink" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-green animate-pulse neon-shadow-green" style={{ animationDelay: '0.6s' }}></div>
        </div>
        <p className="mt-8 text-slate-600 font-mono text-[10px] uppercase tracking-[0.2em]">© 2026 K-POP STUDIO. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;