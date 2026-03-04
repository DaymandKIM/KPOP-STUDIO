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
        title: { ko: "뉴진스, 스포티파이 스트리밍 50억 회 돌파 최단기 기록", en: "NewJeans Sets Record for Fastest 5 Billion Streams on Spotify" },
        date: "2026.03.15",
        summary: { ko: "데뷔 후 최단기간 내에 글로벌 플랫폼 스포티파이 누적 스트리밍 50억 회를 돌파하며 막강한 음원 파워를 증명했습니다.", en: "Proved immense streaming power by surpassing 5 billion cumulative streams on Spotify in the shortest time since debut." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4"
      },
      {
        title: { ko: "도쿄돔 팬미팅 전석 매진, 9만 버니즈 열광", en: "Tokyo Dome Fanmeeting Sold Out, 90,000 Bunnies Go Wild" },
        date: "2026.03.22",
        summary: { ko: "해외 아티스트 사상 데뷔 최단기간 도쿄돔 입성 기록을 세운 데 이어, 시야제한석까지 초고속 매진을 기록했습니다.", en: "Following their record for the fastest Tokyo Dome entry by a foreign artist, even restricted view seats sold out instantly." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%8F%84%EC%BF%84%EB%8F%94"
      },
      {
        title: { ko: "뉴진스 'Ditto', 멜론 주간 차트 역대 최장 1위 신기록", en: "NewJeans 'Ditto' Sets New Record for Longest #1 on Melon Weekly Chart" },
        date: "2026.02.10",
        summary: { ko: "겨울 감성의 메가 히트곡 'Ditto'가 14주 연속 1위를 차지하며 한국 음원 차트 역사를 새로 썼습니다.", en: "The winter mega-hit 'Ditto' rewrote Korean music chart history by claiming #1 for 14 consecutive weeks." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%94%94%ED%86%A0%20%EA%B8%B0%EB%A1%9D"
      },
      {
        title: { ko: "영국 음악 매거진 NME 커버 장식 '글로벌 팝 센세이션'", en: "Graces Cover of UK Music Magazine NME as 'Global Pop Sensation'" },
        date: "2026.02.05",
        summary: { ko: "권위 있는 영국 음악 매거진 NME가 뉴진스를 '2020년대 팝의 미래를 제시하는 그룹'으로 집중 조명했습니다.", en: "Prestigious UK music magazine NME highlighted NewJeans as 'the group presenting the future of pop in the 2020s'." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20NME"
      },
      {
        title: { ko: "뉴진스, 한국관광 명예홍보대사 위촉", en: "NewJeans Appointed Honorary Ambassadors for Korea Tourism" },
        date: "2026.02.20",
        summary: { ko: "전 세계적인 인지도를 바탕으로 20~30대 글로벌 관광객을 한국으로 이끄는 새로운 얼굴로 발탁되었습니다.", en: "Appointed as the new faces to draw global tourists in their 20s and 30s to Korea based on their worldwide recognition." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EA%B4%80%EA%B4%91%ED%99%8D%EB%B3%B4%EB%8C%80%EC%82%AC"
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
        title: { ko: "아이브, 서울 앙코르 콘서트 3분 만에 전석 매진", en: "IVE's Seoul Encore Concert Sold Out in 3 Minutes" },
        date: "2026.02.12",
        summary: { ko: "첫 번째 월드투어의 피날레를 장식하는 서울 앙코르 콘서트 티켓이 오픈 3분 만에 매진되며 티켓 파워를 과시했습니다.", en: "Tickets for the Seoul encore concert marking the finale of their first world tour sold out in 3 minutes, showing immense ticket power." },
        url: "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EC%BD%98%EC%84%9C%ED%8A%B8%20%EB%A7%A4%EC%A7%84"
      },
      {
        title: { ko: "장원영, 이탈리아 밀라노 패션위크에서 빛난 국위선양 비주얼", en: "Jang Wonyoung Shines at Milan Fashion Week with Breathtaking Visuals" },
        date: "2026.01.20",
        summary: { ko: "글로벌 앰버서더로 밀라노 패션위크에 참석한 장원영이 전 세계 파파라치들의 스포트라이트를 독차지했습니다.", en: "Attending Milan Fashion Week as a global ambassador, Jang Wonyoung monopolized the spotlight from paparazzi worldwide." },
        url: "https://news.google.com/search?q=%EC%9E%A5%EC%9B%90%EC%98%81%20%EB%B0%80%EB%9D%BC%EB%85%B8"
      },
      {
        title: { ko: "아이브 'I AM', 유튜브 조회수 3억 뷰 돌파", en: "IVE 'I AM' Surpasses 300 Million YouTube Views" },
        date: "2026.02.05",
        summary: { ko: "짜릿한 고음과 화려한 퍼포먼스가 돋보이는 'I AM' 뮤직비디오가 3억 뷰를 돌파하며 통산 세 번째 기록을 세웠습니다.", en: "The 'I AM' MV featuring thrilling high notes and performance surpassed 300M views, marking their third MV to reach the milestone." },
        url: "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%EC%95%84%EC%9D%B4%EC%97%A0%203%EC%96%B5"
      },
      {
        title: { ko: "안유진, 금융권 및 주류 광고 모델 연속 발탁 '대세 입증'", en: "An Yujin Proves Trendiness as New Model for Finance and Liquor Brands" },
        date: "2026.03.18",
        summary: { ko: "건강하고 신뢰감 있는 이미지로 금융권과 주류 업계의 러브콜을 연이어 받으며 대세 광고 퀸임을 입증했습니다.", en: "With a healthy and trustworthy image, she received consecutive calls from finance and liquor industries, proving her status as an advertising queen." },
        url: "https://news.google.com/search?q=%EC%95%88%EC%9C%A0%EC%A7%84%20%EA%B4%91%EA%B3%A0"
      },
      {
        title: { ko: "아이브, 제21회 한국대중음악상 3관왕 영예", en: "IVE Wins 3 Awards at 21st Korean Music Awards" },
        date: "2026.03.28",
        summary: { ko: "올해의 노래상, 최우수 K-POP 앨범상 등을 휩쓸며 대중성과 음악성을 동시에 인정받았습니다.", en: "Swept Song of the Year and Best K-POP Album, being recognized for both massive popularity and musicality." },
        url: "https://news.google.com/search?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20%ED%95%9C%EA%B5%AD%EB%8C%80%EC%A4%91%EC%9D%8C%EC%95%85%EC%83%81"
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
        title: { ko: "에스파, 빌보드 200 차트 탑10 진입 '커리어 하이'", en: "aespa Enters Top 10 of Billboard 200 Chart, Reaching 'Career High'" },
        date: "2026.03.02",
        summary: { ko: "정규 1집 'Armageddon' 앨범이 미국 빌보드 메인 차트에 최상위권으로 진입하며 글로벌 파급력을 증명했습니다.", en: "Their 1st full album 'Armageddon' entered the very top tiers of the US Billboard main chart, proving their global impact." },
        url: "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EB%B9%8C%EB%B3%B4%EB%93%9C"
      },
      {
        title: { ko: "'Supernova' 식지 않는 인기, 스포티파이 4억 스트리밍", en: "'Supernova' Remains Hot, Reaches 400M Spotify Streams" },
        date: "2026.03.14",
        summary: { ko: "발매 된 지 수개월이 지났음에도 불구하고 밈과 챌린지를 양산하며 글로벌 스트리밍 차트에서 식지 않는 인기를 보여줍니다.", en: "Despite being released months ago, it continues to spawn memes and challenges, showing uncooled popularity on global streaming charts." },
        url: "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EC%8A%88%ED%8D%BC%EB%85%B8%EB%B0%94"
      },
      {
        title: { ko: "에스파, 두 번째 월드투어 'SYNK : PARALLEL LINE' 도쿄돔 매진", en: "aespa's 2nd World Tour 'SYNK : PARALLEL LINE' Sells Out Tokyo Dome" },
        date: "2026.01.30",
        summary: { ko: "해외 걸그룹 최단기간 도쿄돔 입성 기록을 보유한 에스파가 두 번째 투어에서도 이틀 연속 매진 신화를 썼습니다.", en: "aespa, who holds the record for the fastest Tokyo Dome entry by a foreign girl group, sold out two consecutive days again for their second tour." },
        url: "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EB%8F%84%EC%BF%84%EB%8F%94"
      },
      {
        title: { ko: "윈터, 럭셔리 브랜드 구찌(Gucci) 글로벌 앰버서더 발탁", en: "Winter Selected as Global Ambassador for Luxury Brand Gucci" },
        date: "2026.02.12",
        summary: { ko: "세련되고 고혹적인 분위기를 인정받아 이탈리아 명품 브랜드 구찌의 새로운 글로벌 얼굴로 선정되었습니다.", en: "Recognized for her sophisticated and alluring vibe, she was chosen as the new global face for the Italian luxury brand Gucci." },
        url: "https://news.google.com/search?q=%EC%9C%88%ED%84%B0%20%EC%95%B0%EB%B2%84%EC%84%9C%EB%8D%94"
      },
      {
        title: { ko: "에스파, 제22회 한국대중음악상 4관왕 '올해의 음악인' 선정", en: "aespa Wins 4 Awards at KMA, Crowned 'Musician of the Year'" },
        date: "2026.03.25",
        summary: { ko: "'쇠 맛' 신드롬을 이끌며 대중과 평단을 모두 만족시킨 성과로 최고의 영예인 올해의 음악인상을 수상했습니다.", en: "Leading the 'iron taste' syndrome and satisfying both the public and critics, they took home the highest honor: Musician of the Year." },
        url: "https://news.google.com/search?q=%EC%97%90%EC%8A%A4%ED%8C%8C%20%EB%8C%80%EC%83%81"
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
        title: { ko: "스트레이 키즈, 빌보드 200 5연속 1위 대기록 달성", en: "Stray Kids Achieves Massive Record: 5 Consecutive #1s on Billboard 200" },
        date: "2026.03.20",
        summary: { ko: "새 미니 앨범 발매와 동시에 미국 빌보드 메인 앨범 차트 정상에 오르며 K-POP 보이그룹의 새 역사를 쓰고 있습니다.", en: "Topped the US Billboard main album chart simultaneously with their new mini-album release, writing new history for K-pop boy groups." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88%20%EB%B9%8C%EB%B3%B4%EB%93%9C"
      },
      {
        title: { ko: "현진, 베르사체 글로벌 앰버서더 발탁 '독보적 관능미'", en: "Hyunjin Appointed Versace Global Ambassador, 'Unrivaled Sensuality'" },
        date: "2026.01.05",
        summary: { ko: "매혹적인 비주얼과 퍼포먼스를 인정받아 이탈리아 럭셔리 하우스 베르사체의 글로벌 얼굴로 선정되었습니다.", en: "Recognized for his captivating visuals and performance, he was chosen as the global face of Italian luxury house Versace." },
        url: "https://news.google.com/search?q=%ED%98%84%EC%A7%84%20%EB%B2%A0%EB%A5%B4%EC%82%AC%EC%B2%B4"
      },
      {
        title: { ko: "스트레이 키즈, 美 '롤라팔루자' 헤드라이너 무대 초토화", en: "Stray Kids Devastates Stage as Headliners at US 'Lollapalooza'" },
        date: "2026.03.01",
        summary: { ko: "미국 시카고에서 열린 대형 음악 페스티벌의 간판 출연자로 나서 라이브 밴드와 함께 폭발적인 무대를 선보였습니다.", en: "Appeared as marquee performers at the major US music festival in Chicago, delivering explosive stages with a live band." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88%20%EB%A1%A4%EB%9D%BC%ED%8C%94%EB%A3%A8%EC%9E%90"
      },
      {
        title: { ko: "자체 콘텐츠 'SKZ CODE' 누적 조회수 5억 뷰 돌파", en: "Original Content 'SKZ CODE' Surpasses 500M Cumulative Views" },
        date: "2026.01.12",
        summary: { ko: "무대 위 카리스마와 대비되는 멤버들의 비글미 넘치는 일상과 예능감이 담긴 콘텐츠로 전 세계 팬들을 끌어모으고 있습니다.", en: "Attracting global fans with content showing their beagle-like daily lives and variety skills, contrasting their on-stage charisma." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88%20%EC%9C%A0%ED%8A%9C%EB%B8%8C"
      },
      {
        title: { ko: "스포티파이 연말 결산 '가장 많이 스트리밍된 K팝 보이그룹' 2위", en: "Spotify Year-End: 2nd 'Most Streamed K-pop Boy Group'" },
        date: "2026.01.01",
        summary: { ko: "방탄소년단에 이어 스포티파이 스트리밍 순위 최상단에 이름을 올리며 굳건한 글로벌 스트리밍 파워를 입증했습니다.", en: "Ranked at the very top of Spotify streaming charts right behind BTS, proving their solid global streaming power." },
        url: "https://news.google.com/search?q=%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%ED%82%A4%EC%A6%88%20%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4"
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
        title: { ko: "르세라핌, 美 '코첼라' 뜨겁게 달군 파워풀 퍼포먼스", en: "LE SSERAFIM Heats Up US 'Coachella' with Powerful Performance" },
        date: "2026.02.14",
        summary: { ko: "세계 최대 음악 축제인 코첼라 무대에 올라 밴드 편곡에 맞춘 강렬한 퍼포먼스로 사막의 밤을 열광시켰습니다.", en: "Took the stage at the world's largest music festival Coachella, thrilling the desert night with intense performances to band arrangements." },
        url: "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EC%BD%94%EC%B2%BC%EB%9D%BC"
      },
      {
        title: { ko: "'CRAZY' 뮤직비디오, 공개 2주 만에 1억 뷰 돌파", en: "'CRAZY' MV Surpasses 100M Views in Just 2 Weeks" },
        date: "2026.01.15",
        summary: { ko: "중독성 강한 보깅 댄스와 힙한 비주얼이 담긴 새 뮤직비디오가 폭발적인 글로벌 조회수를 기록 중입니다.", en: "The new MV featuring addictive voguing dance and hip visuals is recording explosive global views." },
        url: "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%ED%81%AC%EB%A0%88%EC%9D%B4%EC%A7%80"
      },
      {
        title: { ko: "일본 오리콘 차트 상반기 랭킹 '아티스트별 세일즈' 1위", en: "Ranks #1 in 'Sales by Artist' on Japan Oricon First Half Rankings" },
        date: "2026.01.20",
        summary: { ko: "K-POP 걸그룹 최정상급 일본 내 인기를 증명하며 앨범 및 굿즈 판매량에서 압도적인 성적을 거두었습니다.", en: "Proved top-tier K-pop girl group popularity in Japan, achieving overwhelming results in album and merch sales." },
        url: "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EC%98%A4%EB%A6%AC%EC%BD%98"
      },
      {
        title: { ko: "하우스 앰버서더 루이비통과 함께한 글로벌 캠페인 화제", en: "Global Campaign with House Ambassador Louis Vuitton Becomes Hot Topic" },
        date: "2026.01.11",
        summary: { ko: "멤버 전원이 루이비통의 하우스 앰버서더로 발탁된 후 공개된 첫 공식 글로벌 캠페인이 패션계의 주목을 받았습니다.", en: "The first official global campaign released after all members were chosen as Louis Vuitton house ambassadors caught the fashion world's attention." },
        url: "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EB%A3%A8%EC%9D%B4%EB%B9%84%ED%86%B5"
      },
      {
        title: { ko: "르세라핌 자체 예능 '르니버스' 시즌3 런칭", en: "LE SSERAFIM's Original Variety 'Leniverse' Launches Season 3" },
        date: "2026.02.25",
        summary: { ko: "무대 위 카리스마와 정반대되는 멤버들의 리얼하고 코믹한 일상을 담은 자체 예능이 새 시즌으로 돌아왔습니다.", en: "The original variety show capturing the members' real and comical daily lives, complete opposite of their stage charisma, returned with a new season." },
        url: "https://news.google.com/search?q=%EB%A5%B4%EC%84%B8%EB%9D%BC%ED%95%8C%20%EB%A5%B4%EB%8B%88%EB%B2%84%EC%8A%A4"
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
        title: { ko: "블랙핑크, 전 멤버 소속사 '따로 또 같이' 행보... 개인 레이블 설립", en: "BLACKPINK Members Pursue 'Together but Separate' Path... Establish Solo Labels" },
        date: "2026.03.10",
        summary: { ko: "그룹 활동은 YG와 계속 함께하되 개별 활동은 각자의 1인 기획사를 설립하여 더욱 자유롭고 독보적인 커리어를 예고했습니다.", en: "While group activities remain with YG, they signaled freer and unique careers by establishing one-person agencies for solo promotions." },
        url: "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EA%B0%9C%EC%9D%B8%ED%99%9C%EB%8F%99"
      },
      {
        title: { ko: "K팝 걸그룹 최초 '코첼라' 헤드라이너 역대급 무대 '외신 극찬'", en: "First K-pop Girl Group to Headline 'Coachella', Epic Stage Praised by Foreign Press" },
        date: "2023.04.18",
        summary: { ko: "미국 최대 음악 페스티벌 코첼라에서 메인 무대를 장식하며 한복 디테일과 부채춤을 접목한 무대로 전 세계를 매료시켰습니다.", en: "Gracing the main stage of the US's largest music festival, they captivated the world with stages incorporating Hanbok details and fan dances." },
        url: "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EC%BD%94%EC%B2%BC%EB%9D%BC"
      },
      {
        title: { ko: "BORN PINK 월드투어, 걸그룹 사상 최고 수익 3,500억 원 달성", en: "BORN PINK World Tour Achieves Highest Revenue for Girl Group at 350 Billion KRW" },
        date: "2026.02.20",
        summary: { ko: "전 세계 34개 도시에서 180만 명의 관객을 동원하며 전 세계 걸그룹 투어 역사상 최고 수익을 올리는 대기록을 썼습니다.", en: "Mobilizing 1.8M audiences across 34 global cities, they set a massive record for the highest-grossing girl group tour in history." },
        url: "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%ED%88%AC%EC%96%B4%20%EC%88%98%EC%9D%B5"
      },
      {
        title: { ko: "영국 찰스 3세 국왕으로부터 대영제국 훈장(MBE) 수훈", en: "Received Honorary MBEs from UK's King Charles III" },
        date: "2023.11.22",
        summary: { ko: "제26차 유엔 기후변화협약 당사국 총회(COP26) 홍보대사로 활동한 공로를 인정받아 버킹엄 궁전에서 훈장을 수여받았습니다.", en: "Recognized for their work as COP26 advocates, they were awarded MBEs at Buckingham Palace." },
        url: "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%ED%9B%88%EC%9E%A5"
      },
      {
        title: { ko: "유튜브 구독자 9천만 명 최초 돌파, 전 세계 1위 굳건", en: "First to Surpass 90M YouTube Subs, Solidifying Global #1" },
        date: "2023.07.17",
        summary: { ko: "공식 유튜브 채널 구독자 수가 전 세계 모든 아티스트를 통틀어 최초로 9000만 명을 돌파하며 범접 불가한 인기를 과시했습니다.", en: "Their official YouTube channel became the first among all global artists to surpass 90M subs, showing untouchable popularity." },
        url: "https://news.google.com/search?q=%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC%20%EC%9C%A0%ED%8A%9C%EB%B8%8C%201%EC%9C%84"
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
        title: { ko: "방탄소년단, 전 멤버 군 복무 완료 임박... 2026년 완전체 컴백 초읽기", en: "BTS Members Nearing End of Military Service... Countdown to Full-Group Comeback in 2026" },
        date: "2026.02.15",
        summary: { ko: "군백기를 무사히 마친 멤버들이 다시 모여 준비할 거대한 프로젝트에 전 세계 팝 시장의 이목이 쏠리고 있습니다.", en: "The entire global pop market's attention is focused on the massive projects they will prepare as members reunite after completing military service." },
        url: "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%BB%B4%EB%B0%B1"
      },
      {
        title: { ko: "스포티파이 스트리밍 누적 400억 회 돌파, 亞 아티스트 최초 신기록", en: "Surpasses 40 Billion Cumulative Spotify Streams, First Asian Artist Record" },
        date: "2026.02.22",
        summary: { ko: "그룹 공백기임에도 불구하고 솔로곡과 기존 히트곡들이 꾸준히 재생되며 전무후무한 대기록을 작성했습니다.", en: "Despite the group's hiatus, solo tracks and old hits continued to be played, setting an unprecedented massive record." },
        url: "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%8A%A4%ED%8F%AC%ED%8B%B0%ED%8C%8C%EC%9D%B4"
      },
      {
        title: { ko: "'Dynamite' 뮤직비디오 유튜브 조회수 20억 뷰 돌파", en: "'Dynamite' MV Surpasses 2 Billion Views on YouTube" },
        date: "2026.03.10",
        summary: { ko: "전 세계에 희망과 위로를 전했던 글로벌 메가 히트곡 다이너마이트가 또 한 번 유튜브 대기록을 세웠습니다.", en: "The global mega-hit 'Dynamite', which delivered hope and comfort to the world, set yet another massive YouTube record." },
        url: "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EB%8B%A4%EC%9D%B4%EB%84%88%EB%A7%88%EC%9D%B4%ED%8A%B8%2020%EC%96%B5"
      },
      {
        title: { ko: "정국 솔로 앨범, 美 빌보드 핫 100 장기 흥행 '글로벌 팝스타 위용'", en: "Jungkook's Solo Album Long-Running Hit on US Billboard Hot 100, 'Global Popstar Majesty'" },
        date: "2026.03.05",
        summary: { ko: "막내 정국의 솔로곡들이 팝의 본고장 미국 라디오와 음원 차트를 휩쓸며 방탄소년단의 저력을 보여줬습니다.", en: "The youngest member Jungkook's solo songs swept US radio and music charts, showing BTS's individual power." },
        url: "https://news.google.com/search?q=%EC%A0%95%EA%B5%AD%20%EB%B9%8C%EB%B3%B4%EB%93%9C"
      },
      {
        title: { ko: "방탄소년단 기념 우표 2차 발행, 우체국 서버 마비 사태", en: "BTS Commemorative Stamps 2nd Release, Post Office Servers Crash" },
        date: "2026.03.15",
        summary: { ko: "데뷔 11주년을 기념해 발행된 공식 우표를 구매하기 위해 수백만 명의 팬들이 몰리며 시스템이 마비되었습니다.", en: "Millions of fans rushed to purchase the official stamps released to commemorate their 11th anniversary, crashing the systems." },
        url: "https://news.google.com/search?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%9A%B0%ED%91%9C"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%A7%84%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%A7%80%EB%AF%BC%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8%20%EC%A0%95%EA%B5%AD%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
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
        title: { ko: "(여자)아이들, 월드투어 'iDOL' 성공적 개최... 글로벌 광폭 행보", en: "(G)I-DLE Successfully Holds World Tour 'iDOL'... Massive Global Steps" },
        date: "2026.03.08",
        summary: { ko: "자신들의 아이덴티티를 담은 초대형 월드투어를 진행하며 미주, 유럽, 아시아 팬들을 완벽하게 매료시켰습니다.", en: "Conducting a massive world tour carrying their identity, perfectly captivating fans across the Americas, Europe, and Asia." },
        url: "https://news.google.com/search?q=%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%9B%94%EB%93%9C%ED%88%AC%EC%96%B4"
      },
      {
        title: { ko: "'클락션(Klaxon)' 여름 음원 차트 올킬, 명실상부 서머퀸 등극", en: "'Klaxon' Sweeps Summer Music Charts, Unquestionable Summer Queens" },
        date: "2026.02.30",
        summary: { ko: "레트로 빈티지 컨셉의 여름 시즌송으로 차트를 휩쓸며 '믿고 듣는 (여자)아이들' 공식을 다시 증명했습니다.", en: "Sweeping the charts with a retro vintage summer season song, proving the formula of 'Trust and Listen to (G)I-DLE'." },
        url: "https://news.google.com/search?q=%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4%20%ED%81%B4%EB%9D%BD%EC%85%98"
      },
      {
        title: { ko: "전소연, 한국음악저작권협회 정회원 승격 '천재 프로듀서'", en: "Soyeon Promoted to Regular Member of KOMCA, 'Genius Producer'" },
        date: "2026.03.01",
        summary: { ko: "수많은 히트곡을 직접 작사, 작곡한 저작권료 수익과 공로를 인정받아 최연소 급으로 정회원에 이름을 올렸습니다.", en: "Recognized for her royalties and contributions from writing/composing numerous hits, she became a regular member at a very young age." },
        url: "https://news.google.com/search?q=%EC%A0%84%EC%86%8C%EC%97%B0%20%EC%A0%80%EC%9E%91%EA%B6%8C"
      },
      {
        title: { ko: "미연 & 우기, 예능계 블루칩 부상... 각종 프로그램 섭외 1순위", en: "Miyeon & Yuqi Rise as Variety Blue Chips... #1 Casting Choices" },
        date: "2026.01.11",
        summary: { ko: "독보적인 예능감과 밝은 에너지로 웹 예능과 지상파를 가리지 않고 러브콜을 받으며 대세로 활약 중입니다.", en: "With unmatched variety skills and bright energy, they are active trends receiving love calls from both web shows and public broadcasts." },
        url: "https://news.google.com/search?q=%EB%AF%B8%EC%97%B0%20%EC%9A%B0%EA%B8%B0%20%EC%98%88%EB%8A%A5"
      },
      {
        title: { ko: "정규 2집 '2', 밀리언셀러 달성 및 국내외 차트 1위 석권", en: "2nd Full Album '2' Reaches Million Seller, Sweeps Domestic/Global Charts #1" },
        date: "2026.02.29",
        summary: { ko: "파격적인 메시지를 담은 정규 2집 앨범이 초동 100만 장을 넘기며 커리어 하이를 달성했습니다.", en: "Their 2nd full album containing unconventional messages exceeded 1 million first-week sales, achieving a career high." },
        url: "https://news.google.com/search?q=%EC%97%AC%EC%9E%90%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%B0%80%EB%A6%AC%EC%96%B8%EC%85%80%EB%9F%AC"
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
        title: { ko: "트와이스, 해외 여성 아티스트 최초 일본 닛산 스타디움 공연 성료", en: "TWICE Becomes First Foreign Female Artist to Perform at Japan's Nissan Stadium" },
        date: "2026.02.29",
        summary: { ko: "일본 최대 규모의 공연장인 닛산 스타디움에 해외 여성 아티스트 사상 최초로 입성하며 압도적인 관객 동원력을 증명했습니다.", en: "Proved overwhelming ticket power by becoming the first foreign female artist to hold a concert at Nissan Stadium, Japan's largest venue." },
        url: "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%8B%9B%EC%82%B0%20%EC%8A%A4%ED%83%80%EB%94%94%EC%9B%80"
      },
      {
        title: { ko: "빌보드 200 차트 1위 달성 'With YOU-th', 글로벌 원탑 걸그룹 위엄", en: "Achieved #1 on Billboard 200 with 'With YOU-th', Majesty of Top Global Girl Group" },
        date: "2026.01.04",
        summary: { ko: "미니 13집으로 미국 메인 앨범 차트인 빌보드 200에서 1위를 차지하며 데뷔 10년 차에도 끊임없는 성장세를 보여줬습니다.", en: "Topped the US main album chart Billboard 200 with their 13th mini-album, showing continuous growth even in their 10th year." },
        url: "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EB%B9%8C%EB%B3%B4%EB%93%9C%201%EC%9C%84"
      },
      {
        title: { ko: "다현, 명품 브랜드 마이클 코어스 글로벌 앰버서더 발탁", en: "Dahyun Appointed Global Ambassador for Luxury Brand Michael Kors" },
        date: "2023.07.26",
        summary: { ko: "단아하면서도 세련된 이미지로 미국 대표 패션 브랜드 마이클 코어스의 글로벌 얼굴로 선정되었습니다.", en: "Chosen as the global face of representative US fashion brand Michael Kors for her elegant and sophisticated image." },
        url: "https://news.google.com/search?q=%EB%8B%A4%ED%98%84%20%EB%A7%88%EC%9D%B4%ED%81%B4%20%EC%BD%94%EC%96%B4%EC%8A%A4"
      },
      {
        title: { ko: "트와이스 미국 전역 스타디움 투어 'SoFi 스타디움' 전석 매진", en: "TWICE's US Stadium Tour Sells Out 'SoFi Stadium'" },
        date: "2023.06.12",
        summary: { ko: "K-POP 걸그룹 최초로 미국 로스앤젤레스 소파이 스타디움에서 열린 단독 콘서트를 매진시키는 대기록을 달성했습니다.", en: "Achieved the massive milestone of becoming the first K-pop girl group to sell out a solo concert at SoFi Stadium in LA, USA." },
        url: "https://news.google.com/search?q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4%20%EC%86%8C%ED%8C%8C%EC%9D%B4%20%EC%8A%A4%ED%83%80%EB%94%94%EC%9B%80"
      },
      {
        title: { ko: "나연에 이어 지효, 솔로 데뷔... 빌보드 200 최상위권 진입 쾌거", en: "Following Nayeon, Jihyo's Solo Debut... Enters Top Tier of Billboard 200" },
        date: "2023.08.28",
        summary: { ko: "팀의 메인 보컬 지효가 솔로 앨범 'ZONE'을 발표하며 성공적인 홀로서기와 함께 글로벌 팝스타로서의 역량을 입증했습니다.", en: "Main vocalist Jihyo released her solo album 'ZONE', proving her capabilities as a global pop star with a successful solo endeavor." },
        url: "https://news.google.com/search?q=%EC%A7%80%ED%9A%A8%20%EC%86%94%EB%A1%9C%20%EB%B9%8C%EB%B3%B4%EB%93%9C"
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
