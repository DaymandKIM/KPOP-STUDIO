import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import {
  Search, User, Star, ChevronLeft, ExternalLink, MessageCircle,
  Newspaper, Sparkles, Calendar, Fingerprint, Heart,
  Instagram, Twitter, Youtube, Music2, Droplets, Moon, Share2
} from 'lucide-react';
import SharePanel from './SharePanel';
import CommentSection from './CommentSection';
import { KPOP_GROUPS } from '../data/idols';
import type { KpopGroup, Socials, Member } from '../data/idols';
import { useLocation } from 'react-router-dom';
import { getLangText, getLangArray } from '../utils/lang';

// Enhanced Safe Image Component with Image Proxy Bypass
const SafeImage: React.FC<{ src: string; alt: string; className?: string; accentColor?: string }> = ({ src, alt, className, accentColor = '#00ffff' }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const getAttemptUrl = (count: number): string => {
    if (!src) return '';
    
    let finalSrc = src;
    if (src.includes('search.pstatic.net/common')) {
      const match = src.match(/src=([^&]+)/);
      if (match) {
        finalSrc = decodeURIComponent(match[1]).replace('http://', 'https://');
      }
    }

    const cleanUrl = finalSrc.replace(/^https?:\/\//, '');

    switch (count) {
      case 0: return finalSrc;
      case 1: return `https://wsrv.nl/?url=${encodeURIComponent(cleanUrl)}&w=800`;
      case 2: return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=800`;
      case 3: return `https://i0.wp.com/${cleanUrl.split('?')[0]}`;
      default: return finalSrc;
    }
  };

  const currentSrc = getAttemptUrl(retryCount);

  const handleError = () => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  if (error || !src) {
    return (
      <div 
        className={`${className} flex flex-col items-center justify-center gap-4 relative overflow-hidden bg-slate-900`}
        style={{ border: `1px solid ${accentColor}44` }}
      >
        <div className="relative z-10 flex flex-col items-center gap-2">
          <Sparkles className="w-10 h-10 opacity-50" style={{ color: accentColor }} />
          <span className="text-xl font-black text-white italic tracking-tighter text-center px-6 leading-none uppercase drop-shadow-lg">
            {alt}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: accentColor, boxShadow: `0 0 15px ${accentColor}` }}></div>
      </div>
    );
  }

  return (
    <div className={`${className} relative bg-slate-900 overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-slate-800">
          <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-white/40 animate-spin"></div>
        </div>
      )}
      <img 
        key={retryCount}
        src={currentSrc} 
        alt={alt} 
        className={`${className} transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`} 
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={() => setLoading(false)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

const SocialLinks: React.FC<{ socials?: Socials; accentColor?: string }> = ({ socials }) => {
  if (!socials) return null;

  const link = (href: string, title: string, bg: string, shadow: string, icon: React.ReactNode) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="p-2 rounded-xl border transition-all active:scale-95 hover:scale-110"
      style={{ background: bg, boxShadow: shadow }}
    >
      {icon}
    </a>
  );

  return (
    <div className="flex gap-3 mt-4 flex-wrap">
      {socials.instagram && link(
        socials.instagram, 'Instagram',
        'linear-gradient(135deg, rgba(225,48,108,0.25), rgba(247,119,55,0.2))',
        '0 0 10px rgba(225,48,108,0.4)',
        <Instagram className="w-4 h-4 text-[#E1306C]" />
      )}
      {socials.twitter && link(
        socials.twitter, 'X (Twitter)',
        'rgba(255,255,255,0.07)',
        '0 0 10px rgba(255,255,255,0.15)',
        <Twitter className="w-4 h-4 text-white" />
      )}
      {socials.youtube && link(
        socials.youtube, 'YouTube',
        'rgba(255,0,0,0.15)',
        '0 0 10px rgba(255,0,0,0.35)',
        <Youtube className="w-4 h-4 text-red-400" />
      )}
      {socials.tiktok && link(
        socials.tiktok, 'TikTok',
        'linear-gradient(135deg, rgba(0,242,234,0.15), rgba(255,0,80,0.15))',
        '0 0 10px rgba(0,242,234,0.3)',
        <Music2 className="w-4 h-4 text-neon-blue" />
      )}
    </div>
  );
};

const IdolEncyclopedia: React.FC<{ onMemberSelect: (v: { member: Member; group: KpopGroup }) => void }> = ({ onMemberSelect }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize state directly from location if available
  const [showGroupShare, setShowGroupShare] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<KpopGroup | null>(() => {
    if (location.state && location.state.selectedGroupId) {
      const group = KPOP_GROUPS.find(g => g.id === location.state.selectedGroupId);
      if (group) return group;
    }
    return null;
  });

  // 모든 항목(그룹 + 멤버)을 하나의 리스트로 평탄화
  const allEntries = React.useMemo(() => {
    const entries: (KpopGroup | { member: Member; group: KpopGroup; isMember: true })[] = [];
    KPOP_GROUPS.forEach(group => {
      entries.push(group);
      group.members.forEach(member => {
        entries.push({ member, group, isMember: true });
      });
    });
    return entries;
  }, []);

  const filteredEntries = allEntries.filter(entry => {
    const term = searchTerm.toLowerCase();
    if ('members' in entry) { // 그룹인 경우
      return Object.values(entry.name).some(val => typeof val === 'string' && val.toLowerCase().includes(term));
    } else { // 멤버인 경우
      return Object.values(entry.member.name).some(val => typeof val === 'string' && val.toLowerCase().includes(term));
    }
  });

  const handleBackToList = () => {
    setSelectedGroup(null);
    setShowGroupShare(false);
    window.scrollTo(0, 0);
  };

  if (selectedGroup) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      "name": getLangText(selectedGroup.name, i18n.language),
      "description": getLangText(selectedGroup.description, i18n.language),
      "genre": "K-pop",
      "foundingLocation": {
        "@type": "Place",
        "name": "South Korea"
      },
      "member": selectedGroup.members.map(m => ({
        "@type": "OrganizationRole",
        "member": {
          "@type": "Person",
          "name": getLangText(m.name, i18n.language)
        },
        "roleName": getLangText(m.role, i18n.language)
      }))
    };

    return (
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 animate-fade-in-up pb-20">
        {/* Dynamic SEO for AI */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start px-2">
          <button 
            onClick={handleBackToList}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono uppercase text-sm mb-4 md:mb-0"
          >
            <ChevronLeft className="w-5 h-5" />
            {t('back')}
          </button>
          
          <div className="flex-1 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            <div className="w-full max-w-[280px] md:max-w-xs lg:w-80 lg:h-80 aspect-square rounded-[40px] overflow-hidden border-4 border-white/10 neon-shadow-purple flex-shrink-0 mx-auto lg:mx-0">
              <SafeImage
                src={selectedGroup.imageUrl}
                alt={getLangText(selectedGroup.name, i18n.language)}
                className="w-full h-full object-cover object-top"
                accentColor={selectedGroup.accentColor}
              />
            </div>
            <div className="flex-1 text-center lg:text-left w-full min-w-0">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1.5 bg-gradient-to-r from-neon-blue/20 to-neon-blue/5 border border-neon-blue/30 text-neon-blue rounded-full text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold shadow-[0_0_10px_rgba(0,255,255,0.1)]">
                  <span className="text-white/60 font-normal">{t('company')}</span> {selectedGroup.company}
                </span>
                <span className="px-3 py-1.5 bg-gradient-to-r from-neon-purple/20 to-neon-purple/5 border border-neon-purple/30 text-neon-purple rounded-full text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold shadow-[0_0_10px_rgba(157,0,255,0.1)]">
                  <span className="text-white/60 font-normal">{t('debut_date')}</span> {selectedGroup.debut}
                </span>
                {selectedGroup.fandom && (
                  <span className="px-3 py-1.5 bg-gradient-to-r from-neon-pink/20 to-neon-pink/5 border border-neon-pink/30 text-neon-pink rounded-full text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold shadow-[0_0_10px_rgba(255,0,255,0.1)]">
                  <Heart className="w-3 h-3 fill-neon-pink/20" />
                  <span className="text-white/60 font-normal">{t('fandom')}</span> {getLangText(selectedGroup.fandom, i18n.language)}
                </span>
                )}
                {selectedGroup.officialSite && (
                  <a href={selectedGroup.officialSite} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all border border-white/20 text-white rounded-full text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <ExternalLink className="w-3 h-3" />
                  {t('official_site')}
                </a>
                )}
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-4 leading-none break-words">{getLangText(selectedGroup.name, i18n.language)}</h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">{getLangText(selectedGroup.description, i18n.language)}</p>
              
              <SocialLinks socials={selectedGroup.socials} accentColor={selectedGroup.accentColor} />

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
                    title={`${getLangText(selectedGroup.name, i18n.language)} | KPOP STUDIO`}
                    text={i18n.language === 'ko'
                      ? `KPOP STUDIO에서 ${getLangText(selectedGroup.name, i18n.language)} 프로필 확인하기 ✨`
                      : `Check out ${getLangText(selectedGroup.name, i18n.language)} profiles on KPOP STUDIO ✨`}
                    url="https://kpopstudio.ai/encyclopedia"
                    lang={i18n.language}
                  />
                </div>
              )}

              <div className="mt-6 p-4 bg-neon-blue/5 border-l-4 border-neon-blue rounded-r-xl inline-block">
                <p className="text-xs font-mono text-neon-blue uppercase tracking-widest font-bold mb-1">Editorial Note</p>
                <p className="text-slate-400 text-xs italic">
                  {t('editorial_note')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Members Section */}
        {selectedGroup.members && selectedGroup.members.length > 0 && (
          <section className="px-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center border border-neon-pink/30">
                <User className="w-6 h-6 text-neon-pink" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic">{t('member_profile')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {selectedGroup.members.map((member) => (
                <div 
                  key={member.id} 
                  onClick={() => {
                    const soloArtist = KPOP_GROUPS.find(g => g.id === member.id);
                    if (soloArtist) {
                      setSelectedGroup(soloArtist);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`glass-card rounded-[32px] p-6 border-white/5 flex flex-col gap-6 hover:border-white/20 transition-all group relative overflow-hidden ${KPOP_GROUPS.some(g => g.id === member.id) ? 'cursor-pointer' : ''}`}
                >
                  <div className="flex gap-6 items-start relative z-10">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 group-hover:neon-shadow-blue transition-all">
                      <SafeImage src={member.imageUrl} alt={getLangText(member.name, i18n.language)} className="w-full h-full object-cover object-top" accentColor={selectedGroup.accentColor} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-2xl font-black text-white">{getLangText(member.name, i18n.language)}</h4>
                        {KPOP_GROUPS.some(g => g.id === member.id) && (
                          <span className="px-2 py-0.5 bg-neon-blue/20 text-neon-blue rounded-md text-[8px] font-mono border border-neon-blue/30 uppercase font-black">
                            {t('solo_profile')}
                          </span>
                        )}
                      </div>
                      <p className="text-neon-blue font-mono text-[10px] uppercase font-black mb-4 tracking-widest">{getLangText(member.role, i18n.language)}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                          <Calendar className="w-3 h-3 text-neon-purple" />
                          {member.birth}
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                          <Fingerprint className="w-3 h-3 text-neon-green" />
                          MBTI: {member.mbti}
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                          <Moon className="w-3 h-3 text-neon-yellow" />
                          {getLangText(member.zodiac, i18n.language)}
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-lg border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                          <Droplets className="w-3 h-3 text-neon-pink" />
                          {member.bloodType}
                        </div>
                      </div>
                      
                      <SocialLinks socials={member.socials} accentColor={selectedGroup.accentColor} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 line-clamp-3 mb-3">{getLangText(member.description, i18n.language)}</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); onMemberSelect({ member, group: selectedGroup }); }}
                    className="relative z-10 w-full py-2.5 bg-white/5 hover:bg-neon-blue/10 border border-white/10 hover:border-neon-blue/40 rounded-2xl text-[11px] font-mono font-black uppercase tracking-widest text-slate-400 hover:text-neon-blue transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    {i18n.language === 'ko' ? '댓글 보기' : 'Comments'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Wiki & News & Gossip Section */}
        <div className="flex flex-col gap-10 px-2">
          <section className="glass-card rounded-[40px] p-8 md:p-10 border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30">
                <Star className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic">{t('overview')}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">{getLangText(selectedGroup.wiki, i18n.language)}</p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <section className="glass-card rounded-[40px] p-8 md:p-10 border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center border border-neon-green/30">
                  <Newspaper className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">{t('latest_news')}</h3>
              </div>
              <div className="space-y-6">
                {[...selectedGroup.news].sort((a, b) => new Date(b.date.replace(/\./g, '-')).getTime() - new Date(a.date.replace(/\./g, '-')).getTime()).map((news, i) => (
                  <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0 p-4 -mx-4 rounded-2xl">
                    <div className="text-[10px] font-mono text-neon-green font-bold uppercase mb-2">{news.date}</div>
                    <h4 className="text-lg font-bold text-white mb-3 leading-snug">
                      {getLangText(news.title, i18n.language)}
                    </h4>
                    <p className="text-slate-400 text-sm line-clamp-3">{getLangText(news.summary, i18n.language)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card rounded-[40px] p-8 md:p-10 border-white/5 bg-gradient-to-br from-white/5 to-transparent h-fit">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-yellow/10 flex items-center justify-center border border-neon-yellow/30">
                  <MessageCircle className="w-6 h-6 text-neon-yellow" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">{t('star_behind')}</h3>
              </div>
              <ul className="space-y-5">
                {getLangArray(selectedGroup.tmi, i18n.language).map((fact, i) => (
                  <li key={i} className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5 hover:border-neon-yellow/30 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-neon-yellow flex-shrink-0 mt-1.5 shadow-[0_0_8px_rgba(255,240,31,0.8)]"></span>
                    <p className="text-slate-300 text-sm leading-relaxed">{fact}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Group Comments */}
        <div className="px-2">
          <CommentSection
            channelId={`group_${selectedGroup.id}`}
            accentColor={selectedGroup.accentColor}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 animate-fade-in-up pb-10">
      <div className="text-center max-w-3xl mx-auto px-4 pt-10 md:pt-16 mb-4">
        <p className="text-neon-pink font-mono text-[10px] uppercase tracking-[0.35em] font-black mb-3 opacity-80">✦ KPOP ARCHIVE ✦</p>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-4 leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue pb-1 pr-2 inline-block">
            {t('nav_encyclopedia')}
          </span>
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          {t('encyclopedia_desc')}
        </p>
      </div>

      <div className="relative group max-w-2xl mx-auto w-full px-2">
        <div className="absolute inset-y-0 left-4 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 md:w-6 h-6 text-slate-500 group-focus-within:text-neon-blue transition-colors" />
        </div>
        <input
          type="text"
          placeholder={t('search_placeholder')}
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 pl-14 md:pl-16 pr-6 focus:outline-none focus:border-neon-blue/50 transition-all font-mono text-base md:text-lg backdrop-blur-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {filteredEntries.map((entry, idx) => {
          if ('members' in entry) {
            // 그룹 카드 렌더링
            const group = entry;
            return (
              <div 
                key={`group-${group.id}-${idx}`}
                className="glass-card rounded-[32px] p-6 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all group flex flex-col border-white/5"
                onClick={() => {
                  setSelectedGroup(group);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:neon-shadow-blue transition-all duration-500">
                  <SafeImage 
                    src={group.imageUrl} 
                    alt={getLangText(group.name, i18n.language)} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    accentColor={group.accentColor}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-mono text-white uppercase border border-white/10">{group.company}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-neon-purple/20 backdrop-blur-md rounded-lg text-[8px] font-mono text-neon-purple uppercase border border-neon-purple/30 font-black tracking-tighter">GROUP</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-3xl font-black text-white group-hover:text-neon-blue transition-all italic tracking-tighter pr-2 leading-none">
                    {getLangText(group.name, i18n.language)}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">{getLangText(group.description, i18n.language)}</p>
                  
                  <button className="w-full py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono font-black uppercase tracking-widest text-slate-300 group-hover:bg-neon-blue group-hover:text-black group-hover:border-transparent transition-all">
                    {t('view_details')}
                  </button>
                </div>
              </div>
            );
          } else {
            // 멤버 카드 렌더링
            const { member, group } = entry;
            return (
              <div 
                key={`member-${member.id}-${idx}`}
                className="glass-card rounded-[32px] p-6 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all group flex flex-col border-white/5"
                onClick={() => {
                  setSelectedGroup(group);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:neon-shadow-pink transition-all duration-500">
                  <SafeImage 
                    src={member.imageUrl} 
                    alt={getLangText(member.name, i18n.language)} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    accentColor={group.accentColor}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-mono text-white uppercase border border-white/10">{getLangText(group.name, i18n.language)}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-neon-pink/20 backdrop-blur-md rounded-lg text-[8px] font-mono text-neon-pink uppercase border border-neon-pink/30 font-black tracking-tighter">MEMBER</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-3xl font-black text-white group-hover:text-neon-pink transition-all italic tracking-tighter pr-2 leading-none">
                    {getLangText(member.name, i18n.language)}
                  </h3>
                  <p className="text-neon-blue font-mono text-[10px] uppercase font-black tracking-widest">{getLangText(member.role, i18n.language)}</p>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4 mt-2">{getLangText(member.description, i18n.language)}</p>
                  
                  <button className="w-full py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono font-black uppercase tracking-widest text-slate-300 group-hover:bg-neon-pink group-hover:text-black group-hover:border-transparent transition-all">
                    {t('view_details')}
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

// ─── Member Detail Modal (with comments) ─────────────────────────────────────
const MemberModal: React.FC<{
  member: Member;
  group: KpopGroup;
  onClose: () => void;
}> = ({ member, group, onClose }) => {
  const { t, i18n } = useTranslation();
  const tmiArr = getLangArray(member.tmi ?? { ko: [], en: [] }, i18n.language);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="neon-border-animated rounded-[32px] overflow-hidden">
          <div className="bg-[#080810]/95 backdrop-blur-3xl rounded-[30px] overflow-hidden">
            {/* 멤버 이미지 */}
            <div className="relative w-full aspect-square max-h-72 overflow-hidden">
              <img
                src={member.imageUrl}
                alt={getLangText(member.name, i18n.language)}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810] via-transparent to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6 -mt-2">
              {/* 이름 + 그룹 + 포지션 */}
              <div className="text-center space-y-1">
                <h3 className="text-3xl md:text-4xl font-black text-white italic tracking-tight"
                  style={{ textShadow: '0 0 20px rgba(157,0,255,0.4)' }}>
                  {getLangText(member.name, i18n.language)}
                </h3>
                <p className="text-neon-blue font-black text-lg uppercase tracking-wider">
                  {getLangText(group.name, i18n.language)}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-black text-white mt-1"
                  style={{ background: 'rgba(157,0,255,0.2)', border: '1px solid rgba(157,0,255,0.4)' }}
                >
                  {getLangText(member.role, i18n.language)}
                </span>
              </div>

              {/* 프로필 그리드 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: t('birthday'), value: member.birth, borderCls: 'border-neon-pink/30', textCls: 'text-neon-pink' },
                  { label: 'MBTI', value: member.mbti, borderCls: 'border-neon-purple/30', textCls: 'text-neon-purple' },
                  { label: t('blood_type'), value: member.bloodType + (i18n.language === 'ko' ? '형' : ''), borderCls: 'border-neon-blue/30', textCls: 'text-neon-blue' },
                  { label: t('height'), value: member.height, borderCls: 'border-neon-orange/30 border-opacity-30', textCls: 'text-orange-400' },
                ].map(({ label, value, borderCls, textCls }) => (
                  <div key={label} className={`bg-white/5 border ${borderCls} rounded-2xl p-3 flex flex-col items-center`}>
                    <p className="text-slate-500 font-mono text-[9px] uppercase font-black mb-1 tracking-widest">{label}</p>
                    <p className={`text-sm font-black ${textCls} text-center leading-tight`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* 별자리 */}
              <div className="bg-white/5 border border-neon-purple/25 rounded-2xl px-4 py-3 flex items-center justify-center gap-2">
                <span className="text-lg">✨</span>
                <p className="text-slate-300 font-mono text-xs font-black uppercase tracking-widest">
                  {t('zodiac')} &nbsp;·&nbsp;
                  <span className="text-white">{getLangText(member.zodiac, i18n.language)}</span>
                </p>
              </div>

              {/* TMI */}
              {tmiArr.length > 0 && (
                <div className="bg-neon-purple/5 border border-neon-purple/20 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-neon-purple shrink-0" />
                    <p className="text-neon-purple font-mono text-[10px] uppercase font-black tracking-widest">
                      {t('behind_story')}
                    </p>
                  </div>
                  <ol className="space-y-2">
                    {tmiArr.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="text-neon-purple font-black font-mono text-[11px] mt-0.5 shrink-0">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 댓글 */}
              <CommentSection
                channelId={`member_${group.id}_${member.id}`}
                accentColor={group.accentColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const IdolEncyclopediaWithModal: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<{ member: Member; group: KpopGroup } | null>(null);

  return (
    <>
      <IdolEncyclopedia onMemberSelect={setSelectedMember} />
      {selectedMember && (
        <MemberModal
          member={selectedMember.member}
          group={selectedMember.group}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
};

export default IdolEncyclopediaWithModal;
