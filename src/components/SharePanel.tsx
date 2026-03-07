import { useState } from 'react';
import { Download, Share2, Copy, Check, Loader2 } from 'lucide-react';

const L: Record<string, Record<string, string>> = {
  save:       { ko:'이미지 저장', ja:'画像保存', zh:'保存图片', ar:'حفظ الصورة', hi:'इमेज सेव', th:'บันทึกรูป', vi:'Lưu ảnh', ru:'Сохранить', default:'Save Image' },
  share:      { ko:'링크 공유', ja:'リンク共有', zh:'分享链接', ar:'مشاركة رابط', hi:'लिंक शेयर', th:'แชร์ลิงก์', vi:'Chia sẻ', ru:'Поделиться', default:'Share Link' },
  copied:     { ko:'복사됨!', ja:'コピー済!', zh:'已复制!', ar:'تم النسخ!', hi:'कॉपी!', th:'คัดลอก!', vi:'Đã sao!', ru:'Скопировано!', default:'Copied!' },
  link:       { ko:'링크 복사', ja:'リンクコピー', zh:'复制链接', ar:'نسخ الرابط', hi:'लिंक कॉपी', th:'คัดลอกลิงก์', vi:'Sao chép', ru:'Копировать', default:'Copy Link' },
  generating: { ko:'카드 생성 중...', ja:'カード作成中...', zh:'生成中...', ar:'جارٍ الإنشاء...', hi:'बना रहे हैं...', th:'กำลังสร้าง...', vi:'Đang tạo...', ru:'Создание...', default:'Generating...' },
};
function lx(key: string, lang: string) {
  const m = L[key];
  return m[lang] ?? m[lang.split('-')[0]] ?? m.default;
}

// Minimal inline SVG brand icons
function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}
function IconThreads() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.028-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.505-1.808-1.315-3.223-2.383-4.084-1.173-.942-2.773-1.42-4.91-1.435-2.653.018-4.686.795-6.04 2.31C5.8 6.409 5.1 8.582 5.075 11.998c.024 3.416.725 5.587 2.078 7.072 1.354 1.516 3.388 2.293 6.043 2.31 2.498-.016 4.151-.688 5.328-2.172.956-1.222 1.474-2.99 1.533-5.252-.608.093-1.254.14-1.928.14-.645 0-1.271-.044-1.866-.129-.072 1.528-.383 2.704-.955 3.49-.672.92-1.675 1.385-2.998 1.394H12.3c-1.271-.006-2.23-.496-2.851-1.456-.539-.838-.793-2.007-.756-3.474.038-1.473.366-2.625.975-3.424.652-.855 1.612-1.289 2.852-1.289h.017c1.184.006 2.1.444 2.72 1.302.463.635.756 1.505.872 2.585.411-.067.842-.105 1.284-.105.46 0 .908.04 1.337.113-.14-1.56-.538-2.84-1.185-3.808-.92-1.374-2.303-2.076-4.023-2.085h-.019c-1.822.008-3.218.674-4.148 1.98-.803 1.14-1.22 2.698-1.246 4.632-.024 1.934.363 3.5 1.149 4.655.892 1.29 2.283 1.95 4.138 1.962h.013c1.294-.009 2.247-.384 2.916-1.146.711-.812 1.1-2.08 1.156-3.768A15.2 15.2 0 0 1 12 16.594a14.58 14.58 0 0 1-1.74-.107c.013.62.09 1.12.228 1.495.19.51.5.766.956.77h.007c.408-.003.697-.174.882-.52.192-.36.3-.933.318-1.703l2.044.043c-.02 1.268-.233 2.244-.65 2.997-.483.874-1.24 1.33-2.284 1.4h-.03c-1.186-.056-2.077-.62-2.586-1.634-.408-.804-.608-1.927-.593-3.337l.003-.148.148.019c.617.08 1.249.122 1.88.122.62 0 1.24-.04 1.847-.117z"/>
    </svg>
  );
}
function IconLine() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

interface SharePanelProps {
  title: string;
  text: string;
  url: string;
  blob?: Blob | null;
  filename?: string;
  isGenerating?: boolean;
  lang?: string;
}

export default function SharePanel({
  title,
  text,
  url,
  blob,
  filename = 'kpopstudio-result.png',
  isGenerating = false,
  lang = 'en',
}: SharePanelProps) {
  const [copied, setCopied] = useState(false);
  const [instaSaved, setInstaSaved] = useState(false);

  // 이미지를 <a> 태그로 동기 다운로드
  function triggerDownload(b: Blob) {
    const objectUrl = URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }

  // 저장: 항상 직접 파일 다운로드
  const handleDownload = () => {
    if (!blob) return;
    triggerDownload(blob);
  };

  // 공유: URL 링크만 공유 (이미지 없이, 기능 페이지 링크)
  const handleWebShare = async () => {
    try {
      await navigator.share({ title, text, url });
    } catch { /* cancelled */ }
  };

  // iOS에서 window.open은 반드시 동기 컨텍스트에서 호출해야 팝업 차단 안 됨
  const handleTwitter = () => {
    const tweet = encodeURIComponent(`${text}\n`);
    const turl = encodeURIComponent(url);
    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=${turl}&hashtags=kpop,kpopstudio`, '_blank', 'noopener,noreferrer');
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
  };

  const handleThreads = () => {
    const post = encodeURIComponent(`${text}\n${url}`);
    window.open(`https://www.threads.net/intent/post?text=${post}`, '_blank', 'noopener,noreferrer');
  };

  const handleLine = () => {
    const msg = encodeURIComponent(`${text}\n${url}`);
    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  const handleInstagram = async () => {
    if (blob) {
      const file = new File([blob], filename, { type: 'image/png' });
      // iOS/Android: 네이티브 공유시트 (인스타그램 앱으로 직접 연결)
      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title, text });
          return;
        } catch (e) {
          if ((e as Error).name === 'AbortError') return;
        }
      }
      // 데스크탑: window.open을 먼저 동기로 호출 후 다운로드 (iOS 팝업 차단 우회)
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
      triggerDownload(blob);
      setInstaSaved(true);
      setTimeout(() => setInstaSaved(false), 3000);
    } else {
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      // iOS 구버전 clipboard API 폴백
      try {
        const el = document.createElement('textarea');
        el.value = url;
        el.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
        document.body.appendChild(el);
        el.focus();
        el.setSelectionRange(0, el.value.length); // iOS 필수
        ok = document.execCommand('copy');
        document.body.removeChild(el);
      } catch { /* no-op */ }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const btnBase =
    'btn-shimmer flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border border-white/10 transition-all duration-200 active:scale-95 min-w-[68px] relative overflow-hidden';

  return (
    <div className="w-full">
      {isGenerating ? (
        <div className="flex items-center justify-center gap-3 py-4 text-neon-blue">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold">
            {lx('generating', lang)}
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">

          {/* ── 이미지 저장 영역 ────────────────────────── */}
          {blob && (
            <div>
              <p className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-600 text-center mb-2">
                {lx('save', lang)}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleDownload}
                  className={`${btnBase} text-white px-8`}
                  style={{ background: 'linear-gradient(135deg, #00bfff 0%, #0050c8 100%)', boxShadow: '0 0 18px rgba(0,191,255,0.5)' }}
                >
                  <Download className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                    {lx('save', lang)}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* ── 링크·SNS 공유 영역 ──────────────────────── */}
          <div>
            <p className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-600 text-center mb-2">
              {lx('share', lang)}
            </p>
            <div className="flex flex-wrap justify-center gap-3">

              {/* Web Share (링크 공유 - 모바일) */}
              {typeof navigator !== 'undefined' && 'share' in navigator && (
                <button
                  onClick={handleWebShare}
                  className={`${btnBase} text-white`}
                  style={{ background: 'linear-gradient(135deg, #9d00ff 0%, #5500cc 100%)', boxShadow: '0 0 18px rgba(157,0,255,0.5)' }}
                >
                  <Share2 className="w-5 h-5" />
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                    {lx('share', lang)}
                  </span>
                </button>
              )}

              {/* Twitter / X */}
              <button
                onClick={handleTwitter}
                className={`${btnBase} text-white`}
                style={{ background: 'linear-gradient(135deg, #333 0%, #111 100%)', boxShadow: '0 0 14px rgba(255,255,255,0.12)' }}
              >
                <IconX />
                <span className="text-[10px] font-mono font-black uppercase tracking-wider">X</span>
              </button>

              {/* Facebook */}
              <button
                onClick={handleFacebook}
                className={`${btnBase} text-white`}
                style={{ background: 'linear-gradient(135deg, #1877f2 0%, #0a4ea0 100%)', boxShadow: '0 0 18px rgba(24,119,242,0.5)' }}
              >
                <IconFacebook />
                <span className="text-[10px] font-mono font-black uppercase tracking-wider">FB</span>
              </button>

              {/* Threads */}
              <button
                onClick={handleThreads}
                className={`${btnBase} text-white`}
                style={{ background: 'linear-gradient(135deg, #ff00ff 0%, #7700cc 100%)', boxShadow: '0 0 18px rgba(255,0,255,0.45)' }}
              >
                <IconThreads />
                <span className="text-[10px] font-mono font-black uppercase tracking-wider">Threads</span>
              </button>

              {/* LINE */}
              <button
                onClick={handleLine}
                className={`${btnBase} text-white`}
                style={{ background: 'linear-gradient(135deg, #06c755 0%, #037a35 100%)', boxShadow: '0 0 18px rgba(6,199,85,0.45)' }}
              >
                <IconLine />
                <span className="text-[10px] font-mono font-black uppercase tracking-wider">LINE</span>
              </button>

              {/* Instagram (이미지 저장 후 인스타 앱으로) */}
              {blob && (
                <button
                  onClick={handleInstagram}
                  className={`${btnBase} text-white`}
                  style={instaSaved
                    ? { background: 'linear-gradient(135deg, #f77737 0%, #fcaf45 100%)', boxShadow: '0 0 20px rgba(247,119,55,0.6)' }
                    : { background: 'linear-gradient(135deg, #e1306c 0%, #f77737 50%, #fcaf45 100%)', boxShadow: '0 0 18px rgba(225,48,108,0.45)' }
                  }
                >
                  <IconInstagram />
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                    {instaSaved ? '저장됨↗' : 'Insta'}
                  </span>
                </button>
              )}

              {/* Copy Link */}
              <button
                onClick={handleCopy}
                className={`${btnBase} text-white`}
                style={copied
                  ? { background: 'linear-gradient(135deg, #39ff14 0%, #00aa44 100%)', boxShadow: '0 0 20px rgba(57,255,20,0.55)' }
                  : { background: 'linear-gradient(135deg, #2a2a3a 0%, #111120 100%)', boxShadow: '0 0 12px rgba(255,255,255,0.08)' }
                }
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                  {copied ? lx('copied', lang) : lx('link', lang)}
                </span>
              </button>

            </div>
          </div>

        </div>
      )}
    </div>
  );
}
