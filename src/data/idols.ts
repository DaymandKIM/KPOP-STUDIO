export interface Socials {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  facebook?: string;
  tiktok?: string;
  official?: string;
}

export interface LocalizedString {
  ko: string;
  en: string;
  ja?: string;
  zh?: string;
  es?: string;
  id?: string;
  fr?: string;
  hi?: string;
  pt?: string;
  ar?: string;
  th?: string;
  vi?: string;
  ru?: string;
  [key: string]: string | undefined;
}

export interface LocalizedArray {
  ko: string[];
  en: string[];
  ja?: string[];
  zh?: string[];
  es?: string[];
  id?: string[];
  fr?: string[];
  hi?: string[];
  pt?: string[];
  ar?: string[];
  th?: string[];
  vi?: string[];
  ru?: string[];
  [key: string]: string[] | undefined;
}

export interface Member {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  birth: string;
  mbti: string;
  zodiac: LocalizedString;
  height: string;
  bloodType: string;
  description: LocalizedString;
  imageUrl: string;
  tmi?: LocalizedArray;
  socials?: Socials;
}

export interface News {
  title: LocalizedString;
  date: string;
  summary: LocalizedString;
  url: string;
}

export interface KpopGroup {
  id: string;
  name: LocalizedString;
  company: string;
  debut: string;
  fandom: LocalizedString;
  officialSite?: string;
  accentColor: string;
  imageUrl: string;
  wiki: LocalizedString;
  description: LocalizedString;
  tmi: LocalizedArray;
  news: News[];
  members: Member[];
  socials?: Socials;
}

export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: "newjeans",
    name: { ko: "뉴진스", en: "NewJeans", ja: "ニュージーンズ", zh: "NewJeans", es: "NewJeans", id: "NewJeans", fr: "NewJeans", hi: "न्यूजींस (NewJeans)", pt: "NewJeans", ar: "نيوجينز (NewJeans)", th: "นิวจีนส์ (NewJeans)", vi: "NewJeans", ru: "NewJeans" },
    officialSite: "https://newjeans.kr/",
    company: "ADOR",
    debut: "2022.07.22",
    fandom: { ko: "버니즈 (Bunnies)", en: "Bunnies", ja: "バニーズ (Bunnies)", zh: "Bunnies (兔子)", es: "Bunnies", id: "Bunnies", fr: "Bunnies", hi: "बनीज़ (Bunnies)", pt: "Bunnies", ar: "بونيز (Bunnies)", th: "บันนี่ส์ (Bunnies)", vi: "Bunnies", ru: "Bunnies" },
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
        "뉴진스라는 이름은 매일 찾게 되고 언제 입어도 질리지 않는 '청바지(Jeans)'처럼 시대의 아이콘이 되겠다는 의미를 담고 있습니다.",
        "데뷔 전 멤버들은 민희진 전 대표의 집에서 함께 영화를 보고 밥을 먹으며 유대감을 쌓았다고 합니다.",
        "멤버 전원이 영어를 유창하게 구사하거나 수준급의 소통 능력을 갖추고 있어 해외 인터뷰 시 통역 없이 진행하는 경우가 많습니다.",
        "뉴진스 숙소는 '버니하우스'라고 불릴 만큼 멤버들이 서로 붙어 다니며 끈끈한 자매애를 과시합니다.",
        "뉴진스의 'Hype Boy'는 데뷔 전 티저 영상만으로 음원 차트를 역주행해 데뷔 전부터 신드롬이 된 전무후무한 기록입니다."
      ],
      en: [
        "The name NewJeans means becoming icons of the era like 'Jeans' that never go out of style.",
        "Before debut, members bonded at former CEO Min Hee-jin's home, watching movies and eating together.",
        "All members have excellent English communication skills, often conducting global interviews without interpreters.",
        "'Hype Boy' charted on Korean music charts from pre-release teasers alone — a historic first.",
        "Members are so close they're often described as actual sisters, not just groupmates."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 'Attention'으로 데뷔 즉시 역주행 신드롬", en: "NewJeans Debut 'Attention' Becomes Instant Reverse-Charting Phenomenon" },
        date: "2022.07.22",
        summary: { ko: "뉴진스가 데뷔곡 'Attention'과 'Hype Boy'로 발매 즉시 음원차트 상위권을 휩쓸며 4세대 팝 신드롬의 서막을 열었습니다.", en: "NewJeans swept the charts immediately upon debut with 'Attention' and 'Hype Boy', heralding a new 4th-gen pop syndrome." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 'Ditto', 멜론 역대 최장 1위 기록 경신", en: "NewJeans 'Ditto' Breaks Record for Longest No.1 on Melon Chart" },
        date: "2023.01.30",
        summary: { ko: "'Ditto'가 멜론 차트에서 수십 주 연속 1위를 기록하며 역대 최장 기간 1위 기록을 새로 썼습니다.", en: "'Ditto' rewrote history by topping the Melon chart for a record-breaking consecutive streak." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 미니 2집 'Get Up', 빌보드 200 데뷔 1위", en: "NewJeans Mini Album 'Get Up' Debuts at No.1 on Billboard 200" },
        date: "2023.08.05",
        summary: { ko: "미니 2집 'Get Up'이 빌보드 200 차트 정상에 오르며 K-팝 걸그룹 역대 최고 데뷔 성적을 기록했습니다.", en: "Mini album 'Get Up' debuted at #1 on the Billboard 200, marking the highest debut for a K-pop girl group album." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 일본 공식 데뷔… 오리콘 1위 석권", en: "NewJeans Makes Official Japan Debut, Tops Oricon Chart" },
        date: "2023.08.16",
        summary: { ko: "일본 공식 데뷔 앨범이 오리콘 주간 앨범 차트 1위를 기록하며 J-팝 시장에 성공적으로 안착했습니다.", en: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 'How Sweet', 전 세계 동시 발매 후 글로벌 차트 장악", en: "NewJeans 'How Sweet' Dominates Global Charts Upon Release" },
        date: "2024.05.24",
        summary: { ko: "신보 'How Sweet'가 멜론·스포티파이 등 국내외 차트를 동시에 점령하며 변함없는 영향력을 증명했습니다.", en: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 도쿄돔 단독 팬미팅 4만 석 전석 매진", en: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting" },
        date: "2024.06.26",
        summary: { ko: "일본 최대 공연장 도쿄돔에서 단독 팬미팅을 개최, 4만 석을 전석 매진시키며 아시아 최정상 걸그룹임을 입증했습니다.", en: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group." },
        url: "#"
      },
      {
        title: { ko: "어도어 이사회, 민희진 대표이사 해임 의결", en: "ADOR Board Votes to Dismiss CEO Min Hee-jin" },
        date: "2024.08.27",
        summary: { ko: "하이브와 민희진 전 대표 간 경영권 분쟁 끝에 어도어 이사회가 민희진 대표 해임을 의결했습니다.", en: "Following a management dispute between HYBE and Min Hee-jin, the ADOR board voted to dismiss her as CEO." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 어도어에 전속계약 해지 통보 기자회견", en: "NewJeans Holds Press Conference Announcing Contract Termination with ADOR" },
        date: "2024.11.13",
        summary: { ko: "뉴진스 5인이 생방송 기자회견을 열어 어도어와의 전속계약 해지를 공식 통보하며 독립 의지를 밝혔습니다.", en: "All five NewJeans members held a live press conference to officially announce the termination of their exclusive contract with ADOR." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 자체 레이블 'NJS' 설립 발표", en: "NewJeans Announces Launch of Independent Label 'NJS'" },
        date: "2025.02.10",
        summary: { ko: "뉴진스 멤버들이 직접 운영하는 자체 레이블 'NJS'를 설립하고 독립적인 아티스트 활동을 본격 시작한다고 발표했습니다.", en: "The NewJeans members announced the establishment of their own label 'NJS' and the beginning of fully independent activities." },
        url: "#"
      },
      {
        title: { ko: "버니즈, 뉴진스 지지 대규모 트럭 시위 캠페인 전개", en: "Bunnies Launch Massive Truck Campaign in Support of NewJeans" },
        date: "2026.03.06",
        summary: { ko: "전국 팬덤 버니즈가 뉴진스의 권익 보호를 촉구하는 대규모 트럭 시위를 전국 주요 도시에서 동시에 진행했습니다.", en: "Bunnies nationwide launched a massive truck campaign in major cities simultaneously, calling for the protection of NewJeans' rights." },
        url: "#"
      }
    ],
    members: [
      {
        id: "minji",
        name: { ko: "민지", en: "Minji" },
        role: { ko: "리더/보컬/댄서", en: "Leader/Vocalist/Dancer" },
        birth: "2004.05.07",
        mbti: "ESTJ",
        zodiac: { ko: "황소자리", en: "Taurus" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "고전적인 미인형으로 '국민 첫사랑' 이미지를 가졌으며 책임감이 강한 성격입니다.", en: "A classic beauty with a 'Nation's First Love' image and a strong sense of responsibility." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Minji+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "팀의 공식 맏언니로, 멤버들 생일과 좋아하는 음식을 모두 꿰고 있는 철저한 리더입니다.",
            "칼국수를 한 번도 먹어본 적이 없다고 밝혀 팬들이 '민지 칼국수 먹이기 프로젝트'를 진행할 정도로 화제가 되었습니다.",
            "루이비통 글로벌 앰버서더로 파리 패션위크에 참석해 전 세계 패션 매체의 스포트라이트를 한 몸에 받았습니다.",
            "손 편지 쓰기를 즐기며 팬들에게 직접 손글씨로 메시지를 쓰는 것으로 유명합니다.",
            "학창시절 학생회장을 역임할 정도로 리더십이 뛰어나며, 그 성향이 데뷔 후에도 그대로 이어지고 있습니다."
          ],
          en: [
            "As the official team leader, she memorizes every member's birthday and favorite foods.",
            "She famously revealed she'd never eaten kalguksu (knife-cut noodles), sparking fan campaigns to get her to try it.",
            "As a Louis Vuitton global ambassador, she attended Paris Fashion Week and became the center of worldwide media attention.",
            "She loves writing handwritten letters and is known for sending personal notes to fans.",
            "She served as student council president in school — a leadership style that carries directly into her role as NewJeans' leader."
          ]
        }
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
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Hanni+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "베트남계 호주인으로 영어·한국어·베트남어를 모두 유창하게 구사하는 3개 국어 능통자입니다.",
            "연습생 시절 데뷔 전에 이미 'Hype Boy' 가사 작업에 아이디어를 제안하며 음악적 재능을 뽐냈습니다.",
            "한국 생활 초반 불닭볶음면의 매력에 빠져 '매운 음식 마니아'가 되었으며 지금도 틈만 나면 찾는다고 합니다.",
            "2024년 유엔총회 '아동 권리' 관련 행사에 참석해 K-팝 스타 이상의 영향력을 보여줬습니다.",
            "호주에서 K-팝 팬으로 오디션에 도전해 합격한 '덕업일치'의 주인공이며, 팬들과의 소통을 가장 적극적으로 즐깁니다."
          ],
          en: [
            "She is Vietnamese-Australian and fluently speaks English, Korean, and Vietnamese.",
            "Before debut, she contributed lyric ideas to 'Hype Boy' during trainee days, showing her musical instincts early.",
            "She became a certified spicy food addict after encountering Korean buldak noodles and still seeks them out constantly.",
            "She attended a UN General Assembly event on children's rights in 2024, demonstrating her influence beyond K-pop.",
            "She's a true fan-turned-idol: she was a K-pop fan in Australia before auditioning and getting in."
          ]
        }
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
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Danielle+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "한국-호주 이중 국적자로 유창한 영어 실력 덕분에 해외 인터뷰를 단독으로 소화하는 경우가 많습니다.",
            "어릴 때부터 디즈니 애니메이션에 푹 빠져 지금도 OST를 즐겨 듣는다고 하며, 팬들에게 '디즈니 공주'라 불립니다.",
            "웃음이 넘쳐 멤버들의 아주 사소한 농담에도 쓰러질 정도로 웃어서 '웃음 역대급 보유자'로 통합니다.",
            "버버리 글로벌 앰버서더로 발탁되어 패션 업계에서도 큰 주목을 받고 있습니다.",
            "긍정 에너지가 넘쳐 방송 출연 때마다 '비타민 같은 존재'라는 평을 빠짐없이 받습니다."
          ],
          en: [
            "As a Korean-Australian dual citizen, her fluent English means she often handles international interviews solo.",
            "She grew up obsessed with Disney animation and still listens to Disney OSTs — earning her the nickname 'Disney Princess' from fans.",
            "Her laughter threshold is basically zero; even tiny jokes send her collapsing, earning her the title 'legendary laugher'.",
            "She was appointed as a Burberry global ambassador, gaining major recognition in the fashion industry.",
            "Her overflowing positivity earns her the description 'living vitamin' every single time she appears on broadcast."
          ]
        }
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
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Haerin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "고양이 눈매가 트레이드마크인데, 실제로도 고양이를 매우 좋아하고 고양이처럼 행동한다고 멤버들이 입을 모읍니다.",
            "창밖을 멍하니 바라보는 습관이 있어 멤버들이 '진짜 고양이가 아닐까' 반농담으로 의심합니다.",
            "말수가 적고 조용한 일상과 달리 무대에서는 180도 다른 강렬한 에너지를 폭발시켜 팬들을 매번 놀라게 합니다.",
            "멤버들 중 게임을 가장 좋아해서 숙소에서 자주 혼자 게임을 즐기다 발견된다고 합니다.",
            "어릴 때부터 다양한 댄스 장르를 익혔으며 특히 힙합 댄스에 뛰어난 재능이 있다고 알려져 있습니다."
          ],
          en: [
            "Her cat-like eye shape is iconic, and members all agree she genuinely acts like a cat too.",
            "She has a habit of silently staring out windows, leading members to half-jokingly suspect she might actually be a cat.",
            "Her quiet, reserved off-stage persona is the complete opposite of the explosive energy she unleashes on stage.",
            "She's the member most into gaming and is often found playing games alone at the dorm.",
            "She trained in multiple dance genres from a young age and is known for a particular talent in hip-hop dance."
          ]
        }
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
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Hyein+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "데뷔 당시 만 14세로 역대급 최연소 아이돌 반열에 들었으며, 170cm의 키로 언니들을 넘어서는 압도적인 비율을 자랑합니다.",
            "과거 키즈 모델로 활동하며 공개적으로 BTS의 열렬한 팬임을 밝힌 '성공한 덕후'입니다.",
            "나이답지 않게 시크하고 차가운 분위기를 풍기지만, 실제로는 언니들에게 치근덕거리는 귀여운 막내입니다.",
            "루이비통 앰버서더로 파리 패션위크 런웨이를 당당히 걸어 패션 업계를 깜짝 놀라게 했습니다.",
            "그림 그리기를 좋아하며 직접 그린 일러스트를 팬들에게 공개해 예술적 재능도 인정받고 있습니다."
          ],
          en: [
            "She debuted at age 14 as one of the youngest idols ever, yet stands taller than most of her members at 170cm.",
            "She was a successful BTS fan before becoming an idol — a publicly-announced 'fan-turned-star' story.",
            "Her chic, cold aura is completely at odds with her actual clingy, cute maknae behavior around the older members.",
            "As a Louis Vuitton ambassador, she walked at Paris Fashion Week and stunned the fashion world.",
            "She loves drawing and has shared original illustrations with fans, earning recognition for her artistic talent too."
          ]
        }
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
    socials: { instagram: "https://www.instagram.com/ivestarship/", twitter: "https://twitter.com/IVEstarship", youtube: "https://www.youtube.com/@IVEstarship", tiktok: "https://www.tiktok.com/@ive.official" },
    wiki: { ko: "아이브(IVE)는 스타쉽 엔터테인먼트 소속 6인조 걸그룹입니다. 'I HAVE'의 줄임말로, 우리가 가진 것들을 당당하게 보여주겠다는 포부를 담고 있습니다.", en: "IVE is a 6-member girl group under Starship Entertainment. The name stands for 'I HAVE'." },
    description: { ko: "주체적인 '자기애'를 노래하는 4세대 완성형 걸그룹, 눈부신 비주얼과 우아한 퍼포먼스를 자랑합니다.", en: "The complete 4th-gen girl group singing about independent 'self-love'." },
    tmi: {
      ko: [
        "아이브 멤버들의 평균 키는 약 169cm로 K-팝 걸그룹 중에서도 단연 손꼽히는 '장신 그룹'입니다.",
        "아이브(IVE)라는 이름은 'I HAVE'의 줄임말로, 우리가 이미 가진 것들을 당당하게 보여주겠다는 포부를 담고 있습니다.",
        "'Love Dive', 'After LIKE', 'I AM' 등 연속 히트 행진으로 데뷔 1년 만에 주요 연말 시상식을 모조리 석권했습니다.",
        "멤버 중 안유진, 장원영은 아이즈원 출신이라 데뷔 전부터 이미 국내외에 탄탄한 팬층을 확보한 상태였습니다.",
        "아이브 팬덤 이름 'DIVE'는 'I + V + E'의 알파벳을 조합한 것으로, 팬과 아티스트가 함께 잠수해 깊이 연결된다는 의미입니다."
      ],
      en: [
        "IVE members have an average height of ~169cm, making them one of K-pop's tallest girl groups.",
        "The name IVE stands for 'I HAVE', embodying the confidence to show off what they already possess.",
        "They swept major year-end awards within just one year of debut with consecutive hits.",
        "Members Yujin and Wonyoung already had global fan bases from their IZ*ONE days before IVE even debuted.",
        "The fandom name 'DIVE' combines the letters I, V, E — symbolizing fans and artists diving deep together."
      ]
    },
    news: [
      { title: { ko: "아이브, 데뷔곡 'ELEVEN'으로 각종 신인상 석권", en: "IVE Sweeps Rookie Awards with Debut Song 'ELEVEN'" }, date: "2021.12.01", summary: { ko: "스타쉽 엔터테인먼트의 신인 걸그룹 아이브가 데뷔와 동시에 폭발적인 반응을 얻으며 각종 신인상을 휩쓸었습니다.", en: "Starship Entertainment's rookie girl group IVE exploded upon debut, sweeping all major rookie awards." }, url: "#" },
      { title: { ko: "아이브 'Love Dive', 역대급 스트리밍 기록으로 연속 1위", en: "IVE 'Love Dive' Tops Charts with Record-Breaking Streaming Numbers" }, date: "2022.04.05", summary: { ko: "'Love Dive'가 음원 차트를 장기 석권하며 아이브를 4세대 대표 걸그룹으로 완벽히 자리매김하게 했습니다.", en: "'Love Dive' dominated the charts for weeks, fully establishing IVE as the defining 4th-gen girl group." }, url: "#" },
      { title: { ko: "아이브 'After LIKE', 국내외 차트 동시 정복", en: "IVE 'After LIKE' Conquers Domestic and Global Charts" }, date: "2022.08.22", summary: { ko: "세 번째 싱글 'After LIKE'가 스포티파이 글로벌 차트에 진입하며 아이브의 글로벌 영향력을 확인시켜 주었습니다.", en: "Their third single 'After LIKE' entered the Spotify global charts, confirming IVE's global reach." }, url: "#" },
      { title: { ko: "아이브, 2022 MAMA 올해의 가수·신인상 동시 수상", en: "IVE Wins Artist of the Year and Best New Artist at 2022 MAMA" }, date: "2022.11.30", summary: { ko: "데뷔 1년 만에 올해의 가수상과 신인상을 동시에 수상하는 전무후무한 기록을 세웠습니다.", en: "They set an unprecedented record by winning both Artist of the Year and Best New Artist in a single year." }, url: "#" },
      { title: { ko: "아이브 'I AM', 음원·음반 더블 1위 달성", en: "IVE 'I AM' Achieves Double No.1 on Music and Album Charts" }, date: "2023.04.10", summary: { ko: "EP 'I've IVE' 타이틀 곡 'I AM'이 음원·음반 차트를 동시에 석권하며 아이브의 전성기를 이어갔습니다.", en: "The title track 'I AM' from EP 'I've IVE' swept both digital and physical charts simultaneously." }, url: "#" },
      { title: { ko: "아이브, 첫 번째 월드투어 'SHOW WHAT I HAVE' 개최", en: "IVE Kicks Off First World Tour 'SHOW WHAT I HAVE'" }, date: "2023.10.14", summary: { ko: "아시아·북미·유럽을 아우르는 첫 월드투어를 성공적으로 론칭하며 글로벌 팬들과 직접 만났습니다.", en: "Successfully launched their first world tour spanning Asia, North America, and Europe, meeting global fans in person." }, url: "#" },
      { title: { ko: "장원영, 파리 패션위크에서 독보적 존재감 과시", en: "Jang Wonyoung Commands Paris Fashion Week" }, date: "2024.03.01", summary: { ko: "레페토 앰버서더로 파리 패션위크에 참석, 국내외 수천 개 매체의 집중 조명을 한 몸에 받았습니다.", en: "As a Repetto ambassador, she attended Paris Fashion Week and was spotlighted by thousands of global outlets." }, url: "#" },
      { title: { ko: "아이브 'IVE SWITCH', 컴백 첫날 음원 올킬", en: "IVE 'IVE SWITCH' Achieves All-Kill on Return Day" }, date: "2024.03.27", summary: { ko: "정규 1집 수록곡 전체가 음원 차트 상위권을 점령하는 '올킬'을 달성하며 건재함을 과시했습니다.", en: "Every track on the first full album charted in the top spots, achieving an all-kill on release day." }, url: "#" },
      { title: { ko: "아이브 멤버 전원, 글로벌 뷰티·패션 브랜드 앰버서더 선정", en: "All IVE Members Named Global Beauty and Fashion Brand Ambassadors" }, date: "2024.08.01", summary: { ko: "멤버 전원이 각각 다른 글로벌 브랜드의 앰버서더로 활동하며 K-팝을 넘어 패션·뷰티 아이콘으로 자리매김했습니다.", en: "Each member was appointed as a global ambassador for a different major brand, transcending K-pop to become fashion and beauty icons." }, url: "#" },
      { title: { ko: "아이브, 정규 2집으로 2026년 컴백 예고", en: "IVE Announces 2026 Comeback with 2nd Full Album" }, date: "2026.03.05", summary: { ko: "아이브가 두 번째 정규 앨범 준비를 공식 발표하며 전 세계 팬들의 기대감을 최고조로 끌어올렸습니다.", en: "IVE officially announced the preparation of their second full album, building anticipation among global fans." }, url: "#" }
    ],
    members: [
      {
        id: "anyujin",
        name: { ko: "안유진", en: "An Yujin" },
        role: { ko: "리더/보컬", en: "Leader/Vocalist" },
        birth: "2003.09.01", mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "A",
        description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "아이즈원 출신으로 IVE에서도 자연스럽게 리더를 맡게 되었으며, 두 팀 모두에서 팬들의 열렬한 사랑을 받고 있습니다.",
            "예능 프로그램마다 '예능 치트키'로 불릴 만큼 자연스러운 재치와 입담을 자랑하지만, 정작 본인은 '그냥 솔직한 것뿐'이라고 합니다.",
            "처녀자리 특유의 완벽주의 성향으로 연습 영상을 반복 재생하며 개선점을 찾는 것으로 유명합니다.",
            "실제로는 멤버들 중 장난기가 가장 많아 '안댕댕'이라는 귀여운 별명으로 불리며 뒤에서 몰래 장난을 칩니다.",
            "한국 전통 식품 브랜드 앰버서더로 활동하며 요리에도 관심이 많아 직접 만든 음식을 멤버들과 나누기도 합니다."
          ],
          en: [
            "As a former IZ*ONE member, she naturally became IVE's leader too — earning devoted fans across both groups.",
            "She's nicknamed the 'variety show cheat code' for her natural wit, though she insists she's 'just being honest'.",
            "A true perfectionist, she rewinds rehearsal footage repeatedly to find and fix imperfections.",
            "Off-camera, she's the most mischievous member — nicknamed 'An-Puppy' for sneaking pranks on her members.",
            "She's a brand ambassador for Korean food products and actually enjoys cooking, often sharing homemade dishes with her members."
          ]
        },
        socials: { instagram: "https://www.instagram.com/_yujin_an/" }
      },
      {
        id: "gaeul",
        name: { ko: "가을", en: "Gaeul" },
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist" },
        birth: "2002.09.24", mbti: "ISTJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "164cm", bloodType: "B",
        description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Gaeul+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "실제로 가을(秋)에 태어났기 때문에 '가을'이라는 이름이 붙었고, 팬들에게 '가을선배'라는 애칭으로 불립니다.",
            "팀의 맏언니지만 가끔 막내 이서보다 더 어려 보인다는 이야기를 들어서 '역대 가장 어린 맏언니' 인증을 받기도 합니다.",
            "독특하고 매력적인 낮은 랩 보이스가 트레이드마크로, 팬들 사이에서 '목소리만으로 구분 가능한 멤버'로 통합니다.",
            "학창 시절 공부를 매우 열심히 한 '공부 잘하는 아이돌'로 알려져 있으며, 독서를 즐기는 취미도 있습니다.",
            "패션 감각이 뛰어나 사복 스타일이 항상 팬들 사이에서 큰 화제가 되며 다양한 브랜드의 러브콜을 받고 있습니다."
          ],
          en: [
            "She was literally named 'Gaeul' (Autumn) because she was born in fall — fans call her 'Gaeul Sunbae' as an affectionate title.",
            "Despite being the oldest, she sometimes looks younger than the maknae Leeseo, earning her the title 'youngest-looking unnie ever'.",
            "Her distinctively deep, husky rap voice is her trademark — fans say she's 'identifiable by voice alone'.",
            "She's known as the studious idol who worked hard academically, and she still enjoys reading as a hobby.",
            "Her personal fashion sense is always a trending topic, and multiple brands have come calling for collaborations."
          ]
        },
        socials: { instagram: "https://www.instagram.com/gaeul_reall/" }
      },
      {
        id: "rei",
        name: { ko: "레이", en: "Rei" },
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist" },
        birth: "2004.02.03", mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "169cm", bloodType: "A",
        description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Rei+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "일본 아이치현 출신으로, 한국어를 매우 유창하게 구사해 '사실상 한국인'이라는 별명과 함께 '김레이'로 불립니다.",
            "귀여운 외모와 달리 독특하고 엉뚱한 발언으로 멤버들을 자주 당황하게 만드는 예측 불허 캐릭터입니다.",
            "일본 팬들에게 특히 큰 사랑을 받으며 일본 공연 때마다 일본어로 직접 팬들에게 메시지를 전달합니다.",
            "K-팝을 보고 아이돌이 되기로 결심해 혼자 한국에 건너온 의지의 멤버로, 그 용기를 팬들이 높이 평가합니다.",
            "직접 가사 아이디어를 제안할 정도로 음악적 감각이 뛰어나며, 작사·작곡에 관심이 많습니다."
          ],
          en: [
            "From Aichi, Japan, she speaks Korean so fluently she's nicknamed 'Kim Rei' — essentially 'honorary Korean'.",
            "Her cute appearance hides an unpredictable, quirky wit that regularly catches her members off guard.",
            "She's especially beloved by Japanese fans and always delivers personal messages in Japanese at Japan concerts.",
            "She made the bold decision alone to move to Korea to become a K-pop idol, a resolve fans deeply admire.",
            "She contributes lyric ideas and has a strong interest in writing and composing her own music."
          ]
        },
        socials: { instagram: "https://www.instagram.com/reiny_heart/" }
      },
      {
        id: "jangwonyoung",
        name: { ko: "장원영", en: "Jang Wonyoung" },
        role: { ko: "센터/보컬", en: "Center/Vocalist" },
        birth: "2004.08.31", mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "O",
        description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "아이즈원 활동 당시부터 센터를 맡아 IVE에서도 자연스럽게 '천생 센터'로 자리매김했습니다.",
            "173cm의 큰 키와 긴 다리로 '걸어다니는 비율 교과서'라 불리며 팬들이 모델 화보를 연상케 한다고 합니다.",
            "스스로 '럭키비키(Lucky Vicky)'라는 긍정 마인드셋을 주창해 전 세계 팬들에게 큰 공감과 사랑을 받았습니다.",
            "레페토, 로레알 등 다수의 글로벌 명품·뷰티 브랜드 앰버서더로 활동하며 K-팝 아이콘 이상의 영향력을 발휘하고 있습니다.",
            "카페 투어, 쇼핑 등 평범한 일상을 즐기는 20대로, 이를 공개할 때마다 팬들이 '나와 같은데 왜 이렇게 예쁘냐'고 반응합니다."
          ],
          en: [
            "She was the center in IZ*ONE and naturally became IVE's 'born center' as well — the role seems made for her.",
            "At 173cm with endlessly long legs, she's called a 'walking textbook of proportions', evoking supermodel comparisons.",
            "She coined the personal philosophy 'Lucky Vicky' — a radically positive mindset — that earned global fan love and went viral.",
            "She serves as ambassador for Repetto, L'Oréal, and other global luxury and beauty brands, wielding influence far beyond K-pop.",
            "She enjoys normal 20-something activities like café-hopping and shopping, making fans say 'why are you so beautiful doing normal things?'"
          ]
        },
        socials: { instagram: "https://www.instagram.com/for_everyoung10/" }
      },
      {
        id: "liz",
        name: { ko: "리즈", en: "Liz" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2004.11.21", mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "170cm", bloodType: "AB",
        description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Liz+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "맑고 선명한 보조개가 대표적인 트레이드마크로, 팬들에게 '보조개 요정'이라는 별명으로 불립니다.",
            "고음에서도 흔들리지 않는 안정적인 가창력으로 팀의 보컬 핵심을 맡고 있으며 라이브 실력이 특히 뛰어납니다.",
            "먹방을 즐겨해서 방송에서 맛있게 먹는 모습이 자주 포착되며, 팬들 사이에서 '리즈 먹방'이 인기 콘텐츠입니다.",
            "버블티를 매우 좋아해서 숙소 근처 버블티 카페 단골로 알려져 있으며, 팬들이 종종 그곳을 '성지'로 방문합니다.",
            "패션에 관심이 많아 개인 스타일링에 많은 공을 들이며, 사복 코디가 항상 팬들의 관심을 받습니다."
          ],
          en: [
            "Her bright, prominent dimples are her trademark — fans call her 'Dimple Fairy'.",
            "Her powerfully stable vocals, especially in high notes, make her the vocal backbone of IVE — her live performances are a highlight.",
            "She loves mukbang content and is frequently caught eating enthusiastically on camera, making 'Liz mukbang' a fan-favorite content genre.",
            "She's a regular at a bubble tea shop near the dorm, so fans have turned it into a 'pilgrimage spot'.",
            "She puts significant effort into personal styling and her off-duty fashion choices consistently captivate fans."
          ]
        },
        socials: { instagram: "https://www.instagram.com/liz.yeyo/" }
      },
      {
        id: "leeseo",
        name: { ko: "이서", en: "Leeseo" },
        role: { ko: "보컬/막내", en: "Vocalist/Maknae" },
        birth: "2007.02.21", mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "166cm", bloodType: "O",
        description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Leeseo+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "아이브의 막내지만 또래보다 훨씬 침착하고 성숙한 언행으로 팬들이 '막내 맞냐'고 자주 놀랍니다.",
            "영어 실력이 뛰어나 해외 인터뷰에서 언니들을 돕는 '팀 소통 담당'을 자처하기도 합니다.",
            "어릴 때부터 춤과 노래를 즐겼으며 연습 기간에 비해 이미 능숙한 퍼포머로 성장한 점이 인정받고 있습니다.",
            "애교가 풍부하고 언니들에게 치근덕거리는 귀여운 막내 모습과 무대 위 강인한 모습의 반전이 매력입니다.",
            "학교를 다니면서도 데뷔한 특이한 케이스로, 등교하는 이서를 목격한 팬들이 '일반 학생 같다'며 신기해한다는 일화가 있습니다."
          ],
          en: [
            "She's IVE's maknae but carries herself with a maturity far beyond her age — fans constantly ask 'wait, she's the youngest?'",
            "Her strong English skills mean she often steps up to help her members during international interviews.",
            "Despite her young training history, she's already a polished performer — something the industry has taken note of.",
            "The gap between her powerful stage presence and her clingy, affectionate maknae behavior off-stage is an endless source of fan delight.",
            "She debuted while still attending school — fans who spot her commuting are always surprised by how 'normal student' she looks."
          ]
        },
        socials: { instagram: "https://www.instagram.com/eeseoo_/" }
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
    accentColor: "#7b46d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Group+High+Resolution+Photo+2024",
    socials: { instagram: "https://www.instagram.com/aespa_official/", twitter: "https://twitter.com/aespa_official", youtube: "https://www.youtube.com/@aespa", tiktok: "https://www.tiktok.com/@aespa_official" },
    wiki: { ko: "에스파(aespa)는 SM 엔터테인먼트 소속의 4인조 걸그룹입니다. 독보적인 메타버스 세계관으로 K-POP의 새로운 지평을 열었습니다.", en: "aespa is a 4-member girl group under SM Entertainment." },
    description: { ko: "메타버스 세계관의 선구자, 독보적인 컨셉과 압도적인 퍼포먼스를 자랑합니다.", en: "The pioneers of the metaverse concept." },
    tmi: {
      ko: [
        "에스파의 세계관에는 멤버 각자의 AI 아바타인 'ae-멤버명'이 존재하며, 처음 자신의 아바타를 본 멤버들이 '너무 예뻐서 긴장했다'고 했습니다.",
        "에스파는 SM 걸그룹 중 미국 코첼라 밸리 뮤직 페스티벌에 처음으로 공식 무대를 가진 그룹입니다.",
        "'Supernova'는 2024년 국내 음원 차트 최장 기간 1위를 기록하며 에스파 최대 히트곡 반열에 오른 곡입니다.",
        "멤버들은 데뷔 때부터 독보적인 메타버스 세계관을 위해 자체 앱과 게임 콘텐츠까지 별도로 제작하는 혁신적인 방식으로 화제가 되었습니다.",
        "에스파 4인은 국내외 패션·뷰티 브랜드 앰버서더를 모두 따로 맡으면서도 팀 케미가 넘쳐 '네 개의 솔로 같은 걸그룹'이라 불립니다."
      ],
      en: [
        "In aespa's lore, each member has an AI avatar called 'ae-[name]' — when they first saw their avatars, they were so stunning the members felt nervous.",
        "aespa were the first SM girl group to perform officially at the Coachella Valley Music and Arts Festival.",
        "'Supernova' holds the record for longest consecutive #1 on Korean charts in 2024, making it aespa's biggest hit.",
        "From debut, their metaverse concept extended to a dedicated app and game content, making their world-building approach truly innovative.",
        "Each of the four members holds separate global brand ambassadorships while maintaining insane group chemistry — dubbed 'four soloists as a group'."
      ]
    },
    news: [
      { title: { ko: "에스파, 'Black Mamba'로 데뷔… SM 역대 최단 기간 100만 뷰 기록", en: "aespa Debuts with 'Black Mamba', Sets SM Record for Fastest 1M Views" }, date: "2020.11.17", summary: { ko: "독보적인 메타버스 세계관으로 무장한 에스파가 데뷔곡 'Black Mamba'로 전 세계적인 주목을 받았습니다.", en: "Armed with a unique metaverse lore, aespa debuted with 'Black Mamba' and immediately captured global attention." }, url: "#" },
      { title: { ko: "에스파 'Next Level', 역주행 신드롬으로 국내 차트 정복", en: "aespa 'Next Level' Dominates Charts in Reverse-Charting Syndrome" }, date: "2021.05.17", summary: { ko: "'Next Level'이 발매 후 서서히 차트를 역주행하며 유행어·밈이 될 정도의 사회적 현상을 만들어냈습니다.", en: "'Next Level' slowly climbed the charts after release, becoming a social phenomenon and meme-worthy hit." }, url: "#" },
      { title: { ko: "에스파, 미니 3집 'MY WORLD'로 글로벌 팬덤 확장", en: "aespa Expands Global Fandom with Mini Album 'MY WORLD'" }, date: "2023.05.08", summary: { ko: "미니 3집 'MY WORLD'가 발매 첫 주 전 세계 60개국 이상 iTunes 앨범 차트 1위를 달성했습니다.", en: "Mini album 'MY WORLD' topped iTunes album charts in over 60 countries in its first week." }, url: "#" },
      { title: { ko: "에스파, 코첼라 2024 공식 무대 SM 걸그룹 최초 입성", en: "aespa Makes History as First SM Girl Group at Coachella 2024" }, date: "2024.04.14", summary: { ko: "세계 최대 음악 축제 코첼라 무대에 SM 걸그룹 최초로 서며 글로벌 팝 아티스트로서의 위상을 확인했습니다.", en: "They became the first SM girl group to perform at Coachella, the world's largest music festival, affirming their global pop star status." }, url: "#" },
      { title: { ko: "에스파, 첫 번째 정규 앨범 'Armageddon' 발매", en: "aespa Releases 1st Full Album 'Armageddon'" }, date: "2024.05.27", summary: { ko: "독보적인 세계관의 집대성인 정규 1집이 발매와 동시에 글로벌 음원·음반 차트를 동시에 점령했습니다.", en: "Their first full album, the culmination of their unique universe, simultaneously topped global music and album charts upon release." }, url: "#" },
      { title: { ko: "에스파 'Supernova', 2024년 국내 차트 최장 1위 신기록", en: "aespa 'Supernova' Sets New Record for Longest #1 in 2024" }, date: "2024.08.12", summary: { ko: "'Supernova'가 멜론 등 주요 음원 플랫폼에서 11주 이상 연속 1위를 기록하며 올해 최고 히트곡으로 등극했습니다.", en: "'Supernova' held the #1 spot on Melon and major platforms for 11+ consecutive weeks, becoming the year's biggest hit." }, url: "#" },
      { title: { ko: "윈터, 솔로 앨범 'WINTER' 발매… 개인 활동 본격화", en: "Winter Releases Solo Album 'WINTER', Launching Solo Career" }, date: "2024.10.14", summary: { ko: "에스파 멤버 윈터가 첫 솔로 미니 앨범을 발매하며 그룹 활동 외 개인 아티스트로서의 입지를 다졌습니다.", en: "aespa member Winter released her first solo mini album, establishing herself as an individual artist beyond the group." }, url: "#" },
      { title: { ko: "카리나, 솔로 앨범 발매 및 글로벌 광고 캠페인 다수 진행", en: "Karina Releases Solo Album and Stars in Multiple Global Ad Campaigns" }, date: "2024.12.01", summary: { ko: "에스파 리더 카리나가 솔로 활동을 본격화하며 글로벌 브랜드 캠페인에서도 독보적인 존재감을 발휘하고 있습니다.", en: "aespa leader Karina launched solo activities while dominating global brand campaigns with her unrivaled presence." }, url: "#" },
      { title: { ko: "에스파, 두 번째 월드투어 성황리에 마무리", en: "aespa Wraps Up Second World Tour to Great Success" }, date: "2025.03.01", summary: { ko: "에스파가 아시아·북미·유럽·남미를 아우르는 두 번째 월드투어를 성공적으로 마쳤습니다.", en: "aespa successfully completed their second world tour spanning Asia, North America, Europe, and South America." }, url: "#" },
      { title: { ko: "에스파, 정규 2집 발매 예고… 새로운 세계관 확장 기대", en: "aespa Teases 2nd Full Album with Expanded Universe" }, date: "2025.11.01", summary: { ko: "에스파가 두 번째 정규 앨범의 세계관 티저를 공개하며 전 세계 팬들의 기대를 한껏 끌어올렸습니다.", en: "aespa released lore teasers for their second full album, building massive anticipation among global fans." }, url: "#" }
    ],
    members: [
      {
        id: "karina",
        name: { ko: "카리나", en: "Karina" },
        role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper" },
        birth: "2000.04.11", mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "168cm", bloodType: "B",
        description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself, a charismatic leader anchoring the team." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Karina+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "'카리나'라는 예명은 그리스어 'Karina(깨끗하고 순수한)'에서 유래했으며, 본명은 유지민입니다.",
            "연습생 시절부터 비현실적인 이목구비로 소문이 나 SM 내부에서도 '얼굴 천재'라 불렸습니다.",
            "리더로서 멤버들의 고민을 밤새 들어주는 든든한 언니 역할을 자처하며, 팀 분위기를 가장 먼저 살핍니다.",
            "스스로도 인정하는 '예능 감각 제로'지만, 그 어색한 리액션이 오히려 반전 매력으로 팬들에게 더 큰 인기를 얻습니다.",
            "에스파 멤버 중 가장 화려한 무대 장악력을 보유하며, 걸그룹 댄스 실력 순위에서 꾸준히 최상위권에 언급됩니다."
          ],
          en: [
            "Her stage name 'Karina' comes from the Greek word meaning 'pure and clean' — her real name is Yoo Jimin.",
            "Even as a trainee, she was already infamous within SM for her otherworldly visuals, earning the title 'face genius'.",
            "As leader, she voluntarily stays up listening to her members' worries, always prioritizing team atmosphere.",
            "She admits she has 'zero variety sense', but her awkward reactions have become a beloved reverse charm that fans adore even more.",
            "She consistently tops rankings for girl group dance skills, with her stage command widely considered unmatched in her generation."
          ]
        },
        socials: { instagram: "https://www.instagram.com/katarinabluu/" }
      },
      {
        id: "winter",
        name: { ko: "윈터", en: "Winter" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "2001.01.01", mbti: "INTJ",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm", bloodType: "A",
        description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버입니다.", en: "A member with a clear, pure voice and powerful performance skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "1월 1일 새해 첫날 태어난 '새해 여신'으로, 팬들이 매년 새해 첫 축하 메시지를 윈터에게 보내는 전통이 생겼습니다.",
            "데뷔 전 별명이 '백구(흰 강아지)'였을 정도로 순한 성격이지만, 무대에서는 완전히 다른 강렬한 모습을 보여줍니다.",
            "아이유의 곡을 커버할 정도로 맑고 청아한 음색을 가졌으며, 팬들 사이에서 '미니 아이유'라 불리기도 합니다.",
            "고양이를 매우 좋아해 SNS에 고양이 관련 콘텐츠를 자주 올리며, 고양이 집사로서의 면모를 드러냅니다.",
            "2024년 첫 솔로 앨범을 발매하며 개인 아티스트로서 새로운 챕터를 열었고, 팬들에게 큰 감동을 안겨줬습니다."
          ],
          en: [
            "Born on January 1st, she's the 'New Year Goddess' — fans have a tradition of sending her the year's first congratulatory messages.",
            "Her pre-debut nickname was 'White Puppy' for her gentle nature, which completely transforms into fierce intensity on stage.",
            "She covered IU songs with such matching purity that fans nicknamed her 'Mini IU'.",
            "She's an avid cat lover, regularly posting cat content on social media and fully embracing her identity as a 'cat parent'.",
            "Her 2024 solo album debut opened a new chapter for her as an individual artist, deeply moving her fans."
          ]
        },
        socials: { instagram: "https://www.instagram.com/imwinter/" }
      },
      {
        id: "giselle",
        name: { ko: "지젤", en: "Giselle" },
        role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist" },
        birth: "2000.10.30", mbti: "INFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "164cm", bloodType: "O",
        description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 멤버입니다.", en: "A multilingual intellectual fluent in three languages with solid rap skills." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Giselle+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "일본계 혼혈로 한국어·영어·일본어를 유창하게 구사하며, 세 개 언어가 자연스럽게 섞여 나오는 '트라이링구얼'입니다.",
            "SM 연습생 기간이 약 11개월로 에스파 멤버 중 가장 짧아 당시 업계에서도 화제가 된 '최단 기간 데뷔 멤버'입니다.",
            "외모에서 풍기는 지적인 이미지와 달리 실제로는 반전 있는 개그 감각을 가져 멤버들을 자주 웃깁니다.",
            "방송에서 가끔 무의식적으로 영어가 튀어나오는 '뇌 영어 직결 모드'가 있어 팬들에게 큰 웃음을 줍니다.",
            "패션 센스가 독보적으로 뛰어나 에스파 멤버 중 가장 독특한 개인 스타일로 패션 아이콘으로 자리매김했습니다."
          ],
          en: [
            "Of Japanese descent, she fluently switches between Korean, English, and Japanese — a natural trilingual.",
            "With only about 11 months as an SM trainee before debut, she holds the record as the fastest-to-debut aespa member.",
            "Her intellectual image is completely at odds with her surprising comedic sense — she constantly cracks up her members.",
            "She occasionally slips into English mid-sentence on camera in what fans call 'brain-to-English direct mode', always good for a laugh.",
            "Her personal fashion style is so uniquely distinctive that she stands out as a fashion icon even within a group of icons."
          ]
        },
        socials: { instagram: "https://www.instagram.com/aerichandesu/" }
      },
      {
        id: "ningning",
        name: { ko: "닝닝", en: "Ningning" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "2002.10.23", mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "161cm", bloodType: "O",
        description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내입니다.", en: "The youngest member boasting explosive high notes and soulful vocals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Ningning+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "중국 헤이룽장성 출신으로, 어릴 때부터 성악 훈련을 받아 에스파에서도 탄탄한 발성 기반을 자랑합니다.",
            "그림 그리기에 뛰어난 소질이 있어 직접 그린 일러스트를 팬들에게 공개해 '보컬 + 아티스트' 투 트랙으로 화제를 모았습니다.",
            "에스파 내 최고 보컬로 손꼽히며, 특히 고음 처리와 애드리브에서 다른 멤버들을 압도하는 실력을 보여줍니다.",
            "실제로는 소식가여서 멤버들이 '더 먹어야 한다'고 자주 권유한다는 뒷이야기가 있습니다.",
            "중국 가족과 자주 영상통화를 하며 고향에 대한 그리움을 솔직하게 표현하는 순수한 면모를 팬들이 특히 사랑합니다."
          ],
          en: [
            "From Heilongjiang, China, she received classical vocal training from a young age, giving aespa its most technically grounded voice.",
            "She revealed original illustrations she drew herself, making her a trending topic as a 'vocalist + visual artist' dual threat.",
            "She's considered aespa's top vocalist, particularly dominating in high note execution and improvisational ad-libs.",
            "She's reportedly a very light eater, with members constantly urging her to eat more — a behind-the-scenes detail fans find endearing.",
            "She openly expresses her homesickness for China and regularly video-calls her family, a raw sincerity fans deeply appreciate."
          ]
        },
        socials: { instagram: "https://www.instagram.com/imnotningning/" }
      }
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
    socials: { instagram: "https://www.instagram.com/bts.bighitofficial/", twitter: "https://twitter.com/bts_bighit", youtube: "https://www.youtube.com/@BTS", tiktok: "https://www.tiktok.com/@bts_official_bighit" },
    wiki: { ko: "방탄소년단(BTS)은 7인조 보이그룹입니다. 전 세계적인 메시지를 던졌으며 빌보드 핫 100 1위를 차지하는 등 글로벌 팝의 아이콘이 되었습니다.", en: "BTS is a 7-member boy group." },
    description: { ko: "21세기 팝 아이콘, 전 세계를 보랏빛으로 물들인 글로벌 슈퍼스타입니다.", en: "21st-century pop icons." },
    tmi: {
      ko: [
        "방탄소년단이라는 이름은 '방탄(防彈)소년단'으로, 10~20대가 살면서 겪는 편견과 억압을 막아내겠다는 의지를 담고 있습니다.",
        "BTS는 미국 빌보드 핫 100에서 자체 제작 곡으로 1위에 오른 최초의 한국 아티스트로, K-팝의 새로운 역사를 썼습니다.",
        "멤버 전원이 2022~2023년에 차례로 군 입대를 마치고 2025년까지 순차 전역하며 완전체 컴백을 앞두고 있습니다.",
        "BTS ARMY는 세계 최대 K-팝 팬덤으로, 멤버들의 군 복무 기간에도 스트리밍·구매·지지 캠페인을 이어가며 응원을 멈추지 않았습니다.",
        "뷔와 지민이 절친인 'VMIN', RM과 진의 투샷 'NamJin' 등 멤버들 간의 각종 케미 조합이 팬덤 내에서 독자적인 서브컬처를 형성하고 있습니다."
      ],
      en: [
        "The name BTS (Bangtan Sonyeondan) means 'Bulletproof Boy Scouts' — vowing to protect young people from society's prejudice and oppression.",
        "BTS became the first Korean artists to top the Billboard Hot 100 with a self-produced song, rewriting K-pop history.",
        "All members completed their mandatory military service between 2022–2025, with a full group comeback on the horizon.",
        "ARMY, the world's largest K-pop fandom, never stopped streaming, buying, and campaigning for BTS throughout their service.",
        "Member pairings like 'VMIN' (V+Jimin) and 'NamJin' (RM+Jin) have spawned entire sub-cultures within the fandom."
      ]
    },
    news: [
      { title: { ko: "BTS 진, BTS 멤버 최초 입대… 병역 의무 이행 시작", en: "BTS Jin First Member to Enlist, Beginning Military Service" }, date: "2022.12.13", summary: { ko: "맏형 진이 BTS 멤버 최초로 육군에 입대하며, 방탄소년단의 공백기가 공식적으로 시작되었습니다.", en: "Eldest member Jin became the first BTS member to enlist in the army, officially beginning the group's hiatus." }, url: "#" },
      { title: { ko: "제이홉, BTS 멤버 최초 전역… 빠른 복귀 예고", en: "J-Hope First BTS Member to Be Discharged, Hints at Quick Return" }, date: "2024.02.21", summary: { ko: "제이홉이 BTS 멤버 중 가장 먼저 군 전역을 완료하고 팬들의 환호 속에 사회로 복귀했습니다.", en: "J-Hope became the first BTS member to complete his military service, returning to civilian life to the cheers of fans." }, url: "#" },
      { title: { ko: "진, 군 전역 후 솔로 앨범 'Happy' 발매… 글로벌 차트 점령", en: "Jin Releases Solo Album 'Happy' After Discharge, Dominates Global Charts" }, date: "2024.06.13", summary: { ko: "전역 직후 발매한 솔로 앨범 'Happy'가 전 세계 팬들의 뜨거운 반응 속에 글로벌 차트를 점령했습니다.", en: "His post-discharge solo album 'Happy' was met with explosive fan enthusiasm, dominating global charts." }, url: "#" },
      { title: { ko: "RM·뷔·슈가, 동반 전역… BTS 완전체 카운트다운 가속화", en: "RM, V, Suga Discharged Together, Accelerating BTS Full Reunion Countdown" }, date: "2024.06.21", summary: { ko: "RM, 뷔, 슈가가 동시에 군 전역을 완료하며 방탄소년단 완전체 복귀에 대한 기대감이 최고조에 달했습니다.", en: "RM, V, and Suga completed their service simultaneously, sending fan anticipation for a full BTS reunion to its peak." }, url: "#" },
      { title: { ko: "지민·정국, 전역 완료… BTS 7인 체제 공식 복귀", en: "Jimin and Jungkook Discharged — BTS Officially Reunited as Seven" }, date: "2025.06.11", summary: { ko: "지민과 정국이 마지막으로 군 전역을 마침으로써 7인 방탄소년단이 완전히 한자리에 모였습니다.", en: "With Jimin and Jungkook completing their service, all seven BTS members are finally reunited." }, url: "#" },
      { title: { ko: "BTS, 데뷔 12주년 기념 완전체 컴백 공식 발표", en: "BTS Officially Announces Full Group Comeback for 12th Anniversary" }, date: "2025.06.13", summary: { ko: "방탄소년단이 데뷔 12주년을 맞아 7인 완전체 컴백을 공식 발표하며 전 세계 팬들을 열광시켰습니다.", en: "BTS officially announced their 7-member full group comeback on their 12th debut anniversary, sending fans worldwide into euphoria." }, url: "#" },
      { title: { ko: "BTS 완전체 컴백 신보, 발매 첫날 역대 스트리밍 신기록 달성", en: "BTS Full Group Comeback Album Sets All-Time Streaming Record on Day One" }, date: "2025.08.01", summary: { ko: "2년 만의 완전체 컴백 앨범이 전 세계 스포티파이 및 애플뮤직 차트를 동시에 석권하며 역대급 기록을 세웠습니다.", en: "Their first full-group album in two years swept Spotify and Apple Music charts globally, setting all-time records." }, url: "#" },
      { title: { ko: "BTS 완전체 월드투어, 전 세계 35개 도시 매진 행진", en: "BTS World Tour Sells Out 35 Cities Worldwide" }, date: "2025.09.15", summary: { ko: "7인 완전체 월드투어가 발표 수 분 만에 전 회차 매진을 기록하며 팬들의 폭발적인 반응을 얻었습니다.", en: "The full-group world tour sold out every show within minutes of announcement, proving the unstoppable force of BTS and ARMY." }, url: "#" },
      { title: { ko: "지민, 솔로 앨범 'MUSE' 빌보드 200 정상 등극", en: "Jimin's Solo Album 'MUSE' Reaches No.1 on Billboard 200" }, date: "2024.07.19", summary: { ko: "지민의 두 번째 솔로 앨범 'MUSE'가 빌보드 200에서 1위를 기록하며 솔로 아티스트로서의 저력을 다시 한번 증명했습니다.", en: "Jimin's second solo album 'MUSE' reached #1 on the Billboard 200, reaffirming his strength as a solo artist." }, url: "#" },
      { title: { ko: "정국 솔로 싱글 'Seven', 빌보드 핫 100 1위 등극", en: "Jungkook Solo Single 'Seven' Reaches No.1 on Billboard Hot 100" }, date: "2023.07.14", summary: { ko: "정국의 솔로 데뷔 싱글 'Seven'이 빌보드 핫 100 정상에 오르며 K-팝 솔로 역사를 새로 썼습니다.", en: "Jungkook's solo debut single 'Seven' topped the Billboard Hot 100, rewriting K-pop solo history." }, url: "#" }
    ],
    members: [
      {
        id: "rm",
        name: { ko: "RM", en: "RM" },
        role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper" },
        birth: "1994.09.12", mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "181cm", bloodType: "A",
        description: { ko: "팀의 든든한 리더이자 전 세계를 무대로 활동하는 뇌섹남 래퍼입니다.", en: "The reliable leader and intellectual rapper operating on a global stage." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+RM+Namjoon+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "중학생 시절 미국 드라마를 반복해서 보며 독학으로 영어를 마스터한 것으로 유명하며, 이 방법을 팬들에게도 적극 권합니다.",
            "미술 작품 수집이 취미로 개인 SNS(rkive)에 전시 방문 및 소장 작품을 꾸준히 공개하는 진지한 아트 컬렉터입니다.",
            "팀 내 공인 '사고 뭉치'로 스마트폰·이어폰 등을 자주 부수거나 분실해 멤버들이 '새 것 사줘야 하는 사람'으로 인식합니다.",
            "서울대 법학과 진학이 가능한 성적이었음에도 BigHit 합류를 선택했다는 이야기가 알려지며 '의지의 선택'을 상징하게 되었습니다.",
            "솔로 앨범 'Indigo', 'Right Place, Wrong Person' 등을 통해 감성 아티스트로서의 깊이를 증명했습니다."
          ],
          en: [
            "He famously taught himself English in middle school by watching American TV dramas on repeat — a method he actively recommends to fans.",
            "He's a serious art collector who regularly posts gallery visits and personal acquisitions on his SNS (rkive).",
            "He's the team's certified 'accident-prone member', constantly breaking or losing phones and earbuds — members mentally budget for his replacements.",
            "He reportedly had the grades for Seoul National University's law program but chose BigHit instead — now symbolic of a defining life choice.",
            "His solo albums 'Indigo' and 'Right Place, Wrong Person' confirmed him as a deeply emotive artist in his own right."
          ]
        },
        socials: { instagram: "https://www.instagram.com/rkive/" }
      },
      {
        id: "jin",
        name: { ko: "진", en: "Jin" },
        role: { ko: "보컬", en: "Vocalist" },
        birth: "1992.12.04", mbti: "INTP",
        zodiac: { ko: "사수자리", en: "Sagittarius" },
        height: "179cm", bloodType: "O",
        description: { ko: "자타공인 '월드와이드 핸섬', 뛰어난 보컬과 넘치는 유머감각을 겸비했습니다.", en: "Self-proclaimed 'Worldwide Handsome', combining powerful vocals with an overflowing sense of humor." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jin+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "'월드와이드 핸섬(Worldwide Handsome)'이라는 별명을 스스로 만들고 전 세계 팬들에게 자연스럽게 퍼뜨린 자기 PR의 달인입니다.",
            "BTS 멤버 중 가장 요리를 잘하며, 직접 만든 음식을 멤버들에게 먹이기를 즐기는 '팀의 요리사'입니다.",
            "주방 가위로 직접 앞머리를 자르다가 레전드 흑역사를 남긴 적이 있으며, 이 영상은 팬들 사이에서 영구 보존됩니다.",
            "BTS 멤버 최초로 2022년 12월 군 입대, 2024년 6월 가장 먼저 전역해 솔로 앨범 'Happy'를 바로 발매했습니다.",
            "전역 후에도 시그니처 '폭탄 웃음'과 아재 개그로 팬들에게 변함없는 모습을 보여주며 '진은 영원한 엔터테이너'라는 평을 받고 있습니다."
          ],
          en: [
            "He invented the nickname 'Worldwide Handsome' for himself and effortlessly spread it to fans worldwide — a self-promotion masterclass.",
            "He's the best cook in BTS and loves feeding his members home-cooked meals, serving as the unofficial team chef.",
            "He once cut his own bangs with kitchen scissors, creating a legendary fail clip that fans have preserved for eternity.",
            "He was the first BTS member to enlist (Dec 2022) and first to be discharged (June 2024), immediately releasing his solo album 'Happy'.",
            "Even after discharge, his signature explosive laugh and dad jokes proved to fans that 'Jin is an eternal entertainer'."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jin/" }
      },
      {
        id: "suga",
        name: { ko: "슈가", en: "Suga" },
        role: { ko: "리드래퍼/프로듀서", en: "Lead Rapper/Producer" },
        birth: "1993.03.09", mbti: "ISTP",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        height: "174cm", bloodType: "O",
        description: { ko: "천재적인 프로듀싱 능력과 날카로운 가사로 음악 세계를 구축하는 아티스트입니다.", en: "An artist building a musical world with genius producing skills and sharp lyrics." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Suga+Agust+D+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "BigHit 합류 전 대구에서 작곡 아르바이트로 생계를 이어가며 음악 꿈을 포기하지 않았던 노력파입니다.",
            "어디서든 잘 자는 '잠부자'로 유명하며, 공개 행사에서 졸고 있는 슈가의 모습을 팬들이 자주 포착합니다.",
            "'Agust D'라는 솔로 이름으로 발표한 세 장의 믹스테이프를 모두 무료 배포해 팬들에게 큰 감동을 줬습니다.",
            "어깨 수술로 인해 2023년 사회복무요원으로 대체복무를 이행하고 2024년 6월 만기 전역했습니다.",
            "BTS 수록곡 외에도 아이유 등 다양한 아티스트에게 비공개로 곡을 써주는 '숨은 히트 메이커'로도 정평이 나 있습니다."
          ],
          en: [
            "Before BigHit, he supported himself through part-time composing jobs in Daegu — never giving up on his musical dream.",
            "He's famously able to fall asleep anywhere, and fans regularly catch him napping at public events.",
            "He released all three of his 'Agust D' solo mixtapes for free, deeply moving fans with this generous gesture.",
            "He completed alternative military service as a social service worker in 2023–2024 following shoulder surgery.",
            "Beyond BTS tracks, he's a secret hit-maker who has written songs for artists like IU — a widely respected 'hidden producer'."
          ]
        },
        socials: { instagram: "https://www.instagram.com/agustd/" }
      },
      {
        id: "j-hope",
        name: { ko: "제이홉", en: "J-Hope" },
        role: { ko: "메인댄서/래퍼", en: "Main Dancer/Rapper" },
        birth: "1994.02.18", mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "177cm", bloodType: "A",
        description: { ko: "팀의 안무 기둥이자 항상 밝은 에너지를 내뿜는 'BTS의 희망'입니다.", en: "The choreography pillar and 'Hope' of BTS, always radiating bright energy." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+J-Hope+Jhope+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "광주 출신으로 어릴 때부터 버스킹 댄서로 활동하다 BigHit에 스카우트된 진정한 '길거리 댄스 영웅'입니다.",
            "항상 밝고 긍정적인 에너지를 발산해 멤버들과 스태프 모두에게 '그룹의 실제 해(Sun)'로 사랑받습니다.",
            "BTS 멤버 중 가장 먼저 솔로 앨범 'Jack In The Box'를 발매해 힙합 아티스트로서의 면모를 전 세계에 과시했습니다.",
            "2023년 1월 입대해 2024년 2월 21일 BTS 중 가장 먼저 전역하며 '제이홉 시대의 재개막'을 선언했습니다.",
            "시카고 롤라팔루자 헤드라이너로 서며 K-팝 솔로 아티스트 최초로 세계 3대 음악 축제의 메인 무대를 장식했습니다."
          ],
          en: [
            "From Gwangju, he was a street busking dancer before being scouted by BigHit — a true 'street dance hero' origin story.",
            "His relentlessly positive energy makes him genuinely regarded as the 'Sun' of BTS by both members and staff alike.",
            "He was the first BTS member to release a solo album, 'Jack In The Box', showcasing his hip-hop credentials to the world.",
            "He enlisted in January 2023 and was discharged first on February 21, 2024 — fans called it 'the reopening of the J-Hope era'.",
            "He headlined Chicago Lollapalooza, becoming the first K-pop solo act to headline one of the world's three largest music festivals."
          ]
        },
        socials: { instagram: "https://www.instagram.com/uarmyhope/" }
      },
      {
        id: "jimin",
        name: { ko: "지민", en: "Jimin" },
        role: { ko: "메인댄서/리드보컬", en: "Main Dancer/Lead Vocalist" },
        birth: "1995.10.13", mbti: "ESTP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "174cm", bloodType: "A",
        description: { ko: "매혹적인 음색과 예술적인 퍼포먼스로 무대 위를 지배하는 아티스트입니다.", en: "An artist who commands the stage with an enchanting vocal tone and artistic performance." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jimin+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "부산 출신으로 현대예술고에서 현대무용을 전공한 순수 무용 전문가이며, 이 배경이 BTS 안무에서 독보적인 유연성으로 나타납니다.",
            "연습이 부족하다고 느끼면 혼자 새벽 4~5시까지 남아 연습하는 극단적인 완벽주의자로 유명합니다.",
            "솔로 싱글 'Butter'로 빌보드 핫 100에서 10주 연속 1위를 기록하며 K-팝 솔로 역사를 새로 썼습니다.",
            "무대 후 감격해서 울거나 팬들에게 감사 눈물을 보이는 등 눈물이 많아 팬들에게 '지민이 울면 나도 운다'는 말이 생겼습니다.",
            "솔로 앨범 'MUSE'로 빌보드 200 정상에 오르며 완전한 솔로 아티스트로서의 저력을 전 세계에 증명했습니다."
          ],
          en: [
            "A trained contemporary dancer from Busan's Hanlim Arts High School, his dance background gives him an unmatched fluidity in BTS performances.",
            "He's known as an extreme perfectionist who stays alone until 4–5am if he feels his practice was insufficient.",
            "His solo single 'Butter' spent 10 consecutive weeks at #1 on the Billboard Hot 100, rewriting K-pop solo history.",
            "He cries with gratitude for fans or out of emotion after performances so often that fans say 'when Jimin cries, I cry'.",
            "His solo album 'MUSE' topped the Billboard 200, proving his full-scale power as a solo artist to the world."
          ]
        },
        socials: { instagram: "https://www.instagram.com/j.m/" }
      },
      {
        id: "v",
        name: { ko: "뷔", en: "V" },
        role: { ko: "보컬/리드댄서", en: "Vocalist/Lead Dancer" },
        birth: "1995.12.30", mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "179cm", bloodType: "AB",
        description: { ko: "깊은 저음의 소울풀한 목소리와 비현실적인 비주얼을 가진 글로벌 팝 아이콘입니다.", en: "A global pop icon with a deep, soulful voice and otherworldly visuals." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+V+Taehyung+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "대구 출신 본명 김태형으로, 어릴 때부터 미술과 음악에 큰 관심을 가졌으며 색소폰을 독학으로 익혀 콘서트에서 직접 연주한 적도 있습니다.",
            "전 세계 '가장 잘생긴 남성' 랭킹에서 수년간 꾸준히 최상위권을 차지하며 '글로벌 비주얼 1위' 타이틀을 유지하고 있습니다.",
            "멤버 지민과 절친으로, 'VMIN'이라는 케미 조합이 팬덤 내에서 독자적인 대형 팬층을 보유할 정도입니다.",
            "솔로 앨범 'Layover'에서 직접 작사에 적극 참여해 감성적이고 진지한 아티스트로서의 면모를 드러냈습니다.",
            "패션에 대한 남다른 감각으로 셀린느 글로벌 앰버서더로 활동하며, K-팝 아이돌을 넘어 패션 아이콘으로 자리매김했습니다."
          ],
          en: [
            "Born Kim Taehyung in Daegu, he taught himself saxophone from an early age and has performed it live on concert stages.",
            "He's consistently ranked at the very top of global 'most handsome man' lists, maintaining the unofficial title of 'global visual #1'.",
            "He and Jimin are best friends, and their 'VMIN' pairing has built its own massive dedicated fanbase within ARMY.",
            "His solo album 'Layover' featured significant personal lyric contributions, revealing him as a deeply thoughtful, introspective artist.",
            "His unique fashion instincts earned him a Celine global ambassadorship, repositioning him as a fashion icon far beyond K-pop."
          ]
        },
        socials: { instagram: "https://www.instagram.com/thv/" }
      },
      {
        id: "jungkook",
        name: { ko: "정국", en: "Jungkook" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "1997.09.01", mbti: "ISFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "179cm", bloodType: "A",
        description: { ko: "노래·댄스·운동·그림 모두 잘하는 '황금 막내'이자 BTS의 얼굴입니다.", en: "The 'Golden Maknae' who excels at singing, dancing, athletics, and art — the face of BTS." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jungkook+face+closeup+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "방탄소년단 합류 당시 고등학교 1학년으로 JYP·빅히트 등 여러 기획사로부터 동시에 스카우트 제의를 받았고 RM을 보고 빅히트를 선택했습니다.",
            "그림·사진·운동·노래·댄스 모두 빠르게 습득하는 '황금 막내'로, 무엇을 시작해도 일정 수준 이상이 되어야 직성이 풀리는 성격입니다.",
            "솔로 싱글 'Seven'이 빌보드 핫 100 1위에 오르며 K-팝 솔로 역대 최다 스트리밍 기록을 새로 썼습니다.",
            "전신에 타투를 새기며 자신만의 예술적 정체성을 표현하고, 이를 두고 '정국 타투 컨셉' 탐구가 ARMY 사이에서 큰 화제가 됩니다.",
            "헬스 트레이닝에 진심으로 임해 '아이돌계 근육맨'으로 불리며, 군 복무 후 더 성장한 피지컬로 팬들을 놀라게 했습니다."
          ],
          en: [
            "He was scouted by multiple agencies including JYP and BigHit in middle school — he chose BigHit after seeing RM, a decision that defined his life.",
            "Dubbed the 'Golden Maknae', he picks up drawing, photography, athletics, singing, and dance at alarming speed — and refuses to stop until he's good.",
            "His solo single 'Seven' topped the Billboard Hot 100 and broke K-pop's all-time solo streaming records.",
            "He expresses his artistic identity through full-body tattoos, and ARMY analysis of his 'tattoo concepts' has become its own cultural phenomenon.",
            "His dedication to fitness earned him the title 'idol world's muscle man', and his post-military physique left fans absolutely stunned."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jungkook_bighitentertainment/" }
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
    accentColor: "#f4a7bb",
    imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Group+Official+Photo+BORN+PINK",
    socials: { instagram: "https://www.instagram.com/blackpinkofficial/", twitter: "https://twitter.com/BLACKPINK", youtube: "https://www.youtube.com/@BLACKPINK", tiktok: "https://www.tiktok.com/@bp_tiktok" },
    wiki: { ko: "블랙핑크(BLACKPINK)는 YG 엔터테인먼트 소속의 4인조 걸그룹입니다. 전 세계에서 가장 영향력 있는 여성 그룹으로 자리매김했습니다.", en: "BLACKPINK is a 4-member girl group under YG Entertainment." },
    description: { ko: "전 세계를 사로잡은 'Pink'와 'Black'의 조화, 글로벌 팝의 아이콘입니다.", en: "The perfect harmony of 'Pink' and 'Black'." },
    tmi: {
      ko: [
        "블랙핑크의 'Born Pink' 월드투어는 역대 여성 아티스트 단일 투어 역대 최고 수익 기록을 경신한 역사적인 투어입니다.",
        "멤버들은 식사 메뉴를 정할 때 결정 장애가 오면 사다리 타기나 룰렛 앱을 사용하는 것으로 유명합니다.",
        "블랙핑크 4인은 각자 다른 글로벌 명품 브랜드 앰버서더를 맡고 있으며, 개인별로도 강력한 팬층을 보유하고 있습니다.",
        "2023년 YG와 그룹 활동 재계약을 체결하며 '블랙핑크의 시대는 아직 끝나지 않았다'는 신호를 전 세계에 보냈습니다.",
        "유튜브 1억 뷰를 돌파한 뮤직비디오가 여러 편에 달하며, 공식 채널 구독자 수가 K-팝 걸그룹 중 역대 최다입니다."
      ],
      en: [
        "The 'Born Pink' world tour broke the all-time revenue record for a solo female artist tour — a historic achievement.",
        "They famously use a roulette app or ladder game to decide what to eat when they can't agree.",
        "All four members individually hold ambassadorships with different global luxury brands, each boasting massive solo fan bases.",
        "Their 2023 group contract renewal with YG sent a clear signal to the world: 'The BLACKPINK era is not over yet.'",
        "Multiple BLACKPINK music videos have surpassed 1 billion YouTube views, and their official channel holds the all-time subscriber record for a K-pop girl group."
      ]
    },
    news: [
      { title: { ko: "블랙핑크 'Pink Venom', 발매 24시간 만에 유튜브 4천만 뷰 돌파", en: "BLACKPINK 'Pink Venom' Surpasses 40M YouTube Views in 24 Hours" }, date: "2022.08.19", summary: { ko: "'Pink Venom'의 뮤직비디오가 공개 24시간 만에 유튜브 4천만 뷰를 돌파하며 컴백 신드롬을 일으켰습니다.", en: "The 'Pink Venom' MV surpassed 40 million YouTube views in 24 hours, sparking a comeback syndrome." }, url: "#" },
      { title: { ko: "블랙핑크 정규 2집 'BORN PINK' 빌보드 200 1위 등극", en: "BLACKPINK 2nd Album 'BORN PINK' Debuts at No.1 on Billboard 200" }, date: "2022.10.07", summary: { ko: "두 번째 정규 앨범 'BORN PINK'가 빌보드 200 정상에 오르며 K-팝 걸그룹 역대 최고 데뷔 성적을 기록했습니다.", en: "'BORN PINK' debuted at #1 on the Billboard 200, marking the best debut for a K-pop girl group album in history." }, url: "#" },
      { title: { ko: "'Born Pink' 월드투어, 역대 여성 아티스트 최고 수익 경신", en: "'Born Pink' World Tour Sets All-Time Revenue Record for Female Artists" }, date: "2023.09.17", summary: { ko: "'Born Pink' 월드투어가 역대 여성 아티스트 단일 투어 최고 수익 기록을 경신하며 블랙핑크의 공연 파워를 다시 한번 입증했습니다.", en: "The 'Born Pink' tour broke the all-time revenue record for a single tour by a female artist, reaffirming BLACKPINK's concert dominance." }, url: "#" },
      { title: { ko: "지수, 솔로 데뷔 'FLOWER'… 뮤직뱅크 역대 최고 점수 갱신", en: "Jisoo Solo Debut 'FLOWER' Breaks Music Bank All-Time High Score" }, date: "2023.03.31", summary: { ko: "지수의 솔로 데뷔 타이틀 'FLOWER'가 KBS 뮤직뱅크에서 역대 최고 점수를 기록하며 강력한 솔로 파워를 입증했습니다.", en: "Jisoo's solo debut title 'FLOWER' broke the all-time high score on KBS Music Bank, proving her powerful solo capabilities." }, url: "#" },
      { title: { ko: "블랙핑크, YG와 그룹 활동 전속계약 재체결", en: "BLACKPINK Renews Group Activity Contract with YG" }, date: "2023.12.06", summary: { ko: "블랙핑크 4인이 YG 엔터테인먼트와 그룹 활동 전속계약 재체결을 완료하며 그룹 지속에 대한 의지를 공식화했습니다.", en: "All four BLACKPINK members officially renewed their group activity contract with YG Entertainment." }, url: "#" },
      { title: { ko: "리사, YG 계약 종료 후 자체 레이블 'LLOUD' 설립", en: "Lisa Establishes Own Label 'LLOUD' After YG Contract Expiration" }, date: "2024.03.01", summary: { ko: "리사가 YG와의 개인 계약 종료 후 자신의 레이블 'LLOUD'를 설립하고 독자적인 아티스트 경력을 시작했습니다.", en: "After her YG individual contract ended, Lisa established her own label 'LLOUD' and began a fully independent artistic journey." }, url: "#" },
      { title: { ko: "리사 솔로 'ROCKSTAR', 빌보드 핫 100 진입 및 글로벌 히트", en: "Lisa Solo 'ROCKSTAR' Enters Billboard Hot 100 and Goes Global" }, date: "2024.06.28", summary: { ko: "LLOUD 산하 첫 솔로 싱글 'ROCKSTAR'가 빌보드 핫 100에 진입하며 독립 아티스트로서의 성공적인 출발을 알렸습니다.", en: "Her first solo single under LLOUD, 'ROCKSTAR', entered the Billboard Hot 100, marking a successful start as an independent artist." }, url: "#" },
      { title: { ko: "로제, 브루노 마스와 협업 'APT.' 전 세계 1위 석권", en: "Rosé Collaboration with Bruno Mars 'APT.' Takes No.1 Worldwide" }, date: "2024.10.18", summary: { ko: "로제와 브루노 마스의 협업 곡 'APT.'이 전 세계 60여 개 국 스포티파이 1위를 달성하며 2024년 최대 히트곡으로 등극했습니다.", en: "Rosé and Bruno Mars' 'APT.' reached #1 on Spotify in over 60 countries, becoming the biggest global hit of 2024." }, url: "#" },
      { title: { ko: "제니, 솔로 2집 'Ruby'로 글로벌 아티스트 입지 공고히", en: "Jennie Cements Global Artist Status with Solo 2nd Album 'Ruby'" }, date: "2025.02.07", summary: { ko: "제니의 두 번째 솔로 앨범 'Ruby'가 글로벌 차트를 점령하며 독립적인 팝 스타로서의 위상을 완전히 굳혔습니다.", en: "Jennie's second solo album 'Ruby' dominated global charts, fully cementing her status as an independent pop star." }, url: "#" },
      { title: { ko: "블랙핑크, 데뷔 10주년 기념 그룹 컴백 및 스페셜 프로젝트 예고", en: "BLACKPINK Announces Group Comeback and Special Projects for 10th Anniversary" }, date: "2026.01.15", summary: { ko: "블랙핑크가 데뷔 10주년을 앞두고 그룹 컴백과 각종 스페셜 프로젝트를 예고하며 팬들의 기대를 최고조로 높였습니다.", en: "BLACKPINK announced a group comeback and special projects ahead of their 10th debut anniversary, sending fan anticipation to an all-time high." }, url: "#" }
    ],
    members: [
      {
        id: "jisoo",
        name: { ko: "지수", en: "Jisoo" },
        role: { ko: "리드보컬/비주얼", en: "Lead Vocalist/Visual" },
        birth: "1995.01.03", mbti: "ISTP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "162cm", bloodType: "A",
        description: { ko: "팀의 맏언니이자 비주얼 센터. 따뜻한 리더십과 맑은 보이스를 갖췄습니다.", en: "The oldest and visual center, with warm leadership and a clear, pure voice." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "팀의 맏언니로 포근하고 어른스러운 분위기를 만들어주는 '팀의 엄마' 같은 존재이며, 멤버들이 힘들 때 가장 먼저 찾는 언니입니다.",
            "솔로 데뷔 싱글 'FLOWER'가 뮤직뱅크 역대 최고 점수를 경신하며 솔로 파워를 단번에 증명했습니다.",
            "JTBC 드라마 '설강화'에 주연으로 출연해 배우로서의 가능성을 보여주며 연예계 다방면에서 두각을 나타내고 있습니다.",
            "요리와 살림에 관심이 많아 직접 만든 음식을 멤버들에게 자주 나눠줘 '숙소 요리 담당'으로 불립니다.",
            "나무 그늘 같은 포근함으로 팬들 사이에서 '지수 언니라고 부르고 싶다'는 말이 절로 나온다는 이야기가 정평이 나 있습니다."
          ],
          en: [
            "She's the team's 'mother figure' — the warm, composed unnie everyone turns to first when things get hard.",
            "Her solo debut single 'FLOWER' broke the all-time high score on Music Bank, proving her solo power in a single release.",
            "She starred in the JTBC drama 'Snowdrop', demonstrating acting potential and broadening her presence across the entertainment industry.",
            "She loves cooking and regularly prepares food for her members, earning her the unofficial title of 'dorm chef'.",
            "Fans universally describe her warmth with the phrase 'I just want to call her unnie' — a testament to her natural, approachable energy."
          ]
        },
        socials: { instagram: "https://www.instagram.com/sooyaaa__/" }
      },
      {
        id: "jennie",
        name: { ko: "제니", en: "Jennie" },
        role: { ko: "메인래퍼/리드보컬", en: "Main Rapper/Lead Vocalist" },
        birth: "1996.01.16", mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm", bloodType: "B",
        description: { ko: "독보적인 아우라와 카리스마로 무대를 장악하는 팀의 메인 래퍼입니다.", en: "The main rapper who commands the stage with an unmatched aura and charisma." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "뉴질랜드 유학 경험이 있어 유창한 영어 실력을 갖추고 있으며, 블랙핑크의 영어 인터뷰를 사실상 주도합니다.",
            "샤넬·나이키 등 최정상 글로벌 브랜드의 앰버서더로 활동하며 'K-팝계의 패션 아이콘'으로 완전히 자리매김했습니다.",
            "고양이 두 마리를 키우는 '집사'이며 SNS에 고양이 사진을 올릴 때마다 팬들의 폭발적인 반응을 이끌어냅니다.",
            "솔로 데뷔 'SOLO' 뮤직비디오가 공개 24시간 만에 유튜브 1억 뷰를 돌파하는 기록을 세웠습니다.",
            "2025년 솔로 2집 'Ruby'로 독립적인 팝 스타로서의 입지를 완전히 굳히며 글로벌 아티스트로 재탄생했습니다."
          ],
          en: [
            "Her time studying in New Zealand gave her fluent English, making her the de facto lead of BLACKPINK's English interviews.",
            "As an ambassador for Chanel and Nike, she's firmly established as 'K-pop's fashion icon'.",
            "She's a devoted cat parent to two cats, and whenever she posts cat photos, fan engagement goes through the roof.",
            "Her solo debut MV 'SOLO' broke 100 million YouTube views in just 24 hours — a record at the time.",
            "Her 2025 solo album 'Ruby' fully reestablished her as an independent global pop star in her own right."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jennierubyjane/" }
      },
      {
        id: "lisa",
        name: { ko: "리사", en: "Lisa" },
        role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper" },
        birth: "1997.03.27", mbti: "ESFJ",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "167cm", bloodType: "O",
        description: { ko: "압도적인 춤 실력과 글로벌 팬층을 보유한 팀의 메인 댄서입니다.", en: "The main dancer with overwhelming dance skills and a massive global fanbase." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "태국 출신으로 본명은 Pranpriya Manobal이며, '리사'라는 이름은 스스로 선택한 것입니다.",
            "인스타그램 팔로워 1억 명을 돌파한 최초의 K-팝 아이돌 기록을 보유하고 있습니다.",
            "솔로 데뷔 앨범 'LALISA' 타이틀곡이 유튜브 공개 24시간 만에 7천만 뷰를 기록했습니다.",
            "YG와의 개인 계약 종료 후 자신의 레이블 'LLOUD'를 설립, 솔로 싱글 'ROCKSTAR'로 빌보드 핫 100에 진입했습니다.",
            "어릴 때부터 태국 댄스 아카데미에서 전문 훈련을 받아 온 '천재 댄서'로, K-팝 역대 최고 댄서 중 한 명으로 꼽힙니다."
          ],
          en: [
            "Born Pranpriya Manobal in Thailand, she chose the name 'Lisa' for herself.",
            "She holds the record as the first K-pop idol to surpass 100 million Instagram followers.",
            "Her solo debut title track 'LALISA' garnered 70 million YouTube views within 24 hours of release.",
            "After her YG individual contract ended, she founded her own label 'LLOUD' and entered the Billboard Hot 100 with solo single 'ROCKSTAR'.",
            "She trained professionally at a Thai dance academy from a young age — widely considered one of the all-time greatest dancers in K-pop history."
          ]
        },
        socials: { instagram: "https://www.instagram.com/lalalalisa_m/" }
      },
      {
        id: "rose",
        name: { ko: "로제", en: "Rosé" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer" },
        birth: "1997.02.11", mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "168cm", bloodType: "B",
        description: { ko: "유니크하고 감성적인 음색을 가진 메인 보컬이자 글로벌 팝 스타입니다.", en: "The main vocalist with a uniquely emotional tone and a global pop star in her own right." },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Rosé+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "뉴질랜드 출신 한국계 호주인으로 영어와 한국어 모두 모국어 수준이며, 섬세한 감성의 영어 가사를 직접 쓰기도 합니다.",
            "기타 연주 능력이 수준급으로, 직접 기타를 치며 노래하는 어쿠스틱 라이브 무대로 팬들에게 큰 감동을 줍니다.",
            "솔로 데뷔 'On the Ground' 당시 발표한 영어 가사에 담긴 진솔한 이야기가 전 세계 팬들의 깊은 공감을 얻었습니다.",
            "2024년 브루노 마스와 협업한 'APT.'이 전 세계 60여 개국 스포티파이 1위를 달성하며 진정한 글로벌 팝 스타로 재탄생했습니다.",
            "식물 키우기를 즐기며 숙소에 작은 정원을 만들어 멤버들에게 '로제 식물 카페'라고 불린다는 이야기가 팬들 사이에서 유명합니다."
          ],
          en: [
            "She's a Korean-Australian raised in New Zealand, with both English and Korean as native languages — and she writes her own English lyrics.",
            "Her acoustic guitar skills are impressive, and her live performances where she plays guitar and sings simultaneously always move fans deeply.",
            "The raw sincerity in the English lyrics of her solo debut 'On the Ground' resonated with fans across the world.",
            "Her 2024 Bruno Mars collaboration 'APT.' reached #1 on Spotify in 60+ countries, truly reborn as a global pop star.",
            "She enjoys nurturing plants and has created a small dorm garden, which members affectionately call 'Rosé's plant café'."
          ]
        },
        socials: { instagram: "https://www.instagram.com/roses_are_rosie/" }
      }
    ]
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM" },
    officialSite: "https://lesserafim.com/",
    company: "HYBE / Source Music",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT" },
    accentColor: "#c8a97e",
    imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/le_sserafim/", twitter: "https://twitter.com/le_sserafim", youtube: "https://www.youtube.com/@LESSERAFIM_official" },
    wiki: { ko: "르세라핌(LE SSERAFIM)은 HYBE 산하 쏘스뮤직 소속 5인조 걸그룹입니다. 그룹명은 'I AM FEARLESS'의 애너그램으로, 두려움 없이 나아가겠다는 의지를 담고 있습니다.", en: "LE SSERAFIM is a 5-member girl group under HYBE's Source Music." },
    description: { ko: "두려움 없이 무대를 장악하는 4세대 대표 걸그룹. 파워풀한 퍼포먼스와 강렬한 비주얼로 전 세계를 사로잡았습니다.", en: "The defining 4th-gen girl group that dominates stages fearlessly." },
    tmi: {
      ko: [
        "그룹명 LE SSERAFIM은 'I AM FEARLESS'의 애너그램으로, 두려움 없이 앞으로 나아가겠다는 의지를 이름 자체에 숨겨 담았습니다.",
        "카즈하는 데뷔 전 일본에서 프로 발레리나로 활동했으며, 이 배경이 르세라핌 무대에 독보적인 우아함을 더합니다.",
        "사쿠라는 HKT48·IZ*ONE을 거쳐 르세라핌까지 두 국가·세 팀에서 활약한 K·J 팝 역사상 유례없는 커리어를 보유하고 있습니다.",
        "르세라핌은 2024 코첼라 무대에 서며 HYBE 걸그룹으로는 최초로 세계 최대 음악 페스티벌에 공식 출연한 그룹이 됐습니다.",
        "'EASY'가 해외 팬들 사이에서 '발음하기 쉬운 K-팝 입문 노래'로 퍼지며 틱톡에서 전 세계적인 챌린지 밈이 된 이야기는 전설처럼 회자됩니다."
      ],
      en: [
        "The name LE SSERAFIM is an anagram of 'I AM FEARLESS' — the fearless spirit is literally encoded into their name.",
        "Kazuha was a professional ballerina in Japan before debuting in K-pop, adding unparalleled elegance to LE SSERAFIM's performances.",
        "Sakura has an unprecedented career spanning HKT48, IZ*ONE, and LE SSERAFIM across two countries — unrivaled in K-pop and J-pop history.",
        "LE SSERAFIM became the first HYBE girl group to officially perform at Coachella, the world's largest music festival, in 2024.",
        "The story of 'EASY' spreading among international fans as 'an easy-to-pronounce K-pop gateway song' and becoming a global TikTok challenge meme is practically legendary."
      ]
    },
    news: [
      { title: { ko: "르세라핌 데뷔 'FEARLESS', 발매 첫 주 차트 상위권 장악", en: "LE SSERAFIM Debut 'FEARLESS' Dominates Charts in First Week" }, date: "2022.05.02", summary: { ko: "쏘스뮤직의 신인 걸그룹 르세라핌이 데뷔 앨범 'FEARLESS'로 첫 주부터 주요 음원 차트 상위권을 점령했습니다.", en: "Source Music's rookie girl group LE SSERAFIM dominated major charts from the first week with their debut album 'FEARLESS'." }, url: "#" },
      { title: { ko: "르세라핌 'ANTIFRAGILE', 빌보드 핫 100 진입 성공", en: "LE SSERAFIM 'ANTIFRAGILE' Successfully Enters Billboard Hot 100" }, date: "2022.10.17", summary: { ko: "두 번째 미니 앨범 타이틀 'ANTIFRAGILE'이 빌보드 핫 100에 진입하며 데뷔 반년 만에 글로벌 차트 입성을 이뤄냈습니다.", en: "Their second mini album title 'ANTIFRAGILE' entered the Billboard Hot 100 within just six months of debut." }, url: "#" },
      { title: { ko: "르세라핌 첫 번째 정규 앨범 'UNFORGIVEN' 발매", en: "LE SSERAFIM Releases 1st Full Album 'UNFORGIVEN'" }, date: "2023.05.01", summary: { ko: "데뷔 1주년을 기념해 발매한 첫 정규 앨범 'UNFORGIVEN'이 글로벌 팬들의 뜨거운 호응을 받았습니다.", en: "Their first full album 'UNFORGIVEN', released for their 1st anniversary, received enthusiastic responses from global fans." }, url: "#" },
      { title: { ko: "르세라핌 'EASY', 전 세계 틱톡 챌린지 밈으로 확산", en: "LE SSERAFIM 'EASY' Spreads as Global TikTok Challenge Meme" }, date: "2024.02.19", summary: { ko: "'EASY'가 틱톡 챌린지 열풍을 타고 전 세계적으로 확산되며 르세라핌의 글로벌 인지도를 크게 높였습니다.", en: "'EASY' spread globally through a TikTok challenge craze, significantly boosting LE SSERAFIM's worldwide recognition." }, url: "#" },
      { title: { ko: "르세라핌, 코첼라 2024 무대 HYBE 걸그룹 최초 공식 출연", en: "LE SSERAFIM Makes History as First HYBE Girl Group at Coachella 2024" }, date: "2024.04.13", summary: { ko: "세계 최대 음악 페스티벌 코첼라 무대에 서며 HYBE 걸그룹 최초로 코첼라 공식 퍼포먼스를 가졌습니다.", en: "They performed at Coachella, the world's largest music festival, becoming the first HYBE girl group to do so officially." }, url: "#" },
      { title: { ko: "르세라핌, 첫 번째 단독 월드투어 'LE SSERAFIM WORLD TOUR' 개최", en: "LE SSERAFIM Launches First Solo World Tour" }, date: "2024.07.13", summary: { ko: "데뷔 2년 만에 아시아·북미·유럽을 아우르는 첫 단독 월드투어를 성공적으로 시작했습니다.", en: "Just two years after debut, they successfully launched their first solo world tour spanning Asia, North America, and Europe." }, url: "#" },
      { title: { ko: "르세라핌 'CRAZY', 글로벌 스트리밍 신기록 달성", en: "LE SSERAFIM 'CRAZY' Sets New Global Streaming Record" }, date: "2024.10.14", summary: { ko: "미니 6집 타이틀 'CRAZY'가 스포티파이 글로벌 차트에서 역대 르세라핌 최고 성적을 기록했습니다.", en: "The title track 'CRAZY' from their 6th mini album achieved LE SSERAFIM's all-time best performance on the Spotify Global chart." }, url: "#" },
      { title: { ko: "허윤진, 솔로 싱글 'I ≠ DOLL'로 아티스트 정체성 선언", en: "Huh Yunjin Declares Artistic Identity with Solo Single 'I ≠ DOLL'" }, date: "2024.03.18", summary: { ko: "허윤진이 직접 작사·작곡한 솔로 싱글이 진정성 있는 메시지로 전 세계 팬들의 큰 공감을 얻었습니다.", en: "Her self-written and composed solo single received massive global resonance for its authentic, powerful message." }, url: "#" },
      { title: { ko: "르세라핌, 월드투어 전 일정 성황리에 마무리", en: "LE SSERAFIM Wraps Up All World Tour Dates Successfully" }, date: "2025.12.01", summary: { ko: "르세라핌이 아시아·북미·유럽을 아우르는 월드투어 전 일정을 성황리에 마쳤습니다.", en: "LE SSERAFIM successfully completed all dates of their world tour spanning Asia, North America, and Europe." }, url: "#" },
      { title: { ko: "르세라핌, 데뷔 4주년 기념 새 앨범 티저 공개", en: "LE SSERAFIM Releases New Album Teaser for 4th Debut Anniversary" }, date: "2026.03.01", summary: { ko: "데뷔 4주년을 앞두고 새 앨범 티저 이미지를 공개하며 팬들의 기대감을 한껏 끌어올렸습니다.", en: "Ahead of their 4th debut anniversary, they released new album teaser images, building excitement among fans." }, url: "#" }
    ],
    members: [
      {
        id: "chaewon",
        name: { ko: "김채원", en: "Kim Chaewon" },
        role: { ko: "리더/메인보컬", en: "Leader/Main Vocalist" },
        birth: "2000.08.05", mbti: "INFJ",
        zodiac: { ko: "사자자리", en: "Leo" },
        height: "163cm", bloodType: "A",
        description: { ko: "IZ*ONE 출신의 리더로, 섬세한 감성과 강한 리더십을 겸비했습니다.", en: "Former IZ*ONE member and leader with delicate emotion and strong leadership." },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kim+Chaewon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "IZ*ONE 활동 당시부터 '리더 감'으로 인정받았으며 르세라핌에서도 자연스럽게 팀의 중심 역할을 맡게 되었습니다.",
            "SM·JYP·BigHit 등 여러 대형 기획사에서 연습생 생활을 거치며 다양한 음악적 훈련을 쌓은 '연습생 베테랑'입니다.",
            "멤버들이 힘들거나 고민이 있을 때 가장 먼저 찾는 든든한 맏언니이며, 팀의 정신적 지주 역할을 합니다.",
            "개인 방송에서 게임을 즐기는 '게이머' 면모를 드러내 팬들을 놀라게 했으며, 의외의 게임 실력이 화제가 되었습니다.",
            "솔직하고 직설적인 성격으로 방송에서 진심을 있는 그대로 전달하는 모습이 팬들에게 큰 신뢰감을 줍니다."
          ],
          en: [
            "She was recognized as natural leader material during IZ*ONE, and the role followed her naturally into LE SSERAFIM.",
            "She trained at multiple major agencies including SM, JYP, and BigHit — a veteran trainee with broad musical foundations.",
            "She's the member everyone turns to first when struggling, serving as the team's emotional anchor and pillar of support.",
            "She surprised fans by revealing a 'gamer' side on personal broadcasts, with her unexpected gaming skills becoming a talking point.",
            "Her direct, honest personality — saying exactly what she means on camera — earns consistent trust and respect from fans."
          ]
        },
        socials: { instagram: "https://www.instagram.com/chaewo.n/" }
      },
      {
        id: "sakura",
        name: { ko: "사쿠라", en: "Sakura" },
        role: { ko: "보컬/퍼포머", en: "Vocalist/Performer" },
        birth: "1998.03.19", mbti: "ISTP",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        height: "164cm", bloodType: "AB",
        description: { ko: "HKT48·IZ*ONE를 거쳐 르세라핌까지, 독보적인 K-팝·J-팝 커리어를 보유한 베테랑 멤버입니다.", en: "A veteran with an unrivaled career spanning HKT48, IZ*ONE, and LE SSERAFIM across two countries." },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Sakura+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "HKT48·AKB48·IZ*ONE를 거쳐 르세라핌까지, J-팝과 K-팝 양쪽에서 모두 최정상에 오른 전무후무한 커리어를 보유하고 있습니다.",
            "데뷔 10년이 넘은 베테랑으로 멤버들에게 무대 매너·팬 소통법을 자연스럽게 가르쳐주는 '살아있는 교과서'입니다.",
            "한국 드라마와 예능을 좋아해서 한국어를 배우는 계기가 됐다고 밝혔으며, 지금은 유창한 한국어로 방송에서 활약합니다.",
            "팬들 사이에서 '사쿠라가 가면 그룹이 흥한다'는 '사쿠라 법칙'이 반농담 반진담으로 통용됩니다.",
            "일본 팬들과의 소통을 위해 SNS에서 직접 일본어 메시지를 꾸준히 올려 '팀의 일본 공식 통역 담당'으로 통합니다."
          ],
          en: [
            "Her career spanning HKT48, AKB48, IZ*ONE, and LE SSERAFIM across Japan and Korea is truly unprecedented in both J-pop and K-pop history.",
            "As a 10+ year industry veteran, she naturally teaches members stage etiquette and fan communication — a living textbook.",
            "She learned Korean partly through watching K-dramas and variety shows, and now handles broadcasts fluently.",
            "Fans half-jokingly circulate the 'Sakura Law': every group she joins becomes successful.",
            "She consistently posts in Japanese on social media to connect with Japanese fans, serving as the team's unofficial Japan communication channel."
          ]
        },
        socials: { instagram: "https://www.instagram.com/39saku_chan/" }
      },
      {
        id: "yunjin",
        name: { ko: "허윤진", en: "Huh Yunjin" },
        role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" },
        birth: "2001.10.08", mbti: "ENFJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "167cm", bloodType: "A",
        description: { ko: "미국에서 성장한 글로벌 감성을 가진 솔로 싱어송라이터이자 르세라핌의 보컬 핵심입니다.", en: "A solo singer-songwriter raised in the US with a global sensibility and LE SSERAFIM's vocal core." },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Huh+Yunjin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "미국 뉴욕과 캐나다를 거쳐 한국에 온 진정한 글로벌 아티스트로 영어·한국어 모두 모국어 수준으로 구사합니다.",
            "직접 작사·작곡한 솔로 싱글 'I ≠ DOLL'은 '완벽한 이미지 대신 솔직한 나를 보여주겠다'는 강한 메시지로 전 세계 팬들에게 큰 감동을 줬습니다.",
            "첼로를 연주할 수 있을 정도로 깊은 음악적 소양을 갖추고 있으며, 악기 연주에 대한 열정이 남다릅니다.",
            "르세라핌 멤버 중 솔로 활동을 가장 적극적으로 펼치며 자신만의 음악 세계와 팬층을 독자적으로 구축해가고 있습니다.",
            "'완벽한 페르소나보다 솔직한 나를 보여주겠다'는 인터뷰 발언이 많은 팬들과 미디어에 회자되며 진정성 있는 아티스트로 인정받고 있습니다."
          ],
          en: [
            "Having grown up in New York and Canada before coming to Korea, both English and Korean are native languages for her — a true global artist.",
            "Her self-written solo single 'I ≠ DOLL', with its message of 'showing my honest self instead of a perfect image', moved fans worldwide deeply.",
            "She can play the cello, reflecting musical depth that extends well beyond singing and performance.",
            "She's the most active LE SSERAFIM member in solo activities, independently building her own musical world and dedicated fan base.",
            "Her statement 'I'd rather show my honest self than a perfect persona' has been widely quoted, cementing her reputation as an authentic artist."
          ]
        },
        socials: { instagram: "https://www.instagram.com/yunjin_huh/" }
      },
      {
        id: "kazuha",
        name: { ko: "카즈하", en: "Kazuha" },
        role: { ko: "댄서/보컬", en: "Dancer/Vocalist" },
        birth: "2003.08.09", mbti: "ISFP",
        zodiac: { ko: "사자자리", en: "Leo" },
        height: "170cm", bloodType: "O",
        description: { ko: "일본 프로 발레리나 출신으로, 발레 무브먼트를 K-팝 퍼포먼스에 접목한 독보적인 댄서입니다.", en: "A former Japanese professional ballerina who integrates ballet movements into K-pop performance uniquely." },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kazuha+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "오사카 출신으로 7세부터 클래식 발레를 시작, 프로 발레리나로 활동하다 K-팝 아이돌에 도전하는 파격적인 이력을 갖고 있습니다.",
            "발레 기반의 정교한 몸짓이 르세라핌 무대에 다른 멤버들과 차별화되는 독보적인 우아함을 더합니다.",
            "한국어를 처음 배울 때 연습생 중 가장 빠르게 일상 회화를 습득해 '언어 천재' 소리를 들었습니다.",
            "직접 찍어 인스타그램에 올리는 사진들이 예술 작품 수준이라며 팬들에게 '아이돌계 포토그래퍼'라는 찬사를 받습니다.",
            "조용하고 내성적인 성격이지만 카메라 앞에서는 강렬하고 우아한 전혀 다른 존재감을 발산합니다."
          ],
          en: [
            "From Osaka, she began classical ballet at age 7 and worked as a professional ballerina before making the dramatic leap to K-pop idol.",
            "Her ballet-trained body mechanics add a uniquely graceful elegance to LE SSERAFIM's performances that no other member replicates.",
            "She picked up conversational Korean faster than any other trainee when she first arrived, earning the label 'language genius'.",
            "The photos she personally shoots and posts on Instagram are praised as works of art, earning her the title 'idol world photographer'.",
            "Her quiet, introverted personality completely transforms in front of cameras into an intense, graceful stage presence."
          ]
        },
        socials: { instagram: "https://www.instagram.com/kazuha.official_/" }
      },
      {
        id: "eunchae",
        name: { ko: "홍은채", en: "Hong Eunchae" },
        role: { ko: "막내/보컬", en: "Maknae/Vocalist" },
        birth: "2004.11.10", mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "163cm", bloodType: "O",
        description: { ko: "막내지만 무대에서는 언니들 못지않은 존재감을 뿜어내는 팀의 에너지 충전기입니다.", en: "The youngest but radiates as much stage presence as her unnies — the team's energy powerhouse." },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Hong+Eunchae+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "르세라핌에 입덕하기 전부터 이미 르세라핌의 팬이었다고 밝혀 '성공한 팬' 대열에 합류한 것으로 유명합니다.",
            "천진난만하고 밝은 성격으로 멤버들과 팬들에게 귀여움을 한 몸에 받는 '팀의 에너지 충전기'입니다.",
            "어릴 때부터 K-팝 커버 댄스 영상을 만들어 올렸는데, 그 영상들이 지금도 팬들 사이에서 회자되는 전설 같은 콘텐츠가 되었습니다.",
            "팬들과의 소통을 매우 즐겨 위버스 라이브를 멤버 중 가장 자주 켜는 것으로 유명하며, 팬들에게 '은채 라이브는 랜덤 팝업'이라는 별명이 생겼습니다.",
            "학창 시절에도 '반 인싸'로 친구들에게 인기가 많았으며, 지금도 학창 시절 친구들과 연락을 이어간다는 이야기가 팬들에게 따뜻하게 전해집니다."
          ],
          en: [
            "She famously revealed she was already a fan of LE SSERAFIM before joining — making her a certified 'fan-turned-member' success story.",
            "Her bright, innocent personality makes her the recipient of everyone's affection — members and fans alike call her the 'team energy recharger'.",
            "K-pop cover dance videos she made and posted as a kid have become legendary content among fans, still circulated to this day.",
            "She's famous for going live on Weverse most frequently among members — fans have nicknamed her streams 'Eunchae's random pop-up shop'.",
            "She was reportedly the popular, outgoing type in school, and she still stays in contact with childhood friends — a warmth fans find deeply endearing."
          ]
        },
        socials: { instagram: "https://www.instagram.com/eunchae.official_/" }
      }
    ]
  },
  {
    id: "gidle",
    name: { ko: "(여자)아이들", en: "(G)I-DLE" },
    officialSite: "https://cube-gidle.com/",
    company: "Cube Entertainment",
    debut: "2018.05.02",
    fandom: { ko: "네버랜드 (NEVERLAND)", en: "NEVERLAND" },
    accentColor: "#9c59d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/official_g_i_dle/", twitter: "https://twitter.com/G_I_DLE", youtube: "https://www.youtube.com/@GIDLE" },
    wiki: { ko: "(여자)아이들은 큐브 엔터테인먼트 소속의 5인조 걸그룹입니다. 멤버 소연이 직접 작곡·작사에 참여하는 자체 제작 걸그룹입니다.", en: "(G)I-DLE is a 5-member self-producing girl group." },
    description: { ko: "소연이 직접 곡을 쓰고 이끄는 자체 제작 걸그룹. 강렬하고 실험적인 음악으로 독보적인 위치를 굳혔습니다.", en: "A self-producing girl group led by Soyeon." },
    tmi: {
      ko: [
        "소연은 JYP·YG·큐브를 거친 독특한 이력을 가진 연습생 출신으로, 그 경험이 (여자)아이들의 장르 다양성에 직접적인 영향을 줬습니다.",
        "멤버들은 컴백할 때마다 소연이 또 어떤 새로운 장르에 도전했는지 기대하며 '이번엔 또 뭐지?'라고 기다린다고 합니다.",
        "'TOMBOY', 'Queencard', 'Super Lady' 등 연속 히트를 이어가며 자체 제작 걸그룹의 새로운 기준을 제시하고 있습니다.",
        "민니는 태국 유명 가수 집안 출신이고, 슈화는 대만, 우기는 중국 상하이 출신으로 팀 내 국적이 다양해 자연스러운 다국어 소통이 이루어집니다.",
        "소연이 직접 작사·작곡·안무·영상 제작까지 도맡아 '소연 1인 제작사'라는 말이 나올 정도로 창작 능력이 전방위적으로 뛰어납니다."
      ],
      en: [
        "Soyeon passed through JYP, YG, and Cube — a unique background that directly shaped (G)I-DLE's genre diversity.",
        "Members say they always look forward to comebacks thinking 'what new genre did Soyeon try this time?' with genuine excitement.",
        "'TOMBOY', 'Queencard', 'Super Lady' — their consecutive hits have set a new standard for what a self-producing girl group can be.",
        "With Minnie from Thailand, Shuhua from Taiwan, and Yuqi from Shanghai, the group naturally communicates in multiple languages.",
        "Soyeon handles lyrics, composition, choreography, and video production almost single-handedly — fans joke she's a 'one-person production company'."
      ]
    },
    news: [
      { title: { ko: "(여자)아이들 'TOMBOY', 역주행 신드롬으로 차트 장기 1위", en: "(G)I-DLE 'TOMBOY' Tops Charts Long-Term in Reverse-Charting Syndrome" }, date: "2022.03.14", summary: { ko: "'TOMBOY'가 발매 후 서서히 역주행하며 장기 차트 1위를 기록, (여자)아이들의 대중적 전성기를 열었습니다.", en: "'TOMBOY' slowly climbed the charts after release and held #1 long-term, opening (G)I-DLE's mainstream heyday." }, url: "#" },
      { title: { ko: "(여자)아이들, 4집 'I NEVER DIE' 자체 최고 음반 성적 달성", en: "(G)I-DLE 4th Album 'I NEVER DIE' Achieves Personal Best Album Record" }, date: "2022.03.14", summary: { ko: "4집 'I NEVER DIE'가 발매 초동 기준 역대 최다 판매량을 기록하며 그룹의 새로운 전성기를 선언했습니다.", en: "4th album 'I NEVER DIE' broke their personal best first-week sales record, declaring a new era for the group." }, url: "#" },
      { title: { ko: "(여자)아이들 'Queencard', 멜론 차트 역주행 후 장기 집권", en: "(G)I-DLE 'Queencard' Reverse-Charts Then Holds Long-Term" }, date: "2023.05.15", summary: { ko: "'Queencard'가 발매 후 역주행 열풍을 타며 멜론 차트 상위권을 수주간 장악해 (여자)아이들 최대 히트곡 중 하나로 등극했습니다.", en: "'Queencard' rode a reverse-charting surge to dominate Melon for weeks, becoming one of (G)I-DLE's all-time biggest hits." }, url: "#" },
      { title: { ko: "소연, 솔로 앨범 '아이 DO' 발매… 천재 뮤지션 저력 과시", en: "Soyeon Releases Solo Album 'I DO', Showcasing Genius Musician Depth" }, date: "2023.06.27", summary: { ko: "소연이 솔로 앨범에서 작사·작곡·프로듀싱 전반을 직접 맡아 솔로 아티스트로서도 탁월한 역량을 증명했습니다.", en: "Soyeon handled all lyrics, composition, and production on her solo album, proving her excellence as a solo artist too." }, url: "#" },
      { title: { ko: "(여자)아이들, 데뷔 5주년 단독 콘서트 전석 매진 성료", en: "(G)I-DLE Completes Sold-Out 5th Anniversary Solo Concert" }, date: "2023.05.02", summary: { ko: "데뷔 5주년을 기념해 개최한 단독 콘서트가 전석 매진을 기록하며 탄탄한 팬덤 파워를 재확인했습니다.", en: "Their 5th anniversary solo concert sold out completely, reconfirming their powerful fandom." }, url: "#" },
      { title: { ko: "(여자)아이들 'Super Lady', 빌보드 글로벌 차트 최고 성적 달성", en: "(G)I-DLE 'Super Lady' Achieves Personal Best on Billboard Global Charts" }, date: "2024.01.29", summary: { ko: "'Super Lady'가 빌보드 글로벌 차트에서 역대 (여자)아이들 최고 성적을 기록하며 글로벌 영향력을 다시 한번 증명했습니다.", en: "'Super Lady' achieved (G)I-DLE's personal best on the Billboard Global charts, once again proving their global influence." }, url: "#" },
      { title: { ko: "(여자)아이들, 첫 단독 월드투어 성황리에 개최", en: "(G)I-DLE Successfully Launches First Solo World Tour" }, date: "2024.04.27", summary: { ko: "아시아·북미·유럽을 아우르는 첫 단독 월드투어를 성공적으로 시작하며 글로벌 팬들과 직접 만나는 시간을 가졌습니다.", en: "They successfully launched their first solo world tour spanning Asia, North America, and Europe, meeting global fans directly." }, url: "#" },
      { title: { ko: "민니, 솔로 앨범 'MINNIE' 발매… 독자적 아티스트 입지 구축", en: "Minnie Releases Solo Album 'MINNIE', Building Independent Artist Status" }, date: "2024.06.24", summary: { ko: "민니가 첫 솔로 미니 앨범을 발매해 그룹 활동 외 솔로 아티스트로서의 독자적인 음악 세계를 펼쳐 보였습니다.", en: "Minnie released her first solo mini album, unveiling an independent musical world beyond her group activities." }, url: "#" },
      { title: { ko: "(여자)아이들 'I SWAY' 발매, 자체 제작 걸그룹 진화 지속", en: "(G)I-DLE Releases 'I SWAY', Continuing Evolution as Self-Producing Girl Group" }, date: "2025.04.14", summary: { ko: "새 앨범 'I SWAY'에서도 소연의 자작곡을 중심으로 독보적인 음악성을 발휘하며 자체 제작 걸그룹의 기준을 이어가고 있습니다.", en: "With 'I SWAY', they continued showcasing incomparable musicality through Soyeon's compositions, maintaining the standard for self-producing girl groups." }, url: "#" },
      { title: { ko: "(여자)아이들, 데뷔 7주년 기념 팬 이벤트 및 새 프로젝트 예고", en: "(G)I-DLE Announces Fan Events and New Projects for 7th Debut Anniversary" }, date: "2025.05.02", summary: { ko: "데뷔 7주년을 앞두고 팬들을 위한 특별 이벤트와 새 음악 프로젝트를 예고하며 넘버랜드를 열광시켰습니다.", en: "Ahead of their 7th anniversary, they announced special fan events and new music projects, sending NEVERLAND into excitement." }, url: "#" }
    ],
    members: [
      {
        id: "miyeon",
        name: { ko: "미연", en: "Miyeon" },
        role: { ko: "메인보컬", en: "Main Vocalist" },
        birth: "1997.01.31", mbti: "INFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "163cm", bloodType: "O",
        description: { ko: "순수하고 맑은 보이스로 팀의 감성을 책임지는 메인 보컬입니다.", en: "The main vocalist responsible for the team's emotional depth with a pure, clear voice." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Miyeon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "YG 연습생 출신으로 블랙핑크 데뷔 멤버 후보였다는 이야기가 있어, 팬들 사이에서 '평행우주의 블랙핑크 미연'이라는 말이 회자됩니다.",
            "순수하고 맑은 목소리로 팬들에게 '목소리 그 자체가 악기'라는 극찬을 받으며 팀 감성의 핵심을 담당합니다.",
            "일본에서도 솔로 활동을 통해 탄탄한 팬층을 별도로 구축하며 그룹 외 독자적인 아티스트 커리어를 쌓아가고 있습니다.",
            "토끼처럼 귀를 세우는 '미연 토끼' 표정이 트레이드마크로, 팬들이 이 표정을 모은 영상 편집본을 꾸준히 만들어냅니다.",
            "개인 SNS를 통해 꾸밈없는 일상을 자주 공유하며 팬들에게 '진짜 미연'을 보여주려는 진정성 있는 소통을 합니다."
          ],
          en: [
            "As a former YG trainee rumored to have been a BLACKPINK debut candidate, fans half-jokingly refer to 'the parallel universe where Miyeon is in BLACKPINK'.",
            "Fans praise her pure, clear voice as 'an instrument in itself', calling her the emotional core that makes (G)I-DLE's music land.",
            "She has built a separate dedicated fanbase through solo activities in Japan, carving out an independent artist career beyond the group.",
            "Her 'Miyeon bunny' expression — mimicking rabbit ears — is her trademark, with fans continuously making compilation videos of the moment.",
            "She shares unfiltered glimpses of daily life on personal SNS, earning appreciation for the sincere effort to show fans her 'real self'."
          ]
        },
        socials: { instagram: "https://www.instagram.com/miyeon__dlwlrma/" }
      },
      {
        id: "minnie",
        name: { ko: "민니", en: "Minnie" },
        role: { ko: "리드보컬", en: "Lead Vocalist" },
        birth: "1997.10.23", mbti: "ENFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "163cm", bloodType: "B",
        description: { ko: "태국 출신의 리드 보컬로, 뛰어난 어학 실력과 감성적인 무대를 선보입니다.", en: "Thai lead vocalist with outstanding multilingual skills and emotionally resonant performances." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Minnie+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "태국 유명 가수 집안 출신으로, 이미 태국에서 '연예인 집안의 아이'로 알려진 상태에서 한국 연예계에 도전했습니다.",
            "태국어·영어·한국어·일본어를 구사하는 4개 국어 능통자로, 다국어 팬들과 자유자재로 소통합니다.",
            "리드 보컬로서 높은 음역대에서도 흔들리지 않는 가창력을 자랑하며, 라이브 무대에서 특히 빛납니다.",
            "솔로 앨범 'MINNIE'에서 직접 작사에 참여하며 음악적 깊이와 독자적인 아티스트로서의 가능성을 보여줬습니다.",
            "태국에서의 높은 인지도 덕분에 태국 광고·패션 브랜드의 러브콜이 끊이지 않으며, 태국 팬들의 열성적인 지지를 받고 있습니다."
          ],
          en: [
            "She comes from a prominent Thai music family and was already known as 'the celebrity family child' in Thailand before challenging the Korean entertainment industry.",
            "She speaks Thai, English, Korean, and Japanese fluently — freely connecting with fans in four languages.",
            "As lead vocalist, she maintains rock-solid stability in high registers and particularly shines in live performances.",
            "Her solo album 'MINNIE' featured her personal lyric contributions, showcasing her musical depth and potential as an independent artist.",
            "Her high profile in Thailand means she receives constant interest from Thai advertising and fashion brands, with Thai fans among her most devoted supporters."
          ]
        },
        socials: { instagram: "https://www.instagram.com/minniecandy1023/" }
      },
      {
        id: "soyeon",
        name: { ko: "소연", en: "Soyeon" },
        role: { ko: "리더/메인래퍼/프로듀서", en: "Leader/Main Rapper/Producer" },
        birth: "1998.08.26", mbti: "ENTJ",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "158cm", bloodType: "O",
        description: { ko: "직접 작사·작곡·프로듀싱까지 맡는 천재 래퍼이자 팀의 핵심 크리에이터입니다.", en: "A genius rapper who personally handles lyrics, composition, and producing — the group's creative core." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Soyeon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "JYP 서바이벌 오디션에서 최종 탈락 후 YG, 그리고 큐브로 이어지는 독특한 이력 끝에 (여자)아이들의 리더·프로듀서로 꽃을 피웠습니다.",
            "'TOMBOY', 'Nxde', 'Queencard', 'Super Lady' 등 연속 히트곡을 직접 만들어내며 '천재 뮤지션'이라는 칭호가 붙었습니다.",
            "무대 위에서는 강렬한 카리스마를 뿜어내지만, 일상에서는 아기처럼 귀엽고 사랑스러운 모습을 보이는 극적인 반전 매력을 가졌습니다.",
            "K-팝 안무 제안도 직접 참여하고 뮤직비디오 컨셉도 제안하는 등 음악 외 크리에이티브 전반에 관여하는 '원맨 크리에이티브 디렉터'입니다.",
            "신인 아이돌 지망생들에게 '소연처럼 자기만의 색깔을 가져야 한다'는 이야기가 업계 내 격언처럼 회자될 정도로 존경받습니다."
          ],
          en: [
            "After a final-round elimination from JYP's survival audition, followed by stints at YG and Cube, she blossomed as (G)I-DLE's leader and producer.",
            "Creating consecutive hits like 'TOMBOY', 'Nxde', 'Queencard', and 'Super Lady' earned her the title 'genius musician'.",
            "The contrast between her intense stage charisma and her adorable, baby-like off-stage personality is a source of endless fan delight.",
            "She contributes to choreography ideas and MV concepts in addition to music — effectively a 'one-woman creative director'.",
            "Among aspiring K-pop trainees, 'you need to have your own color like Soyeon' has become an industry-wide maxim."
          ]
        },
        socials: { instagram: "https://www.instagram.com/soyeon_dlwlrma/" }
      },
      {
        id: "yuqi",
        name: { ko: "우기", en: "Yuqi" },
        role: { ko: "리드보컬/댄서", en: "Lead Vocalist/Dancer" },
        birth: "1999.09.23", mbti: "ESTP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "163cm", bloodType: "O",
        description: { ko: "솔직 담백한 성격과 폭발적인 에너지로 팀의 분위기를 책임지는 무드 메이커입니다.", en: "The team's mood maker with a frank, explosive personality and boundless energy." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Yuqi+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "중국 상하이 출신으로 어릴 때부터 성악 훈련을 받았으며 K-팝에 빠져 혼자 한국으로 건너온 의지의 멤버입니다.",
            "솔직하고 거침없는 발언이 특기로 예능 프로그램마다 큰 웃음을 안겨주며 '(여자)아이들의 예능 에이스'로 불립니다.",
            "중국에서도 솔로 활동을 병행하며 두 나라에서 동시에 사랑받는 진정한 글로벌 아티스트입니다.",
            "멤버 중 체력이 가장 좋아 힘든 연습이 끝난 후에도 혼자 추가 트레이닝을 하는 것으로 팀 내에서 유명합니다.",
            "인스타그램 스토리를 가장 자주 업데이트하는 멤버로, 팬들에게 '실시간 일상 공개 채널'이라는 친근한 별명을 얻었습니다."
          ],
          en: [
            "From Shanghai, she received classical vocal training from a young age and made the solo journey to Korea after falling for K-pop — a true act of will.",
            "Her completely unfiltered, direct humor makes her the '(G)I-DLE variety ace', delivering big laughs on every program she appears on.",
            "She actively pursues solo activities in China as well, making her a genuinely dual-country global artist.",
            "She has the best endurance in the group and is known for continuing solo training sessions after exhausting group practices.",
            "She updates Instagram Stories more frequently than any member, earning the affectionate fan nickname 'real-time daily life broadcast channel'."
          ]
        },
        socials: { instagram: "https://www.instagram.com/yuqi_dlwlrma/" }
      },
      {
        id: "shuhua",
        name: { ko: "슈화", en: "Shuhua" },
        role: { ko: "보컬", en: "Vocalist" },
        birth: "2000.01.06", mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "165cm", bloodType: "AB",
        description: { ko: "대만 출신의 막내로, 솔직한 반응과 독특한 매력으로 팬들의 큰 사랑을 받고 있습니다.", en: "Taiwanese maknae beloved by fans for her honest reactions and uniquely charming presence." },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Shuhua+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "대만 출신으로 한국어를 전혀 모르는 상태로 큐브에 입사했지만, 연습생 기간 중 빠르게 습득해 지금은 유창하게 구사합니다.",
            "솔직하고 꾸밈없는 반응으로 방송에서 '리액션 킹'으로 불리며 본인 의도와 무관하게 큰 웃음을 선사합니다.",
            "대만에서 이미 광고 모델로 활동한 경험이 있을 정도로 어릴 때부터 비주얼로 주목받았습니다.",
            "한국어가 서툴 때 억지로 말을 이어가며 웃음을 주던 '슈화 한국어 성장기'는 팬들이 여전히 사랑하는 레전드 콘텐츠입니다.",
            "지금은 유창한 한국어를 자랑하지만, 가끔 나오는 특유의 억양과 표현이 팬들에게 '슈화표 한국어'로 불리며 큰 사랑을 받습니다."
          ],
          en: [
            "She arrived at Cube knowing zero Korean from Taiwan, yet picked it up rapidly during training — she now speaks it fluently.",
            "Her completely unfiltered reactions earn her the title 'Reaction King' on variety shows, delivering unintentional laughs that steal scenes.",
            "She was already a model for advertisements in Taiwan before debuting, showing she was recognized for her visuals from an early age.",
            "Her early 'Shuhua learning Korean' era — forcing conversation with limited vocabulary and lovable confusion — is legendary fan content still cherished today.",
            "She now speaks fluent Korean, but her unique accent and phrasing have become what fans call 'Shuhua-brand Korean' — adored by all."
          ]
        },
        socials: { instagram: "https://www.instagram.com/shuhua_dlwlrma/" }
      }
    ]
  }
];
