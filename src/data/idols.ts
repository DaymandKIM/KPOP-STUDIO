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
    description: '90년대 Y2K 감성과 현대적인 팝 사운드를 결합하여 글로벌 신드롬을 일으킨 5인조 걸그룹입니다.',
    wiki: '뉴진스(NewJeans)는 어도어 소속의 5인조 다국적 걸그룹이다. 청바지(Jeans)처럼 매일 찾게 되고 언제 입어도 질리지 않는 이 시대의 아이콘이 되겠다는 의미를 담고 있다.',
    gossip: [
      '데뷔 당시 티저 없이 뮤직비디오를 깜짝 공개하는 파격적인 방식으로 화제가 되었습니다.',
      '멤버 전원이 명품 브랜드 글로벌 앰버서더로 활동하며 패션계에서도 막강한 영향력을 가집니다.',
      '최근 한국에서는 민희진 프로듀서와의 서사로 인해 더욱 단단한 팬덤 결속력을 보여주고 있습니다.'
    ],
    news: [
      {
        title: '뉴진스, 2026 월드투어 공식 발표',
        date: '2026.03.01',
        summary: '전 세계 주요 도시를 순회하는 첫 대규모 투어로 글로벌 팬들을 만날 예정입니다.',
        url: 'https://search.naver.com/search.naver?query=뉴진스+월드투어'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1683101130430-0fc00cf0ed47?w=800&q=80',
    members: [
      { name: '민지', role: '리더/보컬', birth: '2004.05.07', description: '국민 첫사랑 이미지의 정석 미인형 멤버.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '하니', role: '메인보컬', birth: '2004.10.06', description: '독보적인 음색과 귀여운 매력의 팜하니.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' },
      { name: '해린', role: '메인댄서', birth: '2006.05.15', description: '고양이 상의 대표 주자이자 엉뚱한 매력.', imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80' }
    ]
  },
  {
    id: 'ive',
    name: '아이브',
    nameEn: 'IVE',
    company: 'Starship',
    debut: '2021.12.01',
    accentColor: '#ff00ff',
    description: '"자기애"를 컨셉으로 한 완성형 아이돌. 한국 초등학생들의 전폭적인 지지를 받는 그룹입니다.',
    wiki: '아이브(IVE)는 스타쉽 엔터테인먼트 소속의 6인조 걸그룹이다. "I HAVE"의 줄임말로 우리가 가진 것들을 당당하게 보여주겠다는 의미다.',
    gossip: [
      '장원영의 긍정적 사고인 "럭키비키" 마인드셋이 한국 사회 전반에 유행하고 있습니다.',
      '데뷔곡부터 모든 활동곡이 차트 1위를 기록하는 대기록을 썼습니다.',
      '리더 안유진은 예능 프로그램에서 "맑은 눈의 광인" 캐릭터로 큰 사랑을 받고 있습니다.'
    ],
    news: [
      {
        title: '아이브, 일본 도쿄돔 공연 전석 매진',
        date: '2026.02.20',
        summary: '일본 현지에서의 폭발적인 인기로 글로벌 투어의 성공적인 행보를 이어가고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=아이브+도쿄돔'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=800&q=80',
    members: [
      { name: '안유진', role: '리더', birth: '2003.09.01', description: '카리스마 리더와 예능감을 모두 갖춘 육각형 멤버.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '장원영', role: '보컬', birth: '2004.08.31', description: 'K-POP 대표 센터이자 트렌드 세터.', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80' }
    ]
  },
  {
    id: 'straykids',
    name: '스트레이 키즈',
    nameEn: 'Stray Kids',
    company: 'JYP',
    debut: '2018.03.25',
    accentColor: '#ff5e00',
    description: '멤버들이 직접 곡을 만드는 자체 제작 보이그룹으로, 강렬한 사운드가 특징입니다.',
    wiki: '스트레이 키즈(Stray Kids)는 JYP 소속 8인조 보이그룹이다. 기존의 틀에서 벗어나 새로운 길을 개척한다는 포부를 가졌다.',
    gossip: [
      '빌보드 200 차트에서 연속 1위를 차지하며 해외에서 가장 강력한 팬덤을 가진 보이그룹 중 하나입니다.',
      '자체 프로듀싱 팀 "3RACHA"가 팀의 음악적 정체성을 구축합니다.',
      '멤버 현진의 예술적인 춤선은 수많은 커버 영상을 만들어내고 있습니다.'
    ],
    news: [
      {
        title: '스트레이 키즈, 2026 그래미 어워즈 퍼포머 유력',
        date: '2026.02.15',
        summary: '외신들이 주목하는 글로벌 아티스트로 급부상하며 주요 시상식 초청이 이어지고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=스트레이키즈+그래미'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    members: [
      { name: '방찬', role: '리더/프로듀서', birth: '1997.10.03', description: '팀의 핵심 프로듀서이자 든든한 정신적 지주.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '필릭스', role: '래퍼', birth: '2000.09.15', description: '매력적인 동굴 저음과 요정 같은 외모의 반전 매력.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' }
    ]
  },
  {
    id: 'aespa',
    name: '에스파',
    nameEn: 'aespa',
    company: 'SM',
    debut: '2020.11.17',
    accentColor: '#9d00ff',
    description: '메타버스 세계관을 기반으로 한 "쇠 맛" 사운드의 선두주자 걸그룹입니다.',
    wiki: '에스파(aespa)는 SM 소속의 4인조 걸그룹이다. "Avatar X Experience"를 의미하며 가상 세계의 아바타와 함께 활동한다.',
    gossip: [
      '"Supernova"가 한국 음원 사이트에서 역대 최장기간 1위를 기록하며 전국적인 신드롬을 일으켰습니다.',
      '멤버 카리나의 비현실적인 비주얼은 연일 온라인 커뮤니티의 뜨거운 화제입니다.',
      '윈터는 청순한 외모와 달리 성격이 털털하고 대장부 같아 "김윈터"라는 별명이 있습니다.'
    ],
    news: [
      {
        title: '에스파, 첫 정규 앨범 200만 장 판매 돌파',
        date: '2026.03.02',
        summary: '음원 차트 점령에 이어 음반 판매량에서도 압도적인 성적을 거두고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=에스파+판매량'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=800&q=80',
    members: [
      { name: '카리나', role: '리더', birth: '2000.04.11', description: 'AI보다 더 AI 같은 압도적 비주얼 센터.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '윈터', role: '메인보컬', birth: '2001.01.01', description: '청순한 외모에 숨겨진 파워풀한 고음 보컬.', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80' }
    ]
  },
  {
    id: 'lesserafim',
    name: '르세라핌',
    nameEn: 'LE SSERAFIM',
    company: 'Source Music',
    debut: '2022.05.02',
    accentColor: '#ffffff',
    description: '"I\'M FEARLESS"를 모토로 한 당당한 매력의 5인조 그룹입니다.',
    wiki: '르세라핌(LE SSERAFIM)은 하이브 산하 쏘스뮤직 소속 걸그룹이다. 팀명은 "IM FEARLESS"의 애너그램으로 세상의 시선에 흔들리지 않고 두려움 없이 나아가겠다는 의미를 담고 있다.',
    gossip: [
      '멤버들이 엄청난 운동량을 소화하여 "근세라핌"이라는 별명을 가지고 있습니다.',
      '최근 코첼라 공연 라이브 논란 이후 피나는 연습을 통해 실력으로 증명해내며 다시 응원을 받고 있습니다.',
      '사쿠라는 일본과 한국을 오가며 세 번의 데뷔를 성공시킨 대단한 경력을 가졌습니다.'
    ],
    news: [
      {
        title: '르세라핌, 미국 빌보드 핫 100 자체 최고 기록',
        date: '2026.02.28',
        summary: '북미 시장에서의 영향력을 점차 확대하며 차세대 글로벌 퀸으로 자리매김 중입니다.',
        url: 'https://search.naver.com/search.naver?query=르세라핌+빌보드'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=800&q=80',
    members: [
      { name: '김채원', role: '리더', birth: '2000.08.01', description: '칼 같은 춤선과 음색이 매력적인 팀의 리더.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '카즈하', role: '보컬', birth: '2003.08.09', description: '전공자인 발레를 접목한 우아한 퍼포먼스가 강점.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' }
    ]
  },
  {
    id: 'babymonster',
    name: '베이비몬스터',
    nameEn: 'BABYMONSTER',
    company: 'YG',
    debut: '2024.04.01',
    accentColor: '#ff0000',
    description: 'YG에서 블랙핑크 이후 7년 만에 런칭한 괴물 신인 걸그룹입니다.',
    wiki: '베이비몬스터(BABYMONSTER)는 YG 엔터테인먼트 소속의 7인조 다국적 걸그룹이다. 어린(BABY) 외모에도 실력은 괴물(MONSTER) 같다는 의미다.',
    gossip: [
      '데뷔 전 서바이벌 프로그램을 통해 이미 탄탄한 실력을 입증받았습니다.',
      '멤버 아현의 복귀곡 "SHEESH"는 강력한 힙합 사운드로 YG의 정체성을 보여주었습니다.',
      '라이브 실력이 너무 뛰어나 "CD를 씹어 먹었다"는 평가가 지배적입니다.'
    ],
    news: [
      {
        title: '베이비몬스터, 유튜브 구독자 1000만 돌파 최단기 기록',
        date: '2026.03.03',
        summary: '글로벌 동영상 플랫폼에서 압도적인 파급력을 보이며 차세대 아이콘으로 부상했습니다.',
        url: 'https://search.naver.com/search.naver?query=베이비몬스터+유튜브'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    members: [
      { name: '아현', role: '보컬/래퍼', birth: '2007.04.11', description: 'YG의 정석 올라운더 멤버로 불립니다.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '치키타', role: '보컬', birth: '2009.02.17', description: '막내지만 압도적인 재능과 스타성을 가진 멤버.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' }
    ]
  },
  {
    id: 'seventeen',
    name: '세븐틴',
    nameEn: 'SEVENTEEN',
    company: 'Pledis',
    debut: '2015.05.26',
    accentColor: '#96a1d1',
    description: '13명 멤버들의 완벽한 칼군무와 예능감을 갖춘 자체 제작 보이그룹의 대명사입니다.',
    wiki: '세븐틴(SEVENTEEN)은 플레디스 소속 13인조 보이그룹이다. 13명의 멤버, 3개의 유닛(보컬, 퍼포먼스, 힙합), 그리고 하나의 팀이 모여 17이 된다는 뜻이다.',
    gossip: [
      '멤버들이 너무 많아 이동할 때 버스를 두 대 나눠 타는 것으로 유명합니다.',
      '자체 예능 "고잉 세븐틴"은 팬이 아닌 대중들도 챙겨볼 정도로 한국에서 인기가 많습니다.',
      '최근 유네스코 친선 대사로 임명되며 청년 세대의 목소리를 대변하고 있습니다.'
    ],
    news: [
      {
        title: '세븐틴, 단일 앨범 판매량 600만 장 기네스 등재',
        date: '2026.02.12',
        summary: 'K-POP 역대 최고 판매량을 기록하며 역사를 다시 쓰고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=세븐틴+판매량'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    members: [
      { name: '우지', role: '보컬/프로듀서', birth: '1996.11.22', description: '세븐틴의 모든 곡을 만드는 천재 프로듀서.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '민규', role: '래퍼', birth: '1997.04.06', description: '압도적인 피지컬과 비주얼로 전 세계 여심을 저격.', imageUrl: 'https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80' }
    ]
  },
  {
    id: 'riize',
    name: '라이즈',
    nameEn: 'RIIZE',
    company: 'SM',
    debut: '2023.09.04',
    accentColor: '#fff01f',
    description: '"이모셔널 팝"을 추구하는 SM의 차세대 보이그룹으로, 친근하고 힙한 매력을 보여줍니다.',
    wiki: '라이즈(RIIZE)는 SM 엔터테인먼트 소속의 7인조 보이그룹이다. "Rise"와 "Realize"를 합쳐 함께 성장하고 꿈을 실현해 나가는 팀이라는 뜻이다.',
    gossip: [
      '"Get A Guitar"와 "Love 119"가 한국 대중들 사이에서 엄청난 인기를 끌며 보이그룹 음원 강자로 떠올랐습니다.',
      '멤버 원빈의 비주얼은 데뷔 직후 한국 온라인 커뮤니티를 마비시킬 정도로 큰 충격을 주었습니다.',
      '앤톤은 유명 작곡가 윤상의 아들로 데뷔 전부터 큰 관심을 받았습니다.'
    ],
    news: [
      {
        title: '라이즈, 루이비통 2026 SS 패션쇼 참석 화제',
        date: '2026.03.04',
        summary: '글로벌 명품 브랜드의 러브콜을 받으며 패션 아이콘으로 급부상 중입니다.',
        url: 'https://search.naver.com/search.naver?query=라이즈+루이비통'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=800&q=80',
    members: [
      { name: '원빈', role: '센터/댄서', birth: '2002.03.02', description: '긴 머리가 찰떡인 SM의 새로운 비주얼 계보.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '앤톤', role: '보컬', birth: '2004.03.21', description: '수영 선수 출신의 탄탄한 피지컬과 음악적 재능.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' }
    ]
  },
  {
    id: 'illit',
    name: '아일릿',
    nameEn: 'ILLIT',
    company: 'Belift Lab',
    debut: '2024.03.25',
    accentColor: '#39ff14',
    description: '"Magnetic"으로 전 세계를 사로잡은 엉뚱발랄하고 사랑스러운 매력의 5인조 그룹입니다.',
    wiki: '아일릿(ILLIT)은 하이브 산하 빌리프랩 소속 걸그룹이다. "I WILL IT"의 줄임말로 무엇이든 될 수 있고 무엇이 될지 기대된다는 의미다.',
    gossip: [
      '데뷔곡 "Magnetic"이 한국 아이돌 최초로 빌보드 핫 100에 진입하는 기염을 토했습니다.',
      '멤버들이 일상적인 모습(쌩얼 등)을 자주 공개하여 친근한 옆집 동생 같은 매력을 줍니다.',
      '몽환적이면서도 중독성 있는 사운드로 틱톡 등 숏폼 플랫폼을 점령했습니다.'
    ],
    news: [
      {
        title: '아일릿, 신규 브랜드 광고 모델 잇따라 발탁',
        date: '2026.02.22',
        summary: '데뷔와 동시에 광고계의 블루칩으로 떠오르며 막강한 스타성을 증명했습니다.',
        url: 'https://search.naver.com/search.naver?query=아일릿+광고'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    members: [
      { name: '원희', role: '보컬', birth: '2007.06.26', description: '서바이벌 1위 출신의 국민 여동생 유망주.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '민주', role: '보컬', birth: '2004.05.11', description: '차분한 매력과 청순한 비주얼이 특징.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' }
    ]
  },
  {
    id: 'tws',
    name: '투어스',
    nameEn: 'TWS',
    company: 'Pledis',
    debut: '2024.01.22',
    accentColor: '#00ffff',
    description: '세븐틴의 동생 그룹으로, 청량하고 맑은 에너지를 선사하는 6인조 보이그룹입니다.',
    wiki: '투어스(TWS)는 플레디스 엔터테인먼트 소속 보이그룹이다. "Twenty Four Seven With Us"의 줄임말로 모든 순간을 함께하겠다는 뜻이다.',
    gossip: [
      '데뷔곡 "첫 만남은 계획대로 되지 않아"가 한국 음원 차트를 올킬하며 대중적인 인기를 얻었습니다.',
      '멤버들이 교복 스타일의 의상을 자주 입어 첫사랑 기억 조작단이라는 별명이 있습니다.',
      '신인답지 않은 완벽한 라이브 실력으로 화제가 되었습니다.'
    ],
    news: [
      {
        title: '투어스, 2026 신인상 싹쓸이 예고',
        date: '2026.02.18',
        summary: '강력한 음원 파워를 바탕으로 각종 시상식의 주인공으로 거론되고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=투어스+신인상'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    members: [
      { name: '신유', role: '리더', birth: '2003.11.07', description: '모델 같은 피지컬과 부드러운 카리스마의 리더.', imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80' },
      { name: '도훈', role: '보컬', birth: '2005.01.30', description: '청량함 그 자체인 비주얼과 매력적인 보이스.', imageUrl: 'https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80' }
    ]
  }
];
