import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, Languages, RefreshCw, Star, Sparkles } from 'lucide-react';
import { useTeachableMachine } from './hooks/useTeachableMachine';
import './App.css'; // Optional if you have app specific stuff, otherwise index.css has globals

type AppState = 'idle' | 'analyzing' | 'result';

function App() {
  const { t, i18n } = useTranslation();
  const { model, isModelLoading, modelError, predict } = useTeachableMachine();
  
  const [appState, setAppState] = useState<AppState>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
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
      // Small timeout to allow the image to render before predicting
      const timer = setTimeout(async () => {
        try {
          const results = await predict(imageRef.current!);
          setPredictions(results);
          setAppState('result');
        } catch (error) {
          console.error("Prediction failed", error);
          setAppState('idle');
          // Handle error gracefully here (e.g. show toast)
        }
      }, 1500); // Artificial delay for the "analyzing" effect

      return () => clearTimeout(timer);
    }
  }, [appState, selectedImage, model, predict]);

  const resetApp = () => {
    setAppState('idle');
    setSelectedImage(null);
    setPredictions([]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-slate-800/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-xl uppercase tracking-wider">
          <Star className="w-6 h-6 fill-current" />
          {t('app_title')}
        </div>
        <button 
          onClick={toggleLanguage}
          className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 text-sm text-slate-300"
        >
          <Languages className="w-5 h-5" />
          <span className="uppercase font-semibold">{i18n.language}</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto">
        
        {/* Intro Text */}
        {appState === 'idle' && (
          <div className="text-center mb-10 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              {t('app_subtitle')}
            </h1>
            <p className="text-slate-400 max-w-md mx-auto">
              {t('upload_instruction')}
            </p>
          </div>
        )}

        {/* Upload Area */}
        {appState === 'idle' && (
          <div className="w-full max-w-md">
            {isModelLoading ? (
              <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center border border-slate-700/50 min-h-[300px]">
                 <RefreshCw className="w-10 h-10 text-cyan-400 animate-spin mb-4" />
                 <p className="text-slate-300">{t('loading_model')}</p>
              </div>
            ) : modelError ? (
              <div className="glass-card p-8 rounded-3xl border border-red-500/50 text-center">
                 <p className="text-red-400">{t('error_model')}</p>
                 <p className="text-sm text-slate-400 mt-2">{modelError}</p>
              </div>
            ) : (
              <div className="glass-card p-8 rounded-3xl border-2 border-dashed border-slate-600 hover:border-fuchsia-500/50 transition-colors group relative flex flex-col items-center justify-center cursor-pointer min-h-[300px]">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                
                <div className="flex flex-col items-center gap-6 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center neon-shadow-pink group-hover:neon-shadow-blue transition-shadow">
                    <Upload className="w-10 h-10 text-fuchsia-400" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg text-white mb-2">{t('upload_btn')}</p>
                    <p className="text-sm text-slate-400">Drag & Drop or click to browse</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Analyzing View */}
        {appState === 'analyzing' && selectedImage && (
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            <div className="relative rounded-2xl overflow-hidden mb-8 border-2 border-fuchsia-500/30 neon-shadow-pink">
               {/* Image reference for the TM model to read */}
              <img 
                ref={imageRef}
                src={selectedImage} 
                alt="Selected" 
                className="w-full h-auto max-h-[400px] object-cover opacity-50 grayscale"
                crossOrigin="anonymous"
              />
              
              {/* Scanning Animation Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent w-full h-full animate-[scan_2s_ease-in-out_infinite]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>
            
            <p className="text-xl font-medium animate-pulse text-cyan-400">
              {t('analyzing')}
            </p>
          </div>
        )}

        {/* Result View */}
        {appState === 'result' && selectedImage && predictions.length > 0 && (
          <div className="w-full max-w-2xl flex flex-col items-center animate-fade-in-up">
            
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              <Star className="text-yellow-400 fill-yellow-400 w-8 h-8" />
              {t('match_found')}
            </h2>

            <div className="glass-card rounded-3xl p-6 md:p-8 w-full flex flex-col md:flex-row gap-8 items-center border border-fuchsia-500/20 neon-shadow-blue mb-10">
              
              {/* User Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl border border-slate-700 relative flex-shrink-0">
                <img 
                  src={selectedImage} 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Match Details */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-2">Top Match</p>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  {predictions[0].className}
                </h3>
                
                <div className="bg-slate-800/80 rounded-xl p-4 inline-block mb-6 border border-slate-700 w-full md:w-auto">
                  <p className="text-slate-400 text-sm mb-1">{t('similarity')}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-cyan-400">
                      {Math.round(predictions[0].probability * 100)}%
                    </span>
                  </div>
                </div>

                {/* Other possibilities */}
                {predictions.length > 1 && (
                  <div className="text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    <p className="mb-2">Other possibilities:</p>
                    <ul className="space-y-1">
                      {predictions.slice(1, 4).map((pred: any, i: number) => (
                        <li key={i} className="flex justify-between w-full md:w-48">
                          <span>{pred.className}</span>
                          <span className="text-slate-300">{Math.round(pred.probability * 100)}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={resetApp}
              className="flex items-center gap-2 bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95"
            >
              <RefreshCw className="w-5 h-5" />
              {t('try_again')}
            </button>
          </div>
        )}
      </main>

      {/* Tailwind Custom Animations injected inline or in index.css */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default App;