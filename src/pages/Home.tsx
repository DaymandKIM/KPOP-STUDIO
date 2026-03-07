import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, HelpCircle, Database, ArrowRight, Sparkles, Zap, BookOpen } from 'lucide-react';

const SERVICES = [
  {
    icon: <Crosshair className="w-8 h-8" />,
    badgeKey: 'home_ai_badge',
    titleKey: 'nav_identification',
    descKey: 'home_svc_lookalike_desc',
    btnKey: 'home_cta_btn',
    to: '/lookalike',
    accent: 'neon-blue',
    gradientFrom: 'from-neon-blue/10',
    gradientTo: 'to-neon-purple/10',
    border: 'border-neon-blue/20 hover:border-neon-blue/50',
    iconBg: 'bg-neon-blue/10 text-neon-blue',
    badgeBg: 'bg-neon-blue/10 text-neon-blue border-neon-blue/30',
    btnStyle: {
      background: 'linear-gradient(90deg, #00ffff, #9d00ff, #00ffff)',
      backgroundSize: '200% 100%',
      animation: 'neon-gradient 4s linear infinite',
      boxShadow: '0 0 20px rgba(0,255,255,0.3)',
    },
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    badgeKey: 'nav_quiz',
    titleKey: 'nav_quiz',
    descKey: 'home_svc_quiz_desc',
    btnKey: 'quiz_start',
    to: '/quiz',
    accent: 'neon-yellow',
    gradientFrom: 'from-neon-yellow/10',
    gradientTo: 'to-neon-green/10',
    border: 'border-neon-yellow/20 hover:border-neon-yellow/50',
    iconBg: 'bg-neon-yellow/10 text-neon-yellow',
    badgeBg: 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/30',
    btnStyle: {
      background: 'linear-gradient(90deg, #ffe600, #39ff14, #ffe600)',
      backgroundSize: '200% 100%',
      animation: 'neon-gradient 4s linear infinite',
      boxShadow: '0 0 20px rgba(255,230,0,0.3)',
    },
  },
  {
    icon: <Database className="w-8 h-8" />,
    badgeKey: 'nav_encyclopedia',
    titleKey: 'nav_encyclopedia',
    descKey: 'home_svc_enc_desc',
    btnKey: 'feature_try_encyclopedia',
    to: '/encyclopedia',
    accent: 'neon-pink',
    gradientFrom: 'from-neon-pink/10',
    gradientTo: 'to-neon-orange/10',
    border: 'border-neon-pink/20 hover:border-neon-pink/50',
    iconBg: 'bg-neon-pink/10 text-neon-pink',
    badgeBg: 'bg-neon-pink/10 text-neon-pink border-neon-pink/30',
    btnStyle: {
      background: 'linear-gradient(90deg, #ff00ff, #ff6600, #ff00ff)',
      backgroundSize: '200% 100%',
      animation: 'neon-gradient 4s linear infinite',
      boxShadow: '0 0 20px rgba(255,0,255,0.3)',
    },
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 w-full max-w-4xl mx-auto z-10 animate-fade-in-up">

      {/* Compact Hero */}
      <div className="flex flex-col items-center text-center mt-8 md:mt-14 mb-10 md:mb-14 px-2">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-neon-pink" />
          <span className="text-slate-300 font-mono text-[10px] uppercase font-black tracking-widest">KPOP STUDIO</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-none mb-3">
          {t('app_title')}
        </h1>
        <p className="text-slate-400 font-mono text-xs md:text-sm uppercase tracking-widest max-w-sm">
          {t('app_subtitle')}
        </p>
      </div>

      {/* Service Cards */}
      <div className="w-full space-y-5 mb-14">
        {SERVICES.map((svc, i) => (
          <div
            key={svc.to}
            className={`group w-full bg-gradient-to-br ${svc.gradientFrom} ${svc.gradientTo} border ${svc.border} rounded-3xl p-6 md:p-8 transition-all duration-300`}
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
              {/* Icon block */}
              <div className={`shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${svc.iconBg}`}>
                {svc.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-black uppercase tracking-widest mb-2 ${svc.badgeBg}`}>
                  {i === 0 && <Zap className="w-3 h-3" />}
                  {i === 1 && <HelpCircle className="w-3 h-3" />}
                  {i === 2 && <BookOpen className="w-3 h-3" />}
                  {t(svc.badgeKey)}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tight mb-2">
                  {t(svc.titleKey)}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {t(svc.descKey)}
                </p>
                <Link
                  to={svc.to}
                  className="inline-flex items-center gap-2.5 text-black font-black uppercase italic text-sm py-3 px-7 rounded-xl transition-all active:scale-95"
                  style={svc.btnStyle}
                >
                  <span>{t(svc.btnKey)}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="w-full mb-14">
        <div className="bg-gradient-to-br from-white/3 to-white/0 border border-white/8 rounded-3xl p-6 md:p-8 text-center">
          <h2 className="text-sm font-black text-slate-400 italic uppercase tracking-widest mb-6">
            {t('trust_title')}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <div className="text-neon-blue font-black text-2xl md:text-3xl">99%</div>
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_1_label')}</p>
            </div>
            <div className="space-y-1">
              <div className="text-neon-purple font-black text-2xl md:text-3xl">100%</div>
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_2_label')}</p>
            </div>
            <div className="space-y-1">
              <div className="text-neon-pink font-black text-2xl md:text-3xl uppercase">{t('trust_stat_3_value')}</div>
              <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_3_label')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO hidden text */}
      <div className="sr-only">
        KPOP STUDIO is a premier AI-powered platform for K-pop fans. We provide high-accuracy facial recognition to find your K-pop idol lookalike and maintain a comprehensive, real-time database of K-pop group profiles, member details, and latest industry news.
      </div>
    </div>
  );
}
