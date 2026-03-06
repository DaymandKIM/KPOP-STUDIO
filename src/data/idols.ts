export interface Socials {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  official?: string;
}

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
  socials?: Socials;
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
  socials?: Socials;
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
    socials: {
      instagram: "https://www.instagram.com/newjeans_official/",
      twitter: "https://twitter.com/NewJeans_ADOR",
      youtube: "https://www.youtube.com/@NewJeans_official",
      tiktok: "https://www.tiktok.com/@newjeans_official"
    },
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
        "다니엘은 웃음 장벽이 0에 수렴해서 멤버들의 아주 작은 농담에도 자지러집니다."
      ],
      en: [
        "The members use cringey nicknames like 'Baby' or 'Princess' at their dorm.",
        "Haerin is suspected of being an actual cat because she stares out windows silently.",
        "Minji had to apologize to the nation for never trying Kalguksu (knife-cut noodles).",
        "Hanni is addicted to spicy Buldak noodles and seeks them out constantly.",
        "Danielle's laughter threshold is basically zero; she laughs at everything."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 소속사 어도어와 전속계약 해지 통보", en: "NewJeans Notifies ADOR of Contract Termination" },
        date: "2026.03.05",
        summary: { ko: "뉴진스 멤버들이 기자회견을 통해 소속사 어도어에 전속계약 해지를 전격 통보하며 독립적인 활동을 선언했습니다.", en: "NewJeans members announced the termination of their exclusive contract with ADOR through a press conference, declaring independent activities." },
        url: "#"
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
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20IVE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%20%EA%B3%A0%ED%99%94%EC%A7%88",
    socials: {
      instagram: "https://www.instagram.com/ivestarship/",
      twitter: "https://twitter.com/IVEstarship",
      youtube: "https://www.youtube.com/@IVEstarship",
      tiktok: "https://www.tiktok.com/@ive.official"
    },
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
        "장원영은 본인의 다리가 너무 길어서 가끔 사진 보정으로 다리 길이를 줄인다고 합니다."
      ],
      en: [
        "The members are very tall with an average height of 169cm.",
        "Jang Wonyoung sometimes shortens her legs in photos because they look too long."
      ]
    },
    news: [
      { title: { ko: "아이브, 두 번째 정규 앨범 발매 임박", en: "IVE to Release 2nd Full Album Soon" }, date: "2026.03.05", summary: { ko: "아이브가 올 여름 정규 앨범으로 컴백을 예고하며 전 세계 팬들의 기대를 모으고 있습니다.", en: "IVE teased a summer comeback with a full album, gathering global fan anticipation." }, url: "#" }
    ],
    members: [
      { id: "anyujin", name: { ko: "안유진", en: "An Yujin" }, role: { ko: "리더/보컬", en: "Leader/Vocal" }, birth: "2003.09.01", mbti: "ISTP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "173cm", bloodType: "A", description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin", socials: { instagram: "https://www.instagram.com/_yujin_an/" } },
      { id: "gaeul", name: { ko: "가을", en: "Gaeul" }, role: { ko: "래퍼", en: "Rapper" }, birth: "2002.09.24", mbti: "ISTJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "164cm", bloodType: "B", description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Gaeul", socials: { instagram: "https://www.instagram.com/gaeul_reall/" } },
      { id: "rei", name: { ko: "레이", en: "Rei" }, role: { ko: "래퍼", en: "Rapper" }, birth: "2004.02.03", mbti: "INFJ", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "169cm", bloodType: "A", description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Rei", socials: { instagram: "https://www.instagram.com/reiny_heart/" } },
      { id: "jangwonyoung", name: { ko: "장원영", en: "Jang Wonyoung" }, role: { ko: "보컬", en: "Vocal" }, birth: "2004.08.31", mbti: "ENFP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "173cm", bloodType: "O", description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung", socials: { instagram: "https://www.instagram.com/for_everyoung10/" } },
      { id: "liz", name: { ko: "리즈", en: "Liz" }, role: { ko: "보컬", en: "Vocal" }, birth: "2004.11.21", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "170cm", bloodType: "AB", description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Liz", socials: { instagram: "https://www.instagram.com/liz.yeyo/" } },
      { id: "leeseo", name: { ko: "이서", en: "Leeseo" }, role: { ko: "보컬", en: "Vocal" }, birth: "2007.02.21", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "166cm", bloodType: "O", description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Leeseo", socials: { instagram: "https://www.instagram.com/eeseoo_/" } }
    ]
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
    socials: {
      instagram: "https://www.instagram.com/aespa_official/",
      twitter: "https://twitter.com/aespa_official",
      youtube: "https://www.youtube.com/@aespa",
      tiktok: "https://www.tiktok.com/@aespa_official"
    },
    wiki: {
      ko: "에스파(aespa)는 SM 엔터테인먼트 소속의 4인조 걸그룹입니다. 독보적인 메타버스 세계관으로 K-POP의 새로운 지평을 열었습니다.",
      en: "aespa is a 4-member girl group under SM Entertainment. They opened a new horizon for K-pop with their unique metaverse worldview."
    },
    description: {
      ko: "메타버스 세계관의 선구자, 독보적인 컨셉과 압도적인 퍼포먼스를 자랑합니다.",
      en: "The pioneers of the metaverse concept, boasting dazzling visuals and elegant performances."
    },
    tmi: {
      ko: [
        "멤버들은 서로의 아바타인 'ae-에스파'를 처음 봤을 때, 생각보다 너무 예뻐서 긴장했다고 합니다."
      ],
      en: [
        "When they first saw their 'ae' avatars, they were so pretty that the members felt pressured."
      ]
    },
    news: [
      { title: { ko: "에스파, 'Supernova' 11주 연속 1위 대기록", en: "aespa's 'Supernova' Achieves 11 Consecutive Weeks at #1" }, date: "2024.08.12", summary: { ko: "역대 최장 기간 1위 기록을 갱신하며 올해 최고의 히트곡으로 등극했습니다.", en: "Broke the record for the longest-running #1 on major charts." }, url: "#" }
    ],
    members: [
      { id: "karina", name: { ko: "카리나", en: "Karina" }, role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper" }, birth: "2000.04.11", mbti: "ENFP", zodiac: { ko: "양자리", en: "Aries" }, height: "168cm", bloodType: "B", description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Karina+High+Res+Photo", socials: { instagram: "https://www.instagram.com/katarinabluu/" } },
      { id: "winter", name: { ko: "윈터", en: "Winter" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" }, birth: "2001.01.01", mbti: "INTJ", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "163cm", bloodType: "A", description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버입니다.", en: "A member with a clear, pure voice and powerful performance skills." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+High+Res+Photo", socials: { instagram: "https://www.instagram.com/imwinter/" } },
      { id: "giselle", name: { ko: "지젤", en: "Giselle" }, role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist" }, birth: "2000.10.30", mbti: "INFJ", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "164cm", bloodType: "O", description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 멤버입니다.", en: "A multilingual intellectual fluent in three languages." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Giselle+High+Res+Photo", socials: { instagram: "https://www.instagram.com/aerichandesu/" } },
      { id: "ningning", name: { ko: "닝닝", en: "Ningning" }, role: { ko: "메인보컬", en: "Main Vocalist" }, birth: "2002.10.23", mbti: "INFP", zodiac: { ko: "천칭자리", en: "Libra" }, height: "161cm", bloodType: "O", description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내입니다.", en: "The youngest member boasting explosive high notes." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Ningning+High+Res+Photo", socials: { instagram: "https://www.instagram.com/imnotningning/" } }
    ]
  },
  {
    id: "bts",
    name: { ko: "방탄소년단", en: "BTS" },
    company: "BIGHIT MUSIC",
    debut: "2013.06.13",
    fandom: { ko: "아미 (ARMY)", en: "ARMY" },
    officialSite: "https://ibighit.com/bts",
    accentColor: "#6e3ab7",
    imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Group+Photo+High+Resolution+2025",
    socials: {
      instagram: "https://www.instagram.com/bts.bighitofficial/",
      twitter: "https://twitter.com/bts_bighit",
      youtube: "https://www.youtube.com/@BTS",
      tiktok: "https://www.tiktok.com/@bts_official_bighit"
    },
    wiki: {
      ko: "방탄소년단(BTS)은 7인조 보이그룹입니다. 전 세계적인 메시지를 던졌으며 빌보드 핫 100 1위를 차지하는 등 글로벌 팝의 아이콘이 되었습니다.",
      en: "BTS is a 7-member boy group. They became global pop icons beyond K-POP."
    },
    description: {
      ko: "21세기 팝 아이콘, 전 세계를 보랏빛으로 물들인 글로벌 슈퍼스타입니다.",
      en: "21st-century pop icons, global superstars who have dyed the world purple."
    },
    tmi: {
      ko: [ "진은 주방 가위로 본인의 앞머리를 직접 자르다가 '레전드 흑역사'를 만든 적이 있습니다." ],
      en: [ "Jin once tried to cut his own bangs with kitchen scissors and created a legendary fail." ]
    },
    news: [
      { "title": { "ko": "BTS 전원 전역 완료, 2025년 완전체 활동 예고", "en": "All BTS Members Complete Military Service" }, "date": "2025.06.13", "summary": { "ko": "방탄소년단 멤버들이 국방의 의무를 모두 마쳤습니다.", "en": "All BTS members have completed their military service." }, "url": "#" }
    ],
    members: [
      { id: "rm", name: { ko: "RM", en: "RM" }, role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper" }, birth: "1994.09.12", mbti: "ENFP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "181cm", bloodType: "A", description: { ko: "팀의 든든한 리더이자 뇌섹남.", en: "The reliable leader and intellectual pillar." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+RM+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/rkive/" } },
      { id: "jin", name: { ko: "진", en: "Jin" }, role: { ko: "서브보컬", en: "Sub Vocalist" }, birth: "1992.12.04", mbti: "INTP", zodiac: { ko: "사수자리", en: "Sagittarius" }, height: "179cm", bloodType: "O", description: { ko: "자타공인 '월드와이드 핸섬'.", en: "Self-proclaimed 'Worldwide Handsome'." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jin+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/jin/" } },
      { id: "suga", name: { ko: "슈가", en: "Suga" }, role: { ko: "리드래퍼", en: "Lead Rapper" }, birth: "1993.03.09", mbti: "ISTP", zodiac: { ko: "물고기자리", en: "Pisces" }, height: "174cm", bloodType: "O", description: { ko: "천재적인 프로듀싱 능력의 소유자.", en: "Possesses genius producing skills." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Suga+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/agustd/" } },
      { id: "j-hope", name: { ko: "제이홉", en: "J-Hope" }, role: { ko: "메인댄서/래퍼", en: "Main Dancer/Rapper" }, birth: "1994.02.18", mbti: "INFJ", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "177cm", bloodType: "A", description: { ko: "팀의 안무 팀장이자 희망.", en: "The choreography leader and the 'Hope' of the group." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+J-Hope+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/uarmyhope/" } },
      { id: "jimin", name: { ko: "지민", en: "Jimin" }, role: { ko: "메인댄서/리드보컬", en: "Main Dancer/Lead Vocalist" }, birth: "1995.10.13", mbti: "ESTP", zodiac: { ko: "천칭자리", en: "Libra" }, height: "174cm", bloodType: "A", description: { ko: "매혹적인 음색과 예술적인 퍼포먼스.", en: "Enchanting vocals and artistic performance." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jimin+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/j.m/" } },
      { id: "v", name: { ko: "뷔", en: "V" }, role: { ko: "서브보컬/리드댄서", en: "Sub Vocalist/Lead Dancer" }, birth: "1995.12.30", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "179cm", bloodType: "AB", description: { ko: "깊은 저음의 소울풀한 목소리와 CG 같은 비주얼.", en: "Deep soulful voice and CG-like visuals." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+V+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/thv/" } },
      { id: "jungkook", name: { ko: "정국", en: "Jungkook" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" }, birth: "1997.09.01", mbti: "ISFP", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "179cm", bloodType: "A", description: { ko: "못하는 게 없는 '황금 막내'.", en: "The 'Golden Maknae' who can do everything." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jungkook+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/jungkook_bighitentertainment/" } }
    ]
  },
  {
    id: "blackpink",
    name: { ko: "블랙핑크", en: "BLACKPINK" },
    officialSite: "https://www.blackpinkofficial.com/",
    company: "YG Entertainment",
    debut: "2016.08.08",
    fandom: { ko: "블링크 (BLINK)", en: "BLINK" },
    accentColor: "#f4a7bb",
    imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Group+Official+Photo+BORN+PINK",
    socials: {
      instagram: "https://www.instagram.com/blackpinkofficial/",
      twitter: "https://twitter.com/BLACKPINK",
      youtube: "https://www.youtube.com/@BLACKPINK",
      tiktok: "https://www.tiktok.com/@bp_tiktok"
    },
    wiki: {
      ko: "블랙핑크(BLACKPINK)는 YG 엔터테인먼트 소속의 4인조 걸그룹입니다. 전 세계에서 가장 영향력 있는 여성 그룹으로 자리매김했습니다.",
      en: "BLACKPINK is a 4-member girl group under YG Entertainment. They are the most influential girl group in the world."
    },
    description: {
      ko: "전 세계를 사로잡은 'Pink'와 'Black'의 조화, 글로벌 팝의 아이콘입니다.",
      en: "The perfect harmony of 'Pink' and 'Black' that captivated the world."
    },
    tmi: {
      ko: [ "멤버들은 식사 메뉴를 정할 때 결정 장애가 오면 사다리 타기나 룰렛 앱을 사용합니다." ],
      en: [ "They use a roulette app or ladder climbing game whenever they can't decide what to eat." ]
    },
    news: [
      { title: { ko: "블랙핑크, 그룹 활동 전격 재계약 체결", en: "BLACKPINK Renews Contract" }, date: "2023.12.06", summary: { ko: "YG 엔터테인먼트와 그룹 활동 전속계약을 체결했습니다.", en: "Signed an exclusive contract with YG Entertainment." }, url: "#" }
    ],
    members: [
      { id: "jisoo", name: { ko: "지수", en: "Jisoo" }, role: { ko: "리드보컬", en: "Lead Vocalist" }, birth: "1995.01.03", mbti: "ISTP", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "162cm", bloodType: "A", description: { ko: "팀의 맏언니이자 비주얼 센터.", en: "The oldest and visual center." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+Official+Portrait", socials: { instagram: "https://www.instagram.com/sooyaaa__/" } },
      { id: "jennie", name: { ko: "제니", en: "Jennie" }, role: { ko: "메인래퍼/리드보컬", en: "Main Rapper/Lead Vocalist" }, birth: "1996.01.16", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "163cm", bloodType: "B", description: { ko: "팀의 메인 래퍼로 독보적인 아우라를 가졌습니다.", en: "The main rapper with a unique aura." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+Official+Portrait", socials: { instagram: "https://www.instagram.com/jennierubyjane/" } },
      { id: "lisa", name: { ko: "리사", en: "Lisa" }, role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper" }, birth: "1997.03.27", mbti: "ESFJ", zodiac: { ko: "양자리", en: "Aries" }, height: "167cm", bloodType: "O", description: { ko: "압도적인 춤 실력과 비율을 가진 팀의 메인 댄서.", en: "The main dancer with overwhelming dance skills." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+Official+Portrait", socials: { instagram: "https://www.instagram.com/lalalalisa_m/" } },
      { id: "rose", name: { ko: "로제", en: "Rosé" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" }, birth: "1997.02.11", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "168cm", bloodType: "B", description: { ko: "유니크한 음색을 가진 메인 보컬.", en: "The main vocalist with a unique tone." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Official+Portrait", socials: { instagram: "https://www.instagram.com/roses_are_rosie/" } }
    ]
  }
];