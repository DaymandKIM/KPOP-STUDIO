import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Upload, RefreshCw, Star, ArrowRight, User, AlertCircle, Crosshair, Database, Share2, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFaceRecognition } from '../hooks/useFaceRecognition';
import type { Prediction } from '../hooks/useFaceRecognition';
import { KPOP_GROUPS } from '../data/idols';
import { generateShareCard } from '../hooks/useShareCard';
import SharePanel from '../components/SharePanel';
import { getLangText } from '../utils/lang';

type AppState = 'idle' | 'analyzing' | 'result';

// K-pop 단어가 줄바꿈 되지 않도록 whitespace-nowrap 처리
function wrapKpop(text: string) {
  const parts = text.split(/(K-[Pp][Oo][Pp])/g);
  return parts.map((part, i) =>
    /^K-[Pp][Oo][Pp]$/.test(part)
      ? <span key={i} className="whitespace-nowrap">{part}</span>
      : part
  );
}

// 사진 업로드 가이드 콘텐츠 (언어별)
const GUIDE: Record<string, {title:string; sub:string; good:{icon:string;text:string}[]; bad:{icon:string;text:string}[]; btn:string}> = {
  ko: {
    title: '더 정확한 분석을 위한 사진 가이드',
    sub: '아래 조건에 맞는 사진일수록 분석 정확도가 높아집니다.',
    good: [
      { icon: '🧑‍🦱', text: '정면을 바라보는 얼굴 사진' },
      { icon: '💡', text: '밝고 균일한 조명' },
      { icon: '🙋', text: '혼자 찍힌 사진 (1인)' },
      { icon: '😊', text: '표정이 자연스러운 사진' },
    ],
    bad: [
      { icon: '😎', text: '선글라스·마스크 착용' },
      { icon: '↩️', text: '측면·뒷모습' },
      { icon: '👥', text: '여러 명이 찍힌 사진' },
      { icon: '🌑', text: '어둡거나 역광인 사진' },
    ],
    btn: '이해했어요, 사진 선택하기',
  },
  ja: {
    title: 'より正確な分析のための写真ガイド',
    sub: '以下の条件に合う写真ほど分析精度が高くなります。',
    good: [
      { icon: '🧑‍🦱', text: '正面を向いた顔写真' },
      { icon: '💡', text: '明るく均一な照明' },
      { icon: '🙋', text: '一人で写った写真' },
      { icon: '😊', text: '自然な表情の写真' },
    ],
    bad: [
      { icon: '😎', text: 'サングラス・マスク着用' },
      { icon: '↩️', text: '横顔・後ろ姿' },
      { icon: '👥', text: '複数人が写った写真' },
      { icon: '🌑', text: '暗い・逆光の写真' },
    ],
    btn: '了解、写真を選ぶ',
  },
  en: {
    title: 'Photo Guide for Best Results',
    sub: 'Photos matching these tips will give you the most accurate match.',
    good: [
      { icon: '🧑‍🦱', text: 'Front-facing, clear face' },
      { icon: '💡', text: 'Bright, even lighting' },
      { icon: '🙋', text: 'Solo photo (just you)' },
      { icon: '😊', text: 'Natural expression' },
    ],
    bad: [
      { icon: '😎', text: 'Sunglasses or mask' },
      { icon: '↩️', text: 'Side view or back' },
      { icon: '👥', text: 'Multiple people' },
      { icon: '🌑', text: 'Dark or backlit photo' },
    ],
    btn: 'Got it, Select Photo',
  },
  zh: {
    title: '获得最准确分析的照片指南',
    sub: '符合以下条件的照片分析精度更高。',
    good: [
      { icon: '🧑‍🦱', text: '面朝正前方的清晰人脸' },
      { icon: '💡', text: '明亮均匀的光线' },
      { icon: '🙋', text: '单人照片' },
      { icon: '😊', text: '自然的表情' },
    ],
    bad: [
      { icon: '😎', text: '墨镜或口罩' },
      { icon: '↩️', text: '侧面或背面' },
      { icon: '👥', text: '多人合照' },
      { icon: '🌑', text: '黑暗或逆光照片' },
    ],
    btn: '明白了，选择照片',
  },
  es: {
    title: 'Guía de fotos para mejores resultados',
    sub: 'Las fotos que cumplan estas condiciones darán un análisis más preciso.',
    good: [
      { icon: '🧑‍🦱', text: 'Cara mirando al frente' },
      { icon: '💡', text: 'Iluminación brillante y uniforme' },
      { icon: '🙋', text: 'Foto individual' },
      { icon: '😊', text: 'Expresión natural' },
    ],
    bad: [
      { icon: '😎', text: 'Gafas de sol o mascarilla' },
      { icon: '↩️', text: 'Vista lateral o trasera' },
      { icon: '👥', text: 'Varias personas' },
      { icon: '🌑', text: 'Foto oscura o a contraluz' },
    ],
    btn: 'Entendido, elegir foto',
  },
  id: {
    title: 'Panduan Foto untuk Hasil Terbaik',
    sub: 'Foto yang sesuai kondisi berikut memberikan akurasi analisis lebih tinggi.',
    good: [
      { icon: '🧑‍🦱', text: 'Wajah menghadap depan' },
      { icon: '💡', text: 'Pencahayaan terang dan merata' },
      { icon: '🙋', text: 'Foto sendiri' },
      { icon: '😊', text: 'Ekspresi natural' },
    ],
    bad: [
      { icon: '😎', text: 'Kacamata hitam atau masker' },
      { icon: '↩️', text: 'Tampak samping atau belakang' },
      { icon: '👥', text: 'Banyak orang' },
      { icon: '🌑', text: 'Foto gelap atau backlit' },
    ],
    btn: 'Mengerti, Pilih Foto',
  },
  fr: {
    title: 'Guide photo pour de meilleurs résultats',
    sub: 'Les photos correspondant à ces conseils donneront l\'analyse la plus précise.',
    good: [
      { icon: '🧑‍🦱', text: 'Visage de face, clair' },
      { icon: '💡', text: 'Éclairage lumineux et uniforme' },
      { icon: '🙋', text: 'Photo seul(e)' },
      { icon: '😊', text: 'Expression naturelle' },
    ],
    bad: [
      { icon: '😎', text: 'Lunettes de soleil ou masque' },
      { icon: '↩️', text: 'Vue de côté ou de dos' },
      { icon: '👥', text: 'Plusieurs personnes' },
      { icon: '🌑', text: 'Photo sombre ou à contre-jour' },
    ],
    btn: 'Compris, choisir la photo',
  },
  hi: {
    title: 'सर्वोत्तम परिणामों के लिए फोटो गाइड',
    sub: 'इन शर्तों को पूरा करने वाली फोटो से विश्लेषण अधिक सटीक होगा।',
    good: [
      { icon: '🧑‍🦱', text: 'सामने से साफ चेहरा' },
      { icon: '💡', text: 'उज्ज्वल और समान प्रकाश' },
      { icon: '🙋', text: 'अकेला फोटो' },
      { icon: '😊', text: 'प्राकृतिक भाव' },
    ],
    bad: [
      { icon: '😎', text: 'धूप का चश्मा या मास्क' },
      { icon: '↩️', text: 'साइड या पीछे का दृश्य' },
      { icon: '👥', text: 'कई लोग' },
      { icon: '🌑', text: 'अंधेरी या बैकलिट फोटो' },
    ],
    btn: 'समझ गया, फोटो चुनें',
  },
  pt: {
    title: 'Guia de fotos para melhores resultados',
    sub: 'Fotos que atendam a essas dicas darão a análise mais precisa.',
    good: [
      { icon: '🧑‍🦱', text: 'Rosto de frente, claro' },
      { icon: '💡', text: 'Iluminação brilhante e uniforme' },
      { icon: '🙋', text: 'Foto individual' },
      { icon: '😊', text: 'Expressão natural' },
    ],
    bad: [
      { icon: '😎', text: 'Óculos de sol ou máscara' },
      { icon: '↩️', text: 'Vista lateral ou traseira' },
      { icon: '👥', text: 'Várias pessoas' },
      { icon: '🌑', text: 'Foto escura ou contra a luz' },
    ],
    btn: 'Entendido, escolher foto',
  },
  ar: {
    title: 'دليل الصور للحصول على أفضل النتائج',
    sub: 'ستعطي الصور المطابقة لهذه النصائح أدق تحليل.',
    good: [
      { icon: '🧑‍🦱', text: 'وجه واضح من الأمام' },
      { icon: '💡', text: 'إضاءة ساطعة ومنتظمة' },
      { icon: '🙋', text: 'صورة فردية' },
      { icon: '😊', text: 'تعبير طبيعي' },
    ],
    bad: [
      { icon: '😎', text: 'نظارات شمسية أو قناع' },
      { icon: '↩️', text: 'جانبي أو من الخلف' },
      { icon: '👥', text: 'أشخاص متعددون' },
      { icon: '🌑', text: 'صورة مظلمة أو في ضوء خلفي' },
    ],
    btn: 'فهمت، اختر صورة',
  },
  th: {
    title: 'คู่มือภาพถ่ายเพื่อผลลัพธ์ที่ดีที่สุด',
    sub: 'ภาพถ่ายที่ตรงตามเงื่อนไขเหล่านี้จะให้การวิเคราะห์ที่แม่นยำยิ่งขึ้น',
    good: [
      { icon: '🧑‍🦱', text: 'ใบหน้าหันหน้าตรง ชัดเจน' },
      { icon: '💡', text: 'แสงสว่างและสม่ำเสมอ' },
      { icon: '🙋', text: 'ภาพถ่ายคนเดียว' },
      { icon: '😊', text: 'สีหน้าเป็นธรรมชาติ' },
    ],
    bad: [
      { icon: '😎', text: 'แว่นกันแดดหรือหน้ากาก' },
      { icon: '↩️', text: 'มุมด้านข้างหรือด้านหลัง' },
      { icon: '👥', text: 'หลายคน' },
      { icon: '🌑', text: 'ภาพมืดหรือแสงสวนทาง' },
    ],
    btn: 'เข้าใจแล้ว เลือกภาพ',
  },
  vi: {
    title: 'Hướng dẫn ảnh để có kết quả tốt nhất',
    sub: 'Ảnh phù hợp với các gợi ý này sẽ cho kết quả phân tích chính xác nhất.',
    good: [
      { icon: '🧑‍🦱', text: 'Mặt nhìn thẳng, rõ ràng' },
      { icon: '💡', text: 'Ánh sáng đủ và đều' },
      { icon: '🙋', text: 'Ảnh chụp một mình' },
      { icon: '😊', text: 'Biểu cảm tự nhiên' },
    ],
    bad: [
      { icon: '😎', text: 'Kính mát hoặc khẩu trang' },
      { icon: '↩️', text: 'Nhìn nghiêng hoặc từ phía sau' },
      { icon: '👥', text: 'Nhiều người' },
      { icon: '🌑', text: 'Ảnh tối hoặc ngược sáng' },
    ],
    btn: 'Hiểu rồi, chọn ảnh',
  },
  ru: {
    title: 'Руководство по фото для лучших результатов',
    sub: 'Фотографии, соответствующие этим советам, дадут наиболее точный анализ.',
    good: [
      { icon: '🧑‍🦱', text: 'Лицо анфас, чёткое' },
      { icon: '💡', text: 'Яркое равномерное освещение' },
      { icon: '🙋', text: 'Одиночное фото' },
      { icon: '😊', text: 'Естественное выражение' },
    ],
    bad: [
      { icon: '😎', text: 'Солнечные очки или маска' },
      { icon: '↩️', text: 'Вид сбоку или сзади' },
      { icon: '👥', text: 'Несколько человек' },
      { icon: '🌑', text: 'Тёмное или засвеченное фото' },
    ],
    btn: 'Понятно, выбрать фото',
  },
};
function getGuide(lang: string) {
  return GUIDE[lang] ?? GUIDE[lang.split('-')[0]] ?? GUIDE.en;
}

export default function Lookalike() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { model, isModelLoading, modelError, predict } = useFaceRecognition();

  const [appState, setAppState] = useState<AppState>('idle');
  const [showGuide, setShowGuide] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    setShowGuide(false);
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
    <>
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto z-10">
      {appState === 'idle' && (
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up w-full px-2 mt-8 md:mt-12">
          <h1 className="text-5xl xs:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter italic text-white leading-[1.1] md:leading-none uppercase">
            {t('app_title')} <br className="xs:hidden" />
            <span className="inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">{wrapKpop(t('app_subtitle'))}</span>
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
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div
                className="neon-border-animated glass-card rounded-[32px] md:rounded-[40px] flex items-center justify-center min-h-[340px] md:min-h-[440px] w-full group relative cursor-pointer active:scale-95 transition-transform duration-200 overflow-hidden"
                onClick={() => setShowGuide(true)}
              >
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
            </>
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
          <div className="text-center space-y-3">
            <p className="text-xl md:text-2xl font-black italic tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-pulse uppercase">
              {t('analyzing')}
            </p>
            <div className="flex justify-center gap-1.5">
              {[0,1,2].map(i => (
                <div key={i} className="w-2 h-2 rounded-full bg-neon-blue animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {appState === 'result' && selectedImage && predictions.length > 0 && (
        <div className="w-full max-w-5xl flex flex-col items-center animate-fade-in-up px-2 pb-10 mt-8 md:mt-12">
          <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="h-px w-10 xs:w-20 md:w-32 bg-gradient-to-r from-transparent via-neon-pink to-neon-purple"></div>
            <h2 className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tighter flex items-center gap-3 md:gap-4 text-white"
              style={{ textShadow: '0 0 24px rgba(157,0,255,0.5), 0 0 48px rgba(157,0,255,0.2)' }}>
              {t('match_found')}
            </h2>
            <div className="h-px w-10 xs:w-20 md:w-32 bg-gradient-to-l from-transparent via-neon-blue to-neon-purple"></div>
          </div>

          <div className="neon-border-animated glass-card rounded-[32px] md:rounded-[48px] p-1 w-full mb-10 md:mb-16 overflow-hidden max-w-4xl mx-auto">
            <div className="bg-black/80 backdrop-blur-3xl rounded-[30px] md:rounded-[46px] p-6 md:p-10 lg:p-12 flex flex-col items-center relative z-10">

              {/* Image Comparison */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full mb-10 md:mb-14">
                <div className="relative group/img">
                  <div className="w-48 h-48 xs:w-56 xs:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-[28px] md:rounded-[32px] overflow-hidden shadow-2xl border-2 border-neon-purple/40 neon-shadow-purple relative flex-shrink-0 transition-transform duration-500 group-hover/img:scale-[1.02]">
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
                  <div className="inline-block px-4 py-1.5 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-black text-white"
                    style={{ background: 'linear-gradient(90deg, rgba(255,0,255,0.2), rgba(157,0,255,0.2))', border: '1px solid rgba(255,0,255,0.5)', boxShadow: '0 0 12px rgba(255,0,255,0.3)' }}
                  >{t('best_match_badge')}</div>
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tight w-full text-center break-words" style={{ textShadow: '0 0 20px rgba(157,0,255,0.4), 0 0 40px rgba(157,0,255,0.15)' }}>
                    {matchedIdol ? getLangText(matchedIdol.member.name, i18n.language) : predictions[0].className}
                  </h3>
                  {matchedIdol && (
                    <div className="flex items-center justify-center gap-2 w-full px-2">
                      <div className="h-px flex-1 max-w-[40px] bg-neon-purple/60 shrink-0"></div>
                      <p className="text-neon-blue font-black text-xl md:text-3xl lg:text-4xl uppercase tracking-wider italic text-center break-words min-w-0" style={{ textShadow: '0 0 16px rgba(0,212,255,0.6), 0 0 32px rgba(0,212,255,0.2)' }}>
                        {getLangText(matchedIdol.group.name, i18n.language)}
                      </p>
                      <div className="h-px flex-1 max-w-[40px] bg-neon-purple/60 shrink-0"></div>
                    </div>
                  )}
                </div>

                {/* 유사도 + 포지션 */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mx-auto">
                  <div className="bg-white/5 border border-neon-blue/30 rounded-[28px] p-5 md:p-7 flex flex-col items-center backdrop-blur-md" style={{ boxShadow: '0 0 16px rgba(0,212,255,0.08) inset, 0 0 12px rgba(0,212,255,0.06)' }}>
                    <p className="text-slate-500 font-mono text-[10px] md:text-xs uppercase font-black mb-2 md:mb-3 tracking-widest">{t('similarity')}</p>
                    <div className="flex items-baseline gap-1 md:gap-2">
                      <span className="text-4xl md:text-6xl font-black text-neon-blue italic">
                        {Math.round(predictions[0].probability * 100)}
                      </span>
                      <span className="text-neon-blue font-mono text-xl md:text-2xl font-black">%</span>
                    </div>
                  </div>

                  {matchedIdol && (
                    <div className="bg-white/5 border border-neon-purple/30 rounded-[28px] p-5 md:p-7 flex flex-col items-center backdrop-blur-md" style={{ boxShadow: '0 0 16px rgba(157,0,255,0.08) inset, 0 0 12px rgba(157,0,255,0.06)' }}>
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
                    <div className="bg-white/5 border border-neon-purple/25 rounded-2xl px-5 py-3 flex items-center justify-center gap-3">
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

      {/* Photo guide modal overlay */}
      {showGuide && appState === 'idle' && (() => {
        const guide = getGuide(i18n.language);
        return (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
            onClick={() => setShowGuide(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div
              className="relative z-10 w-full max-w-lg animate-fade-in-up"
              onClick={e => e.stopPropagation()}
            >
              <div className="neon-border-animated rounded-[32px] overflow-hidden">
                <div className="bg-[#080810]/95 backdrop-blur-3xl rounded-[30px] p-6 md:p-8 flex flex-col gap-5">
                  <div className="text-center">
                    <p className="text-neon-blue font-mono text-[10px] uppercase tracking-[0.25em] font-black mb-1">PHOTO GUIDE</p>
                    <h3 className="text-white font-black text-lg md:text-xl leading-snug">{guide.title}</h3>
                    <p className="text-slate-400 text-xs md:text-sm mt-1">{guide.sub}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neon-green/5 border border-neon-green/25 rounded-2xl p-3 md:p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-neon-green shrink-0" />
                        <span className="text-neon-green font-mono text-[10px] uppercase font-black tracking-wider">GOOD</span>
                      </div>
                      <ul className="space-y-1.5">
                        {guide.good.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-sm leading-none mt-0.5">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-neon-pink/5 border border-neon-pink/25 rounded-2xl p-3 md:p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <XCircle className="w-4 h-4 text-neon-pink shrink-0" />
                        <span className="text-neon-pink font-mono text-[10px] uppercase font-black tracking-wider">AVOID</span>
                      </div>
                      <ul className="space-y-1.5">
                        {guide.bad.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-sm leading-none mt-0.5">{item.icon}</span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => { setShowGuide(false); fileInputRef.current?.click(); }}
                    className="w-full relative flex items-center justify-center gap-3 text-white font-black uppercase italic py-4 px-8 rounded-2xl overflow-hidden active:scale-95 transition-transform"
                    style={{
                      background: 'linear-gradient(90deg, #00ffff, #9d00ff, #ff00ff, #9d00ff, #00ffff)',
                      backgroundSize: '300% 100%',
                      animation: 'neon-gradient 4s linear infinite',
                      boxShadow: '0 0 24px rgba(0,255,255,0.35), 0 0 48px rgba(157,0,255,0.15)',
                    }}
                  >
                    <Upload className="w-5 h-5 shrink-0" />
                    <span>{guide.btn}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
