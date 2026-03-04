export interface Member {
  name: string;
  role: string;
  birth: string;
  mbti: string;
  zodiac: string;
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
    description: 'Y2K 신드롬의 주역, 전 세계가 사랑하는 자연스러운 매력의 5인조입니다.',
    wiki: '뉴진스(NewJeans)는 청바지처럼 매일 찾게 되는 아이콘을 지향합니다. 민희진 프로듀서의 진두지휘 아래 정형화된 아이돌의 틀을 깨는 행보를 보여주고 있습니다.',
    gossip: [
      '데뷔 앨범 "New Jeans"는 한국 아이돌 데뷔 앨범 중 역대 최고 초동 판매량을 기록했습니다.',
      '멤버 전원이 하이엔드 브랜드(샤넬, 구찌 등)의 앰버서더로 활동 중입니다.'
    ],
    news: [
      {
        title: '뉴진스, 한국 최연소 월드투어 개최 확정',
        date: '2026.03.01',
        summary: '전 세계 버니즈들과 만나는 첫 단독 투어로 기대를 모으고 있습니다.',
        url: 'https://search.naver.com/search.naver?query=뉴진스+월드투어'
      }
    ],
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0007560424_001_20240524103505456.jpg',
    members: [
      { name: '민지', role: '리더', birth: '2004.05.07', mbti: 'ESTJ', zodiac: '황소자리', description: '팀의 든든한 리더. 고전적인 미인형으로 "국민 첫사랑" 이미지를 가졌으며 책임감이 강한 성격입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F001%2F2024%2F01%2F16%2FAKR20240116045200005_01_i_P4.jpg' },
      { name: '하니', role: '보컬', birth: '2004.10.06', mbti: 'INFP', zodiac: '천칭자리', description: '베트남계 호주인. 독보적인 음색과 리듬감을 가졌으며, 귀여운 외모와 달리 무대 위 카리스마가 대단합니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F21%2F0007552424_001_20240521101505456.jpg' },
      { name: '다니엘', role: '보컬', birth: '2005.04.11', mbti: 'ENFP', zodiac: '양자리', description: '햇살 같은 에너지를 가진 비타민 같은 멤버. 디즈니 공주 같은 비주얼과 밝은 성격으로 유명합니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg' },
      { name: '해린', role: '댄서', birth: '2006.05.15', mbti: 'ISTP', zodiac: '황소자리', description: '고양이 상의 대표 주자. 엉뚱하고 조용한 매력이 있으며 무대에서는 폭발적인 댄스 실력을 보여줍니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F311%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg' },
      { name: '혜인', role: '보컬', birth: '2008.04.21', mbti: 'INFP', zodiac: '황소자리', description: '팀의 막내지만 모델 같은 피지컬을 자랑합니다. 시크한 마스크와 성숙한 목소리가 매력 포인트입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F01%2F16%2F0012321424_001_20240116101502456.jpg' }
    ]
  },
  {
    id: 'ive',
    name: '아이브',
    nameEn: 'IVE',
    company: 'Starship',
    debut: '2021.12.01',
    accentColor: '#ff00ff',
    description: '"자기애"를 컨셉으로 한 완성형 아이돌. 4세대 걸그룹의 중심입니다.',
    wiki: '아이브(IVE)는 장원영, 안유진 등 강력한 스타성을 가진 멤버들이 포진해 있습니다. 세련된 음악과 당당한 컨셉으로 모든 활동곡이 차트 1위를 차지했습니다.',
    gossip: [
      '멤버들의 키가 모두 큰 편이라 "장신 그룹"으로도 불립니다.',
      '장원영의 초긍정 사고방식인 "럭키비키"가 한국 전역에 트렌드로 자리 잡았습니다.'
    ],
    news: [
      {
        title: '아이브, 파리 패션위크 점령',
        date: '2026.02.28',
        summary: '장원영과 안유진이 각 브랜드 앰버서더로 참석하여 뜨거운 화제를 모았습니다.',
        url: 'https://search.naver.com/search.naver?query=아이브+패션위크'
      }
    ],
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F04%2F29%2F0007511234_001_20240429102005456.jpg',
    members: [
      { name: '안유진', role: '리더', birth: '2003.09.01', mbti: 'ISTP', zodiac: '처녀자리', description: '카리스마 리더와 예능감을 모두 갖춘 육각형 멤버. 믿고 보는 라이브 실력을 자랑합니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg' },
      { name: '가을', role: '래퍼', birth: '2002.09.24', mbti: 'ISTJ', zodiac: '천칭자리', description: '팀의 맏내(맏이+막내 같은 매력). 차분한 분위기와 날카로운 랩 딜리버리가 특징입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg' },
      { name: '레이', role: '래퍼', birth: '2004.02.03', mbti: 'INFJ', zodiac: '물병자리', description: '일본인 멤버지만 한국어를 능숙하게 구사합니다. 독특한 캐릭터와 힙한 랩 스타일을 보유했습니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg' },
      { name: '장원영', role: '보컬', birth: '2004.08.31', mbti: 'ENFP', zodiac: '처녀자리', description: 'K-POP의 워너비 아이콘. 타고난 스타성과 프로페셔널한 마인드셋으로 항상 주목받습니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F16%2F0007542424_001_20240516100505456.jpg' },
      { name: '리즈', role: '보컬', birth: '2004.11.21', mbti: 'ISFP', zodiac: '전갈자리', description: '독보적인 보컬 실력을 갖춘 메인 보컬급 멤버. 귀여운 보조개와 맑은 음색이 매력입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg' },
      { name: '이서', role: '보컬', birth: '2007.02.21', mbti: 'ENFP', zodiac: '물병자리', description: '팀의 활기찬 막내. 나이답지 않은 성숙한 표정 연기와 에너지를 무대에서 보여줍니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg' }
    ]
  },
  {
    id: 'lesserafim',
    name: '르세라핌',
    nameEn: 'LE SSERAFIM',
    company: 'Source Music',
    debut: '2022.05.02',
    accentColor: '#ffffff',
    description: '"두려움 없음"을 상징하는 당당하고 에너지 넘치는 5인조입니다.',
    wiki: '르세라핌은 전직 피겨 스케이팅 선수, 아역 모델 등 다양한 배경을 가진 멤버들이 모여 독보적인 건강미와 퍼포먼스를 보여줍니다.',
    gossip: [
      '멤버들의 근육량이 엄청나 "근세라핌"이라는 애칭으로 불리기도 합니다.',
      '데뷔 다큐멘터리를 통해 멤버들의 치열한 연습 과정을 공개해 큰 감동을 주었습니다.'
    ],
    news: [
      {
        title: '르세라핌, 미국 코첼라 무대에서 압도적 찬사',
        date: '2026.03.02',
        summary: '파워풀한 퍼포먼스로 현지 관객들을 열광시키며 글로벌 인기를 증명했습니다.',
        url: 'https://search.naver.com/search.naver?query=르세라핌+코첼라'
      }
    ],
    imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F02%2F19%2F0007359424_001_20240219101005456.jpg',
    members: [
      { name: '사쿠라', role: '보컬', birth: '1998.03.19', mbti: 'INTP', zodiac: '물고기자리', description: '총 세 번의 데뷔를 성공시킨 대단한 경력의 멤버. 꾸준함의 대명사이자 지적인 매력을 가졌습니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg' },
      { name: '김채원', role: '리더', birth: '2000.08.01', mbti: 'ISTP', zodiac: '사자자리', description: '칼 같은 춤선과 청량한 음색의 소유자. 팀의 중심을 잡아주는 카리스마 넘치는 리더입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg' },
      { name: '허윤진', role: '보컬', birth: '2001.10.08', mbti: 'INFJ', zodiac: '천칭자리', description: '미국 출신으로 뛰어난 가창력과 작사/작곡 능력을 갖춘 올라운더 아티스트입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg' },
      { name: '카즈하', role: '댄서', birth: '2003.08.09', mbti: 'ENFP', zodiac: '사자자리', description: '발레 전공자 출신의 우아한 퍼포먼스가 강점. 청순한 외모와 달리 운동을 매우 즐기는 반전 매력이 있습니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg' },
      { name: '홍은채', role: '보컬', birth: '2006.11.10', mbti: 'ISFP', zodiac: '전갈자리', description: '팀의 사랑스러운 막내 "은채은행장". 밝은 에너지와 탁월한 진행 능력을 보여주는 멤버입니다.', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg' }
    ]
  }
  // ... 세븐틴, 스트레이 키즈 등 다른 그룹들도 위와 같이 전 멤버 추가 예정
];
