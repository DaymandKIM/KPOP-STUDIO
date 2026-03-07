import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, HelpCircle, Database, ArrowRight, Sparkles, Check, Shield, Zap } from 'lucide-react';

// ─── Stat bar ────────────────────────────────────────────────────────────────

function StatBar() {
  const { t } = useTranslation();
  const stats = [
    { value: '11', labelKey: 'home_stat_groups_label' },
    { value: '73', labelKey: 'home_stat_members_label' },
    { value: '4', labelKey: 'home_stat_quiz_label' },
    { value: '13', labelKey: 'home_stat_langs_label' },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-8">
      {stats.map(({ value, labelKey }, i) => (
        <div key={i} className="flex items-baseline gap-1.5">
          <span className="text-2xl md:text-3xl font-black text-white tabular-nums">{value}</span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">{t(labelKey)}</span>
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
    <div className={`relative w-full rounded-[28px] border ${borderClass} ${gradientBg} p-7 md:p-10 overflow-hidden transition-all duration-300 group`}>
      {/* Glow blob */}
      <div className={`pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full bg-${accentColor}/10 blur-[60px] transition-all duration-500 group-hover:bg-${accentColor}/20`} />

      <div className="relative flex flex-col md:flex-row gap-7 md:gap-10 items-start">
        {/* Left: Icon + Stat */}
        <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-5 shrink-0">
          <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center bg-${accentColor}/15 text-${accentColor} ring-1 ring-${accentColor}/30`}>
            {icon}
          </div>
          <div className="md:text-center">
            <div className={`text-3xl md:text-4xl font-black text-${accentColor} tabular-nums leading-none`}>{stat.value}</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-0.5">{stat.label}</div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 min-w-0">
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-${accentColor}/10 text-${accentColor} border border-${accentColor}/25 mb-3`}>
            {badgeText}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tight leading-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-5">
            {desc}
          </p>

          {/* Feature bullets */}
          <ul className="space-y-2 mb-7">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check className={`w-4 h-4 mt-0.5 shrink-0 text-${accentColor}`} />
                <span className="text-slate-300 text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            to={to}
            className="inline-flex items-center gap-2.5 font-black uppercase italic text-sm py-3.5 px-8 rounded-2xl text-black transition-all active:scale-95 hover:opacity-90"
            style={btnGradient}
          >
            {btnLabel}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
      icon: <Crosshair className="w-8 h-8 md:w-10 md:h-10" />,
      accentColor: 'neon-blue',
      badgeText: t('home_ai_badge'),
      title: t('nav_identification'),
      desc: t('home_svc_lookalike_desc'),
      bullets: [t('home_lookalike_bullet_1'), t('home_lookalike_bullet_2'), t('home_lookalike_bullet_3')],
      stat: { value: '99%', label: t('trust_stat_1_label') },
      btnLabel: t('home_cta_btn'),
      to: '/lookalike',
      btnGradient: {
        background: 'linear-gradient(90deg,#00ffff,#9d00ff,#00ffff)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 24px rgba(0,255,255,0.35)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-blue/8 to-neon-purple/5',
      borderClass: 'border-neon-blue/15 hover:border-neon-blue/40',
    },
    {
      icon: <HelpCircle className="w-8 h-8 md:w-10 md:h-10" />,
      accentColor: 'neon-yellow',
      badgeText: t('nav_quiz'),
      title: t('nav_quiz'),
      desc: t('home_svc_quiz_desc'),
      bullets: [t('home_quiz_bullet_1'), t('home_quiz_bullet_2'), t('home_quiz_bullet_3')],
      stat: { value: '4', label: t('home_stat_quiz_label') },
      btnLabel: t('quiz_start'),
      to: '/quiz',
      btnGradient: {
        background: 'linear-gradient(90deg,#ffe600,#39ff14,#ffe600)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 24px rgba(255,230,0,0.35)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-yellow/8 to-neon-green/5',
      borderClass: 'border-neon-yellow/15 hover:border-neon-yellow/40',
    },
    {
      icon: <Database className="w-8 h-8 md:w-10 md:h-10" />,
      accentColor: 'neon-pink',
      badgeText: t('nav_encyclopedia'),
      title: t('nav_encyclopedia'),
      desc: t('home_svc_enc_desc'),
      bullets: [t('home_enc_bullet_1'), t('home_enc_bullet_2'), t('home_enc_bullet_3')],
      stat: { value: '73', label: t('home_stat_members_label') },
      btnLabel: t('feature_try_encyclopedia'),
      to: '/encyclopedia',
      btnGradient: {
        background: 'linear-gradient(90deg,#ff00ff,#ff6600,#ff00ff)',
        backgroundSize: '200% 100%',
        animation: 'neon-gradient 4s linear infinite',
        boxShadow: '0 0 24px rgba(255,0,255,0.35)',
      } as React.CSSProperties,
      gradientBg: 'bg-gradient-to-br from-neon-pink/8 to-neon-orange/5',
      borderClass: 'border-neon-pink/15 hover:border-neon-pink/40',
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center px-4 md:px-8 pb-16 w-full max-w-4xl mx-auto z-10 animate-fade-in-up">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-col items-center text-center mt-10 md:mt-16 mb-12 md:mb-16 px-2 w-full">
        {/* AI badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-neon-pink" />
          <span className="text-slate-300 font-mono text-[10px] uppercase font-black tracking-widest">{t('home_ai_badge')}</span>
        </div>

        {/* Main title */}
        <h1 className="text-[68px] xs:text-8xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.88] text-white mb-0">
          KPOP
        </h1>
        <h1
          className="text-[68px] xs:text-8xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.88] text-transparent bg-clip-text pb-3"
          style={{
            backgroundImage: 'linear-gradient(90deg, #00ffff, #9d00ff, #ff00ff, #9d00ff, #00ffff)',
            backgroundSize: '300% 100%',
            animation: 'neon-gradient 4s linear infinite',
          }}
        >
          STUDIO
        </h1>

        {/* Tagline */}
        <p className="text-slate-300 font-mono text-sm md:text-base uppercase tracking-widest max-w-lg mt-6 leading-relaxed">
          {t('app_subtitle')}
        </p>

        {/* Stat bar */}
        <StatBar />

        {/* Divider */}
        <div className="flex gap-3 mt-10">
          <div className="w-16 h-0.5 bg-neon-blue/60 rounded-full" />
          <div className="w-10 h-0.5 bg-neon-purple/60 rounded-full" />
          <div className="w-6 h-0.5 bg-neon-pink/60 rounded-full" />
        </div>
      </div>

      {/* ── Service Cards ─────────────────────────────────────────────────── */}
      <div className="w-full space-y-6">
        {cards.map((card) => (
          <ServiceCard key={card.to} {...card} />
        ))}
      </div>

      {/* ── Trust / Why us ────────────────────────────────────────────────── */}
      <div className="w-full mt-12">
        <div className="relative border border-white/8 rounded-[28px] p-6 md:p-10 overflow-hidden bg-gradient-to-br from-white/3 to-transparent">
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-neon-blue/10 blur-[60px]" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-neon-purple/10 blur-[60px]" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="w-4 h-4 text-slate-400" />
              <h2 className="text-xs font-black text-slate-400 italic uppercase tracking-widest">
                {t('trust_title')}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-neon-blue font-black text-3xl md:text-4xl mb-1">99%</div>
                <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_1_label')}</p>
              </div>
              <div>
                <div className="text-neon-purple font-black text-3xl md:text-4xl mb-1">100%</div>
                <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_2_label')}</p>
              </div>
              <div>
                <div className="text-neon-pink font-black text-3xl md:text-4xl mb-1 uppercase">{t('trust_stat_3_value')}</div>
                <p className="text-slate-500 text-[10px] uppercase font-mono tracking-wider">{t('trust_stat_3_label')}</p>
              </div>
            </div>

            {/* Quick trust points */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                { icon: <Zap className="w-3 h-3" />, text: t('home_lookalike_bullet_2') },
                { icon: <Shield className="w-3 h-3" />, text: t('home_lookalike_bullet_3') },
                { icon: <Sparkles className="w-3 h-3" />, text: t('trust_stat_3_label') },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="sr-only">
        KPOP STUDIO is a premier AI-powered platform for K-pop fans. We provide high-accuracy facial recognition to find your K-pop idol lookalike and maintain a comprehensive, real-time database of K-pop group profiles, member details, and latest industry news. Available in 13 languages.
      </div>
    </div>
  );
}
