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
  tmi: { ko: string[]; en: string[] };
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
      ko: "뉴진스(NewJeans)는 청바지(Jeans)처럼 시대의 아이콘이 되겠다는 포부와 'New Genes'(새로운 유전자)가 되겠다는 각오를 담은 어도어(ADOR) 소속의 5인조 다국적 걸그룹입니다. 민희진 전 대표가 총괄 프로듀싱을 맡아 K-POP 시장에 'Y2K'와 '이지리스닝' 열풍을 일으켰습니다. 1990년대 후반~2000년대 초반의 향수를 현대적으로 재해석한 독보적인 컨셉, 과도한 화장이나 킬힐을 배제한 10대 소녀 특유의 자연스러움을 강조하여 데뷔와 동시에 엄청난 신드롬을 일으켰습니다.",
      en: "NewJeans is a 5-member multinational girl group under ADOR, with the ambition to become icons of the times like everyday jeans. Produced by Min Hee-jin, they sparked the 'Y2K' and 'easy-listening' trends in K-pop. By modernly reinterpreting the nostalgia of the late 90s to early 00s and emphasizing natural teenage vibes, they created a massive syndrome upon debut."
    },
    description: {
      ko: "Y2K 신드롬의 주역, 꾸밈없는 자연스러운 매력과 트렌디한 이지리스닝 음악으로 전 세계를 사로잡은 4세대 대표 아이콘입니다.",
      en: "The pioneers of the Y2K syndrome, representing the 4th generation with their unpretentious natural charm and trendy easy-listening music."
    },
    tmi: {
      ko: [
        "멤버들은 숙소에서 서로를 부를 때 본명 대신 '애기', '공주님' 같은 오글거리는 애칭을 쓰기도 합니다.",
        "해린은 가끔 고양이처럼 창밖을 멍하니 쳐다보는 습관이 있어 멤버들이 '진짜 고양이가 아닐까' 의심합니다.",
        "민지는 칼국수를 한 번도 안 먹어봤다고 했다가 대국민 사과(?)를 한 적이 있습니다.",
        "하니는 한국의 '매운 맛'에 중독되어 틈만 나면 불닭볶음면을 찾습니다.",
        "다니엘은 웃음 장벽이 0에 수렴해서 멤버들의 아주 작은 농담에도 자지러집니다.",
        "혜인은 초등학생 시절 '포켓TV'에서 활약할 때 본인의 흑역사를 지우고 싶어하지만 팬들은 귀여워 죽습니다.",
        "뉴진스 멤버들은 연습생 시절 간식을 몰래 먹기 위해 옷장 안에 숨어서 먹은 적이 있습니다.",
        "해린은 고구마를 너무 좋아해서 고구마 냄새만 맡아도 기분이 좋아진다고 합니다.",
        "하니는 잠꼬대로 가끔 영어를 하는데, 멤버들은 무슨 뜻인지 몰라 그냥 'Good'이라고 대답해줍니다.",
        "민지는 정리가 안 된 꼴을 못 보는 깔끔쟁이입니다. 숙소에서 '정리 요정'으로 통합니다.",
        "다니엘은 본인이 그린 토끼 그림이 팀의 공식 마스코트가 되자 매우 뿌듯해했습니다.",
        "멤버들은 민희진 전 대표를 '엄마'처럼 따르며 고민 상담을 자주 했습니다.",
        "하니는 기타 연주 실력이 수준급이며, 혼자 작곡을 시도하기도 합니다.",
        "혜인은 키가 계속 크고 있어 멤버들이 '언젠가 천장에 닿는 거 아니냐'며 놀립니다.",
        "해린은 말을 안 하고 있으면 정말 조각상 같지만, 입을 열면 가끔 엉뚱한 '아재 유머'를 던집니다.",
        "뉴진스의 하입보이요 밈은 멤버들도 알고 있으며, 자신들도 가끔 써먹습니다.",
        "민지는 무서운 영화를 잘 못 보지만, 멤버들과 같이 있을 때는 센 척을 합니다.",
        "하니는 빵을 너무 좋아해서 빵집 냄새만 맡아도 어디 빵인지 맞힐 수 있다고 호언장담합니다.",
        "다니엘은 아침마다 멤버들에게 'Good Morning' 인사를 매우 활기차게 해서 멤버들을 깨웁니다.",
        "막내 혜인은 멤버 중 가장 용감해서 벌레를 잡는 담당을 맡고 있습니다."
      ],
      en: [
        "The members use cringey nicknames like 'Baby' or 'Princess' at their dorm.",
        "Haerin is suspected of being an actual cat because she stares out windows silently.",
        "Minji had to apologize to the nation for never trying Kalguksu (knife-cut noodles).",
        "Hanni is addicted to spicy Buldak noodles and seeks them out constantly.",
        "Danielle's laughter threshold is basically zero; she laughs at everything.",
        "Hyein wants to delete her 'Pocket TV' childhood videos, but fans find them too cute.",
        "The members used to hide in closets to sneak snacks during their trainee days.",
        "Haerin's mood instantly lifts whenever she smells sweet potatoes.",
        "Hanni talks in English in her sleep; members just reply 'Good' to be safe.",
        "Minji is a neat freak known as the 'Organization Fairy' in the dorm.",
        "Danielle was so proud when her bunny drawing became the team's official mascot.",
        "The members treated former CEO Min Hee-jin like a mother figure.",
        "Hanni is a great guitar player and is trying her hand at composing.",
        "Hyein is still growing so tall that members tease she might reach the ceiling.",
        "Haerin looks like a statue when silent but cracks 'dad jokes' when she speaks.",
        "The members know the 'NewJeans Hype Boy' meme and use it themselves.",
        "Minji is bad at scary movies but pretends to be brave in front of members.",
        "Hanni claims she can identify a bakery just by the smell of its bread.",
        "Danielle wakes everyone up with an incredibly energetic 'Good Morning' every day.",
        "Youngest Hyein is the bravest and is in charge of catching bugs in the dorm."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 소속사 어도어와 전속계약 해지 통보", en: "NewJeans Notifies ADOR of Contract Termination" },
        date: "2026.03.05",
        summary: { ko: "뉴진스 멤버들이 기자회견을 통해 소속사 어도어에 전속계약 해지를 전격 통보하며 독립적인 활동을 선언했습니다.", en: "NewJeans members announced the termination of their exclusive contract with ADOR through a press conference, declaring independent activities." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EA%B3%84%EC%95%BD+%ED%95%B4%EC%A7%80"
      },
      {
        title: { ko: "해린·혜인·하니, 민희진 전 대표와 결속 강화", en: "Haerin, Hyein, Hanni Strengthen Ties with Former CEO Min" },
        date: "2026.03.04",
        summary: { ko: "민희진 전 대표의 사임 이후 멤버들이 변함없는 지지를 보내며 향후 행보를 함께할 것임을 시사했습니다.", en: "Following Min Hee-jin's resignation, the members showed unwavering support, suggesting they will stick together for future moves." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EB%AF%BC%ED%9D%AC%EC%A7%84"
      },
      {
        title: { ko: "뉴진스, 'Ditto' 뮤직비디오 유튜브 5억 뷰 돌파", en: "NewJeans 'Ditto' MV Surpasses 500M Views on YouTube" },
        date: "2026.03.01",
        summary: { ko: "겨울 감성을 자극했던 히트곡 'Ditto'의 뮤직비디오가 전 세계 팬들의 꾸준한 사랑 속에 5억 뷰를 달성했습니다.", en: "The MV for 'Ditto', which touched winter emotions, reached 500M views amidst steady love from global fans." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+Ditto+5%EC%96%B5%EB%B7%B0"
      },
      {
        title: { ko: "민지, 파리 패션위크 샤넬 쇼에서 독보적 존재감", en: "Minji Shows Overwhelming Presence at Chanel Show in Paris" },
        date: "2026.02.25",
        summary: { ko: "샤넬의 앰버서더로서 파리 패션위크에 참석한 민지가 우아한 스타일링으로 글로벌 프레스의 찬사를 받았습니다.", en: "Attending Paris Fashion Week as a Chanel ambassador, Minji received praise from global press for her elegant styling." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EB%AF%BC%EC%A7%80+%EC%83%A4%EB%84%AC"
      },
      {
        title: { ko: "하니, 구찌 글로벌 캠페인 모델로 선정", en: "Hanni Selected as Gucci Global Campaign Model" },
        date: "2026.02.20",
        summary: { ko: "하니가 이탈리아 명품 브랜드 구찌의 새로운 글로벌 캠페인 얼굴로 발탁되며 패션 아이콘의 위상을 굳혔습니다.", en: "Hanni was selected as the new face of Gucci's global campaign, solidifying her status as a fashion icon." },
        url: "https://news.google.com/search?q=%ED%95%98%EB%8B%88+%EA%B5%AC%EC%B0%8C"
      },
      {
        title: { ko: "뉴진스, 일본 첫 돔 투어 전석 매진 기록", en: "NewJeans Sells Out All Seats for First Japan Dome Tour" },
        date: "2026.02.15",
        summary: { ko: "일본 데뷔 이후 최단 기간에 진행된 돔 투어에서 모든 티켓을 매진시키며 현지 인기를 입증했습니다.", en: "They proved their local popularity by selling out all tickets for their Japan dome tour held in record time after debut." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EC%9D%BC%EB%B3%B8+%EB%8F%94%ED%84%AC%EC%96%B4"
      },
      {
        title: { ko: "다니엘, '인어공주' 더빙 이후 첫 솔로 OST 참여", en: "Danielle Participates in Solo OST After 'The Little Mermaid' Dubbing" },
        date: "2026.02.10",
        summary: { ko: "디즈니와의 인연을 이어가며 새로운 애니메이션 영화의 메인 OST를 맡아 맑은 음색을 뽐냈습니다.", en: "Continuing her ties with Disney, she took on the main OST for a new animated movie, showing off her clear voice." },
        url: "https://news.google.com/search?q=%EB%8B%A4%EB%8B%88%EC%97%98+OST"
      },
      {
        title: { ko: "혜인, 루이비통 최연소 앰버서더의 성장사 조명", en: "Louis Vuitton Spotlights Growth of Youngest Ambassador Hyein" },
        date: "2026.02.05",
        summary: { ko: "막내 혜인의 성숙해진 비주얼과 모델 포스가 담긴 루이비통 화보가 공개되어 화제를 모았습니다.", en: "A Louis Vuitton pictorial featuring youngest member Hyein's mature visuals and model-like aura was released." },
        url: "https://news.google.com/search?q=%ED%98%9C%EC%9D%B8+%EB%A3%A8%EC%9D%B4%EB%B9%84%ED%86%B5"
      },
      {
        title: { ko: "뉴진스, 대학 축제 수익금 전액 기부 미담", en: "NewJeans Donates All University Festival Profits" },
        date: "2026.01.30",
        summary: { ko: "전국 각지 대학 축제에서 받은 공연료 전액을 취약계층 아동들을 위해 기부하며 훈훈함을 자아냈습니다.", en: "They warmed hearts by donating all performance fees from various university festivals to children in need." },
        url: "https://news.google.com/search?q=%EB%89%B4%EC%A7%84%EC%8A%A4+%EA%B8%B0%EB%B6%80"
      },
      {
        title: { ko: "전 세계 팬덤 '버니즈', 뉴진스 독립 응원 광고 게재", en: "Global Fandom 'Bunnies' Post Ads Supporting NewJeans' Independence" },
        date: "2026.03.04",
        summary: { ko: "뉴욕 타임스퀘어와 강남역 등 주요 거점에 멤버들의 새로운 시작을 응원하는 대규모 전광판 광고가 등장했습니다.", en: "Large-scale billboard ads appeared in major spots like NY Times Square and Gangnam Station to support the members' new start." },
        url: "https://news.google.com/search?q=%EB%B2%84%EB%8B%88%EC%A6%88+%EC%9D%91%EC%9B%90+%EA%B4%91%EA%B3%A0"
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
    id: "jennie",
    name: { ko: "제니", en: "Jennie" },
    company: "OA (Odd Atelier)",
    debut: "2016.08.08",
    fandom: { ko: "블링크 / 젠득이", en: "BLINK / Jendeukie" },
    accentColor: "#ff0000",
    imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+Solo",
    wiki: {
      ko: "블랙핑크의 멤버이자 솔로 아티스트로서 전 세계적인 아이콘입니다. 최근 1인 기획사 OA를 설립했습니다.",
      en: "A member of BLACKPINK and a global icon as a solo artist. Recently established her own label OA."
    },
    description: {
      ko: "인간 샤넬, 트렌드의 중심. 존재 자체가 브랜드인 아티스트입니다.",
      en: "Human Chanel, the center of trends. An artist who is a brand herself."
    },
    tmi: {
      ko: [
        "제니는 무대 위에서는 카리스마 넘치지만, 사실 엄청난 '겁쟁이'입니다. 런닝맨에서 귀신 집 가고 펑펑 운 전설의 짤이 있습니다.",
        "별명 '젠득이'는 지수가 제니가 아침에 자꾸 달라붙어서 지어준 이름입니다.",
        "제니는 요리를 좋아하지만, 생각보다 허당기가 넘쳐서 멤버들이 불안해합니다.",
        "카메라가 없을 때는 안경을 쓰고 편한 옷을 즐겨 입는데, 그 모습조차 화보 같습니다.",
        "제니는 반려견 '카이'와 '쿠마'를 자식처럼 아낍니다.",
        "샤넬 행사장에 갈 때마다 회장님급 대우를 받으며 '인간 샤넬'의 위엄을 보여줍니다.",
        "제니는 사실 매우 내성적인 성격이라 처음 보는 사람 앞에서는 낯을 많이 가립니다.",
        "운동은 필라테스를 꾸준히 하며 유연성을 유지합니다.",
        "제니는 본인이 디자인한 선글라스 브랜드 '젠틀몬스터' 콜라보 제품을 매우 아낍니다.",
        "제니의 영어 발음은 뉴질랜드 유학 시절 덕분에 매우 매력적인 영국식+키위 발음이 섞여 있습니다.",
        "평소 사복 패션에서 핀이나 리본을 활용하는 것을 매우 좋아합니다.",
        "제니는 딸기를 좋아하는데, 꼭 꼭지를 따서 먹어야 한다고 고집합니다.",
        "팬들이 지어준 별명 '인간 구찌'도 있었으나 지금은 '샤넬'이 압도적입니다.",
        "제니는 가끔 가사를 깜빡하면 귀엽게 웃으며 넘기는데 팬들은 그 모습에 더 열광합니다.",
        "제니는 본인의 유튜브 채널 편집에 직접 의견을 많이 냅니다.",
        "제니는 가을과 겨울의 차가운 공기를 좋아합니다.",
        "스트레스를 받으면 매운 음식을 먹으며 푼다고 합니다.",
        "제니는 사실 잠귀가 매우 밝아서 작은 소리에도 잘 깹니다.",
        "멤버 중 지수와 가장 오랜 시간을 보내며 자매 같은 사이입니다.",
        "제니는 본인의 솔로곡 'SOLO'의 안무를 처음 배웠을 때 너무 힘들어서 주저앉았다고 합니다."
      ],
      en: [
        "Jennie is a huge 'scaredy-cat' despite her on-stage charisma; her crying in a haunted house on 'Running Man' is legendary.",
        "The nickname 'Jendeukie' was given by Jisoo because Jennie clings to her in the morning.",
        "Jennie loves cooking but is surprisingly clumsy at it.",
        "Off-camera, she wears glasses and comfy clothes, yet still looks like a photoshoot.",
        "She treats her dogs Kai and Kuma like her own children.",
        "She gets CEO-level treatment at Chanel events as the 'Human Chanel'.",
        "She is actually very introverted and shy around strangers.",
        "She consistently practices Pilates to maintain flexibility.",
        "She cherishes her collaboration products with Gentle Monster.",
        "Her English accent is a charming mix of British and Kiwi styles from her time in New Zealand.",
        "She loves using pins and ribbons in her daily fashion.",
        "She loves strawberries but insists on having the tops cut off.",
        "Fans once called her 'Human Gucci', but 'Human Chanel' is the dominant title now.",
        "When she forgets lyrics, she smiles cutely, which fans love even more.",
        "She gives a lot of input on the editing of her YouTube channel.",
        "She loves the cold air of autumn and winter.",
        "She relieves stress by eating spicy food.",
        "She is a very light sleeper and wakes up at the smallest sounds.",
        "She and Jisoo are like sisters, having spent the most time together.",
        "She collapsed from exhaustion when she first learned the 'SOLO' choreography."
      ]
    },
    news: [
      { title: { ko: "제니, 신곡 'Mantra' 글로벌 흥행", en: "Jennie's New Song 'Mantra' Global Hit" }, date: "2026.03.01", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "OA 설립 후 첫 행보", en: "First Move After OA Establishment" }, date: "2026.02.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 3", en: "News 3" }, date: "2026.01.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 4", en: "News 4" }, date: "2025.12.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 5", en: "News 5" }, date: "2025.11.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 6", en: "News 6" }, date: "2025.10.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 7", en: "News 7" }, date: "2025.09.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 8", en: "News 8" }, date: "2025.08.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 9", en: "News 9" }, date: "2025.07.20", summary: { ko: "요약", en: "Sum" }, url: "#" },
      { title: { ko: "뉴스 10", en: "News 10" }, date: "2025.06.20", summary: { ko: "요약", en: "Sum" }, url: "#" }
    ],
    members: []
  },
  {
    id: "ive",
    name: { ko: "아이브", en: "IVE" },
    officialSite: "http://www.starship-ent.com/profile/musician/ive.php",
    company: "Starship",
    debut: "2021.12.01",
    fandom: { ko: "다이브 (DIVE)", en: "DIVE" },
    accentColor: "#ff00ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20IVE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%20%EA%B3%A0%ED%99%94%EC%A7%88",
    wiki: {
      ko: "아이브(IVE)는 스타쉽 엔터테인먼트 소속 6인조 걸그룹입니다. 'I HAVE'의 줄임말로, 우리가 가진 것들을 당당하게 보여주겠다는 포부를 담고 있습니다.",
      en: "IVE is a 6-member girl group under Starship Entertainment. The name stands for 'I HAVE', reflecting their confidence in showing what they have."
    },
    description: {
      ko: "주체적인 '자기애'를 노래하는 4세대 완성형 걸그룹, 눈부신 비주얼과 우아한 퍼포먼스를 자랑합니다.",
      en: "The complete 4th-gen girl group singing about independent 'self-love', boasting dazzling visuals and elegant performances."
    },
    tmi: {
      ko: [
        "아이브 멤버들은 평균 키가 169cm로 매우 커서 '장신 그룹'으로 불립니다.",
        "장원영은 본인의 다리가 너무 길어서 가끔 사진 보정으로 다리 길이를 줄인다고 합니다.",
        "안유진은 '지락실'에서의 광기 어린 모습과 달리 숙소에서는 매우 차분한 편(?)이라고 주장합니다.",
        "레이는 일본인이지만 한국어를 너무 잘해서 별명이 '김레이'입니다.",
        "리즈는 제주도 출신으로, 학창시절 '제주도의 딸'로 유명했습니다.",
        "이서는 데뷔 당시 중학교 2학년이었으며, 카메라 줌인 짤로 엄청난 화제를 모았습니다.",
        "가을은 팀 내 최단신(164cm)이지만 무대 위 카리스마만큼은 최장신입니다.",
        "멤버들은 장원영의 '원영적 사고(럭키비키)'를 실생활에서도 자주 사용합니다.",
        "안유진은 시력이 매우 좋지 않아 렌즈를 끼지 않으면 거의 아무것도 안 보인다고 합니다.",
        "레이는 레드벨벳 조이의 엄청난 팬으로, 성덕이 된 것으로 유명합니다.",
        "리즈는 본인의 보조개를 매우 아끼며, 팬들이 보조개에 빠지고 싶어한다고 좋아합니다.",
        "이서는 무대 위에서 윙크를 가장 많이 하는 멤버 중 한 명입니다.",
        "가을은 멤버들에게 '가을 선배'라고 불리는 것을 즐깁니다.",
        "아이브 멤버들은 간식으로 탕후루를 매우 좋아해서 자주 시켜 먹습니다.",
        "장원영은 본인이 공주님처럼 생겼다는 것을 아주 잘 알고 있으며, 그에 걸맞게 행동하려고 노력합니다.",
        "안유진은 운동 신경이 매우 뛰어나며, 특히 구기 종목을 좋아합니다.",
        "레이는 본인이 직접 쓴 가사로 랩을 하는 것을 좋아합니다.",
        "리즈는 웃음소리가 매우 독특해서 멤버들이 가끔 따라 합니다.",
        "이서는 숙소에서 가장 시끄러운 멤버로 꼽힙니다.",
        "아이브의 데뷔곡 ELEVEN은 음악 방송 13관왕을 기록했습니다."
      ],
      en: [
        "The members are very tall with an average height of 169cm.",
        "Jang Wonyoung sometimes shortens her legs in photos because they look too long.",
        "An Yujin claims she is very calm in the dorm, despite her 'crazy' variety persona.",
        "Rei is so good at Korean that she's nicknamed 'Kim Rei'.",
        "Liz is from Jeju Island and was known as the 'Daughter of Jeju'.",
        "Leeseo was only in 8th grade at debut and went viral for her camera zoom-in moment.",
        "Gaeul is the shortest (164cm) but has the biggest charisma on stage.",
        "The members use 'Wonyoung Thinking (Lucky Vicky)' in daily life.",
        "An Yujin has very poor eyesight and can barely see without lenses.",
        "Rei is a huge fan of Red Velvet's Joy and became a successful fan.",
        "Liz cherishes her dimples and loves that fans want to fall into them.",
        "Leeseo is one of the members who winks the most on stage.",
        "Gaeul enjoys being called 'Gaeul Sunbae (Senior)' by the members.",
        "They love eating Tanghulu as a snack in the dorm.",
        "Wonyoung knows she looks like a princess and tries to act like one.",
        "An Yujin is very athletic and especially loves ball sports.",
        "Rei likes to rap using her own self-written lyrics.",
        "Liz has a very unique laugh that members often imitate.",
        "Leeseo is voted as the loudest member in the dorm.",
        "Their debut song ELEVEN won 13 music show trophies."
      ]
    },
    news: [
      { title: { ko: "아이브, 두 번째 정규 앨범 발매 임박", en: "IVE to Release 2nd Full Album Soon" }, date: "2026.03.05", summary: { ko: "아이브가 올 여름 정규 앨범으로 컴백을 예고하며 전 세계 팬들의 기대를 모으고 있습니다.", en: "IVE teased a summer comeback with a full album, gathering global fan anticipation." }, url: "#" },
      { title: { ko: "장원영, 파리 패션위크에서 '압도적 비주얼'", en: "Jang Wonyoung's Overwhelming Visuals in Paris" }, date: "2026.03.02", summary: { ko: "엠버서더로 참석한 장원영이 파리 현지를 마비시킬 정도의 인기를 보여주었습니다.", en: "Attending as an ambassador, Wonyoung showed popularity that paralyzed Paris." }, url: "#" },
      { title: { ko: "안유진, 예능 브랜드 평판 1위 등극", en: "An Yujin Ranks #1 in Variety Brand Reputation" }, date: "2026.02.28", summary: { ko: "안유진이 뛰어난 예능감으로 다시 한번 브랜드 평판 1위를 차지했습니다.", en: "Yujin topped brand reputation once again with her excellent variety skills." }, url: "#" },
      { title: { ko: "뉴스 4", en: "News 4" }, date: "2026.02.25", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 5", en: "News 5" }, date: "2026.02.20", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 6", en: "News 6" }, date: "2026.02.15", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 7", en: "News 7" }, date: "2026.02.10", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 8", en: "News 8" }, date: "2026.02.05", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 9", en: "News 9" }, date: "2026.01.30", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 10", en: "News 10" }, date: "2026.01.25", summary: { ko: "내용", en: "Summary" }, url: "#" }
    ],
    members: [
      { id: "anyujin", name: { ko: "안유진", en: "An Yujin" }, role: { ko: "리더/보컬", en: "Leader/Vocal" }, birth: "2003.09.01", mbti: "ISTP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "173cm", bloodType: "A", description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin" },
      { id: "gaeul", name: { ko: "가을", en: "Gaeul" }, role: { ko: "래퍼", en: "Rapper" }, birth: "2002.09.24", mbti: "ISTJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "164cm", bloodType: "B", description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Gaeul" },
      { id: "rei", name: { ko: "레이", en: "Rei" }, role: { ko: "래퍼", en: "Rapper" }, birth: "2004.02.03", mbti: "INFJ", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "169cm", bloodType: "A", description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Rei" },
      { id: "jangwonyoung", name: { ko: "장원영", en: "Jang Wonyoung" }, role: { ko: "보컬", en: "Vocal" }, birth: "2004.08.31", mbti: "ENFP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "173cm", bloodType: "O", description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung" },
      { id: "liz", name: { ko: "리즈", en: "Liz" }, role: { ko: "보컬", en: "Vocal" }, birth: "2004.11.21", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "170cm", bloodType: "AB", description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Liz" },
      { id: "leeseo", name: { ko: "이서", en: "Leeseo" }, role: { ko: "보컬", en: "Vocal" }, birth: "2007.02.21", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "166cm", bloodType: "O", description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Leeseo" }
    ]
  },
  {
    id: "jangwonyoung",
    name: { ko: "장원영", en: "Jang Wonyoung" },
    company: "Starship",
    debut: "2018.10.29",
    fandom: { ko: "다이브", en: "DIVE" },
    accentColor: "#ffcccc",
    imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung+Solo",
    wiki: {
      ko: "아이즈원 출신이자 현재 아이브의 멤버로, 대한민국에서 가장 영향력 있는 여성 아이돌 중 한 명입니다.",
      en: "A former IZ*ONE member and current IVE member, one of the most influential female idols in Korea."
    },
    description: {
      ko: "태생부터 아이돌, 모든 것이 트렌드가 되는 워너비 아이콘입니다.",
      en: "Born to be an idol, a wannabe icon whose every move becomes a trend."
    },
    tmi: {
      ko: [
        "장원영은 본인이 피자를 먹을 때 피클을 먹지 않는다고 합니다. 오직 피자 맛에만 집중합니다.",
        "본인의 퍼스널 컬러가 '장원영'이라고 말할 정도로 자존감이 높고 긍정적입니다.",
        "영어 실력이 매우 유창하여 해외 행사에서도 통역 없이 직접 소통합니다.",
        "장원영은 거울을 볼 때마다 '오늘도 예쁘네'라고 생각하며 하루를 시작합니다.",
        "가장 좋아하는 디저트는 마카롱과 케이크입니다.",
        "장원영은 본인의 긴 다리 때문에 바지 길이가 항상 짧아서 고민이라고 합니다.",
        "팬들에게 '공주님'이라고 불리는 것을 진심으로 즐기며, 팬들을 '나의 기사님'처럼 대우해줍니다.",
        "장원영은 사실 엄청난 노력파로, 완벽한 무대를 위해 연습실에서 가장 늦게 나가는 멤버 중 한 명입니다.",
        "그녀의 '원영적 사고'는 사실 초긍정 마인드 컨트롤의 일종입니다.",
        "장원영은 사진을 찍을 때 가장 예쁘게 나오는 각도를 0.1초 만에 찾아냅니다.",
        "평소에 책을 읽는 것을 좋아하며, 지적인 매력도 겸비하고 있습니다.",
        "장원영은 가끔 본인이 너무 예뻐서 스스로에게 놀랄 때가 있다고 농담처럼 말합니다.",
        "가장 좋아하는 색깔은 당연히 핑크색입니다.",
        "장원영은 아침에 일어나서 스트레칭을 꼭 합니다.",
        "그녀는 무대 위에서 땀을 흘려도 화장이 지워지지 않는 것으로 유명합니다.",
        "장원영은 본인의 손이 매우 길고 가늘어서 섬세한 안무 표현에 유리하다고 생각합니다.",
        "그녀는 팬싸인회에서 팬들의 이름을 하나하나 기억하려고 노력하는 다정한 성격입니다.",
        "장원영은 사실 매운 음식을 잘 못 먹지만, 가끔 도전하는 것을 좋아합니다.",
        "그녀는 본인의 MBTI인 E(외향형)를 아주 잘 보여주는 사교성을 가지고 있습니다.",
        "장원영은 비행기를 탈 때 항상 마스크팩을 챙겨서 피부를 관리합니다."
      ],
      en: [
        "She doesn't eat pickles with pizza; she focuses purely on the pizza flavor.",
        "She is so confident she says her personal color is 'Jang Wonyoung'.",
        "She is fluent in English and communicates directly at global events.",
        "She starts her day looking in the mirror and thinking 'I'm pretty today too'.",
        "Her favorite desserts are macarons and cakes.",
        "She struggles with pants always being too short due to her long legs.",
        "She genuinely enjoys being called 'Princess' and treats fans like her knights.",
        "She is a hard worker who is often the last to leave the practice room.",
        "Her 'Wonyoung Thinking' is a form of ultra-positive mind control.",
        "She can find her best camera angle in 0.1 seconds.",
        "She enjoys reading books and has an intellectual side.",
        "She jokingly says she sometimes surprises herself with how pretty she is.",
        "Her favorite color is, of course, pink.",
        "She never skips morning stretches.",
        "She is famous for her makeup staying perfect even after sweating on stage.",
        "She thinks her long, slender hands help with delicate choreography.",
        "She tries her best to remember every fan's name at fansigns.",
        "She isn't good with spicy food but likes to challenge herself occasionally.",
        "She is very sociable, living up to her 'E' personality type.",
        "She always packs face masks when flying to maintain her skin."
      ]
    },
    news: [
      { title: { ko: "장원영, Miu Miu 글로벌 캠페인 공개", en: "Wonyoung's Miu Miu Global Campaign Released" }, date: "2026.03.04", summary: { ko: "장원영의 독보적인 아우라가 담긴 명품 브랜드의 새로운 화보가 전 세계에 공개되었습니다.", en: "New luxury brand pictorial featuring Wonyoung's unique aura was released globally." }, url: "#" },
      { title: { ko: "장원영, '원영적 사고'로 긍정 에너지 전파", en: "Wonyoung Spreads Positive Energy with her Thinking" }, date: "2026.02.25", summary: { ko: "그녀의 긍정적인 가치관이 MZ세대 사이에서 큰 울림을 주고 있습니다.", en: "Her positive values are resonating deeply among the MZ generation." }, url: "#" },
      { title: { ko: "뉴스 3", en: "News 3" }, date: "2026.02.20", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 4", en: "News 4" }, date: "2026.02.15", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 5", en: "News 5" }, date: "2026.02.10", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 6", en: "News 6" }, date: "2026.02.05", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 7", en: "News 7" }, date: "2026.01.30", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 8", en: "News 8" }, date: "2026.01.25", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 9", en: "News 9" }, date: "2026.01.20", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 10", en: "News 10" }, date: "2026.01.15", summary: { ko: "내용", en: "Summary" }, url: "#" }
    ],
    members: []
  },
  {
    id: "anyujin",
    name: { ko: "안유진", en: "An Yujin" },
    company: "Starship",
    debut: "2018.10.29",
    fandom: { ko: "다이브", en: "DIVE" },
    accentColor: "#0000ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin+Solo",
    wiki: {
      ko: "아이즈원 출신이자 현재 아이브의 리더입니다. 뛰어난 가창력과 댄스 실력은 물론 예능에서도 독보적인 캐릭터를 구축했습니다.",
      en: "A former IZ*ONE member and current leader of IVE. She has established a unique character in variety shows alongside her skills."
    },
    description: {
      ko: "맑은 눈의 광인, 무대 위의 카리스마. 반전 매력의 끝판왕입니다.",
      en: "The 'Crazy Eyes', the stage charisma. The ultimate queen of unexpected charms."
    },
    tmi: {
      ko: [
        "안유진은 숙소에서 안경을 쓰면 멤버들이 '누구세요?'라고 물어볼 정도로 인상이 바뀐다고 합니다.",
        "예능 '지락실'에서 보여준 모습은 사실 본인 성격의 10% 정도만 보여준 것이라고 합니다.",
        "안유진은 사실 매우 겁이 많습니다. 하지만 리더로서 멤버들 앞에서는 안 무서운 척을 합니다.",
        "그녀는 본인의 셀카 실력에 매우 자부심을 느끼고 있습니다.",
        "안유진은 운동화를 매우 좋아해서 현관에 운동화가 가득합니다.",
        "그녀는 사실 잠귀가 매우 어두워서 알람 소리를 못 듣고 멤버들이 깨워줄 때까지 잡니다.",
        "안유진은 떡볶이를 세상에서 가장 좋아합니다. 매주 한 번은 꼭 먹어야 합니다.",
        "그녀는 본인의 강아지 '아초'와 대화를 한다고 주장합니다.",
        "안유진은 가끔 본인이 리더라는 사실을 잊고 막내들과 함께 장난을 치다가 가을에게 혼납니다.",
        "그녀는 촬영 중간에 쉬는 시간이 생기면 구석에서 쪽잠을 자는 능력이 있습니다.",
        "안유진은 사실 엄청난 게임 실력자입니다. 멤버들과 게임을 하면 거의 항상 이깁니다.",
        "그녀는 본인의 별명인 '안유댕'을 매우 귀여워합니다.",
        "안유진은 팬들에게 '강아지'라고 불리는 것을 좋아합니다.",
        "그녀는 비 오는 날의 감성을 좋아해서 창밖을 보며 음악을 듣습니다.",
        "안유진은 사실 기계치라 새로운 전자기기를 사면 사용 설명서를 1시간 동안 읽습니다.",
        "그녀는 본인의 보컬 톤이 허스키하면서도 맑다고 생각합니다.",
        "안유진은 멤버들의 특징을 잘 파악해서 성대모사를 잘 합니다.",
        "그녀는 아침에 커피를 마시지 않으면 하루 종일 기운이 없다고 합니다.",
        "안유진은 사실 춤을 출 때 가장 행복하다고 느낍니다.",
        "그녀는 본인의 좌우명이 '될 대로 돼라, 하지만 최선을 다하자'입니다."
      ],
      en: [
        "Her appearance changes so much with glasses that members ask 'Who are you?'",
        "She says her 'Earth Arcade' persona is only about 10% of her true personality.",
        "She is actually very easily scared but pretends to be brave as a leader.",
        "She is very proud of her selfie-taking skills.",
        "She loves sneakers and has a collection filling the entrance.",
        "She is a very heavy sleeper and needs members to wake her up.",
        "Tteokbokki is her absolute favorite food; she must eat it once a week.",
        "She claims she can have conversations with her dog, Acho.",
        "She sometimes forgets she's the leader and plays around, getting teased by Gaeul.",
        "She can nap in corners instantly during filming breaks.",
        "She is a surprisingly good gamer and usually beats the members.",
        "She finds her nickname 'Ahn Yu-daeng' very cute.",
        "She likes being called a 'puppy' by her fans.",
        "She loves the vibe of rainy days and listens to music while watching the rain.",
        "She is bad with technology and spends an hour reading manuals for new gadgets.",
        "She thinks her vocal tone is a mix of husky and clear.",
        "She is great at impersonating other members' habits.",
        "She has no energy all day unless she drinks coffee in the morning.",
        "She feels happiest when she is dancing.",
        "Her motto is 'Let it be, but do your best'."
      ]
    },
    news: [
      { title: { ko: "안유진, 펜디 글로벌 앰버서더의 위엄", en: "An Yujin's Dignity as Fendi Ambassador" }, date: "2026.03.01", summary: { ko: "안유진이 펜디의 새로운 시즌 캠페인에서 세련된 스타일을 선보였습니다.", en: "An Yujin showcased sophisticated styles in Fendi's new season campaign." }, url: "#" },
      { title: { ko: "안유진, '지구오락실' 시즌3 출연 확정", en: "An Yujin Confirmed for Earth Arcade Season 3" }, date: "2026.02.15", summary: { ko: "많은 팬들이 기다려온 예능 프로그램의 복귀 소식이 전해졌습니다.", en: "The news of her return to the much-awaited variety show has been announced." }, url: "#" },
      { title: { ko: "뉴스 3", en: "News 3" }, date: "2026.02.10", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 4", en: "News 4" }, date: "2026.02.05", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 5", en: "News 5" }, date: "2026.01.30", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 6", en: "News 6" }, date: "2026.01.25", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 7", en: "News 7" }, date: "2026.01.20", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 8", en: "News 8" }, date: "2026.01.15", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 9", en: "News 9" }, date: "2026.01.10", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 10", en: "News 10" }, date: "2026.01.05", summary: { ko: "내용", en: "Summary" }, url: "#" }
    ],
    members: []
  },
  {
    id: "aespa",
    name: { ko: "에스파", en: "aespa" },
    officialSite: "https://aespa.com/",
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이 (MY)", en: "MY" },
    accentColor: "#7b46d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Group+High+Resolution+Photo+2024",
    wiki: {
      ko: "에스파(aespa)는 'Avatar X Experience'를 표현한 'æ'와 양면이라는 뜻의 'aspect'를 결합하여 만든 SM 엔터테인먼트 소속의 4인조 걸그룹입니다. '자신의 또 다른 자아인 아바타를 만나 새로운 세계를 경험하게 된다'는 독보적인 메타버스 세계관으로 K-POP의 새로운 지평을 열었습니다. 데뷔곡 'Black Mamba'부터 'Next Level', 'Savage', 그리고 2024년 신드롬을 일으킨 'Supernova'와 'Armageddon'까지 발표하는 곡마다 메가 히트를 기록하며 글로벌 탑티어 걸그룹으로 자리매김했습니다.",
      en: "aespa is a 4-member girl group under SM Entertainment, whose name combines 'æ' (Avatar X Experience) and 'aspect' (meaning two sides). They opened a new horizon for K-pop with their unique metaverse worldview, where members meet their avatars (æ) to experience a new world. From their debut 'Black Mamba' to 'Next Level', 'Savage', and the 2024 sensations 'Supernova' and 'Armageddon', they have consistently delivered mega-hits, solidifying their status as a global top-tier group."
    },
    description: {
      ko: "메타버스 세계관의 선구자, 독보적인 컨셉과 압도적인 퍼포먼스로 전 세계를 '쇠'맛으로 물들인 글로벌 아이콘입니다.",
      en: "The pioneers of the metaverse concept, global icons who have captivated the world with their unique 'metallic' vibes and overwhelming performances."
    },
    tmi: {
      ko: [
        "에스파는 연습생 시절 너무 배가 고파서 숙소에서 몰래 삼겹살을 구워 먹다가 연기가 너무 많이 나서 화재 경보기가 울릴 뻔한 적이 있습니다.",
        "멤버들은 서로의 아바타인 'ae-에스파'를 처음 봤을 때, 생각보다 너무 예뻐서 '우리가 아바타보다 더 예뻐야 할 텐데'라며 긴장했다고 합니다.",
        "카리나와 윈터는 팀 내에서 '지민정' 콤비로 불리며, 숨만 쉬어도 서로 웃음이 터지는 환상의 케미를 자랑합니다.",
        "에스파 멤버들은 '광야'라는 단어를 일상생활에서도 자주 씁니다. 길을 잃으면 '여기가 광야인가?'라고 농담합니다.",
        "닝닝은 팀의 막내지만 가장 목소리가 크고 에너지가 넘쳐서 언니들이 가끔 귀를 막기도 합니다.",
        "지젤은 3개국어(한국어, 영어, 일본어)를 유창하게 구사하지만, 당황하면 세 언어를 섞어서 쓰는 '지젤어'를 구사합니다.",
        "윈터는 본인이 귀엽다는 것을 인정하기 싫어하지만, 행동 하나하나가 '아기토끼' 같아서 팬들은 포기했습니다.",
        "카리나는 손이 매우 커서 멤버들의 얼굴을 한 손으로 다 가릴 수 있을 정도입니다.",
        "멤버들은 숙소에서 배달 음식을 시킬 때 메뉴 결정에만 1시간이 넘게 걸리는 결정 장애를 겪고 있습니다.",
        "닝닝은 요리하는 것을 좋아하지만, 가끔 실험적인 재료를 넣어서 멤버들을 당황하게 만듭니다.",
        "에스파는 무대 위에서는 카리스마 넘치지만, 사실 무대 뒤에서는 0.1초 만에 '잼민이' 모드로 변합니다.",
        "지젤은 연습생 기간이 11개월로 팀 내에서 가장 짧지만, 엄청난 노력으로 완벽하게 팀에 녹아들었습니다.",
        "카리나는 사실 엄청난 겁쟁이라서 숙소에 벌레가 나타나면 가장 먼저 도망갑니다.",
        "윈터는 본인이 그린 본인의 캐리커처가 실제보다 더 예쁘다고 주장하며 멤버들과 논쟁을 벌입니다.",
        "에스파 멤버들은 'Next Level'의 ㄷ자 춤을 너무 많이 춰서, 자다가도 음악이 나오면 몸이 자동으로 반응합니다.",
        "닝닝은 한국 드라마를 너무 좋아해서 한국인 멤버들보다 신작 정보를 더 빨리 압니다.",
        "카리나의 소망 중 하나는 멤버들과 다 같이 놀이공원에 가서 변장을 하고 하루 종일 노는 것입니다.",
        "윈터는 사실 '집순이' 끝판왕이라 스케줄이 없으면 침대 밖으로 1cm도 나오지 않습니다.",
        "지젤은 사진 찍는 실력이 뛰어나서 멤버들의 전용 '찍사' 역할을 톡톡히 하고 있습니다.",
        "에스파의 공식 인사는 'Be my ae!'인데, 가끔 무대 밑에서 서로 'Be my friend!'라고 장난칩니다."
      ],
      en: [
        "During their trainee days, they almost set off the fire alarm while secretly grilling pork belly in their dorm.",
        "When they first saw their 'ae' avatars, they were so pretty that the members felt pressured to look even better than them.",
        "Karina and Winter are known as the 'Jiminjeong' duo, sharing a chemistry where they laugh just by looking at each other.",
        "The members use the word 'KWANGYA' in daily life, joking 'Is this KWANGYA?' whenever they get lost.",
        "Youngest member Ningning is so loud and energetic that the older members sometimes have to cover their ears.",
        "Giselle is trilingual but speaks a unique 'Giselle-ish' mix of Korean, English, and Japanese when flustered.",
        "Winter refuses to admit she's cute, but fans have given up because every move she makes is like a 'baby rabbit'.",
        "Karina's hands are so large she can cover a member's entire face with just one palm.",
        "It takes them over an hour just to decide what to order for delivery at their dorm.",
        "Ningning loves cooking but often uses experimental ingredients that baffle the other members.",
        "They are charismatic on stage but transform into 'chaotic kids' the second they step off.",
        "Giselle had the shortest training period (11 months) but blended in perfectly through immense effort.",
        "Karina is actually a huge scaredy-cat and is the first to run when a bug appears in the dorm.",
        "Winter argues with members that her self-drawn caricature looks prettier than her actual self.",
        "They've performed the 'Next Level' dance so much that their bodies react automatically to the music even in their sleep.",
        "Ningning loves K-dramas so much she often knows about new releases before the Korean members do.",
        "One of Karina's wishes is for the whole group to go to an amusement park in disguise and play all day.",
        "Winter is the ultimate homebody; on her days off, she doesn't move even 1cm from her bed.",
        "Giselle is so good at photography that she acts as the official photographer for the other members.",
        "Their official greeting is 'Be my ae!', but they often tease each other by saying 'Be my friend!' off-camera."
      ]
    },
    news: [
      { title: { ko: "에스파, 첫 정규 'Armageddon'으로 글로벌 차트 석권", en: "aespa Sweeps Global Charts with 1st Full Album 'Armageddon'" }, date: "2024.05.27", summary: { ko: "에스파가 데뷔 4년 만에 발표한 첫 정규 앨범으로 국내외 주요 음원 차트 1위를 기록하며 저력을 입증했습니다.", en: "aespa proved their power by topping major domestic and international charts with their first full album released 4 years after debut." }, url: "https://news.google.com/search?q=aespa+Armageddon+Charts" },
      { title: { ko: "에스파 'Supernova', 11주 연속 1위 대기록 달성", en: "aespa's 'Supernova' Achieves 11 Consecutive Weeks at #1" }, date: "2024.08.12", summary: { ko: "선공개곡 'Supernova'가 멜론 차트 등 주요 차트에서 역대 최장 기간 1위 기록을 갱신하며 올해 최고의 히트곡으로 등극했습니다.", en: "The pre-release track 'Supernova' broke the record for the longest-running #1 on major charts like Melon, becoming the year's biggest hit." }, url: "https://news.google.com/search?q=aespa+Supernova+Record" },
      { title: { ko: "에스파, 두 번째 월드투어 'SYNK: PARALLEL LINE' 성황", en: "aespa's 2nd World Tour 'SYNK: PARALLEL LINE' a Success" }, date: "2024.09.30", summary: { ko: "서울을 시작으로 아시아와 호주 전역을 도는 월드투어를 통해 압도적인 무대 장악력을 선보이고 있습니다.", en: "Starting in Seoul, they are showcasing overwhelming stage presence through their world tour across Asia and Australia." }, url: "https://news.google.com/search?q=aespa+World+Tour+2024" },
      { title: { ko: "에스파, 일본 정식 데뷔 'Hot Mess' 열풍", en: "aespa's Official Japan Debut 'Hot Mess' Creates Buzz" }, date: "2024.07.03", summary: { ko: "일본 데뷔 싱글 'Hot Mess'를 발표하며 현지에서 뜨거운 반응을 얻고 글로벌 활동 범위를 넓혔습니다.", en: "Released their Japan debut single 'Hot Mess', receiving hot reactions locally and expanding their global reach." }, url: "https://news.google.com/search?q=aespa+Japan+Debut+Hot+Mess" },
      { title: { ko: "에스파, 'Whiplash'로 쇠맛 매력의 정점", en: "aespa Reaches Peak 'Metallic' Charm with 'Whiplash'" }, date: "2024.10.21", summary: { ko: "다섯 번째 미니앨범 'Whiplash'를 통해 한층 더 강력해진 퍼포먼스와 음악적 실험을 선보였습니다.", en: "Through their 5th mini-album 'Whiplash', they showcased even more powerful performances and musical experimentation." }, url: "https://news.google.com/search?q=aespa+Whiplash+Comeback" },
      { title: { ko: "에스파, K-POP 그룹 최초 인천공항 명예홍보대사 위촉", en: "aespa Appointed as First K-POP Group Incheon Airport Ambassadors" }, date: "2024.05.07", summary: { ko: "인천국제공항의 홍보대사로서 전 세계에 한국의 관문을 알리는 역할을 맡게 되었습니다.", en: "As ambassadors for Incheon International Airport, they took on the role of promoting Korea's gateway to the world." }, url: "https://news.google.com/search?q=aespa+Airport+Ambassador" },
      { title: { ko: "에스파, 틱톡 어워즈 '올해의 아티스트' 수상", en: "aespa Wins 'Artist of the Year' at TikTok Awards" }, date: "2024.11.15", summary: { ko: "글로벌 숏폼 플랫폼 틱톡에서 주최한 첫 어워즈에서 최고의 영예인 올해의 아티스트 상을 받았습니다.", en: "Won the top honor of Artist of the Year at the first awards hosted by the global short-form platform TikTok." }, url: "https://news.google.com/search?q=aespa+TikTok+Awards" },
      { title: { ko: "에스파, 미국 '제니퍼 허드슨 쇼' 출연 화제", en: "aespa's Appearance on 'The Jennifer Hudson Show' Becomes Hot Topic" }, date: "2024.09.05", summary: { ko: "미국 인기 토크쇼에 출연하여 완벽한 라이브 무대를 선보이며 현지 시청자들을 사로잡았습니다.", en: "Appeared on the popular US talk show, delivering a perfect live stage and captivating local viewers." }, url: "https://news.google.com/search?q=aespa+Jennifer+Hudson+Show" },
      { title: { ko: "에스파, 2025년 'Dirty Work'로 파격 변신 예고", en: "aespa Teases Bold Transformation with 2025 'Dirty Work'" }, date: "2025.01.10", summary: { ko: "새로운 싱글 'Dirty Work'의 컨셉 화보를 공개하며 팬들의 기대감을 최고조로 끌어올렸습니다.", en: "Released concept photos for their new single 'Dirty Work', raising fan expectations to the maximum." }, url: "https://news.google.com/search?q=aespa+Dirty+Work+2025" },
      { title: { ko: "에스파, 5주년 기념 팬미팅 개최 확정", en: "aespa Confirms 5th Anniversary Fan Meeting" }, date: "2025.02.01", summary: { ko: "데뷔 5주년을 맞아 팬 '마이'들과 함께하는 특별한 축제의 시간을 가질 예정입니다.", en: "To celebrate their 5th anniversary, they will have a special festival time with their fans, 'MY'." }, url: "https://news.google.com/search?q=aespa+5th+Anniversary" }
    ],
    members: [
      {
        id: "karina",
        name: { ko: "카리나", en: "Karina" },
        role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper" },
        birth: "2000.04.11",
        mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "168cm",
        bloodType: "B",
        description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself, she is the charismatic leader who anchors the group." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Karina+High+Res+Photo"
      },
      {
        id: "winter",
        name: { ko: "윈터", en: "Winter" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "2001.01.01",
        mbti: "INTJ",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm",
        bloodType: "A",
        description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버로, 반전 매력의 소유자입니다.", en: "A member with a clear, pure voice and powerful performance skills, known for her unexpected charms." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+High+Res+Photo"
      },
      {
        id: "giselle",
        name: { ko: "지젤", en: "Giselle" },
        role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist" },
        birth: "2000.10.30",
        mbti: "INFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "164cm",
        bloodType: "O",
        description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 한일 혼혈 멤버입니다.", en: "A multilingual intellectual fluent in three languages and a Japanese-Korean member with solid rapping skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Giselle+High+Res+Photo"
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
        description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내이자 분위기 메이커입니다.", en: "The youngest member and mood maker of the group, boasting explosive high notes and soulful vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Ningning+High+Res+Photo"
      }
    ]
  },
  {
    id: "karina",
    name: { ko: "카리나", en: "Karina" },
    company: "SM Entertainment",
    debut: "2024.10.09",
    fandom: { ko: "마이", en: "MY" },
    accentColor: "#0000ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=Karina+Solo+UP+Photo",
    wiki: {
      ko: "에스파의 리더 카리나가 2024년 10월, 첫 솔로곡 'UP'으로 전격 데뷔했습니다. 그룹 활동과는 또 다른 힙합 베이스의 강렬한 퍼포먼스를 선보이며 솔로 아티스트로서의 압도적인 역량을 증명했습니다.",
      en: "aespa's leader Karina made her solo debut in October 2024 with the track 'UP'. She proved her overwhelming capabilities as a solo artist by showcasing a powerful hip-hop-based performance distinct from her group activities."
    },
    description: {
      ko: "전 세계를 뒤흔든 'UP'의 주인공, 압도적인 아우라를 가진 4세대 대표 솔로 아티스트입니다.",
      en: "The protagonist of 'UP' that shook the world, a representative 4th-gen solo artist with an overwhelming aura."
    },
    tmi: {
      ko: [
        "카리나는 무대 위에서는 완벽한 'AI' 같지만, 사실 혼잣말을 엄청나게 많이 하는 '혼잣말 장인'입니다.",
        "솔로곡 'UP'의 안무가 너무 힘들어서 연습 도중 '나는 누구인가, 여긴 어디인가'라며 멍을 때린 적이 있습니다.",
        "카리나는 사실 엄청난 미식가인데, 본인의 최애 음식은 의외로 '매운 돈까스'입니다.",
        "카리나는 인스타그램 DM을 통해 캐스팅되었는데, 처음에 사기꾼인 줄 알고 무시하려다 부모님과 상의 끝에 오디션을 봤습니다.",
        "본인의 별명 중 '메추리알'을 가장 좋아합니다. 머리 크기가 메추리알처럼 작다는 팬들의 칭찬을 즐깁니다.",
        "카리나는 사실 태권도 3품 보유자입니다. 화나면 발차기가 나올지도 모른다고 멤버들이 농담합니다.",
        "프라다 글로벌 앰버서더로 발탁되었을 때, 가장 먼저 한 일은 부모님께 자랑 전화를 건 것이었습니다.",
        "카리나는 사실 조류 공포증이 있어서 비둘기가 나타나면 100m 달리기 선수급으로 도망갑니다.",
        "게임 '꿈의 정원' 만렙을 찍었을 때의 성취감이 음악방송 1위만큼 컸다고 고백했습니다.",
        "카리나의 가방 속에는 항상 묵주반지가 들어있습니다. 중요한 스케줄 전에는 꼭 챙기는 아이템입니다.",
        "본인의 얼굴이 너무 차가워 보일까 봐 일부러 더 많이 웃으려고 노력하는 다정한 성격입니다.",
        "카리나는 사실 탄산음료 없이는 못 사는 '콜라 중독자'입니다.",
        "솔로 활동 중 가장 그리운 것은 멤버들과 대기실에서 나누는 시끄러운 수다입니다.",
        "카리나의 좌우명은 '나 자신을 사랑하자'인데, 가끔 거울을 보며 '지민아 수고했어'라고 셀프 칭찬을 합니다.",
        "카리나는 사실 지독한 '안경잡이'입니다. 숙소에서는 도수 높은 안경을 써서 눈이 작아지는 반전 모습을 보여줍니다.",
        "촬영장에 간식차가 오면 가장 먼저 달려가서 무엇이 맛있는지 스캔하는 스캔 능력이 있습니다.",
        "카리나는 사실 잠꼬대로 랩을 한다는 제보가 멤버들로부터 들어왔습니다.",
        "그녀는 본인의 긴 목이 매력 포인트라고 생각하며, 가끔 기린처럼 목을 늘려보는 장난을 칩니다.",
        "카리나는 사실 고구마를 좋아하지 않습니다. 감자 파입니다.",
        "팬들에게 편지를 쓸 때 맞춤법을 틀리지 않으려고 사전을 찾아가며 꼼꼼하게 적습니다."
      ],
      en: [
        "She looks like a perfect 'AI' on stage but is actually a 'self-talk master' who talks to herself constantly.",
        "The choreography for 'UP' was so exhausting she once dazed out during practice, wondering 'Who am I, where am I?'.",
        "She is a huge foodie, and her favorite food is surprisingly 'spicy pork cutlet'.",
        "She was cast via Instagram DM; she almost ignored it thinking it was a scam before consulting her parents.",
        "Her favorite nickname is 'Quail Egg', enjoying fans' compliments that her head is as small as one.",
        "She is a 3rd-degree black belt in Taekwondo; members joke she might kick them if she gets angry.",
        "The first thing she did after becoming a Prada Global Ambassador was call her parents to brag.",
        "She has a phobia of birds and runs like an Olympic sprinter whenever a pigeon appears.",
        "She confessed that reaching the max level in 'Gardenscapes' felt as rewarding as winning #1 on a music show.",
        "She always keeps a rosary ring in her bag, a must-have item before any important schedule.",
        "She has a warm personality and tries to smile more to avoid looking too 'cold' or distant.",
        "She is a 'cola addict' who can't live without carbonated drinks.",
        "What she misses most during solo activities is the noisy chatter with members in the waiting room.",
        "Her motto is 'Love myself', and she often gives herself a pep talk in the mirror: 'Jimin, you did well'.",
        "She is a dedicated glasses wearer at home, showing a hilarious 'nerdy' side with high-prescription lenses.",
        "She has a scanning ability to spot the tastiest snacks as soon as a food truck arrives on set.",
        "According to members, she has been caught rapping in her sleep.",
        "She thinks her long neck is her charm point and sometimes teases by stretching it like a giraffe.",
        "She actually doesn't like sweet potatoes; she's definitely on Team Potato.",
        "She is very meticulous when writing letters to fans, checking the dictionary to avoid any spelling mistakes."
      ]
    },
    news: [
      { title: { ko: "카리나, 솔로 데뷔곡 'UP'으로 음원 차트 '올킬'", en: "Karina's Solo Debut 'UP' Achieves Chart 'All-Kill'" }, date: "2024.10.10", summary: { ko: "카리나의 솔로곡 'UP'이 발매와 동시에 국내외 주요 음원 차트 정상을 차지하며 화려한 데뷔를 알렸습니다.", en: "Karina's solo track 'UP' topped major domestic and international charts immediately upon release, marking a spectacular debut." }, url: "#" },
      { title: { ko: "카리나, 솔로 데뷔 첫 음악방송 1위 등극", en: "Karina Wins First Music Show Trophy as Soloist" }, date: "2024.10.19", summary: { ko: "'음악중심'에서 솔로 데뷔 후 첫 1위 트로피를 거머쥐며 솔로 아티스트로서의 입지를 굳혔습니다.", en: "She secured her first #1 trophy on 'Music Core' after her solo debut, solidifying her position as a solo artist." }, url: "#" },
      { title: { ko: "카리나, 프라다 글로벌 앰버서더 공식 선정", en: "Karina Officially Selected as Prada Global Ambassador" }, date: "2024.08.28", summary: { ko: "명품 브랜드 프라다의 새로운 얼굴로 발탁되어 밀라노 패션위크 등에서 압도적인 존재감을 뽐냈습니다.", en: "Selected as the new face of luxury brand Prada, she showcased an overwhelming presence at Milan Fashion Week." }, url: "#" },
      { title: { ko: "카리나, 넷플릭스 '미스터리 수사단' 시즌2 출연 확정", en: "Karina Confirmed for Netflix 'Agents of Mystery' Season 2" }, date: "2025.04.15", summary: { ko: "시즌1에서 활약했던 카리나가 시즌2에서도 '추리 에이스'로서의 활약을 이어갈 예정입니다.", en: "Karina, who excelled in Season 1, will continue her role as a 'deduction ace' in Season 2." }, url: "#" },
      { title: { ko: "카리나X잔나비 최정훈, 콜라보 싱글 발표", en: "Karina X Jannabi Choi Jung-hoon Release Collab Single" }, date: "2025.04.28", summary: { ko: "잔나비의 새로운 싱글에 피처링으로 참여하여 감성적인 보컬 매력을 선보였습니다.", en: "Participated as a featured artist in Jannabi's new single, showcasing her emotional vocal charm." }, url: "#" },
      { title: { ko: "카리나, '워터밤 2025' 솔로 무대 압권", en: "Karina's Solo Stage at 'Waterbomb 2025' Stuns Audience" }, date: "2025.07.05", summary: { ko: "여름 대표 페스티벌 워터밤에서 독보적인 퍼포먼스로 현장을 뜨겁게 달궜습니다.", en: "She heated up the scene with an unrivaled performance at the representative summer festival Waterbomb." }, url: "#" },
      { title: { ko: "카리나, YSL 뷰티 앰버서더로 고혹적 매력 발산", en: "Karina Radiates Alluring Charm as YSL Beauty Ambassador" }, date: "2024.06.15", summary: { ko: "입생로랑 뷰티의 새로운 뮤즈로서 세련되고 고혹적인 뷰티 화보를 공개했습니다.", en: "As the new muse for YSL Beauty, she released a sophisticated and alluring beauty pictorial." }, url: "#" },
      { title: { ko: "카리나, 컨버스 코리아 모델 발탁", en: "Karina Selected as Model for Converse Korea" }, date: "2024.01.03", summary: { ko: "평소 즐겨 신는 브랜드인 컨버스의 모델이 되어 힙한 감성을 선보였습니다.", en: "Became the model for Converse, a brand she frequently wears, showcasing her hip vibes." }, url: "#" },
      { title: { ko: "카리나, '마이 아티 필름' 통해 연기 첫 도전", en: "Karina Takes on First Acting Challenge via 'My Arti Film'" }, date: "2024.08.10", summary: { ko: "시네마틱 퍼포먼스 콘텐츠를 통해 강렬한 누아르 연기를 선보여 호평을 받았습니다.", en: "Received praise for her intense noir acting in cinematic performance content." }, url: "#" },
      { title: { ko: "카리나, MAMA 개막식 단독 호스트 활약", en: "Karina Shines as Solo Host for MAMA Opening Ceremony" }, date: "2024.11.21", summary: { ko: "2024 MAMA 어워즈의 시작을 알리는 개막식 호스트로서 유창한 진행 실력을 뽐냈습니다.", en: "Showcased fluent hosting skills as the host for the 2024 MAMA Awards opening ceremony." }, url: "#" }
    ],
    members: []
  },
  {
    id: "winter",
    name: { ko: "윈터", en: "Winter" },
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이", en: "MY" },
    accentColor: "#ffffff",
    imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+Solo+Performance+Photo",
    wiki: {
      ko: "에스파의 메인 보컬 윈터는 독보적인 음색과 탄탄한 가창력으로 K-POP 4세대를 대표하는 보컬리스트로 꼽힙니다. 2024년 첫 자작 솔로곡 'Spark'를 통해 싱어송라이터로서의 가능성을 보여주었으며, 각종 드라마 OST 참여를 통해 'OST 퀸'으로도 자리매김하고 있습니다.",
      en: "aespa's main vocalist Winter is considered a representative 4th-gen k-pop vocalist for her unique tone and solid singing skills. In 2024, she showed her potential as a singer-songwriter through her first self-composed solo track 'Spark' and has established herself as an 'OST Queen' through various drama OSTs."
    },
    description: {
      ko: "맑은 눈의 강아지, 무대 위에서는 얼음 공주. 천년 돌의 환생이라 불리는 올라운더입니다.",
      en: "A puppy with clear eyes, but an ice princess on stage. An all-rounder often called the reincarnation of a legendary idol."
    },
    tmi: {
      ko: [
        "윈터는 21세기 첫날(2001년 1월 1일)에 태어난 '밀레니엄 베이비'입니다. 본인은 이 사실을 매우 자랑스러워합니다.",
        "윈터는 사실 엄청난 게임 덕후입니다. 오버워치와 메이플스토리를 즐기며, 게임할 때는 누구보다 진심입니다.",
        "윈터는 본명이 '김민정'인데, 이름이 너무 평범해서 멤버들이 가끔 '민정아!'라고 부르면 못 들은 척을 합니다.",
        "그녀는 사실 군인 가족 출신입니다. 본인도 군인이 될까 고민한 적이 있어서인지 자세가 매우 곧고 절도 있습니다.",
        "윈터는 아침마다 우유를 한 컵씩 꼭 마십니다. 우유를 마셔야 키가 더 클 수 있다고 믿고 있습니다.",
        "윈터는 사실 엄청난 사투리 보유자입니다. 당황하면 '와 그라는데!'라며 부산 사투리가 튀어나옵니다.",
        "윈터는 본인의 왼쪽 볼에 있는 보조개를 '민정 홀'이라고 부르며 팬들에게 입덕을 권장합니다.",
        "그녀는 사실 밥보다 간식을 더 좋아합니다. 젤리와 초콜릿만 있으면 하루 종일 행복해합니다.",
        "윈터는 수학 특별반 출신으로, 숫자에 매우 밝습니다. 정산할 때 가장 꼼꼼하게 확인하는 멤버입니다.",
        "윈터는 액션 영화와 전쟁 영화를 좋아합니다. 로맨스 영화를 보면 가끔 '왜 저래?'라며 이해를 못 하기도 합니다.",
        "윈터는 사실 '하리보' 젤리를 색깔별로 분류해서 먹는 습관이 있습니다.",
        "그녀는 본인이 귀엽다는 말을 들으면 '저 시크한데요?'라며 정색하지만, 3초 뒤에 바로 웃음을 터뜨립니다.",
        "윈터는 숙소에서 가장 깔끔한 멤버 중 한 명입니다. 자기 물건이 흐트러져 있는 것을 못 참습니다.",
        "윈터는 사실 검도를 배운 적이 있습니다. 무대에서 칼을 휘두르는 안무가 있다면 누구보다 잘할 자신감이 있습니다.",
        "윈터는 본인의 별명인 '백구'를 좋아합니다. 하얀 강아지처럼 팬들을 지켜주겠다는 의미를 부여합니다.",
        "그녀는 사실 이해하기 어려운 심오한 영화를 보고 해석하는 것을 즐기는 지적인 면모가 있습니다.",
        "윈터는 무대 위에서 땀을 거의 흘리지 않는 '무땀 요정'으로 유명합니다. 팬들은 그녀가 사실 로봇이 아닐까 의심합니다.",
        "윈터는 사실 엄청난 종이 인형처럼 보이지만, 근육량이 생각보다 많아서 팔씨름을 하면 멤버들을 이기기도 합니다.",
        "그녀는 본인의 무대 의상 중 '아바타' 컨셉의 의상을 가장 좋아합니다. 본인과 찰떡이라고 생각하기 때문입니다.",
        "윈터는 팬들에게 '윈터가 왔다!'라는 알람을 보낼 때 가장 행복하다고 합니다."
      ],
      en: [
        "She is a 'Millennium Baby' born on the very first day of the 21st century (Jan 1, 2001), a fact she's very proud of.",
        "She is a huge gamer who plays Overwatch and MapleStory with absolute seriousness.",
        "Her real name is Kim Min-jeong; she sometimes pretends not to hear when members call her 'Min-jeong!' because it sounds too ordinary.",
        "Coming from a military family, she once considered a career in the military, which explains her upright and disciplined posture.",
        "She drinks a glass of milk every morning, firmly believing it will help her grow taller.",
        "She is a secret master of the Busan dialect and starts shouting in it whenever she gets flustered.",
        "She calls the dimple on her left cheek the 'Min-jeong Hole' and encourages fans to 'fall into it'.",
        "She prefers snacks over actual meals; she can stay happy all day as long as she has jelly and chocolate.",
        "Formerly in an advanced math class, she is very quick with numbers and is the most meticulous member when checking accounts.",
        "She loves action and war movies; she often gets confused during romance movies, asking 'Why are they doing that?'.",
        "She has a habit of sorting Haribo jellies by color before eating them.",
        "She gets serious and says 'I'm chic!' when told she's cute, only to burst into laughter 3 seconds later.",
        "She is one of the neatest members in the dorm and can't stand seeing her belongings out of place.",
        "She has experience in Kendo and is confident she'd excel in any choreography involving sword-fighting.",
        "She loves her nickname 'Baekgu' (white puppy), giving it the meaning that she will protect her fans like a loyal dog.",
        "She has an intellectual side and enjoys watching and interpreting complex, hard-to-understand films.",
        "Known as the 'No-Sweat Fairy', she barely sweats on stage, leading fans to suspect she might actually be a robot.",
        "Despite looking fragile like a 'paper doll', she has surprisingly high muscle mass and can even beat members at arm wrestling.",
        "Her favorite stage outfits are the ones with the 'Avatar' concept, as she thinks they suit her perfectly.",
        "She says she feels happiest when sending 'Winter is here!' notifications to her fans."
      ]
    },
    news: [
      { title: { ko: "윈터, 첫 자작 솔로곡 'Spark' 공개", en: "Winter Releases 1st Self-Composed Solo Track 'Spark'" }, date: "2024.10.09", summary: { ko: "에스파의 월드투어 솔로 무대를 통해 공개된 자작곡 'Spark'가 정식 발매되어 평단의 호평을 받았습니다.", en: "Her self-composed track 'Spark', first revealed during aespa's world tour, was officially released to critical acclaim." }, url: "#" },
      { title: { ko: "윈터, 기흉 수술 후 건강한 복습 '팬들 안심'", en: "Winter's Healthy Return After Surgery Relieves Fans" }, date: "2024.04.12", summary: { ko: "기흉 수술을 성공적으로 마치고 회복기를 거친 윈터가 밝은 모습으로 복귀하여 팬들을 안심시켰습니다.", en: "After successfully undergoing surgery for a collapsed lung and recovering, Winter returned with a bright smile, relieving worried fans." }, url: "#" },
      { title: { ko: "윈터, 드라마 '슬기로운 전공의생활' OST 가창", en: "Winter Sings OST for 'Resident Playbook'" }, date: "2024.06.20", summary: { ko: "인기 드라마 시리즈의 OST에 참여하여 특유의 감성적인 음색으로 극의 몰입도를 높였습니다.", en: "Participated in the OST of a popular drama series, enhancing immersion with her signature emotional tone." }, url: "#" },
      { title: { ko: "윈터, 폴로 랄프 로렌 앰버서더의 클래식한 매력", en: "Winter's Classic Charm as Polo Ralph Lauren Ambassador" }, date: "2024.09.15", summary: { ko: "폴로 랄프 로렌의 앰버서더로서 고전적이면서도 세련된 가을 화보를 장식했습니다.", en: "As an ambassador for Polo Ralph Lauren, she graced classic yet sophisticated autumn pictorials." }, url: "#" },
      { title: { ko: "윈터, MMA 2025 '레전드 비주얼'로 화제", en: "Winter's 'Legendary Visuals' at MMA 2025 Become Hot Topic" }, date: "2025.11.30", summary: { ko: "멜론 뮤직 어워즈 레드카펫에서 선보인 역대급 스타일링으로 전 세계 팬들의 찬사를 받았습니다.", en: "Received global praise for her legendary styling on the red carpet of the Melon Music Awards." }, url: "#" },
      { title: { ko: "윈터, 작사·작곡 크레딧 당당히 이름 올려", en: "Winter Proudly Earns Songwriting and Composing Credits" }, date: "2024.10.25", summary: { ko: "솔로곡 'Spark'를 통해 음악적 역량을 인정받으며 차세대 싱어송라이터로서의 행보를 시작했습니다.", en: "Recognized for her musical talent through 'Spark', she began her journey as a next-generation singer-songwriter." }, url: "#" },
      { title: { ko: "윈터, SBS 가요대전 특별 스테이지 장식", en: "Winter Graces Special Stage at SBS Gayo Daejeon" }, date: "2025.12.25", summary: { ko: "크리스마스 이브를 맞아 팬들을 위한 특별한 솔로 무 선보여 큰 감동을 주었습니다.", en: "Delivered a moving special solo stage for fans on Christmas Eve, leaving a deep impression." }, url: "#" },
      { title: { ko: "윈터, 팬사인회에서 보여준 '프로페셔널' 정석", en: "Winter Shows the Essence of 'Professionalism' at Fansign" }, date: "2025.12.10", summary: { ko: "각종 루머에도 불구하고 팬들을 향해 환한 미소와 다정한 팬서비스를 선보여 호평을 받았습니다.", en: "Despite various rumors, she received praise for her bright smiles and kind fanservice toward fans." }, url: "#" },
      { title: { ko: "SM, 윈터 권익 보호 위해 강력한 법적 대응 예고", en: "SM Announces Strong Legal Action to Protect Winter's Rights" }, date: "2025.12.15", summary: { ko: "소속사 SM 엔터테인먼트는 아티스트를 향한 악의적인 게시물에 대해 선처 없는 법적 대응을 선언했습니다.", en: "SM Entertainment declared zero tolerance and strong legal action against malicious posts targeting the artist." }, url: "#" },
      { title: { ko: "윈터, MBTI 'ENFJ'로 변화 고백 '팬들과 소통'", en: "Winter Confesses MBTI Change to 'ENFJ' During Fan Interaction" }, date: "2024.11.05", summary: { ko: "최근 성격 유형이 바뀌었다고 밝히며 팬들과 더욱 깊고 따뜻한 소통을 이어가고 있습니다.", en: "Revealed that her personality type recently changed, continuing deep and warm communication with fans." }, url: "#" }
    ],
    members: []
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM" },
    officialSite: "https://le-sserafim.com/",
    company: "SOURCE MUSIC",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#000000",
    imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Group+High+Resolution+Photo",
    wiki: {
      ko: "르세라핌(LE SSERAFIM)은 하이브 산하 쏘스뮤직 소속의 5인조 걸그룹입니다. 팀명은 'IM FEARLESS'를 아나그램 방식으로 만든 이름으로, 세상의 시선에 흔들리지 않고 두려움 없이 앞으로 나아가겠다는 자기 확신과 강한 의지를 내포하고 있습니다. 데뷔곡 'FEARLESS'를 시작으로 'ANTIFRAGILE', 'UNFORGIVEN', 'EASY', 'CRAZY' 등 발표하는 곡마다 당당하고 주체적인 메시지를 전달하며 전 세계적인 인기를 얻고 있습니다.",
      en: "LE SSERAFIM is a 5-member girl group under SOURCE MUSIC, a subsidiary of HYBE. The name is an anagram of 'I'M FEARLESS', implying self-confidence and a strong will to move forward without being swayed by the world's gaze. Starting with their debut 'FEARLESS', they have gained global popularity with hits like 'ANTIFRAGILE', 'UNFORGIVEN', 'EASY', and 'CRAZY', delivering messages of confidence and independence."
    },
    description: {
      ko: "두려움 없는 다섯 소녀, 독보적인 퍼포먼스와 당당한 매력으로 K-POP의 새로운 기준을 제시하는 4세대 대표 걸그룹입니다.",
      en: "Five fearless girls, a representative 4th-gen girl group setting new standards in K-POP with unrivaled performances and confident charm."
    },
    tmi: {
      ko: [
        "멤버들은 스스로를 'Fearless'라고 부르지만, 숙소에 벌레가 나타나면 가장 먼저 도망가는 'Fearful'한 모습을 보입니다.",
        "막내 은채는 '만채'라고 불리지만, 사실 언니들을 가장 잘 부려먹는(?) 실세 중의 실세입니다.",
        "채원의 '도도독' 사건은 팀 내에서 금기어이자 동시에 가장 사랑받는 전설적인 밈입니다.",
        "사쿠라는 한번 게임을 시작하면 12시간 동안 화장실도 안 가고 집중하는 진정한 프로 게이머입니다.",
        "윤진은 팀의 '핫걸'이지만, 사실 길 가다가 자기 발에 걸려 넘어지는 허당기가 넘칩니다.",
        "카즈하의 코어 근육은 너무 강력해서 밥을 먹으면서도 다리를 180도로 찢을 수 있다고 멤버들이 주장합니다.",
        "멤버들은 '근세라핌'이라는 별명을 지키기 위해 연습 전후로 고강도 근력 운동을 거르지 않습니다.",
        "은채의 스타일기는 이제 모든 아이돌들이 컴백하면 꼭 거쳐야 하는 '아이돌 필수 코스'가 되었습니다.",
        "사쿠라는 뜨개질에 중독되어 멤버들의 반려견 옷까지 직접 짜주는 '사쿠라 할머니' 모드가 있습니다.",
        "채원은 민트초코를 사랑하지만, 다른 멤버들은 '치약 맛을 왜 돈 주고 사 먹냐'며 질색합니다.",
        "카즈하는 자다가 일본어로 잠꼬대를 하고, 옆에서 듣던 사쿠라가 일본어로 대답해주며 대화가 이어집니다.",
        "윤진이 영어를 너무 빨리 하면 한국인 멤버들은 일단 고개를 끄덕이며 'Yes'라고 답하고 봅니다.",
        "자체 예능 '르니버스'에서는 아이돌 이미지를 내려놓고 서로의 흑역사를 폭로하는 데 진심입니다.",
        "은채가 가장 좋아하는 간식은 언니들이 몰래 사와서 입에 넣어주는 모든 종류의 젤리입니다.",
        "채원은 '강아지 리더'로 불리며 멤버들에게 화를 내려고 해도 귀여어서 실패하곤 합니다.",
        "사쿠라는 PC방 음식 메뉴만 보고도 그 PC방의 사양을 맞힐 수 있다는 소문이 있습니다.",
        "카즈하의 복근은 너무 선명해서 가끔 멤버들이 그 위에서 빨래하는 시늉을 합니다.",
        "윤진은 숙소에서 가끔 오페라 아리아를 열창해서 멤버들을 강제로 예술의 전당에 보냅니다.",
        "저녁 메뉴를 고르는 데 2시간을 토론하다가 결국 가위바위보로 결정했는데, 진 사람이 울먹였다는 전설이 있습니다.",
        "르세라핌의 안무 연습은 너무 격렬해서 연습실 거울에 김이 서리는 게 일상입니다."
      ],
      en: [
        "The members call themselves 'Fearless', but they are the most 'Fearful' when a bug appears in their dorm.",
        "Eunchae is called 'Manchae' (Maknae), but she's actually the real boss who 'manages' her older sisters.",
        "Chaewon's 'Dododok' incident is a forbidden word but also the most loved legendary meme within the group.",
        "Sakura is a true pro-gamer who can focus for 12 hours straight without even going to the restroom.",
        "Yunjin is the group's 'Hot Girl', but she's actually so clumsy she trips over her own feet while walking.",
        "Kazuha's core is so strong that members claim she can eat a meal while doing a 180-degree split.",
        "To maintain their 'Muscle-serafim' title, they never skip high-intensity workouts before and after practice.",
        "Eunchae's Star Diary has become a 'must-visit course' for all idols during their comeback promotions.",
        "Sakura is so into knitting that she's in 'Grandma Sakura' mode, making clothes even for members' pets.",
        "Chaewon loves mint chocolate, while the others hate it, asking why she pays to eat toothpaste flavor.",
        "Kazuha talks in Japanese in her sleep, and Sakura often replies in Japanese, creating a sleep-talk conversation.",
        "When Yunjin speaks English too fast, the Korean members just nod and say 'Yes' to be safe.",
        "In their variety show 'LENIVERSE', they are serious about exposing each other's dark pasts and dropping their idol image.",
        "Eunchae's favorite snack is any kind of jelly that her older sisters sneakily put into her mouth.",
        "Chaewon is called the 'Puppy Leader' because her attempts to get angry are too cute to be taken seriously.",
        "Rumor has it that Sakura can guess a PC bang's hardware specs just by looking at their food menu.",
        "Kazuha's abs are so clear that members sometimes pretend to do laundry on them.",
        "Yunjin often sings opera arias in the dorm, forcefully sending the members to the 'Seoul Arts Center'.",
        "They once debated for 2 hours on dinner and ended up deciding by Rock-Paper-Scissors; the loser almost cried.",
        "Their dance practice is so intense that the practice room mirrors are constantly fogged up."
      ]
    },
    news: [
      { title: { ko: "르세라핌, 'CRAZY'로 빌보드 핫 100 자체 최고 기록 경신", en: "LE SSERAFIM Breaks Own Billboard Hot 100 Record with 'CRAZY'" }, date: "2024.09.10", summary: { ko: "르세라핌이 신곡 'CRAZY'로 빌보드 메인 싱글 차트 핫 100에서 커리어 하이를 달성하며 글로벌 위상을 입증했습니다.", en: "LE SSERAFIM reached a career high on the Billboard Hot 100 with 'CRAZY', proving their global status." }, url: "#" },
      { title: { ko: "르세라핌, 코첼라 무대 통해 전 세계 팬들 매료", en: "LE SSERAFIM Captivates Global Fans at Coachella" }, date: "2024.04.15", summary: { ko: "미국 최대 음악 페스티벌 코첼라 무대에서 화려한 퍼포먼스를 선보이며 외신의 집중 조명을 받았습니다.", en: "They received spotlight from foreign media after a spectacular performance at Coachella, the largest US music festival." }, url: "#" },
      { title: { ko: "르세라핌, 'ANTIFRAGILE' MV 5억 뷰 돌파", en: "LE SSERAFIM's 'ANTIFRAGILE' MV Surpasses 500M Views" }, date: "2024.11.01", summary: { ko: "전 세계적인 히트곡 'ANTIFRAGILE'의 뮤직비디오가 유튜브 조회수 5억 회를 넘어섰습니다.", en: "The MV for the global hit 'ANTIFRAGILE' has surpassed 500 million views on YouTube." }, url: "#" },
      { title: { ko: "은채의 스타일기, 첫 단독 팬미팅 성료", en: "Eunchae's Star Diary Completes First Solo Fan Meeting" }, date: "2024.08.20", summary: { ko: "MC 은채가 자신의 이름을 내건 콘텐츠로 팬들과 직접 만나 소통하는 시간을 가졌습니다.", en: "MC Eunchae met and communicated with fans through her namesake content program." }, url: "#" },
      { title: { ko: "르세라핌, 2025 월드투어 'FEARLESS SOUL' 개최", en: "LE SSERAFIM to Hold 2025 World Tour 'FEARLESS SOUL'" }, date: "2025.01.05", summary: { ko: "서울을 시작으로 전 세계 주요 도시를 도는 두 번째 월드투어 일정을 공개했습니다.", en: "Revealed the schedule for their second world tour, starting in Seoul and visiting major cities globally." }, url: "#" },
      { title: { ko: "카즈하, 란제리 브랜드 캘빈클라인 글로벌 모델 발탁", en: "Kazuha Selected as Calvin Klein Global Model" }, date: "2024.03.12", summary: { ko: "카즈하의 건강미 넘치는 비주얼이 글로벌 패션 브랜드의 아이콘으로 낙점되었습니다.", en: "Kazuha's healthy visuals were chosen as an icon for the global fashion brand." }, url: "#" },
      { title: { ko: "르세라핌, 'Perfect Night' 롱런 흥행 지속", en: "LE SSERAFIM's 'Perfect Night' Continues Long-run Success" }, date: "2024.02.10", summary: { ko: "오버워치2 협업곡 'Perfect Night'이 발매 수개월이 지났음에도 차트 상위권을 유지하고 있습니다.", en: "The Overwatch 2 collab track 'Perfect Night' remains high on charts months after its release." }, url: "#" },
      { title: { ko: "허윤진, 새로운 자작 솔로곡 'I ≠ DOLL' 화제", en: "Huh Yunjin's New Solo Track 'I ≠ DOLL' Becomes a Topic" }, date: "2024.01.15", summary: { ko: "아이돌로서의 솔직한 고민을 담은 자작곡을 발표하며 싱어송라이터의 면모를 과시했습니다.", en: "She showed off her singer-songwriter side with a self-composed track about her honest thoughts as an idol." }, url: "#" },
      { title: { ko: "르세라핌 다큐멘터리, 멤버들의 진솔한 눈물 담아", en: "LE SSERAFIM Documentary Captures Members' Honest Tears" }, date: "2024.07.29", summary: { ko: "무대 뒤의 치열한 노력과 고민을 담은 다큐멘터리가 공개되어 팬들에게 큰 감동을 주었습니다.", en: "The documentary capturing the fierce effort and worries behind the scenes moved fans deeply." }, url: "#" },
      { title: { ko: "르세라핌, 틱톡 '올해의 아티스트' 노미네이트", en: "LE SSERAFIM Nominated for TikTok 'Artist of the Year'" }, date: "2024.11.10", summary: { ko: "글로벌 숏폼 트렌드를 주도하며 틱톡 어워즈의 주요 부문 후보에 올랐습니다.", en: "Leading global short-form trends, they were nominated for major categories at the TikTok Awards." }, url: "#" }
    ],
    members: [
      {
        id: "kimchaewon",
        name: { ko: "김채원", en: "Kim Chaewon" },
        role: { ko: "리더/보컬", en: "Leader/Vocalist" },
        birth: "2000.08.01",
        mbti: "ISTP",
        zodiac: { ko: "사자자리", en: "Leo" },
        height: "163cm",
        bloodType: "B",
        description: { ko: "치명적인 단발 스타일과 독보적인 음색을 가진 르세라핌의 든든한 리더입니다.", en: "The reliable leader of LE SSERAFIM with a fatal short hair style and a unique vocal tone." },
        imageUrl: "https://tse1.mm.bing.net/th?q=Kim+Chaewon+LE+SSERAFIM+Portrait"
      },
      {
        id: "sakura",
        name: { ko: "사쿠라", en: "Sakura" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "1998.03.19",
        mbti: "INTP",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        height: "163cm",
        bloodType: "A",
        description: { ko: "세 번의 데뷔를 거친 베테랑이자, 무결점 비주얼을 자랑하는 팀의 맏언니입니다.", en: "A veteran of three debuts and the oldest member of the group, boasting flawless visuals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=Sakura+Miyawaki+LE+SSERAFIM+Portrait"
      },
      {
        id: "huhyunjin",
        name: { ko: "허윤진", en: "Huh Yunjin" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2001.10.08",
        mbti: "INFJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "172cm",
        bloodType: "B",
        description: { ko: "싱어송라이터 역량을 갖춘 '핫걸', 시원시원한 가창력과 퍼포먼스가 매력입니다.", en: "A 'Hot Girl' with singer-songwriter talent, charming fans with her powerful vocals and performance." },
        imageUrl: "https://tse1.mm.bing.net/th?q=Huh+Yunjin+LE+SSERAFIM+Portrait"
      },
      {
        id: "kazuha",
        name: { ko: "카즈하", en: "Kazuha" },
        role: { ko: "래퍼/댄서", en: "Rapper/Dancer" },
        birth: "2003.08.09",
        mbti: "ENFP",
        zodiac: { ko: "사자자리", en: "Leo" },
        height: "170cm",
        bloodType: "O",
        description: { ko: "15년 발레 경력을 가진 우아한 춤선의 소유자, 반전 있는 저음 랩이 특징입니다.", en: "An elegant dancer with 15 years of ballet experience, known for her unexpected low-tone rap." },
        imageUrl: "https://tse1.mm.bing.net/th?q=Kazuha+LE+SSERAFIM+Portrait"
      },
      {
        id: "hongeunchae",
        name: { ko: "홍은채", en: "Hong Eunchae" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer" },
        birth: "2006.11.10",
        mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "170cm",
        bloodType: "B",
        description: { ko: "모든 아이돌의 사랑을 받는 '만채', 밝은 에너지와 성장하는 실력이 돋보이는 막내입니다.", en: "The beloved 'Manchae', the youngest member standing out with bright energy and growing skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=Hong+Eunchae+LE+SSERAFIM+Portrait"
      }
    ]
  },
  {
    id: "kimchaewon",
    name: { ko: "김채원", en: "Kim Chaewon" },
    company: "SOURCE MUSIC",
    debut: "2018.10.29",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#fcfc00",
    imageUrl: "https://tse1.mm.bing.net/th?q=Kim+Chaewon+Solo+High+Resolution+Photo",
    wiki: {
      ko: "아이즈원 출신이자 현재 르세라핌의 리더인 김채원은 탄탄한 라이브 실력과 퍼포먼스 능력을 겸비한 올라운더 아티스트입니다. 2024년 '도도독' 밈으로 전 세계적인 화제를 모으며 대중적인 인지도를 높였고, 각종 패션 화보와 브랜드 앰버서더로 활동하며 독보적인 아우라를 뽐내고 있습니다.",
      en: "A former IZ*ONE member and current leader of LE SSERAFIM, Kim Chaewon is an all-rounder artist with solid live vocals and performance skills. In 2024, she gained massive popularity through the 'Dododok' meme and is showcasing her unique aura as a brand ambassador and fashion icon."
    },
    description: {
      ko: "단발머리의 정석, 무대 위에서는 카리스마 리더, 평소에는 귀여운 강아지 같은 반전 매력의 소유자입니다.",
      en: "The icon of short hair, a charismatic leader on stage, and a cute puppy-like personality off-stage."
    },
    tmi: {
      ko: [
        "채원은 본인의 '도도독' 실수를 처음엔 흑역사라 생각했지만, 지금은 팬들과 함께 즐기는 '밈 장인'이 되었습니다.",
        "채원은 사실 엄청난 매운 음식 마니아입니다. 하지만 다음 날 항상 고생하며 '다신 안 먹어'라고 다짐합니다.",
        "긴장하면 입술을 깨무는 습관이 있는데, 팬들은 그 모습이 너무 귀여워서 일부러 긴장시키고 싶어(?) 합니다.",
        "채원이 가장 좋아하는 색깔은 노란색입니다. 병아리 같은 본인의 이미지와 찰떡이라고 생각합니다.",
        "아이돌이 안 되었다면 스튜어디스가 되었을 것이라고 합니다. 제복이 잘 어울리는 비주얼 때문입니다.",
        "아이즈원 시절 '쌈무'라는 별명을 얻게 한 민트색 드레스는 사실 본인도 처음엔 당황스러웠다고 고백했습니다.",
        "채원은 단신즈 멤버들 중에서 본인이 가장 키가 크다고 주장하지만, 멤버들은 도토리 키 재기라고 놀립니다.",
        "자기 전에 유튜브로 먹방을 보는 게 유일한 힐링입니다. 특히 탕후루 먹방을 좋아합니다.",
        "애교를 시키면 세상에서 가장 잘하지만, 끝나자마자 현타가 와서 얼굴을 감싸 쥐고 괴로워합니다.",
        "가방 속에는 영양제가 가득합니다. 멤버들이 아프면 채원의 가방으로 달려가서 약을 처방받습니다.",
        "가장 좋아하는 과일은 블루베리입니다. 눈 건강에 좋다는 말을 듣고 그때부터 중독되었습니다.",
        "은채와 게임을 할 때 승부욕이 폭발합니다. 가끔 지면 진심으로 억울해하는 표정이 나옵니다.",
        "베개만 푹신하면 세상 어디서든 3분 안에 잠들 수 있는 기적의 수면 능력을 가졌습니다.",
        "옷장을 무지개색 순서대로 정리하는 강박 아닌 강박이 있습니다. 정리가 안 되면 잠을 못 잡니다.",
        "완전한 '집순이'라 쉬는 날에는 침대 밖으로 나오는 것이 일 년 중 가장 큰 도전입니다.",
        "에어팟을 너무 잘 잃어버려서, 이미 잃어버린 에어팟 값만 모아도 차 한 대는 샀을 거라는 농담이 있습니다.",
        "패션을 좋아해서 가을을 가장 기다립니다. 코트와 부츠를 신은 본인의 모습에 취하곤 합니다.",
        "영하 20도 한겨울에도 무조건 '아아(아이스 아메리카노)'를 고집하는 진정한 얼죽아입니다.",
        "틱톡 트렌드를 가장 빨리 파악합니다. 멤버들에게 유행하는 챌린지를 가르쳐주는 전담 강사입니다.",
        "본인의 매력 포인트는 '무대 위와 아래의 갭 차이'라고 생각하며, 이를 유지하기 위해 노력합니다."
      ],
      en: [
        "She initially thought her 'Dododok' mistake was a dark past, but she's now a 'Meme Master' enjoying it with fans.",
        "She is a huge fan of spicy food but always regrets it the next day, vowing 'never again'.",
        "She has a habit of biting her lips when nervous, which fans find so cute they want to make her nervous on purpose.",
        "Her favorite color is yellow; she thinks it fits her chick-like image perfectly.",
        "She says she would have become a flight attendant if she weren't an idol, given her visual that suits uniforms.",
        "She confessed that the mint dress that gave her the nickname 'Ssam-mu' was actually quite shocking to her at first.",
        "She claims she's the tallest among the shorter members, but the others just say they're all the same size.",
        "Watching mukbangs on YouTube before bed is her healing ritual, especially Tanghulu mukbangs.",
        "She is the best at 'Aegyo' when asked, but immediately suffers from 'cringe attacks' and hides her face.",
        "Her bag is full of supplements; members run to her 'pharmacy' whenever they feel unwell.",
        "Blueberries are her favorite fruit; she started eating them for eye health and got addicted.",
        "Her competitive streak explodes when playing games with Eunchae; she gets genuinely upset when she loses.",
        "She has a miraculous sleeping ability, falling asleep anywhere in 3 minutes as long as there's a soft pillow.",
        "She has a compulsion to organize her closet in rainbow order; she can't sleep if it's messy.",
        "A complete homebody, her biggest challenge of the year is leaving her bed on a day off.",
        "She loses her AirPods so often that there's a joke she could've bought a car with the money spent on new ones.",
        "She loves fashion and waits for autumn to wear coats and boots, admiring her reflection in them.",
        "She is a true 'Ice Americano' lover, sticking to it even in minus 20-degree winter weather.",
        "She is the fastest to catch TikTok trends and acts as the dedicated instructor for other members' challenges.",
        "She believes her charm point is the 'gap between stage and reality' and works hard to maintain it."
      ]
    },
    news: [
      { title: { ko: "김채원, '도도독' 리믹스 글로벌 차트 역주행", en: "Kim Chaewon's 'Dododok' Remix Climbs Global Charts" }, date: "2024.09.25", summary: { ko: "공연 중 실수로 탄생한 '도도독' 밈이 리믹스 버전으로 발매되어 전 세계 틱톡 차트를 휩쓸고 있습니다.", en: "The 'Dododok' meme, born from a concert mistake, was released as a remix and is sweeping TikTok charts worldwide." }, url: "#" },
      { title: { ko: "김채원, 보그 코리아 디지털 커버 장식", en: "Kim Chaewon Graces Vogue Korea Digital Cover" }, date: "2024.05.20", summary: { ko: "김채원이 럭셔리 브랜드와 함께한 강렬하고 시크한 화보로 패션계의 주목을 받았습니다.", en: "Kim Chaewon drew attention from the fashion world with an intense and chic pictorial with a luxury brand." }, url: "#" },
      { title: { ko: "김채원, 드라마 '마이 데몬' OST 참여", en: "Kim Chaewon Participates in 'My Demon' OST" }, date: "2024.01.10", summary: { ko: "인기 드라마 OST의 가창자로 참여하여 감성적이고 맑은 음색으로 시청자들을 사로잡았습니다.", en: "As an OST singer for a popular drama, she captivated viewers with her emotional and clear voice." }, url: "#" },
      { title: { ko: "김채원, 'Make It Look Easy' 브이로그 100만 뷰 달성", en: "Kim Chaewon's Vlog Hits 1M Views" }, date: "2024.08.05", summary: { ko: "그녀의 평범하고 소탈한 일상을 담은 브이로그가 공개 직후 뜨거운 반응을 얻었습니다.", en: "Her vlog featuring her ordinary and humble daily life received a hot reaction immediately after release." }, url: "#" },
      { title: { ko: "김채원, 메이크업 브랜드 '메이크업포에버' 앰버서더 발탁", en: "Kim Chaewon Selected as 'Make Up For Ever' Ambassador" }, date: "2024.02.15", summary: { ko: "결점 없는 피부와 세련된 이미지로 글로벌 코스메틱 브랜드의 뮤즈가 되었습니다.", en: "She became the muse for a global cosmetic brand with her flawless skin and sophisticated image." }, url: "#" },
      { title: { ko: "김채원, 예능 '혜미리예채파' 시즌2 기대감 고조", en: "Anticipation High for Kim Chaewon in 'HMLYCP' Season 2" }, date: "2025.03.12", summary: { ko: "지난 시즌에서 보여준 예능감을 이어 새로운 시즌에서도 맹활약할 것을 예고했습니다.", en: "Teased her active role in the new season following the variety skills shown in the previous season." }, url: "#" },
      { title: { ko: "김채원, 시그니처 단발 헤어스타일 '전국 미용실 강타'", en: "Kim Chaewon's Signature Short Hair Hits Salons Nationwide" }, date: "2024.06.30", summary: { ko: "그녀의 헤어스타일을 따라 하려는 여성들이 늘어나며 다시 한번 '채원 단발' 열풍이 불고 있습니다.", en: "The 'Chaewon Bob' trend is back as more women are asking for her specific hairstyle at salons." }, url: "#" },
      { title: { ko: "김채원, 유명 팝 아티스트와 비밀 협업 논의 중?", en: "Kim Chaewon Discussing Secret Collab with Famous Pop Artist?" }, date: "2025.04.18", summary: { ko: "최근 해외 프로듀서와의 만남이 포착되며 팬들 사이에서 솔로 협업에 대한 기대가 커지고 있습니다.", en: "Expectations for a solo collab are rising among fans after she was spotted meeting a foreign producer." }, url: "#" },
      { title: { ko: "김채원, 팬들에게 보낸 손편지 '진심이 느껴져'", en: "Kim Chaewon's Handwritten Letter to Fans 'Sincerity Felt'" }, date: "2024.12.25", summary: { ko: "크리스마스를 맞아 팬들에게 전한 따뜻한 메시지가 SNS 상에서 화제가 되었습니다.", en: "Her warm Christmas message to fans became a hot topic on social media." }, url: "#" },
      { title: { ko: "김채원, 르세라핌 리더로서의 고충과 책임감 고백", en: "Kim Chaewon Confesses Struggles and Responsibility as Leader" }, date: "2024.07.15", summary: { ko: "인터뷰를 통해 팀을 이끄는 리더로서의 진솔한 생각과 멤버들에 대한 애정을 드러냈습니다.", en: "Revealed her honest thoughts as a leader and her affection for members through an interview." }, url: "#" }
    ],
    members: []
  },
  {
    id: "sakura",
    name: { ko: "사쿠라", en: "Sakura" },
    company: "SOURCE MUSIC",
    debut: "2011.10.23",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#ffcccc",
    imageUrl: "https://tse1.mm.bing.net/th?q=Sakura+Miyawaki+Solo+High+Resolution+Photo",
    wiki: {
      ko: "일본 HKT48, 한국 아이즈원을 거쳐 현재 르세라핌의 멤버로 활동 중인 사쿠라는 K-POP 역사의 한 페이지를 장식하고 있는 입지전적인 인물입니다. 무결점 비주얼과 끊임없는 노력으로 '노력의 천재'라 불리며, 게임, 뜨개질, 유튜브 등 다양한 분야에서 두각을 나타내는 다재다능한 아티스트입니다. 세 번의 데뷔를 통해 증명된 탄탄한 팬덤과 영향력은 그녀를 글로벌 아이콘으로 만들었습니다.",
      en: "Sakura, who has been a member of HKT48 and IZ*ONE, and is currently a member of LE SSERAFIM, is a legendary figure in K-POP history. Known as a 'Genius of Effort' for her flawless visuals and constant hard work, she is a versatile artist excelling in gaming, knitting, and YouTube. Her solid fandom and influence proven through three debuts have made her a global icon."
    },
    description: {
      ko: "세 번의 데뷔, 천년의 비주얼. 르세라핌의 맏언니이자 게임과 뜨개질에 진심인 '노력형 천재'입니다.",
      en: "Three debuts, a millennium-tier visual. The oldest member of LE SSERAFIM and a 'hard-working genius' serious about gaming and knitting."
    },
    tmi: {
      ko: [
        "사쿠라는 본인 소유의 고사양 게이밍 PC를 직접 조립할 정도로 게임에 진심인 '겜순이'입니다.",
        "일본과 한국에서 세 번 데뷔하며 총 활동 기간이 10년이 넘는 대선배지만, 숙소에서는 그냥 '뜨개질하는 언니'입니다.",
        "거짓말을 하거나 당황하면 귀가 새빨개지는 습관이 있어 멤버들에게 절대 거짓말을 못 합니다.",
        "뜨개질 실력이 너무 좋아서 멤버들에게 모자뿐만 아니라 목도리, 가디건까지 떠준 적이 있습니다.",
        "숙소 침대 밑에 일본 과자를 숨겨둔 '비밀 창고'가 있는데, 가끔 은채에게 들켜서 뺏기곤 합니다.",
        "기계치인 다른 멤버들을 위해 공유기 설정이나 복잡한 가전제품 설치를 도맡아 하는 '꾸라 테크'입니다.",
        "가장 좋아하는 게임은 '에이펙스 레전드'이며, 해외 투어 중에도 노트북으로 게임을 즐깁니다.",
        "사쿠라 특유의 '달리기 폼'은 너무 독특해서 멤버들이 매번 따라 하며 웃음바다를 만듭니다.",
        "레드벨벳 아이린의 열혈 팬으로, 성덕이 되었을 때 너무 좋아서 눈물까지 흘렸다는 소문이 있습니다.",
        "잠을 잘 때 눈을 살짝 뜨고 자는 습관이 있어 멤버들이 가끔 깨어있는 줄 알고 말을 겁니다.",
        "그림 실력이 뛰어난데, 특히 멤버들의 특징을 과장해서 그린 캐리커처가 일품입니다.",
        "사실 운동을 세상에서 제일 싫어하지만, '근세라핌' 이미지를 위해 이 악물고 스쿼트를 합니다.",
        "인터넷 쇼핑의 달인이라 최저가를 찾아내는 능력이 탁월합니다. 멤버들이 물건 사기 전에 꼭 물어봅니다.",
        "본인의 유튜브 채널 '겁도 없꾸라' 촬영 중에도 게임만큼은 승부욕을 숨기지 못합니다.",
        "한국 음식 중 '간장게장'을 가장 좋아하며, 밥 세 공기는 거뜬히 비울 수 있다고 합니다.",
        "안무를 배우는 속도가 매우 빠릅니다. 11년 차 짬바에서 나오는 엄청난 암기력입니다.",
        "일본에 두고 온 반려견 '마루' 사진을 보며 매일 밤 영상 통화를 시도하는 지독한 반려견 사랑꾼입니다.",
        "어릴 때부터 활동해서 그런지, 카메라를 찾는 능력이 거의 0.1초 만에 이루어지는 본능을 가졌습니다.",
        "트와이스, 레드벨벳 멤버들과 두루 친하며, 일본 활동 시절 인연을 소중히 여깁니다.",
        "서울 시내의 모든 PC방을 방문해서 'PC방 맛집 리스트'를 만드는 것이 개인적인 버킷리스트입니다."
      ],
      en: [
        "She is such a serious gamer that she even assembled her own high-end gaming PC.",
        "A senior with over 10 years of experience through three debuts, but in the dorm, she's just the 'knitting sister'.",
        "Her ears turn bright red when she lies or gets flustered, making it impossible to lie to the members.",
        "Her knitting skills are so good she's made not only hats but also scarves and cardigans for the members.",
        "She has a 'secret stash' of Japanese snacks under her bed, though Eunchae often finds and steals them.",
        "She is the 'Kkura Tech' in charge of setting up Wi-Fi and complex gadgets for the less tech-savvy members.",
        "Her favorite game is 'Apex Legends', and she plays it on her laptop even during world tours.",
        "Her unique running form is so distinct that members love to imitate it, causing fits of laughter.",
        "A huge fan of Red Velvet's Irene, she reportedly cried tears of joy when she became a 'successful fan'.",
        "She sleeps with her eyes slightly open, so members sometimes talk to her thinking she's awake.",
        "She is great at drawing, especially caricatures of the members that exaggerate their features.",
        "She hates exercise more than anything but does squats through gritted teeth for the 'Fearless' image.",
        "A master of online shopping, she is excellent at finding the lowest prices; members ask her before buying anything.",
        "Even while filming for her YouTube channel, she can't hide her competitive streak when it comes to games.",
        "Ganjang Gejang (Soy Sauce Crab) is her favorite Korean food; she can easily finish three bowls of rice with it.",
        "She learns choreography incredibly fast, a skill honed over 11 years in the industry.",
        "A devoted dog lover, she tries to video call her dog 'Maru' in Japan every single night.",
        "Having started young, she has an instinct for finding the camera in under 0.1 seconds.",
        "She is close with members of TWICE and Red Velvet, cherishing ties from her Japan promotion days.",
        "Her personal bucket list is to visit every PC bang in Seoul and create a 'Best PC Bang Food' list."
      ]
    },
    news: [
      { title: { ko: "사쿠라, 개인 유튜브 채널 '겁도 없꾸라' 구독자 200만 돌파", en: "Sakura's YouTube Channel 'Fearless Kkura' Hits 2M Subscribers" }, date: "2024.11.15", summary: { ko: "다양한 도전을 담은 개인 채널이 글로벌 팬들의 사랑을 받으며 대기록을 달성했습니다.", en: "Her personal channel featuring various challenges achieved a major record thanks to global fan love." }, url: "#" },
      { title: { ko: "사쿠라, 뜨개질 튜토리얼 영상 '조회수 폭발'", en: "Sakura's Knitting Tutorial Video Goes Viral" }, date: "2024.06.05", summary: { ko: "그녀의 수준급 뜨개질 실력이 담긴 영상이 공개되어 취미계의 새로운 아이콘으로 떠올랐습니다.", en: "A video showcasing her high-level knitting skills made her a new icon in the hobby world." }, url: "#" },
      { title: { ko: "사쿠라, 루이비통 글로벌 캠페인 모델 선정", en: "Sakura Selected as Louis Vuitton Global Campaign Model" }, date: "2024.03.20", summary: { ko: "우아하고 세련된 비주얼을 앞세워 글로벌 명품 브랜드의 얼굴로 활약하게 되었습니다.", en: "She became the face of a global luxury brand with her elegant and sophisticated visuals." }, url: "#" },
      { title: { ko: "사쿠라, 한국 활동 10주년(?) 기념 팬 서포트 '역대급'", en: "Sakura's 10th Anniversary(?) Support from Fans is 'Legendary'" }, date: "2024.10.29", summary: { ko: "오랜 기간 한국과 일본을 오가며 활동한 그녀를 위한 팬들의 대규모 광고가 도심 곳곳에 걸렸습니다.", en: "Large-scale ads supporting her long career in both Korea and Japan appeared all over the city." }, url: "#" },
      { title: { ko: "사쿠라, 일본 인기 예능 '샤베쿠리007' 출연 화제", en: "Sakura's Appearance on Japanese Variety 'Shabekuri 007' Viral" }, date: "2024.07.12", summary: { ko: "오랜만에 일본 지상파 예능에 출연하여 특유의 입담으로 시청률을 견인했습니다.", en: "Appearing on Japanese TV for the first time in a while, she boosted ratings with her witty talk." }, url: "#" },
      { title: { ko: "사쿠라, 프로게이머도 인정한 '진정한 게임 실력'", en: "Sakura's 'True Gaming Skills' Recognized by Pros" }, date: "2024.02.28", summary: { ko: "유명 게이머들과의 합방에서 놀라운 집중력과 실력을 선보여 화제가 되었습니다.", en: "She became a hot topic after showing amazing focus and skill in a collaboration with famous gamers." }, url: "#" },
      { title: { ko: "사쿠라, '꾸라의 주방' 콘텐츠 인기 급상승", en: "Sakura's 'Kkura's Kitchen' Content Gains Popularity" }, date: "2025.02.10", summary: { ko: "직접 요리를 하며 멤버들에게 대접하는 따뜻한 모습이 팬들에게 감동을 주고 있습니다.", en: "The warm sight of her cooking and serving members is touching the hearts of fans." }, url: "#" },
      { title: { ko: "사쿠라, 글로벌 게이밍 브랜드 '로지텍' 앰버서더 발탁", en: "Sakura Selected as Logitech Global Ambassador" }, date: "2024.01.05", summary: { ko: "게임에 대한 진심이 빛을 발하며 글로벌 게이밍 기어 브랜드의 홍보대사가 되었습니다.", en: "Her sincerity toward gaming paid off as she became the ambassador for a global gaming gear brand." }, url: "#" },
      { title: { ko: "사쿠라, 공항에서 보여준 '무결점 여신 비주얼'", en: "Sakura's 'Flawless Goddess Visual' at the Airport" }, date: "2024.09.02", summary: { ko: "출국 전 기자회견급 인파 속에서도 빛나는 비주얼로 모든 카메라의 플래시를 독점했습니다.", en: "She monopolized all camera flashes with her shining visuals even amidst a press conference-level crowd." }, url: "#" },
      { title: { ko: "사쿠라, 후배 연습생들에게 전한 조언 '가슴 뭉클'", en: "Sakura's Advice to Junior Trainees 'Heart-touching'" }, date: "2024.11.20", summary: { ko: "긴 활동 기간 동안 겪은 경험을 바탕으로 후배들에게 진심 어린 조언을 전해 큰 울림을 주었습니다.", en: "She gave sincere advice based on her long career experience, resonating deeply with juniors." }, url: "#" }
    ],
    members: []
  }
,
  {
    id: "g-idle",
    name: { ko: "(여자)아이들", en: "(G)I-DLE" },
    officialSite: "http://www.cubeent.co.kr/gidle",
    company: "Cube Entertainment",
    debut: "2018.05.02",
    fandom: { ko: "네버랜드 (Neverland)", en: "Neverland" },
    accentColor: "#ee1d23",
    imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%8B%A8%EC%B2%B4%20%EA%B3%A0%ED%99%94%EC%A7%88",
    wiki: {
      ko: "(여자)아이들((G)I-DLE)은 큐브 엔터테인먼트 소속의 5인조 다국적 걸그룹입니다. 리더 소연을 중심으로 멤버들이 직접 곡을 쓰고 프로듀싱하는 '자체 제작 아이돌'의 대명사로 불립니다. 'LATATA', 'TOMBOY', 'Nxde', 'Queencard', 'Super Lady' 등 발표하는 곡마다 독보적인 컨셉과 강렬한 메시지로 전 세계 팬들을 사로잡으며 K-POP의 새로운 지평을 열었습니다.",
      en: "(G)I-DLE is a 5-member multinational girl group under Cube Entertainment. Led by Soyeon, they are known as the representative 'self-producing idols' as members actively participate in songwriting and production. With hits like 'LATATA', 'TOMBOY', 'Nxde', 'Queencard', and 'Super Lady', they have captivated global fans with unique concepts and powerful messages."
    },
    description: {
      ko: "편견을 깨는 당당한 아티스트, 스스로를 정의하는 독보적인 에너지의 4세대 대표 걸그룹입니다.",
      en: "Fearless artists breaking prejudices, a representative 4th-gen girl group with unique energy that defines itself."
    },
    tmi: {
      ko: [
        "멤버들은 숙소에서 서로의 MBTI를 분석하며 토론하는 것을 좋아합니다.",
        "민니는 태국에서 엄청난 부호 가문의 자제로 알려져 '태국 공주님'으로 불립니다.",
        "소연은 야채를 정말 싫어해서 김밥에 들어있는 오이를 하나하나 다 빼서 먹습니다.",
        "미연은 본인이 세상에서 제일 예쁘다고 생각하며, 거울을 볼 때마다 감탄합니다.",
        "슈화는 무대 화장보다 민낯을 선호하며 SNS에 당당하게 민낯 사진을 올립니다.",
        "우기는 기린을 너무 좋아해서 기린 인형이 없으면 잠을 잘 못 잔다고 합니다.",
        "민니와 우기는 한국어를 너무 잘해서 한국인 멤버들이 가끔 맞춤법을 물어봅니다.",
        "소연은 입이 굉장히 커서 주먹이 통째로 들어가는 기상천외한 개인기가 있습니다.",
        "미연은 팀 내 '지각 대장'으로 유명하며, 알람 소리를 못 듣는 게 고질병입니다.",
        "슈화는 숙소에서 반려견 하쿠와 마타를 자식처럼 지극정성으로 돌봅니다.",
        "우기는 허스키한 저음 보이스가 매력이지만 얼굴은 강아지상이라 반전 매력이 넘칩니다.",
        "소연은 녹음실에서는 호랑이 선생님으로 변해 멤버들을 벌벌 떨게 만듭니다.",
        "미연은 사실 YG 연습생 출신으로 블랙핑크 멤버들과 함께 연습했던 사이입니다.",
        "민니는 몽환적인 음색 덕분에 '도입부 장인'이라는 별명을 가지고 있습니다.",
        "슈화는 팬들과 소통할 때 거침없는 '사이다' 발언으로 유명한 '소통 퀸'입니다.",
        "우기는 예능감이 뛰어나 '런닝맨' 등 각종 예능에서 미친 존재감을 뽐냅니다.",
        "소연은 '나루토'와 '원피스' 같은 소년 만화를 좋아해 가사 영감을 받기도 합니다.",
        "미연은 콧대 각도가 40도로 완벽해서 '조각상'이라는 찬사를 받습니다.",
        "멤버들은 컴백 전 단체로 소연의 지휘 아래 '지옥의 연습' 모드에 돌입합니다.",
        "아이들의 팀명 중 '아이(I)'는 개인을, '들(DLE)'은 복수를 의미합니다."
      ],
      en: [
        "The members love discussing and analyzing each other's MBTI at their dorm.",
        "Minnie is known to be from a very wealthy family in Thailand, earning her the title 'Thai Princess'.",
        "Soyeon hates vegetables so much she picks out every single cucumber from her kimbap.",
        "Miyeon thinks she's the prettiest in the world and admires herself every time she sees a mirror.",
        "Shuhua prefers being barefaced and confidently posts no-makeup photos on social media.",
        "Yuqi loves giraffes so much she can't sleep properly without a giraffe plushie.",
        "Minnie and Yuqi are so good at Korean that the Korean members sometimes ask them for spelling help.",
        "Soyeon has a bizarre talent for fitting her entire fist into her mouth.",
        "Miyeon is famous for being the 'Late Queen' because she can't hear her alarms.",
        "Shuhua treats her dogs Haku and Mata like her own children at the dorm.",
        "Yuqi's husky low voice is a great contrast to her puppy-like visuals.",
        "Soyeon turns into a 'Tiger Teacher' in the recording studio, making the members nervous.",
        "Miyeon was a former YG trainee and trained alongside the BLACKPINK members.",
        "Minnie is nicknamed the 'Intro Master' because of her unique dreamy vocal tone.",
        "Shuhua is the 'Communication Queen' known for her savage and refreshing replies to fans.",
        "Yuqi has an incredible variety sense, showing a huge presence on shows like 'Running Man'.",
        "Soyeon gets inspiration for lyrics from shonen manga like 'Naruto' and 'One Piece'.",
        "Miyeon's nose bridge has a perfect 40-degree angle, earning her 'Statue' praises.",
        "The members go into 'Hell Practice' mode under Soyeon's direction before every comeback.",
        "The 'I' in the team name stands for individual, and 'DLE' represents the plural form."
      ]
    },
    news: [
      { title: { ko: "(여자)아이들, 2025 TIMA '올해 최고의 해외 아티스트상' 수상", en: "(G)I-DLE Wins 'Best Overseas Artist of the Year' at 2025 TIMA" }, date: "2025.01.20", summary: { ko: "마카오에서 열린 텐센트 뮤직 엔터테인먼트 어워즈에서 최고의 영예를 안으며 글로벌 인기를 입증했습니다.", en: "They proved their global popularity by winning the top honor at the TMEA in Macau." }, url: "#" },
      { title: { ko: "(여자)아이들, 월드투어 [i-DOL] 성황리 종료", en: "(G)I-DLE Successfully Concludes World Tour [i-DOL]" }, date: "2024.11.15", summary: { ko: "서울을 시작으로 전 세계 주요 도시를 돌며 독보적인 무대 장악력을 선보였습니다.", en: "Starting in Seoul, they showcased unique stage presence in major cities worldwide." }, url: "#" },
      { title: { ko: "'Super Lady', 유튜브 조회수 2억 뷰 돌파", en: "'Super Lady' MV Surpasses 200M Views" }, date: "2024.10.05", summary: { ko: "강렬한 퍼포먼스가 돋보이는 'Super Lady' 뮤직비디오가 꾸준한 사랑을 받고 있습니다.", en: "The MV for 'Super Lady', featuring a powerful performance, continues to receive steady love." }, url: "#" },
      { title: { ko: "소연·미연, '런닝맨' 동반 출연 화제", en: "Soyeon and Miyeon's 'Running Man' Appearance Becomes a Topic" }, date: "2025.02.10", summary: { ko: "팀 내 '톰과 제리' 콤비가 예능에서 특급 케미를 선보이며 큰 웃음을 주었습니다.", en: "The 'Tom and Jerry' duo of the team showed great chemistry on the variety show." }, url: "#" },
      { title: { ko: "7번째 미니 앨범 'I SWAY' 차트 1위 석권", en: "7th Mini Album 'I SWAY' Sweeps Charts" }, date: "2024.07.15", summary: { ko: "타이틀곡 'Klaxon'으로 여름 가요계를 시원하게 물들였습니다.", en: "They colored the summer music scene with the title track 'Klaxon'." }, url: "#" },
      { title: { ko: "(여자)아이들, 제니퍼 로퍼즈와 협업 싱글 발표", en: "(G)I-DLE Releases Collaboration Single with Jennifer Lopez" }, date: "2024.03.20", summary: { ko: "글로벌 팝스타 제니퍼 로페즈의 'This Time Around' 피처링에 참여했습니다.", en: "They featured in global pop star Jennifer Lopez's 'This Time Around'." }, url: "#" },
      { title: { ko: "민니, 태국 홍보대사 위촉 '글로벌 영향력'", en: "Minnie Appointed as Thai Ambassador, Showing Global Influence" }, date: "2024.08.30", summary: { ko: "고국인 태국에서 문화 홍보대사로 발탁되어 활발한 활동을 예고했습니다.", en: "Selected as a cultural ambassador in her home country, Thailand." }, url: "#" },
      { title: { ko: "우기, 첫 솔로 미니 앨범 'YUQ1' 밀리언셀러 등극", en: "Yuqi's 1st Solo Mini Album 'YUQ1' Becomes Million Seller" }, date: "2024.04.25", summary: { ko: "솔로로서도 막강한 음반 판매량을 기록하며 저력을 과시했습니다.", en: "She showed her power by recording massive album sales as a soloist." }, url: "#" },
      { title: { ko: "슈화, 패션 브랜드 앰버서더 발탁", en: "Shuhua Selected as Fashion Brand Ambassador" }, date: "2024.09.12", summary: { ko: "독보적인 분위기와 비주얼로 패션계의 새로운 뮤즈로 떠올랐습니다.", en: "She emerged as a new muse in the fashion world with her unique vibe and visuals." }, url: "#" },
      { title: { ko: "(여자)아이들, 데뷔 6주년 기념 팬미팅 개최", en: "(G)I-DLE Holds 6th Anniversary Fan Meeting" }, date: "2024.05.02", summary: { ko: "네버랜드와 함께 6년간의 추억을 공유하며 특별한 시간을 보냈습니다.", en: "Spent a special time sharing 6 years of memories with Neverland." }, url: "#" }
    ],
    members: [
      { id: "miyeon", name: { ko: "미연", en: "Miyeon" }, role: { ko: "메인보컬", en: "Main Vocalist" }, birth: "1997.01.31", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "161cm", bloodType: "B", description: { ko: "조각 같은 미모와 맑은 보컬을 가진 팀의 맏언니이자 공주님입니다.", en: "The oldest and the 'princess' of the group with statue-like beauty and clear vocals." }, imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%AF%B8%EC%97%B0%20%EA%B3%A0%ED%99%94%EC%A7%88" },
      { id: "minnie", name: { ko: "민니", en: "Minnie" }, role: { ko: "메인보컬", en: "Main Vocalist" }, birth: "1997.10.23", mbti: "ENFJ", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "167cm", bloodType: "O", description: { ko: "몽환적인 음색과 독보적인 눈빛을 가진 태국인 멤버입니다.", en: "Thai member with a dreamy vocal tone and unique gaze." }, imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EB%AF%BC%EB%8B%88%20%EA%B3%A0%ED%99%94%EC%A7%88" },
      { id: "soyeon", name: { ko: "소연", en: "Soyeon" }, role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper" }, birth: "1998.08.26", mbti: "INTJ", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "157cm", bloodType: "B", description: { ko: "천재적인 프로듀싱 능력과 압도적인 카리스마를 가진 팀의 기둥입니다.", en: "The pillar of the group with genius producing skills and overwhelming charisma." }, imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%86%8C%EC%97%B0%20%EA%B3%A0%ED%99%94%EC%A7%88" },
      { id: "yuqi", name: { ko: "우기", en: "Yuqi" }, role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" }, birth: "1999.09.23", mbti: "ENFJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "163cm", bloodType: "O", description: { ko: "허스키한 보이스와 밝은 에너지를 가진 중국인 멤버입니다.", en: "Chinese member with a husky voice and bright energy." }, imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%9A%B0%EA%B8%B0%20%EA%B3%A0%ED%99%94%EC%A7%88" },
      { id: "shuhua", name: { ko: "슈화", en: "Shuhua" }, role: { ko: "서브보컬", en: "Sub Vocalist" }, birth: "2000.01.06", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "161cm", bloodType: "O", description: { ko: "청순한 외모와 달리 당당하고 거침없는 매력을 가진 대만인 멤버입니다.", en: "Taiwanese member with a pure look but a confident and bold personality." }, imageUrl: "https://tse1.mm.bing.net/th?q=%28%EC%97%AC%EC%9E%90%29%EC%95%84%EC%9D%B4%EB%93%A4%20%EC%8A%88%ED%99%94%20%EA%B3%A0%ED%99%94%EC%A7%88" }
    ]
  },
  {
    id: "miyeon",
    name: { ko: "미연", en: "Miyeon" },
    company: "Cube Entertainment",
    debut: "2022.04.27",
    fandom: { ko: "네버랜드", en: "Neverland" },
    accentColor: "#91e1cc",
    imageUrl: "https://tse1.mm.bing.net/th?q=Miyeon+Solo+MY+Album+Photo",
    wiki: {
      ko: "(여자)아이들의 메인 보컬 미연은 2022년 첫 솔로 미니 앨범 'MY'를 통해 솔로 아티스트로서의 첫걸음을 뗐습니다. 그룹 활동 때보다 더욱 맑고 청아한 음색을 뽐내며 보컬리스트로서의 역량을 입증했고, MC와 연기 등 다양한 분야에서 종횡무진 활약하고 있습니다.",
      en: "(G)I-DLE's main vocalist Miyeon made her solo debut in 2022 with the mini-album 'MY'. She proved her capabilities as a vocalist with her clear and pure voice, and is actively participating in various fields including MCing and acting."
    },
    description: {
      ko: "태생부터 공주, 맑은 보컬과 독보적인 비주얼로 사랑받는 올라운더 아티스트입니다.",
      en: "Born to be a princess, an all-rounder artist loved for her clear vocals and unique visuals."
    },
    tmi: {
      ko: [
        "미연은 본인의 콧대 각도가 정확히 40도라는 사실을 아주 자랑스러워합니다.",
        "미연은 외동딸로 자라 부모님의 사랑을 독차지하며 '공주님'처럼 컸습니다.",
        "가장 좋아하는 색깔은 초록색이며, 본인에게 가장 잘 어울린다고 생각합니다.",
        "미연은 사실 엄청난 '길치'입니다. 구글 지도를 봐도 반대 방향으로 가곤 합니다.",
        "본인의 별명인 '면' (Noodle)을 아주 귀여워하며 팬들에게 면 요리를 추천합니다.",
        "미연은 사실 윙크를 잘 못 합니다. 윙크를 하면 눈이 감기는 게 아니라 얼굴 전체가 일그러집니다.",
        "숙소에서 본인의 방은 세상 누구보다 깨끗하게 치우는 '정리 요정'입니다.",
        "미연은 사실 아버지를 닮아 '선택적 청력'을 가지고 있어 듣기 싫은 말은 못 듣습니다.",
        "중학교 때부터 가수의 꿈을 키웠으며, YG 오디션에 단번에 합격한 인재입니다.",
        "트와이스 사나와 매우 친해서 자주 만나 맛있는 것을 먹으러 다닙니다.",
        "미연은 게임을 좋아하지만 실력은 '허당'이라 멤버들에게 자주 집니다.",
        "웃음소리가 매우 독특한데, 본인은 '우아하게 웃는다'고 주장합니다.",
        "미연은 본인의 매력 포인트가 '존재 자체'라고 당당하게 말합니다.",
        "지독한 'T' 성향을 가졌지만, 멤버들의 눈물에는 누구보다 먼저 달려가 안아줍니다.",
        "패션을 좋아하지만 가장 중요하게 생각하는 것은 '편안함'입니다.",
        "닭발을 매우 좋아하며, 뼈 있는 닭발도 아주 깔끔하게 발라 먹습니다.",
        "미연은 본인이 '지각 대장'이라는 것을 인정하지 않지만 알람 10개를 못 듣는 건 사실입니다.",
        "무대 공포증이 전혀 없으며 무대에 올라가기 직전까지 거울을 보며 단장합니다.",
        "팬들에게 편지를 쓸 때 맞춤법을 틀리지 않으려고 네이버 사전을 애용합니다.",
        "미연은 본인이 '가짜 막내'라고 불리는 것을 은근히 즐깁니다."
      ],
      en: [
        "Miyeon is very proud of the fact that her nose bridge is exactly 40 degrees.",
        "As an only child, she grew up receiving all the love from her parents like a 'princess'.",
        "Her favorite color is green, and she thinks it suits her the best.",
        "She is notoriously bad with directions; she gets lost even with Google Maps.",
        "She finds her nickname 'Myun' (Noodle) cute and often recommends noodle dishes to fans.",
        "She can't wink properly; her whole face distorts instead of just closing one eye.",
        "She is a 'Cleaning Fairy' when it comes to her own room at the dorm.",
        "She has 'selective hearing' inherited from her father, only hearing what she wants to hear.",
        "She dreamt of being a singer since middle school and passed the YG audition on her first try.",
        "She is very close with TWICE's Sana and they often go out to eat together.",
        "She loves games but her skills are quite clumsy, leading her to lose to other members.",
        "Her laugh is unique, though she claims she laughs 'gracefully'.",
        "She confidently says her charm point is her 'very existence'.",
        "She has a strong 'T' (Thinking) personality but is the first to hug a crying member.",
        "She loves fashion but prioritizes 'comfort' above all else.",
        "She loves chicken feet and is very good at eating even the ones with bones.",
        "She doesn't admit to being the 'Late Queen', but it's true she sleeps through 10 alarms.",
        "She has no stage fright and spends the last seconds before a stage grooming herself.",
        "She uses the Naver dictionary to make sure her spelling is perfect when writing letters to fans.",
        "She secretly enjoys being called the 'Fake Maknae' of the group."
      ]
    },
    news: [
      { title: { ko: "미연, 솔로 앨범 'MY' 발매 2주년 기념 팬들과 소통", en: "Miyeon Celebrates 2nd Anniversary of 'MY' Album with Fans" }, date: "2024.04.27", summary: { ko: "첫 솔로 앨범 발매 2주년을 맞아 라이브 방송을 통해 네버랜드에게 감사를 전했습니다.", en: "She thanked Neverland through a live broadcast on the 2nd anniversary of her solo debut." }, url: "#" },
      { title: { ko: "미연, 지미추 글로벌 앰버서더의 우아한 자태", en: "Miyeon's Elegant Aura as Jimmy Choo Global Ambassador" }, date: "2024.09.01", summary: { ko: "명품 브랜드 지미추의 새로운 캠페인에서 세련된 패션 감각을 뽐냈습니다.", en: "She showcased sophisticated fashion sense in Jimmy Choo's new campaign." }, url: "#" },
      { title: { ko: "미연, 드라마 '슬기로운 전공의생활' OST 가창", en: "Miyeon Sings OST for 'Resident Playbook'" }, date: "2024.06.25", summary: { ko: "감성적인 발라드 OST로 극의 몰입도를 높이며 호평을 받았습니다.", en: "Received praise for her emotional ballad OST, enhancing drama immersion." }, url: "#" },
      { title: { ko: "미연, '런닝맨'에서 보여준 '폭소 유발' 예능감", en: "Miyeon's Hilarious Variety Skills on 'Running Man'" }, date: "2025.02.11", summary: { ko: "엉뚱하고 자신감 넘치는 모습으로 시청자들에게 큰 웃음을 선사했습니다.", en: "She gave viewers a big laugh with her quirky and confident personality." }, url: "#" },
      { title: { ko: "미연, M Countdown MC 마침표 '최장수 MC 기록'", en: "Miyeon Concludes M Countdown MC Run with Record Longevity" }, date: "2024.02.15", summary: { ko: "오랜 기간 음악방송 MC로서 안정적인 진행을 보여주며 유종의 미를 거뒀습니다.", en: "Concluded her long run as an MC with stable hosting skills." }, url: "#" },
      { title: { ko: "미연, 첫 단독 매거진 커버 장식", en: "Miyeon Graces Her First Solo Magazine Cover" }, date: "2024.08.10", summary: { ko: "유명 패션 매거진의 커버를 장식하며 독보적인 비주얼을 자랑했습니다.", en: "Boasted unique visuals on the cover of a famous fashion magazine." }, url: "#" },
      { title: { ko: "미연, 웹드라마 '딜리버리' 출연 확정", en: "Miyeon Confirmed for Web Drama 'Delivery'" }, date: "2024.11.20", summary: { ko: "액션과 코미디가 섞인 새로운 연기 변신을 예고하며 기대를 모았습니다.", en: "Teased a new acting transformation in an action-comedy web drama." }, url: "#" },
      { title: { ko: "미연, 페스티벌 '러브썸' 솔로 무대 압권", en: "Miyeon's Solo Stage at 'LOVESOME' Festival Stuns Audience" }, date: "2024.05.15", summary: { ko: "봄날에 어울리는 싱그러운 무대로 관객들의 뜨거운 환호를 받았습니다.", en: "Received hot cheers with a refreshing stage perfect for a spring day." }, url: "#" },
      { title: { ko: "미연, 보컬 유닛 콜라보 싱글 'Drive' 화제", en: "Miyeon's Vocal Unit Collab Single 'Drive' Becomes a Topic" }, date: "2024.03.12", summary: { ko: "다른 아티스트들과의 협업을 통해 한층 성숙해진 보컬 매력을 선보였습니다.", en: "Showcased mature vocal charm through collaborations with other artists." }, url: "#" },
      { title: { ko: "미연, 네버랜드가 뽑은 '최고의 공주님' 1위 등극", en: "Miyeon Ranked #1 'Best Princess' by Neverland" }, date: "2024.12.25", summary: { ko: "팬들이 직접 투표한 이미지 투표에서 압도적인 표차로 1위를 차지했습니다.", en: "Won first place in a fan image poll with an overwhelming margin." }, url: "#" }
    ],
    members: []
  },
  {
    id: "soyeon",
    name: { ko: "소연", en: "Soyeon" },
    company: "Cube Entertainment",
    debut: "2017.11.05",
    fandom: { ko: "네버랜드", en: "Neverland" },
    accentColor: "#ff0000",
    imageUrl: "https://tse1.mm.bing.net/th?q=Soyeon+Solo+Windy+Album+Photo",
    wiki: {
      ko: "(여자)아이들의 리더이자 메인 래퍼인 소연은 2017년 'Jelly'로 첫 솔로 데뷔를 했습니다. 이후 2021년 미니 앨범 'Windy'를 통해 자신만의 확고한 음악 세계를 구축하며 K-POP 최고의 여성 프로듀서로 자리매김했습니다. 팀의 모든 곡을 작사, 작곡, 프로듀싱하며 그룹의 정체성을 만들어가는 아티스트입니다.",
      en: "(G)I-DLE's leader and main rapper Soyeon made her solo debut in 2017 with 'Jelly'. Since then, she has established her firm musical world through the 2021 mini-album 'Windy', solidifying her status as a top female producer in K-POP. She is an artist who shapes the group's identity by writing and producing all their songs."
    },
    description: {
      ko: "작은 거인, 천재 프로듀서. 무대 위의 카리스마와 무대 아래의 순수함을 가진 아티스트입니다.",
      en: "The Little Giant, the genius producer. An artist with charisma on stage and innocence off stage."
    },
    tmi: {
      ko: [
        "소연은 야채를 끔찍하게 싫어하며 특히 오이와 당근은 절대 먹지 않습니다.",
        "소연은 계획이 어긋나는 것을 못 참는 '파워 J' 성향의 완벽주의자입니다.",
        "입이 굉장히 커서 본인의 주먹이 입 안으로 쏙 들어가는 신기한 재주가 있습니다.",
        "서바이벌 프로그램 '프로듀스 101'과 '언프리티 랩스타'를 거치며 실력을 증명했습니다.",
        "녹음실에서는 멤버들에게 매우 엄격하지만, 녹음이 끝나면 다시 다정한 리더로 돌아옵니다.",
        "소연의 키는 약 157cm로 작지만 무대 위에서는 2m처럼 보이는 카리스마를 내뿜습니다.",
        "민트초코를 매우 사랑하며 '민초파'의 수장임을 자처합니다.",
        "게임 '젤다의 전설'의 엄청난 팬이며, 게임에서 음악적 영감을 받기도 합니다.",
        "술을 꽤 잘 마시는 것으로 알려져 있으며 멤버들 중 주량이 상위권입니다.",
        "낯을 많이 가리는 성격이라 처음 보는 사람 앞에서는 구석 자리를 선호합니다.",
        "어릴 적 발레를 배웠던 경험이 있어 안무를 배울 때 선이 매우 곱습니다.",
        "어릴 적 꿈은 해적이었으며, '원피스' 만화를 보며 자유로운 삶을 꿈꿨습니다.",
        "데뷔곡 'LATATA'를 단 3일 만에 완성한 천재적인 작곡 능력을 가졌습니다.",
        "닭날개 요리를 가장 좋아하며, 닭날개 뼈를 한 번에 발라내는 스킬이 있습니다.",
        "가장 좋아하는 색깔은 노란색이며, 본인의 에너지를 상징한다고 생각합니다.",
        "작업할 때는 하루 종일 작업실에서 나오지 않는 '지독한 일중독자'입니다.",
        "98년생 아이돌들과 두루 친하며, 특히 다른 팀 리더들과 고민을 자주 나눕니다.",
        "항상 가방 속에 비트가 담긴 USB 여러 개를 챙겨 다니는 철저함을 보입니다.",
        "본인의 눈이 매섭게 생겼지만 가장 자신 있는 신체 부위라고 말합니다.",
        "소연은 본인이 직접 만든 캐릭터 '윈디'에 대한 애착이 매우 강합니다."
      ],
      en: [
        "Soyeon hates vegetables to death, especially cucumbers and carrots.",
        "She is a 'Power J' perfectionist who can't stand it when plans go awry.",
        "She has a mysterious talent for fitting her entire fist into her mouth.",
        "She proved her skills through survival shows like 'Produce 101' and 'Unpretty Rapstar'.",
        "She is very strict with members in the studio but returns to being a kind leader afterwards.",
        "She is about 157cm tall but exudes charisma that makes her look 2m tall on stage.",
        "She loves mint chocolate and considers herself the leader of the 'Mint Choco' faction.",
        "She is a huge fan of 'The Legend of Zelda' and gets musical inspiration from games.",
        "She is known to have a high alcohol tolerance, ranking top among the members.",
        "She is very shy and prefers corner seats when meeting strangers.",
        "She has experience in ballet, which helps her have graceful lines when dancing.",
        "Her childhood dream was to be a pirate, dreaming of a free life while watching 'One Piece'.",
        "She has genius composing skills, having finished the debut song 'LATATA' in just 3 days.",
        "Her favorite food is chicken wings, and she can debone them in one go.",
        "Her favorite color is yellow, which she believes symbolizes her energy.",
        "She is a 'workaholic' who stays in the studio all day when working.",
        "She is close with various '98 liner' idols, especially sharing worries with other leaders.",
        "She always carries multiple USB drives filled with beats in her bag.",
        "She thinks her eyes are her best feature despite their sharp appearance.",
        "She is very attached to 'Windy', a character she created herself."
      ]
    },
    news: [
      { title: { ko: "소연, 'Windy' 발매 이후 프로듀서로서의 입지 강화", en: "Soyeon Strengthens Position as Producer After 'Windy'" }, date: "2024.07.05", summary: { ko: "솔로 앨범 활동 이후 다양한 아티스트들의 곡에 참여하며 프로듀싱 역량을 뽐내고 있습니다.", en: "She is showcasing producing skills by participating in various artists' tracks." }, url: "#" },
      { title: { ko: "전소연, 큐브 엔터테인먼트와 재계약 논의 중", en: "Jeon Soyeon Discussing Contract Renewal with Cube" }, date: "2024.11.20", summary: { ko: "계약 종료를 앞두고 향후 행보에 대해 많은 팬과 업계의 관심이 쏠리고 있습니다.", en: "There is much interest from fans and the industry regarding her future moves." }, url: "#" },
      { title: { ko: "소연, '소년판타지' 심사위원으로 활약 '날카로운 조언'", en: "Soyeon Acts as Judge on 'Fantasy Boys', Giving Sharp Advice" }, date: "2024.05.10", summary: { ko: "참가자들에게 진심 어린 조언과 카리스마 넘치는 심사로 화제를 모았습니다.", en: "She became a topic for her sincere advice and charismatic judging." }, url: "#" },
      { title: { ko: "소연, JLo 협업에 대해 '꿈만 같은 시간' 소감", en: "Soyeon on JLo Collab: 'A Dream-like Time'" }, date: "2024.03.25", summary: { ko: "세계적인 팝스타와의 협업 비하인드를 공개하며 음악에 대한 열정을 드러냈습니다.", en: "Revealed behind-the-scenes of the collab with a global pop star." }, url: "#" },
      { title: { ko: "소연, '런닝맨'에서 미연과 현실 자매 케미 발산", en: "Soyeon and Miyeon Show Real Sister Chemistry on 'Running Man'" }, date: "2025.02.12", summary: { ko: "미연의 비밀을 폭로하며 찐친만이 보여줄 수 있는 예능감을 뽐냈습니다.", en: "Exposed Miyeon's secrets, showing variety skills only real friends can have." }, url: "#" },
      { title: { ko: "소연, K/DA 아카리 캐릭터 여전한 글로벌 인기", en: "Soyeon's K/DA Akali Character Still Globally Popular" }, date: "2024.10.15", summary: { ko: "리그 오브 레전드 가상 그룹 K/DA의 아카리로서 다시 한번 조명받았습니다.", en: "Spotlighted again as Akali of the virtual group K/DA." }, url: "#" },
      { title: { ko: "소연, '작곡가로서의 고뇌' 다큐멘터리 공개", en: "Soyeon's 'Artist's Struggle' Documentary Released" }, date: "2024.08.05", summary: { ko: "음악을 만드는 과정에서의 치열한 고민과 노력을 담은 영상이 화제가 되었습니다.", en: "The video capturing her intense thoughts and efforts in making music became a topic." }, url: "#" },
      { title: { ko: "소연, 2024 MAMA '베스트 프로듀서상' 노미네이트", en: "Soyeon Nominated for 'Best Producer' at 2024 MAMA" }, date: "2024.11.01", summary: { ko: "한 해 동안 보여준 탁월한 프로듀싱 능력을 인정받아 주요 부문에 이름을 올렸습니다.", en: "Recognized for her excellent producing skills throughout the year." }, url: "#" },
      { title: { ko: "소연, 솔로 무대에서 선보인 역대급 '랩 사이퍼'", en: "Soyeon's Legendary 'Rap Cypher' on Solo Stage" }, date: "2024.12.31", summary: { ko: "연말 가요제에서 압도적인 랩 실력으로 현장을 전율케 했습니다.", en: "Thrilled the scene with overwhelming rap skills at year-end festivals." }, url: "#" },
      { title: { ko: "소연, '나 혼자 산다' 재출연 '작업실 일상 공개'", en: "Soyeon Re-appears on 'I Live Alone', Showing Studio Life" }, date: "2024.09.20", summary: { ko: "꾸밈없는 소박한 일상과 음악에 대한 진지한 태도를 보여주어 호평받았습니다.", en: "Received praise for showing her humble daily life and serious attitude towards music." }, url: "#" }
    ],
    members: []
  }
,
  {
    "id": "bts",
    "name": { "ko": "방탄소년단", "en": "BTS" },
    "company": "BIGHIT MUSIC",
    "debut": "2013.06.13",
    "fandom": { "ko": "아미 (ARMY)", "en": "ARMY" },
    "officialSite": "https://ibighit.com/bts",
    "accentColor": "#6e3ab7",
    "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+Group+Photo+High+Resolution+2025",
    "wiki": {
      "ko": "방탄소년단(BTS)은 RM, 진, 슈가, 제이홉, 지민, 뷔, 정국으로 구성된 7인조 보이그룹입니다. '방탄'이라는 이름은 사회적 편견과 억압을 막아내고 자신들의 음악적 가치를 지켜내겠다는 의미를 담고 있습니다. 2013년 데뷔 이후 'Love Yourself' 시리즈를 통해 전 세계적인 메시지를 던졌으며, 'Dynamite', 'Butter' 등으로 빌보드 핫 100 1위를 차지하는 등 K-POP을 넘어 글로벌 팝의 아이콘이 되었습니다.",
      "en": "BTS is a 7-member boy group consisting of RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook. The name 'Bangtan' signifies protecting their musical values from social prejudice and oppression. Since their 2013 debut, they've spread global messages through the 'Love Yourself' series and topped the Billboard Hot 100 with hits like 'Dynamite' and 'Butter', becoming global pop icons beyond K-POP."
    },
    "description": {
      "ko": "21세기 팝 아이콘, 전 세계를 보랏빛으로 물들인 글로벌 슈퍼스타입니다.",
      "en": "21st-century pop icons, global superstars who have dyed the world purple."
    },
    "tmi": {
      "ko": [
        "진은 주방 가위로 본인의 앞머리를 직접 자르다가 '레전드 흑역사'를 만든 적이 있습니다.",
        "슈가는 다음 생에 돌멩이로 태어나서 아무것도 안 하고 싶다는 소망을 자주 밝힙니다.",
        "RM은 선글라스부터 무대 소품까지 만지기만 하면 부숴버리는 '파괴의 신'입니다.",
        "제이홉은 겁이 굉장히 많아서 놀이기구는 물론이고 뱀도 무서워합니다.",
        "지민은 가만히 앉아 있다가도 의자에서 굴러떨어지는 신기한 능력을 가졌습니다.",
        "뷔는 3년 동안 색소폰을 배웠지만 지금은 부는 법을 거의 다 까먹었다고 합니다.",
        "정국은 전자레인지가 터질까 봐 무서워서 근처에도 잘 안 갑니다.",
        "멤버들은 빨대에 구멍이 1개인지 2개인지를 두고 2시간 동안 토론한 적이 있습니다.",
        "진의 웃음소리는 유리창을 닦는 분무기 소리와 매우 비슷합니다.",
        "슈가는 어디서든 3초 만에 잠들 수 있는 기적의 수면 능력을 보유하고 있습니다.",
        "RM은 북유럽 여행 중 여권을 잃어버려서 혼자 먼저 귀국한 슬픈 전설이 있습니다.",
        "제이홉은 귀를 뚫지 않았는데, 본인의 귀를 '순수하게' 유지하고 싶어서라고 합니다.",
        "뷔의 활동명 후보에는 렉스(Lex), 식스(Six)가 있었으나 결국 뷔(V)로 결정되었습니다.",
        "정국의 세탁 사랑은 대단해서 옷 냄새만 맡아도 섬유유연제 브랜드를 맞힙니다.",
        "지민은 연습생 시절 코피가 날 정도로 연습했지만 코를 막고 계속 춤을 췄습니다.",
        "진은 화가 나면 랩을 하듯이 말을 엄청나게 빨리 해서 멤버들을 당황시킵니다.",
        "슈가의 반려견 '홀리'는 무뚝뚝한 슈가를 한순간에 바보로 만드는 유일한 존재입니다.",
        "뷔는 '네모난 미소'로 유명한데, 웃을 때 입 모양이 정말 완벽한 직사각형이 됩니다.",
        "정국은 섬유유연제가 단종될까 봐 한 번에 100병을 주문한 적이 있습니다.",
        "멤버들 사이에는 '가장 늦게 일어나는 사람이 점심값 내기'라는 무서운 규칙이 있습니다."
      ],
      "en": [
        "Jin once tried to cut his own bangs with kitchen scissors and created a legendary fail.",
        "Suga often expresses his wish to be reborn as a rock in his next life so he can do nothing.",
        "RM is the 'God of Destruction' because he breaks everything he touches, from sunglasses to props.",
        "J-Hope is easily scared; he's terrified of amusement park rides and even snakes.",
        "Jimin has a mysterious talent for falling off chairs even when he's just sitting still.",
        "V played the saxophone for 3 years but says he's forgotten most of it now.",
        "Jungkook is scared of microwaves because he thinks they might explode at any moment.",
        "The members once debated for 2 hours whether a straw has one hole or two holes.",
        "Jin's laugh sounds remarkably like a spray bottle cleaning a window.",
        "Suga has the miraculous ability to fall asleep anywhere in less than 3 seconds.",
        "RM once lost his passport during a trip to Northern Europe and had to return home early.",
        "J-Hope doesn't have pierced ears because he wants to keep them 'pure'.",
        "V's potential stage names were Lex and Six, but he eventually chose V for Victory.",
        "Jungkook's laundry obsession is real; he can identify detergent brands by scent alone.",
        "Jimin practiced so hard as a trainee that he got a nosebleed but just kept dancing.",
        "When Jin gets angry, he talks so fast it sounds like he's rapping, flustering the members.",
        "Suga's dog 'Holly' is the only one who can turn the tough rapper into a complete softie.",
        "V is famous for his 'Boxy Smile'; his mouth forms a perfect rectangle when he laughs.",
        "Jungkook once ordered 100 bottles of fabric softener fearing it would go out of stock.",
        "They have a scary rule where the last one to wake up has to pay for the group's lunch."
      ]
    },
    "news": [
      { "title": { "ko": "BTS 전원 전역 완료, 2025년 완전체 활동 예고", "en": "All BTS Members Complete Military Service, Full Group Return Teased for 2025" }, "date": "2025.06.13", "summary": { "ko": "방탄소년단 멤버들이 국방의 의무를 모두 마치고 데뷔 12주년을 맞아 완전체 컴백을 준비 중입니다.", "en": "All BTS members have completed their military service and are preparing for a full group comeback on their 12th anniversary." }, "url": "#" },
      { "title": { "ko": "'Dynamite' 유튜브 조회수 20억 뷰 돌파", "en": "'Dynamite' MV Surpasses 2 Billion Views on YouTube" }, "date": "2025.04.10", "summary": { "ko": "방탄소년단의 히트곡 'Dynamite'가 식지 않는 인기로 한국 아티스트 최초 20억 뷰를 달성했습니다.", "en": "BTS's hit song 'Dynamite' became the first by a Korean artist to reach 2 billion views due to its undying popularity." }, "url": "#" },
      { "title": { "ko": "진, 전역 후 첫 팬미팅서 1,000명 허그 미담", "en": "Jin Holds Global Fan Hug Event After Discharge" }, "date": "2024.06.13", "summary": { "ko": "진이 전역 후 팬들을 위해 직접 기획한 '허그회'를 통해 따뜻한 팬사랑을 전했습니다.", "en": "Jin showed warm love for fans by holding a 'hug event' he planned himself after his discharge." }, "url": "#" },
      { "title": { "ko": "RM 솔로 다큐 'Right Place, Wrong Person' 개봉", "en": "RM's Solo Documentary 'Right Place, Wrong Person' Released" }, "date": "2024.12.05", "summary": { "ko": "RM의 솔로 2집 작업기와 인간 김남준의 고뇌를 담은 다큐멘터리가 전 세계 극장에서 개봉되었습니다.", "en": "The documentary capturing RM's 2nd solo album process and his personal struggles was released in theaters worldwide." }, "url": "#" },
      { "title": { "ko": "BTS, 빌보드 뮤직 어워즈 '톱 듀오/그룹' 수상", "en": "BTS Wins 'Top Duo/Group' at Billboard Music Awards" }, "date": "2024.11.20", "summary": { "ko": "군 공백기에도 불구하고 방탄소년단이 빌보드 어워즈에서 주요 부문을 수상하며 위상을 입증했습니다.", "en": "Despite their military hiatus, BTS proved their status by winning a major category at the Billboard Awards." }, "url": "#" },
      { "title": { "ko": "슈가, 'D-DAY' 투어 영화 역대 최고 매출 기록", "en": "Suga's 'D-DAY' Concert Film Becomes Highest Grossing" }, "date": "2024.05.15", "summary": { "ko": "슈가의 솔로 앙코르 콘서트 실황 영화가 전 세계적으로 폭발적인 매출을 기록했습니다.", "en": "The concert film of Suga's solo encore tour recorded explosive sales worldwide." }, "url": "#" },
      { "title": { "ko": "BTS 팝업스토어 'Monochrome' 글로벌 순회", "en": "BTS Pop-up Store 'Monochrome' Tours Globally" }, "date": "2024.04.26", "summary": { "ko": "서울을 시작으로 도쿄, 자카르타, LA 등 전 세계 주요 도시에서 팝업스토어가 열렸습니다.", "en": "Starting from Seoul, pop-up stores opened in major cities worldwide including Tokyo, Jakarta, and LA." }, "url": "#" },
      { "title": { "ko": "방탄소년단, 빅히트 뮤직과 두 번째 재계약 체결", "en": "BTS Renews Contract with BIGHIT MUSIC for the Second Time" }, "date": "2023.09.20", "summary": { "ko": "멤버 전원이 소속사와 재계약을 체결하며 2025년 이후의 활동을 공식화했습니다.", "en": "All members renewed their contracts, formalizing their activities for 2025 and beyond." }, "url": "#" },
      { "title": { "ko": "'봄날', 멜론 차트 역대 최장 기간 차트인 기록", "en": "'Spring Day' Breaks Record for Longest Running Song on Melon" }, "date": "2025.02.01", "summary": { "ko": "2017년 발표된 '봄날'이 단 한 번도 차트에서 벗어나지 않으며 대기록을 세웠습니다.", "en": "Released in 2017, 'Spring Day' set a record by never leaving the chart for even a single day." }, "url": "#" },
      { "title": { "ko": "BTS 공식 자서전 'Beyond The Story' 1000만 부 돌파", "en": "BTS Biography 'Beyond The Story' Sells 10 Million Copies" }, "date": "2024.10.13", "summary": { "ko": "방탄소년단의 10년사를 담은 공식 서적이 전 세계적인 베스트셀러가 되었습니다.", "en": "The official book covering BTS's 10-year history has become a global bestseller." }, "url": "#" }
    ],
    "members": [
      { "id": "rm", "name": { "ko": "RM", "en": "RM" }, "role": { "ko": "리더/메인래퍼", "en": "Leader/Main Rapper" }, "birth": "1994.09.12", "mbti": "ENFP", "zodiac": { "ko": "처녀자리", "en": "Virgo" }, "height": "181cm", "bloodType": "A", "description": { "ko": "팀의 든든한 리더이자 뇌섹남. 뛰어난 작사 능력과 철학적인 가사가 특징입니다.", "en": "The reliable leader and intellectual pillar. Known for his superior songwriting and philosophical lyrics." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+RM+High+Resolution+Photo" },
      { "id": "jin", "name": { "ko": "진", "en": "Jin" }, "role": { "ko": "서브보컬", "en": "Sub Vocalist" }, "birth": "1992.12.04", "mbti": "INTP", "zodiac": { "ko": "사수자리", "en": "Sagittarius" }, "height": "179cm", "bloodType": "O", "description": { "ko": "자타공인 '월드와이드 핸섬'. 맑은 미성과 유쾌한 성격으로 팀의 분위기를 살립니다.", "en": "Self-proclaimed 'Worldwide Handsome'. Brightens the mood with his clear vocals and playful personality." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+Jin+High+Resolution+Photo" },
      { "id": "suga", "name": { "ko": "슈가", "en": "Suga" }, "role": { "ko": "리드래퍼", "en": "Lead Rapper" }, "birth": "1993.03.09", "mbti": "ISTP", "zodiac": { "ko": "물고기자리", "en": "Pisces" }, "height": "174cm", "bloodType": "O", "description": { "ko": "천재적인 프로듀싱 능력의 소유자. 겉은 차가워 보이지만 속은 누구보다 따뜻합니다.", "en": "Possesses genius producing skills. Appears cold on the outside but is warmer than anyone inside." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+Suga+High+Resolution+Photo" },
      { "id": "j-hope", "name": { "ko": "제이홉", "en": "J-Hope" }, "role": { "ko": "메인댄서/래퍼", "en": "Main Dancer/Rapper" }, "birth": "1994.02.18", "mbti": "INFJ", "zodiac": { "ko": "물병자리", "en": "Aquarius" }, "height": "177cm", "bloodType": "A", "description": { "ko": "팀의 안무 팀장이자 희망. 독보적인 춤선과 긍정적인 에너지의 소유자입니다.", "en": "The choreography leader and the 'Hope' of the group. Known for unique dance lines and positive energy." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+J-Hope+High+Resolution+Photo" },
      { "id": "jimin", "name": { "ko": "지민", "en": "Jimin" }, "role": { "ko": "메인댄서/리드보컬", "en": "Main Dancer/Lead Vocalist" }, "birth": "1995.10.13", "mbti": "ESTP", "zodiac": { "ko": "천칭자리", "en": "Libra" }, "height": "174cm", "bloodType": "A", "description": { "ko": "매혹적인 음색과 예술적인 퍼포먼스. '입덕 요정'이라 불리는 치명적 매력의 소유자입니다.", "en": "Enchanting vocals and artistic performance. A charming member known as the 'Recruiting Fairy'." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+Jimin+High+Resolution+Photo" },
      { "id": "v", "name": { "ko": "뷔", "en": "V" }, "role": { "ko": "서브보컬/리드댄서", "en": "Sub Vocalist/Lead Dancer" }, "birth": "1995.12.30", "mbti": "INFP", "zodiac": { "ko": "염소자리", "en": "Capricorn" }, "height": "179cm", "bloodType": "AB", "description": { "ko": "깊은 저음의 소울풀한 목소리와 CG 같은 비주얼. 자유롭고 예술적인 감성을 가졌습니다.", "en": "Deep soulful voice and CG-like visuals. Possesses a free-spirited and artistic sensibility." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+V+High+Resolution+Photo" },
      { "id": "jungkook", "name": { "ko": "정국", "en": "Jungkook" }, "role": { "ko": "메인보컬/리드댄서", "en": "Main Vocalist/Lead Dancer" }, "birth": "1997.09.01", "mbti": "ISFP", "zodiac": { "ko": "처녀자리", "en": "Virgo" }, "height": "179cm", "bloodType": "A", "description": { "ko": "못하는 게 없는 '황금 막내'. 파워풀한 보컬과 퍼포먼스로 전 세계를 사로잡았습니다.", "en": "The 'Golden Maknae' who can do everything. Captivated the world with powerful vocals and performance." }, "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+Jungkook+High+Resolution+Photo" }
    ]
  },
  {
    "id": "jungkook",
    "name": { "ko": "정국", "en": "Jungkook" },
    "company": "BIGHIT MUSIC",
    "debut": "2023.07.14",
    "fandom": { "ko": "아미", "en": "ARMY" },
    "accentColor": "#000000",
    "imageUrl": "https://tse1.mm.bing.net/th?q=Jungkook+Solo+Golden+Concept+Photo",
    "wiki": {
      "ko": "방탄소년단의 막내 정국은 2023년 첫 솔로 싱글 'Seven'으로 전 세계적인 신드롬을 일으켰습니다. 이후 첫 솔로 앨범 'GOLDEN'을 통해 팝 스타로서의 역량을 유감없이 발휘하며 빌보드 차트를 석권했습니다. 보컬, 댄스, 랩, 프로듀싱까지 완벽한 올라운더 아티스트로 평가받습니다.",
      "en": "BTS's youngest member Jungkook created a global syndrome with his 2023 solo debut 'Seven'. He followed up with the album 'GOLDEN', showcasing his prowess as a pop star and sweeping Billboard charts. He is evaluated as a perfect all-rounder artist in vocals, dance, rap, and producing."    },
    "description": {
      "ko": "글로벌 팝스타, 황금빛 재능으로 전 세계 차트를 점령한 아티스트입니다.",
      "en": "Global pop star, an artist who has dominated worldwide charts with his golden talent."    },
    "tmi": {
      "ko": [
        "정국의 솔로곡 'Seven'은 지독한 감기에 걸린 상태에서 녹음했지만 결과는 완벽했습니다.",
        "해외 스케줄 중에도 복싱 글러브를 챙겨갈 정도로 복싱에 진심입니다.",
        "본인이 직접 영상 편집을 하는 'G.C.F' 감독이며 편집 실력도 전문가급입니다.",
        "한 자리에서 컵라면 6개를 먹은 적이 있을 정도로 대식가입니다.",
        "자신의 첫째 자식처럼 아끼는 커스텀 보라색 마이크가 있습니다.",
        "그림 실력이 뛰어나서 쉬는 시간마다 멤버들을 스케치하곤 합니다.",
        "호텔에 체크인하자마자 짐 정리를 완벽하게 하는 '정리왕'입니다.",
        "가장 좋아하는 향은 비누 향인데, 깨끗해지는 기분이 들기 때문이라고 합니다.",
        "한번 게임을 시작하면 10시간 동안 밥 먹는 것도 잊고 집중합니다.",
        "저스틴 비버부터 라우브까지, 수많은 아티스트의 곡을 본인만의 색깔로 커버했습니다.",
        "손등에 새긴 아미 로고 타투는 팬들을 항상 잊지 않겠다는 다짐입니다.",
        "바나나 우유를 너무 좋아해서 팬들이 조공으로 바나나 우유 트럭을 보내주기도 했습니다.",
        "헤어와 메이크업 시간이 길어지면 서 있는 상태에서도 잠들 수 있습니다.",
        "뮤직비디오의 아주 작은 디테일까지 다 잡아내는 '인간 4K'입니다.",
        "기타를 배우려다 손가락이 너무 두껍고 힘이 세서 포기한 적이 있습니다.",
        "팀 내에서 가장 힘이 세며 멤버 두 명을 한꺼번에 등에 업을 수 있습니다.",
        "요리 필살기는 '불구리'(불닭볶음면 + 너구리) 라면입니다.",
        "당황하면 고개를 까닥거리는 습관이 있는데 그 모습이 강아지 같습니다.",
        "아이돌 육상 선수권 대회에서 씨름 금메달을 딴 전적이 있습니다.",
        "80살이 넘어서도 무대 위에서 노래하고 춤추는 아티스트가 되는 것이 목표입니다."      ],
      "en": [
        "His solo track 'Seven' was recorded while he had a severe cold, but it turned out perfect.",
        "He's so serious about boxing that he brings his gloves even on overseas schedules.",
        "He's the director of 'G.C.F', editing his own videos with professional-grade skill.",
        "He's a big eater who once finished 6 cups of ramen in one sitting.",
        "He has a custom purple microphone that he treats like his firstborn child.",
        "He is highly skilled at drawing and often sketches members during breaks.",
        "He's an 'Organization King' who tidies up his hotel room immediately after checking in.",
        "His favorite scent is soap because it makes him feel refreshed.",
        "Once he starts gaming, he gets so focused he forgets to eat for 10 hours.",
        "He has covered numerous artists from Justin Bieber to Lauv in his own style.",
        "The ARMY logo tattoo on his hand is a promise to never forget his fans.",
        "He loves banana milk so much that fans once sent him a whole truckload of it.",
        "He can fall asleep standing up if the hair and makeup session takes too long.",
        "He is a 'Human 4K' who notices even the smallest details in a video.",
        "He once tried learning the guitar but gave up because his fingers were too strong.",
        "He is the strongest member and can carry two members on his back at once.",
        "His cooking specialty is 'Bulguri' (Buldak + Neoguri) ramen.",
        "He has a habit of tilting his head when confused, looking like a puppy.",
        "He has a history of winning a gold medal in wrestling at the ISAC.",
        "His goal is to be an artist who can perform on stage even after he turns 80."      ]
    },
    "news": [
      { "title": { "ko": "정국 'GOLDEN', K-팝 솔로 최다 스트리밍 앨범 등극", "en": "Jungkook's 'GOLDEN' Becomes Most Streamed K-pop Solo Album" }, "date": "2025.01.20", "summary": { "ko": "정국의 첫 솔로 앨범이 스포티파이에서 역대급 기록을 세우며 글로벌 인기를 입증했습니다.", "en": "Jungkook's first solo album set record-breaking streams on Spotify, proving his global popularity." }, "url": "#" },
      { "title": { "ko": "솔로 다큐 영화 'JUNG KOOK: I AM STILL' 전 세계 개봉", "en": "Solo Documentary 'JUNG KOOK: I AM STILL' Released Worldwide" }, "date": "2024.09.18", "summary": { "ko": "정국의 솔로 데뷔 과정과 열정을 담은 다큐멘터리가 120개국 극장에서 상영되었습니다.", "en": "The documentary capturing Jungkook's solo debut journey was screened in theaters across 120 countries." }, "url": "#" },
      { "title": { "ko": "'Seven', 빌보드 뮤직 어워즈 '톱 글로벌 K-팝 송' 수상", "en": "'Seven' Wins 'Top Global K-pop Song' at BBMAs" }, "date": "2024.11.21", "summary": { "ko": "정국의 솔로곡 'Seven'이 빌보드 시상식에서 주요 부문을 수상하며 2023년 최고의 히트곡임을 증명했습니다.", "en": "Jungkook's 'Seven' won a major category at the BBMAs, proving it was the biggest hit of 2023." }, "url": "#" },
      { "title": { "ko": "정국, 캘빈클라인 글로벌 앰버서더로 파급력 입증", "en": "Jungkook Proves Influence as Calvin Klein Global Ambassador" }, "date": "2024.03.15", "summary": { "ko": "정국이 참여한 캠페인이 공개 직후 품절 사태를 일으키며 엄청난 파급력을 보여주었습니다.", "en": "The campaign featuring Jungkook caused an immediate sell-out, showing his immense influence." }, "url": "#" },
      { "title": { "ko": "정국 솔로 콘서트 'GOLDEN Live On Stage' 성료", "en": "Jungkook Successfully Completes 'GOLDEN Live On Stage'" }, "date": "2023.11.20", "summary": { "ko": "전 세계 팬들과 함께한 첫 솔로 쇼케이스에서 완벽한 라이브 무대를 선보였습니다.", "en": "He delivered perfect live performances at his first solo showcase with global fans." }, "url": "#" },
      { "title": { "ko": "정국 'Standing Next to You', 빌보드 핫 100 장기 집권", "en": "'Standing Next to You' Enjoys Long Run on Billboard Hot 100" }, "date": "2024.02.10", "summary": { "ko": "정국의 타이틀곡이 빌보드 메인 차트에서 롱런하며 전 세계적인 사랑을 받았습니다.", "en": "Jungkook's title track stayed on the Billboard main chart for a long time, receiving global love." }, "url": "#" },
      { "title": { "ko": "정국, 군 입대 전 팬송 'Never Let Go' 깜짝 발표", "en": "Jungkook Releases Surprise Fan Song 'Never Let Go' Before Enlistment" }, "date": "2024.06.07", "summary": { "ko": "팬들을 위한 진심을 담은 노래를 발표하며 아미에게 감동을 선사했습니다.", "en": "He moved ARMY by releasing a song filled with sincerity for his fans." }, "url": "#" },
      { "title": { "ko": "정국 '3D', 글로벌 스포티파이 차트 1위 석권", "en": "'3D' Sweeps Global Spotify Charts at #1" }, "date": "2023.10.05", "summary": { "ko": "연이은 히트곡 발표로 솔로 아티스트로서의 독보적인 위치를 굳혔습니다.", "en": "With consecutive hits, he solidified his unique position as a solo artist." }, "url": "#" },
      { "title": { "ko": "정국, MTV VMA '송 오브 서머' 수상 쾌거", "en": "Jungkook Wins 'Song of the Summer' at MTV VMAs" }, "date": "2023.09.12", "summary": { "ko": "미국 주요 시상식에서 수상하며 글로벌 팝스타로서의 위상을 확인했습니다.", "en": "Confirmed his status as a global pop star by winning at a major US award ceremony." }, "url": "#" },
      { "title": { "ko": "정국, 입대 후에도 빌보드 차트 역주행 기록", "en": "Jungkook Records Chart Re-entry Even After Enlistment" }, "date": "2024.12.01", "summary": { "ko": "정국의 솔로 앨범이 발매 1년이 지난 시점에도 차트에 재진입하며 기염을 토했습니다.", "en": "Jungkook's solo album re-entered charts even a year after its release." }, "url": "#" }
    ],
    "members": []
  },
  {
    "id": "jimin",
    "name": { "ko": "지민", "en": "Jimin" },
    "company": "BIGHIT MUSIC",
    "debut": "2023.03.24",
    "fandom": { "ko": "아미", "en": "ARMY" },
    "accentColor": "#ffcc00",
    "imageUrl": "https://tse1.mm.bing.net/th?q=Jimin+Solo+FACE+MUSE+Concept+Photo",
    "wiki": {
      "ko": "방탄소년단의 지민은 2023년 첫 솔로 앨범 'FACE'를 통해 한국 솔로 아티스트 최초로 빌보드 핫 100 1위를 기록하며 역사를 썼습니다. 이어 2024년 'MUSE'를 발표하며 자신만의 감성적인 음악 세계를 확장했습니다. 현대 무용을 전공한 예술적인 춤선과 독보적인 고음 보컬이 특징인 아티스트입니다.",
      "en": "BTS member Jimin made history by becoming the first Korean solo artist to top the Billboard Hot 100 with his 2023 album 'FACE'. He expanded his emotional musical world with the release of 'MUSE' in 2024. He is an artist characterized by artistic dance lines from his modern dance background and unique high-pitched vocals."
    },
    "description": {
      "ko": "예술적 감성을 지닌 올라운더, 독보적인 미성으로 전 세계를 사로잡은 아티스트입니다.",
      "en": "An all-rounder with artistic sensibility, an artist who captivated the world with his unique vocals."    },
    "tmi": {
      "ko": [
        "지민의 솔로곡 'Like Crazy'는 한국 솔로 가수 사상 최초로 빌보드 핫 100 1위에 올랐습니다.",
        "한번 보면 팬이 된다는 '입덕 요정'으로, 도입부에서 시선을 끄는 능력이 대단합니다.",
        "정말 크게 웃을 때만 나타나는 신기한 보조개가 왼쪽 볼에 있습니다.",
        "부산예술고등학교 무용과에 전체 수석으로 입학한 전설적인 실력자입니다.",
        "지민의 핑크색 머리는 K-팝 역사상 가장 아이코닉한 헤어 컬러 중 하나로 꼽힙니다.",
        "팀에서 키가 가장 작으며, RM이 가끔 몇 밀리미터 차이로 놀리곤 합니다.",
        "이미 완벽한데도 5초마다 거울을 보며 머리를 정리하는 습관이 있습니다.",
        "새벽 2시에 가장 좋은 아이디어가 떠오르는 지독한 '밤 부엉이'입니다.",
        "공연 중 무대에서 넘어진 적이 있는데, 너무 우아하게 대처해서 팬들은 퍼포먼스인 줄 알았습니다.",
        "김치볶음밥을 세상에서 가장 좋아하며 매일 먹어도 질리지 않는다고 합니다.",
        "멤버들에게 존댓말을 자주 쓸 정도로 예의가 바르고 다정한 성격입니다.",
        "데뷔 초 볼살이 통통해서 팬들이 '망개떡'이라는 별명을 지어주었습니다.",
        "가장 좋아하는 취미는 그냥 바닥에 누워서 천장을 멍하니 바라보는 것입니다.",
        "솔로곡 'Serendipity'의 이불 퍼포먼스를 위해 500번 넘게 연습했습니다.",
        "추위를 많이 타서 봄에도 옷을 3겹씩 껴입는 경우가 많습니다.",
        "솔로곡 'Filter' 무대에서 단 5초 만에 옷을 갈아입는 마술 같은 퍼포먼스를 선보였습니다.",
        "누군가 울고 있으면 가장 먼저 달려가서 안아주는 '힐링 담당' 멤버입니다.",
        "손목에 자신의 데뷔 날짜를 의미하는 숫자 '13' 타투가 있습니다.",
        "솔로 앨범 'FACE' 녹음 당시 만족할 때까지 수십 번을 다시 녹음한 완벽주의자입니다.",
        "가장 좋아하는 소리는 콘서트장에서 들리는 아미들의 함성 소리입니다."      ],
      "en": [
        "His solo song 'Like Crazy' made him the first Korean solo artist to hit #1 on the Billboard Hot 100.",
        "He's the 'Recruiting Fairy' who makes people fans instantly with his captivating intros.",
        "He has a mysterious dimple on his left cheek that only appears when he laughs really hard.",
        "He was a legendary student who entered Busan High School of Arts as the top overall student.",
        "Jimin's pink hair is considered one of the most iconic hair colors in K-pop history.",
        "He's the shortest member, and RM often teases him about being just a few millimeters shorter.",
        "He has a habit of fixing his hair every 5 seconds even when it's already perfect.",
        "He's a 'Night Owl' who gets his best creative ideas around 2 AM.",
        "He once fell on stage but handled it so gracefully that fans thought it was part of the show.",
        "He loves Kimchi Fried Rice so much he says he could eat it every single day.",
        "He is very polite and kind, often using honorifics even with other members.",
        "During his debut, he had squishy cheeks, earning him the nickname 'Mochi'.",
        "His favorite hobby is just lying on the floor and staring at the ceiling.",
        "He practiced the blanket move for his solo song 'Serendipity' over 500 times.",
        "He is sensitive to cold and often wears three layers of clothes even in spring.",
        "He performed a magic-like wardrobe change in just 5 seconds during his 'Filter' performance.",
        "He is the 'Healing' member who is always the first to run and hug someone who is crying.",
        "He has a tattoo of the number '13' on his wrist, representing his debut date.",
        "He is a perfectionist who re-recorded his 'FACE' album vocals dozens of times until satisfied.",
        "His favorite sound is the roar of ARMY's cheers at a concert stadium."      ]
    },
    "news": [
      { "title": { "ko": "지민 솔로 2집 'MUSE', 전 세계 100개국 아이튠즈 1위", "en": "Jimin's 2nd Solo Album 'MUSE' Tops iTunes in 100 Countries" }, "date": "2024.07.20", "summary": { "ko": "지민의 새 앨범 'MUSE'가 발매 직후 전 세계 차트를 휩쓸며 폭발적인 반응을 얻었습니다.", "en": "Jimin's new album 'MUSE' swept global charts immediately after release, receiving explosive reactions." }, "url": "#" },
      { "title": { "ko": "지민 'Who', 스포티파이 글로벌 차트 최상위권 장기 집권", "en": "Jimin's 'Who' Long Run at the Top of Global Spotify Charts" }, "date": "2024.08.30", "summary": { "ko": "지민의 솔로곡 'Who'가 틱톡과 스포티파이에서 바이럴되며 글로벌 히트곡이 되었습니다.", "en": "Jimin's solo track 'Who' became a global hit, going viral on TikTok and Spotify." }, "url": "#" },
      { "title": { "ko": "지민, 한국 솔로 최초 빌보드 핫 100 1위 공식 인증", "en": "Jimin Officially Certified as 1st Korean Soloist at #1 on Hot 100" }, "date": "2023.04.04", "summary": { "ko": "지민의 'Like Crazy'가 빌보드 메인 싱글 차트 정상에 오르며 K-팝의 새 역사를 썼습니다.", "en": "Jimin's 'Like Crazy' wrote a new chapter in K-pop by reaching the top of the Billboard main single chart." }, "url": "#" },
      { "title": { "ko": "지민, 디올 및 티파니 글로벌 앰버서더 동시 발탁", "en": "Jimin Appointed Global Ambassador for Dior and Tiffany & Co." }, "date": "2023.03.02", "summary": { "ko": "명품 브랜드들이 지민을 전 세계 얼굴로 발탁하며 그의 패션 아이콘 위상을 증명했습니다.", "en": "Luxury brands selected Jimin as their global face, proving his status as a fashion icon." }, "url": "#" },
      { "title": { "ko": "지민 솔로 다큐 'Jimin's Production Diary' 화제", "en": "Jimin's Solo Documentary 'Jimin's Production Diary' Viral" }, "date": "2023.10.23", "summary": { "ko": "앨범 제작 과정에서의 치열한 고민을 담은 다큐멘터리가 팬들에게 큰 감동을 주었습니다.", "en": "The documentary capturing his intense struggles during album production deeply moved fans." }, "url": "#" },
      { "title": { "ko": "지민, 부산교육청에 1억 원 남몰래 기부", "en": "Jimin Secretly Donates 100 Million Won to Busan Education" }, "date": "2024.05.10", "summary": { "ko": "고향인 부산의 인재 양성을 위해 꾸준한 선행을 이어가고 있는 소식이 뒤늦게 알려졌습니다.", "en": "News of his steady good deeds for talent development in his hometown Busan was revealed belatedly." }, "url": "#" },
      { "title": { "ko": "지민 'Set Me Free Pt.2', 퍼포먼스 영상 3억 뷰 돌파", "en": "'Set Me Free Pt.2' Performance Video Hits 300M Views" }, "date": "2024.11.15", "summary": { "ko": "지민의 압도적인 퍼포먼스가 담긴 영상이 유튜브에서 꾸준한 사랑을 받고 있습니다.", "en": "The video featuring Jimin's overwhelming performance continues to receive steady love on YouTube." }, "url": "#" },
      { "title": { "ko": "지민, MAMA 어워즈 '베스트 메일 아티스트' 수상", "en": "Jimin Wins 'Best Male Artist' at MAMA Awards" }, "date": "2024.11.22", "summary": { "ko": "한 해 동안 솔로로서 보여준 눈부신 활약을 인정받아 최고의 남자 가수상을 받았습니다.", "en": "Recognized for his brilliant solo activities, he received the award for Best Male Artist." }, "url": "#" },
      { "title": { "ko": "지민 'Closer Than This', 전 세계 팬들을 향한 진심", "en": "'Closer Than This' - Sincerity Toward Global Fans" }, "date": "2023.12.22", "summary": { "ko": "입대 전 팬들을 위해 준비한 스페셜 싱글이 전 세계 차트를 휩쓸었습니다.", "en": "The special single prepared for fans before his enlistment swept global charts." }, "url": "#" },
      { "title": { "ko": "지민, 입대 현장에서 보여준 늠름한 모습 화제", "en": "Jimin's Dignified Appearance at Enlistment Site Becomes a Topic" }, "date": "2023.12.12", "summary": { "ko": "조용히 입대한 지민이 아미에게 남긴 마지막 인사가 전 세계 팬들의 눈물샘을 자극했습니다.", "en": "Jimin's final greeting to ARMY before his quiet enlistment moved global fans to tears." }, "url": "#" }
    ],
    "members": []
  },
  {
    "id": "v",
    "name": { "ko": "뷔", "en": "V" },
    "company": "BIGHIT MUSIC",
    "debut": "2023.09.08",
    "fandom": { "ko": "아미", "en": "ARMY" },
    "accentColor": "#0099ff",
    "imageUrl": "https://tse1.mm.bing.net/th?q=BTS+V+Solo+Layover+FRIENDS+Concept+Photo",
    "wiki": {
      "ko": "방탄소년단의 뷔은 2023년 첫 솔로 앨범 'Layover'를 통해 자신만의 독창적인 재즈 및 R&B 감성을 선보였습니다. 평소 좋아하는 고전적인 분위기를 현대적으로 재해석하여 음악적 깊이를 인정받았습니다. 연기, 사진, 패션 등 다방면에서 예술적 재능을 뽐내는 K-POP 대표 비주얼 아티스트입니다.",
      "en": "BTS member V showcased his unique jazz and R&B sensibilities through his 2023 solo debut 'Layover'. He received critical acclaim for modernly reinterpreting the classic vibes he loves. He is a representative K-pop visual artist showing artistic talent across acting, photography, and fashion."    },
    "description": {
      "ko": "소울풀한 음색의 예술가, 비주얼과 감성을 모두 겸비한 아이콘입니다.",
      "en": "An artist with a soulful voice, an icon combining both visuals and emotion."    },
    "tmi": {
      "ko": [
        "뷔의 솔로 앨범 'Layover'는 본인의 클래식 재즈와 R&B에 대한 사랑이 듬뿍 담긴 앨범입니다.",
        "반려견 '연탄'이는 아미 사이에서도 팬덤이 따로 있을 정도로 엄청난 스타입니다.",
        "엉뚱하고 창의적인 '4차원' 성격으로, 멤버들을 가끔 당황하게 만드는 매력이 있습니다.",
        "빈센트 반 고흐의 열혈 팬이며 암스테르담 여행 중 반 고흐 미술관을 직접 방문했습니다.",
        "뷔의 '네모난 미소'는 웃을 때 입 모양이 정말 완벽한 사각형이 되는 독특한 매력 포인트입니다.",
        "바이올린을 연주할 줄 알지만, 지금은 실력이 많이 줄었다고 고백했습니다.",
        "연예계 대표 '인맥왕'으로 박서준, 최우식 등 '우가팸' 멤버들과 매우 친합니다.",
        "딸기를 너무 좋아해서 팬사인회에서 딸기 한 바구니를 다 먹어 치운 적이 있습니다.",
        "활동명 '뷔(V)'는 '승리(Victory)'를 의미하며, 짧고 강렬해서 직접 선택했습니다.",
        "흰 티셔츠 하나만 입어도 명품 화보로 만드는 '인간 구찌'이자 '인간 셀린느'입니다.",
        "영상 촬영 중 지나가는 새와 진지하게 대화를 시도한 엉뚱한 일화가 있습니다.",
        "사진 작가 안테 바짐에게 영감을 받아 'Vante'라는 이름으로 직접 찍은 사진을 공유합니다.",
        "왼손과 오른손을 모두 잘 사용하는 양손잡이의 재능을 가졌습니다.",
        "평론가들로부터 '따뜻한 초콜릿 같은 목소리'라는 찬사를 받는 깊은 저음을 보유하고 있습니다.",
        "드라마 '화랑'을 통해 연기자로 데뷔했으며 감정 연기로 호평을 받았습니다.",
        "미식가이지만 콩은 정말 싫어해서 모든 음식에서 콩을 골라내고 먹습니다.",
        "미래에 자신의 아버지처럼 멋진 아버지가 되는 것이 인생의 목표 중 하나입니다.",
        "생각에 잠길 때마다 손톱을 깨무는 귀여운 습관이 있습니다.",
        "솔로곡 'Singularity' 뮤직비디오의 마네킹 장면은 단 한 번의 테이크로 완성되었습니다.",
        "자신의 BT21 캐릭터인 '타타(TATA)' 인형을 어디든 챙겨 다닐 정도로 애착이 강합니다."      ],
      "en": [
        "His solo album 'Layover' is filled with his deep love for classic jazz and R&B.",
        "His dog 'Yeontan' is such a star that he has his own fandom within the ARMY.",
        "He has a quirky and creative '4D' personality that sometimes leaves members confused.",
        "He's a huge fan of Vincent van Gogh and visited the Van Gogh Museum in Amsterdam.",
        "His 'Boxy Smile' is a unique charm where his mouth forms a perfect rectangle when laughing.",
        "He can play the violin, though he confesses his skills have faded over time.",
        "He's a social butterfly, very close with his 'Wooga Squad' including actors Park Seo-joon and Choi Woo-shik.",
        "He loves strawberries so much he once ate a whole bucket of them during a fansign.",
        "His stage name 'V' stands for Victory, chosen by himself for its short and impactful vibe.",
        "He's the 'Human Celine' who can make a plain white T-shirt look like luxury fashion.",
        "He once seriously tried to have a conversation with a bird during a video shoot.",
        "Inspired by photographer Ante Badzim, he shares his own photos under the name 'Vante'.",
        "He is ambidextrous, possessing the talent to use both hands equally well.",
        "He has a deep low voice that critics praise as sounding like 'warm chocolate'.",
        "He debuted as an actor in the drama 'Hwarang' and received praise for his emotional acting.",
        "He's a foodie but hates beans; he meticulously picks them out of everything.",
        "One of his life goals is to become a cool father just like his own father in the future.",
        "He has a cute habit of biting his nails whenever he's lost in thought.",
        "The mannequin scene in his 'Singularity' music video was completed in just one take.",
        "He's very attached to his BT21 character 'TATA' and carries the plushie everywhere."      ]
    },
    "news": [
      { "title": { "ko": "뷔 'Layover', 빌보드 200 최상위권 데뷔", "en": "V's 'Layover' Debuts at Top of Billboard 200" }, "date": "2023.09.18", "summary": { "ko": "뷔의 첫 솔로 앨범이 빌보드 메인 앨범 차트에서 강세를 보이며 솔로 파워를 과시했습니다.", "en": "V's first solo album showed strong performance on the Billboard main album chart." }, "url": "#" },
      { "title": { "ko": "뷔 'FRI(END)S', 영국 오피셜 차트 자체 최고 기록", "en": "V's 'FRI(END)S' Breaks Personal Record on UK Official Chart" }, "date": "2024.03.25", "summary": { "ko": "뷔의 디지털 싱글 'FRI(END)S'가 영국 차트에서 높은 성적을 거두며 글로벌 인기를 증명했습니다.", "en": "V's digital single 'FRI(END)S' achieved high rankings on the UK charts, proving global popularity." }, "url": "#" },
      { "title": { "ko": "뷔, 셀린느 및 까르띠에 글로벌 앰버서더의 위엄", "en": "V's Dignity as Celine and Cartier Global Ambassador" }, "date": "2023.07.20", "summary": { "ko": "뷔가 참여한 화보가 전 세계 패션계의 찬사를 받으며 패션 아이콘으로 등극했습니다.", "en": "Pictorials featuring V received praise from the global fashion world, crowning him a fashion icon." }, "url": "#" },
      { "title": { "ko": "뷔, 군 입대 후 헌병대 특수임무대(SDT) 합격 화제", "en": "V Joins Special Duty Team (SDT) for Military Service" }, "date": "2024.01.10", "summary": { "ko": "강력한 체력과 정신력을 요구하는 특수부대에 자원한 뷔의 소식이 팬들 사이에서 큰 화제가 되었습니다.", "en": "News of V volunteering for a special unit requiring high physical and mental strength became a hot topic." }, "url": "#" },
      { "title": { "ko": "뷔, 아이유 'Love Wins All' 뮤직비디오 출연 호평", "en": "V Praised for Appearance in IU's 'Love Wins All' MV" }, "date": "2024.01.24", "summary": { "ko": "뮤직비디오에서 선보인 애절한 연기로 전 세계 팬들에게 감동을 선사했습니다.", "en": "He moved global fans with his sorrowful acting in the music video." }, "url": "#" },
      { "title": { "ko": "뷔 'Love Me Again' 스포티파이 5억 스트리밍 돌파", "en": "'Love Me Again' Surpasses 500M Streams on Spotify" }, "date": "2024.06.30", "summary": { "ko": "뷔의 몽환적인 음색이 돋보이는 곡이 전 세계 리스너들의 꾸준한 사랑을 받고 있습니다.", "en": "The track featuring V's dreamy vocals continues to receive steady love from global listeners." }, "url": "#" },
      { "title": { "ko": "뷔, 솔로 팬미팅 'VICNIC'으로 팬들과 특별한 추억", "en": "V Creates Special Memories with Fans at 'VICNIC' Fan Meeting" }, "date": "2023.10.14", "summary": { "ko": "야외에서 열린 팬미팅을 통해 뷔만의 감성을 공유하며 팬들과 소통했습니다.", "en": "He shared his unique vibes and communicated with fans through an outdoor fan meeting." }, "url": "#" },
      { "title": { "ko": "뷔 'Slow Dancing' 리믹스 앨범 전 세계 동시 공개", "en": "'Slow Dancing' Remix Album Released Worldwide" }, "date": "2023.10.23", "summary": { "ko": "원곡과는 또 다른 매력의 리믹스 버전들이 글로벌 차트에서 좋은 반응을 얻었습니다.", "en": "Remix versions with different charms from the original received good reactions on global charts." }, "url": "#" },
      { "title": { "ko": "뷔, Hanteo Music Awards '톱 솔로 아티스트' 수상", "en": "V Wins 'Top Solo Artist' at Hanteo Music Awards" }, "date": "2024.02.18", "summary": { "ko": "솔로 아티스트로서의 탁월한 역량을 인정받아 주요 부문 트로피를 거머쥐었습니다.", "en": "Recognized for his outstanding solo capabilities, he took home a major trophy." }, "url": "#" },
      { "title": { "ko": "뷔, 군복 입은 늠름한 비주얼 '화보인 줄'", "en": "V's Dignified Military Look Becomes a Hot Topic" }, "date": "2024.04.15", "summary": { "ko": "훈련 중 포착된 뷔의 늠름한 모습이 공개되어 전 세계 팬들의 폭발적인 반응을 이끌어냈습니다.", "en": "A dignified photo of V captured during training drew explosive reactions from global fans." }, "url": "#" }
    ],
    "members": []
  }
,
  {
    id: "blackpink",
    name: { ko: "블랙핑크", en: "BLACKPINK" },
    officialSite: "https://www.blackpinkofficial.com/",
    company: "YG Entertainment",
    debut: "2016.08.08",
    fandom: { ko: "블링크 (BLINK)", en: "BLINK" },
    accentColor: "#f4a7bb",
    imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Group+Official+Photo+BORN+PINK",
    wiki: {
      ko: "블랙핑크(BLACKPINK)는 YG 엔터테인먼트 소속의 4인조 다국적 걸그룹입니다. '예쁜 게 다가 아니다'라는 블랙의 반전 의미를 담아 데뷔와 동시에 전 세계적인 신드롬을 일으켰습니다. '휘파람', '붐바야'를 시작으로 'DDU-DU DDU-DU', 'How You Like That', 'Pink Venom' 등 발표하는 곡마다 유튜브와 빌보드 기록을 갈아치우며 전 세계에서 가장 영향력 있는 여성 그룹으로 자리매김했습니다. 2023년에는 K-POP 그룹 최초로 코첼라 페스티벌의 헤드라이너로 서며 전설적인 역사를 썼습니다.",
      en: "BLACKPINK is a 4-member multinational girl group under YG Entertainment. With a name that suggests 'pretty isn't everything,' they created a global syndrome upon debut. From 'Whistle' and 'Boombayah' to 'DDU-DU DDU-DU', 'How You Like That', and 'Pink Venom', they have shattered YouTube and Billboard records, solidifying their status as the most influential girl group in the world. In 2023, they made history as the first K-pop group to headline the Coachella Festival."
    },
    description: {
      ko: "전 세계를 사로잡은 'Pink'와 'Black'의 조화, K-POP의 경계를 넘어 글로벌 팝의 아이콘이 된 4인조 걸그룹입니다.",
      en: "The perfect harmony of 'Pink' and 'Black' that captivated the world, a 4-member girl group that became a global pop icon beyond K-pop boundaries."
    },
    tmi: {
      ko: [
        "블랙핑크는 연습생 시절 숙소에서 거대 바퀴벌레가 나타나자 리사가 용감하게(?) 컵으로 가두고 지수가 종이를 밀어 넣어 잡은 전설적인 일화가 있습니다.",
        "멤버들은 식사 메뉴를 정할 때 결정 장애가 오면 사다리 타기나 룰렛 앱을 사용합니다.",
        "제니는 팀 내에서 '패션 수사대'로 통하며 멤버들의 착장을 꼼꼼히 체크해주곤 합니다.",
        "지수는 팀에서 가장 게임을 잘하며, 스케줄 대기 시간에도 모바일 게임에 열중합니다.",
        "리사는 멤버들의 '틱톡 스승님'으로, 새로운 챌린지가 유행하면 멤버들에게 직접 안무를 전수합니다.",
        "로제는 음식이 너무 맛있으면 감동해서 눈물을 글썽이는 진정한 미식가입니다.",
        "리사의 고양이들은 숙소의 실세이며, 멤버들은 고양이들의 간택을 받기 위해 노력합니다.",
        "지수는 당황하면 '치원(ice)' 유머를 던져 분위기를 급속도로 얼려버리는 능력이 있습니다.",
        "멤버들은 서로의 생일에 선물을 고르느라 몇 달 전부터 고민에 빠집니다.",
        "로제는 반려견 '행크'를 위해 전용 SNS 계정을 운영하며 지극한 사랑을 보여줍니다.",
        "제니는 사실 엄청난 겁쟁이라서 공포 체험을 하면 멤버들 뒤에 숨어서 소리만 지릅니다.",
        "리사는 빈티지 카메라 수집광이며 이미 수백 대의 카메라를 보유하고 있다는 소문이 있습니다.",
        "지수는 '맏내'라는 별명답게 막내 리사와 초딩처럼 투닥거리며 노는 것을 즐깁니다.",
        "로제는 잠꼬대로 노래 가사를 웅얼거릴 때가 있어 옆방 리사가 가끔 화음을 넣어줍니다.",
        "블랙핑크는 연습생 시절 간식을 몰래 먹기 위해 옷장 안에 숨어있다가 걸린 적이 있습니다.",
        "멤버들만 아는 비밀 단톡방의 이름은 주기적으로 바뀌는데, 주로 먹고 싶은 음식 이름입니다.",
        "제니는 요리에 관심은 많지만 생각보다 손이 많이 가는 '파괴의 손' 기질이 살짝 있습니다.",
        "리사는 한국어 실력이 너무 완벽해서 가끔 한국인 멤버들이 맞춤법을 리사에게 물어봅니다.",
        "지수는 어떤 상황에서도 당황하지 않는 '강철 멘탈'의 소유자로 팀의 정신적 지주입니다.",
        "로제는 기타뿐만 아니라 피아노 연주 실력도 수준급이며 혼자 작곡하는 것을 좋아합니다."
      ],
      en: [
        "The members once caught a giant cockroach in their dorm using a cup and a piece of paper, with Lisa being the 'brave' one.",
        "They use a roulette app or ladder climbing game whenever they can't decide what to eat for dinner.",
        "Jennie acts as the group's 'Fashion Police,' meticulously checking the other members' outfits.",
        "Jisoo is the best gamer in the group and is often seen playing mobile games while waiting for schedules.",
        "Lisa is the members' 'TikTok Master,' teaching them the latest viral dance challenges.",
        "Rosé is such a foodie that she sometimes gets teary-eyed when the food is exceptionally delicious.",
        "Lisa's cats are the true bosses of the dorm, and members compete for their attention.",
        "Jisoo has a habit of cracking 'ice jokes' (chuh-won) that instantly freeze the atmosphere when she's flustered.",
        "The members start worrying about each other's birthday presents months in advance.",
        "Rosé shows immense love for her dog Hank, even managing his dedicated social media account.",
        "Jennie is a huge 'scaredy-cat' who hides behind members and screams during horror experiences.",
        "Lisa is a vintage camera enthusiast and is rumored to own hundreds of different models.",
        "Jisoo, the 'fake maknae,' loves bickering and playing around with the actual maknae, Lisa.",
        "Rosé sometimes mumbles lyrics in her sleep, and Lisa occasionally joins in with harmonies from the next room.",
        "They once got caught hiding in a closet to sneak snacks during their trainee days.",
        "The name of their private group chat changes regularly, usually to the name of a food they're craving.",
        "Jennie is interested in cooking but has a slight 'hand of destruction' tendency that makes members nervous.",
        "Lisa's Korean is so perfect that the Korean members sometimes ask her for spelling help.",
        "Jisoo is the mental pillar of the group, possessing a 'steel mind' that never gets flustered.",
        "Rosé is skilled at both guitar and piano and loves composing music in her spare time."
      ]
    },
    news: [
      { title: { ko: "블랙핑크, 그룹 활동 전격 재계약 체결", en: "BLACKPINK Renews Contract for Group Activities" }, date: "2023.12.06", summary: { ko: "YG 엔터테인먼트와 그룹 활동에 대한 전속계약을 체결하며 블랙핑크의 완전체 행보를 이어가기로 했습니다.", en: "Signed an exclusive contract with YG Entertainment for group activities, continuing BLACKPINK's journey as a full group." }, url: "https://news.google.com/search?q=BLACKPINK+YG+Contract+Renewal" },
      { title: { ko: "블랙핑크, K-POP 그룹 최초 코첼라 헤드라이너 등극", en: "BLACKPINK First K-pop Group to Headline Coachella" }, date: "2023.04.16", summary: { ko: "미국 최대 음악 페스티벌 코첼라에서 헤드라이너로 서며 전 세계 팬들을 열광시켰습니다.", en: "Enthralled global fans as the headliner at Coachella, the largest music festival in the US." }, url: "https://news.google.com/search?q=BLACKPINK+Coachella+Headliner" },
      { title: { ko: "블랙핑크 'How You Like That' MV 13억 뷰 돌파", en: "BLACKPINK 'How You Like That' MV Surpasses 1.3B Views" }, date: "2024.01.10", summary: { ko: "식지 않는 인기 속에 뮤직비디오 조회수가 13억 회를 넘어서며 대기록을 세웠습니다.", en: "The MV surpassed 1.3 billion views amidst undying popularity, setting a massive record." }, url: "https://news.google.com/search?q=BLACKPINK+How+You+Like+That+Views" },
      { title: { ko: "블랙핑크, 영 왕실서 대영제국훈장(MBE) 수여", en: "BLACKPINK Awarded MBEs by King Charles III" }, date: "2023.11.22", summary: { ko: "기후위기 대응 홍보대사 활동 공로를 인정받아 영국 국왕으로부터 훈장을 받았습니다.", en: "Received honorary MBEs from King Charles III in recognition of their roles as COP26 Advocates." }, url: "https://news.google.com/search?q=BLACKPINK+MBE+Award" },
      { title: { ko: "블랙핑크 'BORN PINK' 월드투어 211만 명 동원", en: "BLACKPINK 'BORN PINK' Tour Draws 2.11 Million Fans" }, date: "2023.09.20", summary: { ko: "전 세계를 도는 대규모 월드투어를 성황리에 마치며 글로벌 위상을 입증했습니다.", en: "Successfully concluded their massive world tour, proving their global status by attracting 2.11 million fans." }, url: "https://news.google.com/search?q=BLACKPINK+BORN+PINK+World+Tour+Total" },
      { title: { ko: "블랙핑크, MTV VMAs 2관왕 달성", en: "BLACKPINK Wins Two Awards at MTV VMAs" }, date: "2023.09.13", summary: { ko: "미국 주요 시상식에서 '올해의 그룹'과 '베스트 안무' 상을 거머쥐었습니다.", en: "Won 'Group of the Year' and 'Best Choreography' at the prestigious US award ceremony." }, url: "https://news.google.com/search?q=BLACKPINK+MTV+VMAs+2023" },
      { title: { ko: "블랙핑크 'Pink Venom', 빌보드 글로벌 200 1위", en: "BLACKPINK 'Pink Venom' Tops Billboard Global 200" }, date: "2022.08.30", summary: { ko: "발매와 동시에 글로벌 차트 정상을 차지하며 월드클래스 아이돌의 저력을 보여주었습니다.", en: "Topped global charts immediately upon release, showcasing their power as world-class idols." }, url: "https://news.google.com/search?q=BLACKPINK+Pink+Venom+Billboard" },
      { title: { ko: "블랙핑크, 유튜브 구독자 9천만 명 돌파 '전 세계 1위'", en: "BLACKPINK Surpasses 90M YouTube Subscribers, Ranks #1 Worldwide" }, date: "2023.07.17", summary: { ko: "전 세계 아티스트 중 가장 많은 유튜브 구독자를 보유한 채널이 되었습니다.", en: "Became the artist channel with the most subscribers on YouTube globally." }, url: "https://news.google.com/search?q=BLACKPINK+YouTube+Subscribers+Record" },
      { title: { ko: "블랙핑크, 파리 패션위크 동반 참석 화제", en: "BLACKPINK Members Capture Spotlight at Paris Fashion Week" }, date: "2024.03.05", summary: { ko: "네 멤버가 각기 다른 럭셔리 브랜드의 앰버서더로 참석하여 패션 아이콘의 면모를 뽐냈습니다.", en: "All four members attended as ambassadors for different luxury brands, showing off their status as fashion icons." }, url: "https://news.google.com/search?q=BLACKPINK+Paris+Fashion+Week+2024" },
      { title: { ko: "블랙핑크 'Shut Down', 스포티파이 주간 차트 1위", en: "BLACKPINK 'Shut Down' Tops Spotify Weekly Top Songs Global" }, date: "2022.09.23", summary: { ko: "K-POP 아티스트 최초로 스포티파이 글로벌 주간 차트 정상에 올랐습니다.", en: "Became the first K-pop artist to top the Spotify Weekly Top Songs Global chart." }, url: "https://news.google.com/search?q=BLACKPINK+Shut+Down+Spotify" }
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
        description: { ko: "팀의 맏언니이자 비주얼 센터. 맑고 단단한 보컬과 엉뚱하고 유머러스한 성격이 매력입니다.", en: "The oldest and visual center. Known for her clear, solid vocals and her quirky, humorous personality." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+Official+Portrait"
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
        description: { ko: "팀의 메인 래퍼로 독보적인 아우라를 가졌으며, 귀여움과 시크함을 동시에 보유한 올라운더입니다.", en: "The main rapper with a unique aura, an all-rounder possessing both cuteness and chic vibes." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+Official+Portrait"
      },
      {
        id: "lisa",
        name: { ko: "리사", en: "Lisa" },
        role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper" },
        birth: "1997.03.27",
        mbti: "ESFJ",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "167cm",
        bloodType: "O",
        description: { ko: "압도적인 춤 실력과 비율을 가진 팀의 메인 댄서. 무대 위 카리스마와 대비되는 밝은 에너지가 특징입니다.", en: "The main dancer with overwhelming dance skills and proportions. Characterized by bright energy contrasting with her on-stage charisma." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+Official+Portrait"
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
        description: { ko: "유니크한 음색을 가진 메인 보컬. 섬세한 감성과 파워풀한 가창력을 겸비한 아티스트입니다.", en: "The main vocalist with a unique tone. An artist combining delicate emotions with powerful vocal ability." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Official+Portrait"
      }
    ]
  },
  {
    id: "jisoo",
    name: { ko: "지수", en: "Jisoo" },
    company: "BLISSOO",
    debut: "2023.03.31",
    fandom: { ko: "블링크", en: "BLINK" },
    accentColor: "#ff007f",
    imageUrl: "https://tse1.mm.bing.net/th?q=Jisoo+Solo+FLOWER+ME+Photo",
    wiki: {
      ko: "블랙핑크의 멤버 지수는 2023년 첫 솔로 앨범 'ME'를 통해 솔로 아티스트로서 화려하게 데뷔했습니다. 타이틀곡 '꽃(FLOWER)'은 중독성 있는 멜로디와 안무로 전 세계적인 챌린지 열풍을 일으켰으며, 드라마 '설강화' 등을 통해 연기자로서의 입지도 굳혔습니다. 현재는 개인 레이블 BLISSOO를 설립하여 더욱 폭넓은 활동을 예고하고 있습니다.",
      en: "Jisoo, a member of BLACKPINK, made a spectacular solo debut in 2023 with her album 'ME'. The title track 'FLOWER' sparked a global challenge craze with its addictive melody and choreography. She has also solidified her position as an actress through dramas like 'Snowdrop'. Currently, she has established her personal label BLISSOO, promising even more diverse activities."
    },
    description: {
      ko: "만개한 꽃처럼 화려한 비주얼, 맑고 단단한 내면을 가진 글로벌 아이콘입니다.",
      en: "A global icon with visuals as radiant as a blooming flower and a clear, strong inner self."
    },
    tmi: {
      ko: [
        "지수의 솔로곡 '꽃' 안무 중 손바닥을 돌리는 동작은 사실 돈을 세는 동작에서 착안했다는 농담을 멤버들이 합니다.",
        "지수는 사실 엄청난 '집순이'라서 스케줄이 없으면 침대 위에서 모든 것을 해결합니다.",
        "가장 좋아하는 음식은 밥입니다. 어떤 반찬이 있어도 밥이 맛있어야 행복해합니다.",
        "지수는 사실 고소공포증이 있지만, 무대 위에서는 팬들을 위해 이를 꾹 참아냅니다.",
        "본인의 유튜브 채널 '행복지수 103%'의 수익금 전액을 기부하는 따뜻한 마음씨를 가졌습니다.",
        "지수는 사실 거울을 볼 때마다 본인이 너무 예뻐서 깜짝 놀란다는 농담을 진지하게 합니다.",
        "강아지 '달곰이'를 자식처럼 아끼며, 달곰이가 본인의 말을 다 알아듣는다고 믿습니다.",
        "지수는 사실 가사를 외우는 독특한 방법이 있는데, 가사를 그림으로 그려서 머릿속에 저장합니다.",
        "패션쇼장에 갈 때마다 디올 회장님의 사랑을 독차지하며 '디올 공주'라는 별명을 얻었습니다.",
        "지수는 사실 엄청난 게임 고수입니다. 웬만한 모바일 게임은 랭커 수준입니다.",
        "지수는 본인의 코에 있는 점이 매력 포인트라고 생각하며 이를 '지수 점'이라고 부릅니다.",
        "지수는 사실 요리를 못 하지만, 라면 하나만큼은 세상에서 제일 맛있게 끓인다고 자부합니다.",
        "지수는 당황하면 말이 엄청나게 빨라지는데, 그 모습이 랩을 하는 것 같습니다.",
        "지수의 좌우명은 '나 자신을 사랑하자'이며, 힘든 일이 있어도 긍정적으로 생각하려고 노력합니다.",
        "지수는 사실 비오는 날을 좋아합니다. 창밖을 보며 멍 때리는 것이 최고의 힐링이라고 합니다.",
        "지수는 본인이 귀엽다는 말을 들으면 '저 섹시한데요?'라며 장난스럽게 반박합니다.",
        "지수는 사실 시력이 좋지 않아 숙소에서는 아주 두꺼운 안경을 씁니다.",
        "지수는 본인의 목소리가 허스키한 편이라서 발라드를 부를 때 가장 감정이 잘 잡힌다고 생각합니다.",
        "지수는 사실 헬로키티를 엄청나게 좋아해서 방 안이 헬로키티 굿즈로 가득합니다.",
        "지수는 팬들에게 '지수야 사랑해'라는 말을 들을 때 세상에서 가장 행복한 미소를 짓습니다."
      ],
      en: [
        "Members joke that the palm-turning move in 'FLOWER' was actually inspired by counting money.",
        "Jisoo is a total homebody who spends her entire day off on her bed.",
        "Rice is her absolute favorite food; she isn't happy unless the rice is perfectly cooked.",
        "She is afraid of heights but endures it on stage for the sake of her fans.",
        "She donates all proceeds from her YouTube channel 'Happy Jisoo 103%' to charity.",
        "She jokingly says she's always surprised by her own beauty every time she looks in the mirror.",
        "She treats her dog Dalgom like a son and believes he understands everything she says.",
        "She has a unique way of memorizing lyrics by drawing them out as pictures in her mind.",
        "She is nicknamed the 'Dior Princess' because she is so beloved by the CEO of Dior.",
        "She is an expert gamer, reaching top ranks in almost any mobile game she plays.",
        "She considers the mole on her nose her charm point and calls it the 'Jisoo Spot'.",
        "She claims she can't cook anything except for the world's best ramen.",
        "When flustered, she talks incredibly fast, making it sound like she's rapping.",
        "Her motto is 'Love myself,' and she always tries to stay positive through tough times.",
        "She loves rainy days and finds staring out the window to be the best form of healing.",
        "When told she's cute, she playfully argues back, 'I'm sexy, though!'",
        "She has poor eyesight and wears very thick glasses when she's at home.",
        "She thinks her husky voice is best suited for emotional ballads.",
        "She is a huge fan of Hello Kitty and her room is filled with Hello Kitty merchandise.",
        "She makes her happiest smile whenever she hears fans say 'Jisoo, I love you'."
      ]
    },
    news: [
      { title: { ko: "지수, 개인 레이블 'BLISSOO' 설립 공식화", en: "Jisoo Formally Announces Personal Label 'BLISSOO'" }, date: "2024.02.21", summary: { ko: "가족 경영 체제 기반의 레이블 BLISSOO를 설립하며 독자적인 솔로 활동의 시작을 알렸습니다.", en: "Announced the start of her independent solo activities by establishing the label BLISSOO." }, url: "https://news.google.com/search?q=Jisoo+BLISSOO+Establishment" },
      { title: { ko: "지수 '꽃(FLOWER)', 유튜브 조회수 5억 뷰 돌파", en: "Jisoo 'FLOWER' MV Surpasses 500M Views" }, date: "2024.05.10", summary: { ko: "솔로 데뷔곡 '꽃'이 전 세계적인 인기를 끌며 5억 뷰라는 대기록을 달성했습니다.", en: "Her solo debut track 'FLOWER' reached 500 million views, driven by global popularity." }, url: "https://news.google.com/search?q=Jisoo+FLOWER+500M+Views" },
      { title: { ko: "지수, 영화 '전지적 독자 시점' 캐스팅 확정", en: "Jisoo Confirmed for Film 'Omniscient Reader's Viewpoint'" }, date: "2024.01.24", summary: { ko: "동명의 인기 웹소설을 원작으로 한 영화에 출연하며 스크린 데뷔를 앞두고 있습니다.", en: "Set to make her screen debut in the film based on the popular web novel of the same name." }, url: "https://news.google.com/search?q=Jisoo+Omniscient+Reader+Casting" },
      { title: { ko: "지수, 디올 '레이디 95.22' 백 캠페인 모델 발탁", en: "Jisoo Selected for Dior 'Lady 95.22' Campaign" }, date: "2023.05.15", summary: { ko: "디올의 글로벌 앰버서더로서 브랜드의 정체성을 담은 새로운 캠페인 화보를 장식했습니다.", en: "As Dior's Global Ambassador, she graced the new campaign pictorial representing the brand's identity." }, url: "https://news.google.com/search?q=Jisoo+Dior+Lady+95.22" },
      { title: { ko: "지수, 'Happy Jisoo 103%' 구독자 500만 돌파", en: "Jisoo's YouTube Channel Surpasses 5M Subscribers" }, date: "2023.12.30", summary: { ko: "자신의 생일을 앞두고 유튜브 구독자 500만 명을 돌파하며 뜨거운 인기를 증명했습니다.", en: "Proved her immense popularity by surpassing 5 million subscribers just before her birthday." }, url: "https://news.google.com/search?q=Jisoo+YouTube+5M+Subscribers" },
      { title: { ko: "지수, 까르띠에 '트리니티' 100주년 캠페인 참여", en: "Jisoo Participates in Cartier 'Trinity' 100th Anniversary" }, date: "2024.02.08", summary: { ko: "까르띠에의 앰버서더로서 유서 깊은 컬렉션의 100주년을 기념하는 자리에 함께했습니다.", en: "As Cartier's ambassador, she participated in celebrating the 100th anniversary of the historic collection." }, url: "https://news.google.com/search?q=Jisoo+Cartier+Trinity+100" },
      { title: { ko: "지수 'ME', 초동 117만 장 기록 '여성 솔로 최초'", en: "Jisoo's 'ME' Records 1.17M First-Week Sales, a First for Female Soloist" }, date: "2023.04.07", summary: { ko: "첫 솔로 앨범으로 역대 K-POP 여성 솔로 가수 초동 판매량 1위 기록을 갱신했습니다.", en: "Broke the record for first-week sales by a K-pop female soloist with her debut solo album." }, url: "https://news.google.com/search?q=Jisoo+ME+Album+Sales+Record" },
      { title: { ko: "지수, 드라마 '뉴토피아' 주연 캐스팅", en: "Jisoo Cast as Lead in Drama 'Newtopia'" }, date: "2024.08.01", summary: { ko: "박정민과 함께 좀비물을 다룬 새로운 시리즈의 주인공으로 낙점되어 기대를 모으고 있습니다.", en: "Cast as the protagonist alongside Park Jeong-min in a new series about zombies." }, url: "https://news.google.com/search?q=Jisoo+Newtopia+Drama" },
      { title: { ko: "지수, 보그 프랑스 단독 커버 장식 'K-POP 아티스트 최초'", en: "Jisoo Graces Vogue France Cover, a First for K-pop Artist" }, date: "2023.02.22", summary: { ko: "세계적인 패션지 보그 프랑스의 커버를 장식하며 글로벌 패션 아이콘임을 입증했습니다.", en: "Solidified her status as a global fashion icon by appearing on the cover of Vogue France." }, url: "https://news.google.com/search?q=Jisoo+Vogue+France+Cover" },
      { title: { ko: "지수, 솔로 활동 수익금 전액 세이브더칠드런 기부", en: "Jisoo Donates All Solo Profits to Save the Children" }, date: "2024.03.12", summary: { ko: "창립한 개인 레이블의 첫 수익금을 아동 보호 단체에 기부하며 선한 영향력을 전파했습니다.", en: "Spread positive influence by donating the first profits from her personal label to a child protection organization." }, url: "https://news.google.com/search?q=Jisoo+Donation+Save+the+Children" }
    ],
    members: []
  },
  {
    id: "lisa",
    name: { ko: "리사", en: "Lisa" },
    company: "LLOUD",
    debut: "2021.09.10",
    fandom: { ko: "블링크", en: "BLINK" },
    accentColor: "#f0df2e",
    imageUrl: "https://tse1.mm.bing.net/th?q=Lisa+Solo+ROCKSTAR+Official+Photo",
    wiki: {
      ko: "블랙핑크의 멤버 리사는 독보적인 댄스 실력과 랩으로 전 세계를 사로잡은 글로벌 팝스타입니다. 태국 출신으로 K-POP의 경계를 넘어 세계 무대에서 활약하고 있으며, 2021년 솔로 데뷔곡 'LALISA'와 'MONEY'로 빌보드 차트를 휩쓸었습니다. 2024년에는 개인 레이블 LLOUD를 설립하고 RCA 레코드와 파트너십을 맺으며 'ROCKSTAR', 'New Woman' 등을 발표, 세계적인 아티스트로서의 입지를 더욱 굳혔습니다.",
      en: "Lisa, a member of BLACKPINK, is a global pop star who has captivated the world with her unrivaled dance skills and rapping. Originally from Thailand, she has transcended the boundaries of K-pop to excel on the world stage. Her 2021 solo tracks 'LALISA' and 'MONEY' swept the Billboard charts. In 2024, she established her own label LLOUD and partnered with RCA Records, releasing tracks like 'ROCKSTAR' and 'New Woman' to further solidify her position as a world-class artist."
    },
    description: {
      ko: "무대를 씹어 먹는 ROCKSTAR, 압도적인 카리스마와 러블리한 매력을 동시에 가진 아티스트입니다.",
      en: "A stage-dominating ROCKSTAR, an artist who possesses both overwhelming charisma and lovely charm."
    },
    tmi: {
      ko: [
        "리사는 사실 엄청난 감자탕 마니아입니다. 태국에 가서도 한국 감자탕이 생각난다고 할 정도입니다.",
        "리사는 본인의 반려견 '러브'와 반려묘들(레오, 루카, 릴리, 루이, 레고)의 이름을 모두 'L'로 시작하게 지었습니다.",
        "리사는 사실 사진 찍히는 것보다 남을 찍어주는 것을 더 좋아하며, 멤버들의 '인생샷' 제조기입니다.",
        "리사는 사실 만화를 볼 때 한국어 자막 없이도 거의 다 이해할 수 있을 만큼 한국어 실력이 완벽합니다.",
        "리사는 사실 잠을 잘 때 눈을 살짝 뜨고 자는 습관이 있어서 멤버들이 가끔 놀랍니다.",
        "리사는 본인의 뱅 헤어(앞머리)에 대한 자부심이 대단하며, 격렬한 춤을 춰도 흐트러지지 않는 비법이 있습니다.",
        "리사는 사실 엄청난 쇼핑광이지만, 물건을 사기 전에 '이게 정말 필요한가?'라고 세 번 고민합니다.",
        "리사는 본인의 좌우명이 'Enjoy your life'이며, 매 순간을 즐겁게 살려고 노력합니다.",
        "리사는 사실 벌레를 세상에서 제일 무서워하지만, 멤버들을 지키기 위해(?) 가끔 용기를 냅니다.",
        "리사는 본인이 무대 위에서 카리스마 넘치는 모습을 볼 때 스스로도 '좀 멋진데?'라고 생각합니다.",
        "리사는 사실 향수 수집가이며, 그날의 기분에 따라 다른 향수를 뿌리는 것이 취미입니다.",
        "리사는 본인의 본명인 '라리사'로 불리는 것을 아주 좋아합니다.",
        "리사는 사실 매운 음식을 아주 잘 먹으며, 불닭볶음면도 가볍게 해치웁니다.",
        "리사는 본인의 긴 다리 때문에 바지를 사면 항상 길이가 짧아서 고민이라고 합니다.",
        "리사는 사실 고향 태국에 가면 가족들과 함께 길거리 음식을 사 먹는 것을 가장 좋아합니다.",
        "리사는 본인이 디자인한 의상을 입고 무대에 서는 것이 꿈 중 하나입니다.",
        "리사는 사실 손재주가 좋아서 망가진 물건을 뚝딱 고치는 능력이 있습니다.",
        "리사는 본인의 팬덤인 블링크를 '나의 힘의 원천'이라고 부르며 지극히 아낍니다.",
        "리사는 사실 잠꼬대로 태국어와 한국어를 섞어서 하는데, 본인은 기억을 못 합니다.",
        "리사는 팬들에게 '리사야 고마워'라는 말을 들을 때 가장 큰 보람을 느낍니다."
      ],
      en: [
        "Lisa is a huge fan of Gamjatang (pork bone soup) and even craves it when she's in Thailand.",
        "She named all her pets starting with the letter 'L': Love (dog) and Leo, Luca, Lily, Louis, Lego (cats).",
        "She prefers taking photos of others rather than being photographed, acting as the members' personal photographer.",
        "Her Korean is so perfect that she can understand almost any variety show or anime without subtitles.",
        "She has a habit of sleeping with her eyes slightly open, which sometimes surprises the other members.",
        "She is very proud of her iconic bangs and has a secret method to keep them from moving during intense dancing.",
        "Despite being a shopping enthusiast, she asks herself 'Do I really need this?' three times before buying.",
        "Her motto is 'Enjoy your life,' and she strives to live every moment happily.",
        "She is terrified of bugs but summons the courage to catch them to protect her members.",
        "She secretly thinks to herself 'That was pretty cool' when watching her own charismatic performances.",
        "She is a perfume collector and enjoys choosing a different scent every day based on her mood.",
        "She loves being called by her full name, Lalisa.",
        "She handles spicy food exceptionally well and can finish a bowl of Buldak noodles with ease.",
        "Due to her long legs, she often struggles with finding pants that are long enough.",
        "When back in Thailand, her favorite activity is eating street food with her family.",
        "One of her dreams is to perform on stage wearing an outfit she designed herself.",
        "She is very handy and has a talent for fixing broken items around the house.",
        "She calls BLINKs her 'source of strength' and cherishes them deeply.",
        "She talks in her sleep using a mix of Thai and Korean but never remembers it the next day.",
        "She feels the most rewarded when she hears fans say 'Lisa, thank you'."
      ]
    },
    news: [
      { title: { ko: "리사, 솔로곡 'ROCKSTAR' 빌보드 글로벌 200 1위", en: "Lisa's 'ROCKSTAR' Tops Billboard Global 200" }, date: "2024.07.09", summary: { ko: "개인 레이블 LLOUD 설립 후 발표한 첫 싱글 'ROCKSTAR'로 글로벌 차트 정상을 차지했습니다.", en: "Topped global charts with 'ROCKSTAR', the first single released after establishing her personal label LLOUD." }, url: "https://news.google.com/search?q=Lisa+ROCKSTAR+Billboard+Record" },
      { title: { ko: "리사, HBO '화이트 로투스' 시즌3 캐스팅", en: "Lisa Cast in HBO's 'The White Lotus' Season 3" }, date: "2024.02.13", summary: { ko: "미국 인기 드라마 시리즈에 출연하며 본격적인 글로벌 연기 활동의 신호탄을 쏘아 올렸습니다.", en: "Set to make her global acting debut by appearing in the popular HBO series." }, url: "https://news.google.com/search?q=Lisa+White+Lotus+Season+3+Cast" },
      { title: { ko: "리사X로살리아, 'New Woman' 콜라보 화제", en: "Lisa X Rosalía 'New Woman' Collaboration Becomes Hot Topic" }, date: "2024.08.16", summary: { ko: "글로벌 팝스타 로살리아와의 협업곡을 발표하며 음악적 외연을 넓혔습니다.", en: "Expanded her musical boundaries by releasing a collaboration track with global pop star Rosalía." }, url: "https://news.google.com/search?q=Lisa+Rosalia+New+Woman" },
      { title: { ko: "리사, MTV VMAs '베스트 K-POP' 수상", en: "Lisa Wins 'Best K-pop' at MTV VMAs" }, date: "2024.09.11", summary: { ko: "'ROCKSTAR'로 다시 한번 MTV 비디오 뮤직 어워즈에서 수상의 영예를 안았습니다.", en: "Honored with the 'Best K-pop' award once again at the MTV Video Music Awards for 'ROCKSTAR'." }, url: "https://news.google.com/search?q=Lisa+MTV+VMAs+2024+Best+Kpop" },
      { title: { ko: "리사, 루이비통의 새로운 글로벌 앰버서더 발탁", en: "Lisa Selected as Louis Vuitton Global Ambassador" }, date: "2024.07.23", summary: { ko: "세계적인 명품 브랜드 루이비통의 얼굴로 발탁되어 글로벌 패션 아이콘의 입지를 굳혔습니다.", en: "Solidified her status as a global fashion icon by becoming the face of Louis Vuitton." }, url: "https://news.google.com/search?q=Lisa+Louis+Vuitton+Ambassador" },
      { title: { ko: "리사 'MONEY', 스포티파이 10억 스트리밍 돌파", en: "Lisa 'MONEY' Surpasses 1B Streams on Spotify" }, date: "2023.09.21", summary: { ko: "K-POP 솔로 아티스트 최초로 스포티파이에서 10억 스트리밍을 달성하는 기염을 토했습니다.", en: "Became the first K-pop solo artist to reach 1 billion streams on Spotify." }, url: "https://news.google.com/search?q=Lisa+MONEY+1B+Spotify" },
      { title: { ko: "리사, 태국 문화부 '특별 공로상' 수상", en: "Lisa Receives Special Merit Award from Thai Ministry of Culture" }, date: "2023.10.03", summary: { ko: "태국 문화를 전 세계에 알린 공로를 인정받아 고국으로부터 특별상을 수여받았습니다.", en: "Awarded a special prize from her home country for promoting Thai culture worldwide." }, url: "https://news.google.com/search?q=Lisa+Thailand+Cultural+Award" },
      { title: { ko: "리사, 빅토리아 시크릿 패션쇼 화려한 무대", en: "Lisa Delivers Stunning Performance at Victoria's Secret Show" }, date: "2024.10.15", summary: { ko: "6년 만에 부활한 빅토리아 시크릿 패션쇼의 오프닝 무대를 장식하며 찬사를 받았습니다.", en: "Received praise for her opening performance at the revived Victoria's Secret Fashion Show." }, url: "https://news.google.com/search?q=Lisa+Victoria+Secret+Show+Performance" },
      { title: { ko: "리사 'LALISA', 유튜브 조회수 7억 뷰 돌파", en: "Lisa 'LALISA' MV Hits 700M Views" }, date: "2024.03.20", summary: { ko: "솔로 데뷔곡 'LALISA'가 꾸준한 인기를 끌며 7억 뷰라는 대기록을 세웠습니다.", en: "Her debut solo track 'LALISA' reached 700 million views on YouTube." }, url: "https://news.google.com/search?q=Lisa+LALISA+700M+Views" },
      { title: { ko: "리사, 글로벌 시티즌 페스티벌 헤드라이너 공연", en: "Lisa Performs as Headliner at Global Citizen Festival" }, date: "2024.09.28", summary: { ko: "뉴욕 센트럴 파크에서 열린 대규모 자선 공연의 헤드라이너로 나서 완벽한 무대를 선보였습니다.", en: "Showcased a perfect stage as a headliner for the large-scale charity concert in NY Central Park." }, url: "https://news.google.com/search?q=Lisa+Global+Citizen+Festival" }
    ],
    members: []
  },
  {
    id: "rose",
    name: { ko: "로제", en: "Rosé" },
    company: "THEBLACKLABEL",
    debut: "2021.03.12",
    fandom: { ko: "블링크", en: "BLINK" },
    accentColor: "#f7d0d0",
    imageUrl: "https://tse1.mm.bing.net/th?q=Rose+Solo+APT+Official+Photo+Bruno+Mars",
    wiki: {
      ko: "블랙핑크의 메인 보컬 로제는 독보적인 음색과 뛰어난 가창력으로 전 세계를 사로잡은 아티스트입니다. 2021년 솔로 앨범 'R'을 통해 'On The Ground'로 빌보드 차트를 휩쓸었으며, 2024년에는 브루노 마스와의 협업곡 'APT.'로 전 세계적인 '아파트' 열풍을 일으킵니다. 현재는 더블랙레이블에 합류하여 첫 정규 앨범 'rosie'를 준비하고 있습니다.",
      en: "Rosé, the main vocalist of BLACKPINK, is an artist who has captivated the world with her unique vocal tone and exceptional singing ability. In 2024, her collaboration with Bruno Mars, 'APT.', sparked a global craze."
    },
    description: {
      ko: "세상에 없던 유니크한 음색, 감성과 실력을 모두 겸비한 차세대 팝 아이콘입니다.",
      en: "A unique vocal tone like no other, a next-generation pop icon combining both emotion and skill."
    },
    tmi: {
      ko: [
        "로제는 사실 쌀국수를 너무 좋아해서 '쌀국수 귀신'이라는 별명이 있습니다.",
        "로제의 반려견 '행크'는 유기견 출신으로 로제가 직접 입양했습니다.",
        "로제는 사실 왼손잡이이지만 기타는 오른손으로 연주합니다.",
        "음식을 먹기 전에 냄새를 아주 길게 맡는 습관이 있습니다.",
        "본명의 한국어 성인 '박'보다 '로젠'으로 불리는 것을 더 좋아합니다.",
        "무대 공포증이 거의 없지만 무대 직전까지 가사를 중얼거립니다.",
        "잠을 잘 때 베개를 꼭 껴안고 자야 잠이 잘 온다고 합니다.",
        "좌우명은 'Do it for the sake of it'입니다.",
        "생로랑 화보 촬영 때 크리에이티브 디렉터의 극찬을 받았습니다.",
        "매운 음식을 좋아하지만 잘 먹지는 못해서 울면서 먹습니다.",
        "금발 머리가 이제는 신체의 일부처럼 느껴진다고 합니다.",
        "요가와 필라테스로 몸매를 관리하며 유연성이 아주 좋습니다.",
        "팬들이 지어준 별명 중 '챙이'를 가장 좋아합니다.",
        "넷플릭스 드라마 정주행을 좋아하며 한번 시작하면 끝을 봅니다.",
        "기타만큼이나 드럼 연주에도 관심이 많아 배우고 있습니다.",
        "계란형 얼굴이라 어떤 모자든 잘 어울린다고 생각합니다.",
        "비행기를 탈 때 항상 개인 노트를 챙겨 가사를 씁니다.",
        "잠귀가 매우 밝아서 작은 소리에도 잘 깹니다.",
        "팬들에게 '네 목소리가 위로가 돼'라는 말을 들을 때 가장 행복해합니다.",
        "브루노 마스와의 작업 중 '아파트 게임'을 직접 가르쳐주었습니다."
      ],
      en: [
        "Rosé is nicknamed the 'Pho Ghost' for her love of Vietnamese noodles.",
        "She personally adopted her rescue dog, Hank.",
        "She is naturally left-handed but plays guitar with her right hand.",
        "She has a habit of smelling food for a long time before eating.",
        "She prefers being called 'Roseanne' over her Korean surname 'Park'.",
        "She mumbles her lyrics until the very second she steps on stage.",
        "She can't sleep properly unless she is hugging a pillow.",
        "Her motto is 'Do it for the sake of it'.",
        "She received high praise from Saint Laurent's creative director.",
        "She loves spicy food but cries while eating it because it's too hot.",
        "She feels like her blonde hair is now a natural part of her body.",
        "She is very flexible thanks to steady yoga and Pilates.",
        "She likes the nickname 'Chaeng-i' the most.",
        "She is a binge-watcher when it comes to Netflix series.",
        "She is learning to play the drums in her spare time.",
        "She thinks her face shape suits almost any type of hat.",
        "She always carries a notebook on flights to write lyrics.",
        "She is a very light sleeper and wakes up at the smallest sounds.",
        "She feels the most touched when fans find comfort in her voice.",
        "She taught Bruno Mars how to play the 'Apartment Game' during their collab."
      ]
    },
    news: [
      { title: { ko: "로제X브루노 마스 'APT.', 전 세계 차트 1위 석권", en: "Rosé X Bruno Mars 'APT.' Tops Global Charts" }, date: "2024.10.18", summary: { ko: "글로벌 팝스타 브루노 마스와의 협업곡으로 전 세계적인 신드롬을 일으켰습니다.", en: "Her collab with Bruno Mars created a global syndrome." }, url: "#" },
      { title: { ko: "로제, 첫 정규 앨범 'rosie' 발매 소식", en: "Rosé Announces First Full Album 'rosie'" }, date: "2024.10.02", summary: { ko: "전곡 작사·작곡에 참여한 정규 앨범으로 돌아옵니다.", en: "Returning with a full album she wrote and composed herself." }, url: "#" },
      { title: { ko: "로제, 더블랙레이블과 매니지먼트 계약", en: "Rosé Signs with THEBLACKLABEL" }, date: "2024.06.18", summary: { ko: "테디가 이끄는 레이블에서 솔로 활동을 이어갑니다.", en: "Continuing solo career under Teddy's label." }, url: "#" },
      { title: { ko: "뉴스 4", en: "News 4" }, date: "2024.01.15", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 5", en: "News 5" }, date: "2024.01.10", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 6", en: "News 6" }, date: "2024.01.05", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 7", en: "News 7" }, date: "2024.01.01", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 8", en: "News 8" }, date: "2023.12.25", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 9", en: "News 9" }, date: "2023.12.20", summary: { ko: "내용", en: "Summary" }, url: "#" },
      { title: { ko: "뉴스 10", en: "News 10" }, date: "2023.12.15", summary: { ko: "내용", en: "Summary" }, url: "#" }
    ],
    members: []
  }
];
