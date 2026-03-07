import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Crosshair, Database, HelpCircle } from 'lucide-react';

type Feature = 'quiz' | 'lookalike' | 'encyclopedia';

interface FeatureNavProps {
  exclude?: Feature[];
  className?: string;
}

const FEATURES: {
  key: Feature;
  to: string;
  icon: React.ReactNode;
  labelKey: string;
  gradient: string;
  border: string;
  glow: string;
}[] = [
  {
    key: 'lookalike',
    to: '/lookalike',
    icon: <Crosshair className="w-6 h-6" />,
    labelKey: 'feature_try_lookalike',
    gradient: 'from-neon-blue/15 to-neon-purple/15',
    border: 'border-neon-blue/30 hover:border-neon-blue/70',
    glow: 'group-hover:text-neon-blue',
  },
  {
    key: 'quiz',
    to: '/quiz',
    icon: <HelpCircle className="w-6 h-6" />,
    labelKey: 'feature_try_quiz',
    gradient: 'from-neon-yellow/15 to-neon-green/15',
    border: 'border-neon-yellow/30 hover:border-neon-yellow/70',
    glow: 'group-hover:text-neon-yellow',
  },
  {
    key: 'encyclopedia',
    to: '/encyclopedia',
    icon: <Database className="w-6 h-6" />,
    labelKey: 'feature_try_encyclopedia',
    gradient: 'from-neon-pink/15 to-neon-orange/15',
    border: 'border-neon-pink/30 hover:border-neon-pink/70',
    glow: 'group-hover:text-neon-pink',
  },
];

export default function FeatureNav({ exclude = [], className = '' }: FeatureNavProps) {
  const { t } = useTranslation();
  const visible = FEATURES.filter(f => !exclude.includes(f.key));

  if (visible.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 text-center">
        {t('feature_nav_title')}
      </p>
      <div className={`grid gap-3 ${visible.length === 1 ? 'grid-cols-1' : visible.length === 2 ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {visible.map(f => (
          <Link
            key={f.key}
            to={f.to}
            className={`group flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${f.gradient} border ${f.border} transition-all`}
          >
            <span className={`${f.glow} transition-colors text-slate-400`}>
              {f.icon}
            </span>
            <span className={`text-sm font-black text-slate-300 ${f.glow} transition-colors leading-snug`}>
              {t(f.labelKey)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
