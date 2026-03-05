import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isKo = i18n?.language === 'ko';

  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10 animate-fade-in-up">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-20 mb-16 md:mb-24 w-full px-2">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md whitespace-nowrap">
          <Sparkles className="w-4 h-4 text-neon-pink" />
          <span className="text-slate-300 font-mono text-[10px] md:text-xs uppercase font-black tracking-widest">{t('home_ai_badge')}</span>
        </div>
        
        <h1 className="text-5xl xs:text-6xl md:text-8xl font-black mb-6 tracking-tighter italic text-white leading-[1.1] md:leading-none max-w-5xl mx-auto uppercase">
          <div className="mb-2 md:mb-4">
            {isKo ? t('home_hero_title') : t('app_title')}
          </div>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue pb-1 md:pb-2 break-keep">
            {isKo ? t('home_hero_subtitle') : t('app_subtitle')}
          </span>
        </h1>
        
        <p className="text-slate-400 font-mono text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wide px-4 leading-relaxed mb-10">
          {t('upload_instruction')}
        </p>

        <Link 
          to="/lookalike"
          className="group relative flex items-center justify-center gap-4 bg-white text-black font-black uppercase italic py-5 md:py-6 px-12 md:px-20 rounded-2xl overflow-hidden transition-all active:scale-95 neon-shadow-blue hover:neon-shadow-purple w-full md:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <Crosshair className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:text-white transition-colors" />
          <span className="relative z-10 text-xl md:text-2xl group-hover:text-white transition-colors">{t('home_cta_btn')}</span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:text-white transition-colors group-hover:translate-x-2" />
        </Link>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl mt-10 md:mt-20 px-4 pb-20 border-t border-white/5 pt-20">
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
                  {t(`feature_${i}_title`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`feature_${i}_desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
