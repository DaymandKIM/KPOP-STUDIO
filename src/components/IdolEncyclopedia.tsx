import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, User, Star, ChevronLeft, ExternalLink, MessageCircle, Newspaper } from 'lucide-react';
import { KPOP_GROUPS } from '../data/idols';
import type { KpopGroup } from '../data/idols';

const IdolEncyclopedia: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<KpopGroup | null>(null);

  const filteredGroups = KPOP_GROUPS.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBackToList = () => {
    setSelectedGroup(null);
    window.scrollTo(0, 0);
  };

  if (selectedGroup) {
    return (
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 animate-fade-in-up pb-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start px-2">
          <button 
            onClick={handleBackToList}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono uppercase text-sm mb-4 md:mb-0"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to List
          </button>
          
          <div className="flex-1 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] overflow-hidden border-4 border-white/10 neon-shadow-purple flex-shrink-0">
              <img src={selectedGroup.imageUrl} alt={selectedGroup.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">{selectedGroup.company}</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">Debut: {selectedGroup.debut}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-4">{selectedGroup.name}</h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">{selectedGroup.description}</p>
            </div>
          </div>
        </div>

        {/* Content Tabs/Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-2">
          
          {/* Left Column: Wiki & Gossip */}
          <div className="lg:col-span-2 space-y-10">
            {/* Wiki Section */}
            <section className="glass-card rounded-[40px] p-8 border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30">
                  <Star className="w-6 h-6 text-neon-blue" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Overview</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">{selectedGroup.wiki}</p>
            </section>

            {/* Members Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center border border-neon-pink/30">
                  <User className="w-6 h-6 text-neon-pink" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Members</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedGroup.members.map((member, i) => (
                  <div key={i} className="glass-card rounded-3xl p-6 border-white/5 flex gap-6 hover:border-white/20 transition-all group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 group-hover:neon-shadow-blue transition-all">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-white mb-1">{member.name}</h4>
                      <p className="text-neon-blue font-mono text-[10px] uppercase font-bold mb-2 tracking-widest">{member.role} // {member.birth}</p>
                      <p className="text-slate-400 text-sm leading-snug">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: News & Gossip List */}
          <div className="space-y-10">
            {/* Latest News */}
            <section className="glass-card rounded-[40px] p-8 border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center border border-neon-green/30">
                  <Newspaper className="w-6 h-6 text-neon-green" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Latest News</h3>
              </div>
              <div className="space-y-6">
                {selectedGroup.news.map((news, i) => (
                  <div key={i} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                    <div className="text-[10px] font-mono text-neon-green font-bold uppercase mb-2">{news.date}</div>
                    <h4 className="text-lg font-bold text-white mb-3 hover:text-neon-green cursor-pointer transition-colors leading-snug">
                      {news.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{news.summary}</p>
                    <a 
                      href={news.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-white uppercase font-black"
                    >
                      Read on Naver <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Gossip/Fun Facts */}
            <section className="glass-card rounded-[40px] p-8 border-white/5 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-neon-yellow/10 flex items-center justify-center border border-neon-yellow/30">
                  <MessageCircle className="w-6 h-6 text-neon-yellow" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic">Gossip & Facts</h3>
              </div>
              <ul className="space-y-4">
                {selectedGroup.gossip.map((fact, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-yellow flex-shrink-0 mt-2"></span>
                    <p className="text-slate-300 text-sm leading-relaxed">{fact}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 animate-fade-in-up pb-10">
      {/* Search Bar */}
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
        {filteredGroups.map(group => (
          <div 
            key={group.id}
            className="glass-card rounded-[32px] p-6 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all group flex flex-col border-white/5"
            onClick={() => setSelectedGroup(group)}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:neon-shadow-blue transition-all duration-500">
              <img 
                src={group.imageUrl} 
                alt={group.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-mono text-white uppercase border border-white/10">{group.company}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <h3 className="text-3xl font-black text-white group-hover:text-neon-blue transition-all italic tracking-tighter">{group.name}</h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase font-black">{group.debut}</span>
              </div>
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">{group.description}</p>
              
              <button className="w-full py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono font-black uppercase tracking-widest text-slate-300 group-hover:bg-neon-blue group-hover:text-black group-hover:border-transparent transition-all">
                Enter Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdolEncyclopedia;
