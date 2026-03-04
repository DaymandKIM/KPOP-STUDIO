export interface Member {
  id: string;
  name: { ko: string; en: string };
  role: { ko: string; en: string };
  birth: string;
  mbti: string;
  zodiac: { ko: string; en: string };
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
    "id": "newjeans",
    "name": {
      "ko": "뉴진스",
      "en": "NewJeans"
    },
    "company": "ADOR",
    "debut": "2022.07.22",
    "accentColor": "#00ffff",
    "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0007560424_001_20240524103505456.jpg",
    "wiki": {
      "ko": "뉴진스(NewJeans)는 청바지처럼 매일 찾게 되는 아이콘을 지향합니다. 민희진 프로듀서의 진두지휘 아래 정형화된 아이돌의 틀을 깨는 행보를 보여주고 있습니다.",
      "en": "NewJeans aims to be an icon you seek everyday like jeans. Under producer Min Hee-jin, they are breaking the mold of standardized idols."
    },
    "description": {
      "ko": "Y2K 신드롬의 주역, 전 세계가 사랑하는 자연스러운 매력의 5인조입니다.",
      "en": "The leaders of the Y2K syndrome, a 5-member group loved worldwide for their natural charm."
    },
    "gossip": {
      "ko": [
        "데뷔 앨범 \"New Jeans\"는 한국 아이돌 데뷔 앨범 중 역대 최고 초동 판매량을 기록했습니다.",
        "멤버 전원이 하이엔드 브랜드(샤넬, 구찌 등)의 앰버서더로 활동 중입니다."
      ],
      "en": [
        "Their debut album recorded the highest first-week sales for a K-pop debut.",
        "All members are active as ambassadors for high-end brands."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "뉴진스, 한국 최연소 월드투어 개최 확정",
          "en": "NewJeans Confirms Youngest World Tour in Korea"
        },
        "date": "2026.03.01",
        "summary": {
          "ko": "전 세계 버니즈들과 만나는 첫 단독 투어로 기대를 모으고 있습니다.",
          "en": "Anticipation is high for their first solo tour meeting Bunnies worldwide."
        },
        "url": "https://search.naver.com/search.naver?query=뉴진스+월드투어"
      }
    ],
    "members": [
      {
        "id": "minji",
        "name": {
          "ko": "민지",
          "en": "Minji"
        },
        "role": {
          "ko": "리더",
          "en": "Leader"
        },
        "birth": "2004.05.07",
        "mbti": "ESTJ",
        "zodiac": {
          "ko": "황소자리",
          "en": "Taurus"
        },
        "description": {
          "ko": "팀의 든든한 리더. 고전적인 미인형으로 \"국민 첫사랑\" 이미지를 가졌으며 책임감이 강한 성격입니다.",
          "en": "The solid leader of the team. A classic beauty with a \"Nation's First Love\" image and a strong sense of responsibility."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F001%2F2024%2F01%2F16%2FAKR20240116045200005_01_i_P4.jpg"
      },
      {
        "id": "hanni",
        "name": {
          "ko": "하니",
          "en": "Hanni"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2004.10.06",
        "mbti": "INFP",
        "zodiac": {
          "ko": "천칭자리",
          "en": "Libra"
        },
        "description": {
          "ko": "베트남계 호주인. 독보적인 음색과 리듬감을 가졌으며, 귀여운 외모와 달리 무대 위 카리스마가 대단합니다.",
          "en": "Vietnamese-Australian. Has a unique voice and rhythm, showing immense charisma on stage contrary to her cute looks."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F21%2F0007552424_001_20240521101505456.jpg"
      },
      {
        "id": "danielle",
        "name": {
          "ko": "다니엘",
          "en": "Danielle"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2005.04.11",
        "mbti": "ENFP",
        "zodiac": {
          "ko": "양자리",
          "en": "Aries"
        },
        "description": {
          "ko": "햇살 같은 에너지를 가진 비타민 같은 멤버. 디즈니 공주 같은 비주얼과 밝은 성격으로 유명합니다.",
          "en": "A vitamin-like member with sunny energy. Famous for her Disney princess visuals and bright personality."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg"
      },
      {
        "id": "haerin",
        "name": {
          "ko": "해린",
          "en": "Haerin"
        },
        "role": {
          "ko": "댄서",
          "en": "Dancer"
        },
        "birth": "2006.05.15",
        "mbti": "ISTP",
        "zodiac": {
          "ko": "황소자리",
          "en": "Taurus"
        },
        "description": {
          "ko": "고양이 상의 대표 주자. 엉뚱하고 조용한 매력이 있으며 무대에서는 폭발적인 댄스 실력을 보여줍니다.",
          "en": "The representative of cat-like features. Has a quirky, quiet charm but shows explosive dance skills on stage."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F311%2F2024%2F05%2F24%2F0001729845_001_20240524104502456.jpg"
      },
      {
        "id": "hyein",
        "name": {
          "ko": "혜인",
          "en": "Hyein"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2008.04.21",
        "mbti": "INFP",
        "zodiac": {
          "ko": "황소자리",
          "en": "Taurus"
        },
        "description": {
          "ko": "팀의 막내지만 모델 같은 피지컬을 자랑합니다. 시크한 마스크와 성숙한 목소리가 매력 포인트입니다.",
          "en": "The youngest but boasts model-like proportions. Her chic mask and mature voice are her charming points."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F01%2F16%2F0012321424_001_20240116101502456.jpg"
      }
    ]
  },
  {
    "id": "ive",
    "name": {
      "ko": "아이브",
      "en": "IVE"
    },
    "company": "Starship",
    "debut": "2021.12.01",
    "accentColor": "#ff00ff",
    "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F04%2F29%2F0007511234_001_20240429102005456.jpg",
    "wiki": {
      "ko": "아이브(IVE)는 장원영, 안유진 등 강력한 스타성을 가진 멤버들이 포진해 있습니다. 세련된 음악과 당당한 컨셉으로 모든 활동곡이 차트 1위를 차지했습니다.",
      "en": "IVE is packed with members having strong star power like Jang Wonyoung and An Yujin. They topped charts with all title tracks through sophisticated music and confident concepts."
    },
    "description": {
      "ko": "\"자기애\"를 컨셉으로 한 완성형 아이돌. 4세대 걸그룹의 중심입니다.",
      "en": "A complete idol group with a concept of \"Self-Love\". The center of 4th-gen girl groups."
    },
    "gossip": {
      "ko": [
        "멤버들의 키가 모두 큰 편이라 \"장신 그룹\"으로도 불립니다.",
        "장원영의 초긍정 사고방식인 \"럭키비키\"가 한국 전역에 트렌드로 자리 잡았습니다."
      ],
      "en": [
        "Often called the \"tall group\" due to all members being tall.",
        "Jang Wonyoung's ultra-positive \"Lucky Vicky\" mindset became a nationwide trend."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "아이브, 파리 패션위크 점령",
          "en": "IVE Takes Over Paris Fashion Week"
        },
        "date": "2026.02.28",
        "summary": {
          "ko": "장원영과 안유진이 각 브랜드 앰버서더로 참석하여 뜨거운 화제를 모았습니다.",
          "en": "Jang Wonyoung and An Yujin garnered huge attention attending as brand ambassadors."
        },
        "url": "https://search.naver.com/search.naver?query=아이브+패션위크"
      }
    ],
    "members": [
      {
        "id": "anyujin",
        "name": {
          "ko": "안유진",
          "en": "An Yujin"
        },
        "role": {
          "ko": "리더",
          "en": "Leader"
        },
        "birth": "2003.09.01",
        "mbti": "ISTP",
        "zodiac": {
          "ko": "처녀자리",
          "en": "Virgo"
        },
        "description": {
          "ko": "카리스마 리더와 예능감을 모두 갖춘 육각형 멤버. 믿고 보는 라이브 실력을 자랑합니다.",
          "en": "An all-rounder with charismatic leadership and variety show skills. Boasts reliable live vocals."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        "id": "gaeul",
        "name": {
          "ko": "가을",
          "en": "Gaeul"
        },
        "role": {
          "ko": "래퍼",
          "en": "Rapper"
        },
        "birth": "2002.09.24",
        "mbti": "ISTJ",
        "zodiac": {
          "ko": "천칭자리",
          "en": "Libra"
        },
        "description": {
          "ko": "팀의 맏내(맏이+막내 같은 매력). 차분한 분위기와 날카로운 랩 딜리버리가 특징입니다.",
          "en": "The oldest but acts like the youngest. Features a calm vibe and sharp rap delivery."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg"
      },
      {
        "id": "rei",
        "name": {
          "ko": "레이",
          "en": "Rei"
        },
        "role": {
          "ko": "래퍼",
          "en": "Rapper"
        },
        "birth": "2004.02.03",
        "mbti": "INFJ",
        "zodiac": {
          "ko": "물병자리",
          "en": "Aquarius"
        },
        "description": {
          "ko": "일본인 멤버지만 한국어를 능숙하게 구사합니다. 독특한 캐릭터와 힙한 랩 스타일을 보유했습니다.",
          "en": "Japanese member fluent in Korean. Possesses a unique character and trendy rap style."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        "id": "jangwonyoung",
        "name": {
          "ko": "장원영",
          "en": "Jang Wonyoung"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2004.08.31",
        "mbti": "ENFP",
        "zodiac": {
          "ko": "처녀자리",
          "en": "Virgo"
        },
        "description": {
          "ko": "K-POP의 워너비 아이콘. 타고난 스타성과 프로페셔널한 마인드셋으로 항상 주목받습니다.",
          "en": "The wannabe icon of K-POP. Always catches attention with innate star power and professional mindset."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F16%2F0007542424_001_20240516100505456.jpg"
      },
      {
        "id": "liz",
        "name": {
          "ko": "리즈",
          "en": "Liz"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2004.11.21",
        "mbti": "ISFP",
        "zodiac": {
          "ko": "전갈자리",
          "en": "Scorpio"
        },
        "description": {
          "ko": "독보적인 보컬 실력을 갖춘 메인 보컬급 멤버. 귀여운 보조개와 맑은 음색이 매력입니다.",
          "en": "Main vocal-tier member with unmatched vocal skills. Cute dimples and clear voice are her charms."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        "id": "leeseo",
        "name": {
          "ko": "이서",
          "en": "Leeseo"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2007.02.21",
        "mbti": "ENFP",
        "zodiac": {
          "ko": "물병자리",
          "en": "Aquarius"
        },
        "description": {
          "ko": "팀의 활기찬 막내. 나이답지 않은 성숙한 표정 연기와 에너지를 무대에서 보여줍니다.",
          "en": "The energetic youngest. Shows mature facial expressions and energy on stage unbefitting her age."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531424_001_20240510101005456.jpg"
      }
    ]
  },
  {
    "id": "lesserafim",
    "name": {
      "ko": "르세라핌",
      "en": "LE SSERAFIM"
    },
    "company": "Source Music",
    "debut": "2022.05.02",
    "accentColor": "#ffffff",
    "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F02%2F19%2F0007359424_001_20240219101005456.jpg",
    "wiki": {
      "ko": "르세라핌은 전직 피겨 스케이팅 선수, 아역 모델 등 다양한 배경을 가진 멤버들이 모여 독보적인 건강미와 퍼포먼스를 보여줍니다.",
      "en": "Gathering members with diverse backgrounds like a former figure skater and child model, LE SSERAFIM shows unrivaled healthy beauty and performance."
    },
    "description": {
      "ko": "\"두려움 없음\"을 상징하는 당당하고 에너지 넘치는 5인조입니다.",
      "en": "A confident and energetic 5-member group symbolizing \"Fearlessness\"."
    },
    "gossip": {
      "ko": [
        "멤버들의 근육량이 엄청나 \"근세라핌\"이라는 애칭으로 불리기도 합니다.",
        "데뷔 다큐멘터리를 통해 멤버들의 치열한 연습 과정을 공개해 큰 감동을 주었습니다."
      ],
      "en": [
        "Nicknamed \"Muscle-sserafim\" due to the members' immense muscle mass.",
        "Their debut documentary showing their fierce training deeply moved fans."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "르세라핌, 미국 코첼라 무대에서 압도적 찬사",
          "en": "LE SSERAFIM Receives Overwhelming Praise at US Coachella"
        },
        "date": "2026.03.02",
        "summary": {
          "ko": "파워풀한 퍼포먼스로 현지 관객들을 열광시키며 글로벌 인기를 증명했습니다.",
          "en": "Proved global popularity by thrilling local audiences with powerful performances."
        },
        "url": "https://search.naver.com/search.naver?query=르세라핌+코첼라"
      }
    ],
    "members": [
      {
        "id": "sakura",
        "name": {
          "ko": "사쿠라",
          "en": "Sakura"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "1998.03.19",
        "mbti": "INTP",
        "zodiac": {
          "ko": "물고기자리",
          "en": "Pisces"
        },
        "description": {
          "ko": "총 세 번의 데뷔를 성공시킨 대단한 경력의 멤버. 꾸준함의 대명사이자 지적인 매력을 가졌습니다.",
          "en": "A member with an incredible career of three successful debuts. A symbol of consistency with intellectual charm."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg"
      },
      {
        "id": "kimchaewon",
        "name": {
          "ko": "김채원",
          "en": "Kim Chaewon"
        },
        "role": {
          "ko": "리더",
          "en": "Leader"
        },
        "birth": "2000.08.01",
        "mbti": "ISTP",
        "zodiac": {
          "ko": "사자자리",
          "en": "Leo"
        },
        "description": {
          "ko": "칼 같은 춤선과 청량한 음색의 소유자. 팀의 중심을 잡아주는 카리스마 넘치는 리더입니다.",
          "en": "Possesses sharp dance lines and a refreshing voice. A charismatic leader holding the team's center."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg"
      },
      {
        "id": "huhyunjin",
        "name": {
          "ko": "허윤진",
          "en": "Huh Yunjin"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2001.10.08",
        "mbti": "INFJ",
        "zodiac": {
          "ko": "천칭자리",
          "en": "Libra"
        },
        "description": {
          "ko": "미국 출신으로 뛰어난 가창력과 작사/작곡 능력을 갖춘 올라운더 아티스트입니다.",
          "en": "An all-rounder artist from the US with excellent vocal and songwriting skills."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F02%2F19%2F0012380424_001_20240219101502456.jpg"
      },
      {
        "id": "kazuha",
        "name": {
          "ko": "카즈하",
          "en": "Kazuha"
        },
        "role": {
          "ko": "댄서",
          "en": "Dancer"
        },
        "birth": "2003.08.09",
        "mbti": "ENFP",
        "zodiac": {
          "ko": "사자자리",
          "en": "Leo"
        },
        "description": {
          "ko": "발레 전공자 출신의 우아한 퍼포먼스가 강점. 청순한 외모와 달리 운동을 매우 즐기는 반전 매력이 있습니다.",
          "en": "Elegant performance from a ballet background is her strength. Has a surprising charm of loving workouts contrary to her innocent looks."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F003%2F2024%2F05%2F10%2F0012539424_001_20240510101502456.jpg"
      },
      {
        "id": "hongeunchae",
        "name": {
          "ko": "홍은채",
          "en": "Hong Eunchae"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2006.11.10",
        "mbti": "ISFP",
        "zodiac": {
          "ko": "전갈자리",
          "en": "Scorpio"
        },
        "description": {
          "ko": "팀의 사랑스러운 막내 \"은채은행장\". 밝은 에너지와 탁월한 진행 능력을 보여주는 멤버입니다.",
          "en": "The lovely youngest \"MC Eunchae\". A member showing bright energy and excellent hosting skills."
        },
        "imageUrl": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2F421%2F2024%2F05%2F10%2F0007531234_001_20240510101005456.jpg"
      }
    ]
  },
  {
    "id": "straykids",
    "name": {
      "ko": "스트레이 키즈",
      "en": "Stray Kids"
    },
    "company": "JYP",
    "debut": "2018.03.25",
    "accentColor": "#ff5e00",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    "wiki": {
      "ko": "스트레이 키즈(Stray Kids)는 JYP 소속 8인조 보이그룹이다. 기존의 틀에서 벗어나 새로운 길을 개척한다는 포부를 가졌다.",
      "en": "Stray Kids is an 8-member boy group under JYP. They have the ambition to break out of existing molds and pioneer a new path."
    },
    "description": {
      "ko": "멤버들이 직접 곡을 만드는 자체 제작 보이그룹으로, 강렬한 사운드가 특징입니다.",
      "en": "A self-producing boy group creating their own songs, characterized by intense sound."
    },
    "gossip": {
      "ko": [
        "빌보드 200 차트에서 연속 1위를 차지하며 해외에서 가장 강력한 팬덤을 가진 보이그룹 중 하나입니다.",
        "자체 프로듀싱 팀 \"3RACHA\"가 팀의 음악적 정체성을 구축합니다.",
        "멤버 현진의 예술적인 춤선은 수많은 커버 영상을 만들어내고 있습니다."
      ],
      "en": [
        "One of the boy groups with the strongest overseas fandom, consecutively topping Billboard 200.",
        "Self-producing team \"3RACHA\" builds the group's musical identity.",
        "Member Hyunjin's artistic dance lines generate countless cover videos."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "스트레이 키즈, 2026 그래미 어워즈 퍼포머 유력",
          "en": "Stray Kids, Strong Candidates for 2026 Grammy Awards Performers"
        },
        "date": "2026.02.15",
        "summary": {
          "ko": "외신들이 주목하는 글로벌 아티스트로 급부상하며 주요 시상식 초청이 이어지고 있습니다.",
          "en": "Rapidly rising as global artists noted by foreign press, leading to continuous invitations to major awards."
        },
        "url": "https://search.naver.com/search.naver?query=스트레이키즈+그래미"
      }
    ],
    "members": [
      {
        "id": "bangchan",
        "name": {
          "ko": "방찬",
          "en": "Bang Chan"
        },
        "role": {
          "ko": "리더/프로듀서",
          "en": "Leader/Producer"
        },
        "birth": "1997.10.03",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "팀의 핵심 프로듀서이자 든든한 정신적 지주.",
          "en": "The core producer and solid mental pillar of the team."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "felix",
        "name": {
          "ko": "필릭스",
          "en": "Felix"
        },
        "role": {
          "ko": "래퍼",
          "en": "Rapper"
        },
        "birth": "2000.09.15",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "매력적인 동굴 저음과 요정 같은 외모의 반전 매력.",
          "en": "Unexpected charm of a deep cave-like bass voice and fairy-like visuals."
        },
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      }
    ]
  },
  {
    "id": "aespa",
    "name": {
      "ko": "에스파",
      "en": "aespa"
    },
    "company": "SM",
    "debut": "2020.11.17",
    "accentColor": "#9d00ff",
    "imageUrl": "https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=800&q=80",
    "wiki": {
      "ko": "에스파(aespa)는 SM 소속의 4인조 걸그룹이다. \"Avatar X Experience\"를 의미하며 가상 세계의 아바타와 함께 활동한다.",
      "en": "aespa is a 4-member girl group under SM. Meaning \"Avatar X Experience\", they promote alongside avatars in a virtual world."
    },
    "description": {
      "ko": "메타버스 세계관을 기반으로 한 \"쇠 맛\" 사운드의 선두주자 걸그룹입니다.",
      "en": "The leading girl group of \"iron taste\" sound based on a metaverse worldview."
    },
    "gossip": {
      "ko": [
        "\"Supernova\"가 한국 음원 사이트에서 역대 최장기간 1위를 기록하며 전국적인 신드롬을 일으켰습니다.",
        "멤버 카리나의 비현실적인 비주얼은 연일 온라인 커뮤니티의 뜨거운 화제입니다.",
        "윈터는 청순한 외모와 달리 성격이 털털하고 대장부 같아 \"김윈터\"라는 별명이 있습니다."
      ],
      "en": [
        "\"Supernova\" set a record for the longest #1 on Korean music sites, causing a syndrome.",
        "Karina's surreal visuals are a hot topic in online communities every day.",
        "Winter is nicknamed \"Kim Winter\" for her easygoing personality contrary to her innocent looks."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "에스파, 첫 정규 앨범 200만 장 판매 돌파",
          "en": "aespa Surpasses 2 Million Sales for First Full Album"
        },
        "date": "2026.03.02",
        "summary": {
          "ko": "음원 차트 점령에 이어 음반 판매량에서도 압도적인 성적을 거두고 있습니다.",
          "en": "Following chart domination, they are achieving overwhelming results in physical sales as well."
        },
        "url": "https://search.naver.com/search.naver?query=에스파+판매량"
      }
    ],
    "members": [
      {
        "id": "karina",
        "name": {
          "ko": "카리나",
          "en": "Karina"
        },
        "role": {
          "ko": "리더",
          "en": "Leader"
        },
        "birth": "2000.04.11",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "AI보다 더 AI 같은 압도적 비주얼 센터.",
          "en": "The overwhelming visual center, looking more like AI than actual AI."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "winter",
        "name": {
          "ko": "윈터",
          "en": "Winter"
        },
        "role": {
          "ko": "메인보컬",
          "en": "Main Vocalist"
        },
        "birth": "2001.01.01",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "청순한 외모에 숨겨진 파워풀한 고음 보컬.",
          "en": "Powerful high-note vocals hidden behind an innocent appearance."
        },
        "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
      }
    ]
  },
  {
    "id": "babymonster",
    "name": {
      "ko": "베이비몬스터",
      "en": "BABYMONSTER"
    },
    "company": "YG",
    "debut": "2024.04.01",
    "accentColor": "#ff0000",
    "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    "wiki": {
      "ko": "베이비몬스터(BABYMONSTER)는 YG 엔터테인먼트 소속의 7인조 다국적 걸그룹이다. 어린(BABY) 외모에도 실력은 괴물(MONSTER) 같다는 의미다.",
      "en": "BABYMONSTER is a 7-member multinational girl group under YG. It means they have monster-like skills despite their young looks."
    },
    "description": {
      "ko": "YG에서 블랙핑크 이후 7년 만에 런칭한 괴물 신인 걸그룹입니다.",
      "en": "The monster rookie girl group launched by YG 7 years after BLACKPINK."
    },
    "gossip": {
      "ko": [
        "데뷔 전 서바이벌 프로그램을 통해 이미 탄탄한 실력을 입증받았습니다.",
        "멤버 아현의 복귀곡 \"SHEESH\"는 강력한 힙합 사운드로 YG의 정체성을 보여주었습니다.",
        "라이브 실력이 너무 뛰어나 \"CD를 씹어 먹었다\"는 평가가 지배적입니다."
      ],
      "en": [
        "Proved their solid skills through a survival program prior to debut.",
        "Ahyeon's return song \"SHEESH\" showed YG's powerful hip-hop identity.",
        "Overwhelming consensus that they \"ate the CD\" due to outstanding live skills."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "베이비몬스터, 유튜브 구독자 1000만 돌파 최단기 기록",
          "en": "BABYMONSTER Sets Record for Fastest 10M YouTube Subscribers"
        },
        "date": "2026.03.03",
        "summary": {
          "ko": "글로벌 동영상 플랫폼에서 압도적인 파급력을 보이며 차세대 아이콘으로 부상했습니다.",
          "en": "Rising as next-generation icons showing massive impact on global video platforms."
        },
        "url": "https://search.naver.com/search.naver?query=베이비몬스터+유튜브"
      }
    ],
    "members": [
      {
        "id": "ahyeon",
        "name": {
          "ko": "아현",
          "en": "Ahyeon"
        },
        "role": {
          "ko": "보컬/래퍼",
          "en": "Vocalist/Rapper"
        },
        "birth": "2007.04.11",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "YG의 정석 올라운더 멤버로 불립니다.",
          "en": "Called the textbook all-rounder member of YG."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "chiquita",
        "name": {
          "ko": "치키타",
          "en": "Chiquita"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2009.02.17",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "막내지만 압도적인 재능과 스타성을 가진 멤버.",
          "en": "The youngest but a member with overwhelming talent and star power."
        },
        "imageUrl": "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  },
  {
    "id": "seventeen",
    "name": {
      "ko": "세븐틴",
      "en": "SEVENTEEN"
    },
    "company": "Pledis",
    "debut": "2015.05.26",
    "accentColor": "#96a1d1",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    "wiki": {
      "ko": "세븐틴(SEVENTEEN)은 플레디스 소속 13인조 보이그룹이다. 13명의 멤버, 3개의 유닛(보컬, 퍼포먼스, 힙합), 그리고 하나의 팀이 모여 17이 된다는 뜻이다.",
      "en": "SEVENTEEN is a 13-member boy group under Pledis. It means 13 members + 3 units + 1 team = 17."
    },
    "description": {
      "ko": "13명 멤버들의 완벽한 칼군무와 예능감을 갖춘 자체 제작 보이그룹의 대명사입니다.",
      "en": "The epitome of self-producing boy groups with perfect synchronized dancing and variety skills of 13 members."
    },
    "gossip": {
      "ko": [
        "멤버들이 너무 많아 이동할 때 버스를 두 대 나눠 타는 것으로 유명합니다.",
        "자체 예능 \"고잉 세븐틴\"은 팬이 아닌 대중들도 챙겨볼 정도로 한국에서 인기가 많습니다.",
        "최근 유네스코 친선 대사로 임명되며 청년 세대의 목소리를 대변하고 있습니다."
      ],
      "en": [
        "Famous for splitting into two buses when traveling due to having so many members.",
        "Their variety show \"Going Seventeen\" is highly popular even among non-fans in Korea.",
        "Recently appointed as UNESCO Goodwill Ambassadors, speaking for the youth generation."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "세븐틴, 단일 앨범 판매량 600만 장 기네스 등재",
          "en": "SEVENTEEN Enters Guinness for 6 Million Single Album Sales"
        },
        "date": "2026.02.12",
        "summary": {
          "ko": "K-POP 역대 최고 판매량을 기록하며 역사를 다시 쓰고 있습니다.",
          "en": "Rewriting history by recording the highest sales ever in K-POP."
        },
        "url": "https://search.naver.com/search.naver?query=세븐틴+판매량"
      }
    ],
    "members": [
      {
        "id": "woozi",
        "name": {
          "ko": "우지",
          "en": "Woozi"
        },
        "role": {
          "ko": "보컬/프로듀서",
          "en": "Vocalist/Producer"
        },
        "birth": "1996.11.22",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "세븐틴의 모든 곡을 만드는 천재 프로듀서.",
          "en": "The genius producer who creates all of SEVENTEEN's songs."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "mingyu",
        "name": {
          "ko": "민규",
          "en": "Mingyu"
        },
        "role": {
          "ko": "래퍼",
          "en": "Rapper"
        },
        "birth": "1997.04.06",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "압도적인 피지컬과 비주얼로 전 세계 여심을 저격.",
          "en": "Captivating women worldwide with overwhelming physique and visuals."
        },
        "imageUrl": "https://images.unsplash.com/photo-1628191010210-a59de33e5941?w=400&q=80"
      }
    ]
  },
  {
    "id": "riize",
    "name": {
      "ko": "라이즈",
      "en": "RIIZE"
    },
    "company": "SM",
    "debut": "2023.09.04",
    "accentColor": "#fff01f",
    "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=800&q=80",
    "wiki": {
      "ko": "라이즈(RIIZE)는 SM 엔터테인먼트 소속의 7인조 보이그룹이다. \"Rise\"와 \"Realize\"를 합쳐 함께 성장하고 꿈을 실현해 나가는 팀이라는 뜻이다.",
      "en": "RIIZE is a 7-member boy group under SM. Combining \"Rise\" and \"Realize\", they grow together and realize dreams."
    },
    "description": {
      "ko": "\"이모셔널 팝\"을 추구하는 SM의 차세대 보이그룹으로, 친근하고 힙한 매력을 보여줍니다.",
      "en": "SM's next-generation boy group pursuing \"Emotional Pop\", showing a friendly and hip charm."
    },
    "gossip": {
      "ko": [
        "\"Get A Guitar\"와 \"Love 119\"가 한국 대중들 사이에서 엄청난 인기를 끌며 보이그룹 음원 강자로 떠올랐습니다.",
        "멤버 원빈의 비주얼은 데뷔 직후 한국 온라인 커뮤니티를 마비시킬 정도로 큰 충격을 주었습니다.",
        "앤톤은 유명 작곡가 윤상의 아들로 데뷔 전부터 큰 관심을 받았습니다."
      ],
      "en": [
        "\"Get A Guitar\" and \"Love 119\" were huge hits, making them a boy group charting powerhouse.",
        "Wonbin's visuals shocked Korean online communities right after debut.",
        "Anton received huge attention pre-debut for being the son of famous composer Yoon Sang."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "라이즈, 루이비통 2026 SS 패션쇼 참석 화제",
          "en": "RIIZE Attends Louis Vuitton 2026 SS Fashion Show"
        },
        "date": "2026.03.04",
        "summary": {
          "ko": "글로벌 명품 브랜드의 러브콜을 받으며 패션 아이콘으로 급부상 중입니다.",
          "en": "Rapidly rising as fashion icons receiving love calls from global luxury brands."
        },
        "url": "https://search.naver.com/search.naver?query=라이즈+루이비통"
      }
    ],
    "members": [
      {
        "id": "wonbin",
        "name": {
          "ko": "원빈",
          "en": "Wonbin"
        },
        "role": {
          "ko": "센터/댄서",
          "en": "Center/Dancer"
        },
        "birth": "2002.03.02",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "긴 머리가 찰떡인 SM의 새로운 비주얼 계보.",
          "en": "SM's new visual lineage perfectly pulling off long hair."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "anton",
        "name": {
          "ko": "앤톤",
          "en": "Anton"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2004.03.21",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "수영 선수 출신의 탄탄한 피지컬과 음악적 재능.",
          "en": "Solid physique from a swimming background and musical talent."
        },
        "imageUrl": "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  },
  {
    "id": "illit",
    "name": {
      "ko": "아일릿",
      "en": "ILLIT"
    },
    "company": "Belift Lab",
    "debut": "2024.03.25",
    "accentColor": "#39ff14",
    "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    "wiki": {
      "ko": "아일릿(ILLIT)은 하이브 산하 빌리프랩 소속 걸그룹이다. \"I WILL IT\"의 줄임말로 무엇이든 될 수 있고 무엇이 될지 기대된다는 의미다.",
      "en": "ILLIT is a girl group under HYBE's Belift Lab. Short for \"I WILL IT\", meaning they can be anything."
    },
    "description": {
      "ko": "\"Magnetic\"으로 전 세계를 사로잡은 엉뚱발랄하고 사랑스러운 매력의 5인조 그룹입니다.",
      "en": "A 5-member group with quirky and lovely charms that captivated the world with \"Magnetic\"."
    },
    "gossip": {
      "ko": [
        "데뷔곡 \"Magnetic\"이 한국 아이돌 최초로 빌보드 핫 100에 진입하는 기염을 토했습니다.",
        "멤버들이 일상적인 모습(쌩얼 등)을 자주 공개하여 친근한 옆집 동생 같은 매력을 줍니다.",
        "몽환적이면서도 중독성 있는 사운드로 틱톡 등 숏폼 플랫폼을 점령했습니다."
      ],
      "en": [
        "Debut song \"Magnetic\" became the first K-pop debut song to enter the Billboard Hot 100.",
        "Give off a friendly \"girl next door\" vibe by frequently showing their natural daily lives.",
        "Dominated short-form platforms like TikTok with dreamy yet addictive sounds."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "아일릿, 신규 브랜드 광고 모델 잇따라 발탁",
          "en": "ILLIT Successively Selected as Models for New Brands"
        },
        "date": "2026.02.22",
        "summary": {
          "ko": "데뷔와 동시에 광고계의 블루칩으로 떠오르며 막강한 스타성을 증명했습니다.",
          "en": "Proved strong star power rising as blue chips in the advertising world upon debut."
        },
        "url": "https://search.naver.com/search.naver?query=아일릿+광고"
      }
    ],
    "members": [
      {
        "id": "wonhee",
        "name": {
          "ko": "원희",
          "en": "Wonhee"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2007.06.26",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "서바이벌 1위 출신의 국민 여동생 유망주.",
          "en": "A promising \"Nation's Little Sister\" from placing 1st in a survival show."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "minju",
        "name": {
          "ko": "민주",
          "en": "Minju"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2004.05.11",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "차분한 매력과 청순한 비주얼이 특징.",
          "en": "Characterized by calm charm and innocent visuals."
        },
        "imageUrl": "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  },
  {
    "id": "tws",
    "name": {
      "ko": "투어스",
      "en": "TWS"
    },
    "company": "Pledis",
    "debut": "2024.01.22",
    "accentColor": "#00ffff",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
    "wiki": {
      "ko": "투어스(TWS)는 플레디스 엔터테인먼트 소속 보이그룹이다. \"Twenty Four Seven With Us\"의 줄임말로 모든 순간을 함께하겠다는 뜻이다.",
      "en": "TWS is a boy group under Pledis. Short for \"Twenty Four Seven With Us\", meaning they'll be with us every moment."
    },
    "description": {
      "ko": "세븐틴의 동생 그룹으로, 청량하고 맑은 에너지를 선사하는 6인조 보이그룹입니다.",
      "en": "SEVENTEEN's younger brother group, a 6-member boy group delivering refreshing and clear energy."
    },
    "gossip": {
      "ko": [
        "데뷔곡 \"첫 만남은 계획대로 되지 않아\"가 한국 음원 차트를 올킬하며 대중적인 인기를 얻었습니다.",
        "멤버들이 교복 스타일의 의상을 자주 입어 첫사랑 기억 조작단이라는 별명이 있습니다.",
        "신인답지 않은 완벽한 라이브 실력으로 화제가 되었습니다."
      ],
      "en": [
        "Debut song \"Plot Twist\" achieved massive public popularity, sweeping Korean charts.",
        "Nicknamed the \"First Love Memory Manipulators\" for often wearing school uniform styles.",
        "Overwhelming consensus that they \"ate the CD\" due to outstanding live skills."
      ]
    },
    "news": [
      {
        "title": {
          "ko": "투어스, 2026 신인상 싹쓸이 예고",
          "en": "TWS Predicts Sweeping 2026 Rookie Awards"
        },
        "date": "2026.02.18",
        "summary": {
          "ko": "강력한 음원 파워를 바탕으로 각종 시상식의 주인공으로 거론되고 있습니다.",
          "en": "Being mentioned as protagonists of various awards based on strong digital charting power."
        },
        "url": "https://search.naver.com/search.naver?query=투어스+신인상"
      }
    ],
    "members": [
      {
        "id": "shinyu",
        "name": {
          "ko": "신유",
          "en": "Shinyu"
        },
        "role": {
          "ko": "리더",
          "en": "Leader"
        },
        "birth": "2003.11.07",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "모델 같은 피지컬과 부드러운 카리스마의 리더.",
          "en": "A leader with model-like physique and gentle charisma."
        },
        "imageUrl": "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?w=400&q=80"
      },
      {
        "id": "dohun",
        "name": {
          "ko": "도훈",
          "en": "Dohun"
        },
        "role": {
          "ko": "보컬",
          "en": "Vocalist"
        },
        "birth": "2005.01.30",
        "mbti": "Unknown",
        "zodiac": {
          "ko": "",
          "en": ""
        },
        "description": {
          "ko": "청량함 그 자체인 비주얼과 매력적인 보이스.",
          "en": "Visuals that are the definition of refreshing and an attractive voice."
        },
        "imageUrl": "https://images.unsplash.com/photo-1599834562135-b6fc90e74ef2?w=400&q=80"
      }
    ]
  }
];
