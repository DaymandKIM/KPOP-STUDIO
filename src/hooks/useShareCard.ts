export interface ShareCardOptions {
  userImageSrc: string;
  idolImageSrc: string;
  idolName: string;
  groupName: string;
  similarity: number;
  lang: string;
}

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`load failed: ${src}`));
    img.src = src;
  });
}

async function loadIdolImg(src: string): Promise<HTMLImageElement | null> {
  // wsrv.nl proxy adds CORS headers so canvas won't be tainted
  const clean = src.replace(/^https?:\/\//, '');
  const proxy = `https://wsrv.nl/?url=${encodeURIComponent(clean)}&w=500&h=500&fit=cover`;
  try { return await loadImg(proxy); } catch { /* ignore */ }
  try { return await loadImg(src); } catch { /* ignore */ }
  return null;
}

function rrect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function hline(
  ctx: CanvasRenderingContext2D,
  y: number, x0: number, x1: number
) {
  const S = x1 - x0;
  const grad = ctx.createLinearGradient(x0, 0, x1, 0);
  grad.addColorStop(0, 'transparent');
  grad.addColorStop(0.3, 'rgba(168,85,247,0.5)');
  grad.addColorStop(0.7, 'rgba(6,182,212,0.5)');
  grad.addColorStop(1, 'transparent');
  ctx.save();
  ctx.strokeStyle = grad;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x0, y);
  ctx.lineTo(x0 + S, y);
  ctx.stroke();
  ctx.restore();
}

export async function generateShareCard(opts: ShareCardOptions): Promise<Blob> {
  const { userImageSrc, idolImageSrc, idolName, groupName, similarity, lang } = opts;
  const isKo = lang === 'ko';
  const S = 1080;
  const sans = 'system-ui, -apple-system, "Segoe UI", Arial, sans-serif';

  const canvas = document.createElement('canvas');
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext('2d')!;

  // ── Background ──────────────────────────────────────────────
  const bg = ctx.createLinearGradient(0, 0, S, S);
  bg.addColorStop(0, '#0a0a0f');
  bg.addColorStop(1, '#0d0a1a');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, S, S);

  // Grid
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= S; i += 60) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, S); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(S, i); ctx.stroke();
  }

  // Glow blobs
  const glows: [number, number, number, string][] = [
    [220, 320, 450, 'rgba(124,58,237,0.35)'],
    [860, 720, 400, 'rgba(236,72,153,0.28)'],
    [600, 140, 360, 'rgba(6,182,212,0.2)'],
  ];
  for (const [cx, cy, r, color] of glows) {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S, S);
  }

  // ── Top badge ───────────────────────────────────────────────
  const badgeText = isKo ? 'KPOP STUDIO · AI 닮은꼴 결과' : 'KPOP STUDIO · AI MATCH RESULT';
  ctx.font = `bold 20px ${sans}`;
  const bw = ctx.measureText(badgeText).width + 64, bh = 42;
  const bx = (S - bw) / 2, by = 58;
  rrect(ctx, bx, by, bw, bh, 21);
  const badgeFill = ctx.createLinearGradient(bx, 0, bx + bw, 0);
  badgeFill.addColorStop(0, 'rgba(124,58,237,0.25)');
  badgeFill.addColorStop(1, 'rgba(236,72,153,0.25)');
  ctx.fillStyle = badgeFill; ctx.fill();
  ctx.strokeStyle = 'rgba(168,85,247,0.5)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.fillStyle = '#c084fc';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(badgeText, S / 2, by + bh / 2);

  // ── Photos ──────────────────────────────────────────────────
  const pSz = 400, pY = 142, pR = 40;
  const leftX = 50, rightX = 630;

  const [userImg, idolImg] = await Promise.all([
    loadImg(userImageSrc).catch(() => null),
    loadIdolImg(idolImageSrc),
  ]);

  function drawPhoto(
    img: HTMLImageElement | null,
    x: number, y: number, sz: number, r: number,
    borderColor: string, placeholder: string
  ) {
    ctx.save();
    rrect(ctx, x, y, sz, sz, r);
    ctx.clip();
    if (img) {
      ctx.drawImage(img, x, y, sz, sz);
    } else {
      ctx.fillStyle = '#0d0d1a';
      ctx.fillRect(x, y, sz, sz);
      ctx.fillStyle = borderColor;
      ctx.font = `bold 100px ${sans}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(placeholder, x + sz / 2, y + sz / 2);
    }
    ctx.restore();
    // border
    rrect(ctx, x, y, sz, sz, r);
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  drawPhoto(userImg, leftX, pY, pSz, pR, 'rgba(168,85,247,0.7)', '?');
  drawPhoto(idolImg, rightX, pY, pSz, pR, 'rgba(6,182,212,0.7)', '★');

  // Photo labels (pill at bottom of each photo)
  function photoLabel(label: string, cx: number, ly: number, color: string) {
    ctx.font = `bold 16px ${sans}`;
    const lw = ctx.measureText(label).width + 32;
    rrect(ctx, cx - lw / 2, ly - 18, lw, 32, 16);
    ctx.fillStyle = color; ctx.fill();
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, cx, ly - 2);
  }
  const labelY = pY + pSz - 8;
  photoLabel(isKo ? '나' : 'YOU', leftX + pSz / 2, labelY, 'rgba(168,85,247,0.88)');
  photoLabel(idolName, rightX + pSz / 2, labelY, 'rgba(6,182,212,0.88)');

  // Arrow between photos
  const arX = S / 2, arY = pY + pSz / 2;
  ctx.beginPath();
  ctx.arc(arX, arY, 36, 0, Math.PI * 2);
  const arBg = ctx.createRadialGradient(arX, arY, 0, arX, arY, 36);
  arBg.addColorStop(0, 'rgba(255,255,255,0.12)');
  arBg.addColorStop(1, 'rgba(255,255,255,0.02)');
  ctx.fillStyle = arBg; ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.65)';
  ctx.font = `bold 30px ${sans}`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('→', arX, arY);

  // ── Text section ────────────────────────────────────────────
  const textTop = pY + pSz + 56; // ~598

  hline(ctx, textTop - 6, 80, S - 80);

  // Idol name
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  let nameSz = 84;
  ctx.font = `bold ${nameSz}px ${sans}`;
  while (ctx.measureText(idolName).width > S - 120 && nameSz > 36) {
    nameSz -= 4;
    ctx.font = `bold ${nameSz}px ${sans}`;
  }
  ctx.fillStyle = 'white';
  ctx.fillText(idolName, S / 2, textTop + 76);

  // Group name
  ctx.font = `bold 32px ${sans}`;
  ctx.fillStyle = '#06b6d4';
  ctx.fillText(groupName, S / 2, textTop + 124);

  // Similarity
  ctx.font = `bold 72px ${sans}`;
  const simGrad = ctx.createLinearGradient(S / 2 - 120, 0, S / 2 + 120, 0);
  simGrad.addColorStop(0, '#ec4899');
  simGrad.addColorStop(1, '#06b6d4');
  ctx.fillStyle = simGrad;
  ctx.fillText(`${similarity}%`, S / 2, textTop + 216);

  ctx.font = `bold 20px ${sans}`;
  ctx.fillStyle = 'rgba(148,163,184,0.65)';
  ctx.fillText(isKo ? '유사도' : 'SIMILARITY', S / 2, textTop + 252);

  hline(ctx, textTop + 278, 80, S - 80);

  // URL
  ctx.font = `bold 24px ${sans}`;
  ctx.fillStyle = 'rgba(148,163,184,0.65)';
  ctx.fillText('kpopstudio.ai', S / 2, textTop + 330);

  // Neon dots
  const dotY = textTop + 368;
  [['#06b6d4', -20], ['#a855f7', 0], ['#ec4899', 20]].forEach(([c, dx]) => {
    ctx.beginPath();
    ctx.arc(S / 2 + (dx as number), dotY, 5, 0, Math.PI * 2);
    ctx.fillStyle = c as string;
    ctx.fill();
  });

  // Corner brackets
  const m = 24, bl = 40;
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(6,182,212,0.5)';
  ctx.beginPath(); ctx.moveTo(m, m + bl); ctx.lineTo(m, m); ctx.lineTo(m + bl, m); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(S - m - bl, m); ctx.lineTo(S - m, m); ctx.lineTo(S - m, m + bl); ctx.stroke();
  ctx.strokeStyle = 'rgba(236,72,153,0.5)';
  ctx.beginPath(); ctx.moveTo(m, S - m - bl); ctx.lineTo(m, S - m); ctx.lineTo(m + bl, S - m); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(S - m - bl, S - m); ctx.lineTo(S - m, S - m); ctx.lineTo(S - m, S - m - bl); ctx.stroke();

  return new Promise((resolve, reject) =>
    canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), 'image/png')
  );
}
