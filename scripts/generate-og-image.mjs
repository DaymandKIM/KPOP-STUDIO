import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';

// Register Liberation Sans via fontconfig
const FONT_DIR = '/nix/store/0l2dc446f8kyk1naz14dj0pgandriwma-liberation-fonts-2.1.5/share/fonts/truetype';
mkdirSync('/tmp/kpop-fonts/cache', { recursive: true });
writeFileSync('/tmp/kpop-fonts/fonts.conf', `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${FONT_DIR}</dir>
  <cachedir>/tmp/kpop-fonts/cache</cachedir>
</fontconfig>`);
process.env.FONTCONFIG_FILE = '/tmp/kpop-fonts/fonts.conf';

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#0a0a0f"/>
    <stop offset="100%" stop-color="#0d0a1a"/>
  </linearGradient>
  <radialGradient id="glow1" cx="15%" cy="50%" r="55%">
    <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.4"/>
    <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow2" cx="85%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#ec4899" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="#ec4899" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow3" cx="55%" cy="15%" r="40%">
    <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.2"/>
    <stop offset="100%" stop-color="#06b6d4" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#ec4899"/>
    <stop offset="50%" stop-color="#a855f7"/>
    <stop offset="100%" stop-color="#06b6d4"/>
  </linearGradient>
  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#ec4899"/>
    <stop offset="50%" stop-color="#a855f7"/>
    <stop offset="100%" stop-color="#06b6d4"/>
  </linearGradient>
  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
  </pattern>
  <clipPath id="studioClip">
    <text x="96" y="465" font-family="Liberation Sans" font-size="150" font-weight="bold" font-style="italic">STUDIO</text>
  </clipPath>
  <clipPath id="kpopClip">
    <text x="96" y="330" font-family="Liberation Sans" font-size="150" font-weight="bold" font-style="italic">KPOP</text>
  </clipPath>
</defs>

<!-- Background -->
<rect width="${W}" height="${H}" fill="url(#bg)"/>
<rect width="${W}" height="${H}" fill="url(#grid)"/>
<rect width="${W}" height="${H}" fill="url(#glow1)"/>
<rect width="${W}" height="${H}" fill="url(#glow2)"/>
<rect width="${W}" height="${H}" fill="url(#glow3)"/>

<!-- Left accent bar -->
<rect x="68" y="72" width="4" height="${H - 144}" rx="2" fill="url(#titleGrad)" opacity="0.7"/>

<!-- Logo box -->
<rect x="96" y="80" width="78" height="78" rx="20" fill="url(#logoGrad)"/>
<text x="135" y="137" font-family="Liberation Sans" font-size="40" font-weight="bold"
  text-anchor="middle" fill="white">+</text>

<!-- AI POWERED badge -->
<rect x="96" y="178" width="194" height="28" rx="14"
  fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.45)" stroke-width="1"/>
<text x="193" y="198" font-family="Liberation Mono" font-size="10" font-weight="bold"
  fill="#a855f7" text-anchor="middle" letter-spacing="3">AI POWERED</text>

<!-- KPOP white fill -->
<rect x="0" y="180" width="${W}" height="160" fill="white" clip-path="url(#kpopClip)"/>

<!-- STUDIO gradient fill -->
<rect x="0" y="340" width="${W}" height="140" fill="url(#titleGrad)" clip-path="url(#studioClip)"/>

<!-- Right feature cards -->
<!-- Card 1: Lookalike -->
<rect x="810" y="72" width="310" height="140" rx="18"
  fill="rgba(6,182,212,0.07)" stroke="rgba(6,182,212,0.35)" stroke-width="1"/>
<text x="840" y="112" font-family="Liberation Mono" font-size="10" font-weight="bold"
  fill="#06b6d4" letter-spacing="3">AI LOOKALIKE</text>
<text x="840" y="146" font-family="Liberation Sans" font-size="22" font-weight="bold" fill="white">Find Your</text>
<text x="840" y="174" font-family="Liberation Sans" font-size="22" font-weight="bold" fill="white">K-pop Twin</text>
<!-- Crosshair icon -->
<circle cx="1083" cy="142" r="20" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.7"/>
<line x1="1083" y1="116" x2="1083" y2="168" stroke="#06b6d4" stroke-width="2" opacity="0.7"/>
<line x1="1057" y1="142" x2="1109" y2="142" stroke="#06b6d4" stroke-width="2" opacity="0.7"/>
<circle cx="1083" cy="142" r="5" fill="#06b6d4" opacity="0.5"/>

<!-- Card 2: Encyclopedia -->
<rect x="810" y="234" width="310" height="140" rx="18"
  fill="rgba(168,85,247,0.07)" stroke="rgba(168,85,247,0.35)" stroke-width="1"/>
<text x="840" y="274" font-family="Liberation Mono" font-size="10" font-weight="bold"
  fill="#a855f7" letter-spacing="3">ENCYCLOPEDIA</text>
<text x="840" y="308" font-family="Liberation Sans" font-size="18" font-weight="bold" fill="white">BTS · NewJeans · IVE</text>
<text x="840" y="334" font-family="Liberation Sans" font-size="18" font-weight="bold" fill="white">aespa · BLACKPINK +</text>
<!-- DB icon -->
<ellipse cx="1083" cy="283" rx="17" ry="9" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.7"/>
<ellipse cx="1083" cy="301" rx="17" ry="9" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.7"/>
<line x1="1066" y1="283" x2="1066" y2="301" stroke="#a855f7" stroke-width="2" opacity="0.7"/>
<line x1="1100" y1="283" x2="1100" y2="301" stroke="#a855f7" stroke-width="2" opacity="0.7"/>

<!-- Card 3: Global -->
<rect x="810" y="396" width="310" height="140" rx="18"
  fill="rgba(236,72,153,0.07)" stroke="rgba(236,72,153,0.35)" stroke-width="1"/>
<text x="840" y="436" font-family="Liberation Mono" font-size="10" font-weight="bold"
  fill="#ec4899" letter-spacing="3">FREE · GLOBAL</text>
<text x="840" y="470" font-family="Liberation Sans" font-size="22" font-weight="bold" fill="white">13 Languages</text>
<text x="840" y="498" font-family="Liberation Sans" font-size="22" font-weight="bold" fill="white">Worldwide</text>
<!-- Globe icon -->
<circle cx="1083" cy="464" r="20" fill="none" stroke="#ec4899" stroke-width="2" opacity="0.7"/>
<ellipse cx="1083" cy="464" rx="11" ry="20" fill="none" stroke="#ec4899" stroke-width="1.5" opacity="0.5"/>
<line x1="1063" y1="464" x2="1103" y2="464" stroke="#ec4899" stroke-width="1.5" opacity="0.5"/>
<line x1="1063" y1="452" x2="1103" y2="452" stroke="#ec4899" stroke-width="1" opacity="0.3"/>
<line x1="1063" y1="476" x2="1103" y2="476" stroke="#ec4899" stroke-width="1" opacity="0.3"/>

<!-- URL bottom -->
<text x="96" y="566" font-family="Liberation Mono" font-size="18" font-weight="bold"
  fill="rgba(148,163,184,0.75)" letter-spacing="1">kpopstudio.ai</text>

<!-- Neon dots -->
<circle cx="96"  cy="600" r="5" fill="#06b6d4" opacity="0.9"/>
<circle cx="116" cy="600" r="5" fill="#a855f7" opacity="0.9"/>
<circle cx="136" cy="600" r="5" fill="#ec4899" opacity="0.9"/>

<!-- Corner brackets TL -->
<path d="M40 20 L40 56 M40 20 L76 20" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.4"/>
<!-- Corner brackets TR -->
<path d="M${W-20} 20 L${W-20} 56 M${W-56} 20 L${W-20} 20" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.5"/>
<!-- Corner brackets BL -->
<path d="M20 ${H-20} L20 ${H-56} M20 ${H-20} L56 ${H-20}" fill="none" stroke="#ec4899" stroke-width="2" opacity="0.5"/>
<!-- Corner brackets BR -->
<path d="M${W-40} ${H-20} L${W-40} ${H-56} M${W-40} ${H-20} L${W-76} ${H-20}" fill="none" stroke="#a855f7" stroke-width="2" opacity="0.4"/>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('/home/user/kpopstudio/public/og-image.png');

console.log('✅ og-image.png 생성 완료 (1200x630)');
