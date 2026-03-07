import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, RefreshCw, Heart } from 'lucide-react';
import { KPOP_GROUPS, type Member, type KpopGroup } from '../data/idols';
import { getLangText } from '../utils/lang';
import SharePanel from '../components/SharePanel';
import FeatureNav from '../components/FeatureNav';
import { generateWorldcupShareCard } from '../hooks/useShareCard';

// ─── Types ────────────────────────────────────────────────────────────────────

type Gender = 'all' | 'girl' | 'boy';
type WCPhase = 'start' | 'match' | 'champion';
type BracketSize = 16 | 32;

interface Contestant {
  member: Member;
  group: KpopGroup;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BOY_GROUP_IDS = new Set(['bts', 'straykids', 'seventeen', 'enhypen', 'riize', 'txt', 'jungkook']);

// ─── Utilities ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getRoundName(size: number, t: (k: string) => string): string {
  if (size === 32) return t('worldcup_round_32');
  if (size === 16) return t('worldcup_round_16');
  if (size === 8)  return t('worldcup_round_8');
  if (size === 4)  return t('worldcup_round_4');
  if (size === 2)  return t('worldcup_final');
  return `${size}`;
}

// ─── IdolCard ─────────────────────────────────────────────────────────────────

interface IdolCardProps {
  contestant: Contestant;
  onPick: () => void;
  picked: boolean;
  lost: boolean;
  lang: string;
}

function IdolCard({ contestant, onPick, picked, lost, lang }: IdolCardProps) {
  const { member, group } = contestant;
  const name = getLangText(member.name, lang);
  const groupName = getLangText(group.name, lang);

  return (
    <button
      onClick={onPick}
      disabled={picked || lost}
      className={`relative flex flex-col items-center rounded-3xl overflow-hidden border-2 transition-all duration-300 active:scale-95 w-full
        ${picked
          ? 'border-neon-pink scale-[1.03] shadow-[0_0_40px_rgba(255,0,255,0.5)]'
          : lost
          ? 'border-white/10 opacity-30 scale-95'
          : 'border-white/15 hover:border-neon-blue/60 hover:shadow-[0_0_24px_rgba(0,255,255,0.2)]'
        }`}
    >
      {/* Photo */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-white/5">
        <img
          src={member.imageUrl}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          onError={e => {
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23111"%2F%3E%3Ctext x="50" y="55" text-anchor="middle" font-size="40" fill="%23444"%3E★%3C%2Ftext%3E%3C%2Fsvg%3E';
          }}
        />
        {picked && (
          <div className="absolute inset-0 flex items-center justify-center bg-neon-pink/20 backdrop-blur-sm">
            <Heart className="w-16 h-16 text-neon-pink fill-neon-pink drop-shadow-[0_0_20px_rgba(255,0,255,1)]" />
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
        <p className="text-white font-black text-base md:text-lg leading-tight">{name}</p>
        <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">{groupName}</p>
      </div>
    </button>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Worldcup() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [phase, setPhase] = useState<WCPhase>('start');
  const [bracketSize, setBracketSize] = useState<BracketSize>(16);
  const [gender, setGender] = useState<Gender>('all');

  // Tournament state
  const [pool, setPool] = useState<Contestant[]>([]);       // current round contestants
  const [matchIdx, setMatchIdx] = useState(0);              // which match in this round
  const [roundWinners, setRoundWinners] = useState<Contestant[]>([]);
  const [champion, setChampion] = useState<Contestant | null>(null);

  // Pick animation
  const [pickedSide, setPickedSide] = useState<'left' | 'right' | null>(null);

  // Share
  const [shareBlob, setShareBlob] = useState<Blob | null>(null);
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);
  const [showShare, setShowShare] = useState(false);

  // ── Derived ────────────────────────────────────────────────────────────────

  const allContestants: Contestant[] = KPOP_GROUPS.flatMap(g =>
    g.members.map(m => ({ member: m, group: g }))
  );

  function getFiltered() {
    if (gender === 'girl') return allContestants.filter(c => !BOY_GROUP_IDS.has(c.group.id));
    if (gender === 'boy')  return allContestants.filter(c => BOY_GROUP_IDS.has(c.group.id));
    return allContestants;
  }

  const filtered = getFiltered();
  const maxSize = filtered.length >= 32 ? 32 : 16;
  const effectiveSize = bracketSize > maxSize ? 16 : bracketSize;

  const left  = pool[matchIdx * 2];
  const right = pool[matchIdx * 2 + 1];
  const roundSize   = pool.length;
  const totalMatches = Math.floor(roundSize / 2);
  const roundName   = getRoundName(roundSize, t);
  const matchNum    = matchIdx + 1;

  // ── Actions ────────────────────────────────────────────────────────────────

  function startWorldcup() {
    const picked = shuffle(getFiltered()).slice(0, effectiveSize);
    setPool(picked);
    setMatchIdx(0);
    setRoundWinners([]);
    setChampion(null);
    setPickedSide(null);
    setShareBlob(null);
    setShowShare(false);
    setPhase('match');
  }

  const handlePick = useCallback((side: 'left' | 'right') => {
    if (pickedSide) return;
    setPickedSide(side);

    setTimeout(() => {
      const winner = side === 'left' ? left : right;
      const newWinners = [...roundWinners, winner];
      const nextIdx = matchIdx + 1;

      if (nextIdx >= totalMatches) {
        // Round done
        if (newWinners.length === 1) {
          setChampion(newWinners[0]);
          setPhase('champion');
        } else {
          setPool(newWinners);
          setMatchIdx(0);
          setRoundWinners([]);
        }
      } else {
        setMatchIdx(nextIdx);
        setRoundWinners(newWinners);
      }
      setPickedSide(null);
    }, 550);
  }, [pickedSide, left, right, roundWinners, matchIdx, totalMatches]);

  async function handleShare() {
    setShowShare(true);
    if (shareBlob || !champion) return;
    setIsGeneratingCard(true);
    try {
      const blob = await generateWorldcupShareCard({
        imageUrl: champion.member.imageUrl,
        memberName: getLangText(champion.member.name, lang),
        groupName: getLangText(champion.group.name, lang),
        lang,
      });
      setShareBlob(blob);
    } catch { /* silent */ } finally {
      setIsGeneratingCard(false);
    }
  }

  // ── Start Screen ───────────────────────────────────────────────────────────

  if (phase === 'start') {
    const genderOptions: { key: Gender; labelKey: string }[] = [
      { key: 'all',  labelKey: 'worldcup_gender_all' },
      { key: 'girl', labelKey: 'worldcup_gender_girl' },
      { key: 'boy',  labelKey: 'worldcup_gender_boy' },
    ];

    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 min-h-[70vh]">
        <div className="w-full max-w-lg">
          {/* Hero title */}
          <div className="text-center mb-10">
            <div className="relative mb-6 pt-4">
              <h1 className="font-black italic uppercase tracking-tighter text-center leading-[0.85] flex flex-col items-center">
                <span className="block text-[56px] sm:text-[72px] md:text-[90px] text-white tracking-[-0.05em] select-none">
                  이상형
                </span>
                <span
                  className="block text-[56px] sm:text-[72px] md:text-[90px] text-transparent bg-clip-text select-none tracking-[-0.05em]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #ff00ff, #9d00ff, #ff00ff)',
                    backgroundSize: '200% 100%',
                    animation: 'neon-gradient 4s linear infinite',
                    paddingLeft: '0.25em',
                    paddingRight: '0.25em',
                    paddingTop: '0.1em',
                    paddingBottom: '0.15em',
                  }}
                >
                  WORLDCUP
                </span>
              </h1>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-pink/10 blur-[80px] -z-10 rounded-full" />
            </div>
            <p className="text-slate-400 text-sm font-mono uppercase tracking-widest">{t('worldcup_subtitle')}</p>
          </div>

          {/* Gender filter */}
          <div className="mb-6">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 text-center">
              {t('worldcup_select_gender')}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {genderOptions.map(({ key, labelKey }) => (
                <button
                  key={key}
                  onClick={() => { setGender(key); if (bracketSize > (key === 'boy' ? 16 : 32)) setBracketSize(16); }}
                  className={`p-3 rounded-2xl border-2 transition-all text-sm font-black ${
                    gender === key
                      ? 'border-neon-pink bg-neon-pink/15 text-neon-pink'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30'
                  }`}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Bracket size */}
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3 text-center">
              {t('worldcup_select_size')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {([16, 32] as BracketSize[]).map(size => {
                const tooFew = getFiltered().length < size;
                return (
                  <button
                    key={size}
                    onClick={() => !tooFew && setBracketSize(size)}
                    disabled={tooFew}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${
                      tooFew
                        ? 'border-white/5 bg-white/2 text-slate-700 cursor-not-allowed opacity-40'
                        : bracketSize === size
                        ? 'border-neon-purple bg-neon-purple/15 text-neon-purple'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/30'
                    }`}
                  >
                    <span className="text-2xl font-black">{size}</span>
                    <span className="text-[10px] font-mono uppercase tracking-widest">
                      {getRoundName(size, t)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Start */}
          <button
            onClick={startWorldcup}
            className="w-full py-5 rounded-2xl text-black font-black text-xl uppercase tracking-wider flex items-center justify-center gap-3 transition-all active:scale-95 mb-8"
            style={{
              background: 'linear-gradient(90deg, #ff00ff, #9d00ff, #ff00ff)',
              backgroundSize: '200% 100%',
              animation: 'neon-gradient 4s linear infinite',
              boxShadow: '0 0 28px rgba(255,0,255,0.4)',
            }}
          >
            <Heart className="w-6 h-6 fill-current" />
            {t('worldcup_start')}
          </button>

          <FeatureNav exclude={['worldcup']} />
        </div>
      </div>
    );
  }

  // ── Champion Screen ────────────────────────────────────────────────────────

  if (phase === 'champion' && champion) {
    const champName  = getLangText(champion.member.name, lang);
    const champGroup = getLangText(champion.group.name, lang);

    return (
      <div className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Trophy badge */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neon-yellow/10 border border-neon-yellow/30 rounded-full mb-4">
              <Trophy className="w-4 h-4 text-neon-yellow" />
              <span className="text-neon-yellow font-mono text-xs font-black uppercase tracking-widest">
                {t('worldcup_champion_title')}
              </span>
            </div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">
              {t('worldcup_champion_sub')}
            </h2>
          </div>

          {/* Champion card */}
          <div
            className="relative rounded-3xl overflow-hidden mb-6 border-2 border-neon-pink"
            style={{ boxShadow: '0 0 60px rgba(255,0,255,0.4), 0 0 120px rgba(255,0,255,0.15)' }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={champion.member.imageUrl}
                alt={champName}
                className="w-full h-full object-cover object-top"
                onError={e => { (e.target as HTMLImageElement).style.opacity = '0'; }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Trophy glow */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 rounded-2xl bg-neon-yellow/20 border border-neon-yellow/50 flex items-center justify-center"
                style={{ boxShadow: '0 0 20px rgba(255,230,0,0.4)' }}>
                <Trophy className="w-6 h-6 text-neon-yellow" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
              <p className="text-white font-black text-2xl leading-tight mb-1">{champName}</p>
              <p className="text-neon-pink font-mono text-xs uppercase tracking-widest">{champGroup}</p>
            </div>
          </div>

          {/* Share button */}
          <button
            onClick={handleShare}
            className="w-full py-4 rounded-2xl bg-neon-pink/10 hover:bg-neon-pink/20 border-2 border-neon-pink/60 hover:border-neon-pink text-neon-pink font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all mb-3"
            style={{ boxShadow: '0 0 20px rgba(255,0,255,0.2)' }}
          >
            {t('worldcup_share')}
          </button>

          {showShare && (
            <div className="mb-4 pt-4 border-t border-white/10">
              <SharePanel
                title={t('worldcup_title')}
                text={`${t('worldcup_champion_sub')}: ${champName} (${champGroup})! ${t('worldcup_title')} kpopstudio.ai/worldcup`}
                url="https://kpopstudio.ai/worldcup"
                blob={shareBlob}
                filename="kpopstudio-worldcup-result.png"
                isGenerating={isGeneratingCard}
                lang={lang}
              />
            </div>
          )}

          {/* Retry */}
          <button
            onClick={() => { setPhase('start'); }}
            className="w-full py-4 rounded-2xl bg-white/5 border border-white/15 text-slate-300 font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all mb-8"
          >
            <RefreshCw className="w-4 h-4" />
            {t('worldcup_retry')}
          </button>

          <FeatureNav exclude={['worldcup']} />
        </div>
      </div>
    );
  }

  // ── Match Screen ───────────────────────────────────────────────────────────

  if (!left || !right) return null;

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-6 w-full max-w-2xl mx-auto">
      {/* Round info */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border"
            style={{
              background: 'rgba(255,0,255,0.1)',
              borderColor: 'rgba(255,0,255,0.4)',
              color: '#ff00ff',
              boxShadow: '0 0 10px rgba(255,0,255,0.2)',
            }}
          >
            {roundName}
          </span>
        </div>
        <span className="text-slate-500 font-mono text-xs">
          {matchNum} / {totalMatches}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${((matchIdx) / totalMatches) * 100}%`,
            background: 'linear-gradient(90deg, #ff00ff, #9d00ff)',
            boxShadow: '0 0 8px rgba(255,0,255,0.6)',
          }}
        />
      </div>

      {/* Instruction */}
      <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-5 text-center">
        {t('worldcup_choose')}
      </p>

      {/* Match cards */}
      <div className="w-full flex gap-3 md:gap-5 items-stretch mb-6">
        <div className="flex-1">
          <IdolCard
            contestant={left}
            onPick={() => handlePick('left')}
            picked={pickedSide === 'left'}
            lost={pickedSide === 'right'}
            lang={lang}
          />
        </div>

        {/* VS divider */}
        <div className="flex flex-col items-center justify-center shrink-0 py-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-black text-sm md:text-base"
            style={{
              background: 'radial-gradient(circle, rgba(255,0,255,0.15), rgba(0,0,0,0))',
              border: '1px solid rgba(255,0,255,0.3)',
              color: '#ff00ff',
              textShadow: '0 0 10px #ff00ff',
            }}
          >
            VS
          </div>
        </div>

        <div className="flex-1">
          <IdolCard
            contestant={right}
            onPick={() => handlePick('right')}
            picked={pickedSide === 'right'}
            lost={pickedSide === 'left'}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
}
