import { readFileSync, writeFileSync } from 'fs';

// ── 1. i18n.ts에 새 번역 키 추가 ─────────────────────────────────────
const i18nPath = '/home/user/kpopstudio/src/i18n.ts';
let i18n = readFileSync(i18nPath, 'utf8');

const newKeys = {
  en: {
    best_match_badge: 'Best Match',
    view_in_encyclopedia: 'View in Encyclopedia',
    share_result: 'Share Result',
    share_via: 'Share via',
    tap_to_upload: 'Tap to Upload',
  },
  ko: {
    best_match_badge: '닮은꼴 발견',
    view_in_encyclopedia: '도감에서 더보기',
    share_result: '결과 공유하기',
    share_via: '공유 방법 선택',
    tap_to_upload: '사진을 선택해 주세요',
  },
  ja: {
    best_match_badge: 'マッチング完了',
    view_in_encyclopedia: '図鑑で見る',
    share_result: '結果をシェア',
    share_via: 'シェア方法',
    tap_to_upload: 'タップして写真を選択',
  },
  zh: {
    best_match_badge: '最佳匹配',
    view_in_encyclopedia: '在百科查看',
    share_result: '分享结果',
    share_via: '分享方式',
    tap_to_upload: '点击上传图片',
  },
  es: {
    best_match_badge: 'Mejor Coincidencia',
    view_in_encyclopedia: 'Ver en Enciclopedia',
    share_result: 'Compartir',
    share_via: 'Compartir via',
    tap_to_upload: 'Toca para Subir',
  },
  id: {
    best_match_badge: 'Kecocokan Terbaik',
    view_in_encyclopedia: 'Lihat di Ensiklopedia',
    share_result: 'Bagikan Hasil',
    share_via: 'Bagikan via',
    tap_to_upload: 'Ketuk untuk Unggah',
  },
  fr: {
    best_match_badge: 'Meilleure Correspondance',
    view_in_encyclopedia: "Voir dans l'Encyclopédie",
    share_result: 'Partager',
    share_via: 'Partager via',
    tap_to_upload: 'Appuyer pour Télécharger',
  },
  hi: {
    best_match_badge: 'सर्वश्रेष्ठ मिलान',
    view_in_encyclopedia: 'विश्वकोश में देखें',
    share_result: 'परिणाम साझा करें',
    share_via: 'इसके माध्यम से',
    tap_to_upload: 'अपलोड के लिए टैप करें',
  },
  pt: {
    best_match_badge: 'Melhor Correspondência',
    view_in_encyclopedia: 'Ver na Enciclopédia',
    share_result: 'Compartilhar',
    share_via: 'Compartilhar via',
    tap_to_upload: 'Toque para Carregar',
  },
  ar: {
    best_match_badge: 'أفضل تطابق',
    view_in_encyclopedia: 'عرض في الموسوعة',
    share_result: 'مشاركة النتيجة',
    share_via: 'مشاركة عبر',
    tap_to_upload: 'انقر للرفع',
  },
  th: {
    best_match_badge: 'ผลลัพธ์ที่ดีที่สุด',
    view_in_encyclopedia: 'ดูใน Encyclopedia',
    share_result: 'แชร์ผลลัพธ์',
    share_via: 'แชร์ผ่าน',
    tap_to_upload: 'แตะเพื่ออัปโหลด',
  },
  vi: {
    best_match_badge: 'Kết quả tốt nhất',
    view_in_encyclopedia: 'Xem trong Bách khoa',
    share_result: 'Chia sẻ kết quả',
    share_via: 'Chia sẻ qua',
    tap_to_upload: 'Nhấn để tải lên',
  },
  ru: {
    best_match_badge: 'Лучшее совпадение',
    view_in_encyclopedia: 'Смотреть в Энциклопедии',
    share_result: 'Поделиться',
    share_via: 'Поделиться через',
    tap_to_upload: 'Нажмите для загрузки',
  },
};

// Insert new keys after "view_details" in each language block
for (const [lang, keys] of Object.entries(newKeys)) {
  const keyLines = Object.entries(keys)
    .map(([k, v]) => `      "${k}": "${v}"`)
    .join(',\n');

  // Match the view_details line for this language's block
  // We'll add after the last key before the closing }
  const viewDetailsPattern = new RegExp(
    `("view_details": "[^"]*")(\\s*\\n\\s*\\}\\s*\\n\\s*\\},?\\s*\\/\\/ end ${lang}|\\s*\\}\\s*\\n  \\},)`,
    'g'
  );

  // Simpler: find "view_details" followed by closing braces, add new keys in between
  // The structure ends like: "view_details": "..." \n    }\n  },
  i18n = i18n.replace(
    // Pattern specific to each language block - find view_details then the closing }
    // Since all languages have this pattern, we replace the first N occurrences
    `"view_details": "${getViewDetails(lang)}"`,
    `"view_details": "${getViewDetails(lang)}",\n${keyLines}`
  );
}

function getViewDetails(lang) {
  const map = {
    en: 'View Details',
    ko: '상세보기',
    ja: '詳細を見る',
    zh: '查看详情',
    es: 'Ver Detalles',
    id: 'Lihat Detail',
    fr: 'Voir les Détails',
    hi: 'विवरण देखें',
    pt: 'Ver Detalhes',
    ar: 'عرض التفاصيل',
    th: 'ดูรายละเอียด',
    vi: 'Xem chi tiết',
    ru: 'Подробнее',
  };
  return map[lang];
}

writeFileSync(i18nPath, i18n, 'utf8');
console.log('✅ i18n.ts patched');

// ── 2. Lookalike.tsx: 하드코딩 → t() ────────────────────────────────
const lookalikePath = '/home/user/kpopstudio/src/pages/Lookalike.tsx';
let lookalike = readFileSync(lookalikePath, 'utf8');

// Best Match badge
lookalike = lookalike.replace(
  `<div className="inline-block px-4 py-1.5 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">Best Match Identified</div>`,
  `<div className="inline-block px-4 py-1.5 bg-neon-pink/10 border border-neon-pink/30 rounded-full text-neon-pink font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{t('best_match_badge')}</div>`
);

// View in Encyclopedia button
lookalike = lookalike.replace(
  `<span>{currentLang === 'ko' ? '도감에서 더보기' : 'View in Encyclopedia'}</span>`,
  `<span>{t('view_in_encyclopedia')}</span>`
);

// Share result button
lookalike = lookalike.replace(
  `<span>{currentLang === 'ko' ? '결과 공유하기' : 'Share Result'}</span>`,
  `<span>{t('share_result')}</span>`
);

// Share via label
lookalike = lookalike.replace(
  `{currentLang === 'ko' ? '공유 방법 선택' : 'Share via'}`,
  `{t('share_via')}`
);

// Tap to upload hint
lookalike = lookalike.replace(
  `{i18n.language === 'ko' ? '사진을 선택해 주세요' : 'Tap to Upload Image'}`,
  `{t('tap_to_upload')}`
);

// Fix gradient text clipping on subtitle (add pb-2)
lookalike = lookalike.replace(
  `<span className="inline-block pr-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">{t('app_subtitle')}</span>`,
  `<span className="inline-block pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue">{t('app_subtitle')}</span>`
);

// Fix result idol name: leading-none → leading-tight (prevents clipping with italic)
lookalike = lookalike.replace(
  `<h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tighter leading-none pr-2">`,
  `<h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white italic tracking-tight pb-1 pr-2">`
);

writeFileSync(lookalikePath, lookalike, 'utf8');
console.log('✅ Lookalike.tsx patched');

// ── 3. SharePanel.tsx: lang 기반 다국어 텍스트 ───────────────────────
const sharePanelPath = '/home/user/kpopstudio/src/components/SharePanel.tsx';
let sharePanel = readFileSync(sharePanelPath, 'utf8');

// Replace the binary isKo checks with a full locale map
sharePanel = sharePanel.replace(
  `import { useState } from 'react';
import { Download, Share2, Copy, Check, Twitter, Loader2 } from 'lucide-react';`,
  `import { useState } from 'react';
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
}`
);

// Replace isKo usages in JSX
sharePanel = sharePanel.replace(/isKo \? '저장' : 'Save'/g, `lx('save', lang)`);
sharePanel = sharePanel.replace(/isKo \? '공유' : 'Share'/g, `lx('share', lang)`);
sharePanel = sharePanel.replace(/isKo \? '복사됨!' : 'Copied!'/g, `lx('copied', lang)`);
sharePanel = sharePanel.replace(/isKo \? '링크' : 'Link'/g, `lx('link', lang)`);
sharePanel = sharePanel.replace(/isKo \? '카드 생성 중\.\.\.' : 'Generating card\.\.\.'/g, `lx('generating', lang)`);

// Remove the isKo variable since it's no longer needed
sharePanel = sharePanel.replace(`  const isKo = lang === 'ko';\n\n`, '');

writeFileSync(sharePanelPath, sharePanel, 'utf8');
console.log('✅ SharePanel.tsx patched');

// ── 4. App.tsx: 네비 패딩 축소 + 그라디언트 텍스트 클리핑 수정 ────────
const appPath = '/home/user/kpopstudio/src/App.tsx';
let app = readFileSync(appPath, 'utf8');

// Nav items: px-6 → px-3 lg:px-5, also allow text to shrink
app = app.replace(
  /className=\{`px-6 py-2\.5 rounded-xl text-xs font-black uppercase transition-all flex items-center gap-2/g,
  'className={`px-3 lg:px-5 py-2.5 rounded-xl text-[10px] lg:text-xs font-black uppercase transition-all flex items-center gap-2 whitespace-nowrap'
);

// Make nav container allow shrinking
app = app.replace(
  `<nav className="hidden md:flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">`,
  `<nav className="hidden md:flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md min-w-0 shrink">`
);

writeFileSync(appPath, app, 'utf8');
console.log('✅ App.tsx patched');

// ── 5. Home.tsx: 그라디언트 텍스트 pb 확보 ──────────────────────────
const homePath = '/home/user/kpopstudio/src/pages/Home.tsx';
let home = readFileSync(homePath, 'utf8');

// Ensure the subtitle gradient has enough bottom padding
home = home.replace(
  `className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue pb-1 md:pb-2 break-keep"`,
  `className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue pb-2 md:pb-3 break-keep"`
);

writeFileSync(homePath, home, 'utf8');
console.log('✅ Home.tsx patched');

console.log('\n🎉 All patches applied!');
