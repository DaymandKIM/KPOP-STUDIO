import { readFileSync, writeFileSync } from 'fs';

const path = '/home/user/kpopstudio/src/components/IdolEncyclopedia.tsx';
let c = readFileSync(path, 'utf8');

// 1. Add Share2 import + SharePanel import
c = c.replace(
  `import { \n  Search, User, Star, ChevronLeft, ExternalLink, MessageCircle, \n  Newspaper, Sparkles, Calendar, Fingerprint, Heart, \n  Instagram, Twitter, Youtube, Music2, Droplets, Moon \n} from 'lucide-react';`,
  `import { \n  Search, User, Star, ChevronLeft, ExternalLink, MessageCircle, \n  Newspaper, Sparkles, Calendar, Fingerprint, Heart, \n  Instagram, Twitter, Youtube, Music2, Droplets, Moon, Share2\n} from 'lucide-react';\nimport SharePanel from './SharePanel';`
);

// 2. Add showGroupShare state
c = c.replace(
  `  const [selectedGroup, setSelectedGroup] = useState<KpopGroup | null>(() => {`,
  `  const [showGroupShare, setShowGroupShare] = useState(false);\n  const [selectedGroup, setSelectedGroup] = useState<KpopGroup | null>(() => {`
);

// 3. Reset share on back
c = c.replace(
  `  const handleBackToList = () => {\n    setSelectedGroup(null);\n    window.scrollTo(0, 0);\n  };`,
  `  const handleBackToList = () => {\n    setSelectedGroup(null);\n    setShowGroupShare(false);\n    window.scrollTo(0, 0);\n  };`
);

// 4. Add share button after SocialLinks
const socialLinksLine = `              <SocialLinks socials={selectedGroup.socials} accentColor={selectedGroup.accentColor} />`;
const shareBlock = `              <SocialLinks socials={selectedGroup.socials} accentColor={selectedGroup.accentColor} />

              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setShowGroupShare(v => !v)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-neon-pink/10 border border-white/15 hover:border-neon-pink/40 rounded-xl text-xs font-mono font-black uppercase tracking-widest text-slate-400 hover:text-neon-pink transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  {i18n.language === 'ko' ? '공유하기' : 'Share'}
                </button>
              </div>

              {showGroupShare && (
                <div className="mt-3">
                  <SharePanel
                    title={\`\${getLangText(selectedGroup.name)} | KPOP STUDIO\`}
                    text={i18n.language === 'ko'
                      ? \`KPOP STUDIO에서 \${getLangText(selectedGroup.name)} 프로필 확인하기 ✨\`
                      : \`Check out \${getLangText(selectedGroup.name)} profiles on KPOP STUDIO ✨\`}
                    url="https://kpopstudio.ai/encyclopedia"
                    lang={i18n.language}
                  />
                </div>
              )}`;

c = c.replace(socialLinksLine, shareBlock);

writeFileSync(path, c, 'utf8');
console.log('Encyclopedia patched successfully');
