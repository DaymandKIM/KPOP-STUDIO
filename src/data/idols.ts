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
  officialSite?: string;
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
    officialSite: "https://newjeans.kr/",
    company: "ADOR",
    debut: "2022.07.22",
    fandom: { ko: "버니즈 (Bunnies)", en: "Bunnies" },
    accentColor: "#00ffff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20NewJeans%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "뉴진스(NewJeans)는 청바지(Jeans)처럼 시대의 아이콘이 되겠다는 포부와 'New Genes'(새로운 유전자)가 되겠다는 각오를 담은 어도어(ADOR) 소속의 5인조 다국적 걸그룹입니다. 민희진 전 대표가 총괄 프로듀싱을 맡아 K-POP 시장에 'Y2K'와 '이지리스닝' 열풍을 일으켰습니다. 1990년대 후반~2000년대 초반의 향수를 현대적으로 재해석한 독보적인 컨셉, 과도한 화장이나 킬힐을 배제한 10대 소녀 특유의 자연스러움을 강조하여 데뷔와 동시에 엄청난 신드롬을 일으켰습니다. 데뷔 앨범 타이틀곡 'Attention'과 'Hype Boy'부터 'Ditto', 'OMG', 'Super Shy'까지 발매하는 모든 곡을 메가 히트시키며 국내외 음원 차트를 장기 집권했습니다.",
      en: "NewJeans is a 5-member multinational girl group under ADOR, with the ambition to become icons of the times like everyday jeans, and to represent 'New Genes' in K-pop. Executive produced by Min Hee-jin, they sparked the 'Y2K' and 'easy-listening' trends in the K-pop market. By modernly reinterpreting the nostalgia of the late 90s to early 00s and emphasizing the natural vibe of teenage girls without heavy makeup or killer heels, they created a massive syndrome upon debut. From their debut tracks 'Attention' and 'Hype Boy' to 'Ditto', 'OMG', and 'Super Shy', every release became a mega-hit, dominating domestic and global charts for extended periods."
    },
    description: {
      ko: "Y2K 신드롬의 주역, 꾸밈없는 자연스러운 매력과 트렌디한 이지리스닝 음악으로 전 세계를 사로잡은 4세대 대표 아이콘입니다.",
      en: "The pioneers of the Y2K syndrome, representing the 4th generation with their unpretentious natural charm and trendy easy-listening music."
    },
    gossip: {
      ko: [
        "팀명 후보 중에 '슬라임', '포도' 등이 있었다고 합니다.",
        "데뷔 전 티저 영상 없이 뮤직비디오를 기습 공개하는 파격적인 프로모션을 진행했습니다.",
        "멤버 5명 전원이 샤넬, 구찌, 버버리, 디올, 루이비통 등 글로벌 럭셔리 브랜드의 앰버서더로 발탁되었습니다.",
        "'Hype Boy' 안무는 전 국민이 따라 추는 밈이 되어 '뉴진스의 하입보이요'라는 유행어를 탄생시켰습니다.",
        "멤버들 모두 스마트폰 대신 폴더폰이나 구형 캠코더 렌즈 감성의 사진을 자주 찍습니다.",
        "숙소 거실에 커다란 식탁을 두고 다 같이 모여서 밥을 먹거나 수다를 떠는 것을 좋아합니다.",
        "음악 방송 출근길에 가방 대신 토끼 모양 인형(빙키봉)을 들고 출근해 화제가 되었습니다.",
        "리더 민지는 강원도 춘천 출신으로 중학교 시절부터 눈에 띄는 미모로 동네에서 유명했다고 합니다.",
        "호주 출신 하니와 다니엘은 연습생 시절 처음 만났을 때 서로 영어를 쓰며 급격히 친해졌습니다.",
        "해린은 토마토를 매우 좋아해서 팬들 사이에서 '토마토 마스터'로 불립니다.",
        "막내 혜인은 어릴 적 키즈 유튜브 채널 '포켓TV'에서 활발하게 활동한 경력이 있습니다."
      ],
      en: [
        "Rumored potential group names included 'Slime' and 'Grape'.",
        "They dropped their debut music video as a surprise without any prior teasers.",
        "All 5 members became global ambassadors for luxury brands like Chanel, Gucci, Burberry, Dior, and Louis Vuitton.",
        "The 'Hype Boy' choreography became a national meme, spawning the phrase 'NewJeans' Hype Boy'.",
        "The members often take photos with vintage camcorders or flip phones instead of modern smartphones.",
        "They love gathering around a large dining table in their dorm living room to eat and chat.",
        "They made headlines by carrying bunny plushies (Binky Bong) instead of bags on their way to music shows.",
        "Leader Minji was famous in her hometown of Chuncheon for her standout beauty since middle school.",
        "Australian members Hanni and Danielle became fast friends by speaking English when they first met as trainees.",
        "Haerin loves tomatoes so much that fans call her the 'Tomato Master'.",
        "Youngest member Hyein was very active on a kids' YouTube channel called 'Pocket TV' before debuting."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 소속사 어도어와 전속계약 분쟁... 다니엘 탈퇴 및 계약 해지", en: "NewJeans in Legal Dispute with ADOR... Danielle Leaves and Contract Terminated" },
        date: "2026.03.04",
        summary: { ko: "뉴진스와 하이브(어도어) 간의 법적 분쟁이 격화되는 가운데, 다니엘의 전속계약이 해지되며 팀을 탈퇴하게 되었습니다.", en: "Amid escalating legal disputes between NewJeans and HYBE (ADOR), Danielle's exclusive contract has been terminated and she left the team." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EB%8B%A4%EB%8B%88%EC%97%98+%ED%83%88%ED%87%B4"
      },
      {
        title: { ko: "해린·혜인·하니, 어도어로 복귀 확정... 민지 거취 논의 중", en: "Haerin, Hyein, Hanni Confirmed to Return to ADOR... Minji's Status Under Discussion" },
        date: "2026.03.03",
        summary: { ko: "다니엘의 계약 해지와는 별개로 해린, 혜인, 하니는 소속사 어도어로 복귀하기로 결정했으며 민지는 논의가 진행 중입니다.", en: "Separate from Danielle's contract termination, Haerin, Hyein, and Hanni decided to return to ADOR, while Minji's status is still under discussion." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EC%96%B4%EB%8F%84%EC%96%B4+%EB%B3%B5%EA%B7%80"
      },
      {
        title: { ko: "다니엘, 라이브 스트리밍서 심경 고백 '뉴진스는 항상 제 마음속에'", en: "Danielle Confesses Feelings in Live Stream 'NewJeans Will Always Be in My Heart'" },
        date: "2026.03.02",
        summary: { ko: "다니엘은 라이브 방송을 통해 팬들과 소통하며 팀과 멤버들을 지키기 위해 노력했음을 밝히고 눈물을 보였습니다.", en: "Danielle communicated with fans through a live broadcast, shedding tears and revealing her efforts to protect the team and members." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EB%8B%A4%EB%8B%88%EC%97%98+%EB%9D%BC%EC%9D%B4%EB%B8%8C"
      },
      {
        title: { ko: "어도어, 다니엘 및 민희진 전 대표 상대로 431억 원대 손해배상 소송", en: "ADOR Files 43.1 Billion KRW Lawsuit Against Danielle and Former CEO Min Hee-jin" },
        date: "2026.03.01",
        summary: { ko: "어도어는 계약 위반 및 명예 훼손 등을 이유로 다니엘과 민희진 전 대표 측에 대규모 위약벌 및 손해배상을 청구했습니다.", en: "ADOR claimed massive penalties and damages against Danielle and former CEO Min Hee-jin, citing breach of contract and defamation." },
        url: "https://news.google.com/search?q=%EC%96%B4%EB%8F%84%EC%96%B4+%EB%8B%A4%EB%8B%88%EC%97%98+%EC%86%8C%EC%86%A1"
      },
      {
        title: { ko: "팬덤 '버니즈', 하이브 사옥 앞 완전체 보장 요구 트럭 시위 진행", en: "Fandom 'Bunnies' Hold Truck Protests at HYBE Building Demanding Full Group Guarantee" },
        date: "2026.02.28",
        summary: { ko: "팬들은 하이브 사옥으로 트럭을 보내 분쟁의 조속한 종식과 다섯 멤버 전원의 완전체 활동을 촉구하고 나섰습니다.", en: "Fans sent protest trucks to the HYBE building, urging a swift end to the dispute and guaranteeing the full group activities of all five members." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%ED%8A%B8%EB%9F%AD+%EC%8B%9C%EC%9C%84"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%AF%BC%EC%A7%80%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%98%EB%8B%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%8B%A4%EB%8B%88%EC%97%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%B4%EB%A6%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%98%9C%EC%9D%B8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "ive",
    name: { ko: "아이브", en: "IVE" },
    officialSite: "http://www.starship-ent.com/profile/musician/ive.php",
    company: "Starship",
    debut: "2021.12.01",
    fandom: { ko: "다이브 (DIVE)", en: "DIVE" },
    accentColor: "#ff00ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20IVE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "아이브(IVE)는 스타쉽 엔터테인먼트 소속 6인조 다국적 걸그룹입니다. 그룹명 'IVE'는 'I HAVE'의 축약형으로, '우리가 가진 것들을 모두 당당하게 보여주겠다'는 강렬한 포부를 담고 있습니다. 다른 아이돌들이 주로 다루는 성장 서사나 짝사랑을 넘어, 데뷔 때부터 이미 완성된 그룹으로서 주체적이고 당당한 '나르시시즘(자기애)'을 일관된 세계관으로 선보여 큰 호응을 얻었습니다. 데뷔곡 'ELEVEN'부터 'LOVE DIVE', 'After LIKE', 'I AM', 'Kitsch', '해야 (HEYA)'까지 발매한 모든 타이틀곡이 음악방송 1위와 음원 차트 최상위권을 휩쓸며 K-POP 4세대 대표 걸그룹으로 우뚝 섰습니다.",
      en: "IVE is a 6-member multinational girl group under Starship Entertainment. The name 'IVE' stands for 'I HAVE', reflecting their bold ambition to confidently show everything they've got. Deviating from typical growth narratives or unrequited love concepts, they debuted as a 'complete' group pushing a consistent theme of 'narcissism' (self-love) and independence, which garnered massive acclaim. From their debut 'ELEVEN' to 'LOVE DIVE', 'After LIKE', 'I AM', 'Kitsch', and 'HEYA', every title track swept music show wins and chart summits, cementing their status as the leading 4th-generation K-pop girl group."
    },
    description: {
      ko: "주체적인 '자기애'를 노래하는 4세대 완성형 걸그룹, 눈부신 비주얼과 우아한 퍼포먼스로 트렌드를 선도합니다.",
      en: "The complete 4th-gen girl group singing about independent 'self-love', leading trends with dazzling visuals and elegant performances."
    },
    gossip: {
      ko: [
        "멤버 6명 전원이 모델처럼 키가 커서 '장신 그룹' 혹은 '기럭지 그룹'으로 불립니다. (평균 키 약 169cm)",
        "장원영이 만들어낸 긍정적 사고방식인 '원영적 사고(럭키비키)'는 대한민국 기업들조차 마케팅에 쓸 정도로 전국적인 밈이 되었습니다.",
        "데뷔곡 'ELEVEN'은 지상파 음악방송 최단기간 1위 기록(당시 기준)을 세웠습니다.",
        "'LOVE DIVE'의 거울 춤과 숨참고 러브다이브 안무는 틱톡 챌린지를 점령했습니다.",
        "안유진은 tvN 예능 '지구오락실'에서 맑은 눈의 광인 캐릭터로 대활약하며 예능 치트키로 등극했습니다.",
        "멤버 레이는 일본인이지만 한국어를 너무 완벽하게 구사해 팬들 사이에서 '김레이'로 불립니다.",
        "이서는 데뷔 당시 중학교 2학년(만 14세)으로 엄청난 화제를 모았고, 카메라 줌인 밈의 주인공이 되었습니다.",
        "가을은 팀 내 최단신(164cm)이라 멤버들 사이에서 놀림을 받지만, 무대 위에서는 카리스마 있는 '가을선배'로 불립니다.",
        "리즈는 제주도 출신으로 데뷔 초 금발 머리가 찰떡같이 어울려 한국의 바비인형이라는 찬사를 받았습니다.",
        "숙소 생활을 할 때 고기를 구워 먹으면 항상 레이가 고기 굽기 당번을 자처한다고 합니다.",
        "전원 센터라고 불릴 만큼 멤버 전원이 뛰어난 비주얼을 자랑하며 각자 유명 화장품 브랜드 모델로 활동 중입니다."
      ],
      en: [
        "All 6 members are incredibly tall like models, earning them the nickname 'Giant Group' (avg height ~169cm).",
        "Jang Wonyoung's positive mindset 'Wonyoung Thinking (Lucky Vicky)' became such a massive national meme that even Korean corporations use it in marketing.",
        "Their debut song 'ELEVEN' set the record (at the time) for the fastest #1 win on public broadcast music shows.",
        "The mirror dance and 'hold your breath' choreography from 'LOVE DIVE' dominated TikTok challenges.",
        "An Yujin became a variety show superstar through her 'crazy with clear eyes' persona on tvN's 'Earth Arcade'.",
        "Japanese member Rei speaks Korean so flawlessly that fans jokingly call her 'Kim Rei'.",
        "Leeseo debuted while in 8th grade (age 14), causing a huge stir and becoming the star of the viral camera zoom meme.",
        "Gaeul is the shortest (164cm) and gets teased, but on stage she is fiercely known as 'Gaeul Sunbae (Senior)'.",
        "Liz is from Jeju Island and her blonde hair at debut earned her praise as Korea's Barbie doll.",
        "When grilling meat at their dorm, Rei always volunteers to be the designated chef.",
        "They are known as an 'all-center' group due to their flawless visuals, and all members model for famous cosmetics brands."
      ]
    },
        news: [
      {
        "title": {
          "ko": "아이브, 두 번째 정규 앨범 'REVIVE+' 발매 및 빌보드 조명",
          "en": "IVE Releases 2nd Full Album 'REVIVE+' and Receives Billboard Spotlight"
        },
        "date": "2026.03.03",
        "summary": {
          "ko": "아이브의 새 앨범 'REVIVE+'가 발매되었으며, 미국 빌보드로부터 음악적 방향을 제시했다는 호평을 받았습니다.",
          "en": "IVE's new album 'REVIVE+' was released and received critical acclaim from US Billboard for setting a new musical direction."
        },
        "url": "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C+REVIVE"
      },
      {
        "title": {
          "ko": "선공개곡 'BANG BANG' 퍼펙트 올킬(PAK) 달성",
          "en": "Pre-release Track 'BANG BANG' Achieves Perfect All-Kill (PAK)"
        },
        "date": "2026.02.28",
        "summary": {
          "ko": "정규 2집의 더블 타이틀곡 중 하나인 'BANG BANG'이 국내 주요 음원 플랫폼을 석권하며 퍼펙트 올킬을 기록했습니다.",
          "en": "One of the double title tracks, 'BANG BANG', swept major domestic music platforms, recording a Perfect All-Kill."
        },
        "url": "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C+BANG+BANG"
      },
      {
        "title": {
          "ko": "아이브, 'BLACKHOLE'로 본격적인 음악방송 활동 돌입",
          "en": "IVE Kicks Off Music Show Promotions with 'BLACKHOLE'"
        },
        "date": "2026.03.05",
        "summary": {
          "ko": "아이브가 정규 2집의 또 다른 타이틀곡 'BLACKHOLE'로 음악방송 활동을 이어가며 글로벌 팬들과 만납니다.",
          "en": "IVE continues their music show promotions with another title track 'BLACKHOLE', meeting global fans."
        },
        "url": "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C+BLACKHOLE"
      }
    ],
    members: [
      {
        id: "anyujin",
        name: { ko: "안유진", en: "An Yujin" },
        role: { ko: "리더/보컬/댄서", en: "Leader/Vocalist/Dancer" },
        birth: "2003.09.01",
        mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm",
        bloodType: "A",
        description: { ko: "카리스마 리더와 예능감을 모두 갖춘 육각형 멤버. 믿고 듣는 탄탄한 라이브 실력을 자랑합니다.", en: "An all-rounder with charismatic leadership and variety show skills. Boasts reliable and solid live vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EC%95%88%EC%9C%A0%EC%A7%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "gaeul",
        name: { ko: "가을", en: "Gaeul" },
        role: { ko: "래퍼/댄서", en: "Rapper/Dancer" },
        birth: "2002.09.24",
        mbti: "ISTJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "164cm",
        bloodType: "B",
        description: { ko: "팀의 맏언니이자 메인 댄서급 실력자. 차분한 분위기와 날카로운 랩 딜리버리가 특징입니다.", en: "The oldest and a main dancer-level talent. Features a calm vibe and sharp rap delivery." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EA%B0%80%EC%9D%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "rei",
        name: { ko: "레이", en: "Rei" },
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist" },
        birth: "2004.02.03",
        mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "일본인 멤버지만 한국어를 유창하게 구사합니다. 독보적인 캐릭터와 트렌디한 랩 스타일을 보유했습니다.", en: "Japanese member fluent in Korean. Possesses a highly unique character and trendy rap style." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EB%A0%88%EC%9D%B4%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "K-POP 4세대를 대표하는 워너비 아이콘. 타고난 스타성과 프로페셔널한 긍정 마인드로 무장했습니다.", en: "The wannabe icon representing 4th-gen K-POP. Armed with innate star power and a professional positive mindset." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EC%9E%A5%EC%9B%90%EC%98%81%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "독보적인 고음과 성량을 갖춘 메인 보컬. 귀여운 보조개와 부드러운 음색이 매력입니다.", en: "Main vocalist with unmatched high notes and volume. Cute dimples and a soft voice are her charms." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EB%A6%AC%EC%A6%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "팀의 활기찬 막내. 나이답지 않은 무대 장악력과 시시각각 변하는 표정 연기 장인입니다.", en: "The energetic youngest. Shows stage presence and expressive acting unbefitting her young age." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EC%9D%B4%EC%84%9C%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "aespa",
    name: { ko: "에스파", en: "aespa" },
    officialSite: "https://aespa.com/",
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이 (MY)", en: "MY" },
    accentColor: "#9d00ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20aespa%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "에스파(aespa)는 SM 엔터테인먼트 소속의 4인조 다국적 걸그룹입니다. 그룹명 'aespa'는 'Avatar X Experience'를 표현한 'æ'와 양면성을 뜻하는 'aspect'를 결합한 것으로, '자신의 또 다른 자아인 아바타(ae)를 만나 새로운 세계를 경험하게 된다'는 혁신적인 메타버스 세계관을 바탕으로 합니다. 데뷔곡 'Black Mamba'부터 'Next Level', 'Savage'를 연달아 히트시키며 사이버펑크와 광야(KWANGYA) 컨셉을 K-POP 씬에 각인시켰습니다. 최근에는 현실 세계로 넘어와 더욱 세련되고 강력한 '쇠 맛' 사운드의 정점인 'Supernova'와 'Armageddon'으로 국내외 음원 차트 장기 1위를 싹쓸이하며 압도적인 1군 걸그룹의 위상을 증명했습니다.",
      en: "aespa is a 4-member multinational girl group under SM Entertainment. The name combines 'æ' (Avatar X Experience) and 'aspect' (meaning two-sidedness), based on the innovative metaverse concept of 'experiencing a new world by meeting your other self, your avatar'. From their debut 'Black Mamba' to consecutive hits 'Next Level' and 'Savage', they imprinted cyberpunk and the 'KWANGYA' lore onto K-pop. Recently transitioning to the real world, they showcased the peak of their metallic 'iron taste' sound with 'Supernova' and 'Armageddon', sweeping domestic and global charts for months and proving their dominant top-tier status."
    },
    description: {
      ko: "혁신적인 메타버스 세계관과 강렬한 '쇠 맛' 음악, 독보적인 보컬과 퍼포먼스를 자랑하는 글로벌 히트 메이커입니다.",
      en: "Global hitmakers boasting an innovative metaverse universe, intense 'iron taste' music, and unrivaled vocals and performance."
    },
    gossip: {
      ko: [
        "'Supernova'는 2024년 국내 최대 음원 사이트 멜론에서 무려 15주 최장기 1위라는 대기록을 작성했습니다.",
        "데뷔 초 멤버마다 가상의 AI 아바타 멤버(ae-카리나 등)가 존재한다는 파격적인 컨셉으로 IT 업계에서도 큰 주목을 받았습니다.",
        "닝닝의 'Savage' 고음 파트는 속이 뻥 뚫리는 시원함으로 수많은 리액션 비디오를 양산했습니다.",
        "카리나의 AI보다 더 AI 같은 CG 비주얼은 매 활동마다 커뮤니티를 마비시킵니다.",
        "윈터는 청초한 외모와 달리 성격이 털털하고 무심한 편이라 팬들에게 '김대장', '김윈터'로 불립니다.",
        "지젤은 랩을 할 때 나오는 특유의 그루브와 손동작이 매력적이며, 어학 능력이 매우 뛰어납니다.",
        "멤버들끼리 사이가 너무 좋아 자체 예능에서 시도 때도 없이 상황극을 하며 놉니다.",
        "메타버스 컨셉 그룹답게 K-POP 최초로 칸 영화제 레드카펫에 멤버 전원이 초대받아 화제가 되었습니다.",
        "최근 외계인, 초능력자 컨셉을 완벽하게 소화하며 '오컬트 아이돌'이라는 새로운 장르를 열었습니다.",
        "멤버 4명 모두 메인 보컬급의 탄탄한 라이브 실력을 갖추어 앙코르 무대마다 호평을 받습니다."
      ],
      en: [
        "'Supernova' set a massive record on Melon (Korea's top music site) by holding the #1 spot for 15 weeks.",
        "Their radical concept of having virtual AI avatar members for each human member drew huge attention even from the IT industry.",
        "Ningning's high note in 'Savage' was so refreshingly powerful that it spawned countless reaction videos.",
        "Karina's CG-like visuals that look more AI than actual AI paralyze online communities with every comeback.",
        "Despite her innocent looks, Winter has a very easygoing and cool personality, earning the nickname 'Boss Kim'.",
        "Giselle's unique groove and hand gestures while rapping are charming, and she is incredibly fluent in multiple languages.",
        "The members are so close that they constantly do spontaneous roleplays in their variety shows.",
        "Fitting their metaverse concept, they became the first K-pop group to have all members invited to the Cannes Film Festival red carpet.",
        "They recently perfected alien and superhero concepts, opening a new genre of 'occult idols'.",
        "All 4 members possess main-vocal tier live singing skills, constantly receiving praise during encore stages."
      ]
    },
        news: [
      {
        "title": {
          "ko": "에스파, 앤더슨 팩 협업 싱글 '키체인(Keychain)' 발표",
          "en": "aespa Releases Collab Single 'Keychain' with Anderson .Paak"
        },
        "date": "2026.02.27",
        "summary": {
          "ko": "영화 '케이팝스!'의 OST로 한국계 미국인 팝스타 앤더슨 팩과 콜라보한 신곡을 공개했습니다.",
          "en": "Released a new song collaborating with Korean-American pop star Anderson .Paak for the movie 'K-POPS!' OST."
        },
        "url": "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C+%ED%82%A4%EC%B2%B4%EC%9D%B8"
      },
      {
        "title": {
          "ko": "카리나, 밀라노 프라다 패션쇼에서 압도적 스포트라이트",
          "en": "Karina Receives Overwhelming Spotlight at Prada Fashion Show in Milan"
        },
        "date": "2026.02.26",
        "summary": {
          "ko": "카리나가 브랜드 앰배서더 자격으로 밀라노 프라다 패션쇼에 참석해 글로벌 프레스의 이목을 집중시켰습니다.",
          "en": "Attended the Prada fashion show in Milan as a brand ambassador, capturing the attention of the global press."
        },
        "url": "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C+%EC%B9%B4%EB%A6%AC%EB%82%98+%ED%94%84%EB%9D%BC%EB%8B%A4"
      },
      {
        "title": {
          "ko": "세 번째 월드 투어 'SYNK : aeXIS LINE' 순항 중",
          "en": "3rd World Tour 'SYNK : aeXIS LINE' Cruising Smoothly"
        },
        "date": "2026.03.01",
        "summary": {
          "ko": "에스파가 세 번째 월드 투어를 통해 전 세계 팬들을 만나며 글로벌 인기를 다시 한번 입증하고 있습니다.",
          "en": "aespa is proving their global popularity once again by meeting fans worldwide through their 3rd world tour."
        },
        "url": "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C+%EC%9B%94%EB%93%9C%ED%88%AC%EC%96%B4"
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
        description: { ko: "AI보다 더 완벽한 외모와 완벽한 비율의 압도적 비주얼 센터. 강렬한 춤선과 세심한 리더십을 갖췄습니다.", en: "The overwhelming visual center with looks and proportions more perfect than AI. Possesses intense dance lines and attentive leadership." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EC%B9%B4%EB%A6%AC%EB%82%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "독특한 음색과 쫀득한 딕션의 랩핑을 자랑하는 한일 혼혈 멤버. 다국어에 능통한 스마트한 매력이 있습니다.", en: "A Korean-Japanese member boasting a unique voice and catchy rap diction. Has smart charm being fluent in multiple languages." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EC%A7%80%EC%A0%A4%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "청순한 외모에 숨겨진 파워풀한 고음 스나이퍼. 검술을 하듯 날카롭고 깔끔한 춤선이 일품입니다.", en: "A powerful high-note sniper hidden behind an innocent appearance. Her sharp and clean dance lines, like swordplay, are masterpiece." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EC%9C%88%ED%84%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "시원하게 귀를 뚫어주는 폭발적인 성량의 중국인 메인보컬. 통통 튀고 쿨한 핫걸 성격의 소유자입니다.", en: "Chinese main vocalist with explosive volume that clears the ears. Has a bubbly and cool 'hot girl' personality." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EB%8B%9D%EB%8B%9D%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "straykids",
    name: { ko: "스트레이 키즈", en: "Stray Kids" },
    officialSite: "https://straykids.jype.com/",
    company: "JYP Entertainment",
    debut: "2018.03.25",
    fandom: { ko: "스테이 (STAY)", en: "STAY" },
    accentColor: "#ff5e00",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20Stray%20Kids%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "스트레이 키즈(Stray Kids)는 JYP 엔터테인먼트 소속의 8인조 보이그룹입니다. 팀명은 '길을 잃은 아이들'이라는 뜻으로, 기존의 정형화된 틀에서 벗어나 자유롭고 독창적인 자신들만의 길을 개척하겠다는 정체성을 담고 있습니다. 아이돌 음악의 한계를 부수는 강렬하고 자극적인 '마라맛' 장르의 선구자로, 방찬, 창빈, 한으로 구성된 자체 프로듀싱 팀 '3RACHA(쓰리라차)'가 전곡을 직접 작사, 작곡, 편곡합니다. '神메뉴', 'Back Door', '소리꾼', 'MANIAC', '특' 등 폭발적인 에너지를 뿜어내는 곡들로 글로벌 팬덤을 열광시키며 빌보드 200 차트에서 5연속 1위를 차지하는 대기록을 썼습니다.",
      en: "Stray Kids is an 8-member boy group under JYP Entertainment. The name means 'lost kids', reflecting their identity of breaking free from standardized molds to pioneer their own free and original path. As pioneers of the intense and stimulating 'spicy/mala taste' genre that shatters idol music limits, their in-house producing team '3RACHA' (Bang Chan, Changbin, Han) writes, composes, and arranges all their songs. With explosively energetic tracks like 'God's Menu', 'Back Door', 'Thunderous', 'MANIAC', and 'S-Class', they drove global fandoms wild and achieved the massive record of topping the Billboard 200 chart 5 consecutive times."
    },
    description: {
      ko: "직접 만든 '마라맛' 음악과 파괴적인 퍼포먼스로 전 세계 빌보드 차트를 호령하는 자체 제작 글로벌 대세 그룹입니다.",
      en: "The self-producing global top-tier group dominating worldwide Billboard charts with their self-made 'spicy' music and destructive performances."
    },
    gossip: {
      ko: [
        "빌보드 200 차트에서 데뷔 후 처음 진입함과 동시에 1위를 차지했으며, 이후 발매한 5개 앨범이 모두 1위에 올랐습니다.",
        "자체 프로듀싱 팀 '3RACHA'는 한국음악저작권협회 정회원으로 승격될 만큼 뛰어난 역량을 인정받았습니다.",
        "타이틀곡 '神메뉴'는 정말 독특하게도 요리사를 컨셉으로 하여 프라이팬을 젓고 칼질을 하는 안무를 선보였습니다.",
        "호주 출신 멤버 펠릭스의 믿기지 않을 만큼 깊은 초저음 동굴 목소리는 해외 리액션 영상의 단골 단골 소재입니다.",
        "창빈은 K팝 래퍼 중에서도 손꼽히는 엄청난 성량과 정확한 발음의 '때려 박는' 래핑으로 유명합니다.",
        "현진은 무대 위에서 예술 작품을 보는 듯한 유려하고 표현력 넘치는 춤선으로 수많은 직캠 레전드를 탄생시켰습니다.",
        "리더 방찬은 데뷔 전 무려 7년간의 긴 연습생 생활을 거치며 팀을 직접 기획하고 멤버들을 모았습니다.",
        "멤버들이 매우 시끄럽고 장난기가 많아 그룹명이 '스트레이 키즈'가 아니라 '스트레스 키즈'라는 팬들의 농담이 있습니다.",
        "영화 '데드풀'의 주연 배우 라이언 레이놀즈가 이들의 무대를 보고 직접 팬을 자처하며 SNS에서 뜨거운 친목을 과시했습니다.",
        "글로벌 인기에 힘입어 미국 대형 스타디움 투어를 매진시키는 기염을 토했습니다."
      ],
      en: [
        "They topped the Billboard 200 chart upon their very first entry and saw their next 5 albums all hit #1.",
        "The producing team '3RACHA' was promoted to regular members of the Korea Music Copyright Association for their outstanding skills.",
        "Their title track 'God's Menu' uniquely featured a chef concept with choreography mimicking stirring pans and chopping.",
        "Australian member Felix's unbelievably deep, cave-like bass voice is a staple in overseas reaction videos.",
        "Changbin is famous among K-pop rappers for his massive volume and precise, hard-hitting rap delivery.",
        "Hyunjin has created countless legendary fancams with his flowing, highly expressive dance lines that look like art pieces.",
        "Leader Bang Chan endured a long 7-year trainee period, personally planning the group and gathering the members.",
        "The members are so loud and playful that fans jokingly call them 'Stress Kids' instead of 'Stray Kids'.",
        "Actor Ryan Reynolds from 'Deadpool' saw their performance, declared himself a fan, and showed off their friendship on social media.",
        "Driven by global popularity, they achieved the amazing feat of selling out massive US stadium tours."
      ]
    },
    news: [
      {
        title: { ko: "스트레이 키즈, IFPI '글로벌 아티스트 차트' 2위 쾌거", en: "Stray Kids Ranks #2 on IFPI 'Global Artist Chart'" },
        date: "2026.02.27",
        summary: { ko: "테일러 스위프트에 이어 국제음반산업협회 글로벌 아티스트 차트 2위에 오르며 4년 연속 진입이자 최고 순위를 기록했습니다.", en: "Ranked #2 on the IFPI Global Artist Chart behind Taylor Swift, marking their highest rank and 4th consecutive year." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88+IFPI"
      },
      {
        title: { ko: "현진, 파리 디올 컬렉션 쇼 참석... 눈부신 비주얼", en: "Hyunjin Attends Dior Collection Show in Paris... Dazzling Visuals" },
        date: "2026.03.02",
        summary: { ko: "현진이 파리에서 열린 디올 가을-겨울 컬렉션 쇼에 참석해 현지 팬들과 취재진의 뜨거운 환호를 받았습니다.", en: "Hyunjin attended the Dior Fall-Winter Collection show in Paris, receiving passionate cheers from local fans and press." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88+%ED%98%84%EC%A7%84+%EB%94%94%EC%98%AC"
      },
      {
        title: { ko: "데뷔 8주년 기념 팬미팅 '스테이 인 아워 리틀 하우스' 개최", en: "To Hold 8th Anniversary Fanmeeting 'STAY in Our Little House'" },
        date: "2026.03.03",
        summary: { ko: "데뷔 8주년을 맞아 팬들과 특별한 시간을 보내기 위해 대규모 팬미팅을 개최할 예정입니다.", en: "A large-scale fan meeting will be held to spend special time with fans in celebration of their 8th debut anniversary." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88+%ED%8C%AC%EB%AF%B8%ED%8C%85"
      },
      {
        title: { ko: "월드투어 실황 영화, 글로벌 박스오피스 정상 '279억 수익'", en: "World Tour Movie Tops Global Box Office with '27.9 Billion KRW Revenue'" },
        date: "2026.03.01",
        summary: { ko: "투어 실황을 담은 영화가 전 세계 61개 지역에서 개봉해 엄청난 흥행 수익을 거두었습니다.", en: "The movie featuring their live tour opened in 61 regions worldwide, raking in massive box office revenue." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88+%EC%98%81%ED%99%94"
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
        description: { ko: "팀의 핵심 프로듀서이자 든든한 정신적 지주인 호주 출신 멤버. 곡 작업부터 멤버 관리까지 완벽한 리더십을 보여줍니다.", en: "The core producer and solid mental pillar from Australia. Shows perfect leadership from song production to member management." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%EB%B0%A9%EC%B0%AC%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "완벽한 조각 미남 비주얼과 대비되는 엉뚱한 '4차원' 성격의 소유자. 한 치의 오차도 없는 춤의 정석을 보여주는 댄스 반장입니다.", en: "Possesses a quirky 4D personality contrasting his sculpted handsome visuals. The dance captain showing flawless textbook dancing." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%EB%A6%AC%EB%85%B8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "압도적인 성량과 발성을 자랑하는 K-pop 탑티어 래퍼. 쓰리라차(3RACHA) 멤버로 강렬한 랩과 근육질 몸매가 특징입니다.", en: "A top-tier K-pop rapper boasting overwhelming volume and vocalization. 3RACHA member known for intense rap and a muscular physique." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%EC%B0%BD%EB%B9%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "예술적인 춤선과 장발이 찰떡인 무대 장인 비주얼 멤버. 특유의 빙의한 듯한 표정 연기로 퍼포먼스를 이끕니다.", en: "A stage master visual member with artistic dance lines, perfectly pulling off long hair. Leads performances with possessed-like facial expressions." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%ED%98%84%EC%A7%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "랩, 고음 보컬, 프로듀싱 모두 완벽하게 해내는 천재적인 올라운더. 넘치는 에너지와 예능감도 가졌습니다.", en: "A genius all-rounder who perfectly handles rap, high-note vocals, and producing. Also has overflowing energy and variety skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%ED%95%9C%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "매력적인 극저음 동굴 목소리와 주근깨를 가진 요정 비주얼의 반전 매력. 호주 출신의 천사 같은 심성을 가진 멤버입니다.", en: "Unexpected charm of an ultra-deep cave-like voice and fairy visuals with freckles. An angel-hearted member from Australia." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%ED%95%84%EB%A6%AD%EC%8A%A4%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "단단하고 포근한 음색으로 거친 팀의 사운드 중심을 부드럽게 잡아주는 메인 보컬. 깔끔하고 댄디한 외모가 특징입니다.", en: "Main vocalist gently holding the center of the team's rough sound with a solid and warm voice. Features a clean, dandy look." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%EC%8A%B9%EB%AF%BC%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        description: { ko: "독특하고 트렌디한 음색을 가진 팀의 막내. 귀여운 사막여우 상으로 형들의 사랑과 장난을 독차지합니다.", en: "The youngest with a unique and trendy voice. Monopolizes older members' love and pranks with a cute fennec fox look." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%20%ED%82%A4%EC%A6%88%20%EC%95%84%EC%9D%B4%EC%97%94%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM" },
    officialSite: "https://le-sserafim.com/",
    company: "Source Music",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#ffffff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20LE%20SSERAFIM%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "르세라핌(LE SSERAFIM)은 하이브 산하 쏘스뮤직 소속의 5인조 다국적 걸그룹입니다. 그룹명은 'IM FEARLESS'를 애너그램(철자 배열을 바꿈)하여 만든 이름으로, 세상의 시선에 흔들리지 않고 두려움 없이 앞으로 나아가겠다는 굳센 의지를 내포하고 있습니다. 치열한 아이돌 생태계에서 독보적인 '근육질 건강미'와 '칼군무 퍼포먼스'를 내세워 강렬한 인상을 남겼습니다. 데뷔 앨범 'FEARLESS'부터 'ANTIFRAGILE', 'UNFORGIVEN', 'EASY', 'CRAZY'까지 거침없는 상승세를 보이며, 런웨이를 연상케 하는 도도하고 파워풀한 무대로 4세대 걸그룹 최정상 반열에 올랐습니다.",
      en: "LE SSERAFIM is a 5-member multinational girl group under HYBE's Source Music. The name is an anagram of 'IM FEARLESS', implying a strong will to move forward without fear, unswayed by the world's gaze. In the fierce idol ecosystem, they left a strong impression by highlighting unrivaled 'muscular healthy beauty' and 'synchronized sharp choreography'. From their debut 'FEARLESS' to 'ANTIFRAGILE', 'UNFORGIVEN', 'EASY', and 'CRAZY', they showed relentless momentum, rising to the top tier of 4th-gen girl groups with chic and powerful runway-like stages."
    },
    description: {
      ko: "세상의 시선에 굴하지 않는 '두려움 없음'을 상징하는, 압도적인 건강미와 퍼포먼스 최강의 5인조 그룹입니다.",
      en: "Symbolizing 'fearlessness' unyielding to the world's gaze, a 5-member group with overwhelming healthy beauty and the ultimate performance."
    },
    gossip: {
      ko: [
        "멤버들의 복근과 등근육 등 근육량이 엄청나 팬들 사이에서 '근세라핌(근육+르세라핌)'이라는 애칭으로 불립니다.",
        "데뷔 전 혹독한 트레이닝 과정을 담은 쌩얼 다큐멘터리를 유튜브에 공개해 눈물과 감동을 자아냈습니다.",
        "카즈하는 데뷔 전 네덜란드에서 프로 발레리나로 유학 중이었으나 오디션에 합격해 급하게 한국으로 왔습니다.",
        "타이틀곡 안무 강도가 아이돌 최고 수준으로 높아, 라이브를 위해 엄청난 체력 훈련을 병행합니다.",
        "멤버 허윤진은 오페라와 뮤지컬에 재능이 있으며, 팀의 자작곡에도 적극적으로 참여합니다.",
        "맏언니 사쿠라는 일본 아이돌, 아이즈원을 거쳐 르세라핌이 3번째 데뷔인 베테랑 아이돌입니다.",
        "리더 김채원은 단발머리(일명 '채원 단발')로 스타일을 바꾼 후 그룹 컨셉과 찰떡이라는 극찬을 받았습니다.",
        "유튜브 자체 예능 '르니버스'에서 보여주는 망가짐을 불사하는 털털한 예능감이 엄청난 인기 요인입니다.",
        "코첼라 무대에 오르는 등 북미 시장에서도 매우 빠른 속도로 팬덤을 확장하고 있습니다.",
        "막내 홍은채는 음악방송 '뮤직뱅크' MC로 활약하며 특유의 사랑스러움으로 '은채은행장'으로 불립니다."
      ],
      en: [
        "The members' muscle mass (abs, back muscles) is so immense that fans affectionately call them 'Muscle-sserafim'.",
        "They released a raw, bare-faced documentary of their brutal pre-debut training on YouTube, drawing tears and emotion.",
        "Kazuha was studying as a professional ballerina in the Netherlands before passing the audition and rushing to Korea.",
        "Their choreography intensity is among the highest for idols, requiring immense stamina training for live singing.",
        "Member Huh Yunjin has talent in opera and musicals and actively participates in writing the group's songs.",
        "The oldest, Sakura, is a veteran idol debuting for the 3rd time, previously in a Japanese group and IZ*ONE.",
        "Leader Kim Chaewon received huge praise that her bob haircut change perfectly matched the group's concept.",
        "Their easygoing variety show skills, unafraid to ruin their image on their YouTube show 'Leniverse', is a huge popularity factor.",
        "They are expanding their fandom very rapidly in the North American market, including performing at Coachella.",
        "Youngest Hong Eunchae was active as a 'Music Bank' MC, called 'Bank President Eunchae' for her unique loveliness."
      ]
    },
        news: [
      {
        "title": {
          "ko": "'CRAZY' 뮤직비디오 유튜브 조회수 2억 뷰 돌파",
          "en": "'CRAZY' MV Surpasses 200 Million Views on YouTube"
        },
        "date": "2026.02.28",
        "summary": {
          "ko": "미니 4집 타이틀곡 'CRAZY'가 통산 세 번째 2억 뷰를 달성하며 식지 않는 글로벌 인기를 증명했습니다.",
          "en": "Their 4th mini-album title track 'CRAZY' achieved 200M views, their third MV to do so, proving uncooled global popularity."
        },
        "url": "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C+%ED%81%AC%EB%A0%88%EC%9D%B4%EC%A7%80+2%EC%96%B5"
      },
      {
        "title": {
          "ko": "'SPAGHETTI (feat. j-hope)', 스포티파이 최단 2억 스트리밍",
          "en": "'SPAGHETTI (feat. j-hope)' Reaches 200M Spotify Streams in Record Time"
        },
        "date": "2026.02.28",
        "summary": {
          "ko": "방탄소년단 제이홉이 피처링한 곡이 팀 자체 최단 기간인 약 4개월 만에 2억 스트리밍을 달성했습니다.",
          "en": "The track featuring BTS's j-hope hit 200M streams in about 4 months, the group's fastest record."
        },
        "url": "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C+%EC%8A%A4%ED%8C%8C%EA%B2%8C%ED%8B%B0"
      },
      {
        "title": {
          "ko": "'Perfect Night', 일본 누적 재생 수 2억 회 '더블 플래티넘' 인증",
          "en": "'Perfect Night' Certified 'Double Platinum' with 200M Streams in Japan"
        },
        "date": "2026.02.25",
        "summary": {
          "ko": "첫 영어 싱글이 일본레코드협회 기준 2억 스트리밍을 돌파하며 뜨거운 현지 인기를 보여주었습니다.",
          "en": "Their first English single surpassed 200M streams based on RIAJ, showing hot local popularity."
        },
        "url": "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C+%ED%8D%BC%ED%8E%99%ED%8A%B8%EB%82%98%EC%9D%B4%ED%8A%B8"
      },
      {
        "title": {
          "ko": "일본 음악 페스티벌 '서머 소닉 2026' 출연 확정",
          "en": "Confirmed to Perform at Japan Music Festival 'Summer Sonic 2026'"
        },
        "date": "2026.03.01",
        "summary": {
          "ko": "오는 8월 일본에서 열리는 대형 음악 축제 '서머 소닉 2026' 무대에 올라 열기를 더할 예정입니다.",
          "en": "They will heat up the stage at the major music festival 'Summer Sonic 2026' held in Japan this August."
        },
        "url": "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C+%EC%84%9C%EB%A8%B8%EC%86%8C%EB%8B%89"
      }
    ],
    members: [
      {
        id: "sakura", name: { ko: "사쿠라", en: "Sakura" }, role: { ko: "보컬", en: "Vocalist" },
        birth: "1998.03.19", mbti: "INTP", zodiac: { ko: "물고기자리", en: "Pisces" }, height: "163cm", bloodType: "A",
        description: { ko: "총 세 번의 데뷔를 성공시킨 대단한 경력의 베테랑. 지적인 매력과 꾸준히 발전하는 끈기의 아이콘입니다.", en: "A veteran who successfully debuted three times. An icon of persistence and intellectual charm who constantly improves." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EC%82%AC%EC%BF%A0%EB%9D%BC%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "kimchaewon", name: { ko: "김채원", en: "Kim Chaewon" }, role: { ko: "리더/보컬", en: "Leader/Vocalist" },
        birth: "2000.08.01", mbti: "ISTP", zodiac: { ko: "사자자리", en: "Leo" }, height: "163cm", bloodType: "B",
        description: { ko: "칼 같은 춤선과 단단하고 청량한 음색의 소유자. 무대 위 카리스마와 귀여운 외모를 겸비한 리더입니다.", en: "Possesses sharp dance lines and a solid, refreshing voice. A leader combining on-stage charisma and cute looks." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EA%B9%80%EC%B1%84%EC%9B%90%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "huhyunjin", name: { ko: "허윤진", en: "Huh Yunjin" }, role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2001.10.08", mbti: "INFJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "172cm", bloodType: "B",
        description: { ko: "미국 출신으로 뛰어난 가창력과 자작곡 능력을 갖춘 다재다능한 아티스트. 당당한 핫걸 스타일의 표본입니다.", en: "A versatile artist from the US with excellent vocal and songwriting skills. The epitome of a confident hot girl style." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%ED%97%88%EC%9C%A4%EC%A7%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "kazuha", name: { ko: "카즈하", en: "Kazuha" }, role: { ko: "래퍼/댄서", en: "Rapper/Dancer" },
        birth: "2003.08.09", mbti: "ENFP", zodiac: { ko: "사자자리", en: "Leo" }, height: "170cm", bloodType: "Unknown",
        description: { ko: "발레 전공자 특유의 우아하고 유연한 퍼포먼스. 첫사랑을 연상케 하는 청순한 외모에 완벽한 11자 복근을 가졌습니다.", en: "Elegant and flexible performance typical of a ballet major. Has 11-line abs despite innocent looks reminiscent of a first love." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EC%B9%B4%EC%A6%88%ED%95%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "hongeunchae", name: { ko: "홍은채", en: "Hong Eunchae" }, role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2006.11.10", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "170cm", bloodType: "Unknown",
        description: { ko: "팀의 사랑스러운 비타민 막내 '만채'. 무대에서는 나이가 믿기지 않는 당당함과 에너지 넘치는 춤을 선보입니다.", en: "The lovely vitamin youngest. On stage, she shows confidence and energetic dancing unbelievable for her age." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%ED%99%8D%EC%9D%80%EC%B1%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "blackpink",
    name: { ko: "블랙핑크", en: "BLACKPINK" },
    officialSite: "https://www.blackpinkofficial.com/",
    company: "YG Entertainment",
    debut: "2016.08.08",
    fandom: { ko: "블링크 (BLINK)", en: "BLINK" },
    accentColor: "#ff66c4",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20BLACKPINK%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "블랙핑크(BLACKPINK)는 YG 엔터테인먼트 소속의 4인조 다국적 걸그룹입니다. 가장 예쁜 색으로 표현되는 '핑크'에 '블랙'을 더해 '예쁜 게 다가 아니다'라는 반전의 의미를 담고 있습니다. K-POP을 넘어 글로벌 팝 씬을 대표하는 명실상부한 월드클래스 걸그룹으로, 스포티파이와 유튜브 등 글로벌 플랫폼에서 K-POP 걸그룹 최초, 최고의 기록들을 끝없이 경신하고 있습니다. '뚜두뚜두', 'Kill This Love', 'How You Like That', 'Pink Venom' 등 강력한 힙합 베이스의 걸크러시 음악과 세련된 패션 감각으로 전 세계적인 롤모델로 자리 잡았습니다. 2023년에는 아시아 아티스트 최초로 코첼라 페스티벌 헤드라이너로 서며 역사적인 무대를 남겼습니다.",
      en: "BLACKPINK is a 4-member multinational girl group under YG Entertainment. Adding 'Black' to 'Pink' (representing the prettiest color) implies 'pretty isn't everything'. Beyond K-pop, they are undeniably a world-class girl group representing the global pop scene, endlessly breaking 'first' and 'best' records for K-pop girl groups on global platforms like Spotify and YouTube. With powerful hip-hop-based girl crush tracks like 'DDU-DU DDU-DU', 'Kill This Love', 'How You Like That', and 'Pink Venom', along with sophisticated fashion, they became global role models. In 2023, they made history as the first Asian act to headline Coachella."
    },
    description: {
      ko: "유튜브 구독자 수 전 세계 아티스트 1위, 대체 불가능한 아우라와 트렌디한 음악으로 군림하는 K-POP의 여왕들입니다.",
      en: "The queens of K-POP reigning with irreplaceable aura and trendy music, ranking #1 in YouTube subscribers among artists worldwide."
    },
    gossip: {
      ko: [
        "유튜브 채널 구독자 수가 9,000만 명을 돌파하며 저스틴 비버를 제치고 전 세계 모든 아티스트 중 1위를 기록 중입니다.",
        "멤버 4명 전원이 디올(지수), 샤넬(제니), 생로랑(로제), 셀린느(리사) 등 글로벌 최상위 럭셔리 브랜드의 글로벌 앰버서더입니다.",
        "음악뿐만 아니라 멤버들의 사복 패션, 메이크업, 헤어스타일 모든 것이 전 세계적인 트렌드가 됩니다.",
        "'뚜두뚜두' 뮤직비디오는 K-POP 아이돌 그룹 최초로 유튜브 조회수 21억 뷰를 돌파하는 대기록을 썼습니다.",
        "블랙핑크의 콘서트에는 할리우드 배우, 팝스타 등 수많은 해외 유명 셀럽들이 직관하러 오는 것으로 유명합니다.",
        "제니는 코첼라 무대에서 '인간 체리'라는 별명을 얻으며 전 세계 트위터 실시간 트렌드를 장악했습니다.",
        "로제의 음색은 한국에서 '독보적인 황금 음색'으로 불리며 팝송 커버 영상마다 극찬을 받습니다.",
        "리사는 태국에서 국빈급 대우를 받으며, 그녀가 고향 음식점 사진을 올리면 해당 식당은 일주일 내내 매진될 정도입니다.",
        "지수는 특유의 우아함으로 디올 회장 피에트로 베카리로부터 'YG에서 쫓겨나면 내가 데려가겠다'는 애정 어린 농담을 들었습니다.",
        "멤버 4명이 모이면 무대 위 카리스마는 사라지고 시끌벅적하고 귀여운 소녀들로 변하는 갭차이가 매력 포인트입니다."
      ],
      en: [
        "Their YouTube channel surpassed 90 million subscribers, ranking #1 among all global artists, surpassing Justin Bieber.",
        "All 4 members are global ambassadors for top luxury brands: Dior (Jisoo), Chanel (Jennie), YSL (Rosé), and Celine (Lisa).",
        "Not just music, but their street fashion, makeup, and hairstyles all become massive global trends.",
        "The 'DDU-DU DDU-DU' MV was the first K-pop idol group video to hit the massive milestone of 2.1 billion views.",
        "It's famous that numerous Hollywood actors and pop stars personally attend BLACKPINK's concerts.",
        "Jennie earned the nickname 'Human Cherry' at Coachella, dominating worldwide Twitter trending topics.",
        "Rosé's voice is called the 'unrivaled golden voice' in Korea, receiving massive praise for every pop song cover.",
        "Lisa is treated like state royalty in Thailand; if she posts a local restaurant photo, they sell out for weeks.",
        "With her unique elegance, Jisoo received a loving joke from Dior's CEO Pietro Beccari: 'If YG fires her, I'll take her'.",
        "The gap charm is that when all 4 gather, their stage charisma vanishes and they turn into loud, cute girls."
      ]
    },
        news: [
      {
        "title": {
          "ko": "미니 3집 'DEADLINE' 발매 직후 165만 장 판매 'K팝 걸그룹 신기록'",
          "en": "Mini 3rd Album 'DEADLINE' Sells 1.65M Copies 'New K-pop Girl Group Record'"
        },
        "date": "2026.03.03",
        "summary": {
          "ko": "새 미니 앨범 'DEADLINE'이 초동 기록을 경신하며 K팝 걸그룹 사상 가장 높은 판매량을 기록했습니다.",
          "en": "The new mini-album 'DEADLINE' broke initial sales records, achieving the highest sales ever for a K-pop girl group."
        },
        "url": "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC+DEADLINE"
      },
      {
        "title": {
          "ko": "로제, 브릿 어워즈 '올해의 인터내셔널 송' 수상 쾌거",
          "en": "Rosé Wins 'International Song of the Year' at BRIT Awards"
        },
        "date": "2026.03.02",
        "summary": {
          "ko": "로제가 브루노 마스와 협업한 'APT.'로 K팝 아티스트 최초로 영국 최고 권위 음악상 브릿 어워즈를 수상했습니다.",
          "en": "Rosé became the first K-pop artist to win at the prestigious BRIT Awards for her collab 'APT.' with Bruno Mars."
        },
        "url": "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC+%EB%A1%9C%EC%A0%9C+%EB%B8%8C%EB%A6%BF+%EC%96%B4%EC%9B%8C%EC%A6%88"
      },
      {
        "title": {
          "ko": "타이틀곡 'GO', 38개 지역 아이튠즈 1위 및 유튜브 글로벌 1위",
          "en": "Title Track 'GO' Hits #1 on iTunes in 38 Regions & #1 Globally on YouTube"
        },
        "date": "2026.02.28",
        "summary": {
          "ko": "콜드플레이 크리스 마틴이 참여한 타이틀곡 'GO'가 발매와 동시에 전 세계 음원 및 뮤직비디오 차트를 장악했습니다.",
          "en": "Title track 'GO', featuring Coldplay's Chris Martin, dominated global music and MV charts upon release."
        },
        "url": "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC+GO"
      }
    ],
    members: [
      {
        id: "jisoo",
        name: { ko: "지수", en: "Jisoo" },
        role: { ko: "리드보컬", en: "Lead Vocalist" },
        birth: "1995.01.03",
        mbti: "ISTP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "162cm",
        bloodType: "A",
        description: { ko: "배우 느낌이 물씬 나는 고전적이고 우아한 정석 미녀. 털털한 입담과 특유의 허스키한 중저음 보이스가 매력입니다.", en: "A classic and elegant beauty with a strong actor vibe. Easygoing talk and a unique husky deep voice are her charms." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EC%A7%80%EC%88%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jennie",
        name: { ko: "제니", en: "Jennie" },
        role: { ko: "메인래퍼/리드보컬", en: "Main Rapper/Lead Vocalist" },
        birth: "1996.01.16",
        mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm",
        bloodType: "B",
        description: { ko: "머리부터 발끝까지 트렌드 그 자체인 '인간 샤넬'. 압도적인 무대 장악력과 앙칼진 랩, 쫀득한 보컬을 겸비했습니다.", en: "'Human Chanel', the epitome of trends from head to toe. Combines overwhelming stage presence, fierce rap, and catchy vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EC%A0%9C%EB%8B%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "rose",
        name: { ko: "로제", en: "Rosé" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "1997.02.11",
        mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "168cm",
        bloodType: "B",
        description: { ko: "K-POP 씬에서 독보적인 위치를 차지하는 달콤하고 매혹적인 황금 음색. 슬렌더 피지컬에서 나오는 우아한 춤선이 일품입니다.", en: "Sweet and captivating golden voice holding an unrivaled position in K-pop. Elegant dance lines from a slender physique." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EB%A1%9C%EC%A0%9C%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "lisa",
        name: { ko: "리사", en: "Lisa" },
        role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper" },
        birth: "1997.03.27",
        mbti: "ESFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "166.5cm",
        bloodType: "O",
        description: { ko: "무대를 완벽히 찢어놓는 천재적인 댄스 실력과 만화 같은 비율을 가진 태국인 멤버. 폭발적인 카리스마 래퍼입니다.", en: "Thai member with genius dance skills that tear up the stage and comic-like proportions. An explosively charismatic rapper." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EB%A6%AC%EC%82%AC%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "bts",
    name: { ko: "방탄소년단", en: "BTS" },
    officialSite: "https://ibighit.com/bts/kor/",
    company: "BIGHIT MUSIC",
    debut: "2013.06.13",
    fandom: { ko: "아미 (ARMY)", en: "ARMY" },
    accentColor: "#b200ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20BTS%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "방탄소년단(BTS)은 빅히트 뮤직 소속 7인조 보이그룹입니다. '10대, 20대들을 향한 억압과 편견을 막아내고 자신들의 음악과 가치를 지켜내겠다'는 의미를 담고 출발하여, 현재는 K-POP을 넘어 21세기 글로벌 팝 씬을 대표하는 살아있는 전설이 되었습니다. 'Dynamite', 'Butter', 'Permission to Dance' 등으로 빌보드 핫 100 차트 1위를 무수히 석권했으며, 그래미 어워즈에 노미네이트 되고 단독 무대를 펼치는 등 한국 대중음악의 모든 '최초'와 '최고'의 기록을 갈아치웠습니다. 음악적 성취를 넘어 UN 총회 연설, 백악관 방문 등 선한 영향력을 전파하며 언어와 인종의 장벽을 허문 시대의 아이콘입니다.",
      en: "BTS is a 7-member boy group under BIGHIT MUSIC. Starting with the meaning of 'blocking out stereotypes and criticisms aimed at teenagers and protecting their musical values', they are now living legends representing the 21st-century global pop scene beyond K-POP. With hits like 'Dynamite', 'Butter', and 'Permission to Dance', they dominated the Billboard Hot 100 #1 spot numerous times, and rewrote every 'first' and 'best' record in Korean pop music history, including Grammy nominations and solo stages. Beyond musical achievements, they are icons of the era who broke down language and racial barriers, spreading positive influence through UN speeches and White House visits."
    },
    description: {
      ko: "설명이 필요 없는 21세기 팝 아이콘, 빌보드 1위와 그래미의 문을 두드리며 전 세계 음악의 역사를 새로 쓴 레전드입니다.",
      en: "21st-century pop icons needing no explanation, the legends who rewrote global music history by hitting Billboard #1 and knocking on the Grammy's doors."
    },
    gossip: {
      ko: [
        "빌보드 뮤직 어워즈, 아메리칸 뮤직 어워즈, 그래미 어워즈 등 미국 3대 음악 시상식을 모두 휩쓴 유일한 한국 아티스트입니다.",
        "글로벌 팬덤 '아미(ARMY)'는 전 세계적인 자선 활동과 사회 운동을 주도하는 가장 강력하고 모범적인 팬덤으로 꼽힙니다.",
        "멤버 7명 전원이 작사, 작곡, 프로듀싱에 참여하며 자신들의 자전적인 이야기를 음악에 솔직하게 담아냅니다.",
        "연습생 시절 너무 가난해서 좁은 원룸 숙소에서 7명이 함께 살았으나, 지금은 전 세계 스타디움을 매진시키는 슈퍼스타가 되었습니다.",
        "미국 백악관에 초청되어 조 바이든 대통령과 만나 아시아계 대상 혐오 범죄 근절에 대한 목소리를 냈습니다.",
        "한국의 경제적 파급 효과가 매년 수조 원에 달하여 '걸어 다니는 대기업'으로 불립니다.",
        "진은 그룹 내 맏형임에도 불구하고 막내 정국과 친구처럼 티격태격하는 일명 '맏막즈' 케미로 사랑받습니다.",
        "RM은 뛰어난 영어 실력과 지성을 바탕으로 팀의 글로벌 활동 시 든든한 대변인 역할을 완벽히 소화합니다.",
        "슈가와 제이홉, RM이 주축이 된 랩 라인의 믹스테이프(솔로 앨범)는 전 세계 힙합 팬들에게도 큰 호평을 받습니다.",
        "지민, 뷔, 정국은 연습생 시절부터 함께 보컬과 댄스를 다져온 '막내 라인'으로 엄청난 무대 장악력을 보여줍니다."
      ],
      en: [
        "The only Korean artist to sweep all three major US music awards: BBMAs, AMAs, and Grammy nominations.",
        "Their global fandom 'ARMY' is considered the most powerful and exemplary, leading worldwide charity and social movements.",
        "All 7 members participate in writing, composing, and producing, honestly telling their autobiographical stories in their music.",
        "They were so poor as trainees they lived together in a tiny one-room dorm, but are now superstars selling out global stadiums.",
        "They were invited to the White House to meet President Joe Biden and speak out against anti-Asian hate crimes.",
        "They are called a 'walking conglomerate' as their economic impact on South Korea reaches billions of dollars annually.",
        "Despite being the oldest, Jin is loved for his 'oldest-youngest' chemistry, bickering like friends with the youngest, Jungkook.",
        "RM acts as a perfect spokesperson during global promotions with his excellent English and intellect.",
        "The mixtapes (solo albums) from the rap line led by Suga, j-hope, and RM receive critical acclaim even from global hip-hop fans.",
        "Jimin, V, and Jungkook form the 'maknae line' who trained together, showing immense stage presence in vocals and dance."
      ]
    },
        news: [
      {
        "title": {
          "ko": "방탄소년단, 정규 5집 'SWIM' 트랙리스트 공개... 기대감 고조",
          "en": "BTS Reveals Tracklist for 5th Full Album 'SWIM'... Expectations Rise"
        },
        "date": "2026.03.04",
        "summary": {
          "ko": "타이틀곡 'SWIM'을 포함한 정규 5집 앨범의 트랙리스트가 공개되며 전 세계 팬들의 폭발적인 기대를 모으고 있습니다.",
          "en": "The tracklist for the 5th full album, including the title track 'SWIM', has been revealed, gathering explosive global anticipation."
        },
        "url": "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+SWIM"
      },
      {
        "title": {
          "ko": "광화문 대형 컴백 라이브 'ARIRANG' 개최, 넷플릭스 생중계",
          "en": "Massive Comeback Live 'ARIRANG' at Gwanghwamun, Netflix Live Stream"
        },
        "date": "2026.03.03",
        "summary": {
          "ko": "앨범 발매 다음 날 서울 광화문 광장에서 열리는 초대형 컴백 무대가 넷플릭스를 통해 전 세계에 실시간 중계됩니다.",
          "en": "A massive comeback stage at Gwanghwamun Square the day after release will be live-streamed globally via Netflix."
        },
        "url": "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+%EC%BB%B4%EB%B0%B1+%EB%9D%BC%EC%9D%B4%EB%B8%8C"
      },
      {
        "title": {
          "ko": "정국, 자택 수십 차례 찾아온 해외 스토커 구속 기소",
          "en": "Jungkook's Foreign Stalker Who Visited His Home Dozens of Times Indicted"
        },
        "date": "2026.03.01",
        "summary": {
          "ko": "멤버 정국의 거주지를 지속적으로 찾아가 괴롭힌 해외 국적의 스토커가 구속되어 재판에 넘겨졌습니다.",
          "en": "A foreign stalker who continuously visited and harassed member Jungkook at his residence has been arrested and indicted."
        },
        "url": "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8+%EC%A0%95%EA%B5%AD+%EC%8A%A4%ED%86%A0%EC%BB%A4"
      }
    ],
    members: [
      {
        id: "rm",
        name: { ko: "RM", en: "RM" },
        role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper" },
        birth: "1994.09.12",
        mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "181cm",
        bloodType: "A",
        description: { ko: "팀을 이끄는 든든한 지주이자 철학적인 가사를 쓰는 지성파 래퍼. 깊이 있는 예술적 안목과 리더십을 갖췄습니다.", en: "The solid pillar guiding the team and an intellectual rapper writing philosophical lyrics. Has deep artistic insight and leadership." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20RM%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jin",
        name: { ko: "진", en: "Jin" },
        role: { ko: "서브보컬", en: "Sub Vocalist" },
        birth: "1992.12.04",
        mbti: "INTP",
        zodiac: { ko: "사수자리", en: "Sagittarius" },
        height: "179cm",
        bloodType: "O",
        description: { ko: "자타공인 '월드와이드 핸섬' 맏형. 맑고 서정적인 은빛 보이스와 유쾌하고 친근한 성격으로 팀의 분위기를 띄웁니다.", en: "The self-proclaimed 'Worldwide Handsome' oldest brother. Lifts the team's mood with a clear, lyrical silver voice and a fun personality." },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/BTS_Jin_at_Maison_Fred%2C_13_March_2025_04.png/800px-BTS_Jin_at_Maison_Fred%2C_13_March_2025_04.png"
      },
      {
        id: "suga",
        name: { ko: "슈가", en: "SUGA" },
        role: { ko: "리드래퍼", en: "Lead Rapper" },
        birth: "1993.03.09",
        mbti: "ISTP",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        height: "174cm",
        bloodType: "O",
        description: { ko: "팀의 음악적 뼈대를 만드는 천재 프로듀서. 냉철하고 날카로운 래핑 뒤에 따뜻한 츤데레 매력을 숨기고 있습니다.", en: "The genius producer forming the team's musical backbone. Hides a warm 'tsundere' charm behind cold and sharp rapping." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%8A%88%EA%B0%80%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jhope",
        name: { ko: "제이홉", en: "j-hope" },
        role: { ko: "메인댄서/서브래퍼", en: "Main Dancer/Sub Rapper" },
        birth: "1994.02.18",
        mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "177cm",
        bloodType: "A",
        description: { ko: "팀의 퍼포먼스를 총괄하는 안무 반장이자 에너지 넘치는 비타민. 독보적인 그루브와 긍정적인 바이브의 소유자입니다.", en: "The dance captain overseeing team performance and an energetic vitamin. Possesses a unique groove and positive vibe." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%A0%9C%EC%9D%B4%ED%99%89%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jimin",
        name: { ko: "지민", en: "Jimin" },
        role: { ko: "메인댄서/리드보컬", en: "Main Dancer/Lead Vocalist" },
        birth: "1995.10.13",
        mbti: "ESTP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "174cm",
        bloodType: "A",
        description: { ko: "현대무용 전공자 다운 섬세하고 예술적인 춤선. 노래의 도입부를 매혹적으로 살려내는 마성의 유니크한 음색을 가졌습니다.", en: "Delicate and artistic dance lines from a modern dance background. Has a magical, unique voice that captivates song intros." },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Jimin_on_the_way_to_SBS_Radio%2C_31_March_2023_%282%29.jpg"
      },
      {
        id: "v",
        name: { ko: "뷔", en: "V" },
        role: { ko: "서브보컬/리드댄서", en: "Sub Vocalist/Lead Dancer" },
        birth: "1995.12.30",
        mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "179cm",
        bloodType: "AB",
        description: { ko: "세계 1위 미남으로 꼽히는 화려한 조각 비주얼. 얼굴만큼이나 짙고 소울풀한 재즈풍의 저음 보컬이 깊은 여운을 줍니다.", en: "Gorgeous sculpted visuals ranked #1 most handsome worldwide. His deep, soulful jazz-style bass vocal leaves a lasting impression." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EB%B7%94%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jungkook",
        name: { ko: "정국", en: "Jungkook" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "1997.09.01",
        mbti: "INTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "179cm",
        bloodType: "A",
        description: { ko: "노래, 춤, 운동 등 못하는 게 없는 완벽한 '황금 막내'. 흔들림 없는 완벽한 라이브 실력으로 팀의 확신의 센터를 맡고 있습니다.", en: "The perfect 'Golden Maknae' who excels at everything from singing to dancing and sports. The undisputed center with flawless live skills." },
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jung_Kook_of_BTS%2C_February_12%2C_2026_%281%29.png/800px-Jung_Kook_of_BTS%2C_February_12%2C_2026_%281%29.png"
      }
    ]
  },
  {
    id: "g_idle",
    name: { ko: "(여자)아이들", en: "(G)I-DLE" },
    officialSite: "http://www.cubeent.co.kr/gidle",
    company: "Cube Entertainment",
    debut: "2018.05.02",
    fandom: { ko: "네버랜드 (NEVERLAND)", en: "NEVERLAND" },
    accentColor: "#e6002b",
    imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20(G)I-DLE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "(여자)아이들((G)I-DLE)은 큐브 엔터테인먼트 소속의 5인조 다국적 걸그룹입니다. 그룹명은 '각자의 개성을 가진 여자 아이들이 모였다'는 의미를 가졌습니다. K-POP 씬에서 가장 독보적인 '자체 제작 걸그룹'으로, 리더 전소연을 필두로 멤버들이 타이틀곡은 물론 앨범 수록곡 대다수를 직접 작사, 작곡, 프로듀싱합니다. 'LATATA', 'LION', 'Oh my god' 등으로 탄탄한 팬덤을 구축한 후, 'TOMBOY', 'Nxde', '퀸카(Queencard)', 'Super Lady', '클락션(Klaxon)'으로 이어지는 전무후무한 메가 히트를 기록하며 편견을 깨는 메시지와 파격적인 컨셉으로 대체 불가한 걸그룹 정점에 섰습니다.",
      en: "(G)I-DLE is a 5-member multinational girl group under Cube Entertainment. The name means 'a gathering of girls with individual personalities'. They are the most unrivaled 'self-producing girl group' in K-pop. Led by Soyeon, the members personally write, compose, and produce most of their album tracks, including titles. After building a solid fandom with 'LATATA', 'LION', and 'Oh my god', they reached the absolute peak of irreplaceable girl groups with an unprecedented streak of mega-hits: 'TOMBOY', 'Nxde', 'Queencard', 'Super Lady', and 'Klaxon', delivering boundary-breaking messages and unconventional concepts."
    },
    description: {
      ko: "직접 기획하고 부르는 파격적인 컨셉과 편견을 깨는 뼈 있는 메시지로 '걸크러시'의 진수를 보여주는 천재 자체 제작돌입니다.",
      en: "Genius self-producing idols showing the essence of 'girl crush' through unconventional self-planned concepts and biting messages that break stereotypes."
    },
    gossip: {
      ko: [
        "리더 전소연은 그룹의 방향성부터 컨셉, 로고, 곡 작업까지 모든 것을 총괄하여 큐브의 숨은 이사라는 농담을 듣습니다.",
        "'TOMBOY' 가사 중 삐- 소리(검열음)를 활용한 연출은 한국 대중음악에 신선한 충격을 주며 대유행했습니다.",
        "'Nxde' 활동 당시 멤버 전원이 마릴린 먼로를 오마주하여 금발로 파격 변신해 화제를 모았습니다.",
        "민니와 우기는 외국인 멤버임에도 불구하고 팀 내 자작곡 비중을 크게 늘리며 프로듀서로서의 역량도 보여주고 있습니다.",
        "맏언니 미연은 아름다운 외모와 정반대로 엉뚱하고 타격감 좋은 성격이라 멤버들의 장난 타겟 1순위입니다.",
        "막내 슈화는 당당하고 솔직한 입담으로 악플러들에게 사이다 일침을 날리기로 유명합니다.",
        "우기는 친화력이 너무 좋아서 K-POP 아이돌들 사이에 마당발 인맥을 자랑합니다.",
        "라이브 무대에서 AR(백보컬)을 과감히 줄이고 생목소리로 폭발적인 성량을 뽐내 실력파 그룹으로 인정받습니다.",
        "데뷔 전 소연이 '프로듀스 101'과 '언프리티 랩스타'에 출연해 독보적인 랩 실력으로 일찌감치 눈도장을 찍었습니다.",
        "타이틀곡마다 뚜렷한 메시지(페미니즘, 자기애, 편견 타파)를 담아 여성 팬덤의 압도적인 지지를 받습니다."
      ],
      en: [
        "Leader Soyeon oversees everything from group direction to concepts, logos, and songwriting, earning the joke title of Cube's hidden director.",
        "The use of a censor 'beep' sound in the 'TOMBOY' lyrics gave a fresh shock to Korean pop music and became a huge trend.",
        "During 'Nxde', all members radically transformed into blondes as a homage to Marilyn Monroe, drawing massive attention.",
        "Despite being foreign members, Minnie and Yuqi greatly increased their songwriting contributions, showing producing capabilities.",
        "Oldest member Miyeon has a quirky personality entirely opposite to her beautiful looks, making her the #1 target for member pranks.",
        "Youngest Shuhua is famous for her confident, honest talk, often delivering refreshing clapbacks to malicious commenters.",
        "Yuqi has such great social skills that she boasts an incredibly wide network among K-pop idols.",
        "They are recognized as a highly skilled group for drastically reducing backing tracks (AR) to show off their raw, explosive live vocals.",
        "Pre-debut, Soyeon appeared on 'Produce 101' and 'Unpretty Rapstar', making an early mark with her unrivaled rap skills.",
        "Each title track contains clear messages (feminism, self-love, breaking prejudice), earning overwhelming support from a female fandom."
      ]
    },
        news: [
      {
        "title": {
          "ko": "그룹명 '아이들(i-dle)'로 파격 변경... '여자' 떼고 정체성 재확립",
          "en": "Radical Group Name Change to 'i-dle'... Dropping 'G' to Re-establish Identity"
        },
        "date": "2026.03.01",
        "summary": {
          "ko": "데뷔 7주년을 맞아 그룹명에서 '여자(G)'를 삭제하고 '아이들'로 새 출발하며 성별에 얽매이지 않는 정체성을 강조했습니다.",
          "en": "For their 7th anniversary, they dropped 'G' to become 'i-dle', emphasizing an identity unbound by gender."
        },
        "url": "https://news.google.com/search?q=%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4+%EA%B7%B8%EB%A3%B9%EB%AA%85+%EB%B3%80%EA%B2%BD"
      },
      {
        "title": {
          "ko": "전원 재계약 후 미니 8집 '위 아(We are)'로 완전체 컴백",
          "en": "Full Group Comeback with 8th Mini Album 'We are' After Full Contract Renewal"
        },
        "date": "2026.03.02",
        "summary": {
          "ko": "멤버 전원이 소속사와 재계약을 체결한 후, 타이틀곡 '굿 띵'이 수록된 새 앨범으로 화려하게 돌아왔습니다.",
          "en": "After all members renewed contracts, they made a grand return with a new album featuring the title track 'Good Thing'."
        },
        "url": "https://news.google.com/search?q=%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4+We+are"
      }
    ],
    members: [
      {
        id: "miyeon",
        name: { ko: "미연", en: "Miyeon" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "1997.01.31",
        mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "161cm",
        bloodType: "B",
        description: { ko: "디즈니 공주를 연상케 하는 눈부신 정석 미녀. 흔들림 없는 단단한 가창력을 지녔으나 성격은 매우 엉뚱하고 타격감이 좋은 반전 매력을 가졌습니다.", en: "Dazzling classic beauty reminiscent of a Disney princess. Has solid, unwavering vocals but a very quirky personality that makes her a fun target for jokes." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%AF%B8%EC%97%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "minnie",
        name: { ko: "민니", en: "Minnie" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "1997.10.23",
        mbti: "ENFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "167cm",
        bloodType: "O",
        description: { ko: "곡의 도입부를 장악하는 몽환적이고 유니크한 음색을 가진 태국 출신 멤버. 수준급의 작사/작곡 능력으로 팀의 세련된 감성을 더합니다.", en: "Thai member with a dreamy, unique voice that dominates song intros. Adds sophisticated emotion to the team with high-level songwriting skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%AF%BC%EB%8B%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "soyeon",
        name: { ko: "소연", en: "Soyeon" },
        role: { ko: "리더/메인래퍼/프로듀서", en: "Leader/Main Rapper/Producer" },
        birth: "1998.08.26",
        mbti: "INTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "157cm",
        bloodType: "B",
        description: { ko: "팀의 총괄 프로듀서이자 메가 히트곡 제조기. 무대를 씹어먹는 압도적인 래핑과 무대 장악력을 보여주는 천재 카리스마 리더입니다.", en: "The executive producer and mega-hit maker. A genius charismatic leader showing overwhelming rapping and stage presence that devours the stage." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%86%8C%EC%97%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "yuqi",
        name: { ko: "우기", en: "Yuqi" },
        role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" },
        birth: "1999.09.23",
        mbti: "ESFJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "163cm",
        bloodType: "O",
        description: { ko: "매력적이고 허스키한 저음 보컬을 지닌 중국인 멤버. 넘치는 에너지와 엄청난 친화력으로 한국 예능을 휩쓰는 분위기 메이커입니다.", en: "Chinese member with an attractive husky deep vocal. A mood maker sweeping Korean variety shows with overflowing energy and massive sociability." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%9A%B0%EA%B8%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "shuhua",
        name: { ko: "슈화", en: "Shuhua" },
        role: { ko: "서브보컬", en: "Sub Vocalist" },
        birth: "2000.01.06",
        mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "161cm",
        bloodType: "A",
        description: { ko: "하얀 피부와 고전적인 청순 비주얼을 자랑하는 대만 출신 막내. 누구의 눈치도 보지 않는 당당하고 솔직한 '보스 베이비' 매력이 특징입니다.", en: "Youngest from Taiwan boasting white skin and classic innocent visuals. Features a confident and honest 'Boss Baby' charm, caring about nobody's judgement." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(%EC%97%AC%EC%9E%90)%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%8A%88%ED%99%94%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "twice",
    name: { ko: "트와이스", en: "TWICE" },
    officialSite: "https://twice.jype.com/",
    company: "JYP Entertainment",
    debut: "2015.10.20",
    fandom: { ko: "원스 (ONCE)", en: "ONCE" },
    accentColor: "#ff5fa2",
    imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20TWICE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84%20%EA%B3%A0%ED%99%94%EC%A7%88&rs=1&p=0",
    wiki: {
      ko: "트와이스(TWICE)는 JYP 엔터테인먼트 소속의 9인조 다국적 걸그룹입니다. 그룹명은 '좋은 음악으로 한 번, 멋진 퍼포먼스로 또 한 번 감동을 선사하겠다'는 뜻입니다. 데뷔곡 'OOH-AHH하게'부터 'CHEER UP', 'TT', 'KNOCK KNOCK', 'SIGNAL', 'LIKEY', 'What is Love?' 등 발매하는 모든 곡을 대한민국 전역에 유행시키며 K-POP 3세대 걸그룹을 대표하는 원탑 아이콘으로 자리 잡았습니다. 상큼하고 발랄한 에너지부터 우아하고 성숙한 컨셉까지 완벽하게 소화하며, K-POP 걸그룹 최초로 미국 스타디움 단독 콘서트 매진과 일본 돔 투어를 성공시키는 등 현재진행형 글로벌 레전드로 활약 중입니다.",
      en: "TWICE is a 9-member multinational girl group under JYP Entertainment. The name means 'to touch people's hearts once through good music and twice through great performances'. From their debut 'Like OOH-AHH' to 'CHEER UP', 'TT', 'KNOCK KNOCK', 'SIGNAL', 'LIKEY', and 'What is Love?', they made every release a nationwide trend, becoming the undisputed top icon of 3rd-gen K-pop girl groups. Perfectly pulling off everything from fresh, bubbly energy to elegant, mature concepts, they are active as living global legends, being the first K-pop girl group to sell out US stadium concerts and Japan dome tours."
    },
    description: {
      ko: "9인 9색의 빛나는 매력과 따라 부르기 쉬운 메가 히트곡들로 전 세계 팬심을 훔친 K-POP의 국대급 걸그룹입니다.",
      en: "The national-level K-pop girl group that stole global fans' hearts with 9 distinct glowing charms and easy-to-sing-along mega hits."
    },
    gossip: {
      ko: [
        "'TT'의 눈물 흘리는 안무와 'CHEER UP'의 '샤샤샤(Shy Shy Shy)' 파트는 한국을 넘어 전 아시아적인 신드롬 밈이 되었습니다.",
        "음악 방송 1위 통산 100회를 훌쩍 넘기며 역대 걸그룹 최다 1위 기록을 보유하고 있습니다.",
        "데뷔 서바이벌 프로그램 '식스틴'을 통해 결성되었으며, 당초 7인조 예정이었으나 모모와 쯔위가 극적으로 추가 합격해 9인조가 되었습니다.",
        "멤버 9명 전원이 마의 7년 차 징크스를 깨고 JYP 엔터테인먼트와 전원 재계약을 체결해 팬들에게 큰 감동을 주었습니다.",
        "한국, 일본, 대만 3개국 국적의 멤버들이 모여 엄청난 시너지를 내며, 특히 일본에서 K팝의 부흥(3차 한류)을 이끌었습니다.",
        "무대 밖에서는 9명이 수다를 떨기 시작하면 오디오가 1초도 비지 않을 정도로 비글미와 예능감이 넘칩니다.",
        "쯔위는 데뷔 초 양궁 대회 예능에서 머리카락이 활시위에 날리는 우아한 짤 하나로 전 세계 커뮤니티를 뒤집어 놓았습니다.",
        "멤버들이 서로의 생일마다 뽀뽀를 해주는 문화가 있어 남다른 끈끈한 자매애를 자랑합니다.",
        "사나는 한국어를 원어민 수준으로 구사해 '김사나'로 불리며, 특유의 귀여운 애교가 큰 무기입니다.",
        "메인댄서 모모는 걸그룹 탑티어 급의 파워풀하고 유연한 춤 실력으로 전문가들의 극찬을 받습니다."
      ],
      en: [
        "The crying dance in 'TT' and the 'Shy Shy Shy' part in 'CHEER UP' became massive pan-Asian syndrome memes.",
        "They hold the record for the most music show wins by a girl group, far exceeding 100 cumulative #1 trophies.",
        "Formed through the survival show 'SIXTEEN', they were planned to be 7 members, but Momo and Tzuyu were dramatically added to make 9.",
        "All 9 members broke the '7-year curse' by fully renewing their contracts with JYP, deeply moving their fans.",
        "Members from Korea, Japan, and Taiwan create massive synergy, especially leading the 3rd Hallyu wave in Japan.",
        "Off stage, when the 9 gather, they are so chaotic and fun that there isn't a single second of audio silence.",
        "Early in debut, a viral GIF of Tzuyu's hair elegantly blowing as she shot an arrow at an archery variety show flipped global communities.",
        "They have a culture of giving each other kisses on birthdays, showing off an exceptionally tight sisterhood.",
        "Sana speaks Korean at a native level, earning the nickname 'Kim Sana', and her natural cute 'aegyo' is a huge weapon.",
        "Main dancer Momo receives high praise from professionals for her top-tier powerful and flexible dance skills."
      ]
    },
        news: [
      {
        "title": {
          "ko": "트와이스, 뉴욕 UBS 아레나 3일 공연 성료... 2026 월드투어 순항",
          "en": "TWICE Successfully Completes 3-Day Show at NY UBS Arena... 2026 Tour Cruising"
        },
        "date": "2026.03.02",
        "summary": {
          "ko": "진행 중인 'THIS IS FOR' 월드 투어의 일환으로 뉴욕에서 3일간의 공연을 성공적으로 마치며 현지 팬들을 열광시켰습니다.",
          "en": "As part of their ongoing 'THIS IS FOR' world tour, they successfully completed 3 days in NY, thrilling local fans."
        },
        "url": "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4+%EB%89%B4%EC%9A%95"
      },
      {
        "title": {
          "ko": "정연, 쿠싱 증후군 이겨내고 건강 되찾은 반가운 근황",
          "en": "Jeongyeon Shares Welcome Update, Recovering Health After Overcoming Cushing's"
        },
        "date": "2026.02.25",
        "summary": {
          "ko": "건강 문제로 체중 변화를 겪었던 멤버 정연이 크게 호전된 모습과 밝은 근황을 전해 팬들의 응원이 쏟아지고 있습니다.",
          "en": "Member Jeongyeon, who experienced weight changes due to health issues, shared a bright and recovered update, receiving fan support."
        },
        "url": "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4+%EC%A0%95%EC%97%B0+%EA%B1%B4%EA%B0%95"
      },
      {
        "title": {
          "ko": "데뷔 10주년 기념 스페셜 앨범 및 다큐멘터리 영화 발표 예고",
          "en": "Announces 10th Anniversary Special Album and Documentary Movie"
        },
        "date": "2026.01.15",
        "summary": {
          "ko": "다가오는 데뷔 10주년을 맞아 스페셜 앨범 발매와 지난 10년의 기록을 담은 다큐멘터리 영화 공개를 예고했습니다.",
          "en": "Ahead of their 10th anniversary, they teased a special album release and a documentary movie chronicling their past 10 years."
        },
        "url": "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4+10%EC%A3%BC%EB%85%84"
      }
    ],
    members: [
      {
        id: "nayeon",
        name: { ko: "나연", en: "Nayeon" },
        role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" },
        birth: "1995.09.22",
        mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "163cm",
        bloodType: "A",
        description: { ko: "트와이스의 상큼함을 책임지는 맏언니이자 확신의 센터. 과즙미 터지는 매력적인 토끼상 비주얼과 탄탄하고 시원한 보컬 실력을 자랑합니다.", en: "The oldest and undisputed center responsible for TWICE's freshness. Boasts juicy rabbit-like visuals and solid, refreshing vocal skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%82%98%EC%97%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jeongyeon",
        name: { ko: "정연", en: "Jeongyeon" },
        role: { ko: "리드보컬", en: "Lead Vocalist" },
        birth: "1996.11.01",
        mbti: "ISFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "167cm",
        bloodType: "O",
        description: { ko: "보이시한 걸크러시 매력부터 청순함까지 오가는 따뜻한 성격의 멤버. 흔들림 없고 파워풀한 가창력으로 곡의 퀄리티를 높입니다.", en: "A warm-hearted member alternating between boyish girl-crush charm and innocence. Elevates song quality with unwavering, powerful vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%A0%95%EC%97%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "momo",
        name: { ko: "모모", en: "Momo" },
        role: { ko: "메인댄서/서브보컬", en: "Main Dancer/Sub Vocalist" },
        birth: "1996.11.09",
        mbti: "INFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "163cm",
        bloodType: "A",
        description: { ko: "K-POP 씬 전체를 대표하는 댄싱 머신인 일본인 멤버. 무대 위 카리스마와 달리 무대 밖에선 어눌한 말투의 귀여운 바보 매력이 있습니다.", en: "Japanese member representing the dancing machine of the entire K-pop scene. Contrasting her stage charisma, she has a cute, clumsy charm off stage." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%AA%A8%EB%AA%A8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "sana",
        name: { ko: "사나", en: "Sana" },
        role: { ko: "서브보컬", en: "Sub Vocalist" },
        birth: "1996.12.29",
        mbti: "ENFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "164cm",
        bloodType: "B",
        description: { ko: "'샤샤샤' 열풍의 주역인 큐티 섹시 일본인 멤버. 타고난 애교와 능숙한 한국어 구사력, 밝고 사랑스러운 성격으로 팬들을 홀립니다.", en: "The cute & sexy Japanese member who birthed numerous killing parts. Captivates fans with innate aegyo, fluent Korean, and a bright personality." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%82%AC%EB%82%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "jihyo",
        name: { ko: "지효", en: "Jihyo" },
        role: { ko: "리더/메인보컬", en: "Leader/Main Vocalist" },
        birth: "1997.02.01",
        mbti: "ESFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "160cm",
        bloodType: "O",
        description: { ko: "10년의 긴 연습생 생활을 거쳐 팀을 이끄는 든든하고 열정적인 리더. 폭발적인 성량과 에너지 넘치는 댄스를 자랑하는 마이크 대장입니다.", en: "The reliable and passionate leader who endured 10 years of training. The mic captain boasting explosive volume and energetic dancing." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%A7%80%ED%9A%A8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "mina",
        name: { ko: "미나", en: "Mina" },
        role: { ko: "메인댄서/서브보컬", en: "Main Dancer/Sub Vocalist" },
        birth: "1997.03.24",
        mbti: "ISFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "163cm",
        bloodType: "A",
        description: { ko: "11년간 발레를 전공해 특유의 우아한 춤선과 고급스러운 분위기를 풍기는 일본인 멤버. 차분하고 조용한 성격의 '블랙 스완'입니다.", en: "Japanese member with 11 years of ballet training, exuding elegant dance lines and a luxurious vibe. The calm and quiet 'Black Swan'." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%AF%B8%EB%82%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "dahyun",
        name: { ko: "다현", en: "Dahyun" },
        role: { ko: "리드래퍼/서브보컬", en: "Lead Rapper/Sub Vocalist" },
        birth: "1998.05.28",
        mbti: "ISFJ",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        height: "161cm",
        bloodType: "O",
        description: { ko: "별명처럼 두부같이 하얀 피부를 가진 흥 부자. 기막힌 카메라 찾기 능력과 뛰어난 예능감으로 분위기 메이커를 담당합니다.", en: "A joy-rich member with tofu-like white skin as her nickname suggests. Acts as mood maker with uncanny camera-finding skills and great variety sense." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%8B%A4%ED%98%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "chaeyoung",
        name: { ko: "채영", en: "Chaeyoung" },
        role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist" },
        birth: "1999.04.23",
        mbti: "INFP",
        zodiac: { ko: "황소자리", en: "Taurus" },
        height: "159cm",
        bloodType: "B",
        description: { ko: "독특한 취향과 자유로운 영혼을 가진 '아기 맹수'. 훌륭한 랩 실력뿐만 아니라 그림과 작사 등 예술적 재능이 매우 뛰어납니다.", en: "A 'baby beast' with unique tastes and a free spirit. Has excellent artistic talents in drawing and lyric writing along with great rap skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%B1%84%EC%98%81%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "tzuyu",
        name: { ko: "쯔위", en: "Tzuyu" },
        role: { ko: "리드댄서/서브보컬", en: "Lead Dancer/Sub Vocalist" },
        birth: "1999.06.14",
        mbti: "ISFP",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        height: "170cm",
        bloodType: "A",
        description: { ko: "세상에서 가장 아름다운 얼굴 1위에 오르기도 했던 대만 출신의 기럭지 막내. 인형 같은 무결점 외모와 엉뚱한 매력을 가졌습니다.", en: "The tall youngest from Taiwan who once ranked #1 for Most Beautiful Face in the World. Has doll-like flawless looks and a quirky charm." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%AF%94%EC%9C%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  }
];
