import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, RefreshCw, Star, ArrowRight, User, AlertCircle, Crosshair, Database, Share2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFaceRecognition } from '../hooks/useFaceRecognition';
import type { Prediction } from '../hooks/useFaceRecognition';
import { KPOP_GROUPS } from '../data/idols';
import { generateShareCard } from '../hooks/useShareCard';
import SharePanel from '../components/SharePanel';
import { getLangText } from '../utils/lang';

type AppState = 'idle' | 'analyzing' | 'result';

export default function Lookalike() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { model, isModelLoading, modelError, predict } = useFaceRecognition();

  const [appState, setAppState] = useState<AppState>('idle');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [shareBlob, setShareBlob] = useState<Blob | null>(null);
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);
  const [showSharePanel, setShowSharePanel] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const getMatchedIdol = () => {
    if (predictions.length === 0) return null;
    const topLabel = predictions[0].className;
    for (const group of KPOP_GROUPS) {
      const member = group.members.find(m => m.name.ko === topLabel || m.name.en === topLabel);
      if (member) return { group, member };
    }
    return null;
  };

  const matchedIdol = getMatchedIdol();

  // 랜덤 TMI — 결과가 바뀔 때마다 새로 선택
  const randomTmi = useMemo(() => {
    if (!matchedIdol) return null;
    const tmiArr = matchedIdol.group.tmi[i18n.language] ?? matchedIdol.group.tmi.en;
    if (!tmiArr || tmiArr.length === 0) return null;
    return tmiArr[Math.floor(Math.random() * tmiArr.length)];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchedIdol?.member.id]);

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
      const imgEl = imageRef.current;

      const runPredict = async () => {
        // 이미지가 아직 로드 중이면 onload 이후 실행
        const waitLoaded = imgEl.complete
          ? Promise.resolve()
          : new Promise<void>(resolve => { imgEl.onload = () => resolve(); });

        await waitLoaded;

        // 최소 1.5초 UI 애니메이션 보장 후 분석
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
          const results = await predict(imgEl);
          setPredictions(results);
          setAppState('result');
        } catch (error: unknown) {
          console.error("Analysis failed", error);
          const errorMessage = error instanceof Error ? error.message : "분석 중 오류가 발생했습니다. 다른 사진으로 시도해주세요.";
          alert(errorMessage);
          setAppState('idle');
          setSelectedImage(null);
        }
      };

      runPredict();
    }
  }, [appState, selectedImage, model, predict]);

  const resetApp = () => {
    setAppState('idle');
    setSelectedImage(null);
    setPredictions([]);
    setShareBlob(null);
    setShowSharePanel(false);
    setIsGeneratingCard(false);
  };

  const handleShare = async () => {
    if (!matchedIdol || !selectedImage) return;
    setShowSharePanel(true);
    if (shareBlob) return;
    setIsGeneratingCard(true);
    try {
      const blob = await generateShareCard({
        userImageSrc: selectedImage,
        idolImageSrc: matchedIdol.member.imageUrl,
        idolName: getLangText(matchedIdol.member.name, i18n.language),
        groupName: getLangText(matchedIdol.group.name, i18n.language),
        similarity: Math.round(predictions[0].probability * 100),
        lang: i18n.language,
      });
      setShareBlob(blob);
    } catch (e) {
      console.error('Share card generation failed', e);
    } finally {
      setIsGeneratingCard(false);
    }
  };

  const shareText = matchedIdol
    ? t('share_text', { 
        prob: Math.round(predictions[0]?.probability * 100), 
        name: getLangText(matchedIdol.member.name, i18n.language), 
        group: getLangText(matchedIdol.group.name, i18n.language) 
      })
    : '';

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10">
      {appState === 'idle' && (
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up w-full px-2 mt-8 md:mt-12">
          <h1 className="text-5xl xs:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter italic text-white leading-[1.1] md:leading-none uppercase">
            {t('app_title')} <br className="xs:hidden" />
            <span className="inline-block pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">{t('app_subtitle')}</span>
          </h1>
          <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mx-auto uppercase tracking-wide px-4">
            {t('upload_instruction')}
          </p>
        </div>
      )}

      {appState === 'idle' && (
        <div className="w-full max-w-lg px-2 flex justify-center">
          {isModelLoading ? (
            <div className="glass-card rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center border-neon-blue/20 min-h-[320px] md:min-h-[400px] w-full">
               <div className="relative mb-6 md:mb-8">
                  <RefreshCw className="w-12 h-12 md:w-16 md:h-16 text-neon-blue animate-spin" />
                  <div className="absolute inset-0 blur-xl bg-neon-blue/30 animate-pulse"></div>
               </div>
               <p className="text-neon-blue font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t('loading_model')}</p>
            </div>
          ) : modelError ? (
            <div className="glass-card rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center border-neon-pink/20 min-h-[320px] md:min-h-[400px] w-full p-8 text-center">
               <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-neon-pink mb-6" />
               <h3 className="text-neon-pink font-black text-xl mb-2">{t('error_model')}</h3>
               <p className="text-slate-400 text-sm font-mono">{modelError}</p>
            </div>
          ) : (
            <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[40px] flex items-center justify-center min-h-[340px] md:min-h-[440px] w-full group relative cursor-pointer active:scale-95 transition-transform duration-200 overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="relative group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-pink blur-3xl opacity-30 group-hover:opacity-70 transition-opacity"></div>
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-black border border-white/20 flex items-center justify-center relative z-10 neon-shadow-blue">
                    <Upload className="w-10 h-10 md:w-14 md:h-14 text-neon-blue group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 md:bottom-12 left-0 w-full text-center z-10 pointer-events-none px-6">
                <h3 className="font-black text-3xl md:text-5xl text-white mb-2 md:mb-3 uppercase italic tracking-tighter leading-none">{t('upload_btn')}</h3>
                <p className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-[0.2em] font-bold">{t('tap_to_upload')}</p>
              </div>
              <div className="hud-corner hud-corner-tl !border-neon-blue !w-8 !h-8 md:!w-12 md:!h-12"></div>
              <div className="hud-corner hud-corner-tr !border-neon-purple !w-8 !h-8 md:!w-12 md:!h-12"></div>
              <div className="hud-corner hud-corner-bl !border-neon-pink !w-8 !h-8 md:!w-12 md:!h-12"></div>
              <div className="hud-corner hud-corner-br !border-neon-green !w-8 !h-8 md:!w-12 md:!h-12"></div>
            </div>
          )}
        </div>
      )}

      {appState === 'analyzing' && selectedImage && (
        <div className="flex flex-col items-center justify-center w-full max-w-lg animate-fade-in-up px-2 mt-8 md:mt-16">
          <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden mb-8 md:mb-12 border-4 border-neon-purple/50 neon-shadow-purple w-full aspect-square md:aspect-auto">
            <img
              ref={imageRef}
              src={selectedImage}
              alt="Target"
              className="w-full h-full md:h-auto md:max-h-[500px] object-cover opacity-70 grayscale contrast-125"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-2 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green shadow-[0_0_25px_rgba(255,255,255,0.8)] absolute top-0 animate-[scan_2s_linear_infinite]"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Crosshair className="w-16 h-16 md:w-24 md:h-24 text-white opacity-40 animate-pulse rotate-45" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-2xl font-black italic tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse uppercase">
              {t('analyzing')}
            </p>
          </div>
        </div>
      )}

      {appState === 'result' && selectedImage && predictions.length > 0 && (
        <div className="w-full max-w-5xl flex flex-col items-center animate-fade-in-up px-2 pb-10 mt-8 md:mt-12">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="h-px w-10 xs:w-20 md:w-32 bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
            <h2 className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tighter flex items-center gap-3 md:gap-4 glitch-text pr-2">
              {t('match_found')}
            </h2>
            <div className="h-px w-10 xs:w-20 md:w-32 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          </div>

          <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[48px] p-1 w-full mb-10 md:mb-16 overflow-hidden max-w-4xl mx-auto">
            <div className="bg-black/80 backdrop-blur-3xl rounded-[30px] md:rounded-[46px] p-6 md:p-10 lg:p-12 flex flex-col items-center relative z-10">

              {/* Image Comparison */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full mb-10 md:mb-14">
                <div className="relative group/img">
                  <div className="w-48 h-48 xs:w-56 xs:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/10 neon-shadow-purple relative flex-shrink-0 transition-transform duration-500 group-hover/img:scale-[1.02]">
                    <img src={selectedImage} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-neon-purple z-20 rotate-6">
                    <User className="w-6 h-6 text-neon-purple" />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center neon-shadow-blue animate-pulse shrink-0">
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-neon-blue rotate-90 md:rotate-0" />
                  </div>
                </div>

                {matchedIdol && (
                  <div className="relative group/img">
                    <div className="w-48 h-48 xs:w-56 xs:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-neon-blue neon-shadow-blue relative flex-shrink-0 transition-transform duration-500 group-hover/img:scale-[1.02]">
                      <img src={matchedIdol.member.imageUrl} alt={getLangText(matchedIdol.member.name, i18n.language)} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-neon-blue z-20 -rotate-6">
                      <Star className="w-6 h-6 text-neon-blue fill-neon-blue" />
                    </div>
                  </div>
                )}
              </div>

              {/* Result Info */}
              <div className="w-full text-center space-y-8 md:space-y-10">
                <div className="space-y-2 md:space-y-4">
                  <div className="inline-block px-4 py-1.5 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{t('best_match_badge')}</div>
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tight w-full text-center break-words">
                    {matchedIdol ? getLangText(matchedIdol.member.name, i18n.language) : predictions[0].className}
                  </h3>
                  {matchedIdol && (
                    <div className="flex items-center justify-center gap-2 w-full px-2">
                      <div className="h-px flex-1 max-w-[40px] bg-neon-blue/50 shrink-0"></div>
                      <p className="text-neon-blue font-black text-xl md:text-3xl lg:text-4xl uppercase tracking-wider italic text-center break-words min-w-0">
                        {getLangText(matchedIdol.group.name, i18n.language)}
                      </p>
                      <div className="h-px flex-1 max-w-[40px] bg-neon-blue/50 shrink-0"></div>
                    </div>
                  )}
                </div>

                {/* 유사도 + 포지션 */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
                  <div className="bg-white/5 border border-neon-blue/30 rounded-[28px] p-5 md:p-7 flex flex-col items-center backdrop-blur-md">
                    <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase font-black mb-2 md:mb-3 tracking-widest">{t('similarity')}</p>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-4xl md:text-6xl font-black text-neon-blue italic">
                        {Math.round(predictions[0].probability * 100)}
                      </span>
                      <span className="text-neon-blue font-mono text-xl md:text-2xl font-black">%</span>
                    </div>
                  </div>

                  {matchedIdol && (
                    <div className="bg-white/5 border border-neon-purple/30 rounded-[28px] p-5 md:p-7 flex flex-col items-center backdrop-blur-md">
                      <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase font-black mb-2 md:mb-3 tracking-widest">{t('class')}</p>
                      <p className="text-sm md:text-base font-black text-white italic whitespace-normal text-center break-keep leading-snug">
                        {getLangText(matchedIdol.member.role, i18n.language)}
                      </p>
                    </div>
                  )}
                </div>

                {/* 인적사항 상세 */}
                {matchedIdol && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mx-auto">
                    {[
                      { label: t('birthday'), value: matchedIdol.member.birth, borderCls: 'border-neon-pink/30', textCls: 'text-neon-pink' },
                      { label: t('blood_type'), value: matchedIdol.member.bloodType + (i18n.language === 'ko' ? '형' : ''), borderCls: 'border-neon-blue/30', textCls: 'text-neon-blue' },
                      { label: 'MBTI', value: matchedIdol.member.mbti, borderCls: 'border-neon-purple/30', textCls: 'text-neon-purple' },
                      { label: t('height'), value: matchedIdol.member.height, borderCls: 'border-neon-orange/30', textCls: 'text-neon-orange' },
                    ].map(({ label, value, borderCls, textCls }) => (
                      <div key={label} className={`bg-white/5 border ${borderCls} rounded-2xl p-3 md:p-4 flex flex-col items-center backdrop-blur-md`}>
                        <p className="text-slate-500 font-mono text-[9px] md:text-[10px] uppercase font-black mb-1 tracking-widest">{label}</p>
                        <p className={`text-sm md:text-base font-black ${textCls} text-center leading-tight`}>{value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 별자리 */}
                {matchedIdol && (
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-center gap-3">
                      <span className="text-xl">✨</span>
                      <p className="text-slate-300 font-mono text-xs font-black uppercase tracking-widest">
                        {t('zodiac')} &nbsp;·&nbsp;
                        <span className="text-white">{getLangText(matchedIdol.member.zodiac, i18n.language)}</span>
                      </p>
                    </div>
                  </div>
                )}

                {/* TMI 비하인드 스토리 */}
                {randomTmi && (
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="bg-neon-purple/5 border border-neon-purple/20 rounded-2xl p-5 md:p-6 text-left">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-neon-purple shrink-0" />
                        <p className="text-neon-purple font-mono text-[10px] uppercase font-black tracking-widest">
                          {t('behind_story')}
                        </p>
                      </div>
                      <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                        {randomTmi}
                      </p>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {matchedIdol && (
                    <button
                      onClick={() => navigate('/encyclopedia', { state: { selectedMemberId: matchedIdol.member.id, selectedGroupId: matchedIdol.group.id } })}
                      className="flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-neon-green/10 border border-white/10 hover:border-neon-green/50 rounded-2xl text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all group/btn"
                    >
                      <Database className="w-5 h-5 text-neon-green" />
                      <span>{t('view_in_encyclopedia')}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  )}

                  {matchedIdol && (
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-3 px-8 py-4 bg-neon-pink/10 hover:bg-neon-pink/20 border-2 border-neon-pink/60 hover:border-neon-pink rounded-2xl text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all text-neon-pink"
                      style={{ boxShadow: '0 0 20px rgba(255,0,255,0.35), inset 0 0 16px rgba(255,0,255,0.07)' }}
                    >
                      <Share2 className="w-5 h-5 drop-shadow-[0_0_8px_rgba(255,0,255,1)]" />
                      <span className="drop-shadow-[0_0_8px_rgba(255,0,255,0.8)]">{t('share_result')}</span>
                    </button>
                  )}
                </div>

                {/* Share Panel */}
                {showSharePanel && matchedIdol && (
                  <div className="mt-4 pt-6 border-t border-white/10 w-full">
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest font-black mb-4">
                      {t('share_via')}
                    </p>
                    <SharePanel
                      title={t('share_title')}
                      text={shareText}
                      url="https://kpopstudio.ai/lookalike"
                      blob={shareBlob}
                      filename={`kpopstudio-${matchedIdol.member.name.en.replace(/\s+/g, '-').toLowerCase()}.png`}
                      isGenerating={isGeneratingCard}
                      lang={i18n.language}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={resetApp}
            className="w-full md:w-auto group relative flex items-center justify-center gap-4 text-white font-black uppercase italic py-5 md:py-6 px-12 md:px-20 rounded-2xl overflow-hidden transition-all active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #ff00ff, #9d00ff, #00ffff, #9d00ff, #ff00ff)',
              backgroundSize: '300% 100%',
              animation: 'neon-gradient 4s linear infinite',
              boxShadow: '0 0 28px rgba(255,0,255,0.45), 0 0 60px rgba(157,0,255,0.2)',
            }}
          >
            <RefreshCw className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
            <span className="relative z-10 text-xl md:text-2xl">{t('try_again')}</span>
          </button>
        </div>
      )}
    </div>
  );
}
