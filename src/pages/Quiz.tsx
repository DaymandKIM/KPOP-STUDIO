import { useState } from 'react';
import { Trophy, RefreshCw, Share2, Check, X, ChevronRight, HelpCircle } from 'lucide-react';
import { KPOP_GROUPS } from '../data/idols';

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = 'easy' | 'medium' | 'hard';
type Phase = 'start' | 'quiz' | 'result';
type QType = 'photo' | 'lyrics' | 'hint' | 'trivia';

interface Q {
  type: QType;
  question: string;
  content?: string;
  image?: string;
  answer: string;
  choices: string[];
  explanation: string;
}

// ─── Lyrics Bank ──────────────────────────────────────────────────────────────

const LYRICS_BANK: { text: string; answer: string; song: string; level: Difficulty }[] = [
  { text: '"Smooth like butter\nLike a criminal undercover"', answer: 'BTS', song: 'Butter', level: 'easy' },
  { text: '"Lovesick girls\nLovesick girls"', answer: 'BLACKPINK', song: 'Lovesick Girls', level: 'easy' },
  { text: '"Like Ooh-Ahh\nOoh Ooh Ooh-Ahh"', answer: 'TWICE', song: 'Like OOH-AHH', level: 'easy' },
  { text: '"Ditto, ditto\nEvery move you make"', answer: 'NewJeans', song: 'Ditto', level: 'easy' },
  { text: '"LOVE DIVE\n너의 눈 속으로"', answer: 'IVE', song: 'LOVE DIVE', level: 'easy' },
  { text: '"DYNAMITE\nDyna-na-na-na-na"', answer: 'BTS', song: 'Dynamite', level: 'easy' },
  { text: '"TOMBOY\n나는 내가 제일 좋아"', answer: '(G)I-DLE', song: 'TOMBOY', level: 'medium' },
  { text: '"ANTIFRAGILE\n내가 강해질수록"', answer: 'LE SSERAFIM', song: 'ANTIFRAGILE', level: 'medium' },
  { text: '"MIROH, MIROH\n내 앞에 길이 없어"', answer: 'Stray Kids', song: 'Miroh', level: 'medium' },
  { text: '"FANCY you\n널 원해, oh"', answer: 'TWICE', song: 'FANCY', level: 'medium' },
  { text: '"Next Level\n난 Next Level"', answer: 'aespa', song: 'Next Level', level: 'medium' },
  { text: '"Black Mamba\n위기가 와도 나는 강해"', answer: 'aespa', song: 'Black Mamba', level: 'hard' },
  { text: '"Left & Right\n왼쪽 오른쪽"', answer: 'SEVENTEEN', song: 'Left & Right', level: 'hard' },
  { text: '"Drunk-Dazed\n정신이 아득해져"', answer: 'ENHYPEN', song: 'Drunk-Dazed', level: 'hard' },
  { text: '"Supernova\n별이 되어 빛나"', answer: 'aespa', song: 'Supernova', level: 'hard' },
  { text: '"After LIKE\n기억해줘 나를"', answer: 'IVE', song: 'After LIKE', level: 'hard' },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

// ─── Question Generator ───────────────────────────────────────────────────────

function generateQuestions(difficulty: Difficulty): Q[] {
  const allGroups = KPOP_GROUPS;
  const easyIds = ['bts', 'blackpink', 'twice', 'newjeans', 'ive'];
  const groups = difficulty === 'easy' ? allGroups.filter(g => easyIds.includes(g.id)) : allGroups;

  const allMembers = allGroups.flatMap(g => g.members.map(m => ({ m, g })));
  const targetMembers = groups.flatMap(g => g.members.map(m => ({ m, g })));
  const allGroupNames = allGroups.map(g => g.name.en);

  const pool: Q[] = [];

  // === A. Photo: 사진 보고 멤버 맞추기 ===
  for (const { m, g } of pick(targetMembers, 6)) {
    const wrongs = pick(
      allMembers.filter(x => x.m.id !== m.id).map(x => x.m.name.ko),
      3
    );
    pool.push({
      type: 'photo',
      question: '이 K-POP 아이돌은 누구일까요?',
      image: m.imageUrl,
      answer: m.name.ko,
      choices: shuffle([m.name.ko, ...wrongs]),
      explanation: `${m.name.ko} (${g.name.ko})`,
    });
  }

  // === B. Lyrics: 가사 보고 그룹 맞추기 ===
  const lyricsPool =
    difficulty === 'easy'
      ? LYRICS_BANK.filter(q => q.level === 'easy')
      : difficulty === 'medium'
      ? LYRICS_BANK.filter(q => q.level !== 'hard')
      : LYRICS_BANK;

  for (const lq of pick(lyricsPool, 5)) {
    const wrongs = pick(allGroupNames.filter(n => n !== lq.answer), 3);
    pool.push({
      type: 'lyrics',
      question: '이 가사는 어느 그룹의 노래일까요?',
      content: lq.text,
      answer: lq.answer,
      choices: shuffle([lq.answer, ...wrongs]),
      explanation: `${lq.answer} — ${lq.song}`,
    });
  }

  // === C. Hint: 힌트 보고 멤버 맞추기 ===
  for (const { m, g } of pick(targetMembers, 5)) {
    const birthYear = m.birth.slice(0, 4);
    let hint = '';
    if (difficulty === 'easy') {
      hint = `${g.name.ko} 멤버 · ${birthYear}년생 · 혈액형 ${m.bloodType}`;
    } else if (difficulty === 'medium') {
      hint = `${birthYear}년생 · MBTI ${m.mbti} · 혈액형 ${m.bloodType}`;
    } else {
      hint = `키 ${m.height} · MBTI ${m.mbti} · 생일 ${m.birth}`;
    }
    const wrongs = pick(
      allMembers.filter(x => x.m.id !== m.id).map(x => x.m.name.ko),
      3
    );
    pool.push({
      type: 'hint',
      question: '이 멤버는 누구일까요?',
      content: hint,
      answer: m.name.ko,
      choices: shuffle([m.name.ko, ...wrongs]),
      explanation: `${m.name.ko} (${g.name.ko})`,
    });
  }

  // === D. Trivia: 그룹 상식 퀴즈 ===
  const triviaTypes = ['count', 'debut', 'fandom'] as const;
  for (const g of pick(groups, 6)) {
    const ttype = pick([...triviaTypes], 1)[0];
    if (ttype === 'count') {
      const count = g.members.length;
      const wrongs = shuffle(
        [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13].filter(n => n !== count)
      ).slice(0, 3);
      pool.push({
        type: 'trivia',
        question: `${g.name.ko}의 멤버는 몇 명일까요?`,
        answer: `${count}명`,
        choices: shuffle([`${count}명`, ...wrongs.map(n => `${n}명`)]),
        explanation: `${count}명 — ${g.members.map(m => m.name.ko).join(', ')}`,
      });
    } else if (ttype === 'debut') {
      const year = g.debut.slice(0, 4);
      const years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
      const wrongs = pick(years.filter(y => y !== year), 3);
      pool.push({
        type: 'trivia',
        question: `${g.name.ko}의 데뷔 연도는?`,
        answer: `${year}년`,
        choices: shuffle([`${year}년`, ...wrongs.map(y => `${y}년`)]),
        explanation: `${year}년 (${g.debut} 데뷔)`,
      });
    } else {
      const fandom = g.fandom.ko;
      const wrongs = pick(allGroups.map(x => x.fandom.ko).filter(f => f !== fandom), 3);
      pool.push({
        type: 'trivia',
        question: `${g.name.ko}의 팬덤 이름은?`,
        answer: fandom,
        choices: shuffle([fandom, ...wrongs]),
        explanation: `팬덤: ${fandom}`,
      });
    }
  }

  return shuffle(pool).slice(0, 10);
}

// ─── Grade ────────────────────────────────────────────────────────────────────

function getGrade(score: number) {
  if (score === 10) return { label: 'K-POP 천재', comment: '완벽해요! 당신은 진정한 K-POP 마스터입니다!', color: 'text-neon-yellow', border: 'border-neon-yellow', bg: 'from-neon-yellow/20' };
  if (score >= 8)  return { label: 'K-POP 마스터', comment: '대단해요! 거의 다 맞혔군요!', color: 'text-neon-blue', border: 'border-neon-blue', bg: 'from-neon-blue/20' };
  if (score >= 6)  return { label: '찐 K-POP 팬', comment: '훌륭해요! 꽤 많이 알고 있군요!', color: 'text-neon-green', border: 'border-neon-green', bg: 'from-neon-green/20' };
  if (score >= 4)  return { label: 'K-POP 팬 지망생', comment: '괜찮아요! 조금 더 공부해봐요!', color: 'text-neon-purple', border: 'border-neon-purple', bg: 'from-neon-purple/20' };
  if (score >= 2)  return { label: 'K-POP 입문자', comment: '이제 막 시작했군요! 도감을 둘러보세요!', color: 'text-neon-pink', border: 'border-neon-pink', bg: 'from-neon-pink/20' };
  return { label: 'K-POP 아기 팬', comment: 'K-POP을 아직 잘 모르는군요. 괜찮아요!', color: 'text-slate-400', border: 'border-white/20', bg: 'from-white/10' };
}

// ─── Type meta ────────────────────────────────────────────────────────────────

const TYPE_META: Record<QType, { icon: string; label: string; color: string }> = {
  photo:  { icon: '📸', label: '사진 퀴즈', color: 'text-neon-blue' },
  lyrics: { icon: '🎵', label: '가사 퀴즈', color: 'text-neon-pink' },
  hint:   { icon: '💡', label: '힌트 퀴즈', color: 'text-neon-yellow' },
  trivia: { icon: '📊', label: '상식 퀴즈', color: 'text-neon-green' },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>('start');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [questions, setQuestions] = useState<Q[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const current = questions[currentIndex];
  const isAnswered = selectedChoice !== null;
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / 10) * 100;

  function startQuiz() {
    setQuestions(generateQuestions(difficulty));
    setCurrentIndex(0);
    setSelectedChoice(null);
    setCorrectCount(0);
    setAnswers([]);
    setPhase('quiz');
  }

  function handleChoice(choice: string) {
    if (isAnswered) return;
    setSelectedChoice(choice);
    const correct = choice === current.answer;
    if (correct) setCorrectCount(c => c + 1);
    setAnswers(a => [...a, correct]);
  }

  function next() {
    if (currentIndex >= questions.length - 1) {
      setPhase('result');
    } else {
      setCurrentIndex(i => i + 1);
      setSelectedChoice(null);
    }
  }

  function shareResult() {
    const grade = getGrade(correctCount);
    const text = `K-POP 퀴즈 결과: ${correctCount}/10점 — ${grade.label}!\n${grade.comment}\n🎯 도전해보세요 → kpopstudio.ai/quiz`;
    if (navigator.share) {
      navigator.share({ text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => alert('결과가 클립보드에 복사됐어요!'));
    }
  }

  // ── Start Screen ────────────────────────────────────────────────────────────
  if (phase === 'start') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 min-h-[70vh]">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-6xl mb-4">🎤</div>
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-3">
              K-POP 퀴즈
            </h1>
            <p className="text-slate-400 text-sm">
              사진 · 가사 · 힌트 · 상식 — 4가지 유형 · 10문제
            </p>
          </div>

          {/* Difficulty */}
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 text-center">난이도 선택</p>
            <div className="grid grid-cols-3 gap-3">
              {([
                { key: 'easy', label: '쉬움', desc: '대형 아이돌 위주', color: 'neon-green', emoji: '🌱' },
                { key: 'medium', label: '보통', desc: '전체 그룹 혼합', color: 'neon-blue', emoji: '🎵' },
                { key: 'hard', label: '어려움', desc: '세부 정보 포함', color: 'neon-pink', emoji: '🔥' },
              ] as const).map(({ key, label, desc, color, emoji }) => (
                <button
                  key={key}
                  onClick={() => setDifficulty(key)}
                  className={`p-4 rounded-2xl border-2 transition-all text-center flex flex-col items-center gap-2 ${
                    difficulty === key
                      ? `border-${color} bg-${color}/10`
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className={`text-sm font-black ${difficulty === key ? `text-${color}` : 'text-white'}`}>{label}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Start button */}
          <button
            onClick={startQuiz}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-black text-lg uppercase tracking-wider hover:opacity-90 transition-opacity neon-shadow-blue flex items-center justify-center gap-3"
          >
            퀴즈 시작하기
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Quiz types info */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {Object.entries(TYPE_META).map(([type, meta]) => (
              <div key={type} className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/10">
                <span className="text-xl">{meta.icon}</span>
                <div>
                  <p className={`text-xs font-black ${meta.color}`}>{meta.label}</p>
                  <p className="text-[10px] text-slate-500">
                    {type === 'photo' && '사진 보고 멤버 맞추기'}
                    {type === 'lyrics' && '가사 보고 그룹 맞추기'}
                    {type === 'hint' && '힌트 보고 멤버 맞추기'}
                    {type === 'trivia' && '그룹 상식 맞추기'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Result Screen ────────────────────────────────────────────────────────────
  if (phase === 'result') {
    const grade = getGrade(correctCount);
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg">
          {/* Score card */}
          <div className={`bg-gradient-to-b ${grade.bg} to-transparent border-2 ${grade.border} rounded-3xl p-8 text-center mb-6`}>
            <Trophy className={`w-12 h-12 mx-auto mb-4 ${grade.color}`} />
            <div className={`text-6xl font-black mb-2 ${grade.color}`}>
              {correctCount}<span className="text-3xl text-white/40">/10</span>
            </div>
            <div className={`text-xl font-black uppercase tracking-wider mb-3 ${grade.color}`}>
              {grade.label}
            </div>
            <p className="text-slate-400 text-sm">{grade.comment}</p>
          </div>

          {/* Answer review */}
          <div className="bg-white/5 rounded-2xl p-4 mb-6 border border-white/10">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">문제별 결과</p>
            <div className="flex flex-wrap gap-2">
              {answers.map((correct, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black border ${
                    correct
                      ? 'bg-neon-green/20 border-neon-green text-neon-green'
                      : 'bg-neon-pink/20 border-neon-pink text-neon-pink'
                  }`}
                >
                  {correct ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-3">
              정답 {correctCount}개 · 오답 {10 - correctCount}개
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={shareResult}
              className="flex-1 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-black flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              결과 공유
            </button>
            <button
              onClick={startQuiz}
              className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-black flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <RefreshCw className="w-4 h-4" />
              다시 도전
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Quiz Screen ──────────────────────────────────────────────────────────────

  const meta = TYPE_META[current.type];

  return (
    <div className="flex-1 flex flex-col px-4 py-6 max-w-2xl mx-auto w-full">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500">
            {currentIndex + 1} / 10
          </span>
          <span className={`text-xs font-black ${meta.color}`}>
            {meta.icon} {meta.label}
          </span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-xs text-neon-green font-black">+{correctCount}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-5 flex-shrink-0">
        <p className="text-white font-black text-lg leading-snug mb-4">{current.question}</p>

        {/* Image */}
        {current.image && (
          <div className="relative w-full aspect-square max-w-xs mx-auto mb-4 rounded-2xl overflow-hidden bg-white/5">
            <img
              src={current.image}
              alt="quiz"
              className="w-full h-full object-cover object-top"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        )}

        {/* Lyrics or hint content */}
        {current.content && (
          <div className={`rounded-2xl p-4 ${
            current.type === 'lyrics'
              ? 'bg-neon-pink/10 border border-neon-pink/30'
              : 'bg-neon-yellow/10 border border-neon-yellow/30'
          }`}>
            <p className={`font-mono text-sm whitespace-pre-line leading-relaxed ${
              current.type === 'lyrics' ? 'text-neon-pink' : 'text-neon-yellow'
            }`}>
              {current.content}
            </p>
          </div>
        )}
      </div>

      {/* Choices */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {current.choices.map((choice, i) => {
          const isSelected = selectedChoice === choice;
          const isCorrect = choice === current.answer;

          let style = 'bg-white/5 border-white/15 text-slate-300 hover:border-white/40 hover:bg-white/10';
          if (isAnswered) {
            if (isCorrect) {
              style = 'bg-neon-green/15 border-neon-green text-neon-green';
            } else if (isSelected) {
              style = 'bg-neon-pink/15 border-neon-pink text-neon-pink';
            } else {
              style = 'bg-white/3 border-white/10 text-slate-600';
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleChoice(choice)}
              disabled={isAnswered}
              className={`relative p-4 rounded-2xl border-2 text-sm font-black text-left transition-all leading-snug ${style}`}
            >
              <span className="text-[10px] font-black opacity-50 block mb-1">
                {String.fromCharCode(65 + i)}
              </span>
              {choice}
              {isAnswered && isCorrect && (
                <Check className="absolute top-3 right-3 w-4 h-4 text-neon-green" />
              )}
              {isAnswered && isSelected && !isCorrect && (
                <X className="absolute top-3 right-3 w-4 h-4 text-neon-pink" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer explanation + Next */}
      {isAnswered && (
        <div className="animate-fade-in-up">
          <div className={`rounded-2xl p-4 mb-4 flex items-start gap-3 ${
            selectedChoice === current.answer
              ? 'bg-neon-green/10 border border-neon-green/30'
              : 'bg-neon-pink/10 border border-neon-pink/30'
          }`}>
            {selectedChoice === current.answer
              ? <Check className="w-5 h-5 text-neon-green mt-0.5 shrink-0" />
              : <X className="w-5 h-5 text-neon-pink mt-0.5 shrink-0" />
            }
            <div>
              <p className={`text-sm font-black mb-0.5 ${
                selectedChoice === current.answer ? 'text-neon-green' : 'text-neon-pink'
              }`}>
                {selectedChoice === current.answer ? '정답!' : '오답!'}
              </p>
              <p className="text-xs text-slate-400">{current.explanation}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            {currentIndex >= questions.length - 1 ? '결과 보기' : '다음 문제'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Skip hint */}
      {!isAnswered && (
        <div className="flex items-center justify-center gap-2 mt-2">
          <HelpCircle className="w-3 h-3 text-slate-600" />
          <p className="text-[10px] text-slate-600">보기를 선택하면 정답이 공개됩니다</p>
        </div>
      )}
    </div>
  );
}
