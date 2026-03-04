export interface Member {
  id: string;
  name: { ko: string; en: string };
  role: { ko: string; en: string };
  birth: string;
  mbti: string;
  zodiac: { ko: string; en: string };
  height: string;
  bloodType: string;
  description: { ko: string; en: string };
  imageUrl: string;
}

export interface News {
  title: { ko: string; en: string };
  date: string;
  summary: { ko: string; en: string };
  url: string;
}

export interface KpopGroup {
  id: string;
  name: { ko: string; en: string };
  company: string;
  debut: string;
  fandom: { ko: string; en: string };
  accentColor: string;
  imageUrl: string;
  wiki: { ko: string; en: string };
  description: { ko: string; en: string };
  gossip: { ko: string[]; en: string[] };
  news: News[];
  members: Member[];
}

export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: "newjeans",
    name: { ko: "뉴진스", en: "NewJeans" },
    company: "ADOR",
    debut: "2022.07.22",
    fandom: { ko: "버니즈 (Bunnies)", en: "Bunnies" },
    accentColor: "#00ffff",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0007560424_001_20240524103505456.jpg",
    wiki: {
      ko: "뉴진스(NewJeans)는 청바지처럼 매일 찾게 되는 아이콘을 지향합니다. 정형화된 아이돌의 틀을 깨는 행보를 보여주고 있습니다.",
      en: "NewJeans aims to be an icon you seek everyday like jeans. They are breaking the mold of standardized idols."
    },
    description: {
      ko: "Y2K 신드롬의 주역, 전 세계가 사랑하는 자연스러운 매력의 5인조입니다.",
      en: "The leaders of the Y2K syndrome, a 5-member group loved worldwide for their natural charm."
    },
    gossip: {
      ko: [
        "데뷔 앨범 'New Jeans'는 역대 최고 초동 판매량을 기록했습니다.",
        "멤버 전원이 하이엔드 브랜드의 앰버서더로 활동 중입니다."
      ],
      en: [
        "Their debut album recorded the highest first-week sales for a K-pop debut.",
        "All members are active as ambassadors for high-end brands."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 한국 최연소 월드투어 개최 확정", en: "NewJeans Confirms Youngest World Tour in Korea" },
        date: "2026.03.01",
        summary: { ko: "전 세계 버니즈들과 만나는 첫 단독 투어로 기대를 모으고 있습니다.", en: "Anticipation is high for their first solo tour meeting Bunnies worldwide." },
        url: "https://search.naver.com/search.naver?query=뉴진스+월드투어"
      }
    ],
    members: [
      {
        id: "minji",
        name: { ko: "민지", en: "Minji" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2004.05.07",
        mbti: "ESTJ",
        zodiac: { ko: "황소자리", en: "Taurus" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "고전적인 미인형으로 '국민 첫사랑' 이미지를 가졌으며 책임감이 강한 성격입니다.", en: "A classic beauty with a 'Nation's First Love' image and a strong sense of responsibility." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F001%2F2024%2F01%2F16%2FAKR20240116045200005_01_i_P4.jpg"
      },
      {
        id: "hanni",
        name: { ko: "하니", en: "Hanni" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2004.10.06",
        mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "161.7cm",
        bloodType: "O",
        description: { ko: "베트남계 호주인. 독보적인 음색과 리듬감을 가졌으며, 무대 위 카리스마가 대단합니다.", en: "Vietnamese-Australian. Has a unique voice and rhythm, showing immense charisma on stage." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F21%2F0007552424_001_20240521101505456.jpg"
      },
      {
        id: "danielle",
        name: { ko: "다니엘", en: "Danielle" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2005.04.11",
        mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "165cm",
        bloodType: "AB",
        description: { ko: "햇살 같은 에너지를 가진 비타민 같은 멤버. 디즈니 공주 같은 비주얼로 유명합니다.", en: "A vitamin-like member with sunny energy. Famous for her Disney princess visuals." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg"
      },
      {
        id: "haerin",
        name: { ko: "해린", en: "Haerin" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2006.05.15",
        mbti: "ISTP",
        zodiac: { ko: "황소자리", en: "Taurus" },
        height: "164.5cm",
        bloodType: "B",
        description: { ko: "고양이 상의 대표 주자. 엉뚱하고 조용한 매력이 있으며 무대에서는 폭발적인 댄스 실력을 보여줍니다.", en: "The representative of cat-like features. Has a quirky, quiet charm but explosive dance skills." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F311%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg"
      },
      {
        id: "hyein",
        name: { ko: "혜인", en: "Hyein" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2008.04.21",
        mbti: "INFP",
        zodiac: { ko: "황소자리", en: "Taurus" },
        height: "170cm",
        bloodType: "O",
        description: { ko: "팀의 막내지만 모델 같은 피지컬을 자랑합니다. 시크한 마스크와 성숙한 목소리가 매력 포인트입니다.", en: "The youngest but boasts model-like proportions. Her chic mask and mature voice are charming." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F01%2F16%2F0012321424_001_20240116101502456.jpg"
      }
    ]
  },
  {
    id: "ive",
    name: { ko: "아이브", en: "IVE" },
    company: "Starship",
    debut: "2021.12.01",
    fandom: { ko: "다이브 (DIVE)", en: "DIVE" },
    accentColor: "#ff00ff",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F04%2F29%2F0007511234_001_20240429102005456.jpg",
    wiki: {
      ko: "아이브(IVE)는 세련된 음악과 당당한 컨셉으로 모든 활동곡이 차트 1위를 차지했습니다.",
      en: "IVE topped charts with all title tracks through sophisticated music and confident concepts."
    },
    description: {
      ko: "'자기애'를 컨셉으로 한 완성형 아이돌. 4세대 걸그룹의 중심입니다.",
      en: "A complete idol group with a concept of 'Self-Love'. The center of 4th-gen girl groups."
    },
    gossip: {
      ko: [
        "멤버들의 키가 모두 큰 편이라 '장신 그룹'으로도 불립니다.",
        "장원영의 초긍정 사고방식인 '럭키비키'가 트렌드로 자리 잡았습니다."
      ],
      en: [
        "Often called the 'tall group' due to all members being tall.",
        "Jang Wonyoung's ultra-positive 'Lucky Vicky' mindset became a trend."
      ]
    },
    news: [
      {
        title: { ko: "아이브, 파리 패션위크 점령", en: "IVE Takes Over Paris Fashion Week" },
        date: "2026.02.28",
        summary: { ko: "장원영과 안유진이 각 브랜드 앰버서더로 참석하여 뜨거운 화제를 모았습니다.", en: "Jang Wonyoung and An Yujin garnered huge attention attending as brand ambassadors." },
        url: "https://search.naver.com/search.naver?query=아이브+패션위크"
      }
    ],
    members: [
      {
        id: "anyujin",
        name: { ko: "안유진", en: "An Yujin" },
        role: { ko: "리더/보컬", en: "Leader/Vocalist" },
        birth: "2003.09.01",
        mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm",
        bloodType: "A",
        description: { ko: "카리스마 리더와 예능감을 모두 갖춘 육각형 멤버.", en: "An all-rounder with charismatic leadership and variety show skills." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        id: "gaeul",
        name: { ko: "가을", en: "Gaeul" },
        role: { ko: "래퍼", en: "Rapper" },
        birth: "2002.09.24",
        mbti: "ISTJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "164cm",
        bloodType: "B",
        description: { ko: "팀의 맏내. 차분한 분위기와 날카로운 랩 딜리버리가 특징입니다.", en: "The oldest but acts like the youngest. Features a calm vibe and sharp rap delivery." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg"
      },
      {
        id: "rei",
        name: { ko: "레이", en: "Rei" },
        role: { ko: "래퍼", en: "Rapper" },
        birth: "2004.02.03",
        mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "일본인 멤버지만 한국어를 능숙하게 구사합니다. 독특한 캐릭터와 힙한 랩 스타일을 보유했습니다.", en: "Japanese member fluent in Korean. Possesses a unique character and trendy rap style." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        id: "jangwonyoung",
        name: { ko: "장원영", en: "Jang Wonyoung" },
        role: { ko: "보컬", en: "Vocalist" },
        birth: "2004.08.31",
        mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm",
        bloodType: "O",
        description: { ko: "K-POP의 워너비 아이콘. 타고난 스타성과 프로페셔널한 마인드셋으로 항상 주목받습니다.", en: "The wannabe icon of K-POP. Always catches attention with innate star power." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F16%2F0007542424_001_20240516100505456.jpg"
      },
      {
        id: "liz",
        name: { ko: "리즈", en: "Liz" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2004.11.21",
        mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "170cm",
        bloodType: "AB",
        description: { ko: "독보적인 보컬 실력을 갖춘 메인 보컬급 멤버. 귀여운 보조개와 맑은 음색이 매력입니다.", en: "Main vocal-tier member with unmatched vocal skills. Cute dimples and clear voice are her charms." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        id: "leeseo",
        name: { ko: "이서", en: "Leeseo" },
        role: { ko: "보컬", en: "Vocalist" },
        birth: "2007.02.21",
        mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "166cm",
        bloodType: "O",
        description: { ko: "팀의 활기찬 막내. 나이답지 않은 성숙한 표정 연기와 에너지를 무대에서 보여줍니다.", en: "The energetic youngest. Shows mature facial expressions and energy on stage." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg"
      }
    ]
  },
  {
    id: "aespa",
    name: { ko: "에스파", en: "aespa" },
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이 (MY)", en: "MY" },
    accentColor: "#9d00ff",
    imageUrl: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=800&q=80",
    wiki: {
      ko: "에스파(aespa)는 'Avatar X Experience'를 의미하며 가상 세계의 아바타와 함께 활동합니다. 독보적인 세계관을 가졌습니다.",
      en: "aespa means 'Avatar X Experience', promoting alongside virtual avatars. They have a unique universe concept."
    },
    description: {
      ko: "메타버스 세계관을 기반으로 한 '쇠 맛' 사운드의 선두주자 걸그룹입니다.",
      en: "The leading girl group of 'iron taste' sound based on a metaverse worldview."
    },
    gossip: {
      ko: [
        "'Supernova'가 역대 최장기간 1위를 기록했습니다.",
        "카리나의 비현실적인 비주얼이 늘 화제입니다."
      ],
      en: [
        "'Supernova' set a record for the longest #1.",
        "Karina's surreal visuals are always a hot topic."
      ]
    },
    news: [
      {
        title: { ko: "에스파, 첫 정규 앨범 200만 장 돌파", en: "aespa Surpasses 2 Million Sales for First Full Album" },
        date: "2026.03.02",
        summary: { ko: "음원 차트 점령에 이어 음반 판매량에서도 압도적인 성적을 거두고 있습니다.", en: "Following chart domination, they are achieving overwhelming results in physical sales." },
        url: "https://search.naver.com/search.naver?query=에스파"
      }
    ],
    members: [
      {
        id: "karina",
        name: { ko: "카리나", en: "Karina" },
        role: { ko: "리더/메인댄서", en: "Leader/Main Dancer" },
        birth: "2000.04.11",
        mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "168cm",
        bloodType: "B",
        description: { ko: "AI보다 더 AI 같은 압도적 비주얼 센터이자 다재다능한 리더.", en: "The overwhelming visual center and versatile leader, looking more like AI than actual AI." },
        imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        id: "giselle",
        name: { ko: "지젤", en: "Giselle" },
        role: { ko: "메인래퍼", en: "Main Rapper" },
        birth: "2000.10.30",
        mbti: "INFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "164cm",
        bloodType: "O",
        description: { ko: "매력적인 음색과 쫀득한 랩핑을 자랑하는 한일 혼혈 멤버.", en: "A Korean-Japanese member boasting attractive vocals and catchy rapping." },
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      },
      {
        id: "winter",
        name: { ko: "윈터", en: "Winter" },
        role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" },
        birth: "2001.01.01",
        mbti: "ISTP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "164cm",
        bloodType: "A",
        description: { ko: "청순한 외모에 숨겨진 파워풀한 고음과 날카로운 춤선.", en: "Powerful high notes and sharp dance lines hidden behind an innocent appearance." },
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
      },
      {
        id: "ningning",
        name: { ko: "닝닝", en: "Ningning" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2002.10.23",
        mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "161cm",
        bloodType: "O",
        description: { ko: "시원하고 풍부한 성량을 가진 중국인 메인보컬. 통통 튀는 성격의 소유자.", en: "Chinese main vocalist with refreshing and rich volume. Has a bubbly personality." },
        imageUrl: "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  },
  {
    id: "straykids",
    name: { ko: "스트레이 키즈", en: "Stray Kids" },
    company: "JYP Entertainment",
    debut: "2018.03.25",
    fandom: { ko: "스테이 (STAY)", en: "STAY" },
    accentColor: "#ff5e00",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    wiki: {
      ko: "스트레이 키즈(Stray Kids)는 JYP 소속 8인조 보이그룹이다. 자체 프로듀싱 능력을 기반으로 독창적인 '마라맛' 장르를 개척했다.",
      en: "Stray Kids is an 8-member boy group under JYP. They pioneered a unique 'spicy' genre based on self-producing skills."
    },
    description: {
      ko: "멤버들이 직접 곡을 만드는 자체 제작 보이그룹으로, 강렬하고 폭발적인 퍼포먼스가 특징입니다.",
      en: "A self-producing boy group known for intense and explosive performances."
    },
    gossip: {
      ko: [
        "빌보드 200 차트 1위를 다수 기록하며 해외에서 엄청난 팬덤을 자랑합니다.",
        "자체 프로듀싱 팀 '3RACHA'가 팀의 음악적 정체성을 구축합니다."
      ],
      en: [
        "Boasts a massive overseas fandom with multiple #1s on Billboard 200.",
        "Self-producing team '3RACHA' builds the group's musical identity."
      ]
    },
    news: [
      {
        title: { ko: "스트레이 키즈, 대규모 월드투어 성료", en: "Stray Kids Successfully Completes Massive World Tour" },
        date: "2026.01.15",
        summary: { ko: "전 세계 스타디움을 매진시키며 글로벌 탑티어 아티스트임을 증명했습니다.", en: "Proved they are global top-tier artists by selling out stadiums worldwide." },
        url: "https://search.naver.com/search.naver?query=스트레이키즈"
      }
    ],
    members: [
      {
        id: "bangchan",
        name: { ko: "방찬", en: "Bang Chan" },
        role: { ko: "리더/프로듀서", en: "Leader/Producer" },
        birth: "1997.10.03",
        mbti: "ENFJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "171cm",
        bloodType: "O",
        description: { ko: "팀의 핵심 프로듀서이자 든든한 정신적 지주인 호주 출신 멤버.", en: "The core producer and solid mental pillar from Australia." },
        imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        id: "leeknow",
        name: { ko: "리노", en: "Lee Know" },
        role: { ko: "댄서/보컬", en: "Dancer/Vocalist" },
        birth: "1998.10.25",
        mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "172cm",
        bloodType: "O",
        description: { ko: "완벽한 조각 미남 비주얼과 대비되는 엉뚱한 '4차원' 성격의 소유자. 춤의 정석을 보여줍니다.", en: "Possesses a quirky 4D personality contrasting his sculpted handsome visuals. Shows textbook dancing." },
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      },
      {
        id: "changbin",
        name: { ko: "창빈", en: "Changbin" },
        role: { ko: "메인래퍼/프로듀서", en: "Main Rapper/Producer" },
        birth: "1999.08.11",
        mbti: "ESFP",
        zodiac: { ko: "사자자리", en: "Leo" },
        height: "167cm",
        bloodType: "O",
        description: { ko: "압도적인 성량과 발성을 자랑하는 K-pop 탑티어 래퍼. 쓰리라차(3RACHA) 멤버.", en: "A top-tier K-pop rapper boasting overwhelming volume and vocalization. 3RACHA member." },
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
      },
      {
        id: "hyunjin",
        name: { ko: "현진", en: "Hyunjin" },
        role: { ko: "메인댄서", en: "Main Dancer" },
        birth: "2000.03.20",
        mbti: "ESTP",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        height: "179cm",
        bloodType: "B",
        description: { ko: "예술적인 춤선과 장발이 찰떡인 무대 장인 비주얼 멤버.", en: "A stage master visual member with artistic dance lines, perfectly pulling off long hair." },
        imageUrl: "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      },
      {
        id: "han",
        name: { ko: "한", en: "Han" },
        role: { ko: "래퍼/보컬/프로듀서", en: "Rapper/Vocalist/Producer" },
        birth: "2000.09.14",
        mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "169cm",
        bloodType: "B",
        description: { ko: "랩, 보컬, 프로듀싱 모두 완벽한 올라운더. 뛰어난 예능감도 가졌습니다.", en: "A perfect all-rounder in rap, vocals, and producing. Also has great variety skills." },
        imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        id: "felix",
        name: { ko: "필릭스", en: "Felix" },
        role: { ko: "래퍼/댄서", en: "Rapper/Dancer" },
        birth: "2000.09.15",
        mbti: "ESFJ",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "171cm",
        bloodType: "AB",
        description: { ko: "매력적인 동굴 저음과 요정 같은 외모의 반전 매력을 가진 호주 출신 멤버.", en: "Unexpected charm of a deep cave-like bass voice and fairy-like visuals from Australia." },
        imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      },
      {
        id: "seungmin",
        name: { ko: "승민", en: "Seungmin" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2000.09.22",
        mbti: "ISFJ",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "175cm",
        bloodType: "A",
        description: { ko: "단단하고 포근한 음색으로 팀의 중심을 잡아주는 메인 보컬.", en: "Main vocalist holding the team's center with a solid and warm voice." },
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80"
      },
      {
        id: "in",
        name: { ko: "아이엔", en: "I.N" },
        role: { ko: "보컬", en: "Vocalist" },
        birth: "2001.02.08",
        mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "172cm",
        bloodType: "A",
        description: { ko: "독특한 음색을 가진 팀의 막내. 귀여운 사막여우 상으로 형들의 사랑을 독차지합니다.", en: "The youngest with a unique voice. Monopolizes older members' love with a cute fennec fox look." },
        imageUrl: "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM" },
    company: "Source Music",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#ffffff",
    imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F02%2F19%2F0007359424_001_20240219101005456.jpg",
    wiki: {
      ko: "르세라핌은 'IM FEARLESS'를 애너그램한 이름으로, 세상의 시선에 흔들리지 않고 두려움 없이 앞으로 나아가겠다는 뜻입니다.",
      en: "LE SSERAFIM is an anagram of 'IM FEARLESS', meaning they will move forward without fear of the world's gaze."
    },
    description: { ko: "'두려움 없음'을 상징하는 당당하고 에너지 넘치는 5인조입니다.", en: "A confident and energetic 5-member group symbolizing 'Fearlessness'." },
    gossip: { ko: ["멤버들의 근육량이 엄청나 '근세라핌'이라는 애칭으로 불리기도 합니다."], en: ["Nicknamed 'Muscle-sserafim' due to the members' immense muscle mass."] },
    news: [
      { title: { ko: "르세라핌, 글로벌 페스티벌 무대 압도", en: "LE SSERAFIM Dominates Global Festival Stage" }, date: "2026.03.02", summary: { ko: "파워풀한 퍼포먼스로 현지 관객들을 열광시켰습니다.", en: "Thrilled local audiences with powerful performances." }, url: "https://search.naver.com/" }
    ],
    members: [
      {
        id: "sakura", name: { ko: "사쿠라", en: "Sakura" }, role: { ko: "보컬", en: "Vocalist" },
        birth: "1998.03.19", mbti: "INTP", zodiac: { ko: "물고기자리", en: "Pisces" }, height: "163cm", bloodType: "A",
        description: { ko: "세 번의 데뷔를 성공시킨 대단한 경력의 멤버. 지적인 매력을 가졌습니다.", en: "A member with an incredible career of three debuts. Has intellectual charm." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg"
      },
      {
        id: "kimchaewon", name: { ko: "김채원", en: "Kim Chaewon" }, role: { ko: "리더/보컬", en: "Leader/Vocalist" },
        birth: "2000.08.01", mbti: "ISTP", zodiac: { ko: "사자자리", en: "Leo" }, height: "163cm", bloodType: "B",
        description: { ko: "칼 같은 춤선과 청량한 음색의 소유자. 카리스마 넘치는 리더입니다.", en: "Possesses sharp dance lines and a refreshing voice. Charismatic leader." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg"
      },
      {
        id: "huhyunjin", name: { ko: "허윤진", en: "Huh Yunjin" }, role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2001.10.08", mbti: "INFJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "172cm", bloodType: "B",
        description: { ko: "미국 출신으로 뛰어난 가창력과 자작곡 능력을 갖춘 핫걸.", en: "From the US, a hot girl with excellent vocal and songwriting skills." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg"
      },
      {
        id: "kazuha", name: { ko: "카즈하", en: "Kazuha" }, role: { ko: "래퍼/댄서", en: "Rapper/Dancer" },
        birth: "2003.08.09", mbti: "ENFP", zodiac: { ko: "사자자리", en: "Leo" }, height: "170cm", bloodType: "Unknown",
        description: { ko: "발레 전공자 출신의 우아한 퍼포먼스. 청순한 외모와 달리 운동광입니다.", en: "Elegant performance from ballet background. A workout fanatic contrary to innocent looks." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        id: "hongeunchae", name: { ko: "홍은채", en: "Hong Eunchae" }, role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2006.11.10", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "170cm", bloodType: "Unknown",
        description: { ko: "팀의 사랑스러운 막내 '만채'. 밝은 에너지와 당당함을 가졌습니다.", en: "The lovely youngest. Has bright energy and confidence." },
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg"
      }
    ]
  }
];