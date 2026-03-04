import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, RefreshCw, Star, Database, Crosshair, Zap, Sparkles, Menu, X } from 'lucide-react';
import { useTeachableMachine } from './hooks/useTeachableMachine';
import IdolEncyclopedia from './components/IdolEncyclopedia';
import './App.css';

type AppState = 'idle' | 'analyzing' | 'result';
type ViewMode = 'identification' | 'encyclopedia';

function App() {
  const { t, i18n } = useTranslation();
  const { model, isModelLoading, modelError, predict } = useTeachableMachine();
  
  const [viewMode, setViewMode] = useState<ViewMode>('identification');
  const [appState, setAppState] = useState<AppState>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

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
    <div className="min-h-screen bg-black text-slate-50 font-sans flex flex-col relative overflow-hidden">
      {/* Global Scanlines */}
      <div className="scanlines"></div>

      {/* Header */}
      <header className="px-4 py-4 md:px-8 md:py-6 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-neon-pink via-neon-purple to-neon-blue rounded-xl flex items-center justify-center neon-shadow-purple rotate-3">
            <Star className="w-6 h-6 md:w-7 md:h-7 text-white fill-white" />
          </div>
          <div>
            <div className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter leading-none glitch-text pr-1">
              {t('app_title')}
            </div>
          </div>
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

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10">
        
        {viewMode === 'identification' ? (
          <>
            {/* Intro Text */}
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

            {/* Upload Area */}
            {appState === 'idle' && (
              <div className="w-full max-w-lg px-2">
                {isModelLoading ? (
                  <div className="glass-card p-10 md:p-16 rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center border-neon-blue/20 min-h-[300px] md:min-h-[400px]">
                     <div className="relative">
                        <RefreshCw className="w-12 h-12 md:w-16 md:h-16 text-neon-blue animate-spin mb-6 md:mb-8" />
                        <div className="absolute inset-0 blur-xl bg-neon-blue/30 animate-pulse"></div>
                     </div>
                     <p className="text-neon-blue font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t('loading_model')}</p>
                  </div>
                ) : (
                  <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[40px] group relative cursor-pointer min-h-[320px] md:min-h-[400px] flex items-center justify-center active:scale-95 transition-transform duration-200">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-10 p-8 md:p-16 w-full">
                      <div className="relative group-hover:scale-110 transition-transform duration-700">
                        <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink blur-3xl opacity-20 group-hover:opacity-60 transition-opacity"></div>
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black border border-white/20 flex items-center justify-center relative z-10 neon-shadow-blue">
                          <Upload className="w-10 h-10 md:w-12 md:h-12 text-neon-blue group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      
                      <div className="text-center relative z-10">
                        <p className="font-black text-2xl md:text-3xl text-white mb-2 md:mb-3 uppercase italic tracking-tight">{t('upload_btn')}</p>
                        <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">{i18n.language === 'ko' ? '사진을 선택해 주세요' : 'Tap to Upload Image'}</p>
                      </div>

                      <div className="hud-corner hud-corner-tl !border-neon-blue !w-8 !h-8 md:!w-10 md:!h-10"></div>
                      <div className="hud-corner hud-corner-tr !border-neon-purple !w-8 !h-8 md:!w-10 md:!h-10"></div>
                      <div className="hud-corner hud-corner-bl !border-neon-pink !w-8 !h-8 md:!w-10 md:!h-10"></div>
                      <div className="hud-corner hud-corner-br !border-neon-green !w-8 !h-8 md:!w-10 md:!h-10"></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Analyzing View */}
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
                  
                  {/* Multi-color Scanning Animation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-full h-2 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green shadow-[0_0_25px_rgba(255,255,255,0.8)] absolute top-0 animate-[scan_2s_linear_infinite]"></div>
                    <Crosshair className="w-16 h-16 md:w-24 md:h-24 text-white opacity-40 animate-pulse rotate-45" />
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-black italic tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse uppercase">
                    {t('analyzing')}
                  </p>
                  <div className="mt-4 md:mt-6 flex gap-1.5 md:gap-2 justify-center">
                    {['#00ffff', '#ff00ff', '#9d00ff', '#39ff14', '#fff01f'].map((color, i) => (
                      <div key={i} className="w-8 md:w-10 h-1.5 bg-white/10 overflow-hidden rounded-full">
                        <div 
                          className="w-full h-full animate-[pulse_1s_infinite]" 
                          style={{ backgroundColor: color, animationDelay: `${i * 0.1}s` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Result View */}
            {appState === 'result' && selectedImage && predictions.length > 0 && (
              <div className="w-full max-w-5xl flex flex-col items-center animate-fade-in-up px-2 pb-10">
                
                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                  <div className="h-px w-10 xs:w-20 md:w-40 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
                  <h2 className="text-2xl xs:text-3xl md:text-6xl font-black italic text-white uppercase tracking-tighter flex items-center gap-3 md:gap-4 glitch-text pr-2">
                    {t('match_found')}
                  </h2>
                  <div className="h-px w-10 xs:w-20 md:w-40 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
                </div>

                <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[48px] p-1 w-full mb-8 md:mb-12">
                  <div className="bg-black/80 backdrop-blur-3xl rounded-[30px] md:rounded-[46px] p-6 md:p-14 flex flex-col md:flex-row gap-8 md:gap-14 items-center">
                    
                    <div className="relative group w-full md:w-auto flex justify-center">
                      <div className="w-56 h-56 md:w-80 md:h-80 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/10 relative flex-shrink-0 neon-shadow-purple">
                        <img 
                          src={selectedImage} 
                          alt="User" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8 w-full">
                      <div>
                        <div className="inline-block px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 rounded-lg text-neon-pink font-mono text-[10px] uppercase tracking-[0.2em] font-black mb-3">Best Match</div>
                        <h3 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-tight mb-2 truncate pr-2">
                          {predictions[0].className}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-6">
                        <div className="bg-white/5 border border-neon-blue/30 rounded-2xl p-4 md:p-6 flex flex-col items-center md:items-start backdrop-blur-md">
                          <p className="text-slate-500 font-mono text-[9px] md:text-[10px] uppercase font-black mb-1 md:mb-2 tracking-widest">{t('similarity')}</p>
                          <div className="flex items-baseline gap-1 md:gap-2">
                            <span className="text-3xl md:text-5xl font-black text-neon-blue italic">
                              {Math.round(predictions[0].probability * 100)}
                            </span>
                            <span className="text-neon-blue font-mono text-sm md:text-xl font-black">%</span>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-neon-green/30 rounded-2xl p-4 md:p-6 flex flex-col items-center md:items-start backdrop-blur-md">
                          <p className="text-slate-500 font-mono text-[9px] md:text-[10px] uppercase font-black mb-1 md:mb-2 tracking-widest">Potential</p>
                          <div className="flex items-center gap-2 md:gap-3">
                            <Zap className="w-5 h-5 md:w-7 md:h-7 text-neon-green fill-neon-green" />
                            <span className="text-xl md:text-3xl font-black text-neon-green uppercase italic pr-1">S-CLASS</span>
                          </div>
                        </div>
                      </div>

                      {predictions.length > 1 && (
                        <div className="space-y-3">
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] font-black text-left">Alternatives:</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {predictions.slice(1, 3).map((pred: any, i: number) => (
                              <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                                <span className="text-xs font-black text-slate-300 uppercase italic tracking-tight truncate pr-4">{pred.className}</span>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  <div className="w-12 xs:w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon-purple" style={{ width: `${Math.round(pred.probability * 100)}%` }}></div>
                                  </div>
                                  <span className="text-[10px] font-mono font-black text-neon-purple">{Math.round(pred.probability * 100)}%</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={resetApp}
                  className="w-full md:w-auto group relative flex items-center justify-center gap-4 bg-white text-black font-black uppercase italic py-4 md:py-5 px-10 md:px-14 rounded-2xl overflow-hidden transition-all active:scale-95 neon-shadow-pink"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <RefreshCw className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="relative z-10 text-lg md:text-xl group-hover:text-white transition-colors">{t('try_again')}</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <IdolEncyclopedia />
        )}
      </main>

      {/* Footer */}
      <footer className="p-4 md:p-6 flex justify-center items-center border-t border-white/5 bg-black/40 backdrop-blur-md z-10">
        <div className="flex gap-4 md:gap-6">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-blue animate-pulse neon-shadow-blue"></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-pink animate-pulse neon-shadow-pink" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-neon-green animate-pulse neon-shadow-green" style={{ animationDelay: '0.6s' }}></div>
        </div>
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
        @media (max-width: 480px) {
          .glitch-text {
            text-shadow: 1px 0 var(--color-neon-pink), -1px 0 var(--color-neon-blue);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
