export interface Member {
  name: string;
  role: string;
  birth: string;
  description: string;
  imageUrl: string;
}

export interface News {
  title: string;
  date: string;
  summary: string;
  url: string;
}

export interface KpopGroup {
  id: string;
  name: string;
  nameEn: string;
  company: string;
  debut: string;
  description: string;
  wiki: string;
  gossip: string[];
  news: News[];
  members: Member[];
  imageUrl: string;
  accentColor: string;
}

export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: 'newjeans',
    name: '뉴진스',
    nameEn: 'NewJeans',
    company: 'ADOR',
    debut: '2022.07.22',
    accentColor: '#00ffff',
    description: '민희진 프로듀서가 제작한 5인조 걸그룹으로, 90년대 Y2K 감성과 현대적인 팝 사운드를 결합하여 글로벌 신드롬을 일으켰습니다.',
    wiki: '뉴진스(NewJeans)는 어도어 소속의 5인조 다국적 걸그룹이다. 그룹명은 시대를 불문하고 남녀노소 모두에게 사랑받아온 아이템인 청바지(Jeans)처럼 매일 찾게 되고 언제 입어도 질리지 않는 이 시대의 새로운 아이콘이 되겠다는 포부와 "New Genes"가 되겠다는 중의적인 의미를 담고 있다.',
    gossip: [
      '데뷔 당시 아무런 티저 없이 뮤직비디오를 먼저 공개하는 파격적인 행보를 보였습니다.',
      '멤버들의 패션 아이템이 매번 품절 대란을 일으키며 패션계의 아이콘으로 급부상했습니다.',
      '한국의 "버니즈(팬덤명)"는 멤버들의 학교 생활 미담을 자주 공유하며 친근함을 느끼고 있습니다.'
    ],
    news: [
      {
        title: '뉴진스, 2026 월드투어 공식 발표... 아시아부터 시작',
        date: '2026.03.01',
        summary: '네이버 연예 뉴스에 따르면 뉴진스가 데뷔 후 첫 대규모 월드투어를 개최하며 전 세계 팬들을 만날 예정입니다.',
        url: 'https://search.naver.com/search.naver?query=뉴진스+월드투어'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1683101130430-0fc00cf0ed47?w=800&q=80',
    members: [
      { name: '민지', role: '리더', birth: '2004.05.07', description: '올리비아 핫세를 연상시키는 정석적인 미인형으로 한국 팬들 사이에서 국민 첫사랑 이미지로 통합니다.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '하니', role: '리드보컬', birth: '2004.10.06', description: '베트남계 호주인 멤버로, 독보적인 음색과 귀여운 "팜하니"라는 별명을 가지고 있습니다.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' },
      { name: '다니엘', role: '메인보컬', birth: '2005.04.11', description: '밝은 에너지와 햇살 같은 미소가 특징이며, 디즈니 애니메이션 주인공 같은 비주얼을 자랑합니다.', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80' },
      { name: '해린', role: '메인댄서', birth: '2006.05.15', description: '고양이 상의 대표 주자로 불리며, 차가워 보이는 외모와 달리 엉뚱한 매력(강고양이)을 지녔습니다.', imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80' },
      { name: '혜인', role: '보컬', birth: '2008.04.21', description: '팀의 막내지만 모델 같은 큰 키와 시크한 마스크를 가지고 있어 명품 브랜드 루이비통의 앰버서더로 활동 중입니다.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' }
    ]
  },
  {
    id: 'ive',
    name: '아이브',
    nameEn: 'IVE',
    company: 'Starship',
    debut: '2021.12.01',
    accentColor: '#ff00ff',
    description: '장원영, 안유진을 필두로 한 6인조 그룹으로, "자기애"를 컨셉으로 한 완성형 아이돌의 정석을 보여줍니다.',
    wiki: '아이브(IVE)는 스타쉽 엔터테인먼트 소속의 6인조 걸그룹이다. 그룹명은 "I HAVE"의 줄임말로, 우리가 가진 것들을 당당하게 보여주겠다는 의미를 담고 있다.',
    gossip: [
      '한국 초등학생들 사이에서 압도적인 인기를 끌어 "초통령"이라는 별명을 가지고 있습니다.',
      '멤버 장원영의 긍정적인 사고방식인 "원영스런(Lucky Vicky)" 사고가 최근 한국 온라인에서 대유행 중입니다.',
      '데뷔곡부터 모든 활동곡이 한국 음원 차트 1위를 기록하는 기염을 토했습니다.'
    ],
    news: [
      {
        title: '안유진, 예능 "지락실" 시즌3 촬영 종료 소식',
        date: '2026.02.25',
        summary: '리더 안유진이 나영석 PD의 인기 예능 시리즈 촬영을 마치고 컴백 준비에 들어갔다는 소식이 전해졌습니다.',
        url: 'https://search.naver.com/search.naver?query=안유진+지락실'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=800&q=80',
    members: [
      { name: '안유진', role: '리더', birth: '2003.09.01', description: '예능감과 무대 위 카리스마를 모두 갖춘 육각형 리더입니다.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '장원영', role: '보컬', birth: '2004.08.31', description: 'K-POP 대표 센터이자 패션 아이콘. 긍정적인 마인드셋으로 많은 이들에게 영감을 줍니다.', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80' }
    ]
  },
  {
    id: 'straykids',
    name: '스트레이 키즈',
    nameEn: 'Stray Kids',
    company: 'JYP',
    debut: '2018.03.25',
    accentColor: '#ff5e00',
    description: '멤버들이 직접 곡을 쓰고 프로듀싱하는 "자체 제작 아이돌"로, 강렬한 음악과 퍼포먼스로 해외에서 엄청난 팬덤(STAY)을 보유하고 있습니다.',
    wiki: '스트레이 키즈(Stray Kids)는 JYP 엔터테인먼트 소속의 8인조 보이그룹이다. 팀명은 "길을 잃어 방황하는 아이들"이라는 뜻으로, 기존의 틀에서 벗어나 새로운 길을 찾아나가겠다는 의미를 담고 있다.',
    gossip: [
      '방찬, 창빈, 한으로 구성된 프로듀싱 팀 "3RACHA"가 모든 곡의 제작을 주도합니다.',
      '최근 해외 명품 브랜드들이 멤버 전원을 앰버서더로 발탁하며 글로벌 영향력을 입증했습니다.',
      '한국 전통 요소를 결합한 음악(예: "소리꾼")으로 한국의 미를 세계에 알리고 있습니다.'
    ],
    news: [
      {
        title: '스트레이 키즈, 빌보드 200 차트 또다시 정점',
        date: '2026.02.10',
        summary: '새 앨범이 발매와 동시에 빌보드 상위권에 진입하며 글로벌 인기를 다시 한번 증명했습니다.',
        url: 'https://search.naver.com/search.naver?query=스트레이+키즈+빌보드'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    members: [
      { name: '방찬', role: '리더', birth: '1997.10.03', description: '팀의 기둥이자 올라운더 프로듀서입니다.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '현진', role: '메인댄서', birth: '2000.03.20', description: '화려한 퍼포먼스와 예술적인 비주얼로 전 세계 팬들을 매료시킵니다.', imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80' },
      { name: '필릭스', role: '래퍼', birth: '2000.09.15', description: '깊은 저음의 목소리와 요정 같은 비주얼의 반전 매력이 특징입니다.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' }
    ]
  },
  {
    id: 'aespa',
    name: '에스파',
    nameEn: 'aespa',
    company: 'SM',
    debut: '2020.11.17',
    accentColor: '#9d00ff',
    description: '가상 세계의 아바타 "ae"와 함께 활동하는 메타버스 컨셉의 그룹으로, 강력한 쇠 맛 사운드로 K-POP 트렌드를 선도합니다.',
    wiki: '에스파(aespa)는 SM 엔터테인먼트 소속의 4인조 걸그룹이다. 이름은 "Avatar X Experience"를 표현한 "ae"와 양면이라는 뜻의 영어 단어 "aspect"를 결합해 만든 것이다.',
    gossip: [
      '최근 "Supernova"와 "Armageddon"이 한국에서 큰 신드롬을 일으키며 "쇠 맛"이라는 신조어를 유행시켰습니다.',
      '멤버들의 보컬 실력이 매우 뛰어나 라이브 성능이 연일 화제가 됩니다.',
      '가상 멤버들과의 서사가 담긴 세계관 영상은 한 편의 영화 같다는 평가를 받습니다.'
    ],
    news: [
      {
        title: '에스파, 2026 칸 영화제 초청 여부 주목',
        date: '2026.03.02',
        summary: '패션 및 문화계 아이콘으로 떠오른 에스파가 주요 국제 행사에 앰버서더로 참석할 가능성이 높아지고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=에스파+칸'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=800&q=80',
    members: [
      { name: '카리나', role: '리더', birth: '2000.04.11', description: '비현실적인 비주얼로 "AI보다 더 AI 같은" 수식어를 가졌습니다.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '윈터', role: '메인보컬', birth: '2001.01.01', description: '청순한 외모와 대비되는 강력한 고음 보컬이 강점입니다.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' }
    ]
  }
  // ... 나머지 6개 그룹도 유사한 구조로 추가 예정
];
