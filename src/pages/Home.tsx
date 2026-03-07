import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, Sparkles, ArrowRight, Database } from 'lucide-react';
import FeatureNav from '../components/FeatureNav';

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
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue pb-2 md:pb-3 break-keep">
            {isKo ? t('home_hero_subtitle') : t('app_subtitle')}
          </span>
        </h1>
        
        <div className="sr-only">
          KPOP STUDIO is a premier AI-powered platform for K-pop fans. We provide high-accuracy facial recognition to find your K-pop idol lookalike and maintain a comprehensive, real-time database of K-pop group profiles, member details, and latest industry news.
        </div>
        
        <p className="text-slate-400 font-mono text-sm md:text-base max-w-2xl mx-auto uppercase tracking-wide px-4 leading-relaxed mb-10">
          {t('upload_instruction')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Link
            to="/lookalike"
            className="group relative flex items-center justify-center gap-4 text-white font-black uppercase italic py-5 md:py-6 px-12 md:px-20 rounded-2xl overflow-hidden transition-all active:scale-95 w-full md:w-auto"
            style={{
              background: 'linear-gradient(90deg, #00ffff, #9d00ff, #ff00ff, #9d00ff, #00ffff)',
              backgroundSize: '300% 100%',
              animation: 'neon-gradient 4s linear infinite',
              boxShadow: '0 0 28px rgba(0,255,255,0.45), 0 0 60px rgba(157,0,255,0.2)',
            }}
          >
            <Crosshair className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
            <span className="relative z-10 text-xl md:text-2xl">{t('home_cta_btn')}</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <Link
            to="/encyclopedia"
            className="group flex items-center justify-center gap-3 text-white font-black uppercase italic py-5 md:py-6 px-10 md:px-16 rounded-2xl border border-neon-pink/40 bg-neon-pink/10 hover:bg-neon-pink/20 hover:border-neon-pink/70 transition-all active:scale-95 w-full md:w-auto"
            style={{ boxShadow: '0 0 20px rgba(255,0,255,0.15)' }}
          >
            <Database className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-xl md:text-2xl">
              {i18n.language === 'ko' ? 'K-POP 스타 도감' : 'K-POP Encyclopedia'}
            </span>
          </Link>
        </div>
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

      {/* Trust & Authority Section */}
      <div className="w-full max-w-4xl mb-20 px-4">
        <div className="bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 border border-white/10 rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple/20 blur-[80px]"></div>
          
          <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase mb-6 tracking-tight break-keep">
            {t('trust_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-neon-blue font-black text-3xl">99%</div>
              <p className="text-slate-400 text-xs uppercase font-mono tracking-widest">{t('trust_stat_1_label')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-neon-purple font-black text-3xl">100%</div>
              <p className="text-slate-400 text-xs uppercase font-mono tracking-widest">{t('trust_stat_2_label')}</p>
            </div>
            <div className="space-y-2">
              <div className="text-neon-pink font-black text-3xl uppercase">{t('trust_stat_3_value')}</div>
              <p className="text-slate-400 text-xs uppercase font-mono tracking-widest">{t('trust_stat_3_label')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Nav */}
      <div className="w-full max-w-2xl mt-12 mb-4">
        <FeatureNav />
      </div>
    </div>
  );
}
