import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, RefreshCw, Star, Database, Crosshair, Sparkles, Menu, X, ArrowRight, User } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTeachableMachine } from './hooks/useTeachableMachine';
import { KPOP_GROUPS } from './data/idols';
import IdolEncyclopedia from './components/IdolEncyclopedia';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

type AppState = 'idle' | 'analyzing' | 'result';
type ViewMode = 'identification' | 'encyclopedia';

function MainContent() {
  const { t, i18n } = useTranslation();
  const { model, isModelLoading, predict } = useTeachableMachine();

  const [viewMode, setViewMode] = useState<ViewMode>('identification');
  const [appState, setAppState] = useState<AppState>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const currentLang = (i18n.language === 'ko' ? 'ko' : 'en') as 'ko' | 'en';

  // Find matched idol data based on prediction
  const matchedIdol = useMemo(() => {
    if (predictions.length === 0) return null;
    const topLabel = predictions[0].className;
    
    // Logic to map Teachable Machine labels to our data
    let targetMemberId = "";
    if (topLabel.includes("정국")) targetMemberId = "jungkook";
    if (topLabel.includes("장원영")) targetMemberId = "jangwonyoung";

    for (const group of KPOP_GROUPS) {
      const member = group.members.find(m => m.id === targetMemberId);
      if (member) return { group, member };
    }
    return null;
  }, [predictions]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ko' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setAppState('analyzing');
    }
  };

  useEffect(() => {
    if (appState === 'analyzing' && selectedImage && imageRef.current && model) {
      const timer = setTimeout(async () => {
        try {
          const results = await predict(imageRef.current!);
          setPredictions(results);
          setAppState('result');
        } catch (error) {
          console.error("Analysis failed", error);
          setAppState('idle');
        }
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [appState, selectedImage, model, predict]);

  const resetApp = () => {
    setAppState('idle');
    setSelectedImage(null);
    setPredictions([]);
  };

  return (
    <div className="min-h-screen text-slate-50 font-sans flex flex-col relative overflow-hidden">
      <div className="stage-container">
        <div className="stage-glow glow-1"></div>
        <div className="stage-glow glow-2"></div>
        <div className="stage-glow glow-3"></div>
        <div className="stage-grid"></div>
      </div>
      <div className="scanlines"></div>

      <header className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link to="/" onClick={() => setViewMode('identification')} className="flex items-center gap-3">
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
            <button 
              onClick={() => setViewMode('identification')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${viewMode === 'identification' ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white neon-shadow-blue' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Crosshair className="w-4 h-4" />
              {t('nav_identification')}
            </button>
            <button 
              onClick={() => setViewMode('encyclopedia')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2 ${viewMode === 'encyclopedia' ? 'bg-gradient-to-r from-neon-pink to-neon-orange text-white neon-shadow-pink' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
            >
              <Database className="w-4 h-4" />
              {t('nav_encyclopedia')}
            </button>
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:hidden">
          <nav className="flex flex-col gap-6 w-full max-w-xs">
            <button 
              onClick={() => { setViewMode('identification'); setIsMobileMenuOpen(false); }}
              className={`w-full py-5 rounded-2xl text-lg font-black uppercase transition-all flex items-center justify-center gap-3 border ${viewMode === 'identification' ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent neon-shadow-blue' : 'bg-white/5 text-slate-400 border-white/10'}`}
            >
              <Crosshair className="w-6 h-6" />
              {t('nav_identification')}
            </button>
            <button 
              onClick={() => { setViewMode('encyclopedia'); setIsMobileMenuOpen(false); }}
              className={`w-full py-5 rounded-2xl text-lg font-black uppercase transition-all flex items-center justify-center gap-3 border ${viewMode === 'encyclopedia' ? 'bg-gradient-to-r from-neon-pink to-neon-orange text-white border-transparent neon-shadow-pink' : 'bg-white/5 text-slate-400 border-white/10'}`}
            >
              <Database className="w-6 h-6" />
              {t('nav_encyclopedia')}
            </button>
          </nav>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10">
        {viewMode === 'identification' ? (
          <>
            {appState === 'idle' && (
              <div className="text-center mb-8 md:mb-12 animate-fade-in-up w-full px-2">
                <h1 className="text-5xl xs:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter italic text-white leading-[1.1] md:leading-none">
                   MATCH YOUR <br className="xs:hidden" />
                   <span className="inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">KPOP STAR</span>
                </h1>
                <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mx-auto uppercase tracking-wide px-4">
                  {t('upload_instruction')}
                </p>
              </div>
            )}

            {appState === 'idle' && (
              <div className="w-full max-w-lg px-2 flex justify-center">
                {isModelLoading ? (
                  <div className="glass-card rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center border-neon-blue/20 min-h-[320px] md:min-h-[400px] w-full">
                     <div className="relative mb-6 md:mb-8">
                        <RefreshCw className="w-12 h-12 md:w-16 md:h-16 text-neon-blue animate-spin" />
                        <div className="absolute inset-0 blur-xl bg-neon-blue/30 animate-pulse"></div>
                     </div>
                     <p className="text-neon-blue font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t('loading_model')}</p>
                  </div>
                ) : (
                  <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center min-h-[320px] md:min-h-[400px] w-full group relative cursor-pointer active:scale-95 transition-transform duration-200 overflow-hidden">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
                    />
                    
                    {/* Centered Content Container */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none p-6">
                      <div className="relative mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
                        <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-black border border-white/20 flex items-center justify-center relative z-10 neon-shadow-blue">
                          <Upload className="w-10 h-10 md:w-12 md:h-12 text-neon-blue group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      
                      <h3 className="font-black text-4xl md:text-6xl text-white mb-2 md:mb-4 uppercase italic tracking-tighter leading-none">{t('upload_btn')}</h3>
                      <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-[0.3em] font-bold">{i18n.language === 'ko' ? '사진을 선택해 주세요' : 'Tap to Upload Image'}</p>
                    </div>

                    <div className="hud-corner hud-corner-tl !border-neon-blue !w-8 !h-8 md:!w-12 md:!h-12"></div>
                    <div className="hud-corner hud-corner-tr !border-neon-purple !w-8 !h-8 md:!w-12 md:!h-12"></div>
                    <div className="hud-corner hud-corner-bl !border-neon-pink !w-8 !h-8 md:!w-12 md:!h-12"></div>
                    <div className="hud-corner hud-corner-br !border-neon-green !w-8 !h-8 md:!w-12 md:!h-12"></div>
                  </div>
                )}
              </div>
            )}

            {appState === 'analyzing' && selectedImage && (
              <div className="flex flex-col items-center justify-center w-full max-w-lg animate-fade-in-up px-2">
                <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden mb-8 md:mb-12 border-4 border-neon-purple/50 neon-shadow-purple w-full aspect-square md:aspect-auto">
                  <img 
                    ref={imageRef}
                    src={selectedImage} 
                    alt="Target" 
                    className="w-full h-full md:h-auto md:max-h-[500px] object-cover opacity-70 grayscale contrast-125"
                    crossOrigin="anonymous"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-full h-2 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green shadow-[0_0_25px_rgba(255,255,255,0.8)] absolute top-0 animate-[scan_2s_linear_infinite]"></div>
                    <Crosshair className="w-16 h-16 md:w-24 md:h-24 text-white opacity-40 animate-pulse rotate-45" />
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-black italic tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse uppercase">
                    {t('analyzing')}
                  </p>
                </div>
              </div>
            )}

            {appState === 'result' && selectedImage && predictions.length > 0 && (
              <div className="w-full max-w-6xl flex flex-col items-center animate-fade-in-up px-2 pb-10">
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                  <div className="h-px w-10 xs:w-20 md:w-40 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
                  <h2 className="text-2xl xs:text-3xl md:text-6xl font-black italic text-white uppercase tracking-tighter flex items-center gap-3 md:gap-4 glitch-text pr-2">
                    {t('match_found')}
                  </h2>
                  <div className="h-px w-10 xs:w-20 md:w-40 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
                </div>

                <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[48px] p-1 w-full mb-10 md:mb-16">
                  <div className="bg-black/80 backdrop-blur-3xl rounded-[30px] md:rounded-[46px] p-6 md:p-16 flex flex-col lg:flex-row gap-10 md:gap-16 items-center relative z-10">
                    
                    {/* Image Comparison Section */}
                    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row items-center justify-center gap-6 md:gap-8 w-full lg:w-auto">
                      <div className="relative">
                        <div className="w-44 h-44 xs:w-56 xs:h-56 md:w-64 md:h-64 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/10 neon-shadow-purple relative flex-shrink-0">
                          <img 
                            src={selectedImage} 
                            alt="User" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-neon-purple z-20 rotate-6">
                          <User className="w-6 h-6 text-neon-purple" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center neon-shadow-blue animate-pulse">
                          <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-neon-blue rotate-90 md:rotate-0 lg:rotate-90 xl:rotate-0" />
                        </div>
                      </div>

                      {matchedIdol && (
                        <div className="relative">
                          <div className="w-44 h-44 xs:w-56 xs:h-56 md:w-64 md:h-64 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-neon-blue neon-shadow-blue relative flex-shrink-0">
                            <img 
                              src={matchedIdol.member.imageUrl} 
                              alt={matchedIdol.member.name[currentLang]} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-neon-blue z-20 -rotate-6">
                            <Star className="w-6 h-6 text-neon-blue fill-neon-blue" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Result Info Section */}
                    <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-10 w-full">
                      <div className="space-y-2 md:space-y-4">
                        <div className="inline-block px-4 py-1.5 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">Best Match Identified</div>
                        <h3 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none pr-2">
                          {matchedIdol ? matchedIdol.member.name[currentLang] : predictions[0].className}
                        </h3>
                        {matchedIdol && (
                          <div className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="h-px w-8 bg-neon-blue/50"></div>
                            <p className="text-neon-blue font-black text-xl md:text-3xl uppercase tracking-widest italic">
                              {matchedIdol.group.name[currentLang]}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8">
                        <div className="bg-white/5 border border-neon-blue/30 rounded-[32px] p-6 md:p-8 flex flex-col items-center lg:items-start backdrop-blur-md min-w-[140px] flex-1">
                          <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase font-black mb-2 md:mb-4 tracking-widest">{t('similarity')}</p>
                          <div className="flex items-baseline gap-1 md:gap-2">
                            <span className="text-5xl md:text-7xl font-black text-neon-blue italic">
                              {Math.round(predictions[0].probability * 100)}
                            </span>
                            <span className="text-neon-blue font-mono text-xl md:text-3xl font-black">%</span>
                          </div>
                        </div>

                        {matchedIdol && (
                          <>
                            <div className="bg-white/5 border border-neon-purple/30 rounded-[32px] p-6 md:p-8 flex flex-col items-center lg:items-start backdrop-blur-md min-w-[140px] flex-1">
                              <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase font-black mb-2 md:mb-4 tracking-widest">{t('class')}</p>
                              <p className="text-2xl md:text-4xl font-black text-white italic truncate w-full text-center lg:text-left">{matchedIdol.member.role[currentLang]}</p>
                            </div>
                          </>
                        )}
                      </div>

                      {matchedIdol && (
                        <div className="pt-4 flex justify-center lg:justify-start">
                          <button 
                            onClick={() => setViewMode('encyclopedia')}
                            className="flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/50 rounded-2xl text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all group/btn"
                          >
                            <Database className="w-5 h-5 text-neon-green" />
                            <span>{currentLang === 'ko' ? '도감에서 더보기' : 'View in Encyclopedia'}</span>
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={resetApp}
                  className="w-full md:w-auto group relative flex items-center justify-center gap-4 bg-white text-black font-black uppercase italic py-5 md:py-6 px-12 md:px-20 rounded-2xl overflow-hidden transition-all active:scale-95 neon-shadow-pink"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <RefreshCw className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="relative z-10 text-xl md:text-2xl group-hover:text-white transition-colors">{t('try_again')}</span>
                </button>
              </div>
            )}

            {/* About Section for AdSense Content */}
            <div className="w-full max-w-5xl mt-20 md:mt-32 px-4 pb-20 border-t border-white/5 pt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tight uppercase leading-tight">
                    {t('about_title')}
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {t('about_desc')}
                  </p>
                  <div className="flex gap-4">
                    <div className="w-12 h-1 bg-neon-blue"></div>
                    <div className="w-12 h-1 bg-neon-purple"></div>
                    <div className="w-12 h-1 bg-neon-pink"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`glass-card p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all ${i === 1 ? 'md:col-span-2' : ''}`}>
                      <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-wide">
                        {t(`feature_${i}_title` as any)}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {t(`feature_${i}_desc` as any)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <IdolEncyclopedia />
        )}
      </main>

      <footer className="p-8 md:p-12 flex flex-col items-center border-t border-white/5 bg-black/40 backdrop-blur-md z-10">
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
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
