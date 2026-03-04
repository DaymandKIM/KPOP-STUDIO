import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, User, Zap, Flame, Droplets, Shield, Sword, Sparkles, X } from 'lucide-react';

interface Idol {
  id: string;
  name: string;
  group: string;
  class: 'vanguard' | 'scout' | 'striker' | 'supporter';
  element: 'fire' | 'water' | 'electric' | 'dark' | 'light';
  description: string;
  imageUrl: string;
}

const MOCK_IDOLS: Idol[] = [
  {
    id: '1',
    name: 'V (BTS)',
    group: 'BTS',
    class: 'scout',
    element: 'dark',
    description: '독보적인 분위기와 신비로운 매력을 가진 비주얼 센터.',
    imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80'
  },
  {
    id: '2',
    name: 'Lisa (BLACKPINK)',
    group: 'BLACKPINK',
    class: 'supporter',
    element: 'electric',
    description: '폭발적인 에너지와 파워풀한 퍼포먼스를 보여주는 메인 댄서.',
    imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80'
  },
  {
    id: '3',
    name: 'Karina (aespa)',
    group: 'aespa',
    class: 'vanguard',
    element: 'light',
    description: 'AI보다 더 AI 같은 압도적인 비주얼과 카리스마를 가진 센터.',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80'
  },
  {
    id: '4',
    name: 'Felix (Stray Kids)',
    group: 'Stray Kids',
    class: 'striker',
    element: 'fire',
    description: '강렬한 저음과 파워풀한 보이스로 무대를 압도하는 스트라이커.',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80'
  }
];

const IdolEncyclopedia: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null);

  const filteredIdols = MOCK_IDOLS.filter(idol => 
    idol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    idol.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getElementColorClass = (element: string) => {
    switch (element) {
      case 'fire': return 'neon-shadow-orange border-neon-orange/50 text-neon-orange';
      case 'water': return 'neon-shadow-blue border-neon-blue/50 text-neon-blue';
      case 'electric': return 'neon-shadow-yellow border-neon-yellow/50 text-neon-yellow';
      case 'dark': return 'neon-shadow-purple border-neon-purple/50 text-neon-purple';
      case 'light': return 'neon-shadow-pink border-neon-pink/50 text-neon-pink';
      default: return 'neon-shadow-blue border-neon-blue/50 text-neon-blue';
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'fire': return <Flame className="w-4 h-4" />;
      case 'water': return <Droplets className="w-4 h-4" />;
      case 'electric': return <Zap className="w-4 h-4" />;
      case 'dark': return <Sparkles className="w-4 h-4" />;
      case 'light': return <Sparkles className="w-4 h-4" />;
      default: return null;
    }
  };

  const getClassIcon = (className: string) => {
    switch (className) {
      case 'vanguard': return <Shield className="w-4 h-4" />;
      case 'striker': return <Sword className="w-4 h-4" />;
      case 'scout': return <Search className="w-4 h-4" />;
      case 'supporter': return <User className="w-4 h-4" />;
      default: return null;
    }
  };

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

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2">
        {filteredIdols.map(idol => (
          <div 
            key={idol.id}
            className={`glass-card rounded-[24px] md:rounded-[32px] p-4 md:p-5 cursor-pointer hover:scale-[1.02] active:scale-95 transition-all group flex flex-col border-white/5 hover:border-transparent ${getElementColorClass(idol.element).split(' ')[0]}`}
            onClick={() => setSelectedIdol(idol)}
          >
            <div className="relative w-full aspect-square md:h-64 rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-6 border border-white/10">
              <img 
                src={idol.imageUrl} 
                alt={idol.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-2 right-2 md:top-3 md:right-3">
                <div className={`bg-black/60 backdrop-blur-md p-1.5 md:p-2.5 rounded-lg border border-white/10 ${getElementColorClass(idol.element).split(' ')[2]}`}>
                  {getElementIcon(idol.element)}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 md:gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">{idol.group}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:glitch-text transition-all tracking-tight truncate pr-1">{idol.name}</h3>
              
              <div className="flex gap-1.5 md:gap-2 mt-2 md:mt-3 overflow-x-auto no-scrollbar">
                <div className="flex-shrink-0 flex items-center gap-1.5 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-white/10 text-[8px] md:text-[10px] font-mono text-slate-300 uppercase font-black tracking-tighter">
                  {getClassIcon(idol.class)}
                  {t(idol.class)}
                </div>
                <div className={`flex-shrink-0 flex items-center gap-1.5 bg-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg border border-white/10 text-[8px] md:text-[10px] font-mono uppercase font-black tracking-tighter ${getElementColorClass(idol.element).split(' ')[2]}`}>
                  {getElementIcon(idol.element)}
                  {t(idol.element)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedIdol && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 bg-black/95 backdrop-blur-xl">
          <div className={`w-full max-w-4xl glass-card rounded-t-[32px] md:rounded-[48px] p-6 md:p-10 relative animate-fade-in-up border-transparent neon-border-animated max-h-[90vh] overflow-y-auto no-scrollbar`}>
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-slate-400 hover:text-white transition-colors p-2 z-10"
              onClick={() => setSelectedIdol(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-6 md:pb-0">
              <div className={`w-full md:w-80 aspect-square md:h-96 rounded-[24px] md:rounded-[32px] overflow-hidden border-2 md:border-4 ${getElementColorClass(selectedIdol.element).split(' ')[1]} ${getElementColorClass(selectedIdol.element).split(' ')[0]}`}>
                <img src={selectedIdol.imageUrl} alt={selectedIdol.name} className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div>
                  <h2 className={`text-[10px] md:text-xs font-mono font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-3 ${getElementColorClass(selectedIdol.element).split(' ')[2]}`}>{t('hunter_details')}</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-none pr-2">{selectedIdol.name}</h3>
                  <p className="text-slate-500 font-mono text-base md:text-lg mt-1 md:mt-2 font-bold uppercase">{selectedIdol.group}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/10">
                    <p className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase font-black mb-1 md:mb-2 tracking-widest">{t('class')}</p>
                    <div className="flex items-center gap-2 md:gap-3 text-white">
                      {getClassIcon(selectedIdol.class)}
                      <span className="font-black uppercase tracking-tighter text-sm md:text-lg">{t(selectedIdol.class)}</span>
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 md:p-5 rounded-xl md:rounded-2xl border border-white/10">
                    <p className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase font-black mb-1 md:mb-2 tracking-widest">{t('element')}</p>
                    <div className={`flex items-center gap-2 md:gap-3 ${getElementColorClass(selectedIdol.element).split(' ')[2]}`}>
                      {getElementIcon(selectedIdol.element)}
                      <span className="font-black uppercase tracking-tighter text-sm md:text-lg">{t(selectedIdol.element)}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm md:text-lg font-medium">
                  {selectedIdol.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdolEncyclopedia;
