import { useState } from 'react';
import { Download, Share2, Copy, Check, Twitter, Loader2 } from 'lucide-react';

const L: Record<string, Record<string, string>> = {
  save:       { ko:'저장', ja:'保存', zh:'保存', ar:'حفظ', hi:'सेव', th:'บันทึก', vi:'Lưu', ru:'Сохранить', default:'Save' },
  share:      { ko:'공유', ja:'シェア', zh:'分享', ar:'مشاركة', hi:'शेयर', th:'แชร์', vi:'Chia sẻ', ru:'Поделиться', default:'Share' },
  copied:     { ko:'복사됨!', ja:'コピー済!', zh:'已复制!', ar:'تم النسخ!', hi:'कॉपी!', th:'คัดลอก!', vi:'Đã sao!', ru:'Скопировано!', default:'Copied!' },
  link:       { ko:'링크', ja:'リンク', zh:'链接', ar:'رابط', hi:'लिंक', th:'ลิงก์', vi:'Liên kết', ru:'Ссылка', default:'Link' },
  generating: { ko:'카드 생성 중...', ja:'カード作成中...', zh:'生成中...', ar:'جارٍ الإنشاء...', hi:'बना रहे हैं...', th:'กำลังสร้าง...', vi:'Đang tạo...', ru:'Создание...', default:'Generating...' },
};
function lx(key: string, lang: string) {
  const m = L[key];
  return m[lang] ?? m[lang.split('-')[0]] ?? m.default;
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
  const handleDownload = () => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleWebShare = async () => {
    const shareData: ShareData = { title, text, url };
    if (blob) {
      const file = new File([blob], filename, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        shareData.files = [file];
      }
    }
    try {
      await navigator.share(shareData);
    } catch {
      // user cancelled or unsupported — no-op
    }
  };

  const handleTwitter = () => {
    const tweet = encodeURIComponent(`${text}\n`);
    const turl = encodeURIComponent(url);
    window.open(
      `https://twitter.com/intent/tweet?text=${tweet}&url=${turl}&hashtags=kpop,kpopstudio`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const btnBase =
    'flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border transition-all active:scale-95 min-w-[72px]';

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
        <div className="flex flex-wrap justify-center gap-3">

          {/* Download (only when blob is ready) */}
          {blob && (
            <button
              onClick={handleDownload}
              className={`${btnBase} bg-neon-blue/10 border-neon-blue/40 hover:bg-neon-blue/20 hover:border-neon-blue/70 text-neon-blue`}
            >
              <Download className="w-5 h-5" />
              <span className="text-[10px] font-mono font-black uppercase tracking-wider">
                {lx('save', lang)}
              </span>
            </button>
          )}

          {/* Web Share API (mobile native) */}
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleWebShare}
              className={`${btnBase} bg-neon-purple/10 border-neon-purple/40 hover:bg-neon-purple/20 hover:border-neon-purple/70 text-neon-purple`}
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
            className={`${btnBase} bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30 text-slate-300`}
          >
            <Twitter className="w-5 h-5" />
            <span className="text-[10px] font-mono font-black uppercase tracking-wider">
              X
            </span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopy}
            className={`${btnBase} transition-all ${
              copied
                ? 'bg-neon-green/15 border-neon-green/50 text-neon-green'
                : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30 text-slate-300'
            }`}
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span className="text-[10px] font-mono font-black uppercase tracking-wider">
              {copied ? (lx('copied', lang)) : (lx('link', lang))}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
