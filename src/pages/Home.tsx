import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, HelpCircle, Database, ArrowRight, Sparkles, Check, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';
import { KPOP_GROUPS } from '../data/idols';

// ─── Stat bar ────────────────────────────────────────────────────────────────

function StatBar() {
  const { t } = useTranslation();
  
  const groupsCount = KPOP_GROUPS.length;
  const membersCount = KPOP_GROUPS.reduce((acc, group) => acc + group.members.length, 0);

  const stats = [
    { value: groupsCount.toString(), labelKey: 'home_stat_groups_label', icon: <TrendingUp className="w-3.5 h-3.5 text-neon-blue" /> },
    { value: membersCount.toString(), labelKey: 'home_stat_members_label', icon: <Users className="w-3.5 h-3.5 text-neon-pink" /> },
    { value: '350+', labelKey: 'home_stat_quiz_label', icon: <Zap className="w-3.5 h-3.5 text-neon-yellow" /> },
    { value: '13', labelKey: 'home_stat_langs_label', icon: <Globe className="w-3.5 h-3.5 text-neon-green" /> },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      {stats.map(({ value, labelKey, icon }, i) => (
        <div key={i} className="flex flex-col items-center gap-1 min-w-[80px]">
          <div className="flex items-center gap-1.5">
            {icon}
            <span className="text-2xl md:text-4xl font-black text-white tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{value}</span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">{t(labelKey)}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  icon: React.ReactNode;
  accentColor: string;        // e.g. 'neon-blue'
  badgeText: string;
  title: string;
  desc: string;
  bullets: string[];
  stat: { value: string; label: string };
  btnLabel: string;
  to: string;
  btnGradient: React.CSSProperties;
  gradientBg: string;
  borderClass: string;
}

function ServiceCard({
  icon, accentColor, badgeText, title, desc, bullets, stat, btnLabel, to, btnGradient, gradientBg, borderClass,
}: ServiceCardProps) {
  return (
    <div className={`relative w-full rounded-[32px] md:rounded-[40px] border ${borderClass} ${gradientBg} p-8 md:p-12 overflow-hidden transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl active:scale-[0.98]`}>
      {/* Dynamic Glow blob */}
      <div className={`pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-${accentColor}/10 blur-[80px] transition-all duration-700 group-hover:bg-${accentColor}/25 group-hover:scale-150`} />
      
      {/* Decorative hud lines */}
      <div className={`absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-${accentColor}/50 to-transparent`} />
      <div className={`absolute top-0 left-0 w-[1px] h-24 bg-gradient-to-b from-${accentColor}/50 to-transparent`} />

      <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
        {/* Left: Icon + Stat */}
        <div className="flex md:flex-col items-center md:items-center gap-5 md:gap-6 shrink-0 w-full md:w-auto">
          <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center bg-black border border-${accentColor}/30 text-${accentColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-${accentColor}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10">{icon}</div>
          </div>
          <div className="flex-1 md:text-center">
            <div className={`text-4xl md:text-5xl font-black text-${accentColor} tabular-nums leading-none drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>{stat.value}</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 mt-1 font-bold">{stat.label}</div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 min-w-0 space-y-4">
          <div className="flex items-center gap-3">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-${accentColor}/10 text-${accentColor} border border-${accentColor}/30 shadow-sm`}>
              {badgeText}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none break-words" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
            {title}
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl">
            {desc}
          </p>

          {/* Feature bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-2 pb-4 border-y border-white/5 my-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className={`w-5 h-5 rounded-full bg-${accentColor}/10 flex items-center justify-center border border-${accentColor}/20 shrink-0`}>
                  <Check className={`w-3 h-3 text-${accentColor}`} />
                </div>
                <span className="text-slate-300 text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            to={to}
            className="group/btn relative inline-flex items-center justify-center gap-3 font-black uppercase italic text-base py-4 md:py-5 px-10 md:px-12 rounded-2xl text-black transition-all active:scale-95 hover:opacity-95 overflow-hidden"
            style={btnGradient}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">{btnLabel}</span>
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <Crosshair className="w-10 h-10 md:w-12 md:h-12" />,
      accentColor: 'neon-blue',
      badgeText: t('home_ai_badge'),
      title: t('nav_identification'),
      desc: t('home_svc_lookalike_desc'),
      bullets: [t('home_lookalike_bullet_1'), t('home_lookalike_bullet_2'), t('home_lookalike_bullet_3')],
      stat: { value: '99%', label: t('trust_stat_1_label') },
      btnLabel: t('home_cta_btn'),
      to: '/lookalike',
      btnGradient: {
        background: 'linear-gradient(90deg, #00ffff, #9d00ff, #00ffff)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 30px rgba(0,255,255,0.4)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-blue/10 to-transparent',
      borderClass: 'border-neon-blue/20 hover:border-neon-blue/50',
    },
    {
      icon: <HelpCircle className="w-10 h-10 md:w-12 md:h-12" />,
      accentColor: 'neon-yellow',
      badgeText: t('nav_quiz'),
      title: t('nav_quiz'),
      desc: t('home_svc_quiz_desc'),
      bullets: [t('home_quiz_bullet_1'), t('home_quiz_bullet_2'), t('home_quiz_bullet_3')],
      stat: { value: '200+', label: t('home_stat_quiz_label') },
      btnLabel: t('quiz_start'),
      to: '/quiz',
      btnGradient: {
        background: 'linear-gradient(90deg, #ffe600, #39ff14, #ffe600)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 30px rgba(255,230,0,0.4)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-yellow/10 to-transparent',
      borderClass: 'border-neon-yellow/20 hover:border-neon-yellow/50',
    },
    {
      icon: <Database className="w-10 h-10 md:w-12 md:h-12" />,
      accentColor: 'neon-pink',
      badgeText: t('nav_encyclopedia'),
      title: t('nav_encyclopedia'),
      desc: t('home_svc_enc_desc'),
      bullets: [t('home_enc_bullet_1'), t('home_enc_bullet_2'), t('home_enc_bullet_3')],
      stat: { value: '73', label: t('home_stat_members_label') },
      btnLabel: t('feature_try_encyclopedia'),
      to: '/encyclopedia',
      btnGradient: {
        background: 'linear-gradient(90deg, #ff00ff, #ff6600, #ff00ff)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 30px rgba(255,0,255,0.4)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-pink/10 to-transparent',
      borderClass: 'border-neon-pink/20 hover:border-neon-pink/50',
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center px-4 md:px-12 pb-24 w-full max-w-6xl mx-auto z-10 overflow-x-hidden">

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <div className="relative flex flex-col items-center text-center mt-12 md:mt-24 mb-20 md:mb-32 px-4 w-full max-w-5xl">
        {/* Visual background glow for hero */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[150%] aspect-square bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* AI badge with entry animation */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
          <span className="text-slate-200 font-mono text-xs uppercase font-black tracking-[0.3em]">{t('home_ai_badge')}</span>
        </div>

        {/* Main title with refined sizing to prevent clipping */}
        <div className="relative px-4 pb-4">
          <h1 className="font-black italic uppercase tracking-tighter text-center leading-[0.85] flex flex-col items-center">
            <span className="block text-[80px] xs:text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] text-white animate-fade-in-up tracking-[-0.05em] select-none" style={{ animationDelay: '0.1s' }}>
              KPOP
            </span>
            <span
              className="block text-[80px] xs:text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] text-transparent bg-clip-text select-none animate-fade-in-up tracking-[-0.05em]"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00ffff, #9d00ff, #ff00ff, #9d00ff, #00ffff)',
                backgroundSize: '300% 100%',
                animation: 'neon-gradient 4s linear infinite, fade-in-up 0.8s ease-out forwards',
                animationDelay: '0.2s',
                paddingTop: '0.1em',
                paddingBottom: '0.1em',
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
                marginLeft: '-0.1em',
                marginRight: '-0.1em',
                marginTop: '-0.1em'
              }}
            >
              STUDIO
            </span>
          </h1>
          
          {/* Subtle decorative elements behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white/5 blur-[100px] -z-10 rounded-full opacity-50" />
        </div>

        {/* Tagline with elegant typography */}
        <div className="mt-6 md:mt-8 space-y-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-slate-300 font-mono text-sm md:text-lg uppercase tracking-[0.3em] font-bold">
            {t('home_tagline')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
            <Sparkles className="w-4 h-4 text-neon-yellow" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>

        {/* Stat bar */}
        <StatBar />
      </div>

      {/* ── Main Features Grid ────────────────────────────────────────────── */}
      <div className="w-full space-y-10 md:space-y-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-4 px-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] italic">Features</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
        
        <div className="grid grid-cols-1 gap-10 md:gap-16">
          {cards.map((card) => (
            <ServiceCard key={card.to} {...card} />
          ))}
        </div>
      </div>

      {/* ── Trust Section ────────────────────────────────────────────────── */}
      <div className="w-full mt-24 md:mt-32 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="relative border border-white/10 rounded-[40px] p-10 md:p-16 overflow-hidden bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-neon-blue/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-neon-purple/10 blur-[100px]" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 mb-6">
                <Shield className="w-8 h-8 text-neon-blue" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
                {t('trust_title')}
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Global K-pop fan base's trusted platform. We prioritize your privacy and data accuracy above all.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center border-y border-white/5 py-12 mb-12">
              <div className="space-y-2">
                <div className="text-neon-blue font-black text-5xl md:text-6xl tracking-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">99%</div>
                <p className="text-slate-500 text-xs uppercase font-black tracking-[0.2em]">{t('trust_stat_1_label')}</p>
              </div>
              <div className="space-y-2">
                <div className="text-neon-purple font-black text-5xl md:text-6xl tracking-tight drop-shadow-[0_0_15px_rgba(157,0,255,0.3)]">100%</div>
                <p className="text-slate-500 text-xs uppercase font-black tracking-[0.2em]">{t('trust_stat_2_label')}</p>
              </div>
              <div className="space-y-2">
                <div className="text-neon-pink font-black text-5xl md:text-6xl tracking-tight uppercase drop-shadow-[0_0_15px_rgba(255,0,255,0.3)]">{t('trust_stat_3_value')}</div>
                <p className="text-slate-500 text-xs uppercase font-black tracking-[0.2em]">{t('trust_stat_3_label')}</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
              {[
                { icon: <Zap className="w-4 h-4 text-neon-yellow" />, text: t('home_lookalike_bullet_2') },
                { icon: <Shield className="w-4 h-4 text-neon-green" />, text: t('home_lookalike_bullet_3') },
                { icon: <Sparkles className="w-4 h-4 text-neon-blue" />, text: t('trust_stat_3_label') },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-mono font-medium tracking-wide">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">{icon}</div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SEO Hidden Text ── */}
      <div className="sr-only">
        KPOP STUDIO is a premier AI-powered platform for K-pop fans. We provide high-accuracy facial recognition to find your K-pop idol lookalike and maintain a comprehensive, real-time database of K-pop group profiles, member details, and latest industry news. Available in 13 languages. Experience the future of K-pop fandom.
      </div>
    </div>
  );
}
