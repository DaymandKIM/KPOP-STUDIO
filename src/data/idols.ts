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
  role?: LocalizedString;
  birth: string;
  mbti: string;
  zodiac?: LocalizedString;
  height: string;
  bloodType: string;
  description?: LocalizedString;
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
  company?: string;
  debut: string;
  fandom: LocalizedString;
  officialSite?: string;
  accentColor?: string;
  imageUrl: string;
  wiki: LocalizedString;
  description?: LocalizedString;
  summary?: LocalizedString;
  tmi: LocalizedArray;
  news: News[];
  members: Member[];
  socials?: Socials;
}

export const KPOP_GROUPS: KpopGroup[] = [
  {
    id: "twice",
    name: { ko: "트와이스", en: "TWICE", ja: "トゥワイス (TWICE)", zh: "TWICE", es: "TWICE", id: "TWICE", fr: "TWICE", hi: "ट्वाइस (TWICE)", pt: "TWICE", ar: "توايس (TWICE)", th: "ทไวซ์ (TWICE)", vi: "TWICE", ru: "TWICE" },
    officialSite: "https://twice.jype.com/",
    company: "JYP Entertainment",
    accentColor: "#ff5fa2",
    imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Group+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/twicetagram/", twitter: "https://twitter.com/JYPETWICE", youtube: "https://www.youtube.com/@TWICE", tiktok: "https://www.tiktok.com/@twice_tiktok_official" },
    fandom: { ko: "원스 (ONCE)", en: "ONCE", ja: "ワンス (ONCE)", zh: "ONCE", es: "ONCE", id: "ONCE", fr: "ONCE", hi: "वन्स (ONCE)", pt: "ONCE", ar: "وانس (ONCE)", th: "วันซ์ (ONCE)", vi: "ONCE", ru: "ONCE" },
    debut: "2015.10.20",
    wiki: { ko: "트와이스(TWICE)는 JYP 엔터테인먼트 소속의 9인조 다국적 걸그룹입니다. '눈으로 한 번, 귀로 한 번 감동을 준다'는 의미를 담고 있으며, K-팝을 대표하는 국민 걸그룹입니다.", en: "TWICE is a 9-member multinational girl group under JYP Entertainment. The name means touching people's hearts twice: once through the ears and once through the eyes." },
    description: { ko: "K-팝을 대표하는 국민 걸그룹. 눈으로 한 번, 귀로 한 번 감동을 주는 9인 9색의 매력을 자랑합니다.", en: "The nation's girl group representing K-pop. They boast 9 unique charms that touch hearts once through the ears and once through the eyes." },
    summary: { ko: "아시아를 넘어 글로벌 최정상에 오른 걸그룹. 특유의 밝고 긍정적인 에너지와 수많은 메가 히트곡을 보유하고 있습니다.", en: "A top-tier global girl group beyond Asia. Known for their bright, positive energy and countless mega-hit songs." },
    news: [
      { title: { ko: "트와이스, 美 최대 규모 스타디움 공연 매진", en: "TWICE Sells Out Largest US Stadium Tour" }, date: "2023.07.06", summary: { ko: "K-팝 걸그룹 최초로 미국 소파이 스타디움과 메트라이프 스타디움 공연을 매진시키며 글로벌 위상을 증명했습니다.", en: "They proved their global status by becoming the first K-pop girl group to sell out SoFi Stadium and MetLife Stadium." }, url: "#" },
      { title: { ko: "트와이스 미니 13집 'With YOU-th', 빌보드 200 1위 달성", en: "TWICE's 13th Mini Album 'With YOU-th' Tops Billboard 200" }, date: "2024.03.03", summary: { ko: "미니 13집이 미국 빌보드 메인 앨범 차트 1위에 오르며 데뷔 10년 차에도 끝없는 커리어 하이를 기록했습니다.", en: "Their 13th mini album topped the Billboard main album chart, achieving a new career high even in their 10th year." }, url: "#" }
    ],
    tmi: {
      ko: [
        "서바이벌 프로그램 'SIXTEEN'을 통해 결성되었습니다.",
        "팀명 TWICE는 박진영 PD가 직접 지은 이름으로, '좋은 음악으로 한 번, 멋진 퍼포먼스로 또 한 번 감동을 선사하겠다'는 뜻입니다.",
        "데뷔곡 'OOH-AHH하게'부터 'CHEER UP', 'TT' 등 발표하는 곡마다 메가 히트를 기록했습니다.",
        "한국, 일본, 대만 3개국 출신 멤버로 구성되어 다국적 팬덤의 탄탄한 지지를 받습니다.",
        "팬덤 이름 'ONCE'는 '한 번 받은 사랑을 두 배(TWICE)로 보답하겠다'는 의미입니다."
      ],
      en: [
        "Formed through the survival show 'SIXTEEN'.",
        "The name TWICE was created by J.Y. Park, meaning 'to touch hearts once through good music, and twice through great performance'.",
        "From their debut 'Like OOH-AHH' to 'CHEER UP' and 'TT', almost every release has been a mega-hit.",
        "Composed of members from Korea, Japan, and Taiwan, garnering strong support from a multinational fandom.",
        "The fandom name 'ONCE' means 'we will return the love we receive once, twice (TWICE) as much'."
      ]
    },
    members: [
      { id: "nayeon", name: { ko: "나연", en: "NAYEON", ja: "ナヨン", zh: "林娜璉" }, role: { ko: "리드보컬, 센터", en: "Lead Vocalist, Center" }, birth: "1995.09.22", height: "163cm", bloodType: "A", mbti: "ISFP", zodiac: { ko: "처녀자리", en: "Virgo" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Nayeon+Profile", socials: {}, tmi: { ko: ["트와이스의 영원한 센터이자 리드보컬. 과즙미 넘치는 맏언니입니다."], en: ["TWICE's eternal center and lead vocalist. The oldest member bursting with fruity charm."] } },
      { id: "jeongyeon", name: { ko: "정연", en: "JEONGYEON", ja: "ジョンヨン", zh: "俞定延" }, role: { ko: "리드보컬", en: "Lead Vocalist" }, birth: "1996.11.01", height: "167cm", bloodType: "O", mbti: "ISFJ", zodiac: { ko: "전갈자리", en: "Scorpio" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Jeongyeon+Profile", socials: {}, tmi: { ko: ["팀의 걸크러시를 담당하며 따뜻하고 배려심 넘치는 성격의 소유자입니다."], en: ["In charge of girl crush in the team, known for her warm and caring personality."] } },
      { id: "momo", name: { ko: "모모", en: "MOMO", ja: "モモ", zh: "平井桃" }, role: { ko: "메인댄서, 서브보컬", en: "Main Dancer, Sub Vocalist" }, birth: "1996.11.09", height: "162cm", bloodType: "A", mbti: "INFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Momo+Profile", socials: {}, tmi: { ko: ["일본 출신 메인 댄서로 K-팝 전체에서도 손꼽히는 춤 실력을 자랑합니다."], en: ["Main dancer from Japan, boasting some of the best dance skills in all of K-pop."] } },
      { id: "sana", name: { ko: "사나", en: "SANA", ja: "サナ", zh: "湊崎紗夏" }, role: { ko: "서브보컬", en: "Sub Vocalist" }, birth: "1996.12.29", height: "163cm", bloodType: "B", mbti: "ENFP", zodiac: { ko: "염소자리", en: "Capricorn" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Sana+Profile", socials: {}, tmi: { ko: ["'샤샤샤' 열풍의 주인공. 애교가 많고 특유의 밝은 에너지로 팬들을 사로잡습니다."], en: ["The star of the 'Shy Shy Shy' craze. Captivates fans with her aegyo and bright energy."] } },
      { id: "jihyo", name: { ko: "지효", en: "JIHYO", ja: "ジヒョ", zh: "朴志效" }, role: { ko: "리더, 메인보컬", en: "Leader, Main Vocalist" }, birth: "1997.02.01", height: "160cm", bloodType: "O", mbti: "ISFP", zodiac: { ko: "물병자리", en: "Aquarius" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Jihyo+Profile", socials: {}, tmi: { ko: ["10년의 긴 연습생 생활을 거친 탄탄한 실력의 리더이자 메인 보컬입니다."], en: ["The leader and main vocal with solid skills built over 10 years of training."] } },
      { id: "mina", name: { ko: "미나", en: "MINA", ja: "ミナ", zh: "名井南" }, role: { ko: "메인댄서, 서브보컬", en: "Main Dancer, Sub Vocalist" }, birth: "1997.03.24", height: "163cm", bloodType: "A", mbti: "ISTP", zodiac: { ko: "양자리", en: "Aries" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Mina+Profile", socials: {}, tmi: { ko: ["발레를 전공한 일본 출신 멤버로, 특유의 우아하고 청순한 매력을 뽐냅니다."], en: ["Japanese member who majored in ballet, showcasing a unique elegant and pure charm."] } },
      { id: "dahyun", name: { ko: "다현", en: "DAHYUN", ja: "ダヒョン", zh: "金多賢" }, role: { ko: "리드래퍼, 서브보컬", en: "Lead Rapper, Sub Vocalist" }, birth: "1998.05.28", height: "159cm", bloodType: "O", mbti: "ISFJ", zodiac: { ko: "쌍둥이자리", en: "Gemini" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Dahyun+Profile", socials: {}, tmi: { ko: ["팀의 리드 래퍼로, 예능감이 뛰어나고 피부가 매우 하얘서 '두부'라는 별명이 있습니다."], en: ["Lead rapper of the team, known for her great sense of humor and pale 'tofu' skin."] } },
      { id: "chaeyoung", name: { ko: "채영", en: "CHAEYOUNG", ja: "チェヨン", zh: "孫彩瑛" }, role: { ko: "메인래퍼, 서브보컬", en: "Main Rapper, Sub Vocalist" }, birth: "1999.04.23", height: "159cm", bloodType: "B", mbti: "INFP", zodiac: { ko: "황소자리", en: "Taurus" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Chaeyoung+Profile", socials: {}, tmi: { ko: ["독특한 예술적 감각을 지닌 메인 래퍼로 직접 곡 작업과 그림 작업에 참여합니다."], en: ["Main rapper with a unique artistic sense, actively participating in songwriting and drawing."] } },
      { id: "tzuyu", name: { ko: "쯔위", en: "TZUYU", ja: "ツウィ", zh: "周子瑜" }, role: { ko: "리드댄서, 서브보컬, 막내", en: "Lead Dancer, Sub Vocalist, Maknae" }, birth: "1999.06.14", height: "170cm", bloodType: "A", mbti: "ISFP", zodiac: { ko: "쌍둥이자리", en: "Gemini" }, imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Tzuyu+Profile", socials: {}, tmi: { ko: ["대만 출신 막내로, 압도적인 여신 비주얼로 데뷔 초부터 큰 화제를 모았습니다."], en: ["The maknae from Taiwan, drawing huge attention from debut for her overwhelming goddess visuals."] } }
    ]
  },
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
    , ja: "NewJeans は ADOR 所属の 5 人組多国籍ガールズ グループで、日常のジーンズのように時代のアイコンになるという野望を持っています。ミン・ヒジンがプロデュースしたこの曲は、K-POP における「Y2K」と「イージーリスニング」のトレンドを引き起こしました。 90年代後半から00年代前半のノスタルジーを現代的に再解釈し、10代の自然な雰囲気を強調することで、デビューと同時に大規模なシンドロームを生み出しました。", zh: "NewJeans是ADOR旗下的一个5人跨国女子组合，立志成为像日常牛仔裤一样的时代偶像。它们由 Min Hee-jin 制作，引发了韩国流行音乐中的“Y2K”和“轻松聆听”趋势。他们以现代方式重新诠释 90 年代末至 00 年代初的怀旧情绪，强调自然的青少年氛围，一出道就创造了一种巨大的综合症。", es: "NewJeans es un grupo de chicas multinacional de 5 miembros bajo ADOR, con la ambición de convertirse en íconos de la época como los jeans de todos los días. Producidos por Min Hee-jin, provocaron las tendencias 'Y2K' y 'easy listening' en el K-pop. Al reinterpretar de manera moderna la nostalgia de finales de los 90 y principios de los 2000 y enfatizar las vibraciones naturales de la adolescencia, crearon un síndrome masivo en su debut.", id: "NewJeans adalah girl grup multinasional beranggotakan 5 orang di bawah ADOR, dengan ambisi untuk menjadi ikon zaman seperti jeans sehari-hari. Diproduksi oleh Min Hee-jin, mereka memicu tren 'Y2K' dan 'easy-listening' di K-pop. Dengan menafsirkan kembali nostalgia akhir tahun 90an hingga awal tahun 00an secara modern dan menekankan getaran remaja alami, mereka menciptakan sindrom besar saat debut.", fr: "NewJeans est un groupe féminin multinational de 5 membres dirigé par ADOR, avec l'ambition de devenir des icônes de l'époque comme les jeans de tous les jours. Produits par Min Hee-jin, ils ont déclenché les tendances « Y2K » et « easy-listening » dans la K-pop. En réinterprétant de manière moderne la nostalgie de la fin des années 90 au début des années 2000 et en mettant l’accent sur les vibrations naturelles des adolescents, ils ont créé un énorme syndrome dès leurs débuts.", hi: "न्यूज़ीन्स ADOR के तहत 5-सदस्यीय बहुराष्ट्रीय लड़कियों का समूह है, जिसकी महत्वाकांक्षा रोजमर्रा की जींस की तरह समय की प्रतीक बनने की है। मिन ही-जिन द्वारा निर्मित, उन्होंने के-पॉप में 'Y2K' और 'आसान-सुनने' के रुझान को जन्म दिया। 90 के दशक के उत्तरार्ध से लेकर 00 के दशक की शुरुआत तक की पुरानी यादों की आधुनिक रूप से पुनर्व्याख्या करके और प्राकृतिक किशोर भावनाओं पर जोर देकर, उन्होंने पदार्पण पर एक विशाल सिंड्रोम बनाया।", pt: "NewJeans é um grupo feminino multinacional de 5 membros da ADOR, com a ambição de se tornarem ícones da época como o jeans do dia a dia. Produzidos por Min Hee-jin, eles desencadearam as tendências 'Y2K' e 'easy-listing' no K-pop. Ao reinterpretar modernamente a nostalgia do final dos anos 90 ao início dos anos 2000 e enfatizar as vibrações naturais da adolescência, eles criaram uma enorme síndrome na estreia.", ar: "NewJeans هي مجموعة فتيات متعددة الجنسيات مكونة من 5 أعضاء تحت إشراف ADOR، وتطمح إلى أن تصبح أيقونات العصر مثل الجينز اليومي. تم إنتاجها بواسطة Min Hee-jin، وقد أثارت اتجاهات \"Y2K\" و\"الاستماع السهل\" في موسيقى البوب ​​الكورية. من خلال إعادة تفسير الحنين إلى أواخر التسعينيات وأوائل القرن العشرين بشكل عصري والتأكيد على المشاعر الطبيعية للمراهقين، فقد خلقوا متلازمة هائلة عند ظهورهم لأول مرة.", th: "NewJeans คือเกิร์ลกรุ๊ปข้ามชาติที่มีสมาชิก 5 คนภายใต้ ADOR ด้วยความทะเยอทะยานที่จะกลายเป็นไอคอนแห่งยุคสมัยเช่นเดียวกับยีนส์ในชีวิตประจำวัน ผลิตโดย Min Hee-jin พวกเขาจุดประกายกระแส 'Y2K' และ 'ฟังง่าย' ใน K-pop ด้วยการตีความความคิดถึงของช่วงปลายยุค 90 ถึงต้นยุค 00 ใหม่อย่างทันสมัย ​​และเน้นย้ำถึงกลิ่นอายของวัยรุ่นตามธรรมชาติ สิ่งเหล่านี้จึงสร้างความฮือฮาครั้งใหญ่เมื่อเปิดตัว", vi: "NewJeans là nhóm nhạc nữ đa quốc gia gồm 5 thành viên trực thuộc ADOR, với tham vọng trở thành biểu tượng của thời đại giống như những chiếc quần jean thường ngày. Được sản xuất bởi Min Hee-jin, họ đã khơi dậy xu hướng 'Y2K' và 'dễ nghe' trong K-pop. Bằng cách diễn giải lại nỗi nhớ những năm cuối thập niên 90 đến đầu những năm 00 một cách hiện đại và nhấn mạnh vào cảm xúc tự nhiên của tuổi teen, họ đã tạo ra một hội chứng lớn khi ra mắt.", ru: "NewJeans — это транснациональная женская группа из пяти участниц ADOR, стремящаяся стать иконами времени, как повседневные джинсы. Продюсированные Мин Хи Джин, они положили начало тенденциям «Y2K» и «легкой музыки» в K-pop. Современно интерпретируя ностальгию конца 90-х - начала 00-х и подчеркивая естественные подростковые вибрации, они создали огромный синдром после дебюта." },
    description: {
      ko: "Y2K 신드롬의 주역, 꾸밈없는 자연스러운 매력과 트렌디한 이지리스닝 음악으로 전 세계를 사로잡은 4세대 대표 아이콘입니다.",
      en: "The pioneers of the Y2K syndrome, representing the 4th generation with their unpretentious natural charm and trendy easy-listening music."
    , ja: "Y2Kシンドロームの先駆者であり、気取らないナチュラルな魅力とトレンドのイージーリスニングミュージックで第4世代を代表するグループ。", zh: "Y2K综合症的先驱者，以朴实无华的自然魅力和流行轻松的音乐代表第四代。", es: "Los pioneros del síndrome Y2K, que representan la cuarta generación con su encanto natural sin pretensiones y su música moderna y fácil de escuchar.", id: "Pelopor sindrom Y2K, mewakili generasi ke-4 dengan pesona alamnya yang bersahaja dan musik trendi yang enak didengar.", fr: "Les pionniers du syndrome de l'an 2000, représentant la 4ème génération avec leur charme naturel sans prétention et leur musique tendance et facile à écouter.", hi: "Y2K सिंड्रोम के अग्रदूत, अपने स्पष्ट प्राकृतिक आकर्षण और ट्रेंडी आसानी से सुनने वाले संगीत के साथ चौथी पीढ़ी का प्रतिनिधित्व करते हैं।", pt: "Os pioneiros da síndrome Y2K, representando a 4ª geração com seu charme natural despretensioso e música moderna e fácil de ouvir.", ar: "رواد متلازمة Y2K، الذين يمثلون الجيل الرابع بسحرهم الطبيعي المتواضع وموسيقاهم العصرية سهلة الاستماع.", th: "ผู้บุกเบิกกลุ่มอาการ Y2K เป็นตัวแทนของรุ่นที่ 4 ที่มีเสน่ห์ตามธรรมชาติที่ไม่โอ้อวดและเพลงที่ฟังง่ายทันสมัย", vi: "Những người tiên phong tạo nên hội chứng Y2K, đại diện cho thế hệ thứ 4 với nét duyên dáng tự nhiên không phô trương và dòng nhạc thời thượng dễ nghe.", ru: "Первопроходцы синдрома Y2K, представляющие 4-е поколение с их неприхотливым природным обаянием и модной легкой музыкой." },
    tmi: {
      ko: [
        "뉴진스라는 이름은 매일 찾게 되고 언제 입어도 질리지 않는 '청바지(Jeans)'처럼 시대의 아이콘이 되겠다는 의미를 담고 있습니다.",
        "데뷔 전 멤버들은 민희진 전 대표의 집에서 함께 영화를 보고 밥을 먹으며 유대감을 쌓았다고 합니다.",
        "멤버 전원이 영어를 유창하게 구사하거나 수준급의 소통 능력을 갖추고 있어 해외 인터뷰 시 통역 없이 진행하는 경우가 많습니다.",
        "뉴진스 숙소는 '버니하우스'라고 불릴 만큼 멤버들이 서로 붙어 다니며 끈끈한 자매애를 과시합니다.",
        "뉴진스의 'Hype Boy'는 데뷔 전 티저 영상만으로 음원 차트를 역주행해 데뷔 전부터 신드롬이 된 전무후무한 기록입니다.",
        "K-팝 걸그룹 최초로 미국의 대형 음악 페스티벌 '롤라팔루자' 무대에 서며 글로벌 인기를 입증했습니다.",
        "멤버들끼리 옷을 자주 공유해서 입으며, 서로의 패션 스타일에 많은 영향을 준다고 합니다.",
        "민지와 하니는 데뷔 전 BTS의 'Permission to Dance' 뮤직비디오에 깜짝 출연한 적이 있습니다.",
        "'Ditto' 뮤직비디오는 팬들 사이에서 수많은 해석을 낳으며 K-팝 뮤직비디오의 예술적 지평을 넓혔다는 평을 받습니다.",
        "데뷔 앨범의 모든 곡이 타이틀곡 수준의 완성도를 가져 전 곡이 음원 차트 최상위권에 오르는 기염을 토했습니다."
      ],
      en: [
        "The name NewJeans means becoming icons of the era like 'Jeans' that never go out of style.",
        "Before debut, members bonded at former CEO Min Hee-jin's home, watching movies and eating together.",
        "All members have excellent English communication skills, often conducting global interviews without interpreters.",
        "Members are so close they're often described as actual sisters, not just groupmates.",
        "'Hype Boy' charted on Korean music charts from pre-release teasers alone — a historic first.",
        "They were the first K-pop girl group to perform at Lollapalooza, a major US music festival.",
        "The members often share clothes and influence each other's fashion styles.",
        "Minji and Hanni made a cameo appearance in BTS's 'Permission to Dance' music video before their debut.",
        "The 'Ditto' music video sparked numerous fan theories and is praised for its artistic depth.",
        "All tracks in their debut album were of such high quality that they all topped major music charts."
      ],
      ja: [
        "NewJeansという名前は、毎日履いても飽きない「ジーンズ（Jeans）」のように、時代のアイコンになるという意味が込められています。",
        "デビュー前、メンバーたちはミン・ヒジン前代表の家で一緒に映画を見たり食事をしたりして、絆を深めたそうです。",
        "メンバー全員が英語を流暢に話すか、高いコミュニケーション能力を持っており、海外のインタビューを通訳なしで行うことが多いです。",
        "NewJeansの宿舎は「バニーハウス」と呼ばれるほどメンバー同士が仲良く、強い絆を誇っています。",
        "NewJeansの「Hype Boy」は、デビュー前のティーザー映像だけで音源チャートを逆走し、デビュー前からシンドロームになった前例のない記録を持っています。"
      ],
      zh: [
        "NewJeans这个名字寓意着像每天都想穿、怎么穿都不会腻的“牛仔裤（Jeans）”一样，成为时代的偶像。",
        "据说出道前成员们在敏熙珍前代表家中一起看电影、吃饭，建立了深厚的感情。",
        "全体成员都能流利地使用英语或具备高水准的沟通能力，因此在进行海外采访时经常不需要翻译。",
        "NewJeans的宿舍被称为“兔子屋”，成员们经常粘在一起，展现出深厚的姐妹情谊。",
        "NewJeans的《Hype Boy》仅凭出道前的预告视频就在音源榜单上逆袭，创下了出道前就成为热潮的前所未有的纪录。"
      ],
      es: [
        "El nombre NewJeans significa convertirse en íconos de la era como los 'Jeans' que nunca pasan de moda.",
        "Antes del debut, las miembros se unieron en la casa de la ex CEO Min Hee-jin, viendo películas y comiendo juntas.",
        "Todas las miembros tienen excelentes habilidades de comunicación en inglés, a menudo realizando entrevistas globales sin intérpretes.",
        "El dormitorio de NewJeans se llama 'Bunny House' porque las miembros son tan cercanas que a menudo se las describe como hermanas reales.",
        "'Hype Boy' de NewJeans llegó a las listas musicales coreanas solo con los teasers previos al lanzamiento, un hito histórico."
      ],
      id: [
        "Nama NewJeans berarti menjadi ikon era seperti 'Jeans' yang tidak pernah ketinggalan zaman.",
        "Sebelum debut, para anggota menjalin ikatan di rumah mantan CEO Min Hee-jin, menonton film dan makan bersama.",
        "Semua anggota memiliki kemampuan komunikasi bahasa Inggris yang sangat baik, sering melakukan wawancara global tanpa penerjemah.",
        "Asrama NewJeans disebut 'Bunny House' karena para anggotanya sangat dekat dan menunjukkan persaudaraan yang kuat.",
        "'Hype Boy' dari NewJeans memuncaki tangga lagu musik Korea hanya dari teaser pra-rilis — yang pertama dalam sejarah."
      ],
      fr: [
        "Le nom NewJeans signifie devenir des icônes de l'époque, comme les « Jeans » qui ne se démodent jamais.",
        "Avant leurs débuts, les membres ont tissé des liens chez l'ancienne PDG Min Hee-jin, en regardant des films et en mangeant ensemble.",
        "Tous les membres ont d'excellentes compétences en communication en anglais, menant souvent des interviews mondiales sans interprètes.",
        "Le dortoir de NewJeans est appelé « Bunny House » parce que les membres sont si proches qu'elles sont souvent décrites comme de véritables sœurs.",
        "« Hype Boy » de NewJeans s'est classé dans les charts musicaux coréens uniquement grâce aux teasers avant la sortie — une première historique."
      ],
      hi: [
        "न्यूजींस (NewJeans) नाम का अर्थ है 'जींस' की तरह युग का प्रतीक बनना जो कभी फैशन से बाहर नहीं होता।",
        "डेब्यू से पहले, सदस्य पूर्व सीईओ मिन ही-जिन के घर पर एक साथ फिल्में देखने और खाना खाने के दौरान एक-दूसरे के करीब आए।",
        "सभी सदस्यों के पास उत्कृष्ट अंग्रेजी संचार कौशल है, वे अक्सर दुभाषियों के बिना वैश्विक साक्षात्कार आयोजित करते हैं।",
        "न्यूजींस के डॉर्म को 'बनी हाउस' कहा जाता है क्योंकि सदस्य एक-दूसरे के बहुत करीब हैं और उनके बीच गहरा प्यार है।",
        "न्यूजींस के 'हाइप बॉय' ने केवल प्री-रिलीज़ टीज़र से ही कोरियाई संगीत चार्ट पर जगह बनाई — यह एक ऐतिहासिक रिकॉर्ड है।"
      ],
      pt: [
        "O nome NewJeans significa tornar-se ícones da era como 'Jeans' que nunca saem de moda.",
        "Antes da estreia, as integrantes criaram laços na casa da ex-CEO Min Hee-jin, assistindo a filmes e comendo juntas.",
        "Todas as integrantes têm excelentes habilidades de comunicação em inglês, muitas vezes realizando entrevistas globais sem intérpretes.",
        "O dormitório do NewJeans é chamado de 'Bunny House' porque as integrantes são tão próximas que costumam ser descritas como irmãs de verdade.",
        "'Hype Boy' do NewJeans entrou nas paradas musicais coreanas apenas com os teasers de pré-lançamento — um marco histórico."
      ],
      ar: [
        "اسم نيوجينز يعني أن يصبحوا أيقونات للعصر مثل \"الجينز\" الذي لا يخرج أبداً عن الموضة.",
        "قبل الظهور لأول مرة، توطدت علاقة العضوات في منزل الرئيسة التنفيذية السابقة مين هي جين، حيث شاهدن الأفلام وتناولن الطعام معاً.",
        "تمتلك جميع العضوات مهارات تواصل ممتازة باللغة الإنجليزية، وغالباً ما يجرين مقابلات عالمية دون مترجمين.",
        "يُطلق على سكن نيوجينز اسم \"بيت الأرانب\" (Bunny House) نظراً لمدى قرب العضوات من بعضهن البعض وإظهارهن لأخوة قوية.",
        "حققت أغنية \"Hype Boy\" لنيوجينز نجاحاً عكسياً في مخططات الموسيقى من خلال الفيديوهات التشويقية قبل الظهور الأول فقط، وهو رقم قياسي غير مسبوق."
      ],
      th: [
        "ชื่อ NewJeans หมายถึงการเป็นไอคอนแห่งยุคสมัยเหมือนกับ 'กางเกงยีนส์ (Jeans)' ที่หยิบมาใส่ได้ทุกวันและไม่มีวันตกยุค",
        "ก่อนเดบิวต์ สมาชิกได้สร้างความสัมพันธ์ที่แน่นแฟ้นด้วยการดูหนังและกินข้าวร่วมกันที่บ้านของอดีต CEO มินฮีจิน",
        "สมาชิกทุกคนสามารถพูดภาษาอังกฤษได้อย่างคล่องแคล่วหรือมีทักษะการสื่อสารในระดับสูง ทำให้มักจะสัมภาษณ์กับสื่อต่างชาติได้โดยไม่ต้องใช้ล่าม",
        "หอพักของ NewJeans ถูกเรียกว่า 'Bunny House' เพราะสมาชิกสนิทกันมากและมักจะตัวติดกันตลอดเหมือนเป็นพี่น้องแท้ๆ",
        "เพลง 'Hype Boy' ของ NewJeans สร้างปรากฏการณ์ไต่ชาร์ตเพลงด้วยเพียงแค่วิดีโอทีเซอร์ก่อนเดบิวต์ ซึ่งเป็นสถิติที่ไม่เคยมีมาก่อน"
      ],
      vi: [
        "Tên NewJeans mang ý nghĩa trở thành biểu tượng của thời đại giống như chiếc 'quần jean (Jeans)' mà chúng ta tìm kiếm hàng ngày và không bao giờ lỗi mốt.",
        "Trước khi ra mắt, các thành viên được cho là đã xây dựng mối quan hệ gắn bó bằng cách cùng nhau xem phim và ăn uống tại nhà của cựu CEO Min Hee-jin.",
        "Tất cả các thành viên đều nói tiếng Anh lưu loát hoặc có kỹ năng giao tiếp ở mức độ cao, nên thường thực hiện các cuộc phỏng vấn ở nước ngoài mà không cần phiên dịch.",
        "Ký túc xá của NewJeans được gọi là 'Bunny House' vì các thành viên luôn quấn quýt bên nhau và thể hiện tình chị em bền chặt.",
        "Bài hát 'Hype Boy' của NewJeans đã lội ngược dòng trên các bảng xếp hạng âm nhạc chỉ bằng video teaser trước khi ra mắt, một kỷ lục vô tiền khoáng hậu."
      ],
      ru: [
        "Название NewJeans означает стремление стать иконами эпохи, подобно «джинсам» (Jeans), которые всегда актуальны.",
        "Перед дебютом участницы сблизились в доме бывшего генерального директора Мин Хи Джин, вместе смотря фильмы и обедая.",
        "Все участницы либо свободно владеют английским, либо обладают отличными навыками общения, поэтому часто дают зарубежные интервью без переводчиков.",
        "Общежитие NewJeans называют «Bunny House» (Дом кроликов), так как участницы очень близки и демонстрируют крепкую сестринскую связь.",
        "Песня «Hype Boy» поднялась в музыканых чартах только благодаря тизерам еще до официального релиза, что стало беспрецедентным рекордом."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 'Attention'으로 데뷔 즉시 역주행 신드롬", en: "NewJeans Debut 'Attention' Becomes Instant Reverse-Charting Phenomenon" , ja: "NewJeansのデビュー作「注目」がたちまち逆転チャート現象に", zh: "NewJeans 首秀“关注”瞬间成为反向图表现象", es: "La 'atención' del debut de NewJeans se convierte instantáneamente en un fenómeno de gráficos inversos", id: "'Perhatian' Debut NewJeans Menjadi Fenomena Reverse-Charting Instan", fr: "Les débuts de NewJeans, « Attention », deviennent un phénomène instantané de cartographie inversée", hi: "न्यूज़ीन्स का डेब्यू 'अटेंशन' तुरंत रिवर्स-चार्टिंग घटना बन गया", pt: "'Atenção' de estreia da NewJeans se torna um fenômeno instantâneo de gráfico reverso", ar: "ظهور NewJeans لأول مرة \"الانتباه\" يصبح ظاهرة فورية للرسم البياني العكسي", th: "การเปิดตัว NewJeans 'Attention' กลายเป็นปรากฏการณ์การสร้างแผนภูมิย้อนกลับในทันที", vi: "'Sự chú ý' ra mắt của NewJeans trở thành hiện tượng lập biểu đồ ngược ngay lập tức", ru: "Дебют NewJeans «Внимание» мгновенно стал феноменом обратного графика" },
        date: "2022.07.22",
        summary: { ko: "뉴진스가 데뷔곡 'Attention'과 'Hype Boy'로 발매 즉시 음원차트 상위권을 휩쓸며 4세대 팝 신드롬의 서막을 열었습니다.", en: "NewJeans swept the charts immediately upon debut with 'Attention' and 'Hype Boy', heralding a new 4th-gen pop syndrome." , ja: "NewJeansはデビュー直後に「アテンション」と「ハイプ・ボーイ」でチャートを席巻し、新たな第4世代ポップ・シンドロームの到来を告げた。", zh: "NewJeans 凭借《Attention》和《Hype Boy》一经推出就横扫排行榜，预示着新的第四代流行综合症的到来。", es: "NewJeans arrasó en las listas inmediatamente después de su debut con 'Attention' y 'Hype Boy', presagiando un nuevo síndrome pop de cuarta generación.", id: "NewJeans menyapu tangga lagu segera setelah debut dengan 'Attention' dan 'Hype Boy', menandai sindrom pop generasi ke-4 yang baru.", fr: "NewJeans a balayé les charts dès ses débuts avec « Attention » et « Hype Boy », annonçant un nouveau syndrome pop de 4e génération.", hi: "न्यूज़ीन्स ने 'अटेंशन' और 'हाइप बॉय' के साथ शुरुआत करते ही चार्ट में धूम मचा दी, और एक नए चौथी पीढ़ी के पॉप सिंड्रोम की शुरुआत की।", pt: "NewJeans varreu as paradas imediatamente após sua estreia com 'Attention' e 'Hype Boy', anunciando uma nova síndrome pop de 4ª geração.", ar: "اكتسح NewJeans المخططات فور ظهوره لأول مرة بأغنيتي \"Attention\" و\"Hype Boy\"، مما يبشر بمتلازمة البوب ​​​​الجيل الرابع الجديدة.", th: "NewJeans กวาดชาร์ตทันทีที่เปิดตัวด้วยเพลง 'Attention' และ 'Hype Boy' ถือเป็นการประกาศถึงป๊อปซินโดรมเจนเนอเรชั่นที่ 4 ใหม่", vi: "NewJeans đã càn quét các bảng xếp hạng ngay khi ra mắt với \"Attention\" và \"Hype Boy\", báo trước một hội chứng nhạc pop thế hệ thứ 4 mới.", ru: "NewJeans сразу же после дебюта покорили чарты с песнями «Attention» и «Hype Boy», предвещая новый поп-синдром четвертого поколения." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 'Ditto', 멜론 역대 최장 1위 기록 경신", en: "NewJeans 'Ditto' Breaks Record for Longest No.1 on Melon Chart" , ja: "NewJeans「Ditto」がメロンチャート最長1位記録を更新", zh: "NewJeans 'Ditto' 打破 Melon 排行榜上最长第一名的记录", es: "NewJeans 'Ditto' bate el récord del número 1 más largo en Melon Chart", id: "NewJeans 'Ditto' Pecahkan Rekor No.1 Terpanjang di Melon Chart", fr: "NewJeans 'Ditto' bat le record du numéro 1 le plus long du classement Melon", hi: "न्यूज़ीन्स 'डिट्टो' ने मेलन चार्ट पर सबसे लंबे समय तक नंबर 1 रहने का रिकॉर्ड तोड़ा", pt: "NewJeans 'Ditto' quebra recorde de maior número 1 no Melon Chart", ar: "NewJeans 'Ditto' يحطم الرقم القياسي لأطول رقم 1 على مخطط البطيخ", th: "NewJeans 'Ditto' ทำลายสถิติครองอันดับ 1 ยาวนานที่สุดในชาร์ต Melon", vi: "NewJeans 'Ditto' phá kỷ lục đứng đầu lâu nhất trên bảng xếp hạng Melon", ru: "NewJeans 'Ditto' бьет рекорд и занимает первое место в чарте Melon Chart" },
        date: "2023.01.30",
        summary: { ko: "'Ditto'가 멜론 차트에서 수십 주 연속 1위를 기록하며 역대 최장 기간 1위 기록을 새로 썼습니다.", en: "'Ditto' rewrote history by topping the Melon chart for a record-breaking consecutive streak." , ja: "「Ditto」は、記録破りの連続連続記録でメロン・チャートの1位となり、歴史を塗り替えた。", zh: "“Ditto”连续打破记录连续登上 Melon 排行榜榜首，改写了历史。", es: "'Ditto' reescribió la historia al encabezar la lista Melon por una racha consecutiva récord.", id: "'Ditto' menulis ulang sejarah dengan menduduki puncak tangga lagu Melon untuk rekor berturut-turut yang memecahkan rekor.", fr: "\"Idem\" a réécrit l'histoire en arrivant en tête du classement Melon pour une séquence consécutive record.", hi: "'डिट्टो' ने लगातार रिकॉर्ड तोड़ मेलोन चार्ट में शीर्ष स्थान हासिल करके इतिहास को फिर से लिखा।", pt: "'Ditto' reescreveu a história ao liderar a parada do Melon por uma seqüência recorde consecutiva.", ar: "أعاد \"Ditto\" كتابة التاريخ من خلال تصدره مخطط Melon لخط متتالية حطمت الأرقام القياسية.", th: "'Ditto' สร้างประวัติศาสตร์ใหม่ด้วยการติดอันดับชาร์ต Melon ทำลายสถิติติดต่อกัน", vi: "'Ditto' đã viết lại lịch sử bằng cách đứng đầu bảng xếp hạng Melon với chuỗi kỷ lục liên tiếp.", ru: "«Ditto» переписал историю, возглавив чарт Melon, установив рекордную серию подряд." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 미니 2집 'Get Up', 빌보드 200 데뷔 1위", en: "NewJeans Mini Album 'Get Up' Debuts at No.1 on Billboard 200" , ja: "NewJeansミニアルバム「Get Up」がビルボード200で初登場1位を獲得", zh: "NewJeans 迷你专辑《Get Up》首次亮相就登上 Billboard 200 排行榜第一名", es: "El mini álbum de NewJeans 'Get Up' debuta en el puesto número 1 del Billboard 200", id: "Mini Album NewJeans 'Get Up' Debut di No.1 di Billboard 200", fr: "Le mini album de NewJeans « Get Up » fait ses débuts au n°1 du Billboard 200", hi: "न्यूज़ीन्स मिनी एल्बम 'गेट अप' ने बिलबोर्ड 200 पर नंबर 1 पर डेब्यू किया", pt: "Mini álbum da NewJeans ‘Get Up’ estreia em primeiro lugar na Billboard 200", ar: "ألبوم NewJeans Mini 'Get Up' يظهر لأول مرة في المركز الأول على Billboard 200", th: "มินิอัลบั้ม NewJeans 'Get Up' เปิดตัวอันดับ 1 บน Billboard 200", vi: "Mini Album NewJeans 'Get Up' ra mắt ở vị trí số 1 trên Billboard 200", ru: "Мини-альбом NewJeans «Get Up» дебютировал на первом месте в Billboard 200" },
        date: "2023.08.05",
        summary: { ko: "미니 2집 'Get Up'이 빌보드 200 차트 정상에 오르며 K-팝 걸그룹 역대 최고 데뷔 성적을 기록했습니다.", en: "Mini album 'Get Up' debuted at #1 on the Billboard 200, marking the highest debut for a K-pop girl group album." , ja: "ミニアルバム「ゲットアップ」はビルボード200で初登場1位を記録し、K-POPガールズグループのアルバムとしては最高位のデビューを記録した。", zh: "迷你专辑《Get Up》首次亮相就在 Billboard 200 排行榜上排名第一，创下了韩国流行女团专辑的最高首秀成绩。", es: "El mini álbum 'Get Up' debutó en el puesto número 1 en el Billboard 200, marcando el debut más alto para un álbum de un grupo de chicas de K-pop.", id: "Mini album 'Get Up' debut di #1 di Billboard 200, menandai debut tertinggi untuk album girl grup K-pop.", fr: "Le mini-album « Get Up » a fait ses débuts au premier rang du Billboard 200, marquant ainsi le plus haut début pour un album de groupe de filles K-pop.", hi: "मिनी एल्बम 'गेट अप' ने बिलबोर्ड 200 पर #1 पर शुरुआत की, जो कि किसी के-पॉप गर्ल समूह एल्बम के लिए सर्वोच्च शुरुआत है।", pt: "O mini-álbum 'Get Up' estreou em primeiro lugar na Billboard 200, marcando a maior estreia de um álbum de grupo feminino de K-pop.", ar: "ظهر الألبوم المصغر \"Get Up\" في المركز الأول في قائمة Billboard 200، وهو أعلى ظهور لألبوم فرقة فتيات كورية.", th: "มินิอัลบั้ม 'Get Up' เปิดตัวที่อันดับ 1 บน Billboard 200 ซึ่งถือเป็นการเปิดตัวสูงสุดสำหรับอัลบั้มเกิร์ลกรุ๊ป K-pop", vi: "Mini album 'Get Up' ra mắt ở vị trí số 1 trên bảng xếp hạng Billboard 200, đánh dấu mức ra mắt cao nhất cho một album của nhóm nhạc nữ K-pop.", ru: "Мини-альбом «Get Up» дебютировал под номером 1 в Billboard 200, что стало самым высоким дебютом для альбома женской K-pop группы." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 일본 공식 데뷔… 오리콘 1위 석권", en: "NewJeans Makes Official Japan Debut, Tops Oricon Chart" , ja: "NewJeansが日本正式デビュー、オリコンチャートで1位を獲得", zh: "NewJeans 正式日本出道，登顶 Oricon 排行榜", es: "NewJeans hace su debut oficial en Japón y encabeza la lista Oricon", id: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", fr: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", hi: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", pt: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", ar: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", th: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", vi: "NewJeans Makes Official Japan Debut, Tops Oricon Chart", ru: "NewJeans Makes Official Japan Debut, Tops Oricon Chart" },
        date: "2023.08.16",
        summary: { ko: "일본 공식 데뷔 앨범이 오리콘 주간 앨범 차트 1위를 기록하며 J-팝 시장에 성공적으로 안착했습니다.", en: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market." , ja: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", zh: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", es: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", id: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", fr: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", hi: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", pt: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", ar: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", th: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", vi: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market.", ru: "Their official Japanese debut album topped the Oricon weekly album chart, successfully entering the J-pop market." },
        url: "#"
      },
      {
        title: { ko: "뉴진스 'How Sweet', 전 세계 동시 발매 후 글로벌 차트 장악", en: "NewJeans 'How Sweet' Dominates Global Charts Upon Release" , ja: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", zh: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", es: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", id: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", fr: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", hi: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", pt: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", ar: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", th: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", vi: "NewJeans 'How Sweet' Dominates Global Charts Upon Release", ru: "NewJeans 'How Sweet' Dominates Global Charts Upon Release" },
        date: "2024.05.24",
        summary: { ko: "신보 'How Sweet'가 멜론·스포티파이 등 국내외 차트를 동시에 점령하며 변함없는 영향력을 증명했습니다.", en: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence." , ja: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", zh: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", es: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", id: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", fr: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", hi: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", pt: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", ar: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", th: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", vi: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence.", ru: "'How Sweet' simultaneously dominated Melon and Spotify global charts, proving their enduring influence." },
        url: "#"
      },
      {
        title: { ko: "뉴진스, 도쿄돔 단독 팬미팅 4만 석 전석 매진", en: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting" , ja: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", zh: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", es: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", id: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", fr: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", hi: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", pt: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", ar: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", th: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", vi: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting", ru: "NewJeans Sells Out 40,000-Seat Tokyo Dome Fan Meeting" },
        date: "2024.06.26",
        summary: { ko: "일본 최대 공연장 도쿄돔에서 단독 팬미팅을 개최, 4만 석을 전석 매진시키며 아시아 최정상 걸그룹임을 입증했습니다.", en: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group." , ja: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", zh: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", es: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", id: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", fr: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", hi: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", pt: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", ar: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", th: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", vi: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group.", ru: "Sold out all 40,000 seats at Tokyo Dome for a solo fan meeting, cementing their status as Asia's top girl group." },
        url: "#"
      },
      {
        title: { ko: "어도어 이사회, 민희진 대표이사 해임 의결", en: "ADOR Board Votes to Dismiss CEO Min Hee-jin" , ja: "ADOR Board Votes to Dismiss CEO Min Hee-jin", zh: "ADOR Board Votes to Dismiss CEO Min Hee-jin", es: "ADOR Board Votes to Dismiss CEO Min Hee-jin", id: "ADOR Board Votes to Dismiss CEO Min Hee-jin", fr: "ADOR Board Votes to Dismiss CEO Min Hee-jin", hi: "ADOR Board Votes to Dismiss CEO Min Hee-jin", pt: "ADOR Board Votes to Dismiss CEO Min Hee-jin", ar: "ADOR Board Votes to Dismiss CEO Min Hee-jin", th: "ADOR Board Votes to Dismiss CEO Min Hee-jin", vi: "ADOR Board Votes to Dismiss CEO Min Hee-jin", ru: "ADOR Board Votes to Dismiss CEO Min Hee-jin" },
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
        name: { ko: "민지", en: "Minji", ja: "ミンジ", zh: "玟池", es: "Minji", id: "Minji", fr: "Minji", hi: "मिंजी (Minji)", pt: "Minji", ar: "مينجي (Minji)", th: "มินจี", vi: "Minji", ru: "Минджи" },
        role: { ko: "리더/보컬/댄서", en: "Leader/Vocalist/Dancer", ja: "リーダー/ボーカル/ダンサー", zh: "队长/声乐/舞者", es: "Líder/Vocalista/Bailarina", id: "Pemimpin/Vokalis/Penari", fr: "Leader/Vocaliste/Danseuse", hi: "लीडर/वोकलिस्ट/डांसर", pt: "Líder/Vocalista/Dançarina", ar: "قائدة/مغنية/راقصة", th: "ลีดเดอร์/นักร้อง/นักเต้น", vi: "Trưởng nhóm/Ca sĩ/Vũ công", ru: "Лидер/Вокалист/Танцор" },
        birth: "2004.05.07",
        mbti: "ESTJ",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "おうし座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ (Taurus)", pt: "Touro", ar: "برج الثور", th: "ราศีพฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "고전적인 미인형으로 '국민 첫사랑' 이미지를 가졌으며 책임감이 강한 성격입니다.", en: "A classic beauty with a 'Nation's First Love' image and a strong sense of responsibility.", ja: "古典的な美人顔で「国民の初恋」のイメージを持ち、責任感が強い性格です。", zh: "拥有古典美人相和“国民初恋”的形象，性格具有强烈的责任感。", es: "Una belleza clásica con una imagen de 'Primer Amor de la Nación' y un fuerte sentido de la responsabilidad.", id: "Kecantikan klasik dengan imej 'Cinta Pertama Bangsa' dan rasa tanggung jawab yang kuat.", fr: "Une beauté classique avec une image de « premier amour de la nation » et un sens aigu des responsabilités.", hi: "'राष्ट्र के पहले प्यार' की छवि वाली एक क्लासिक सुंदरता और जिम्मेदारी की गहरी भावना वाली सदस्य।", pt: "Uma beleza clássica com uma imagem de 'Primeiro Amor da Nação' e um forte senso de responsabilidade.", ar: "جمال كلاسيكي مع صورة \"حب الأمة الأول\" وشخصية تتمتع بإحساس قوي بالمسؤولية.", th: "มีความสวยแบบคลาสสิกจนได้รับฉายา 'รักแรกแห่งชาติ' และเป็นคนที่มีความรับผิดชอบสูง", vi: "Sở hữu vẻ đẹp cổ điển với hình ảnh 'Tình đầu quốc dân' và có tính cách đầy trách nhiệm.", ru: "Классическая красавица с образом «Первой любви нации» и сильным чувством ответственности." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Minji+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "チームの公式な最年長で、メンバーの誕生日や好きな食べ物をすべて把握している徹底したリーダーです。",
            "カルグクスを一度も食べたことがないと明かし、ファンが「ミンジにカルグクスを食べさせるプロジェクト」を行うほど話題になりました。",
            "ルイ・ヴィトンのグローバルアンバサダーとしてパリ・ファッションウィークに出席し、全世界のファッションメディアの注目を浴びました。",
            "手紙を書くのが好きで、ファンに直接手書きのメッセージを書くことで有名です。",
            "学生時代に生徒会長を務めるほどリーダーシップに優れており、その傾向はデビュー後もそのまま続いています。"
          ],
          zh: [
            "作为团队的大姐，她是位能记住所有成员生日和喜好食物的称职队长。",
            "她曾透露自己从未吃过刀切面，甚至引发了粉丝们发起“让玟池吃刀切面项目”，成为了热门话题。",
            "作为路易威登全球大使出席巴黎时装周，受到了全世界时尚媒体的关注。",
            "喜欢写信，因经常给粉丝写亲笔信而闻名。",
            "在校期间曾担任过学生会主席，领导力出众，这种特质在出道后也得到了延续。"
          ],
          es: [
            "Como la mayor oficial del equipo, es una líder minuciosa que se sabe de memoria los cumpleaños y las comidas favoritas de todas las miembros.",
            "Reveló que nunca había comido kalguksu (fideos cortados a cuchillo), lo que se volvió tan viral que los fans iniciaron un 'proyecto para que Minji coma kalguksu'.",
            "Como embajadora global de Louis Vuitton, asistió a la Semana de la Moda de París y fue el centro de atención de los medios de moda de todo el mundo.",
            "Le gusta escribir cartas a mano y es famosa por escribir mensajes personalizados a sus fans.",
            "Su liderazgo es tan excelente que fue presidenta del consejo estudiantil en la escuela, una cualidad que continúa después de su debut."
          ],
          id: [
            "Sebagai kakak tertua resmi di tim, dia adalah pemimpin teliti yang menghafal semua ulang tahun dan makanan favorit anggota.",
            "Dia mengungkapkan bahwa dia belum pernah makan kalguksu, yang menjadi topik hangat hingga penggemar mengadakan 'proyek memberi makan kalguksu kepada Minji'.",
            "Sebagai duta global Louis Vuitton, dia menghadiri Paris Fashion Week dan mendapat sorotan dari media mode seluruh dunia.",
            "Dia senang menulis surat tangan dan dikenal sering menulis pesan langsung untuk penggemar.",
            "Dia memiliki kepemimpinan yang sangat baik hingga menjabat sebagai ketua OSIS saat sekolah, dan sifat itu berlanjut setelah debut."
          ],
          fr: [
            "En tant qu'aînée officielle de l'équipe, elle est une leader méticuleuse qui connaît par cœur les anniversaires et les plats préférés de tous les membres.",
            "Elle a révélé n'avoir jamais mangé de kalguksu (nouilles coupées au couteau), ce qui est devenu viral au point que les fans ont lancé un projet pour lui en faire manger.",
            "En tant qu'ambassadrice mondiale de Louis Vuitton, elle a assisté à la Fashion Week de Paris et a attiré l'attention des médias de mode du monde entier.",
            "Elle aime écrire des lettres à la main et est connue pour écrire des messages personnels à ses fans.",
            "Elle a d'excellentes capacités de leadership, ayant été présidente du conseil des élèves à l'école, une qualité qui se poursuit après ses débuts."
          ],
          hi: [
            "टीम की सबसे बड़ी सदस्य के रूप में, वह एक जिम्मेदार लीडर हैं जो हर सदस्य का जन्मदिन और पसंदीदा भोजन याद रखती हैं।",
            "उन्होंने बताया कि उन्होंने कभी कालगुकसु (चाकू से कटे नूडल्स) नहीं खाया है, जो इतना चर्चा में रहा कि प्रशंसकों ने 'मिंजी को कालगुकसु खिलाने का प्रोजेक्ट' शुरू कर दिया।",
            "लुई वीटॉन (Louis Vuitton) की वैश्विक राजदूत के रूप में, उन्होंने पेरिस फैशन वीक में भाग लिया और दुनिया भर के मीडिया का ध्यान आकर्षित किया।",
            "नन्हें हाथ से पत्र लिखना पसंद है और वे प्रशंसकों को व्यक्तिगत संदेश लिखने के लिए जानी जाती हैं।",
            "स्कूल में छात्र परिषद की अध्यक्ष रहने के कारण उनका नेतृत्व कौशल बहुत अच्छा है, जो डेब्यू के बाद भी जारी है।",
          ],
          pt: [
            "Como a integrante mais velha oficial da equipe, ela é uma líder minuciosa que sabe de cor todos os aniversários e comidas favoritas das integrantes.",
            "Ela revelou que nunca tinha comido kalguksu (macarrão cortado à faca), o que se tornou tão viral que os fãs iniciaram um 'projeto para fazer Minji comer kalguksu'.",
            "Como embaixadora global da Louis Vuitton, ela participou da Paris Fashion Week e recebeu o destaque da mídia de moda de todo o mundo.",
            "Ela gosta de escrever cartas à mão e é famosa por escrever mensagens personalizadas para os fãs.",
            "Sua liderança é tão excelente que ela foi presidente do conselho estudantil na escola, uma característica que continua após sua estreia."
          ],
          ar: [
            "بصفتها العضوة الأكبر سناً في الفريق، فهي قائدة دقيقة تحفظ تواريخ ميلاد جميع العضوات وأطعمهن المفضلة.",
            "كشفت أنها لم تأكل \"الكالغوكسو\" (نودلز مقطوعة بالسكين) قط، مما أثار ضجة كبيرة لدرجة أن المعجبين أطلقوا \"مشروع إطعام مينجي الكالغوكسو\".",
            "بصفتها سفيرة عالمية للوي فيتون، حضرت أسبوع الموضة في باريس وأصبحت محط أنظار وسائل الإعلام العالمية.",
            "تستمتع بكتابة الرسائل بخط اليد وتشتهر بكتابة رسائل شخصية للمعجبين.",
            "تميزت بقيادتها منذ أيام المدرسة حيث كانت رئيسة لمجلس الطلبة، وهو أسلوب قيادي استمر معها بعد الظهور الأول."
          ],
          th: [
            "ในฐานะพี่ใหญ่ของวง เธอเป็นลีดเดอร์ที่ใส่ใจรายละเอียดมากจนจำวันเกิดและของโปรดของสมาชิกทุกคนได้ทั้งหมด",
            "เธอเคยเปิดเผยว่าไม่เคยทาน 'คัลกุกซู (บะหมี่สับ)' จนกลายเป็นไวรัลที่แฟนๆ ถึงกับทำโปรเจกต์ 'พามินจีไปกินคัลกุกซู'",
            "ในฐานะ Global Ambassador ของ Louis Vuitton เธอได้เข้าร่วมงาน Paris Fashion Week และได้รับความสนใจจากสื่อแฟชั่นทั่วโลก",
            "เธอชอบการเขียนจดหมายด้วยลายมือ และมีชื่อเสียงเรื่องการเขียนข้อความถึงแฟนๆ ด้วยตัวเอง",
            "เธอมีความเป็นผู้นำสูงถึงขั้นเคยเป็นประธานนักเรียนสมัยเรียน และบุคลิกนั้นยังคงส่งผลมาถึงบทบาทลีดเดอร์ของ NewJeans"
          ],
          vi: [
            "Là chị cả của nhóm, cô là một trưởng nhóm chu đáo khi ghi nhớ tất cả ngày sinh nhật và món ăn yêu thích của các thành viên.",
            "Cô đã tiết lộ rằng mình chưa bao giờ ăn kalguksu (mỳ cắt), điều này đã trở thành chủ đề nóng đến mức người hâm mộ đã thực hiện 'Dự án cho Minji ăn kalguksu'.",
            "Với tư cách là đại sứ toàn cầu của Louis Vuitton, cô đã tham dự Tuần lễ thời trang Paris và nhận được sự chú ý của giới truyền thông thời trang toàn thế giới.",
            "Cô thích viết thư tay và nổi tiếng với việc tự tay viết tin nhắn cho người hâm mộ.",
            "Khả năng lãnh đạo của cô rất xuất sắc, cô từng là chủ tịch hội học sinh khi còn đi học, và tố chất đó vẫn tiếp tục sau khi ra mắt."
          ],
          ru: [
            "Как старшая в группе, она является ответственным лидером, который помнит все дни рождения и любимые булда участниц.",
            "Она призналась, что никогда не пробовала калгуксу (лапшу, нарезанную ножом), что стало настолько обсуждаемой темой, что фанаты запустили проект «Накормим Минджи калгуксу».",
            "В качестве глобального амбассадора Louis Vuitton она посетила Неделю моды в Париже, оказавшись в центре внимания мировых модных изданий.",
            "Она любит писать письма от руки и известна тем, что отправляет фанатам личные сообщения, написанные собственноручно.",
            "Она обладала отличными лидерскими качествами еще в школе, где была президентом школьного совета, и эта черта сохранилась у нее и после дебюта."
          ]
        }
      },
      {
        id: "hanni",
        name: { ko: "하니", en: "Hanni", ja: "ハニ", zh: "牟尼", es: "Hanni", id: "Hanni", fr: "Hanni", hi: "हन्नी (Hanni)", pt: "Hanni", ar: "هاني (Hanni)", th: "ฮันนี่", vi: "Hanni", ru: "Ханни" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "声乐/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Vocaliste/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "นักร้อง/นักเต้น", vi: "Ca sĩ/Vũ công", ru: "Вокалист/Танцор" },
        birth: "2004.10.06",
        mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला (Libra)", pt: "Libra", ar: "برج الميزان", th: "ราศีตุลย์", vi: "Thiên Bình", ru: "Весы" },
        height: "161.7cm",
        bloodType: "O",
        description: { ko: "베트남계 호주인. 독보적인 음색과 리듬감을 가졌으며, 무대 위 카리스마가 대단합니다.", en: "Vietnamese-Australian. Has a unique voice and rhythm, showing immense charisma on stage.", ja: "ベトナム系オーストラリア人。独歩的な歌声とリズム感を持ち、ステージ上のカリスマ性が素晴らしいです。", zh: "越南裔澳大利亚人。拥有独特的音色和节奏感，舞台魅力十足。", es: "Vietnamita-australiana. Tiene una voz y un ritmo únicos, mostrando un inmenso carisma en el escenario.", id: "Vietnam-Australia. Memiliki suara dan ritme yang unik, menunjukkan karisma yang luar biasa di atas panggung.", fr: "Vietnamienne-Australienne. Possède une voix et un rythme uniques, faisant preuve d'un immense charisme sur scène.", hi: "वियतनामी-ऑस्ट्रेलियाई सदस्य। उनकी आवाज़ और रिदम अद्वितीय है, और वे मंच पर जबरदस्त करिश्मा दिखाती हैं।", pt: "Vietnamita-australiana. Tem uma voz e um ritmo únicos, mostrando um imenso carisma no palco.", ar: "فيتنامية أسترالية. تمتلك نبرة صوت وإحساساً بالإيقاع لا مثيل لهما، وتظهر كاريزما هائلة على المسرح.", th: "ชาวเวียดนาม-ออสเตรเลีย มีน้ำเสียงและจังหวะที่เป็นเอกลักษณ์ และมีคาริสม่าที่ยอดเยี่ยมบนเวที", vi: "Người Úc gốc Việt. Sở hữu âm sắc và cảm nhận nhịp điệu độc đáo, tỏa sáng với thần thái cực đỉnh trên sân khấu.", ru: "Вьетнамо-австралийка. Обладает уникальным голосом и чувством ритма, демонстрируя на сцене невероятную харизму." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Hanni+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "ベトナム系オーストラリア人で、英語・韓国語・ベトナム語をすべて流暢に話すトリリンガルです。",
            "練習生時代のデビュー前に、すでに「Hype Boy」の歌詞制作にアイデアを提案し、音楽的才能を発揮しました。",
            "韓国生活の初期にプルダック炒め麺の魅力にハマり、「激辛料理マニア」になり、今でもよく食べているそうです。",
            "2024年に国連総会の「子どもの権利」関連のイベントに出席し、K-POPスター以上の影響力を見せました。",
            "オーストラリアでK-POPファンとしてオーディションに挑戦し合格した「成功したオタク」であり、ファンとのコミュニケーションを最も積極的に楽しんでいます。"
          ],
          zh: [
            "越南裔澳大利亚人，能流利使用英语、韩语和越南语，是一位精通三国语言的才女。",
            "练习生时期在出道前就已经为《Hype Boy》的歌词创作提供了创意，展现了音乐才华。",
            "韩国生活初期便被火鸡面的魅力所吸引，成为了“辛辣食物狂热者”，至今仍经常寻找辛辣食物。",
            "2024年出席了联合国大会关于“儿童权利”的相关活动，展现了超越K-pop明星的影响力。",
            "曾在澳大利亚作为K-pop粉丝参加选秀并合格，是“追星成功的典范”，非常积极地与粉丝交流。"
          ],
          es: [
            "Es vietnamita-australiana y habla con fluidez inglés, coreano y vietnamita.",
            "Antes del debut, contribuyó con ideas para la letra de 'Hype Boy' durante sus días de aprendiz, mostrando su instinto musical desde temprano.",
            "Se convirtió en una adicta certificada a la comida picante después de conocer los fideos coreanos buldak y todavía los busca constantemente.",
            "Asistió a un evento de la Asamblea General de la ONU sobre los derechos del niño en 2024, demostrando su influencia más allá del K-pop.",
            "Es una verdadera fan convertida en ídolo: era fan del K-pop en Australia antes de audicionar y entrar."
          ],
          id: [
            "Dia adalah warga Vietnam-Australia dan fasih berbicara bahasa Inggris, Korea, dan Vietnam.",
            "Sebelum debut, dia menyumbangkan ide lirik untuk 'Hype Boy' selama masa trainee, menunjukkan insting musiknya sejak dini.",
            "Dia menjadi pecandu makanan pedas setelah mencoba mie buldak Korea dan masih terus mencarinya hingga sekarang.",
            "Dia menghadiri acara Majelis Umum PBB tentang hak-hak anak pada tahun 2024, menunjukkan pengaruhnya di luar K-pop.",
            "Dia adalah penggemar yang menjadi idola: dia adalah penggemar K-pop di Australia sebelum mengikuti audisi dan berhasil masuk."
          ],
          fr: [
            "Elle est vietnamienne-australienne et parle couramment l'anglais, le coréen et le vietnamien.",
            "Avant ses débuts, elle a contribué aux paroles de « Hype Boy » pendant ses jours de stagiaire, montrant son instinct musical dès le début.",
            "Elle est devenue une véritable adepte de la nourriture épicée après avoir découvert les nouilles buldak coréennes et continue d'en manger régulièrement.",
            "Elle a assisté à un événement de l'Assemblée générale des Nations Unies sur les droits de l'enfant en 2024, démontrant son influence au-delà de la K-pop.",
            "C'est une véritable fan devenue idole : elle était fan de K-pop en Australie avant de passer les auditions et d'être sélectionnée."
          ],
          hi: [
            "वे वियतनामी-ऑस्ट्रेलियाई हैं और अंग्रेजी, कोरियाई और वियतनामी धाराप्रवाह बोलती हैं।",
            "डेब्यू से पहले, उन्होंने प्रशिक्षु के दिनों में 'हाइप बॉय' के लिए गीतों के विचार दिए, जिससे उनकी संगीत प्रतिभा का पता चला।",
            "कोरियाई बुलडक नूडल्स खाने के बाद वे तीखे भोजन की शौकीन बन गईं और अब भी उन्हें बहुत पसंद करती हैं।",
            "उन्होंने 2024 में बाल अधिकारों पर संयुक्त राष्ट्र महासभा के एक कार्यक्रम में भाग लिया, जो उनके प्रभाव को दर्शाता है।",
            "वे एक सच्ची 'फैन-टर्नड-आइडल' हैं: वे ऑस्ट्रेलिया में के-पॉप प्रशंसक थीं और फिर ऑडिशन देकर सफल हुईं।"
          ],
          pt: [
            "Ela é vietnamita-australiana e fala fluentemente inglês, coreano e vietnamita.",
            "Antes da estreia, ela contribuiu com ideias de letras para 'Hype Boy' durante os dias de trainee, mostrando seu instinto musical cedo.",
            "Ela se tornou uma viciada em comida apimentada depois de conhecer o macarrão buldak coreano e ainda os procura constantemente.",
            "Ela participou de um evento da Assembleia Geral da ONU sobre os direitos da criança em 2024, demonstrando sua influência além do K-pop.",
            "Ela é uma verdadeira fã que se tornou ídolo: era fã de K-pop na Austrália antes de fazer o teste e passar."
          ],
          ar: [
            "هي فيتنامية أسترالية وتتحدث اللغات الإنجليزية والكورية والفيتنامية بطلاقة.",
            "قبل الظهور الأول، ساهمت بأفكار لكلمات أغنية \"Hype Boy\" خلال أيام تدريبها، مظهرة موهبتها الموسيقية مبكراً.",
            "أصبحت مدمنة على الطعام الحار بعد تجربتها لنودلز \"بولداك\" الكورية، ولا تزال تبحث عنها باستمرار.",
            "حضرت فعالية في الجمعية العامة للأمم المتحدة تتعلق بـ \"حقوق الطفل\" في عام 2024، مما أظهر تأثيرها الذي يتجاوز نجوم الكي-بوب.",
            "هي قصة نجاح لمعجبة تحولت إلى نجمة؛ فقد كانت من محبي الكي-بوب في أستراليا قبل أن تخوض تجربة الأداء وتنجح."
          ],
          th: [
            "เป็นชาวเวียดนาม-ออสเตรเลียที่สามารถพูดได้ทั้งภาษาอังกฤษ เกาหลี และเวียดนามได้อย่างคล่องแคล่ว",
            "ตั้งแต่สมัยเป็นเด็กฝึกก่อนเดบิวต์ เธอได้เสนอไอเดียในการเขียนเนื้อเพลง 'Hype Boy' ซึ่งแสดงให้เห็นถึงพรสวรรค์ทางดนตรีของเธอ",
            "หลังจากได้ลองชิมบะหมี่เผ็ดเกาหลี (Buldak) ในช่วงแรกที่มาอยู่เกาหลี เธอก็กลายเป็น 'มาเนียอาหารเผ็ด' และยังคงชอบทานอยู่จนถึงตอนนี้",
            "ในปี 2024 เธอได้เข้าร่วมงานเกี่ยวกับ 'สิทธิเด็ก' ในการประชุมสมัชชาใหญ่แห่งสหประชาชาติ แสดงให้เห็นถึงอิทธิพลที่นอกเหนือจากบทบาทสตาร์ K-pop",
            "เธอคือตัวแทนของ 'ติ่งที่ประสบความสำเร็จ' เพราะเคยเป็นแฟนคลับ K-pop ที่ออสเตรเลียก่อนจะมาออดิชั่นจนได้เป็นไอดอล"
          ],
          vi: [
            "Cô là người Úc gốc Việt và nói thông thạo cả tiếng Anh, tiếng Hàn và tiếng Việt.",
            "Từ trước khi ra mắt, cô đã đóng góp ý tưởng cho lời bài hát 'Hype Boy' trong thời gian làm thực tập sinh, bộc lộ năng khiếu âm nhạc từ sớm.",
            "Sau khi đến Hàn Quốc, cô đã bị thu hút bởi mì cay Buldak và trở thành 'tín đồ món cay', cho đến nay cô vẫn thường xuyên tìm ăn món này.",
            "Cô đã tham dự sự kiện về 'Quyền trẻ em' tại Đại hội đồng Liên hợp quốc năm 2024, thể hiện tầm ảnh hưởng vượt xa tầm vóc của một ngôi sao K-pop.",
            "Cô là hình mẫu 'fan thành công' điển hình: từng là fan K-pop tại Úc trước khi thử giọng và trúng tuyển."
          ],
          ru: [
            "Она вьетнамо-австралийка и свободно говорит на английском, корейском и вьетнамском языках.",
            "Еще во время стажировки до дебюта она предлагала идеи для текста песни «Hype Boy», рано проявив свои музыкальные способности.",
            "В начале жизни в Корее она полюбила лапшу «Пультак» и стала фанаткой острой еды, которую с удовольствием ест и сейчас.",
            "В 2024 году она посетила мероприятие Генеральной Ассамблеи ООН, посвященное правам детей, продемонстрировав свое влияние.",
            "Она — пример «успешного фаната»: она была поклонницей K-pop в Австралии до того, как прошла прослушивание."
          ]
        }
      },
      {
        id: "danielle",
        name: { ko: "다니엘", en: "Danielle", ja: "ダニエル", zh: "丹妮尔", es: "Danielle", id: "Danielle", fr: "Danielle", hi: "डेनिएल (Danielle)", pt: "Danielle", ar: "دانييل (Danielle)", th: "ดาเนียล", vi: "Danielle", ru: "Даниэль" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "声乐/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Vocaliste/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "นักร้อง/นักเต้น", vi: "Ca sĩ/Vũ công", ru: "Вокалист/Танцор" },
        birth: "2005.04.11",
        mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries", ja: "おひつじ座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष (Aries)", pt: "Áries", ar: "برج الحمل", th: "ราศีเมษ", vi: "Bạch Dương", ru: "Овен" },
        height: "165cm",
        bloodType: "AB",
        description: { ko: "햇살 같은 에너지를 가진 비타민 같은 멤버. 디즈니 공주 같은 비주얼로 유명합니다.", en: "A vitamin-like member with sunny energy. Famous for her Disney princess visuals.", ja: "日差しのようなエネルギーを持つビタミン剤のようなメンバー。ディズニープリンセスのようなビジュアルで有名です。", zh: "拥有阳光般能量的维他命成员。以迪斯尼公主般的视觉效果而闻名。", es: "Una miembro tipo vitamina con energía solar. Famosa por sus visuales de princesa de Disney.", id: "Anggota seperti vitamin dengan energi matahari. Terkenal dengan visual putri Disney-nya.", fr: "Un membre vitaminé avec une énergie ensoleillée. Célèbre pour ses visuels de princesse Disney.", hi: "धूप जैसी ऊर्जा वाली विटामिन जैसी सदस्य। अपनी डिज़्नी प्रिंसेस जैसी विजुअल्स के लिए प्रसिद्ध।", pt: "Uma integrante tipo vitamina com energia solar. Famosa por seus visuais de princesa da Disney.", ar: "عضوة تشبه الفيتامين بطاقتها المشرقة. مشهورة بمظهرها الذي يشبه أميرة ديزني.", th: "สมาชิกที่เป็นเหมือนวิตามินและมีพลังงานสดใสเหมือนแสงแดด โด่งดังด้วยวิชวลที่ดูเหมือนเจ้าหญิงดิสนีย์", vi: "Thành viên như một loại vitamin với năng lượng tỏa sáng như ánh mặt trời. Nổi tiếng với ngoại hình như công chúa Disney.", ru: "Участница-«витаминка» с солнечной энергией. Знаменита своей внешностью, напоминающей принцессу Диснея." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Danielle+kpop+idol+color+photo+2024&w=500&h=500&c=1&rs=1&p=0",
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
          ],
          ja: [
            "韓国とオーストラリアの二重国籍者で、流暢な英語の実力のおかげで、海外のインタビューを単独でこなすことが多いです。",
            "子供の頃からディズニーアニメが大好きで、今でもOSTをよく聴いているそうで、ファンから「ディズニープリンセス」と呼ばれています。",
            "笑いのツボが浅く、メンバーの些細な冗談でも崩れ落ちるほど笑うため、「笑いの伝説」として通っています。",
            "バーバリーのグローバルアンバサダーに抜擢され、ファッション業界でも大きな注目を集めています。",
            "ポジティブなエネルギーに溢れており、テレビ番組に出演するたびに「ビタミン剤のような存在」という評価を必ず受けます。"
          ],
          zh: [
            "拥有韩国和澳大利亚双重国籍，凭借流利的英语实力，经常单独进行海外采访。",
            "从小就痴迷于迪斯尼动画，据说现在也经常听OST，被粉丝们称为“迪斯尼公主”。",
            "笑点极低，即使是成员们很小的玩笑也会让她笑得前仰后合，被称为“传奇笑声拥有者”。",
            "被选为博柏利全球大使，在时尚界也备受瞩目。",
            "充满正能量，每次出演节目都会被评价为“维他命般的存在”。"
          ],
          es: [
            "Como ciudadana con doble nacionalidad coreano-australiana, su fluidez en inglés le permite manejar a menudo entrevistas internacionales sola.",
            "Creció obsesionada con la animación de Disney y todavía escucha las bandas sonoras de Disney, lo que le valió el apodo de 'Princesa de Disney' por parte de los fans.",
            "Su umbral de risa es básicamente cero; incluso los chistes pequeños la hacen colapsar, ganándose el título de 'risueña legendaria'.",
            "Fue nombrada embajadora global de Burberry, obteniendo un gran reconocimiento en la industria de la moda.",
            "Su desbordante positividad le otorga la descripción de 'vitamina viviente' cada vez que aparece en una transmisión."
          ],
          id: [
            "Sebagai warga negara ganda Korea-Australia, kemampuan bahasa Inggrisnya yang fasih membuatnya sering menangani wawancara internasional sendirian.",
            "Dia tumbuh dengan obsesi pada animasi Disney dan masih mendengarkan OST Disney — membuatnya mendapat julukan 'Putri Disney' dari penggemar.",
            "Ambang tawa-nya hampir nol; lelucon kecil pun membuatnya tertawa terbahak-bahak, membuatnya mendapat gelar 'pemberi tawa legendaris'.",
            "Dia ditunjuk sebagai duta global Burberry, mendapatkan pengakuan besar di industri mode.",
            "Positivitasnya yang meluap-luap membuatnya dijululi 'vitamin hidup' setiap kali dia muncul di siaran."
          ],
          fr: [
            "En tant que citoyenne ayant la double nationalité coréenne et australienne, sa maîtrise de l'anglais lui permet de gérer souvent seule les interviews internationales.",
            "Elle a grandi obsédée par les animations Disney et écoute toujours les bandes originales de Disney — ce qui lui a valu le surnom de « princesse Disney » de la part des fans.",
            "Son seuil de rire est pratiquement nul ; même les petites blagues la font s'effondrer de rire, ce qui lui vaut le titre de « rieuse légendaire ».",
            "Elle a été nommée ambassadrice mondiale de Burberry, ce qui lui a valu une reconnaissance majeure dans l'industrie de la mode.",
            "Sa positivité débordante lui vaut d'être qualifiée de « vitamine vivante » à chaque apparition à la télévision."
          ],
          hi: [
            "कोरियाई-ऑस्ट्रेलियाई दोहरी नागरिक होने के नाते, उनकी धाराप्रवाह अंग्रेजी के कारण वे अक्सर अंतरराष्ट्रीय साक्षात्कार अकेले ही संभालती हैं।",
            "वे बचपन से ही डिज़्नी एनिमेशन की शौकीन रही हैं और आज भी डिज़्नी OST सुनती हैं — इसलिए प्रशंसक उन्हें 'डिज़्नी प्रिंसेस' कहते हैं।",
            "उनकी हंसी का स्तर शून्य है; छोटी-सी बात पर भी वे हंसते-हंसते लोटपोट हो जाती हैं, जिससे उन्हें 'लिजेंडरी लाफ्टर' का खिताब मिला है।",
            "उन्हें बरबरी (Burberry) का वैश्विक राजदूत नियुक्त किया गया था, जिससे फैशन उद्योग में उन्हें बड़ी पहचान मिली।",
            "उनकी सकारात्मकता के कारण उन्हें हर बार प्रसारण में 'जीवित विटामिन' के रूप में वर्णित किया जाता है।"
          ],
          pt: [
            "Como cidadã com dupla nacionalidade coreano-australiana, sua fluência em inglês permite que ela muitas vezes lide com entrevistas internacionais sozinha.",
            "Ela cresceu obcecada por animações da Disney e ainda ouve as trilhas sonoras da Disney — ganhando o apelido de 'Princesa da Disney' dos fãs.",
            "Seu limiar de riso é basicamente zero; até pequenas piadas a fazem cair na gargalhada, ganhando o título de 'risonha lendária'.",
            "Ela foi nomeada embaixadora global da Burberry, obtendo grande reconhecimento na indústria da moda.",
            "Sua positividade transbordante rendeu a ela a descrição de 'vitamina viva' toda vez que aparece em transmissões."
          ],
          ar: [
            "كمواطنة تحمل الجنسيتين الكورية والأسترالية، فإن إتقانها للغة الإنجليزية يسمح لها غالباً بإجراء المقابلات الدولية بمفردها.",
            "نشأت وهي مهووسة بأفلام ديزني وما زالت تستمع إلى أغانيها، مما أكسبها لقب \"أميرة ديزني\" من قبل المعجبين.",
            "تضحك بسهولة شديدة لدرجة أنها قد تنهار من الضحك حتى على النكات البسيطة، مما أكسبها لقب \"صاحبة الضحكة الأسطورية\".",
            "تم اختيارها كسفيرة عالمية لعلامة بربري (Burberry)، مما منحها تقديراً كبيراً في صناعة الموضة.",
            "طاقتها الإيجابية تمنحها وصف \"الفيتامين الحي\" في كل مرة تظهر فيها في البرامج."
          ],
          th: [
            "เป็นพลเมืองสองสัญชาติเกาหลี-ออสเตรเลีย ด้วยทักษะภาษาอังกฤษที่คล่องแคล่ว ทำให้เธอมักจะรับหน้าที่สัมภาษณ์สื่อต่างชาติเพียงลำพัง",
            "เธอคลั่งไคล้แอนิเมชันของ Disney มาตั้งแต่เด็กและยังคงฟังเพลงประกอบอยู่เสมอ จนแฟนๆ ตั้งฉายาให้เธอว่า 'เจ้าหญิงดิสนีย์'",
            "เธอเป็นคนเส้นตื้นมาก แค่มุกตลกเล็กๆ น้อยๆ ของสมาชิกก็ทำให้เธอขำจนตัวงอ จนได้รับฉายา 'เจ้าแม่แห่งเสียงหัวเราะ'",
            "เธอได้รับเลือกให้เป็น Global Ambassador ของ Burberry ซึ่งสร้างชื่อเสียงอย่างมากในวงการแฟชั่น",
            "พลังบวกที่ล้นเหลือทำให้เธอได้รับคำชมว่าเป็น 'วิตามินที่มีชีวิต' ทุกครั้งที่ไปออกรายการต่างๆ"
          ],
          vi: [
            "Là người mang hai quốc tịch Hàn Quốc và Úc, khả năng tiếng Anh lưu loát giúp cô thường xuyên đảm nhận các cuộc phỏng vấn quốc tế một mình.",
            "Từ nhỏ cô đã say mê phim hoạt hình Disney và cho đến nay vẫn thường nghe nhạc phim Disney, nên được người hâm mộ gọi là 'Công chúa Disney'.",
            "Cô là người rất dễ cười, ngay cả những câu đùa nhỏ của các thành viên cũng khiến cô cười ngất, nên được mệnh danh là 'người sở hữu tiếng cười huyền thoại'.",
            "Cô đã được chọn làm đại sứ toàn cầu của Burberry, nhận được sự chú ý lớn trong ngành thời trang.",
            "Năng lượng tích cực dồi dào khiến cô luôn nhận được đánh giá là 'sự tồn tại như một loại vitamin' mỗi khi xuất hiện trên truyền hình."
          ],
          ru: [
            "Обладая двойным гражданством Кореи и Австралии, она часто дает международные интервью в одиночку благодаря свободному английскому.",
            "С детства она обожает анимацию Диснея и до сих пор слушает саундтреки, за что фанаты прозвали ее «Принцессой Диснея».",
            "У нее очень низкий порог смеха; даже самые простые шутки заставляют ее смеяться до упаду, за что она получила титул «легендарной хохотушки».",
            "Она была назначена глобальным амбассадором Burberry, получив широкое признание в индустрии моды.",
            "Ее переполняющий позитив дает повод называть ее «живым витамином» при каждом появлении на экране."
          ]
        }
      },
      {
        id: "haerin",
        name: { ko: "해린", en: "Haerin", ja: "ヘリン", zh: "海潾", es: "Haerin", id: "Haerin", fr: "Haerin", hi: "हेरिन (Haerin)", pt: "Haerin", ar: "هايرين (Haerin)", th: "แแฮริน", vi: "Haerin", ru: "Хэрин" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "声乐/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Vocaliste/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "นักร้อง/นักเต้น", vi: "Ca sĩ/Vũ công", ru: "Вокалист/Танцор" },
        birth: "2006.05.15",
        mbti: "ISTP",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "おうし座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ (Taurus)", pt: "Touro", ar: "برج الثور", th: "ราศีพฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "164.5cm",
        bloodType: "B",
        description: { ko: "고양이 상의 대표 주자. 엉뚱하고 조용한 매력이 있으며 무대에서는 폭발적인 댄스 실력을 보여줍니다.", en: "The representative of cat-like features. Has a quirky, quiet charm but explosive dance skills.", ja: "猫顔の代表格。不思議で静かな魅力があり、ステージでは爆発的なダンスの実力を見せます。", zh: "猫系长相的代表。拥有古灵精怪且安静的魅力，在舞台上展现出爆发性的舞蹈实力。", es: "La representante de los rasgos felinos. Tiene un encanto peculiar y tranquilo, pero habilidades de baile explosivas.", id: "Perwakilan dari fitur wajah seperti kucing. Memiliki pesona yang aneh dan tenang, tetapi kemampuan menari yang luar biasa.", fr: "La représentante des traits félins. Elle a un charme décalé et calme, mais des talents de danse explosifs.", hi: "बिल्ली जैसी विशेषताओं वाली सदस्य। उनका आकर्षण अनोखा और शांत है लेकिन नृत्य कौशल जबरदस्त है।", pt: "A representante das características felinas. Tem un charme peculiar e tranquilo, mas habilidades de dança explosivas.", ar: "الممثلة الأبرز للملامح التي تشبه القطط. تتمتع بسحر غريب وهادئ، لكنها تظهر مهارات رقص مذهلة على المسرح.", th: "ตัวแทนของสาวหน้าแมว มีเสน่ห์ที่แปลกใหม่และเงียบขรึม แต่มีทักษะการเต้นที่ระเบิดพลังบนเวที", vi: "Đại diện tiêu biểu cho gương mặt mèo. Có sức hút kỳ lạ và trầm lặng nhưng lại thể hiện kỹ năng nhảy bùng nổ trên sân khấu.", ru: "Типичная представительница «кошачьего» типа лица. Обладает причудливо-спокойным обаянием, но на сцене демонстрирует взрывные танцевальные навыки." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Haerin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "猫のような目がトレードマークですが、実際にも猫が大好きで、猫のように行動するとメンバーたちが口を揃えます。",
            "窓の外をぼーっと眺める習慣があり、メンバーたちが「本当は猫ではないか」と冗談半分で疑っています。",
            "口数が少なく静かな日常とは裏腹に、ステージでは180度違う強烈なエネルギーを爆発させ、ファンを毎回驚かせます。",
            "メンバーの中で一番ゲームが好きで、宿舎でよく一人でゲームを楽しんでいる姿が目撃されるそうです。",
            "子供の頃から様々なダンスジャンルを習得しており、特にヒップホップダンスに優れた才能があると言われています。"
          ],
          zh: [
            "猫系眼神是她的标志，成员们一致认为她实际上也非常喜欢猫，且行为举止就像猫一样。",
            "有发呆望着窗外的习惯，成员们甚至半开玩笑地怀疑她“是不是真的是只猫”。",
            "与平时寡言少语、安静的状态不同，在舞台上她会爆发180度大转变的强烈能量，每次都让粉丝们感到惊讶。",
            "在成员中是最喜欢游戏的，据说经常在宿舍独自玩游戏被发现。",
            "从小就学习了多种舞蹈流派，据说尤其在嘻哈舞方面极具天赋。"
          ],
          es: [
            "Su forma de ojos felinos es icónica, y las miembros coinciden en que ella realmente actúa como un gato también.",
            "Tiene la costumbre de mirar silenciosamente por las ventanas, lo que lleva a las miembros a sospechar, medio en broma, que en realidad podría ser un gato.",
            "Su personalidad tranquila y reservada fuera del escenario es el polo opuesto de la energía explosiva que desata en el escenario.",
            "Es la miembro más interesada en los videojuegos y a menudo se la encuentra jugando sola en el dormitorio.",
            "Entrenó en múltiples géneros de baile desde joven y es conocida por un talento particular en el baile hip-hop."
          ],
          id: [
            "Bentuk matanya yang seperti kucing sangat ikonik, dan semua anggota setuju bahwa dia juga bertingkah seperti kucing.",
            "Dia memiliki kebiasaan menatap ke luar jendela dengan diam, membuat para anggota setengah bercanda curiga bahwa dia mungkin benar-benar seekor kucing.",
            "Persona panggungnya yang tenang dan pendiam sangat berlawanan dengan energi luar biasa yang dia tunjukkan di atas panggung.",
            "Dia adalah anggota yang paling suka bermain game dan sering ditemukan bermain game sendirian di asrama.",
            "Dia berlatih berbagai genre tari sejak usia muda dan dikenal memiliki bakat khusus dalam tari hip-hop."
          ],
          fr: [
            "Ses yeux en forme de chat sont emblématiques, et les membres s'accordent à dire qu'elle se comporte vraiment comme un chat.",
            "Elle a l'habitude de regarder silencieusement par la fenêtre, ce qui amène les membres à soupçonner, à moitié en plaisantant, qu'elle pourrait être en réalité un chat.",
            "Sa personnalité calme et réservée hors scène est à l'opposé de l'énergie explosive qu'elle déploie sur scène.",
            "C'est la membre la plus passionnée par les jeux vidéo et on la trouve souvent en train de jouer seule au dortoir.",
            "Elle s'est formée à plusieurs styles de danse dès son plus jeune âge et est connue pour son talent particulier en hip-hop."
          ],
          hi: [
            "उनकी बिल्ली जैसी आंखों की बनावट उनकी पहचान है, और सदस्य भी सहमत हैं कि वे वास्तव में बिल्ली की तरह व्यवहार करती हैं।",
            "उनकी खिड़की से बाहर चुपचाप देखने की आदत है, जिससे सदस्य मजाक में संदेह करते हैं कि वे शायद वास्तव में एक बिल्ली हैं।",
            "मंच के बाहर उनका शांत व्यक्तित्व मंच पर उनके द्वारा दिखाए जाने वाले जबरदस्त ऊर्जा के बिल्कुल विपरीत है।",
            "वे गेमिंग में सबसे अधिक रुचि रखने वाली सदस्य हैं और अक्सर डॉर्म में अकेले गेम खेलते हुए पाई जाती हैं।",
            "उन्होंने कम उम्र से ही कई नृत्य शैलियों का प्रशिक्षण लिया है और वे विशेष रूप से हिप-हॉप नृत्य में प्रतिभाशाली हैं।"
          ],
          pt: [
            "Seu formato de olhos felinos é icônico, e as integrantes concordam que ela realmente age como um gato também.",
            "Ela tem o hábito de olhar silenciosamente pelas janelas, lo que leva as integrantes a suspeitarem, meio brincando, que ela pode ser realmente um gato.",
            "Sua personalidade tranquila e reservada fora do palco é o oposto da energia explosiva que ela libera no palco.",
            "Ela é a integrante mais interessada em jogos e muitas vezes é encontrada jogando sozinha no dormitório.",
            "Ela treinou em vários gêneros de dança desde jovem e é conhecida por um talento particular na dança hip-hop."
          ],
          ar: [
            "شكل عينيها الذي يشبه القطط هو علامتها المميزة، وتتفق العضوات جميعاً على أنها تتصرف مثل القطة في الواقع أيضاً.",
            "لديها عادة التحديق بصمت من النوافذ، مما جعل العضوات يشكون بنصف مزاح في أنها قد تكون قطة بالفعل.",
            "شخصيتها الهادئة والمتحفظة خارج المسرح هي النقيض تماماً للطاقة المتفجرة التي تطلقها على المسرح.",
            "هي العضوة الأكثر اهتماماً بالألعاب، وغالباً ما يتم العثور عليها وهي تلعب الألعاب بمفردها في السكن.",
            "تدربت على أنواع مختلفة من الرقص منذ صغرها، وتشتهر بموهبة خاصة في رقص الهيب هوب."
          ],
          th: [
            "รูปตาที่เหมือนแมวคือเครื่องหมายการค้าของเธอ และสมาชิกทุกคนต่างก็เห็นตรงกันว่าเธอก็ทำตัวเหมือนแมวจริงๆ ด้วย",
            "เธอมีนิสัยชอบมองออกไปนอกหน้าต่างเงียบๆ จนสมาชิกแอบสงสัยเล่นๆ ว่า \"จริงๆ แล้วเธอเป็นแมวหรือเปล่า\"",
            "แม้ชีวิตประจำวันจะพูดน้อยและเงียบขรึม แต่บนเวทีเธอจะระเบิดพลังที่ต่างออกไปแบบ 180 องศาจนแฟนๆ ต้องตกตะลึงทุกครั้ง",
            "ในบรรดาสมาชิก เธอเป็นคนที่ชอบเล่นเกมที่สุด และมักจะถูกพบว่านั่งเล่นเกมอยู่คนเดียวในหอพักเสมอ",
            "เธอฝึกฝนการเต้นหลากหลายแนวมาตั้งแต่เด็ก และได้รับการยอมรับว่ามีพรสวรรค์โดดเด่นเป็นพิเศษในการเต้นแนวฮิปฮอป"
          ],
          vi: [
            "Đôi mắt mèo là thương hiệu của cô, các thành viên đều đồng tình rằng cô thực sự hành động giống như một chú mèo.",
            "Cô có thói quen thẫn thờ nhìn ra ngoài cửa sổ, khiến các thành viên nửa đùa nửa thật nghi ngờ rằng 'không biết cô ấy có thực sự là mèo không'.",
            "Trái ngược với cuộc sống hàng ngày ít nói và trầm lặng, trên sân khấu cô bùng nổ năng lượng mạnh mẽ khác hẳn 180 độ khiến người hâm mộ luôn ngạc nhiên.",
            "Cô là thành viên thích chơi game nhất và thường được phát hiện đang tận hưởng trò chơi một mình ở ký túc xá.",
            "Cô đã học nhiều thể loại nhảy từ khi còn nhỏ và được biết đến là có tài năng xuất chúng đặc biệt ở thể loại nhảy hip-hop."
          ],
          ru: [
            "Ее «кошачий» разрез глаз стал ее визитной карточкой, и все участницы согласны, что она и ведет себя точь-в-точь как кошка.",
            "У нее есть привычка молча смотреть в окно, из-за чего участницы в шутку подозревают, что она и правда кошка.",
            "Ее тихий и сдержанный характер в обычной жизни — полная противоположность той взрывной энергии, которую она демонстрирует на сцене.",
            "Она больше всех в группе увлекается играми, и ее часто можно застать за игрой в одиночестве в общежитии.",
            "С ранних лет она обучалась разным танцевальным направлениям и особенно талантлива в хип-хопе."
          ]
        }
      },
      {
        id: "hyein",
        name: { ko: "혜인", en: "Hyein", ja: "ヘイン", zh: "惠仁", es: "Hyein", id: "Hyein", fr: "Hyein", hi: "ह्ये인 (Hyein)", pt: "Hyein", ar: "هيين (Hyein)", th: "ฮเยอิน", vi: "Hyein", ru: "Хеин" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "声乐/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Vocaliste/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "นักร้อง/นักเต้น", vi: "Ca sĩ/Vũ công", ru: "Вокалист/Танцор" },
        birth: "2008.04.21",
        mbti: "INFP",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "おうし座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ (Taurus)", pt: "Touro", ar: "برج الثور", th: "ราศีพฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "170cm",
        bloodType: "O",
        description: { ko: "팀의 막내지만 모델 같은 피지컬을 자랑합니다. 시크한 마스크와 성숙한 목소리가 매력 포인트입니다.", en: "The youngest but boasts model-like proportions. Her chic mask and mature voice are charming.", ja: "チームの末っ子ですが、モデルのようなフィジカルを誇ります。シックな顔立ちと成熟した歌声が魅力ポイントです。", zh: "虽是团队的老小，但拥有模特般的身材。干练的外貌和成熟的声音是她的魅力所在。", es: "La más joven del equipo pero cuenta con proporciones de modelo. Su máscara chic y su voz madura son sus puntos encantadores.", id: "Anggota termuda tetapi memiliki proporsi tubuh seperti model. Wajahnya yang chic dan suaranya yang dewasa adalah poin menariknya.", fr: "La plus jeune de l'équipe mais possède des proportions de mannequin. Son visage chic et sa voix mature sont ses atouts charme.", hi: "टीम की सबसे छोटी सदस्य लेकिन मॉडल जैसी कद-काठी। उनका ठाठ वाला लुक और परिपक्व आवाज़ उनके आकर्षण के बिंदु हैं।", pt: "A mais jovem da equipe, mas possui proporções de modelo. Seu rosto chique e voz madura são seus pontos charmosos.", ar: "أصغر عضوة في الفريق لكنها تتمتع ببنية جسدية تشبه عارضات الأزياء. ملامحها الأنيقة وصوتها الناضج هما مصدر سحرها.", th: "น้องเล็กของวงที่มีสัดส่วนร่างกายราวกับนางแบบ มีใบหน้าที่ดูเก๋และน้ำเสียงที่ดูโตเกินวัยเป็นจุดเสน่ห์", vi: "Là em út của nhóm nhưng sở hữu vóc dáng như người mẫu. Gương mặt sang chảnh và giọng hát trưởng thành là điểm cuốn hút của cô.", ru: "Самая младшая в группе, но обладающая модельными пропорциями. Ее стильная внешность и зрелый голос — ее главные достоинства." },
        imageUrl: "https://tse1.mm.bing.net/th?q=NewJeans+Hyein+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "デビュー当時、満14歳で歴代最年소アイドルの仲間入りをし、170cmの身長でお姉さんたちを凌ぐ圧倒的なスタイルを誇ります。",
            "過去にキッズモデルとして活動し、公にBTS의熱烈なファンであることを明かしていた「成功したオタク」です。",
            "年齢に似合わずシックで冷たい雰囲気を持っていますが、実際はお姉さんたちに甘える可愛い末っ子です。",
            "ルイ・ヴィトンのアンバサダーとしてパリ・ファッションウィークのランウェイを堂々と歩き、ファッション業界を驚かせました。",
            "絵を描くのが好きで、自ら描いたイラストをファンに公開し、芸術的な才能も認められています。"
          ],
          zh: [
            "出道时年仅14岁，跻身历代最年轻偶像行列，且拥有170cm的身高，身材比例甚至超过了姐姐们。",
            "过去曾作为童模活动，并公开表示过自己是BTS的热情粉丝，是位“追星成功的典范”。",
            "虽然散发着与年龄不符的干练冷酷的气质，但实际上是位喜欢粘着姐姐们的可爱老小。",
            "作为路易威登大使，堂堂正正地登上了巴黎时装周的T台，令时尚界大为吃惊。",
            "喜欢画画，通过向粉丝公开亲手绘制的插画，其艺术天赋也得到了认可。"
          ],
          es: [
            "Debutó a los 14 años como una de las ídolos más jóvenes de la historia, pero es más alta que la mayoría de sus compañeras con 170 cm.",
            "Fue una fan exitosa de BTS antes de convertirse en ídolo, una historia de 'fan convertida en estrella' anunciada públicamente.",
            "Su aura chic y fría está completamente en desacuerdo con su comportamiento real de maknae mimosa y linda con las miembros mayores.",
            "Como embajadora de Louis Vuitton, caminó en la Semana de la Moda de París y asombró al mundo de la moda.",
            "Le encanta dibujar y ha compartido ilustraciones originales con los fans, ganando reconocimiento por su talento artístico también."
          ],
          id: [
            "Dia debut pada usia 14 tahun sebagai salah satu idola termuda yang pernah ada, namun memiliki tinggi 170cm yang melampaui anggota lainnya.",
            "Dia adalah penggemar berat BTS sebelum menjadi idola — kisah 'penggemar menjadi bintang' yang diumumkan secara publik.",
            "Aura chic dan dinginnya sangat bertolak belakang dengan perilaku maknae-nya yang manja dan lucu di sekitar anggota yang lebih tua.",
            "Sebagai duta Louis Vuitton, dia berjalan di Paris Fashion Week dan mengejutkan dunia mode.",
            "Dia senang menggambar dan telah membagikan ilustrasi aslinya kepada penggemar, mendapatkan pengakuan atas bakat artistiknya juga."
          ],
          fr: [
            "Elle a fait ses débuts à l'âge de 14 ans, comptant parmi les plus jeunes idoles de l'histoire, tout en mesurant 170 cm, dépassant ainsi la plupart des autres membres.",
            "Elle était une fan accomplie de BTS avant de devenir une idole — une véritable histoire de « fan devenue star ».",
            "Son aura chic et froide est en totale contradiction avec son comportement de maknae affectueuse et mignonne envers les membres plus âgés.",
            "En tant qu'ambassadrice Louis Vuitton, elle a défilé à la Fashion Week de Paris et a stupéfié le monde de la mode.",
            "Elle adore dessiner et a partagé des illustrations originales avec ses fans, ce qui lui a valu une reconnaissance pour son talent artistique."
          ],
          hi: [
            "उन्होंने 14 साल की उम्र में अब तक के सबसे कम उम्र के आइडल्स में से एक के रूप में डेब्यू किया, फिर भी उनकी लंबाई 170 सेमी है जो अन्य सदस्यों से अधिक है।",
            "आइडल बनने से पहले वे बीटीएस की बहुत बड़ी प्रशंसक थीं — एक सार्वजनिक रूप से घोषित 'फैन-टर्नड-स्टार' कहानी।",
            "उनका ठाठ वाला और शांत लुक उनके वास्तविक व्यवहार से बिल्कुल अलग है; वे अपनी बड़ी बहनों के साथ बहुत प्यारी और चिपकी रहने वाली छोटी सदस्य हैं।",
            "लुई वीटॉन (Louis Vuitton) की राजदूत के रूप में, उन्होंने पेरिस फैशन वीक में रैंप वॉक किया और फैशन की दुनिया को हैरान कर दिया।",
            "उन्हें चित्रकारी पसंद है और उन्होंने प्रशंसकों के साथ अपनी मूल कृतियां साझा की हैं, जिससे उनकी कलात्मक प्रतिभा को भी पहचान मिली है।"
          ],
          pt: [
            "Ela estreou aos 14 anos como uma das ídolos mais jovens de todos os tempos, mas é mais alta que a maioria de suas colegas, com 170 cm.",
            "Ela era uma fã de sucesso do BTS antes de se tornar ídolo — uma história de 'fã que virou estrela' anunciada publicamente.",
            "Sua aura chique e fria é completamente diferente de seu comportamento real de maknae carinhosa e fofa com as integrantes mais velhas.",
            "Como embaixadora da Louis Vuitton, ela desfilou na Paris Fashion Week e surpreendeu o mundo da moda.",
            "Ela adora desenhar e compartilhou ilustrações originais com os fãs, ganhando reconhecimento por seu talento artístico também."
          ],
          ar: [
            "ظهرت لأول مرة في سن 14 عاماً كواحدة من أصغر الآيدولز على الإطلاق، ومع ذلك فهي أطول من معظم زميلاتها بطول 170 سم.",
            "كانت من كبار معجبي BTS قبل أن تصبح آيدول، وهي قصة \"معجبة تحولت إلى نجمة\" معلنة للعامة.",
            "هالتها الأنيقة والباردة تتناقض تماماً مع سلوكها الحقيقي كـ \"ماكني\" ودودة ولطيفة مع العضوات الأكبر سناً.",
            "بصفتها سفيرة للوي فيتون، سارت في عرض أزياء أسبوع الموضة في باريس وأذهلت عالم الموضة.",
            "تحب الرسم وقد شاركت رسوماً توضيحية أصلية مع المعجبين، مما أكسبها تقديراً لموهبتها الفنية أيضاً."
          ],
          th: [
            "เดบิวต์ตอนอายุ 14 ปี ติดอันดับไอดอลที่อายุน้อยที่สุดตลอดกาล และมีความสูงถึง 170 ซม. ซึ่งสูงกว่าพี่ๆ ในวงหลายคน",
            "ในอดีตเธอเคยเป็นนางแบบเด็กและเปิดเผยว่าเป็นแฟนตัวยงของ BTS จนได้รับฉายา 'ติ่งที่ประสบความสำเร็จ'",
            "แม้ภายนอกจะดูชิคและนิ่งเกินวัย แต่จริงๆ แล้วเธอเป็นน้องเล็กที่ขี้อ้อนและน่ารักกับพี่ๆ มาก",
            "ในฐานะแอมบาสเดอร์ของ Louis Vuitton เธอได้เดินรันเวย์ในงาน Paris Fashion Week และทำให้วงการแฟชั่นต้องตะลึง",
            "เธอชอบวาดรูปและเคยเปิดเผยภาพวาดฝีมือตัวเองให้แฟนๆ ได้ชม ซึ่งได้รับความนิยมในเรื่องของพรสวรรค์ด้านศิลปะ"
          ],
          vi: [
            "Cô ra mắt khi mới 14 tuổi, trở thành một trong những thần tượng trẻ nhất từ trước đến nay, và sở hữu chiều cao 170cm vượt trội hơn hẳn các chị.",
            "Trong quá khứ, cô từng là người mẫu nhí và công khai mình là một fan cuồng nhiệt của BTS, là một hình mẫu 'fan thành công'.",
            "Dù toát lên vẻ sang chảnh và lạnh lùng không giống với độ tuổi, nhưng thực tế cô là em út đáng yêu hay làm nũng với các chị.",
            "Với tư cách là đại sứ Louis Vuitton, cô đã tự tin sải bước trên sàn catwalk của Tuần lễ thời trang Paris và khiến giới thời trang ngỡ ngàng.",
            "Cô thích vẽ tranh và đã công khai các bức minh họa do mình tự vẽ cho người hâm mộ, tài năng nghệ thuật của cô cũng được công nhận."
          ],
          ru: [
            "Она дебютировала в возрасте 14 лет, став одной из самых молодых айдолов в истории, при этом ее рост составляет 170 см — выше большинства участниц.",
            "До того как стать айдолом, она была преданной фанаткой BTS — это история «успешной фанатки», ставшей звездой.",
            "Ее стильная и «холодная» аура совершенно не вяжется с ее настоящим поведением — она очень ласковая и милая макнэ рядом со старшими участницами.",
            "В качестве амбассадора Louis Vuitton она вышла на подиум Недели моды в Париже, поразив мир моды.",
            "Она любит рисовать и делится своими оригинальными иллюстрациями с фанатами, получив признание и за свой художественный талант."
          ]
        }
      }
    ]
  },
  {
    id: "ive",
    name: { ko: "아이브", en: "IVE", ja: "アイブ (IVE)", zh: "IVE", es: "IVE", id: "IVE", fr: "IVE", hi: "आइव (IVE)", pt: "IVE", ar: "آيف (IVE)", th: "ไอฟ์ (IVE)", vi: "IVE", ru: "IVE" },
    officialSite: "http://www.starship-ent.com/profile/musician/ive.php",
    company: "Starship",
    debut: "2021.12.01",
    fandom: { ko: "다이브 (DIVE)", en: "DIVE", ja: "ダイブ (DIVE)", zh: "DIVE", es: "DIVE", id: "DIVE", fr: "DIVE", hi: "डाइव (DIVE)", pt: "DIVE", ar: "دايف (DIVE)", th: "ไดฟ์ (DIVE)", vi: "DIVE", ru: "DIVE" },
    accentColor: "#ff00ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=%EC%95%84%EC%9D%B4%EB%B8%8C%20IVE%20%EA%B7%B8%EB%A3%B9%20%EB%8B%A8%EC%B2%B4%20%EA%B3%A0%ED%99%94%EC%A7%88",
    socials: { instagram: "https://www.instagram.com/ivestarship/", twitter: "https://twitter.com/IVEstarship", youtube: "https://www.youtube.com/@IVEstarship", tiktok: "https://www.tiktok.com/@ive.official" },
    wiki: { ko: "아이브(IVE)는 스타쉽 엔터테인먼트 소속 6인조 걸그룹입니다. 'I HAVE'의 줄임말로, 우리가 가진 것들을 당당하게 보여주겠다는 포부를 담고 있습니다.", en: "IVE is a 6-member girl group under Starship Entertainment. The name stands for 'I HAVE'." },
    description: { ko: "주체적인 '자기애'를 노래하는 4세대 완성형 걸그룹, 눈부신 비주얼과 우아한 퍼포먼스를 자랑합니다.", en: "The complete 4th-gen girl group singing about independent 'self-love'.", ja: "自立した「自己愛」を歌う4世代完成形ガールグループ。輝くビジュアルと優雅なパフォーマンスが魅力です。", zh: "歌颂独立'自我爱'的4代完整型女团，拥有耀眼颜值和优雅表演。", es: "El grupo de chicas completo de 4ª generación que canta sobre el 'amor propio' independiente, con visuales deslumbrantes.", id: "Grup perempuan generasi ke-4 yang sempurna, menyanyikan lagu tentang 'cinta diri' yang mandiri dengan visual memukau.", fr: "Le girl group complet de 4ème génération chantant l'amour de soi indépendant, avec un visuel éblouissant.", hi: "स्वतंत्र 'आत्म-प्रेम' का गाना गाने वाला 4वीं पीढ़ी का परिपूर्ण गर्ल ग्रुप।", pt: "O grupo de garotas completo da 4ª geração cantando sobre o 'amor próprio' independente, com visuais deslumbrantes.", ar: "مجموعة الفتيات الكاملة من الجيل الرابع التي تغني عن 'حب الذات' المستقل بمظهر مبهر.", th: "เกิร์ลกรุ๊ปเจน 4 ที่สมบูรณ์แบบ ร้องเพลงเกี่ยวกับ 'ความรักตัวเอง' อย่างอิสระ", vi: "Nhóm nhạc nữ thế hệ 4 hoàn chỉnh hát về 'tình yêu bản thân' độc lập với visual rực rỡ.", ru: "Полноценный гёрл-груп 4-го поколения, воспевающий независимую 'любовь к себе'." },
    tmi: {
      ko: [
        "아이브 멤버들의 평균 키는 약 169cm로 K-팝 걸그룹 중에서도 단연 손꼽히는 '장신 그룹'입니다.",
        "아이브(IVE)라는 이름은 'I HAVE'의 줄임말로, 우리가 이미 가진 것들을 당당하게 보여주겠다는 포부를 담고 있습니다.",
        "'Love Dive', 'After LIKE', 'I AM' 등 연속 히트 행진으로 데뷔 1년 만에 주요 연말 시상식을 모조리 석권했습니다.",
        "멤버 중 안유진, 장원영은 아이즈원 출신이라 데뷔 전부터 이미 국내외에 탄탄한 팬층을 확보한 상태였습니다.",
        "아이브 팬덤 이름 'DIVE'는 'I + V + E'의 알파벳을 조합한 것으로, 팬과 아티스트가 함께 잠수해 깊이 연결된다는 의미입니다.",
        "한 해에 여러 곡으로 '퍼펙트 올킬(PAK)'을 달성한 최초의 4세대 걸그룹이라는 기록을 보유하고 있습니다.",
        "데뷔곡 'ELEVEN'은 음악 방송 13관왕을 차지하며 역대 걸그룹 데뷔곡 최다 1위 기록을 세웠습니다.",
        "큰 시상식이 끝난 후에는 항상 멤버들끼리 맛있는 야식을 먹으며 자축하는 전통이 있다고 합니다.",
        "레이는 스타쉽 엔터테인먼트가 선보인 최초의 일본인 아티스트로, 독보적인 음색과 랩 실력을 갖추고 있습니다.",
        "'I AM'의 고음 파트는 연습 과정에서 매우 힘들었지만, 리더 안유진이 수백 번의 연습 끝에 완벽히 소화해냈습니다."
      ],
      en: [
        "IVE members have an average height of ~169cm, making them one of K-pop's tallest girl groups.",
        "The name IVE stands for 'I HAVE', embodying the confidence to show off what they already possess.",
        "They swept major year-end awards within just one year of debut with consecutive hits.",
        "Members Yujin and Wonyoung already had global fan bases from their IZ*ONE days before IVE even debuted.",
        "The fandom name 'DIVE' combines the letters I, V, E — symbolizing fans and artists diving deep together.",
        "They hold the record for the first 4th-gen girl group to achieve 'Perfect All-Kill' with multiple songs in a single year.",
        "Their debut song 'ELEVEN' won 13 music show trophies, the highest record for a girl group's debut track.",
        "The members have a tradition of celebrating together with a delicious late-night snack after major award ceremonies.",
        "Rei is the first Japanese artist to debut under Starship Entertainment, possessing a unique voice and rap skills.",
        "The challenging high-note part in 'I AM' was perfected by leader An Yujin after hundreds of practice takes."
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
        role: { ko: "리더/보컬", en: "Leader/Vocalist", ja: "リーダー/ボーカル", zh: "队长/声乐", es: "Líder/Vocalista", id: "Pemimpin/Vokalis", fr: "Leader/Vocaliste", hi: "लीडर/वोकलिस्ट", pt: "Líder/Vocalista", ar: "القائدة/مغنية", th: "ลีดเดอร์/นักร้อง", vi: "Trưởng nhóm/Ca sĩ", ru: "Лидер/Вокалист" },
        birth: "2003.09.01", mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "A",
        description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader.", ja: "バラエティの天才とカリスマリーダーを行き来する万能メンバー。", zh: "在综艺天才和魅力队长之间自如切换的全能成员。", es: "Miembro completo que alterna entre genio del variety show y líder carismático.", id: "Anggota serbabisa yang berganti peran antara bintang variety dan pemimpin karismatik.", fr: "Membre polyvalent oscillant entre génie de la variété et leader charismatique.", hi: "वैरायटी जीनियस और करिश्माई लीडर के बीच स्विच करने वाले ऑल-राउंडर सदस्य।", pt: "Membro completo que alterna entre gênio do variety e líder carismático.", ar: "عضو متكاملة تتنقل بين عبقرية البرامج والقيادة الكاريزمية.", th: "สมาชิกรอบด้านที่สลับระหว่างอัจฉริยะวาไรตี้และลีดเดอร์ผู้มีเสน่ห์", vi: "Thành viên toàn diện chuyển đổi giữa tài năng variety và lãnh đạo đầy sức hút.", ru: "Разносторонняя участница, сочетающая таланты ведущей шоу и харизматичного лидера." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist", ja: "ラッパー/ボーカル", zh: "说唱/声乐", es: "Rapera/Vocalista", id: "Rapper/Vokalis", fr: "Rappeuse/Vocaliste", hi: "रैपर/वोकलिस्ट", pt: "Rapper/Vocalista", ar: "مغنية راب/مغنية", th: "แรปเปอร์/นักร้อง", vi: "Rapper/Ca sĩ", ru: "Рэпер/Вокалист" },
        birth: "2002.09.24", mbti: "ISTJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "164cm", bloodType: "B",
        description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone.", ja: "チームの最年長メンバーで、魅力的なラップトーンの持ち主。", zh: "团队最年长的姐姐，拥有迷人的说唱音色。", es: "La mayor del equipo con un tono de rap muy atractivo.", id: "Anggota tertua tim yang memiliki nada rap yang memikat.", fr: "La doyenne de l'équipe avec un ton de rap captivant.", hi: "टीम की सबसे बड़ी सदस्य और आकर्षक रैप टोन वाली मेंबर।", pt: "A mais velha da equipe com um tom de rap atraente.", ar: "الأكبر سناً في الفريق بنبرة راب جذابة.", th: "สมาชิกอาวุโสสุดของทีมที่มีน้ำเสียงแรปน่าหลงใหล", vi: "Thành viên lớn tuổi nhất của nhóm với giọng rap hấp dẫn.", ru: "Старшая участница группы с привлекательным рэп-голосом." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Gaeul+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist", ja: "ラッパー/ボーカル", zh: "说唱/声乐", es: "Rapera/Vocalista", id: "Rapper/Vokalis", fr: "Rappeuse/Vocaliste", hi: "रैपर/वोकलिस्ट", pt: "Rapper/Vocalista", ar: "مغنية راب/مغنية", th: "แรปเปอร์/นักร้อง", vi: "Rapper/Ca sĩ", ru: "Рэпер/Вокалист" },
        birth: "2004.02.03", mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "169cm", bloodType: "A",
        description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills.", ja: "ユニークな感性とラップスキルを持つ日本人メンバー。", zh: "拥有独特感性和说唱实力的日本成员。", es: "Miembro japonesa con sensibilidad única y habilidades de rap.", id: "Anggota Jepang dengan sensibilitas unik dan kemampuan rap.", fr: "Membre japonaise avec une sensibilité unique et des talents de rap.", hi: "अनोखी संवेदनशीलता और रैप कौशल वाली जापानी सदस्य।", pt: "Membro japonesa com sensibilidade única e habilidades de rap.", ar: "عضو يابانية بحساسية فريدة ومهارات راب.", th: "สมาชิกชาวญี่ปุ่นที่มีความรู้สึกเฉพาะตัวและทักษะแรป", vi: "Thành viên người Nhật với cảm nhận độc đáo và kỹ năng rap.", ru: "Японская участница с уникальным чутьём и навыками рэпа." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Rei+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "센터/보컬", en: "Center/Vocalist", ja: "センター/ボーカル", zh: "中心/声乐", es: "Centro/Vocalista", id: "Center/Vokalis", fr: "Centre/Vocaliste", hi: "सेंटर/वोकलिस्ट", pt: "Centro/Vocalista", ar: "المركز/مغنية", th: "เซ็นเตอร์/นักร้อง", vi: "Trung tâm/Ca sĩ", ru: "Центр/Вокалист" },
        birth: "2004.08.31", mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "O",
        description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP.", ja: "4世代K-POPを象徴するウォンビーアイコンでありビジュアルセンター。", zh: "代表4代K-POP的梦想图标和视觉中心。", es: "Icono wannabe y centro visual que representa el K-POP de 4ª generación.", id: "Ikon wannabe dan pusat visual yang mewakili K-POP generasi ke-4.", fr: "L'icône wannabe et le centre visuel représentant le K-POP de 4ème génération.", hi: "4वीं पीढ़ी के K-POP का प्रतिनिधित्व करने वाला wannabe आइकन और विजुअल सेंटर।", pt: "O ícone wannabe e centro visual representando o K-POP da 4ª geração.", ar: "أيقونة أحلام ومركز بصري يمثل K-POP من الجيل الرابع.", th: "ไอคอน wannabe และเซ็นเตอร์วิชวลที่เป็นตัวแทนของ K-POP เจน 4", vi: "Biểu tượng wannabe và trung tâm visual đại diện cho K-POP thế hệ 4.", ru: "Желанная икона и визуальный центр, представляющий K-POP 4-го поколения." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Vocaliste Principale", hi: "मेन वोकलिस्ट", pt: "Vocalista Principal", ar: "المغنية الرئيسية", th: "นักร้องหลัก", vi: "Giọng ca chính", ru: "Главный вокалист" },
        birth: "2004.11.21", mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "170cm", bloodType: "AB",
        description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals.", ja: "明るいえくぼと伸びやかな歌唱力を持つメインボーカル級メンバー。", zh: "拥有清澈酒窝和强力歌唱实力的主唱级成员。", es: "Miembro de nivel vocalista principal con hoyuelos claros y poderosa voz.", id: "Anggota level main vocal dengan lesung pipit yang cerah dan suara yang kuat.", fr: "Membre de niveau vocaliste principal avec des fossettes claires et une voix puissante.", hi: "स्पष्ट डिम्पल और शक्तिशाली गायन वाली मेन वोकल-स्तर की सदस्य।", pt: "Membro de nível vocalista principal com covinhas claras e voz poderosa.", ar: "عضو بمستوى المغنية الرئيسية بغمازات واضحة وصوت قوي.", th: "สมาชิกระดับนักร้องหลักที่มีลักยิ้มสดใสและเสียงร้องอันทรงพลัง", vi: "Thành viên cấp độ main vocal với lúm đồng tiền rõ ràng và giọng hát mạnh mẽ.", ru: "Участница уровня главного вокалиста с ямочками и мощным голосом." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Liz+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "보컬/막내", en: "Vocalist/Maknae", ja: "ボーカル/末っ子", zh: "声乐/最小成员", es: "Vocalista/Maknae", id: "Vokalis/Maknae", fr: "Vocaliste/Maknae", hi: "वोकलिस्ट/मैकने", pt: "Vocalista/Maknae", ar: "مغنية/المدللة الصغيرة", th: "นักร้อง/มักแน", vi: "Ca sĩ/Maknae", ru: "Вокалист/Макне" },
        birth: "2007.02.21", mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "166cm", bloodType: "O",
        description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age.", ja: "年齢に見合わないステージ掌握力を発揮するチームの末っ子。", zh: "展现出超乎年龄的舞台掌控力的团队最小成员。", es: "La más joven del equipo con un dominio del escenario impropio de su edad.", id: "Anggota termuda yang menunjukkan penguasaan panggung melebihi usianya.", fr: "La benjamine de l'équipe montrant une maîtrise scénique au-delà de son âge.", hi: "अपनी उम्र से परे स्टेज प्रेजेंस दिखाने वाली टीम की सबसे छोटी सदस्य।", pt: "A mais jovem da equipe com domínio de palco além de sua idade.", ar: "أصغر أعضاء الفريق التي تُظهر سيطرة على المسرح تفوق عمرها.", th: "สมาชิกอายุน้อยที่สุดที่แสดงการครองเวทีเกินวัย", vi: "Thành viên nhỏ tuổi nhất của nhóm thể hiện sự làm chủ sân khấu vượt tuổi.", ru: "Младшая участница группы, демонстрирующая владение сценой, несвойственное её возрасту." },
        imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Leeseo+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
    name: { ko: "에스파", en: "aespa", ja: "エスパ (aespa)", zh: "æspa", es: "aespa", id: "aespa", fr: "aespa", hi: "एस्पा (aespa)", pt: "aespa", ar: "إسبا (aespa)", th: "เอสป้า (aespa)", vi: "aespa", ru: "aespa" },
    officialSite: "https://aespa.com/",
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이 (MY)", en: "MY", ja: "マイ (MY)", zh: "MY", es: "MY", id: "MY", fr: "MY", hi: "माय (MY)", pt: "MY", ar: "ماي (MY)", th: "มาย (MY)", vi: "MY", ru: "MY" },
    accentColor: "#7b46d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Group+High+Resolution+Photo+2024",
    socials: { instagram: "https://www.instagram.com/aespa_official/", twitter: "https://twitter.com/aespa_official", youtube: "https://www.youtube.com/@aespa", tiktok: "https://www.tiktok.com/@aespa_official" },
    wiki: { ko: "에스파(aespa)는 SM 엔터테인먼트 소속의 4인조 걸그룹입니다. 독보적인 메타버스 세계관으로 K-POP의 새로운 지평을 열었습니다.", en: "aespa is a 4-member girl group under SM Entertainment." },
    description: { ko: "메타버스 세계관의 선구자, 독보적인 컨셉과 압도적인 퍼포먼스를 자랑합니다.", en: "The pioneers of the metaverse concept.", ja: "メタバース世界観の先駆者、独自のコンセプトと圧倒的なパフォーマンスが魅力。", zh: "元宇宙世界观的先驱，拥有独特概念和压倒性演出。", es: "Las pioneras del concepto metaverso, con un concepto único y actuaciones abrumadoras.", id: "Pelopor konsep metaverse dengan konsep unik dan penampilan yang memukau.", fr: "Les pionnières du concept métavers, avec un concept unique et des performances époustouflantes.", hi: "मेटावर्स की अवधारणा की अग्रणी, अद्वितीय कॉन्सेप्ट और जबरदस्त परफॉर्मेंस वाला ग्रुप।", pt: "As pioneiras do conceito metaverso, com um conceito único e atuações impressionantes.", ar: "رائدات مفهوم الميتافيرس بمفهوم فريد وأداء ساحق.", th: "ผู้บุกเบิกคอนเซ็ปต์เมตาเวิร์ส ด้วยคอนเซ็ปต์เฉพาะตัวและการแสดงที่น่าทึ่ง", vi: "Những người tiên phong của khái niệm metaverse với concept độc đáo và màn trình diễn ấn tượng.", ru: "Пионеры концепции метавселенной с уникальным концептом и захватывающими выступлениями." },
    tmi: {
      ko: [
        "에스파의 세계관에는 멤버 각자의 AI 아바타인 'ae-멤버명'이 존재하며, 처음 자신의 아바타를 본 멤버들이 '너무 예뻐서 긴장했다'고 했습니다.",
        "에스파는 SM 걸그룹 중 미국 코첼라 밸리 뮤직 페스티벌에 처음으로 공식 무대를 가진 그룹입니다.",
        "'Supernova'는 2024년 국내 음원 차트 최장 기간 1위를 기록하며 에스파 최대 히트곡 반열에 오른 곡입니다.",
        "멤버들은 데뷔 때부터 독보적인 메타버스 세계관을 위해 자체 앱과 게임 콘텐츠까지 별도로 제작하는 혁신적인 방식으로 화제가 되었습니다.",
        "에스파 4인은 국내외 패션·뷰티 브랜드 앰버서더를 모두 따로 맡으면서도 팀 케미가 넘쳐 '네 개의 솔로 같은 걸그룹'이라 불립니다.",
        "'Next Level'의 'ㄷ'자 안무는 전국적인 챌린지 열풍을 일으키며 에스파를 대중적인 스타 반열에 올렸습니다.",
        "연습생 시절부터 멤버들이 함께 쓰는 공유 태블릿을 통해 연습 영상을 모니터링하며 칼군무를 완성한다고 합니다.",
        "윈터는 경상도 양산, 카리나는 경기도 성남 출신으로 서로 다른 지역색이 섞여 독특한 팀 분위기를 만듭니다.",
        "데뷔 첫해에 각종 가요 시상식에서 신인상을 휩쓸며 '괴물 신인'이라는 별명을 얻었습니다.",
        "팀 이름 '에스파(aespa)'는 'Avatar X Experience'를 표현한 'ae'와 양면이라는 뜻의 'aspect'를 결합해 만든 이름입니다."
      ],
      en: [
        "In aespa's lore, each member has an AI avatar called 'ae-[name]' — when they first saw their avatars, they were so stunning the members felt nervous.",
        "aespa were the first SM girl group to perform officially at the Coachella Valley Music and Arts Festival.",
        "'Supernova' holds the record for longest consecutive #1 on Korean charts in 2024, making it aespa's biggest hit.",
        "From debut, their metaverse concept extended to a dedicated app and game content, making their world-building approach truly innovative.",
        "Each of the four members holds separate global brand ambassadorships while maintaining insane group chemistry — dubbed 'four soloists as a group'.",
        "The 'Next Level' 'ㄷ' dance move sparked a nationwide challenge craze, propelling aespa to mainstream stardom.",
        "Since trainee days, they've used a shared tablet to monitor rehearsal footage and perfect their sharp choreography.",
        "Winter is from Yangsan and Karina is from Seongnam — their different regional backgrounds contribute to the team's unique vibe.",
        "They swept rookie awards at various ceremonies in their debut year, earning the nickname 'Monster Rookies'.",
        "The name 'aespa' combines 'ae' (Avatar X Experience) and 'aspect' (meaning two sides), representing meeting your other self."
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
        role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper", ja: "リーダー/メインダンサー/ラッパー", zh: "队长/主要舞者/说唱", es: "Líder/Bailarina Principal/Rapera", id: "Pemimpin/Penari Utama/Rapper", fr: "Leader/Danseuse Principale/Rappeuse", hi: "लीडर/मेन डांसर/रैपर", pt: "Líder/Dançarina Principal/Rapper", ar: "القائدة/الراقصة الرئيسية/مغنية الراب", th: "ลีดเดอร์/นักเต้นหลัก/แรปเปอร์", vi: "Trưởng nhóm/Vũ công chính/Rapper", ru: "Лидер/Главный танцор/Рэпер" },
        birth: "2000.04.11", mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "168cm", bloodType: "B",
        description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself, a charismatic leader anchoring the team.", ja: "AIよりもAIらしいビジュアルで有名な、チームを引き締めるカリスマリーダー。", zh: "以比AI更像AI的外貌著称，是稳定团队的魅力队长。", es: "Famosa por sus visuales que parecen más IA que la IA misma, una líder carismática que ancla al equipo.", id: "Terkenal dengan visualnya yang tampak lebih AI dari AI itu sendiri, pemimpin karismatik yang menjadi tulang punggung tim.", fr: "Célèbre pour ses visuels plus 'IA' que l'IA elle-même, une leader charismatique qui ancre l'équipe.", hi: "AI से भी ज़्यादा AI जैसे विज़ुअल के लिए प्रसिद्ध, टीम को एकजुट रखने वाली करिश्माई लीडर।", pt: "Famosa por seus visuais que parecem mais IA do que a própria IA, uma líder carismática que ancora a equipe.", ar: "مشهورة بمظهرها الذي يبدو أكثر من الذكاء الاصطناعي، قائدة كاريزمية تُثبّت الفريق.", th: "โด่งดังด้วยวิชวลที่ดูเหมือน AI มากกว่า AI เอง เป็นลีดเดอร์ผู้มีเสน่ห์ที่เป็นหลักของทีม", vi: "Nổi tiếng với visual trông giống AI hơn cả AI, lãnh đạo đầy sức hút là trụ cột của nhóm.", ru: "Знаменита визуалом, похожим на ИИ больше самого ИИ, харизматичный лидер, скрепляющий команду." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Karina+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarina Líder", id: "Vokalis Utama/Penari Utama", fr: "Vocaliste Principale/Danseuse Leader", hi: "मेन वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarina Líder", ar: "المغنية الرئيسية/الراقصة القائدة", th: "นักร้องหลัก/นักเต้นลีด", vi: "Giọng ca chính/Vũ công dẫn đầu", ru: "Главный вокалист/Ведущий танцор" },
        birth: "2001.01.01", mbti: "INTJ",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm", bloodType: "A",
        description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버입니다.", en: "A member with a clear, pure voice and powerful performance skills.", ja: "澄んで清らかな音色と力強いパフォーマンスを兼ね備えたメンバー。", zh: "兼具清澈纯净音色和有力表演的成员。", es: "Una miembro con una voz clara y pura combinada con poderosas habilidades de actuación.", id: "Anggota dengan suara yang jernih dan murni serta kemampuan performa yang kuat.", fr: "Un membre avec une voix claire et pure combinée à des compétences de performance puissantes.", hi: "स्वच्छ और मधुर आवाज़ और शक्तिशाली परफॉर्मेंस कौशल वाली सदस्य।", pt: "Uma membro com uma voz clara e pura combinada com poderosas habilidades de performance.", ar: "عضو بصوت نقي وصافٍ مع مهارات أداء قوية.", th: "สมาชิกที่มีน้ำเสียงใสบริสุทธิ์ผสานกับทักษะการแสดงอันทรงพลัง", vi: "Thành viên với giọng hát trong trẻo thuần khiết kết hợp kỹ năng biểu diễn mạnh mẽ.", ru: "Участница с чистым, прозрачным голосом и мощными навыками выступления." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist", ja: "メインラッパー/サブボーカル", zh: "主要说唱/副唱", es: "Rapera Principal/Sub Vocalista", id: "Rapper Utama/Sub Vokalis", fr: "Rappeuse Principale/Sous-Vocaliste", hi: "मेन रैपर/सब वोकलिस्ट", pt: "Rapper Principal/Sub Vocalista", ar: "مغنية الراب الرئيسية/مغنية مساعدة", th: "แรปเปอร์หลัก/นักร้องรอง", vi: "Rapper chính/Ca sĩ phụ", ru: "Главный рэпер/Второй вокалист" },
        birth: "2000.10.30", mbti: "INFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "164cm", bloodType: "O",
        description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 멤버입니다.", en: "A multilingual intellectual fluent in three languages with solid rap skills.", ja: "3ヶ国語に堪能な知性派で、確かなラップスキルを持つメンバー。", zh: "精通三国语言的才女，拥有扎实的说唱实力。", es: "Una intelectual multilingüe fluida en tres idiomas con sólidas habilidades de rap.", id: "Intelektual multibahasa yang fasih dalam tiga bahasa dengan kemampuan rap yang kuat.", fr: "Une intellectuelle multilingue parlant couramment trois langues avec de solides compétences en rap.", hi: "तीन भाषाओं में पारंगत बहुभाषी बुद्धिजीवी और ठोस रैप कौशल वाली सदस्य।", pt: "Uma intelectual multilíngue fluente em três idiomas com sólidas habilidades de rap.", ar: "مثقفة متعددة اللغات طليقة في ثلاث لغات بمهارات راب قوية.", th: "นักปัญญาชนหลายภาษาที่คล่องสามภาษาด้วยทักษะแรปที่แข็งแกร่ง", vi: "Trí thức đa ngôn ngữ thành thạo ba ngôn ngữ với kỹ năng rap vững chắc.", ru: "Полиглот, свободно владеющая тремя языками, с отличными навыками рэпа." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Giselle+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
        role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Vocaliste Principale", hi: "मेन वोकलिस्ट", pt: "Vocalista Principal", ar: "المغنية الرئيسية", th: "นักร้องหลัก", vi: "Giọng ca chính", ru: "Главный вокалист" },
        birth: "2002.10.23", mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "161cm", bloodType: "O",
        description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내입니다.", en: "The youngest member boasting explosive high notes and soulful vocals.", ja: "爆発的な高音とソウルフルな歌唱力を誇るチームの末っ子。", zh: "拥有爆发性高音和充满灵魂的歌唱实力的团队最小成员。", es: "La más joven del equipo con explosivos agudos y una voz llena de soul.", id: "Anggota termuda dengan nada tinggi yang eksplosif dan vokal yang penuh jiwa.", fr: "La plus jeune du groupe avec des aigus explosifs et une voix pleine d'âme.", hi: "विस्फोटक हाई नोट्स और सोलफुल वोकल्स वाली टीम की सबसे छोटी सदस्य।", pt: "A mais jovem do grupo com agudos explosivos e vocais cheios de alma.", ar: "أصغر أعضاء الفريق بنوتات عالية متفجرة وصوت ممتلئ بالروح.", th: "สมาชิกอายุน้อยที่สุดที่มีโน้ตสูงระเบิดพลังและเสียงร้องเต็มอารมณ์", vi: "Thành viên nhỏ tuổi nhất với những nốt cao bùng nổ và giọng hát đầy cảm xúc.", ru: "Младшая участница группы со взрывными верхними нотами и душевным вокалом." },
        imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Ningning+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
    name: { ko: "방탄소년단", en: "BTS", ja: "防弾少年団 (BTS)", zh: "防弹少年团 (BTS)", es: "BTS", id: "BTS", fr: "BTS", hi: "बीटीएस (BTS)", pt: "BTS", ar: "بي تي إس (BTS)", th: "บีทีเอส (BTS)", vi: "BTS", ru: "BTS" },
    company: "BIGHIT MUSIC",
    debut: "2013.06.13",
    fandom: { ko: "아미 (ARMY)", en: "ARMY", ja: "ARMY (アーミー)", zh: "ARMY (阿米)", es: "ARMY", id: "ARMY", fr: "ARMY", hi: "आर्मी (ARMY)", pt: "ARMY", ar: "آرمي (ARMY)", th: "อาร์มี่ (ARMY)", vi: "ARMY", ru: "ARMY" },
    officialSite: "https://ibighit.com/bts",
    accentColor: "#6e3ab7",
    imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Group+Photo+High+Resolution+2025",
    socials: { instagram: "https://www.instagram.com/bts.bighitofficial/", twitter: "https://twitter.com/bts_bighit", youtube: "https://www.youtube.com/@BTS", tiktok: "https://www.tiktok.com/@bts_official_bighit" },
    wiki: {
      ko: "방탄소년단(BTS)은 7인조 보이그룹입니다. 전 세계적인 메시지를 던졌으며 빌보드 핫 100 1위를 차지하는 등 글로벌 팝의 아이콘이 되었습니다.",
      en: "BTS is a 7-member boy group that has become a global pop icon, delivering universal messages and topping the Billboard Hot 100.",
      ja: "BTSは7人組のボーイズグループで、世界的なメッセージを発信し、ビルボードHot 100で1位を獲得するなど、グローバルポップのアイコンとなりました。",
      zh: "BTS是一个由7人组成的男子组合，已成为全球流行偶像，传达普世讯息并曾登顶公告牌百强单曲榜。",
      es: "BTS es un grupo de chicos de 7 miembros que se ha convertido en un ícono del pop mundial, entregando mensajes universales y encabezando el Billboard Hot 100.",
      id: "BTS adalah grup vokal pria beranggotakan 7 orang yang telah menjadi ikon pop global, menyampaikan pesan universal dan memuncaki Billboard Hot 100.",
      fr: "BTS est un groupe de garçons de 7 membres qui est devenu une icône de la pop mondiale, délivrant des messages universels et se classant en tête du Billboard Hot 100.",
      hi: "बीटीएस (BTS) 7 सदस्यीय बॉय ग्रुप है जो वैश्विक पॉप आइकन बन गया है, जो सार्वभौमिक संदेश देता है और बिलबोर्ड हॉट 100 में शीर्ष पर है।",
      pt: "O BTS é um grupo masculino de 7 membros que se tornou um ícone do pop global, transmitindo mensagens universais e liderando a Billboard Hot 100.",
      ar: "بي تي إس (BTS) هي فرقة فتيان مكونة من 7 أعضاء أصبحت أيقونة بوب عالمية، وتقدم رسائل عالمية وتصدرت قائمة بيلبورد هوت 100.",
      th: "BTS เป็นบอยแบนด์ที่มีสมาชิก 7 คน ซึ่งกลายเป็นไอคอนป๊อประดับโลก โดยส่งข้อความที่เป็นสากลและติดอันดับ 1 ใน Billboard Hot 100",
      vi: "BTS là nhóm nhạc nam gồm 7 thành viên đã trở thành biểu tượng nhạc pop toàn cầu, truyền tải những thông điệp phổ quát và đứng đầu bảng xếp hạng Billboard Hot 100.",
      ru: "BTS — это мужская группа из 7 человек, ставшая мировой иконой поп-музыки, транслирующая универсальные смыслы и возглавившая чарт Billboard Hot 100."
    },
    description: {
      ko: "21세기 팝 아이콘, 전 세계를 보랏빛으로 물들인 글로벌 슈퍼스타입니다.",
      en: "21st-century pop icons, global superstars who have colored the world purple.",
      ja: "21世紀のポップアイコン、世界を紫色に染めたグローバルスーパースターです。",
      zh: "21世纪的流行偶像，将世界染成紫色的全球超级巨星。",
      es: "Íconos del pop del siglo XXI, superestrellas mundiales que han teñido el mundo de púrpura.",
      id: "Ikon pop abad ke-21, superstar global yang telah mewarnai dunia dengan warna ungu.",
      fr: "Icônes de la pop du 21e siècle, superstars mondiales qui ont coloré le monde en violet.",
      hi: "21वीं सदी के पॉप आइकन, वैश्विक सुपरस्टार जिन्होंने दुनिया को बैंगनी रंग में रंग दिया है।",
      pt: "Ícones pop do século XXI, superestrelas globais que coloriram o mundo de roxo.",
      ar: "أيقونات بوب القرن الحادي والعشرين، نجوم عالميون لونوا العالم باللون الأرجواني.",
      th: "ไอคอนป๊อปแห่งศตวรรษที่ 21 ซูเปอร์สตาร์ระดับโลกที่ทำให้โลกกลายเป็นสีม่วง",
      vi: "Những biểu tượng nhạc pop của thế kỷ 21, những siêu sao toàn cầu đã nhuộm sắc tím cả thế giới.",
      ru: "Иконы поп-музыки XXI века, мировые суперзвезды, окрасившие мир в фиолетовый цвет."
    },
    tmi: {
      ko: [
        "방탄소년단이라는 이름은 '방탄(防彈)소년단'으로, 10~20대가 살면서 겪는 편견과 억압을 막아내겠다는 의지를 담고 있습니다.",
        "BTS는 미국 빌보드 핫 100에서 자체 제작 곡으로 1위에 오른 최초의 한국 아티스트로, K-팝의 새로운 역사를 썼습니다.",
        "멤버 전원이 2022~2023년에 차례로 군 입대를 마치고 2025년까지 순차 전역하며 완전체 컴백을 앞두고 있습니다.",
        "BTS ARMY는 세계 최대 K-팝 팬덤으로, 멤버들의 군 복무 기간에도 스트리밍·구매·지지 캠페인을 이어가며 응원을 멈추지 않았습니다.",
        "뷔와 지민이 절친인 'VMIN', RM과 진의 투샷 'NamJin' 등 멤버들 간의 각종 케미 조합이 팬덤 내에서 독자적인 서브컬처를 형성하고 있습니다.",
        "멤버들은 서로를 동료 이상의 '가족'이라고 부르며, 휴가 기간에도 자주 모여 시간을 보낸다고 합니다.",
        "뷔(V)는 독특한 패션 감각과 재즈 음악에 대한 깊은 애정으로 유명하며, 직접 곡을 쓰기도 합니다.",
        "지민은 현대무용 전공자 출신으로 태권도 검은 띠를 보유하고 있는 반전 매력의 소유자입니다.",
        "정국은 노래, 춤, 운동 등 못하는 게 없어 팬들 사이에서 '황금 막내'라는 별명으로 통합니다.",
        "RM은 IQ 148의 수재로, 미드 '프렌즈'를 시청하며 독학으로 영어를 완벽하게 마스터했습니다."
      ],
      en: [
        "The name BTS (Bangtan Sonyeondan) means 'Bulletproof Boy Scouts' — vowing to protect young people from society's prejudice and oppression.",
        "BTS became the first Korean artists to top the Billboard Hot 100 with a self-produced song, rewriting K-pop history.",
        "All members completed their mandatory military service between 2022–2025, with a full group comeback on the horizon.",
        "ARMY, the world's largest K-pop fandom, never stopped streaming, buying, and campaigning for BTS throughout their service.",
        "Member pairings like 'VMIN' (V+Jimin) and 'NamJin' (RM+Jin) have spawned entire sub-cultures within the fandom.",
        "Members often describe each other as 'family' rather than coworkers, even spending vacations together.",
        "V is known for his unique fashion sense and deep love for jazz music, often composing his own tracks.",
        "Jimin was a contemporary dance major and also holds a black belt in Taekwondo.",
        "Jungkook is called the 'Golden Maknae' because he excels at everything from singing and dancing to sports.",
        "RM has an IQ of 148 and famously taught himself English by watching the TV show 'Friends'."
      ],
      ja: [
        "BTS（防弾少年団）という名前には、10代・20代が受ける偏見や抑圧を食い止めるという意志が込められています。",
        "BTSは、自作の曲で米ビルボードHot 100で1位を獲得した初の韓国アーティストであり、K-POPの歴史を塗り替えました。",
        "メンバー全員が2022年から2023年にかけて入隊し、2025年までに順次除隊して完全体でのカムバックを控えています。",
        "ARMYは世界最大のK-POPファンダムであり、メンバーの兵役中もストリーミングや応援キャンペーンを絶え間なく続けました。",
        "Vとジミンの「クオズ」、RMとジンの「ナムジン」など、メンバー間の多様なケミストリーが独自の文化を形成しています。"
      ],
      zh: [
        "BTS（防弹少年团）这个名字寓意阻挡10代和20代青少年在生活中遭受的偏见和压迫。",
        "BTS是首位凭借自制歌曲登顶美国公告牌百强单曲榜的韩国艺人，改写了K-pop的历史。",
        "全体成员在2022年至2023年期间相继入伍，并预计在2025年全员退伍，准备以完整体回归。",
        "ARMY是全球最大的K-pop粉丝团，即使在成员服兵役期间，也从未停止过流媒体播放和支持活动。",
        "V和Jimin的'VMIN'、RM和Jin的'NamJin'等成员间的各种组合在粉丝圈内形成了独特的亚文化。"
      ],
      es: [
        "El nombre BTS (Bangtan Sonyeondan) significa 'Boy Scouts a prueba de balas', con la voluntad de proteger a los jóvenes de los prejuicios.",
        "BTS fue el primer artista coreano en alcanzar el número 1 en el Billboard Hot 100 con una canción propia, reescribiendo la historia del K-pop.",
        "Todos los miembros se alistaron entre 2022 y 2023 y terminarán su servicio en 2025, preparando su regreso como grupo completo.",
        "ARMY es el fandom de K-pop más grande del mundo y nunca dejó de apoyar a BTS durante su servicio militar.",
        "Las parejas de miembros como 'VMIN' (V+Jimin) y 'NamJin' (RM+Jin) han creado subculturas únicas dentro del fandom."
      ],
      id: [
        "Nama BTS (Bangtan Sonyeondan) berarti 'Bulletproof Boy Scouts', yang melambangkan kemauan untuk melindungi remaja dari prasangka.",
        "BTS menjadi artis Korea pertama yang memuncaki Billboard Hot 100 dengan lagu produksi sendiri, menulis ulang sejarah K-pop.",
        "Semua anggota mendaftar wajib militer antara 2022-2023 dan akan selesai pada 2025 untuk comeback grup secara penuh.",
        "ARMY adalah fandom K-pop terbesar di dunia, yang terus memberikan dukungan melalui streaming dan kampanye selama anggota wajib militer.",
        "Pasangan anggota seperti 'VMIN' (V+Jimin) dan 'NamJin' (RM+Jin) telah membentuk subkultur unik di dalam fandom."
      ],
      fr: [
        "Le nom BTS (Bangtan Sonyeondan) signifie 'Bulletproof Boy Scouts', promettant de protéger les jeunes des préjugés de la société.",
        "BTS est devenu le premier artiste coréen à dominer le Billboard Hot 100 avec une chanson autoproduite, réécrivant l'histoire de la K-pop.",
        "Tous les membres ont effectué leur service militaire entre 2022 et 2025, avec un retour complet du groupe à l'horizon.",
        "ARMY est le plus grand fandom de K-pop au monde et n'a jamais cessé de soutenir BTS pendant leur service.",
        "Les duos de membres comme 'VMIN' (V+Jimin) et 'NamJin' (RM+Jin) ont engendré des sous-cultures entières au sein du fandom."
      ],
      hi: [
        "बीटीएस (BTS) नाम का अर्थ 'बुलेटप्रूफ बॉय स्काउट्स' है - जो युवाओं को समाज के पूर्वाग्रहों से बचाने का संकल्प लेता है।",
        "बीटीएस खुद के द्वारा निर्मित गीत के साथ बिलबोर्ड हॉट 100 में शीर्ष पर पहुंचने वाले पहले कोरियाई कलाकार बने।",
        "सभी सदस्यों ने 2022-2025 के बीच अपनी अनिवार्य सैन्य सेवा पूरी की, और अब पूर्ण समूह के रूप में वापसी की तैयारी है।",
        "ARMY दुनिया का सबसे बड़ा K-pop फैंडम है, जिसने सदस्यों की सेवा के दौरान भी बीटीएस का समर्थन करना बंद नहीं किया।",
        "सदस्यों की जोड़ियां जैसे 'VMIN' (V+Jimin) और 'NamJin' (RM+Jin) ने फैंडम के भीतर अपनी अलग संस्कृति बनाई है।"
      ],
      pt: [
        "O nome BTS (Bangtan Sonyeondan) significa 'Bulletproof Boy Scouts', com a vontade de proteger os jovens dos preconceitos da sociedade.",
        "O BTS foi o primeiro artista coreano a liderar a Billboard Hot 100 com uma canção autoproduzida, reescrevendo a história do K-pop.",
        "Todos os membros completaram o serviço militar entre 2022 e 2025, com um retorno do grupo completo planejado para 2025.",
        "O ARMY é o maior fandom de K-pop do mundo e nunca parou de apoiar o BTS durante o serviço militar dos membros.",
        "As duplas de membros como 'VMIN' (V+Jimin) e 'NamJin' (RM+Jin) criaram subculturas próprias dentro do fandom."
      ],
      ar: [
        "اسم BTS (Bangtan Sonyeondan) يعني 'فتيان الكشافة المقاومين للرصاص' - كعهد لحماية الشباب من التحيز والقمع.",
        "أصبحت BTS أول فرقة كورية تتصدر قائمة بيلبورد هوت 100 بأغنية من إنتاجها الخاص، مما أعاد كتابة تاريخ الكي-بوب.",
        "أكمل جميع الأعضاء خدمتهم العسكرية الإلزامية بين عامي 2022 و2025، مع عودة كاملة للفرقة في الأفق.",
        "ARMY هو أكبر فاندوم للكي-بوب في العالم، ولم يتوقفوا أبداً عن دعم BTS طوال فترة خدمتهم العسكرية.",
        "شكلت ثنائيات الأعضاء مثل 'VMIN' و 'NamJin' ثقافات فرعية فريدة داخل الفاندوم."
      ],
      th: [
        "ชื่อ BTS (Bangtan Sonyeondan) หมายถึง 'Bulletproof Boy Scouts' โดยมุ่งมั่นที่จะปกป้องเยาวชนจากอคติและการกดขี่ในสังคม",
        "BTS กลายเป็นศิลปินเกาหลีกลุ่มแรกที่ครองอันดับ 1 ใน Billboard Hot 100 ด้วยเพลงที่ผลิตเอง ซึ่งเป็นการเขียนประวัติศาสตร์ใหม่ให้ K-pop",
        "สมาชิกทุกคนเข้าเกณฑ์ทหารระหว่างปี 2022-2025 และมีแผนจะกลับมาทำกิจกรรมร่วมกันแบบครบวงในปี 2025",
        "ARMY เป็นแฟนด้อม K-pop ที่ใหญ่ที่สุดในโลก ซึ่งยังคงสนับสนุน BTS อย่างต่อเนื่องแม้ในช่วงที่สมาชิกปฏิบัติภารกิจทางทหาร",
        "การจับคู่สมาชิกอย่าง 'VMIN' (V+Jimin) และ 'NamJin' (RM+Jin) ได้สร้างวัฒนธรรมย่อยที่โดดเด่นภายในแฟนด้อม"
      ],
      vi: [
        "Tên BTS (Bangtan Sonyeondan) có nghĩa là 'Chống đạn thiếu niên đoàn' - với ý chí bảo vệ giới trẻ khỏi những định kiến và áp bức.",
        "BTS trở thành nghệ sĩ Hàn Quốc đầu tiên đứng đầu Billboard Hot 100 với một bài hát tự sản xuất, viết lại lịch sử K-pop.",
        "Tất cả các thành viên đã hoàn thành nghĩa vụ quân sự từ năm 2022 đến 2025, chuẩn bị cho màn tái xuất đầy đủ vào năm 2025.",
        "ARMY là fandom K-pop lớn nhất thế giới, không ngừng ủng hộ BTS trong suốt thời gian các thành viên nhập ngũ.",
        "Các cặp thành viên như 'VMIN' (V+Jimin) và 'NamJin' (RM+Jin) đã hình thành nên những tiểu văn hóa độc đáo trong fandom."
      ],
      ru: [
        "Название BTS (Bangtan Sonyeondan) означает «Пуленепробиваемые бойскауты» — обет защищать молодежь от предрассудков общества.",
        "BTS стали первыми корейскими артистами, возглавившими Billboard Hot 100 с песней собственного производства.",
        "Все участники прошли обязательную военную службу в 2022–2025 годах, и впереди их ждет возвращение в полном составе.",
        "ARMY — крупнейший в мире фандом K-pop, который не прекращал поддерживать BTS на протяжении всей их службы.",
        "Пейринги участников, такие как «VMIN» (V+Чимин) и «NamJin» (RM+Джин), создали целые субкультуры внутри фандома."
      ]
    },
    news: [
      {
        title: {
          ko: "BTS 진, BTS 멤버 최초 입대… 병역 의무 이행 시작",
          en: "BTS Jin First Member to Enlist, Beginning Military Service",
          ja: "BTS ジン、メンバー初の入隊…兵役義務の履行を開始",
          zh: "BTS Jin 成为首位入伍成员，开始服兵役",
          es: "Jin de BTS es el primer miembro en alistarse, comenzando su servicio militar",
          id: "Jin BTS Menjadi Anggota Pertama yang Mendaftar Wajib Militer",
          fr: "Jin de BTS est le premier membre à s'enrôler pour son service militaire",
          hi: "बीटीएस जिन सेना में भर्ती होने वाले पहले सदस्य बने",
          pt: "Jin do BTS é o primeiro membro a se alistar no serviço militar",
          ar: "جين من BTS أول عضو يلتحق بالخدمة العسكرية",
          th: "จิน BTS เป็นสมาชิกคนแรกที่เข้ากรม เริ่มต้นการรับใช้ชาติ",
          vi: "Jin (BTS) là thành viên đầu tiên nhập ngũ, bắt đầu thực hiện nghĩa vụ quân sự",
          ru: "Джин из BTS первым среди участников заступил на военную службу"
        },
        date: "2022.12.13",
        summary: {
          ko: "맏형 진이 BTS 멤버 최초로 육군에 입대하며, 방탄소년단의 공백기가 공식적으로 시작되었습니다.",
          en: "Eldest member Jin became the first BTS member to enlist in the army, officially beginning the group's hiatus.",
          ja: "最年長のジンがBTSメンバーとして初めて陸軍に入隊し、公式にグループの活動休止期間が始まりました。",
          zh: "大哥Jin作为BTS首位成员入伍陆军，防弹少年团的空白期正式开始。",
          es: "El miembro mayor, Jin, se convirtió en el primer integrante de BTS en alistarse en el ejército, comenzando oficialmente el descanso del grupo.",
          id: "Anggota tertua Jin menjadi anggota BTS pertama yang mendaftar di angkatan darat, secara resmi memulai masa hiatus grup.",
          fr: "Jin, le membre le plus âgé, est devenu le premier membre de BTS à s'enrôler, marquant le début officiel de la pause du groupe.",
          hi: "सबसे बड़े सदस्य जिन सेना में भर्ती होने वाले पहले बीटीएस सदस्य बने, जिससे आधिकारिक तौर पर समूह का अंतराल शुरू हो गया।",
          pt: "O membro mais velho, Jin, tornou-se o primeiro integrante do BTS a se alistar no exército, iniciando oficialmente o hiato do grupo.",
          ar: "أصبح جين، العضو الأكبر سناً، أول عضو من BTS يلتحق بالجيش، ليبدأ رسمياً فترة توقف الفرقة.",
          th: "พี่ใหญ่จินเป็นสมาชิก BTS คนแรกที่เข้ากรมทหารบก เริ่มต้นช่วงพักวงอย่างเป็นทางการ",
          vi: "Anh cả Jin trở thành thành viên BTS đầu tiên nhập ngũ, chính thức bắt đầu giai đoạn tạm dừng hoạt động của nhóm.",
          ru: "Старший участник Джин первым из BTS ушел в армию, официально положив начало перерыву в деятельности группы."
        },
        url: "#"
      },
      {
        title: {
          ko: "제이홉, BTS 멤버 최초 전역… 빠른 복귀 예고",
          en: "J-Hope First BTS Member to Be Discharged, Hints at Quick Return",
          ja: "J-HOPE、BTSメンバー初の除隊…早い復帰を予告",
          zh: "J-Hope 成为首位退伍成员，预告快速回归",
          es: "J-Hope es el primer miembro de BTS en ser dado de baja, insinúa un rápido regreso",
          id: "J-Hope Menjadi Anggota BTS Pertama yang Selesai Wajib Militer",
          fr: "J-Hope est le premier membre de BTS à être libéré, annonce un retour rapide",
          hi: "जे-होप सैन्य सेवा से मुक्त होने वाले पहले बीटीएस सदस्य बने",
          pt: "J-Hope é o primeiro membro do BTS a ser dispensado, sugerindo um retorno rápido",
          ar: "جيهوب أول عضو من BTS ينهي خدمته العسكرية، ويلمح لعودة سريعة",
          th: "เจโฮปเป็นสมาชิก BTS คนแรกที่ออกจากกรม พร้อมประกาศเตรียมกลับมาทำงานทันที",
          vi: "J-Hope là thành viên BTS đầu tiên xuất ngũ, hé lộ màn trở lại sớm",
          ru: "Джей-Хоуп первым из BTS завершил службу, намекнув на скорое возвращение"
        },
        date: "2024.02.21",
        summary: {
          ko: "제이홉이 BTS 멤버 중 가장 먼저 군 전역을 완료하고 팬들의 환호 속에 사회로 복귀했습니다.",
          en: "J-Hope became the first BTS member to complete his military service, returning to civilian life to the cheers of fans.",
          ja: "J-HOPEがBTSメンバーの中で最初に兵役を終え、ファンの歓声の中で社会に復帰しました。",
          zh: "J-Hope在BTS成员中率先完成兵役，在粉丝的欢呼声中回归社会。",
          es: "J-Hope se convirtió en el primer miembro de BTS en completar su servicio militar, regresando a la vida civil entre los vítores de los fans.",
          id: "J-Hope menjadi anggota BTS pertama yang menyelesaikan wajib militer dan kembali ke masyarakat di tengah sorakan penggemar.",
          fr: "J-Hope est devenu le premier membre de BTS à terminer son service militaire, retrouvant la vie civile sous les acclamations des fans.",
          hi: "जे-होप अपनी सैन्य सेवा पूरी करने वाले पहले बीटीएस सदस्य बने, प्रशंसकों की जय-जयकार के बीच नागरिक जीवन में वापस लौटे।",
          pt: "J-Hope tornou-se o primeiro membro do BTS a completar o serviço militar, retornando à vida civil sob os aplausos dos fãs.",
          ar: "أصبح جيهوب أول عضو من BTS يكمل خدمته العسكرية، ليعود إلى حياته المدنية وسط هتافات المعجبين.",
          th: "เจโฮปเป็นสมาชิก BTS คนแรกที่เสร็จสิ้นภารกิจทางทหารและกลับคืนสู่สังคมท่ามกลางเสียงเชียร์ของแฟนๆ",
          vi: "J-Hope trở thành thành viên BTS đầu tiên hoàn thành nghĩa vụ quân sự và trở lại trong tiếng reo hò của người hâm mộ.",
          ru: "Джей-Хоуп первым из участников BTS завершил службу и вернулся к гражданской жизни под ликование фанатов."
        },
        url: "#"
      },
      {
        title: {
          ko: "진, 군 전역 후 솔로 앨범 'Happy' 발매… 글로벌 차트 점령",
          en: "Jin Releases Solo Album 'Happy' After Discharge, Dominates Global Charts",
          ja: "ジン、除隊後にソロアルバム「Happy」を発売…グローバルチャートを席巻",
          zh: "Jin 退伍后发行个人专辑《Happy》，横扫全球榜单",
          es: "Jin lanza su álbum en solitario 'Happy' después de su baja, domina las listas mundiales",
          id: "Jin Merilis Album Solo 'Happy' Setelah Wajib Militer, Mendominasi Tangga Lagu Global",
          fr: "Jin sort son album solo 'Happy' après sa libération, domine les classements mondiaux",
          hi: "सैन्य सेवा के बाद जिन ने सोलो एल्बम 'Happy' रिलीज़ किया, वैश्विक चार्ट पर कब्जा",
          pt: "Jin lança álbum solo 'Happy' após dispensa, domina as paradas globais",
          ar: "جين يصدر ألبومه المنفرد 'Happy' بعد إنهاء الخدمة، ويهيمن على القوائم العالمية",
          th: "จินปล่อยอัลบั้มโซโล่ 'Happy' หลังออกจากกรม ครองชาร์ตทั่วโลก",
          vi: "Jin phát hành album solo 'Happy' sau khi xuất ngũ, thống trị các bảng xếp hạng toàn cầu",
          ru: "Джин выпустил сольный альбом «Happy» после службы, возглавив мировые чарты"
        },
        date: "2024.06.13",
        summary: {
          ko: "전역 직후 발매한 솔로 앨범 'Happy'가 전 세계 팬들의 뜨거운 반응 속에 글로벌 차트를 점령했습니다.",
          en: "His post-discharge solo album 'Happy' was met with explosive fan enthusiasm, dominating global charts.",
          ja: "除隊直後に発売されたソロアルバム「Happy」は、世界中のファンの熱い反応の中でグローバルチャートを席巻しました。",
          zh: "退伍后立即发行的个人专辑《Happy》在全世界粉丝的热烈反响中横扫全球榜单。",
          es: "Su álbum en solitario 'Happy', lanzado justo después de su baja, dominó las listas mundiales con una respuesta explosiva de los fans.",
          id: "Album solo 'Happy' yang dirilis tepat setelah ia selesai wajib militer mendominasi tangga lagu global dengan antusiasme penggemar yang luar biasa.",
          fr: "Son album solo 'Happy', sorti juste après sa libération, a dominé les classements mondiaux avec un enthousiasme explosif des fans.",
          hi: "सैन्य सेवा से मुक्त होने के तुरंत बाद जारी उनके सोलो एल्बम 'Happy' को दुनिया भर के प्रशंसकों की जबरदस्त प्रतिक्रिया मिली।",
          pt: "Seu álbum solo 'Happy', lançado logo após sua dispensa, dominou as paradas globais com uma resposta explosiva dos fãs.",
          ar: "ألبومه المنفرد 'Happy' الذي صدر فور انتهاء خدمته، حظي بتفاعل هائل من المعجبين وهيمن على القوائم العالمية.",
          th: "อัลบั้มโซโล่ 'Happy' ที่ปล่อยหลังออกจากกรมทันทีได้รับการตอบรับอย่างล้นหลามและครองชาร์ตทั่วโลก",
          vi: "Album solo 'Happy' phát hành ngay sau khi xuất ngũ đã thống trị các bảng xếp hạng toàn cầu trong sự hưởng ứng nồng nhiệt của người hâm mộ.",
          ru: "Его сольный альбом «Happy», выпущенный сразу после демобилизации, был встречен фанатами с восторгом и возглавил мировые чарты."
        },
        url: "#"
      },
      {
        title: {
          ko: "RM·뷔·슈가, 동반 전역… BTS 완전체 카운트다운 가속화",
          en: "RM, V, Suga Discharged Together, Accelerating BTS Full Reunion Countdown",
          ja: "RM・V・シュガ、揃って除隊…BTS完全体へのカウントダウン加速",
          zh: "RM、V、Suga 同步退伍，BTS 完整体回归进入倒计时",
          es: "RM, V y Suga son dados de baja juntos, acelerando la cuenta regresiva para el regreso completo de BTS",
          id: "RM, V, Suga Selesai Wajib Militer Bersama, Mempercepat Hitung Mundur Comeback BTS",
          fr: "RM, V et Suga libérés ensemble, accélérant le compte à rebours pour le retour complet de BTS",
          hi: "आरएम, वी, और सुगा एक साथ सैन्य सेवा से मुक्त, बीटीएस की वापसी की तैयारी तेज",
          pt: "RM, V e Suga são dispensados juntos, acelerando a contagem regressiva para o retorno do BTS",
          ar: "RM وفي وشوقا ينهون خدمتهم معاً، مما يسرع العد التنازلي لعودة فرقة BTS كاملة",
          th: "RM, V, Suga ออกจากกรมพร้อมกัน เร่งเวลาการกลับมารวมตัวกันครบวงของ BTS",
          vi: "RM, V, Suga cùng xuất ngũ, đẩy nhanh quá trình đếm ngược ngày BTS tái hợp đầy đủ",
          ru: "RM, Ви и Шуга завершили службу вместе, приближая воссоединение BTS"
        },
        date: "2024.06.21",
        summary: {
          ko: "RM, 뷔, 슈가가 동시에 군 전역을 완료하며 방탄소년단 완전체 복귀에 대한 기대감이 최고조에 달했습니다.",
          en: "RM, V, and Suga completed their service simultaneously, sending fan anticipation for a full BTS reunion to its peak.",
          ja: "RM、V、シュガが同時に除隊し、BTS完全体復帰への期待が最高潮に達しました。",
          zh: "RM、V、Suga同时完成兵役，防弹少年团完整体回归的期待感达到顶点。",
          es: "RM, V y Suga completaron su servicio simultáneamente, llevando la anticipación por un regreso completo de BTS a su punto máximo.",
          id: "RM, V, dan Suga menyelesaikan wajib militer secara bersamaan, membawa antusiasme penggemar untuk reuni BTS ke puncaknya.",
          fr: "RM, V et Suga ont terminé leur service simultanément, portant l'attente des fans pour une réunion complète de BTS à son apogée.",
          hi: "आरएम, वी और सुगा ने एक साथ अपनी सेवा पूरी की, जिससे बीटीएस के पूर्ण पुनर्मिलन के लिए प्रशंसकों की प्रत्याशा चरम पर पहुंच गई।",
          pt: "RM, V e Suga completaram o serviço simultaneamente, levando a antecipação dos fãs para uma reunião completa do BTS ao auge.",
          ar: "أكمل RM وفي وشوقا خدمتهم في وقت واحد، مما رفع حماس المعجبين لعودة BTS كاملة إلى ذروته.",
          th: "RM, V และ Suga เสร็จสิ้นภารกิจทางทหารพร้อมกัน ทำให้ความคาดหวังในการกลับมารวมตัวกันของ BTS พุ่งสูงขึ้นถึงขีดสุด",
          vi: "RM, V và Suga đồng thời hoàn thành nghĩa vụ quân sự, đưa sự kỳ vọng về màn tái hợp của BTS lên mức cao nhất.",
          ru: "RM, Ви и Шуга одновременно завершили службу, доведя ожидание воссоединения BTS до предела."
        },
        url: "#"
      },
      {
        title: {
          ko: "지민·정국, 전역 완료… BTS 7인 체제 공식 복귀",
          en: "Jimin and Jungkook Discharged — BTS Officially Reunited as Seven",
          ja: "ジミン・ジョングク除隊完了…BTS 7人体制で公式復帰",
          zh: "Jimin、柾国退伍，BTS 7人组正式回归",
          es: "Jimin y Jungkook son dados de baja — BTS se reúne oficialmente como siete",
          id: "Jimin dan Jungkook Selesai Wajib Militer — BTS Resmi Kembali Berasama",
          fr: "Jimin et Jungkook libérés — BTS officiellement réunis à sept",
          hi: "जिमिन और जंकुक सैन्य सेवा से मुक्त — बीटीएस आधिकारिक तौर पर सात के रूप में फिर से एक साथ",
          pt: "Jimin e Jungkook são dispensados — BTS oficialmente reunido como sete",
          ar: "جيمين وجونغكوك ينهيان خدمتهما — فرقة BTS تجتمع رسمياً كسبعة أعضاء",
          th: "จีมินและจองกุกออกจากกรมแล้ว — BTS กลับมารวมตัวกัน 7 คนอย่างเป็นทางการ",
          vi: "Jimin và Jungkook hoàn thành nghĩa vụ — BTS chính thức trở lại với đội hình 7 người",
          ru: "Чимин и Чонгук завершили службу — BTS официально воссоединились в составе семи человек"
        },
        date: "2025.06.11",
        summary: {
          ko: "지민과 정국이 마지막으로 군 전역을 마침으로써 7인 방탄소년단이 완전히 한자리에 모였습니다.",
          en: "With Jimin and Jungkook completing their service, all seven BTS members are finally reunited.",
          ja: "ジミンとジョングクが最後に除隊したことで、BTSの7人がついに一堂に会しました。",
          zh: "随着Jimin和柾国最后完成兵役，7人组防弹少年团终于全部集结。",
          es: "Con Jimin y Jungkook completando su servicio, los siete miembros de BTS están finalmente reunidos.",
          id: "Dengan selesainya wajib militer Jimin dan Jungkook, ketujuh anggota BTS akhirnya bersatu kembali.",
          fr: "Avec Jimin et Jungkook terminant leur service, les sept membres de BTS sont enfin réunis.",
          hi: "जिमिन और जंकुक की सेवा पूरी होने के साथ, बीटीएस के सभी सात सदस्य अंततः फिर से एक साथ हो गए हैं।",
          pt: "Com Jimin e Jungkook completando o serviço, todos os sete membros do BTS estão finalmente reunidos.",
          ar: "مع إكمال جيمين وجونغكوك خدمتهما، اجتمع أخيراً جميع أعضاء BTS السبعة معاً.",
          th: "เมื่อจีมินและจองกุกเสร็จสิ้นภารกิจ สมาชิกทั้ง 7 คนของ BTS ก็ได้กลับมารวมตัวกันอีกครั้งในที่สุด",
          vi: "Với việc Jimin và Jungkook hoàn thành nghĩa vụ, tất cả 7 thành viên BTS cuối cùng đã được đoàn tụ.",
          ru: "После того как Чимин и Чонгук завершили службу, все семь участников BTS наконец-то собрались вместе."
        },
        url: "#"
      },
      {
        title: {
          ko: "BTS, 데뷔 12주년 기념 완전체 컴백 공식 발표",
          en: "BTS Officially Announces Full Group Comeback for 12th Anniversary",
          ja: "BTS、デビュー12周年記念で完全体カムバックを公式発表",
          zh: "BTS 正式宣布出道12周年完整体回归",
          es: "BTS anuncia oficialmente su regreso como grupo completo para su 12.º aniversario",
          id: "BTS Resmi Mengumumkan Comeback Grup Secara Penuh untuk Hari Jadi ke-12",
          fr: "BTS annonce officiellement un retour du groupe au complet pour son 12e anniversaire",
          hi: "बीटीएस ने आधिकारिक तौर पर 12वीं वर्षगांठ पर पूर्ण समूह वापसी की घोषणा की",
          pt: "BTS anuncia oficialmente retorno do grupo completo para o 12º aniversário",
          ar: "فرقة BTS تعلن رسمياً عن عودة المجموعة كاملة في الذكرى السنوية الثانية عشرة",
          th: "BTS ประกาศคัมแบ็คครบวงอย่างเป็นทางการเนื่องในโอกาสครบรอบ 12 ปี",
          vi: "BTS chính thức thông báo màn tái hợp đầy đủ kỷ niệm 12 năm ra mắt",
          ru: "BTS официально объявили о возвращении в полном составе на 12-ю годовщину"
        },
        date: "2025.06.13",
        summary: {
          ko: "방탄소년단이 데뷔 12주년을 맞아 7인 완전체 컴백을 공식 발표하며 전 세계 팬들을 열광시켰습니다.",
          en: "BTS officially announced their 7-member full group comeback on their 12th debut anniversary, sending fans worldwide into euphoria.",
          ja: "BTSがデビュー12周年を迎え、7人の完全体でのカムバックを公式に発表し、世界中のファンを熱狂させました。",
          zh: "防弹少年团在迎来出道12周年之际，正式宣布7人完整体回归，令全球粉丝欢欣鼓舞。",
          es: "BTS anunció oficialmente el regreso de los 7 miembros en su 12.º aniversario, enviando a los fans de todo el mundo a la euforia.",
          id: "BTS secara resmi mengumumkan comeback 7 anggota pada hari jadi debut mereka yang ke-12, membuat penggemar di seluruh dunia gembira.",
          fr: "BTS a officiellement annoncé son retour à sept pour son 12e anniversaire, plongeant les fans du monde entier dans l'euphorie.",
          hi: "बीटीएस ने अपनी 12वीं वर्षगांठ पर 7-सदस्यीय पूर्ण समूह की वापसी की आधिकारिक घोषणा की, जिससे दुनिया भर के प्रशंसक बेहद खुश हो गए।",
          pt: "O BTS anunciou oficialmente o retorno dos 7 membros no 12º aniversário, levando os fãs de todo o mundo à euforia.",
          ar: "أعلنت فرقة BTS رسمياً عن عودة الأعضاء السبعة في الذكرى الثانية عشرة لظهورهم، مما أثار حماس المعجبين في جميع أنحاء العالم.",
          th: "BTS ประกาศคัมแบ็คสมาชิก 7 คนอย่างเป็นทางการในวันครบรอบ 12 ปี สร้างความตื่นเต้นให้กับแฟนๆ ทั่วโลก",
          vi: "BTS chính thức thông báo màn tái hợp đầy đủ 7 thành viên vào kỷ niệm 12 năm ra mắt, khiến người hâm mộ toàn cầu vô cùng phấn khích.",
          ru: "BTS официально объявили о возвращении всех семерых участников на 12-ю годовщину дебюта, приведя фанатов в восторг."
        },
        url: "#"
      },
      {
        title: {
          ko: "BTS 완전체 컴백 신보, 발매 첫날 역대 스트리밍 신기록 달성",
          en: "BTS Full Group Comeback Album Sets All-Time Streaming Record on Day One",
          ja: "BTS完全体カムバック新譜、発売初日に歴代ストリーミング新記録を達成",
          zh: "BTS 完整体回归新专辑发行首日创下流媒体新纪录",
          es: "El nuevo álbum de regreso de BTS establece un récord histórico de streaming en su primer día",
          id: "Album Comeback BTS Mencetak Rekor Streaming Sepanjang Masa di Hari Pertama",
          fr: "Le nouvel album de BTS établit un record de streaming historique dès le premier jour",
          hi: "बीटीएस के नए एल्बम ने पहले दिन स्ट्रीमिंग का अब तक का रिकॉर्ड बनाया",
          pt: "Novo álbum do BTS estabelece recorde histórico de streaming no primeiro dia",
          ar: "ألبوم عودة BTS يحقق رقماً قياسياً تاريخياً في البث في يومه الأول",
          th: "อัลบั้มคัมแบ็คของ BTS ทำสถิติยอดสตรีมสูงสุดเป็นประวัติการณ์ในวันแรก",
          vi: "Album tái hợp của BTS đạt kỷ lục lượt nghe trực tuyến cao nhất mọi thời đại trong ngày đầu tiên",
          ru: "Новый альбом BTS установил абсолютный рекорд по количеству прослушиваний в первый день"
        },
        date: "2025.08.01",
        summary: {
          ko: "2년 만의 완전체 컴백 앨범이 전 세계 스포티파이 및 애플뮤직 차트를 동시에 석권하며 역대급 기록을 세웠습니다.",
          en: "Their first full-group album in two years swept Spotify and Apple Music charts globally, setting all-time records.",
          ja: "2年ぶりの完全体カムバックアルバムが、世界中のSpotifyやApple Musicのチャートを同時に席巻し、過去最高の記録を打ち立てました。",
          zh: "时隔两年的完整体回归专辑同时横扫全球Spotify和Apple Music榜单，创下历史性记录。",
          es: "Su primer álbum como grupo completo en dos años arrasó en las listas de Spotify y Apple Music a nivel mundial, estableciendo récords históricos.",
          id: "Album grup penuh pertama mereka dalam dua tahun menyapu tangga lagu Spotify dan Apple Music secara global, mencetak rekor sepanjang masa.",
          fr: "Leur premier album au complet en deux ans a balayé les classements Spotify et Apple Music dans le monde entier, établissant des records historiques.",
          hi: "दो वर्षों में उनके पहले पूर्ण-समूह एल्बम ने वैश्विक स्तर पर स्पॉटिफाई और एप्पल म्यूजिक चार्ट पर कब्जा कर लिया, जिससे सर्वकालिक रिकॉर्ड बन गए।",
          pt: "Seu primeiro álbum como grupo completo em dois anos varreu as paradas do Spotify e Apple Music globalmente, estabelecendo recordes históricos.",
          ar: "أول ألبوم للمجموعة كاملة منذ عامين اجتاح قوائم سبوتيفاي وأبل ميوزك عالمياً، محققاً أرقاماً قياسية تاريخية.",
          th: "อัลบั้มเต็มวงชุดแรกในรอบ 2 ปีครองชาร์ต Spotify และ Apple Music ทั่วโลก พร้อมสร้างสถิติใหม่เป็นประวัติการณ์",
          vi: "Album tái hợp sau 2 năm đã đồng thời thống trị các bảng xếp hạng Spotify và Apple Music toàn cầu, thiết lập những kỷ lục lịch sử.",
          ru: "Их первый за два года альбом в полном составе возглавил чарты Spotify и Apple Music по всему миру, установив рекорды."
        },
        url: "#"
      },
      {
        title: {
          ko: "BTS 완전체 월드투어, 전 세계 35개 도시 매진 행진",
          en: "BTS World Tour Sells Out 35 Cities Worldwide",
          ja: "BTS完全体ワールドツアー、世界35都市で完売が続く",
          zh: "BTS 完整体世界巡演全球35个城市连日售罄",
          es: "La gira mundial de BTS agota entradas en 35 ciudades de todo el mundo",
          id: "Tur Dunia BTS Terjual Habis di 35 Kota di Seluruh Dunia",
          fr: "La tournée mondiale de BTS affiche complet dans 35 villes du monde",
          hi: "बीटीएस वर्ल्ड टूर के दुनिया भर के 35 शहरों के टिकट बिक गए",
          pt: "Turnê mundial do BTS esgota ingressos em 35 cidades ao redor do mundo",
          ar: "جولة BTS العالمية تبيع جميع تذاكرها في 35 مدينة حول العالم",
          th: "เวิลด์ทัวร์ของ BTS ขายบัตรหมดเกลี้ยงใน 35 เมืองทั่วโลก",
          vi: "World tour của BTS cháy vé tại 35 thành phố trên toàn thế giới",
          ru: "Мировой тур BTS полностью распродан в 35 городах мира"
        },
        date: "2025.09.15",
        summary: {
          ko: "7인 완전체 월드투어가 발표 수 분 만에 전 회차 매진을 기록하며 팬들의 폭발적인 반응을 얻었습니다.",
          en: "The full-group world tour sold out every show within minutes of announcement, proving the unstoppable force of BTS and ARMY.",
          ja: "7人の完全体でのワールドツアーは、発表から数分で全公演が完売し、ファンの爆発的な反応を得ました。",
          zh: "7人完整体世界巡演在公布数分钟后便全部售罄，获得了粉丝们的热烈反响。",
          es: "La gira mundial de los 7 miembros agotó todas las entradas a pocos minutos de su anuncio, demostrando la fuerza imparable de BTS y ARMY.",
          id: "Tur dunia 7 anggota terjual habis dalam hitungan menit setelah pengumuman, membuktikan kekuatan BTS dan ARMY yang tak terbendung.",
          fr: "La tournée mondiale à sept a affiché complet en quelques minutes, prouvant la force irrésistible de BTS et des ARMY.",
          hi: "7-सदस्यीय पूर्ण समूह के वर्ल्ड टूर के सभी शो घोषणा के कुछ ही मिनटों के भीतर बिक गए, जो बीटीएस और आर्मी की अजेय शक्ति को साबित करता है।",
          pt: "A turnê mundial dos 7 membros esgotou todos os shows em poucos minutos após o anúncio, provando a força imparável do BTS e do ARMY.",
          ar: "جولة الأعضاء السبعة العالمية بيعت تذاكرها بالكامل في غضون دقائق من الإعلان عنها، مما يثبت قوة BTS والآرمي التي لا تقهر.",
          th: "เวิลด์ทัวร์ของสมาชิกทั้ง 7 คนขายบัตรหมดเกลี้ยงทุกรอบภายในไม่กี่นาทีหลังการประกาศ แสดงให้เห็นถึงพลังที่หยุดไม่ได้ของ BTS และ ARMY",
          vi: "World tour của 7 thành viên đã cháy vé toàn bộ các đêm diễn chỉ vài phút sau khi công bố, chứng minh sức mạnh không thể ngăn cản của BTS và ARMY.",
          ru: "Мировой тур всех семерых участников был полностью распродан через несколько минут после анонса, подтвердив мощь BTS и ARMY."
        },
        url: "#"
      },
      {
        title: {
          ko: "지민, 솔로 앨범 'MUSE' 빌보드 200 정상 등극",
          en: "Jimin's Solo Album 'MUSE' Reaches No.1 on Billboard 200",
          ja: "ジミン、ソロアルバム「MUSE」がビルボード200で1位に",
          zh: "Jimin 个人专辑《MUSE》登上公告牌二百强专辑榜榜首",
          es: "El álbum en solitario de Jimin 'MUSE' alcanza el número 1 en el Billboard 200",
          id: "Album Solo Jimin 'MUSE' Mencapai No.1 di Billboard 200",
          fr: "L'album solo de Jimin 'MUSE' atteint la 1ère place du Billboard 200",
          hi: "जिमिन का सोलो एल्बम 'MUSE' बिलबोर्ड 200 में नंबर 1 पर पहुंचा",
          pt: "Álbum solo de Jimin, 'MUSE', atinge o nº 1 na Billboard 200",
          ar: "ألبوم جيمين المنفرد 'MUSE' يصل إلى المركز الأول في بيلبورد 200",
          th: "อัลบั้มโซโล่ 'MUSE' ของจีมินขึ้นอันดับ 1 ใน Billboard 200",
          vi: "Album solo 'MUSE' của Jimin vươn lên vị trí quán quân trên Billboard 200",
          ru: "Сольный альбом Чимина «MUSE» занял первое место в Billboard 200"
        },
        date: "2024.07.19",
        summary: {
          ko: "지민의 두 번째 솔로 앨범 'MUSE'가 빌보드 200에서 1위를 기록하며 솔로 아티스트로서의 저력을 다시 한번 증명했습니다.",
          en: "Jimin's second solo album 'MUSE' reached #1 on the Billboard 200, reaffirming his strength as a solo artist.",
          ja: "ジミンの2枚目のソロアルバム「MUSE」がビルボード200で1位を記録し、ソロアーティストとしての実力を改めて証明しました。",
          zh: "Jimin的第二张个人专辑《MUSE》在公告牌二百强专辑榜上夺冠，再次证明了其作为个人艺术家的实力。",
          es: "El segundo álbum en solitario de Jimin, 'MUSE', alcanzó el número 1 en el Billboard 200, reafirmando su fuerza como artista en solitario.",
          id: "Album solo kedua Jimin 'MUSE' mencapai peringkat 1 di Billboard 200, membuktikan kembali kekuatannya sebagai artis solo.",
          fr: "Le deuxième album solo de Jimin, 'MUSE', a atteint la première place du Billboard 200, confirmant une fois de plus son talent d'artiste solo.",
          hi: "जिमिन के दूसरे सोलो एल्बम 'MUSE' ने बिलबोर्ड 200 में नंबर 1 स्थान हासिल किया, जिससे एक सोलो कलाकार के रूप में उनकी ताकत फिर से साबित हुई।",
          pt: "O segundo álbum solo de Jimin, 'MUSE', alcançou o primeiro lugar na Billboard 200, reafirmando sua força como artista solo.",
          ar: "وصل ألبوم جيمين المنفرد الثاني 'MUSE' إلى المركز الأول في بيلبورد 200، مما يؤكد من جديد قوته كفنان منفرد.",
          th: "อัลบั้มโซโล่ชุดที่สอง 'MUSE' ของจีมินครองอันดับ 1 ใน Billboard 200 พิสูจน์ความสามารถในฐานะศิลปินเดี่ยวอีกครั้ง",
          vi: "Album solo thứ hai 'MUSE' của Jimin đã đứng đầu Billboard 200, một lần nữa chứng minh thực lực của anh với tư cách nghệ sĩ solo.",
          ru: "Второй сольный альбом Чимина «MUSE» занял первое место в Billboard 200, подтвердив его успех как сольного артиста."
        },
        url: "#"
      },
      {
        title: {
          ko: "정국 솔로 싱글 'Seven', 빌보드 핫 100 1위 등극",
          en: "Jungkook Solo Single 'Seven' Reaches No.1 on Billboard Hot 100",
          ja: "ジョングクのソロシングル「Seven」がビルボードHot 100で1位に",
          zh: "柾国个人单曲《Seven》登顶公告牌百强单曲榜",
          es: "El sencillo en solitario de Jungkook 'Seven' alcanza el número 1 en el Billboard Hot 100",
          id: "Single Solo Jungkook 'Seven' Mencapai No.1 di Billboard Hot 100",
          fr: "Le single solo de Jungkook 'Seven' atteint la 1ère place du Billboard Hot 100",
          hi: "जंकुक का सोलो सिंगल 'Seven' बिलबोर्ड हॉट 100 में नंबर 1 पर",
          pt: "Single solo de Jungkook, 'Seven', atinge o nº 1 na Billboard Hot 100",
          ar: "أغنية جونغكوك المنفردة 'Seven' تصل إلى المركز الأول في بيلبورد هوت 100",
          th: "ซิงเกิลโซโล่ 'Seven' ของจองกุกขึ้นอันดับ 1 ใน Billboard Hot 100",
          vi: "Single solo 'Seven' của Jungkook đứng đầu Billboard Hot 100",
          ru: "Сольный сингл Чонгука «Seven» занял первое место в Billboard Hot 100"
        },
        date: "2023.07.14",
        summary: {
          ko: "정국의 솔로 데뷔 싱글 'Seven'이 빌보드 핫 100 정상에 오르며 K-팝 솔로 역사를 새로 썼습니다.",
          en: "Jungkook's solo debut single 'Seven' topped the Billboard Hot 100, rewriting K-pop solo history.",
          ja: "ジョングクのソロデビューシングル「Seven」がビルボードHot 100で1位に輝き、K-POPソロの歴史を塗り替えました。",
          zh: "柾国的个人出道单曲《Seven》登顶公告牌百强单曲榜，改写了K-pop个人歌手的历史。",
          es: "El sencillo debut en solitario de Jungkook, 'Seven', encabezó el Billboard Hot 100, reescribiendo la historia del K-pop en solitario.",
          id: "Single debut solo Jungkook 'Seven' memuncaki Billboard Hot 100, menulis ulang sejarah solo K-pop.",
          fr: "Le premier single solo de Jungkook, 'Seven', a dominé le Billboard Hot 100, réécrivant l'histoire des solistes K-pop.",
          hi: "जंकुक के सोलो डेब्यू सिंगल 'Seven' ने बिलबोर्ड हॉट 100 में शीर्ष स्थान हासिल किया, जिससे के-पॉप सोलो इतिहास फिर से लिखा गया।",
          pt: "O single de estreia solo de Jungkook, 'Seven', liderou a Billboard Hot 100, reescrevendo a história dos solistas de K-pop.",
          ar: "تصدرت أغنية جونغكوك المنفردة الأولى 'Seven' قائمة بيلبورد هوت 100، لتعيد كتابة تاريخ الكي-بوب للمغنيين المنفردين.",
          th: "ซิงเกิลเดบิวต์โซโล่ 'Seven' ของจองกุกครองอันดับ 1 ใน Billboard Hot 100 เขียนประวัติศาสตร์ใหม่ให้ศิลปินเดี่ยว K-pop",
          vi: "Single ra mắt solo 'Seven' của Jungkook đã đứng đầu Billboard Hot 100, viết lại lịch sử cho nghệ sĩ solo K-pop.",
          ru: "Дебютный сольный сингл Чонгука «Seven» возглавил Billboard Hot 100, переписав историю K-pop соло-исполнителей."
        },
        url: "#"
      }
    ],
    members: [
      {
        id: "rm",
        name: { ko: "RM", en: "RM", ja: "RM", zh: "RM", es: "RM", id: "RM", fr: "RM", hi: "आरएम (RM)", pt: "RM", ar: "آر إم (RM)", th: "RM", vi: "RM", ru: "RM" },
        role: {
          ko: "리더/메인래퍼",
          en: "Leader/Main Rapper",
          ja: "リーダー/メインラッパー",
          zh: "队长/主Rapper",
          es: "Líder/Rapero Principal",
          id: "Leader/Main Rapper",
          fr: "Leader/Rappeur Principal",
          hi: "लीडर/मुख्य रैपर",
          pt: "Líder/Rapper Principal",
          ar: "قائد/رابر رئيسي",
          th: "ลีดเดอร์/แร็ปเปอร์หลัก",
          vi: "Trưởng nhóm/Rapper chính",
          ru: "Лидер/Главный рэпер"
        },
        birth: "1994.09.12",
        mbti: "ENFP",
        zodiac: {
          ko: "처녀자리",
          en: "Virgo",
          ja: "おとめ座",
          zh: "处女座",
          es: "Virgo",
          id: "Virgo",
          fr: "Vierge",
          hi: "कन्या राशि (Virgo)",
          pt: "Virgem",
          ar: "برج العذراء",
          th: "ราศีกันย์",
          vi: "Xử Nữ",
          ru: "Дева"
        },
        height: "181cm",
        bloodType: "A",
        description: {
          ko: "팀의 든든한 리더이자 전 세계를 무대로 활동하는 뇌섹남 래퍼입니다.",
          en: "The reliable leader and intellectual rapper operating on a global stage.",
          ja: "チームの頼もしいリーダーであり、全世界を舞台に活躍する知的なラッパーです。",
          zh: "团队坚实的队长，也是活跃在全球舞台上的天才男rapper。",
          es: "Es el líder confiable del equipo y un rapero intelectual que opera en un escenario global.",
          id: "Pemimpin tim yang andal dan rapper intelektual yang beroperasi di panggung global.",
          fr: "Le leader fiable de l'équipe et un rappeur intellectuel opérant sur la scène mondiale.",
          hi: "टीम के भरोसेमंद लीडर और वैश्विक मंच पर सक्रिय प्रतिभाशाली रैपर।",
          pt: "O líder confiável da equipe e um rapper intelectual que atua em um cenário global.",
          ar: "قائد الفريق الموثوق ورابر مثقف يعمل على مسرح عالمي.",
          th: "ลีดเดอร์ที่พึ่งพาได้ของวงและเป็นแร็ปเปอร์อัจฉริยะที่โลดแล่นในระดับสากล",
          vi: "Người trưởng nhóm đáng tin cậy và là rapper thông minh hoạt động trên sân khấu toàn cầu.",
          ru: "Надежный лидер группы и интеллектуальный рэпер, выступающий на мировой арене."
        },
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
          ],
          ja: [
            "中学生時代に海外ドラマを繰り返し見て独学で英語をマスターしたことで有名です。",
            "美術作品の収集が趣味で、個人SNSに展示訪問や所蔵作品を公開する熱心なアートコレクターです。",
            "チーム公認の「破壊神」で、スマホやイヤホンを頻繁に壊したり紛失したりします。",
            "名門大学に進学できる成績でしたが、音楽のためにBigHitへの合流を選択しました。",
            "ソロアルバムを通じて、感性豊かなアーティストとしての深みを証明しました。"
          ],
          zh: [
            "中学时期通过反复观看美剧自学并精通了英语，成名后他也向粉丝推荐这个方法。",
            "爱好收藏艺术品，经常在个人社交账号上公开观展和收藏的作品，是一位认真的艺术收藏家。",
            "队内公认的'破坏王'，经常弄坏或弄丢智能手机、耳机等物品。",
            "虽然拥有能考入名牌大学的成绩，但他选择加入BigHit，成为了'意志选择'的象征。",
            "通过个人专辑证明了自己作为感性艺术家的深度。"
          ],
          es: [
            "Aprendió inglés por su cuenta en la escuela secundaria viendo dramas estadounidenses repetidamente.",
            "Es un serio coleccionista de arte que publica regularmente sus visitas a galerías en su SNS.",
            "Es el miembro del equipo que suele tener más accidentes, rompiendo o perdiendo teléfonos y auriculares.",
            "Tenía notas para entrar en programas de derecho prestigiosos, pero eligió unirse a BigHit.",
            "Sus álbumes en solitario confirmaron su profundidad como artista emocional."
          ],
          id: [
            "Dia belajar bahasa Inggris secara otodidak di SMP dengan menonton drama TV Amerika berulang kali.",
            "Dia adalah kolektor seni serius yang secara teratur mengunggah kunjungan galeri di media sosialnya.",
            "Dia dikenal sebagai anggota yang sering merusak atau menghilangkan barang seperti ponsel dan earbud.",
            "Dia dikabarkan memiliki nilai untuk masuk fakultas hukum universitas bergengsi tetapi memilih BigHit.",
            "Album solonya membuktikan kedalamannya sebagai artis yang penuh emosi."
          ],
          fr: [
            "Il a appris l'anglais seul au collège en regardant des séries américaines en boucle.",
            "C'est un collectionneur d'art sérieux qui publie régulièrement ses visites de galeries sur ses réseaux sociaux.",
            "Il est connu pour être le membre le plus maladroit, cassant ou perdant souvent ses téléphones et écouteurs.",
            "Il avait les notes pour intégrer une faculté de droit prestigieuse mais a choisi BigHit.",
            "Ses albums solo ont confirmé sa profondeur en tant qu'artiste émouvant."
          ],
          hi: [
            "उन्होंने मिडिल स्कूल में अमेरिकी टीवी नाटक बार-बार देखकर खुद अंग्रेजी सीखी।",
            "वे कला के गंभीर संग्राहक हैं और नियमित रूप से अपनी गैलरी यात्राओं को सोशल मीडिया पर पोस्ट करते हैं।",
            "उन्हें टीम का सबसे अधिक दुर्घटना-प्रवण सदस्य माना जाता है, जो अक्सर फोन और ईयरबड खो देते हैं।",
            "कहा जाता है कि उनके पास कानून की पढ़ाई के लिए अच्छे ग्रेड थे, लेकिन उन्होंने बीटीएस को चुना।",
            "उनके सोलो एल्बमों ने उन्हें एक गहरे भावुक कलाकार के रूप में स्थापित किया है।"
          ],
          pt: [
            "Ele aprendeu inglês sozinho no ensino fundamental assistindo a séries americanas repetidamente.",
            "Ele é um colecionador de arte sério que publica regularmente suas visitas a galerias nas redes sociais.",
            "Ele é conhecido por ser o membro mais desastrado, quebrando ou perdendo telefones e fones com frequência.",
            "Ele tinha notas para entrar em faculdades de direito prestigiadas, mas escolheu a BigHit.",
            "Seus álbuns solo confirmaram sua profundidade como um artista emocional."
          ],
          ar: [
            "علم نفسه اللغة الإنجليزية في المدرسة الإعدادية من خلال مشاهدة المسلسلات الأمريكية بشكل متكرر.",
            "هو جامع فنون جاد ينشر بانتظام زياراته للمعارض الفنية على وسائل التواصل الاجتماعي.",
            "يعتبر العضو الأكثر عرضة للحوادث في الفريق، حيث يكسر أو يفقد هواتفه وسماعاته باستمرار.",
            "كان لديه درجات تسمح له بدخول كلية الحقوق لكنه اختار الانضمام إلى BigHit.",
            "أثبتت ألبوماته المنفردة عمقه كفنان ملهِم."
          ],
          th: [
            "เขาสอนภาษาอังกฤษตัวเองในช่วงมัธยมต้นโดยการดูซีรีส์อเมริกันซ้ำๆ",
            "เขาเป็นนักสะสมงานศิลปะตัวยงที่มักจะโพสต์ภาพการไปเยี่ยมชมแกลเลอรี่ลงในโซเชียลมีเดีย",
            "เขาเป็นสมาชิกที่ขึ้นชื่อเรื่องการทำของพังหรือทำหายอยู่บ่อยๆ โดยเฉพาะโทรศัพท์และหูฟัง",
            "เขามีผลการเรียนดีพอที่จะเข้าเรียนกฎหมายในมหาวิทยาลัยชื่อดังได้ แต่เลือกที่จะมาอยู่กับ BigHit",
            "อัลบั้มโซโล่ของเขาพิสูจน์ให้เห็นถึงความลึกซึ้งในฐานะศิลปินที่มีอารมณ์ความรู้สึก"
          ],
          vi: [
            "Anh nổi tiếng với việc tự học tiếng Anh khi còn học cấp 2 bằng cách xem đi xem lại các bộ phim Mỹ.",
            "Anh là một nhà sưu tập nghệ thuật nghiêm túc, thường xuyên chia sẻ các buổi tham quan triển lãm trên mạng xã hội.",
            "Anh được mệnh danh là 'vua phá hoại' trong nhóm vì thường xuyên làm hỏng hoặc mất điện thoại, tai nghe.",
            "Anh từng có điểm số đủ để vào ngành luật của trường đại học danh tiếng nhưng đã chọn gia nhập BigHit.",
            "Các album solo của anh đã chứng minh chiều sâu của một nghệ sĩ đầy cảm xúc."
          ],
          ru: [
            "Он самостоятельно выучил английский в средней школе, неоднократно пересматривая американские сериалы.",
            "Он серьезный коллекционер произведений искусства и регулярно публикует отчеты о посещении галерей.",
            "Он известен своей неуклюжестью: постоянно ломает или теряет телефоны и наушники.",
            "У него были оценки для поступления на юридический факультет, но он выбрал путь артиста в BigHit.",
            "Его сольные альбомы подтвердили его глубину как тонкого и эмоционального артиста."
          ]
        },
        socials: { instagram: "https://www.instagram.com/rkive/" }
      },
      {
        id: "jin",
        name: { ko: "진", en: "Jin", ja: "ジン", zh: "Jin", es: "Jin", id: "Jin", fr: "Jin", hi: "जिन (Jin)", pt: "Jin", ar: "جين (Jin)", th: "จิน", vi: "Jin", ru: "Джин" },
        role: {
          ko: "보컬",
          en: "Vocalist",
          ja: "ボーカル",
          zh: "主唱",
          es: "Vocalista",
          id: "Vokalis",
          fr: "Vocaliste",
          hi: "गायक (Vocalist)",
          pt: "Vocalista",
          ar: "مغني (Vocalist)",
          th: "นักร้อง",
          vi: "Hát chính",
          ru: "Вокалист"
        },
        birth: "1992.12.04",
        mbti: "INTP",
        zodiac: {
          ko: "사수자리",
          en: "Sagittarius",
          ja: "いて座",
          zh: "射手座",
          es: "Sagitario",
          id: "Sagitarius",
          fr: "Sagittaire",
          hi: "धनु राशि (Sagittarius)",
          pt: "Sagitário",
          ar: "برج القوس",
          th: "ราศีธนู",
          vi: "Nhân Mã",
          ru: "Стрелец"
        },
        height: "179cm",
        bloodType: "O",
        description: {
          ko: "자타공인 '월드와이드 핸섬', 뛰어난 보컬과 넘치는 유머감각을 겸비했습니다.",
          en: "Self-proclaimed 'Worldwide Handsome', combining powerful vocals with an overflowing sense of humor.",
          ja: "自他共に認める「ワールドワイド・ハンサム」で、優れたボーカルと溢れるユーモアを兼ね備えています。",
          zh: "公认的'Worldwide Handsome'，兼具出色的唱功和溢出的幽默感。",
          es: "Autoproclamado 'Worldwide Handsome', combina una voz poderosa con un gran sentido del humor.",
          id: "Menjuluki dirinya sendiri 'Worldwide Handsome', menggabungkan vokal yang kuat dengan selera humor yang tinggi.",
          fr: "Auto-proclamé 'Worldwide Handsome', il allie une voix puissante à un sens de l'humour débordant.",
          hi: "स्व-घोषित 'वर्ल्डवाइड हैंडसम', जो शक्तिशाली गायन और हास्य की भावना का मेल है।",
          pt: "Autoproclamado 'Worldwide Handsome', combinando vocais poderosos com um grande senso de humor.",
          ar: "يُلقب نفسه بـ 'الوسيم العالمي'، ويجمع بين الصوت القوي وحس الفكاهة العالي.",
          th: "เจ้าของฉายา 'Worldwide Handsome' ที่มาพร้อมเสียงร้องที่ทรงพลังและอารมณ์ขันที่ล้นเหลือ",
          vi: "Người tự xưng là 'Worldwide Handsome', sở hữu giọng hát tuyệt vời và khiếu hài hước dồi dào.",
          ru: "Самопровозглашенный «Всемирный красавчик», сочетающий мощный вокал и отличное чувство юмора."
        },
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
          ],
          ja: [
            "「ワールドワイド・ハンサム」という別名を自作し、世界中に広めたセルフプロモーションの達人です。",
            "BTSの中で最も料理が上手で、メンバーに手料理を振る舞うのが大好きな「チームの料理人」です。",
            "キッチンバサミで自分の前髪を切り、伝説的な失敗映像をファンに残したことがあります。",
            "BTSで最初に入隊し、2024年に除隊後、すぐにソロアルバムをリリースしました。",
            "除隊後も変わらぬ「おやじギャグ」でファンを楽しませてくれる、永遠のエンターテイナーです。"
          ],
          zh: [
            "自创了'Worldwide Handsome'这个绰号并自然地传遍了全世界，是自我营销的高手。",
            "是BTS成员中最擅长做饭的，喜欢亲手做饭给成员们吃，是'团队的大厨'。",
            "曾用厨房剪刀自己剪刘海并留下了传奇般的'黑历史'视频，该视频被粉丝永久珍藏。",
            "2022年12月作为首位成员入伍，2024年6月首位退伍并立即发行了个人专辑。",
            "退伍后依然凭借标志性的魔性笑声和冷笑话展现出始终如一的面貌。"
          ],
          es: [
            "Inventó el apodo 'Worldwide Handsome' para sí mismo y lo difundió por todo el mundo.",
            "Es el mejor cocinero de BTS y le encanta alimentar a sus miembros con comidas caseras.",
            "Una vez se cortó el flequillo con tijeras de cocina, creando un clip legendario que los fans guardan con cariño.",
            "Fue el primer miembro en alistarse y el primero en ser dado de baja, lanzando su álbum 'Happy' poco después.",
            "Después de su baja, su risa característica y sus chistes de papá demostraron que es un eterno animador."
          ],
          id: [
            "Dia menciptakan julukan 'Worldwide Handsome' untuk dirinya sendiri dan menyebarkannya ke seluruh dunia.",
            "Dia adalah koki terbaik di BTS dan senang memberi makan anggota lainnya dengan masakan buatannya.",
            "Dia pernah memotong poninya sendiri dengan gunting dapur, menciptakan video lucu yang disimpan penggemar selamanya.",
            "Dia adalah anggota BTS pertama yang mendaftar militer dan pertama yang selesai, langsung merilis album 'Happy'.",
            "Bahkan setelah selesai wajib militer, tawa khas dan lelucon bapak-bapaknya membuktikan bahwa dia adalah penghibur sejati."
          ],
          fr: [
            "Il a inventé le surnom 'Worldwide Handsome' pour lui-même et l'a diffusé sans effort auprès des fans du monde entier.",
            "C'est le meilleur cuisinier de BTS et il adore préparer des repas faits maison pour les autres membres.",
            "Il s'est un jour coupé la frange avec des ciseaux de cuisine, créant une vidéo légendaire que les fans conservent précieusement.",
            "Il a été le premier membre de BTS à s'enrôler et le premier à être libéré, sortant son album 'Happy' dans la foulée.",
            "Même après sa libération, son rire explosif et ses blagues de papa ont prouvé qu'il était un éternel artiste."
          ],
          hi: [
            "उन्होंने खुद के लिए 'Worldwide Handsome' उपनाम गढ़ा और इसे दुनिया भर में लोकप्रिय बना दिया।",
            "वे बीटीएस में सबसे अच्छे रसोइया हैं और अपने सदस्यों को घर का बना खाना खिलाना पसंद करते हैं।",
            "उन्होंने एक बार रसोई की कैंची से अपने बाल काटे थे, जिसका वीडियो प्रशंसकों के बीच बहुत लोकप्रिय है।",
            "वे सेना में भर्ती होने वाले और सेवा मुक्त होने वाले पहले बीटीएस सदस्य थे।",
            "सेवा के बाद भी, उनकी हंसी और चुटकुलों ने प्रशंसकों को साबित कर दिया कि वे एक महान मनोरंजनकर्ता हैं।"
          ],
          pt: [
            "Ele inventou o apelido 'Worldwide Handsome' para si mesmo e o espalhou para fãs em todo o mundo.",
            "Ele é o melhor cozinheiro do BTS e adora alimentar seus membros com refeições caseiras.",
            "Ele uma vez cortou sua própria franja com tesouras de cozinha, criando um clipe lendário que os fãs preservam.",
            "Ele foi o primeiro membro do BTS a se alistar e o primeiro a ser dispensado, lançando seu álbum 'Happy' logo depois.",
            "Mesmo após a dispensa, sua risada característica e piadas de tio provaram que ele é um eterno artista."
          ],
          ar: [
            "اخترع لقب 'الوسيم العالمي' لنفسه ونشره بنجاح بين المعجبين في جميع أنحاء العالم.",
            "هو أفضل طباخ في BTS ويحب إطعام أعضاء فرقته وجبات مطبوخة في المنزل.",
            "قام ذات مرة بقص غرته بمقص المطبخ، مما خلق مقطعاً مضحكاً خلده المعجبون.",
            "كان أول عضو في BTS يلتحق بالجيش وأول من ينهي خدمته، حيث أصدر ألبومه 'Happy' فوراً.",
            "حتى بعد إنهاء خدمته، أثبتت ضحكته المميزة ونكاته أنه فنان ترفيهي بالفطرة."
          ],
          th: [
            "เขาเป็นคนตั้งฉายา 'Worldwide Handsome' ให้ตัวเองและเผยแพร่ไปสู่แฟนๆ ทั่วโลกได้อย่างเป็นธรรมชาติ",
            "เขาเป็นคนที่ทำอาหารเก่งที่สุดในวงและชอบทำอาหารให้สมาชิกคนอื่นๆ ทานอยู่เสมอ",
            "เขาเคยตัดหน้าม้าตัวเองด้วยกรรไกรทำครัว จนกลายเป็นคลิปในตำนานที่แฟนๆ จดจำ",
            "เขาเป็นสมาชิกคนแรกที่เข้ากรมและคนแรกที่ออกจากกรม พร้อมปล่อยอัลบั้ม 'Happy' ทันที",
            "แม้จะออกจากกรมแล้ว แต่เสียงหัวเราะและมุกตลกที่เป็นเอกลักษณ์ของเขาก็ยังสร้างความสุขให้แฟนๆ เสมอ"
          ],
          vi: [
            "Anh đã tự đặt biệt danh 'Worldwide Handsome' cho mình và lan tỏa nó đến người hâm mộ trên toàn thế giới.",
            "Anh là người nấu ăn giỏi nhất BTS và thích nấu những món ăn ngon cho các thành viên trong nhóm.",
            "Anh từng tự cắt tóc mái bằng kéo làm bếp, tạo nên một khoảnh khắc huyền thoại mà người hâm mộ luôn ghi nhớ.",
            "Anh là thành viên BTS đầu tiên nhập ngũ và cũng là người đầu tiên xuất ngũ, ngay sau đó đã phát hành album 'Happy'.",
            "Sau khi xuất ngũ, tiếng cười đặc trưng và những trò đùa của anh vẫn chứng minh anh là một nghệ sĩ giải trí thực thụ."
          ],
          ru: [
            "Он сам придумал себе прозвище «Всемирный красавчик» и успешно популяризировал его среди фанатов.",
            "Он лучше всех в BTS готовит и любит угощать участников группы едой собственного приготовления.",
            "Однажды он сам подстриг себе челку кухонными ножницами, создав легендарное видео, которое фанаты хранят до сих пор.",
            "Он был первым участником BTS, ушедшим в армию, и первым, кто вернулся, сразу выпустив альбом «Happy».",
            "Даже после службы его фирменный смех и шутки доказывают фанатам, что Джин — прирожденный артист."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jin/" }
      },
      {
        id: "suga",
        name: { ko: "슈가", en: "Suga", ja: "シュガ", zh: "Suga", es: "Suga", id: "Suga", fr: "Suga", hi: "सुगा (Suga)", pt: "Suga", ar: "شوقا (Suga)", th: "ชูก้า", vi: "Suga", ru: "Шуга" },
        role: {
          ko: "리드래퍼/프로듀서",
          en: "Lead Rapper/Producer",
          ja: "リードラッパー/プロデューサー",
          zh: "领Rapper/制作人",
          es: "Rapero Líder/Productor",
          id: "Lead Rapper/Produser",
          fr: "Rappeur Lead/Producteur",
          hi: "लीडर रैपर/निर्माता",
          pt: "Rapper Líder/Produtor",
          ar: "رابر قائد/منتج",
          th: "แร็ปเปอร์นำ/โปรดิวเซอร์",
          vi: "Rapper dẫn/Nhà sản xuất",
          ru: "Ведущий рэпер/Продюсер"
        },
        birth: "1993.03.09",
        mbti: "ISTP",
        zodiac: {
          ko: "물고기자리",
          en: "Pisces",
          ja: "うお座",
          zh: "双鱼座",
          es: "Piscis",
          id: "Pisces",
          fr: "Poissons",
          hi: "मीन राशि (Pisces)",
          pt: "Peixes",
          ar: "برج الحوت",
          th: "ราศีมีน",
          vi: "Song Ngư",
          ru: "Рыбы"
        },
        height: "174cm",
        bloodType: "O",
        description: {
          ko: "천재적인 프로듀싱 능력과 날카로운 가사로 음악 세계를 구축하는 아티스트입니다.",
          en: "An artist building a musical world with genius producing skills and sharp lyrics.",
          ja: "天才的なプロデュース能力と鋭い歌詞で、音楽の世界を構築するアーティストです。",
          zh: "凭借天才般的制作能力和锋利的歌词构建音乐世界的艺术家。",
          es: "Es un artista que construye su mundo musical con geniales habilidades de producción y letras afiladas.",
          id: "Seorang artis yang membangun dunia musik dengan keterampilan produksi yang jenius dan lirik yang tajam.",
          fr: "Un artiste qui construit un univers musical avec des compétences de production géniales et des paroles tranchantes.",
          hi: "प्रतिभाशाली निर्माण कौशल और तीखे गीतों के साथ एक संगीत की दुनिया बनाने वाले कलाकार।",
          pt: "Um artista que constrói um mundo musical com habilidades de produção geniais e letras afiadas.",
          ar: "فنان يبني عالماً موسيقياً بمهارات إنتاج عبقرية وكلمات حادة.",
          th: "ศิลปินผู้สร้างสรรค์โลกดนตรีด้วยความสามารถในการโปรดิวซ์ที่อัจฉริยะและเนื้อเพลงที่เฉียบคม",
          vi: "Một nghệ sĩ xây dựng thế giới âm nhạc với khả năng sản xuất thiên tài và ca từ sắc sảo.",
          ru: "Артист, строящий музыкальный мир с помощью гениальных навыков продюсирования и острых текстов."
        },
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
          ],
          ja: [
            "BigHitに入る前は、大邱で作曲のアルバイトをしながら音楽の夢を追い続けていました。",
            "どこでもすぐに眠れることで有名で、イベント中に居眠りする姿がキャッチされることもあります。",
            "「Agust D」名義のミックステープを無料で配布し、ファンを感動させました。",
            "肩の手術のため、社会服務要員として兵役を履行し、2024年に除隊しました。",
            "IUなど様々なアーティストに楽曲提供を行う、隠れたヒットメーカーとしても有名です。"
          ],
          zh: [
            "在加入BigHit之前，他在大邱通过作曲兼职维持生计，从未放弃音乐梦想。",
            "以在任何地方都能睡着的'觉主'形象著称，粉丝经常在公开活动中抓拍到他打瞌睡的样子。",
            "以'Agust D'的名字发布的个人混音带全部免费分发，令粉丝们大受感动。",
            "因肩膀手术，于2023年作为社会服务要员履行兵役，并于2024年6月正式退伍。",
            "除了BTS的歌曲外，还为IU等多位艺人写歌，是公认的'金牌制作人'。"
          ],
          es: [
            "Antes de BigHit, se mantuvo trabajando a tiempo parcial como compositor en Daegu.",
            "Es famoso por poder dormir en cualquier lugar, y los fans suelen verlo durmiendo en eventos.",
            "Lanzó sus tres mixtapes como 'Agust D' de forma gratuita, conmoviendo a sus fans.",
            "Completó su servicio militar como trabajador social en 2023-2024 tras una cirugía de hombro.",
            "Además de las pistas de BTS, es un productor respetado que ha escrito canciones para artistas como IU."
          ],
          id: [
            "Sebelum BigHit, dia menghidupi dirinya sendiri melalui pekerjaan paruh waktu sebagai komposer di Daegu.",
            "Dia terkenal karena bisa tertidur di mana saja, dan penggemar sering memergokinya tidur di acara publik.",
            "Dia merilis ketiga mixtape solonya sebagai 'Agust D' secara gratis, sangat menyentuh hati penggemar.",
            "Dia menyelesaikan wajib militer sebagai pekerja layanan sosial pada 2023-2024 setelah operasi bahu.",
            "Selain lagu-lagu BTS, dia adalah produser rahasia yang telah menulis lagu untuk artis seperti IU."
          ],
          fr: [
            "Avant BigHit, il subvenait à ses besoins grâce à des jobs de composition à temps partiel à Daegu.",
            "Il est connu pour s'endormir n'importe où, et les fans le surprennent régulièrement en train de faire la sieste.",
            "Il a sorti ses trois mixtapes solo 'Agust D' gratuitement, un geste qui a beaucoup touché les fans.",
            "Il a effectué son service militaire en tant qu'agent de service social en 2023-2024 après une opération de l'épaule.",
            "Au-delà des titres de BTS, c'est un producteur respecté qui a écrit pour des artistes comme IU."
          ],
          hi: [
            "बीटीएस से पहले, उन्होंने डेगू में अंशकालिक रचना नौकरियों के माध्यम से खुद का समर्थन किया।",
            "वे कहीं भी सोने में सक्षम होने के लिए प्रसिद्ध हैं, और प्रशंसक उन्हें कार्यक्रमों में सोते हुए पकड़ते हैं।",
            "उन्होंने अपनी सभी 'Agust D' सोलो मिक्सटेप मुफ्त में जारी कीं, जिससे प्रशंसक बहुत प्रभावित हुए।",
            "उन्होंने कंधे की सर्जरी के बाद 2023-2024 में एक सामाजिक सेवा कार्यकर्ता के रूप में सैन्य सेवा पूरी की।",
            "बीटीएस गानों के अलावा, उन्होंने आईयू (IU) जैसे कलाकारों के लिए भी गाने लिखे हैं।"
          ],
          pt: [
            "Antes da BigHit, ele se sustentava com trabalhos de composição em Daegu, nunca desistindo de seu sonho.",
            "Ele é famoso por dormir em qualquer lugar, e os fãs costumam pegá-lo cochilando em eventos.",
            "Ele lançou todas as suas mixtapes solo como 'Agust D' gratuitamente, emocionando os fãs.",
            "Ele completou o serviço militar alternativo em 2023-2024 após uma cirurgia no ombro.",
            "Além das faixas do BTS, ele é um produtor respeitado que escreveu músicas para artistas como IU."
          ],
          ar: [
            "قبل الانضمام إلى BigHit، كان يعول نفسه من خلال وظائف تلحين بدوام جزئي في دايغو.",
            "يُعرف بقدرته على النوم في أي مكان، وغالباً ما يلتقطه المعجبون وهو يأخذ غفوة في المناسبات العامة.",
            "أصدر جميع شرائط أغانيه المنفردة 'Agust D' مجاناً، وهي لفتة أثرت في المعجبين بشدة.",
            "أكمل خدمته العسكرية البديلة كعامل خدمة اجتماعية في 2023-2024 بعد خضوعه لعملية جراحية في الكتف.",
            "بعيداً عن أغاني BTS، هو منتج محترم كتب أغاني لفنانين مثل آيو (IU)."
          ],
          th: [
            "ก่อนจะมาอยู่กับ BigHit เขาเคยทำงานพาร์ทไทม์ด้านการแต่งเพลงที่แดกูเพื่อเลี้ยงชีพและเดินตามฝัน",
            "เขาขึ้นชื่อเรื่องการหลับได้ทุกที่ และแฟนๆ มักจะเห็นเขาแอบงีบในงานอีเวนต์ต่างๆ อยู่เสมอ",
            "เขาปล่อยมิกซ์เทปโซโล่ภายใต้ชื่อ 'Agust D' ทั้ง 3 ชุดให้ฟังฟรี ซึ่งสร้างความประทับใจให้แฟนๆ อย่างมาก",
            "เขาเข้ารับการบริการสาธารณะแทนการเกณฑ์ทหารในปี 2023-2024 เนื่องจากต้องผ่าตัดไหล่",
            "นอกจากเพลงของ BTS แล้ว เขายังเป็นโปรดิวเซอร์ที่แต่งเพลงให้ศิลปินชื่อดังอย่าง IU อีกด้วย"
          ],
          vi: [
            "Trước khi gia nhập BigHit, anh đã tự trang trải cuộc sống bằng các công việc sáng tác bán thời gian ở Daegu.",
            "Anh nổi tiếng với khả năng ngủ ở bất cứ đâu, người hâm mộ thường bắt gặp anh đang ngủ gật tại các sự kiện.",
            "Anh đã phát hành cả 3 mixtape solo dưới tên 'Agust D' miễn phí, khiến người hâm mộ vô cùng xúc động.",
            "Anh đã hoàn thành nghĩa vụ quân sự với tư cách nhân viên phục vụ cộng đồng vào năm 2023-2024 sau ca phẫu thuật vai.",
            "Ngoài các bài hát của BTS, anh còn là một nhà sản xuất tài năng từng viết nhạc cho nhiều nghệ sĩ như IU."
          ],
          ru: [
            "До BigHit он подрабатывал композитором в Тэгу, никогда не отказываясь от своей музыкальной мечты.",
            "Он известен своей способностью засыпать где угодно, и фанаты часто ловят его дремлющим на мероприятиях.",
            "Он выпустил все три своих сольных микстейпа под именем Agust D бесплатно, чем очень тронул фанатов.",
            "Он прошел альтернативную службу в качестве социального работника в 2023–2024 годах после операции на плече.",
            "Помимо треков BTS, он уважаемый продюсер, писавший песни для таких артистов, как IU."
          ]
        },
        socials: { instagram: "https://www.instagram.com/agustd/" }
      },
      {
        id: "j-hope",
        name: { ko: "제이홉", en: "J-Hope", ja: "J-HOPE", zh: "J-Hope", es: "J-Hope", id: "J-Hope", fr: "J-Hope", hi: "जे-होप (J-Hope)", pt: "J-Hope", ar: "جيهوب (J-Hope)", th: "เจโฮป", vi: "J-Hope", ru: "Джей-Хоуп" },
        role: {
          ko: "메인댄서/래퍼",
          en: "Main Dancer/Rapper",
          ja: "メインダンサー/ラッパー",
          zh: "主舞/Rapper",
          es: "Bailarín Principal/Rapero",
          id: "Main Dancer/Rapper",
          fr: "Danseur Principal/Rappeur",
          hi: "मुख्य डांसर/रैपर",
          pt: "Dançarino Principal/Rapper",
          ar: "راقص رئيسي/رابر",
          th: "เมนแดนซ์/แร็ปเปอร์",
          vi: "Nhảy chính/Rapper",
          ru: "Главный танцор/Рэпер"
        },
        birth: "1994.02.18",
        mbti: "INFJ",
        zodiac: {
          ko: "물병자리",
          en: "Aquarius",
          ja: "みず가め座",
          zh: "水瓶座",
          es: "Acuario",
          id: "Aquarius",
          fr: "Verseau",
          hi: "कुंभ राशि (Aquarius)",
          pt: "Aquário",
          ar: "برج الدلو",
          th: "ราศีกุมภ์",
          vi: "Bảo Bình",
          ru: "Водолей"
        },
        height: "177cm",
        bloodType: "A",
        description: {
          ko: "팀의 안무 기둥이자 항상 밝은 에너지를 내뿜는 'BTS의 희망'입니다.",
          en: "The choreography pillar and 'Hope' of BTS, always radiating bright energy.",
          ja: "チームのダンスの柱であり、常に明るいエネルギーを放つ「BTSの希望」です。",
          zh: "团队的舞蹈支柱，也是始终散发着明亮能量的'BTS的希望'。",
          es: "Es el pilar de la coreografía y la 'esperanza' de BTS, siempre irradiando energía brillante.",
          id: "Pilar koreografi dan 'Harapan' BTS, selalu memancarkan energi yang cerah.",
          fr: "Le pilier de la chorégraphie et l'espoir de BTS, rayonnant toujours d'une énergie lumineuse.",
          hi: "कोरियोग्राफी के स्तंभ और बीटीएस की 'आशा', जो हमेशा उज्ज्वल ऊर्जा बिखेरते हैं।",
          pt: "O pilar da coreografia e a 'Esperança' do BTS, sempre irradiando energia brilhante.",
          ar: "ركيزة الرقص و 'أمل' فرقة BTS، الذي يشع دائماً بالطاقة المشرقة.",
          th: "เสาหลักด้านการเต้นของวงและเป็น 'ความหวัง' ของ BTS ที่คอยมอบพลังบวกให้ทุกคนเสมอ",
          vi: "Trụ cột vũ đạo của nhóm và là 'Hy vọng của BTS', luôn tỏa ra năng lượng tươi sáng.",
          ru: "Столп хореографии и «Надежда» BTS, всегда излучающий яркую энергию."
        },
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
          ],
          ja: [
            "光州出身で、幼い頃からストリートダンサーとして活動していた「ダンスの英雄」です。",
            "常に明るくポジティブで、メンバーやスタッフから「グループの太陽」と呼ばれています。",
            "BTSで最初にソロアルバム「Jack In The Box」をリリースしました。",
            "2024年にBTSメンバーの中で最も早く除隊し、活動を再開しました。",
            "ロラパルーザでヘッドライナーを務め、K-POPソロアーティスト初の快挙を成し遂げました。"
          ],
          zh: [
            "出身光州，从小作为街头舞者活动，后被BigHit发掘，是真正的'街舞英雄'。",
            "始终散发着阳光积极的能量，被成员和工作人员称为'团队的太阳'。",
            "在BTS成员中率先发行了个专《Jack In The Box》，展现了嘻哈艺术家的面貌。",
            "2023年入伍，2024年2月作为首位退伍成员回归，开启了'J-Hope时代'。",
            "作为Lollapalooza音乐节的压轴嘉宾登场，是首位登上世界级音乐节主舞台的K-pop个人歌手。"
          ],
          es: [
            "De Gwangju, era bailarín callejero antes de ser reclutado por BigHit.",
            "Su energía positiva hace que sea considerado el 'Sol' de BTS tanto por los miembros como por el personal.",
            "Fue el primer miembro en lanzar un álbum en solitario, 'Jack In The Box'.",
            "Se alistó en 2023 y fue el primero en ser dado de baja en 2024.",
            "Encabezó Lollapalooza en Chicago, siendo el primer solista de K-pop en hacerlo."
          ],
          id: [
            "Berasal dari Gwangju, dia adalah penari jalanan sebelum direkrut oleh BigHit.",
            "Energi positifnya membuatnya dianggap sebagai 'Matahari' BTS oleh anggota dan staf.",
            "Dia adalah anggota BTS pertama yang merilis album solo, 'Jack In The Box'.",
            "Dia mendaftar militer pada 2023 dan menjadi yang pertama selesai pada Februari 2024.",
            "Dia menjadi penampil utama di Lollapalooza Chicago, solois K-pop pertama yang melakukannya."
          ],
          fr: [
            "Originaire de Gwangju, il était danseur de rue avant d'être repéré par BigHit.",
            "Son énergie positive constante le fait considérer comme le 'Soleil' de BTS par les membres et le staff.",
            "Il a été le premier membre à sortir un album solo, 'Jack In The Box'.",
            "Il s'est enrôlé en 2023 et a été le premier libéré en février 2024.",
            "Il a été tête d'affiche à Lollapalooza Chicago, une première pour un soliste K-pop."
          ],
          hi: [
            "ग्वांगजू से, वे बीटीएस द्वारा खोजे जाने से पहले एक स्ट्रीट डांसर थे।",
            "उनकी सकारात्मक ऊर्जा उन्हें सदस्यों और कर्मचारियों दोनों द्वारा बीटीएस का 'सूर्य' मानने पर मजबूर करती है।",
            "वे सोलो एल्बम 'Jack In The Box' रिलीज़ करने वाले पहले बीटीएस सदस्य थे।",
            "वे 2023 में भर्ती हुए और फरवरी 2024 में सबसे पहले सेवा मुक्त हुए।",
            "वे शिकागो लोलापालूजा के हेडलाइनर थे, जो ऐसा करने वाले पहले के-पॉप सोलो कलाकार बने।"
          ],
          pt: [
            "De Gwangju, ele era um dançarino de rua antes de ser recrutado pela BigHit.",
            "Sua energia positiva faz com que ele seja considerado o 'Sol' do BTS por membros e staff.",
            "Ele foi o primeiro membro do BTS a lançar um álbum solo, 'Jack In The Box'.",
            "Ele se alistou em 2023 e foi o primeiro a ser dispensado em fevereiro de 2024.",
            "Ele foi o destaque do Lollapalooza em Chicago, o primeiro solista de K-pop a fazê-lo."
          ],
          ar: [
            "من جوانغجو، كان راقصاً في الشوارع قبل أن تكتشفه BigHit.",
            "طاقته الإيجابية تجعله يعتبر 'شمس' فرقة BTS من قبل الأعضاء والموظفين على حد سواء.",
            "كان أول عضو في BTS يصدر ألبوماً منفرداً وهو 'Jack In The Box'.",
            "التحق بالجيش في 2023 وكان أول من ينهي خدمته في فبراير 2024.",
            "تصدر مهرجان لولابلوزا في شيكاغو، ليصبح أول فنان كي-بوب منفرد يقوم بذلك."
          ],
          th: [
            "เขามาจากกวางจูและเคยเป็นนักเต้นสตรีทบัสกิ้งมาก่อนที่จะเข้าสังกัด BigHit",
            "พลังบวกที่ล้นเหลือทำให้เขาได้รับการขนานนามว่าเป็น 'ดวงอาทิตย์' ของวงจากทั้งสมาชิกและทีมงาน",
            "เขาเป็นสมาชิกคนแรกที่ปล่อยอัลบั้มโซโล่ 'Jack In The Box' แสดงศักยภาพในฐานะศิลปินฮิปฮอป",
            "เขาเข้ากรมในปี 2023 และเป็นสมาชิกคนแรกที่ออกจากกรมในเดือนกุมภาพันธ์ 2024",
            "เขาเป็นศิลปินเดี่ยว K-pop คนแรกที่ได้เป็นเฮดไลเนอร์ในเทศกาลดนตรีระดับโลก Lollapalooza"
          ],
          vi: [
            "Đến từ Gwangju, anh từng là vũ công đường phố trước khi được BigHit tuyển chọn.",
            "Năng lượng tích cực luôn tràn đầy khiến anh được coi là 'Mặt trời' của BTS đối với các thành viên và nhân viên.",
            "Anh là thành viên BTS đầu tiên phát hành album solo 'Jack In The Box'.",
            "Anh nhập ngũ năm 2023 và là người đầu tiên xuất ngũ vào tháng 2 năm 2024.",
            "Anh đã biểu diễn chính tại Lollapalooza Chicago, trở thành nghệ sĩ solo K-pop đầu tiên làm được điều này."
          ],
          ru: [
            "Родом из Кванджу, он был уличным танцором до того, как его заметили в BigHit.",
            "Его неиссякаемая позитивная энергия заставляет участников и персонал считать его «Солнцем» BTS.",
            "Он первым из участников BTS выпустил сольный альбом Jack In The Box.",
            "Он ушел в армию в 2023 году и первым вернулся в феврале 2024 года.",
            "Он стал хедлайнером фестиваля Lollapalooza в Чикаго, первым среди K-pop соло-исполнителей."
          ]
        },
        socials: { instagram: "https://www.instagram.com/uarmyhope/" }
      },
      {
        id: "jimin",
        name: { ko: "지민", en: "Jimin", ja: "ジミン", zh: "Jimin", es: "Jimin", id: "Jimin", fr: "Jimin", hi: "जिमिन (Jimin)", pt: "Jimin", ar: "جيمين (Jimin)", th: "จีมิน", vi: "Jimin", ru: "Чимин" },
        role: {
          ko: "메인댄서/리드보컬",
          en: "Main Dancer/Lead Vocalist",
          ja: "メインダンサー/リードボーカル",
          zh: "主舞/领唱",
          es: "Bailarín Principal/Vocalista Líder",
          id: "Main Dancer/Lead Vocalist",
          fr: "Danseur Principal/Vocaliste Lead",
          hi: "मुख्य डांसर/लीड गायक",
          pt: "Dançarino Principal/Vocalista Líder",
          ar: "راقص رئيسي/مغني قائد",
          th: "เมนแดนซ์/นักร้องนำ",
          vi: "Nhảy chính/Hát dẫn",
          ru: "Главный танцор/Ведущий вокалист"
        },
        birth: "1995.10.13",
        mbti: "ESTP",
        zodiac: {
          ko: "천칭자리",
          en: "Libra",
          ja: "てんびん座",
          zh: "天秤座",
          es: "Libra",
          id: "Libra",
          fr: "Balance",
          hi: "तुला राशि (Libra)",
          pt: "Libra",
          ar: "برج الميزان",
          th: "ราศีตุลย์",
          vi: "Thiên Bình",
          ru: "Весы"
        },
        height: "174cm",
        bloodType: "A",
        description: {
          ko: "매혹적인 음색과 예술적인 퍼포먼스로 무대 위를 지배하는 아티스트입니다.",
          en: "An artist who commands the stage with an enchanting vocal tone and artistic performance.",
          ja: "魅惑的な歌声と芸術的なパフォーマンスでステージを支配するアーティストです。",
          zh: "以魅惑的音色和艺术性的表演掌控舞台的艺术家。",
          es: "Es un artista que domina el escenario con un tono vocal encantador y una actuación artística.",
          id: "Seorang artis yang menguasai panggung dengan nada vokal yang memikat dan penampilan artistik.",
          fr: "Un artiste qui domine la scène avec un timbre vocal envoûtant et une performance artistique.",
          hi: "एक कलाकार जो अपनी आकर्षक आवाज़ और कलात्मक प्रदर्शन के साथ मंच पर राज करते हैं।",
          pt: "Um artista que domina o palco com um tom vocal encantador e uma performance artística.",
          ar: "فنان يسيطر على المسرح بنبرة صوت ساحرة وأداء فني مميز.",
          th: "ศิลปินผู้ครองเวทีด้วยน้ำเสียงที่สะกดใจและการแสดงที่เต็มไปด้วยศิลปะ",
          vi: "Nghệ sĩ thống trị sân khấu với âm sắc quyến rũ và những màn trình diễn đầy tính nghệ thuật.",
          ru: "Артист, который господствует на сцене благодаря чарующему вокалу и артистичному исполнению."
        },
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
          ],
          ja: [
            "釜山出身で、現代舞踊を専攻していた舞踊の専門家であり、その柔軟性がBTSのダンスに生かされています。",
            "練習が足りないと感じると明け方まで練習を続ける、極度の完璧主義者として有名です。",
            "ソロシングルでビルボードHot 100で長期1位を記録し、K-POPソロの歴史を塗り替えました。",
            "感情が豊かで、ステージ後に感動して涙を流す姿がよく見られます。",
            "ソロアルバム「MUSE」でビルボード200の頂点に立ち、実力を証明しました。"
          ],
          zh: [
            "出身釜山，在艺术高中专攻现代舞，这种背景使其在BTS的编舞中展现出卓越的柔韧性。",
            "是极端的完美主义者，如果觉得练习不足，会独自练习到凌晨4、5点。",
            "凭借个人单曲在公告牌百强单曲榜创下长达10周的冠军纪录，改写了K-pop个人歌手历史。",
            "由于经常在舞台后因感动落泪或对粉丝表达感谢而流泪，粉丝间流传着'智旻哭我也哭'的说法。",
            "个人专辑《MUSE》登上公告牌二百强专辑榜榜首，向世界证明了作为个人艺术家的实力。"
          ],
          es: [
            "Bailarín contemporáneo formado en Busan, su formación le da una fluidez inigualable en BTS.",
            "Es conocido como un perfeccionista extremo que se queda solo hasta las 4-5 a.m. practicando.",
            "Su sencillo en solitario hizo historia en el Billboard Hot 100 con récords de streaming.",
            "Llora con gratitud por los fans tan a menudo que ellos dicen 'cuando Jimin llora, yo lloro'.",
            "Su álbum 'MUSE' encabezó el Billboard 200, demostrando su poder como solista."
          ],
          id: [
            "Penari kontemporer terlatih dari Busan, latar belakangnya memberikan kelenturan yang tak tertandingi di BTS.",
            "Dia dikenal sebagai perfeksionis ekstrem yang tetap tinggal sampai jam 4-5 pagi jika merasa latihannya kurang.",
            "Single solonya mencetak sejarah di Billboard Hot 100, menulis ulang rekor solo K-pop.",
            "Dia sering menangis karena bersyukur kepada penggemar sehingga muncul istilah 'saat Jimin menangis, aku menangis'.",
            "Album solonya 'MUSE' memuncaki Billboard 200, membuktikan kekuatannya sebagai artis solo."
          ],
          fr: [
            "Danseur contemporain formé à Busan, son passé de danseur lui donne une fluidité inégalée dans les performances de BTS.",
            "Il est connu pour être un perfectionniste extrême qui reste seul jusqu'à 4-5h du matin s'il juge sa pratique insuffisante.",
            "Son single solo a marqué l'histoire du Billboard Hot 100, réécrivant l'histoire des solistes K-pop.",
            "Il pleure si souvent de gratitude pour les fans que ceux-ci disent : 'quand Jimin pleure, je pleure'.",
            "Son album solo 'MUSE' a dominé le Billboard 200, prouvant sa puissance en tant qu'artiste solo."
          ],
          hi: [
            "बुसान से एक प्रशिक्षित समकालीन डांसर, उनकी पृष्ठभूमि उन्हें बीटीएस प्रदर्शनों में एक बेजोड़ तरलता प्रदान करती है।",
            "वे एक चरम पूर्णतावादी के रूप में जाने जाते हैं जो पर्याप्त अभ्यास न होने पर सुबह 4-5 बजे तक अकेले रुकते हैं।",
            "उनके सोलो सिंगल ने बिलबोर्ड हॉट 100 में इतिहास रचते हुए के-पॉप सोलो रिकॉर्ड्स को फिर से लिखा।",
            "वे अक्सर प्रशंसकों के लिए कृतज्ञता में रोते हैं, जिससे प्रशंसकों के बीच एक कहावत बन गई है।",
            "उनके सोलो एल्बम 'MUSE' ने बिलबोर्ड 200 में शीर्ष स्थान हासिल किया।"
          ],
          pt: [
            "Dançarino contemporâneo treinado em Busan, sua base de dança lhe dá uma fluidez inigualável no BTS.",
            "Ele é conhecido como um perfeccionista extremo que fica sozinho até às 4-5 da manhã praticando.",
            "Seu single solo fez história na Billboard Hot 100, reescrevendo a história dos solistas de K-pop.",
            "Ele chora com gratidão pelos fãs com tanta frequência que eles dizem 'quando o Jimin chora, eu choro'.",
            "Seu álbum solo 'MUSE' liderou a Billboard 200, provando seu poder como artista solo."
          ],
          ar: [
            "راقص معاصر مدرب من بوسان، تمنحه خلفيته في الرقص مرونة لا مثيل لها في عروض BTS.",
            "يُعرف بأنه مثالي للغاية لدرجة أنه يبقى وحيداً حتى الساعة 4-5 صباحاً للتدريب.",
            "حققت أغنيته المنفردة أرقاماً قياسية في بيلبورد هوت 100، مما أعاد كتابة تاريخ الكي-بوب للمغنيين المنفردين.",
            "يبكي من الامتنان للمعجبين كثيراً لدرجة أن المعجبين يقولون 'عندما يبكي جيمين، أبكي أنا أيضاً'.",
            "تصدر ألبومه المنفرد 'MUSE' قائمة بيلبورد 200، مما أثبت قوته كفنان منفرد."
          ],
          th: [
            "เขาเป็นนักเต้นร่วมสมัยจากปูซาน พื้นฐานการเต้นของเขาทำให้เขามีความพริ้วไหวที่หาตัวจับยากในการแสดงของ BTS",
            "เขาเป็นคนรักความสมบูรณ์แบบมาก และมักจะอยู่ซ้อมต่อจนถึงตี 4-5 ถ้าเขารู้สึกว่ายังทำได้ไม่ดีพอ",
            "ซิงเกิลโซโล่ของเขาทำสถิติใน Billboard Hot 100 อย่างต่อเนื่อง เขียนประวัติศาสตร์ใหม่ให้ศิลปินเดี่ยว K-pop",
            "เขามักจะหลั่งน้ำตาด้วยความซาบซึ้งใจต่อแฟนๆ จนแฟนๆ มีคำพูดติดปากว่า 'ถ้าจีมินร้องไห้ ฉันก็ร้องไห้ด้วย'",
            "อัลบั้มโซโล่ 'MUSE' ของเขาขึ้นอันดับ 1 ใน Billboard 200 พิสูจน์ความแข็งแกร่งในฐานะศิลปินเดี่ยวระดับโลก"
          ],
          vi: [
            "Là một vũ công đương đại được đào tạo tại Busan, nền tảng vũ đạo giúp anh có sự uyển chuyển vô song trong các màn trình diễn của BTS.",
            "Anh nổi tiếng là người cầu toàn cực độ, thường ở lại tập luyện một mình đến 4-5 giờ sáng nếu cảm thấy chưa hài lòng.",
            "Single solo của anh đã lập kỷ lục trên Billboard Hot 100, viết lại lịch sử cho các nghệ sĩ solo K-pop.",
            "Anh thường rơi lệ vì xúc động và biết ơn người hâm mộ, khiến fan có câu nói: 'Khi Jimin khóc, tôi cũng khóc'.",
            "Album solo 'MUSE' của anh đã đứng đầu Billboard 200, chứng minh thực lực của một nghệ sĩ solo thực thụ."
          ],
          ru: [
            "Обученный современным танцам в Пусане, он обладает непревзойденной пластикой в выступлениях BTS.",
            "Он известен как крайний перфекционист, который может оставаться в зале до 4–5 утра, если недоволен тренировкой.",
            "Его сольный сингл переписал историю K-pop соло-исполнителей в чарте Billboard Hot 100.",
            "Он так часто плачет от благодарности фанатам, что они говорят: «Когда Чимин плачет, я тоже плачу».",
            "Его сольный альбом MUSE возглавил Billboard 200, доказав его силу как мирового артиста."
          ]
        },
        socials: { instagram: "https://www.instagram.com/j.m/" }
      },
      {
        id: "v",
        name: { ko: "뷔", en: "V", ja: "V", zh: "V", es: "V", id: "V", fr: "V", hi: "वी (V)", pt: "V", ar: "في (V)", th: "วี", vi: "V", ru: "Ви" },
        role: {
          ko: "보컬/리드댄서",
          en: "Vocalist/Lead Dancer",
          ja: "ボーカル/リードダンサー",
          zh: "主唱/领舞",
          es: "Vocalista/Bailarín Líder",
          id: "Vokalis/Lead Dancer",
          fr: "Vocaliste/Danseur Lead",
          hi: "गायक/लीड डांसर",
          pt: "Vocalista/Dançarino Líder",
          ar: "مغني/راقص قائد",
          th: "นักร้อง/นักเต้นนำ",
          vi: "Hát chính/Nhảy dẫn",
          ru: "Вокалист/Ведущий танцор"
        },
        birth: "1995.12.30",
        mbti: "INFP",
        zodiac: {
          ko: "염소자리",
          en: "Capricorn",
          ja: "やぎ座",
          zh: "摩羯座",
          es: "Capricornio",
          id: "Capricorn",
          fr: "Capricorne",
          hi: "मकर राशि (Capricorn)",
          pt: "Capricórnio",
          ar: "برج الجدي",
          th: "ราศีมังกร",
          vi: "Ma Kết",
          ru: "Козерог"
        },
        height: "179cm",
        bloodType: "AB",
        description: {
          ko: "깊은 저음의 소울풀한 목소리와 비현실적인 비주얼을 가진 글로벌 팝 아이콘입니다.",
          en: "A global pop icon with a deep, soulful voice and otherworldly visuals.",
          ja: "深い低音のソウルフルな歌声と非現実的なビジュアルを持つグローバルポップアイコンです。",
          zh: "拥有深沉低音和不真实视觉效果的全球流行偶像。",
          es: "Es un ícono del pop mundial con una voz profunda y conmovedora y visuales de otro mundo.",
          id: "Ikon pop global dengan suara yang dalam dan penuh perasaan serta visual yang menakjubkan.",
          fr: "Une icône de la pop mondiale dotée d'une voix grave et soul et de visuels hors du commun.",
          hi: "गहरी, भावपूर्ण आवाज़ और शानदार विजुअल्स वाले एक वैश्विक पॉप आइकन।",
          pt: "Um ícone pop global com uma voz profunda e alma, e visuais de outro mundo.",
          ar: "أيقونة بوب عالمية بصوت عميق ومؤثر ومظهر خارق للعادة.",
          th: "ไอคอนป๊อประดับโลกที่มีเสียงร้องทุ้มลึกและภาพลักษณ์ที่ดูราวกับไม่มีอยู่จริง",
          vi: "Biểu tượng nhạc pop toàn cầu với giọng hát trầm sâu lắng và ngoại hình đẹp như tạc.",
          ru: "Мировая поп-икона с глубоким проникновенным голосом и неземной внешностью."
        },
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
          ],
          ja: [
            "大邱出身で、幼い頃から美術と音楽に興味を持ち、独学でサックスを学んで演奏したこともあります。",
            "「世界で最もハンサムな顔」ランキングで長年トップを維持し、圧倒的なビジュアルを誇ります。",
            "メンバーのジミンとは大親友で、「クオズ」というコンビ名はファンの間で非常に人気があります。",
            "ソロアルバム「Layover」では作詞にも参加し、アーティストとしての真摯な姿を見せました。",
            "セリーヌのグローバルアンバサダーを務めるなど、ファッションアイコンとしても注目されています。"
          ],
          zh: [
            "本名金泰亨，出身大邱，从小对美术和音乐有浓厚兴趣，曾自学萨克斯并在演唱会上亲自演奏。",
            "多年来在世界'最帅男性'排行榜上始终稳居前列，保持着'全球视觉第一'的称号。",
            "与成员Jimin是至亲，'VMIN'组合在粉丝圈内拥有庞大的忠实粉丝群。",
            "在个人专辑《Layover》中积极参与作词，展现了感性且真挚的艺术家面貌。",
            "凭借出众的时尚感担任Celine全球大使，已成为超越K-pop偶像的时尚标杆。"
          ],
          es: [
            "Nacido como Kim Taehyung en Daegu, aprendió a tocar el saxofón por su cuenta desde niño.",
            "Se mantiene constantemente en lo más alto de las listas de los 'hombres más guapos del mundo'.",
            "Él y Jimin son mejores amigos, y su pareja 'VMIN' tiene su propia base de fans masiva.",
            "Su álbum 'Layover' incluyó contribuciones personales en las letras, revelándolo como un artista introspectivo.",
            "Sus instintos de moda le valieron ser embajador global de Celine, convirtiéndolo en un ícono de la moda."
          ],
          id: [
            "Lahir dengan nama Kim Taehyung di Daegu, dia belajar saksofon secara otodidak sejak kecil.",
            "Dia secara konsisten menduduki peringkat teratas dalam daftar 'pria paling tampan di dunia'.",
            "Dia dan Jimin adalah sahabat baik, dan pasangan 'VMIN' mereka memiliki basis penggemar yang besar.",
            "Album solonya 'Layover' menampilkan kontribusi lirik pribadi, mengungkapkannya sebagai artis yang introspektif.",
            "Insting fashion-nya yang unik membuatnya menjadi duta global Celine, menjadikannya ikon mode."
          ],
          fr: [
            "Né Kim Taehyung à Daegu, il a appris le saxophone seul dès son plus jeune âge.",
            "Il est classé au sommet des listes des 'plus beaux hommes du monde' depuis plusieurs années.",
            "Lui et Jimin sont meilleurs amis, et leur duo 'VMIN' possède une base de fans massive.",
            "Son album solo 'Layover' a révélé ses talents d'auteur, montrant un artiste introspectif.",
            "Son sens unique de la mode lui a valu d'être ambassadeur mondial pour Celine."
          ],
          hi: [
            "डेगू में जन्मे किम तेह्युंग ने कम उम्र में ही खुद सैक्सोफोन सीखा और मंच पर प्रदर्शन किया।",
            "वे दुनिया के 'सबसे सुंदर पुरुष' की सूचियों में लगातार शीर्ष पर रहते हैं।",
            "वे और जिमिन सबसे अच्छे दोस्त हैं, और उनकी जोड़ी 'VMIN' का अपना विशाल प्रशंसक आधार है।",
            "उनके सोलो एल्बम 'Layover' ने उन्हें एक गहरे विचारशील कलाकार के रूप में प्रकट किया है।",
            "वे सेलीन (Celine) के वैश्विक राजदूत हैं, जो उन्हें एक फैशन आइकन के रूप में स्थापित करता है।"
          ],
          pt: [
            "Nascido Kim Taehyung em Daegu, ele aprendeu saxofone sozinho desde cedo.",
            "Ele é consistentemente classificado no topo das listas de 'homens mais bonitos do mundo'.",
            "Ele e Jimin são melhores amigos, e sua dupla 'VMIN' tem sua própria base de fãs dedicada.",
            "Seu álbum solo 'Layover' contou com contribuições pessoais nas letras, revelando um artista introspectivo.",
            "Seu senso de moda único lhe rendeu a embaixada global da Celine, tornando-o um ícone fashion."
          ],
          ar: [
            "وُلد كيم تايهيونغ في دايغو، وعلم نفسه العزف على الساكسفون منذ سن مبكرة وعزفه على المسرح.",
            "يُصنف باستمرار في المراتب الأولى في قوائم 'أوسم رجال العالم'.",
            "هو وجيمين صديقان مقربان، وقد بنى ثنائي 'VMIN' قاعدة جماهيرية ضخمة خاصة بهما.",
            "تضمن ألبومه المنفرد 'Layover' مساهمات شخصية في الكلمات، مما كشف عن فنان عميق التفكير.",
            "أكسبته غريزته الفريدة في الموضة لقب سفير عالمي لعلامة سيلين (Celine)."
          ],
          th: [
            "ชื่อจริงคือ คิม แทฮยอง เกิดที่แดกู เขาสนใจศิลปะและดนตรีตั้งแต่เด็กและฝึกเล่นแซกโซโฟนด้วยตัวเอง",
            "เขาติดอันดับ 'ผู้ชายที่หล่อที่สุดในโลก' อย่างต่อเนื่องเป็นเวลาหลายปี ครองฉายาภาพลักษณ์ระดับโลก",
            "เขาและจีมินเป็นเพื่อนสนิทกันมาก โดยคู่หู 'VMIN' มีฐานแฟนคลับที่เหนียวแน่นและใหญ่มาก",
            "ในอัลบั้มโซโล่ 'Layover' เขาได้มีส่วนร่วมในการแต่งเนื้อเพลง แสดงตัวตนในฐานะศิลปินที่ลุ่มลึก",
            "ด้วยเซนส์ด้านแฟชั่นที่โดดเด่น เขาจึงได้รับเลือกให้เป็น Global Ambassador ของ Celine"
          ],
          vi: [
            "Tên thật là Kim Taehyung, sinh ra tại Daegu, anh tự học kèn saxophone từ nhỏ và từng biểu diễn trên sân khấu.",
            "Anh liên tục đứng đầu trong danh sách 'những người đàn ông đẹp trai nhất thế giới' trong nhiều năm.",
            "Anh và Jimin là bạn thân thiết, bộ đôi 'VMIN' có một lượng người hâm mộ vô cùng đông đảo.",
            "Trong album solo 'Layover', anh đã tích cực tham gia viết lời, thể hiện khía cạnh nghệ sĩ sâu sắc.",
            "Với gu thời trang độc đáo, anh là đại sứ toàn cầu của Celine, trở thành một biểu tượng thời trang thực thụ."
          ],
          ru: [
            "Урожденный Ким Тэхён из Тэгу, он с детства увлекался искусством и самостоятельно научился играть на саксофоне.",
            "Он на протяжении многих лет занимает первые места в списках самых красивых мужчин мира.",
            "Он и Чимин — лучшие друзья, и их дуэт VMIN имеет огромную армию преданных фанатов.",
            "В сольном альбоме Layover он выступил соавтором текстов, проявив себя как серьезный и вдумчивый артист.",
            "Благодаря уникальному чувству стиля он стал глобальным амбассадором Celine и иконой моды."
          ]
        },
        socials: { instagram: "https://www.instagram.com/thv/" }
      },
      {
        id: "jungkook",
        name: { ko: "정국", en: "Jungkook", ja: "ジョングク", zh: "柾国", es: "Jungkook", id: "Jungkook", fr: "Jungkook", hi: "जंकुक (Jungkook)", pt: "Jungkook", ar: "جونغكوك (Jungkook)", th: "จองกุก", vi: "Jungkook", ru: "Чонгук" },
        role: {
          ko: "메인보컬/리드댄서",
          en: "Main Vocalist/Lead Dancer",
          ja: "メインボーカル/リードダンサー",
          zh: "主唱/领舞",
          es: "Vocalista Principal/Bailarín Líder",
          id: "Main Vocalist/Lead Dancer",
          fr: "Vocaliste Principal/Danseur Lead",
          hi: "मुख्य गायक/लीड डांसर",
          pt: "Vocalista Principal/Dançarino Líder",
          ar: "مغني رئيسي/راقص قائد",
          th: "นักร้องหลัก/นักเต้นนำ",
          vi: "Hát chính/Nhảy dẫn",
          ru: "Главный вокалист/Ведущий танцор"
        },
        birth: "1997.09.01",
        mbti: "ISFP",
        zodiac: {
          ko: "처녀자리",
          en: "Virgo",
          ja: "おとめ座",
          zh: "处女座",
          es: "Virgo",
          id: "Virgo",
          fr: "Vierge",
          hi: "कन्या राशि (Virgo)",
          pt: "Virgem",
          ar: "برج العذراء",
          th: "ราศีกันย์",
          vi: "Xử Nữ",
          ru: "Дева"
        },
        height: "179cm",
        bloodType: "A",
        description: {
          ko: "노래·댄스·운동·그림 모두 잘하는 '황금 막내'이자 BTS의 얼굴입니다.",
          en: "The 'Golden Maknae' who excels at singing, dancing, athletics, and art — the face of BTS.",
          ja: "歌、ダンス、運動、絵画のすべてに長けた「黄金の末っ子」であり、BTSの顔です。",
          zh: "唱歌、舞蹈、运动、绘画样样精通的'黄金忙内'，也是BTS的门面。",
          es: "Es el 'Golden Maknae' que sobresale en el canto, el baile, el atletismo y el arte: el rostro de BTS.",
          id: "Si 'Golden Maknae' yang mahir dalam menyanyi, menari, atletik, dan seni — wajah BTS.",
          fr: "Le 'Golden Maknae' qui excelle en chant, en danse, en athlétisme et en art — le visage de BTS.",
          hi: "गायन, नृत्य, एथलेटिक्स और कला में उत्कृष्ट 'गोल्डन मकने' — बीटीएस का चेहरा।",
          pt: "O 'Golden Maknae' que se destaca no canto, dança, atletismo e arte — o rosto do BTS.",
          ar: "الماكني الذهبي الذي يتفوق في الغناء والرقص والرياضة والرسم - وجه فرقة BTS.",
          th: "เขาคือ 'มักเน่ทองคำ' ที่เก่งทั้งร้อง เต้น กีฬา และศิลปะ และเป็นหน้าตาของวง BTS",
          vi: "Em út vàng đa tài từ hát, nhảy, thể thao đến hội họa - gương mặt đại diện của BTS.",
          ru: "«Золотой макнэ», который преуспел в пении, танцах, спорте и рисовании — лицо BTS."
        },
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
          ],
          ja: [
            "複数の事務所からスカウトされましたが、RMを見てBigHitに入ることを決めました。",
            "歌やダンス、スポーツなど何でもすぐに習得してしまう「黄金の末っ子」です。",
            "ソロ曲「Seven」でビルボードHot 100で1位を獲得し、数々の記録を塗り替えました。",
            "タトゥーを通じて自身の芸術的アイデンティティを表現しており、ファンの間でも話題です。",
            "トレーニングに熱心で、非常に鍛え上げられたフィジカルの持ち主です。"
          ],
          zh: [
            "中学时期被JYP、BigHit等多家经纪公司同时看中，在看到RM后选择了BigHit。",
            "被称为'黄金忙内'，无论绘画、摄影、运动还是歌舞都能快速掌握，且非常有胜负欲。",
            "个人单曲《Seven》登上公告牌百强单曲榜冠军，刷新了K-pop个人歌手流媒体纪录。",
            "通过纹身表达自己的艺术身份，ARMY对'柾国纹身'的解析也成为了一种文化现象。",
            "坚持健身，被誉为'偶像界的肌肉男'，服完兵役后更加健壮的体格令粉丝惊叹。"
          ],
          es: [
            "Fue reclutado por varias agencias en la escuela secundaria, pero eligió BigHit tras ver a RM.",
            "Apodado el 'Golden Maknae', aprende dibujo, fotografía, deportes, canto y baile a una velocidad increíble.",
            "Su sencillo 'Seven' encabezó el Billboard Hot 100 y rompió récords de streaming.",
            "Expresa su identidad artística a través de tatuajes, convirtiéndose en un tema de análisis para ARMY.",
            "Su dedicación al ejercicio le valió el título de 'hombre músculo' del mundo idol."
          ],
          id: [
            "Dia direkrut oleh banyak agensi di SMP, tetapi memilih BigHit setelah melihat RM.",
            "Dijuluki 'Golden Maknae', dia mahir dalam menggambar, fotografi, atletik, menyanyi, dan menari dengan cepat.",
            "Single solonya 'Seven' memuncaki Billboard Hot 100 dan memecahkan rekor streaming solo K-pop.",
            "Dia mengekspresikan identitas artistiknya melalui tato di seluruh tubuhnya.",
            "Dedikasinya pada kebugaran membuatnya dijuluki 'pria berotot di dunia idola'."
          ],
          fr: [
            "Il a été repéré par plusieurs agences au collège, mais a choisi BigHit après avoir vu RM.",
            "Surnommé le 'Golden Maknae', il apprend le dessin, la photographie, le sport, le chant et la danse à une vitesse folle.",
            "Son single solo 'Seven' a dominé le Billboard Hot 100 et battu les records de streaming.",
            "Il exprime son identité artistique à travers ses tatouages, un sujet de fascination pour les ARMY.",
            "Son dévouement au fitness lui a valu le titre d'homme le plus musclé du monde des idoles."
          ],
          hi: [
            "उन्हें मिडिल स्कूल में कई एजेंसियों द्वारा खोजा गया था, लेकिन उन्होंने आरएम को देखने के बाद बिगहिट को चुना।",
            "उन्हें 'गोल्डन मकने' कहा जाता है क्योंकि वे चित्रकला, फोटोग्राफी, एथलेटिक्स और नृत्य को बहुत जल्दी सीख लेते हैं।",
            "उनके सोलो सिंगल 'Seven' ने बिलबोर्ड हॉट 100 में शीर्ष स्थान हासिल किया।",
            "वे टैटू के माध्यम से अपनी कलात्मक पहचान व्यक्त करते हैं, जो आर्मी के बीच एक चर्चा का विषय है।",
            "फिटनेस के प्रति उनके समर्पण ने उन्हें 'आइडल दुनिया का मसल मैन' खिताब दिलाया है।"
          ],
          pt: [
            "Ele foi recrutado por várias agências no ensino fundamental, mas escolheu a BigHit após ver o RM.",
            "Apelidado de 'Golden Maknae', ele aprende desenho, fotografia, atletismo e dança em uma velocidade incrível.",
            "Seu single solo 'Seven' liderou a Billboard Hot 100 e quebrou recordes de streaming.",
            "Ele expressa sua identidade artística através de tatuagens, o que é um fenômeno cultural entre o ARMY.",
            "Sua dedicação ao fitness lhe rendeu o título de 'homem músculo' do mundo idol."
          ],
          ar: [
            "تم استقطابه من قبل وكالات متعددة في المدرسة الإعدادية، لكنه اختار BigHit بعد رؤية RM.",
            "يُلقب بـ 'الماكني الذهبي' لسرعة تعلمه الرسم والتصوير والرياضة والغناء والرقص.",
            "تصدرت أغنيته المنفردة 'Seven' قائمة بيلبورد هوت 100 وحطمت أرقاماً قياسية في البث.",
            "يعبر عن هويته الفنية من خلال الوشوم، وأصبح تحليلها ظاهرة ثقافية بين الآرمي.",
            "أكسبه تفانيه في ممارسة الرياضة لقب 'رجل العضلات في عالم الآيدولز'."
          ],
          th: [
            "เขามีโอกาสเลือกเข้าสังกัดดังๆ หลายแห่งในตอนมัธยมต้น แต่เขาเลือก BigHit เพราะประทับใจในตัว RM",
            "เขาได้รับฉายา 'มักเน่ทองคำ' เพราะทำได้ดีทั้งวาดรูป ถ่ายภาพ กีฬา และการร้องเต้น",
            "ซิงเกิลโซโล่ 'Seven' ของเขาขึ้นอันดับ 1 ใน Billboard Hot 100 และทำสถิติยอดสตรีมสูงสุด",
            "เขาถ่ายทอดตัวตนทางศิลปะผ่านรอยสัก ซึ่งกลายเป็นหัวข้อที่ ARMY มักจะนำมาวิเคราะห์กันเสมอ",
            "ความจริงจังในการออกกำลังกายทำให้เขาได้ชื่อว่าเป็นคนที่มีรูปร่างดีที่สุดคนหนึ่งในวงการไอดอล"
          ],
          vi: [
            "Anh từng được nhiều công ty giải trí săn đón nhưng đã chọn BigHit sau khi thấy RM.",
            "Được mệnh danh là 'Em út vàng', anh có khả năng học vẽ, nhiếp ảnh, thể thao và ca hát cực nhanh.",
            "Single solo 'Seven' của anh đã đứng đầu Billboard Hot 100 và phá kỷ lục lượt nghe trực tuyến.",
            "Anh thể hiện cá tính nghệ thuật qua những hình xăm, đây cũng là chủ đề thảo luận sôi nổi của ARMY.",
            "Sự tận tâm tập luyện giúp anh có ngoại hình cơ bắp nhất nhì giới thần tượng."
          ],
          ru: [
            "В средней школе его приглашали во многие агентства, но он выбрал BigHit, увидев RM.",
            "Прозванный «Золотым макнэ», он с невероятной скоростью осваивает рисование, фото, спорт и танцы.",
            "Его сольный сингл Seven возглавил Billboard Hot 100 и побил рекорды по прослушиваниям.",
            "Он выражает свою артистическую натуру через татуировки, что стало предметом анализа для ARMY.",
            "Его преданность фитнесу принесла ему звание самого мускулистого парня в мире айдолов."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jungkook_bighitentertainment/" }
      }
    ]
  },
  {
    id: "blackpink",
    name: { ko: "블랙핑크", en: "BLACKPINK", ja: "ブラックピンク (BLACKPINK)", zh: "BLACKPINK", es: "BLACKPINK", id: "BLACKPINK", fr: "BLACKPINK", hi: "ब्लैकपिंक (BLACKPINK)", pt: "BLACKPINK", ar: "بلاك بينك (BLACKPINK)", th: "แบล็กพิงก์ (BLACKPINK)", vi: "BLACKPINK", ru: "BLACKPINK" },
    officialSite: "https://www.blackpinkofficial.com/",
    company: "YG Entertainment",
    debut: "2016.08.08",
    fandom: { ko: "블링크 (BLINK)", en: "BLINK", ja: "ブリンク (BLINK)", zh: "BLINK", es: "BLINK", id: "BLINK", fr: "BLINK", hi: "ब्लिंक (BLINK)", pt: "BLINK", ar: "بلينك (BLINK)", th: "บลิงก์ (BLINK)", vi: "BLINK", ru: "BLINK" },
    accentColor: "#f4a7bb",
    imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Group+Official+Photo+BORN+PINK",
    socials: { instagram: "https://www.instagram.com/blackpinkofficial/", twitter: "https://twitter.com/BLACKPINK", youtube: "https://www.youtube.com/@BLACKPINK", tiktok: "https://www.tiktok.com/@bp_tiktok" },
    wiki: {
      ko: "블랙핑크(BLACKPINK)는 YG 엔터테인먼트 소속의 4인조 걸그룹입니다. 전 세계에서 가장 영향력 있는 여성 그룹으로 자리매김했습니다.",
      en: "BLACKPINK is a 4-member girl group under YG Entertainment. They have established themselves as the most influential girl group in the world.",
      ja: "BLACKPINKはYGエンターテインメント所属の4人組ガールズグループです。世界で最も影響力のあるガールズグループとしての地位を確立しました。",
      zh: "BLACKPINK是YG娱乐旗下的四人女子组合。她们已成为全球最具影响力的女子组合。",
      es: "BLACKPINK es un grupo de chicas de 4 miembros bajo YG Entertainment. Se han consolidado como el grupo femenino más influyente del mundo.",
      id: "BLACKPINK adalah grup vokal wanita beranggotakan 4 orang di bawah YG Entertainment. Mereka telah memantapkan diri sebagai grup wanita paling berpengaruh di dunia.",
      fr: "BLACKPINK est un groupe de filles de 4 membres sous YG Entertainment. Elles se sont imposées comme le groupe féminin le plus influent au monde.",
      hi: "ब्लैकपिंक (BLACKPINK) YG एंटरटेनमेंट के तहत 4-सदस्यीय गर्ल ग्रुप है। उन्होंने दुनिया के सबसे प्रभावशाली गर्ल ग्रुप के रूप में खुद को स्थापित किया है।",
      pt: "BLACKPINK é um grupo feminino de 4 membros da YG Entertainment. Elas se estabeleceram como o grupo feminino mais influente do mundo.",
      ar: "بلاك بينك (BLACKPINK) هي فرقة فتيات مكونة من 4 أعضاء تحت إدارة وكالة واي جي إنترتينمنت. لقد أثبتن أنفسهن كأكثر فرقة فتيات تأثيراً في العالم.",
      th: "แบล็กพิงก์ (BLACKPINK) เป็นเกิร์ลกรุ๊ปสมาชิก 4 คนภายใต้สังกัด YG Entertainment พวกเธอได้สร้างชื่อเสียงในฐานะเกิร์ลกรุ๊ปที่มีอิทธิพลที่สุดในโลก",
      vi: "BLACKPINK là nhóm nhạc nữ gồm 4 thành viên thuộc YG Entertainment. Họ đã khẳng định mình là nhóm nhạc nữ có sức ảnh hưởng nhất thế giới.",
      ru: "BLACKPINK — это женская группа из 4 человек под руководством YG Entertainment. Они зарекомендовали себя как самая влиятельная женская группа в мире."
    },
    description: {
      ko: "전 세계를 사로잡은 'Pink'와 'Black'의 조화, 글로벌 팝의 아이콘입니다.",
      en: "The perfect harmony of 'Pink' and 'Black', a global pop icon that has captivated the world.",
      ja: "世界を魅了する「Pink」と「Black」の調和、グローバルポップのアイコンです。",
      zh: "征服世界的'粉'与'黑'的和谐，全球流行偶像。",
      es: "La armonía perfecta de 'Pink' y 'Black', un icono del pop mundial que ha cautivado al mundo.",
      id: "Harmoni sempurna antara 'Pink' dan 'Black', ikon pop global yang telah memikat dunia.",
      fr: "L'harmonie parfaite du 'Pink' et du 'Black', une icône de la pop mondiale qui a captivé le monde entier.",
      hi: "'पिंक' और 'ब्लैक' का सही सामंजस्य, एक वैश्विक पॉप आइकन जिसने दुनिया को मंत्रमुग्ध कर दिया है।",
      pt: "A harmonia perfeita de 'Pink' e 'Black', um ícone pop global que cativou o mundo.",
      ar: "التناغم المثالي بين اللونين الوردي والأسود، أيقونة بوب عالمية أسرت العالم.",
      th: "ความผสมผสานที่ลงตัวระหว่าง 'Pink' และ 'Black' ไอคอนป๊อประดับโลกที่สะกดสายตาคนทั้งโลก",
      vi: "Sự kết hợp hoàn hảo giữa 'Hồng' và 'Đen', biểu tượng nhạc pop toàn cầu đã quyến rũ cả thế giới.",
      ru: "Идеальная гармония «розового» и «черного», мировая поп-икона, покорившая мир."
    },
    tmi: {
      ko: [
        "블랙핑크의 'Born Pink' 월드투어는 역대 여성 아티스트 단일 투어 역대 최고 수익 기록을 경신한 역사적인 투어입니다.",
        "멤버들은 식사 메뉴를 정할 때 결정 장애가 오면 사다리 타기나 룰렛 앱을 사용하는 것으로 유명합니다.",
        "블랙핑크 4인은 각자 다른 글로벌 명품 브랜드 앰버서더를 맡고 있으며, 개인별로도 강력한 팬층을 보유하고 있습니다.",
        "2023년 YG와 그룹 활동 재계약을 체결하며 '블랙핑크의 시대는 아직 끝나지 않았다'는 신호를 전 세계에 보냈습니다.",
        "유튜브 1억 뷰를 돌파한 뮤직비디오가 여러 편에 달하며, 공식 채널 구독자 수가 K-팝 걸그룹 중 역대 최다입니다.",
        "K-팝 걸그룹 최초로 미국 최대 음악 축제인 '코첼라' 페스티벌의 헤드라이너로 서며 글로벌 위상을 입증했습니다.",
        "멤버들은 데뷔 전 평균 4~6년의 혹독한 연습생 기간을 거치며 탄탄한 실력을 쌓아왔습니다.",
        "'How You Like That' 뮤직비디오는 공개 당시 여러 개의 기네스 세계 기록을 갈아치우는 기염을 토했습니다.",
        "넷플릭스 오리지널 다큐멘터리 '블랙핑크: 세상을 밝혀라'를 통해 데뷔 전부터 지금까지의 여정을 공개했습니다.",
        "팀 이름 '블랙핑크'는 예쁜 색의 대표인 '핑크'에 '블랙'을 섞어 '예쁜 게 다가 아니다'라는 반전의 의미를 담고 있습니다."
      ],
      en: [
        "The 'Born Pink' world tour broke the all-time revenue record for a solo female artist tour — a historic achievement.",
        "They famously use a roulette app or ladder game to decide what to eat when they can't agree.",
        "All four members individually hold ambassadorships with different global luxury brands, each boasting massive solo fan bases.",
        "Their 2023 group contract renewal with YG sent a clear signal to the world: 'The BLACKPINK era is not over yet.'",
        "Multiple BLACKPINK music videos have surpassed 1 billion YouTube views, and their official channel holds the all-time subscriber record for a K-pop girl group.",
        "They were the first K-pop girl group to headline Coachella, a major US music festival, proving their global status.",
        "The members underwent an average of 4-6 years of intense training before their debut to build their solid skills.",
        "The 'How You Like That' music video shattered several Guinness World Records upon its release.",
        "They shared their journey from pre-debut to superstardom in the Netflix documentary 'BLACKPINK: Light Up the Sky'.",
        "The name 'BLACKPINK' signifies that 'beauty (Pink) isn't everything (Black)', representing their dual charm."
      ],
      ja: [
        "ブラックピンクの「Born Pink」ワールドツアーは、女性アーティストの単一ツアーとして歴代最高の収益を記録した歴史的なツアーです。",
        "メンバーは食事のメニューを決めるとき、なかなか決まらないと「あみだくじ」やルーレットアプリを使うことで有名です。",
        "メンバー4人はそれぞれ異なるグローバル高級ブランドのアンバサダーを務めており、個人としても強力なファン層を持っています。",
        "2023年にYGとグループ活動の再契約を締結し、「ブラックピンクの時代はまだ終わっていない」というメッセージを世界に発信しました。",
        "YouTubeで1億回再生を突破したミュージックビデオが多数あり、公式チャンネルの登録者数はK-POPガールズグループの中で歴代最多です。"
      ],
      zh: [
        "BLACKPINK的'Born Pink'世界巡演打破了女性艺人单次巡演的历史最高收入纪录，是一次历史性的巡演。",
        "成员们在决定菜单遇到困难时，以使用爬梯子游戏或轮盘应用而闻名。",
        "BLACKPINK的四名成员分别担任不同全球奢侈品牌的品牌大使，每个人都拥有强大的个人粉丝群。",
        "2023年与YG签署了组合活动续约合同，向全世界发出了'BLACKPINK时代尚未结束'的信号。",
        "拥有多部YouTube播放量突破1亿次的音乐视频，官方频道的订阅人数是韩国流行女团中历史最多的。"
      ],
      es: [
        "La gira mundial 'Born Pink' de BLACKPINK rompió el récord de ingresos históricos para una gira de una artista femenina.",
        "Las integrantes son famosas por usar aplicaciones de ruleta o juegos de azar para decidir el menú cuando no pueden elegir qué comer.",
        "Las cuatro integrantes de BLACKPINK son embajadoras de diferentes marcas de lujo globales y cuentan con bases de fans individuales masivas.",
        "En 2023 renovaron su contrato con YG para actividades grupales, enviando el mensaje de que 'la era de BLACKPINK aún no ha terminado'.",
        "Tienen múltiples videos musicales que superan los 100 millones de vistas en YouTube, y su canal oficial tiene el récord de suscriptores para un grupo femenino de K-pop."
      ],
      id: [
        "Tur dunia 'Born Pink' BLACKPINK memecahkan rekor pendapatan tertinggi sepanjang masa untuk tur tunggal artis wanita.",
        "Para anggota terkenal menggunakan aplikasi roulette atau permainan tangga untuk menentukan menu makanan ketika mereka sulit memutuskan.",
        "Keempat anggota BLACKPINK masing-masing menjadi duta merek mewah global yang berbeda dan memiliki basis penggemar individu yang kuat.",
        "Pada tahun 2023, mereka menandatangani perpanjangan kontrak dengan YG untuk aktivitas grup, mengirimkan sinyal bahwa 'era BLACKPINK belum berakhir'.",
        "Banyak video musik mereka yang telah melampaui 100 juta penayangan di YouTube, dan jumlah pelanggan saluran resmi mereka adalah yang terbanyak di antara girl grup K-pop."
      ],
      fr: [
        "La tournée mondiale 'Born Pink' de BLACKPINK a battu le record historique de revenus pour une tournée d'artiste féminine.",
        "Les membres sont connues pour utiliser des applications de roulette ou de tirage au sort pour choisir leur menu lorsqu'elles n'arrivent pas à se décider.",
        "Les quatre membres de BLACKPINK sont ambassadrice de différentes marques de luxe mondiales et possèdent chacune une base de fans massive.",
        "En 2023, elles ont renouvelé leur contrat avec YG pour les activités de groupe, envoyant le message que 'l'ère BLACKPINK n'est pas encore terminée'.",
        "Plusieurs de leurs clips vidéo ont dépassé les 100 millions de vues sur YouTube, et leur chaîne officielle détient le record du nombre d'abonnés pour un groupe de filles K-pop."
      ],
      hi: [
        "ब्लैकपिंक का 'Born Pink' वर्ल्ड टूर एक महिला कलाकार के एकल दौरे के लिए अब तक का सबसे अधिक राजस्व का रिकॉर्ड तोड़ने वाला ऐतिहासिक दौरा है।",
        "सदस्य भोजन के मेनू तय करने में असमर्थ होने पर रूलेट ऐप या लैडर गेम का उपयोग करने के लिए प्रसिद्ध हैं।",
        "ब्लैकपिंक के चारों सदस्य अलग-अलग वैश्विक लक्जरी ब्रांडों के एंबेसडर हैं और उनकी व्यक्तिगत रूप से भी बहुत बड़ी फैन फॉलोइंग है।",
        "2023 में YG के साथ समूह गतिविधि अनुबंध के नवीनीकरण ने दुनिया को संकेत दिया कि 'ब्लैकपिंक का युग अभी खत्म नहीं हुआ है' ।",
        "उनके कई म्यूजिक वीडियो YouTube पर 100 मिलियन से अधिक बार देखे जा चुके हैं और उनका आधिकारिक चैनल किसी के-पॉप गर्ल ग्रुप के लिए रिकॉर्ड सब्सक्राइबर रखता है।"
      ],
      pt: [
        "A turnê mundial 'Born Pink' do BLACKPINK quebrou o recorde histórico de arrecadação para uma turnê de artista feminina.",
        "As integrantes são famosas por usar aplicativos de roleta ou jogos de sorte para decidir o cardápio quando não conseguem escolher o que comer.",
        "As quatro integrantes do BLACKPINK são embaixadoras de diferentes marcas de luxo globais e possuem bases de fãs individuais massivas.",
        "Em 2023, elas renovaram o contrato com a YG para atividades em grupo, enviando o sinal de que 'a era do BLACKPINK ainda não acabou'.",
        "Vários videoclipes superaram 100 milhões de visualizações no YouTube, e seu canal oficial detém o recorde de inscritos para um grupo feminino de K-pop."
      ],
      ar: [
        "حطمت جولة 'Born Pink' العالمية لبلاك بينك الرقم القياسي لأعلى إيرادات لجولة واحدة لفنانة في التاريخ.",
        "تشتهر العضوات باستخدام تطبيقات الروليت أو الألعاب لاتخاذ قرار بشأن قائمة الطعام عندما لا يستطعن الاختيار.",
        "تعمل عضوات بلاك بينك الأربع كسفيرات لعلامات تجارية فاخرة عالمية مختلفة، وتتمتع كل منهن بقاعدة جماهيرية فردية ضخمة.",
        "في عام 2023، تم تجديد عقد الأنشطة الجماعية مع وكالة YG، مما أرسل رسالة للعالم بأن 'حقبة بلاك بينك لم تنتهِ بعد'.",
        "تجاوزت العديد من فيديوهاتهن الموسيقية 100 مليون مشاهدة على يوتيوب، وتعد قناتهن الرسمية الأكثر اشتراكاً بين فرق الفتيات في الكي-بوب."
      ],
      th: [
        "เวิลด์ทัวร์ 'Born Pink' ของแบล็กพิงก์ทำลายสถิติรายได้สูงสุดตลอดกาลสำหรับทัวร์คอนเสิร์ตของศิลปินหญิงเดี่ยว ซึ่งถือเป็นความสำเร็จครั้งประวัติศาสตร์",
        "สมาชิกในวงมักจะใช้แอปวงล้อสุ่มหรือเกมบันไดเพื่อตัดสินใจเลือกเมนูอาหารเมื่อไม่สามารถตกลงกันได้",
        "สมาชิกทั้ง 4 คนของแบล็กพิงก์ต่างเป็นแอมบาสเดอร์ของแบรนด์หรูระดับโลกที่แตกต่างกัน และแต่ละคนมีฐานแฟนคลับส่วนตัวที่เหนียวแน่นมาก",
        "การต่อสัญญากิจกรรมวงกับ YG ในปี 2023 เป็นการส่งสัญญาณให้โลกรู้ว่า 'ยุคของแบล็กพิงก์ยังไม่สิ้นสุด'",
        "มิวสิกวิดีโอหลายตัวของแบล็กพิงก์มียอดวิวเกิน 100 ล้านครั้งบน YouTube และช่องทางการมียอดผู้ติดตามสูงสุดเป็นประวัติการณ์สำหรับเกิร์ลกรุ๊ป K-pop"
      ],
      vi: [
        "Chuyến lưu diễn thế giới 'Born Pink' của BLACKPINK đã phá kỷ lục doanh thu mọi thời đại cho chuyến lưu diễn của một nữ nghệ sĩ đơn lẻ.",
        "Các thành viên nổi tiếng với việc sử dụng ứng dụng vòng quay hoặc trò chơi cầu thang để quyết định thực đơn khi họ không thể lựa chọn món ăn.",
        "Cả bốn thành viên BLACKPINK đều là đại sứ cho các thương hiệu xa xỉ toàn cầu khác nhau và sở hữu lượng người hâm mộ cá nhân đông đảo.",
        "Năm 2023, họ đã ký gia hạn hợp đồng hoạt động nhóm với YG, gửi đi tín hiệu rằng 'thời đại của BLACKPINK vẫn chưa kết thúc'.",
        "Nhiều video âm nhạc của họ đã vượt qua 100 triệu lượt xem trên YouTube và kênh chính thức của họ có số lượng người đăng ký nhiều nhất trong số các nhóm nhạc nữ K-pop."
      ],
      ru: [
        "Мировой тур BLACKPINK «Born Pink» побил исторический рекорд по доходам для тура сольной исполнительницы.",
        "Участницы известны тем, что используют приложения-рулетки или игры, чтобы выбрать меню, когда не могут договориться о еде.",
        "Все четыре участницы BLACKPINK являются амбассадорами различных мировых люксовых брендов и обладают огромными личными фан-базами.",
        "В 2023 году они продлили контракт с YG на групповую деятельность, дав понять всему миру, что «эра BLACKPINK еще не закончилась».",
        "Множество клипов BLACKPINK превысили 100 миллионов просмотров на YouTube, а их официальный канал является рекордсменом по числу подписчиков среди женских K-pop групп."
      ]
    },
    news: [
      {
        title: {
          ko: "블랙핑크 'Pink Venom', 발매 24시간 만에 유튜브 4천만 뷰 돌파",
          en: "BLACKPINK 'Pink Venom' Surpasses 40M YouTube Views in 24 Hours",
          ja: "BLACKPINK 'Pink Venom' が24時間でYouTube4000万再生を突破",
          zh: "BLACKPINK 'Pink Venom' 发行24小时内YouTube播放量突破4000万",
          es: "BLACKPINK 'Pink Venom' supera 40 millones de vistas en YouTube en 24 horas",
          id: "BLACKPINK 'Pink Venom' Melampaui 40 Juta Penayangan YouTube dalam 24 Jam",
          fr: "BLACKPINK 'Pink Venom' dépasse 40 millions de vues sur YouTube en 24 heures",
          hi: "ब्लैकपिंक 'Pink Venom' ने 24 घंटों में YouTube पर 40 मिलियन व्यूज पार किए",
          pt: "BLACKPINK 'Pink Venom' supera 40 milhões de visualizações no YouTube em 24 horas",
          ar: "بلاك بينك 'Pink Venom' تتجاوز 40 مليون مشاهدة على يوتيوب في 24 ساعة",
          th: "BLACKPINK 'Pink Venom' มียอดวิวทะลุ 40 ล้านครั้งบน YouTube ภายใน 24 ชั่วโมง",
          vi: "BLACKPINK 'Pink Venom' vượt qua 40 triệu lượt xem trên YouTube trong 24 giờ",
          ru: "BLACKPINK «Pink Venom» набрал более 40 миллионов просмотров на YouTube за 24 часа"
        },
        date: "2022.08.19",
        summary: {
          ko: "'Pink Venom'의 뮤직비디오가 공개 24시간 만에 유튜브 4천만 뷰를 돌파하며 컴백 신드롬을 일으켰습니다.",
          en: "The 'Pink Venom' MV surpassed 40 million YouTube views in 24 hours, sparking a massive comeback syndrome.",
          ja: "「Pink Venom」のMVが公開から24時間でYouTube4000万再生を突破し、爆発的な反響を呼びました。",
          zh: "《Pink Venom》的音乐视频在公开24小时内突破了4000万次播放，引发了回归热潮。",
          es: "El MV de 'Pink Venom' superó los 40 millones de vistas en YouTube en 24 horas, provocando un gran revuelo por su regreso.",
          id: "MV 'Pink Venom' melampaui 40 juta penayangan YouTube dalam 24 jam, memicu antusiasme comeback yang luar biasa.",
          fr: "Le clip de 'Pink Venom' a dépassé les 40 millions de vues sur YouTube en 24 heures, provoquant un immense engouement.",
          hi: "'Pink Venom' के म्यूजिक वीडियो ने 24 घंटों में 40 मिलियन व्यूज पार करके वापसी का धमाल मचाया।",
          pt: "O MV de 'Pink Venom' superou 40 milhões de visualizações no YouTube em 24 horas, gerando uma grande expectativa no retorno.",
          ar: "تجاوز فيديو كليب 'Pink Venom' حاجز 40 مليون مشاهدة على يوتيوب خلال 24 ساعة، مما أثار ضجة هائلة عند العودة.",
          th: "มิวสิกวิดีโอ 'Pink Venom' มียอดวิวทะลุ 40 ล้านครั้งใน 24 ชั่วโมงแรก สร้างกระแสการคัมแบ็คที่ยิ่งใหญ่",
          vi: "MV 'Pink Venom' đã vượt qua 40 triệu lượt xem trên YouTube chỉ sau 24 giờ, tạo nên cơn sốt trở lại.",
          ru: "Клип «Pink Venom» набрал более 40 миллионов просмотров на YouTube за 24 часа, вызвав огромный интерес к возвращению."
        },
        url: "#"
      },
      {
        title: {
          ko: "블랙핑크 정규 2집 'BORN PINK' 빌보드 200 1위 등극",
          en: "BLACKPINK 2nd Album 'BORN PINK' Debuts at No.1 on Billboard 200",
          ja: "BLACKPINK 2ndアルバム 'BORN PINK' がビルボード200で1位を獲得",
          zh: "BLACKPINK 正规二辑《BORN PINK》登顶公告牌二百强专辑榜",
          es: "El segundo álbum de BLACKPINK 'BORN PINK' debuta en el No.1 de Billboard 200",
          id: "Album ke-2 BLACKPINK 'BORN PINK' Debut di No.1 Billboard 200",
          fr: "Le 2ème album de BLACKPINK 'BORN PINK' débute n°1 du Billboard 200",
          hi: "ब्लैकपिंक का दूसरा एल्बम 'BORN PINK' बिलबोर्ड 200 पर नंबर 1 पर",
          pt: "O segundo álbum do BLACKPINK 'BORN PINK' estreia em 1º lugar na Billboard 200",
          ar: "ألبوم بلاك بينك الثاني 'BORN PINK' يتصدر قائمة بيلبورد 200",
          th: "อัลบั้มชุดที่ 2 'BORN PINK' ของ BLACKPINK เปิดตัวอันดับ 1 ใน Billboard 200",
          vi: "Album thứ 2 'BORN PINK' của BLACKPINK ra mắt ở vị trí số 1 trên Billboard 200",
          ru: "Второй альбом BLACKPINK «BORN PINK» дебютировал на 1-м месте в Billboard 200"
        },
        date: "2022.10.07",
        summary: {
          ko: "두 번째 정규 앨범 'BORN PINK'가 빌보드 200 정상에 오르며 K-팝 걸그룹 역대 최고 데뷔 성적을 기록했습니다.",
          en: "'BORN PINK' debuted at #1 on the Billboard 200, marking the best debut for a K-pop girl group album in history.",
          ja: "2ndアルバム「BORN PINK」がビルボード200で1位となり、K-POPガールズグループとして史上最高の記録を達成しました。",
          zh: "第二张正规专辑《BORN PINK》登上公告牌二百强专辑榜榜首，创下了韩国流行女团历史上的最好成绩。",
          es: "Su segundo álbum 'BORN PINK' encabezó la lista Billboard 200, marcando el mejor debut para un álbum de un grupo femenino de K-pop.",
          id: "Album reguler kedua 'BORN PINK' mencapai puncak Billboard 200, mencatat performa debut terbaik untuk girl grup K-pop.",
          fr: "Le deuxième album 'BORN PINK' a atteint le sommet du Billboard 200, marquant les meilleurs débuts pour un album de groupe féminin K-pop.",
          hi: "दूसरे रेगुलर एल्बम 'BORN PINK' ने बिलबोर्ड 200 में शीर्ष स्थान हासिल किया, जो किसी के-पॉप गर्ल ग्रुप के लिए रिकॉर्ड है।",
          pt: "O segundo álbum 'BORN PINK' alcançou o topo da Billboard 200, marcando a melhor estreia para um álbum de grupo feminino de K-pop.",
          ar: "تصدر الألبوم الثاني 'BORN PINK' قائمة بيلبورد 200، مسجلاً أفضل أداء لفرقة فتيات في الكي-بوب.",
          th: "อัลบั้มเต็มชุดที่ 2 'BORN PINK' ครองอันดับ 1 ใน Billboard 200 สร้างสถิติการเปิดตัวที่ดีที่สุดสำหรับเกิร์ลกรุ๊ป K-pop",
          vi: "Album chính thức thứ hai 'BORN PINK' đã đứng đầu Billboard 200, ghi nhận thành tích ra mắt tốt nhất cho một nhóm nhạc nữ K-pop.",
          ru: "Второй полноформатный альбом «BORN PINK» возглавил Billboard 200, установив лучший результат для женской K-pop группы."
        },
        url: "#"
      },
      {
        title: {
          ko: "'Born Pink' 월드투어, 역대 여성 아티스트 최고 수익 경신",
          en: "'Born Pink' World Tour Sets All-Time Revenue Record for Female Artists",
          ja: "「Born Pink」ワールドツアーが女性アーティスト史上最高の収益を更新",
          zh: "'Born Pink'世界巡演刷新女性艺人最高收入纪录",
          es: "La gira mundial 'Born Pink' establece el récord de ingresos de todos los tiempos para artistas femeninas",
          id: "Tur Dunia 'Born Pink' Mencetak Rekor Pendapatan Tertinggi untuk Artis Wanita",
          fr: "La tournée mondiale 'Born Pink' établit un record de revenus pour une artiste féminine",
          hi: "'Born Pink' वर्ल्ड टूर ने महिला कलाकारों के लिए सर्वकालिक राजस्व रिकॉर्ड बनाया",
          pt: "Turnê mundial 'Born Pink' estabelece recorde de arrecadação para artistas femininas",
          ar: "جولة 'Born Pink' العالمية تحقق رقماً قياسياً في الإيرادات للفنانات",
          th: "เวิลด์ทัวร์ 'Born Pink' สร้างสถิติรายได้สูงสุดตลอดกาลสำหรับศิลปินหญิง",
          vi: "World tour 'Born Pink' lập kỷ lục doanh thu mọi thời đại cho nghệ sĩ nữ",
          ru: "Мировой тур «Born Pink» установил рекорд по доходам среди женщин-исполнительниц"
        },
        date: "2023.09.17",
        summary: {
          ko: "'Born Pink' 월드투어가 역대 여성 아티스트 단일 투어 최고 수익 기록을 경신하며 블랙핑크의 공연 파워를 다시 한번 입증했습니다.",
          en: "The 'Born Pink' tour broke the all-time revenue record for a single tour by a female artist, reaffirming BLACKPINK's concert dominance.",
          ja: "「Born Pink」ツアーが女性アーティストの単一ツアーとして史上最高の収益を記録し、BLACKPINKの圧倒的な動員力を証明しました。",
          zh: "《Born Pink》世界巡演刷新了女性艺人单次巡演的最高收入纪录，再次证明了BLACKPINK的演出实力。",
          es: "La gira 'Born Pink' rompió el récord de ingresos para una sola gira de una artista femenina, reafirmando el dominio de BLACKPINK en los escenarios.",
          id: "Tur 'Born Pink' memecahkan rekor pendapatan tertinggi untuk tur tunggal oleh artis wanita, membuktikan kekuatan konser BLACKPINK.",
          fr: "La tournée 'Born Pink' a battu le record de revenus pour une tournée unique d'une artiste féminine, confirmant la domination de BLACKPINK.",
          hi: "'Born Pink' टूर ने एक महिला कलाकार द्वारा एकल दौरे के लिए अब तक का सबसे अधिक राजस्व का रिकॉर्ड तोड़ दिया, जिससे ब्लैकपिंक की शक्ति फिर से साबित हुई।",
          pt: "A turnê 'Born Pink' quebrou o recorde de arrecadação para uma única turnê de uma artista feminina, reafirmando o domínio do BLACKPINK.",
          ar: "حطمت جولة 'Born Pink' الرقم القياسي لأعلى إيرادات لجولة واحدة لفنانة، مما أثبت قوة بلاك بينك في الحفلات الموسيقية.",
          th: "ทัวร์ 'Born Pink' ทำลายสถิติรายได้สูงสุดสำหรับการทัวร์คอนเสิร์ตเดียวของศิลปินหญิง ตอกย้ำความเป็นผู้นำในด้านการแสดงของวง",
          vi: "Chuyến lưu diễn 'Born Pink' đã phá kỷ lục doanh thu cho một chuyến lưu diễn duy nhất của một nghệ sĩ nữ, khẳng định sức mạnh biểu diễn của BLACKPINK.",
          ru: "Тур «Born Pink» побил рекорд по доходам для одного тура женщины-исполнительницы, подтвердив доминирование BLACKPINK на сцене."
        },
        url: "#"
      },
      {
        title: {
          ko: "지수, 솔로 데뷔 'FLOWER'… 뮤직뱅크 역대 최고 점수 갱신",
          en: "Jisoo Solo Debut 'FLOWER' Breaks Music Bank All-Time High Score",
          ja: "ジス ソロデビュー「FLOWER」 ミュージックバンクで歴代最高スコアを更新",
          zh: "智秀个人出道曲《FLOWER》刷新音乐银行历史最高分",
          es: "El debut en solitario de Jisoo 'FLOWER' rompe el récord de puntuación en Music Bank",
          id: "Debut Solo Jisoo 'FLOWER' Memecahkan Skor Tertinggi Sepanjang Masa di Music Bank",
          fr: "Le premier solo de Jisoo 'FLOWER' bat le record de score sur Music Bank",
          hi: "जिसु का सोलो डेब्यू 'FLOWER' म्यूजिक बैंक में अब तक का सबसे अधिक स्कोर",
          pt: "A estreia solo da Jisoo 'FLOWER' quebra o recorde de pontuação no Music Bank",
          ar: "أول ظهور منفرد لجيسو بأغنية 'FLOWER' يحطم الرقم القياسي في ميوزيك بانك",
          th: "จีซูเดบิวต์โซโล่ 'FLOWER' ทำลายสถิติคะแนนสูงสุดใน Music Bank",
          vi: "Màn ra mắt solo của Jisoo với 'FLOWER' phá kỷ lục điểm số cao nhất trên Music Bank",
          ru: "Сольный дебют Джису «FLOWER» побил рекорд по баллам на Music Bank"
        },
        date: "2023.03.31",
        summary: {
          ko: "지수의 솔로 데뷔 타이틀 'FLOWER'가 KBS 뮤직뱅크에서 역대 최고 점수를 기록하며 강력한 솔로 파워를 입증했습니다.",
          en: "Jisoo's solo debut title 'FLOWER' broke the all-time high score on KBS Music Bank, proving her powerful solo capabilities.",
          ja: "ジスのソロタイトル曲「FLOWER」がKBSミュージックバンクで歴代最高スコアを記録し、ソロとしての強さを見せつけました。",
          zh: "智秀个人出道主打歌《FLOWER》在KBS音乐银行获得历史最高分，证明了其强大的个人实力。",
          es: "El tema principal del debut de Jisoo, 'FLOWER', registró la puntuación más alta en la historia de KBS Music Bank.",
          id: "Lagu utama debut solo Jisoo 'FLOWER' mencatat skor tertinggi sepanjang masa di KBS Music Bank, membuktikan kekuatan solonya.",
          fr: "Le titre 'FLOWER' de Jisoo a enregistré le score le plus élevé de l'histoire de KBS Music Bank, prouvant sa force en solo.",
          hi: "जिसु के सोलो डेब्यू टाइटल 'FLOWER' ने KBS म्यूजिक बैंक में अब तक का सबसे अधिक स्कोर बनाया, जिससे उनकी सोलो पावर साबित हुई।",
          pt: "A faixa-título da estreia solo da Jisoo, 'FLOWER', registrou a maior pontuação da história do KBS Music Bank.",
          ar: "حققت أغنية جيسو المنفردة 'FLOWER' أعلى نتيجة في تاريخ برنامج ميوزيك بانك على قناة KBS.",
          th: "เพลงเดบิวต์โซโล่ของจีซู 'FLOWER' ทำสถิติคะแนนสูงสุดในรายการ Music Bank ของช่อง KBS",
          vi: "Ca khúc ra mắt solo 'FLOWER' của Jisoo đã đạt điểm số cao nhất trong lịch sử KBS Music Bank.",
          ru: "Заглавный трек сольного дебюта Джису «FLOWER» набрал самый высокий балл в истории KBS Music Bank."
        },
        url: "#"
      },
      {
        title: {
          ko: "블랙핑크, YG와 그룹 활동 전속계약 재체결",
          en: "BLACKPINK Renews Group Activity Contract with YG",
          ja: "BLACKPINKがYGとグループ活動の専属契約を更新",
          zh: "BLACKPINK与YG续签组合活动专属合同",
          es: "BLACKPINK renueva su contrato con YG para actividades grupales",
          id: "BLACKPINK Memperbarui Kontrak Aktivitas Grup dengan YG",
          fr: "BLACKPINK renouvelle son contrat avec YG pour les activités de groupe",
          hi: "ब्लैकपिंक ने YG के साथ समूह गतिविधि अनुबंध का नवीनीकरण किया",
          pt: "BLACKPINK renova contrato com a YG para atividades em grupo",
          ar: "بلاك بينك تجدد عقد الأنشطة الجماعية مع وكالة YG",
          th: "แบล็กพิงก์ต่อสัญญากิจกรรมวงกับ YG",
          vi: "BLACKPINK gia hạn hợp đồng hoạt động nhóm với YG",
          ru: "BLACKPINK продлили контракт с YG на групповую деятельность"
        },
        date: "2023.12.06",
        summary: {
          ko: "블랙핑크 4인이 YG 엔터테인먼트와 그룹 활동 전속계약 재체결을 완료하며 그룹 지속에 대한 의지를 공식화했습니다.",
          en: "All four BLACKPINK members officially renewed their group activity contract with YG Entertainment, confirming the group's continuation.",
          ja: "メンバー4人がYGエンターテインメントとグループ活動の契約を更新し、グループ存続への意志を公式に表明しました。",
          zh: "BLACKPINK四名成员完成了与YG娱乐的组合活动续约，正式表达了延续组合的意愿。",
          es: "Las cuatro integrantes de BLACKPINK renovaron oficialmente su contrato con YG Entertainment para seguir con el grupo.",
          id: "Keempat anggota BLACKPINK resmi memperbarui kontrak aktivitas grup dengan YG Entertainment, mengonfirmasi kelanjutan grup.",
          fr: "Les quatre membres de BLACKPINK ont officiellement renouvelé leur contrat avec YG Entertainment pour la poursuite du groupe.",
          hi: "ब्लैकपिंक के चारों सदस्यों ने YG एंटरटेनमेंट के साथ समूह गतिविधि अनुबंध का नवीनीकरण किया, जिससे समूह के जारी रहने की पुष्टि हुई।",
          pt: "As quatro integrantes do BLACKPINK renovaram oficialmente o contrato com a YG Entertainment para continuar o grupo.",
          ar: "جددت عضوات بلاك بينك الأربع عقود الأنشطة الجماعية مع وكالة YG، مما يؤكد استمرارية الفرقة.",
          th: "สมาชิกทั้ง 4 คนของแบล็กพิงก์ได้ต่อสัญญากิจกรรมวงกับ YG Entertainment อย่างเป็นทางการ เพื่อยืนยันการดำเนินกิจกรรมของวงต่อไป",
          vi: "Cả bốn thành viên BLACKPINK đã hoàn thành việc gia hạn hợp đồng hoạt động nhóm với YG Entertainment, chính thức hóa ý chí tiếp tục duy trì nhóm.",
          ru: "Все четыре участницы BLACKPINK официально продлили контракт с YG на групповую деятельность, подтвердив продолжение работы группы."
        },
        url: "#"
      },
      {
        title: {
          ko: "리사, YG 계약 종료 후 자체 레이블 'LLOUD' 설립",
          en: "Lisa Establishes Own Label 'LLOUD' After YG Contract Expiration",
          ja: "リサ YGとの契約終了後に個人レーベル「LLOUD」を設立",
          zh: "丽莎在与YG合约结束后成立个人厂牌'LLOUD'",
          es: "Lisa establece su propio sello 'LLOUD' tras finalizar su contrato con YG",
          id: "Lisa Mendirikan Label Sendiri 'LLOUD' Setelah Kontrak YG Berakhir",
          fr: "Lisa crée son propre label 'LLOUD' après la fin de son contrat avec YG",
          hi: "YG अनुबंध समाप्त होने के बाद लिसा ने अपना लेबल 'LLOUD' स्थापित किया",
          pt: "Lisa estabelece seu próprio selo 'LLOUD' após o fim do contrato com a YG",
          ar: "ليسا تؤسس شركتها الخاصة 'LLOUD' بعد انتهاء عقدها مع YG",
          th: "ลิซ่าก่อตั้งค่ายเพลงของตัวเอง 'LLOUD' หลังหมดสัญญากับ YG",
          vi: "Lisa thành lập nhãn hiệu riêng 'LLOUD' sau khi kết thúc hợp đồng với YG",
          ru: "Лиза основала собственный лейбл LLOUD после окончания контракта с YG"
        },
        date: "2024.03.01",
        summary: {
          ko: "리사가 YG와의 개인 계약 종료 후 자신의 레이블 'LLOUD'를 설립하고 독자적인 아티스트 경력을 시작했습니다.",
          en: "After her YG individual contract ended, Lisa established her own label 'LLOUD' and began a fully independent artistic journey.",
          ja: "YGとの個人契約が終了した後、リサは自身のレーベル「LLOUD」を設立し、独立したアーティストとして活動を開始しました。",
          zh: "在与YG的个人合约结束后，丽莎成立了自己的厂牌'LLOUD'，开启了独立的艺人生涯。",
          es: "Tras finalizar su contrato individual con YG, Lisa fundó su sello 'LLOUD' e inició su carrera como artista independiente.",
          id: "Setelah kontrak individunya dengan YG berakhir, Lisa mendirikan labelnya sendiri 'LLOUD' dan memulai karier sebagai artis independen.",
          fr: "Après la fin de son contrat individuel avec YG, Lisa a fondé son propre label 'LLOUD' et a commencé son parcours d'artiste indépendante.",
          hi: "YG के साथ अपना व्यक्तिगत अनुबंध समाप्त होने के बाद, लिसा ने अपना लेबल 'LLOUD' स्थापित किया और एक स्वतंत्र कलाकार के रूप में अपनी यात्रा शुरू की।",
          pt: "Após o fim de seu contrato individual com a YG, Lisa fundou seu selo 'LLOUD' e iniciou sua carreira como artista independente.",
          ar: "بعد انتهاء عقدها الفردي مع YG، أسست ليسا شركتها الخاصة 'LLOUD' وبدأت مسيرتها كفنانة مستقلة.",
          th: "หลังจากสิ้นสุดสัญญารายบุคคลกับ YG ลิซ่าได้ก่อตั้งค่ายเพลงของตัวเองในชื่อ 'LLOUD' และเริ่มต้นเส้นทางศิลปินเดี่ยวอย่างเต็มตัว",
          vi: "Sau khi kết thúc hợp đồng cá nhân với YG, Lisa đã thành lập nhãn hiệu riêng 'LLOUD' và bắt đầu sự nghiệp nghệ sĩ độc lập.",
          ru: "После окончания личного контракта с YG Лиза основала свой лейбл LLOUD и начала независимую артистическую карьеру."
        },
        url: "#"
      },
      {
        title: {
          ko: "리사 솔로 'ROCKSTAR', 빌보드 핫 100 진입 및 글로벌 히트",
          en: "Lisa Solo 'ROCKSTAR' Enters Billboard Hot 100 and Goes Global",
          ja: "リサのソロ曲「ROCKSTAR」がビルボードHot 100に入りグローバルヒット",
          zh: "丽莎个人单曲《ROCKSTAR》进入公告牌百强单曲榜并全球走红",
          es: "El solo de Lisa 'ROCKSTAR' entra en el Billboard Hot 100 y es un éxito mundial",
          id: "Solo Lisa 'ROCKSTAR' Masuk Billboard Hot 100 dan Hits Global",
          fr: "Le solo de Lisa 'ROCKSTAR' entre au Billboard Hot 100 et devient un succès mondial",
          hi: "लिसा का सोलो 'ROCKSTAR' बिलबोर्ड हॉट 100 में शामिल और वैश्विक हिट",
          pt: "O solo da Lisa 'ROCKSTAR' entra na Billboard Hot 100 e torna-se um sucesso global",
          ar: "أغنية ليسا المنفردة 'ROCKSTAR' تدخل قائمة بيلبورد هوت 100 وتحقق نجاحاً عالمياً",
          th: "เพลงโซโล่ 'ROCKSTAR' ของลิซ่าเข้าสู่ Billboard Hot 100 และฮิตไปทั่วโลก",
          vi: "Single solo 'ROCKSTAR' của Lisa lọt vào Billboard Hot 100 và gây sốt toàn cầu",
          ru: "Сольная песня Лизы «ROCKSTAR» вошла в Billboard Hot 100 и стала мировым хитом"
        },
        date: "2024.06.28",
        summary: {
          ko: "LLOUD 산하 첫 솔로 싱글 'ROCKSTAR'가 빌보드 핫 100에 진입하며 독립 아티스트로서의 성공적인 출발을 알렸습니다.",
          en: "Her first solo single under LLOUD, 'ROCKSTAR', entered the Billboard Hot 100, marking a successful start as an independent artist.",
          ja: "LLOUDからの初のソロシングル「ROCKSTAR」がビルボードHot 100に入り、独立したアーティストとして成功を収めました。",
          zh: "LLOUD旗下的首支个人单曲《ROCKSTAR》进入公告牌百强单曲榜，开启了作为独立艺人的成功篇章。",
          es: "Su primer sencillo bajo LLOUD, 'ROCKSTAR', entró en la lista Billboard 100, marcando un exitoso comienzo como artista independiente.",
          id: "Single solo pertamanya di bawah LLOUD, 'ROCKSTAR', masuk ke Billboard Hot 100, menandai awal yang sukses sebagai artis independen.",
          fr: "Son premier single sous LLOUD, 'ROCKSTAR', est entré au Billboard Hot 100, marquant un début réussi en tant qu'artiste indépendante.",
          hi: "LLOUD के तहत उनके पहले सोलो सिंगल 'ROCKSTAR' ने बिलबोर्ड हॉट 100 में प्रवेश किया, जिससे एक स्वतंत्र कलाकार के रूप में उनकी सफल शुरुआत हुई।",
          pt: "Seu primeiro single solo sob a LLOUD, 'ROCKSTAR', entrou na Billboard Hot 100, marcando um início de sucesso como artista independente.",
          ar: "دخلت أغنيتها المنفردة الأولى تحت شركة LLOUD بعنوان 'ROCKSTAR' قائمة بيلبورد هوت 100، مما يمثل بداية ناجحة لها كفنانة مستقلة.",
          th: "ซิงเกิลโซโล่แรกภายใต้ค่าย LLOUD 'ROCKSTAR' เข้าสู่ Billboard Hot 100 เป็นการเริ่มต้นที่ประสบความสำเร็จในฐานะศิลปินอิสระ",
          vi: "Single solo đầu tiên dưới nhãn hiệu LLOUD, 'ROCKSTAR', đã lọt vào Billboard Hot 100, đánh dấu bước khởi đầu thành công của cô với tư cách nghệ sĩ độc lập.",
          ru: "Первый сольный сингл под лейблом LLOUD «ROCKSTAR» вошел в Billboard Hot 100, ознаменовав успешное начало ее карьеры в качестве независимой артистки."
        },
        url: "#"
      },
      {
        title: {
          ko: "로제, 브루노 마스와 협업 'APT.' 전 세계 1위 석권",
          en: "Rosé Collaboration with Bruno Mars 'APT.' Takes No.1 Worldwide",
          ja: "ロゼ ブルーノ・マーズとのコラボ「APT.」で世界1位を席巻",
          zh: "罗婕与布鲁诺·马尔斯合作曲《APT.》横扫全球第一",
          es: "La colaboración de Rosé con Bruno Mars 'APT.' alcanza el No.1 en todo el mundo",
          id: "Kolaborasi Rosé dengan Bruno Mars 'APT.' Menempati Posisi No.1 di Seluruh Dunia",
          fr: "La collaboration de Rosé avec Bruno Mars 'APT.' prend la 1ère place mondiale",
          hi: "ब्रूनो मार्स के साथ रोज़े का सहयोग 'APT.' दुनिया भर में नंबर 1 पर",
          pt: "A colaboração da Rosé com o Bruno Mars 'APT.' assume o 1º lugar mundial",
          ar: "تعاون روزي مع برونو مارس في أغنية 'APT.' يتصدر المركز الأول عالمياً",
          th: "โรเซ่ร่วมงานกับ Bruno Mars ในเพลง 'APT.' ครองอันดับ 1 ทั่วโลก",
          vi: "Màn hợp tác của Rosé với Bruno Mars trong 'APT.' chiếm lĩnh vị trí số 1 toàn cầu",
          ru: "Коллаборация Розэ с Бруно Марсом «APT.» заняла первое место во всем мире"
        },
        date: "2024.10.18",
        summary: {
          ko: "로제와 브루노 마스의 협업 곡 'APT.'이 전 세계 60여 개 국 스포티파이 1위를 달성하며 2024년 최대 히트곡으로 등극했습니다.",
          en: "Rosé and Bruno Mars' 'APT.' reached #1 on Spotify in over 60 countries, becoming the biggest global hit of 2024.",
          ja: "ロゼとブルーノ・マーズのコラボ曲「APT.」が世界60カ国以上のSpotifyで1位となり、2024年最大のヒット曲となりました。",
          zh: "罗婕与布鲁诺·马尔斯的合作曲《APT.》在全球60多个国家的Spotify夺冠，成为2024年最大的热门歌曲。",
          es: "La canción 'APT.' de Rosé y Bruno Mars alcanzó el número 1 en Spotify en más de 60 países, convirtiéndose en el mayor éxito mundial de 2024.",
          id: "Lagu kolaborasi Rosé dan Bruno Mars 'APT.' mencapai peringkat 1 di Spotify di lebih dari 60 negara, menjadi hit global terbesar tahun 2024.",
          fr: "La chanson 'APT.' de Rosé et Bruno Mars a atteint la 1ère place sur Spotify dans plus de 60 pays, devenant le plus grand succès mondial de 2024.",
          hi: "रोज़े और ब्रूनो मार्स के सहयोग गीत 'APT.' ने 60 से अधिक देशों में Spotify पर नंबर 1 स्थान हासिल किया, जो 2024 का सबसे बड़ा वैश्विक हिट बन गया।",
          pt: "A música 'APT.' de Rosé e Bruno Mars alcançou o primeiro lugar no Spotify em mais de 60 países, tornando-se o maior sucesso global de 2024.",
          ar: "وصلت أغنية روزي وبرونو مارس 'APT.' إلى المركز الأول على سبوتيفاي في أكثر من 60 دولة، لتصبح أكبر نجاح عالمي لعام 2024.",
          th: "เพลง 'APT.' ของโรเซ่และ Bruno Mars ครองอันดับ 1 ใน Spotify กว่า 60 ประเทศทั่วโลก และกลายเป็นเพลงฮิตที่ยิ่งใหญ่ที่สุดแห่งปี 2024",
          vi: "Ca khúc hợp tác 'APT.' của Rosé và Bruno Mars đã đứng đầu Spotify tại hơn 60 quốc gia, trở thành bản hit toàn cầu lớn nhất năm 2024.",
          ru: "Песня Розэ и Бруно Марса «APT.» заняла первое место в Spotify в более чем 60 странах, став крупнейшим мировым хитом 2024 года."
        },
        url: "#"
      },
      {
        title: {
          ko: "제니, 솔로 2집 'Ruby'로 글로벌 아티스트 입지 공고히",
          en: "Jennie Cements Global Artist Status with Solo 2nd Album 'Ruby'",
          ja: "ジェニー ソロ2ndアルバム「Ruby」でグローバルアーティストの地位を確立",
          zh: "珍妮凭借第二张个人专辑《Ruby》稳固全球艺术家地位",
          es: "Jennie consolida su estatus de artista global con su segundo álbum 'Ruby'",
          id: "Jennie Memperkuat Status Artis Global dengan Album Solo ke-2 'Ruby'",
          fr: "Jennie consolide son statut d'artiste mondiale avec son 2ème album solo 'Ruby'",
          hi: "जेनी ने दूसरे सोलो एल्बम 'Ruby' के साथ वैश्विक कलाकार का दर्जा हासिल किया",
          pt: "Jennie consolida status de artista global com seu 2º álbum solo 'Ruby'",
          ar: "جيني ترسخ مكانتها كفنانة عالمية بألبومها المنفرد الثاني 'Ruby'",
          th: "เจนนี่ตอกย้ำสถานะศิลปินระดับโลกด้วยอัลบั้มโซโล่ชุดที่ 2 'Ruby'",
          vi: "Jennie củng cố vị thế nghệ sĩ toàn cầu với album solo thứ hai 'Ruby'",
          ru: "Дженни закрепила статус мировой артистки со вторым сольным альбомом «Ruby»"
        },
        date: "2025.02.07",
        summary: {
          ko: "제니의 두 번째 솔로 앨범 'Ruby'가 글로벌 차트를 점령하며 독립적인 팝 스타로서의 위상을 완전히 굳혔습니다.",
          en: "Jennie's second solo album 'Ruby' dominated global charts, fully cementing her status as an independent pop star.",
          ja: "ジェニーの2ndソロアルバム「Ruby」がグローバルチャートを席巻し、独立したポップスターとしての地位を完全に確立しました。",
          zh: "珍妮的第二张个人专辑《Ruby》横扫全球榜单，完全巩固了其作为独立流行歌星的地位。",
          es: "El segundo álbum de Jennie 'Ruby' dominó las listas globales, consolidando plenamente su estatus como estrella del pop independiente.",
          id: "Album solo kedua Jennie 'Ruby' mendominasi tangga lagu global, sepenuhnya memperkuat statusnya sebagai bintang pop independen.",
          fr: "Le deuxième album de Jennie 'Ruby' a dominé les classements mondiaux, consolidant pleinement son statut de pop star indépendante.",
          hi: "जेनी के दूसरे सोलो एल्बम 'Ruby' ने वैश्विक चार्ट पर कब्जा कर लिया, जिससे एक स्वतंत्र पॉप स्टार के रूप में उनकी स्थिति पूरी तरह से मजबूत हो गई।",
          pt: "O segundo álbum da Jennie, 'Ruby', dominou as paradas globais, consolidando totalmente seu status como estrela pop independente.",
          ar: "هيمن ألبوم جيني المنفرد الثاني 'Ruby' على القوائم العالمية، مما عزز مكانتها كنجمة بوب مستقلة تماماً.",
          th: "อัลบั้มโซโล่ชุดที่สอง 'Ruby' ของเจนนี่ครองชาร์ตทั่วโลก ตอกย้ำสถานะการเป็นป๊อปสตาร์เดี่ยวที่ประสบความสำเร็จอย่างเต็มตัว",
          vi: "Album solo thứ hai 'Ruby' của Jennie đã thống trị các bảng xếp hạng toàn cầu, củng cố hoàn toàn vị thế của cô như một ngôi sao nhạc pop độc lập.",
          ru: "Второй сольный альбом Дженни «Ruby» возглавил мировые чарты, полностью закрепив за ней статус независимой поп-звезды."
        },
        url: "#"
      },
      {
        title: {
          ko: "블랙핑크, 데뷔 10주년 기념 그룹 컴백 및 스페셜 프로젝트 예고",
          en: "BLACKPINK Announces Group Comeback and Special Projects for 10th Anniversary",
          ja: "BLACKPINK デビュー10周年記念カムバックとスペシャルプロジェクトを予告",
          zh: "BLACKPINK 预告出道10周年组合回归及特别项目",
          es: "BLACKPINK anuncia su regreso y proyectos especiales por su 10.º aniversario",
          id: "BLACKPINK Mengumumkan Comeback Grup dan Proyek Spesial untuk Hari Jadi ke-10",
          fr: "BLACKPINK annonce un retour et des projets spéciaux pour son 10ème anniversaire",
          hi: "ब्लैकपिंक ने 10वीं वर्षगांठ के लिए समूह वापसी और विशेष परियोजनाओं की घोषणा की",
          pt: "BLACKPINK anuncia retorno do grupo e projetos especiais para o 10º aniversário",
          ar: "بلاك بينك تعلن عن عودة المجموعة ومشاريع خاصة للذكرى العاشرة",
          th: "แบล็กพิงก์ประกาศคัมแบ็ควงและโปรเจกต์พิเศษเนื่องในโอกาสครบรอบ 10 ปี",
          vi: "BLACKPINK thông báo màn tái hợp nhóm và các dự án đặc biệt kỷ niệm 10 năm ra mắt",
          ru: "BLACKPINK анонсировали возвращение группы и спецпроекты к 10-летию"
        },
        date: "2026.01.15",
        summary: {
          ko: "블랙핑크가 데뷔 10주년을 앞두고 그룹 컴백과 각종 스페셜 프로젝트를 예고하며 팬들의 기대를 최고조로 높였습니다.",
          en: "BLACKPINK announced a group comeback and special projects ahead of their 10th debut anniversary, sending fan anticipation to an all-time high.",
          ja: "BLACKPINKがデビュー10周年を前にグループカムバックと様々なプロジェクトを予告し、ファンの期待を最高潮に高めました。",
          zh: "BLACKPINK在出道10周年到来之际，预告了组合回归和各种特别项目，将粉丝们的期待感推向了高潮。",
          es: "BLACKPINK anunció un regreso grupal y varios proyectos especiales antes de su décimo aniversario, elevando las expectativas de los fans al máximo.",
          id: "BLACKPINK mengumumkan comeback grup dan berbagai proyek spesial menjelang hari jadi ke-10 mereka, meningkatkan ekspektasi penggemar ke tingkat tertinggi.",
          fr: "BLACKPINK a annoncé un retour du groupe et divers projets spéciaux avant son 10e anniversaire, portant l'attente des fans à son paroxysme.",
          hi: "ब्लैकपिंक ने अपनी 10वीं वर्षगांठ से पहले समूह की वापसी और विभिन्न विशेष परियोजनाओं की घोषणा की, जिससे प्रशंसकों की उम्मीदें चरम पर पहुंच गईं।",
          pt: "O BLACKPINK anunciou um retorno em grupo e vários projetos especiais antes de seu 10º aniversário, elevando as expectativas dos fãs ao máximo.",
          ar: "أعلنت فرقة بلاك بينك عن عودة المجموعة ومشاريع خاصة متنوعة قبيل الذكرى العاشرة لتأسيسها، مما رفع حماس المعجبين إلى ذروته.",
          th: "แบล็กพิงก์ประกาศเตรียมคัมแบ็คและทำโปรเจกต์พิเศษมากมายเนื่องในโอกาสครบรอบ 10 ปี สร้างความตื่นเต้นให้แฟนๆ อย่างที่สุด",
          vi: "BLACKPINK đã thông báo về màn tái hợp nhóm và nhiều dự án đặc biệt trước thềm kỷ niệm 10 năm ra mắt, đẩy sự kỳ vọng của người hâm mộ lên cao nhất.",
          ru: "BLACKPINK анонсировали возвращение группы и различные спецпроекты в преддверии 10-летия дебюта, доведя ожидания фанатов до предела."
        },
        url: "#"
      }
    ],
    members: [
      {
        id: "jisoo",
        name: { ko: "지수", en: "Jisoo", ja: "ジス (Jisoo)", zh: "智秀 (Jisoo)", es: "Jisoo", id: "Jisoo", fr: "Jisoo", hi: "जिसु (Jisoo)", pt: "Jisoo", ar: "جيسو (Jisoo)", th: "จีซู", vi: "Jisoo", ru: "Джису" },
        role: { ko: "리드보컬/비주얼", en: "Lead Vocalist/Visual", ja: "リードボーカル/ビジュアル", zh: "领唱/视觉", es: "Vocalista Líder/Visual", id: "Lead Vocalist/Visual", fr: "Vocaliste Lead/Visuelle", hi: "लीड वोकलिस्ट/विजुअल", pt: "Vocalista Líder/Visual", ar: "مغنية قائدة/فيجوال", th: "นักร้องนำ/ภาพลักษณ์", vi: "Hát dẫn/Visual", ru: "Ведущий вокалист/Визуал" },
        birth: "1995.01.03", mbti: "ISTP",
        zodiac: { ko: "염소자리", en: "Capricorn", ja: "やぎ座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर राशि (Capricorn)", pt: "Capricórnio", ar: "برج الجدي", th: "ราศีมังกร", vi: "Ma Kết", ru: "Козерог" },
        height: "162cm", bloodType: "A",
        description: {
          ko: "팀의 맏언니이자 비주얼 센터. 따뜻한 리더십과 맑은 보이스를 갖췄습니다.",
          en: "The oldest and visual center of the team, known for her warm leadership and clear, pure voice.",
          ja: "グループの最年長でビジュアルセンター。温かいリーダーシップと澄んだ歌声を持っています。",
          zh: "团队的大姐和视觉中心。拥有温暖的领导力和清澈的嗓音。",
          es: "La mayor del equipo y el centro visual. Posee un liderazgo cálido y una voz clara.",
          id: "Anggota tertua dan pusat visual tim. Memiliki kepemimpinan yang hangat dan suara yang jernih.",
          fr: "La doyenne et le centre visuel du groupe. Elle possède un leadership chaleureux et une voix claire.",
          hi: "टीम की सबसे बड़ी सदस्य और विजुअल सेंटर। उनके पास गर्मजोशी भरा नेतृत्व और स्पष्ट स्वर है।",
          pt: "A mais velha e centro visual do grupo. Possui uma liderança calorosa e uma voz clara.",
          ar: "الأخت الكبرى والمركز البصري للفريق. تتمتع بقيادة دافئة وصوت نقي.",
          th: "พี่ใหญ่ของวงและเป็นภาพลักษณ์ของกลุ่ม มีความเป็นผู้นำที่อบอุ่นและมีเสียงร้องที่ใส",
          vi: "Chị cả và trung tâm hình ảnh của nhóm. Sở hữu khả năng lãnh đạo ấm áp và giọng hát trong trẻo.",
          ru: "Старшая участница и визуальный центр группы. Обладает теплым лидерством и чистым голосом."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "팀의 맏언니로 포근하고 어른스러운 분위기를 만들어주는 '팀의 엄마' 같은 존재이며, 멤버들이 힘들 때 가장 먼저 찾는 언니입니다.",
            "솔로 데뷔 싱글 'FLOWER'가 뮤직뱅크 역대 최고 점수를 경신하며 솔로 파워를 단번에 증명했습니다.",
            "JTBC 드라마 '설강화'에 주연으로 출연해 배우로서의 가능성을 보여주며 연예계 다방면에서 두각을 나타내고 있습니다.",
            "요리와 살림에 관심이 많아 직접 만든 음식을 멤버들에게 자주 나눠줘 '숙소 요리 담당'으로 불립니다.",
            "나무 그늘 같은 포근함으로 팬들 사이에서 '지수 언니라고 부르고 싶다'는 말이 절로 나온다는 이야기가 정평이 나 있습니다."
          ],
          en: [
            "As the oldest, she's the 'mother figure' who creates a warm atmosphere; the one members turn to first when things get tough.",
            "Her solo debut single 'FLOWER' broke the all-time high score on Music Bank, instantly proving her solo power.",
            "She starred in the JTBC drama 'Snowdrop', demonstrating her potential as an actress and excelling in various fields.",
            "Interested in cooking, she often shares her food with members, earning the nickname 'dorm chef'.",
            "Known for her comforting presence like a tree's shade, fans naturally feel like calling her 'Jisoo Unnie'."
          ],
          ja: [
            "最年長として温かく大人びた雰囲気を作る「グループの母親」のような存在で、メンバーが辛いときに最初に頼るお姉さんです。",
            "ソロデビューシングル「FLOWER」がミュージックバンク歴代最高スコアを更新し、ソロとしての実力を証明しました。",
            "JTBCドラマ「スノードロップ」に主演として出演し、俳優としての可能性を示しました。",
            "料理に関心があり、自分で作った料理をメンバーに分けるため「宿舎の料理担当」と呼ばれています。",
            "木陰のような温かさがあり、ファンの間で「ジスお姉さんと呼びたい」と言われるほど親しみやすいです。"
          ],
          zh: [
            "作为团队的大姐，她是像'团队妈妈'一样创造温暖成熟氛围的存在，是成员们遇到困难时最先寻找的人。",
            "个人出道单曲《FLOWER》刷新了音乐银行的历史最高分，一举证明了个人实力。",
            "主演了JTBC电视剧《雪降花》，展现了作为演员的可能性，在演艺界的各个领域脱颖而出。",
            "对烹饪很感兴趣，经常把亲手做的食物分给成员，被称为'宿舍料理担当'。",
            "因其像树荫般的温暖，粉丝们常说'自然而然就想叫她智秀姐姐'。"
          ],
          es: [
            "Como la mayor, es como la 'mamá del equipo' que crea un ambiente cálido y maduro, siendo la primera a la que acuden las integrantes cuando tienen dificultades.",
            "Su sencillo debut 'FLOWER' rompió el récord de puntuación en Music Bank, demostrando su poder como solista.",
            "Protagonizó el drama 'Snowdrop', mostrando su potencial como actriz en diversos campos.",
            "Interesada en la cocina, suele compartir su comida con las demás, siendo la 'chef del dormitorio'.",
            "Su presencia reconfortante hace que los fans sientan naturalmente el deseo de llamarla 'Jisoo Unnie'."
          ],
          id: [
            "Sebagai yang tertua, dia adalah 'ibu tim' yang menciptakan suasana hangat dan dewasa; orang pertama yang dicari anggota saat sulit.",
            "Single debut solonya 'FLOWER' memecahkan skor tertinggi sepanjang masa di Music Bank, membuktikan kekuatannya sebagai solois.",
            "Dia membintangi drama JTBC 'Snowdrop', menunjukkan potensinya sebagai aktris di berbagai bidang.",
            "Tertarik pada memasak, dia sering berbagi makanan dengan anggota, mendapat julukan 'koki asrama'.",
            "Dikenal karena kehadirannya yang menenangkan seperti naungan pohon, penggemar secara alami merasa ingin memanggilnya 'Jisoo Unnie'."
          ],
          fr: [
            "En tant que doyenne, elle est la 'maman du groupe' qui crée une atmosphère chaleureuse ; celle vers qui les membres se tournent en premier.",
            "Son premier single solo 'FLOWER' a battu le record de score sur Music Bank, prouvant instantanément sa force en solo.",
            "Elle a tenu le rôle principal dans le drame JTBC 'Snowdrop', démontrant son potentiel en tant qu'actrice.",
            "Passionnée de cuisine, elle partage souvent ses plats avec les membres, ce qui lui vaut le surnom de 'chef du dortoir'.",
            "Connue pour sa présence réconfortante, les fans ressentent naturellement l'envie de l'appeler 'Jisoo Unnie'."
          ],
          hi: [
            "सबसे बड़ी होने के नाते, वे 'टीम की मां' की तरह हैं जो एक गर्मजोशी भरा माहौल बनाती हैं; मुसीबत में सदस्य सबसे पहले उन्हीं के पास जाते हैं।",
            "उनके सोलो डेब्यू सिंगल 'FLOWER' ने म्यूजिक बैंक में अब तक का सबसे अधिक स्कोर बनाया, जिससे उनकी सोलो पावर साबित हुई।",
            "उन्होंने JTBC ड्रामा 'Snowdrop' में अभिनय किया, जिससे एक अभिनेत्री के रूप में उनकी क्षमता का पता चला।",
            "खाना पकाने में रुचि होने के कारण, वे अक्सर सदस्यों के साथ अपना भोजन साझा करती हैं, जिससे उन्हें 'डॉर्म शेफ' उपनाम मिला।",
            "प्रशंसक उनकी उपस्थिति को पेड़ की छाया की तरह आरामदायक बताते हैं और उन्हें 'जिसु उन्नी' कहना पसंद करते हैं।"
          ],
          pt: [
            "Como a mais velha, ela é a 'mãe do grupo' que cria um ambiente acolhedor; a primeira a quem as integrantes recorrem em tempos difíceis.",
            "Seu single de estreia solo 'FLOWER' quebrou o recorde de pontuação no Music Bank, provando seu poder solo.",
            "Ela estrelou o drama da JTBC 'Snowdrop', demonstrando seu potencial como atriz em diversos campos.",
            "Interessada em culinária, ela costuma compartilhar sua comida com as integrantes, sendo a 'chef do dormitório'.",
            "Conhecida por sua presença reconfortante, os fãs sentem naturalmente o desejo de chamá-la de 'Jisoo Unnie'."
          ],
          ar: [
            "بصفتها الأخت الكبرى، فهي بمثابة 'أم الفريق' التي تخلق أجواءً دافئة؛ وهي أول من يلجأ إليه العضوات عند الصعوبات.",
            "حطمت أغنيتها المنفردة الأولى 'FLOWER' الرقم القياسي لأعلى نتيجة في ميوزيك بانك، مما أثبت قوتها كفنانة منفردة.",
            "لعبت دور البطولة في دراما 'Snowdrop'، مما أظهر إمكاناتها كممثلة في مختلف المجالات.",
            "مهتمة بالطبخ، وغالباً ما تشارك طعامها مع العضوات، مما أكسبها لقب 'طباخة السكن'.",
            "تشتهر بحضورها المريح كظل الشجرة، ويشعر المعجبون برغبة طبيعية في مناداتها بـ 'جيسو أوني'."
          ],
          th: [
            "ในฐานะพี่ใหญ่ เธอเปรียบเสมือน 'แม่ของวง' ที่สร้างบรรยากาศที่อบอุ่น เป็นคนที่สมาชิกจะนึกถึงเป็นคนแรกเมื่อมีปัญหา",
            "ซิงเกิลเดบิวต์โซโล่ 'FLOWER' ทำลายสถิติคะแนนสูงสุดใน Music Bank พิสูจน์พลังในฐานะศิลปินเดี่ยวทันที",
            "เธอรับบทนำในซีรีส์ 'Snowdrop' แสดงให้เห็นถึงศักยภาพในฐานะนักแสดงและโดดเด่นในหลายด้าน",
            "เธอสนใจการทำอาหารและมักจะแบ่งปันอาหารที่ทำเองให้สมาชิกทาน จนได้รับฉายาว่า 'เชฟประจำหอพัก'",
            "แฟนๆ ต่างสัมผัสได้ถึงความอบอุ่นของเธอและมักจะเรียกเธอว่า 'พี่จีซู' (Jisoo Unnie) ด้วยความสนิทใจ"
          ],
          vi: [
            "Với tư cách là chị cả, cô là 'người mẹ của nhóm', người tạo ra bầu không khí ấm áp; là người đầu tiên các thành viên tìm đến khi gặp khó khăn.",
            "Single ra mắt solo 'FLOWER' đã phá kỷ lục điểm số cao nhất trên Music Bank, chứng minh sức mạnh solo ngay lập tức.",
            "Cô đóng chính trong bộ phim truyền hình 'Snowdrop', thể hiện tiềm năng diễn xuất và tỏa sáng trong nhiều lĩnh vực.",
            "Quan tâm đến nấu ăn, cô thường chia sẻ đồ ăn mình làm với các thành viên, được gọi là 'đầu bếp của ký túc xá'.",
            "Được biết đến với sự hiện diện ấm áp, người hâm mộ thường tự nhiên muốn gọi cô là 'Chị Jisoo' (Jisoo Unnie)."
          ],
          ru: [
            "Как самая старшая, она является «мамой группы», создающей теплую атмосферу; та, к кому участницы обращаются в первую очередь.",
            "Ее сольный дебютный сингл «FLOWER» побил исторический рекорд по баллам на Music Bank, доказав ее сольную силу.",
            "Она снялась в главной роли в дораме «Подснежник», продемонстрировав актерский потенциал в различных областях.",
            "Интересуется кулинарией и часто угощает участниц, за что получила прозвище «шеф-повар общежития».",
            "Известна своим успокаивающим присутствием, и фанаты естественным образом называют ее «онни Джису»."
          ]
        },
        socials: { instagram: "https://www.instagram.com/sooyaaa__/" }
      },
      {
        id: "jennie",
        name: { ko: "제니", en: "Jennie", ja: "ジェニー (Jennie)", zh: "珍妮 (Jennie)", es: "Jennie", id: "Jennie", fr: "Jennie", hi: "जेनी (Jennie)", pt: "Jennie", ar: "جيني (Jennie)", th: "เจนนี่", vi: "Jennie", ru: "Дженни" },
        role: { ko: "메인래퍼/리드보컬", en: "Main Rapper/Lead Vocalist", ja: "メインラッパー/リードボーカル", zh: "主说唱/领唱", es: "Rapera Principal/Vocalista Líder", id: "Main Rapper/Lead Vocalist", fr: "Rappeuse Principale/Vocaliste Lead", hi: "मेन रैपर/लीड वोकलिस्ट", pt: "Rapper Principal/Vocalista Líder", ar: "مغنية راب رئيسية/مغنية قائدة", th: "แร็ปเปอร์หลัก/นักร้องนำ", vi: "Rapper chính/Hát dẫn", ru: "Главный рэпер/Ведущий вокалист" },
        birth: "1996.01.16", mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn", ja: "やぎ座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर राशि (Capricorn)", pt: "Capricórnio", ar: "برج الجدي", th: "ราศีมังกร", vi: "Ma Kết", ru: "Козерог" },
        height: "163cm", bloodType: "B",
        description: {
          ko: "독보적인 아우라와 카리스마로 무대를 장악하는 팀의 메인 래퍼입니다.",
          en: "The main rapper who commands the stage with an unmatched aura and charisma.",
          ja: "圧倒的なオーラとカリスマ性でステージを支配するメインラッパーです。",
          zh: "以独特的体彩和魅力掌控舞台的团队主说唱。",
          es: "La rapera principal que domina el escenario con un aura y carisma inigualables.",
          id: "Rapper utama yang menguasai panggung dengan aura dan karisma yang tak tertandingi.",
          fr: "La rappeuse principale qui domine la scène avec une aura et un charisme inégalés.",
          hi: "मेन रैपर जो बेजोड़ आभा और करिश्मा के साथ मंच पर राज करती है।",
          pt: "A rapper principal que domina o palco com uma aura e carisma inigualáveis.",
          ar: "مغنية الراب الرئيسية التي تسيطر على المسرح بهالة وكاريزما لا مثيل لها.",
          th: "แร็ปเปอร์หลักผู้ครองเวทีด้วยออร่าและเสน่ห์ที่ไม่มีใครเทียบได้",
          vi: "Rapper chính, người làm chủ sân khấu với thần thái và sức hút vô song.",
          ru: "Главный рэпер, который господствует на сцене благодаря непревзойденной ауре и харизме."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "뉴질랜드 유학 경험이 있어 유창한 영어 실력을 갖추고 있으며, 블랙핑크의 영어 인터뷰를 사실상 주도합니다.",
            "샤넬·나이키 등 최정상 글로벌 브랜드의 앰버서더로 활동하며 'K-팝계의 패션 아이콘'으로 완전히 자리매김했습니다.",
            "고양이 두 마리를 키우는 '집사'이며 SNS에 고양이 사진을 올릴 때마다 팬들의 폭발적인 반응을 이끌어냅니다.",
            "솔로 데뷔 'SOLO' 뮤직비디오가 공개 24시간 만에 유튜브 1억 뷰를 돌파하는 기록을 세웠습니다.",
            "2025년 솔로 2집 'Ruby'로 독립적인 팝 스타로서의 입지를 완전히 굳히며 글로벌 아티스트로 재탄생했습니다."
          ],
          en: [
            "Her experience studying in New Zealand gave her fluent English, making her the leader in English interviews.",
            "Active as an ambassador for top global brands like Chanel, she's firmly established as K-pop's fashion icon.",
            "A 'cat parent' to two cats, her cat photos on SNS always elicit explosive reactions from fans.",
            "Her solo debut 'SOLO' music video surpassed 100 million YouTube views in just 24 hours.",
            "Her 2025 solo album 'Ruby' fully established her status as an independent global pop star."
          ],
          ja: [
            "ニュージーランドへの留学経験があり、流暢な英語を話し、インタビューなどで中心的な役割を果たします。",
            "シャネルなどのグローバルブランドのアンバサダーとして活動し、「ファッションアイコン」として知られています。",
            "2匹の猫を飼っており、SNSに猫の写真をアップするたびにファンから大きな反響があります。",
            "ソロデビュー曲「SOLO」のMVは、公開24時間でYouTube1億回再生を突破する記録を立てました。",
            "2025年のソロアルバム「Ruby」で、独立したポップスターとしての地位を確固たるものにしました。"
          ],
          zh: [
            "由于有新西兰留学经历，英语非常流利，实际上主导了组合的英语采访。",
            "担任香奈儿等顶级全球品牌的品牌大使，完全确立了'K-pop时尚偶像'的地位。",
            "是养了两只猫的'铲屎官'，每次在社交媒体上发布猫的照片都会引起粉丝的热烈反响。",
            "个人出道曲《SOLO》音乐视频在公开24小时内就创下了YouTube播放量突破1亿次的纪录。",
            "2025年凭借第二张个人专辑《Ruby》，完全巩固了作为独立流行明星的地位。"
          ],
          es: [
            "Su experiencia estudiando en Nueva Zelanda le dio fluidez en inglés, liderando las entrevistas en ese idioma.",
            "Como embajadora de marcas globales como Chanel, se ha consolidado como el ícono de la moda del K-pop.",
            "Es dueña de dos gatos y sus fotos con ellos en redes sociales siempre generan una gran reacción de los fans.",
            "El video musical de su debut 'SOLO' superó los 100 millones de vistas en YouTube en solo 24 horas.",
            "Con su álbum 'Ruby' en 2025, se consolidó como una estrella del pop independiente a nivel mundial."
          ],
          id: [
            "Pengalamannya sekolah di Selandia Baru membuatnya fasih berbahasa Inggris, memimpin wawancara bahasa Inggris grup.",
            "Aktif sebagai duta merek global seperti Chanel, dia memantapkan dirinya sebagai ikon mode K-pop.",
            "Pemilik dua kucing, foto kucingnya di media sosial selalu mendapat reaksi luar biasa dari penggemar.",
            "Video musik debut solonya 'SOLO' melampaui 100 juta penayangan YouTube dalam waktu 24 jam.",
            "Album solo 'Ruby' tahun 2025 memantapkan posisinya sebagai bintang pop global yang independen."
          ],
          fr: [
            "Son expérience d'études en Nouvelle-Zélande lui a permis de parler couramment anglais, menant les interviews du groupe.",
            "Ambassadrice de grandes marques comme Chanel, elle est reconnue comme l'icône de la mode de la K-pop.",
            "Propriétaire de deux chats, ses photos avec eux sur les réseaux sociaux déclenchent toujours des réactions massives.",
            "Le clip de son premier solo 'SOLO' a dépassé les 100 millions de vues sur YouTube en seulement 24 heures.",
            "Son album solo 'Ruby' en 2025 a pleinement établi son statut de pop star mondiale indépendante."
          ],
          hi: [
            "न्यूजीलैंड में पढ़ाई के अनुभव के कारण वे धाराप्रवाह अंग्रेजी बोलती हैं और समूह के अंग्रेजी साक्षात्कारों का नेतृत्व करती हैं।",
            "चैनल जैसे शीर्ष वैश्विक ब्रांडों की एंबेसडर के रूप में, वे के-पॉप की फैशन आइकन के रूप में स्थापित हैं।",
            "दो बिल्लियों की मालकिन, सोशल मीडिया पर उनकी बिल्लियों की तस्वीरें हमेशा प्रशंसकों की जबरदस्त प्रतिक्रियाएँ लाती हैं।",
            "उनके सोलो डेब्यू 'SOLO' म्यूजिक वीडियो ने मात्र 24 घंटों में YouTube पर 100 मिलियन व्यूज पार कर लिए थे।",
            "उनके 2025 के सोलो एल्बम 'Ruby' ने उन्हें एक स्वतंत्र वैश्विक पॉप स्टार के रूप में पूरी तरह स्थापित कर दिया।"
          ],
          pt: [
            "Sua experiência de estudos na Nova Zelândia lhe deu fluência em inglês, liderando as entrevistas do grupo no idioma.",
            "Como embaixadora de marcas globais como Chanel, ela se consolidou como o ícone da moda do K-pop.",
            "Dona de dois gatos, suas fotos com eles nas redes sociais sempre geram reações explosivas dos fãs.",
            "O videoclipe de sua estreia solo 'SOLO' superou 100 milhões de visualizações no YouTube em apenas 24 horas.",
            "Seu álbum solo 'Ruby' em 2025 consolidou seu status como uma estrela pop global independente."
          ],
          ar: [
            "منحتها تجربتها في الدراسة في نيوزيلندا طلاقة في اللغة الإنجليزية، مما جعلها تقود المقابلات باللغة الإنجليزية.",
            "بصفتها سفيرة لعلامات تجارية عالمية مثل شانيل، أثبتت نفسها كأيقونة للموضة في الكي-بوب.",
            "تملك قطتين، ودائماً ما تثير صور قططها على وسائل التواصل الاجتماعي تفاعلاً هائلاً من المعجبين.",
            "تجاوز فيديو كليب أغنيتها المنفردة الأولى 'SOLO' حاجز 100 مليون مشاهدة على يوتيوب في 24 ساعة فقط.",
            "رسخ ألبومها المنفرد 'Ruby' في عام 2025 مكانتها كنجمة بوب عالمية مستقلة."
          ],
          th: [
            "ประสบการณ์การเรียนที่นิวซีแลนด์ทำให้เธอพูดภาษาอังกฤษได้คล่องแคล่วและเป็นผู้นำในการสัมภาษณ์ภาษาอังกฤษของวง",
            "ในฐานะแอมบาสเดอร์ของแบรนด์ระดับโลกอย่าง Chanel เธอได้สร้างชื่อเสียงในฐานะไอคอนแฟชั่นแห่งวงการ K-pop",
            "เธอเลี้ยงแมวสองตัว และทุกครั้งที่โพสต์รูปแมวลงโซเชียลจะได้รับกระแสตอบรับอย่างล้นหลามจากแฟนๆ",
            "มิวสิกวิดีโอเดบิวต์โซโล่ 'SOLO' มียอดวิวทะลุ 100 ล้านครั้งบน YouTube ภายในเวลาเพียง 24 ชั่วโมง",
            "อัลบั้มโซโล่ 'Ruby' ในปี 2025 ช่วยตอกย้ำสถานะของเธอในฐานะป๊อปสตาร์ระดับโลกที่เป็นอิสระอย่างเต็มตัว"
          ],
          vi: [
            "Kinh nghiệm du học tại New Zealand giúp cô có khả năng tiếng Anh lưu loát, dẫn dắt các cuộc phỏng vấn tiếng Anh của nhóm.",
            "Là đại sứ cho các thương hiệu hàng đầu như Chanel, cô đã khẳng định mình là biểu tượng thời trang của K-pop.",
            "Là người nuôi hai chú mèo, những bức ảnh mèo của cô trên mạng xã hội luôn thu hút phản ứng bùng nổ từ người hâm mộ.",
            "Video âm nhạc ra mắt solo 'SOLO' đã vượt qua 100 mil lượt xem trên YouTube chỉ trong vòng 24 giờ.",
            "Album solo 'Ruby' năm 2025 đã củng cố hoàn toàn vị thế của cô như một ngôi sao nhạc pop toàn cầu độc lập."
          ],
          ru: [
            "Опыт учебы в Новой Зеландии дал ей свободный английский, что сделало ее лидером в англоязычных интервью.",
            "Будучи амбассадором Chanel, она прочно зарекомендовала себя как икона моды в K-pop.",
            "Владелица двух кошек, ее фото с питомцами в соцсетях всегда вызывают восторженную реакцию фанатов.",
            "Клип на ее сольный дебют «SOLO» набрал более 100 миллионов просмотров на YouTube всего за 24 часа.",
            "Ее сольный альбом «Ruby» 2025 года полностью закрепил за ней статус независимой мировой поп-звезды."
          ]
        },
        socials: { instagram: "https://www.instagram.com/jennierubyjane/" }
      },
      {
        id: "lisa",
        name: { ko: "리사", en: "Lisa", ja: "リサ (Lisa)", zh: "丽莎 (Lisa)", es: "Lisa", id: "Lisa", fr: "Lisa", hi: "लिसा (Lisa)", pt: "Lisa", ar: "ليسا (Lisa)", th: "ลิซ่า", vi: "Lisa", ru: "Лиза" },
        role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper", ja: "メインダンサー/リードラッパー", zh: "主舞/领说唱", es: "Bailarina Principal/Rapera Líder", id: "Main Dancer/Lead Rapper", fr: "Danseuse Principale/Rappeuse Lead", hi: "मेन डांसर/लीड रैपर", pt: "Dançarina Principal/Rapper Líder", ar: "راقصة رئيسية/مغنية راب قائدة", th: "นักเต้นหลัก/แร็ปเปอร์นำ", vi: "Vũ công chính/Rapper dẫn", ru: "Главный танцор/Ведущий рэпер" },
        birth: "1997.03.27", mbti: "ESFJ",
        zodiac: { ko: "양자리", en: "Aries", ja: "おひつじ座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष राशि (Aries)", pt: "Áries", ar: "برج الحمل", th: "ราศีเมษ", vi: "Bạch Dương", ru: "Овен" },
        height: "167cm", bloodType: "O",
        description: {
          ko: "압도적인 춤 실력과 글로벌 팬층을 보유한 팀의 메인 댄서입니다.",
          en: "The main dancer with overwhelming dance skills and a massive global fanbase.",
          ja: "圧倒的なダンススキルとグローバルなファン層を持つメインダンサーです。",
          zh: "拥有压倒性的舞蹈实力和全球粉丝群的团队主舞。",
          es: "La bailarina principal con habilidades de baile abrumadoras y una base de fans global masiva.",
          id: "Penari utama dengan kemampuan menari yang luar biasa dan basis penggemar global yang besar.",
          fr: "La danseuse principale dotée de talents de danse exceptionnels et d'une immense base de fans mondiale.",
          hi: "जबरदस्त नृत्य कौशल और विशाल वैश्विक प्रशंसक आधार वाली मुख्य डांसर।",
          pt: "A dançarina principal com habilidades de dança impressionantes e uma base de fãs global massiva.",
          ar: "الراقصة الرئيسية بمهارات رقص ساحقة وقاعدة جماهيرية عالمية ضخمة.",
          th: "นักเต้นหลักที่มีทักษะการเต้นอันยอดเยี่ยมและมีฐานแฟนคลับทั่วโลกจำนวนมาก",
          vi: "Vũ công chính với kỹ năng nhảy ấn tượng và lượng người hâm mộ toàn cầu đông đảo.",
          ru: "Главный танцор с потрясающими танцевальными навыками и огромной мировой фан-базой."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "태국 출신으로 본명은 Pranpriya Manobal이며, '리사'라는 이름은 스스로 선택한 것입니다.",
            "인스타그램 팔로워 1억 명을 돌파한 최초의 K-팝 아이돌 기록을 보유하고 있습니다.",
            "솔로 데뷔 앨범 'LALISA' 타이틀곡이 유튜브 공개 24시간 만에 7천만 뷰를 기록했습니다.",
            "YG와의 개인 계약 종료 후 자신의 레이블 'LLOUD'를 설립, 솔로 싱글 'ROCKSTAR'로 빌보드 핫 100에 진입했습니다.",
            "어릴 때부터 태국 댄스 아카데미에서 전문 훈련을 받아 온 '천재 댄서'로, K-팝 역대 최고 댄서 중 한 명으로 꼽힙니다."
          ],
          en: [
            "Originally from Thailand, her real name is Pranpriya Manobal; she chose the name 'Lisa' herself.",
            "She holds the record as the first K-pop idol to surpass 100 million Instagram followers.",
            "Her solo debut title track 'LALISA' recorded 70 million views on YouTube within 24 hours of release.",
            "After ending her individual contract with YG, she founded her label 'LLOUD' and entered the Billboard Hot 100 with 'ROCKSTAR'.",
            "Trained professionally in Thailand since childhood, she is considered one of the greatest dancers in K-pop history."
          ],
          ja: [
            "タイ出身で本名はプランプリヤ・マノバン。「リサ」という名前は自分で選んだものです。",
            "Instagramのフォロワー数が1億人を突破した最初のK-POPアイドルの記録を持っています。",
            "ソロデビュー曲「LALISA」は、公開24時間でYouTube7000万回再生を記録しました。",
            "YGとの個人契約終了後、自身のレーベル「LLOUD」を設立し、「ROCKSTAR」でビルボードHot 100に入りました。",
            "幼い頃からタイで専門的なトレーニングを受けてきた「天才ダンサー」として知られています。"
          ],
          zh: [
            "来自泰国，原名是Pranpriya Manobal，'丽莎'这个名字是她自己选择的。",
            "保持着首位Instagram粉丝突破1亿的K-pop偶像纪录。",
            "个人出道专辑《LALISA》的主打歌在YouTube公开24小时内就创下了7000万次的播放量。",
            "与YG个人合约结束后成立了自己的厂牌'LLOUD'，凭借个人单曲《ROCKSTAR》进入公告牌百强单曲榜。",
            "从小就在泰国舞蹈学院接受专业训练，被认为是韩国流行音乐史上最伟大的舞者之一。"
          ],
          es: [
            "Originaria de Tailandia, su nombre real es Pranpriya Manobal; ella misma eligió el nombre 'Lisa'.",
            "Tiene el récord de ser la primera ídolo de K-pop en superar los 100 millones de seguidores en Instagram.",
            "Su tema debut 'LALISA' registró 70 millones de vistas en YouTube en las primeras 24 horas.",
            "Tras terminar su contrato individual con YG, fundó su sello 'LLOUD' y entró al Billboard Hot 100 con 'ROCKSTAR'.",
            "Entrenada profesionalmente en Tailandia desde niña, es considerada una de las mejores bailarinas de la historia del K-pop."
          ],
          id: [
            "Berasal dari Thailand, nama aslinya adalah Pranpriya Manobal; dia memilih sendiri nama 'Lisa'.",
            "Dia memegang rekor sebagai idola K-pop pertama yang melampaui 100 juta pengikut di Instagram.",
            "Lagu utama debut solonya 'LALISA' mencatat 70 juta penayangan di YouTube dalam waktu 24 jam.",
            "Setelah kontrak individu dengan YG berakhir, dia mendirikan labelnya 'LLOUD' dan masuk Billboard Hot 100 dengan 'ROCKSTAR'.",
            "Terlatih secara profesional di Thailand sejak kecil, dia dianggap sebagai salah satu penari terbaik dalam sejarah K-pop."
          ],
          fr: [
            "Originaire de Thaïlande, son vrai nom est Pranpriya Manobal ; elle a choisi elle-même le nom 'Lisa'.",
            "Elle détient le record de la première idole K-pop à dépasser les 100 millions d'abonnés sur Instagram.",
            "Son titre solo 'LALISA' a enregistré 70 millions de vues sur YouTube en 24 heures.",
            "Après la fin de son contrat individuel avec YG, elle a fondé son label 'LLOUD' et est entrée au Billboard Hot 100 avec 'ROCKSTAR'.",
            "Formée professionnellement en Thaïlande dès son plus jeune âge, elle est considérée comme l'une des meilleures danseuses de l'histoire de la K-pop."
          ],
          hi: [
            "मूल रूप से थाईलैंड की रहने वाली, उनका असली नाम प्राणप्रिया मनोबल है; उन्होंने 'लिसा' नाम खुद चुना था।",
            "उनके पास 100 मिलियन इंस्टाग्राम फॉलोअर्स पार करने वाली पहली के-पॉप आइडल होने का रिकॉर्ड है।",
            "उनके सोलो डेब्यू टाइटल ट्रैक 'LALISA' ने रिलीज़ के 24 घंटों के भीतर YouTube पर 70 मिलियन व्यूज दर्ज किए।",
            "YG के साथ अनुबंध समाप्त होने के बाद, उन्होंने अपना लेबल 'LLOUD' स्थापित किया और 'ROCKSTAR' के साथ बिलबोर्ड हॉट 100 में प्रवेश किया।",
            "बचपन से ही थाईलैंड में पेशेवर रूप से प्रशिक्षित, उन्हें के-पॉप इतिहास की सबसे महान डांसरों में से एक माना जाता है।"
          ],
          pt: [
            "Originária da Tailândia, seu nome real é Pranpriya Manobal; ela mesma escolheu o nome 'Lisa'.",
            "Ela detém o recorde de primeira ídolo de K-pop a superar 100 milhões de seguidores no Instagram.",
            "Sua faixa de estreia solo 'LALISA' registrou 70 milhões de visualizações no YouTube em 24 horas.",
            "Após o fim de seu contrato individual com a YG, ela fundou seu selo 'LLOUD' e entrou na Billboard Hot 100 com 'ROCKSTAR'.",
            "Treinada profissionalmente na Tailândia desde a infância, ela é considerada uma das maiores dançarinas da história do K-pop."
          ],
          ar: [
            "في الأصل من تايلاند، اسمها الحقيقي برانبريا مانوبال؛ وقد اختارت اسم 'ليسا' بنفسها.",
            "تحمل الرقم القياسي كأول آيدول في الكي-بوب يتجاوز 100 مليون متابع على إنستغرام.",
            "حققت أغنيتها المنفردة الأولى 'LALISA' حوالي 70 مليون مشاهدة على يوتيوب خلال 24 ساعة من إصدارها.",
            "بعد انتهاء عقدها الفردي مع YG، أسست شركتها الخاصة 'LLOUD' ودخلت قائمة بيلبورد هوت 100 بأغنية 'ROCKSTAR'.",
            "تدربت باحتراف في تايلاند منذ طفولتها، وتعتبر واحدة من أعظم الراقصات في تاريخ الكي-بوب."
          ],
          th: [
            "เดิมทีมาจากประเทศไทย ชื่อจริงของเธอคือ ปราณปรียา มโนบาล โดยเธอเป็นคนเลือกชื่อ 'ลิซ่า' ด้วยตัวเอง",
            "เธอครองสถิติเป็นไอดอล K-pop คนแรกที่มียอดผู้ติดตามบน Instagram ทะลุ 100 ล้านคน",
            "เพลงเดบิวต์โซโล่ 'LALISA' มียอดวิวบน YouTube ถึง 70 ล้านครั้งภายใน 24 ชั่วโมงแรกที่ปล่อยออกมา",
            "หลังจากสิ้นสุดสัญญารายบุคคลกับ YG เธอได้ก่อตั้งค่ายเพลงของตัวเองชื่อ 'LLOUD' และพาเพลง 'ROCKSTAR' เข้าสู่ Billboard Hot 100",
            "เธอได้รับการฝึกฝนด้านการเต้นอย่างมืออาชีพที่ประเทศไทยตั้งแต่เด็ก และได้รับการยอมรับว่าเป็นหนึ่งในนักเต้นที่เก่งที่สุดในประวัติศาสตร์ K-pop"
          ],
          vi: [
            "Đến từ Thái Lan, tên thật của cô là Pranpriya Manobal; cô đã tự mình chọn nghệ danh 'Lisa'.",
            "Cô giữ kỷ lục là thần tượng K-pop đầu tiên vượt qua 100 triệu người theo dõi trên Instagram.",
            "Ca khúc ra mắt solo 'LALISA' đã ghi nhận 70 triệu lượt xem trên YouTube trong vòng 24 giờ sau khi phát hành.",
            "Sau khi kết thúc hợp đồng cá nhân với YG, cô thành lập nhãn hiệu riêng 'LLOUD' và lọt vào Billboard Hot 100 với 'ROCKSTAR'.",
            "Được đào tạo chuyên nghiệp tại Thái Lan từ nhỏ, cô được coi là một trong những vũ công vĩ đại nhất trong lịch sử K-pop."
          ],
          ru: [
            "Родом из Таиланда, ее настоящее имя — Пранприя Манобан; она сама выбрала имя «Лиза».",
            "Она является первым K-pop айдолом, число подписчиков которого в Instagram превысило 100 миллионов.",
            "Ее сольный дебютный трек «LALISA» набрал 70 миллионов просмотров на YouTube за первые 24 часа.",
            "После окончания личного контракта с YG она основала свой лейбл LLOUD и вошла в Billboard Hot 100 с песней «ROCKSTAR».",
            "Профессионально тренировалась в Таиланде с детства и считается одной из величайших танцовщиц в истории K-pop."
          ]
        },
        socials: { instagram: "https://www.instagram.com/lalalalisa_m/" }
      },
      {
        id: "rose",
        name: { ko: "로제", en: "Rosé", ja: "ロゼ (Rosé)", zh: "朴彩英 (Rosé)", es: "Rosé", id: "Rosé", fr: "Rosé", hi: "रोज़े (Rosé)", pt: "Rosé", ar: "روزي (Rosé)", th: "โรเซ่", vi: "Rosé", ru: "Розэ" },
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarina Líder", id: "Vokalis Utama/Penari Utama", fr: "Vocaliste Principale/Danseuse Leader", hi: "मेन वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarina Líder", ar: "مغنية رئيسية/راقصة قائدة", th: "นักร้องหลัก/นักเต้นนำ", vi: "Giọng ca chính/Vũ công dẫn đầu", ru: "Главный вокалист/Ведущий танцор" },
        birth: "1997.02.11", mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ राशि (Aquarius)", pt: "Aquário", ar: "برج الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        height: "168cm", bloodType: "B",
        description: {
          ko: "유니크하고 감성적인 음색을 가진 메인 보컬이자 글로벌 팝 스타입니다.",
          en: "The main vocalist with a uniquely emotional voice and a global pop star in her own right.",
          ja: "ユニークで感性的な歌声を持つメインボーカルであり、グローバルポップスターです。",
          zh: "拥有独特且感性音色的主唱，也是全球流行明星。",
          es: "La vocalista principal con una voz única y emotiva, y una estrella del pop mundial por derecho propio.",
          id: "Vokalis utama dengan suara emosional yang unik dan bintang pop global.",
          fr: "La chanteuse principale dotée d'une voix unique et émouvante, et une pop star mondiale à part entière.",
          hi: "अद्वितीय और भावपूर्ण आवाज़ वाली मुख्य गायिका और अपने आप में एक वैश्विक पॉप स्टार।",
          pt: "A vocalista principal com uma voz única e emotiva, e uma estrela pop global por direito próprio.",
          ar: "المغنية الرئيسية بصوت عاطفي فريد ونجمة بوب عالمية في حد ذاتها.",
          th: "นักร้องหลักที่มีน้ำเสียงที่เป็นเอกลักษณ์และเต็มไปด้วยอารมณ์ และเป็นป๊อปสตาร์ระดับโลก",
          vi: "Giọng ca chính với âm sắc độc đáo và đầy cảm xúc, đồng thời là một ngôi sao nhạc pop toàn cầu.",
          ru: "Главная вокалистка с уникальным эмоциональным голосом и мировая поп-звезда."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Rosé+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "뉴질랜드 출신 한국계 호주인으로 영어와 한국어 모두 모국어 수준이며, 섬세한 감성의 영어 가사를 직접 쓰기도 합니다.",
            "기타 연주 능력이 수준급으로, 직접 기타를 치며 노래하는 어쿠스틱 라이브 무대로 팬들에게 큰 감동을 줍니다.",
            "솔로 데뷔 'On the Ground' 당시 발표한 영어 가사에 담긴 진솔한 이야기가 전 세계 팬들의 깊은 공감을 얻었습니다.",
            "2024년 브루노 마스와 협업한 'APT.'이 전 세계 60여 개국 스포티파이 1위를 달성하며 진정한 글로벌 팝 스타로 재탄생했습니다.",
            "식물 키우기를 즐기며 숙소에 작은 정원을 만들어 멤버들에게 '로제 식물 카페'라고 불린다는 이야기가 팬들 사이에서 유명합니다."
          ],
          en: [
            "A Korean-Australian raised in New Zealand, she's native in both languages and writes her own emotional English lyrics.",
            "An expert at the guitar, her acoustic live performances where she sings while playing guitar are deeply moving for fans.",
            "The sincere story in the English lyrics of her solo debut 'On the Ground' resonated deeply with fans worldwide.",
            "Her 2024 collaboration with Bruno Mars, 'APT.', reached #1 on Spotify in over 60 countries.",
            "She loves plants and created a small garden in the dorm, which members call 'Rosé's Plant Café'."
          ],
          ja: [
            "ニュージーランド出身の韓国系オーストラリア人で、英語と韓国語の両方が堪能です。",
            "ギターの腕前が一流で、弾き語りのアコースティックライブはファンに大きな感動を与えます。",
            "ソロデビュー曲「On the Ground」の英語の歌詞に込められた真実の物語が、世界中のファンの共感を呼びました。",
            "2024年にブルーノ・マーズとコラボした「APT.」は、世界60カ国以上のSpotifyで1位を記録しました。",
            "植物を育てるのが好きで、宿舎に小さな庭を作っており、メンバーから「ロゼの植物カフェ」と呼ばれています。"
          ],
          zh: [
            "出生于新西兰的韩裔澳大利亚人，英语和韩语都是母语水平，还会亲自创作感性的英文歌词。",
            "吉他演奏水平极高，自弹自唱的现场演出给粉丝们带来了极大的感动。",
            "个人出道曲《On the Ground》中的英文歌词包含了真诚的故事，引起了全球粉丝的深度共鸣。",
            "2024年与布鲁诺·马尔斯合作的《APT.》在全求60多个国家的Spotify夺冠，再次证明了其全球影响力。",
            "喜欢养植物，在宿舍里布置了一个小花园，被成员们称为'彩英植物咖啡馆'。"
          ],
          es: [
            "Coreana-australiana criada en Nueva Zelanda, domina el inglés y el coreano, y escribe sus propias letras en inglés.",
            "Es experta en la guitarra; sus presentaciones acústicas en vivo donde canta y toca emocionan profundamente a los fans.",
            "La historia sincera en las letras de su debut solitario 'On the Ground' resonó en todo el mundo.",
            "Su colaboración 'APT.' con Bruno Mars en 2024 alcanzó el número 1 en Spotify en más de 60 países.",
            "Le encantan las plantas y creó un pequeño jardín en el dormitorio, al que las integrantes llaman 'el café de plantas de Rosé'."
          ],
          id: [
            "Korea-Australia yang dibesarkan di Selandia Baru, fasih dalam kedua bahasa dan menulis lirik bahasa Inggrisnya sendiri.",
            "Seorang ahli gitar, penampilan live akustiknya sambil bermain gitar sangat menyentuh hati penggemar.",
            "Kisah tulus dalam lirik bahasa Inggris dari debut solonya 'On the Ground' sangat berkesan bagi penggemar di seluruh dunia.",
            "Kolaborasinya dengan Bruno Mars pada 2024, 'APT.', mencapai peringkat 1 di Spotify di lebih dari 60 negara.",
            "Dia menyukai tanaman dan membuat taman kecil di asrama, yang disebut anggota sebagai 'Kafe Tanaman Rosé'."
          ],
          fr: [
            "Coréenne-australienne élevée en Nouvelle-Zélande, elle maîtrise les deux langues et écrit ses propres paroles en anglais.",
            "Experte à la guitare, ses performances acoustiques où elle chante en jouant émeuvent profondément les fans.",
            "L'histoire sincère dans les paroles anglaises de son solo 'On the Ground' a trouvé un écho dans le monde entier.",
            "Sa collaboration avec Bruno Mars en 2024, 'APT.', a atteint la 1ère place sur Spotify dans plus de 60 pays.",
            "Elle adore les plantes et a créé un petit jardin au dortoir, que les membres appellent 'le café aux plantes de Rosé'."
          ],
          hi: [
            "न्यूजीलैंड में पली-बढ़ी कोरियाई-ऑस्ट्रेलियाई, दोनों भाषाओं में पारंगत हैं और अपने अंग्रेजी गीत खुद लिखती हैं।",
            "गिटार बजाने में विशेषज्ञ, उनके ध्वनिक लाइव प्रदर्शन प्रशंसकों को गहराई से प्रभावित करते हैं।",
            "उनके सोلو डेब्यू 'On the Ground' के अंग्रेजी गीतों की ईमानदार कहानी ने दुनिया भर के प्रशंसकों के बीच गहरी गूँज पैदा की।",
            "2024 में ब्रूनो मार्स के साथ उनका सहयोग 'APT.', 60 से अधिक देशों में Spotify पर नंबर 1 पर रहा।",
            "उन्हें पौधों से प्यार है और उन्होंने डॉर्म में एक छोटा बगीचा बनाया है, जिसे सदस्य 'रोज़े का प्लांट कैफे' कहते हैं।"
          ],
          pt: [
            "Coreana-australiana criada na Nova Zelândia, ela é fluente em ambos os idiomas e escreve suas próprias letras em inglês.",
            "Especialista no violão, suas apresentações acústicas onde canta e toca simultaneamente emocionam os fãs.",
            "A história sincera nas letras de sua estreia solo 'On the Ground' ressoou profundamente com fãs em todo o mundo.",
            "Sua colaboração com Bruno Mars em 2024, 'APT.', alcançou o primeiro lugar no Spotify em mais de 60 países.",
            "Ela ama plantas e criou um pequeno jardim no dormitório, que as integrantes chamam de 'Café de Plantas da Rosé'."
          ],
          ar: [
            "كورية-أسترالية نشأت في نيوزيلندا، تتقن اللغتين وتكتب كلماتها العاطفية بالإنجليزية بنفسها.",
            "خبيرة في العزف على الغيتار، وعروضها المباشرة التي تغني فيها مع العزف تلمس قلوب المعجبين بشدة.",
            "لاقت القصة الصادقة في كلمات أغنيتها المنفردة الأولى 'On the Ground' صدى واسعاً لدى المعجبين حول العالم.",
            "وصل تعاونها مع برونو مارس 'APT.' في عام 2024 إلى المركز الأول على سبوتيفاي في أكثر من 60 دولة.",
            "تحب النباتات وأنشأت حديقة صغيرة في السكن، تطلق عليها العضوات 'مقهى روزي للنباتات'."
          ],
          th: [
            "ลูกครึ่งเกาหลี-ออสเตรเลียที่เติบโตในนิวซีแลนด์ เธอใช้ได้ทั้งสองภาษาและแต่งเพลงภาษาอังกฤษด้วยตัวเอง",
            "เธอมีความสามารถในการเล่นกีตาร์ระดับสูง การแสดงสดแบบอะคูสติกที่เธอร้องและเล่นกีตาร์ไปด้วยสร้างความประทับใจให้แฟนๆ อย่างมาก",
            "เรื่องราวที่จริงใจในเนื้อเพลงภาษาอังกฤษจากโซโล่เดบิวต์ 'On the Ground' ได้รับความเห็นใจจากแฟนๆ ทั่วโลก",
            "การร่วมงานกับ Bruno Mars ในเพลง 'APT.' เมื่อปี 2024 ครองอันดับ 1 ใน Spotify กว่า 60 ประเทศทั่วโลก",
            "เธอรักการปลูกต้นไม้และจัดสวนเล็กๆ ไว้ในหอพัก จนเพื่อนสมาชิกเรียกว่า 'คาเฟ่ต้นไม้ของโรเซ่'"
          ],
          vi: [
            "Là người Úc gốc Hàn lớn lên tại New Zealand, cô thành thạo cả hai thứ tiếng và tự viết lời tiếng Anh cho các ca khúc của mình.",
            "Chơi guitar điêu luyện, những màn trình diễn acoustic vừa hát vừa đánh đàn của cô luôn làm lay động trái tim người hâm mộ.",
            "Câu chuyện chân thực trong lời bài hát tiếng Anh của ca khúc ra mắt solo 'On the Ground' đã nhận được sự đồng cảm sâu sắc từ người hâm mộ toàn thế giới.",
            "Màn hợp tác với Bruno Mars năm 2024 trong ca khúc 'APT.' đã đứng đầu Spotify tại hơn 60 quốc gia.",
            "Cô thích trồng cây và đã tạo ra một khu vườn nhỏ trong ký túc xá, được các thành viên gọi là 'Cà phê cây cảnh của Rosé'."
          ],
          ru: [
            "Кореянка из Австралии, выросшая в Новой Зеландии, одинаково хорошо владеет обоими языками и сама пишет английские тексты.",
            "Эксперт в игре на гитаре; ее акустические выступления, где она поет и играет одновременно, глубоко трогают фанатов.",
            "Искренняя история в английском тексте ее сольного дебюта «On the Ground» нашла отклик у фанатов по всему миру.",
            "Ее совместная работа с Бруно Марсом «APT.» в 2024 году заняла первое место в Spotify более чем в 60 странах.",
            "Она любит растения и создала небольшой сад в общежитии, который участницы называют «растительным кафе Розэ»."
          ]
        },
        socials: { instagram: "https://www.instagram.com/roses_are_rosie/" }
      }
    ]
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM", ja: "ルセラフィム", zh: "LE SSERAFIM", es: "LE SSERAFIM", id: "LE SSERAFIM", fr: "LE SSERAFIM", hi: "ले सेराफिम", pt: "LE SSERAFIM", ar: "لي سيرافيم", th: "เลอ เซราฟิม", vi: "LE SSERAFIM", ru: "LE SSERAFIM" },
    officialSite: "https://lesserafim.com/",
    company: "HYBE / Source Music",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT", ja: "ピオナ (FEARNOT)", zh: "FEARNOT", es: "FEARNOT", id: "FEARNOT", fr: "FEARNOT", hi: "FEARNOT", pt: "FEARNOT", ar: "فيرنوت (FEARNOT)", th: "เพียร่า (FEARNOT)", vi: "FEARNOT", ru: "FEARNOT" },
    accentColor: "#c8a97e",
    imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/le_sserafim/", twitter: "https://twitter.com/le_sserafim", youtube: "https://www.youtube.com/@LESSERAFIM_official" },
    wiki: {
      ko: "르세라핌(LE SSERAFIM)은 HYBE 산하 쏘스뮤직 소속 5인조 걸그룹입니다. 그룹명은 'I AM FEARLESS'의 애너그램으로, 두려움 없이 나아가겠다는 의지를 담고 있습니다.",
      en: "LE SSERAFIM is a 5-member girl group under HYBE's Source Music. The name is an anagram of 'I AM FEARLESS', representing their determination to move forward without fear.",
      ja: "LE SSERAFIM（ルセラフィム）は、HYBE傘下のSOURCE MUSICに所属する5人組ガールズグループです。グループ名は「I AM FEARLESS」のアナグラムで、恐れることなく進むという意志が込められています。",
      zh: "LE SSERAFIM 是 HYBE 旗下 Source Music 所属的五人女子组合。团名是 'I AM FEARLESS' 的回文构词，表达了无所畏惧勇往直前的意志。",
      es: "LE SSERAFIM es un grupo femenino de 5 miembros bajo Source Music de HYBE. El nombre es un anagrama de 'I AM FEARLESS', que representa su determinación de avanzar sin miedo.",
      id: "LE SSERAFIM adalah grup vokal wanita beranggotakan 5 orang di bawah Source Music HYBE. Namanya adalah anagram dari 'I AM FEARLESS', yang mewakili tekad mereka untuk maju tanpa rasa takut.",
      fr: "LE SSERAFIM est un groupe de filles de 5 membres sous Source Music de HYBE. Le nom est un anagramme de 'I AM FEARLESS', représentant leur détermination à avancer sans crainte.",
      hi: "LE SSERAFIM HYBE के सोर्स म्यूजिक के तहत एक 5-सदस्यीय गर्ल ग्रुप है। यह नाम 'I AM FEARLESS' का एक एनाग्राम है, जो बिना किसी डर के आगे बढ़ने के उनके संकल्प को दर्शाता है।",
      pt: "LE SSERAFIM é um grupo feminino de 5 membros sob a Source Music da HYBE. O nome é um anagrama de 'I AM FEARLESS', representando sua determinação de seguir em frente sem medo.",
      ar: "LE SSERAFIM هي فرقة فتيات مكونة من 5 أعضاء تابعة لشركة Source Music التابعة لـ HYBE. الاسم عبارة عن جناس ناقص لـ 'I AM FEARLESS'، وهو ما يمثل تصميمهم على المضي قدمًا دون خوف.",
      th: "LE SSERAFIM เป็นเกิร์ลกรุ๊ปที่มีสมาชิก 5 คนภายใต้ Source Music ของ HYBE ชื่อวงเป็นแอนนาแกรมของ 'I AM FEARLESS' ซึ่งแสดงถึงความมุ่งมั่นที่จะก้าวไปข้างหน้าโดยปราศจากความกลัว",
      vi: "LE SSERAFIM là nhóm nhạc nữ gồm 5 thành viên thuộc Source Music của HYBE. Tên nhóm là một đảo chữ của 'I AM FEARLESS', thể hiện quyết tâm tiến về phía trước mà không sợ hãi.",
      ru: "LE SSERAFIM — женская группа из 5 участниц под руководством Source Music (HYBE). Название является анаграммой фразы «I AM FEARLESS», что символизирует их решимость идти вперед без страха."
    },
    description: {
      ko: "두려움 없이 무대를 장악하는 4세대 대표 걸그룹. 파워풀한 퍼포먼스와 강렬한 비주얼로 전 세계를 사로잡았습니다.",
      en: "A leading 4th-generation girl group dominating the stage fearlessly with powerful performances and striking visuals.",
      ja: "恐れることなくステージを支配する第4世代を代表するガールズグループ。パワフルなパフォーマンスと強烈なビジュアルで全世界を魅了しています。",
      zh: "无所畏惧支配舞台的的第四代代表女团。凭借强大的表演和强烈的视觉效果俘获了全世界。",
      es: "Un grupo de chicas líder de la cuarta generación que domina el escenario sin miedo con actuaciones potentes y visuales impactantes.",
      id: "Grup vokal wanita generasi ke-4 terkemuka yang mendominasi panggung tanpa rasa takut dengan penampilan bertenaga dan visual yang mencolok.",
      fr: "Un groupe de filles de 4e génération de premier plan qui domine la scène sans crainte avec des performances puissantes et des visuels frappants.",
      hi: "शक्तिशाली प्रदर्शन और प्रभावशाली दृश्यों के साथ निडर होकर मंच पर राज करने वाला चौथी पीढ़ी का अग्रणी गर्ल ग्रुप।",
      pt: "Um grupo feminino líder da 4ª geração que domina o palco sem medo, com performances poderosas e visuais marcantes.",
      ar: "فرقة فتيات رائدة من الجيل الرابع تسيطر على المسرح بلا خوف مع عروض قوية ومرئيات مذهلة.",
      th: "เกิร์ลกรุ๊ปเจน 4 ชั้นนำที่ครองเวทีอย่างไร้ความกลัวด้วยการแสดงที่ทรงพลังและวิชวลที่โดดเด่น",
      vi: "Nhóm nhạc nữ thế hệ thứ 4 hàng đầu thống trị sân khấu một cách không sợ hãi với những màn trình diễn mạnh mẽ và hình ảnh nổi bật.",
      ru: "Ведущая женская группа 4-го поколения, бесстрашно доминирующая на сцене благодаря мощным выступлениям и ярким визуальным эффектам."
    },
    tmi: {
      ko: [
        "그룹명 LE SSERAFIM은 'I AM FEARLESS'의 애너그램으로, 두려움 없이 앞으로 나아가겠다는 의지를 이름 자체에 숨겨 담았습니다.",
        "카즈하는 데뷔 전 일본에서 프로 발레리나로 활동했으며, 이 배경이 르세라핌 무대에 독보적인 우아함을 더합니다.",
        "사쿠라는 HKT48·IZ*ONE을 거쳐 르세라핌까지 두 국가·세 팀에서 활약한 K·J 팝 역사상 유례없는 커리어를 보유하고 있습니다.",
        "르세라핌은 2024 코첼라 무대에 서며 HYBE 걸그룹으로는 최초로 세계 최대 음악 페스티벌에 공식 출연한 그룹이 됐습니다.",
        "'EASY'가 해외 팬들 사이에서 '발음하기 쉬운 K-팝 입문 노래'로 퍼지며 틱톡에서 전 세계적인 챌린지 밈이 된 이야기는 전설처럼 회자됩니다.",
        "허윤진은 뛰어난 작사·작곡 능력을 갖춘 싱어송라이터로, 다수의 솔로 자작곡을 발표해 음악적 역량을 인정받았습니다.",
        "김채원은 리더로서 팀의 중심을 잡으며, 과거 아이즈원 멤버로 활동하며 쌓은 풍부한 무대 경험을 자랑합니다.",
        "막내 홍은채는 음악방송 '뮤직뱅크'의 최연소 MC로 활약하며 '은행장'이라는 귀여운 별명을 얻었습니다.",
        "데뷔 과정을 담은 다큐멘터리 'The World Is My Oyster'를 공개해 멤버들의 치열한 연습과 진솔한 고민을 팬들과 공유했습니다.",
        "팬덤 이름 '피어나(FEARNOT)'는 두려움 없이(FEAR NOT) 앞으로 나아가는 르세라핌과 함께 팬들이 '피어난다'는 중의적 의미를 담고 있습니다."
      ],
      en: [
        "The name LE SSERAFIM is an anagram of 'I AM FEARLESS' — the fearless spirit is literally encoded into their name.",
        "Kazuha was a professional ballerina in Japan before debuting in K-pop, adding unparalleled elegance to LE SSERAFIM's performances.",
        "Sakura has an unprecedented career spanning HKT48, IZ*ONE, and LE SSERAFIM across two countries — unrivaled in K-pop and J-pop history.",
        "LE SSERAFIM became the first HYBE girl group to officially perform at Coachella, the world's largest music festival, in 2024.",
        "The story of 'EASY' spreading among international fans as 'an easy-to-pronounce K-pop gateway song' and becoming a global TikTok challenge meme is practically legendary.",
        "Huh Yunjin is a talented singer-songwriter who has released several self-composed solo tracks, proving her musical depth.",
        "Leader Kim Chaewon anchors the team with extensive stage experience gained during her days as a member of IZ*ONE.",
        "Maknae Hong Eunchae is the youngest MC for 'Music Bank', earning the affectionate nickname 'Bank President' from fans.",
        "They released the documentary 'The World Is My Oyster', sharing the intense training and honest emotions behind their debut.",
        "The fandom name 'FEARNOT' (Piona in Korean) symbolizes fans 'blooming' alongside LE SSERAFIM as they move forward fearlessly."
      ],
      ja: [
        "グループ名LE SSERAFIMは「I AM FEARLESS」のアナグラムで、恐れることなく前に進むという意志を名前そのものに込めています。",
        "カズハはデビュー前に日本でプロのバレリーナとして活動しており、その経歴がLE SSERAFIMのステージに類まれな優雅さを加えています。",
        "サクラはHKT48、IZ*ONEを経てLE SSERAFIMまで、2カ国・3チームで活躍したK-POP・J-POP史上類を見ないキャリアを持っています。",
        "LE SSERAFIMは2024年のコーチェラ・フェスティバルのステージに立ち、HYBEのガールズグループとして初めて世界最大の音楽フェスティバルに公式出演しました。",
        "「EASY」が海外ファンの間で「発音しやすいK-POP入門曲」として広まり、TikTokで世界的なチャレンジミームになった話は伝説のように語られています。"
      ],
      zh: [
        "团名 LE SSERAFIM 是 'I AM FEARLESS' 的回文构词，将无所畏惧勇往直前的意志隐藏在名字本身中。",
        "中村一叶在出道前曾在日本担任职业芭蕾舞演员，这一背景为 LE SSERAFIM 的舞台增添了独特的优雅感。",
        "宫胁咲良经历了 HKT48、IZ*ONE 到 LE SSERAFIM，在两国三团活跃，拥有韩流和日语流行音乐史上史无前例的职业生涯。",
        "LE SSERAFIM 登上了 2024 年科切拉音乐节的舞台，成为 HYBE 旗下首个正式出演世界最大音乐节的女团。",
        "《EASY》在海外粉丝中被誉为“易于发音的韩流入门曲”，并在 TikTok 上成为全球挑战赛模因，传为佳话。"
      ],
      es: [
        "El nombre LE SSERAFIM es un anagrama de 'I AM FEARLESS': el espíritu intrépido está literalmente codificado en su nombre.",
        "Kazuha era una bailarina profesional en Japón antes de debutar en el K-pop, lo que aporta una elegancia inigualable a las actuaciones de LE SSERAFIM.",
        "Sakura tiene una carrera sin precedentes que abarca HKT48, IZ*ONE y LE SSERAFIM en dos países, algo inigualable en la historia del K-pop y J-pop.",
        "LE SSERAFIM se convirtió en el primer grupo de chicas de HYBE en actuar oficialmente en Coachella, el festival de música más grande del mundo, en 2024.",
        "La historia de 'EASY' extendiéndose entre los fans internacionales como 'una canción de introducción al K-pop fácil de pronunciar' y convirtiéndose en un meme de desafío global en TikTok es prácticamente legendaria."
      ],
      id: [
        "Nama LE SSERAFIM adalah anagram dari 'I AM FEARLESS' — semangat tanpa rasa takut benar-benar dikodekan ke dalam nama mereka.",
        "Kazuha adalah balerina profesional di Jepang sebelum debut di K-pop, menambahkan keanggunan yang tak tertandingi pada penampilan LE SSERAFIM.",
        "Sakura memiliki karier yang belum pernah terjadi sebelumnya yang mencakup HKT48, IZ*ONE, dan LE SSERAFIM di dua negara — tak tertandingi dalam sejarah K-pop dan J-pop.",
        "LE SSERAFIM menjadi grup vokal wanita HYBE pertama yang tampil secara resmi di Coachella, festival musik terbesar di dunia, pada tahun 2024.",
        "Kisah 'EASY' yang menyebar di kalangan penggemar internasional sebagai 'lagu pembuka K-pop yang mudah diucapkan' dan menjadi meme tantangan TikTok global praktis menjadi legendaris."
      ],
      fr: [
        "Le nom LE SSERAFIM est un anagramme de 'I AM FEARLESS' — l'esprit intrépide est littéralement encodé dans leur nom.",
        "Kazuha était une ballerine professionnelle au Japon avant de débuter dans la K-pop, ajoutant une élégance inégalée aux performances de LE SSERAFIM.",
        "Sakura a une carrière sans précédent couvrant HKT48, IZ*ONE et LE SSERAFIM dans deux pays — inégalée dans l'histoire de la K-pop et de la J-pop.",
        "LE SSERAFIM est devenu le premier groupe de filles HYBE à se produire officiellement à Coachella, le plus grand festival de musique au monde, en 2024.",
        "L'histoire de 'EASY' se propageant parmi les fans internationaux comme 'une chanson d'initiation à la K-pop facile à prononcer' et devenant un mème de défi TikTok mondial est pratiquement légendaire."
      ],
      hi: [
        "LE SSERAFIM नाम 'I AM FEARLESS' का एक एनाग्राम है — निडर भावना को शाब्दिक रूप से उनके नाम में समाहित किया गया है।",
        "काज़ुहा के-पॉप में डेब्यू करने से पहले जापान में एक पेशेवर बैलेरीना थीं, जो LE SSERAFIM के प्रदर्शन में अद्वितीय भव्यता जोड़ती हैं।",
        "सकुरा का करियर HKT48, IZ*ONE और LE SSERAFIM तक दो देशों में फैला हुआ है — जो के-पॉप और जे-पॉप इतिहास में बेजोड़ है।",
        "LE SSERAFIM 2024 में दुनिया के सबसे बड़े संगीत समारोह कोचेला में आधिकारिक तौर पर प्रदर्शन करने वाला पहला HYBE गर्ल ग्रुप बन गया।",
        "'EASY' का अंतरराष्ट्रीय प्रशंसकों के बीच 'उच्चारण करने में आसान के-पॉप गेटवे गीत' के रूप में फैलना और वैश्विक टिकटॉक चुनौती मीम बनना व्यावहारिक रूप से प्रसिद्ध है।"
      ],
      pt: [
        "O nome LE SSERAFIM é um anagrama de 'I AM FEARLESS' — o espírito destemido está literalmente codificado no seu nome.",
        "Kazuha era uma bailarina profissional no Japão antes de estrear no K-pop, adicionando uma elegância inigualável às performances do LE SSERAFIM.",
        "Sakura tem uma carreira sem precedentes que abrange HKT48, IZ*ONE e LE SSERAFIM em dois países — inigualável na história do K-pop e J-pop.",
        "O LE SSERAFIM tornou-se o primeiro grupo feminino da HYBE a apresentar-se oficialmente no Coachella, o maior festival de música do mundo, em 2024.",
        "A história de 'EASY' espalhando-se entre os fãs internacionais como 'uma música de introdução ao K-pop fácil de pronunciar' e tornando-se um meme de desafio global no TikTok é praticamente lendária."
      ],
      ar: [
        "اسم LE SSERAFIM هو جناس ناقص لـ 'I AM FEARLESS' - الروح الشجاعة مشفرة حرفيًا في اسمهم.",
        "كانت كازوها باليرينا محترفة في اليابان قبل ترسيمها في الكيبوب، مما أضاف أناقة لا مثيل لها إلى عروض LE SSERAFIM.",
        "تتمتع ساكورا بمسيرة مهنية غير مسبوقة تشمل HKT48 وIZ*ONE وLE SSERAFIM في بلدين - وهي مسيرة لا مثيل لها في تاريخ الكيبوب والجيبوب.",
        "أصبحت LE SSERAFIM أول فرقة فتيات من HYBE تؤدي رسميًا في مهرجان كوتشيلا، أكبر مهرجان موسيقي في العالم، في عام 2024.",
        "قصة انتشار أغنية 'EASY' بين المعجبين الدوليين كـ 'أغنية كيبوب سهلة النطق' وتحولها إلى تحدي تيك توك عالمي هي قصة أسطورية تقريبًا."
      ],
      th: [
        "ชื่อวง LE SSERAFIM เป็นแอนนาแกรมของ 'I AM FEARLESS' ซึ่งซ่อนความมุ่งมั่นที่จะก้าวไปข้างหน้าอย่างไม่เกรงกลัวไว้ในชื่อ",
        "คาซึฮะเคยเป็นนักบัลเล่ต์มืออาชีพในญี่ปุ่นก่อนจะเดบิวต์เป็นไอดอล K-pop ซึ่งช่วยเพิ่มความสง่างามที่โดดเด่นให้กับการแสดงของวง",
        "ซากุระมีเส้นทางอาชีพที่น่าทึ่งผ่านวง HKT48, IZ*ONE และ LE SSERAFIM ในสองประเทศ ซึ่งหาได้ยากมากในประวัติศาสตร์ K-pop และ J-pop",
        "LE SSERAFIM เป็นเกิร์ลกรุ๊ปวงแรกของ HYBE ที่ได้ขึ้นแสดงอย่างเป็นทางการในเทศกาลดนตรีระดับโลกอย่าง Coachella ในปี 2024",
        "เรื่องราวของเพลง 'EASY' ที่แพร่หลายในหมู่แฟนๆ ต่างชาติในฐานะ 'เพลง K-pop ที่ออกเสียงง่าย' จนกลายเป็นไวรัลชาเลนจ์ใน TikTok นั้นถือเป็นเรื่องระดับตำนาน"
      ],
      vi: [
        "Tên nhóm LE SSERAFIM là một đảo chữ của 'I AM FEARLESS' — tinh thần không sợ hãi được mã hóa ngay trong tên của họ.",
        "Kazuha là một diễn viên múa ba lê chuyên nghiệp tại Nhật Bản trước khi ra mắt K-pop, mang đến sự sang trọng vô song cho các màn trình diễn của LE SSERAFIM.",
        "Sakura có một sự nghiệp chưa từng có trải dài qua HKT48, IZ*ONE và LE SSERAFIM tại hai quốc gia — vô đối trong lịch sử K-pop và J-pop.",
        "LE SSERAFIM đã trở thành nhóm nhạc nữ HYBE đầu tiên biểu diễn chính thức tại Coachella, lễ hội âm nhạc lớn nhất thế giới, vào năm 2024.",
        "Câu chuyện về 'EASY' lan truyền trong cộng đồng người hâm mộ quốc tế như 'một bài hát nhập môn K-pop dễ phát âm' và trở thành một trào lưu thử thách TikTok toàn cầu thực sự là một huyền thoại."
      ],
      ru: [
        "Название LE SSERAFIM — это анаграмма фразы «I AM FEARLESS», бесстрашный дух буквально закодирован в их имени.",
        "Казуха была профессиональной балериной в Японии до дебюта в K-pop, что придает выступлениям LE SSERAFIM непревзойденную элегантность.",
        "У Сакуры беспрецедентная карьера, охватывающая HKT48, IZ*ONE и LE SSERAFIM в двух странах — уникальное достижение в истории K-pop и J-pop.",
        "LE SSERAFIM стала первой женской группой HYBE, официально выступившей на Coachella, крупнейшем в мире музыкальном фестивале, в 2024 году.",
        "История о том, как песня «EASY» распространилась среди иностранных фанатов как «легкая для произношения песня для знакомства с K-pop» и стала глобальным мемом-челленджем в TikTok, стала легендарной."
      ]
    },
    news: [
      {
        title: {
          ko: "르세라핌 데뷔 'FEARLESS', 발매 첫 주 차트 상위권 장악",
          en: "LE SSERAFIM Debut 'FEARLESS' Dominates Charts in First Week",
          ja: "LE SSERAFIMデビュー「FEARLESS」、発売初週にチャート上位を席巻",
          zh: "LE SSERAFIM 出道曲《FEARLESS》发行首周席卷榜单前列",
          es: "El debut de LE SSERAFIM con 'FEARLESS' domina las listas en su primera semana",
          id: "Debut LE SSERAFIM 'FEARLESS' Mendominasi Tangga Lagu di Minggu Pertama",
          fr: "Le début de LE SSERAFIM avec 'FEARLESS' domine les classements dès la première semaine",
          hi: "LE SSERAFIM का डेब्यू 'FEARLESS' पहले हफ्ते में चार्ट्स पर हावी",
          pt: "Estreia do LE SSERAFIM com 'FEARLESS' domina as paradas na primeira semana",
          ar: "ترسيم LE SSERAFIM بـ 'FEARLESS' يسيطر على المخططات في الأسبوع الأول",
          th: "LE SSERAFIM เดบิวต์ 'FEARLESS' ครองอันดับต้นๆ ของชาร์ตในสัปดาห์แรก",
          vi: "Màn ra mắt của LE SSERAFIM với 'FEARLESS' thống trị các bảng xếp hạng trong tuần đầu tiên",
          ru: "Дебют LE SSERAFIM с «FEARLESS» доминирует в чартах в первую неделю"
        },
        date: "2022.05.02",
        summary: {
          ko: "쏘스뮤직의 신인 걸그룹 르세라핌이 데뷔 앨범 'FEARLESS'로 첫 주부터 주요 음원 차트 상위권을 점령했습니다.",
          en: "Source Music's rookie girl group LE SSERAFIM dominated major charts from the first week with their debut album 'FEARLESS'.",
          ja: "SOURCE MUSICの新人ガールズグループLE SSERAFIMが、デビューアルバム「FEARLESS」で初週から主要音源チャートの上位を占領しました。",
          zh: "Source Music 的新人女团 LE SSERAFIM 凭借出道专辑《FEARLESS》从第一周起就占据了主要音源榜单的前列。",
          es: "El nuevo grupo de chicas de Source Music, LE SSERAFIM, dominó las principales listas desde la primera semana con su álbum debut 'FEARLESS'.",
          id: "Grup vokal wanita pendatang baru Source Music, LE SSERAFIM, mendominasi tangga lagu utama sejak minggu pertama dengan album debut mereka 'FEARLESS'.",
          fr: "Le nouveau groupe de filles de Source Music, LE SSERAFIM, a dominé les principaux classements dès la première semaine avec son premier album 'FEARLESS'.",
          hi: "सोर्स म्यूजिक के नए गर्ल ग्रुप LE SSERAFIM ने अपने डेब्यू एल्बम 'FEARLESS' के साथ पहले हफ्ते से ही प्रमुख चार्ट्स पर कब्जा कर लिया।",
          pt: "O novo grupo feminino da Source Music, LE SSERAFIM, dominou as principais paradas desde a primeira semana com o seu álbum de estreia 'FEARLESS'.",
          ar: "سيطرت فرقة الفتيات الصاعدة LE SSERAFIM من Source Music على المخططات الرئيسية منذ الأسبوع الأول بألبوم ترسيمها 'FEARLESS'.",
          th: "เกิร์ลกรุ๊ปน้องใหม่ LE SSERAFIM จาก Source Music ครองอันดับต้นๆ ของชาร์ตเพลงหลักตั้งแต่สัปดาห์แรกด้วยอัลบั้มเดบิวต์ 'FEARLESS'",
          vi: "Nhóm nhạc nữ tân binh LE SSERAFIM của Source Music đã thống trị các bảng xếp hạng âm nhạc lớn ngay từ tuần đầu tiên với album ra mắt 'FEARLESS'.",
          ru: "Новая женская группа LE SSERAFIM от Source Music захватила верхние строчки основных музыкальных чартов с первой недели после выхода дебютного альбома «FEARLESS»."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌 'ANTIFRAGILE', 빌보드 핫 100 진입 성공",
          en: "LE SSERAFIM 'ANTIFRAGILE' Successfully Enters Billboard Hot 100",
          ja: "LE SSERAFIM「ANTIFRAGILE」、ビルボードHOT 100入りに成功",
          zh: "LE SSERAFIM 《ANTIFRAGILE》成功进入 Billboard Hot 100",
          es: "LE SSERAFIM 'ANTIFRAGILE' entra con éxito en el Billboard Hot 100",
          id: "LE SSERAFIM 'ANTIFRAGILE' Berhasil Memasuki Billboard Hot 100",
          fr: "LE SSERAFIM 'ANTIFRAGILE' entre avec succès dans le Billboard Hot 100",
          hi: "LE SSERAFIM का 'ANTIFRAGILE' बिलबोर्ड हॉट 100 में सफलतापूर्वक शामिल",
          pt: "LE SSERAFIM 'ANTIFRAGILE' entra com sucesso no Billboard Hot 100",
          ar: "أغنية 'ANTIFRAGILE' لـ LE SSERAFIM تدخل بنجاح مخطط Billboard Hot 100",
          th: "LE SSERAFIM 'ANTIFRAGILE' ประสบความสำเร็จในการเข้าสู่ Billboard Hot 100",
          vi: "LE SSERAFIM 'ANTIFRAGILE' lọt vào Billboard Hot 100 thành công",
          ru: "Песня LE SSERAFIM «ANTIFRAGILE» успешно вошла в чарт Billboard Hot 100"
        },
        date: "2022.10.17",
        summary: {
          ko: "두 번째 미니 앨범 타이틀 'ANTIFRAGILE'이 빌보드 핫 100에 진입하며 데뷔 반년 만에 글로벌 차트 입성을 이뤄냈습니다.",
          en: "Their second mini album title 'ANTIFRAGILE' entered the Billboard Hot 100 within just six months of debut.",
          ja: "2ndミニアルバムのタイトル曲「ANTIFRAGILE」がビルボードHOT 100に入り、デビューから半年でグローバルチャート入りを果たしました。",
          zh: "第二张迷你专辑主打曲《ANTIFRAGILE》进入 Billboard Hot 100，出道半年即登上了全球榜单。",
          es: "El título de su segundo mini álbum 'ANTIFRAGILE' entró en el Billboard Hot 100 a solo seis meses de su debut.",
          id: "Lagu utama album mini kedua mereka 'ANTIFRAGILE' memasuki Billboard Hot 100 hanya dalam waktu enam bulan setelah debut.",
          fr: "Le titre de leur deuxième mini-album 'ANTIFRAGILE' est entré dans le Billboard Hot 100 seulement six mois après leurs débuts.",
          hi: "उनके दूसरे मिनी एल्बम का शीर्षक 'ANTIFRAGILE' डेब्यू के मात्र छह महीने के भीतर बिलबोर्ड हॉट 100 में शामिल हो गया।",
          pt: "A música-título do seu segundo mini álbum 'ANTIFRAGILE' entrou no Billboard Hot 100 apenas seis meses após a estreia.",
          ar: "دخلت الأغنية الرئيسية لألبومهم المصغر الثاني 'ANTIFRAGILE' مخطط Billboard Hot 100 في غضون ستة أشهر فقط من ترسيمهم.",
          th: "เพลงไตเติ้ลจากมินิอัลบั้มที่สอง 'ANTIFRAGILE' เข้าสู่ Billboard Hot 100 ได้สำเร็จหลังจากเดบิวต์ได้เพียงครึ่งปี",
          vi: "Bài hát chủ đề trong mini album thứ hai 'ANTIFRAGILE' đã lọt vào Billboard Hot 100 chỉ sau nửa năm ra mắt.",
          ru: "Заглавный трек второго мини-альбома «ANTIFRAGILE» вошел в чарт Billboard Hot 100 всего через полгода после дебюта."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌 첫 번째 정규 앨범 'UNFORGIVEN' 발매",
          en: "LE SSERAFIM Releases 1st Full Album 'UNFORGIVEN'",
          ja: "LE SSERAFIM 1stフルアルバム「UNFORGIVEN」発売",
          zh: "LE SSERAFIM 发行首张正规专辑《UNFORGIVEN》",
          es: "LE SSERAFIM lanza su primer álbum de larga duración 'UNFORGIVEN'",
          id: "LE SSERAFIM Merilis Album Studio Pertama 'UNFORGIVEN'",
          fr: "LE SSERAFIM sort son premier album complet 'UNFORGIVEN'",
          hi: "LE SSERAFIM ने अपना पहला फुल एल्बम 'UNFORGIVEN' रिलीज़ किया",
          pt: "LE SSERAFIM lança o seu primeiro álbum completo 'UNFORGIVEN'",
          ar: "LE SSERAFIM تصدر أول ألبوم كامل لها بعنوان 'UNFORGIVEN'",
          th: "LE SSERAFIM ปล่อยอัลบั้มเต็มชุดแรก 'UNFORGIVEN'",
          vi: "LE SSERAFIM phát hành album đầy đủ đầu tiên 'UNFORGIVEN'",
          ru: "LE SSERAFIM выпустили первый полноформатный альбом «UNFORGIVEN»"
        },
        date: "2023.05.01",
        summary: {
          ko: "데뷔 1주년을 기념해 발매한 첫 정규 앨범 'UNFORGIVEN'이 글로벌 팬들의 뜨거운 호응을 받았습니다.",
          en: "Their first full album 'UNFORGIVEN', released for their 1st anniversary, received enthusiastic responses from global fans.",
          ja: "デビュー1周年を記念して発売された1stフルアルバム「UNFORGIVEN」は、世界中のファンから熱い反響を呼びました。",
          zh: "为纪念出道一周年而发行的首张正规专辑《UNFORGIVEN》受到了全球粉丝的热烈响应。",
          es: "Su primer álbum de larga duración 'UNFORGIVEN', lanzado para su primer aniversario, recibió respuestas entusiastas de los fans globales.",
          id: "Album studio pertama mereka 'UNFORGIVEN', yang dirilis untuk ulang tahun pertama mereka, menerima tanggapan antusias dari penggemar global.",
          fr: "Leur premier album complet 'UNFORGIVEN', sorti pour leur premier anniversaire, a reçu des réponses enthousiastes de la part des fans du monde entier.",
          hi: "उनकी पहली वर्षगांठ पर रिलीज़ हुए उनके पहले फुल एल्बम 'UNFORGIVEN' को वैश्विक प्रशंसकों से जबरदस्त प्रतिक्रिया मिली।",
          pt: "O seu primeiro álbum completo 'UNFORGIVEN', lançado para o seu 1º aniversário, recebeu respostas entusiásticas dos fãs globais.",
          ar: "تلقى أول ألبوم كامل لهم 'UNFORGIVEN'، الذي صدر بمناسبة الذكرى السنوية الأولى لترسيمهم، ردود فعل حماسية من المعجبين العالميين.",
          th: "อัลบั้มเต็มชุดแรก 'UNFORGIVEN' ที่ปล่อยออกมาเพื่อฉลองครบรอบเดบิวต์ 1 ปี ได้รับการตอบรับอย่างล้นหลามจากแฟนๆ ทั่วโลก",
          vi: "Album đầy đủ đầu tiên 'UNFORGIVEN' được phát hành nhân dịp kỷ niệm 1 năm ra mắt đã nhận được sự hưởng ứng nồng nhiệt từ người hâm mộ toàn cầu.",
          ru: "Их первый полноформатный альбом «UNFORGIVEN», выпущенный к первой годовщине дебюта, получил восторженные отзывы фанатов по всему миру."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌 'EASY', 전 세계 틱톡 챌린지 밈으로 확산",
          en: "LE SSERAFIM 'EASY' Spreads as Global TikTok Challenge Meme",
          ja: "LE SSERAFIM「EASY」、世界中のTikTokチャレンジミームとして拡散",
          zh: "LE SSERAFIM 《EASY》作为全球 TikTok 挑战模因传播",
          es: "LE SSERAFIM 'EASY' se extiende como un meme de desafío global en TikTok",
          id: "LE SSERAFIM 'EASY' Menyebar sebagai Meme Tantangan TikTok Global",
          fr: "LE SSERAFIM 'EASY' se propage en tant que mème de défi TikTok mondial",
          hi: "LE SSERAFIM का 'EASY' वैश्विक टिकटॉक चुनौती मीम के रूप में फैला",
          pt: "LE SSERAFIM 'EASY' espalha-se como um meme de desafio global no TikTok",
          ar: "أغنية 'EASY' لـ LE SSERAFIM تنتشر كـ تحدي تيك توك عالمي",
          th: "LE SSERAFIM 'EASY' แพร่กระจายในฐานะไวรัลชาเลนจ์ TikTok ทั่วโลก",
          vi: "LE SSERAFIM 'EASY' lan tỏa thành trào lưu thử thách TikTok toàn cầu",
          ru: "Песная LE SSERAFIM «EASY» распространилась как глобальный мем-челлендж в TikTok"
        },
        date: "2024.02.19",
        summary: {
          ko: "'EASY'가 틱톡 챌린지 열풍을 타고 전 세계적으로 확산되며 르세라핌의 글로벌 인지도를 크게 높였습니다.",
          en: "'EASY' spread globally through a TikTok challenge craze, significantly boosting LE SSERAFIM's worldwide recognition.",
          ja: "「EASY」がTikTokチャレンジの熱風に乗って世界中に拡散され、LE SSERAFIMのグローバルな知名度を大きく高めました。",
          zh: "《EASY》乘着 TikTok 挑战热潮在全世界传播，极大提高了 LE SSERAFIM 的全球知名度。",
          es: "'EASY' se extendió globalmente a través de una fiebre de desafíos en TikTok, aumentando significativamente el reconocimiento mundial de LE SSERAFIM.",
          id: "'EASY' menyebar secara global melalui kegilaan tantangan TikTok, secara signifikan meningkatkan pengakuan dunia LE SSERAFIM.",
          fr: "'EASY' s'est propagé à l'échelle mondiale grâce à un engouement pour les défis TikTok, augmentant considérablement la reconnaissance mondiale de LE SSERAFIM.",
          hi: "'EASY' टिकटॉक चुनौती के क्रेज के माध्यम से विश्व स्तर पर फैला, जिससे LE SSERAFIM की विश्वव्यापी पहचान में काफी वृद्धि हुई।",
          pt: "'EASY' espalhou-se globalmente através de uma febre de desafios no TikTok, aumentando significativamente o reconhecimento mundial do LE SSERAFIM.",
          ar: "انتشرت أغنية 'EASY' عالميًا من خلال طفرة تحديات تيك توك، مما عزز بشكل كبير الاعتراف العالمي بفرقة LE SSERAFIM.",
          th: "'EASY' แพร่กระจายไปทั่วโลกผ่านกระแสชาเลนจ์ใน TikTok ซึ่งช่วยเพิ่มชื่อเสียงในระดับสากลให้กับ LE SSERAFIM อย่างมาก",
          vi: "'EASY' lan tỏa toàn cầu thông qua cơn sốt thử thách TikTok, giúp nâng cao đáng kể mức độ nhận diện toàn cầu của LE SSERAFIM.",
          ru: "Песня «EASY» распространилась по всему миру благодаря волне челленджей в TikTok, что значительно повысило мировую узнаваемость LE SSERAFIM."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌, 코첼라 2024 무대 HYBE 걸그룹 최초 공식 출연",
          en: "LE SSERAFIM Makes History as First HYBE Girl Group at Coachella 2024",
          ja: "LE SSERAFIM、コーチェラ2024のステージにHYBEガールズグループとして初めて公式出演",
          zh: "LE SSERAFIM 作为 HYBE 首个女团正式出演 2024 年科切拉音乐节",
          es: "LE SSERAFIM hace historia como el primer grupo de chicas de HYBE en Coachella 2024",
          id: "LE SSERAFIM Membuat Sejarah sebagai Grup Vokal Wanita HYBE Pertama di Coachella 2024",
          fr: "LE SSERAFIM entre dans l'histoire en tant que premier groupe de filles HYBE à Coachella 2024",
          hi: "LE SSERAFIM ने कोचेला 2024 में पहले HYBE गर्ल ग्रुप के रूप में इतिहास रचा",
          pt: "LE SSERAFIM faz história como o primeiro grupo feminino da HYBE no Coachella 2024",
          ar: "LE SSERAFIM تدخل التاريخ كأول فرقة فتيات من HYBE في مهرجان كوتشيلا 2024",
          th: "LE SSERAFIM สร้างประวัติศาสตร์ในฐานะเกิร์ลกรุ๊ปวงแรกของ HYBE ที่ได้แสดงใน Coachella 2024",
          vi: "LE SSERAFIM đi vào lịch sử khi là nhóm nhạc nữ đầu tiên của HYBE biểu diễn tại Coachella 2024",
          ru: "LE SSERAFIM вошли в историю как первая женская группа HYBE на фестивале Coachella 2024"
        },
        date: "2024.04.13",
        summary: {
          ko: "세계 최대 음악 페스티벌 코첼라 무대에 서며 HYBE 걸그룹 최초로 코첼라 공식 퍼포먼스를 가졌습니다.",
          en: "They performed at Coachella, the world's largest music festival, becoming the first HYBE girl group to do so officially.",
          ja: "世界最大の音楽フェスティバル、コーチェラのステージに立ち、HYBEのガールズグループとして初めて公式パフォーマンスを披露しました。",
          zh: "登上了世界最大的音乐节科切拉音乐节的舞台，成为 HYBE 旗下首个正式进行科切拉表演的女团。",
          es: "Actuaron en Coachella, el festival de música más grande del mundo, convirtiéndose en el primer grupo de chicas de HYBE en hacerlo oficialmente.",
          id: "Mereka tampil di Coachella, festival musik terbesar di dunia, menjadi grup vokal wanita HYBE pertama yang melakukannya secara resmi.",
          fr: "Elles se sont produites à Coachella, le plus grand festival de musique au monde, devenant ainsi le premier groupe de filles HYBE à le faire officiellement.",
          hi: "उन्होंने दुनिया के सबसे बड़े संगीत समारोह कोचेला में प्रदर्शन किया, और ऐसा आधिकारिक तौर पर करने वाला पहला HYBE गर्ल ग्रुप बन गया।",
          pt: "Apresentaram-se no Coachella, o maior festival de música do mundo, tornando-se o primeiro grupo feminino da HYBE a fazê-lo oficialmente.",
          ar: "قدموا عرضًا في مهرجان كوتشيلا، أكبر مهرجان موسيقي في العالم، ليصبحوا أول فرقة فتيات من HYBE تفعل ذلك رسميًا.",
          th: "พวกเธอได้ขึ้นแสดงใน Coachella เทศกาลดนตรีที่ใหญ่ที่สุดในโลก และเป็นเกิร์ลกรุ๊ปวงแรกของ HYBE ที่ได้ทำการแสดงอย่างเป็นทางการที่นี่",
          vi: "Họ đã biểu diễn tại Coachella, lễ hội âm nhạc lớn nhất thế giới, trở thành nhóm nhạc nữ đầu tiên của HYBE thực hiện điều này một cách chính thức.",
          ru: "Они выступили на крупнейшем в мире музыкальном фестивале Coachella, став первой женской группой HYBE, сделавшей это официально."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌, 첫 번째 단독 월드투어 'LE SSERAFIM WORLD TOUR' 개최",
          en: "LE SSERAFIM Launches First Solo World Tour",
          ja: "LE SSERAFIM、初の単独ワールドツアー「LE SSERAFIM WORLD TOUR」を開催",
          zh: "LE SSERAFIM 举办首次单独世界巡演“LE SSERAFIM WORLD TOUR”",
          es: "LE SSERAFIM inicia su primera gira mundial en solitario",
          id: "LE SSERAFIM Meluncurkan Tur Dunia Solo Pertama",
          fr: "LE SSERAFIM lance sa première tournée mondiale en solo",
          hi: "LE SSERAFIM ने अपना पहला सोलो वर्ल्ड टूर शुरू किया",
          pt: "LE SSERAFIM lança a sua primeira digressão mundial a solo",
          ar: "LE SSERAFIM تطلق أول جولة عالمية منفردة لها",
          th: "LE SSERAFIM เริ่มต้นเวิลด์ทัวร์เดี่ยวครั้งแรก 'LE SSERAFIM WORLD TOUR'",
          vi: "LE SSERAFIM khởi động chuyến lưu diễn thế giới solo đầu tiên",
          ru: "LE SSERAFIM запускают первый сольный мировой тур"
        },
        date: "2024.07.13",
        summary: {
          ko: "데뷔 2년 만에 아시아·북미·유럽을 아우르는 첫 단독 월드투어를 성공적으로 시작했습니다.",
          en: "Just two years after debut, they successfully launched their first solo world tour spanning Asia, North America, and Europe.",
          ja: "デビューから2年でアジア・北米・欧州を網羅する初の単独ワールドツアーを成功裏にスタートさせました。",
          zh: "出道仅两年，就成功开启了涵盖亚洲、北美和欧洲的首次单独世界巡演。",
          es: "A solo dos años de su debut, iniciaron con éxito su primera gira mundial en solitario que abarca Asia, América del Norte y Europa.",
          id: "Hanya dua tahun setelah debut, mereka berhasil meluncurkan tur dunia solo pertama mereka yang mencakup Asia, Amerika Utara, dan Eropa.",
          fr: "À peine deux ans après leurs débuts, elles ont lancé avec succès leur première tournée mondiale en solo couvrant l'Asie, l'Amérique du Nord et l'Europe.",
          hi: "डेब्यू के मात्र दो साल बाद, उन्होंने सफलतापूर्वक अपना पहला सोलो वर्ल्ड टूर शुरू किया जो एशिया, उत्तरी अमेरिका और यूरोप तक फैला हुआ था।",
          pt: "Apenas dois anos após a estreia, lançaram com sucesso a sua primeira digressão mundial a solo, abrangendo a Ásia, a América do Norte e a Europa.",
          ar: "بعد عامين فقط من ترسيمهم، نجحوا في إطلاق أول جولة عالمية منفردة لهم تشمل آسيا وأمريكا الشمالية وأوروبا.",
          th: "เพียง 2 ปีหลังเดบิวต์ พวกเธอประสบความสำเร็จในการเริ่มต้นเวิลด์ทัวร์เดี่ยวครั้งแรก ซึ่งครอบคลุมทั้งเอเชีย อเมริกาเหนือ และยุโรป",
          vi: "Chỉ hai năm sau khi ra mắt, họ đã khởi động thành công chuyến lưu diễn thế giới solo đầu tiên bao gồm châu Á, Bắc Mỹ và châu Âu.",
          ru: "Всего через два года после дебюта они успешно запустили свой первый сольный мировой тур, охватывающий Азию, Северную Америку и Европу."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌 'CRAZY', 글로벌 스트리밍 신기록 달성",
          en: "LE SSERAFIM 'CRAZY' Sets New Global Streaming Record",
          ja: "LE SSERAFIM「CRAZY」、グローバルストリーミング新記録を達成",
          zh: "LE SSERAFIM 《CRAZY》刷新全球流媒体记录",
          es: "LE SSERAFIM 'CRAZY' establece un nuevo récord de streaming global",
          id: "LE SSERAFIM 'CRAZY' Mencetak Rekor Streaming Global Baru",
          fr: "LE SSERAFIM 'CRAZY' établit un nouveau record de streaming mondial",
          hi: "LE SSERAFIM के 'CRAZY' ने ग्लोबल स्ट्रीमिंग का नया रिकॉर्ड बनाया",
          pt: "LE SSERAFIM 'CRAZY' estabelece novo recorde global de streaming",
          ar: "أغنية 'CRAZY' لـ LE SSERAFIM تحقق رقمًا قياسيًا جديدًا في البث العالمي",
          th: "LE SSERAFIM 'CRAZY' สร้างสถิติการสตรีมทั่วโลกใหม่",
          vi: "LE SSERAFIM 'CRAZY' lập kỷ lục phát trực tuyến toàn cầu mới",
          ru: "Песня LE SSERAFIM «CRAZY» установила новый мировой рекорд по стримингу"
        },
        date: "2024.10.14",
        summary: {
          ko: "미니 6집 타이틀 'CRAZY'가 스포티파이 글로벌 차트에서 역대 르세라핌 최고 성적을 기록했습니다.",
          en: "The title track 'CRAZY' from their 6th mini album achieved LE SSERAFIM's all-time best performance on the Spotify Global chart.",
          ja: "6thミニアルバムのタイトル曲「CRAZY」が、SpotifyグローバルチャートでLE SSERAFIM史上最高成績を記録しました。",
          zh: "第六张迷你专辑主打曲《CRAZY》在 Spotify 全球榜单上创下了 LE SSERAFIM 有史以来的最好成绩。",
          es: "La canción principal 'CRAZY' de su sexto mini álbum logró el mejor desempeño de todos los tiempos de LE SSERAFIM en la lista global de Spotify.",
          id: "Lagu utama 'CRAZY' dari album mini ke-6 mereka mencapai performa terbaik sepanjang masa LE SSERAFIM di tangga lagu Global Spotify.",
          fr: "Le titre 'CRAZY' de leur 6e mini-album a réalisé la meilleure performance de tous les temps pour LE SSERAFIM sur le classement Spotify Global.",
          hi: "उनके छठे मिनी एल्बम के शीर्षक गीत 'CRAZY' ने स्पॉटिफाई ग्लोबल चार्ट पर LE SSERAFIM का अब तक का सर्वश्रेष्ठ प्रदर्शन हासिल किया।",
          pt: "A música-título 'CRAZY' do seu 6º mini álbum alcançou o melhor desempenho de sempre do LE SSERAFIM na tabela Global do Spotify.",
          ar: "حققت الأغنية الرئيسية 'CRAZY' من ألبومهم المصغر السادس أفضل أداء لفرقة LE SSERAFIM على الإطلاق في مخطط Spotify العالمي.",
          th: "เพลงไตเติ้ล 'CRAZY' จากมินิอัลบั้มที่ 6 ทำสถิติสูงสุดของวง LE SSERAFIM ในชาร์ต Spotify Global",
          vi: "Bài hát chủ đề 'CRAZY' trong mini album thứ 6 đã đạt được thành tích tốt nhất từ trước đến nay của LE SSERAFIM trên bảng xếp hạng Spotify Global.",
          ru: "Заглавный трек «CRAZY» из шестого мини-альбома показал лучший результат LE SSERAFIM за все время в глобальном чарте Spotify."
        },
        url: "#"
      },
      {
        title: {
          ko: "허윤진, 솔로 싱글 'I ≠ DOLL'로 아티스트 정체성 선언",
          en: "Huh Yunjin Declares Artistic Identity with Solo Single 'I ≠ DOLL'",
          ja: "ホ・ユンジン、ソロシングル「I ≠ DOLL」でアーティストとしてのアイデンティティを宣言",
          zh: "许允真通过个人单曲《I ≠ DOLL》宣告艺术家身份",
          es: "Huh Yunjin declara su identidad artística con el sencillo en solitario 'I ≠ DOLL'",
          id: "Huh Yunjin Menyatakan Identitas Artistik dengan Singel Solo 'I ≠ DOLL'",
          fr: "Huh Yunjin déclare son identité artistique avec le single solo 'I ≠ DOLL'",
          hi: "हु युनजिन ने सोलो सिंगल 'I ≠ DOLL' के साथ अपनी कलात्मक पहचान की घोषणा की",
          pt: "Huh Yunjin declara identidade artística com o single a solo 'I ≠ DOLL'",
          ar: "هوه يونجين تعلن عن هويتها الفنية من خلال أغنيتها المنفردة 'I ≠ DOLL'",
          th: "ฮอ ยุนจิน ประกาศตัวตนในฐานะศิลปินผ่านซิงเกิลเดี่ยว 'I ≠ DOLL'",
          vi: "Huh Yunjin tuyên bố bản sắc nghệ sĩ với đĩa đơn solo 'I ≠ DOLL'",
          ru: "Хо Юнджин заявляет о своей артистической индивидуальности сольным синглом «I ≠ DOLL»"
        },
        date: "2024.03.18",
        summary: {
          ko: "허윤진이 직접 작사·작곡한 솔로 싱글이 진정성 있는 메시지로 전 세계 팬들의 큰 공감을 얻었습니다.",
          en: "Her self-written and composed solo single received massive global resonance for its authentic, powerful message.",
          ja: "ホ・ユンジンが自ら作詞・作曲したソロシングルが、真実味のあるメッセージで世界中のファンから大きな共感を得ました。",
          zh: "许允真亲自作词作曲的个人单曲以其真诚的信息引起了全球粉丝的强烈共鸣。",
          es: "Su sencillo en solitario, escrito y compuesto por ella misma, recibió una resonancia global masiva por su mensaje auténtico y poderoso.",
          id: "Singel solonya yang ditulis dan digubah sendiri menerima resonansi global yang besar karena pesannya yang autentik dan kuat.",
          fr: "Son single solo, qu'elle a elle-même écrit et composé, a reçu une résonance mondiale massive pour son message authentique et puissant.",
          hi: "उनके द्वारा स्वयं लिखे और संगीतबद्ध किए गए एकल गीत को इसके प्रामाणिक और शक्तिशाली संदेश के लिए वैश्विक स्तर पर जबरदस्त सराहना मिली।",
          pt: "O seu single a solo, escrito e composto pela própria, recebeu uma enorme ressonância global pela sua mensagem autêntica e poderosa.",
          ar: "لقيت أغنيتها المنفردة التي كتبتها ولحنتها بنفسها صدى عالميًا هائلاً لرسالتها الصادقة والقوية.",
          th: "ซิงเกิลเดี่ยวที่เธอเขียนเนื้อและแต่งเพลงเองได้รับความสนใจไปทั่วโลกจากข้อความที่จริงใจและทรงพลัง",
          vi: "Đĩa đơn solo do cô tự viết lời và sáng tác đã nhận được sự đồng cảm lớn từ người hâm mộ trên toàn thế giới nhờ thông điệp chân thực.",
          ru: "Ее сольный сингл, который она написала и сочинила сама, получил огромный мировой резонанс благодаря искреннему и сильному посланию."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌, 월드투어 전 일정 성황리에 마무리",
          en: "LE SSERAFIM Wraps Up All World Tour Dates Successfully",
          ja: "LE SSERAFIM、ワールドツアーの全日程を盛況のうちに終了",
          zh: "LE SSERAFIM 圆满结束所有世界巡演日程",
          es: "LE SSERAFIM concluye con éxito todas las fechas de su gira mundial",
          id: "LE SSERAFIM Menyelesaikan Semua Jadwal Tur Dunia dengan Sukses",
          fr: "LE SSERAFIM termine avec succès toutes les dates de sa tournée mondiale",
          hi: "LE SSERAFIM ने अपने वर्ल्ड टूर की सभी तारीखें सफलतापूर्वक पूरी कीं",
          pt: "LE SSERAFIM encerra com sucesso todas as datas da digressão mundial",
          ar: "LE SSERAFIM تختتم جميع مواعيد جولتها العالمية بنجاح",
          th: "LE SSERAFIM ปิดฉากการทัวร์คอนเสิร์ตรอบโลกทุกตารางงานได้อย่างสวยงาม",
          vi: "LE SSERAFIM kết thúc thành công tốt đẹp mọi lịch trình lưu diễn thế giới",
          ru: "LE SSERAFIM успешно завершили все даты мирового тура"
        },
        date: "2025.12.01",
        summary: {
          ko: "르세라핌이 아시아·북미·유럽을 아우르는 월드투어 전 일정을 성황리에 마쳤습니다.",
          en: "LE SSERAFIM successfully completed all dates of their world tour spanning Asia, North America, and Europe.",
          ja: "LE SSERAFIMがアジア・北米・欧州を網羅するワールドツアーの全日程を盛況のうちに終えました。",
          zh: "LE SSERAFIM 圆满完成了涵盖亚洲、北美和欧洲的世界巡演所有日程。",
          es: "LE SSERAFIM completó con éxito todas las fechas de su gira mundial que abarcó Asia, América del Norte y Europa.",
          id: "LE SSERAFIM berhasil menyelesaikan semua jadwal tur dunia mereka yang mencakup Asia, Amerika Utara, dan Eropa.",
          fr: "LE SSERAFIM a terminé avec succès toutes les dates de sa tournée mondiale couvrant l'Asie, l'Amérique du Nord et l'Europe.",
          hi: "LE SSERAFIM ने एशिया, उत्तरी अमेरिका और यूरोप तक फैले अपने वर्ल्ड टूर की सभी तारीखों को सफलतापूर्वक पूरा किया।",
          pt: "O LE SSERAFIM concluiu com sucesso todas as datas da sua digressão mundial, abrangendo a Ásia, a América do Norte e a Europa.",
          ar: "أكملت فرقة LE SSERAFIM بنجاح جميع مواعيد جولتها العالمية التي شملت آسيا وأمريكا الشمالية وأوروبا.",
          th: "LE SSERAFIM ประสบความสำเร็จในการทัวร์คอนเสิร์ตรอบโลกที่ครอบคลุมทั้งเอเชีย อเมริกาเหนือ และยุโรป",
          vi: "LE SSERAFIM đã hoàn thành xuất sắc chuyến lưu diễn thế giới bao gồm châu Á, Bắc Mỹ và châu Âu.",
          ru: "LE SSERAFIM успешно завершили все даты своего мирового тура, охватившего Азию, Северную Америку и Европу."
        },
        url: "#"
      },
      {
        title: {
          ko: "르세라핌, 데뷔 4주년 기념 새 앨범 티저 공개",
          en: "LE SSERAFIM Releases New Album Teaser for 4th Debut Anniversary",
          ja: "LE SSERAFIM、デビュー4周年記念のニューアルバムティーザーを公開",
          zh: "LE SSERAFIM 公开出道 4 周年纪念新专辑预告",
          es: "LE SSERAFIM lanza un adelanto de su nuevo álbum para su 4º aniversario de debut",
          id: "LE SSERAFIM Merilis Teaser Album Baru untuk Ulang Tahun Debut ke-4",
          fr: "LE SSERAFIM sort un teaser pour son nouvel album à l'occasion de son 4e anniversaire",
          hi: "LE SSERAFIM ने चौथी डेब्यू वर्षगांठ के लिए नए एल्बम का टीज़र जारी किया",
          pt: "LE SSERAFIM lança teaser do novo álbum para o 4º aniversário de estreia",
          ar: "LE SSERAFIM تصدر تشويقية الألبوم الجديد بمناسبة الذكرى الرابعة لترسيمها",
          th: "LE SSERAFIM ปล่อยทีเซอร์อัลบั้มใหม่เพื่อฉลองครบรอบเดบิวต์ 4 ปี",
          vi: "LE SSERAFIM tung teaser album mới kỷ niệm 4 năm ra mắt",
          ru: "LE SSERAFIM выпустили тизер нового альбома к 4-й годовщине дебюта"
        },
        date: "2026.03.01",
        summary: {
          ko: "데뷔 4주년을 앞두고 새 앨범 티저 이미지를 공개하며 팬들의 기대감을 한껏 끌어올렸습니다.",
          en: "Ahead of their 4th debut anniversary, they released new album teaser images, building excitement among fans.",
          ja: "デビュー4周年を前にニューアルバムのティーザーイメージを公開し、ファンの期待を最大限に高めました。",
          zh: "在出道 4 周年来临之际，公开了新专辑预告照，极大地提高了粉丝的期待感。",
          es: "Antes de su cuarto aniversario de debut, lanzaron imágenes de adelanto de su nuevo álbum, generando gran expectativa entre los fans.",
          id: "Menjelang ulang tahun debut ke-4, mereka merilis gambar teaser album baru, membangun kegembiraan di kalangan penggemar.",
          fr: "Avant son 4e anniversaire, le groupe a publié des images teaser pour son nouvel album, suscitant l'enthousiasme des fans.",
          hi: "अपनी चौथी डेब्यू वर्षगांठ से पहले, उन्होंने नए एल्बम की टीज़र छवियां जारी कीं, जिससे प्रशंसकों के बीच उत्साह बढ़ गया।",
          pt: "Antes do seu 4º aniversário de estreia, lançaram imagens teaser do novo álbum, aumentando a expetativa entre os fãs.",
          ar: "قبل الذكرى الرابعة لترسيمهم، أصدروا صورًا تشويقية للألبوم الجديد، مما زاد من حماس المعجبين.",
          th: "ก่อนถึงวันครบรอบเดบิวต์ 4 ปี พวกเธอได้ปล่อยภาพทีเซอร์อัลบั้มใหม่ ซึ่งช่วยเพิ่มความคาดหวังให้กับแฟนๆ เป็นอย่างมาก",
          vi: "Trước thềm kỷ niệm 4 năm ra mắt, họ đã tung ra những hình ảnh teaser cho album mới, khơi dậy sự mong đợi của người hâm mộ.",
          ru: "В преддверии 4-й годовщины дебюта они выпустили тизер-изображения к новому альбому, подогревая ожидания фанатов."
        },
        url: "#"
      }
    ],
    members: [
      {
        id: "chaewon",
        name: { ko: "김채원", en: "Kim Chaewon", ja: "キム・チェウォン", zh: "金采源", es: "Kim Chaewon", id: "Kim Chaewon", fr: "Kim Chaewon", hi: "किम चैवन", pt: "Kim Chaewon", ar: "كيم تشايوون", th: "คิม แชวอน", vi: "Kim Chaewon", ru: "Ким Чэвон" },
        role: { ko: "리더/메인보컬", en: "Leader/Main Vocalist", ja: "リーダー/メインボーカル", zh: "队长/主唱", es: "Líder/Vocalista principal", id: "Pemimpin/Vokalis Utama", fr: "Leader/Chanteuse principale", hi: "लीडर/मुख्य गायक", pt: "Líder/Vocalista principal", ar: "القائدة/المغنية الرئيسية", th: "ลีดเดอร์/นักร้องหลัก", vi: "Trưởng nhóm/Giọng ca chính", ru: "Лидер/Главный вокалист" },
        birth: "2000.08.05", mbti: "INFJ",
        zodiac: { ko: "사자자리", en: "Leo", ja: "しし座", zh: "狮子座", es: "Leo", id: "Leo", fr: "Lion", hi: "सिंह", pt: "Leão", ar: "الأسد", th: "ราศีสิงห์", vi: "Sư Tử", ru: "Лев" },
        height: "163cm", bloodType: "A",
        description: {
          ko: "IZ*ONE 출신의 리더로, 섬세한 감성과 강한 리더십을 겸비했습니다.",
          en: "Former IZ*ONE member and leader with delicate emotion and strong leadership.",
          ja: "IZ*ONE出身のリーダーで、繊細な感性と強いリーダーシップを兼ね備えています。",
          zh: "前 IZ*ONE 成员兼队长，兼具细腻的情感和强大的领导力。",
          es: "Ex integrante de IZ*ONE y líder con una sensibilidad delicada y un fuerte liderazgo.",
          id: "Mantan anggota IZ*ONE dan pemimpin dengan emosi yang halus dan kepemimpinan yang kuat.",
          fr: "Ancienne membre d'IZ*ONE et leader dotée d'une sensibilité délicate et d'un leadership fort.",
          hi: "नाजुक भावना और मजबूत नेतृत्व वाली IZ*ONE की पूर्व सदस्य और लीडर।",
          pt: "Ex-integrante do IZ*ONE e líder com sensibilidade delicada e liderança forte.",
          ar: "عضوة سابقة في فرقة IZ*ONE وقائدة تتمتع بمشاعر رقيقة وقيادة قوية.",
          th: "ลีดเดอร์อดีตสมาชิก IZ*ONE ที่มีความละเอียดอ่อนและความเป็นผู้นำที่แข็งแกร่ง",
          vi: "Cựu thành viên IZ*ONE và là trưởng nhóm với tâm hồn tinh tế và khả năng lãnh đạo mạnh mẽ.",
          ru: "Бывшая участница IZ*ONE и лидер, сочетающая в себе тонкую эмоциональность и сильные лидерские качества."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kim+Chaewon+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "IZ*ONE活動当時から「リーダーの素質」があると認められており、LE SSERAFIMでも自然とチームの中心的な役割を担うことになりました。",
            "SM・JYP・BigHitなど複数の大手事務所で練習生生活を送り、多様な音楽的トレーニングを積んだ「練習生のベテラン」です。",
            "メンバーが辛い時や悩みがある時に真っ先に頼る頼もしい長女であり、チームの精神的支柱の役割を果たしています。",
            "個人放送でゲームを楽しむ「ゲーマー」としての一面を見せ、意外なゲームの実力が話題になりました。",
            "正直でストレートな性格で、放送でも本心をありのままに伝える姿がファンから大きな信頼を得ています。"
          ],
          zh: [
            "从 IZ*ONE 活动时期就被公认为“领导者料”，在 LE SSERAFIM 中也自然而然地担任了团队的核心角色。",
            "曾在 SM、JYP、BigHit 等多家大型经纪公司度过练习生生活，积累了丰富的音乐训练，是“练习生老将”。",
            "是成员们在遇到困难或烦恼时第一个寻找的可靠大姐，扮演着团队精神支柱的角色。",
            "在个人直播中展现了喜欢游戏的“游戏玩家”一面，出人意料的游戏实力成为了话题。",
            "性格坦率直接，在节目中如实传达真心，给粉丝们带来了极大的信任感。"
          ],
          es: [
            "Fue reconocida como material de líder natural durante su etapa en IZ*ONE, y el papel la siguió naturalmente a LE SSERAFIM.",
            "Entrenó en múltiples agencias importantes, incluidas SM, JYP y BigHit: una aprendiz veterana con amplios cimientos musicales.",
            "Es la integrante a la que todas recurren primero cuando tienen problemas, sirviendo como el ancla emocional y el pilar de apoyo del equipo.",
            "Sorprendió a los fans al revelar un lado 'gamer' en transmisiones personales, y sus inesperadas habilidades con los videojuegos se convirtieron en un tema de conversación.",
            "Su personalidad directa y honesta —diciendo exactamente lo que piensa ante la cámara— le otorga una confianza y respeto constantes de parte de los fans."
          ],
          id: [
            "Dia diakui memiliki bakat pemimpin alami selama di IZ*ONE, dan peran tersebut mengikutinya secara alami ke LE SSERAFIM.",
            "Dia berlatih di beberapa agensi besar termasuk SM, JYP, dan BigHit — seorang trainee veteran dengan dasar musik yang luas.",
            "Dia adalah anggota yang didatangi semua orang saat sedang kesulitan, melayani sebagai jangkar emosional dan pilar pendukung tim.",
            "Dia mengejutkan penggemar dengan mengungkapkan sisi 'gamer' di siaran pribadi, dengan keterampilan bermain gamenya yang tak terduga menjadi bahan pembicaraan.",
            "Kepribadiannya yang lugas dan jujur — mengatakan apa yang sebenarnya dia maksud di depan kamera — mendapatkan kepercayaan dan rasa hormat yang konsisten dari penggemar."
          ],
          fr: [
            "Elle a été reconnue comme ayant l'étoffe d'une leader naturelle pendant IZ*ONE, et ce rôle l'a suivie naturellement dans LE SSERAFIM.",
            "Elle s'est entraînée dans plusieurs grandes agences, notamment SM, JYP et BigHit — une stagiaire vétérane avec des bases musicales solides.",
            "C'est la membre vers laquelle tout le monde se tourne en premier en cas de difficulté, servant d'ancre émotionnelle et de pilier de soutien à l'équipe.",
            "Elle a surpris les fans en révélant un côté 'gamer' lors de diffusions personnelles, ses compétences inattendues en jeu devenant un sujet de discussion.",
            "Sa personnalité directe et honnête — disant exactement ce qu'elle pense à la caméra — lui vaut une confiance et un respect constants de la part des fans."
          ],
          hi: [
            "IZ*ONE के दौरान उन्हें स्वाभाविक लीडर माना जाता था, और यह भूमिका LE SSERAFIM में भी उनके साथ रही।",
            "उन्होंने SM, JYP और BigHit सहित कई प्रमुख एजेंसियों में प्रशिक्षण लिया — व्यापक संगीत आधार वाली एक अनुभवी प्रशिक्षु।",
            "वह ऐसी सदस्य हैं जिनके पास हर कोई मुश्किल के समय पहले आता है, जो टीम के भावनात्मक आधार और समर्थन के स्तंभ के रूप में कार्य करती हैं।",
            "उन्होंने व्यक्तिगत प्रसारणों में 'गेमर' पक्ष का खुलासा करके प्रशंसकों को चौंका दिया, उनके अप्रत्याशित गेमिंग कौशल चर्चा का विषय बन गए।",
            "उनका सीधा, ईमानदार व्यक्तित्व — कैमरे पर वही कहना जो उनके मन में है — प्रशंसकों से निरंतर विश्वास और सम्मान अर्जित करता है।"
          ],
          pt: [
            "Ela foi reconhecida como tendo aptidão natural para liderança durante o IZ*ONE, e o papel seguiu-a naturalmente para o LE SSERAFIM.",
            "Treinou em várias agências importantes, incluindo SM, JYP e BigHit — uma trainee veterana com bases musicais amplas.",
            "Ela é a integrante a quem todos recorrem primeiro quando estão com dificuldades, servindo como a âncora emocional e o pilar de apoio da equipa.",
            "Surpreendeu os fãs ao revelar um lado 'gamer' em transmissões pessoais, com as suas inesperadas competências em jogos a tornarem-se um tema de conversa.",
            "A sua personalidade direta et honesta — dizendo exatamente o que quer dizer em frente às câmaras — conquista a confiança e o respeito consistentes dos fãs."
          ],
          ar: [
            "تم الاعتراف بها كموهبة قيادية طبيعية خلال فترة IZ*ONE، وتبعها الدور بشكل طبيعي إلى LE SSERAFIM.",
            "تدربت في العديد من الوكالات الكبرى بما في ذلك SM وJYP وBigHit - متدربة مخضرمة ذات أسس موسيقية واسعة.",
            "إنها العضوة التي يلجأ إليها الجميع أولاً عند مواجهة الصعوبات، حيث تعمل كمرساة عاطفية وركيزة دعم للفريق.",
            "فاجأت المعجبين بالكشف عن جانب 'اللاعبة' (gamer) في بثها الشخصي، حيث أصبحت مهاراتها غير المتوقعة في الألعاب حديث الجميع.",
            "شخصيتها المباشرة والصادقة - قول ما تعنيه تمامًا أمام الكاميرا - تمنحها ثقة واحترامًا مستمرين من المعجبين."
          ],
          th: [
            "เธอได้รับการยอมรับว่าเป็นผู้มีพรสวรรค์ด้านการเป็นผู้นำตั้งแต่สมัยอยู่วง IZ*ONE และบทบาทนี้ก็ได้ตามเธอมาที่วง LE SSERAFIM อย่างเป็นธรรมชาติ",
            "เธอเคยเป็นเด็กฝึกในค่ายเพลงยักษ์ใหญ่หลายแห่ง เช่น SM, JYP และ BigHit ซึ่งทำให้เธอมีพื้นฐานทางดนตรีที่แน่นและหลากหลาย",
            "เธอเป็นสมาชิกที่ทุกคนจะนึกถึงเป็นคนแรกเมื่อมีปัญหา โดยทำหน้าที่เป็นที่พึ่งทางใจและเสาหลักของทีม",
            "เธอทำให้แฟนๆ ตกใจด้วยการเผยด้านที่เป็น 'เกมเมอร์' ในไลฟ์ส่วนตัว ซึ่งทักษะการเล่นเกมที่เหนือความคาดหมายของเธอกลายเป็นหัวข้อที่พูดถึงกันมาก",
            "บุคลิกที่ตรงไปตรงมาและจริงใจของเธอ — การพูดสิ่งที่คิดออกมาตรงๆ ต่อหน้ากล้อง — ทำให้แฟนๆ ให้ความไว้วางใจและเคารพเธอเสมอ"
          ],
          vi: [
            "Cô được công nhận là có tố chất lãnh đạo bẩm sinh trong thời gian hoạt động với IZ*ONE, và vai trò đó đã theo cô một cách tự nhiên đến LE SSERAFIM.",
            "Cô đã thực tập tại nhiều công ty lớn bao gồm SM, JYP và BigHit — một thực tập sinh kỳ cựu với nền tảng âm nhạc rộng lớn.",
            "Cô là thành viên mà mọi người tìm đến đầu tiên khi gặp khó khăn, đóng vai trò là chỗ dựa tinh thần và trụ cột của cả nhóm.",
            "Cô khiến người hâm mộ ngạc nhiên khi tiết lộ khía cạnh 'game thủ' trong các buổi phát sóng cá nhân, với kỹ năng chơi game ngoài mong đợi đã trở thành chủ đề bàn tán.",
            "Tính cách thẳng thắn, trung thực của cô — nói đúng những gì mình nghĩ trước ống kính — giúp cô nhận được sự tin tưởng và tôn trọng nhất quán từ người hâm mộ."
          ],
          ru: [
            "Ее лидерские качества были признаны еще во время IZ*ONE, и эта роль естественным образом перешла с ней в LE SSERAFIM.",
            "Она стажировалась в нескольких крупных агентствах, включая SM, JYP и BigHit — опытный трейни с широким музыкальным кругозором.",
            "Она тот человек, к которому все обращаются в первую очередь в трудные минуты; она — эмоциональный якорь и опора команды.",
            "Она удивила фанатов, раскрыв свою сторону «геймера» во время личных трансляций, а ее неожиданные игровые навыки стали темой для обсуждения.",
            "Ее прямолинейность и честность — она говорит на камеру именно то, что думает — вызывают неизменное доверие и уважение фанатов."
          ]
        },
        socials: { instagram: "https://www.instagram.com/chaewo.n/" }
      },
      {
        id: "sakura",
        name: { ko: "사쿠라", en: "Sakura", ja: "サクラ", zh: "宫胁咲良", es: "Sakura", id: "Sakura", fr: "Sakura", hi: "सकुरा", pt: "Sakura", ar: "ساكورا", th: "ซากุระ", vi: "Sakura", ru: "Сакура" },
        role: { ko: "보컬/퍼포머", en: "Vocalist/Performer", ja: "ボーカル/パフォーマー", zh: "副唱/领舞", es: "Vocalista/Performer", id: "Vokalis/Performa", fr: "Chanteuse/Performeuse", hi: "गायक/परफॉर्मर", pt: "Vocalista/Performer", ar: "مغنية/مؤدية", th: "นักร้อง/เพอร์ฟอร์เมอร์", vi: "Ca sĩ/Người biểu diễn", ru: "Вокалист/Перформер" },
        birth: "1998.03.19", mbti: "ISTP",
        zodiac: { ko: "물고기자리", en: "Pisces", ja: "うお座", zh: "双鱼座", es: "Piscis", id: "Pisces", fr: "Poissons", hi: "मीन", pt: "Peixes", ar: "الحوت", th: "ราศีมีน", vi: "Song Ngư", ru: "Рыбы" },
        height: "164cm", bloodType: "AB",
        description: {
          ko: "HKT48·IZ*ONE를 거쳐 르세라핌까지, 독보적인 K-팝·J-팝 커리어를 보유한 베테랑 멤버입니다.",
          en: "A veteran with an unrivaled career spanning HKT48, IZ*ONE, and LE SSERAFIM across two countries.",
          ja: "HKT48、IZ*ONEを経てLE SSERAFIMまで、独歩的なK-POP・J-POPのキャリアを持つベテランメンバーです。",
          zh: "历经 HKT48、IZ*ONE 到 LE SSERAFIM，拥有独一无二的韩流和日语流行音乐职业生涯的资深成员。",
          es: "Una veterana con una carrera inigualable que abarca HKT48, IZ*ONE y LE SSERAFIM en dos países.",
          id: "Seorang veteran dengan karier tak tertandingi yang mencakup HKT48, IZ*ONE, dan LE SSERAFIM di dua negara.",
          fr: "Une vétérane avec une carrière inégalée couvrant HKT48, IZ*ONE et LE SSERAFIM dans deux pays.",
          hi: "दो देशों में HKT48, IZ*ONE और LE SSERAFIM तक फैले एक बेजोड़ करियर वाली दिग्गज सदस्य।",
          pt: "Uma veterana com uma carreira inigualável que abrange HKT48, IZ*ONE e LE SSERAFIM em dois países.",
          ar: "عضوة مخضرمة تتمتع بمسيرة مهنية لا مثيل لها تشمل HKT48 وIZ*ONE وLE SSERAFIM في بلدين.",
          th: "สมาชิกผู้มีประสบการณ์ที่มีเส้นทางอาชีพโดดเด่นทั้งใน K-pop และ J-pop ผ่านวง HKT48, IZ*ONE และ LE SSERAFIM",
          vi: "Một thành viên kỳ cựu với sự nghiệp vô song trải dài qua HKT48, IZ*ONE và LE SSERAFIM tại hai quốc gia.",
          ru: "Ветеран с уникальной карьерой, охватывающей HKT48, IZ*ONE и LE SSERAFIM в двух странах."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Sakura+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "HKT48・AKB48・IZ*ONEを経てLE SSERAFIMまで、J-POPとK-POPの両方でトップに立った前例のないキャリアを持っています。",
            "デビュー10年を超えるベテランとして、メンバーにステージマナーやファンとのコミュニケーション方法を自然に教える「生きる教科書」です。",
            "韓国ドラマやバラエティが好きで韓国語を学ぶきっかけになったと明かしており、現在は流暢な韓国語で番組でも活躍しています。",
            "ファンの間では「サクラが加入するグループは売れる」という「サクラの法則」が半ば冗談、半ば本気で信じられています。",
            "日本のファンとのコミュニケーションのためにSNSで直接日本語のメッセージをこまめに投稿しており、「チームの日本公式通訳担当」として親しまれています。"
          ],
          zh: [
            "历经 HKT48、AKB48、IZ*ONE 到 LE SSERAFIM，在日流和韩流两边都登上了巅峰，拥有前所未有的职业生涯。",
            "作为出道超过 10 年的老将，是自然地向成员们传授舞台礼仪、粉丝沟通方法的“活教材”。",
            "曾表示因为喜欢韩剧和综艺而开始学习韩语，现在能以流利的韩语在节目中表现活跃。",
            "粉丝之间流传着“只要有樱花加入，团体就会火”的“樱花法则”，这既是玩笑也是认同。",
            "为了与日本粉丝沟通，经常在社交媒体上发布日语信息，被认为是“团队的日本官方翻译担当”。"
          ],
          es: [
            "Su carrera, que abarca HKT48, AKB48, IZ*ONE y LE SSERAFIM tanto en Japón como en Corea, no tiene precedentes en la historia del J-pop y el K-pop.",
            "Como veterana de la industria con más de 10 años, enseña naturalmente a las miembros la etiqueta en el escenario y la comunicación con los fans: es un libro de texto viviente.",
            "Aprendió coreano en parte viendo K-dramas y programas de variedades, y ahora se desenvuelve con fluidez en las transmisiones.",
            "Los fans hacen circular, medio en broma medio en serio, la 'Ley de Sakura': cada grupo al que se une tiene éxito.",
            "Publica constantemente en japonés en las redes sociales para conectar con los fans japoneses, sirviendo como el canal de comunicación no oficial del equipo en Japón."
          ],
          id: [
            "Kariernya yang mencakup HKT48, AKB48, IZ*ONE, dan LE SSERAFIM di Jepang dan Korea benar-benar belum pernah terjadi sebelumnya dalam sejarah J-pop dan K-pop.",
            "Sebagai veteran industri selama 10+ tahun, dia secara alami mengajarkan etiket panggung dan komunikasi penggemar kepada anggota — sebuah buku teks yang hidup.",
            "Dia belajar bahasa Korea sebagian melalui menonton K-drama dan variety show, dan sekarang menangani siaran dengan lancar.",
            "Penggemar sering bergurau tentang 'Hukum Sakura': setiap grup yang dia ikuti pasti akan sukses.",
            "Dia secara konsisten memposting dalam bahasa Jepang di media sosial untuk terhubung dengan penggemar Jepang, melayani sebagai saluran komunikasi Jepang tidak resmi tim."
          ],
          fr: [
            "Sa carrière couvrant HKT48, AKB48, IZ*ONE et LE SSERAFIM au Japon et en Corée est véritablement sans précédent dans l'histoire de la J-pop et de la K-pop.",
            "En tant que vétérane de l'industrie depuis plus de 10 ans, elle enseigne naturellement aux membres les bonnes manières sur scène et la communication avec les fans — un manuel vivant.",
            "Elle a appris le coréen en partie en regardant des K-dramas et des émissions de variété, et gère désormais les émissions couramment.",
            "Les fans font circuler sur le ton de la plaisanterie la 'Loi de Sakura' : chaque groupe qu'elle rejoint devient un succès.",
            "Elle publie régulièrement en japonais sur les réseaux sociaux pour rester en contact avec les fans japonais, servant de canal de communication officieux pour le Japon."
          ],
          hi: [
            "जापान और कोरिया में HKT48, AKB48, IZ*ONE और LE SSERAFIM तक फैला उनका करियर वास्तव में जे-पॉप और के-पॉप दोनों इतिहासों में अभूतपूर्व है।",
            "10+ साल के उद्योग के दिग्गज के रूप में, वह स्वाभाविक रूप से सदस्यों को स्टेज शिष्टाचार और प्रशंसक संचार सिखाती हैं — एक जीवित पाठ्यपुस्तक।",
            "उन्होंने आंशिक रूप से के-ड्रामा और वैरायटी शो देखकर कोरियाई सीखी, और अब धाराप्रवाह प्रसारण संभालती हैं।",
            "प्रशंसक मजाक में 'सकुरा कानून' की चर्चा करते हैं: वह जिस भी समूह में शामिल होती हैं वह सफल हो जाता है।",
            "वह जापानी प्रशंसकों से जुड़ने के लिए सोशल मीडिया पर लगातार जापानी में पोस्ट करती हैं, जो टीम के अनौपचारिक जापानी संचार चैनल के रूप में कार्य करती हैं।"
          ],
          pt: [
            "A sua carreira, que abrange HKT48, AKB48, IZ*ONE e LE SSERAFIM no Japão e na Coreia, é verdadeiramente sem precedentes na história do J-pop e do K-pop.",
            "Como veterana da indústria com mais de 10 anos, ensina naturalmente às integrantes a etiqueta de palco e a comunicação com os fãs — um livro de texto vivo.",
            "Aprendeu coreano em parte assistindo a K-dramas e programas de variedades, e agora lida com transmissões fluentemente.",
            "Os fãs circulam, meio a brincar, meio a sério, a 'Lei de Sakura': todos os grupos em que ela entra tornam-se bem-sucedidos.",
            "Publica consistentemente em japonês nas redes sociais para se ligar aos fãs japoneses, servindo como o canal de comunicação não oficial da equipa para o Japão."
          ],
          ar: [
            "مسيرتها المهنية التي تشمل HKT48 وAKB48 وIZ*ONE وLE SSERAFIM في كل من اليابان وكوريا هي مسيرة غير مسبوقة حقًا في تاريخ الجيبوب والكيبوب.",
            "بصفتها خبيرة في الصناعة لأكثر من 10 سنوات، فهي تعلم العضوات بشكل طبيعي آداب المسرح والتواصل مع المعجبين - فهي بمثابة كتاب مدرسي حي.",
            "تعلمت اللغة الكورية جزئيًا من خلال مشاهدة الدراما والبرامج الكورية، وهي الآن تدير البرامج بطلاقة.",
            "يتداول المعجبون مازحين 'قانون ساكورا': كل فرقة تنضم إليها تصبح ناجحة.",
            "تنشر بانتظام باللغة اليابانية على وسائل التواصل الاجتماعي للتواصل مع المعجبين اليابانيين، حيث تعمل كقناة تواصل غير رسمية للفريق في اليابان."
          ],
          th: [
            "เส้นทางอาชีพของเธอที่ผ่านทั้ง HKT48, AKB48, IZ*ONE และ LE SSERAFIM ทั้งในญี่ปุ่นและเกาหลีนั้นถือว่าไม่ธรรมดาและหาได้ยากยิ่งในประวัติศาสตร์ J-pop และ K-pop",
            "ในฐานะรุ่นพี่ในวงการที่มีประสบการณ์มากกว่า 10 ปี เธอได้สอนมารยาทบนเวทีและวิธีสื่อสารกับแฟนๆ ให้กับสมาชิกคนอื่นๆ จนได้รับการขนานนามว่าเป็น 'ตำราที่มีชีวิต'",
            "เธอบอกว่าความชอบในซีรีส์และรายการวาไรตี้เกาหลีเป็นแรงผลักดันให้เธอเรียนภาษาเกาหลี จนตอนนี้เธอสามารถสื่อสารได้อย่างคล่องแคล่ว",
            "ในหมู่แฟนๆ มีการพูดถึง 'กฎของซากุระ' ซึ่งเป็นความเชื่อกึ่งเล่นกึ่งจริงว่า 'วงไหนที่มีซากุระ วงนั้นจะดัง'",
            "เธอมักจะโพสต์ข้อความภาษาญี่ปุ่นในโซเชียลมีเดียเพื่อสื่อสารกับแฟนๆ ชาวญี่ปุ่นโดยเฉพาะ จนได้รับการยกย่องว่าเป็น 'ล่ามภาษาญี่ปุ่นประจำวง'"
          ],
          vi: [
            "Sự nghiệp của cô trải dài qua HKT48, AKB48, IZ*ONE và LE SSERAFIM tại cả Nhật Bản và Hàn Quốc thực sự là chưa từng có trong cả lịch sử J-pop và K-pop.",
            "Là một người có hơn 10 năm kinh nghiệm trong ngành, cô ấy truyền dạy một cách tự nhiên cho các thành viên về cách ứng xử trên sân khấu và cách giao tiếp với người hâm mộ — giống như một cuốn sách giáo khoa sống vậy.",
            "Cô cho biết mình bắt đầu học tiếng Hàn vì yêu thích các bộ phim truyền hình và chương trình thực tế Hàn Quốc, và hiện tại cô đã có thể hoạt động tích cực trên các chương trình với vốn tiếng Hàn lưu loát.",
            "Trong cộng đồng người hâm mộ, 'Định luật Sakura' (Sakura gia nhập nhóm nào thì nhóm đó sẽ thành công) thường được lưu truyền như một lời khen ngợi dành cho cô.",
            "Cô thường xuyên đăng các thông điệp bằng tiếng Nhật trên mạng xã hội để giao tiếp với người hâm mộ Nhật Bản, được coi là 'người phụ trách thông dịch tiếng Nhật chính thức của nhóm'."
          ],
          ru: [
            "Ее карьера, охватывающая HKT48, AKB48, IZ*ONE и LE SSERAFIM в Японии и Корее, поистине беспрецедентна в истории J-pop и K-pop.",
            "Как ветеран индустрии с более чем 10-летним стажем, она естественным образом обучает участниц этикету на сцене и общению с фанатами — настоящий «живой учебник».",
            "Она призналась, что любовь к корейским дорамам и шоу подтолкнула ее к изучению языка, и теперь она свободно общается на нем в эфире.",
            "Среди фанатов полушутя-полусерьезно ходит «закон Сакуры»: любая группа, к которой она присоединяется, становится успешной.",
            "Она постоянно публикует сообщения на японском языке в социальных сетях для связи с японскими фанатами, выступая в роли неофициального переводчика группы."
          ]
        },
        socials: { instagram: "https://www.instagram.com/39saku_chan/" }
      },
      {
        id: "yunjin",
        name: { ko: "허윤진", en: "Huh Yunjin", ja: "ホ・ユンジン", zh: "许允真", es: "Huh Yunjin", id: "Huh Yunjin", fr: "Huh Yunjin", hi: "हु युनजिन", pt: "Huh Yunjin", ar: "هوه يونجين", th: "ฮอ ยุนจิน", vi: "Huh Yunjin", ru: "Хо Юнджин" },
        role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer", ja: "リードボーカル/リードダンサー", zh: "领唱/领舞", es: "Vocalista líder/Bailarina líder", id: "Vokalis Utama/Penari Utama", fr: "Chanteuse principale/Danseuse principale", hi: "लीड गायक/लीड डांसर", pt: "Vocalista líder/Dançarina líder", ar: "مغنية رائدة/راقصة رائدة", th: "นักร้องนำ/นักเต้นนำ", vi: "Giọng ca dẫn/Vũ công dẫn", ru: "Ведущий вокалист/Ведущий танцор" },
        birth: "2001.10.08", mbti: "ENFJ",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ราศีตุลย์", vi: "Thiên Bình", ru: "Весы" },
        height: "167cm", bloodType: "A",
        description: {
          ko: "미국에서 성장한 글로벌 감성을 가진 솔로 싱어송라이터이자 르세라핌의 보컬 핵심입니다.",
          en: "A solo singer-songwriter raised in the US with a global sensibility and LE SSERAFIM's vocal core.",
          ja: "アメリカで育ったグローバルな感性を持つソロシンガーソングライターであり、LE SSERAFIMのボーカルの核です。",
          zh: "在美国长大的具有全球感性的个人创作歌手，也是 LE SSERAFIM 的人声核心。",
          es: "Una cantautora solista criada en los EE. UU. con una sensibilidad global y el núcleo vocal de LE SSERAFIM.",
          id: "Penyanyi-penulis lagu solo yang besar di AS dengan sensibilitas global dan inti vokal LE SSERAFIM.",
          fr: "Une auteur-compositeur-interprète solo élevée aux États-Unis avec une sensibilité mondiale et le cœur vocal de LE SSERAFIM.",
          hi: "अमेरिका में पली-बढ़ी वैश्विक संवेदनशीलता वाली एक एकल गायक-गीतकार और LE SSERAFIM की वोकल कोर।",
          pt: "Uma cantautora solo criada nos EUA com uma sensibilidade global e o núcleo vocal do LE SSERAFIM.",
          ar: "مغنية ومؤلفة أغاني منفردة نشأت في الولايات المتحدة وتتمتع بحس عالمي وهي النواة الصوتية لفرقة LE SSERAFIM.",
          th: "นักร้องนักแต่งเพลงโซโล่ที่เติบโตในสหรัฐอเมริกา มีความอ่อนไหวระดับสากลและเป็นหัวใจหลักด้านเสียงร้องของ LE SSERAFIM",
          vi: "Một ca sĩ kiêm nhạc sĩ solo lớn lên ở Hoa Kỳ với tư duy toàn cầu và là linh hồn trong giọng hát của LE SSERAFIM.",
          ru: "Сольная певица и автор песен, выросшая в США, с глобальным мировоззрением и вокальным ядром LE SSERAFIM."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Huh+Yunjin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "アメリカのニューヨークとカナダを経て韓国に来た真のグローバルアーティストで、英語・韓国語の両方を母国語レベルで操ります。",
            "自ら作詞・作曲したソロシングル「I ≠ DOLL」は、「完璧なイメージの代わりに正直な自分を見せる」という強いメッセージで世界中のファンに大きな感動を与えました。",
            "チェロを演奏できるほど深い音楽的素養を持っており、楽器演奏に対する情熱も並外れています。",
            "LE SSERAFIMのメンバーの中で最も積極的にソロ活動を展開しており、自分だけの音楽世界とファン層を独自に構築しています。",
            "「完璧なペルソナよりも正直な自分を見せたい」というインタビューでの発言が多くのファンやメディアで語り継がれ、真実味のあるアーティストとして認められています。"
          ],
          zh: [
            "经历过美国纽约和加拿大后来到韩国，是一位真正的全球艺术家，英语和韩语都达到了母语水平。",
            "亲自作词作曲的个人单曲《I ≠ DOLL》以“展示真实的自我，而不是完美的形象”这一强烈的信息感动了全世界的粉丝。",
            "具备能够演奏大提琴的深厚音乐素养，对乐器演奏有着不寻常的热情。",
            "是 LE SSERAFIM 成员中开展个人活动最积极的一位，正在独立构建属于自己的音乐世界和粉丝群。",
            "她在采访中提到的“比起完美的形象，更想展示真实的自我”被许多粉丝和媒体广为流传，被认可为真诚的艺术家。"
          ],
          es: [
            "Habiendo crecido en Nueva York y Canadá antes de venir a Corea, tanto el inglés como el coreano son lenguas nativas para ella: una verdadera artista global.",
            "Su sencillo en solitario escrito por ella misma, 'I ≠ DOLL', con su mensaje de 'mostrar mi yo honesto en lugar de una imagen perfecta', conmovió profundamente a los fans de todo el mundo.",
            "Sabe tocar el violonchelo, lo que refleja una profundidad musical que va mucho más allá del canto y la interpretación.",
            "Es la miembro más activa de LE SSERAFIM en actividades en solitario, construyendo de forma independiente su propio mundo musical y una base de fans dedicada.",
            "Su declaración 'prefiero mostrar mi yo honesto que una persona perfecta' ha sido ampliamente citada, consolidando su reputación como una artista auténtica."
          ],
          id: [
            "Tumbuh di New York dan Kanada sebelum datang ke Korea, baik bahasa Inggris maupun Korea adalah bahasa asli baginya — seorang seniman global sejati.",
            "Singel solonya yang ditulis sendiri 'I ≠ DOLL', dengan pesannya 'menunjukkan diriku yang jujur alih-alih citra yang sempurna', sangat menyentuh hati penggemar di seluruh dunia.",
            "Dia bisa bermain cello, mencerminkan kedalaman musik yang meluas melampaui menyanyi dan pertunjukan.",
            "Dia adalah anggota LE SSERAFIM yang paling aktif dalam kegiatan solo, secara mandiri membangun dunia musiknya sendiri dan basis penggemar yang berdedikasi.",
            "Pernyataannya 'Saya lebih suka menunjukkan diri saya yang jujur daripada persona yang sempurna' telah banyak dikutip, memperkuat reputasinya sebagai seniman yang autentik."
          ],
          fr: [
            "Ayant grandi à New York et au Canada avant de venir en Corée, l'anglais et le coréen sont ses deux langues maternelles — une véritable artiste internationale.",
            "Son single solo qu'elle a elle-même écrit, 'I ≠ DOLL', avec son message consistant à 'montrer mon moi honnête plutôt qu'une image parfaite', a profondément ému les fans du monde entier.",
            "Elle sait jouer du violoncelle, ce qui reflète une profondeur musicale qui va bien au-delà du chant et de la performance.",
            "C'est la membre de LE SSERAFIM la plus active dans les activités en solo, construisant de manière indépendante son propre univers musical et sa base de fans dévoués.",
            "Sa déclaration 'Je préfère montrer mon moi honnête qu'un personnage parfait' a été largement citée, cimentant sa réputation d'artiste authentique."
          ],
          hi: [
            "कोरिया आने से पहले न्यूयॉर्क और कनाडा में पली-बढ़ी, अंग्रेजी और कोरियाई दोनों उनके लिए मूल भाषाएँ हैं — एक सच्ची वैश्विक कलाकार।",
            "उनका स्वयं लिखा हुआ एकल गीत 'I ≠ DOLL', 'एक आदर्श छवि के बजाय अपने ईमानदार स्व को दिखाने' के संदेश के साथ, दुनिया भर के प्रशंसकों को गहराई से प्रभावित कर गया।",
            "वह चेलो बजा सकती हैं, जो संगीत की गहराई को दर्शाता है जो गायन और प्रदर्शन से कहीं आगे तक फैला हुआ है।",
            "वह एकल गतिविधियों में सबसे सक्रिय LE SSERAFIM सदस्य हैं, जो स्वतंत्र रूप से अपनी संगीत दुनिया और समर्पित प्रशंसक आधार बना रही हैं।",
            "उनका बयान 'मैं एक आदर्श व्यक्तित्व के बजाय अपना ईमानदार पक्ष दिखाना पसंद करूंगी' व्यापक रूप से उद्धृत किया गया है, जिससे एक प्रामाणिक कलाकार के रूप में उनकी प्रतिष्ठा मजबूत हुई है।"
          ],
          pt: [
            "Tendo crescido em Nova Iorque e no Canadá antes de vir para a Coreia, tanto o inglês como o coreano são línguas nativas para ela — uma verdadeira artista global.",
            "O seu single a solo escrito pela própria, 'I ≠ DOLL', com a sua mensagem de 'mostrar o meu eu honesto em vez de uma imagem perfeita', comoveu profundamente os fãs de todo o mundo.",
            "Sabe tocar violoncelo, refletindo uma profundidade musical que va muito além do canto e da performance.",
            "É a integrante mais ativa do LE SSERAFIM em atividades a solo, construindo de forma independente o seu próprio mundo musical e uma base de fãs dedicada.",
            "A sua afirmação 'Prefiro mostrar o meu eu honesto do que uma persona perfeita' tem sido amplamente citada, consolidando a sua reputação como uma artista autêntica."
          ],
          ar: [
            "نشأت في نيويورك وكندا قبل مجيئها إلى كوريا، وتعتبر كل من الإنجليزية والكورية لغتين أصليتين لها - فهي فنانة عالمية حقيقية.",
            "أغنيتها المنفردة التي كتبتها بنفسها 'I ≠ DOLL'، برسالتها التي تدعو إلى 'إظهار نفسي الصادقة بدلاً من الصورة المثالية' ، أثرت بعمق في المعجبين حول العالم.",
            "يمكنها العزف على التشيلو، مما يعكس عمقًا موسيقيًا يمتد إلى ما هو أبعد من الغناء والأداء.",
            "إنها العضوة الأكثر نشاطًا في LE SSERAFIM في الأنشطة المنفردة، حيث تبني بشكل مستقل عالمها الموسيقي الخاص وقاعدتها الجماهيرية المخصصة.",
            "لقد تم اقتباس عبارتها 'أفضل إظهار نفسي الصادقة بدلاً من الشخصية المثالية' على نطاق واسع، مما عزز سمعتها كفنانة أصيلة."
          ],
          th: [
            "เธอเติบโตที่นิวยอร์กและแคนาดาก่อนจะมาเกาหลี ทำให้พูดได้ทั้งภาษาอังกฤษและเกาหลีในระดับเจ้าของภาษา — เป็นศิลปินระดับโกลบอลอย่างแท้จริง",
            "ซิงเกิลเดี่ยว 'I ≠ DOLL' ที่เธอแต่งเอง ซึ่งมีข้อความว่า 'การแสดงตัวตนที่แท้จริงแทนภาพลักษณ์ที่สมบูรณ์แบบ' สร้างความประทับใจให้แฟนๆ ทั่วโลกอย่างมาก",
            "เธอมีความสามารถทางดนตรีที่ลึกซึ้งถึงขั้นเล่นเชลโลได้ และมีความหลงใหลในการเล่นเครื่องดนตรีเป็นพิเศษ",
            "เธอเป็นสมาชิกวง LE SSERAFIM ที่มีผลงานโซโล่คึกคักที่สุด โดยสร้างโลกดนตรีและฐานแฟนคลับของตัวเองได้อย่างอิสระ",
            "คำพูดของเธอที่ว่า 'ฉันอยากแสดงตัวตนที่จริงใจมากกว่าภาพลักษณ์ที่สมบูรณ์แบบ' ถูกนำไปอ้างถึงอย่างกว้างขวาง ทำให้เธอได้รับการยอมรับในฐานะศิลปินที่จริงใจ"
          ],
          vi: [
            "Là một nghệ sĩ toàn cầu thực thụ đến từ New York và Canada trước khi đến Hàn Quốc, cô sử dụng thành thạo cả tiếng Anh và tiếng Hàn như ngôn ngữ mẹ đẻ.",
            "Đĩa đơn solo tự sáng tác 'I ≠ DOLL' với thông điệp mạnh mẽ 'Sẽ cho thấy một tôi chân thực thay vì một hình ảnh hoàn hảo' đã gây xúc động lớn cho người hâm mộ trên toàn thế giới.",
            "Cô có kiến thức âm nhạc sâu rộng đến mức có thể chơi được đàn cello và có niềm đam mê đặc biệt với việc chơi nhạc cụ.",
            "Trong số các thành viên LE SSERAFIM, cô là người hoạt động solo tích cực nhất, tự mình xây dựng thế giới âm nhạc và cộng đồng người hâm mộ riêng.",
            "Phát biểu trong cuộc phỏng vấn 'Tôi muốn cho mọi người thấy con người thật của mình hơn là một nhân vật hoàn hảo' đã được nhiều người hâm mộ và giới truyền thông nhắc đến, giúp cô được công nhận là một nghệ sĩ chân chính."
          ],
          ru: [
            "Она выросла в Нью-Йорке и Канаде, прежде чем приехать в Корею; и английский, и корейский для нее — родные языки. Настоящий глобальный артист.",
            "Ее сольный сингл «I ≠ DOLL», который она написала сама, с его призывом «показывать свою честную сущность вместо идеального образа», глубоко тронул фанатов по всему миру.",
            "Она умеет играть на виолончели, что отражает глубину ее музыкальных познаний, выходящую далеко за рамки пения и танцев.",
            "Она самая активная участница LE SSERAFIM в сольной деятельности, самостоятельно создающая свой музыкальный мир и преданную базу фанатов.",
            "Ее фраза «Я лучше покажу себя настоящую, чем буду идеальной маской» широко цитировалась, укрепив ее репутацию искреннего артиста."
          ]
        },
        socials: { instagram: "https://www.instagram.com/yunjin_huh/" }
      },
      {
        id: "kazuha",
        name: { ko: "카즈하", en: "Kazuha", ja: "カズハ", zh: "中村一叶", es: "Kazuha", id: "Kazuha", fr: "Kazuha", hi: "काज़ुहा", pt: "Kazuha", ar: "كازوها", th: "คาซึฮะ", vi: "Kazuha", ru: "Казуха" },
        role: { ko: "댄서/보컬", en: "Dancer/Vocalist", ja: "ダンサー/ボーカル", zh: "领舞/副唱", es: "Bailarina/Vocalista", id: "Penari/Vokalis", fr: "Danseuse/Chanteuse", hi: "डांसर/गायक", pt: "Dançarina/Vocalista", ar: "راقصة/مغنية", th: "นักเต้น/นักร้อง", vi: "Vũ công/Ca sĩ", ru: "Танцор/Вокалист" },
        birth: "2003.08.09", mbti: "ISFP",
        zodiac: { ko: "사자자리", en: "Leo", ja: "しし座", zh: "狮子座", es: "Leo", id: "Leo", fr: "Lion", hi: "सिंह", pt: "Leão", ar: "الأسد", th: "ราศีสิงห์", vi: "Sư Tử", ru: "Лев" },
        height: "170cm", bloodType: "O",
        description: {
          ko: "일본 프로 발레리나 출신으로, 발레 무브먼트를 K-팝 퍼포먼스에 접목한 독보적인 댄서입니다.",
          en: "A former Japanese professional ballerina who integrates ballet movements into K-pop performance uniquely.",
          ja: "日本のプロバレリーナ出身で、バレエの動きをK-POPパフォーマンスに取り入れた独歩的なダンサーです。",
          zh: "前日本职业芭蕾舞演员，将芭蕾舞动作独特地融入韩流表演的杰出舞者。",
          es: "Ex bailarina profesional japonesa que integra de forma única los movimientos de ballet en las actuaciones de K-pop.",
          id: "Mantan balerina profesional Jepang yang mengintegrasikan gerakan balet ke dalam pertunjukan K-pop secara unik.",
          fr: "Ancienne ballerine professionnelle japonaise qui intègre de manière unique les mouvements de ballet dans les performances K-pop.",
          hi: "एक पूर्व जापानी पेशेवर बैलेरीना जो विशिष्ट रूप से के-पॉप प्रदर्शन में बैले आंदोलनों को एकीकृत करती है।",
          pt: "Ex-bailarina profissional japonesa que integra de forma única movimentos de balé em performances de K-pop.",
          ar: "باليرينا محترفة يابانية سابقة تدمج حركات الباليه في عروض الكيبوب بشكل فريد.",
          th: "อดีตนักบัลเล่ต์มืออาชีพชาวญี่ปุ่นที่ผสมผสานการเคลื่อนไหวแบบบัลเล่ต์เข้ากับการแสดง K-pop ได้อย่างโดดเด่น",
          vi: "Cựu diễn viên múa ba lê chuyên nghiệp người Nhật Bản, người lồng ghép các chuyển động ba lê vào các màn trình diễn K-pop một cách độc đáo.",
          ru: "Бывшая японская профессиональная балерина, уникально сочетающая балетные движения с выступлениями в стиле K-pop."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kazuha+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "大阪出身で7歳からクラシックバレエを始め、プロのバレリーナとして活動した後にK-POPアイドルに挑戦するという異例の経歴を持っています。",
            "バレエに基づいた精巧な身のこなしが、LE SSERAFIMのステージに他のメンバーとは差別化された独歩的な優雅さを加えています。",
            "韓国語を初めて学んだ際、練習生の中で最も早く日常会話を習得し、「言語の天才」と呼ばれました。",
            "自ら撮影してInstagramに投稿する写真が芸術作品レベルだとして、ファンから「アイドル界のフォトグラファー」と称賛されています。",
            "静かで内向的な性格ですが、カメラの前では強烈で優雅な、全く異なる存在感を放ちます。"
          ],
          zh: [
            "出生于大阪，从 7 岁开始学习古典芭蕾，曾作为职业芭蕾舞演员活动，之后挑战成为韩流偶像，拥有非凡的简历。",
            "基于芭蕾的精湛身姿为 LE SSERAFIM 的舞台增添了区别于其他成员的独特优雅感。",
            "刚开始学习韩语时，是练习生中掌握日常会话最快的一位，被称为“语言天才”。",
            "亲自拍摄并上传到 Instagram 的照片被粉丝称赞为艺术品水平，获得了“偶像界摄影师”的赞誉。",
            "虽然性格安静内向，但在镜头前却能散发出强烈而优雅的截然不同的存在感。"
          ],
          es: [
            "De Osaka, comenzó con el ballet clásico a los 7 años y trabajó como bailarina profesional antes de dar el salto dramático a ídolo del K-pop.",
            "Su mecánica corporal entrenada en ballet añade una elegancia única y graciosa a las actuaciones de LE SSERAFIM que ninguna otra integrante replica.",
            "Aprendió coreano conversacional más rápido que cualquier otra aprendiz cuando llegó por primera vez, ganándose el apodo de 'genio de los idiomas'.",
            "Las fotos que toma personalmente y publica en Instagram son elogiadas como obras de arte, lo que le ha valido el título de 'fotógrafa del mundo ídolo'.",
            "Su personalidad tranquila e introvertida se transforma por completo frente a las cámaras en una presencia escénica intensa y elegante."
          ],
          id: [
            "Berasal dari Osaka, dia memulai balet klasik pada usia 7 tahun dan bekerja sebagai balerina profesional sebelum melakukan lompatan dramatis menjadi idola K-pop.",
            "Mekanika tubuhnya yang terlatih balet menambahkan keanggunan yang unik pada penampilan LE SSERAFIM yang tidak dapat ditiru oleh anggota lain.",
            "Dia menguasai percakapan bahasa Korea lebih cepat daripada trainee lainnya ketika dia pertama kali datang, mendapatkan label 'jenius bahasa'.",
            "Foto-foto yang dia potret dan posting sendiri di Instagram dipuji sebagai karya seni, membuatnya mendapatkan gelar 'fotografer dunia idola'.",
            "Kepribadiannya yang tenang dan introvert berubah sepenuhnya di depan kamera menjadi kehadiran panggung yang intens dan anggun."
          ],
          fr: [
            "Originaire d'Osaka, elle a commencé le ballet classique à l'âge de 7 ans et a travaillé comme ballerine professionnelle avant de faire le saut spectaculaire vers le statut d'idole de la K-pop.",
            "Sa mécanique corporelle formée au ballet ajoute une élégance gracieuse unique aux performances de LE SSERAFIM qu'aucune autre membre ne reproduit.",
            "Elle a appris le coréen plus vite que n'importe quelle autre stagiaire à son arrivée, ce qui lui a valu le qualificatif de 'génie des langues'.",
            "Les photos qu'elle prend personnellement et publie sur Instagram sont louées comme des œuvres d'art, ce qui lui vaut le titre de 'photographe du monde des idoles'.",
            "Sa personnalité calme et introvertie se transforme complètement devant les caméras en une présence scénique intense et gracieuse."
          ],
          hi: [
            "ओसाका से, उन्होंने 7 साल की उम्र में शास्त्रीय बैले शुरू किया और के-पॉप आइडल बनने के लिए नाटकीय छलांग लगाने से पहले एक पेशेवर बैलेरीना के रूप में काम किया।",
            "उनके बैले-प्रशिक्षित शरीर की चाल LE SSERAFIM के प्रदर्शन में एक विशिष्ट सुंदर भव्यता जोड़ती है जिसे कोई अन्य सदस्य दोहरा नहीं सकता है।",
            "जब वह पहली बार आई थीं, तो उन्होंने किसी भी अन्य प्रशिक्षु की तुलना में तेजी से बोलचाल की कोरियाई सीखी, जिससे उन्हें 'भाषा की प्रतिभा' का खिताब मिला।",
            "वह व्यक्तिगत रूप से जो तस्वीरें खींचती हैं और इंस्टाग्राम पर पोस्ट करती हैं, उन्हें कला के कार्यों के रूप में सराहा जाता है, जिससे उन्हें 'आइडल वर्ल्ड फोटोग्राफर' का खिताब मिला है।",
            "कैमरों के सामने उनका शांत, अंतर्मुखी व्यक्तित्व पूरी तरह से एक गहन, सुंदर मंच उपस्थिति में बदल जाता है।"
          ],
          pt: [
            "De Osaka, começou o balé clássico aos 7 anos e trabalhou como bailarina profissional antes de dar o salto dramático para ídolo de K-pop.",
            "A sua mecânica corporal treinada no balé adiciona uma elegância graciosa única às performances do LE SSERAFIM que nenhuma outra integrante replica.",
            "Aprendeu coreano conversacional mais rápido do que qualquer outra trainee quando chegou, ganhando o rótulo de 'génio das línguas'.",
            "As fotos que ela própria tira e publica no Instagram são elogiadas como obras de arte, valendo-lhe o título de 'fotógrafa do mundo dos ídolos'.",
            "A sua personalidade calma e introvertida transforma-se completamente à frente das câmaras numa presença de palco intensa e graciosa."
          ],
          ar: [
            "من أوساكا، بدأت الباليه الكلاسيكي في سن السابعة وعملت كباليرينا محترفة قبل القيام بالقفزة الدرامية لتصبح آيدول كيبوب.",
            "تضيف حركاتها الجسدية المدربة على الباليه أناقة رشيقة فريدة إلى عروض LE SSERAFIM لا تكررها أي عضوة أخرى.",
            "تعلمت اللغة الكورية المحكية بشكل أسرع من أي متدربة أخرى عند وصولها لأول مرة، مما أكسبها لقب 'عبقرية اللغات'.",
            "تتم الإشادة بالصور التي تلتقطها بنفسها وتنشرها على إنستغرام كأعمال فنية، مما منحها لقب 'مصورة عالم الآيدول'.",
            "تتحول شخصيتها الهادئة والانطوائية تمامًا أمام الكاميرات إلى حضور مسرحي مكثف وراقي."
          ],
          th: [
            "เธอเกิดที่โอซาก้า เริ่มเรียนบัลเล่ต์คลาสสิกตั้งแต่อายุ 7 ปี และเคยทำงานเป็นนักบัลเล่ต์มืออาชีพก่อนจะตัดสินใจครั้งใหญ่มาเป็นไอดอล K-pop",
            "การเคลื่อนไหวร่างกายที่มีพื้นฐานมาจากบัลเล่ต์ช่วยเพิ่มความสง่างามที่โดดเด่นให้กับการแสดงของวง ซึ่งเป็นเอกลักษณ์ที่ไม่มีใครเหมือน",
            "ตอนเริ่มเรียนภาษาเกาหลี เธอสามารถเรียนรู้บทสนทนาในชีวิตประจำวันได้เร็วกว่าเด็กฝึกคนอื่นๆ จนได้รับฉายาว่า 'อัจฉริยะด้านภาษา'",
            "รูปถ่ายที่เธอถ่ายและโพสต์ลงอินสตาแกรมได้รับการยกย่องจากแฟนๆ ว่าสวยงามราวกับงานศิลปะ จนเธอได้รับฉายา 'ช่างภาพแห่งวงการไอดอล'",
            "แม้จะมีบุคลิกที่เงียบและนิ่ง แต่เมื่ออยู่หน้ากล้อง เธอจะเปล่งประกายด้วยตัวตนที่ทรงพลังและสง่างามอย่างน่าทึ่ง"
          ],
          vi: [
            "Đến từ Osaka, cô bắt đầu học múa ba lê cổ điển từ năm 7 tuổi và từng hoạt động như một diễn viên múa ba lê chuyên nghiệp trước khi có bước tiến đột phá trở thành thần tượng K-pop.",
            "Những cử chỉ tinh tế dựa trên nền tảng ba lê mang đến sự sang trọng độc đáo cho sân khấu của LE SSERAFIM, tạo nên sự khác biệt so với các thành viên khác.",
            "Khi mới bắt đầu học tiếng Hàn, cô là người tiếp thu các cuộc hội thoại hàng ngày nhanh nhất trong số các thực tập sinh, khiến mọi người gọi cô là 'thiên tài ngôn ngữ'.",
            "Những bức ảnh cô tự chụp và đăng lên Instagram được người hâm mộ khen ngợi là ở trình độ tác phẩm nghệ thuật, giúp cô nhận được danh hiệu 'nhiếp ảnh gia trong giới thần tượng'.",
            "Tuy có tính cách trầm lặng và hướng nội nhưng trước ống kính, cô lại tỏa ra một sự hiện diện hoàn toàn khác biệt, mạnh mẽ và tao nhã."
          ],
          ru: [
            "Родом из Осаки, она начала заниматься классическим балетом в 7 лет и работала профессиональной балериной, прежде чем совершить резкий переход в K-pop.",
            "Ее балетная подготовка придает выступлениям LE SSERAFIM уникальную грациозность и элегантность, которую не может повторить ни одна другая участница.",
            "Она освоила разговорный корейский быстрее всех остальных трейни, когда только приехала, за что получила прозвище «языковой гений».",
            "Фотографии, которые она сама делает и выкладывает в Instagram, фанаты называют произведениями искусства, удостоив ее титула «фотограф в мире айдолов».",
            "Ее тихий и интровертный характер перед камерами полностью преображается в яркое и элегантное сценическое присутствие."
          ]
        },
        socials: { instagram: "https://www.instagram.com/kazuha.official_/" }
      },
      {
        id: "eunchae",
        name: { ko: "홍은채", en: "Hong Eunchae", ja: "ホン・ウンチェ", zh: "洪恩采", es: "Hong Eunchae", id: "Hong Eunchae", fr: "Hong Eunchae", hi: "होंग उनचै", pt: "Hong Eunchae", ar: "هونغ أونتشي", th: "ฮง อึนแช", vi: "Hong Eunchae", ru: "Хон Ынчэ" },
        role: { ko: "막내/보컬", en: "Maknae/Vocalist", ja: "末っ子/ボーカル", zh: "忙内/副唱", es: "Maknae/Vocalista", id: "Maknae/Vokalis", fr: "Maknae/Chanteuse", hi: "मक्ने/गायक", pt: "Maknae/Vocalista", ar: "الماكني/مغنية", th: "มักเน่/นักร้อง", vi: "Em út/Ca sĩ", ru: "Макнэ/Вокалист" },
        birth: "2004.11.10", mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio", ja: "さそり座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "ราศีพิจิก", vi: "Thiên Yết", ru: "Скорпион" },
        height: "163cm", bloodType: "O",
        description: {
          ko: "막내지만 무대에서는 언니들 못지않은 존재감을 뿜어내는 팀의 에너지 충전기입니다.",
          en: "The youngest but radiates as much stage presence as her unnies — the team's energy powerhouse.",
          ja: "末っ子ですが、ステージでは姉たちに劣らない存在感を放つチームのエナジーチャージャーです。",
          zh: "虽然是忙内，但在舞台上散发着不亚于姐姐们的身影，是团队的能量充电站。",
          es: "La más joven pero irradia tanta presencia escénica como sus unnies — el motor de energía del equipo.",
          id: "Anggota termuda tetapi memancarkan aura panggung yang sama kuatnya dengan para kakaknya — pembangkit energi tim.",
          fr: "La plus jeune mais elle dégage autant de présence sur scène que ses unnies — la centrale énergétique de l'équipe.",
          hi: "सबसे कम उम्र की लेकिन अपनी बड़ी बहनों की तरह ही मंच पर उपस्थिति दर्ज कराने वाली — टीम की ऊर्जा का स्रोत।",
          pt: "A mais jovem, mas irradia tanta presença de palco quanto as suas unnies — a fonte de energia da equipe.",
          ar: "الأصغر سناً لكنها تشع بحضور مسرحي لا يقل عن أخواتها الأكبر سناً - منبع طاقة الفريق.",
          th: "น้องเล็กที่เป็นเหมือนที่ชาร์จพลังของทีม แม้จะอายุน้อยแต่ก็มีตัวตนบนเวทีไม่แพ้พี่ๆ",
          vi: "Em út nhưng toát ra sự hiện diện trên sân khấu không kém gì các chị — nguồn năng lượng của cả nhóm.",
          ru: "Самая младшая, но излучающая на сцене не меньшую уверенность, чем старшие участницы — «зарядное устройство» команды."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Hong+Eunchae+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "LE SSERAFIMのファンになってから加入したことを明かしており、「成功したオタク」の仲間入りをしたことで有名です。",
            "天真爛漫で明るい性格で、メンバーやファンから可愛がられる「チームのエナジーチャージャー」です。",
            "幼い頃からK-POPのカバーダンス動画を作って投稿しており、その動画は今でもファンの間で語り継がれる伝説的なコンテンツとなっています。",
            "ファンとのコミュニケーションを非常に楽しみ、Weverse Liveをメンバーの中で最も頻繁に行うことで有名で、ファンからは「ウンチェのライブはランダムポップアップ」というあだ名が付けられました。",
            "学生時代も「クラスの人気者」として友達に慕われており、今でも当時の友達と連絡を取り合っているという話がファンに温かく伝わっています。"
          ],
          zh: [
            "在加入 LE SSERAFIM 之前就表示自己已经是粉丝了，是著名的“成功粉丝”。",
            "性格天真烂漫、活泼开朗，深受成员和粉丝的喜爱，是“团队的能量充电站”。",
            "从小就开始制作并上传韩流翻跳舞蹈视频，那些视频至今仍是粉丝们津津乐道的传说般的内容。",
            "非常喜欢与粉丝沟通，是成员中开启 Weverse 直播最频繁的一位，粉丝们给她起了个绰号叫“恩采直播是随机快闪店”。",
            "在学校期间也是个“社交达人”，深受朋友们的喜爱，至今仍与学生时代的朋友保持联系，这让粉丝们感到非常温暖。"
          ],
          es: [
            "Famosamente reveló que ya era fan de LE SSERAFIM antes de unirse, lo que la convierte en una historia de éxito certificada de 'fan convertida en miembro'.",
            "Su personalidad brillante e inocente la hace merecedora del afecto de todos: tanto las miembros como los fans la llaman la 'recargadora de energía del equipo'.",
            "Los videos de covers de baile K-pop que hizo y publicó de niña se han convertido en contenido legendario entre los fans, y aún circulan hasta el día de hoy.",
            "Es famosa por hacer directos en Weverse con más frecuencia que nadie entre las integrantes; los fans han apodado sus transmisiones como 'la tienda pop-up aleatoria de Eunchae'.",
            "Según se informa, era el tipo de chica popular y extrovertida en la escuela, y todavía se mantiene en contacto con sus amigos de la infancia, una calidez que los fans encuentran profundamente entrañable."
          ],
          id: [
            "Dia terkenal mengungkapkan bahwa dia sudah menjadi penggemar LE SSERAFIM sebelum bergabung — menjadikannya kisah sukses 'penggemar yang menjadi anggota'.",
            "Kepribadiannya yang cerah dan lugu membuatnya menerima kasih sayang dari semua orang — anggota dan penggemar sama-sama memanggilnya 'pengisi daya energi tim'.",
            "Video dance cover K-pop yang dia buat dan posting saat masih kecil telah menjadi konten legendaris di kalangan penggemar, masih beredar hingga hari ini.",
            "Dia terkenal karena paling sering melakukan live di Weverse di antara para anggota — penggemar menjuluki siarannya 'toko pop-up acak Eunchae'.",
            "Dia dilaporkan adalah tipe orang yang populer dan ramah di sekolah, dan dia masih berhubungan dengan teman masa kecilnya — sebuah kehangatan yang menurut penggemar sangat menawan."
          ],
          fr: [
            "Elle a révélé avec célébrité qu'elle était déjà fan de LE SSERAFIM avant de rejoindre le groupe — ce qui fait d'elle une véritable 'fan devenue membre'.",
            "Sa personnalité brillante et innocente lui vaut l'affection de tous — les membres comme les fans l'appellent la 'recharge d'énergie de l'équipe'.",
            "Les vidéos de reprises de danse K-pop qu'elle a réalisées et publiées lorsqu'elle était enfant sont devenues un contenu légendaire parmi les fans, et circulent encore aujourd'hui.",
            "Elle est célèbre pour ses directs sur Weverse, les plus fréquents parmi les membres — les fans ont surnommé ses flux 'la boutique éphémère aléatoire d'Eunchae'.",
            "Elle était apparemment du genre populaire et extravertie à l'école, et elle reste toujours en contact avec ses amis d'enfance — une chaleur que les fans trouvent profondément attachante."
          ],
          hi: [
            "उन्होंने प्रसिद्ध रूप से खुलासा किया कि वह शामिल होने से पहले ही LE SSERAFIM की प्रशंसक थीं — जिससे वह एक प्रमाणित 'प्रशंसक से सदस्य' की सफलता की कहानी बन गईं।",
            "उनका उज्ज्वल, मासूम व्यक्तित्व उन्हें हर किसी के स्नेह का पात्र बनाता है — सदस्य और प्रशंसक समान रूप से उन्हें 'टीम एनर्जी रिचार्ज' कहते हैं।",
            "बचपन में उनके द्वारा बनाए गए और पोस्ट किए गए के-पॉप कवर डांस वीडियो प्रशंसकों के बीच प्रसिद्ध सामग्री बन गए हैं, जो आज भी प्रसारित होते हैं।",
            "वह सदस्यों में सबसे अधिक बार वीवर्स पर लाइव जाने के लिए प्रसिद्ध हैं — प्रशंसकों ने उनकी स्ट्रीम को 'उनचै की रैंडम प्रॉप्-अप शॉप' उपनाम दिया है।",
            "वह कथित तौर पर स्कूल में लोकप्रिय, बहिर्मुखी प्रकार की थीं, और वह अभी भी बचपन के दोस्तों के संपर्क में रहती हैं — एक ऐसी गर्मजोशी जो प्रशंसकों को बहुत प्यारी लगती है।"
          ],
          pt: [
            "Ela revelou famosamente que já era fã do LE SSERAFIM antes de entrar — tornando-se uma história de sucesso certificada de 'fã que se tornou integrante'.",
            "A sua personalidade brilhante e inocente faz dela a destinatária do afeto de todos — integrantes e fãs chamam-lhe a 'recarregadora de energia da equipa'.",
            "Os vídeos de cover de dança K-pop que fez e publicou quando era criança tornaram-se conteúdos lendários entre os fãs, circulando ainda hoje.",
            "É famosa por fazer diretos no Weverse com mais frequência entre as integrantes — os fãs apelidaram as suas transmissões de 'loja pop-up aleatória da Eunchae'.",
            "Diz-se que era o tipo de rapariga popular e extrovertida na escola, e ainda mantém contacto com amigos de infância — um calor que os fãs consideram profundamente cativante."
          ],
          ar: [
            "لقد كشفت بشكل مشهور أنها كانت بالفعل معجبة بفرقة LE SSERAFIM قبل انضمامها - مما جعلها قصة نجاح معتمدة لـ 'معجبة أصبحت عضوة'.",
            "شخصيتها المشرقة والبريئة تجعلها محط أنظار الجميع - يطلق عليها العضوات والمعجبون على حد سواء 'شاحن طاقة الفريق'.",
            "أصبحت مقاطع فيديو رقصات الكيبوب التي صنعتها ونشرتها عندما كانت طفلة محتوى أسطوريًا بين المعجبين، ولا تزال متداولة حتى يومنا هذا.",
            "تشتهر بكونها الأكثر ظهورًا في بث Weverse المباشر بين العضوات - وقد أطلق المعجبون على بثها لقب 'متجر أونتشي العشوائي'.",
            "يقال إنها كانت من النوع الشعبي والمنفتح في المدرسة، ولا تزال على اتصال بأصدقاء طفولتها - وهو دفء يجده المعجبون محببًا للغاية."
          ],
          th: [
            "เธอเปิดเผยอย่างโด่งดังว่าเคยเป็นแฟนคลับของวง LE SSERAFIM ก่อนจะเข้ามาเป็นสมาชิก ทำให้เธอกลายเป็นตัวอย่างของ 'ติ่งที่ประสบความสำเร็จ'",
            "ด้วยบุคลิกที่ร่าเริงและใสซื่อ ทำให้เธอได้รับความรักจากทั้งสมาชิกในวงและแฟนคลับ จนได้รับฉายาว่า 'ที่ชาร์จพลังของทีม'",
            "วิดีโอเต้นคัฟเวอร์ K-pop ที่เธอถ่ายเล่นตอนเด็กๆ กลายเป็นคอนเทนต์ระดับตำนานในหมู่แฟนคลับที่ยังคงมีการแชร์กันจนถึงทุกวันนี้",
            "เธอขึ้นชื่อเรื่องการไลฟ์ใน Weverse บ่อยที่สุดในบรรดาสมาชิก จนแฟนๆ ตั้งชื่อเล่นให้ไลฟ์ของเธอว่า 'ร้านป๊อปอัพแบบสุ่มของอึนแช'",
            "มีรายงานว่าสมัยเรียนเธอเป็นเด็กกิจกรรมที่ร่าเริงและป๊อปปูล่ามาก และเธอก็ยังคงติดต่อกับเพื่อนสมัยประถมอยู่เสมอ ซึ่งเป็นมุมที่แฟนๆ มองว่าน่ารักและอบอุ่นใจมาก"
          ],
          vi: [
            "Cô ấy nổi tiếng với việc tiết lộ rằng mình đã là fan của LE SSERAFIM từ trước khi gia nhập nhóm, gia nhập hàng ngũ những 'fan thành công'.",
            "Với tính cách hồn nhiên và tươi sáng, cô ấy là 'người nạp năng lượng cho nhóm', nhận được sự yêu mến từ cả các thành viên và người hâm mộ.",
            "Từ khi còn nhỏ, cô đã thực hiện và đăng tải các video nhảy cover K-pop, và những video đó hiện vẫn là nội dung huyền thoại được người hâm mộ nhắc đến.",
            "Cô ấy rất thích giao tiếp với người hâm mộ và nổi tiếng là người thường xuyên livestream trên Weverse nhất trong số các thành viên, đến mức người hâm mộ đặt biệt danh cho livestream của cô là 'Cửa hàng pop-up ngẫu nhiên của Eunchae'.",
            "Thời đi học cô cũng là một 'người nổi tiếng' trong trường và được bạn bè yêu mến, câu chuyện cô vẫn giữ liên lạc với bạn bè thời đi học cho đến tận bây giờ khiến người hâm mộ cảm thấy rất ấm áp."
          ],
          ru: [
            "Она прославилась тем, что была фанаткой LE SSERAFIM еще до того, как присоединилась к группе, став живым примером истории успеха «фанатки, ставшей участницей».",
            "Ее яркий и жизнерадостный характер делает ее любимицей всех вокруг — и участницы, и фанаты называют ее «зарядным устройством команды».",
            "Видео с каверами на K-pop танцы, которые она записывала в детстве, стали легендарным конเทнтом среди фанатов и до сих пор расходятся по сети.",
            "Она известна тем, что чаще всех остальных участниц выходит в прямой эфир на Weverse; фанаты даже прозвали ее стримы «случайным поп-ап магазином Ынчэ».",
            "Говорят, что в школе она была душой компании и очень популярной, и она до сих пор поддерживает связь со своими школьными друзьями — это тепло фанаты находят очень трогательным."
          ]
        },
        socials: { instagram: "https://www.instagram.com/eunchae.official_/" }
      }
    ]
  },
  {
    id: "gidle",
    name: { ko: "(여자)아이들", en: "(G)I-DLE", ja: "(G)I-DLE", zh: "(G)I-DLE", es: "(G)I-DLE", id: "(G)I-DLE", fr: "(G)I-DLE", hi: "(G)I-DLE", pt: "(G)I-DLE", ar: "(جي)آيدل", th: "(จี)ไอเดิล", vi: "(G)I-DLE", ru: "(G)I-DLE" },
    officialSite: "https://cube-gidle.com/",
    company: "Cube Entertainment",
    debut: "2018.05.02",
    fandom: { ko: "네버랜드 (NEVERLAND)", en: "NEVERLAND", ja: "NEVERLAND", zh: "NEVERLAND", es: "NEVERLAND", id: "NEVERLAND", fr: "NEVERLAND", hi: "NEVERLAND", pt: "NEVERLAND", ar: "نيفرلاند (NEVERLAND)", th: "เนเวอร์แลนด์ (NEVERLAND)", vi: "NEVERLAND", ru: "NEVERLAND" },
    accentColor: "#9c59d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/official_g_i_dle/", twitter: "https://twitter.com/G_I_DLE", youtube: "https://www.youtube.com/@GIDLE" },
    wiki: {
      ko: "(여자)아이들은 큐브 엔터테인먼트 소속의 5인조 걸그룹입니다. 멤버 소연이 직접 작곡·작사에 참여하는 자체 제작 걸그룹입니다.",
      en: "(G)I-DLE is a 5-member self-producing girl group under Cube Entertainment. Leader Soyeon actively participates in composition and songwriting.",
      ja: "(G)I-DLEはCUBEエンターテインメント所属の5人組ガールズグループです。メンバーのソヨンが直接作曲・作詞に参加する自主制作ガールズグループです。",
      zh: "(G)I-DLE是Cube娱乐旗下的五人女子组合。成员小娟亲自参与作曲和作词，是一个自给自足的偶像团体。",
      es: "(G)I-DLE es un grupo de chicas de 5 miembros bajo Cube Entertainment. La líder Soyeon participa activamente en la composición y escritura de canciones.",
      id: "(G)I-DLE adalah grup vokal wanita beranggotakan 5 orang di bawah Cube Entertainment. Pemimpin Soyeon aktif berpartisipasi dalam komposisi dan penulisan lagu.",
      fr: "(G)I-DLE est un groupe de filles de 5 membres sous Cube Entertainment. La leader Soyeon participe activement à la composition et à l'écriture des chansons.",
      hi: "(G)I-DLE क्यूब एंटरटेनमेंट के तहत 5 सदस्यीय गर्ल ग्रुप है। लीडर सोयोन सक्रिय रूप से रचना और गीत लेखन में भाग लेती हैं।",
      pt: "(G)I-DLE é um grupo feminino de 5 membros da Cube Entertainment. A líder Soyeon participa ativamente na composição e escrita das músicas.",
      ar: "(G)I-DLE هي فرقة فتيات مكونة من 5 أعضاء تابعة لشركة Cube Entertainment. تشارك القائدة سيويون بنشاط في التلحين وكتابة الأغاني.",
      th: "(G)I-DLE เป็นเกิร์ลกรุ๊ป 5 คนภายใต้สังกัด Cube Entertainment โดยโซยอนลีดเดอร์ของวงมีส่วนร่วมในการแต่งเพลงและเนื้อร้องอย่างจริงจัง",
      vi: "(G)I-DLE là nhóm nhạc nữ 5 thành viên thuộc Cube Entertainment. Trưởng nhóm Soyeon tích cực tham gia vào việc sáng tác và viết lời nhạc.",
      ru: "(G)I-DLE — женская группа из 5 участниц под лейблом Cube Entertainment. Лидер Соён активно участвует в написании и создании песен."
    },
    description: {
      ko: "소연이 직접 곡을 쓰고 이끄는 자체 제작 걸그룹. 강렬하고 실험적인 음악으로 독보적인 위치를 굳혔습니다.",
      en: "A self-producing girl group led by Soyeon. Known for intense and experimental music.",
      ja: "ソヨンが自ら曲を書き、率いる自主制作ガールズグループ。強烈で実験的な音楽で独歩的な地位を築きました。",
      zh: "由小娟亲自创作并领导的自给自足型女团。以强烈且具有实验性的音乐巩固了其独特的地位。",
      es: "Un grupo de chicas autoproducido liderado por Soyeon. Se han consolidado en una posición única con su música intensa y experimental.",
      id: "Grup vokal wanita yang memproduksi lagu sendiri yang dipimpin oleh Soyeon. Mereka telah mengukuhkan posisi unik dengan musik yang kuat dan eksperimental.",
      fr: "Un groupe de filles autoproduit dirigé par Soyeon. Elles se sont forgé une place unique avec leur musique intense et expérimentale.",
      hi: "सोयोन के नेतृत्व में एक स्व-उत्पादक गर्ल ग्रुप। उन्होंने अपने तीव्र और प्रयोगात्मक संगीत के साथ एक अद्वितीय स्थान बनाया है।",
      pt: "Um grupo feminino autoproduzido liderado por Soyeon. Elas consolidaram uma posição única com sua música intensa e experimental.",
      ar: "فرقة فتيات منتجة ذاتيًا بقيادة سيويون. لقد عززن مكانة فريدة بموسيقاهن القوية والتجريبية.",
      th: "เกิร์ลกรุ๊ปที่ผลิตผลงานเองโดยมีโซยอนเป็นผู้นำและแต่งเพลงเอง พวกเธอได้สร้างตำแหน่งที่ไม่เหมือนใครด้วยดนตรีที่ทรงพลังและแปลกใหม่",
      vi: "Nhóm nhạc nữ tự sản xuất do Soyeon dẫn dắt. Họ đã củng cố vị thế độc bản bằng âm nhạc mạnh mẽ và đầy tính thử nghiệm.",
      ru: "Самопродюсирующая женская группа под руководством Соён. Они закрепили за собой уникальную позицию благодаря своей интенсивной и экспериментальной музыке."
    },
    tmi: {
      ko: [
        "소연은 JYP·YG·큐브를 거친 독특한 이력을 가진 연습생 출신으로, 그 경험이 (여자)아이들의 장르 다양성에 직접적인 영향을 줬습니다.",
        "멤버들은 컴백할 때마다 소연이 또 어떤 새로운 장르에 도전했는지 기대하며 '이번엔 또 뭐지?'라고 기다린다고 합니다.",
        "'TOMBOY', 'Queencard', 'Super Lady' 등 연속 히트를 이어가며 자체 제작 걸그룹의 새로운 기준을 제시하고 있습니다.",
        "민니는 태국 유명 가수 집안 출신이고, 슈화는 대만, 우기는 중국 상하이 출신으로 팀 내 국적이 다양해 자연스러운 다국어 소통이 이루어집니다.",
        "소연이 직접 작사·작곡·안무·영상 제작까지 도맡아 '소연 1인 제작사'라는 말이 나올 정도로 창작 능력이 전방위적으로 뛰어납니다.",
        "민니는 독보적인 몽환적 음색으로 유명하며, 블랙핑크 리사와 절친한 사이로 잘 알려져 있습니다.",
        "우기는 여성 아이돌로서 보기 드문 깊고 허스키한 저음을 가지고 있어 팀의 음악적 색깔을 풍성하게 만듭니다.",
        "슈화는 화장기 없는 민낯으로 활동하는 당당함과 거침없는 입담으로 팬들 사이에서 '걸크러시' 아이콘으로 불립니다.",
        "2022년과 2023년 각종 시상식에서 '올해의 아티스트' 상을 수상하며 최정상 걸그룹으로서의 입지를 다졌습니다.",
        "팀 이름 '(여자)아이들'은 개인을 뜻하는 'I'와 복수형 어미인 '들'을 합쳐 개성 있는 멤버들이 모였다는 의미를 담고 있습니다."
      ],
      en: [
        "Soyeon passed through JYP, YG, and Cube — a unique background that directly shaped (G)I-DLE's genre diversity.",
        "Members say they always look forward to comebacks thinking 'what new genre did Soyeon try this time?' with genuine excitement.",
        "'TOMBOY', 'Queencard', 'Super Lady' — their consecutive hits have set a new standard for what a self-producing girl group can be.",
        "With Minnie from Thailand, Shuhua from Taiwan, and Yuqi from Shanghai, the group naturally communicates in multiple languages.",
        "Soyeon handles lyrics, composition, choreography, and video production almost single-handedly — fans joke she's a 'one-person production company'.",
        "Minnie is famous for her unique, dreamy vocal tone and is known to be very close friends with BLACKPINK's Lisa.",
        "Yuqi possesses a deep, husky low range that is rare among female idols, adding a rich texture to the group's musical color.",
        "Shuhua is celebrated as a 'girl crush' icon for her confidence in appearing without makeup and her refreshingly honest personality.",
        "They solidified their status as a top-tier girl group by winning 'Artist of the Year' at several major awards in 2022 and 2023.",
        "The name '(G)I-DLE' combines 'I' (standing for individual) and 'DLE' (a plural marker in Korean), meaning a collection of unique individuals."
      ],
      ja: [
        "ソヨンはJYP、YG、CUBEを経た独特な経歴を持つ練習生出身で、その経験が(G)I-DLEのジャンルの多様性に直接的な影響を与えました。",
        "メンバーたちはカムバックのたびに、ソヨンがまたどんな新しいジャンルに挑戦したのかを期待し、「今回は何だろう？」と待ち望んでいるそうです。",
        "「TOMBOY」、「Queencard」、「Super Lady」など連続ヒットを続け、自主制作ガールズグループの新しい基準を提示しています。",
        "ミンニはタイの有名歌手の家系出身で、シュファは台湾、ウギは中国・上海出身と、チーム内の国籍が多様で自然な多言語コミュニケーションが行われています。",
        "ソヨンが直接作詞・作曲・振付・映像制作まで担当し、「ソヨン1人制作会社」と言われるほど、創作能力が全方位的に優れています。"
      ],
      zh: [
        "小娟曾先后在JYP、YG和Cube担任练习生，这段独特的经历直接影响了(G)I-DLE音乐风格的多样性。",
        "成员们表示，每次回归都会期待小娟又挑战了什么新风格，充满了好奇和期待。",
        "凭借《TOMBOY》、《Queencard》、《Super Lady》等连续热门歌曲，为自给自足型女团树立了新的标准。",
        "Minnie出身于泰国著名的音乐世家，舒华来自台湾，雨琦来自上海，成员国籍多样，团队内自然地进行多语言交流。",
        "小娟亲自负责作词、作曲、编舞乃至视频制作，创作能力极其出色，甚至被称为“小娟一人制作公司”。"
      ],
      es: [
        "Soyeon pasó por JYP, YG y Cube, un trasfondo único que moldeó directamente la diversidad de géneros de (G)I-DLE.",
        "Las miembros dicen que siempre esperan con ansias los regresos pensando: '¿qué nuevo género intentó Soyeon esta vez?'",
        "'TOMBOY', 'Queencard', 'Super Lady': sus éxitos consecutivos han establecido un nuevo estándar para los grupos autoproducidos.",
        "Con Minnie de Tailandia, Shuhua de Taiwán y Yuqi de Shanghái, el grupo se comunica naturalmente en múltiples idiomas.",
        "Soyeon se encarga de las letras, la composición, la coreografía y la producción de videos, demostrando una capacidad creativa integral."
      ],
      id: [
        "Soyeon melewati JYP, YG, dan Cube — latar belakang unik yang secara langsung membentuk keragaman genre (G)I-DLE.",
        "Para anggota mengatakan mereka selalu menantikan comeback dengan antusias, memikirkan genre baru apa yang dicoba Soyeon kali ini.",
        "'TOMBOY', 'Queencard', 'Super Lady' — hits berturut-turut mereka telah menetapkan standar baru bagi grup vokal wanita yang memproduksi lagu sendiri.",
        "Dengan Minnie dari Thailand, Shuhua dari Taiwan, dan Yuqi dari Shanghai, grup ini secara alami berkomunikasi dalam berbagai bahasa.",
        "Soyeon menangani lirik, komposisi, koreografi, hingga produksi video, menunjukkan kemampuan kreatif yang luar biasa di segala bidang."
      ],
      fr: [
        "Soyeon est passée par JYP, YG et Cube — un parcours unique qui a directement façonné la diversité musicale de (G)I-DLE.",
        "Les membres disent qu'elles attendent chaque retour avec impatience, se demandant quel nouveau genre Soyeon a exploré cette fois.",
        "'TOMBOY', 'Queencard', 'Super Lady' — leurs succès consécutifs ont défini un nouveau standard pour les groupes autoproduits.",
        "Avec Minnie de Thaïlande, Shuhua de Taïwan et Yuqi de Shanghai, le groupe communique naturellement en plusieurs langues.",
        "Soyeon s'occupe des paroles, de la composition, de la chorégraphie et de la production vidéo, prouvant un talent créatif exceptionnel."
      ],
      hi: [
        "सोयोन JYP, YG और क्यूब से गुज़रीं — एक अनूठी पृष्ठभूमि जिसने (G)I-DLE की शैलीगत विविधता को सीधे आकार दिया।",
        "सदस्यों का कहना है कि वे हमेशा वापसी का इंतज़ार करते हुए यह सोचते हैं कि 'सोयोन ने इस बार कौन सी नई शैली आजमाई है?'",
        "'TOMBOY', 'Queencard', 'Super Lady' — उनकी लगातार हिट्स ने स्व-उत्पादक गर्ल ग्रुप के लिए एक नया मानक स्थापित किया है।",
        "थाईलैंड से मिन्नी, ताइवान से शूहवा और शंघाई से युकी के साथ, समूह स्वाभाविक रूप से कई भाषाओं में संवाद करता है।",
        "सोयोन गीत, रचना, कोरियोग्राफी और वीडियो निर्माण को लगभग अकेले संभालती हैं, जो उनकी बहुमुखी प्रतिभा को दर्शाता है।"
      ],
      pt: [
        "Soyeon passou pela JYP, YG e Cube — uma trajetória única que moldou diretamente a diversidade de géneros de (G)I-DLE.",
        "As integrantes dizem que sempre aguardam os comebacks com entusiasmo, perguntando-se qual novo género Soyeon explorou desta vez.",
        "'TOMBOY', 'Queencard', 'Super Lady' — os seus sucessos consecutivos estabeleceram um novo padrão para grupos autoproduzidos.",
        "Com Minnie da Tailândia, Shuhua de Taiwan e Yuqi de Xangai, o grupo comunica naturalmente em vários idiomas.",
        "Soyeon cuida das letras, composição, coreografia e produção de vídeos, demonstrando uma capacidade criativa total."
      ],
      ar: [
        "مرت سيويون عبر شركات JYP وYG وCube - وهي خلفية فريدة شكلت بشكل مباشر تنوع أنواع موسيقى (G)I-DLE.",
        "تقول العضوات إنهن يتطلعن دائمًا إلى العودة بحماس، متسائلات عن النوع الجديد الذي جربته سيويون هذه المرة.",
        "'TOMBOY' و'Queencard' و'Super Lady' - حققت أغانيهن المتتالية معيارًا جديدًا لما يمكن أن تكون عليه فرقة الفتيات المنتجة ذاتيًا.",
        "مع ميني من تايلاند، وشوهوا من تايوان، ويوكي من شنغهاي، تتواصل الفرقة بشكل طبيعي بلغات متعددة.",
        "تتولى سيويون كتابة الأغاني والتلحين والكوريغرافيا وإنتاج الفيديو بمفردها تقريبًا، مما يظهر قدرة إبداعية شاملة."
      ],
      th: [
        "โซยอนผ่านการเป็นเด็กฝึกจาก JYP, YG และ Cube ซึ่งเป็นภูมิหลังที่ไม่เหมือนใครและส่งผลโดยตรงต่อความหลากหลายของแนวเพลงของ (G)I-DLE",
        "สมาชิกบอกว่าพวกเธอตั้งตารอการคัมแบ็คเสมอ โดยลุ้นว่าโซยอนจะลองแนวเพลงใหม่อะไรในครั้งนี้",
        "'TOMBOY', 'Queencard', 'Super Lady' - เพลงฮิตต่อเนื่องของพวกเธอได้สร้างมาตรฐานใหม่ให้กับเกิร์ลกรุ๊ปที่ผลิตผลงานเอง",
        "ด้วยมินนี่จากไทย ชูฮวาจากไต้หวัน และอูกีจากเซี่ยงไฮ้ ทำให้วงมีการสื่อสารที่หลากหลายทางภาษาอย่างเป็นธรรมชาติ",
        "โซยอนดูแลทั้งเนื้อร้อง ทำนอง ท่าเต้น และการผลิตวิดีโอด้วยตัวเองทั้งหมด จนแฟนๆ แซวว่าเป็นบริษัทโปรดักชั่นคนเดียว"
      ],
      vi: [
        "Soyeon đã trải qua JYP, YG và Cube — một nền tảng độc đáo đã trực tiếp hình thành nên sự đa dạng trong thể loại nhạc của (G)I-DLE.",
        "Các thành viên nói rằng họ luôn mong chờ mỗi lần trở lại và tự hỏi: 'Soyeon đã thử sức với thể loại mới nào lần này?'",
        "'TOMBOY', 'Queencard', 'Super Lady' — những bản hit liên tiếp của họ đã đặt ra tiêu chuẩn mới cho một nhóm nhạc nữ tự sản xuất.",
        "Với Minnie đến từ Thái Lan, Shuhua đến từ Đài Loan và Yuqi đến từ Thượng Hải, nhóm giao tiếp tự nhiên bằng nhiều ngôn ngữ.",
        "Soyeon đảm nhận viết lời, sáng tác, biên đạo và sản xuất video gần như một mình, chứng minh khả năng sáng tạo toàn diện."
      ],
      ru: [
        "Соён прошла через JYP, YG и Cube — уникальный опыт, который напрямую повлиял на жанровое разнообразие (G)I-DLE.",
        "Участницы говорят, что всегда с нетерпением ждут камбэков, гадая: «Какой новый жанр Соён попробовала на этот раз?»",
        "«TOMBOY», «Queencard», «Super Lady» — их последовательные хиты установили новый стандарт для самопродюсирующих женских групп.",
        "Благодаря Минни из Таиланда, Шухуа из Тайваня и Юци из Шанхая группа естественно общается на нескольких языках.",
        "Соён сама занимается текстами, композицией, хореографией и видеопроизводством, демонстрируя выдающиеся творческие способности."
      ]
    },
    news: [
      {
        title: {
          ko: "(여자)아이들 'TOMBOY', 역주행 신드롬으로 차트 장기 1위",
          en: "(G)I-DLE 'TOMBOY' Tops Charts Long-Term in Reverse-Charting Syndrome",
          ja: "(G)I-DLE「TOMBOY」、逆走シンドロームでチャート長期1位",
          zh: "(G)I-DLE《TOMBOY》凭借逆袭旋风长期占据榜单第一",
          es: "(G)I-DLE 'TOMBOY' encabeza las listas a largo plazo con síndrome de ascenso",
          id: "(G)I-DLE 'TOMBOY' Memuncaki Tangga Lagu dalam Jangka Panjang",
          fr: "(G)I-DLE 'TOMBOY' en tête des charts sur le long terme",
          hi: "(G)I-DLE 'TOMBOY' रिवर्स-चार्टिंग सिंड्रोम में लंबे समय तक चार्ट पर शीर्ष पर रहा",
          pt: "(G)I-DLE 'TOMBOY' lidera as paradas a longo prazo com síndrome de reversão",
          ar: "أغنية 'TOMBOY' لفرقة (G)I-DLE تتصدر المخططات لفترة طويلة",
          th: "(G)I-DLE 'TOMBOY' ครองอันดับ 1 ในชาร์ตยาวนานด้วยกระแสย้อนกลับ",
          vi: "(G)I-DLE 'TOMBOY' đứng đầu bảng xếp hạng dài hạn với hội chứng lội ngược dòng",
          ru: "(G)I-DLE 'TOMBOY' долгое время возглавляет чарты благодаря эффекту обратного восхождения"
        },
        date: "2022.03.14",
        summary: {
          ko: "'TOMBOY'가 발매 후 서서히 역주행하며 장기 차트 1위를 기록, (여자)아이들의 대중적 전성기를 열었습니다.",
          en: "'TOMBOY' slowly climbed the charts after release and held #1 long-term, opening (G)I-DLE's mainstream heyday.",
          ja: "「TOMBOY」が発売後、徐々にチャートを逆走し長期1位を記録。(G)I-DLEの大衆的な全盛期を切り開きました。",
          zh: "《TOMBOY》发布后逐渐逆袭并长期占据榜单首位，开启了(G)I-DLE的大众巅峰时期。",
          es: "'TOMBOY' subió lentamente en las listas después del lanzamiento y mantuvo el #1 a largo plazo.",
          id: "'TOMBOY' perlahan naik di tangga lagu setelah rilis dan menempati posisi #1 dalam jangka panjang.",
          fr: "'TOMBOY' a grimpé lentement dans les charts après sa sortie et a maintenu la 1ère place.",
          hi: "'TOMBOY' ने रिलीज़ के बाद धीरे-धीरे चार्ट पर चढ़ना शुरू किया और लंबे समय तक #1 पर रहा।",
          pt: "'TOMBOY' subiu lentamente nas paradas após o lançamento e manteve o 1º lugar.",
          ar: "صعدت أغنية 'TOMBOY' ببطء في المخططات بعد إصدارها واحتفظت بالمركز الأول لفترة طويلة.",
          th: "'TOMBOY' ค่อยๆ ไต่ชาร์ตหลังวางจำหน่ายและครองอันดับ 1 ได้ยาวนาน เปิดยุคทองของวง",
          vi: "'TOMBOY' đã từ từ leo lên các bảng xếp hạng sau khi phát hành và giữ vị trí số 1 dài hạn.",
          ru: "«TOMBOY» медленно поднималась в чартах после релиза и долго удерживала первое место."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들, 4집 'I NEVER DIE' 자체 최고 음반 성적 달성",
          en: "(G)I-DLE 4th Album 'I NEVER DIE' Achieves Personal Best Album Record",
          ja: "(G)I-DLE、4thアルバム「I NEVER DIE」自らの最高記録を達成",
          zh: "(G)I-DLE第四张专辑《I NEVER DIE》达成自身最高纪录",
          es: "(G)I-DLE logra récord personal con su 4º álbum 'I NEVER DIE'",
          id: "(G)I-DLE Mencapai Rekor Album Terbaik dengan Album ke-4 'I NEVER DIE'",
          fr: "(G)I-DLE atteint un record personnel avec le 4ème album 'I NEVER DIE'",
          hi: "(G)I-DLE के चौथे एल्बम 'I NEVER DIE' ने व्यक्तिगत सर्वश्रेष्ठ एल्बम रिकॉर्ड बनाया",
          pt: "(G)I-DLE alcança recorde pessoal com o 4º álbum 'I NEVER DIE'",
          ar: "الألبوم الرابع لفرقة (G)I-DLE يحقق أفضل رقم قياسي للألبوم",
          th: "(G)I-DLE อัลบั้มที่ 4 'I NEVER DIE' ทำสถิติยอดขายอัลบั้มสูงสุดของวง",
          vi: "(G)I-DLE đạt kỷ lục album cá nhân tốt nhất với album thứ 4 'I NEVER DIE'",
          ru: "4-й альбом (G)I-DLE «I NEVER DIE» установил личный рекорд продаж"
        },
        date: "2022.03.14",
        summary: {
          ko: "4집 'I NEVER DIE'가 발매 초동 기준 역대 최다 판매량을 기록하며 그룹의 새로운 전성기를 선언했습니다.",
          en: "4th album 'I NEVER DIE' broke their personal best first-week sales record, declaring a new era for the group.",
          ja: "4thアルバム「I NEVER DIE」が初動売上で歴代最多を記録し、グループの新しい全盛期を宣言しました。",
          zh: "第四张专辑《I NEVER DIE》创下了初动销量的历史最高纪录，宣告了组合的新巅峰。",
          es: "El 4º álbum rompió su récord de ventas en la primera semana, declarando una nueva era para el grupo.",
          id: "Album ke-4 memecahkan rekor penjualan minggu pertama mereka, menyatakan era baru bagi grup.",
          fr: "Le 4ème album a battu leur record de ventes en première semaine, marquant une nouvelle ère.",
          hi: "चौथे एल्बम ने उनकी पहले सप्ताह की बिक्री का रिकॉर्ड तोड़ दिया, जो समूह के लिए एक नए युग की घोषणा है।",
          pt: "O 4º álbum quebrou o recorde de vendas na primeira semana, declarando uma nova era.",
          ar: "حطم الألبوم الرابع الرقم القياسي لمبيعات الأسبوع الأول، معلنًا حقبة جديدة للفرقة.",
          th: "อัลบั้มที่ 4 'I NEVER DIE' ทำยอดขายสัปดาห์แรกได้สูงสุดเป็นประวัติการณ์ของวง",
          vi: "Album thứ 4 đã phá vỡ kỷ lục doanh số tuần đầu tiên của họ, tuyên bố một kỷ nguyên mới cho nhóm.",
          ru: "4-й альбом побил их личный рекорд продаж за первую неделю, ознаменовав новую эру для группы."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들 'Queencard', 멜론 차트 역주행 후 장기 집권",
          en: "(G)I-DLE 'Queencard' Reverse-Charts Then Holds Long-Term",
          ja: "(G)I-DLE「Queencard」、Melonチャート逆走後に長期執権",
          zh: "(G)I-DLE《Queencard》在Melon榜单逆袭后长期霸榜",
          es: "(G)I-DLE 'Queencard' asciende en las listas y se mantiene a largo plazo",
          id: "(G)I-DLE 'Queencard' Mendominasi Tangga Lagu Melon dalam Jangka Panjang",
          fr: "(G)I-DLE 'Queencard' domine le classement Melon sur le long terme",
          hi: "(G)I-DLE 'Queencard' रिवर्स-चार्ट के बाद लंबे समय तक शीर्ष पर रहा",
          pt: "(G)I-DLE 'Queencard' sobe nas paradas e mantém-se no topo a longo prazo",
          ar: "أغنية 'Queencard' لفرقة (G)I-DLE تتصدر مخطط Melon لفترة طويلة",
          th: "(G)I-DLE 'Queencard' ไต่ชาร์ต Melon และครองอันดับ 1 ยาวนาน",
          vi: "(G)I-DLE 'Queencard' lội ngược dòng và giữ vững vị trí trên BXH Melon",
          ru: "«Queencard» (G)I-DLE поднялась в чартах и долго удерживала лидерство на Melon"
        },
        date: "2023.05.15",
        summary: {
          ko: "'Queencard'가 발매 후 역주행 열풍을 타며 멜론 차트 상위권을 수주간 장악해 (여자)아이들 최대 히트곡 중 하나로 등극했습니다.",
          en: "'Queencard' rode a reverse-charting surge to dominate Melon for weeks, becoming one of (G)I-DLE's all-time biggest hits.",
          ja: "「Queencard」が発売後に逆走ブームを巻き起こし、Melonチャートの上位を数週間占領。グループ最大のヒット曲の一つとなりました。",
          zh: "《Queencard》发布后引发逆袭热潮，连续数周占据Melon榜单前列，成为(G)I-DLE最热门的歌曲之一。",
          es: "'Queencard' dominó Melon durante semanas, convirtiéndose en uno de sus mayores éxitos.",
          id: "'Queencard' mendominasi Melon selama berminggu-minggu, menjadi salah satu hit terbesar mereka.",
          fr: "'Queencard' a dominé Melon pendant des semaines, devenant l'un de leurs plus grands hits.",
          hi: "'Queencard' ने हफ्तों तक मेलन पर दबदबा बनाया, जो उनके अब तक के सबसे बड़े हिट्स में से एक बन गया।",
          pt: "'Queencard' dominou o Melon por semanas, tornando-se um dos seus maiores sucessos.",
          ar: "سيطرت أغنية 'Queencard' على مخطط Melon لأسابيع، لتصبح واحدة من أكبر نجاحاتهم.",
          th: "'Queencard' ครองอันดับต้นๆ ของชาร์ต Melon นานหลายสัปดาห์ กลายเป็นหนึ่งในเพลงฮิตที่สุด",
          vi: "'Queencard' đã thống trị Melon trong nhiều tuần, trở thành một trong những bản hit lớn nhất.",
          ru: "«Queencard» доминировала на Melon в течение нескольких недель, став одним из их величайших хитов."
        },
        url: "#"
      },
      {
        title: {
          ko: "소연, 솔로 앨범 '아이 DO' 발매… 천재 뮤지션 저력 과시",
          en: "Soyeon Releases Solo Album 'I DO', Showcasing Genius Musician Depth",
          ja: "ソヨン、ソロアルバム「I DO」発売…天才ミュージシャンの底力を誇示",
          zh: "小娟发行个人专辑《I DO》，展现天才音乐人的实力",
          es: "Soyeon lanza su álbum en solitario 'I DO', mostrando su talento genio",
          id: "Soyeon Merilis Album Solo 'I DO', Menunjukkan Bakat Musik Jenius",
          fr: "Soyeon sort son album solo 'I DO', montrant son génie musical",
          hi: "सोयोन ने सोलो एल्बम 'I DO' रिलीज़ किया, जो उनकी प्रतिभा को दर्शाता है",
          pt: "Soyeon lança álbum a solo 'I DO', mostrando o seu talento genial",
          ar: "سيويون تصدر ألبومها المنفرد 'I DO'، لتظهر موهبتها الموسيقية العبقرية",
          th: "โซยอนปล่อยอัลบั้มโซโล่ 'I DO' แสดงศักยภาพในฐานะนักดนตรีอัจฉริยะ",
          vi: "Soyeon phát hành album solo 'I DO', thể hiện tài năng âm nhạc thiên tài",
          ru: "Соён выпустила сольный альбом «I DO», продемонстрировав талант гениального музыканта"
        },
        date: "2023.06.27",
        summary: {
          ko: "소연이 솔로 앨범에서 작사·작곡·프로듀싱 전반을 직접 맡아 솔로 아티스트로서도 탁월한 역량을 증명했습니다.",
          en: "Soyeon handled all lyrics, composition, and production on her solo album, proving her excellence as a solo artist too.",
          ja: "ソヨンがソロアルバムで作詞・作曲・プロデューシングの全般を自ら担当し、ソロアーティストとしても卓越した能力を証明しました。",
          zh: "小娟亲自承担了个人专辑的作词、作曲和制作，证明了她作为个人艺术家的卓越能力。",
          es: "Soyeon se encargó de todas las letras y producción, demostrando su excelencia como solista.",
          id: "Soyeon menangani semua lirik dan produksi, membuktikan keunggulannya sebagai artis solo.",
          fr: "Soyeon a géré toutes les paroles et la production, prouvant son excellence en solo.",
          hi: "सोयोन ने अपने सोलो एल्बम के सभी गीत और निर्माण को संभाला, जो उनकी उत्कृष्टता को साबित करता है।",
          pt: "Soyeon cuidou de todas as letras e produção, provando a sua excelência como solista.",
          ar: "تولت سيويون جميع الكلمات والإنتاج في ألبومها المنفرد، مما أثبت تميزها كفنانة منفردة.",
          th: "โซยอนดูแลทั้งเนื้อร้องและโปรดักชั่นเองทั้งหมด พิสูจน์ความสามารถในฐานะศิลปินเดี่ยว",
          vi: "Soyeon đã đảm nhận tất cả lời bài hát và sản xuất, chứng minh sự xuất sắc của mình khi solo.",
          ru: "Соён сама написала все тексты и музыку для сольного альбома, доказав свое мастерство."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들, 정규 2집 '2' 발매 직후 글로벌 차트 점령",
          en: "(G)I-DLE 2nd Full Album '2' Dominates Global Charts"
        },
        date: "2024.01.29",
        summary: {
          ko: "정규 2집 '2'와 타이틀곡 'Super Lady'가 발매와 동시에 전 세계 주요 차트 1위를 기록하며 저력을 입증했습니다.",
          en: "The 2nd full album '2' and its title track 'Super Lady' topped global charts immediately upon release."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들, 세 번째 월드투어 'i-DOL' 성황리에 시작",
          en: "(G)I-DLE Kicks Off Third World Tour 'i-DOL'"
        },
        date: "2024.08.03",
        summary: {
          ko: "서울 공연을 시작으로 전 세계 주요 도시를 순회하는 세 번째 월드투어 'i-DOL'의 화려한 막을 올렸습니다.",
          en: "Successfully launched their third world tour 'i-DOL', starting with a spectacular performance in Seoul."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들 'Super Lady', 빌보드 글로벌 차트 최고 성적 달성",
          en: "(G)I-DLE 'Super Lady' Achieves Personal Best on Billboard Global Charts",
          ja: "(G)I-DLE「Super Lady」、ビルボードグローバルチャートで最高記録を達成",
          zh: "(G)I-DLE《Super Lady》达成Billboard全球榜单最高纪录",
          es: "(G)I-DLE 'Super Lady' logra récord personal en las listas globales de Billboard",
          id: "(G)I-DLE 'Super Lady' Mencapai Rekor Terbaik di Billboard Global",
          fr: "(G)I-DLE 'Super Lady' atteint un record personnel au Billboard Global",
          hi: "(G)I-DLE 'Super Lady' ने बिलबोर्ड ग्लोबल चार्ट पर व्यक्तिगत सर्वश्रेष्ठ हासिल किया",
          pt: "(G)I-DLE 'Super Lady' alcança recorde pessoal nas paradas globais da Billboard",
          ar: "أغنية 'Super Lady' لفرقة (G)I-DLE تحقق أفضل نتيجة في مخططات بيلبورد العالمية",
          th: "(G)I-DLE 'Super Lady' ทำสถิติสูงสุดบนชาร์ต Billboard Global",
          vi: "(G)I-DLE 'Super Lady' đạt kỷ lục cá nhân tốt nhất trên Billboard Global",
          ru: "«Super Lady» (G)I-DLE достигла личного рекорда в чартах Billboard Global"
        },
        date: "2024.01.29",
        summary: {
          ko: "'Super Lady'가 빌보드 글로벌 차트에서 역대 (여자)아이들 최고 성적을 기록하며 글로벌 영향력을 다시 한번 증명했습니다.",
          en: "'Super Lady' achieved (G)I-DLE's personal best on the Billboard Global charts, once again proving their global influence.",
          ja: "「Super Lady」がビルボードグローバルチャートで(G)I-DLE史上最高記録を樹立し、グローバルな影響力を改めて証明しました。",
          zh: "《Super Lady》在Billboard全球榜单上创下了(G)I-DLE的历史最高纪录，再次证明了其全球影响力。",
          es: "'Super Lady' logró el mejor récord del grupo en Billboard Global, demostrando su influencia.",
          id: "'Super Lady' mencapai rekor terbaik grup di Billboard Global, membuktikan pengaruh mereka.",
          fr: "'Super Lady' a atteint le meilleur record du groupe au Billboard Global.",
          hi: "'Super Lady' ने बिलबोर्ड ग्लोबल पर समूह का सर्वश्रेष्ठ रिकॉर्ड बनाया, जो उनके प्रभाव को साबित करता है।",
          pt: "'Super Lady' alcançou o melhor recorde do grupo na Billboard Global.",
          ar: "حققت أغنية 'Super Lady' أفضل سجل للفرقة في بيلبورد العالمي، مما يثبت تأثيرهم.",
          th: "'Super Lady' ทำสถิติสูงสุดของวงบน Billboard Global พิสูจน์อิทธิพลในระดับโลก",
          vi: "'Super Lady' đã đạt kỷ lục tốt nhất của nhóm trên Billboard Global.",
          ru: "«Super Lady» установила лучший рекорд группы в Billboard Global, доказав их влияние."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들, 첫 단독 월드투어 성황리에 개최",
          en: "(G)I-DLE Successfully Launches First Solo World Tour",
          ja: "(G)I-DLE、初の単独ワールドツアーを成功裏に開催",
          zh: "(G)I-DLE成功举办首次单独世界巡演",
          es: "(G)I-DLE lanza con éxito su primera gira mundial en solitario",
          id: "(G)I-DLE Berhasil Meluncurkan Tur Dunia Solo Pertama",
          fr: "(G)I-DLE lance avec succès sa première tournée mondiale solo",
          hi: "(G)I-DLE ने सफलतापूर्वक पहला सोलो वर्ल्ड टूर शुरू किया",
          pt: "(G)I-DLE lança com sucesso a sua primeira digressão mundial a solo",
          ar: "فرقة (G)I-DLE تطلق أول جولة عالمية منفردة بنجاح",
          th: "(G)I-DLE ประสบความสำเร็จในการจัดเวิลด์ทัวร์เดี่ยวครั้งแรก",
          vi: "(G)I-DLE ra mắt thành công chuyến lưu diễn vòng quanh thế giới solo đầu tiên",
          ru: "(G)I-DLE успешно запустила свой первый сольный мировой тур"
        },
        date: "2024.04.27",
        summary: {
          ko: "아시아·북미·유럽을 아우르는 첫 단독 월드투어를 성공적으로 시작하며 글로벌 팬들과 직접 만나는 시간을 가졌습니다.",
          en: "They successfully launched their first solo world tour spanning Asia, North America, and Europe, meeting global fans directly.",
          ja: "アジア・北米・欧州を網羅する初の単独ワールドツアーを成功裏にスタートさせ、グローバルなファンと直接会う時間を持ちました。",
          zh: "成功开启了横跨亚洲、北美和欧洲的首次单独世界巡演，与全球粉丝近距离接触。",
          es: "Lanzaron con éxito su gira mundial por Asia, Norteamérica y Europa.",
          id: "Mereka meluncurkan tur dunia di Asia, Amerika Utara, dan Eropa, bertemu penggemar global.",
          fr: "Elles ont lancé leur tournée mondiale en Asie, Amérique du Nord et Europe.",
          hi: "उन्होंने एशिया, उत्तरी अमेरिका और यूरोप में अपना विश्व दौरा शुरू किया, प्रशंसकों से सीधे मुलाकात की।",
          pt: "Lançaram com sucesso a sua digressão mundial na Ásia, América do Norte e Europa.",
          ar: "أطلقوا جولتهم العالمية في آسيا وأمريكا الشمالية وأوروبا، والتقوا بالمعجبين.",
          th: "เริ่มต้นเวิลด์ทัวร์ครั้งแรกครอบคลุมเอเชีย อเมริกาเหนือ และยุโรป พบปะแฟนๆ ทั่วโลก",
          vi: "Họ đã bắt đầu chuyến lưu diễn vòng quanh thế giới tại Châu Á, Bắc Mỹ và Châu Âu.",
          ru: "Они успешно запустили мировой тур по Азии, Северной Америке и Европе."
        },
        url: "#"
      },
      {
        title: {
          ko: "민니, 솔로 앨범 'MINNIE' 발매… 독자적 아티스트 입지 구축",
          en: "Minnie Releases Solo Album 'MINNIE', Building Independent Artist Status",
          ja: "ミンニ、ソロアルバム「MINNIE」発売…独自のアーティストとしての地位を構築",
          zh: "Minnie发行个人专辑《MINNIE》，确立独立艺术家地位",
          es: "Minnie lanza su álbum en solitario 'MINNIE', consolidando su estatus artístico",
          id: "Minnie Merilis Album Solo 'MINNIE', Membangun Status Artis Independen",
          fr: "Minnie sort son album solo 'MINNIE', affirmant son statut d'artiste",
          hi: "मिन्नी ने सोलो एल्बम 'MINNIE' रिलीज़ किया, जो उनकी स्वतंत्र पहचान बनाता है",
          pt: "Minnie lança álbum a solo 'MINNIE', consolidando o seu estatuto artístico",
          ar: "ميني تصدر ألبومها المنفرد 'MINNIE'، لتعزيز مكانتها كفنانة مستقلة",
          th: "มินนี่ปล่อยอัลบั้มโซโล่ 'MINNIE' สร้างจุดยืนในฐานะศิลปินเดี่ยว",
          vi: "Minnie phát hành album solo 'MINNIE', xây dựng vị thế nghệ sĩ độc lập",
          ru: "Минни выпустила сольный альбом «MINNIE», закрепив за собой статус артиста"
        },
        date: "2024.06.24",
        summary: {
          ko: "민니가 첫 솔로 미니 앨범을 발매해 그룹 활동 외 솔로 아티스트로서의 독자적인 음악 세계를 펼쳐 보였습니다.",
          en: "Minnie released her first solo mini album, unveiling an independent musical world beyond her group activities.",
          ja: "ミンニが初のソロミニアルバムを発売し、グループ活動以外にソロアーティストとしての独自の音楽の世界を披露しました。",
          zh: "Minnie发行了首张个人迷你专辑，展示了组合活动之外作为独立艺术家的独特音乐世界。",
          es: "Minnie lanzó su primer mini álbum, revelando un mundo musical independiente.",
          id: "Minnie merilis mini album solo pertamanya, mengungkap dunia musik yang mandiri.",
          fr: "Minnie a sorti son premier mini-album, dévoilant un univers musical indépendant.",
          hi: "मिन्नी ने अपना पहला सोलो मिनी एल्बम रिलीज़ किया, जो उनकी अपनी संगीत की दुनिया दिखाता है।",
          pt: "Minnie lançou o seu primeiro mini-álbum, revelando um mundo musical independente.",
          ar: "أصدرت ميني أول ألبوم مصغر لها، وكشفت عن عالم موسيقي مستقل.",
          th: "มินนี่ปล่อยมินิอัลบั้มโซโล่ครั้งแรก เผยโลกแห่งดนตรีในแบบฉบับของตัวเอง",
          vi: "Minnie đã phát hành mini album solo đầu tiên, tiết lộ một thế giới âm nhạc độc lập.",
          ru: "Минни выпустила первый сольный мини-альбом, раскрыв свой музыкальный мир."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들 'I SWAY' 발매, 자체 제작 걸그룹 진화 지속",
          en: "(G)I-DLE Releases 'I SWAY', Continuing Evolution as Self-Producing Girl Group",
          ja: "(G)I-DLE「I SWAY」発売、自主制作ガールズグループの進化を継続",
          zh: "(G)I-DLE发行《I SWAY》，持续展现自给自足型女团的进化",
          es: "(G)I-DLE lanza 'I SWAY', continuando su evolución autoproducida",
          id: "(G)I-DLE Merilis 'I SWAY', Melanjutkan Evolusi sebagai Grup Produksi Mandiri",
          fr: "(G)I-DLE sort 'I SWAY', poursuivant son évolution en autoproduction",
          hi: "(G)I-DLE ने 'I SWAY' रिलीज़ किया, जो उनकी क्रमिक प्रगति को दर्शाता है",
          pt: "(G)I-DLE lança 'I SWAY', continuando a sua evolução como grupo autoproduzido",
          ar: "فرقة (G)I-DLE تصدر 'I SWAY'، لتواصل تطورها كفرقة منتجة ذاتيًا",
          th: "(G)I-DLE ปล่อยเพลง 'I SWAY' สานต่อวิวัฒนาการในฐานะเกิร์ลกรุ๊ปที่ผลิตผลงานเอง",
          vi: "(G)I-DLE phát hành 'I SWAY', tiếp tục sự tiến hóa của nhóm nhạc tự sản xuất",
          ru: "(G)I-DLE выпустила «I SWAY», продолжая развиваться как самопродюсирующая группа"
        },
        date: "2025.04.14",
        summary: {
          ko: "새 앨범 'I SWAY'에서도 소연의 자작곡을 중심으로 독보적인 음악성을 발휘하며 자체 제작 걸그룹의 기준을 이어가고 있습니다.",
          en: "With 'I SWAY', they continued showcasing incomparable musicality through Soyeon's compositions, maintaining the standard for self-producing girl groups.",
          ja: "新アルバム「I SWAY」でもソヨンの自作曲を中心に独歩的な音楽性を発揮し、自主制作ガールズグループの基準を維持し続けています。",
          zh: "在新专辑《I SWAY》中，依然以小娟的自作曲为中心，展现了无与伦比的音乐性，延续了自给自足型女团的标准。",
          es: "Con 'I SWAY', continuaron mostrando su musicalidad a través de las canciones de Soyeon.",
          id: "Melalui 'I SWAY', mereka terus menunjukkan bakat musik melalui lagu-lagu gubahan Soyeon.",
          fr: "Avec 'I SWAY', elles ont continué à montrer leur talent musical via les chansons de Soyeon.",
          hi: "'I SWAY' के साथ, उन्होंने सोयोन की रचनाओं के माध्यम से अपनी अद्वितीय संगीत प्रतिभा दिखाई।",
          pt: "Com 'I SWAY', continuaram a mostrar a sua musicalidade através das canções de Soyeon.",
          ar: "مع 'I SWAY'، واصلوا إظهار موهبتهم الموسيقية من خلال ألحان سيويون.",
          th: "ในอัลบั้ม 'I SWAY' พวกเธอยังคงแสดงศักยภาพทางดนตรีผ่านเพลงที่แต่งโดยโซยอน",
          vi: "Với 'I SWAY', họ tiếp tục thể hiện tài năng âm nhạc thông qua các bài hát của Soyeon.",
          ru: "С «I SWAY» они продолжили демонстрировать свою музыкальность через песни Соён."
        },
        url: "#"
      },
      {
        title: {
          ko: "(여자)아이들, 데뷔 7주년 기념 팬 이벤트 및 새 프로젝트 예고",
          en: "(G)I-DLE Announces Fan Events and New Projects for 7th Debut Anniversary",
          ja: "(G)I-DLE、デビュー7周年記念ファンイベントおよび新プロジェクトを予告",
          zh: "(G)I-DLE预告出道七周年粉丝活动及新项目",
          es: "(G)I-DLE anuncia eventos para fans y nuevos proyectos por su 7º aniversario",
          id: "(G)I-DLE Mengumumkan Acara Penggemar untuk HUT ke-7",
          fr: "(G)I-DLE annonce des événements pour les fans pour le 7ème anniversaire",
          hi: "(G)I-DLE ने 7वीं वर्षगांठ के लिए प्रशंसक कार्यक्रमों और नए प्रोजेक्ट्स की घोषणा की",
          pt: "(G)I-DLE anuncia eventos para fãs e novos projetos para o 7º aniversário",
          ar: "فرقة (G)I-DLE تعلن عن فعاليات للمعجبين ومشاريع جديدة للذكرى السابعة",
          th: "(G)I-DLE ประกาศกิจกรรมแฟนคลับและโปรเจกต์ใหม่ฉลองครบรอบ 7 ปี",
          vi: "(G)I-DLE thông báo các sự kiện dành cho người hâm mộ kỷ niệm 7 năm ra mắt",
          ru: "(G)I-DLE анонсировала мероприятия для фанатов в честь 7-й годовщины"
        },
        date: "2025.05.02",
        summary: {
          ko: "데뷔 7주년을 앞두고 팬들을 위한 특별 이벤트와 새 음악 프로젝트를 예고하며 넘버랜드를 열광시켰습니다.",
          en: "Ahead of their 7th anniversary, they announced special fan events and new music projects, sending NEVERLAND into excitement.",
          ja: "デビュー7周年を前に、ファンのための特別なイベントと新しい音楽プロジェクトを予告し、NEVERLANDを熱狂させました。",
          zh: "在出道七周年即将到来之际，预告了面向粉丝的特别活动和新音乐项目，令NEVERLAND兴奋不已。",
          es: "Anunciaron eventos especiales y nuevos proyectos, emocionando a NEVERLAND.",
          id: "Mereka mengumumkan acara spesial dan proyek baru, membuat NEVERLAND bersemangat.",
          fr: "Elles ont annoncé des événements spéciaux et de nouveaux projets, ravissant NEVERLAND.",
          hi: "उन्होंने विशेष प्रशंसक कार्यक्रमों और नए प्रोजेक्ट्स की घोषणा की, जिससे NEVERLAND उत्साहित हो गया।",
          pt: "Anunciaram eventos especiais e novos projetos, entusiasmando o NEVERLAND.",
          ar: "أعلنوا عن فعاليات خاصة ومشاريع جديدة، مما أثار حماس نيفرلاند.",
          th: "ประกาศกิจกรรมพิเศษและโปรเจกต์ดนตรีใหม่ฉลองครบรอบ 7 ปี ทำให้แฟนๆ ตื่นเต้น",
          vi: "Họ đã công bố các sự kiện đặc biệt và dự án mới, khiến NEVERLAND phấn khích.",
          ru: "Они анонсировали специальные мероприятия и новые проекты, приведя NEVERLAND в восторг."
        },
        url: "#"
      }
    ],
    members: [
      {
        id: "miyeon",
        name: { ko: "미연", en: "Miyeon", ja: "ミヨン", zh: "美延", es: "Miyeon", id: "Miyeon", fr: "Miyeon", hi: "मियॉन", pt: "Miyeon", ar: "ميون", th: "มิยอน", vi: "Miyeon", ru: "Миён" },
        role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista principal", id: "Vokalis utama", fr: "Vocaliste principale", hi: "मुख्य गायक", pt: "Vocalista principal", ar: "مغنية رئيسية", th: "นักร้องเสียงหลัก", vi: "Hát chính", ru: "Главный вокалист" },
        birth: "1997.01.31", mbti: "INFP",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        height: "163cm", bloodType: "O",
        description: {
          ko: "순수하고 맑은 보이스로 팀의 감성을 책임지는 메인 보컬입니다.",
          en: "The main vocalist responsible for the team's emotional depth with a pure, clear voice.",
          ja: "純粋で澄んだ歌声でチームの感性を担当するメインボーカルです。",
          zh: "拥有纯净清澈嗓音的主唱，负责团队的情感表达。",
          es: "La vocalista principal responsable de la profundidad emocional del equipo con una voz pura y clara.",
          id: "Vokalis utama yang bertanggung jawab atas kedalaman emosional grup dengan suara yang murni dan jernih.",
          fr: "La vocaliste principale responsable de la profondeur émotionnelle du groupe avec une voix pure et claire.",
          hi: "अपनी शुद्ध और स्पष्ट आवाज़ के साथ टीम की भावनात्मक गहराई के लिए जिम्मेदार मुख्य गायिका।",
          pt: "A vocalista principal responsável pela profundidade emocional do grupo com uma voz pura e clara.",
          ar: "المغنية الرئيسية المسؤولة عن العمق العاطفي للفريق بصوت نقي وصافٍ.",
          th: "นักร้องเสียงหลักที่รับผิดชอบความรู้สึกของวงด้วยเสียงที่บริสุทธิ์และใสกระจ่าง",
          vi: "Giọng ca chính chịu trách nhiệm về cảm xúc của nhóm với giọng hát thuần khiết và trong trẻo.",
          ru: "Главный вокалист, отвечающий за эмоциональную глубину группы своим чистым и ясным голосом."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Miyeon+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "YGの練習生出身で、BLACKPINKのデビューメンバー候補だったという話があり、ファンの間では「平行宇宙のBLACKPINKミヨン」という言葉が語り継がれています。",
            "純粋で澄んだ歌声で、ファンから「声そのものが楽器」と絶賛され、チームの感性の核心を担当しています。",
            "日本でもソロ活動を通じて強固なファン層を別途構築し、グループ以外の独自のアーティストキャリアを築いています。",
            "ウサギのように耳を立てる「ミヨンウサギ」の表情がトレードマークで、ファンがこの表情を集めた動画編集版を絶えず制作しています。",
            "個人のSNSを通じて飾らない日常を頻繁に共有し、ファンに「本当のミヨン」を見せようとする真実味のあるコミュニケーションを行っています。"
          ],
          zh: [
            "作为YG前练习生，曾被传是BLACKPINK的出道预备成员，粉丝们常开玩笑说她是“平行时空的BLACKPINK成员”。",
            "其纯净清澈的嗓音被粉丝赞誉为“声音本身就是乐器”，担纲团队感性的核心。",
            "在日本也通过个人活动建立了稳固的粉丝群，开辟了组合之外的独立艺人道路。",
            "像兔子一样竖起耳朵的“美延兔”表情是她的标志，粉丝们经常制作这一表情的精彩剪辑。",
            "经常通过个人社交媒体分享真实的生活日常，与粉丝进行真诚的互动，展现“真实的美延”。"
          ],
          es: [
            "Como ex aprendiz de YG, los fans bromean sobre el 'universo paralelo donde Miyeon está en BLACKPINK'.",
            "Su voz es alabada como 'un instrumento en sí mismo', siendo el núcleo emocional del grupo.",
            "Ha construido una base de fans dedicada en Japón a través de sus actividades en solitario.",
            "Su expresión de 'conejo Miyeon' es su marca registrada, muy querida por los fans.",
            "Comparte su vida diaria en redes sociales con sinceridad para conectar con sus seguidores."
          ],
          id: [
            "Sebagai mantan trainee YG, penggemar sering bercanda tentang 'alam semesta paralel di mana Miyeon berada di BLACKPINK'.",
            "Suaranya dipuji sebagai 'instrumen itu sendiri', menjadi inti emosional dari musik grup.",
            "Dia telah membangun basis penggemar di Jepang melalui aktivitas solo.",
            "Ekspresi 'kelinci Miyeon' adalah ciri khasnya yang sangat disukai penggemar.",
            "Dia berbagi kehidupan sehari-hari di media sosial dengan tulus untuk terhubung dengan penggemar."
          ],
          fr: [
            "En tant qu'ancienne stagiaire de YG, les fans plaisantent sur l'univers parallèle où Miyeon ferait partie de BLACKPINK.",
            "Sa voix est louée comme étant 'un instrument en soi', constituant le cœur émotionnel du groupe.",
            "Elle a bâti une base de fans dédiée au Japon grâce à ses activités en solo.",
            "Son expression de 'lapin Miyeon' est sa marque de fabrique, très appréciée des fans.",
            "Elle partage son quotidien sur les réseaux sociaux avec sincérité pour rester proche des fans."
          ],
          hi: [
            "YG की पूर्व ट्रेनी के रूप में, प्रशंसक अक्सर 'समांतर ब्रह्मांड जहाँ मियॉन BLACKPINK में हैं' के बारे में मज़ाक करते हैं।",
            "उनकी आवाज़ को 'अपने आप में एक वाद्ययंत्र' के रूप में सराहा जाता है।",
            "उन्होंने जापान में एकल गतिविधियों के माध्यम से एक अलग प्रशंसक आधार बनाया है।",
            "उनकी 'मियॉन बनी' अभिव्यक्ति उनका ट्रेडमार्क है, जो प्रशंसकों को बहुत पसंद है।",
            "वह अपने 'असली व्यक्तित्व' को दिखाने के लिए सोशल मीडिया पर अपनी दैनिक झलकियाँ साझा करती हैं।"
          ],
          pt: [
            "Como ex-trainee da YG, os fãs brincam sobre o 'universo paralelo onde Miyeon está no BLACKPINK'.",
            "A sua voz é elogiada como 'um instrumento por si só', sendo o núcleo emocional do grupo.",
            "Construiu uma base de fãs dedicada no Japão através das suas atividades a solo.",
            "A sua expressão de 'coelho Miyeon' é a sua marca registada, muito querida pelos fãs.",
            "Partilha o seu dia a dia nas redes sociais com sinceridade para se conectar com os fãs."
          ],
          ar: [
            "بصفتها متدربة سابقة في YG، يمزح المعجبون حول 'الكون الموازي حيث تكون ميون في فرقة BLACKPINK'.",
            "يُشاد بصوتها كـ 'آلة موسيقية في حد ذاتها'، وهي القلب العاطفي للفرقة.",
            "لقد بنت قاعدة جماهيرية مخصصة في اليابان من خلال أنشطتها المنفردة.",
            "تعبير 'أرنب ميون' هو علامتها التجارية المميزة والمحبوبة من قبل المعجبين.",
            "تشارك لمحات من حياتها اليومية على وسائل التواصل الاجتماعي بصدق للتواصل مع المعجبين."
          ],
          th: [
            "ในฐานะอดีตเด็กฝึก YG แฟนๆ มักจะแซวเรื่อง 'จักรวาลคู่ขนานที่มิยอนอยู่ในวง BLACKPINK'",
            "เสียงของเธอได้รับการยกย่องว่าเป็น 'เครื่องดนตรีในตัวเอง' และเป็นหัวใจสำคัญของวง",
            "เธอได้สร้างฐานแฟนคลับในญี่ปุ่นผ่านกิจกรรมเดี่ยวของเธอ",
            "ท่าทาง 'กระต่ายมิยอน' เป็นเอกลักษณ์ประจำตัวที่แฟนๆ ชื่นชอบมาก",
            "เธอแชร์ชีวิตประจำวันในโซเชียลมีเดียอย่างจริงใจเพื่อเชื่อมต่อกับแฟนๆ"
          ],
          vi: [
            "Là một cựu thực tập sinh YG, người hâm mộ thường nói đùa về 'vũ trụ song song nơi Miyeon ở trong BLACKPINK'.",
            "Giọng hát của cô được khen ngợi là 'một nhạc cụ thực thụ', là linh hồn trong âm nhạc của nhóm.",
            "Cô đã xây dựng được một lượng fan riêng tại Nhật Bản thông qua các hoạt động solo.",
            "Biểu cảm 'thỏ Miyeon' là thương hiệu của cô, được người hâm mộ vô cùng yêu thích.",
            "Cô chia sẻ cuộc sống hàng ngày trên mạng xã hội một cách chân thành để kết nối với fan."
          ],
          ru: [
            "Как бывшая стажерка YG, она часто упоминается в шутках фанатов о «параллельной вселенной, где Миён в BLACKPINK».",
            "Её голос называют «инструментом самим по себе», она является эмоциональным центром группы.",
            "Она создала отдельную фанатскую базу в Японии благодаря своей сольной деятельности.",
            "Её выражение лица «зайка Миён» стало её визитной карточкой, которую обожают фанаты.",
            "Она искренне делится своей повседневной жизнью в социальных сетях, общаясь с поклонниками."
          ]
        },
        socials: { instagram: "https://www.instagram.com/miyeon__dlwlrma/" }
      },
      {
        id: "minnie",
        name: { ko: "민니", en: "Minnie", ja: "ミンニ", zh: "米妮", es: "Minnie", id: "Minnie", fr: "Minnie", hi: "मिन्नी", pt: "Minnie", ar: "ميني", th: "มินนี่", vi: "Minnie", ru: "Минни" },
        role: { ko: "리드보컬", en: "Lead Vocalist", ja: "リードボーカル", zh: "领唱", es: "Vocalista líder", id: "Vokalis utama", fr: "Vocaliste principale", hi: "लीड गायक", pt: "Vocalista líder", ar: "مغنية رائدة", th: "นักร้องนำ", vi: "Hát dẫn", ru: "Ведущий вокалист" },
        birth: "1997.10.23", mbti: "ENFP",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ราศีตุลย์", vi: "Thiên Bình", ru: "Весы" },
        height: "163cm", bloodType: "B",
        description: {
          ko: "태국 출신의 리드 보컬로, 뛰어난 어학 실력과 감성적인 무대를 선보입니다.",
          en: "Thai lead vocalist with outstanding multilingual skills and emotionally resonant performances.",
          ja: "タイ出身のリードボーカルで、優れた語学力と感性的なステージを披露します。",
          zh: "来自泰国的领唱，拥有出色的语言能力和富有情感的舞台表现力。",
          es: "Vocalista líder tailandesa con excelentes habilidades multilingües y actuaciones emotivas.",
          id: "Vokalis utama asal Thailand dengan kemampuan multibahasa yang luar biasa dan penampilan yang emosional.",
          fr: "Vocaliste principale thaïlandaise avec d'excellentes compétences multilingues et des performances émouvantes.",
          hi: "उत्कृष्ट बहुभाषी कौशल और भावनात्मक प्रदर्शन के साथ थाई लीड गायिका।",
          pt: "Vocalista líder tailandesa com excelentes competências multilíngues e atuações emotivas.",
          ar: "مغنية رائدة تايلاندية تتمتع بمهارات لغوية متميزة وعروض عاطفية.",
          th: "นักร้องนำชาวไทยที่มีความสามารถทางภาษาที่โดดเด่นและการแสดงที่สื่ออารมณ์",
          vi: "Giọng ca dẫn người Thái Lan với khả năng đa ngôn ngữ xuất sắc và những màn trình diễn đầy cảm xúc.",
          ru: "Тайская ведущая вокалистка с выдающимися лингвистическими навыками и эмоциональными выступлениями."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Minnie+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "タイの有名な歌手の家系出身で、すでにタイでは「芸能人一家の子供」として知られていた状態で、韓国の芸能界に挑戦しました。",
            "タイ語・英語・韓国語・日本語を操る4ヶ国語に堪能な人物で、多言語のファンと自由自在にコミュニケーションをとります。",
            "リードボーカルとして、高い音域でも揺るぎない歌唱力を誇り、ライブステージで特に輝きます。",
            "ソロアルバム「MINNIE」で直接作詞に参加し、音楽的な深みと独自のアーティストとしての可能性を示しました。",
            "タイでの高い認知度のおかげで、タイの広告・ファッションブランドからのラブコールが絶えず、タイのファンの熱烈な支持を受けています。"
          ],
          zh: [
            "出身于泰国著名的音乐世家，在泰国已作为“演艺世家之女”为人熟知的情况下，依然挑战韩国演艺界。",
            "精通泰语、英语、韩语和日语四种语言，能够与各国粉丝自由沟通。",
            "作为领唱，在高音域也拥有稳定的唱功，在现场舞台上尤为出众。",
            "在个人专辑《MINNIE》中亲自参与作词，展现了音乐深度和作为独立艺人的可能性。",
            "凭借在泰国的高知名度，收到了许多泰国广告和时尚品牌的邀约，深受泰国粉丝的热情支持。"
          ],
          es: [
            "Proviene de una destacada familia musical tailandesa y ya era conocida en su país antes de debutar en Corea.",
            "Habla tailandés, inglés, coreano y japonés con fluidez, conectando con fans de todo el mundo.",
            "Como vocalista líder, destaca por su estabilidad en registros altos y brilla en vivo.",
            "Participó en la escritura de letras para su álbum 'MINNIE', mostrando su profundidad musical.",
            "Es muy solicitada por marcas de moda en Tailandia debido a su gran popularidad allí."
          ],
          id: [
            "Berasal dari keluarga musik terkemuka di Thailand dan sudah dikenal di negaranya sebelum debut di Korea.",
            "Fasih berbahasa Thailand, Inggris, Korea, dan Jepang, terhubung dengan penggemar di seluruh dunia.",
            "Sebagai vokalis utama, dia menonjol karena stabilitasnya di nada tinggi dan bersinar saat live.",
            "Berpartisipasi dalam penulisan lirik untuk album 'MINNIE', menunjukkan kedalaman musiknya.",
            "Sangat diminati oleh merek fesyen di Thailand karena popularitasnya yang besar di sana."
          ],
          fr: [
            "Issue d'une famille de musiciens renommée en Thaïlande, elle était déjà connue dans son pays avant de débuter en Corée.",
            "Elle parle couramment thaï, anglais, coréen et japonais, communiquant ainsi avec les fans du monde entier.",
            "En tant que chanteuse principale, elle brille par sa stabilité dans les hautes notes, surtout en live.",
            "Elle a contribué à l'écriture des paroles de son album 'MINNIE', affirmant sa profondeur musicale.",
            "Elle est très sollicitée par les marques de mode en Thaïlande en raison de sa grande popularité."
          ],
          hi: [
            "वह एक प्रमुख थाई संगीत परिवार से आती हैं और कोरिया में आने से पहले ही थाईलैंड में प्रसिद्ध थीं।",
            "वह थाई, अंग्रेजी, कोरियाई और जापानी धाराप्रवाह बोलती हैं।",
            "लीड गायिका के रूप में, वह उच्च स्तर पर स्थिरता बनाए रखती हैं और लाइव प्रदर्शन में चमकती हैं।",
            "उनके सोलो एल्बम 'MINNIE' में उनके व्यक्तिगत गीतों को शामिल किया गया था।",
            "थाईलैंड में उनकी उच्च प्रतिष्ठा के कारण उन्हें थाई विज्ञापन और फैशन ब्रांडों से निरंतर रुचि मिलती है।"
          ],
          pt: [
            "Provém de uma família musical tailandesa proeminente e já era conhecida no seu país antes de debutar na Coreia.",
            "Fala tailandês, inglês, coreano e japonês fluentemente, conectando-se com fãs de todo o mundo.",
            "Como vocalista líder, destaca-se pela sua estabilidade em registos altos e brilha ao vivo.",
            "Participou na escrita de letras para o seu álbum 'MINNIE', mostrando a sua profundidade musical.",
            "É muito requisitada por marcas de moda na Tailândia devido à sua grande popularidade."
          ],
          ar: [
            "تنتمي إلى عائلة موسيقية تايلاندية بارزة وكانت معروفة بالفعل في بلدها قبل ترسيمها في كوريا.",
            "تتحدث التايلاندية والإنجليزية والكورية واليابانية بطلاقة، وتتواصل مع المعجبين في جميع أنحاء العالم.",
            "بصفتها مغنية رائدة، تتميز باستقرارها في الطبقات العالية وتتألق في العروض المباشرة.",
            "شاركت في كتابة الكلمات لألبومها 'MINNIE'، مما أظهر عمقها الموسيقي.",
            "مطلوبة بشدة من قبل العلامات التجارية للأزياء في تايلاند بسبب شعبيتها الكبيرة هناك."
          ],
          th: [
            "เธอมาจากครอบครัวนักดนตรีที่มีชื่อเสียงในไทย และเป็นที่รู้จักในฐานะ 'ลูกหลานตระกูลดัง' ก่อนจะมาเดบิวต์ที่เกาหลี",
            "เธอพูดได้ทั้งภาษาไทย อังกฤษ เกาหลี และญี่ปุ่นอย่างคล่องแคล่ว สื่อสารกับแฟนๆ ทั่วโลกได้อิสระ",
            "ในฐานะนักร้องนำ เธอรักษาความเสถียรของเสียงได้ดีมากในระดับเสียงสูงและโดดเด่นในการแสดงสด",
            "ในอัลบั้มโซโล่ 'MINNIE' เธอมีส่วนร่วมในการแต่งเนื้อร้อง แสดงถึงความลึกซึ้งทางดนตรี",
            "ความนิยมในไทยทำให้เธอได้รับความสนใจจากแบรนด์โฆษณาและแฟชั่นในไทยอย่างต่อเนื่อง"
          ],
          vi: [
            "Cô xuất thân từ một gia đình âm nhạc nổi tiếng ở Thái Lan và đã được biết đến ở quê nhà trước khi sang Hàn Quốc.",
            "Cô nói lưu loát tiếng Thái, tiếng Anh, tiếng Hàn và tiếng Nhật, kết nối với fan trên toàn thế giới.",
            "Với tư cách là giọng ca dẫn, cô nổi bật với sự ổn định ở các nốt cao và tỏa sáng trong các màn trình diễn live.",
            "Cô đã đóng góp viết lời cho album 'MINNIE', thể hiện chiều sâu âm nhạc của mình.",
            "Cô rất được các thương hiệu thời trang tại Thái Lan săn đón nhờ sự nổi tiếng của mình tại đây."
          ],
          ru: [
            "Она происходит из известной тайской музыкальной семьи и была популярна на родине еще до дебюта в Корее.",
            "Она свободно говорит на тайском, английском, корейском и японском языках, общаясь с фанатами по всему миру.",
            "Как ведущая вокалистка, она отличается стабильностью в высоких регистрах и особенно хороша в живых выступлениях.",
            "Она участвовала в написании текстов для своего альбома «MINNIE», продемонстрировав музыкальную глубину.",
            "Благодаря высокой популярности в Таиланде, она постоянно получает предложения от модных брендов."
          ]
        },
        socials: { instagram: "https://www.instagram.com/minniecandy1023/" }
      },
      {
        id: "soyeon",
        name: { ko: "소연", en: "Soyeon", ja: "ソヨン", zh: "小娟", es: "Soyeon", id: "Soyeon", fr: "Soyeon", hi: "सोयोन", pt: "Soyeon", ar: "سيويون", th: "โซยอน", vi: "Soyeon", ru: "Соён" },
        role: { ko: "리더/메인래퍼/프로듀서", en: "Leader/Main Rapper/Producer", ja: "リーダー/メインラッパー/プロデューサー", zh: "队长/主Rapper/制作人", es: "Líder/Rapera principal/Productora", id: "Pemimpin/Rapper utama/Produser", fr: "Leader/Rappeuse principale/Productrice", hi: "लीडर/मुख्य रैपर/निर्माता", pt: "Líder/Rapper principal/Produtora", ar: "قائدة/رابر رئيسية/منتجة", th: "หัวหน้าวง/แร็ปเปอร์หลัก/โปรดิวเซอร์", vi: "Trưởng nhóm/Rapper chính/Nhà sản xuất", ru: "Лидер/Главный рэпер/Продюсер" },
        birth: "1998.08.26", mbti: "ENTJ",
        zodiac: { ko: "처녀자리", en: "Virgo", ja: "おとめ座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "ราศีกันย์", vi: "Xử Nữ", ru: "Дева" },
        height: "158cm", bloodType: "O",
        description: {
          ko: "직접 작사·작곡·프로듀싱까지 맡는 천재 래퍼이자 팀의 핵심 크리에이터입니다.",
          en: "A genius rapper who personally handles lyrics, composition, and producing — the group's creative core.",
          ja: "直接作詞・作曲・プロデュースまで手がける天才ラッパーであり、チームの核心的なクリエイターです。",
          zh: "亲自负责作词、作曲乃至制作的天才Rapper，是团队的核心创作者。",
          es: "Una rapera genio que se encarga de las letras, composición y producción: el núcleo creativo del grupo.",
          id: "Seorang rapper jenius yang secara pribadi menangani lirik, komposisi, dan produksi — inti kreatif grup.",
          fr: "Une rappeuse de génie qui s'occupe personnellement des paroles, de la composition et de la production — le cœur créatif du groupe.",
          hi: "एक प्रतिभाशाली रैपर जो व्यक्तिगत रूप से गीत, रचना और निर्माण संभालती है — समूह का रचनात्मक केंद्र।",
          pt: "Uma rapper genial que cuida pessoalmente das letras, composição e produção — o núcleo criativo do grupo.",
          ar: "رابر عبقرية تتولى شخصيًا كتابة الأغاني والتلحين والإنتاج - القلب الإبداعي للفرقة.",
          th: "แร็ปเปอร์อัจฉริยะที่ดูแลทั้งเนื้อร้อง ทำนอง และการโปรดิวซ์ เป็นศูนย์กลางความคิดสร้างสรรค์ของวง",
          vi: "Một rapper thiên tài đích thân đảm nhận viết lời, sáng tác và sản xuất — cốt lõi sáng tạo của nhóm.",
          ru: "Гениальный рэпер, который сам пишет тексты, музыку и продюсирует — творческое ядро группы."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Soyeon+face+front+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "JYPのサバイバルオーディションでの最終脱落後、YG、そしてCUBEへと続く独特な経歴の末に、(G)I-DLEのリーダー・プロデューサーとして花を咲かせました。",
            "「TOMBOY」、「Nxde」、「Queencard」、「Super Lady」など連続ヒット曲を直接作り出し、「天才ミュージシャン」という称号がつきました。",
            "ステージの上では強烈なカリスマを放ちますが、日常では赤ちゃんのように可愛らしく愛らしい姿を見せる、劇的なギャップの魅力を持っています。",
            "K-POPの振付の提案にも直接参加し、ミュージックビデオのコンセプトも提案するなど、音楽以外のクリエイティブ全般に関与する「ワンマンクリエイティブディレクター」です。",
            "新人アイドルの志望生たちの間で「ソヨンのように自分だけの色を持たなければならない」という話が業界内の格言のように語られるほど尊敬されています。"
          ],
          zh: [
            "在JYP生存选秀中最终被淘汰后，先后经历过YG和Cube，最终作为(G)I-DLE的队长兼制作人大放异彩。",
            "亲自创作了《TOMBOY》、《Nxde》、《Queencard》、《Super Lady》等一系列热门歌曲，被誉为“天才音乐人”。",
            "在舞台上散发着强烈的霸气，但在日常生活中却展现出像婴儿一样可爱的一面，具有极大的反差魅力。",
            "亲自参与编舞建议，并提出MV概念，是参与音乐之外全方位创作的“一人创意总监”。",
            "在新人练习生中，经常流传着“要像小娟一样拥有自己的色彩”这样的说法，深受业界尊敬。"
          ],
          es: [
            "Después de pasar por JYP, YG y Cube, floreció como líder y productora de (G)I-DLE.",
            "Crear éxitos consecutivos le valió el título de 'músico genio'.",
            "El contraste entre su carisma en el escenario y su adorable personalidad fuera de él encanta a los fans.",
            "Contribuye a las coreografías y conceptos de MV, actuando como directora creativa total.",
            "Se ha convertido en un referente para los aprendices: 'debes tener tu propio color como Soyeon'."
          ],
          id: [
            "Setelah melewati JYP, YG, dan Cube, dia berkembang menjadi pemimpin dan produser (G)I-DLE.",
            "Menciptakan hit berturut-turut memberinya gelar 'musisi jenius'.",
            "Kontras antara karisma panggungnya yang intens dan kepribadiannya yang menggemaskan di luar panggung memikat penggemar.",
            "Dia berkontribusi pada koreografi dan konsep MV, bertindak sebagai direktur kreatif total.",
            "Dia telah menjadi panutan bagi para trainee: 'kamu harus memiliki warnamu sendiri seperti Soyeon'."
          ],
          fr: [
            "Après être passée par JYP, YG et Cube, elle s'est épanouie en tant que leader et productrice de (G)I-DLE.",
            "La création de succès consécutifs lui a valu le titre de 'musicienne de génie'.",
            "Le contraste entre son charisme sur scène et sa personnalité adorable hors scène ravit les fans.",
            "Elle contribue aux chorégraphies et aux concepts de MV, agissant comme une directrice créative totale.",
            "Elle est devenue une référence pour les stagiaires : 'il faut avoir sa propre couleur comme Soyeon'."
          ],
          hi: [
            "JYP, YG और क्यूब में काम करने के बाद, वह (G)I-DLE की लीडर और निर्माता के रूप में उभरीं।",
            "'TOMBOY' और 'Super Lady' जैसे लगातार हिट्स बनाने के कारण उन्हें 'प्रतिभाशाली संगीतकार' की उपाधि मिली।",
            "उनके मंच के करिश्मे और बाहर के प्यारे व्यक्तित्व के बीच का अंतर प्रशंसकों को बहुत पसंद आता है।",
            "वह संगीत के अलावा कोरियोग्राफी और एमवी कॉन्सेप्ट में भी योगदान देती हैं।",
            "आकांक्षी प्रशिक्षुओं के बीच, 'सोयोन की तरह अपना रंग होना चाहिए' एक उद्योग-व्यापी सिद्धांत बन गया है।"
          ],
          pt: [
            "Depois de passar pela JYP, YG e Cube, floresceu como líder e produtora de (G)I-DLE.",
            "A criação de sucessos consecutivos rendeu-lhe o título de 'música genial'.",
            "O contraste entre o seu carisma no palco e a sua personalidade adorável fora dele encanta os fãs.",
            "Contribui para as coreografias e conceitos de MV, atuando como uma diretora criativa total.",
            "Tornou-se uma referência para os trainees: 'deves ter a tua própria cor como a Soyeon'."
          ],
          ar: [
            "بعد مرورها بشركات JYP وYG وCube، ازدهرت كقائدة ومنتجة لفرقة (G)I-DLE.",
            "أكسبها إنشاء نجاحات متتالية لقب 'الموسيقية العبقرية'.",
            "التناقض بين كاريزماتها القوية على المسرح وشخصيتها اللطيفة خارجه يسحر المعجبين.",
            "تساهم في أفكار الكوريغرافيا ومفاهيم الفيديو الموسيقي، لتعمل كمديرة إبداعية شاملة.",
            "أصبحت مرجعًا للمتدربين: 'يجب أن يكون لديك لونك الخاص مثل سيويون'."
          ],
          th: [
            "หลังจากผ่าน JYP, YG และ Cube เธอก็เติบโตเป็นลีดเดอร์และโปรดิวเซอร์ของ (G)I-DLE",
            "การสร้างเพลงฮิตต่อเนื่องทำให้เธอได้รับฉายา 'นักดนตรีอัจฉริยะ'",
            "ความแตกต่างระหว่างความมีเสน่ห์บนเวทีกับนิสัยที่น่ารักเหมือนเด็กเมื่ออยู่นอกเวทีเป็นเสน่ห์ของเธอ",
            "เธอมีส่วนร่วมในท่าเต้นและคอนเซปต์ MV นอกเหนือจากดนตรี เป็นผู้อำนวยการฝ่ายสร้างสรรค์ที่ครบเครื่อง",
            "ในหมู่เด็กฝึกหัด มักจะมีคำพูดว่า 'ต้องมีสีสันของตัวเองเหมือนโซยอน' จนกลายเป็นคติในวงการ"
          ],
          vi: [
            "Sau khi trải qua JYP, YG và Cube, cô đã nở rộ với tư cách là trưởng nhóm và nhà sản xuất của (G)I-DLE.",
            "Việc tạo ra những bản hit liên tiếp đã mang lại cho cô danh hiệu 'thiên tài âm nhạc'.",
            "Sự tương phản giữa thần thái mạnh mẽ trên sân khấu và tính cách đáng yêu ngoài đời là điểm thu hút fan.",
            "Cô đóng góp vào ý tưởng vũ đạo và concept MV, hoạt động như một giám đốc sáng tạo toàn diện.",
            "Trong giới thực tập sinh, 'cần phải có màu sắc riêng như Soyeon' đã trở thành một châm ngôn của ngành."
          ],
          ru: [
            "После работы в JYP, YG и Cube она расцвела как лидер и продюсер (G)I-DLE.",
            "Создание последовательных хитов принесло ей титул «гениального музыканта».",
            "Контраст между её мощной харизмой на сцене и милым характером в жизни очаровывает фанатов.",
            "Она участвует в создании хореографии и концепций клипов, являясь полноценным креативным директором.",
            "Среди стажеров K-pop фраза «нужно иметь свой цвет, как у Соён» стала настоящим девизом."
          ]
        },
        socials: { instagram: "https://www.instagram.com/soyeon_dlwlrma/" }
      },
      {
        id: "yuqi",
        name: { ko: "우기", en: "Yuqi", ja: "ウギ", zh: "雨琦", es: "Yuqi", id: "Yuqi", fr: "Yuqi", hi: "युकी", pt: "Yuqi", ar: "يوكي", th: "อูกี", vi: "Yuqi", ru: "Юци" },
        role: { ko: "리드보컬/댄서", en: "Lead Vocalist/Dancer", ja: "リードボーカル/ダンサー", zh: "领唱/舞者", es: "Vocalista líder/Bailarina", id: "Vokalis utama/Penari", fr: "Vocaliste principale/Danseuse", hi: "लीड गायक/नर्तक", pt: "Vocalista líder/Dançarina", ar: "مغنية رائدة/راقصة", th: "นักร้องนำ/นักเต้น", vi: "Hát dẫn/Nhảy chính", ru: "Ведущий вокалист/Танцор" },
        birth: "1999.09.23", mbti: "ESTP",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ราศีตุลย์", vi: "Thiên Bình", ru: "Весы" },
        height: "163cm", bloodType: "O",
        description: {
          ko: "솔직 담백한 성격과 폭발적인 에너지로 팀의 분위기를 책임지는 무드 메이커입니다.",
          en: "The team's mood maker with a frank, explosive personality and boundless energy.",
          ja: "率直で淡白な性格と爆発的なエネルギーでチームの雰囲気を担当するムードメーカーです。",
          zh: "性格率真，拥有爆发性的能量，是团队的气氛担当。",
          es: "La creadora de ambiente del equipo con una personalidad franca y energía desbordante.",
          id: "Pembuat suasana grup dengan kepribadian yang jujur dan energi yang meluap-luap.",
          fr: "La boute-en-train du groupe avec une personnalité franche et une énergie débordante.",
          hi: "स्पष्टवादी व्यक्तित्व और असीम ऊर्जा के साथ टीम की मूड मेकर।",
          pt: "A criadora de ambiente do grupo com uma personalidade franca e energia transbordante.",
          ar: "صانعة الأجواء في الفريق بشخصيتها الصريحة وطاقتها اللامحدودة.",
          th: "ผู้สร้างบรรยากาศของวงด้วยนิสัยที่ตรงไปตรงมาและพลังที่ล้นเหลือ",
          vi: "Người tạo bầu không khí cho nhóm với tính cách thẳng thắn và năng lượng bùng nổ.",
          ru: "Заводила группы с искренним характером и безграничной энергией."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Yuqi+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
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
          ],
          ja: [
            "中国・上海出身で、幼い頃から声楽の訓練を受け、K-POPにハマって一人で韓国に渡ってきた意志の強いメンバーです。",
            "率直でよどみのない発言が特技で、バラエティ番組に出るたびに大きな笑いをもたらし、「(G)I-DLEのバラエティエース」と呼ばれています。",
            "中国でもソロ活動を並行しており、二つの国で同時に愛される真のグローバルアーティストです。",
            "メンバーの中で体力が最も良く、辛い練習が終わった後も一人で追加トレーニングをすることでチーム内で有名です。",
            "インスタグラムのストーリーを最も頻繁に更新するメンバーで、ファンから「リアルタイム日常公開チャンネル」という親しみやすい別名を得ました。"
          ],
          zh: [
            "来自中国上海，从小接受声乐训练，因热爱K-pop而独自来到韩国，是一位意志坚定的成员。",
            "性格率真，言谈大胆，在综艺节目中经常制造笑料，被称为“(G)I-DLE的综艺王牌”。",
            "在中国也同时进行个人活动，是深受两国粉丝喜爱的真正的全球艺术家。",
            "是成员中体力最好的，以在辛苦的练习结束后仍独自进行额外训练而闻名。",
            "是社交媒体更新最频繁的成员，被粉丝亲切地称为“实时生活公开频道”。"
          ],
          es: [
            "De Shanghái, recibió entrenamiento vocal clásico y viajó sola a Corea por su amor al K-pop.",
            "Su humor directo la convierte en el 'as de la variedad' de (G)I-DLE.",
            "También realiza actividades en solitario en China, siendo una artista global en dos países.",
            "Tiene la mejor resistencia del grupo y suele entrenar sola después de las prácticas grupales.",
            "Es la que más actualiza sus historias de Instagram, compartiendo su vida diaria con los fans."
          ],
          id: [
            "Berasal dari Thượng Hải, dia menerima pelatihan vokal klasik dan melakukan perjalanan solo ke Korea demi kecintaannya pada K-pop.",
            "Humor langsungnya menjadikannya 'kartu as varietas' (G)I-DLE.",
            "Dia juga melakukan aktivitas solo di Tiongkok, menjadi artis global di dua negara.",
            "Dia memiliki stamina terbaik di grup dan sering berlatih sendiri setelah latihan grup.",
            "Dia adalah orang yang paling sering memperbarui cerita Instagram-nya, berbagi kehidupan sehari-hari dengan penggemar."
          ],
          fr: [
            "Originaire de Shanghai, elle a reçu une formation vocale classique et a voyagé seule en Corée par amour pour la K-pop.",
            "Son humour direct en fait l'atout divertissement de (G)I-DLE.",
            "Elle poursuit également des activités en solo en Chine, étant une artiste mondiale dans deux pays.",
            "Elle a la meilleure endurance du groupe et s'entraîne souvent seule après les répétitions collectives.",
            "C'est celle qui met le plus souvent à jour ses stories Instagram, partageant son quotidien avec les fans."
          ],
          hi: [
            "शंघाई से, उन्होंने कम उम्र से शास्त्रीय गायन प्रशिक्षण प्राप्त किया और K-pop के प्रति अपने प्यार के कारण अकेले कोरिया की यात्रा की।",
            "उनका सीधा और स्पष्ट मज़ाक उन्हें (G)I-DLE का 'वैरायटी ऐस' बनाता है।",
            "वह चीन में भी एकल गतिविधियों को सक्रिय रूप से करती हैं, जिससे वह एक वास्तविक वैश्विक कलाकार बन जाती हैं।",
            "समूह में उनकी सहनशक्ति सबसे अच्छी है और वे अभ्यास के बाद अकेले प्रशिक्षण लेने के लिए जानी जाती हैं।",
            "वह किसी भी अन्य सदस्य की तुलना में अधिक बार इंस्टाग्राम स्टोरीज़ अपडेट करती हैं।"
          ],
          pt: [
            "De Xangai, recebeu treino vocal clássico e viajou sozinha para a Coreia pelo seu amor ao K-pop.",
            "O seu humor direto torna-a o 'ás da variedade' de (G)I-DLE.",
            "Também realiza atividades a solo na China, sendo uma artista global em dois países.",
            "Tem a melhor resistência do grupo e costuma treinar sozinha após os ensaios de grupo.",
            "É a que mais atualiza as suas histórias de Instagram, partilhando o seu dia a dia com os fãs."
          ],
          ar: [
            "من شنغهاي، تلقت تدريبًا صوتيًا كلاسيكيًا وسافرت بمفردها إلى كوريا بسبب حبها للـ K-pop.",
            "روح دعابتها المباشرة تجعلها 'نجمة البرامج المتنوعة' في (G)I-DLE.",
            "تمارس أيضًا أنشطة منفردة في الصين، مما يجعلها فنانة عالمية في بلدين.",
            "تتمتع بأفضل قدرة تحمل في الفرقة وغالبًا ما تتدرب بمفردها بعد التمارين الجماعية.",
            "هي العضوة الأكثر تحديثًا لقصص إنستغرام، حيث تشارك حياتها اليومية مع المعجبين."
          ],
          th: [
            "จากเซี่ยงไฮ้ เธอรับการฝึกร้องเพลงคลาสสิกมาตั้งแต่เด็กและเดินทางมาเกาหลีคนเดียวด้วยความรักใน K-pop",
            "อารมณ์ขันที่ตรงไปตรงมาทำให้เธอเป็น 'ตัวจี๊ดด้านวาไรตี้' ของวง",
            "เธอทำกิจกรรมเดี่ยวในจีนด้วย ทำให้เป็นศิลปินระดับโลกที่โด่งดังทั้งสองประเทศ",
            "เธอมีความอึดที่สุดในวงและมักจะฝึกซ้อมต่อคนเดียวหลังจากซ้อมรวมเสร็จแล้ว",
            "เธออัปเดต Instagram Stories บ่อยที่สุด จนแฟนๆ เรียกว่าเป็นช่องถ่ายทอดสดชีวิตประจำวัน"
          ],
          vi: [
            "Đến từ Thượng Hải, cô đã được đào tạo thanh nhạc cổ điển từ khi còn nhỏ và một mình sang Hàn Quốc vì yêu thích K-pop.",
            "Sự hài hước thẳng thắn giúp cô trở thành 'át chủ bài tạp kỹ' của (G)I-DLE.",
            "Cô cũng tích cực theo đuổi các hoạt động solo tại Trung Quốc, trở thành một nghệ sĩ toàn cầu thực thụ.",
            "Cô có sức bền tốt nhất nhóm và thường tự tập luyện thêm sau khi các buổi tập chung kết thúc.",
            "Cô cập nhật Instagram Stories thường xuyên nhất nhóm, được fan gọi là 'kênh truyền hình thực tế hàng ngày'."
          ],
          ru: [
            "Родом из Шанхая, она с детства занималась классическим вокалом и в одиночку отправилась в Корею из-за любви к K-pop.",
            "Её прямолинейный юмор делает её «королевой развлекательных шоу» в группе.",
            "Она активно развивает сольную карьеру в Китае, являясь настоящим международным артистом.",
            "У неё лучшая выносливость в группе, она часто тренируется дополнительно после общих репетиций.",
            "Она обновляет Instagram Stories чаще всех, за что фанаты прозвали её «каналом прямой трансляции жизни»."
          ]
        },
        socials: { instagram: "https://www.instagram.com/yuqi_dlwlrma/" }
      },
      {
        id: "shuhua",
        name: { ko: "슈화", en: "Shuhua", ja: "シュファ", zh: "舒华", es: "Shuhua", id: "Shuhua", fr: "Shuhua", hi: "शूहवा", pt: "Shuhua", ar: "شوهوا", th: "ชูฮวา", vi: "Shuhua", ru: "Шухуа" },
        role: { ko: "보컬", en: "Vocalist", ja: "ボーカル", zh: "副唱", es: "Vocalista", id: "Vokalis", fr: "Vocaliste", hi: "गायक", pt: "Vocalista", ar: "مغنية", th: "นักร้อง", vi: "Hát phụ", ru: "Вокалист" },
        birth: "2000.01.06", mbti: "INFP",
        zodiac: { ko: "염소자리", en: "Capricorn", ja: "やぎ座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "ราศีมังกร", vi: "Ma Kết", ru: "Козерог" },
        height: "165cm", bloodType: "AB",
        description: {
          ko: "대만 출신의 막내로, 솔직한 반응과 독특한 매력으로 팬들의 큰 사랑을 받고 있습니다.",
          en: "Taiwanese maknae beloved by fans for her honest reactions and uniquely charming presence.",
          ja: "台湾出身の末っ子で、率直な反応と独特な魅力でファンから大きな愛を受けています。",
          zh: "来自台湾的忙内，以率真的反应和独特的魅力深受粉丝喜爱。",
          es: "La maknae taiwanesa amada por los fans por sus reacciones honestas y su presencia única.",
          id: "Maknae asal Taiwan yang dicintai penggemar karena reaksinya yang jujur dan kehadirannya yang unik.",
          fr: "La maknae taïwanaise adorée des fans pour ses réactions honnêtes et sa présence charmante.",
          hi: "ताइवानी मकाने जिसे प्रशंसक उनकी ईमानदार प्रतिक्रियाओं के लिए प्यार करते हैं।",
          pt: "A maknae taiwanesa amada pelos fãs pelas suas reações honestas e presença única.",
          ar: "الماكني التايوانية المحبوبة من قبل المعجبين لردود أفعالها الصادقة وحضورها الساحر.",
          th: "มักเน่ชาวไต้หวันที่แฟนๆ รักในปฏิกิริยาที่ตรงไปตรงมาและเสน่ห์ที่ไม่เหมือนใคร",
          vi: "Em út người Đài Loan được người hâm mộ yêu mến bởi những phản ứng chân thật và sức hút độc đáo.",
          ru: "Тайваньская макнэ, любимая фанатами за свои искренние реакции и уникальное обаяние."
        },
        imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Shuhua+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        tmi: {
          ko: [
            "대만 출신으로 한국어를 전혀 모르는 상태로 큐브에 입사했지만, 연습생 기간 중 빠르게 습득해 지금은 유창하게 구사합니다.",
            "솔직하고 꾸밈없는 반응으로 방송에서 '리액션 킹'으로 불리는 등 본인 의도와 무관하게 큰 웃음을 선사합니다.",
            "대만에서 이미 광고 모델로 활동한 경험이 있을 정도로 어릴 때부터 비주얼로 주목받았습니다.",
            "한국어가 서툴 때 억지로 말을 이어가며 웃음을 주던 '슈화 한국어 성장기'는 팬들이 여전히 사랑하는 레전드 콘텐츠입니다.",
            "지금은 유창한 한국어를 자랑하지만, 가끔 나오는 특유의 억양과 표현이 팬들에게 '슈화표 한국어'로 불리며 큰 사랑을 받습니다."
          ],
          en: [
            "She arrived at Cube knowing zero Korean from Taiwan, yet picked it up rapidly during training — she now speaks it fluently.",
            "Her completely unfiltered reactions earn her the title 'Reaction King' on variety shows, delivering unintentional laughs.",
            "She was already a model for advertisements in Taiwan before debuting, recognized for her visuals from an early age.",
            "Her early 'Shuhua learning Korean' era — forcing conversation with limited vocabulary — is legendary fan content.",
            "She now speaks fluent Korean, but her unique accent and phrasing have become what fans call 'Shuhua-brand Korean'."
          ],
          ja: [
            "台湾出身で韓国語を全く知らない状態でCUBEに入社しましたが、練習生期間中に急速に習得し、現在は流暢に話します。",
            "率直で飾らない反応で、バラエティ番組では「リアクションキング」と呼ばれるなど、意図せず大きな笑いを届けます。",
            "台湾ですでに広告モデルとして活動した経験があるほど、幼い頃からビジュアルで注目されていました。",
            "韓国語が下手な頃、無理やり言葉を繋いで笑いを誘った「シュファ韓国語成長期」は、ファンが今でも愛する伝説のコンテンツです。",
            "現在は流暢な韓国語を誇りますが、たまに出る特有の訛りと表現がファンから「シュファ流韓国語」と呼ばれ、親しまれています。"
          ],
          zh: [
            "来自台湾，在完全不会韩语的情况下进入Cube，但在练习生期间迅速掌握，现在韩语非常流利。",
            "因率真自然的反应在节目中被称为“反应之王”，经常在无意间制造笑料。",
            "出道前在台湾就有过担任广告模特的经历，从小就因出众的外貌受到关注。",
            "韩语还不熟练时努力沟通的“舒华韩语成长记”，至今仍是粉丝们喜爱的经典内容。",
            "虽然现在韩语流利，但偶尔出现的独特口音和表达被粉丝亲切地称为“舒华式韩语”。"
          ],
          es: [
            "Llegó a Cube desde Taiwán sin saber nada de coreano, pero lo aprendió rápidamente durante su entrenamiento.",
            "Sus reacciones naturales la han convertido en la 'Reina de las Reacciones' en programas de televisión.",
            "Ya trabajaba como modelo en Taiwán antes de debutar, destacando por su belleza desde niña.",
            "La etapa de su aprendizaje del coreano es uno de los contenidos favoritos de los fans.",
            "Aunque ahora es fluida, su acento único es adorado por sus seguidores."
          ],
          id: [
            "Datang ke Cube dari Taiwan tanpa tahu bahasa Korea, namun mempelajarinya dengan cepat selama masa pelatihan.",
            "Reaksi alaminya menjadikannya 'Ratu Reaksi' di acara televisi.",
            "Dia sudah bekerja sebagai model di Taiwan sebelum debut, menonjol karena kecantikannya sejak kecil.",
            "Masa-masa belajarnya bahasa Korea adalah salah satu konten favorit penggemar.",
            "Meskipun sekarang fasih, aksen uniknya sangat disukai oleh para pengikutnya."
          ],
          fr: [
            "Elle est arrivée chez Cube sans parler un mot de coréen, mais elle l'a appris très vite pendant sa période de stage.",
            "Ses réactions spontanées en font la 'Reine des Réactions' dans les émissions télévisées.",
            "Elle était déjà mannequin en Taïwan avant ses débuts, remarquée pour sa beauté dès l'enfance.",
            "La période de son apprentissage du coréen est l'un des contenus préférés des fans.",
            "Bien qu'elle parle couramment aujourd'hui, son accent unique est adoré par ses fans."
          ],
          hi: [
            "वह ताइवान से शून्य कोरियाई जानकर क्यूब पहुंचीं, फिर भी प्रशिक्षण के दौरान इसे तेजी से सीखा।",
            "उनकी अनफ़िल्टर्ड प्रतिक्रियाएं उन्हें 'रिएक्शन किंग' का खिताब दिलाती हैं।",
            "वह डेब्यू करने से पहले ताइवान में विज्ञापनों के लिए एक मॉडल थीं।",
            "उनका प्रारंभिक 'शूहवा लर्निंग कोरियन' दौर प्रशंसकों के बीच एक प्रसिद्ध कंटेंट है।",
            "वह अब धाराप्रवाह कोरियाई बोलती हैं, लेकिन उनका अनूठा उच्चारण प्रशंसकों को बहुत पसंद आता है।"
          ],
          pt: [
            "Chegou à Cube vinda de Taiwan sem saber nada de coreano, mas aprendeu rapidamente durante o seu treino.",
            "As suas reações naturais tornaram-na a 'Rainha das Reações' em programas de televisão.",
            "Já trabalhava como modelo em Taiwan antes de debutar, destacando-se pela sua beleza desde criança.",
            "A fase da sua aprendizagem do coreano é um dos conteúdos favoritos dos fãs.",
            "Embora agora seja fluente, o seu sotaque único é adorado pelos seus seguidores."
          ],
          ar: [
            "وصلت إلى Cube من تايوان وهي لا تعرف الكورية، لكنها تعلمتها بسرعة خلال فترة تدريبها.",
            "ردود أفعالها العفوية جعلتها 'ملكة ردود الأفعال' في البرامج التلفزيونية.",
            "كانت تعمل بالفعل كعارضة أزياء في تايوان قبل ترسيمها، وتميزت بجمالها منذ طفولتها.",
            "تعتبر فترة تعلمها للغة الكورية واحدة من المحتويات المفضلة لدى المعجبين.",
            "على الرغم من طلاقتها الآن، إلا أن لكنتها الفريدة محبوبة للغاية من قبل متابعيها."
          ],
          th: [
            "เธอมาที่ Cube จากไต้หวันโดยที่พูดเกาหลีไม่ได้เลย แต่เรียนรู้ได้ไวมากในช่วงฝึกจนพูดคล่องในตอนนี้",
            "ปฏิกิริยาที่เป็นธรรมชาติทำให้เธอได้รับฉายา 'ราชินีแห่งรีแอคชั่น' ในรายการต่างๆ",
            "เธอเคยเป็นนางแบบโฆษณาในไต้หวันมาก่อนเดบิวต์ โดดเด่นเรื่องวิชวลมาตั้งแต่เด็ก",
            "ช่วงเวลาที่เธอหัดพูดเกาหลีเป็นคอนเทนต์ในตำนานที่แฟนๆ ยังคงรักและเอ็นดู",
            "แม้ตอนนี้จะพูดคล่องแล้ว แต่สำเนียงและวิธีการพูดที่เป็นเอกลักษณ์ก็ยังเป็นที่รักของแฟนๆ"
          ],
          vi: [
            "Cô đến Cube từ Đài Loan mà không biết một chữ tiếng Hàn nào, nhưng đã học rất nhanh trong thời gian thực tập.",
            "Những phản ứng tự nhiên đã biến cô trở thành 'Nữ hoàng phản ứng' trong các chương trình truyền hình.",
            "Cô đã là người mẫu quảng cáo tại Đài Loan trước khi ra mắt, nổi bật với nhan sắc từ khi còn nhỏ.",
            "Thời kỳ học tiếng Hàn của cô là một trong những nội dung được người hâm mộ yêu thích nhất.",
            "Dù hiện tại đã nói lưu loát, nhưng giọng điệu độc đáo của cô vẫn được fan vô cùng yêu mến."
          ],
          ru: [
            "Она приехала в Cube из Тайваня, совсем не зная корейского, но быстро выучила его во время стажировки.",
            "Её искренние реакции сделали её «королевой реакций» на развлекательных шоу.",
            "Она работала моделью в Тайване еще до дебюта, её красоту замечали с самого детства.",
            "Период, когда она только учила корейский, до сих пор является любимым контентом фанатов.",
            "Хотя сейчас она говорит свободно, её уникальный акцент и манера речи очень нравятся поклонникам."
          ]
        },
        socials: { instagram: "https://www.instagram.com/shuhua_dlwlrma/" }
      }
    ]
  },

  // ==================== STRAY KIDS ====================
  {
    id: "straykids",
    name: { ko: "스트레이 키즈", en: "Stray Kids", ja: "ストレイキッズ", zh: "Stray Kids", es: "Stray Kids", id: "Stray Kids", fr: "Stray Kids", hi: "स्ट्रे किड्स", pt: "Stray Kids", ar: "ستراي كيدز", th: "สตรีย์ คิดส์", vi: "Stray Kids", ru: "Stray Kids" },
    description: {
      ko: "JYP엔터테인먼트 소속의 8인조 보이그룹. 자체 제작 유닛 3RACHA를 중심으로 독자적인 음악 세계를 구축하며, Spotify 2025 K-Pop 2위, 빌보드 200 1위를 6회 달성한 글로벌 탑 그룹.",
      en: "8-member boy group under JYP Entertainment. Centered around self-producing unit 3RACHA, they built a unique musical universe — ranking #2 on Spotify 2025 K-Pop and achieving 6 Billboard 200 #1 albums.",
      ja: "JYPエンターテインメント所属の8人組ボーイズグループ。自己制作ユニット3RACHAを中心に独自の音楽世界を構築し、Spotify 2025 K-Pop 2位、ビルボード200 1位を6回達成。",
      zh: "JYP娱乐旗下8人男团。以自制单元3RACHA为核心，建立了独特的音乐世界，2025年Spotify K-Pop排名第2，6次登顶Billboard 200。",
      es: "Grupo masculino de 8 miembros bajo JYP Entertainment. Con 3RACHA como unidad autoproductora, alcanzaron el #2 en Spotify K-Pop 2025 y 6 álbumes #1 en Billboard 200.",
      id: "Grup pria beranggotakan 8 orang di bawah JYP Entertainment. Dipimpin unit produksi mandiri 3RACHA, meraih posisi #2 Spotify K-Pop 2025 dan 6 album #1 Billboard 200.",
      fr: "Groupe masculin de 8 membres sous JYP Entertainment. Avec leur unité autoproductrice 3RACHA, ils ont atteint la 2e place Spotify K-Pop 2025 et 6 albums #1 au Billboard 200.",
      hi: "JYP एंटरटेनमेंट के तहत 8 सदस्यीय बॉय ग्रुप। सेल्फ-प्रोड्यूसिंग यूनिट 3RACHA के साथ, Spotify 2025 K-Pop #2 और 6 Billboard 200 #1 एल्बम हासिल किए।",
      pt: "Grupo masculino de 8 membros sob a JYP Entertainment. Com a unidade autoprodutora 3RACHA, alcançaram o #2 no Spotify K-Pop 2025 e 6 álbuns #1 no Billboard 200.",
      ar: "مجموعة فتيان من 8 أعضاء تحت JYP Entertainment. بقيادة وحدة الإنتاج الذاتي 3RACHA، حققوا المرتبة 2 في Spotify K-Pop 2025 و6 ألبومات في صدارة Billboard 200.",
      th: "กลุ่มชาย 8 คนภายใต้ JYP Entertainment นำโดยยูนิตโปรดิวซ์เอง 3RACHA อันดับ 2 Spotify K-Pop 2025 และ 6 อัลบั้ม #1 Billboard 200",
      vi: "Nhóm nhạc nam 8 thành viên thuộc JYP Entertainment. Với đơn vị tự sản xuất 3RACHA, đạt #2 Spotify K-Pop 2025 và 6 album #1 Billboard 200.",
      ru: "Мужская группа из 8 участников под JYP Entertainment. С самопродюсирующим юнитом 3RACHA заняли #2 в Spotify K-Pop 2025 и добились 6 альбомов #1 на Billboard 200."
    },
    fandom: { ko: "스테이 (STAY)", en: "STAY", ja: "スティ (STAY)", zh: "STAY", es: "STAY", id: "STAY", fr: "STAY", hi: "STAY", pt: "STAY", ar: "ستاي (STAY)", th: "สเตย์ (STAY)", vi: "STAY", ru: "STAY" },
    debut: "2018.03.25",
    accentColor: "#ff3300",
    imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+group+kpop+2024+official&w=500&h=500&c=7&rs=1&p=0",
    wiki: {
      ko: "스트레이 키즈(Stray Kids)는 JYP엔터테인먼트 소속의 8인조 보이그룹입니다. 2017년 Mnet 서바이벌 프로그램 'Stray Kids'를 통해 결성됐으며 2018년 3월 정식 데뷔했습니다. 멤버 방찬·창빈·한으로 구성된 자체 제작 유닛 3RACHA를 중심으로 힙합·EDM·록을 결합한 독자적 음악 세계를 구축했습니다. 2025년 코첼라 단독 헤드라이너, 빌보드 200 6회 정상, Spotify K-Pop 2위 등을 달성한 글로벌 최정상 그룹입니다.",
      en: "Stray Kids is an 8-member boy group under JYP Entertainment, formed through Mnet's 2017 survival show 'Stray Kids' and officially debuted in March 2018. Centered around self-producing unit 3RACHA (Bang Chan, Changbin, Han), they built a distinctive sound blending hip-hop, EDM, and rock. Global achievements include headlining Coachella 2025, 6 Billboard 200 #1 albums, and ranking #2 on Spotify K-Pop Wrapped 2025.",
      ja: "Stray Kidsは、JYPエンターテインメント所属の8人組ボーイズグループです。2017年のMnetサバイバル番組『Stray Kids』を通じて結成され、2018年3月に正式デビューしました。バンチャン、チャンビン、ハンによるセルフプロデュースユニット3RACHAを中心に、独自の音楽世界を構築しています。2025年のコーチェラ単独ヘッドライナー、ビルボード200で6回の1位、Spotify K-Pop 2位などを記録した世界的なトップグループです。",
      zh: "Stray Kids 是 JYP 娱乐旗下的 8 人男子组合，通过 2017 年 Mnet 生存节目《Stray Kids》成军，并于 2018 年 3 月正式出道。以由方灿、彰彬、韩组成的自制作单位 3RACHA 为核心，他们建立了融合嘻哈、EDM 和摇滚的独特音乐风格。作为全球顶尖团体，他们在 2025 年担任科切拉主打嘉宾，6 次登顶 Billboard 200，并获得 Spotify K-Pop 第 2 名。",
      es: "Stray Kids es un grupo masculino de 8 miembros bajo JYP Entertainment, formado a través del programa de supervivencia de Mnet 'Stray Kids' en 2017 y debutando oficialmente en marzo de 2018. Centrados en la unidad de autoproducción 3RACHA (Bang Chan, Changbin, Han), han construido un sonido distintivo que mezcla hip-hop, EDM y rock. Son un grupo de élite mundial que encabezó Coachella 2025 y alcanzó 6 veces el #1 en el Billboard 200.",
      id: "Stray Kids adalah grup pria beranggotakan 8 orang di bawah JYP Entertainment, dibentuk melalui acara survival Mnet 2017 'Stray Kids' dan resmi debut pada Maret 2018. Berpusat pada unit produksi mandiri 3RACHA (Bang Chan, Changbin, Han), mereka membangun suara khas yang memadukan hip-hop, EDM, dan rock. Mereka adalah grup papan atas global yang menjadi penampil utama Coachella 2025 dan meraih 6 kali posisi #1 di Billboard 200.",
      fr: "Stray Kids est un groupe de garçons de 8 membres sous JYP Entertainment, formé via l'émission de survie de Mnet 'Stray Kids' en 2017 et ayant officiellement débuté en mars 2018. Centré sur l'unité d'autoproduction 3RACHA (Bang Chan, Changbin, Han), ils ont construit un univers musical unique mêlant hip-hop, EDM et rock. C'est un groupe de premier plan mondial qui a été tête d'affiche de Coachella 2025 et a obtenu 6 albums n°1 au Billboard 200.",
      hi: "स्ट्रे किड्स JYP एंटरटेनमेंट के तहत एक 8-सदस्यीय बॉय ग्रुप है, जिसका गठन 2017 में Mnet के सर्वाivल शो 'स्ट्रे किड्स' के माध्यम से किया गया था। सेल्फ-प्रोड्यूसिंग यूनिट 3RACHA के नेतृत्व में, उन्होंने हिप-हॉप और EDM का एक अनूठा मिश्रण तैयार किया है। उन्होंने कोचेला 2025 में हेडलाइनिंग और बिलबोर्ड 200 पर 6 बार शीर्ष स्थान हासिल करने जैसी वैश्विक सफलताएं पाई हैं।",
      pt: "Stray Kids é um grupo masculino de 8 membros da JYP Entertainment, formado pelo programa de sobrevivência da Mnet 'Stray Kids' em 2017 e estreou oficialmente em março de 2018. Centrados na unidade de autoprodução 3RACHA, eles construíram um som único misturando hip-hop, EDM e rock. É um grupo global de topo que foi atração principal no Coachella 2025 e alcançou 6 vezes o topo do Billboard 200.",
      ar: "ستراي كيدز هي فرقة فتيان مكونة من 8 أعضاء تحت إدارة JYP Entertainment، تشكلت من خلال برنامج البقاء 'ستراي كيدز' في 2017. بقيادة وحدة الإنتاج الذاتي 3RACHA، بنوا صوتاً مميزاً يجمع بين الهيب هوب والإي دي إم. هي مجموعة عالمية رائدة تصدرت مهرجان كوتشيلا 2025 وحققت المركز الأول في بيلبورد 200 لست مرات.",
      th: "Stray Kids เป็นกลุ่มบอยแบนด์สมาชิก 8 คนภายใต้ JYP Entertainment ก่อตั้งผ่านรายการเซอร์ไววัล 'Stray Kids' ของ Mnet ในปี 2017 โดยมียูนิตโปรดิวซ์เอง 3RACHA เป็นศูนย์กลาง พวกเขาได้สร้างแนวเพลงที่เป็นเอกลักษณ์ซึ่งผสมผสานฮิปฮอป EDM และร็อก เป็นกลุ่มชั้นนำระดับโลกที่ได้เป็นเฮดไลเนอร์ของ Coachella 2025 และครองอันดับ 1 ใน Billboard 200 ถึง 6 ครั้ง",
      vi: "Stray Kids là nhóm nhạc nam 8 thành viên thuộc JYP Entertainment, thành lập qua chương trình sống còn của Mnet năm 2017 và ra mắt năm 2018. Với nòng cốt là đơn vị tự sản xuất 3RACHA, họ đã xây dựng phong cách âm nhạc độc đáo kết hợp hip-hop, EDM và rock. Nhóm đã đạt được nhiều thành tích toàn cầu như diễn chính tại Coachella 2025 và 6 lần đứng đầu Billboard 200.",
      ru: "Stray Kids — мужская группа из 8 участников под лейблом JYP Entertainment, сформированная в 2017 году и дебютировавшая в 2018 году. Сосредоточившись на самопродюсирующем юните 3RACHA, они создали уникальный звук, смешивая хип-хоп, EDM и рок. Группа мирового уровня, среди достижений которой — выступление в качестве хедлайнера на Coachella 2025 и 6 альбомов №1 в Billboard 200."
    },
    company: "JYP Entertainment",
    tmi: {
      ko: [
        "그룹명 'Stray Kids'는 '길 잃은 아이들'이라는 뜻으로, 서바이벌 프로그램에서 탈락한 연습생들이 만든 그룹이라는 역설적 의미를 담고 있다.",
        "자체 제작 유닛 3RACHA(방찬, 창빈, 한)는 데뷔 전부터 SoundCloud에 음악을 올리며 활동했다.",
        "2025년 코첼라 무대에서 단독 헤드라이너로 서며 K-Pop 보이그룹 최초 기록을 세웠다.",
        "빌보드 200에서 6장의 앨범을 1위에 올린 K-Pop 그룹 중 하나로, BTS 다음으로 많은 횟수다.",
        "팬덤명 STAY는 '길 잃은 아이들과 함께 머물다'는 의미로 그룹명과 연결된다.",
        "멤버 전원이 앨범의 작사·작곡에 참여하는 완전 자체 제작 그룹이다.",
        "2023년 발매한 'S-Class'는 음원 차트 역주행으로 오랜 기간 상위권을 유지했다.",
        "방찬은 데뷔 전 JYP 연습생 시절 GOT7 멤버들과 같은 기숙사에서 생활했다.",
        "유닛 '리노&현진'의 춤 실력은 업계에서 '살아있는 레전드'로 불린다.",
        "2024년 발매한 'HOP'은 뮤직비디오 24시간 내 5000만 뷰를 돌파했다."
      ],
      en: [
        "The name 'Stray Kids' reflects their origin — members who survived an elimination show, forming a group from 'lost kids' with no pre-set debut path.",
        "Self-producing unit 3RACHA (Bang Chan, Changbin, Han) had been uploading music to SoundCloud even before the group officially debuted.",
        "At Coachella 2025, they performed as a headliner — a first for a K-pop boy group at the prestigious festival.",
        "They are one of the K-pop groups with the most Billboard 200 #1 albums (6), second only to BTS.",
        "The fandom name STAY connects to the group name — fans who 'stay' with the 'stray kids'.",
        "All members participate in writing and producing their music, making them a fully self-produced group.",
        "'S-Class' (2023) experienced a reverse chart run, staying near the top for an unusually long time.",
        "Bang Chan lived in the same dorm as GOT7 members during his JYP trainee days before debut.",
        "The dance duo Lee Know & Hyunjin are dubbed 'living legends' for their technical and artistic skill.",
        "'HOP' (2024) surpassed 50 million MV views within 24 hours of its release."
      ],
      ja: [
        "グループ名「Stray Kids」は「迷子」という意味で、サバイバル番組で脱落した練習生たちが作ったグループという逆説的な意味が込められています。",
        "セルフプロデュースユニット3RACHA（バンチャン、チャンビン、ハン）はデビュー前からSoundCloudに楽曲を公開し活動していました。",
        "2025年のコーチェラ・フェスティバルで単独ヘッドライナーを務め、K-Popボーイズグループ初の記録を樹立しました。",
        "ビルボード200で6枚のアルバムを1位に送り込んだK-Popグループの一つで、BTSに次ぐ記録です。",
        "ファン名「STAY」は「迷子（Stray Kids）と共に留まる（Stay）」という意味で、グループ名と繋がっています。",
        "メンバー全員がアルバムの作詞・作曲に参加する、完全セルフプロデュースグループです。",
        "2023年発売の「S-Class」はチャート逆走により長期間上位を維持しました。",
        "バンチャンは練習生時代、GOT7のメンバーと同じ宿舎で生活していました。",
        "ユニット「リノ＆ヒョンジン」のダンスの実力は、業界で「生きる伝説」と呼ばれています。",
        "2024年発売の「HOP」は、ミュージックビデオ公開24時間以内に5000万ビューを突破しました。"
      ],
      zh: [
        "团名 'Stray Kids' 意为 '迷路的孩子'，包含着由生存节目中落选的练习生们组成的团体的悖论含义。",
        "自制作单位 3RACHA（方灿、彰彬、韩）在出道前就开始在 SoundCloud 上上传音乐并进行活动。",
        "在 2025 年科切拉音乐节上担任独立主打嘉宾，创下了 K-Pop 男团的首位纪录。",
        "是 Billboard 200 榜单上拥有 6 张冠专的 K-Pop 团体之一，次数仅次于 BTS。",
        "粉丝名 STAY 意为 '与迷路的孩子们在一起'，与团名相连。",
        "所有成员都参与专辑的作词和作曲，是一个完全自制的团体。",
        "2023 年发行的《S-Class》通过音源榜单逆袭，长期占据上位圈。",
        "方灿在出道前的 JYP 练习生时期曾与 GOT7 成员住在同一宿舍。",
        "小分队 'Lee Know & 铉辰' 的舞蹈实力在业界被誉为 '活着的传奇'。",
        "2024 年发行的《HOP》音乐录影带在 24 小时内突破了 5000 万次观看。"
      ],
      es: [
        "El nombre 'Stray Kids' significa 'niños perdidos', reflejando su origen como un grupo formado por aprendices que sobrevivieron a un programa de eliminación.",
        "La unidad de autoproducción 3RACHA (Bang Chan, Changbin, Han) subía música a SoundCloud incluso antes del debut oficial del grupo.",
        "En Coachella 2025, se presentaron como cabezas de cartel, un hito histórico para un grupo masculino de K-pop.",
        "Son uno de los grupos de K-pop con más álbumes #1 en el Billboard 200 (6), solo superados por BTS.",
        "El nombre del fandom, STAY, se conecta con el nombre del grupo: fans que 'se quedan' (stay) con los 'niños perdidos' (stray kids).",
        "Todos los miembros participan en la escritura y producción de su música, siendo un grupo totalmente autoproducido.",
        "'S-Class' (2023) experimentó un ascenso tardío en las listas, manteniéndose en la cima por mucho tiempo.",
        "Bang Chan vivió en el mismo dormitorio que los miembros de GOT7 durante sus días de aprendiz en JYP.",
        "El dúo de baile Lee Know & Hyunjin es llamado 'leyendas vivientes' por su habilidad técnica y artística.",
        "'HOP' (2024) superó los 50 millones de vistas en 24 horas tras su lanzamiento."
      ],
      id: [
        "Nama 'Stray Kids' berarti 'anak-anak yang tersesat', mengandung makna paradoks sebagai grup yang dibentuk oleh para trainee yang tereliminasi di acara survival.",
        "Unit produksi mandiri 3RACHA (Bang Chan, Changbin, Han) telah mengunggah musik ke SoundCloud bahkan sebelum grup resmi debut.",
        "Di Coachella 2025, mereka tampil sebagai headliner — yang pertama bagi grup pria K-pop di festival bergengsi tersebut.",
        "Mereka adalah salah satu grup K-pop dengan album #1 Billboard 200 terbanyak (6), kedua setelah BTS.",
        "Nama fandom STAY terhubung dengan nama grup — penggemar yang 'tinggal' (stay) bersama 'anak-anak yang tersesat' (stray kids).",
        "Semua anggota berpartisipasi dalam penulisan dan produksi musik mereka, menjadikan mereka grup yang sepenuhnya diproduksi sendiri.",
        "'S-Class' (2023) mengalami kenaikan tangga lagu yang lama, bertahan di posisi atas untuk waktu yang tidak biasa.",
        "Bang Chan tinggal di asrama yang sama dengan anggota GOT7 selama masa trainee JYP sebelum debut.",
        "Duo tari Lee Know & Hyunjin dijuluki 'legenda hidup' karena kemampuan teknis dan artistik mereka.",
        "'HOP' (2024) melampaui 50 juta tayangan MV dalam waktu 24 jam setelah dirilis."
      ],
      fr: [
        "Le nom 'Stray Kids' signifie 'enfants errants', reflétant leur origine en tant que groupe formé par des stagiaires ayant survécu à une émission d'élimination.",
        "L'unité d'autoproduction 3RACHA (Bang Chan, Changbin, Han) téléchargeait de la musique sur SoundCloud avant même les débuts officiels.",
        "À Coachella 2025, ils ont été tête d'affiche, une première pour un groupe de garçons K-pop dans ce prestigieux festival.",
        "Ils font partie des groupes K-pop ayant le plus d'albums n°1 au Billboard 200 (6), juste derrière BTS.",
        "Le nom du fandom STAY est lié au nom du groupe — les fans qui 'restent' (stay) avec les 'enfants errants' (stray kids).",
        "Tous les membres participent à l'écriture et à la production de leur musique, en faisant un groupe totalement autoproduit.",
        "'S-Class' (2023) a connu une remontée dans les charts, restant au sommet pendant une période inhabituellement longue.",
        "Bang Chan a vécu dans le même dortoir que les membres de GOT7 pendant ses jours de stagiaire chez JYP.",
        "Le duo de danse Lee Know & Hyunjin est surnommé 'légendes vivantes' pour leurs compétences techniques et artistiques.",
        "'HOP' (2024) a dépassé les 50 millions de vues sur YouTube en moins de 24 heures."
      ],
      hi: [
        "समूह का नाम 'स्ट्रे किड्स' का अर्थ है 'भटके हुए बच्चे', जो उनके मूल को दर्शाता है - वे सदस्य जो एक एलिमिनेशन शो से बचे थे।",
        "सेल्फ-प्रोड्यूसिंग यूनिट 3RACHA (बैंग चान, चांगबिन, हान) आधिकारिक शुरुआत से पहले ही SoundCloud पर संगीत अपलोड कर रहे थे।",
        "कोचेला 2025 में, उन्होंने हेडलाइनर के रूप में प्रदर्शन किया - प्रतिष्ठित उत्सव में किसी के-पॉप बॉय ग्रुप के लिए यह पहली बार था।",
        "वे सबसे अधिक बिलबोर्ड 200 #1 एल्बम (6) वाले के-पॉप समूहों में से एक हैं, जो केवल BTS के बाद दूसरे स्थान पर हैं।",
        "फैन्डम का नाम STAY समूह के नाम से जुड़ता है - वे प्रशंसक जो 'भटके हुए बच्चों' (stray kids) के साथ 'रुकते' (stay) हैं।",
        "सभी सदस्य अपने संगीत के लेखन और निर्माण में भाग लेते हैं, जिससे वे पूरी तरह से स्व-निर्मित समूह बन जाते हैं।",
        "'S-Class' (2023) ने चार्ट पर लंबी दौड़ लगाई और असामान्य रूप से लंबे समय तक शीर्ष पर रहा।",
        "बैंग चान अपने शुरुआत से पहले JYP ट्रेनी के दिनों में GOT7 के सदस्यों के साथ एक ही डॉर्म में रहते थे।",
        "डांस जोड़ी ली नो और ह्यूनजिन को उनके तकनीकी और कलात्मक कौशल के लिए 'लिविंग लीजेंड्स' कहा जाता है।",
        "'HOP' (2024) ने अपनी रिलीज़ के 24 घंटों के भीतर 5 करोड़ MV व्यूज़ को पार कर लिया।"
      ],
      pt: [
        "O nome 'Stray Kids' significa 'crianças perdidas', refletindo sua origem como um grupo formado por trainees que sobreviveram a um programa de eliminação.",
        "A unidade de autoprodução 3RACHA (Bang Chan, Changbin, Han) já subia música no SoundCloud antes mesmo do debut oficial.",
        "No Coachella 2025, eles se apresentaram como headliners — o primeiro grupo masculino de K-pop a conseguir esse feito.",
        "Eles são um dos grupos de K-pop com mais álbuns #1 na Billboard 200 (6), perdendo apenas para o BTS.",
        "O nome do fandom STAY se conecta ao nome do grupo — fãs que 'ficam' (stay) com as 'crianças perdidas' (stray kids).",
        "Todos os membros participam na escrita e produção de suas músicas, tornando-os um grupo totalmente autoproduzido.",
        "'S-Class' (2023) teve uma subida tardia nas paradas, permanecendo no topo por um longo período.",
        "Bang Chan viveu no mesmo dormitório que os membros do GOT7 durante seus dias de trainee na JYP.",
        "A dupla de dança Lee Know & Hyunjin é chamada de 'lendas vivas' por sua habilidade técnica e artística.",
        "'HOP' (2024) ultrapassou 50 milhões de visualizações no MV em 24 horas após o lançamento."
      ],
      ar: [
        "اسم الفرقة 'ستراي كيدز' يعني 'الأطفال الضالين'، مما يعكس أصلهم كأعضاء نجوا من برنامج إقصاء وشكلوا مجموعة من 'الأطفال التائهين'.",
        "كانت وحدة الإنتاج الذاتي 3RACHA (بانغ تشان، تشانغبين، هان) ترفع الموسيقى على SoundCloud حتى قبل الترسيم الرسمي.",
        "في مهرجان كوتشيلا 2025، قدموا عرضاً كفنان رئيسي (headliner) — وهي سابقة لأي فرقة فتيان كيبوب.",
        "هم من أكثر فرق الكيبوب تحقيقاً للمركز الأول في بيلبورد 200 بـ 6 ألبومات، في المرتبة الثانية بعد BTS.",
        "يرتبط اسم المعجبين STAY باسم الفرقة — المعجبون الذين 'يبقون' (stay) مع 'الأطفال الضالين' (stray kids).",
        "يشارك جميع الأعضاء في كتابة وإنتاج موسيقاهم، مما يجعلهم فرقة ذاتية الإنتاج بالكامل.",
        "شهدت أغنية 'S-Class' (2023) عودة قوية للمراكز الأولى وبقيت في الصدارة لفترة طويلة بشكل غير معتاد.",
        "عاش بانغ تشان في نفس السكن مع أعضاء GOT7 خلال أيام تدريبه في JYP قبل الترسيم.",
        "يُلقب ثنائي الرقص لي نو وهيونجين بـ 'الأساطير الحية' لمهاراتهم التقنية والفنية.",
        "تجاوز فيديو كليب أغنية 'HOP' (2024) حاجز الـ 50 مليون مشاهدة خلال 24 ساعة من إصداره."
      ],
      th: [
        "ชื่อวง 'Stray Kids' สื่อถึงต้นกำเนิดของพวกเขา — สมาชิกที่รอดพ้นจากรายการคัดออก และรวมตัวกันเป็นกลุ่ม 'เด็กที่หลงทาง' ที่ไม่มีเส้นทางการเดบิวต์ที่กำหนดไว้ล่วงหน้า",
        "ยูนิตโปรดิวซ์เอง 3RACHA (Bang Chan, Changbin, Han) เคยอัปโหลดเพลงลง SoundCloud มาตั้งแต่ก่อนเดบิวต์อย่างเป็นทางการ",
        "ในงาน Coachella 2025 พวกเขาแสดงในฐานะเฮดไลเนอร์ ซึ่งเป็นครั้งแรกสำหรับบอยแบนด์ K-pop ในเทศกาลอันทรงเกียรติ",
        "พวกเขาเป็นหนึ่งในวง K-pop ที่มีอัลบั้มอันดับ 1 ใน Billboard 200 มากที่สุด (6 อัลบั้ม) เป็นรองเพียง BTS เท่านั้น",
        "ชื่อแฟนคลับ STAY เชื่อมโยงกับชื่อวง — แฟนๆ ที่ 'อยู่' (stay) กับ 'เด็กที่หลงทาง' (stray kids)",
        "สมาชิกทุกคนมีส่วนร่วมในการแต่งและโปรดิวซ์เพลง ทำให้เป็นวงที่โปรดิวซ์เองอย่างสมบูรณ์",
        "เพลง 'S-Class' (2023) ประสบความสำเร็จในการไต่อันดับชาร์ตและครองตำแหน่งสูงเป็นเวลานานอย่างไม่น่าเชื่อ",
        "Bang Chan เคยอาศัยอยู่ในหอพักเดียวกับสมาชิก GOT7 ในช่วงที่เป็นเด็กฝึกของ JYP ก่อนเดบิวต์",
        "คู่หูนักเต้น Lee Know & Hyunjin ได้รับฉายาว่า 'ตำนานที่ยังมีชีวิต' จากทักษะด้านเทคนิคและศิลปะการเต้น",
        "เพลง 'HOP' (2024) มียอดวิว MV ทะลุ 50 ล้านวิวภายใน 24 ชั่วโมงหลังจากปล่อยออกมา"
      ],
      vi: [
        "Tên nhóm 'Stray Kids' phản ánh nguồn gốc của họ — những thành viên đã sống sót qua một chương trình loại trừ, thành lập một nhóm từ 'những đứa trẻ đi lạc' không có lộ trình ra mắt định sẵn.",
        "Đơn vị tự sản xuất 3RACHA (Bang Chan, Changbin, Han) đã tải nhạc lên SoundCloud ngay cả trước khi nhóm chính thức ra mắt.",
        "Tại Coachella 2025, họ đã biểu diễn với tư cách là nghệ sĩ chính (headliner) — một tiền lệ chưa từng có đối với bất kỳ nhóm nhạc nam K-pop nào.",
        "Họ là một trong những nhóm nhạc K-pop có nhiều album đứng đầu Billboard 200 nhất (6), chỉ đứng sau BTS.",
        "Tên fandom STAY kết nối với tên nhóm — những người hâm mộ sẽ 'ở lại' (stay) cùng 'những đứa trẻ đi lạc' (stray kids).",
        "Tất cả các thành viên đều tham gia viết và sản xuất nhạc, khiến họ trở thành một nhóm nhạc tự sản xuất hoàn toàn.",
        "'S-Class' (2023) đã có một cuộc lội ngược dòng trên các bảng xếp hạng, duy trì vị trí dẫn đầu trong một thời gian dài bất thường.",
        "Bang Chan đã sống cùng ký túc xá với các thành viên GOT7 trong những ngày làm thực tập sinh tại JYP trước khi ra mắt.",
        "Cặp đôi nhảy Lee Know & Hyunjin được mệnh danh là 'những huyền thoại sống' vì kỹ năng kỹ thuật và nghệ thuật của họ.",
        "'HOP' (2024) đã vượt qua 50 triệu lượt xem MV trong vòng 24 giờ sau khi phát hành."
      ],
      ru: [
        "Название 'Stray Kids' отражает их происхождение — участники, прошедшие шоу на выживание, сформировали группу из 'бродячих детей', не имевших заранее прописанного пути к дебюту.",
        "Самопродюсирующий юнит 3RACHA (Бан Чан, Чанбин, Хан) загружал музыку на SoundCloud еще до официального дебюта группы.",
        "На Coachella 2025 они выступили в качестве хедлайнера — впервые для мужской K-pop группы на этом престижном фестивале.",
        "Они являются одной из K-pop групп с наибольшим количеством альбомов №1 в Billboard 200 (6), уступая только BTS.",
        "Название фандома STAY связано с названием группы — фанаты, которые «остаются» (stay) с «бродячими детьми» (stray kids).",
        "Все участники участвуют в написании и продюсировании своей музыки, что делает их полностью самопродюсируемой группой.",
        "Песня 'S-Class' (2023) показала отличные результаты в чартах, оставаясь на вершине необычайно долгое время.",
        "Бан Чан жил в одном общежитии с участниками GOT7 во время стажировки в JYP до дебюта.",
        "Танцевальный дуэт Ли Но и Хёнджина называют «живыми легендами» за их техническое и артистическое мастерство.",
        "Клип 'HOP' (2024) набрал более 50 миллионов просмотров на YouTube в течение 24 часов после релиза."
      ]
    },
    news: [
      { title: { ko: "스트레이 키즈, 2025 코첼라 단독 헤드라이너 — K-Pop 보이그룹 최초", en: "Stray Kids Headline Coachella 2025 — First K-Pop Boy Group Ever", ja: "Stray Kids、2025年コーチェラ単独ヘッドライナー — K-Popボーイズグループ初", zh: "Stray Kids 担任 2025 年科切拉独立主打嘉宾 —— K-Pop 男团首位", es: "Stray Kids encabeza Coachella 2025 — Primer grupo masculino de K-Pop de la historia", id: "Stray Kids Menjadi Headliner Coachella 2025 — Pertama Bagi Grup Pria K-Pop", fr: "Stray Kids en tête d'affiche de Coachella 2025 — Une première pour un groupe de garçons K-Pop", hi: "स्ट्रे किड्स कोचेला 2025 के हेडलाइनर - पहले के-पॉप बॉय ग्रुप", pt: "Stray Kids atração principal do Coachella 2025 — Primeiro grupo masculino de K-Pop", ar: "ستراي كيدز يتصدرون مهرجان كوتشيلا 2025 — أول فرقة فتيان كيبوب على الإطلاق", th: "Stray Kids เป็นเฮดไลเนอร์ Coachella 2025 — บอยแบนด์ K-Pop วงแรก", vi: "Stray Kids diễn chính Coachella 2025 — Nhóm nhạc nam K-Pop đầu tiên", ru: "Stray Kids — хедлайнеры Coachella 2025 — первая мужская K-Pop группа в истории" }, date: "2025.04.12", summary: { ko: "스트레이 키즈가 K-Pop 보이그룹 최초로 코첼라 단독 헤드라이너로 무대에 올라 전 세계 음악 팬들의 이목을 집중시켰습니다.", en: "Stray Kids took the Coachella main stage as headliners — a historic first for any K-pop boy group.", ja: "Stray KidsがK-Popボーイズグループとして初めてコーチェラの単独ヘッドライナーとしてステージに立ち、全世界の音楽ファンの注目を集めました。", zh: "Stray Kids 作为首个 K-Pop 男团登上科切拉主舞台担任主打嘉宾，吸引了全球音乐粉丝的关注。", es: "Stray Kids subió al escenario principal de Coachella como cabezas de cartel, un hito histórico para cualquier grupo masculino de K-pop.", id: "Stray Kids naik ke panggung utama Coachella sebagai headliner — sejarah pertama bagi grup pria K-pop mana pun.", fr: "Stray Kids est monté sur la scène principale de Coachella en tant que tête d'affiche — une première historique pour un groupe de garçons K-pop.", hi: "स्ट्रे किड्स ने हेडलाइनर के रूप में कोचेला के मुख्य मंच पर कदम रखा - किसी भी के-पॉप बॉय ग्रुप के लिए एक ऐतिहासिक पहली बार।", pt: "Stray Kids subiram ao palco principal do Coachella como atração principal — um marco histórico para qualquer grupo masculino de K-pop.", ar: "اعتلى ستراي كيدز مسرح كوتشيلا الرئيسي كفنانين رئيسيين — وهي سابقة تاريخية لأي فرقة فتيان كيبوب.", th: "Stray Kids ขึ้นเวทีหลักของ Coachella ในฐานะเฮดไลเนอร์ — นับเป็นครั้งแรกในประวัติศาสตร์สำหรับบอยแบนด์ K-pop", vi: "Stray Kids đã bước lên sân khấu chính của Coachella với tư cách là nghệ sĩ biểu diễn chính — một tiền lệ lịch sử đối với bất kỳ nhóm nhạc nam K-pop nào.", ru: "Stray Kids вышли на главную сцену Coachella в качестве хедлайнеров — историческое достижение для любой мужской K-pop группы." }, url: "#" },
      { title: { ko: "Spotify 2025 K-Pop Wrapped 2위 — BTS에 이어 역대급 성적", en: "Spotify 2025 K-Pop Wrapped: Stray Kids Ranked #2 Behind BTS", ja: "Spotify 2025 K-Pop Wrapped 2位 — BTSに続く歴代級の成績", zh: "Spotify 2025 K-Pop Wrapped 第 2 名 —— 继 BTS 之后的史诗级成绩", es: "Spotify 2025 K-Pop Wrapped: Stray Kids en el puesto #2 detrás de BTS", id: "Spotify 2025 K-Pop Wrapped: Stray Kids Peringkat #2 Di Belakang BTS", fr: "Spotify 2025 K-Pop Wrapped : Stray Kids classé n°2 derrière BTS", hi: "Spotify 2025 K-Pop Wrapped: BTS के बाद स्ट्रे किड्स #2 पर", pt: "Spotify 2025 K-Pop Wrapped: Stray Kids em 2º lugar atrás do BTS", ar: "ملخص سبوتيفاي للكيبوب 2025: ستراي كيدز في المرتبة الثانية بعد BTS", th: "Spotify 2025 K-Pop Wrapped: Stray Kids อันดับ 2 ต่อจาก BTS", vi: "Spotify 2025 K-Pop Wrapped: Stray Kids xếp thứ 2 sau BTS", ru: "Spotify 2025 K-Pop Wrapped: Stray Kids заняли 2-е место после BTS" }, date: "2025.12.04", summary: { ko: "Spotify가 발표한 2025 K-Pop Wrapped에서 스트레이 키즈가 BTS에 이어 2위를 기록하며 글로벌 영향력을 입증했습니다.", en: "Spotify's 2025 K-Pop Wrapped placed Stray Kids at #2 behind BTS, confirming their global dominance.", ja: "Spotifyが発表した2025 K-Pop WrappedでStray KidsがBTSに次いで2位を記録し、グローバルな影響力を立証しました。", zh: "在 Spotify 发布的 2025 K-Pop Wrapped 中，Stray Kids 紧随 BTS 之后位列第二，证明了其全球影响力。", es: "El K-Pop Wrapped 2025 de Spotify colocó a Stray Kids en el #2 detrás de BTS, confirmando su dominio global.", id: "K-Pop Wrapped 2025 dari Spotify menempatkan Stray Kids di peringkat #2 di belakang BTS, mengonfirmasi dominasi global mereka.", fr: "Le K-Pop Wrapped 2025 de Spotify a placé Stray Kids au 2e rang derrière BTS, confirmant leur domination mondiale.", hi: "Spotify के 2025 K-Pop Wrapped में स्ट्रे किड्स को BTS के बाद #2 पर रखा गया, जो उनके वैश्विक दबदबे की पुष्टि करता है।", pt: "O K-Pop Wrapped 2025 do Spotify colocou os Stray Kids em 2º lugar atrás do BTS, confirmando seu domínio global.", ar: "وضع ملخص سبوتيفاي للكيبوب لعام 2025 فرقة ستراي كيدز في المرتبة الثانية بعد BTS، مما يؤكد هيمنتهم العالمية.", th: "Spotify 2025 K-Pop Wrapped จัดให้ Stray Kids อยู่ในอันดับที่ 2 รองจาก BTS ซึ่งยืนยันถึงอิทธิพลระดับโลกของพวกเขา", vi: "Spotify 2025 K-Pop Wrapped đã xếp Stray Kids ở vị trí thứ 2 sau BTS, xác nhận sự thống trị toàn cầu của họ.", ru: "В итоговом рейтинге Spotify 2025 K-Pop Wrapped Stray Kids заняли 2-е место после BTS, подтвердив свое мировое господство." }, url: "#" },
      { title: { ko: "정규 5집 'ATE' 빌보드 200 1위 — 통산 6번째 정상", en: "5th Album 'ATE' Tops Billboard 200 — Their 6th #1", ja: "5thフルアルバム『ATE』ビルボード200で1位 — 通算6度目の頂点", zh: "正规 5 辑《ATE》登顶 Billboard 200 —— 累计第 6 次夺冠", es: "5to Álbum 'ATE' encabeza el Billboard 200 — Su 6to #1", id: "Album ke-5 'ATE' Memuncaki Billboard 200 — Posisi #1 ke-6 Mereka", fr: "Le 5e album 'ATE' en tête du Billboard 200 — Leur 6e n°1", hi: "5वां एल्बम 'ATE' बिलबोर्ड 200 पर शीर्ष पर - उनकी छठी #1", pt: "5º Álbum 'ATE' no topo da Billboard 200 — Seu 6º #1", ar: "الألبوم الخامس 'ATE' يتصدر بيلبورد 200 — المركز الأول للمرة السادسة", th: "อัลบั้มที่ 5 'ATE' ครองอันดับ 1 ใน Billboard 200 — อันดับ 1 ครั้งที่ 6 ของพวกเขา", vi: "Album thứ 5 'ATE' đứng đầu Billboard 200 — Lần thứ 6 đạt vị trí số 1", ru: "5-й альбом 'ATE' возглавил Billboard 200 — их 6-е первое место" }, date: "2024.07.19", summary: { ko: "정규 5집 'ATE'가 빌보드 200에서 1위를 기록해 스트레이 키즈가 통산 6번째 빌보드 200 정상에 올랐습니다.", en: "'ATE' debuted at #1 on the Billboard 200, making it Stray Kids' 6th chart-topping album.", ja: "5thフルアルバム『ATE』がビルボード200で1位を記録し、Stray Kidsが通算6度目のビルボード200の頂点に立ちました。", zh: "正规 5 辑《ATE》在 Billboard 200 中位列第一，Stray Kids 累计第 6 次登上 Billboard 200 榜首。", es: "'ATE' debutó en el #1 del Billboard 200, convirtiéndose en el sexto álbum de Stray Kids en encabezar la lista.", id: "'ATE' debut di peringkat #1 di Billboard 200, menjadikannya album ke-6 Stray Kids yang memuncaki tangga lagu.", fr: "'ATE' a débuté à la 1re place du Billboard 200, devenant le 6e album de Stray Kids à atteindre le sommet des charts.", hi: "'ATE' ने बिलबोर्ड 200 पर #1 पर शुरुआत की, जिससे यह स्ट्रे किड्स का छठा चार्ट-टॉपिंग एल्बम बन गया।", pt: "'ATE' estreou em 1º lugar na Billboard 200, tornando-se o 6º álbum dos Stray Kids a chegar ao topo da parada.", ar: "ظهر ألبوم 'ATE' لأول مرة في المركز الأول على بيلبورد 200، مما يجعله الألبوم السادس لستراي كيدز الذي يتصدر القوائم.", th: "'ATE' เปิดตัวที่อันดับ 1 ใน Billboard 200 ทำให้อัลบั้มนี้เป็นอัลบั้มที่ 6 ของ Stray Kids ที่ครองอันดับ 1 ในชาร์ต", vi: "'ATE' ra mắt ở vị trí số 1 trên Billboard 200, trở thành album thứ 6 của Stray Kids đứng đầu bảng xếp hạng.", ru: "Альбом 'ATE' дебютировал на 1-м месте в Billboard 200, став 6-м альбомом Stray Kids, возглавившим чарт." }, url: "#" },
      { title: { ko: "월드투어 'dominATE' 50개 도시 전석 매진", en: "World Tour 'dominATE' Sells Out 50 Cities Worldwide", ja: "ワールドツアー『dominATE』50都市全席完売", zh: "世界巡演《dominATE》50 个城市全场售罄", es: "Gira Mundial 'dominATE' agota entradas en 50 ciudades en todo el mundo", id: "Tur Dunia 'dominATE' Terjual Habis di 50 Kota di Seluruh Dunia", fr: "La tournée mondiale 'dominATE' affiche complet dans 50 villes du monde entier", hi: "वर्ल्ड टूर 'dominATE' दुनिया भर के 50 शहरों में सोल्ड आउट", pt: "Turnê Mundial 'dominATE' esgota ingressos em 50 cidades em todo o mundo", ar: "الجولة العالمية 'dominATE' تنفد تذاكرها في 50 مدينة حول العالم", th: "เวิลด์ทัวร์ 'dominATE' ขายหมดเกลี้ยงใน 50 เมืองทั่วโลก", vi: "World Tour 'dominATE' cháy vé tại 50 thành phố trên toàn thế giới", ru: "Мировой тур 'dominATE' распродан в 50 городах по всему миру" }, date: "2025.02.01", summary: { ko: "북미·유럽·아시아 50개 도시에서 진행된 월드투어 'dominATE'가 전 회차 매진을 기록했습니다.", en: "The 'dominATE' world tour sold out across 50 cities in North America, Europe, and Asia.", ja: "北米、欧州、アジアの50都市で開催されたワールドツアー『dominATE』が全公演完売を記録しました。", zh: "在北美、欧洲和亚洲 50 个城市举行的世界巡演《dominATE》创下了全场售罄的纪录。", es: "La gira mundial 'dominATE' agotó todas sus fechas en 50 ciudades de Norteamérica, Europa y Asia.", id: "Tur dunia 'dominATE' terjual habis di 50 kota di Amerika Utara, Eropa, dan Asia.", fr: "La tournée mondiale 'dominATE' a affiché complet dans 50 villes d'Amérique du Nord, d'Europe et d'Asie.", hi: "उत्तरी अमेरिका, यूरोप और एशिया के 50 शहरों में आयोजित 'dominATE' वर्ल्ड टूर के सभी शो सोल्ड आउट रहे।", pt: "A turnê mundial 'dominATE' esgotou em todas as 50 cidades na América do Norte, Europa e Ásia.", ar: "بيعت تذاكر الجولة العالمية 'dominATE' بالكامل في 50 مدينة في أمريكا الشمالية وأوروبا وآسيا.", th: "เวิลด์ทัวร์ 'dominATE' ที่จัดขึ้นใน 50 เมืองทั่วอเมริกาเหนือ ยุโรป และเอเชีย มียอดขายบัตรหมดทุกรอบการแสดง", vi: "World tour 'dominATE' diễn ra tại 50 thành phố ở Bắc Mỹ, Châu Âu và Châu Á đã ghi nhận tình trạng cháy vé cho tất cả các buổi biểu diễn.", ru: "Мировой тур 'dominATE', прошедший в 50 городах Северной Америки, Европы и Азии, был полностью распродан." }, url: "#" },
      { title: { ko: "방찬, 2025 그래미 시상식 참석해 글로벌 주목", en: "Bang Chan Attends 2025 Grammy Awards, Draws Global Attention", ja: "バンチャン、2025年グラミー賞に出席しグローバルな注目を集める", zh: "方灿出席 2025 年格莱美颁奖礼，引发全球关注", es: "Bang Chan asiste a los Premios Grammy 2025 y atrae la atención mundial", id: "Bang Chan Menghadiri Grammy Awards 2025, Menarik Perhatian Global", fr: "Bang Chan assiste aux Grammy Awards 2025 et attire l'attention mondiale", hi: "बैंग चान 2025 ग्रैमी अवार्ड्स में शामिल हुए, वैश्विक ध्यान आकर्षित किया", pt: "Bang Chan comparece ao Grammy Awards 2025 e atrai atenção global", ar: "بانغ تشان يحضر حفل جوائز غرامي 2025 ويجذب اهتماماً عالمياً", th: "Bang Chan เข้าร่วมงาน Grammy Awards 2025 ดึงดูดความสนใจจากทั่วโลก", vi: "Bang Chan tham dự Lễ trao giải Grammy 2025, thu hút sự chú ý toàn cầu", ru: "Бан Чан посетил церемонию вручения премии Грэмми 2025 года, привлекая внимание всего мира" }, date: "2025.02.02", summary: { ko: "방찬이 2025 그래미 시상식에 참석해 K-Pop의 미국 주류 음악 시장 진출을 상징적으로 보여줬습니다.", en: "Bang Chan's attendance at the 2025 Grammy Awards symbolized K-pop's growing presence in the US mainstream music market.", ja: "バンチャンが2025年グラミー賞に出席し、K-Popの米メインストリーム市場進出を象徴的に示しました。", zh: "方灿出席 2025 年格莱美颁奖典礼，象征着 K-Pop 进军美国主流音乐市场。", es: "La asistencia de Bang Chan a los Premios Grammy 2025 simbolizó la creciente presencia del K-pop en el mercado musical convencional de EE. UU.", id: "Kehadiran Bang Chan di Grammy Awards 2025 melambangkan kehadiran K-pop yang semakin besar di pasar musik arus utama AS.", fr: "La présence de Bang Chan aux Grammy Awards 2025 a symbolisé la présence croissante de la K-pop sur le marché musical grand public aux États-Unis.", hi: "2025 ग्रैमी अवार्ड्स में बैंग चान की उपस्थिति ने अमेरिकी मुख्यधारा के संगीत बाजार में के-पॉप की बढ़ती उपस्थिति का प्रतीक है।", pt: "A presença de Bang Chan no Grammy Awards 2025 simbolizou a crescente presença do K-pop no mercado musical dos EUA.", ar: "رمز حضور بانغ تشان حفل جوائز غرامي 2025 إلى الحضور المتزايد للكيبوب في سوق الموسيقى الأمريكية الرئيسية.", th: "การเข้าร่วมงาน Grammy Awards 2025 ของ Bang Chan เป็นสัญลักษณ์ของอิทธิพลที่เพิ่มขึ้นของ K-pop ในตลาดเพลงกระแสหลักของสหรัฐอเมริกา", vi: "Sự hiện diện của Bang Chan tại Lễ trao giải Grammy 2025 tượng trưng cho sự hiện diện ngày càng tăng của K-pop tại thị trường âm nhạc chính thống của Mỹ.", ru: "Присутствие Бан Чана на церемонии вручения премии Грэмми 2025 года символизировало растущее присутствие K-pop на музыкальном рынке США." }, url: "#" },
      { title: { ko: "'Miroh' 발매 6주년 역주행 차트 진입", en: "'Miroh' Re-Enters Charts on Its 6th Anniversary", ja: "『Miroh』発売6周年を迎えチャートに逆走ランクイン", zh: "《Miroh》发行 6 周年，再次进入音源榜单", es: "'Miroh' vuelve a entrar en las listas en su 6º aniversario", id: "'Miroh' Masuk Kembali ke Tangga Lagu pada Ulang Tahun ke-6", fr: "'Miroh' revient dans les charts pour son 6e anniversaire", hi: "'Miroh' अपनी छठी वर्षगांठ पर चार्ट में फिर से शामिल हुआ", pt: "'Miroh' entra novamente nas paradas em seu 6º aniversário", ar: "أغنية 'Miroh' تدخل القوائم مجدداً في ذكرى إصدارها السادسة", th: "'Miroh' กลับเข้าสู่ชาร์ตในโอกาสครบรอบ 6 ปีที่วางจำหน่าย", vi: "'Miroh' lọt vào bảng xếp hạng nhân kỷ niệm 6 năm phát hành", ru: "'Miroh' снова вошел в чарты в свою 6-ю годовщину" }, date: "2025.03.25", summary: { ko: "2019년 발매된 'Miroh'가 데뷔 6주년을 맞아 역주행 차트 진입에 성공해 팬들의 열띤 응원이 화제가 됐습니다.", en: "'Miroh', released in 2019, re-entered the charts on its 6th anniversary thanks to a massive fan streaming project.", ja: "2019年に発売された『Miroh』がデビュー6周年を迎えチャートに逆走ランクインし、ファンの熱い応援が話題となりました。", zh: "2019 年发行的《Miroh》在出道 6 周年之际成功逆袭榜单，粉丝们的狂热支持成为热门话题。", es: "'Miroh', lanzado en 2019, volvió a entrar en las listas en su sexto aniversario gracias a un masivo proyecto de reproducción de los fans.", id: "'Miroh', yang dirilis pada 2019, masuk kembali ke tangga lagu pada ulang tahun ke-6 berkat proyek streaming massal penggemar.", fr: "'Miroh', sorti en 2019, est revenu dans les charts pour son 6e anniversaire grâce à un projet massif de streaming des fans.", hi: "2019 में रिलीज़ हुआ 'Miroh', एक बड़े प्रशंसक स्ट्रीमिंग प्रोजेक्ट की बदौलत अपनी छठी वर्षगांठ पर चार्ट में फिर से शामिल हो गया।", pt: "'Miroh', lançado em 2019, entrou novamente nas paradas em seu 6º aniversário graças a um projeto massivo de streaming de fãs.", ar: "عادت أغنية 'Miroh' التي صدرت في عام 2019 إلى القوائم في ذكرى ترسيمهم السادسة بفضل مشروع استماع ضخم من قبل المعجبين.", th: "เพลง 'Miroh' ที่ปล่อยออกมาในปี 2019 ประสบความสำเร็จในการกลับเข้าสู่ชาร์ตอีกครั้งในโอกาสครบรอบ 6 ปีของการเดบิวต์ ซึ่งได้รับความสนใจจากการสนับสนุนอย่างท่วมท้นของแฟนๆ", vi: "'Miroh', phát hành năm 2019, đã lội ngược dòng vào các bảng xếp hạng nhân kỷ niệm 6 năm ra mắt nhờ dự án streaming quy mô lớn của người hâm mộ.", ru: "Песня 'Miroh', выпущенная в 2019 году, снова вошла в чарты в свою 6-ю годовщину благодаря масштабному фан-проекту по стримингу." }, url: "#" },
      { title: { ko: "Felix, Dior 글로벌 앰배서더 공식 발탁", en: "Felix Named Dior Global Brand Ambassador", ja: "Felix、Diorのグローバルアンバサダーに公式抜擢", zh: "Felix 正式获委任为 Dior 全球大使", es: "Felix nombrado embajador global de Dior", id: "Felix Ditunjuk Sebagai Global Brand Ambassador Dior", fr: "Felix nommé ambassadeur mondial de Dior", hi: "फेलिक्स बने डायर के ग्लोबल ब्रांड एंबेसडर", pt: "Felix nomeado Embaixador Global da Dior", ar: "فيليكس يُعين سفيراً عالمياً لعلامة ديور", th: "Felix ได้รับการแต่งตั้งเป็น Global Ambassador ของ Dior อย่างเป็นทางการ", vi: "Felix chính thức được chọn làm đại sứ toàn cầu của Dior", ru: "Феликс официально назначен глобальным амбассадором Dior" }, date: "2024.09.10", summary: { ko: "스트레이 키즈 Felix가 세계적인 명품 브랜드 Dior의 글로벌 앰배서더로 공식 발탁돼 패션계에서도 K-Pop의 위상이 높아졌습니다.", en: "Stray Kids' Felix was officially named a global brand ambassador for Dior, elevating K-pop's presence in the fashion world.", ja: "Stray KidsのFelixが世界的なラグジュアリーブランドDiorのグローバルアンバサダーに公式抜擢され、ファッション界におけるK-Popの地位を高めました。", zh: "Stray Kids 的 Felix 正式被选为国际奢侈品牌 Dior 的全球大使，提升了 K-Pop 在时尚界的地位。", es: "Felix de Stray Kids fue nombrado oficialmente embajador global de Dior, elevando la presencia del K-pop en el mundo de la moda.", id: "Felix Stray Kids resmi ditunjuk sebagai duta global untuk merek mewah Dior, meningkatkan kehadiran K-pop di dunia mode.", fr: "Felix de Stray Kids a été officiellement nommé ambassadeur mondial de Dior, renforçant la présence de la K-pop dans le monde de la mode.", hi: "स्ट्रे किड्स के फेलिक्स को आधिकारिक तौर पर डायर के लिए ग्लोबल ब्रांड एंबेसडर नामित किया गया था, जिससे फैशन की दुनिया में के-पॉप की उपस्थिति बढ़ी।", pt: "Felix, dos Stray Kids, foi oficialmente nomeado embaixador global da Dior, elevando a presença do K-pop no mundo da moda.", ar: "تم تعيين فيليكس من ستراي كيدز رسمياً كسفير عالمي لعلامة ديور، مما يعزز حضور الكيبوب في عالم الموضة.", th: "Felix แห่ง Stray Kids ได้รับการแต่งตั้งเป็น Global Ambassador ของแบรนด์หรูระดับโลกอย่าง Dior อย่างเป็นทางการ ซึ่งช่วยยกระดับสถานะของ K-Pop ในวงการแฟชั่น", vi: "Felix của Stray Kids đã chính thức được chọn làm đại sứ toàn cầu cho thương hiệu xa xỉ thế giới Dior, nâng cao vị thế của K-Pop trong giới thời trang.", ru: "Феликс из Stray Kids был официально назначен глобальным бренд-амбассадором Dior, что укрепило присутствие K-pop в мире моды." }, url: "#" },
      { title: { ko: "현진, 미술 전시회 'HJ Art' 성황리에 마무리", en: "Hyunjin's Art Exhibition 'HJ Art' Concludes Successfully", ja: "ヒョンジン、美術展示会『HJ Art』が盛況のうちに終了", zh: "铉辰美术展《HJ Art》圆满落幕", es: "La exposición de arte de Hyunjin 'HJ Art' concluye con éxito", id: "Pameran Seni Hyunjin 'HJ Art' Berakhir dengan Sukses", fr: "L'exposition d'art de Hyunjin 'HJ Art' se termine avec succès", hi: "ह्यूनजिन की कला प्रदर्शनी 'HJ Art' सफलतापूर्वक संपन्न हुई", pt: "Exposição de Arte de Hyunjin 'HJ Art' termina com sucesso", ar: "معرض هيونجين الفني 'HJ Art' يختتم فعالياته بنجاح", th: "นิทรรศการศิลปะ 'HJ Art' ของ Hyunjin ปิดฉากลงอย่างสวยงาม", vi: "Triển lãm mỹ thuật 'HJ Art' của Hyunjin kết thúc thành công tốt đẹp", ru: "Художественная выставка Хёнджина 'HJ Art' успешно завершилась" }, date: "2025.05.20", summary: { ko: "현진이 개최한 개인 미술 전시회 'HJ Art'가 전 세계 팬들의 큰 호응을 받으며 성황리에 마무리됐습니다.", en: "Hyunjin's solo art exhibition 'HJ Art' concluded to massive acclaim from fans worldwide.", ja: "ヒョンジンが開催した個人の美術展示会『HJ Art』が、全世界のファンの熱い反応を受け盛況のうちに終了しました。", zh: "铉辰举办的个人美术展《HJ Art》受到了全球粉丝的热烈响应，圆满落幕。", es: "La exposición de arte individual de Hyunjin, 'HJ Art', concluyó con una gran acogida por parte de los fans de todo el mundo.", id: "Pameran seni solo Hyunjin 'HJ Art' berakhir dengan sambutan luar biasa dari penggemar di seluruh dunia.", fr: "L'exposition d'art solo de Hyunjin 'HJ Art' s'est terminée sous les acclamations massives des fans du monde entier.", hi: "ह्यूनजिन की व्यक्तिगत कला प्रदर्शनी 'HJ Art' दुनिया भर के प्रशंसकों से भारी प्रशंसा के साथ संपन्न हुई।", pt: "A exposição de arte solo de Hyunjin, 'HJ Art', terminou com grande aclamação dos fãs em todo o mundo.", ar: "اختتم المعرض الفني الشخصي الذي أقامه هيونجين 'HJ Art' فعالياته بنجاح وسط استجابة كبيرة من المعجبين حول العالم.", th: "นิทรรศการศิลปะเดี่ยว 'HJ Art' ที่จัดขึ้นโดย Hyunjin ปิดฉากลงอย่างประสบความสำเร็จ โดยได้รับการตอบรับอย่างล้นหลามจากแฟนๆ ทั่วโลก", vi: "Triển lãm mỹ thuật cá nhân 'HJ Art' do Hyunjin tổ chức đã kết thúc thành công rực rỡ với sự hưởng ứng nồng nhiệt từ người hâm mộ toàn thế giới.", ru: "Персональная художественная выставка Хёнджина 'HJ Art' завершилась при огромной поддержке поклонников со всего мира." }, url: "#" },
      { title: { ko: "'2025 K-Pop 글로벌 대사' 수상", en: "Awarded '2025 K-Pop Global Ambassador'", ja: "「2025 K-Popグローバル大使」受賞", zh: "荣获 '2025 K-Pop 全球大使' 称号", es: "Premiados como 'Embajadores Globales del K-Pop 2025'", id: "Dianugerahi 'Duta Global K-Pop 2025'", fr: "Nommé 'Ambassadeur mondial de la K-Pop 2025'", hi: "'2025 के-पॉप ग्लोबल एंबेसडर' से सम्मानित", pt: "Premiados como 'Embaixadores Globais do K-Pop 2025'", ar: "الفوز بلقب 'سفير الكيبوب العالمي 2025'", th: "ได้รับรางวัล '2025 K-Pop Global Ambassador'", vi: "Được trao giải 'Đại sứ toàn cầu K-Pop 2025'", ru: "Награждены званием 'Глобальный посол K-Pop 2025'" }, date: "2025.10.09", summary: { ko: "한국 문화체육관광부가 선정한 '2025 K-Pop 글로벌 대사'에 스트레이 키즈가 선정됐습니다.", en: "Stray Kids was selected as '2025 K-Pop Global Ambassador' by Korea's Ministry of Culture, Sports and Tourism.", ja: "韓国文化体育観光部が選定する「2025 K-Popグローバル大使」にStray Kidsが選ばれました。", zh: "Stray Kids 被韩国文化体育观光部评选为 '2025 年 K-Pop 全球大使'。", es: "Stray Kids fue seleccionado como 'Embajador Global del K-Pop 2025' por el Ministerio de Cultura, Deportes y Turismo de Corea.", id: "Stray Kids terpilih sebagai 'Duta Global K-Pop 2025' oleh Kementerian Kebudayaan, Olahraga, dan Pariwisata Korea.", fr: "Stray Kids a été choisi comme 'Ambassadeur mondial de la K-Pop 2025' par le ministère coréen de la Culture, des Sports et du Tourisme.", hi: "स्ट्रे किड्स को कोरिया के संस्कृति, खेल और पर्यटन मंत्रालय द्वारा '2025 के-पॉप ग्लोबल एंबेसडर' के रूप में चुना गया था।", pt: "Os Stray Kids foram selecionados como 'Embaixadores Globais do K-Pop 2025' pelo Ministério da Cultura, Esportes e Turismo da Coreia.", ar: "تم اختيار ستراي كيدز كـ 'سفير الكيبوب العالمي لعام 2025' من قبل وزارة الثقافة والرياضة والسياحة الكورية.", th: "Stray Kids ได้รับการคัดเลือกจากกระทรวงวัฒนธรรม กีฬา และการท่องเที่ยวของเกาหลี ให้เป็น '2025 K-Pop Global Ambassador'", vi: "Stray Kids đã được Bộ Văn hóa, Thể thao và Du lịch Hàn Quốc chọn làm 'Đại sứ toàn cầu K-Pop 2025'.", ru: "Stray Kids были выбраны Министерством культуры, спорта и туризма Кореи в качестве 'Глобального посла K-Pop 2025 года'." }, url: "#" },
      { title: { ko: "팬덤 STAY, 글로벌 규모 1500만 돌파", en: "Fandom STAY Surpasses 15 Million Global Members", ja: "ファン名STAY、グローバル規模1500万人突破", zh: "粉丝群 STAY 全球人数突破 1500 万", es: "El fandom STAY supera los 15 millones de miembros globales", id: "Fandom STAY Melampaui 15 Juta Anggota Global", fr: "Le fandom STAY dépasse les 15 millions de membres dans le monde", hi: "फैन्डम STAY ने वैश्विक स्तर पर 1.5 करोड़ सदस्यों को पार किया", pt: "Fandom STAY ultrapassa 15 milhões de membros globais", ar: "قاعدة معجبي STAY تتخطى 15 مليون عضو عالمياً", th: "แฟนคลับ STAY มียอดสมาชิกทั่วโลกทะลุ 15 ล้านคน", vi: "Fandom STAY vượt mốc 15 triệu thành viên trên toàn cầu", ru: "Фандом STAY превысил 15 миллионов участников по всему миру" }, date: "2025.11.15", summary: { ko: "스트레이 키즈의 공식 팬덤 STAY가 글로벌 팬덤 규모 1500만 명을 돌파했습니다.", en: "Stray Kids' official fandom STAY surpassed 15 million members globally.", ja: "Stray Kidsの公式ファン名STAYがグローバルなファン規模1500万人を突破しました。", zh: "Stray Kids 的官方粉丝群 STAY 全球规模已突破 1500 万人。", es: "El fandom oficial de Stray Kids, STAY, superó los 15 millones de miembros en todo el mundo.", id: "Fandom resmi Stray Kids, STAY, melampaui 15 juta anggota di seluruh dunia.", fr: "Le fandom officiel de Stray Kids, STAY, a dépassé les 15 millions de membres dans le monde.", hi: "स्ट्रे किड्स के आधिकारिक फैन्डम STAY ने दुनिया भर में 1.5 करोड़ सदस्यों का आंकड़ा पार कर लिया है।", pt: "O fandom oficial dos Stray Kids, STAY, ultrapassou 15 milhões de membros em todo o mundo.", ar: "تجاوزت قاعدة معجبي ستراي كيدز الرسمية STAY حاجز 15 مليون عضو عالمياً.", th: "STAY แฟนคลับอย่างเป็นทางการของ Stray Kids มียอดสมาชิกทั่วโลกทะลุ 15 ล้านคน", vi: "Fandom chính thức của Stray Kids là STAY đã vượt mốc 15 triệu thành viên trên toàn cầu.", ru: "Официальный фандом Stray Kids, STAY, превысил 15 миллионов участников по всему миру." }, url: "#" }
    ],
    members: [
      {
        id: "bangchan",
        name: { ko: "방찬", en: "Bang Chan", ja: "バンチャン", zh: "方灿", es: "Bang Chan", id: "Bang Chan", fr: "Bang Chan", hi: "बैंग चान", pt: "Bang Chan", ar: "بانغ تشان", th: "บังชาน", vi: "Bang Chan", ru: "Бан Чан" },
        role: { ko: "리더, 보컬, 래퍼, 프로듀서", en: "Leader, Vocal, Rapper, Producer", ja: "リーダー、ボーカル、ラッパー、プロデューサー", zh: "队长、声乐、说唱、制作人", es: "Líder, Vocalista, Rapero, Productor", id: "Pemimpin, Vokal, Rapper, Produser", fr: "Leader, Vocal, Rappeur, Producteur", hi: "लीडर, वोकल, रैपर, प्रोड्यूसर", pt: "Líder, Vocal, Rapper, Produtor", ar: "القائد، مغني، رابر، منتج", th: "หัวหน้าวง, ร้อง, แร็ปเปอร์, โปรดิวเซอร์", vi: "Trưởng nhóm, Hát, Rapper, Nhà sản xuất", ru: "Лидер, вокалист, рэпер, продюсер" },
        birth: "1997.10.03",
        bloodType: "O",
        mbti: "ENFJ",
        height: "171cm",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ราศีตุล", vi: "Thiên Bình", ru: "Весы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Bang+Chan+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "호주 출신의 스트레이 키즈 리더이자 자체 제작 유닛 3RACHA의 핵심. 팀 음악 대부분을 직접 프로듀싱하며 매주 'Chan's Room' 라이브로 팬들과 소통한다.",
          en: "Leader of Stray Kids and core of self-producing unit 3RACHA. He produces most of the team's music and connects with fans weekly through 'Chan's Room' live streams.",
          ja: "オーストラリア出身のStray Kidsのリーダーであり、セルフプロデュースユニット3RACHAの中心。チームの音楽の大部分を自らプロデュースし、毎週『Chan's Room』ライブを通じてファンと交流しています。",
          zh: "来自澳大利亚的 Stray Kids 队长，也是自制作单位 3RACHA 的核心。他亲自制作了组合的大部分音乐，并每周通过《灿房》直播与粉丝交流。",
          es: "Líder de Stray Kids, originario de Australia, y núcleo de la unidad de autoproducción 3RACHA. Produce la mayor parte de la música del grupo y se conecta semanalmente con los fans a través de 'Chan's Room'.",
          id: "Pemimpin Stray Kids asal Australia dan inti dari unit produksi mandiri 3RACHA. Ia memproduksi sebagian besar musik tim dan terhubung dengan penggemar setiap minggu melalui siaran langsung 'Chan's Room'.",
          fr: "Leader de Stray Kids originaire d'Australie et pilier de l'unité d'autoproduction 3RACHA. Il produit l'essentiel de la musique du groupe et communique chaque semaine avec les fans via son live 'Chan's Room'.",
          hi: "ऑस्ट्रेलियाई मूल के स्ट्रे किड्स के लीडर और 3RACHA यूनिट के मुख्य सदस्य। वह समूह के अधिकांश संगीत का निर्माण करते हैं और 'Chan's Room' के माध्यम से प्रशंसकों से जुड़ते हैं।",
          pt: "Líder do Stray Kids, vindo da Austrália, e núcleo da unidade de autoprodução 3RACHA. Produz a maior parte da música do grupo e conecta-se semanalmente com os fãs através das lives 'Chan's Room'.",
          ar: "قائد فرقة ستراي كيدز من أصل أسترالي والعضو الأساسي في وحدة الإنتاج 3RACHA. ينتج معظم موسيقى الفرقة ويتواصل مع المعجبين أسبوعياً عبر بث 'غرفة تشان'.",
          th: "หัวหน้าวง Stray Kids ชาวออสเตรเลียและเป็นแกนหลักของยูนิตโปรดิวซ์เอง 3RACHA เขาโปรดิวซ์เพลงส่วนใหญ่ของวงและสื่อสารกับแฟนๆ ทุกสัปดาห์ผ่านไลฟ์ 'Chan's Room'",
          vi: "Trưởng nhóm Stray Kids đến từ Úc và là hạt nhân của đơn vị tự sản xuất 3RACHA. Anh tự mình sản xuất hầu hết âm nhạc của nhóm và kết nối với người hâm mộ hàng tuần qua livestream 'Chan's Room'.",
          ru: "Лидер Stray Kids из Австралии и ядро самопродюсирующего юнита 3RACHA. Он продюсирует большую часть музыки группы и еженедельно общается с фанатами в прямых эфирах 'Chan's Room'."
        },
        tmi: {
          ko: [
            "호주 시드니 출신으로, 호주에서 어린 시절을 보내다 JYP 오디션을 위해 한국으로 왔다.",
            "매주 금요일 새벽 팬들과 라이브 방송 'Chan's Room'을 진행해 리더십과 솔직함으로 유명하다.",
            "3RACHA의 리더이자 프로듀서로, 스트레이 키즈 곡의 대부분을 직접 제작한다.",
            "거의 모든 스트레이 키즈 뮤직비디오 의상을 직접 코디하는 패션 감각 소유자.",
            "훈련생 시절 JYP 기숙사에서 GOT7의 마크, 잭슨과 룸메이트였다고 알려져 있다."
          ],
          en: [
            "Originally from Sydney, Australia — he moved to Korea specifically to audition for JYP Entertainment.",
            "Hosts 'Chan's Room' live streams every Friday (early morning) for fans, known for his openness and leadership.",
            "As leader of 3RACHA, he produces the majority of Stray Kids' discography.",
            "Known to personally style his own outfits for most Stray Kids music videos.",
            "Was reportedly a roommate with GOT7's Mark and Jackson during JYP trainee days."
          ],
          ja: [
            "オーストラリアのシドニー出身で、現地で幼少期を過ごした後、JYPのオーディションのために韓国へ渡りました。",
            "毎週金曜日の深夜にファンとのライブ配信『Chan's Room』を行い、そのリーダーシップと誠実さで有名です。",
            "3RACHAのリーダー兼プロデューサーとして、Stray Kidsの楽曲の大部分を自ら制作しています。",
            "ほぼすべてのStray Kidsのミュージックビデオの衣装を自らコーディネートするほどのファッションセンスの持ち主です。",
            "練習生時代、JYPの宿舎でGOT7のマーク、ジャクソンとルームメイトだったことが知られています。"
          ],
          zh: [
            "出生于澳大利亚悉尼，在澳大利亚度过童年后为了参加 JYP 面试来到韩国。",
            "每周五凌晨与粉丝进行《灿房》直播，以其领导力和坦诚而闻名。",
            "作为 3RACHA 的队长和制作人，亲自创作了 Stray Kids 的大部分歌曲。",
            "拥有卓越的时尚感，几乎亲自搭配了 Stray Kids 所有音乐录影带的服装。",
            "据传在练习生时期，曾与 GOT7 的 Mark 和 Jackson 在 JYP 宿舍同住一间房。"
          ],
          es: [
            "Originario de Sídney, Australia; se mudó a Corea específicamente para audicionar para JYP Entertainment.",
            "Realiza transmisiones en vivo llamadas 'Chan's Room' todos los viernes para los fans, siendo famoso por su liderazgo y honestidad.",
            "Como líder de 3RACHA, produce la gran mayoría de la discografía de Stray Kids.",
            "Tiene un gran sentido de la moda y suele coordinar personalmente el vestuario de muchos videos musicales.",
            "Se sabe que fue compañero de cuarto de Mark y Jackson de GOT7 durante sus días de aprendiz en JYP."
          ],
          id: [
            "Berasal dari Sydney, Australia — ia pindah ke Korea khusus untuk audisi JYP Entertainment.",
            "Mengadakan siaran langsung 'Chan's Room' setiap Jumat untuk penggemar, dikenal karena keterbukaan dan kepemimpinannya.",
            "Sebagai pemimpin 3RACHA, ia memproduksi sebagian besar diskografi Stray Kids.",
            "Memiliki selera mode yang baik dan sering mengoordinasikan kostum video musik Stray Kids secara langsung.",
            "Diketahui pernah menjadi teman sekamar Mark dan Jackson GOT7 saat masa trainee di JYP."
          ],
          fr: [
            "Originaire de Sydney, en Australie — il a déménagé en Corée spécifiquement pour auditionner chez JYP Entertainment.",
            "Anime des streams 'Chan's Room' chaque vendredi pour les fans, connu pour son honnêteté et son leadership.",
            "En tant que leader de 3RACHA, il produit la majeure partie de la discographie de Stray Kids.",
            "Possède un grand sens de la mode et coordonne souvent lui-même les tenues des clips vidéo.",
            "Était colocataire avec Mark et Jackson de GOT7 pendant ses années de stagiaire chez JYP."
          ],
          hi: [
            "सिडनी, ऑस्ट्रेलिया के मूल निवासी - वे विशेष रूप से JYP एंटरटेनमेंट के लिए ऑडिशन देने के लिए कोरिया चले गए।",
            "प्रशंसकों के लिए हर शुक्रवार को 'Chan's Room' लाइव स्ट्रीम आयोजित करते हैं, जो उनके खुलेपन और नेतृत्व के लिए जाने जाते हैं।",
            "3RACHA के लीडर के रूप में, वे स्ट्रे किड्स की अधिकांश डिस्कोग्राफी का निर्माण करते हैं।",
            "स्ट्रे किड्स के अधिकांश संगीत वीडियो के लिए अपने कपड़ों को व्यक्तिगत रूप से स्टाइल करने के लिए जाने जाते हैं।",
            "बताया जाता है कि वे JYP ट्रेनी के दिनों में GOT7 के मार्क और जैक्सन के साथ रूममेट थे।"
          ],
          pt: [
            "Original de Sydney, Austrália — ele se mudou para a Coreia especificamente para fazer o teste para a JYP Entertainment.",
            "Realiza transmissões ao vivo 'Chan's Room' todas as sextas-feiras para os fãs, sendo conhecido por sua liderança e honestidade.",
            "Como líder do 3RACHA, ele produz a maior parte da discografia do Stray Kids.",
            "Tem um grande senso de moda e costuma coordenar pessoalmente o figurino de muitos videoclipes.",
            "Foi colega de quarto de Mark e Jackson, do GOT7, durante seus dias de trainee na JYP."
          ],
          ar: [
            "من مواليد سيدني، أستراليا — انتقل إلى كوريا خصيصاً للمشاركة في تجارب أداء JYP Entertainment.",
            "يقدم بثاً مباشراً بعنوان 'غرفة تشان' كل يوم جمعة، وهو مشهور بصدقه وقيادته الحكيمة.",
            "بصفتة قائداً لوحدة 3RACHA، ينتج غالبية أعمال ستراي كيدز الموسيقية.",
            "يتمتع بحس عالي في الموضة وغالباً ما ينسق ملابس فيديوهات الفرقة الموسيقية بنفسه.",
            "يُعرف أنه كان زميلاً في الغرفة لمارك وجاكسون من GOT7 خلال فترة تدريبه في JYP."
          ],
          th: [
            "มาจากซิดนีย์ ประเทศออสเตรเลีย — เขาย้ายมาเกาหลีเพื่อเข้าร่วมการออดิชั่นของ JYP Entertainment โดยเฉพาะ",
            "จัดรายการไลฟ์ 'Chan's Room' ทุกวันศุกร์เพื่อแฟนๆ ซึ่งมีชื่อเสียงในเรื่องความเป็นผู้นำและความจริงใจ",
            "ในฐานะหัวหน้าวง 3RACHA เขาเป็นคนโปรดิวซ์เพลงส่วนใหญ่ในดิสโกกราฟีของ Stray Kids",
            "มีเซนส์ด้านแฟชั่นที่โดดเด่น และมักจะประสานงานชุดในมิวสิกวิดีโอของ Stray Kids ด้วยตัวเอง",
            "เป็นที่รู้กันว่าเขาเคยเป็นรูมเมทกับ Mark และ Jackson วง GOT7 ในช่วงที่เป็นเด็กฝึกของ JYP"
          ],
          vi: [
            "Đến từ Sydney, Úc — anh chuyển đến Hàn Quốc đặc biệt để thử giọng cho JYP Entertainment.",
            "Thực hiện livestream 'Chan's Room' vào mỗi thứ Sáu hàng tuần, nổi tiếng với sự trung thực và khả năng lãnh đạo.",
            "Với tư cách là trưởng nhóm 3RACHA, anh sản xuất phần lớn các bài hát của Stray Kids.",
            "Có gu thẩm mỹ tốt và thường tự mình phối đồ cho các MV của Stray Kids.",
            "Được biết đến là bạn cùng phòng với Mark và Jackson của GOT7 trong thời gian làm thực tập sinh tại JYP."
          ],
          ru: [
            "Родом из Сиднея, Австралия — он переехал в Корею специально для прослушивания в JYP Entertainment.",
            "Каждую пятницу проводит прямые эфиры 'Chan's Room' для фанатов, известен своим лидерством и искренностью.",
            "Как лидер 3RACHA, он продюсирует большую часть дискографии Stray Kids.",
            "Обладает отличным чувством моды и часто лично координирует костюмы для музыкальных клипов.",
            "Известно, что он был соседом по комнате Марка и Джексона из GOT7 во время стажировки в JYP."
          ]
        },
        socials: {}
      },
      {
        id: "leeknow",
        name: { ko: "리노", en: "Lee Know", ja: "リノ", zh: "李旻浩", es: "Lee Know", id: "Lee Know", fr: "Lee Know", hi: "ली नो", pt: "Lee Know", ar: "لي نو", th: "ลีโน", vi: "Lee Know", ru: "Ли Но" },
        role: { ko: "댄서, 보컬", en: "Dancer, Vocal", ja: "ダンサー、ボーカル", zh: "舞者、声乐", es: "Bailarín, Vocalista", id: "Penari, Vokal", fr: "Danseur, Vocal", hi: "डांसर, वोकल", pt: "Dançarino, Vocal", ar: "راقص، مغني", th: "นักเต้น, ร้อง", vi: "Nhảy, Hát", ru: "Танцор, вокалист" },
        birth: "1998.10.25",
        bloodType: "O",
        mbti: "ISFP",
        height: "171cm",
        zodiac: { ko: "전갈자리", en: "Scorpio", ja: "さそ리座", zh: "天蝎座", es: "Escorpio", id: "Skorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "ราศีพิจิก", vi: "Bọ Cạp", ru: "Скорпион" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Lee+Know+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "BTS 'DNA' 백댄서 출신의 스트레이 키즈 메인 댄서. 고양이 3마리를 키우는 집사로, 압도적인 댄스 실력으로 'JYP의 춤의 신'이라 불린다.",
          en: "Former BTS 'DNA' backup dancer turned Stray Kids main dancer. A devoted cat dad to 3 cats, he is called 'JYP's god of dance' for his overwhelming skill.",
          ja: "BTSの『DNA』バックダンサー出身のStray Kidsメインダンサー。3匹の猫を育てる飼い主で、圧倒的なダンスの実力から「JYPのダンスの神」と呼ばれています。",
          zh: "BTS《DNA》伴舞出身的 Stray Kids 主舞。养了 3 只猫的“猫奴”，凭借压倒性的舞蹈实力被誉为“JYP 舞神”。",
          es: "Ex bailarín de apoyo de BTS en 'DNA', ahora bailarín principal de Stray Kids. Un devoto padre de 3 gatos, es llamado el 'Dios del baile de JYP' por su increíble habilidad.",
          id: "Mantan penari latar BTS 'DNA' yang kini menjadi penari utama Stray Kids. Seorang pecinta kucing dengan 3 kucing, ia dijuluki 'Dewa tari JYP' karena kemampuannya yang luar biasa.",
          fr: "Ancien danseur pour BTS sur 'DNA', devenu danseur principal de Stray Kids. Passionné par ses 3 chats, il est surnommé le 'Dieu de la danse de JYP' pour son talent exceptionnel.",
          hi: "BTS के 'DNA' बैकअप डांसर से स्ट्रे किड्स के मुख्य डांसर बने। 3 बिल्लियों के प्रेमी, उन्हें उनके असाधारण कौशल के लिए 'JYP का डांस गॉड' कहा जाता है।",
          pt: "Ex-dançarino de apoio do BTS em 'DNA' e agora dançarino principal do Stray Kids. Um pai dedicado de 3 gatos, é chamado de 'Deus da dança da JYP' por sua habilidade impressionante.",
          ar: "راقص خلفي سابق لفرقة BTS في أغنية 'DNA' وأصبح الراقص الرئيسي في ستراي كيدز. مربي لـ 3 قطط، ويُلقب بـ 'إله الرقص في JYP' لمهارته الفائقة.",
          th: "อดีตแบ็กอัพแดนเซอร์เพลง 'DNA' ของ BTS ที่กลายมาเป็นนักเต้นหลักของ Stray Kids เขาเป็นทาสแมวที่เลี้ยงแมว 3 ตัว และได้รับฉายาว่า 'พระเจ้าแห่งการเต้นของ JYP'",
          vi: "Cựu vũ công phụ họa cho 'DNA' của BTS và hiện là vũ công chính của Stray Kids. Một 'con sen' chính hiệu của 3 chú mèo, anh được gọi là 'Thần nhảy của JYP' vì kỹ năng áp đảo.",
          ru: "Бывший бэк-дансер BTS в клипе 'DNA', ставший главным танцором Stray Kids. Преданный владелец 3 кошек, его называют «богом танца JYP» за его невероятное мастерство."
        },
        tmi: {
          ko: [
            "BTS 'DNA' 뮤직비디오 백댄서로 출연한 경력이 있어 데뷔 전부터 이미 유명했다.",
            "고양이 3마리를 키우는 집사로, 반려묘 '순이·둥이·도리'는 팬들에게 셀럽급 인기를 누린다.",
            "원래 다른 그룹으로 데뷔할 예정이었으나 해체 후 재오디션을 거쳐 스트레이 키즈에 합류했다.",
            "춤 실력이 워낙 뛰어나 JYP 내부에서도 '춤의 신'이라는 별명으로 불렸다.",
            "이름 '리노(Lee Know)'는 본명 이민호에서 따왔으며, 영어로 'Lee · Know' 즉 '이 알아'라는 말장난 의미도 있다."
          ],
          en: [
            "Appeared as a backup dancer in BTS's 'DNA' music video — making him recognizable even before debut.",
            "Has three cats (Soon-ie, Doong-ie, Dori) who are practically celebrities in the STAY fandom.",
            "Originally set to debut with a different group under JYP but joined Stray Kids after a re-audition.",
            "Known internally at JYP as 'god of dance' for his exceptional technical ability.",
            "His stage name 'Lee Know' is a play on his real surname Lee Min-ho — a pun on 'I know'."
          ],
          ja: [
            "BTSの『DNA』ミュージックビデオにバックダンサーとして出演した経歴があり、デビュー前からすでに有名でした。",
            "3匹の猫を飼っており、愛猫の「スニ・ドゥニ・ドリ」はファンの間でもセレブ級の人気を誇ります。",
            "元々別のグループでデビューする予定でしたが、解散後に再オーディションを経てStray Kidsに合流しました。",
            "ダンスの実力があまりに高く、JYP内部でも「ダンスの神」というあだ名で呼ばれていました。",
            "名前の「リノ（Lee Know）」は本名のイ・ミンホから取られており、英語の「I Know」とかけた言葉遊びの意味もあります。"
          ],
          zh: [
            "曾出演过 BTS《DNA》音乐录影带的伴舞，出道前就已经小有名气。",
            "养了 3 只猫，爱猫“顺儿、东儿、多利”在粉丝中拥有明星般的人气。",
            "原计划在另一个组合出道，但在该组合解散后通过重新面试加入了 Stray Kids。",
            "舞蹈实力非常出色，在 JYP 内部也被称为“舞神”。",
            "艺名“Lee Know”取自本名李旻浩，在英语中也有“我懂（I Know）”的双关含义。"
          ],
          es: [
            "Apareció como bailarín de apoyo en el video musical 'DNA' de BTS, lo que lo hizo reconocible incluso antes de su debut.",
            "Tiene tres gatos (Soon-ie, Doong-ie, Dori) que son prácticamente celebridades en el fandom STAY.",
            "Originalmente iba a debutar en otro grupo de JYP, pero se unió a Stray Kids tras una re-audición.",
            "Conocido internamente en JYP como el 'Dios del baile' por su excepcional capacidad técnica.",
            "Su nombre artístico 'Lee Know' es un juego de palabras con su apellido Lee y la palabra inglesa 'Know' (I know)."
          ],
          id: [
            "Pernah tampil sebagai penari latar dalam video musik BTS 'DNA' — membuatnya sudah dikenal bahkan sebelum debut.",
            "Memiliki tiga ekor kucing (Soon-ie, Doong-ie, Dori) yang sangat populer di kalangan penggemar STAY.",
            "Awalnya dijadwalkan untuk debut dengan grup lain di bawah JYP, tetapi bergabung dengan Stray Kids setelah audisi ulang.",
            "Dikenal di internal JYP sebagai 'Dewa tari' karena kemampuan teknisnya yang luar biasa.",
            "Nama panggungnya 'Lee Know' berasal dari marga aslinya Lee dan permainan kata bahasa Inggris 'Know' (I know)."
          ],
          fr: [
            "Est apparu comme danseur dans le clip 'DNA' de BTS — ce qui l'a rendu reconnaissable avant même ses débuts.",
            "Possède trois chats (Soon-ie, Doong-ie, Dori) qui sont de véritables célébrités parmi les fans.",
            "Devait initialement débuter dans un autre groupe chez JYP, mais a rejoint Stray Kids après une nouvelle audition.",
            "Surnommé en interne chez JYP le 'Dieu de la danse' pour ses capacités techniques exceptionnelles.",
            "Son nom de scène 'Lee Know' vient de son nom de famille Lee et d'un jeu de mots avec 'Know' (Je sais)."
          ],
          hi: [
            "BTS के 'DNA' संगीत वीडियो में बैकअप डांसर के रूप में दिखाई दिए - जिससे वे शुरुआत से पहले ही पहचाने जाने लगे थे।",
            "उनके पास तीन बिल्लियाँ (Soon-ie, Doong-ie, Dori) हैं जो STAY फैन्डम में लगभग हस्तियां हैं।",
            "मूल रूप से JYP के तहत एक अलग समूह के साथ शुरुआत करने वाले थे, लेकिन पुन: ऑडिशन के बाद स्ट्रे किड्स में शामिल हो गए।",
            "अपनी असाधारण तकनीकी क्षमता के लिए JYP में आंतरिक रूप से 'डांस गॉड' के रूप में जाने जाते हैं।",
            "उनका मंच नाम 'Lee Know' उनके असली उपनाम ली मिन-हो पर एक शब्द का खेल है - 'I know' का एक रूप।"
          ],
          pt: [
            "Apareceu como dançarino de apoio no videoclipe 'DNA' do BTS — tornando-o reconhecível antes mesmo do debut.",
            "Tem três gatos (Soon-ie, Doong-ie, Dori) que são praticamente celebridades no fandom STAY.",
            "Originalmente estrearia em outro grupo na JYP, mas se juntou ao Stray Kids após um novo teste.",
            "Conhecido internamente na JYP como o 'Deus da dança' por sua habilidade técnica excepcional.",
            "Seu nome artístico 'Lee Know' é um jogo de palavras com seu sobrenome Lee e a palavra 'Know' (I know)."
          ],
          ar: [
            "ظهر كراقص خلفي في فيديو كليب 'DNA' لفرقة BTS — مما جعله معروفاً حتى قبل ترسيمه.",
            "يمتلك ثلاث قطط (سوني، دونغي، دوري) وهي مشهورة جداً بين معجبي الفرقة.",
            "كان من المقرر أن يترسم مع فرقة أخرى في JYP، لكنه انضم إلى ستراي كيدز بعد تجربة أداء ثانية.",
            "يُعرف داخل JYP بلقب 'إله الرقص' لقدراته التقنية الاستثنائية.",
            "اسمه الفني 'لي نو' هو تلاعب بلقب عائلته 'لي' والكلمة الإنجليزية 'Know'."
          ],
          th: [
            "เคยปรากฏตัวในฐานะแดนเซอร์ในมิวสิกวิดีโอ 'DNA' ของ BTS — ทำให้เขามีคนจำได้ตั้งแต่ก่อนเดบิวต์",
            "เลี้ยงแมว 3 ตัว (Soon-ie, Doong-ie, Dori) ซึ่งได้รับความนิยมในหมู่แฟนๆ STAY ราวกับดารา",
            "เดิมทีมีกำหนดจะเดบิวต์กับวงอื่นใน JYP แต่ได้เข้าร่วม Stray Kids หลังจากผ่านการออดิชั่นอีกครั้ง",
            "เป็นที่รู้จักภายใน JYP ในฉายา 'พระเจ้าแห่งการเต้น' จากทักษะทางเทคนิคที่ยอดเยี่ยม",
            "ชื่อสเตจ 'Lee Know' มาจากนามสกุลจริง 'Lee' และการเล่นคำภาษาอังกฤษ 'Know' (ที่แปลว่า รู้)"
          ],
          vi: [
            "Từng xuất hiện với tư cách là vũ công phụ họa trong MV 'DNA' của BTS — khiến anh được nhận ra ngay cả trước khi ra mắt.",
            "Nuôi 3 chú mèo (Soon-ie, Doong-ie, Dori), chúng nổi tiếng như những người nổi tiếng trong cộng đồng STAY.",
            "Ban đầu dự định ra mắt với một nhóm khác thuộc JYP, nhưng đã gia nhập Stray Kids sau một cuộc thử giọng lại.",
            "Được mệnh danh là 'Thần nhảy' trong nội bộ JYP nhờ khả năng kỹ thuật xuất sắc.",
            "Nghệ danh 'Lee Know' lấy từ họ Lee của anh và cách chơi chữ tiếng Anh của từ 'Know' (I know)."
          ],
          ru: [
            "Появился в качестве бэк-дансера в клипе BTS 'DNA', благодаря чему стал узнаваемым еще до дебюта.",
            "У него есть три кошки (Суни, Дуни, Дори), которые практически стали знаменитостями среди фанатов.",
            "Первоначально должен был дебютировать в другой группе JYP, но присоединился к Stray Kids после повторного прослушивания.",
            "Внутри JYP его называют «богом танца» за его исключительные технические способности.",
            "Его сценический псевдоним 'Lee Know' — это игра слов с его настоящей фамилией Ли и английским словом 'know' (знать)."
          ]
        },
        socials: {}
      },
      {
        id: "changbin",
        name: { ko: "창빈", en: "Changbin", ja: "チャンビン", zh: "徐彰彬", es: "Changbin", id: "Changbin", fr: "Changbin", hi: "चांगबिन", pt: "Changbin", ar: "تشانغبين", th: "ชางบิน", vi: "Changbin", ru: "Чанбин" },
        role: { ko: "래퍼", en: "Rapper", ja: "ラッパー", zh: "说唱", es: "Rapero", id: "Rapper", fr: "Rappeur", hi: "रैपर", pt: "Rapper", ar: "رابر", th: "แร็ปเปอร์", vi: "Rapper", ru: "Рэпер" },
        birth: "1999.08.11",
        bloodType: "O",
        mbti: "ENFP",
        height: "167cm",
        zodiac: { ko: "사자자리", en: "Leo", ja: "しし座", zh: "狮子座", es: "Leo", id: "Leo", fr: "Lion", hi: "सिंह", pt: "Leão", ar: "الأسد", th: "ราศีสิงห์", vi: "Sư Tử", ru: "Лев" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Changbin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "3RACHA의 핵심 래퍼이자 작사가. 특유의 저음 래핑 스타일 '군함'으로 유명하며 일본어를 독학으로 마스터한 언어 재능도 가졌다.",
          en: "Core rapper and lyricist of 3RACHA, nicknamed 'Battleship' for his deep powerful rap style. Also self-taught Japanese, showcasing his linguistic talent.",
          ja: "3RACHAの中心ラッパー兼作詞家。独特の低音ラップスタイル「軍艦」で有名で、日本語を独学でマスターした言語の才能も持っています。",
          zh: "3RACHA 的核心说唱歌手和作词人。以其独特的低音说唱风格“军舰”而闻名，还自学掌握了日语，展现了语言天赋。",
          es: "Rapero principal y letrista de 3RACHA, apodado 'Battleship' por su estilo de rap potente y profundo. Autodidacta en japonés, demostrando su talento lingüístico.",
          id: "Rapper utama dan penulis lirik 3RACHA, dijuluki 'Battleship' karena gaya rapnya yang dalam dan kuat. Juga belajar bahasa Jepang secara otodidak, menunjukkan bakat linguistiknya.",
          fr: "Rappeur et parolier de 3RACHA, surnommé 'Battleship' pour son style de rap puissant. Il a également appris le japonais en autodidacte, prouvant son talent pour les langues.",
          hi: "3RACHA के मुख्य रैपर और गीतकार, जिन्हें उनकी दमदार रैप शैली के लिए 'Battleship' उपनाम दिया गया है। उन्होंने जापानी भाषा भी खुद सीखी है।",
          pt: "Rapper principal e letrista do 3RACHA, apelidado de 'Battleship' por seu estilo de rap potente e profundo. Autodidata em japonês, demonstrando seu talento linguístico.",
          ar: "الرابر الرئيسي كاتب الأغاني في وحدة 3RACHA، يلقب بـ 'البارجة' لأسلوبه القوي في الراب. كما تعلم اليابانية ذاتياً، مما يظهر موهبته اللغوية.",
          th: "แร็ปเปอร์หลักและนักแต่งเพลงของ 3RACHA ได้รับฉายาว่า 'Battleship' จากสไตล์การแร็ปเสียงต่ำที่ทรงพลัง เขายังเรียนภาษาญี่ปุ่นด้วยตัวเองจนเชี่ยวชาญอีกด้วย",
          vi: "Rapper chính và nhạc sĩ của 3RACHA, nổi tiếng với phong cách rap giọng trầm đặc trưng 'Battleship'. Anh cũng tự học tiếng Nhật, thể hiện tài năng ngôn ngữ.",
          ru: "Основной рэпер и автор текстов 3RACHA, получивший прозвище 'Battleship' за свой мощный глубокий стиль рэпа. Самостоятельно выучил японский язык, проявив лингвистический талант."
        },
        tmi: {
          ko: [
            "3RACHA의 핵심 래퍼이자 작사가로, 특유의 저음 래핑 스타일로 '군함'이라는 별명을 얻었다.",
            "일본어를 독학으로 공부해 일본 팬들과 유창하게 소통하는 언어 능력자다.",
            "체력 관리에 진심인 멤버로, 하루도 빠짐없이 운동을 한다고 알려져 있다.",
            "어린 시절 아이돌이 꿈이 아니었으나 학교 친구들의 권유로 오디션에 참가했다.",
            "팬들 사이에서 '서태지 이후 최고의 래퍼'라는 극찬을 받을 정도로 래핑 실력을 인정받는다."
          ],
          en: [
            "Core rapper of 3RACHA, nicknamed 'Battleship' for his distinctively deep, powerful rap style.",
            "Self-taught Japanese speaker who communicates fluently with Japanese fans.",
            "Famous for never missing a workout — fitness is a top priority in his daily routine.",
            "Didn't dream of being an idol as a child — a school friend encouraged him to audition.",
            "Often praised as 'the best rapper since Seo Taiji' by fans for his lyrical depth and flow."
          ],
          ja: [
            "3RACHAの中心ラッパー兼作詞家で、独特の低音ラップスタイルから「軍艦」というあだ名を得ました。",
            "日本語を独学で勉強し、日本のファンと流暢にコミュニケーションを取る言語能力の持ち主です。",
            "体力管理に非常に熱心なメンバーで、一日も欠かさず運動をしていることで知られています。",
            "子供の頃の夢はアイドルではありませんでしたが、学校の友人の勧めでオーディションに参加しました。",
            "ファンの間で「ソ・テジ以来最高のラッパー」と絶賛されるほど、ラップの実力を認められています。"
          ],
          zh: [
            "作为 3RACHA 的核心说唱歌手和作词人，因其独特的低音说唱风格获得了“军舰”的称号。",
            "自学日语，是能与日本粉丝流利交流的语言达人。",
            "对身体管理非常认真，据说是每天坚持锻炼的成员。",
            "儿时的梦想并不是当偶像，但在同学的劝说下参加了面试。",
            "说唱实力备受认可，甚至被粉丝赞誉为“徐太志以后最棒的说唱歌手”。"
          ],
          es: [
            "Rapero principal de 3RACHA, apodado 'Battleship' por su estilo de rap distintivamente profundo y potente.",
            "Habla japonés de forma autodidacta y se comunica con fluidez con los fans japoneses.",
            "Famoso por no saltarse nunca un entrenamiento; el ejercicio es una prioridad en su rutina diaria.",
            "No soñaba con ser un ídolo cuando era niño; un amigo de la escuela lo animó a audicionar.",
            "A menudo elogiado por los fans por su profundidad lírica y su flow como uno de los mejores raperos."
          ],
          id: [
            "Rapper inti 3RACHA, dijuluki 'Battleship' karena gaya rapnya yang dalam dan kuat.",
            "Belajar bahasa Jepang secara otodidak dan berkomunikasi dengan lancar dengan penggemar Jepang.",
            "Terkenal karena tidak pernah melewatkan latihan fisik — kebugaran adalah prioritas utama dalam rutinitasnya.",
            "Tidak bermimpi menjadi idola saat kecil — teman sekolahnya mendorongnya untuk ikut audisi.",
            "Sering dipuji oleh penggemar karena kedalaman lirik dan aliran rapnya yang luar biasa."
          ],
          fr: [
            "Rappeur de 3RACHA, surnommé 'Battleship' pour son style de rap puissant et grave.",
            "Appris le japonais en autodidacte et communique couramment avec les fans japonais.",
            "Célèbre pour ne jamais manquer une séance d'entraînement — le fitness est sa priorité.",
            "Ne rêvait pas de devenir une idole enfant — c'est un ami d'école qui l'a encouragé à auditionner.",
            "Souvent félicité par les fans pour la profondeur de ses paroles et son flow exceptionnel."
          ],
          hi: [
            "3RACHA के कोर रैपर, जिन्हें उनकी विशिष्ट गहरी और दमदार रैप शैली के लिए 'Battleship' उपनाम दिया गया है।",
            "स्व-शिक्षित जापानी वक्ता जो जापानी प्रशंसकों के साथ धाराप्रवाह संवाद करते हैं।",
            "कसरत कभी न छोड़ने के लिए प्रसिद्ध - फिटनेस उनकी दैनिक दिनचर्या में सर्वोच्च प्राथमिकता है।",
            "बचपन में आइडल बनने का सपना नहीं देखा था - स्कूल के एक दोस्त ने उन्हें ऑडिशन देने के लिए प्रोत्साहित किया।",
            "प्रशंसकों द्वारा उनकी गीतात्मक गहराई और प्रवाह के लिए अक्सर प्रशंसा की जाती है।"
          ],
          pt: [
            "Rapper principal do 3RACHA, apelidado de 'Battleship' por seu estilo de rap distintamente profundo e potente.",
            "Autodidata em japonês, comunica-se fluentemente com os fãs japoneses.",
            "Famoso por nunca faltar a um treino — o fitness é uma prioridade máxima em sua rotina diária.",
            "Não sonhava em ser um ídolo quando criança — um amigo de escola o incentivou a fazer o teste.",
            "Muitas vezes elogiado pelos fãs por sua profundidade lírica e flow como um dos melhores rappers."
          ],
          ar: [
            "الرابر الأساسي في 3RACHA، يلقب بـ 'البارجة' لأسلوبه المميز والعميق في الراب.",
            "تعلم اليابانية بنفسه ويتحدث بها بطلاقة مع المعجبين اليابانيين.",
            "مشهور بعدم تفويته للتمارين الرياضية — اللياقة البدنية هي أولوية قصوى في روتينه اليومي.",
            "لم يحلم بأن يصبح آيدول في طفولته — شجعه صديق من المدرسة على التقدم لتجربة الأداء.",
            "غالباً ما يمتدحه المعجبون لعمق كلماته وتدفق الراب لديه كواحد من أفضل الرابرز."
          ],
          th: [
            "แแร็ปเปอร์หลักของ 3RACHA ได้รับฉายาว่า 'Battleship' จากสไตล์การแร็ปที่ทุ้มและทรงพลังเป็นเอกลักษณ์",
            "เรียนภาษาญี่ปุ่นด้วยตัวเองจนสามารถสื่อสารกับแฟนๆ ชาวญี่ปุ่นได้อย่างคล่องแคล่ว",
            "มีชื่อเสียงเรื่องการไม่เคยขาดการออกกำลังกาย — ฟิตเนสคือสิ่งสำคัญอันดับแรกในกิจวัตรประจำวันของเขา",
            "ไม่ได้ฝันอยากเป็นไอดอลมาตั้งแต่เด็ก — เพื่อนที่โรงเรียนเป็นคนสนับสนุนให้เขาลองไปออดิชั่น",
            "มักจะได้รับคำชมจากแฟนๆ ในเรื่องความหมายของเนื้อเพลงและโฟลวการแร็ปที่ยอดเยี่ยม"
          ],
          vi: [
            "Rapper cốt cán của 3RACHA, biệt danh 'Battleship' nhờ phong cách rap giọng trầm mạnh mẽ đặc trưng.",
            "Tự học tiếng Nhật và giao tiếp trôi chảy với người hâm mộ Nhật Bản.",
            "Nổi tiếng với việc không bao giờ bỏ lỡ buổi tập luyện — thể hình là ưu tiên hàng đầu trong thói quen hàng ngày.",
            "Không hề mơ ước trở thành thần tượng khi còn nhỏ — một người bạn cùng trường đã khuyến khích anh đi thử giọng.",
            "Thường được người hâm mộ khen ngợi là một trong những rapper xuất sắc nhất với chiều sâu lời nhạc và flow mượt mà."
          ],
          ru: [
            "Основной рэпер 3RACHA, получивший прозвище 'Battleship' за свой характерный глубокий и мощный стиль рэпа.",
            "Самостоятельно выучил японский язык и свободно общается с японскими фанатами.",
            "Известен тем, что никогда не пропускает тренировки — фитнес является главным приоритетом в его ежедневном графике.",
            "В детстве не мечтал стать айдолом — школьный друг убедил его пойти на прослушивание.",
            "Поклонники часто хвалят его за глубину текстов и отличный флоу, считая одним из лучших рэперов."
          ]
        },
        socials: {}
      },
      {
        id: "hyunjin",
        name: { ko: "현진", en: "Hyunjin", ja: "ヒョンジン", zh: "黄铉辰", es: "Hyunjin", id: "Hyunjin", fr: "Hyunjin", hi: "ह्यूनजिन", pt: "Hyunjin", ar: "هيونجين", th: "ฮยอนจิน", vi: "Hyunjin", ru: "Хёнджин" },
        role: { ko: "댄서, 보컬, 비주얼", en: "Dancer, Vocal, Visual", ja: "ダンサー、ボーカル、ビジュアル", zh: "舞者、声乐、门面", es: "Bailarín, Vocalista, Visual", id: "Penari, Vokal, Visual", fr: "Danseur, Vocal, Visuel", hi: "डांसर, वोकल, विजुअल", pt: "Dançarino, Vocal, Visual", ar: "راقص، مغني، فيجوال", th: "นักเต้น, ร้อง, ภาพลักษณ์", vi: "Nhảy, Hát, Visual", ru: "Танцор, вокалист, визуал" },
        birth: "2000.03.20",
        bloodType: "B",
        mbti: "ESTP",
        height: "179cm",
        zodiac: { ko: "물고기자리", en: "Pisces", ja: "うお座", zh: "双鱼座", es: "Piscis", id: "Pisces", fr: "Poissons", hi: "मीन", pt: "Peixes", ar: "الحوت", th: "ราศีมีน", vi: "Song Ngư", ru: "Рыбы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Hyunjin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "화가이자 발레 출신 댄서. Versace·Valentino 글로벌 앰배서더로 활동하며 리노와 함께 스트레이 키즈 '춤 양대 산맥'으로 불린다.",
          en: "A painter and ballet-trained dancer. Global ambassador for Versace and Valentino, dubbed one of Stray Kids' two dance pillars alongside Lee Know.",
          ja: "画家でありバレエ出身のダンサー。Versace、Valentinoのグローバルアンバサダーとして活動し、リノと共にStray Kidsの「ダンスの両大山脈」と呼ばれています。",
          zh: "画家兼芭蕾舞出身的舞者。担任 Versace 和 Valentino 的全球大使，与 Lee Know 一起被誉为 Stray Kids 的“舞蹈两大山脉”。",
          es: "Pintor y bailarín con formación en ballet. Embajador global de Versace y Valentino, apodado uno de los dos pilares del baile de Stray Kids junto a Lee Know.",
          id: "Seorang pelukis dan penari terlatih balet. Duta global untuk Versace dan Valentino, dijuluki salah satu dari dua pilar tari Stray Kids bersama Lee Know.",
          fr: "Peintre et danseur formé au ballet. Ambassadeur mondial de Versace et Valentino, il est considéré comme l'un des deux piliers de la danse de Stray Kids aux côtés de Lee Know.",
          hi: "एक चित्रकार और बैले-प्रशिक्षित नर्तक। वर्साचे और वैलेंटिनो के लिए ग्लोबल ब्रांड एंबेसडर, जिन्हें ली नो के साथ स्ट्रे किड्स के दो नृत्य स्तंभों में से एक कहा जाता है।",
          pt: "Pintor e dançarino com formação em balé. Embaixador global da Versace e Valentino, apelidado de um dos dois pilares da dança do Stray Kids ao lado de Lee Know.",
          ar: "رسام وراقص تدرب على الباليه. سفير عالمي لعلامتي فيرساتشي وفالنتينو، ويُلقب بأحد عمودي الرقص في ستراي كيدز إلى جانب لي نو.",
          th: "จิตรกรและนักเต้นที่ผ่านการฝึกบัลเลต์มาอย่างยาวนาน ทำหน้าที่เป็น Global Ambassador ของ Versace และ Valentino ได้รับการยกย่องให้เป็นหนึ่งในสองเสาหลักด้านการเต้นของวงร่วมกับ Lee Know",
          vi: "Một họa sĩ và vũ công xuất thân từ ballet. Anh là đại sứ toàn cầu của Versace và Valentino, được mệnh danh là một trong hai 'đỉnh cao vũ đạo' của Stray Kids cùng với Lee Know.",
          ru: "Художник и танцор с балетным прошлым. Глобальный амбассадор Versace и Valentino, которого вместе с Ли Но называют одним из двух столпов танца Stray Kids."
        },
        tmi: {
          ko: [
            "화가이자 댄서로, 자신의 미술 작품을 팬미팅 굿즈나 앨범 아트워크에 직접 활용한다.",
            "발레를 오랫동안 배운 덕에 리노와 함께 '스트레이 키즈 춤 양대 산맥'으로 꼽힌다.",
            "Versace, Valentino 등 럭셔리 브랜드의 글로벌 앰배서더로 패션 피플들에게도 인지도가 높다.",
            "학창 시절 공부를 잘해 서울 외고 진학을 고려했으나 결국 연예계를 선택했다.",
            "혼자 놀기를 좋아하는 '집순이 성향'으로, 쉬는 날에는 그림 그리기와 영화 감상으로 하루를 보낸다."
          ],
          en: [
            "A painter as well as a dancer — he incorporates his own artworks into fan merchandise and album artwork.",
            "Has trained in ballet for years, making him (along with Lee Know) one of Stray Kids' two dance pillars.",
            "Global ambassador for Versace and Valentino, earning recognition in the high-fashion world.",
            "Was academically strong enough to consider entering a prestigious foreign language high school before choosing entertainment.",
            "A self-proclaimed homebody who spends days off painting and watching movies."
          ],
          ja: [
            "画家兼ダンサーとして、自身の美術作品をファンミーティングのグッズやアルバムのアートワークに直接活用しています。",
            "バレエを長く学んだおかげで、リノと共に「Stray Kidsダンスの両大山脈」として挙げられます。",
            "Versace、Valentinoなどラグジュアリーブランドのグローバルアンバサダーとして、ファッション界でも認知度が高いです。",
            "学生時代は成績が優秀で、外国語高校への進学を検討していましたが、最終的に芸能界を選びました。",
            "一人で過ごすのが好きな「インドア派」で、休日は絵を描いたり映画を観たりして過ごします。"
          ],
          zh: [
            "既是画家也是舞者，会亲自将自己的美术作品应用到粉丝见面会周边或专辑封面中。",
            "由于长期学习芭蕾舞，与 Lee Know 一起被列为“Stray Kids 舞蹈两大山脉”。",
            "作为 Versace、Valentino 等奢侈品牌的全球大使，在时尚圈也拥有很高的知名度。",
            "学生时期成绩优异，曾考虑报考外国语高中，但最终选择了演艺圈。",
            "是个喜欢独处的“宅男”，休息日通常通过画画和看电影度过。"
          ],
          es: [
            "Pintor y bailarín; incorpora sus propias obras de arte en productos para fans y arte de álbumes.",
            "Ha entrenado en ballet durante años, lo que lo convierte (junto con Lee Know) en uno de los dos pilares del baile de Stray Kids.",
            "Embajador global de Versace y Valentino, ganando reconocimiento en el mundo de la alta moda.",
            "Era lo suficientemente fuerte académicamente como para considerar ingresar a una prestigiosa escuela secundaria de idiomas antes de elegir el entretenimiento.",
            "Se define como una persona hogareña que pasa sus días libres pintando y viendo películas."
          ],
          id: [
            "Seorang pelukis sekaligus penari — ia menyertakan karya seninya sendiri ke dalam merchandise penggemar dan desain album.",
            "Telah berlatih balet selama bertahun-tahun, menjadikannya (bersama Lee Know) salah satu dari dua pilar tari Stray Kids.",
            "Duta global untuk Versace dan Valentino, mendapatkan pengakuan di dunia mode kelas atas.",
            "Cukup kuat secara akademis untuk mempertimbangkan masuk ke sekolah menengah bahasa asing bergengsi sebelum memilih dunia hiburan.",
            "Seorang yang senang di rumah (homebody), menghabiskan hari libur dengan melukis dan menonton film."
          ],
          fr: [
            "Peintre autant que danseur — il intègre ses propres œuvres d'art dans le merchandising pour les fans et les pochettes d'albums.",
            "A pratiqué le ballet pendant des années, faisant de lui (avec Lee Know) l'un des deux piliers de la danse de Stray Kids.",
            "Ambassadeur mondial de Versace et Valentino, gagnant la reconnaissance du monde de la haute couture.",
            "Était assez fort scolairement pour envisager d'entrer dans un lycée de langues prestigieux avant de choisir le divertissement.",
            "Se définit comme un casanier qui passe ses jours de repos à peindre et à regarder des films."
          ],
          hi: [
            "एक चित्रकार होने के साथ-साथ एक नर्तक भी - वे अपनी कलाकृतियों को प्रशंसक मर्चेंडाइज और एल्बम आर्टवर्क में शामिल करते हैं।",
            "वर्षों तक बैले में प्रशिक्षण लिया है, जिससे वे (ली नो के साथ) स्ट्रे किड्स के दो नृत्य स्तंभों में से एक बन गए हैं।",
            "वर्साचे और वैलेंटिनो के लिए ग्लोबल ब्रांड एंबेसडर, हाई-फ़ैशन की दुनिया में पहचान बनाई।",
            "शैक्षिक रूप से इतने मजबूत थे कि मनोरंजन को चुनने से पहले एक प्रतिष्ठित विदेशी भाषा हाई स्कूल में प्रवेश करने पर विचार कर सकते थे।",
            "एक स्व-घोषित 'होमबॉडी' जो पेंटिंग और फिल्में देखने में दिन बिताता है।"
          ],
          pt: [
            "Pintor e dançarino; incorpora suas próprias obras de arte em produtos para fãs e artes de álbuns.",
            "Treinou balé por anos, o que o torna (junto com Lee Know) um dos dois pilares da dança do Stray Kids.",
            "Embaixador global da Versace e Valentino, ganhando reconhecimento no mundo da alta moda.",
            "Era academicamente forte o suficiente para considerar entrar em uma prestigiada escola secundária de línguas antes de escolher o entretenimento.",
            "Define-se como uma pessoa caseira que passa seus dias de folga pintando e assistindo a filmes."
          ],
          ar: [
            "رسام وراقص في آن واحد — يدمج أعماله الفنية الخاصة في منتجات المعجبين وتصاميم الألبومات.",
            "تدرب على الباليه لسنوات، مما جعله (إلى جانب لي نو) أحد عمودي الرقص في ستراي كيدز.",
            "سفير عالمي لعلامتي فيرساتشي وفالنتينو، وحصل على اعتراف واسع في عالم الموضة الراقية.",
            "كان متفوقاً دراسياً لدرجة أنه فكر في دخول مدرسة ثانوية لغات مرموقة قبل اختيار عالم الفن.",
            "يصف نفسه بأنه شخص يحب البقاء في المنزل، ويقضي أيام إجازته في الرسم ومشاهدة الأفلام."
          ],
          th: [
            "เป็นทั้งจิตรกรและนักเต้น เขาใช้ผลงานศิลปะของตัวเองในการออกแบบกู๊ดส์แฟนมีตติ้งและอาร์ตเวิร์กอัลบั้ม",
            "ด้วยการฝึกฝนบัลเลต์มาเป็นเวลานาน ทำให้เขาได้รับการยกย่องให้เป็น 'เสาหลักด้านการเต้นของ Stray Kids' ร่วมกับ Lee Know",
            "เป็น Global Ambassador ของแบรนด์หรูอย่าง Versace และ Valentino ซึ่งเป็นที่รู้จักอย่างกว้างขวางในวงการแฟชั่น",
            "ในช่วงวัยเรียนเขามีผลงานการเรียนที่ดีจนเคยคิดจะสอบเข้าโรงเรียนมัธยมภาษาต่างประเทศชื่อดังก่อนจะเลือกเข้าสู่วงการบันเทิง",
            "เป็นคนติดบ้าน (homebody) ในวันหยุดเขามักจะใช้เวลาไปกับการวาดรูปและดูภาพยนตร์"
          ],
          vi: [
            "Vừa là họa sĩ vừa là vũ công, anh trực tiếp đưa các tác phẩm mỹ thuật của mình vào các món đồ lưu niệm fanmeeting hay artwork album.",
            "Nhờ học ballet trong thời gian dài, anh cùng với Lee Know được coi là 'hai đỉnh cao vũ đạo của Stray Kids'.",
            "Là đại sứ toàn cầu của các thương hiệu xa xỉ như Versace, Valentino, có độ nhận diện cao đối với giới thời trang.",
            "Thời đi học anh học rất giỏi và từng cân nhắc thi vào trường chuyên ngoại ngữ, nhưng cuối cùng đã chọn giới giải trí.",
            "Là người có xu hướng thích ở nhà, vào những ngày nghỉ anh thường dành cả ngày để vẽ tranh và xem phim."
          ],
          ru: [
            "Художник и танцор; он использует свои собственные художественные работы в товарах для фанатов и оформлении альбомов.",
            "Много лет занимался балетом, что сделало его (наряду с Ли Но) одним из двух столпов танца Stray Kids.",
            "Глобальный амбассадор Versace и Valentino, получивший признание в мире высокой моды.",
            "Был достаточно силен в учебе, чтобы рассматривать возможность поступления в престижную школу с углубленным изучением иностранных языков.",
            "Самопровозглашенный домосед, который проводит выходные за рисованием и просмотром фильмов."
          ]
        },
        socials: {}
      },
      {
        id: "han",
        name: { ko: "한", en: "Han", ja: "ハン", zh: "韩知城", es: "Han", id: "Han", fr: "Han", hi: "हान", pt: "Han", ar: "هان", th: "ฮัน", vi: "Han", ru: "Хан" },
        role: { ko: "래퍼, 보컬, 프로듀서", en: "Rapper, Vocal, Producer", ja: "ラッパー、ボーカル、プロデューサー", zh: "说唱、声乐、制作人", es: "Rapero, Vocalista, Productor", id: "Rapper, Vokal, Produser", fr: "Rappeur, Vocal, Producteur", hi: "रैपर, वोकल, प्रोड्यूसर", pt: "Rapper, Vocal, Produtor", ar: "رابر، مغني، منتج", th: "แร็ปเปอร์, ร้อง, โปรดิวเซอร์", vi: "Rapper, Hát, Nhà sản xuất", ru: "Рэпер, вокалист, продюсер" },
        birth: "2000.09.14",
        bloodType: "B",
        mbti: "ISTP",
        height: "168cm",
        zodiac: { ko: "처녀자리", en: "Virgo", ja: "おとめ座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "ราศีกันย์", vi: "Xử Nữ", ru: "Дева" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Han+Jisung+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "말레이시아 출신의 3RACHA 감성 래퍼·프로듀서. 스트레이 키즈 최다 작사 멤버로, 새벽 감성의 시적인 가사로 팬들의 깊은 공감을 얻는다.",
          en: "Malaysian-raised 3RACHA rapper and producer. The most prolific lyricist in Stray Kids, known for poetic, late-night-inspired lyrics that deeply resonate with fans.",
          ja: "マレーシア出身の3RACHA感性ラッパー兼プロデューサー。Stray Kidsで最も多くの作詞を手がけるメンバーで、深夜の感性がこもった詩的な歌詞でファンの深い共感を得ています。",
          zh: "来自马来西亚的 3RACHA 感性说唱歌手和制作人。是 Stray Kids 中作词最多的成员，以充满深夜感性的诗意歌词引发了粉丝的深切共鸣。",
          es: "Rapero y productor de 3RACHA, criado en Malasia. El letrista más prolífico de Stray Kids, conocido por sus letras poéticas inspiradas en la madrugada que resuenan profundamente con los fans.",
          id: "Rapper dan produser 3RACHA yang dibesarkan di Malaysia. Penulis lirik paling produktif di Stray Kids, dikenal karena lirik puitis yang terinspirasi suasana malam yang sangat menyentuh penggemar.",
          fr: "Rappeur et producteur de 3RACHA ayant grandi en Malaisie. Le parolier le plus prolifique de Stray Kids, connu pour ses paroles poétiques qui résonnent profondément auprès des fans.",
          hi: "मलेशिया में पले-बढ़े 3RACHA रैपर और प्रोड्यूसर। स्ट्रे किड्स में सबसे विपुल गीतकार, जो अपने काव्यात्मक और गहराई से गूंजने वाले गीतों के लिए जाने जाते हैं।",
          pt: "Rapper e produtor do 3RACHA criado na Malásia. O letrista mais prolífico do Stray Kids, conhecido por letras poéticas inspiradas na madrugada que ressoam profundamente com os fãs.",
          ar: "رابر ومنتج في 3RACHA نشأ في ماليزيا. العضو الأكثر كتابة للكلمات في ستراي كيدز، ويُعرف بكلماته الشاعرية التي تلامس مشاعر المعجبين بعمق.",
          th: "แร็ปเปอร์และโปรดิวเซอร์อารมณ์ศิลป์จาก 3RACHA ที่เติบโตในมาเลเซีย เขาเป็นสมาชิกที่แต่งเนื้อเพลงมากที่สุดในวง เป็นที่รู้จักจากเนื้อเพลงที่เต็มไปด้วยอารมณ์ในยามค่ำคืนที่เข้าถึงใจแฟนๆ",
          vi: "Rapper và nhà sản xuất đầy cảm xúc của 3RACHA đến từ Malaysia. Là thành viên viết lời nhiều nhất Stray Kids, anh nhận được sự đồng cảm sâu sắc từ người hâm mộ qua những ca từ đầy chất thơ.",
          ru: "Рэпер и продюсер 3RACHA, выросший в Малайзии. Самый плодовитый автор текстов в Stray Kids, известный поэтичными текстами, которые находят глубокий отклик у фанатов."
        },
        tmi: {
          ko: [
            "말레이시아에서 어린 시절을 보냈으며, 한국어·영어·중국어를 구사하는 멀티링구얼이다.",
            "스트레이 키즈 곡 중 가장 많은 수의 가사를 직접 작성한 멤버로, 감성적인 가사로 유명하다.",
            "INFP 성격으로 팬들과 가장 공감대가 높다고 평가받으며 '곡 하나에 한 편의 시'라는 평을 받는다.",
            "음악을 만들 때 새벽 감성으로 작업하는 '새벽 인간'으로, 늦은 밤에 영감을 얻는다고 한다.",
            "아이돌 데뷔 꿈을 품고 부모님에게 한국행을 설득한 진취적인 면이 있다."
          ],
          en: [
            "Grew up in Malaysia and speaks Korean, English, and Chinese — a true multilingual.",
            "Has written the most song lyrics within Stray Kids, known for emotionally resonant and poetic words.",
            "As an INFP, fans say he captures emotions better than anyone — 'each lyric feels like a poem'.",
            "Self-described 'night person' who finds inspiration in the late hours and writes in a 2AM mindset.",
            "Convinced his parents to let him move to Korea to pursue his idol dream — showing rare determination at a young age."
          ],
          ja: [
            "マレーシアで幼少期を過ごし、韓国語、英語、中国語を話すマルチリンガルです。",
            "Stray Kidsの楽曲の中で最も多くの歌詞を直接作成したメンバーで、感性豊かな歌詞で有名です。",
            "INFPの性格でファンとの共感度が非常に高いと評価されており、「一曲が一編の詩」と評されます。",
            "音楽を作る際、深夜の感性で作業する「夜型人間」で、遅い時間にインスピレーションを得るそうです。",
            "アイドルデビューの夢を抱き、両親を説得して韓国へ渡った進取的な一面があります。"
          ],
          zh: [
            "在马来西亚度过了童年，是通晓韩语、英语和汉语的多语言达人。",
            "是 Stray Kids 歌曲中创作歌词数量最多的成员，以感性的歌词而闻名。",
            "作为 INFP 性格，被评价为与粉丝共鸣度最高，歌词被赞誉为“一曲一首诗”。",
            "是一个在深夜寻找创作灵感的“夜猫子”，习惯在凌晨时分进行创作。",
            "为了实现偶像梦想，说服父母来到韩国，展现了积极进取的一面。"
          ],
          es: [
            "Creció en Malasia y habla coreano, inglés y chino; un verdadero multilingüe.",
            "Es el miembro que ha escrito la mayor cantidad de letras de canciones en Stray Kids, famoso por sus palabras poéticas.",
            "Como INFP, los fans dicen que captura las emociones mejor que nadie; 'cada letra se siente como un poema'.",
            "Se describe como una 'persona nocturna' que encuentra inspiración en las últimas horas de la noche.",
            "Convenció a sus padres para que lo dejaran mudarse a Corea para seguir su sueño de ser ídolo, mostrando una gran determinación."
          ],
          id: [
            "Tumbuh besar di Malaysia dan menguasai bahasa Korea, Inggris, dan Mandarin — seorang multilingual sejati.",
            "Telah menulis lirik lagu paling banyak di Stray Kids, dikenal dengan kata-kata yang puitis dan menyentuh emosi.",
            "Sebagai INFP, penggemar mengatakan ia menangkap emosi dengan sangat baik — 'setiap lirik terasa seperti puisi'.",
            "Menyebut dirinya 'orang malam' yang menemukan inspirasi di larut malam dan menulis dengan suasana hati jam 2 pagi.",
            "Meyakinkan orang tuanya untuk mengizinkannya pindah ke Korea demi mengejar mimpi menjadi idola."
          ],
          fr: [
            "A grandi en Malaisie et parle coréen, anglais et chinois — un véritable polyglotte.",
            "A écrit le plus grand nombre de paroles de chansons au sein de Stray Kids, connu pour ses mots poétiques.",
            "En tant qu'INFP, les fans disent qu'il capture les émotions mieux que quiconque — 'chaque parole est comme un poème'.",
            "Se décrit comme une 'personne de la nuit' qui trouve l'inspiration tard le soir.",
            "A convaincu ses parents de le laisser partir en Corée pour poursuivre son rêve, faisant preuve d'une rare détermination."
          ],
          hi: [
            "मलेशिया में पले-बढ़े और कोरियाई, अंग्रेजी और चीनी बोलते हैं - एक सच्चे बहुभाषी।",
            "स्ट्रे किड्स के भीतर सबसे अधिक गाने के बोल लिखे हैं, जो भावनात्मक और काव्यात्मक शब्दों के लिए जाने जाते हैं।",
            "प्रशंसक कहते हैं कि वे भावनाओं को किसी भी अन्य से बेहतर समझते हैं - 'प्रत्येक गीत एक कविता की तरह लगता है'।",
            "स्व-वर्णित 'रात के व्यक्ति' जो देर रात के घंटों में प्रेरणा पाते हैं और 2 बजे की मानसिकता में लिखते हैं।",
            "अपने आइडल बनने के सपने को पूरा करने के लिए अपने माता-पिता को कोरिया जाने के लिए राजी किया।"
          ],
          pt: [
            "Cresceu na Malásia e fala coreano, inglês e chinês — um verdadeiro multilíngue.",
            "Escreveu a maior parte das letras das músicas do Stray Kids, sendo conhecido por suas palavras poéticas.",
            "Como INFP, os fãs dizem que ele captura emoções melhor do que ninguém — 'cada letra parece um poema'.",
            "Descreve-se como uma 'pessoa noturna' que encontra inspiração nas altas horas da madrugada.",
            "Convenceu seus pais a deixá-lo mudar para a Coreia para perseguir seu sonho de ídolo, mostrando grande determinação."
          ],
          ar: [
            "نشأ في ماليزيا ويتحدث الكورية والإنجليزية والصينية — وهو متعدد لغات حقيقي.",
            "كتب أكبر عدد من كلمات الأغاني في ستراي كيدز، ويشتهر بكلماته الشاعرية والمؤثرة عاطفياً.",
            "بصفته INFP، يقول المعجبون إنه يجسد المشاعر بشكل أفضل من أي شخص آخر — 'كل جملة تبدو كقصيدة'.",
            "يصف نفسه بأنه 'شخص ليلي' يجد الإلهام في ساعات الليل المتأخرة ويكتب بمزاج الفجر.",
            "أقنع والديه بالسماح له بالانتقال إلى كوريا لمتابعة حلمه، مما أظهر تصميماً نادراً في سن مبكرة."
          ],
          th: [
            "ใช้ชีวิตในวัยเด็กที่มาเลเซีย และสามารถพูดได้ทั้งภาษาเกาหลี อังกฤษ และจีน — เป็นคนที่มีความสามารถด้านภาษาอย่างแท้จริง",
            "เป็นสมาชิกที่เขียนเนื้อเพลงมากที่สุดในวง มีชื่อเสียงในเรื่องเนื้อเพลงที่มีอารมณ์สุนทรีย์",
            "ด้วยบุคลิกแบบ INFP แฟนๆ ต่างยกย่องว่าเขาเข้าถึงอารมณ์ได้ดีที่สุด 'ทุกเนื้อเพลงเหมือนบทกวี'",
            "เป็น 'คนกลางคืน' ที่มักจะทำงานเพลงในช่วงเช้ามืด และได้รับแรงบันดาลใจในเวลาดึกๆ",
            "มีความมุ่งมั่นมากโดยการโน้มน้าวพ่อแม่ให้ยอมให้เขามาเกาหลีเพื่อทำตามความฝันในการเป็นไอดอล"
          ],
          vi: [
            "Trải qua thời thơ ấu ở Malaysia và là một người đa ngôn ngữ khi sử dụng thành thạo tiếng Hàn, tiếng Anh và tiếng Trung.",
            "Là thành viên trực tiếp viết nhiều lời bài hát nhất cho Stray Kids, nổi tiếng với những ca từ đầy cảm xúc.",
            "Với tính cách INFP, anh được đánh giá là người có khả năng đồng cảm cao nhất với fan, mỗi bài hát như một bài thơ.",
            "Là một 'cú đêm' thường làm việc vào lúc rạng sáng, anh cho biết mình tìm thấy cảm hứng vào đêm muộn.",
            "Có tinh thần cầu tiến khi thuyết phục bố mẹ cho sang Hàn Quốc để theo đuổi ước mơ làm thần tượng."
          ],
          ru: [
            "Вырос в Малайзии и говорит на корейском, английском и китайском языках — настоящий полиглот.",
            "Написал больше всего текстов песен в Stray Kids, известен своими эмоциональными и поэтичными словами.",
            "Поклонники говорят, что он передает эмоции лучше всех — «каждая строчка кажется стихотворением».",
            "Называет себя «ночным человеком», который находит вдохновение в поздние часы.",
            "Убедил родителей разрешить ему переехать в Корею, чтобы осуществить свою мечту стать айдолом."
          ]
        },
        socials: {}
      },
      {
        id: "felix",
        name: { ko: "필릭스", en: "Felix", ja: "フィリックス", zh: "李龙馥", es: "Felix", id: "Felix", fr: "Felix", hi: "फेलिक्स", pt: "Felix", ar: "فيليكس", th: "ฟีลิกซ์", vi: "Felix", ru: "Феликс" },
        role: { ko: "댄서, 래퍼, 보컬", en: "Dancer, Rapper, Vocal", ja: "ダンサー、ラッパー、ボーカル", zh: "舞者、说唱、声乐", es: "Bailarín, Rapero, Vocalista", id: "Penari, Rapper, Vokal", fr: "Danseur, Rappeur, Vocal", hi: "डांसर, रैपर, वोकल", pt: "Dançarino, Rapper, Vocal", ar: "راقص، رابر، مغني", th: "นักเต้น, แแร็ปเปอร์, ร้อง", vi: "Nhảy, Rapper, Hát", ru: "Танцор, рэпер, вокалист" },
        birth: "2000.09.15",
        bloodType: "AB",
        mbti: "ENFJ",
        height: "171cm",
        zodiac: { ko: "처녀자리", en: "Virgo", ja: "おとめ座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "ราศีกันย์", vi: "Xử Nữ", ru: "Дева" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Felix+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "호주 출신의 Dior 글로벌 앰배서더. 주근깨 트레이드마크와 '목소리 깡패'로 불리는 저음 보이스, 한국어를 처음 배우며 흘린 눈물이 팬들의 마음을 사로잡았다.",
          en: "Australian-born Dior global ambassador. His trademark freckles, unexpectedly deep 'voice gangster' voice, and tears learning Korean from scratch have captured fans' hearts.",
          ja: "オーストラリア出身のDiorグローバルアンバサダー。そばかすがトレードマークで、「声の暴力」と呼ばれるほどの低音ボイス、そして韓国語を学び始めた頃の涙がファンの心を掴みました。",
          zh: "来自澳大利亚的 Dior 全球大使。标志性的雀斑和被称为“音色流氓”的低音炮嗓音，以及刚开始学习韩语时流下的泪水，都深深打动了粉丝的心。",
          es: "Embajador global de Dior nacido en Australia. Sus pecas características, su voz inesperadamente profunda y sus lágrimas al aprender coreano desde cero han capturado los corazones de los fans.",
          id: "Duta global Dior kelahiran Australia. Bintik-bintik wajah khasnya, suara rendah yang sangat dalam, dan perjuangannya belajar bahasa Korea dari nol telah memikat hati penggemar.",
          fr: "Ambassadeur mondial de Dior né en Australie. Ses taches de rousseur emblématiques, sa voix grave exceptionnelle et ses larmes en apprenant le coréen ont conquis le cœur des fans.",
          hi: "ऑस्ट्रेलियाई मूल के डायर के ग्लोबल ब्रांड एंबेसडर। उनके चेहरे की झाइयां, अप्रत्याशित रूप से गहरी आवाज़, और खरोंच से कोरियाई सीखने में उनके संघर्ष ने प्रशंसकों का दिल जीत लिया है।",
          pt: "Embaixador global da Dior nascido na Austrália. Suas sardas características, sua voz inesperadamente profunda e suas lágrimas ao aprender coreano do zero capturaram os corações dos fãs.",
          ar: "سفير عالمي لعلامة ديور من أصل أسترالي. تميزه النمش وصوته العميق جداً، كما أن قصته في تعلم الكورية من الصفر لامست قلوب المعجبين.",
          th: "Global Ambassador ของ Dior ชาวออสเตรเลีย มีเอกลักษณ์คือกระบนใบหน้าและเสียงต่ำที่เป็น 'Voice Gangster' รวมถึงความพยายามในการเรียนภาษาเกาหลีที่ทำให้แฟนๆ ประทับใจ",
          vi: "Đại sứ toàn cầu của Dior đến từ Úc. Đặc trưng với những vết tàn nhang và giọng trầm 'Voice Gangster', cùng những giọt nước mắt khi mới học tiếng Hàn đã chiếm trọn trái tim người hâm mộ.",
          ru: "Глобальный амбассадор Dior родом из Австралии. Его фирменные веснушки, неожиданно глубокий голос и слезы при изучении корейского языка с нуля покорили сердца фанатов."
        },
        tmi: {
          ko: [
            "호주 시드니 출신으로, 방찬과 같은 고향이다. 데뷔 전 한국어를 전혀 몰랐다고 한다.",
            "특유의 저음 보이스로 국내외 팬들에게 '목소리 깡패'라는 별명으로 불린다.",
            "주근깨가 트레이드마크로, 주근깨를 사랑하는 팬 커뮤니티가 형성될 정도로 인기가 많다.",
            "Dior 글로벌 앰배서더로 활동하며 파리 패션위크에도 정기적으로 참석한다.",
            "한국에 온 지 얼마 안 됐을 때 한국어 실력이 부족해 우는 날도 많았다고 솔직하게 고백한 적이 있다."
          ],
          en: [
            "Born in Sydney, Australia — shares his hometown with Bang Chan. Spoke zero Korean before coming to Korea.",
            "His unexpectedly deep voice has earned him the nickname 'voice gangster' from fans worldwide.",
            "His freckles are a beloved trademark — fan communities dedicated to his freckles exist online.",
            "Global ambassador for Dior, attending Paris Fashion Week regularly as a front-row celebrity.",
            "Openly shared that he cried many nights early on due to the language barrier — endearing himself to fans with his honesty."
          ],
          ja: [
            "オーストラリアのシドニー出身で、バンチャンと同じ故郷です。デビュー前は韓国語を全く知らなかったそうです。",
            "独特の低音ボイスで、国内外のファンから「声の暴力」というあだ名で呼ばれています。",
            "そばかすがトレードマークで、そばかすを愛するファンコミュニティができるほど人気があります。",
            "Diorのグローバルアンバサダーとして活動し、パリ・ファッションウィークにも定期的に出席しています。",
            "韓国に来て間もない頃、韓国語が不自由で泣く日も多かったと正直に告白したことがあります。"
          ],
          zh: [
            "出生于澳大利亚悉尼，与方灿是同乡。据传在出道前完全不会韩语。",
            "凭借独特的低音炮嗓音，被国内外粉丝称为“音色流氓”。",
            "雀斑是他的标志，人气高到甚至形成了专门喜爱他雀斑的粉丝社区。",
            "作为 Dior 全球大使，定期出席巴黎时装周。",
            "曾坦诚告白过，刚来韩国不久时因为韩语不好，有很多天都在哭泣。"
          ],
          es: [
            "Nacido en Sídney, Australia; comparte ciudad natal con Bang Chan. No hablaba nada de coreano antes de mudarse a Corea.",
            "Su voz inesperadamente profunda le ha valido el apodo de 'voice gangster' entre los fans de todo el mundo.",
            "Sus pecas son una marca registrada querida; existen comunidades de fans en línea dedicadas a ellas.",
            "Embajador global de Dior, asiste regularmente a la Semana de la Moda de París como celebridad de primera fila.",
            "Confesó que lloró muchas noches al principio debido a la barrera del idioma, lo que lo hizo muy cercano a los fans."
          ],
          id: [
            "Lahir di Sydney, Australia — berbagi kampung halaman dengan Bang Chan. Tidak bisa bahasa Korea sama sekali sebelum pindah ke Korea.",
            "Suaranya yang sangat rendah membuatnya dijuluki 'voice gangster' oleh penggemar di seluruh dunia.",
            "Bintik-bintik wajahnya adalah ciri khas yang dicintai — terdapat komunitas penggemar online yang didedikasikan untuk itu.",
            "Duta global Dior, rutin menghadiri Paris Fashion Week sebagai selebriti baris depan.",
            "Secara terbuka bercerita bahwa ia sering menangis di awal karena hambatan bahasa — kejujurannya membuatnya dicintai penggemar."
          ],
          fr: [
            "Né à Sydney, en Australie — partage sa ville natale avec Bang Chan. Ne parlait pas un mot de coréen avant d'arriver en Corée.",
            "Sa voix grave inattendue lui a valu le surnom de 'voice gangster' de la part des fans du monde entier.",
            "Ses taches de rousseur sont une marque de fabrique — des communautés de fans en ligne leur sont dédiées.",
            "Ambassadeur mondial de Dior, assistant régulièrement à la Fashion Week de Paris au premier rang.",
            "A partagé avec honnêteté qu'il a pleuré de nombreuses nuits au début à cause de la barrière de la langue."
          ],
          hi: [
            "सिडनी, ऑस्ट्रेलिया में जन्मे - बैंग चान के साथ अपना गृहनगर साझा करते हैं। कोरिया आने से पहले बिल्कुल भी कोरियाई नहीं जानते थे।",
            "उनकी अप्रत्याशित रूप से गहरी आवाज़ ने उन्हें दुनिया भर के प्रशंसकों से 'Voice Gangster' उपनाम दिलाया है।",
            "उनके चेहरे की झाइयां एक प्रिय ट्रेडमार्क हैं - ऑनलाइन उनके लिए समर्पित प्रशंसक समुदाय मौजूद हैं।",
            "डायर के लिए ग्लोबल ब्रांड एंबेसडर, नियमित रूप से पेरिस फैशन वीक में भाग लेते हैं।",
            "खुलकर साझा किया कि भाषा की बाधा के कारण वे शुरुआती दिनों में कई रातें रोए थे - उनकी ईमानदारी प्रशंसकों को बहुत पसंद आई।"
          ],
          pt: [
            "Nascido em Sydney, Austrália — compartilha sua cidade natal com Bang Chan. Não falava nada de coreano antes de vir para a Coreia.",
            "Sua voz inesperadamente profunda rendeu-lhe o apelido de 'voice gangster' entre os fãs de todo o mundo.",
            "Suas sardas são uma marca registrada amada — existem comunidades de fãs online dedicadas a elas.",
            "Embaixador global da Dior, comparecendo regularmente à Paris Fashion Week como celebridade da primeira fila.",
            "Compartilhou abertamente que chorou muitas noites no início devido à barreira do idioma, conquistando os fãs com sua honestidade."
          ],
          ar: [
            "ولد في سيدني، أستراليا — يتشارك نفس مسقط الرأس مع بانغ تشان. لم يكن يعرف الكورية أبداً قبل مجيئه إليها.",
            "صوته العميق بشكل غير متوقع منحه لقب 'سفاح الصوت' من قبل المعجبين حول العالم.",
            "النمش على وجهه علامة مميزة محبوبة — وهناك مجتمعات معجبين مخصصة لحب هذا النمش.",
            "سفير عالمي لديور، ويحضر بانتظام أسبوع الموضة في باريس كأحد أبرز المشاهير.",
            "اعترف بصدق أنه بكى في ليالٍ كثيرة في البداية بسبب عائق اللغة — مما جعله قريباً جداً من قلوب المعجبين.",
          ],
          th: [
            "เกิดที่ซิดนีย์ ประเทศออสเตรเลีย — มีบ้านเกิดเดียวกับ Bang Chan และไม่รู้ภาษาเกาหลีเลยก่อนจะย้ายมาเกาหลี",
            "มีเสียงต่ำที่เป็นเอกลักษณ์จนแฟนๆ ทั่วโลกตั้งฉายาให้ว่า 'Voice Gangster'",
            "มีกระที่เป็นเครื่องหมายการค้า และเป็นที่รักของแฟนๆ จนมีชุมชนออนไลน์ที่ตั้งขึ้นเพื่อกระของเขาโดยเฉพาะ",
            "ทำหน้าที่เป็น Global Ambassador ของ Dior และเข้าร่วมงาน Paris Fashion Week เป็นประจำ",
            "เคยเปิดใจว่าในช่วงแรกที่มาเกาหลีเขาร้องไห้หลายคืนเพราะอุปสรรคทางภาษา ซึ่งความจริงใจนี้ทำให้แฟนๆ รักเขามากขึ้น"
          ],
          vi: [
            "Sinh ra tại Sydney, Úc — có cùng quê hương với Bang Chan. Anh không hề biết tiếng Hàn trước khi đến Hàn Quốc.",
            "Giọng trầm đặc trưng đã giúp anh có biệt danh 'Voice Gangster' từ người hâm mộ trên toàn thế giới.",
            "Những vết tàn nhang là đặc điểm nhận dạng đáng yêu — thậm chí có cả những cộng đồng fan online dành riêng cho đặc điểm này.",
            "Hoạt động với tư cách đại sứ toàn cầu của Dior, thường xuyên tham dự Paris Fashion Week.",
            "Từng thành thật thú nhận rằng những ngày đầu đến Hàn Quốc anh đã khóc rất nhiều vì rào cản ngôn ngữ."
          ],
          ru: [
            "Родился в Сиднее, Австралия — земляк Бан Чана. До приезда в Корею совершенно не знал корейского языка.",
            "Его неожиданно глубокий голос принес ему прозвище «голосовой гангстер» от фанатов со всего мира.",
            "Его веснушки — любимая фанатами черта, в сети существуют целые сообщества, посвященные им.",
            "Глобальный амбассадор Dior, регулярно посещает Неделю моды в Париже как почетный гость.",
            "Искренне делился тем, что в начале часто плакал по ночам из-за языкового барьера, чем покорил фанатов."
          ]
        },
        socials: {}
      },
      {
        id: "seungmin",
        name: { ko: "승민", en: "Seungmin", ja: "スンミン", zh: "金昇玟", es: "Seungmin", id: "Seungmin", fr: "Seungmin", hi: "सेुंगमिन", pt: "Seungmin", ar: "سونغمين", th: "ซึงมิน", vi: "Seungmin", ru: "Сынмин" },
        role: { ko: "보컬", en: "Vocal", ja: "ボーカル", zh: "声乐", es: "Vocalista", id: "Vokal", fr: "Vocal", hi: "वोकल", pt: "Vocal", ar: "مغني", th: "ร้อง", vi: "Hát", ru: "Вокалист" },
        birth: "2000.09.22",
        bloodType: "A",
        mbti: "ISFJ",
        height: "176cm",
        zodiac: { ko: "처녀자리", en: "Virgo", ja: "おとめ座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "ราศีกันย์", vi: "Xử Nữ", ru: "Дева" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Seungmin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "야구를 사랑하는 스트레이 키즈 최강 보컬. 초승달처럼 휘는 눈 웃음으로 유명하며 BTS 정국과 절친한 사이로도 알려져 있다.",
          en: "Baseball-loving main vocalist of Stray Kids. Famous for his crescent-moon eye smile and close friendship with BTS's Jungkook.",
          ja: "野球を愛するStray Kidsの最強ボーカル。三日月のように細くなる笑顔で有名で、BTSのジョングクと親しい仲であることでも知られています。",
          zh: "热爱棒球的 Stray Kids 最强主唱。以像新月一样弯弯的笑眼而闻名，据传与 BTS 的柾国关系非常要好。",
          es: "Vocalista principal de Stray Kids y amante del béisbol. Famoso por su sonrisa de ojos en forma de media luna y su estrecha amistad con Jungkook de BTS.",
          id: "Vokalis utama Stray Kids yang mencintai bisbol. Terkenal dengan senyum matanya yang berbentuk bulan sabit dan persahabatan dekatnya dengan Jungkook BTS.",
          fr: "Vocaliste principal de Stray Kids, passionné de baseball. Célèbre pour son sourire en croissant de lune et sa proche amitié avec Jungkook de BTS.",
          hi: "स्ट्रे किड्स के बेसबॉल-प्रेमी मुख्य गायक। अपनी अर्धचंद्राकार आंखों की मुस्कान और BTS के जुंगकुक के साथ गहरी दोस्ती के लिए प्रसिद्ध।",
          pt: "Vocalista principal do Stray Kids apaixonado por beisebol. Famoso por seu sorriso de olhos em forma de lua crescente e sua amizade próxima com Jungkook do BTS.",
          ar: "المغني الرئيسي في ستراي كيدز والمحب لكرة القاعدة (البيسبول). يشتهر بابتسامة عينيه التي تشبه الهلال، ويُعرف بصداقته الوثيقة مع جونغكوك من BTS.",
          th: "นักร้องเสียงหลักของ Stray Kids ที่รักกีฬาเบสบอลเป็นชีวิตจิตใจ มีชื่อเสียงจากรอยยิ้มตาหยิบรูปพระจันทร์เสี้ยว และเป็นที่รู้กันดีว่าเขาสนิทกับ Jungkook วง BTS",
          vi: "Giọng ca nội lực của Stray Kids với niềm đam mê bóng chày. Anh nổi tiếng với nụ cười mắt híp hình trăng khuyết và được biết đến là bạn thân của Jungkook (BTS).",
          ru: "Любящий бейсбол главный вокалист Stray Kids. Известен своей улыбкой «глаза-полумесяцы» и близкой дружбой с Чонгуком из BTS."
        },
        tmi: {
          ko: [
            "야구를 너무 좋아해 프로야구 선수를 꿈꿨던 과거가 있으며, 지금도 경기를 직접 관람하러 다닌다.",
            "스트레이 키즈 내에서 가장 뛰어난 보컬로 꼽히며, 고음 처리 능력이 탁월하다.",
            "팬들 사이에서 '눈 웃음' 장인으로 유명하며, 웃을 때 눈이 초승달처럼 휘는 것으로 유명하다.",
            "동갑내기 정국(BTS)과 절친으로 알려져 있어 두 그룹 팬들 사이에서 화제가 되곤 한다.",
            "방찬·창빈·한처럼 프로듀싱보다 보컬에 집중하는 순수 퍼포머 포지션을 담당한다."
          ],
          en: [
            "Was so passionate about baseball he dreamed of becoming a professional player — still watches games in person as a fan.",
            "Considered the strongest pure vocalist in Stray Kids, known for his outstanding high note control.",
            "Famous for his 'eye smile' — eyes curving into crescents when he laughs, making fans swoon.",
            "Close friends with Jungkook (BTS) — a friendship that draws frequent attention from fans of both groups.",
            "Unlike 3RACHA members, Seungmin focuses purely on vocal performance rather than production."
          ],
          ja: [
            "野球が大好きでプロ野球選手を夢見ていた過去があり、今も試合を直接観戦しに行きます。",
            "Stray Kids内で最も優れたボーカルとして挙げられ、高音の処理能力が卓越しています。",
            "ファンの間で「笑顔」の達人として有名で、笑うと目が三日月のように細くなるのが特徴です。",
            "同い年のジョングク（BTS）と親友として知られており、両グループのファンの間で話題になることが多いです。",
            "バンチャン、チャンビン、ハンのようにプロデュースよりも、ボーカルに集中する純粋なパフォーマーのポジションを担当しています。"
          ],
          zh: [
            "非常喜欢棒球，曾梦想成为职业棒球选手，至今仍会亲自去赛场观赛。",
            "被认为是 Stray Kids 中最出色的主唱，高音处理能力卓越。",
            "在粉丝中以“笑眼”达人著称，笑的时候眼睛弯得像新月一样。",
            "据传与同岁的柾国 (BTS) 是至亲，这在两团粉丝之间经常成为热门话题。",
            "与方灿、彰彬、韩不同，他主要担任专注于歌唱而非制作的纯表演者职位。"
          ],
          es: [
            "Era tan apasionado por el béisbol que soñaba con ser jugador profesional; todavía asiste a los partidos como fan.",
            "Considerado el vocalista más fuerte de Stray Kids, conocido por su excelente control de las notas altas.",
            "Famoso por su 'eye smile'; sus ojos se curvan como medias lunas cuando se ríe, encantando a los fans.",
            "Amigo cercano de Jungkook (BTS); una amistad que atrae frecuentemente la atención de los fans de ambos grupos.",
            "A diferencia de los miembros de 3RACHA, Seungmin se enfoca puramente en la interpretación vocal en lugar de la producción."
          ],
          id: [
            "Sangat menyukai bisbol hingga pernah bermimpi menjadi pemain profesional — masih sering menonton pertandingan secara langsung.",
            "Dianggap sebagai vokal murni terkuat di Stray Kids, dikenal dengan kontrol nada tingginya yang luar biasa.",
            "Terkenal dengan 'eye smile' — matanya melengkung seperti bulan sabit saat tertawa, membuat penggemar gemas.",
            "Berteman dekat dengan Jungkook (BTS) — persahabatan yang sering menarik perhatian penggemar kedua grup.",
            "Berbeda dengan anggota 3RACHA, Seungmin lebih fokus pada performa vokal murni daripada produksi musik."
          ],
          fr: [
            "Était si passionné de baseball qu'il rêvait de devenir pro — il continue d'aller voir des matchs en tant que fan.",
            "Considéré comme le vocaliste le plus puissant de Stray Kids, connu pour son contrôle des notes hautes.",
            "Célèbre pour son 'eye smile' — ses yeux se plissent en croissants de lune quand il rit.",
            "Ami proche de Jungkook (BTS) — une amitié qui attire souvent l'attention des fans des deux groupes.",
            "Contrairement aux membres de 3RACHA, Seungmin se concentre uniquement sur la performance vocale."
          ],
          hi: [
            "बेसबॉल के प्रति इतने जुनूनी थे कि उन्होंने एक पेशेवर खिलाड़ी बनने का सपना देखा था - अभी भी एक प्रशंसक के रूप में मैच देखते हैं।",
            "स्ट्रे किड्स में सबसे मजबूत विशुद्ध गायक माने जाते हैं, जो अपने उत्कृष्ट हाई नोट कंट्रोल के लिए जाने जाते हैं।",
            "अपनी 'आई स्माइल' के लिए प्रसिद्ध - हंसते समय आंखें अर्धचंद्राकार हो जाती हैं, जिससे प्रशंसक मंत्रमुग्ध हो जाते हैं।",
            "जुंगकुक (BTS) के साथ करीबी दोस्त - एक ऐसी दोस्ती जो दोनों समूहों के प्रशंसकों का ध्यान आकर्षित करती है।",
            "3RACHA सदस्यों के विपरीत, सेुंगमिन प्रोडक्शन के बजाय विशुद्ध रूप से गायन प्रदर्शन पर ध्यान केंद्रित करते हैं।"
          ],
          pt: [
            "Era tão apaixonado por beisebol que sonhava em ser jogador profissional — ainda assiste aos jogos como fã.",
            "Considerado o vocalista mais forte do Stray Kids, conhecido por seu excelente controle de notas altas.",
            "Famoso por seu 'eye smile' — seus olhos se curvam como luas crescentes quando ele ri.",
            "Amigo próximo de Jungkook (BTS) — uma amizade que atrai frequentemente a atenção dos fãs de ambos os grupos.",
            "Ao contrário dos membros do 3RACHA, Seungmin foca puramente na performance vocal em vez da produção."
          ],
          ar: [
            "كان شغوفاً جداً بكرة القاعدة لدرجة أنه حلم بأن يصبح لاعباً محترفاً — ولا يزال يحضر المباريات كمعجب.",
            "يُعتبر أقوى مغني في ستراي كيدز، ويشتهر بتحكمه الرائع في الطبقات العالية.",
            "مشهور بـ 'ابتسامة العين' — حيث تنحني عيناه كالهلال عندما يضحك، مما يسحر المعجبين.",
            "صديق مقرب لجونغكوك (BTS) — وهي صداقة تجذب اهتمام معجبي الفرقتين باستمرار.",
            "على عكس أعضاء 3RACHA، يركز سونغمين بشكل كامل على الأداء الصوتي بدلاً من الإنتاج."
          ],
          th: [
            "เคยคลั่งไคล้เบสบอลมากจนฝันอยากเป็นนักกีฬาอาชีพ — ปัจจุบันยังคงไปดูการแข่งขันที่สนามในฐานะแฟนคลับ",
            "ได้รับการยอมรับว่าเป็นนักร้องเสียงหลักที่แข็งแกร่งที่สุดในวง โดดเด่นเรื่องการคุมโน้ตสูง",
            "มีชื่อเสียงเรื่อง 'รอยยิ้มตาหยิบ' — เวลาหัวเราะดวงตาจะโค้งมนเหมือนพระจันทร์เสี้ยว",
            "เป็นเพื่อนสนิทกับ Jungkook วง BTS — ซึ่งเป็นมิตรภาพที่ได้รับความสนใจจากแฟนๆ ทั้งสองวงอยู่เสมอ",
            "ต่างจากสมาชิก 3RACHA ตรงที่ซึงมินจะโฟกัสไปที่การร้องเพลงเพียงอย่างเดียวมากกว่าการโปรดิวซ์"
          ],
          vi: [
            "Rất yêu bóng chày và từng mơ ước trở thành cầu thủ chuyên nghiệp — hiện tại anh vẫn trực tiếp đi xem các trận đấu.",
            "Được coi là giọng ca xuất sắc nhất Stray Kids, nổi tiếng với khả năng xử lý nốt cao tuyệt vời.",
            "Nổi tiếng với 'mắt cười' thương hiệu, khi cười mắt anh sẽ híp lại như hình trăng khuyết.",
            "Được biết đến là bạn thân của Jungkook (BTS), tình bạn này thường xuyên trở thành chủ đề bàn tán của fan hai nhóm.",
            "Khác với các thành viên 3RACHA, Seungmin đảm nhận vai trò trình diễn thuần túy, tập trung vào giọng hát hơn là sản xuất."
          ],
          ru: [
            "Был настолько увлечен бейсболом, что мечтал стать профессиональным игроком — до сих пор посещает матчи как болельщик.",
            "Считается сильнейшим чистым вокалистом в Stray Kids, известен своим выдающимся контролем высоких нот.",
            "Знаменит своей «улыбкой глазами» — при смехе его глаза изгибаются в форме полумесяцев.",
            "Близкий друг Чонгука из BTS — эта дружба часто привлекает внимание поклонников обеих групп.",
            "В отличие от участников 3RACHA, Сынмин полностью сосредоточен на вокальном исполнении, а не на продюсировании."
          ]
        },
        socials: {}
      },
      {
        id: "in",
        name: { ko: "아이엔", en: "I.N", ja: "アイエン", zh: "梁精寅", es: "I.N", id: "I.N", fr: "I.N", hi: "आई.एन", pt: "I.N", ar: "آي إن", th: "ไอเอ็น", vi: "I.N", ru: "Ай Эн" },
        role: { ko: "보컬, 막내", en: "Vocal, Maknae", ja: "ボーカル、末っ子", zh: "声乐、忙内", es: "Vocalista, Maknae", id: "Vokal, Maknae", fr: "Vocal, Maknae", hi: "वोकल, मकाने", pt: "Vocal, Maknae", ar: "مغني، الماكني (الأصغر)", th: "ร้อง, น้องเล็ก", vi: "Hát, Em út", ru: "Вокалист, макнэ" },
        birth: "2001.02.08",
        bloodType: "A",
        mbti: "INFJ",
        height: "173cm",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+IN+Yang+Jeongin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "서바이벌 탈락 후 최종 합류한 '반전 막내'. 만 16세 데뷔 후 변성기를 거쳐 깊고 매력적인 음색으로 변신했으며, '귀여운 노인'이라는 별명이 있다.",
          en: "The 'plot-twist maknae' who was eliminated then added back. Debuted at 16, and after his voice changed, surprised fans with a deep, charming tone — nicknamed 'cute old man'.",
          ja: "サバイバルで脱落後、最終合流した「反転の末っ子」。満16歳でデビュー後、声変わりを経て深く魅力的な音色に変身し、「可愛いおじいちゃん」というあだ名があります。",
          zh: "在生存节目中被淘汰后最终加入的“反转忙内”。16 岁出道后经历了变声期，蜕变为深邃且富有魅力的音色，拥有“可爱的老人”这一绰号。",
          es: "El 'maknae con giro argumental' que fue eliminado y luego reincorporado. Debutó a los 16 años y, tras el cambio de voz, sorprendió a los fans con un tono profundo y encantador; apodado 'lindo anciano'.",
          id: "Maknae dengan 'plot twist' yang sempat tereliminasi lalu bergabung kembali. Debut di usia 16 tahun, dan setelah suaranya berubah, ia mengejutkan penggemar dengan nada yang dalam dan menawan — dijuluki 'orang tua yang lucu'.",
          fr: "Le 'maknae surprise' qui a été éliminé puis réintégré. A débuté à 16 ans, et après sa mue, a surpris les fans avec un timbre profond et charmant — surnommé 'le vieil homme mignon'.",
          hi: "वह 'प्लॉट-ट्विस्ट मकाने' जिसे बाहर कर दिया गया था और फिर वापस जोड़ दिया गया। 16 साल की उम्र में शुरुआत की, और आवाज़ बदलने के बाद, प्रशंसकों को एक गहरी, आकर्षक आवाज़ से चौंका दिया - उपनाम 'क्यूट ओल्ड मैन'।",
          pt: "O 'maknae surpresa' que foi eliminado e depois reintegrado. Estreou aos 16 anos e, após a mudança de voz, surpreendeu os fãs com um tom profundo e charmoso — apelidado de 'velhinho fofo'.",
          ar: "الماكني 'صاحب المفاجأة' الذي تم إقصاؤه ثم أُعيد للفرقة. ترسّم في سن الـ 16، وبعد تغير صوته، فاجأ المعجبين بنبرة عميقة وساحرة — ويُلقب بـ 'العجوز اللطيف'.",
          th: "น้องเล็ก 'พล็อตทวิสต์' ที่เคยถูกคัดออกแต่ถูกดึงกลับมาเข้าร่วมวงในที่สุด เดบิวต์ตอนอายุ 16 ปี และหลังจากเสียงแตกหนุ่ม เขาก็ทำให้แฟนๆ เซอร์ไพรส์ด้วยโทนเสียงที่ทุ้มลึกและมีเสน่ห์ จนได้รับฉายาว่า 'คุณปู่ที่น่ารัก'",
          vi: "Em út 'ngược dòng' khi từng bị loại rồi được thêm trở lại vào đội hình cuối cùng. Ra mắt năm 16 tuổi, sau khi dậy thì anh đã lột xác với giọng hát trầm ấm quyến rũ, có biệt danh là 'ông cụ non đáng yêu'.",
          ru: "Макнэ с «неожиданным поворотом», который был исключен, а затем возвращен. Дебютировал в 16 лет, и после того, как его голос изменился, удивил фанатов глубоким, очаровательным тембром — прозван «милым стариком»."
        },
        tmi: {
          ko: [
            "스트레이 키즈 막내로, 데뷔 당시 최연소 나이인 16세였다.",
            "사실 서바이벌 프로그램에서 탈락해 팀에 합류하지 못했다가, 최종 결성 시 추가 합류한 '반전 멤버'다.",
            "나이에 비해 성숙한 분위기로 팬들 사이에서 '귀여운 노인'이라는 별명이 있다.",
            "독서를 즐기고 혼자만의 시간을 소중히 여기는 내향적인 성격으로 알려져 있다.",
            "목소리 변성기가 지나자 의외로 깊고 매력적인 음색으로 변해 팬들을 놀라게 했다."
          ],
          en: [
            "The youngest in Stray Kids, making his debut at just 16 years old.",
            "Was actually eliminated from the survival show but was later added to the final lineup — a plot-twist member.",
            "Despite his young age, his calm and mature aura earned him the fan nickname 'cute old man'.",
            "Known as an introvert who enjoys reading and values his alone time.",
            "After his voice changed, he surprised fans with an unexpectedly deep and charming vocal tone."
          ],
          ja: [
            "Stray Kidsの末っ子で、デビュー当時は最年少の16歳でした。",
            "実はサバイバル番組で脱落してチームに合流できませんでしたが、最終結成時に追加合流した「反転のメンバー」です。",
            "年齢のわりに成熟した雰囲気で、ファンの間で「可愛いおじいちゃん」というあだ名があります。",
            "読書を楽しみ、一人きりの時間を大切にする内向的な性格として知られています。",
            "声変わりが過ぎると、意外にも深く魅力的な音色に変わり、ファンを驚かせました。"
          ],
          zh: [
            "作为 Stray Kids 的忙内，出道时年仅 16 岁，是当时最年轻的成员。",
            "实际上曾在生存节目中被淘汰未能加入组合，但在最终成军时被追加加入，是一位“反转成员”。",
            "拥有比实际年龄更成熟的气质，在粉丝中被亲切地称为“可爱的老人”。",
            "性格内向，喜欢读书，非常珍惜独自相处的时光。",
            "变声期过后，音色意外地变得深邃且富有魅力，让粉丝们大为惊喜。"
          ],
          es: [
            "El más joven de Stray Kids, debutando con solo 16 años.",
            "En realidad fue eliminado del programa de supervivencia pero luego fue añadido a la alineación final; un miembro con un giro inesperado.",
            "A pesar de su corta edad, su aura tranquila y madura le valió el apodo de los fans 'lindo anciano'.",
            "Conocido por ser introvertido, disfruta de la lectura y valora su tiempo a solas.",
            "Después de que su voz cambió, sorprendió a los fans con un tono vocal inesperadamente profundo y encantador."
          ],
          id: [
            "Anggota termuda di Stray Kids, melakukan debut pada usia baru 16 tahun.",
            "Sebenarnya sempat tereliminasi dari acara survival tetapi kemudian ditambahkan ke jajaran akhir — anggota dengan plot twist.",
            "Meskipun usianya masih muda, aura tenang dan dewasanya membuatnya dijuluki 'orang tua yang lucu' oleh penggemar.",
            "Dikenal sebagai seorang introvert yang suka membaca dan menghargai waktu sendirinya.",
            "Setelah suaranya berubah, ia mengejutkan penggemar dengan nada vokal yang sangat dalam dan menawan."
          ],
          fr: [
            "Le plus jeune de Stray Kids, ayant débuté à seulement 16 ans.",
            "A été éliminé de l'émission de survie avant d'être ajouté à la formation finale — un membre au parcours inattendu.",
            "Malgré son jeune âge, son aura calme et mature lui a valu le surnom de 'vieil homme mignon'.",
            "Connu comme un introverti qui aime lire et apprécie ses moments de solitude.",
            "Après sa mue, il a surpris les fans avec un timbre vocal d'une profondeur inattendue."
          ],
          hi: [
            "स्ट्रे किड्स में सबसे कम उम्र के, महज 16 साल की उम्र में अपनी शुरुआत की।",
            "वास्तव में सर्वाइवल शो से बाहर कर दिए गए थे लेकिन बाद में अंतिम लाइनअप में जोड़ा गया - एक प्लॉट-ट्विस्ट सदस्य।",
            "अपनी कम उम्र के बावजूद, उनके शांत और परिपक्व व्यवहार ने उन्हें प्रशंसकों से 'क्यूट ओल्ड मैन' उपनाम दिलाया।",
            "एक अंतर्मुखी के रूप में जाने जाते हैं जो पढ़ना पसंद करते हैं और अपने अकेले समय को महत्व देते हैं।",
            "आवाज़ बदलने के बाद, उन्होंने प्रशंसकों को एक अप्रत्याशित रूप से गहरी और आकर्षक आवाज़ से चौंका दिया।"
          ],
          pt: [
            "O mais novo do Stray Kids, fazendo sua estreia com apenas 16 anos.",
            "Foi realmente eliminado do programa de sobrevivência, mas depois adicionado à formação final — um membro com uma reviravolta.",
            "Apesar de sua pouca idade, sua aura calma e madura rendeu-lhe o apelido de 'velhinho fofo'.",
            "Conhecido como um introvertido que gosta de ler e valoriza seu tempo sozinho.",
            "Depois que sua voz mudou, ele surpreendeu os fãs com um tom vocal inesperadamente profundo e charmoso."
          ],
          ar: [
            "أصغر عضو في ستراي كيدز، حيث ترسّم وهو في السادسة عشرة من عمره فقط.",
            "في الحقيقة، تم إقصاؤه من برنامج البقاء ولكن تمت إضافته لاحقاً للتشكيلة النهائية — عضو المفاجأة.",
            "على الرغم من صغر سنه، إلا أن هالته الهادئة والناضجة أكسبته لقب 'العجوز اللطيف'.",
            "يُعرف بشخصيته الانطوائية التي تحب القراءة وتقدر وقت العزلة.",
            "بعد تغير صوته، فاجأ المعجبين بنبرة صوت عميقة وساحرة بشكل غير متوقع."
          ],
          th: [
            "น้องเล็กของ Stray Kids ซึ่งเดบิวต์ตอนอายุเพียง 16 ปีเท่านั้น",
            "จริงๆ แล้วเขาเคยถูกคัดออกจากรายการเซอร์ไววัล แต่ถูกเพิ่มกลับเข้ามาในไลน์อัพสุดท้าย — เป็นสมาชิกที่มีจุดพลิกผัน",
            "แม้จะอายุน้อย แต่ออร่าที่สงบและดูเป็นผู้ใหญ่ทำให้เขาได้รับฉายาจากแฟนๆ ว่า 'คุณปู่ที่น่ารัก'",
            "เป็นที่รู้กันว่าเป็นคนเก็บตัวที่ชอบอ่านหนังสือและให้ความสำคัญกับเวลาส่วนตัว",
            "หลังจากเสียงแตกหนุ่ม เขาทำให้แฟนๆ ตกใจด้วยโทนเสียงที่ทุ้มลึกและมีเสน่ห์อย่างไม่คาดคิด"
          ],
          vi: [
            "Là em út của Stray Kids, ra mắt khi mới 16 tuổi.",
            "Thực tế anh đã bị loại khỏi chương trình sống còn nhưng sau đó đã được thêm vào đội hình cuối cùng — một thành viên đầy bất ngờ.",
            "Dù ít tuổi nhưng khí chất điềm đạm, trưởng thành đã giúp anh có biệt danh 'ông cụ non đáng yêu'.",
            "Được biết đến là một người hướng nội, thích đọc sách và trân trọng thời gian ở một mình.",
            "Sau khi dậy thì, anh đã khiến người hâm mộ ngạc nhiên với giọng hát trầm ấm và quyến rũ bất ngờ."
          ],
          ru: [
            "Самый младший в Stray Kids, дебютировал всего в 16 лет.",
            "На самом деле был исключен из шоу на выживание, но позже был добавлен в финальный состав — участник с неожиданным поворотом в судьбе.",
            "Несмотря на юный возраст, его спокойная и зрелая аура принесла ему фанатское прозвище «милый старик».",
            "Известен как интроверт, который любит читать и ценит время, проведенное наедине с собой.",
            "После того как его голос изменился, он удивил фанатов неожиданно глубоким и приятным тембром."
          ]
        },
        socials: {}
      }
    ]
  },

  // ==================== SEVENTEEN ====================
  {
    id: "seventeen",
    name: { ko: "세븐틴", en: "SEVENTEEN", ja: "セブンティーン", zh: "SEVENTEEN", es: "SEVENTEEN", id: "SEVENTEEN", fr: "SEVENTEEN", hi: "सेवेंटीन", pt: "SEVENTEEN", ar: "سيفنتين", th: "เซเว่นทีน", vi: "SEVENTEEN", ru: "SEVENTEEN" },
    description: {
      ko: "플레디스엔터테인먼트(현 HYBE) 소속 13인조 보이그룹. 보컬·힙합·퍼포먼스 3개 유닛으로 구성된 완전 자체 제작 그룹으로, 2025 빌보드 K-Pop Artist 100 1위를 달성했다.",
      en: "13-member boy group under Pledis Entertainment (now HYBE). A fully self-producing group with three units — Vocal, Hip-hop, and Performance — ranked #1 on Billboard's 2025 K-Pop Artist 100.",
      ja: "プレディスエンターテインメント（現HYBE）所属の13人組ボーイズグループ。ボーカル・ヒップホップ・パフォーマンスの3ユニット構成の完全自己制作グループで、2025年ビルボードK-Pop Artist 100で1位を獲得。",
      zh: "Pledis Entertainment（现HYBE）旗下13人男团。由声乐、嘻哈和表演三个单元组成的完全自制团体，荣登2025年Billboard K-Pop Artist 100榜首。",
      es: "Grupo masculino de 13 miembros bajo Pledis Entertainment (ahora HYBE). Grupo autoproductor con tres unidades, clasificado #1 en el Billboard K-Pop Artist 100 de 2025.",
      id: "Grup pria 13 anggota di bawah Pledis Entertainment (sekarang HYBE). Grup produksi mandiri dengan tiga unit, meraih #1 di Billboard K-Pop Artist 100 2025.",
      fr: "Groupe masculin de 13 membres sous Pledis Entertainment (maintenant HYBE). Groupe autoproducteur avec trois unités, classé #1 au Billboard K-Pop Artist 100 en 2025.",
      hi: "Pledis Entertainment (अब HYBE) के तहत 13 सदस्यीय बॉय ग्रुप। तीन यूनिट के साथ सेल्फ-प्रोड्यूसिंग ग्रुप, 2025 Billboard K-Pop Artist 100 में #1।",
      pt: "Grupo masculino de 13 membros sob a Pledis Entertainment (agora HYBE). Grupo autoprodutivo com três unidades, #1 no Billboard K-Pop Artist 100 em 2025.",
      ar: "مجموعة فتيان من 13 عضواً تحت Pledis Entertainment (الآن HYBE). مجموعة ذاتية الإنتاج بثلاث وحدات، احتلت المرتبة 1 في Billboard K-Pop Artist 100 لعام 2025.",
      th: "กลุ่มชาย 13 คนภายใต้ Pledis Entertainment (ปัจจุบัน HYBE) กลุ่มโปรดิวซ์เองมีสามยูนิต อันดับ 1 Billboard K-Pop Artist 100 ปี 2025",
      vi: "Nhóm nhạc nam 13 thành viên thuộc Pledis Entertainment (nay là HYBE). Nhóm tự sản xuất với ba đơn vị, xếp hạng #1 trên Billboard K-Pop Artist 100 năm 2025.",
      ru: "Мужская группа из 13 участников под Pledis Entertainment (сейчас HYBE). Полностью самопродюсирующаяся группа с тремя юнитами, занявшая #1 в Billboard K-Pop Artist 100 2025 года."
    },
    fandom: { ko: "캐럿 (Carat)", en: "Carat", ja: "キャロット (Carat)", zh: "Carat", es: "Carat", id: "Carat", fr: "Carat", hi: "Carat", pt: "Carat", ar: "كاريت (Carat)", th: "คารัต (Carat)", vi: "Carat", ru: "Carat" },
    debut: "2015.05.26",
    accentColor: "#1e90ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+group+kpop+2024+official&w=500&h=500&c=7&rs=1&p=0",
    wiki: {
      ko: "세븐틴(SEVENTEEN)은 플레디스엔터테인먼트(현 HYBE) 소속의 13인조 보이그룹입니다. 2015년 5월 데뷔한 완전 자체 제작 그룹으로, 보컬팀·힙합팀·퍼포먼스팀 3개 유닛 체제로 운영됩니다. 2025년 빌보드 K-Pop Artist 100에서 1위를 달성했으며, 월드투어 'RIGHT HERE'에서 865,000장의 티켓을 판매했습니다. 그룹명은 13명 + 3개 유닛 + 1팀 = 17이라는 공식에서 비롯됐습니다.",
      en: "SEVENTEEN is a 13-member boy group under Pledis Entertainment (now HYBE), debuting May 2015 as a fully self-producing group organized into three units: Vocal Team, Hip-hop Team, and Performance Team. They ranked #1 on Billboard's 2025 K-Pop Artist 100 and sold 865,000 tickets on their 'RIGHT HERE' world tour. The name comes from the formula: 13 members + 3 units + 1 team = 17."
    },
    company: "Pledis Entertainment (HYBE)",
    tmi: {
      ko: [
        "그룹명 SEVENTEEN은 멤버 13명 + 3개 유닛 + 1팀 = 17이라는 공식에서 유래했다.",
        "보컬팀·힙합팀·퍼포먼스팀 3개 유닛이 독립적으로도 활동하며 다양한 콘텐츠를 생산한다.",
        "2025 빌보드 K-Pop Artist 100에서 1위를 차지하며 역대 최고 성적을 기록했다.",
        "월드투어 'RIGHT HERE'가 865,000장 티켓을 판매하며 역대급 흥행을 기록했다.",
        "멤버 우지(Woozi)는 세븐틴 음악의 80% 이상을 직접 작곡·편곡하는 천재 프로듀서다.",
        "데뷔 때부터 모든 안무를 자체 제작하는 그룹으로, 호시가 주 안무가 역할을 맡는다.",
        "호랑이 기운 솟아라!로 유명한 버논의 한국어 실력이 화제가 돼 예능에서 단골 소재로 등장한다.",
        "미국·중국·일본 등 다양한 국적의 멤버로 구성된 진정한 글로벌 그룹이다.",
        "팬덤명 Carat은 다이아몬드의 무게 단위로, '세븐틴이 다이아몬드가 되도록 빛내주는 존재'라는 뜻이다.",
        "2025년 발매한 'HAPPY BURSTDAY'가 빌보드 200 2위에 올라 역대 최고 성적을 기록했다."
      ],
      en: [
        "The name SEVENTEEN comes from the formula: 13 members + 3 units + 1 team = 17.",
        "Three units — Vocal Team, Hip-hop Team, Performance Team — each release independent content.",
        "Ranked #1 on the 2025 Billboard K-Pop Artist 100, the highest achievement in group history.",
        "World tour 'RIGHT HERE' sold 865,000 tickets — a record-breaking run.",
        "Woozi produces and arranges over 80% of SEVENTEEN's music — considered a genius songwriter.",
        "Since debut, all choreography is self-created; Hoshi serves as the primary choreographer.",
        "Vernon's Korean skills went viral for comedic reasons, becoming a recurring variety show topic.",
        "Members from the US, China, Japan and Korea make SEVENTEEN a genuinely global group.",
        "Fandom name Carat (diamond weight unit) means 'those who make SEVENTEEN shine like diamonds'.",
        "'HAPPY BURSTDAY' (2025) peaked at #2 on Billboard 200 — their personal best chart position."
      ]
    },
    news: [
      { title: { ko: "세븐틴, 2025 빌보드 K-Pop Artist 100 1위 달성", en: "SEVENTEEN Ranks #1 on 2025 Billboard K-Pop Artist 100" }, date: "2025.12.20", summary: { ko: "세븐틴이 빌보드 2025 K-Pop Artist 100에서 1위를 차지해 그룹 역대 최고 성적을 기록했습니다.", en: "SEVENTEEN ranked #1 on Billboard's 2025 K-Pop Artist 100, achieving their all-time best chart position." }, url: "#" },
      { title: { ko: "월드투어 'RIGHT HERE' 865,000장 매진", en: "World Tour 'RIGHT HERE' Sells 865,000 Tickets" }, date: "2025.06.30", summary: { ko: "세븐틴의 월드투어 'RIGHT HERE'가 865,000장을 판매해 K-Pop 역대 가장 많은 티켓이 팔린 투어 중 하나가 됐습니다.", en: "SEVENTEEN's 'RIGHT HERE' world tour sold 865,000 tickets, making it one of the highest-selling K-pop tours ever." }, url: "#" },
      { title: { ko: "정규 12집 'HAPPY BURSTDAY' 빌보드 200 2위 진입", en: "12th Album 'HAPPY BURSTDAY' Enters Billboard 200 at #2" }, date: "2025.09.05", summary: { ko: "세븐틴의 정규 12집 'HAPPY BURSTDAY'가 빌보드 200 차트 2위에 진입해 역대 최고 성적을 기록했습니다.", en: "'HAPPY BURSTDAY' debuted at #2 on the Billboard 200 — SEVENTEEN's highest-charting album ever." }, url: "#" },
      { title: { ko: "서브유닛 BSS, 빌보드 200 진입 달성", en: "Sub-unit BSS Enters Billboard 200" }, date: "2025.02.10", summary: { ko: "세븐틴 서브유닛 BSS(부석순)의 첫 솔로 미니앨범이 빌보드 200에 진입하며 유닛의 글로벌 인지도를 높였습니다.", en: "SEVENTEEN sub-unit BSS's first solo mini-album entered the Billboard 200, raising the unit's global profile." }, url: "#" },
      { title: { ko: "우지, 2025 대한민국 최고 작곡가상 수상", en: "Woozi Wins Korea's Top Songwriter Award 2025" }, date: "2025.11.01", summary: { ko: "세븐틴 우지가 2025 대한민국 최고 작곡가상을 수상하며 자체 제작 능력을 공식적으로 인정받았습니다.", en: "SEVENTEEN's Woozi won Korea's Top Songwriter Award 2025, officially recognizing his self-producing genius." }, url: "#" },
      { title: { ko: "호시, '2025 베스트 안무상' 세 번째 수상", en: "Hoshi Wins 'Best Choreography 2025' — His Third Time" }, date: "2025.11.22", summary: { ko: "호시가 2025 베스트 안무상을 수상하며 같은 상을 세 번 받은 최초의 안무가가 됐습니다.", en: "Hoshi won the Best Choreography Award for 2025, becoming the first choreographer to receive it three times." }, url: "#" },
      { title: { ko: "디에잇, 자체 안무 유튜브 영상 1억 뷰 돌파", en: "The8's Self-Choreographed YouTube Video Surpasses 100M Views" }, date: "2025.04.15", summary: { ko: "세븐틴 디에잇의 자체 안무 유튜브 영상이 1억 뷰를 넘기며 개인 댄서로서의 위상을 증명했습니다.", en: "The8's self-choreographed YouTube video surpassed 100M views, proving his status as a world-class individual dancer." }, url: "#" },
      { title: { ko: "버논·민규, GQ 매거진 커버 장식", en: "Vernon and Mingyu Cover GQ Magazine" }, date: "2025.07.01", summary: { ko: "세븐틴 버논과 민규가 미국 GQ 매거진 표지를 장식하며 글로벌 패션 아이콘으로 자리잡았습니다.", en: "SEVENTEEN's Vernon and Mingyu graced the cover of US GQ Magazine, establishing themselves as global fashion icons." }, url: "#" },
      { title: { ko: "팬덤 캐럿, 글로벌 규모 1800만 돌파", en: "Fandom Carat Surpasses 18 Million Global Members" }, date: "2025.10.10", summary: { ko: "세븐틴의 공식 팬덤 캐럿이 글로벌 팬덤 규모 1800만 명을 돌파했습니다.", en: "SEVENTEEN's official fandom Carat surpassed 18 million members globally." }, url: "#" },
      { title: { ko: "뉴욕 MSG 단독 콘서트 전석 매진", en: "Sell Out Madison Square Garden in New York" }, date: "2025.08.20", summary: { ko: "세븐틴이 뉴욕 매디슨 스퀘어 가든에서 단독 콘서트를 열어 전석을 매진시키며 미국 진출을 확장했습니다.", en: "SEVENTEEN sold out Madison Square Garden in New York, marking a major milestone in their US market expansion." }, url: "#" }
    ],
    members: [
      {
        id: "scoups",
        name: { ko: "에스쿱스", en: "S.Coups", ja: "エスクプス", zh: "S.Coups", es: "S.Coups", id: "S.Coups", fr: "S.Coups", hi: "एस.कुप्स", pt: "S.Coups", ar: "إس كوبس", th: "เอสคูปส์", vi: "S.Coups", ru: "С.Купс" },
        role: { ko: "리더, 힙합팀 리더, 래퍼", en: "Leader, Hip-hop Unit Leader, Rapper", ja: "リーダー、ヒップホップチームリーダー、ラッパー", zh: "队长, 嘻哈分队队长, 说唱", es: "Líder, Líder de la Unidad de Hip-hop, Rapero", id: "Pemimpin, Pemimpin Unit Hip-hop, Rapper", fr: "Leader, Leader de l'unité Hip-hop, Rappeur", hi: "लीडर, हिप-हॉप यूनिट लीडर, रैपर", pt: "Líder, Líder da Unidade de Hip-hop, Rapper", ar: "القائد، قائد وحدة الهيب هوب، رابر", th: "ลีดเดอร์, ลีดเดอร์ยูนิตฮิปฮอป, แร็ปเปอร์", vi: "Trưởng nhóm, Trưởng nhóm Hip-hop, Rapper", ru: "Лидер, Лидер хип-хоп юнита, Рэпер" },
        birth: "1995.08.08",
        bloodType: "O",
        mbti: "ESTP",
        height: "178cm",
        zodiac: { ko: "사자자리", en: "Leo", ja: "しし座", zh: "狮子座", es: "Leo", id: "Leo", fr: "Lion", hi: "सिंह", pt: "Leão", ar: "الأسد", th: "สิงห์", vi: "Sư Tử", ru: "Лев" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+S.Coups+Choi+Seungcheol+face+closeup+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "13명을 하나로 묶는 세븐틴의 든든한 리더. 힙합팀을 이끌며 군 복무 중 부상 후 완벽히 복귀해 팬들에게 감동을 선사했다.",
          en: "The unifying leader who holds 13 members together. Led the hip-hop team and moved fans with a full comeback after a military service injury.",
          ja: "13人を一つにまとめるSEVENTEENの頼もしいリーダー。ヒップホップチームを率い、兵役中の負傷から完璧に復帰してファンに感動を与えた。",
          zh: "将13名成员凝聚在一起的SEVENTEEN坚实领导者。带领嘻哈分队，在服役期间受伤后完美回归，令粉丝深受感动。",
          es: "El líder unificador que mantiene unidos a los 13 miembros. Lideró la unidad de hip-hop y conmovió a los fans con su regreso total tras una lesión durante el servicio militar.",
          id: "Pemimpin pemersatu yang menyatukan 13 anggota. Memimpin unit hip-hop dan menyentuh hati penggemar dengan comeback penuh setelah cedera saat wajib militer.",
          fr: "Le leader unificateur qui unit les 13 membres. Il dirige l'unité hip-hop et a ému les fans avec son retour complet après une blessure pendant son service militaire.",
          hi: "13 सदस्यों को एक साथ रखने वाले सेवेंटीन के मजबूत लीडर। हिप-हॉप टीम का नेतृत्व किया और सैन्य सेवा के दौरान चोट लगने के बाद पूर्ण वापसी के साथ प्रशंसकों को भावुक कर दिया।",
          pt: "O líder unificador que mantém os 13 membros unidos. Liderou a unidade de hip-hop e emocionou os fãs com um retorno completo após uma lesão no serviço militar.",
          ar: "القائد الموحد الذي يجمع 13 عضواً معاً. قاد وحدة الهيب هوب وأثر في المعجبين بعودته الكاملة بعد إصابته أثناء الخدمة العسكرية.",
          th: "ลีดเดอร์ที่แข็งแกร่งผู้รวบรวมสมาชิกทั้ง 13 คนเข้าด้วยกัน ผู้นำยูนิตฮิปฮอปที่ทำให้แฟนคลับประทับใจด้วยการกลับมาอย่างสมบูรณ์แบบหลังจากการบาดเจ็บระหว่างรับราชการทหาร",
          vi: "Vị trưởng nhóm đáng tin cậy, người gắn kết 13 thành viên SEVENTEEN. Anh dẫn dắt nhóm Hip-hop và đã gây xúc động cho người hâm mộ khi trở lại mạnh mẽ sau chấn thương trong thời gian nhập ngũ.",
          ru: "Надежный лидер SEVENTEEN, объединяющий 13 участников. Возглавляя хип-хоп юнит, он тронул сердца фанатов своим полноценным возвращением после травмы во время военной службы."
        },
        tmi: {
          ko: [
            "세븐틴의 든든한 리더로, 13명을 하나로 묶는 구심점 역할을 한다.",
            "군 복무 중 부상을 입어 수술 후 복귀하면서 팬들에게 큰 감동을 줬다.",
            "힙합팀 리더로 팀 내 래핑 능력이 가장 뛰어나며 특유의 두꺼운 음색이 트레이드마크다.",
            "13명을 이끄는 리더십이 뛰어나 업계에서도 '리더 중의 리더'로 평가받는다.",
            "데뷔 전 개인 연습 영상이 유출됐을 때 이를 오히려 계기로 삼아 더 열심히 한 일화가 유명하다."
          ],
          en: [
            "The sturdy leader of SEVENTEEN, serving as the unifying force for all 13 members.",
            "Suffered an injury during military service, returned post-surgery, deeply moving fans worldwide.",
            "Hip-hop unit leader with the deepest rap voice in the team — his thick vocal tone is iconic.",
            "Considered a 'leader among leaders' by industry insiders for managing a 13-person group.",
            "When pre-debut practice footage leaked, he used it as motivation to work harder — a well-known story."
          ],
          ja: [
            "SEVENTEENの頼もしいリーダーで、13人を一つにまとめる中心的な役割を果たしている。",
            "兵役中に負傷し、手術を経て復帰したことでファンに大きな感動を与えた。",
            "ヒップホップチームのリーダーとしてチーム内で最高のラップの実力を持ち、特有の厚みのある歌声がトレードマークだ。",
            "13人を率いるリーダーシップに優れ、業界でも「リーダーの中のリーダー」と評価されている。",
            "デビュー前に個人の練習動画が流出した際、それをむしろ糧にしてより熱心に練習した逸話が有名だ。"
          ],
          zh: [
            "作为SEVENTEEN坚实的领导者，起着将13人凝聚在一起的核心作用。",
            "在服役期间受伤，手术后回归，给全世界的粉丝带来了极大的感动。",
            "作为嘻哈分队的队长，拥有队内最出色的说唱能力，独特的浑厚音色是他的标志。",
            "其卓越的领导能力能够带领13名成员，被业界评价为“领导者中的领导者”。",
            "出道前个人练习视频流出时，他以此为契机更加努力，这段轶事非常有名。"
          ],
          es: [
            "El sólido líder de SEVENTEEN, que actúa como el eje que une a los 13 miembros.",
            "Sufrió una lesión durante el servicio militar y regresó tras la cirugía, conmoviendo profundamente a los fans.",
            "Líder de la unidad de hip-hop con la voz de rap más profunda del equipo; su tono vocal grueso es icónico.",
            "Considerado un 'líder entre líderes' por los expertos de la industria por gestionar un grupo de 13 personas.",
            "Cuando se filtraron imágenes de práctica antes del debut, las usó como motivación para trabajar más duro."
          ],
          id: [
            "Pemimpin SEVENTEEN yang tangguh, berfungsi sebagai kekuatan pemersatu bagi ke-13 anggota.",
            "Mengalami cedera saat wajib militer, kembali setelah operasi, sangat menyentuh hati penggemar di seluruh dunia.",
            "Pemimpin unit hip-hop dengan suara rap terdalam di tim — nada vokalnya yang berat sangat ikonik.",
            "Dianggap sebagai 'pemimpin di antara para pemimpin' oleh orang dalam industri karena mengelola grup beranggotakan 13 orang.",
            "Saat video latihan sebelum debut bocor, ia menggunakannya sebagai motivasi untuk bekerja lebih keras."
          ],
          fr: [
            "Le solide leader de SEVENTEEN, servant de force unificatrice pour les 13 membres.",
            "A subi une blessure pendant son service militaire, est revenu après une opération, touchant profondément les fans du monde entier.",
            "Leader de l'unité hip-hop avec la voix de rap la plus grave du groupe — son timbre vocal épais est iconique.",
            "Considéré comme un 'leader parmi les leaders' par les professionnels de l'industrie pour la gestion d'un groupe de 13 personnes.",
            "Lorsque des vidéos d'entraînement avant ses débuts ont fuité, il s'en est servi comme motivation pour travailler plus dur."
          ],
          hi: [
            "सेवेंटीन के मजबूत लीडर, जो सभी 13 सदस्यों के लिए एकता की शक्ति के रूप में कार्य करते हैं।",
            "सैन्य सेवा के दौरान चोट लगी, सर्जरी के बाद लौटे, जिससे दुनिया भर के प्रशंसक भावुक हो गए।",
            "हिप-हॉप यूनिट के लीडर जिनकी टीम में सबसे गहरी रैप आवाज है - उनका भारी स्वर उनकी पहचान है।",
            "13 लोगों के समूह के प्रबंधन के लिए उद्योग के जानकारों द्वारा उन्हें 'नेताओं के बीच नेता' माना जाता है।",
            "जब डेब्यू से पहले के अभ्यास का फुटेज लीक हो गया, तो उन्होंने इसे और अधिक मेहनत करने की प्रेरणा के रूप में इस्तेमाल किया।"
          ],
          pt: [
            "O líder resiliente do SEVENTEEN, servindo como a força unificadora para todos os 13 membros.",
            "Sofreu uma lesão durante o serviço militar, retornou após a cirurgia, emocionando profundamente os fãs em todo o mundo.",
            "Líder da unidade de hip-hop com a voz de rap mais grave do grupo — seu tom vocal encorpado é icônico.",
            "Considerado um 'líder entre líderes' por especialistas da indústria por gerenciar um grupo de 13 pessoas.",
            "Quando imagens de prática pré-estreia vazaram, ele as usou como motivação para trabalhar mais duro."
          ],
          ar: [
            "القائد القوي لفرقة سيفنتين، والذي يعمل كقوة موحدة لجميع الأعضاء الـ 13.",
            "تعرض لإصابة أثناء الخدمة العسكرية، وعاد بعد الجراحة، مما أثر بعمق في المعجبين حول العالم.",
            "قائد وحدة الهيب هوب وصاحب أعمق صوت راب في الفريق - نبرة صوته السميكة هي علامته المميزة.",
            "يعتبره المطلعون على الصناعة 'قائداً بين القادة' لقدرته على إدارة مجموعة مكونة من 13 شخصاً.",
            "عندما تسربت لقطات تدريب ما قبل الظهور لأول مرة، استخدمها كحافز للعمل بجدية أكبر."
          ],
          th: [
            "ลีดเดอร์ที่แข็งแกร่งของ SEVENTEEN ทำหน้าที่เป็นศูนย์กลางที่รวบรวมสมาชิกทั้ง 13 คนเข้าด้วยกัน",
            "ได้รับบาดเจ็บระหว่างรับราชการทหารและกลับมาหลังการผ่าตัด ซึ่งสร้างความประทับใจให้กับแฟนๆ ทั่วโลก",
            "ลีดเดอร์ยูนิตฮิปฮอปที่มีเสียงแร็ปทุ้มลึกที่สุดในทีม และโทนเสียงที่หนาเป็นเอกลักษณ์คือเครื่องหมายการค้าของเขา",
            "ได้รับการประเมินว่าเป็น 'ลีดเดอร์ของเหล่าลีด데อร์' จากคนในวงการจากการดูแลกลุ่มที่มีสมาชิกถึง 13 คน",
            "มีเรื่องราวโด่งดังจากการที่วิดีโอซ้อมก่อนเดบิวต์หลุดออกมา แต่เขากลับใช้เป็นแรงผลักดันให้พยายามหนักยิ่งขึ้น"
          ],
          vi: [
            "Vị trưởng nhóm kiên cường của SEVENTEEN, đóng vai trò là lực lượng gắn kết cả 13 thành viên.",
            "Bị thương trong quá trình nhập ngũ, đã trở lại sau phẫu thuật, gây xúc động mạnh cho người hâm mộ toàn cầu.",
            "Trưởng nhóm Hip-hop với giọng rap trầm nhất nhóm — âm sắc dày đặc trưng là thương hiệu của anh.",
            "Được những người trong ngành đánh giá là 'trưởng nhóm của các trưởng nhóm' vì khả năng quản lý một nhóm 13 người.",
            "Khi video luyện tập trước khi ra mắt bị rò rỉ, anh đã lấy đó làm động lực để làm việc chăm chỉ hơn."
          ],
          ru: [
            "Надежный лидер SEVENTEEN, выступающий в роли объединяющей силы для всех 13 участников.",
            "Получил травму во время военной службы, вернулся после операции, глубоко тронув фанатов по всему миру.",
            "Лидер хип-хоп юнита с самым глубоким рэп-голосом в группе — его густой тембр стал культовым.",
            "Инсайдеры индустрии считают его «лидером среди лидеров» за умение управлять группой из 13 человек.",
            "Когда видео с его преддебютных тренировок просочилось в сеть, он использовал это как мотивацию работать еще усерднее."
          ]
        },
        socials: {}
      },
      {
        id: "jeonghan",
        name: { ko: "정한", en: "Jeonghan", ja: "ジョンハン", zh: "净汉", es: "Jeonghan", id: "Jeonghan", fr: "Jeonghan", hi: "जोंगहन", pt: "Jeonghan", ar: "جونغهان", th: "จองฮัน", vi: "Jeonghan", ru: "Джонхан" },
        role: { ko: "보컬팀, 보컬", en: "Vocal Unit, Vocal", ja: "ボーカルチーム、ボーカル", zh: "声乐分队, 领唱", es: "Unidad Vocal, Vocalista", id: "Unit Vokal, Vokal", fr: "Unité Vocale, Vocale", hi: "वोकल यूनिट, वोकल", pt: "Unidade Vocal, Vocal", ar: "وحدة الصوت، صوت", th: "โวคอลยูนิต, โวคอล", vi: "Nhóm Vocal, Hát", ru: "Вокальный юнит, Вокалист" },
        birth: "1995.10.04",
        bloodType: "B",
        mbti: "INFJ",
        height: "175cm",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ตุลย์", vi: "Thiên Bình", ru: "Весы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Jeonghan+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "성별을 초월한 외모로 세계 미남 차트 단골인 보컬팀 멤버. 군 복귀 후 달라진 분위기로 팬들을 사로잡으며 '정한식 장난'으로도 유명하다.",
          en: "A regular on global 'most handsome' charts for his transcendent beauty. After military service, his transformed vibe captivated fans — and his signature pranks keep members on their toes.",
          ja: "性別を超越したビジュアルで世界美男チャートの常連であるボーカルチームのメンバー。除隊後の変わった雰囲気でファンを魅了し、「ジョンハン流のいたずら」でも有名だ。",
          zh: "凭借超越性别的外貌经常登上世界美男排行榜的声乐分队成员。退伍后以截然不同的氛围吸引了粉丝，并以“净汉式玩笑”闻名。",
          es: "Un habitual en las listas mundiales de 'más guapos' por su belleza trascendente. Tras el servicio militar, su vibra transformada cautivó a los fans, y sus bromas características mantienen a todos alerta.",
          id: "Langganan dalam daftar 'pria tertampan' dunia karena ketampanannya yang melampaui gender. Setelah wajib militer, auranya yang berubah memikat penggemar — dan kejahilannya yang khas selalu membuat anggota waspada.",
          fr: "Un habitué des classements mondiaux des 'plus beaux hommes' pour sa beauté transcendante. Après son service militaire, son aura transformée a captivé les fans — et ses plaisanteries signatures amusent tout le groupe.",
          hi: "अपनी अलौकिक सुंदरता के लिए वैश्विक 'सबसे सुंदर' चार्ट पर नियमित रहने वाले वोकल यूनिट के सदस्य। सैन्य सेवा के बाद, उनके बदले हुए अंदाज ने प्रशंसकों को मंत्रमुग्ध कर दिया - और उनकी सिग्नेचर शरारतें सदस्यों को सतर्क रखती हैं।",
          pt: "Um frequentador assíduo das listas mundiais de 'mais bonitos' por sua beleza transcendente. Após o serviço militar, sua vibra transformada cativou os fãs — e suas pegadinhas icônicas mantêm os membros alertas.",
          ar: "عضو في وحدة الصوت يظهر بانتظام في قوائم 'الأكثر وسامة' العالمية لجماله المتجاوز للحدود. بعد الخدمة العسكرية، أذهل المعجبين بهالته المتحولة - وتشتهر مقالبه الفريدة بإبقاء الأعضاء في حالة تأهب.",
          th: "สมาชิกยูนิตโวคอลที่ติดอันดับหนุ่มหล่อระดับโลกอยู่เสมอด้วยวิชวลที่ก้าวข้ามขีดจำกัดเรื่องเพศ หลังจากออกจากกรม เขากลับมาพร้อมเสน่ห์ที่เปลี่ยนไปและมีชื่อเสียงเรื่องการแกล้งเพื่อนในแบบฉับของตัวเอง",
          vi: "Thành viên nhóm Vocal thường xuyên góp mặt trong bảng xếp hạng trai đẹp thế giới nhờ vẻ đẹp phi giới tính. Sau khi xuất ngũ, khí chất thay đổi của anh đã thu hút người hâm mộ — và những trò đùa mang thương hiệu 'Jeonghan' cũng rất nổi tiếng.",
          ru: "Участник вокального юнита, завсегдатай списков самых красивых мужчин мира благодаря своей неземной красоте. После армии его преображенный образ покорил фанатов, а его фирменные шутки не дают участникам расслабиться."
        },
        tmi: {
          ko: [
            "성별을 초월한 외모로 '천사가 현현한 얼굴'이라는 극찬을 받으며 세계 미남 차트에 꾸준히 등장한다.",
            "멤버들을 잘 챙기는 반면 특유의 '정한식 장난'으로 멤버들을 당황하게 하는 이중적 매력이 있다.",
            "긴 머리 시절이 특히 유명해 '천사 정한'이라는 이미지가 국내외에 깊이 박혔다.",
            "세 번째로 빠른 외국어 습득 능력을 자랑하며 영어·일본어 학습 속도가 빠르다.",
            "군 복무 후 완벽히 달라진 분위기로 컴백해 팬들 사이에서 '군바리 정한' 열풍이 일었다."
          ],
          en: [
            "Praised for transcending gender with his face — regularly appears on global 'most handsome' charts as 'an angel made flesh'.",
            "Known for doting on members while also pulling uniquely crafty 'Jeonghan-style pranks' — a dual charm.",
            "His long-hair era is legendary — the 'angel Jeonghan' image is deeply imprinted on fans worldwide.",
            "One of the fastest language learners in the group, quickly picking up English and Japanese.",
            "Returned from military service with a dramatically different vibe, sparking the 'military Jeonghan' fan craze."
          ],
          ja: [
            "性別を超越したビジュアルで「天使が降臨した顔」と絶賛され、世界美男チャートに絶えず登場している。",
            "メンバーの面倒을よく見る一方で、特有の「ジョンハン流のいたずら」でメンバーを困惑させる二面性の魅力がある。",
            "長髪時代が特に有名で、「天使のジョンハン」というイメージが国内外で深く根付いている。",
            "グループ内で3番目に速い外国語習得能力を誇り、英語や日本語の学習速度が速い。",
            "除隊後に完璧に変わった雰囲気でカムバックし、ファンの間で「軍人ジョンハン」ブームが起きた。"
          ],
          zh: [
            "因超越性别的外貌被赞誉为“天使降临人间”，并持续出现在世界美男排行榜上。",
            "在悉心照顾成员的同时，又有着通过独特的“净汉式玩笑”让成员们感到惊慌的矛盾魅力。",
            "长发时期尤为出名，使“天使净汉”的形象在国内外深入人心。",
            "拥有队内第三快的语言习得能力，学习英语和日语的速度非常快。",
            "退伍后以截然不同的氛围回归，在粉丝中间掀起了“军人净汉”热潮。"
          ],
          es: [
            "Elogiado por trascender el género con su rostro; aparece regularmente en las listas mundiales de 'más guapos' como 'un ángel hecho carne'.",
            "Conocido por cuidar a los miembros y, al mismo tiempo, gastar 'bromas al estilo Jeonghan' excepcionalmente ingeniosas; un encanto dual.",
            "Su era de cabello largo es legendaria; la imagen del 'ángel Jeonghan' está profundamente grabada en los fans de todo el mundo.",
            "Uno de los que aprende idiomas más rápido en el grupo, captando rápidamente el inglés y el japonés.",
            "Regresó del servicio militar con una vibra dramáticamente diferente, desatando la locura entre los fans por el 'Jeonghan militar'."
          ],
          id: [
            "Dipuji karena wajahnya yang melampaui gender — secara teratur muncul di daftar 'pria tertampan' global sebagai 'malaikat dalam wujud manusia'.",
            "Dikenal sangat menyayangi anggota sambil juga melakukan 'jahil khas Jeonghan' yang unik — sebuah pesona ganda.",
            "Era rambut panjangnya sangat legendaris — citra 'malaikat Jeonghan' tertanam dalam di hati penggemar seluruh dunia.",
            "Salah satu pembelajar bahasa tercepat di grup, dengan cepat menguasai bahasa Inggris dan Jepang.",
            "Kembali dari wajib militer dengan aura yang sangat berbeda, memicu tren 'Jeonghan militer' di kalangan penggemar."
          ],
          fr: [
            "Loué pour son visage transcendant les genres — apparaît régulièrement dans les classements mondiaux des 'plus beaux hommes' comme 'un ange incarné'.",
            "Connu pour prendre soin des membres tout en faisant des 'plaisanteries à la Jeonghan' uniques — un double charme.",
            "Son époque aux cheveux longs est légendaire — l'image de 'l'ange Jeonghan' est profondément ancrée chez les fans du monde entier.",
            "L'un des membres qui apprend les langues le plus rapidement, maîtrisant vite l'anglais et le japonais.",
            "Revenu du service militaire avec une aura radicalement différente, déclenchant une vague d'enthousiasme pour le 'Jeonghan militaire'."
          ],
          hi: [
            "अपने चेहरे से लिंग को पार करने के लिए प्रशंसा की जाती है - नियमित रूप से 'साक्षात फरिश्ता' के रूप में वैश्विक 'सबसे सुंदर' चार्ट पर दिखाई देते हैं।",
            "सदस्यों का ख्याल रखने के साथ-साथ अनोखी 'जोंगहन-शैली की शरारतें' करने के लिए जाने जाते हैं - एक दोहरा आकर्षण।",
            "उनके लंबे बालों वाला दौर पौराणिक है - 'फरिश्ता जोंगहन' की छवि दुनिया भर के प्रशंसकों पर गहराई से अंकित है।",
            "समूह में सबसे तेजी से भाषा सीखने वालों में से एक, अंग्रेजी और जापानी को जल्दी से सीख लेते हैं।",
            "सैन्य सेवा से नाटकीय रूप से अलग अंदाज के साथ लौटे, जिससे प्रशंसकों में 'मिलिट्री जोंगहन' का क्रेज पैदा हो गया।"
          ],
          pt: [
            "Elogiado por transcender o gênero com seu rosto — aparece regularmente nas listas mundiais de 'mais bonitos' como 'um anjo em carne e osso'.",
            "Conhecido por cuidar dos membros e, ao mesmo tempo, fazer 'pegadinhas no estilo Jeonghan' — um charme duplo.",
            "Sua era de cabelo comprido é lendária — a imagem do 'anjo Jeonghan' está profundamente gravada nos fãs de todo o mundo.",
            "Um dos aprendizes de idiomas mais rápidos do grupo, pegando rapidamente o inglês e o japonês.",
            "Retornou do serviço militar com uma vibra dramaticamente diferente, desencadeando a febre do 'Jeonghan militar' entre os fãs."
          ],
          ar: [
            "يُمدح لتجاوز وجهه حدود الجنس - يظهر بانتظام في قوائم 'الأكثر وسامة' العالمية كـ 'ملاك متجسد'.",
            "معروف بحرصه على الأعضاء بينما يقوم أيضاً بـ 'مقالب على طريقة جونغهان' فريدة - جاذبية مزدوجة.",
            "حقبة شعره الطويل أسطورية - صورة 'جونغهان الملاك' مطبوعة بعمق في قلوب المعجبين حول العالم.",
            "واحد من أسرع متعلمي اللغات في المجموعة، حيث يتقن الإنجليزية واليابانية بسرعة.",
            "عاد من الخدمة العسكرية بهالة مختلفة تماماً، مما أثار جنون المعجبين بـ 'جونغهان العسكري'."
          ],
          th: [
            "ได้รับการยกย่องเรื่องวิชวลที่ก้าวข้ามขีดจำกัดเรื่องเพศ จนติดอันดับหนุ่มหล่อระดับโลกในฐานะ 'เทพบุตรในร่างมนุษย์' อยู่เสมอ",
            "มีเสน่ห์แบบย้อนแย้งที่ดูแลสมาชิกอย่างดีแต่ขณะเดียวกันก็ชอบแกล้งเพื่อนในแบบฉบับของตัวเองจนทุกคนต้องยอมแพ้",
            "ยุคที่เขาไว้ผมยาวเป็นตำนานมาก ทำให้ภาพลักษณ์ 'เทวดาจองฮัน' ฝังรากลึกในใจแฟนคลับทั้งในและต่างประเทศ",
            "เป็นสมาชิกที่มีความสามารถในการเรียนรู้ภาษาต่างประเทศเร็วเป็นอันดับ 3 ของวง โดยเฉพาะภาษาอังกฤษและญี่ปุ่น",
            "หลังจากออกจากกรม เขากลับมาพร้อมภาพลักษณ์ที่เปลี่ยนไปอย่างสิ้นเชิง จนเกิดกระแส 'จองฮันลุคทหาร' ในหมู่แฟนคลับ"
          ],
          vi: [
            "Được khen ngợi vì gương mặt phi giới tính — thường xuyên xuất hiện trên các bảng xếp hạng 'đẹp trai nhất' thế giới như một 'thiên thần giáng thế'.",
            "Nổi tiếng với việc chăm sóc các thành viên nhưng cũng hay bày ra những 'trò đùa kiểu Jeonghan' độc đáo — một sức hút kép.",
            "Thời kỳ tóc dài của anh là một huyền thoại — hình ảnh 'thiên thần Jeonghan' in sâu trong tâm trí người hâm mộ toàn thế giới.",
            "Một trong những người học ngoại ngữ nhanh nhất nhóm, nhanh chóng nắm bắt tiếng Anh và tiếng Nhật.",
            "Trở lại sau khi xuất ngũ với khí chất khác biệt rõ rệt, gây ra cơn sốt 'Jeonghan quân ngũ' trong cộng đồng fan."
          ],
          ru: [
            "Его хвалят за красоту, выходящую за рамки пола — он регулярно появляется в мировых чартах «самых красивых» как «воплощенный ангел».",
            "Известен своей заботой об участниках и одновременно уникальными «шуточками в стиле Джонхана» — двойное очарование.",
            "Эра его длинных волос легендарна — образ «ангела Джонхана» глубоко запечатлен в сердцах фанатов по всему миру.",
            "Один из самых быстрых учеников в группе по изучению языков, быстро освоил английский и японский.",
            "Вернулся из армии с кардинально другой аурой, вызвав среди фанатов настоящий бум «военного Джонхана»."
          ]
        },
        socials: {}
      },
      {
        id: "joshua",
        name: { ko: "조슈아", en: "Joshua", ja: "ジョシュア", zh: "Joshua", es: "Joshua", id: "Joshua", fr: "Joshua", hi: "जोशुआ", pt: "Joshua", ar: "جوشوا", th: "โจชัว", vi: "Joshua", ru: "Джошуа" },
        role: { ko: "보컬팀, 보컬", en: "Vocal Unit, Vocal", ja: "ボーカルチーム、ボーカル", zh: "声乐分队, 领唱", es: "Unidad Vocal, Vocalista", id: "Unit Vokal, Vokal", fr: "Unité Vocale, Vocale", hi: "वोकल यूनिट, वोकल", pt: "Unidade Vocal, Vocal", ar: "وحدة الصوت، صوت", th: "โวคอลยูนิต, โวคอล", vi: "Nhóm Vocal, Hát", ru: "Вокальный юнит, Вокалист" },
        birth: "1995.12.30",
        bloodType: "O",
        mbti: "ISFJ",
        height: "176cm",
        zodiac: { ko: "염소자리", en: "Capricorn", ja: "やぎ座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "มังกร", vi: "Ma Kết", ru: "Козерог" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Joshua+Hong+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "LA 출신의 세븐틴 공식 영어 통역사. 기타를 직접 연주하는 뮤지션이자 '인간 비타민'이라는 별명처럼 항상 밝고 긍정적인 에너지를 발산한다.",
          en: "LA-born official English interpreter of SEVENTEEN. A guitarist-musician and 'human vitamin' who radiates constant positive energy to the team and fans alike.",
          ja: "LA出身のSEVENTEEN公式英語通訳。ギターを演奏するミュージシャンであり、「人間ビタミン」というあだ名のように、常に明るくポジティブなエネルギーを発散している。",
          zh: "出身于洛杉矶的SEVENTEEN官方英语翻译。是一位亲自演奏吉他的音乐人，就像“人间维他命”的绰号一样，始终散发着开朗积极的正能量。",
          es: "Intérprete oficial de inglés de SEVENTEEN nacido en Los Ángeles. Un músico guitarrista y 'vitamina humana' que irradia una energía positiva constante tanto al equipo como a los fans.",
          id: "Penerjemah bahasa Inggris resmi SEVENTEEN kelahiran LA. Seorang musisi gitaris dan 'vitamin manusia' yang selalu memancarkan energi positif kepada tim dan penggemar.",
          fr: "Interprète anglais officiel de SEVENTEEN né à Los Angeles. Un musicien guitariste et 'vitamine humaine' qui dégage une énergie positive constante pour le groupe et les fans.",
          hi: "एलए में जन्मे सेवेंटीन के आधिकारिक अंग्रेजी दुभाषिया। एक गिटारवादक-संगीतकार और 'ह्यूमन विटामिन' जो टीम और प्रशंसकों दोनों के लिए निरंतर सकारात्मक ऊर्जा फैलाते हैं।",
          pt: "Intérprete oficial de inglês do SEVENTEEN, nascido em LA. Um músico guitarrista e 'vitamina humana' que irradia energia positiva constante para a equipe e para os fãs.",
          ar: "مترجم اللغة الإنجليزية الرسمي لفرقة سيفنتين من لوس أنجلوس. عازف جيتار وموسيقي و'فيتامين بشري' يشع دائماً بطاقة إيجابية للفريق والمعجبين على حد سواء.",
          th: "ล่ามภาษาอังกฤษอย่างเป็นทางการของวงที่เกิดใน LA เขาเป็นนักดนตรีที่เล่นกีตาร์ได้ดีและเป็นเหมือน 'วิตามินของมนุษย์' ที่คอยส่งต่อพลังบวกและความสดใสอยู่เสมอ",
          vi: "Thông dịch viên tiếng Anh chính thức của SEVENTEEN đến từ LA. Một nhạc sĩ kiêm tay guitar, người luôn tỏa ra năng lượng tích cực đúng như biệt danh 'vitamin nhân tạo'.",
          ru: "Официальный переводчик SEVENTEEN с английского языка, родом из Лос-Анджелеса. Гитарист-музыкант и «человек-витамин», который всегда излучает позитивную энергию для группы и фанатов."
        },
        tmi: {
          ko: [
            "미국 로스앤젤레스 출신으로, 영어가 모국어라 세븐틴의 공식 영어 통역사 역할을 한다.",
            "기타 실력이 뛰어나 솔로 프로젝트에서 직접 기타를 치며 노래를 부르는 모습이 팬들에게 큰 인기다.",
            "캐럿들에게 '인간 비타민', '걸어다니는 미소'라는 별명으로 불릴 만큼 밝은 에너지를 발산한다.",
            "유튜브 'Going Seventeen' 시리즈에서 특유의 눈치 없는(?) 캐릭터로 편집의 신이 됐다.",
            "독실한 기독교 신자로 알려져 있으며, 매 공연 전 팀을 위해 기도하는 모습이 포착된 적 있다."
          ],
          en: [
            "From Los Angeles, USA — serves as SEVENTEEN's unofficial English interpreter since it's his native language.",
            "An accomplished guitarist who performs live guitar in solo projects — a beloved fan moment.",
            "Nicknamed 'human vitamin' and 'walking smile' by Carats for his consistently bright, positive energy.",
            "Became the 'editing icon' of 'Going Seventeen' series for his endearingly oblivious character moments.",
            "Known as a devout Christian — has been spotted praying for the team before performances."
          ],
          ja: [
            "アメリカのロサンゼルス出身で、英語が母国語であるため、SEVENTEENの公式英語通訳の役割を果たしている。",
            "ギターの実力に優れ、ソロプロジェクトで自らギターを弾きながら歌う姿がファンに大人気だ。",
            "CARATから「人間ビタミン」「歩く笑顔」というあだ名で呼ばれるほど、明るいエネルギーを発散している。",
            "YouTubeの「Going Seventeen」シリーズで、特유의 空気を読まない（？）キャラクターとして編集の神になった。",
            "敬虔なキリスト教徒として知られており、毎公演前にチームのために祈る姿が目격されたことがある。"
          ],
          zh: [
            "出身于美国洛杉矶，母语是英语，因此担任SEVENTEEN的官方英语翻译。",
            "吉他实力出众，在个人项目中亲自弹吉他唱歌的样子深受粉丝喜爱。",
            "因散发着开朗的正能量，被CARAT们称为“人间维他命”、“行走的微笑”。",
            "在YouTube系列节目《Going Seventeen》中，以其独特的“没眼力见（？）”角色成为了剪辑之神。",
            "作为虔诚的基督教徒而闻名，曾被拍到在每场演出前为团队祈祷的样子。"
          ],
          es: [
            "De Los Ángeles, EE. UU.; sirve como intérprete de inglés de SEVENTEEN ya que es su lengua materna.",
            "Un guitarrista consumado que toca la guitarra en vivo en proyectos en solitario; un momento muy querido por los fans.",
            "Apodado 'vitamina humana' y 'sonrisa andante' por las Carats por su energía constantemente brillante y positiva.",
            "Se convirtió en el 'icono de edición' de la serie 'Going Seventeen' por sus momentos de personaje entrañablemente despistado.",
            "Conocido como un cristiano devoto; ha sido visto rezando por el equipo antes de las actuaciones."
          ],
          id: [
            "Berasal dari Los Angeles, AS — bertugas sebagai penerjemah bahasa Inggris resmi SEVENTEEN karena itu adalah bahasa ibunya.",
            "Seorang gitaris berbakat yang bermain gitar secara langsung dalam proyek solo — momen yang sangat dicintai penggemar.",
            "Dijuluki 'vitamin manusia' dan 'senyum berjalan' oleh Carat karena energinya yang selalu cerah dan positif.",
            "Menjadi 'ikon editing' dalam seri 'Going Seventeen' karena momen karakternya yang lucu dan tidak peka (?).",
            "Dikenal sebagai orang Kristen yang taat — pernah terlihat berdoa untuk tim sebelum setiap pertunjukan."
          ],
          fr: [
            "Originaire de Los Angeles, États-Unis — sert d'interprète anglais à SEVENTEEN car c'est sa langue maternelle.",
            "Un guitariste accompli qui joue de la guitare en direct dans ses projets solo — un moment très apprécié des fans.",
            "Surnommé 'vitamine humaine' et 'sourire ambulant' par les Carats pour son énergie positive et rayonnante.",
            "Devenu l'icône du montage de la série 'Going Seventeen' pour ses moments de personnage attachant et décalé.",
            "Connu pour être un chrétien dévot — il a été aperçu en train de prier pour le groupe avant les concerts."
          ],
          hi: [
            "लॉस एंजिल्स, यूएसए से - अपनी मातृभाषा होने के कारण सेवेंटीन के आधिकारिक अंग्रेजी दुभाषिया के रूप में कार्य करते हैं।",
            "एक कुशल गिटारवादक जो सोलो प्रोजेक्ट्स में लाइव गिटार बजाते हैं - प्रशंसकों का एक प्रिय क्षण।",
            "कैरेट्स द्वारा उनकी लगातार उज्ज्वल, सकारात्मक ऊर्जा के लिए 'ह्यूमन विटामिन' और 'वॉकिंग स्माइल' उपनाम दिया गया।",
            "अपने प्यारे अनजान चरित्र क्षणों के लिए 'गोइंग सेवेंटीन' श्रृंखला के 'संपादन आइकन' बन गए।",
            "एक धर्मनिष्ठ ईसाई के रूप में जाने जाते हैं - प्रदर्शन से पहले टीम के लिए प्रार्थना करते हुए देखे गए हैं।"
          ],
          pt: [
            "De Los Angeles, EUA — atua como intérprete oficial de inglês do SEVENTEEN, já que é sua língua materna.",
            "Um guitarrista talentoso que toca guitarra ao vivo em projetos solo — um momento muito amado pelos fãs.",
            "Apelidado de 'vitamina humana' e 'sorriso ambulante' pelos Carats por sua energia constantemente brilhante e positiva.",
            "Tornou-se o 'ícone da edição' da série 'Going Seventeen' por seus momentos de personagem cativante e distraído.",
            "Conhecido como um cristão devoto — já foi visto rezando pela equipe antes das apresentações."
          ],
          ar: [
            "من لوس أنجلوس، الولايات المتحدة - يعمل كمترجم اللغة الإنجليزية الرسمي لفرقة سيفنتين لأنها لغته الأم.",
            "عازف جيتار بارع يعزف الجيتار مباشرة في المشاريع المنفردة - وهي لحظة محبوبة جداً لدى المعجبين.",
            "يلقبه الكاريت بـ 'فيتامين بشري' و'الابتسامة الماشية' لطاقته المشرقة والإيجابية الدائمة.",
            "أصبح 'أيقونة المونتاج' في سلسلة 'Going Seventeen' بسبب لحظات شخصيته اللطيفة وغير المدركة لما حوله.",
            "يُعرف بكونه مسيحياً متديناً - وقد شوهد وهو يصلي من أجل الفريق قبل العروض."
          ],
          th: [
            "มาจากลอสแอนเจลิส สหรัฐอเมริกา ทำหน้าที่เป็นล่ามภาษาอังกฤษอย่างเป็นทางการของวงเนื่องจากเป็นภาษาแม่",
            "มีความสามารถด้านการเล่นกีตาร์ที่ยอดเยี่ยม การที่เขาเล่นกีตาร์และร้องเพลงในโปรเจกต์เดี่ยวได้รับความนิยมอย่างมากในหมู่แฟนคลับ",
            "ได้รับฉายาจากเหล่ากะรัตว่า 'วิตามินของมนุษย์' และ 'รอยยิ้มที่เดินได้' จากพลังงานที่สดใสและคิดบวกอยู่เสมอ",
            "กลายเป็นไอคอนแห่งการตัดต่อในรายการ 'Going Seventeen' จากคาแรกเตอร์ที่ดูเหมือนจะไม่รู้เรื่องรู้ราว (?) ที่น่าเอ็นดู",
            "เป็นที่รู้จักในฐานะคริสเตียนที่เคร่งครัด และเคยมีภาพที่เขาอธิษฐานให้กับทีมก่อนการแสดงทุกครั้ง"
          ],
          vi: [
            "Đến từ Los Angeles, Hoa Kỳ — đóng vai trò là thông dịch viên tiếng Anh chính thức của SEVENTEEN vì đây là ngôn ngữ mẹ đẻ.",
            "Một tay chơi guitar điêu luyện, việc anh tự đánh đàn và hát trong các dự án solo rất được người hâm mộ yêu thích.",
            "Được các Carat gọi là 'vitamin nhân tạo' hay 'nụ cười biết đi' vì luôn tỏa ra năng lượng tươi sáng, tích cực.",
            "Trở thành 'thánh edit' trong series 'Going Seventeen' nhờ tính cách ngây ngô (?) đáng yêu đặc trưng.",
            "Được biết đến là một tín đồ Kitô giáo sùng đạo, từng được bắt gặp cầu nguyện cho nhóm trước mỗi buổi biểu diễn."
          ],
          ru: [
            "Родом из Лос-Анджелеса, США — является официальным переводчиком SEVENTEEN с английского, так как это его родной язык.",
            "Опытный гитарист, чьи выступления с гитарой в сольных проектах очень популярны среди фанатов.",
            "Караты называют его «человеком-витамином» и «шагающей улыбкой» за его неизменно яркую и позитивную энергию.",
            "Стал «иконой монтажа» в шоу «Going Seventeen» благодаря своему очаровательному образу «не от мира сего».",
            "Известен как набожный христианин — его не раз замечали за молитвой о группе перед выступлениями."
          ]
        },
        socials: {}
      },
      {
        id: "jun",
        name: { ko: "준", en: "Jun", ja: "ジュン", zh: "文俊辉", es: "Jun", id: "Jun", fr: "Jun", hi: "जุน", pt: "Jun", ar: "جون", th: "จุน", vi: "Jun", ru: "Джун" },
        role: { ko: "퍼포먼스팀, 댄서, 보컬", en: "Performance Unit, Dancer, Vocal", ja: "パフォーマンスチーム、ダンサー、ボーカル", zh: "表演分队、舞者、歌手", es: "Unidad de Performance, Bailarín, Vocalista", id: "Unit Performa, Penari, Vokal", fr: "Unité Performance, Danseur, Vocaliste", hi: "परफॉर्मेंस यूनिट, डांसर, वोकल", pt: "Unidade de Performance, Dançarino, Vocalista", ar: "وحدة الأداء، راقص، مغني", th: "หน่วยเพอร์ฟอร์แมนซ์, นักเต้น, ร้อง", vi: "Performance Unit, Vũ công, Hát chính", ru: "Перформанс-группа, танцор, вокалист" },
        birth: "1996.06.10",
        bloodType: "O",
        mbti: "ISTP",
        height: "180cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini", ja: "双子座", zh: "双子座", es: "Géminis", id: "Gemini", fr: "Gémeaux", hi: "मिथुन", pt: "Gêmeos", ar: "الجوزاء", th: "เมถุน", vi: "Song Tử", ru: "Близнецы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Jun+Wen+Junhui+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "광저우 출신의 중국 아역 배우 출신 퍼포먼스팀. 비보잉과 무술을 결합한 독특한 퍼포먼스로 중화권 팬덤을 주도하며 조용한 일상과 강렬한 무대의 갭이 매력이다.",
          en: "Guangzhou-born former Chinese child actor in SEVENTEEN's Performance Team. Known for fusing B-boying and martial arts, he leads the Chinese fanbase with an off-stage/on-stage contrast that is pure magnetism.",
          ja: "広州出身の元子役で、セブンティーンのパフォーマンスチーム所属。武術とブレイキン को融合させた独特なパフォーマンスで中華圏のファンを魅了し、静かな日常と強烈なステージのギャップが魅力だ。",
          zh: "广州出身的中国童星出身表演分队成员越。以融合B-boy和武术的独特表演引领华语圈粉丝，安静的日常生活与强烈的舞台表现力之间的反差极具魅力。",
          es: "Ex actor infantil chino de Guangzhou en el Equipo de Performance de SEVENTEEN. Conocido por fusionar B-boying y artes marciales, lidera la base de fans china con un contraste entre el escenario y la vida real que es pura atracción.",
          id: "Mantan aktor cilik Tiongkok kelahiran Guangzhou di Tim Performa SEVENTEEN. Dikenal karena menggabungkan B-boying dan seni bela diri, ia memimpin basis penggemar Tiongkok dengan kontras di luar/di atas panggung yang sangat memikat.",
          fr: "Ancien enfant acteur chinois né à Guangzhou au sein de l'équipe Performance de SEVENTEEN. Connu pour fusionner le B-boying et les arts martiaux, il mène la base de fans chinoise avec un contraste scène/hors-scène qui est un pur magnétisme.",
          hi: "ग्वांगझू में जन्मे पूर्व चीनी बाल कलाकार और SEVENTEEN की परफॉर्मेंस टीम के सदस्य। बी-बॉयिंग और मार्शल आर्ट्स के मिश्रण के लिए जाने जाते हैं, वे अपने ऑफ-स्टेज और ऑन-स्टेज व्यक्तित्व के बीच के अंतर से चीनी प्रशंसकों के बीच लोकप्रिय हैं।",
          pt: "Ex-ator mirim chinês nascido em Guangzhou na Unidade de Performance do SEVENTEEN. Conhecido por fundir B-boying e artes marciais, ele lidera a base de fãs chinesa com um contraste entre o palco e a vida real que é puro magnetismo.",
          ar: "ممثل طفل صيني سابق من غوانغتشو في وحدة الأداء في سفنتين. يشتهر بدمج رقص البي-بوينغ مع الفنون القتالية، ويقود القاعدة الجماهيرية الصينية بتباين جذاب بين شخصيته الهادئة وأدائه القوي.",
          th: "อดีตนักแสดงเด็กชาวจีนจากกวางโจวในหน่วยเพอร์ฟอร์แมนซ์ของ SEVENTEEN มีชื่อเสียงจากการผสมผสานบีบอยและการต่อสู้ เขาเป็นผู้นำแฟนคลับชาวจีนด้วยเสน่ห์ของความแตกต่างระหว่างชีวิตประจำวันที่เงียบสงบกับการแสดงที่ทรงพลังบนเวที",
          vi: "Cựu diễn viên nhí người Trung Quốc sinh ra tại Quảng Châu, thuộc Performance Team của SEVENTEEN. Nổi tiếng với việc kết hợp B-boying và võ thuật, anh ấy dẫn đầu lượng fan hâm mộ tại Trung Quốc với sự tương phản đầy lôi cuốn giữa đời thường và trên sân khấu.",
          ru: "Бывший китайский актер-ребенок из Гуанчжоу, участник перформанс-группы SEVENTEEN. Известен сочетанием брейк-данса и боевых искусств, он лидирует в китайском фандоме благодаря магнетическому контрасту между повседневной жизнью и сценой."
        },
        tmi: {
          ko: [
            "중국 광저우 출신으로, 데뷔 전 중국 드라마에 출연한 아역 배우 경력이 있다.",
            "중국어·광둥어·한국어·영어를 구사하는 멀티링구얼로, 세븐틴의 중화권 팬 소통 창구 역할을 한다.",
            "무술 실력이 뛰어나 퍼포먼스팀 안무에 무술 요소를 자연스럽게 녹여내는 것으로 유명하다.",
            "중국 팬덤 규모가 세븐틴 내에서 독보적으로 커, 웨이보 팔로워가 수천만 명에 달한다.",
            "조용한 성격이지만 무대에서는 완전히 다른 사람이 되는 '무대 체인지' 캐릭터로 유명하다."
          ],
          en: [
            "From Guangzhou, China — was a child actor in Chinese dramas before joining SEVENTEEN.",
            "Speaks Mandarin, Cantonese, Korean, and English — serves as the key bridge to Chinese-speaking fans.",
            "Known for naturally incorporating martial arts techniques into Performance Unit choreography.",
            "Has an unrivaled Chinese fanbase within SEVENTEEN — his Weibo followers number in the tens of millions.",
            "Quiet off-stage but transforms completely during performances — the classic 'stage switch' idol."
          ],
          ja: [
            "中国・広州出身で、デビュー前に中国のドラマに出演した子役としての経歴がある。",
            "中国語、広東語、韓国語、英語を話すマルチリンガルで、セブンティーンの中華圏ファンとの架け橋となっている。",
            "武術の実力に優れており、パフォーマンスチームの振り付け에武術の要素を自然に取り入れることで有名だ。",
            "中国でのファン規模がセブンティーン内で圧倒的に大きく、Weiboのフォロワー数は数千万人に達する。",
            "静かな性格だが、ステージの上では完全に別人のようになる「ステージスイッチ」キャラクターとして有名だ。"
          ],
          zh: [
            "来自中国广州，出道前曾出演过中国电视剧，有童星背景。",
            "精通普通话、粤语、韩语和英语，是SEVENTEEN与华语圈粉丝沟通的重要窗口。",
            "武术功底深厚，以在表演分队的编舞中自然融入武术元素而闻名。",
            "在中国拥有极大的粉丝规模，微博粉丝数达数千万，在成员中出类拔萃。",
            "性格安静，但在舞台上会判若两人，以“舞台反差”魅力著称。"
          ],
          es: [
            "De Guangzhou, China; fue actor infantil en dramas chinos antes de unirse a SEVENTEEN.",
            "Habla mandarín, cantonés, coreano e inglés; sirve como el puente clave para los fans de habla china.",
            "Conocido por incorporar naturalmente técnicas de artes marciales en las coreografías de la Unidad de Performance.",
            "Tiene una base de fans china inigualable dentro de SEVENTEEN; sus seguidores en Weibo se cuentan por decenas de millones.",
            "Tranquilo fuera del escenario, pero se transforma completamente durante las actuaciones; el clásico ídolo con 'cambio de escenario'."
          ],
          id: [
            "Berasal dari Guangzhou, Tiongkok — adalah aktor cilik dalam drama Tiongkok sebelum bergabung dengan SEVENTEEN.",
            "Berbicara bahasa Mandarin, Kanton, Korea, dan Inggris — berfungsi sebagai jembatan utama bagi penggemar berbahasa Mandarin.",
            "Dikenal karena secara alami memasukkan teknik seni bela diri ke dalam koreografi Unit Performa.",
            "Memiliki basis penggemar Tiongkok yang tak tertandingi di SEVENTEEN — pengikut Weibo-nya mencapai puluhan juta.",
            "Tenang di luar panggung tetapi berubah total selama pertunjukan — idola 'stage switch' yang klasik."
          ],
          fr: [
            "Originaire de Guangzhou, en Chine — était enfant acteur dans des drames chinois avant de rejoindre SEVENTEEN.",
            "Parle mandarin, cantonais, coréen et anglais — sert de pont essentiel avec les fans sinophones.",
            "Connu pour incorporer naturellement des techniques d'arts martiaux dans les chorégraphies de l'unité Performance.",
            "Possède une base de fans chinoise inégalée au sein de SEVENTEEN — ses abonnés Weibo se comptent par dizaines de millions.",
            "Calme hors scène mais se transforme complètement lors des performances — l'idole classique au 'double visage'."
          ],
          hi: [
            "ग्वांगझू, चीन से — SEVENTEEN में शामिल होने से पहले चीनी नाटकों में एक बाल कलाकार थे।",
            "मंदारिन, कैंटोनीज़, कोरियाई और अंग्रेज़ी बोलते हैं — चीनी बोलने वाले प्रशंसकों के लिए मुख्य सेतु का काम करते हैं।",
            "परफॉर्में스 यूनिट कोरियोग्राफी में स्वाभाविक रूप से मार्शल आर्ट तकनीकों को शामिल करने के लिए जाने जाते हैं।",
            "SEVENTEEN में उनका चीनी प्रशंसक आधार बेजोड़ है — उनके वीबो फॉलोअर्स की संख्या करोड़ों में है।",
            "ऑफ-स्टेज शांत रहते हैं लेकिन प्रदर्शन के दौरान पूरी तरह से बदल जाते हैं — क्लासिक 'स्टेज स्विच' आइडल।"
          ],
          pt: [
            "De Guangzhou, China — foi ator mirim em dramas chineses antes de se juntar ao SEVENTEEN.",
            "Fala mandarim, cantonês, coreano e inglês — serve como a ponte principal para os fãs que falam chinês.",
            "Conhecido por incorporar naturalmente técnicas de artes marciais nas coreografias da Unidade de Performance.",
            "Tem uma base de fãs chinesa inigualável no SEVENTEEN — seus seguidores no Weibo somam dezenas de milhões.",
            "Tranquilo fora do palco, mas se transforma completamente durante as apresentações — o clássico ídolo com 'troca de palco'."
          ],
          ar: [
            "من غوانغتشو، الصين - كان ممثلاً طفلاً في الدراما الصينية قبل الانضمام إلى سفنتين.",
            "يتحدث الماندرين والكانتونية والكورية والإنجليزية - يعمل كجسر تواصل رئيسي مع المعجبين الناطقين بالصينية.",
            "يشتهر بدمج تقنيات الفنون القتالية بشكل طبيعي في تصميم رقصات وحدة الأداء.",
            "لديه قاعدة جماهيرية صينية لا تضاهى داخل سفنتين - يصل عدد متابعيه على ويبو إلى عشرات الملايين.",
            "هادئ خارج المسرح ولكنه يتغير تماماً أثناء العروض - شخصية 'تحول المسرح' الكلاسيكية."
          ],
          th: [
            "มาจากกวางโจว ประเทศจีน — เคยเป็นนักแสดงเด็กในละครจีนก่อนที่จะเข้าร่วม SEVENTEEN",
            "พูดภาษาจีนกลาง, กวางตุ้ง, เกาหลี และอังกฤษ — ทำหน้าที่เป็นสะพานเชื่อมสำคัญกับแฟนๆ ที่พูดภาษาจีน",
            "มีชื่อเสียงจากการนำเทคนิคศิลปะการต่อสู้มาผสมผสานในท่าเต้นของหน่วยเพอร์ฟอร์แมนซ์ได้อย่างเป็นธรรมชาติ",
            "มีฐานแฟนคลับชาวจีนที่ใหญ่ที่สุดใน SEVENTEEN — ผู้ติดตาม Weibo ของเขามีจำนวนหลายสิบล้านคน",
            "เป็นคนเงียบๆ เมื่ออยู่นอกเวที แต่จะเปลี่ยนไปอย่างสิ้นเชิงเมื่อทำการแสดง — เป็นไอดอลที่มี 'สวิตช์บนเวที' อันเป็นเอกลักษณ์"
          ],
          vi: [
            "Đến từ Quảng Châu, Trung Quốc — từng là diễn viên nhí trong các bộ phim truyền hình Trung Quốc trước khi gia nhập SEVENTEEN.",
            "Nói được tiếng Quan Thoại, tiếng Quảng Đông, tiếng Hàn và tiếng Anh — đóng vai trò là cầu nối quan trọng với người hâm mộ nói tiếng Trung.",
            "Nổi tiếng với việc lồng ghép khéo léo các kỹ thuật võ thuật vào vũ đạo của Performance Unit.",
            "Có lượng fan hâm mộ tại Trung Quốc vô cùng lớn trong SEVENTEEN — số lượng người theo dõi trên Weibo lên tới hàng chục triệu.",
            "Trầm tính ngoài đời nhưng biến đổi hoàn toàn trên sân khấu — hình mẫu idol 'thay đổi 180 độ' điển hình."
          ],
          ru: [
            "Из Гуанчжоу, Китай — был актером-ребенком в китайских дорамах до присоединения к SEVENTEEN.",
            "Говорит на мандаринском, кантонском, корейском и английском языках — служит главным мостом для китайскоязычных фанатов.",
            "Известен тем, что естественно включает приемы боевых искусств в хореографию перформанс-группы.",
            "Обладает непревзойденной китайской фан-базой в SEVENTEEN — число его подписчиков в Weibo исчисляется десятками миллионов.",
            "Спокоен вне сцены, но полностью преображается во время выступлений — классический айдол с «переключателем» на сцене."
          ]
        },
        socials: {}
      },
      {
        id: "hoshi",
        name: { ko: "호시", en: "Hoshi", ja: "ホシ", zh: "权顺荣", es: "Hoshi", id: "Hoshi", fr: "Hoshi", hi: "होशी", pt: "Hoshi", ar: "هوشي", th: "โฮชิ", vi: "Hoshi", ru: "Хоши" },
        role: { ko: "퍼포먼스팀 리더, 댄서", en: "Performance Unit Leader, Dancer", ja: "パフォーマンスチームリーダー、ダンサー", zh: "表演分队队长、舞者", es: "Líder de la Unidad de Performance, Bailarín", id: "Pemimpin Unit Performa, Penari", fr: "Leader de l'unité Performance, Danseur", hi: "परफॉर्मेंस यूनिट लीडर, डांसर", pt: "Líder da Unidade de Performance, Dançarino", ar: "قائد وحدة الأداء، راقص", th: "หัวหน้าหน่วยเพอร์ฟอร์แมนซ์, นักเต้น", vi: "Trưởng nhóm Performance Unit, Vũ công", ru: "Лидер перформанс-группы, танцор" },
        birth: "1996.06.15",
        bloodType: "O",
        mbti: "ENFP",
        height: "177cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini", ja: "双子座", zh: "双子座", es: "Géminis", id: "Gemini", fr: "Gémeaux", hi: "मिथुन", pt: "Gêmeos", ar: "الجوزاء", th: "เมถุน", vi: "Song Tử", ru: "Близнецы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Hoshi+Kwon+Soonyoung+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "세븐틴 안무 대부분을 만드는 퍼포먼스팀 리더. 베스트 안무상 3회 수상의 '안무의 신'으로, 고양이 눈매와 무한한 에너지가 트레이드마크다.",
          en: "Performance Team leader who creates most of SEVENTEEN's choreography. A three-time Best Choreography Award winner — nicknamed 'god of dance' for his limitless energy and tiger-like eyes.",
          ja: "セブンティーンの振り付けの大部分を手がけるパフォーマンスチームのリーダー。ベスト振り付け賞を3回受賞した「ダンスの神」で、猫のような目元と無限のエネルギーがトレードマークだ。",
          zh: "SEVENTEEN表演分队队长，负责创作大部分编舞。曾三次获得最佳编舞奖，被誉为“编舞之神”，猫咪般的眼神和无限的能量是他的标志。",
          es: "Líder del Equipo de Performance que crea la mayor parte de las coreografías de SEVENTEEN. Ganador tres veces del Premio a la Mejor Coreografía; apodado 'dios de la danza' por su energía ilimitada y ojos de tigre.",
          id: "Pemimpin Tim Performa yang menciptakan sebagian besar koreografi SEVENTEEN. Pemenang Penghargaan Koreografi Terbaik tiga kali — dijuluki 'dewa tari' karena energinya yang tak terbatas dan mata seperti harimau.",
          fr: "Leader de l'équipe Performance qui crée la plupart des chorégraphies de SEVENTEEN. Trois fois lauréat du prix de la meilleure chorégraphie — surnommé le 'dieu de la danse' pour son énergie sans limite et ses yeux de tigre.",
          hi: "परफॉर्मेंस टीम के लीडर जो SEVENTEEN की अधिकांश कोरियोग्राफी बनाते हैं। तीन बार सर्वश्रेष्ठ कोरियोग्राफी पुरस्कार विजेता — अपनी असीम ऊर्जा और बाघ जैसी आंखों के लिए 'डांस के भगवान' के रूप में जाने जाते हैं।",
          pt: "Líder da Unidade de Performance que cria a maior parte das coreografias do SEVENTEEN. Vencedor de três prêmios de Melhor Coreografia — apelidado de 'deus da dança' por sua energia ilimitada e olhos de tigre.",
          ar: "قائد وحدة الأداء الذي يبتكر معظم رقصات سفنتين. فاز بجائزة أفضل تصميم رقصات ثلاث مرات - ويلقب بـ 'إله الرقص' لطاقته اللامحدودة وعينيه اللتين تشبهان عيني النمر.",
          th: "หัวหน้าหน่วยเพอร์ฟอร์แมนซ์ผู้สร้างสรรค์ท่าเต้นส่วนใหญ่ของ SEVENTEEN เจ้าของรางวัลท่าเต้นยอดเยี่ยม 3 สมัย ผู้ได้รับฉายา 'พระเจ้าแห่งท่าเต้น' โดยมีดวงตาเฉี่ยวและพลังที่ไร้ขีดจำกัดเป็นเอกลักษณ์",
          vi: "Trưởng nhóm Performance Team, người sáng tạo hầu hết các vũ đạo của SEVENTEEN. Từng 3 lần giành giải Vũ đạo xuất sắc nhất — được mệnh danh là 'vị thần vũ đạo' nhờ năng lượng vô hạn và đôi mắt sắc sảo như hổ.",
          ru: "Лидер перформанс-группы, создающий большую часть хореографии SEVENTEEN. Трехкратный обладатель награды за лучшую хореографию — прозван «богом танца» за свою безграничную энергию и тигриный взгляд."
        },
        tmi: {
          ko: [
            "세븐틴 안무의 대부분을 직접 만드는 퍼포먼스팀 리더로, '안무의 신'이라 불린다.",
            "고양이 눈매로 유명해 팬들에게 '호랑이'라는 별명이 있으며, 무대에서 눈빛이 특히 강렬하다.",
            "어린 시절부터 춤에 진심이었으며, 초등학교 때부터 댄스 학원을 다닌 것으로 알려졌다.",
            "2025 베스트 안무상 수상 후 '세 번 받은 건 처음'이라며 눈물을 보인 영상이 화제가 됐다.",
            "에너지가 넘쳐 촬영 현장에서 혼자 춤 연습하는 모습이 자주 목격되는 '춤 중독자'다."
          ],
          en: [
            "As Performance Unit leader, he creates most of SEVENTEEN's choreography — called 'god of dance'.",
            "Famous for his cat-like eyes, earning the nickname 'tiger' — his stage gaze is especially intense.",
            "Was passionate about dance since childhood, attending dance academies from elementary school.",
            "A video of him tearing up after winning his third Best Choreography Award went viral — 'first time getting it three times'.",
            "A 'dance addict' frequently spotted practicing alone on set — his energy is limitless."
          ],
          ja: [
            "セブンティーンの振り付けの大部分を自ら手がけるパフォーマンスチームのリーダーで、「ダンスの神」と呼ばれている。",
            "猫のような目元で有名で、ファンからは「トラ」というあだ名で親しまれており、ステージでの眼差しは特に強烈だ。",
            "幼い頃からダンスに情熱を注いでおり、小学校の頃からダンススクールに通っていたことが知られている。",
            "2025年のベスト振り付け賞受賞後、「3回ももらったのは初めて」と涙を見せた動画が話題になった。",
            "エネルギーに溢れ、撮影現場で一人でダンスの練習をしている姿が頻繁에目撃される「ダンス中毒者」だ。"
          ],
          zh: [
            "作为表演分队队长，亲自创作了SEVENTEEN的大部分编舞，被称为“编舞之神”。",
            "以猫咪般的眼神著称，被粉丝亲切地称为“老虎”，舞台上的眼神尤其强烈。",
            "从小就对舞蹈充满热情，据说从小学开始就上舞蹈学院。",
            "在获得2025年最佳编舞奖后，流泪表示“这是第一次拿三次奖”的视频成为了热门话题。",
            "精力充沛，经常被发现在拍摄现场独自练习舞蹈，是个不折不扣的“舞蹈痴”。"
          ],
          es: [
            "Como líder de la Unidad de Performance, crea la mayor parte de las coreografías de SEVENTEEN; llamado el 'dios de la danza'.",
            "Famoso por sus ojos felinos, ganándose el apodo de 'tigre'; su mirada en el escenario es especialmente intensa.",
            "Apasionado por el baile desde la infancia, asistió a academias de baile desde la escuela primaria.",
            "Un video suyo llorando tras ganar su tercer premio a la Mejor Coreografía se volvió viral: 'es la primera vez que lo recibo tres veces'.",
            "Un 'adicto al baile' visto con frecuencia practicando solo en el set; su energía es ilimitada."
          ],
          id: [
            "Sebagai pemimpin Unit Performa, ia menciptakan sebagian besar koreografi SEVENTEEN — dijuluki 'dewa tari'.",
            "Terkenal dengan matanya yang seperti kucing, mendapatkan julukan 'harimau' — tatapan panggungnya sangat intens.",
            "Sangat menyukai tari sejak kecil, mengikuti akademi tari sejak sekolah dasar.",
            "Video dirinya menangis setelah memenangkan Penghargaan Koreografi Terbaik ketiganya menjadi viral — 'pertama kalinya mendapatkannya tiga kali'.",
            "Seorang 'pecandu tari' yang sering terlihat berlatih sendirian di lokasi syuting — energinya tidak terbatas."
          ],
          fr: [
            "En tant que leader de l'unité Performance, il crée la plupart des chorégraphies de SEVENTEEN — appelé le 'dieu de la danse'.",
            "Célèbre pour ses yeux de chat, ce qui lui vaut le surnom de 'tigre' — son regard sur scène est particulièrement intense.",
            "Passionné de danse depuis l'enfance, il a fréquenté des académies de danse dès l'école primaire.",
            "Une vidéo de lui en larmes après avoir remporté son troisième prix de la meilleure chorégraphie est devenue virale — 'première fois que je le reçois trois fois'.",
            "Un 'accro à la danse' fréquemment aperçu en train de s'entraîner seul sur le plateau — son énergie est illimitée."
          ],
          hi: [
            "परफॉर्मेंस यूनिट लीडर के रूप में, वे SEVENTEEN की अधिकांश कोरियोग्राफी बनाते हैं — उन्हें 'डांस के भगवान' कहा जाता है।",
            "अपनी बिल्ली जैसी आंखों के लिए प्रसिद्ध हैं, जिससे उन्हें 'बाघ' उपनाम मिला है — उनका स्टेज गेज़ विशेष रूप से तीव्र होता है।",
            "बचपन से ही नृत्य के प्रति उत्साही थे, प्राथमिक विद्यालय से ही नृत्य अकादमियों में जाते थे।",
            "अपना तीसरा सर्वश्रेष्ठ कोरियोग्राफी पुरस्कार जीतने के बाद उनके रोने का एक वीडियो वायरल हुआ — 'पहली बार इसे तीन बार प्राप्त किया'।" ,
            "एक 'नृत्य के प्रति जुनूनी' व्यक्ति जिन्हें अक्सर सेट पर अकेले अभ्यास करते देखा जाता है — उनकी ऊर्जा असीम है।"
          ],
          pt: [
            "Como líder da Unidade de Performance, ele cria a maior parte das coreografías do SEVENTEEN — chamado de 'deus da dança'.",
            "Famoso por seus olhos de gato, ganhando o apelido de 'tigre' — seu olhar no palco é especialmente intenso.",
            "Apaixonado por dança desde a infância, frequentou academias de dança desde a escola primária.",
            "Um vídeo dele chorando após ganhar seu terceiro prêmio de Melhor Coreografia se tornou viral — 'primeira vez ganhando três vezes'.",
            "Um 'viciado em dança' frequentemente visto praticando sozinho no set — sua energia é ilimitada."
          ],
          ar: [
            "بصفتة قائداً لوحدة الأداء، يبتكر معظم رقصات سفنتين - ويسمى 'إله الرقص'.",
            "يشتهر بعينيه اللتين تشبهان عيني القطة، مما منحه لقب 'النمر' - نظرته على المسرح قوية بشكل خاصة.",
            "كان شغوفاً بالرقص منذ طفولته، حيث التحق بأكاديميات الرقص منذ المدرسة الابتدائية.",
            "انتشر مقطع فيديو له وهو يبكي بعد فوزه بجائزة أفضل تصميم رقصات للمرة الثالثة - 'المرة الأولى التي أحصل فيها عليها ثلاث مرات'.",
            "إنه 'مدمن رقص' يُرى كثيراً وهو يتمرن بمفرده في موقع التصوير - طากته لا حدود لها."
          ],
          th: [
            "ในฐานะหัวหน้าหน่วยเพอร์ฟอร์แมนซ์ เขาเป็นผู้สร้างสรรค์ท่าเต้นส่วนใหญ่ของ SEVENTEEN จนถูกเรียกว่า 'พระเจ้าแห่งท่าเต้น'",
            "โด่งดังจากดวงตาที่เหมือนแมว ทำให้ได้รับฉายาว่า 'เสือ' — สายตาบนเวทีของเขานั้นรุนแรงเป็นพิเศษ",
            "หลงใหลในการเต้นมาตั้งแต่เด็ก โดยเข้าเรียนโรงเรียนสอนเต้นตั้งแต่อยู่ชั้นประถมศึกษา",
            "วิดีโอที่เขาร้องไห้หลังจากคว้ารางวัลท่าเต้นยอดเยี่ยมเป็นสมัยที่ 3 กลายเป็นไวรัล — 'เป็นครั้งแรกที่ได้รับรางวัลนี้ถึง 3 ครั้ง'",
            "เป็น 'คนเสพติดการเต้น' ที่มักจะถูกพบเห็นว่าฝึกซ้อมอยู่คนเดียวในกองถ่าย — พลังของเขานั้นไร้ขีดจำกัด"
          ],
          vi: [
            "Với tư cách là trưởng nhóm Performance Unit, anh ấy đã tạo ra hầu hết các vũ đạo của SEVENTEEN — được gọi là 'vị thần vũ đạo'.",
            "Nổi tiếng với đôi mắt mèo, anh ấy có biệt danh là 'hổ' — ánh mắt trên sân khấu của anh ấy đặc biệt mãnh liệt.",
            "Đam mê khiêu vũ từ nhỏ, từng theo học các học viện khiêu vũ từ khi còn học tiểu học.",
            "Đoạn video anh ấy bật khóc sau khi giành giải Vũ đạo xuất sắc nhất lần thứ ba đã gây sốt — 'lần đầu tiên nhận được giải thưởng này ba lần'.",
            "Một người 'nghiện khiêu vũ' thường xuyên bị bắt gặp đang tập luyện một mình trên trường quay — năng lượng của anh ấy là vô hạn."
          ],
          ru: [
            "Как лидер перформанс-группы, он создает большую часть хореографии SEVENTEEN — его называют «богом танца».",
            "Известен своими кошачьими глазами, за что получил прозвище «тигр» — его взгляд на сцене особенно интенсивен.",
            "С детства увлекался танцами, посещал танцевальные академии еще в начальной школе.",
            "Видео, на котором он плачет после получения третьей награды за лучшую хореографию, стало вирусным — «впервые получаю ее трижды».",
            "«Танцевальный маньяк», которого часто видят тренирующимся в одиночку на съемочной площадке — его энергия безгранична."
          ]
        },
        socials: {}
      },
      {
        id: "wonwoo",
        name: { ko: "원우", en: "Wonwoo", ja: "ウォヌ", zh: "全圆佑", es: "Wonwoo", id: "Wonwoo", fr: "Wonwoo", hi: "वोनवू", pt: "Wonwoo", ar: "وونوو", th: "วอนวู", vi: "Wonwoo", ru: "Вону" },
        role: { ko: "힙합팀, 래퍼", en: "Hip-hop Unit, Rapper", ja: "ヒップホップチーム、ラッパー", zh: "嘻哈分队，说唱歌手", es: "Unidad de Hip-hop, Rapero", id: "Unit Hip-hop, Rapper", fr: "Unité Hip-hop, Rappeur", hi: "हिप-हॉप यूनिट, रैपर", pt: "Unidade Hip-hop, Rapper", ar: "وحدة الهيب هوب، رابر", th: "ฮิปฮอปทีม, แร็ปเปอร์", vi: "Nhóm Hip-hop, Rapper", ru: "Хип-хоп группа, рэпер" },
        birth: "1996.07.17",
        bloodType: "A",
        mbti: "INFP",
        height: "182cm",
        zodiac: { ko: "게자리", en: "Cancer", ja: "かに座", zh: "巨蟹座", es: "Cáncer", id: "Cancer", fr: "Cancer", hi: "कर्क", pt: "Câncer", ar: "السرطان", th: "ราศีกรกฎ", vi: "Cự Giải", ru: "Рак" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Wonwoo+Jeon+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "세븐틴 최장신의 독서광 래퍼. 저음 보이스 ASMR이 폭발적 반응을 얻었으며, '책 원우'라는 별명처럼 팬 사인회에서도 책을 놓지 않는다.",
          en: "SEVENTEEN's tallest member and bookworm rapper. His deep-voice ASMR sparked massive fan reactions — and as 'book Wonwoo', he literally brings books to fan sign events.",
          ja: "SEVENTEENで最も背が高く、読書好きのラッパー。低音ボイスのASMRが爆発的な反応を呼び、「読書家ウォヌ」というあだ名の通りファンサイン会でも本を離さない。",
          zh: "SEVENTEEN最高挑的爱读书的说唱歌手。他的低音ASMR获得了热烈反响，正如“书呆子圆佑”的绰号一样，他在签售会上也书不离手。",
          es: "El rapero más alto de SEVENTEEN y un amante de la lectura. Su voz profunda en ASMR tuvo una reacción explosiva, y como su apodo 'Book Wonwoo', literalmente lleva libros a las firmas de autógrafos.",
          id: "Rapper tertinggi SEVENTEEN dan seorang kutu buku. ASMR suara rendahnya mendapat reaksi luar biasa, dan seperti julukannya 'Book Wonwoo', dia tidak pernah lepas dari buku bahkan di acara fansign.",
          fr: "Le rappeur le plus grand de SEVENTEEN et un mordu de lecture. Son ASMR à voix basse a suscité des réactions massives — et comme son surnom 'Book Wonwoo', il apporte littéralement des livres aux séances de dédicaces.",
          hi: "सेवेनटीन के सबसे लंबे सदस्य और किताबी कीड़ा रैपर। उनके गहरी आवाज़ वाले ASMR को जबरदस्त प्रतिक्रिया मिली — और 'बुक वोनवू' उपनाम की तरह, वे सचमुच फैन साइन इवेंट्स में किताबें लाते हैं।",
          pt: "O rapper mais alto do SEVENTEEN e um amante de livros. Seu ASMR de voz profunda teve uma reação explosiva e, como seu apelido 'Book Wonwoo', ele literalmente leva livros para as sessões de autógrafos.",
          ar: "مغني الراب الأطول في سفنتين ومحب للقراءة. أثار الـ ASMR بصوته العميق ردود فعل هائلة - وكما يلقب بـ 'وونوو الكتاب'، فهو يحضر الكتب معه حرفياً إلى جلسات توقيع المعجبين.",
          th: "แร็ปเปอร์ที่ตัวสูงที่สุดใน SEVENTEEN และเป็นหนอนหนังสือ ASMR เสียงต่ำของเขาได้รับกระแสตอบรับอย่างล้นหลาม และสมกับฉายา 'วอนวูนักอ่าน' เขามักจะถือหนังสือติดตัวไปในงานแจกลายเซ็นเสมอ",
          vi: "Rapper cao nhất SEVENTEEN và là một người nghiện đọc sách. ASMR giọng trầm của anh đã nhận được phản ứng bùng nổ, và đúng như biệt danh 'Wonwoo sách', anh ấy không bao giờ rời cuốn sách ngay cả trong các buổi ký tặng fan.",
          ru: "Самый высокий участник SEVENTEEN и рэпер-книголюб. Его ASMR с низким голосом вызвал бурную реакцию, и, оправдывая прозвище «Книжный Вону», он буквально не расстается с книгами даже на фансайнах."
        },
        tmi: {
          ko: [
            "세븐틴 내에서 가장 키가 크고 분위기 있는 외모로 '남자 중의 남자' 이미지를 갖고 있다.",
            "독서 마니아로, 팬 사인회에서 항상 책을 들고 오는 모습이 포착돼 '책 원우'로 유명하다.",
            "저음의 목소리가 인상적인 래퍼로, ASMR 영상 출연 시 청취자 반응이 폭발적이었다.",
            "멤버 우지와 절친한 사이로 '원지'라는 CP 이름이 팬들 사이에서 유명하다.",
            "건강 문제로 잠시 활동을 중단한 적이 있으며, 완벽히 회복해 컴백한 사실이 팬들에게 감동을 줬다."
          ],
          en: [
            "The tallest member with the most brooding image — considered the 'man among men' in SEVENTEEN.",
            "A devoted bookworm who brings books to fan sign events — known as 'book Wonwoo'.",
            "His deep voice as a rapper was explosive in ASMR content — listener reactions went viral.",
            "Closest friends with Woozi — their 'Wonzi' pairing name is iconic in the fandom.",
            "Took a brief hiatus due to health issues but made a full comeback — a deeply moving moment for fans."
          ],
          ja: [
            "SEVENTEENの中で最も背が高く、クールな外見で「男の中の男」というイメージを持っている。",
            "読書マニアで、ファンサイン会にいつも本を持ってくる姿が捉えられ「読書家ウォヌ」として有名だ。",
            "低音ボイスが印象的なラッパーで、ASMR映像に出演した際のリスナーの反応は爆発的だった。",
            "メンバーのウジと大の仲良しで、「ウォンジ」というカップリング名がファンの間で有名だ。",
            "健康上の理由で一時活動を休止したことがあるが、完全に回復して復帰した事実はファンに大きな感動を与えた。"
          ],
          zh: [
            "在SEVENTEEN中身材最高挑，凭借有氛围感的外貌拥有“男人中的男人”的形象。",
            "是个读书爱好者，经常被拍到在签售会上带着书，因此以“书呆子圆佑”闻名。",
            "是一位低音给人留下深刻印象的说唱歌手，在出演ASMR视频时观众反应非常热烈。",
            "与成员WOOZI关系非常好，他们的CP名“圆勋”在粉丝中非常有名。",
            "曾因健康问题暂时停止活动，后来完全康复并回归，这一事实让粉丝们非常感动。"
          ],
          es: [
            "Es el miembro más alto de SEVENTEEN y tiene una imagen de 'hombre entre hombres' por su apariencia melancólica.",
            "Es un amante de la lectura y es famoso como 'Book Wonwoo' por traer siempre libros a las firmas de autógrafos.",
            "Como rapero con una voz profunda, su aparición en videos de ASMR tuvo una respuesta explosiva de los oyentes.",
            "Es muy cercano al miembro Woozi, y el nombre de su pareja 'Wonzi' es icónico entre los fans.",
            "Se tomó un breve descanso debido a problemas de salud, y el hecho de que se recuperara por completo conmovió a los fans."
          ],
          id: [
            "Anggota tertinggi di SEVENTEEN dengan penampilan yang berkarisma, ia memiliki citra 'pria di antara para pria'.",
            "Seorang pecandu buku yang dikenal sebagai 'Book Wonwoo' karena selalu terlihat membawa buku ke acara fansign.",
            "Rapper dengan suara rendah yang mengesankan, reaksinya sangat luar biasa saat muncul di konten ASMR.",
            "Berteman sangat dekat dengan Woozi, dan nama pasangan mereka 'Wonzi' sangat ikonik di kalangan penggemar.",
            "Pernah hiatus sejenak karena masalah kesehatan, dan kembalinya setelah pulih sepenuhnya sangat menyentuh hati penggemar."
          ],
          fr: [
            "Le membre le plus grand de SEVENTEEN avec l'image la plus sombre — considéré comme l'homme parmi les hommes du groupe.",
            "Un mordu de lecture qui apporte toujours des livres aux séances de dédicaces — connu sous le nom de 'Book Wonwoo'.",
            "Rappeur à la voix profonde impressionnante, ses apparitions dans les vidéos ASMR ont suscité des réactions explosives.",
            "Très proche de Woozi, leur nom de duo 'Wonzi' est emblématique au sein du fandom.",
            "A dû interrompre ses activités pour des raisons de santé, son retour après un rétablissement complet a ému les fans."
          ],
          hi: [
            "सेवेनटीन में सबसे लंबे और गंभीर लुक वाले सदस्य — उन्हें ग्रुप में 'पुरुषों के बीच पुरुष' माना जाता है।",
            "एक समर्पित किताबी कीड़ा जो हमेशा फैन साइन इवेंट्स में किताबें लाते हैं — 'बुक वोनवू' के रूप में जाने जाते हैं।",
            "गहरी आवाज़ वाले प्रभावशाली रैपर, ASMR सामग्री में उनकी उपस्थिति पर श्रोताओं की प्रतिक्रिया जबरदस्त थी।",
            "सदस्य वूजी के सबसे करीबी दोस्त — उनका 'वोनजी' नाम प्रशंसकों के बीच काफी प्रसिद्ध है।",
            "स्वास्थ्य समस्याओं के कारण कुछ समय के लिए ब्रेक लिया था, और उनका पूरी तरह से ठीक होकर वापसी करना प्रशंसकों के लिए भावुक क्षण था।"
          ],
          pt: [
            "O membro mais alto do SEVENTEEN, com uma aparência melancólica, é considerado o 'homem entre os homens'.",
            "Um amante de livros que sempre leva obras para as sessões de autógrafos — conhecido como 'Book Wonwoo'.",
            "Rapper com uma voz profunda impressionante, sua participação em vídeos de ASMR teve uma resposta explosiva.",
            "Muito próximo do membro Woozi, e o nome da dupla 'Wonzi' é icônico entre os fãs.",
            "Fez uma breve pausa devido a problemas de saúde, e seu retorno após a recuperação total emocionou os fãs."
          ],
          ar: [
            "أطول عضو في سفنتين وذو مظهر جذاب، يمتلك صورة 'رجل بين الرجال'.",
            "محب للقراءة، يشتهر بـ 'وونوو الكتاب' لظهوره دائماً وهو يحمل كتاباً في جلسات توقيع المعجبين.",
            "مغني راب بصوت عميق ومميز، كانت ردود فعل المستمعين هائلة عند ظهوره في فيديوهات ASMR.",
            "صديق مقرب جداً من العضو ووزي، واسم الثنائي 'ووزي-وونوو' معروف جداً بين المعجبين.",
            "توقف عن الأنشطة لفترة بسبب مشاكل صحية، وحقيقة عودته بعد تعافيه تماماً أثرت في المعجبين بشكل كبير."
          ],
          th: [
            "สมาชิกที่ตัวสูงที่สุดใน SEVENTEEN และมีภาพลักษณ์ที่ดูขรึมและมีเสน่ห์ จนได้รับฉายา 'ลูกผู้ชายตัวจริง'.",
            "เป็นหนอนหนังสือตัวยง มักจะเห็นเขาถือหนังสือไปงานแจกลายเซ็นเสมอจนเป็นที่รู้จักในชื่อ 'วอนวูนักอ่าน'.",
            "แร็ปเปอร์ที่มีเสียงต่ำเป็นเอกลักษณ์ เมื่อเขาปรากฏตัวในวิดีโอ ASMR ก็ได้รับกระแสตอบรับอย่างถล่มทลาย.",
            "เป็นเพื่อนสนิทกับอูจี และชื่อคู่ 'วอนจี' ก็เป็นที่โด่งดังมากในหมู่แฟนคลับ.",
            "เคยพักงานชั่วคราวเนื่องจากปัญหาสุขภาพ และการที่เขากลับมาอย่างแข็งแรงสมบูรณ์ก็ทำให้แฟนๆ ซึ้งใจมาก."
          ],
          vi: [
            "Thành viên cao nhất SEVENTEEN với ngoại hình lãng tử, anh có hình ảnh 'người đàn ông trong số những người đàn ông'.",
            "Là một người nghiện sách, thường xuyên mang sách đến các buổi ký tặng nên nổi tiếng với biệt danh 'Wonwoo sách'.",
            "Rapper sở hữu giọng trầm đầy ấn tượng, phản ứng của người nghe vô cùng bùng nổ khi anh xuất hiện trong các video ASMR.",
            "Là bạn thân của thành viên Woozi, tên cặp đôi 'Wonzi' rất nổi tiếng trong cộng đồng fan.",
            "Từng tạm dừng hoạt động vì lý do sức khỏe, việc anh hồi phục hoàn toàn và trở lại đã mang đến nhiều cảm xúc cho người hâm mộ."
          ],
          ru: [
            "Самый высокий участник SEVENTEEN с мужественной внешностью, за что получил образ «мужчины среди мужчин».",
            "Заядлый книголюб, которого часто видят с книгой на фансайнах, из-за чего он прославился как «Книжный Вону».",
            "Рэпер с впечатляющим низким голосом, чьи появления в ASMR-видео вызывают восторженную реакцию слушателей.",
            "Близкий друг Уджи, их дуэт под названием «Вонджи» очень популярен среди фанатов.",
            "Был вынужден временно прекратить деятельность по состоянию здоровья, и его полное восстановление и возвращение тронуло сердца фанатов."
          ]
        },
        socials: {}
      },
      {
        id: "woozi",
        name: { ko: "우지", en: "Woozi", ja: "ウジ", zh: "WOOZI", es: "Woozi", id: "Woozi", fr: "Woozi", hi: "वूजी", pt: "Woozi", ar: "ووزي", th: "อูจี", vi: "Woozi", ru: "Уджи" },
        role: { ko: "보컬팀 리더, 메인 보컬, 프로듀서", en: "Vocal Unit Leader, Main Vocal, Producer", ja: "ボーカルチームリーダー、メインボーカル、プロデューサー", zh: "主唱分队队长，主唱，制作人", es: "Líder de la Unidad Vocal, Vocalista Principal, Productor", id: "Pemimpin Unit Vokal, Vokal Utama, Produser", fr: "Leader de l'unité vocale, chanteur principal, producteur", hi: "वोकल यूनिट लीडर, मुख्य गायक, निर्माता", pt: "Líder da Unidade Vocal, Vocalista Principal, Produtor", ar: "قائد وحدة الصوت، مغني رئيسي، منتج", th: "หัวหน้าทีมโวคอล, เมนโวคอล, โปรดิวเซอร์", vi: "Trưởng nhóm Vocal, Hát chính, Nhà sản xuất", ru: "Лидер вокальной группы, главный вокалист, продюсер" },
        birth: "1996.11.22",
        bloodType: "A",
        mbti: "INTJ",
        height: "164cm",
        zodiac: { ko: "전갈자리", en: "Scorpio", ja: "さそり座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "ราศีพิจิก", vi: "Thiên Yết", ru: "Скорпион" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Woozi+Lee+Jihoon+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "세븐틴 음악 80%를 직접 만드는 보컬팀 리더이자 천재 프로듀서. 164cm로 팬들을 놀라게 하지만 무대 위 존재감은 누구보다 압도적이다.",
          en: "Vocal Team leader and genius producer behind 80%+ of SEVENTEEN's music. His 164cm stature surprises newcomers, but his stage presence completely overpowers anyone around him.",
          ja: "SEVENTEENの音楽の80%以上を自ら手掛けるボーカルチームのリーダーであり、天才プロデューサー。164cmという小柄な体格で驚かれることもあるが、ステージ上の存在感は誰よりも圧倒的だ。",
          zh: "制作了SEVENTEEN 80%以上音乐的主唱分队队长兼天才制作人。虽然164cm的身高让很多人感到惊讶，但他在舞台上的存在感比任何人都强大。",
          es: "Líder de la Unidad Vocal y productor genio detrás de más del 80% de la música de SEVENTEEN. Su estatura de 164 cm sorprende a los recién llegados, pero su presencia en el escenario domina por completo a cualquiera.",
          id: "Pemimpin Unit Vokal dan produser jenius di balik 80%+ musik SEVENTEEN. Tinggi badannya yang 164 cm mengejutkan orang baru, tetapi kehadiran panggungnya benar-benar mendominasi siapa pun.",
          fr: "Leader de l'unité vocale et producteur de génie derrière plus de 80 % de la musique de SEVENTEEN. Sa taille de 164 cm surprend les nouveaux venus, mais sa présence sur scène surpasse celle de n'importe qui.",
          hi: "सेवेनटीन के 80% से अधिक संगीत के पीछे वोकल टीम लीडर और प्रतिभाशाली निर्माता। उनका 164 सेमी का कद नए लोगों को हैरान कर देता है, लेकिन उनका स्टेज प्रेजेंस किसी भी अन्य सदस्य से कहीं अधिक प्रभावशाली है।",
          pt: "Líder da Unidade Vocal e produtor gênio por trás de mais de 80% da música do SEVENTEEN. Sua estatura de 164 cm surpreende os novatos, mas sua presença de palco domina completamente qualquer um.",
          ar: "قائد وحدة الصوت والمنتج العبقري الذي يقف وراء أكثر من 80% من موسيقى سفنتين. يبلغ طوله 164 سم مما يفاجئ القادمين الجدد، لكن حضوره على المسرح طاغٍ بشكل يفوق الجميع.",
          th: "หัวหน้าทีมโวคอลและโปรดิวเซอร์อัจฉริยะที่ทำเพลงให้ SEVENTEEN กว่า 80% แม้ส่วนสูง 164 ซม. จะทำให้หลายคนประหลาดใจ แต่คาริสม่าบนเวทีของเขานั้นทรงพลังและโดดเด่นเหนือใคร",
          vi: "Trưởng nhóm Vocal và là nhà sản xuất thiên tài đứng sau hơn 80% âm nhạc của SEVENTEEN. Chiều cao 164cm của anh khiến nhiều người ngạc nhiên, nhưng sự hiện diện trên sân khấu của anh lại lấn át bất kỳ ai.",
          ru: "Лидер вокальной группы и гениальный продюсер, создающий более 80% музыки SEVENTEEN. Его рост 164 см удивляет новичков, но его присутствие на сцене подавляет любого другого."
        },
        tmi: {
          ko: [
            "세븐틴 음악의 80% 이상을 직접 작곡·편곡하는 그룹의 핵심 프로듀서로, K-Pop 역사상 손꼽히는 자체 제작 능력을 가졌다.",
            "작은 키(164cm)로 인해 처음 만나는 사람들이 깜짝 놀란다는 일화가 많지만, 무대 위에서는 전혀 그 아우라가 느껴지지 않는다.",
            "원래는 래퍼를 꿈꿨으나, 소속사의 제안으로 보컬로 전환한 것이 신의 한 수였다는 평가를 받는다.",
            "후배 그룹들의 곡도 프로듀싱하는 것으로 알려져 있어 'JYP의 박진영급'이라는 평가를 받는다.",
            "팬들 앞에서는 귀엽고 소심해 보이지만 스튜디오에서는 완전히 다른 집중력을 발휘하는 '스튜디오 몬스터'다."
          ],
          en: [
            "The core producer of SEVENTEEN, composing and arranging 80%+ of their music — considered one of K-pop's greatest self-producing artists.",
            "At 164cm, newcomers are always surprised — yet on stage, his presence dwarfs everyone around him.",
            "Originally dreamed of being a rapper, but the agency's push toward vocals turned out to be a stroke of genius.",
            "Reportedly produces for junior groups too — compared to JYP's Park Jinyoung for his industry influence.",
            "Seems shy and cute in front of fans, but transforms into a 'studio monster' with laser-focused intensity when producing."
          ],
          ja: [
            "SEVENTEENの音楽の80%以上を自ら作曲・編曲するグループの核となるプロデューサーで、K-POP史上屈指のセルフプロデュース能力を持っている。",
            "小柄な身長(164cm)のため、初めて会う人が驚くというエピソードが多いが、ステージ上ではそのオーラを全く感じさせない。",
            "元々はラッパーを夢見ていたが、事務所の提案でボーカルに転向したことが「神の一手」だったと評価されている。",
            "後輩グループの曲もプロデュースしていることで知られ、「JYPのパク・ジニョン級」という評価を受けている。",
            "ファンの前では可愛くて内気に見えるが、スタジオでは全く異なる集中力を発揮する「スタジオモンスター」だ。"
          ],
          zh: [
            "是亲自为SEVENTEEN创作和编曲80%以上音乐的核心制作人，拥有K-Pop历史上数一数二的自主制作能力。",
            "因为身材娇小(164cm)，有很多初次见面的人感到惊讶的轶事，但在舞台上完全感觉不到那种气场。",
            "原本梦想成为说唱歌手，但在公司的建议下转为歌手，被评价为“神来之笔”。",
            "据悉还为后辈团体制作歌曲，因此获得了“JYP朴振英级别”的评价。",
            "在粉丝面前看起来可爱又内向，但在录音室里却能发挥出完全不同的集中力，是“录音室怪物”。"
          ],
          es: [
            "Es el productor principal de SEVENTEEN, componiendo y arreglando más del 80% de su música; se le considera uno de los mejores artistas autoproducidos del K-pop.",
            "Debido a su baja estatura (164 cm), hay muchas anécdotas de personas que se sorprenden al conocerlo, pero en el escenario su aura es inmensa.",
            "Originalmente soñaba con ser rapero, pero cambiar a vocalista por sugerencia de la agencia se considera un golpe de genio.",
            "Se sabe que también produce canciones para grupos junior, por lo que se le compara con Park Jinyoung de JYP por su influencia.",
            "Frente a los fans parece lindo y tímido, pero en el estudio demuestra una concentración completamente diferente, siendo un 'monstruo del estudio'."
          ],
          id: [
            "Produser inti SEVENTEEN yang menggubah dan mengaransemen 80%+ musik mereka — dianggap sebagai salah satu artis 'self-producing' terbaik di K-pop.",
            "Karena tubuhnya yang mungil (164 cm), banyak orang terkejut saat pertama kali bertemu, namun di panggung auranya sangat luar biasa.",
            "Awalnya bermimpi menjadi rapper, tetapi beralih menjadi vokalis atas saran agensi yang ternyata merupakan keputusan yang sangat tepat.",
            "Diketahui juga memproduseri lagu untuk grup junior, sehingga ia mendapat julukan 'sekelas Park Jinyoung JYP'.",
            "Tampak imut dan pemalu di depan penggemar, tetapi di studio ia menunjukkan konsentrasi yang sangat berbeda, menjadi 'monster studio'."
          ],
          fr: [
            "Producteur central de SEVENTEEN, il compose et arrange plus de 80 % de leur musique — considéré comme l'un des plus grands artistes auto-produits de la K-pop.",
            "En raison de sa petite taille (164 cm), beaucoup sont surpris lors de leur première rencontre, mais sur scène, son aura est monumentale.",
            "Rêvait initialement de devenir rappeur, mais son passage au chant sur proposition de l'agence est considéré comme un coup de génie.",
            "Produit également pour des groupes juniors, ce qui lui vaut d'être comparé à Park Jinyoung de JYP pour son influence dans l'industrie.",
            "Paraît mignon et timide devant les fans, mais déploie une concentration redoutable en studio, tel un 'monstre de studio'."
          ],
          hi: [
            "सेवेनटीन के मुख्य निर्माता, जो उनके 80% से अधिक संगीत की रचना और व्यवस्था करते हैं — उन्हें के-पॉप के महानतम स्व-निर्माता कलाकारों में से एक माना जाता है।",
            "उनके छोटे कद (164 सेमी) के कारण, पहली बार मिलने वाले लोग अक्सर हैरान रह जाते हैं, लेकिन मंच पर उनका व्यक्तित्व सबको बौना कर देता है।",
            "मूल रूप से रैपर बनने का सपना देखा था, लेकिन एजेंसी के सुझाव पर गायक बनना एक मास्टरस्ट्रोक साबित हुआ।",
            "कहा जाता है कि वे जूनियर समूहों के लिए भी गाने तैयार करते हैं — उनके उद्योग प्रभाव के लिए उनकी तुलना जेवाईपी के पार्क जिनयॉन्ग से की जाती है।",
            "प्रशंसकों के सामने प्यारे और शर्मीले दिखते हैं, लेकिन स्टूडियो में वे लेजर जैसी एकाग्रता वाले 'स्टूडियो मॉन्स्टर' में बदल जाते हैं।"
          ],
          pt: [
            "O produtor principal do SEVENTEEN, compondo e arranjando mais de 80% de suas músicas — considerado um dos maiores artistas autoproduzidos do K-pop.",
            "Devido à sua baixa estatura (164 cm), há muitos relatos de pessoas que se surpreendem ao conhecê-lo, mas no palco sua presença é avassaladora.",
            "Originalmente sonhava em ser rapper, mas mudar para vocalista por sugestão da agência foi considerado uma jogada de mestre.",
            "Também produz músicas para grupos juniores, sendo comparado a Park Jinyoung da JYP por sua influência na indústria.",
            "Parece fofo e tímido na frente dos fãs, mas no estúdio demonstra uma concentração totalmente diferente, sendo um 'monstro do estúdio'."
          ],
          ar: [
            "المنتج الأساسي لفرقة سفنتين، حيث يقوم بتلحين وتوزيع أكثر من 80% من موسيقاهم - ويعتبر أحد أعظم الفنانين العصاميين في تاريخ الكي بوب.",
            "بسبب قصر قامته (164 سم)، هناك الكثير من القصص حول مفاجأة الناس عند رؤيته لأول مرة، لكن على المسرح لا يشعر أحد بذلك بسبب هالته القوية.",
            "كان يحلم في الأصل بأن يصبح مغني راب، لكن تحوله إلى الغناء بناءً على اقتراح الشركة كان قراراً عبقرياً.",
            "يُعرف بإنتاجه أغاني لفرق صاعدة أيضاً، مما يجعله يُقارن بـ 'بارك جين يونغ' صاحب شركة JYP لموهبته في الإنتاج.",
            "يبدو لطيفاً وخجولاً أمام المعجبين، لكنه في الاستوديو يظهر تركيزاً مختلفاً تماماً، حيث يلقب بـ 'وحش الاستوديو'."
          ],
          th: [
            "โปรดิวเซอร์หลักของ SEVENTEEN ผู้แต่งและเรียบเรียงเพลงกว่า 80% ของวง ถือเป็นหนึ่งในศิลปินที่ผลิตผลงานเองได้ดีที่สุดในประวัติศาสตร์ K-Pop.",
            "ด้วยส่วนสูงเพียง 164 ซม. ทำให้คนที่เจอเขาครั้งแรกมักจะตกใจ แต่บนเวทีเขากลับมีออร่าที่ทรงพลังจนมองข้ามเรื่องส่วนสูงไปได้เลย.",
            "เดิมทีเขาฝันอยากเป็นแร็ปเปอร์ แต่การเปลี่ยนมาเป็นสายโวคอลตามคำแนะนำของค่ายถือเป็น 'การตัดสินใจที่ยอดเยี่ยมที่สุด'.",
            "เขายังโปรดิวซ์เพลงให้วงรุ่นน้องด้วย จนได้รับการยกย่องว่ามีความสามารถระดับ 'พัคจินยอง แห่ง JYP'.",
            "ต่อหน้าแฟนคลับเขาอาจดูน่ารักและขี้อาย แต่ในสตูดิโอเขาจะเปลี่ยนเป็นคนที่มีสมาธิสูงมากจนได้ฉายา 'สัตว์ป่าในสตูดิโอ'."
          ],
          vi: [
            "Là nhà sản xuất nòng cốt của SEVENTEEN, trực tiếp sáng tác và phối khí hơn 80% âm nhạc của nhóm, sở hữu khả năng tự sản xuất hàng đầu lịch sử K-Pop.",
            "Do chiều cao khiêm tốn (164cm), có rất nhiều giai thoại về việc mọi người ngạc nhiên khi gặp lần đầu, nhưng trên sân khấu aura của anh vô cùng mạnh mẽ.",
            "Ban đầu từng mơ ước trở thành rapper, nhưng việc chuyển sang làm vocal theo gợi ý của công ty được đánh giá là một 'nước đi thiên tài'.",
            "Được biết đến là người sản xuất nhạc cho cả các nhóm hậu bối, anh được so sánh với Park Jinyoung của JYP về tầm ảnh hưởng.",
            "Trước mặt fan trông có vẻ đáng yêu và nhút nhát, nhưng trong studio anh lại thể hiện sự tập trung hoàn toàn khác biệt, là một 'quái vật phòng thu'."
          ],
          ru: [
            "Ключевой продюсер SEVENTEEN, который лично пишет и аранжирует более 80% их музыки — он обладает одними из лучших навыков самопродюсирования в истории K-Pop.",
            "Из-за небольшого роста (164 см) многие люди удивляются при первой встрече, но на сцене его аура настолько велика, что рост не имеет значения.",
            "Изначально мечтал стать рэпером, но решение компании перевести его в вокалисты оказалось «гениальным ходом».",
            "Известно, что он также продюсирует песни для молодых групп, за что его сравнивают с Пак Чинёном из JYP.",
            "Перед фанатами он кажется милым и застенчивым, но в студии проявляет совершенно иную концентрацию, за что его называют «студийным монстром»."
          ]
        },
        socials: {}
      },
      {
        id: "the8",
        name: { ko: "디에잇", en: "The8", ja: "ディエイト", zh: "徐明浩", es: "The8", id: "The8", fr: "The8", hi: "द8", pt: "The8", ar: "دي إيت", th: "ดิเอท", vi: "The8", ru: "Диэйт" },
        role: { ko: "퍼포먼스팀, 댄서, 보컬", en: "Performance Unit, Dancer, Vocal", ja: "パフォーマンスチーム、ダンサー、ボーカル", zh: "表演分队，舞者，歌手", es: "Unidad de Performance, Bailarín, Vocalista", id: "Unit Performa, Penari, Vokal", fr: "Unité de performance, danseur, chanteur", hi: "परफॉर्मेंस यूनिट, डांसर, वोकल", pt: "Unidade de Performance, Dançarino, Vocalista", ar: "وحدة الأداء، راقص، صوت", th: "ทีมเพอร์ฟอร์แมนซ์, แดนเซอร์, โวคอล", vi: "Nhóm Performance, Vũ công, Hát", ru: "Перформанс группа, танцор, вокалист" },
        birth: "1996.11.07",
        bloodType: "O",
        mbti: "INFP",
        height: "177cm",
        zodiac: { ko: "전갈자리", en: "Scorpio", ja: "さそり座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "ราศีพิจิก", vi: "Thiên Yết", ru: "Скорпион" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+The8+Xu+Minghao+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "비보잉 선수 출신의 퍼포먼스팀 댄서. 자체 안무 유튜브 1억 뷰를 달성했으며 중국 럭셔리 패션 앰배서더로도 활발히 활동하는 멀티 아티스트다.",
          en: "Performance Team dancer with a competitive B-boy background. His self-choreographed YouTube content surpassed 100M views, and he's an active ambassador for Chinese luxury fashion brands.",
          ja: "ブレイクダンス選手出身のパフォーマンスチームのダンサー。自作の振り付けYouTube動画は1億回再生を達成し、中国のラグジュアリーファッションアンバサダーとしても活躍するマルチアーティストだ。",
          zh: "B-boy选手出身的表演分队舞者。他的原创编舞YouTube视频播放量已突破1亿次，还是活跃在中国的奢侈时尚品牌大使，是一位多才多艺的艺术家。",
          es: "Bailarín de la Unidad de Performance con antecedentes competitivos en B-boy. Su contenido de coreografía propia en YouTube superó las 100 millones de visitas, y es un activo embajador de marcas de moda de lujo en China.",
          id: "Penari Unit Performa dengan latar belakang kompetisi B-boy. Konten koreografi buatannya di YouTube melampaui 100 juta penayangan, dan ia adalah duta aktif untuk merek fashion mewah Tiongkok.",
          fr: "Danseur de l'unité de performance avec un passé de B-boy en compétition. Son contenu chorégraphié sur YouTube a dépassé les 100 millions de vues, et il est un ambassadeur actif pour des marques de mode de luxe en Chine.",
          hi: "प्रतिस्पर्धी बी-बॉय पृष्ठभूमि के साथ परफॉर्मेंस टीम के डांसर। उनकी स्व-कोरियोग्राफ की गई YouTube सामग्री ने 100M से अधिक बार देखे जाने का आंकड़ा पार किया है, और वे चीनी लक्जरी फैशन ब्रांडों के एक सक्रिय एंबेसडर हैं।",
          pt: "Dançarino da Unidade de Performance com experiência em competições de B-boy. Seu conteúdo coreografado no YouTube ultrapassou 100 milhões de visualizações e ele é um embaixador ativo de marcas de moda de luzo na China.",
          ar: "راقص في وحدة الأداء بخلفية تنافسية في رقص الـ B-boy. تجاوز محتوى رقصاته من تصميمه الخاص على يوتيوب 100 مليون مشاهدة، وهو سفير نشط لماركات الأزياء الصينية الفاخرة.",
          th: "แดนเซอร์ทีมเพอร์ฟอร์แมนซ์ที่มีดีกรีเป็นนักเต้นบีบอย เนื้อหาท่าเต้นที่เขาคิดเองใน YouTube มียอดวิวทะลุ 100 ล้านครั้ง และเขายังเป็นแอมบาสเดอร์ให้กับแบรนด์แฟชั่นหรูในจีนอีกด้วย",
          vi: "Vũ công nhóm Performance với nền tảng là một vận động viên B-boy thi đấu. Nội dung vũ đạo tự dàn dựng trên YouTube của anh đã vượt qua 100 triệu lượt xem, và anh còn là đại sứ tích cực cho các thương hiệu thời trang xa xỉ tại Trung Quốc.",
          ru: "Танцор перформанс-группы с опытом участия в соревнованиях по би-боингу. Его авторская хореография на YouTube набрала более 100 миллионов просмотров, и он является активным амбассадором китайских люксовых модных брендов."
        },
        tmi: {
          ko: [
            "중국 출신으로 비보잉 선수 출신이며, 이 실력이 세븐틴 퍼포먼스팀의 수준을 한 단계 끌어올렸다.",
            "자체 안무 유튜브 영상이 1억 뷰를 넘길 정도로 댄서로서의 개인 역량이 독보적이다.",
            "패션 감각이 뛰어나 중국 럭셔리 패션 브랜드들의 앰배서더로 활발히 활동하고 있다.",
            "한국어를 완벽히 습득한 뒤에도 특유의 억양을 유지해 이것이 오히려 매력 포인트가 됐다.",
            "조용하고 신중한 성격이지만 팬들에게 보내는 손편지가 가장 감성적이라는 평을 받는다."
          ],
          en: [
            "From China with a B-boy competition background — his skills elevated SEVENTEEN's Performance Unit to a new level.",
            "His self-choreographed YouTube videos have surpassed 100M views — his individual dance talent is unmatched.",
            "Excellent fashion sense leads to active ambassadorships with Chinese luxury fashion brands.",
            "Maintained his distinct accent after mastering Korean — it became a charming trademark rather than a barrier.",
            "Quiet and thoughtful, but his handwritten fan letters are consistently rated the most emotionally moving in the group."
          ],
          ja: [
            "中国出身でブレイクダンス選手出身であり、その実力がSEVENTEENパフォーマンスチームのレベルを一段階引き上げた。",
            "自作の振り付けYouTube動画が1億回再生を超えるほど、ダンサーとしての個人の力量が独歩的だ。",
            "ファッションセンスが優れており、中国のラグジュアリーファッションブランドのアンバサダーとして活発に活動している。",
            "韓国語を完璧に習得した後も特有のアクセントを維持しており、それがかえって魅力ポイントになった。",
            "静かで慎重な性格だが、ファンに送る手書きの手紙が最も感性的だという評価を受けている。"
          ],
          zh: [
            "来自中国，曾是B-boy选手，他的实力将SEVENTEEN表演分队的水平提升到了一个新的高度。",
            "个人原创编舞的YouTube视频播放量突破1亿次，作为舞者的个人能力非常出众。",
            "时尚感非常出色，作为中国奢侈时尚品牌的形象大使活动频繁。",
            "在完美掌握韩语后仍保留着特有的语调，这反而成为了他的魅力点。",
            "虽然性格安静稳重，但给粉丝写的亲笔信被认为是最感性的。"
          ],
          es: [
            "Es de China y tiene antecedentes como bailarín de B-boy; sus habilidades elevaron a la Unidad de Performance de SEVENTEEN a un nuevo nivel.",
            "Su talento individual como bailarín es inigualable, tanto que sus videos de coreografías propias en YouTube han superado las 100 millones de visitas.",
            "Su excelente sentido de la moda lo ha llevado a ser un embajador activo de varias marcas de moda de lujo en China.",
            "Mantuvo su acento distintivo después de dominar el coreano, lo que se convirtió en una marca encantadora en lugar de una barrera.",
            "Tiene una personalidad tranquila y reflexiva, pero sus cartas escritas a mano para los fans son consideradas las más emotivas del grupo."
          ],
          id: [
            "Berasal dari Tiongkok dengan latar belakang atlet B-boy, keahliannya mengangkat level Unit Performa SEVENTEEN ke tingkat yang baru.",
            "Kemampuan individunya sebagai penari sangat luar biasa, hingga video koreografi buatannya di YouTube melampaui 100 juta penayangan.",
            "Memiliki selera fashion yang luar biasa dan aktif menjadi duta untuk berbagai merek fashion mewah di Tiongkok.",
            "Tetap mempertahankan aksen uniknya setelah menguasai bahasa Korea, yang justru menjadi poin pesonanya.",
            "Memiliki kepribadian yang tenang dan berhati-hati, namun surat tulisan tangannya untuk penggemar dinilai paling emosional di grup."
          ],
          fr: [
            "Originaire de Chine et ancien adepte du B-boying, ses compétences ont propulsé l'unité de performance de SEVENTEEN à un niveau supérieur.",
            "Ses talents individuels de danseur sont inégalés, ses propres chorégraphies sur YouTube dépassant les 100 millions de vues.",
            "Son excellent sens de la mode lui permet d'être l'ambassadeur actif de plusieurs marques de luxe en Chine.",
            "A conservé son accent distinctif après avoir maîtrisé le coréen, ce qui est devenu une marque de fabrique charmante.",
            "D'un tempérament calme et réfléchi, ses lettres manuscrites aux fans sont considérées comme les plus émouvantes du groupe."
          ],
          hi: [
            "चीन से हैं और बी-बॉयिंग पृष्ठभूमि से हैं — उनके कौशल ने सेवेनटीन की परफॉर्मेंस यूनिट को एक नए स्तर पर पहुँचा दिया है।",
            "एक डांसर के रूप में उनकी व्यक्तिगत क्षमता बेजोड़ है, उनके स्व-कोरियोग्राफ किए गए YouTube वीडियो 100 मिलियन से अधिक बार देखे जा चुके हैं।",
            "उत्कृष्ट फैशन सेंस के कारण वे चीन के लक्जरी फैशन ब्रांडों के सक्रिय एंबेसडर के रूप में काम कर रहे हैं।",
            "कोरियाई भाषा सीखने के बाद भी उन्होंने अपना विशिष्ट लहजा बरकरार रखा — यह उनके लिए आकर्षण का केंद्र बन गया।",
            "शांत और विचारशील स्वभाव के हैं, लेकिन प्रशंसकों को लिखे उनके हाथ से लिखे पत्रों को समूह में सबसे भावनात्मक माना जाता है।"
          ],
          pt: [
            "Original da China com experiência em B-boying, suas habilidades elevaram a Unidade de Performance do SEVENTEEN a um novo nível.",
            "Seu talento individual como dançarino é inigualável, com seus vídeos de coreografias próprias no YouTube superando 100 milhões de visualizações.",
            "Seu excelente senso de moda o levou a ser um embaixador ativo de várias marcas de luxo na China.",
            "Manteve seu sotaque distinto após dominar o coreano, o que se tornou uma marca charmosa em vez de uma barreira.",
            "Tem uma personalidade calma e ponderada, mas suas cartas manuscritas para os fãs são consideradas as mais emocionantes do grupo."
          ],
          ar: [
            "من الصين وبخلفية كراقص B-boy، رفعت مهاراته مستوى وحدة الأداء في سفنتين إلى مستوى جديد تماماً.",
            "موهبته الفردية كراقص لا مثيل لها، حيث تجاوزت فيديوهات رقصاته من تصميمه الخاص على يوتيوب 100 مليون مشاهدة.",
            "يتمتع بحس موضة رائع ويشغل منصب سفير للعديد من ماركات الأزياء الفاخرة في الصين.",
            "حافظ على لكنته المميزة بعد إتقان اللغة الكورية، وهو ما أصبح نقطة جاذبية له بدلاً من أن يكون عائقاً.",
            "يتمتع بشخصية هادئة ورزينة، لكن رسائله المكتوبة بخط اليد للمعجبين تُعتبر الأكثر عاطفية في المجموعة."
          ],
          th: [
            "มาจากประเทศจีนและเคยเป็นนักเต้นบีบอย ความสามารถของเขาช่วยยกระดับทีมเพอร์ฟอร์แมนซ์ของ SEVENTEEN ไปอีกขั้น.",
            "ความสามารถเฉพาะตัวในฐานะแดนเซอร์นั้นโดดเด่นมาก วิดีโอท่าเต้นที่เขาคิดเองใน YouTube มียอดวิวทะลุ 100 ล้านครั้ง.",
            "มีเซนส์ด้านแฟชั่นที่ยอดเยี่ยมและเป็นแอมบาสเดอร์ให้กับแบรนด์แฟชั่นหรูในจีนอย่างต่อเนื่อง.",
            "เขายังคงรักษาสำเนียงที่เป็นเอกลักษณ์แม้จะพูดเกาหลีคล่องแล้ว ซึ่งกลายเป็นเสน่ห์ที่แฟนๆ ชื่นชอบ.",
            "มีบุคลิกเงียบขรึมและรอบคอบ แต่จดหมายที่เขาเขียนด้วยลายมือถึงแฟนคลับมักจะได้รับคำชมว่าซึ้งที่สุดในวง."
          ],
          vi: [
            "Đến từ Trung Quốc và là một vận động viên B-boy, kỹ năng của anh đã đưa đơn vị Performance của SEVENTEEN lên một tầm cao mới.",
            "Năng lực cá nhân với tư cách là một vũ công vô cùng nổi trội, các video vũ đạo tự dàn dựng trên YouTube của anh đã vượt mốc 100 triệu lượt xem.",
            "Gu thời trang xuất sắc giúp anh hoạt động tích cực với tư cách là đại sứ cho các thương hiệu thời trang xa xỉ tại Trung Quốc.",
            "Dù đã thành thạo tiếng Hàn nhưng anh vẫn giữ được chất giọng đặc trưng, điều này lại trở thành một điểm lôi cuốn riêng.",
            "Tính cách điềm tĩnh và thận trọng, nhưng những lá thư tay anh gửi cho fan được đánh giá là giàu cảm xúc nhất nhóm."
          ],
          ru: [
            "Родом из Китая, в прошлом — профессиональный би-бой; его навыки вывели перформанс-группу SEVENTEEN на новый уровень.",
            "Его индивидуальный талант танцора уникален: видео с его собственной хореографией на YouTube набрали более 100 миллионов просмотров.",
            "Обладает отличным чувством стиля и активно работает амбассадором люксовых модных брендов в Китае.",
            "Сохранил свой уникальный акцент даже после совершенного овладения корейским языком, что стало его изюминкой.",
            "Обладает спокойным и рассудительным характером, но его рукописные письма фанатам считаются самыми трогательными в группе."
          ]
        },
        socials: {}
      },
      {
        id: "mingyu",
        name: { ko: "민규", en: "Mingyu", ja: "ミンギュ", zh: "珉奎", es: "Mingyu", id: "Mingyu", fr: "Mingyu", hi: "मिंग्यु (Mingyu)", pt: "Mingyu", ar: "مينغيو (Mingyu)", th: "มินกยู", vi: "Mingyu", ru: "Мингю" },
        role: { ko: "힙합팀, 래퍼, 비주얼", en: "Hip-hop Unit, Rapper, Visual", ja: "ヒップホップチーム、ラッパー、ビジュアル", zh: "嘻哈队, 饶舌, 视觉", es: "Unidad de Hip-hop, Rapero, Visual", id: "Unit Hip-hop, Rapper, Visual", fr: "Unité Hip-hop, Rappeur, Visuel", hi: "हिप-हॉप यूनिट, रैपर, विजुअल", pt: "Unidade de Hip-hop, Rapper, Visual", ar: "وحدة الهيب هوب، رابر، فيجوال", th: "ฮิปฮอปทีม, แร็ปเปอร์, วิชวล", vi: "Nhóm Hip-hop, Rapper, Visual", ru: "Хип-хоп группа, Рэпер, Вижуал" },
        birth: "1997.04.06",
        bloodType: "A",
        mbti: "ENFP",
        height: "187cm",
        zodiac: { ko: "양자리", en: "Aries", ja: "おひつじ座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष (Aries)", pt: "Áries", ar: "برج الحمل", th: "ราศีเมษ", vi: "Bạch Dương", ru: "Овен" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Mingyu+Kim+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "187cm의 세븐틴 공식 비주얼이자 팀의 쉐프. GQ·Vogue 커버 단골이며 무대 위 카리스마와 일상의 귀여움 갭이 극명한 '갭 모에' 캐릭터다.",
          en: "SEVENTEEN's 187cm official visual and team chef. A regular on GQ and Vogue covers, his dramatic gap between on-stage charisma and off-stage cuteness makes him the group's ultimate 'gap moe' figure.",
          ja: "187cmのSEVENTEEN公式ビジュアル担当であり、チームのシェフ。GQやVogueの表紙の常連で、ステージ上のカリスマ性と日常の可愛さのギャップが魅力の「ギャップ萌え」キャラクターです。",
          zh: "187cm的SEVENTEEN官方门面担当，也是团队的厨师。他是GQ、Vogue封面的常客，舞台上的魅力与日常生活中的可爱形成的巨大反差使他成为了极具魅力的“反差萌”角色。",
          es: "Visual oficial de SEVENTEEN de 187 cm y chef del equipo. Habitual en las portadas de GQ y Vogue, su dramática brecha entre el carisma en el escenario y su ternura fuera de él lo convierte en la figura definitiva del 'gap moe'.",
          id: "Visual resmi SEVENTEEN setinggi 187cm dan koki tim. Langganan sampul GQ dan Vogue, celah dramatis antara karisma di atas panggung dan kelucuan di luar panggung menjadikannya sosok 'gap moe' utama di grup.",
          fr: "Visuel officiel de SEVENTEEN mesurant 187 cm et chef de l'équipe. Habitué des couvertures de GQ et Vogue, son décalage spectaculaire entre son charisme sur scène et sa gentillesse hors scène en fait la figure ultime du 'gap moe'.",
          hi: "सेवेनटीन (SEVENTEEN) के 187 सेमी लंबे आधिकारिक विजुअल और टीम शेफ। GQ और Vogue कवर पर नियमित रूप से दिखाई देते हैं, मंच पर करिश्मे और वास्तविक जीवन में मासूमियत के बीच का बड़ा अंतर उन्हें समूह का प्रमुख 'गैप मोए' (gap moe) पात्र बनाता है।",
          pt: "Visual oficial do SEVENTEEN de 187 cm e chef da equipe. Figurinha carimbada nas capas da GQ e Vogue, seu intervalo dramático entre o carisma no palco e a fofura fora dele o torna a figura definitiva do 'gap moe'.",
          ar: "الفيجوال الرسمي لسيفنتين بطول 187 سم وطباخ الفريق. ضيف دائم على أغلفة GQ وVogue، وتجعل الفجوة الدرامية بين كاريزمته على المسرح ولطافته في الحياة اليومية منه الشخصية المثالية لـ 'سحر التناقض' (gap moe).",
          th: "วิชวลอย่างเป็นทางการของ SEVENTEEN ที่มีความสูง 187 ซม. และเป็นเชฟประจำทีม มักจะได้ขึ้นปกนิตยสาร GQ และ Vogue เสมอ มีเสน่ห์แบบ 'Gap Moe' จากความแตกต่างอย่างชัดเจนระหว่างความคาริสม่าบนเวทีและความน่ารักในชีวิตประจำวัน",
          vi: "Visual chính thức cao 187cm của SEVENTEEN và là đầu bếp của nhóm. Thường xuyên xuất hiện trên bìa tạp chí GQ và Vogue, sự khác biệt rõ rệt giữa vẻ lôi cuốn trên sân khấu và sự đáng yêu ngoài đời thường khiến anh trở thành nhân vật 'gap moe' cuối cùng của nhóm.",
          ru: "Официальный вижуал SEVENTEEN ростом 187 см и повар группы. Частый гость на обложках GQ и Vogue, его невероятный контраст между харизмой на сцене и миловидностью в жизни делает его ярким представителем типажа «гэп моэ»."
        },
        tmi: {
          ko: [
            "187cm의 장신으로 세븐틴 공식 비주얼 담당이며, 글로벌 패션 잡지에 단골로 등장한다.",
            "요리 실력이 뛰어나 멤버들을 위해 자주 요리해주는 '세븐틴 쉐프'로 불린다.",
            "GQ·Vogue 등 해외 유명 패션 매거진 커버를 여러 차례 장식한 패션 아이콘이다.",
            "무대 위 카리스마와 일상에서의 귀여운 모습의 갭이 극명해 '갭 모에 민규'로 사랑받는다.",
            "데뷔 전 외모가 지금과 많이 달라 '성형 의혹'이 일었으나, JYP 연습생 시절부터 꾸준히 성장한 과정이 공개되며 해명됐다."
          ],
          en: [
            "At 187cm, he is SEVENTEEN's official visual — a regular on global fashion magazine covers.",
            "An accomplished cook who often makes meals for the members — nicknamed 'SEVENTEEN's chef'.",
            "Has graced the covers of GQ, Vogue, and other major international fashion magazines multiple times.",
            "The gap between his on-stage charisma and his off-stage cuteness makes him a beloved 'gap moe' figure.",
            "Pre-debut photos looked significantly different, sparking plastic surgery rumors — but his growth timeline as a trainee was shared as evidence."
          ],
          ja: [
            "187cmの長身でSEVENTEENの公式ビジュアル担当であり、グローバルファッション誌に頻繁に登場します。",
            "料理の実力に優れ、メンバーのために頻繁に料理を作る「SEVENTEENのシェフ」と呼ばれています。",
            "GQやVogueなど海外の有名ファッション誌の表紙を何度も飾り、ファッションアイコンとして定評があります。",
            "ステージ上のカリスマ性と日常の可愛い姿のギャップが激しく、「ギャップ萌えミンギュ」として愛されています。",
            "デビュー前の外見が今とかなり違って見えたため整形疑惑もありましたが、練習生時代からの成長過程が公开され、否定されました。"
          ],
          zh: [
            "身为187cm的长身，他是SEVENTEEN的官方门面担当，经常出现在全球时尚杂志上。",
            "厨艺精湛，经常为成员们做饭，被称为“SEVENTEEN的大厨”。",
            "多次登上GQ、Vogue等海外知名时尚杂志封面，是公认的时尚偶像。",
            "舞台上的魅力与日常生活中的可爱形象形成鲜明对比，被称为“反差萌珉奎”，深受喜爱。",
            "虽然出道前的长相与现在略有不同曾引发整形传闻，但随着练习生时期的成长过程被公开，传闻不攻自破。"
          ],
          es: [
            "Con 187 cm de altura, es el visual oficial de SEVENTEEN y un habitual en las revistas de moda mundiales.",
            "Un cocinero consumado que a menudo prepara comidas para los miembros; lo llaman 'el chef de SEVENTEEN'.",
            "Ha engalanado las portadas de GQ, Vogue y otras importantes revistas de moda internacionales varias veces.",
            "La brecha entre su carisma en el escenario y su ternura fuera de él lo convierte en una querida figura del 'gap moe'.",
            "Las fotos previas al debut se veían significativamente diferentes, provocando rumores de cirugía estética, pero su línea de tiempo de crecimiento como aprendiz fue compartida como evidencia."
          ],
          id: [
            "Berdiri setinggi 187cm, dia adalah visual resmi SEVENTEEN dan sering muncul di majalah mode global.",
            "Seorang koki yang mahir dan sering memasak untuk para anggota — dijuluki 'koki SEVENTEEN'.",
            "Telah menghiasi sampul majalah GQ, Vogue, dan majalah mode internasional ternama lainnya berkalikali.",
            "Perbedaan antara karismanya di panggung dan kelucuannya di kehidupan sehari-hari membuatnya dijuluki 'gap moe Mingyu'.",
            "Foto pra-debutnya terlihat sangat berbeda sehingga memicu rumor operasi plastik, namun proses pertumbuhannya sejak masa trainee terungkap dan rumor tersebut terbantah."
          ],
          fr: [
            "Mesurant 187 cm, il est le visuel officiel de SEVENTEEN et apparaît régulièrement dans les magazines de mode mondiaux.",
            "Un cuisinier accompli qui prépare souvent des repas pour les membres, ce qui lui vaut le surnom de 'chef de SEVENTEEN'.",
            "Il a fait plusieurs fois la couverture de GQ, Vogue et d'autres grands magazines de mode internationaux.",
            "Le décalage entre son charisme sur scène et son côté mignon au quotidien lui vaut d'être aimé sous le nom de 'Gap Moe Mingyu'.",
            "Ses photos pré-début semblaient très différentes, suscitant des rumeurs de chirurgie esthétique, mais son évolution depuis ses jours de stagiaire a prouvé le contraire."
          ],
          hi: [
            "187 सेमी की ऊंचाई के साथ, वह सेवेनटीन के आधिकारिक विजुअल हैं और वैश्विक फैशन पत्रिकाओं में नियमित रूप से दिखाई देते हैं।",
            "एक कुशल रसोइया जो अक्सर सदस्यों के लिए खाना बनाते हैं — उन्हें 'सेवेनटीन का शेफ' कहा जाता है।",
            "GQ, Vogue और अन्य प्रमुख अंतरराष्ट्रीय फैशन पत्रिकाओं के कवर पर कई बार नजर आ चुके हैं।",
            "मंच पर उनके करिश्मे और रोजमर्रा की मासूमियत के बीच का अंतर उन्हें 'गैप मोए' (gap moe) मिंग्यु के रूप में लोकप्रिय बनाता है।",
            "डेब्यू से पहले की तस्वीरों में वे काफी अलग दिखते थे जिससे प्लास्टिक सर्जरी की अफवाहें उड़ी थीं, लेकिन उनके प्रशिक्षु दिनों से अब तक के विकास की कहानी ने इसे स्पष्ट कर दिया।"
          ],
          pt: [
            "Com 187 cm de altura, ele é o visual oficial do SEVENTEEN e aparece regularmente em revistas de moda globais.",
            "Um cozinheiro talentoso que costuma preparar refeições para os membros — apelidado de 'chef do SEVENTEEN'.",
            "Já estampou as capas da GQ, Vogue e outras grandes revistas de moda internacionais diversas vezes.",
            "O intervalo entre seu carisma no palco e sua fofura no dia a dia o torna amado como o 'Gap Moe Mingyu'.",
            "Fotos pré-estreia pareciam significativamente diferentes, gerando rumores de cirurgia plástica, mas sua linha do tempo de crescimento como trainee foi compartilhada como prova."
          ],
          ar: [
            "بطوله البالغ 187 سم، هو المسؤول عن الفيجوال الرسمي في سيفنتين ويظهر بانتظام في مجلات الموضة العالمية.",
            "يمتلك مهارات طهي ممتازة ويقوم بالطهي للأعضاء كثيراً، ويلقب بـ 'طباخ سيفنتين'.",
            "زين أغلفة مجلات الموضة العالمية الشهيرة مثل GQ وVogue عدة مرات وهو أيقونة للموضة.",
            "تعد الفجوة بين كاريزمته على المسرح ومظهره اللطيف في الحياة اليومية واضحة جداً، وهو محبوب بلقب 'مينغيو صاحب سحر التناقض'.",
            "بدت ملامحه قبل الظهور الأول مختلفة تماماً عما هي عليه الآن مما أثار شائعات حول عمليات تجميل، ولكن تم توضيح الأمر من خلال الكشف عن مراحل نموه المستمرة منذ أيام تدريبه."
          ],
          th: [
            "ด้วยความสูง 187 ซม. เขาจึงเป็นวิชวลอย่างเป็นทางการของ SEVENTEEN และปรากฏตัวในนิตยสารแฟชั่นระดับโลกเป็นประจำ",
            "มีทักษะการทำอาหารที่ยอดเยี่ยมและมักจะทำอาหารให้สมาชิกทานอยู่เสมอ จนถูกเรียกว่า 'เชฟประจำวง SEVENTEEN'",
            "เป็นไอคอนแฟชั่นที่เคยขึ้นปกนิตยสารชื่อดังอย่าง GQ และ Vogue มาแล้วหลายครั้ง",
            "ความแตกต่างระหว่างความเท่บนเวทีและความน่ารักในชีวิตประจำวันทำให้เขาได้รับความรักในฐานะ 'มินกยูผู้น่าเอ็นดู'",
            "เนื่องจากรูปลักษณ์ก่อนเดบิวต์ดูต่างจากปัจจุบันเล็กน้อยจึงเคยมีข่าวลือเรื่องศัลยกรรม แต่เรื่องนี้ก็ได้รับการคลี่คลายเมื่อมีการเปิดเผยภาพการเติบโตของเขาตั้งแต่สมัยเป็นเด็กฝึก"
          ],
          vi: [
            "Với chiều cao 187cm, anh là visual chính thức của SEVENTEEN và thường xuyên xuất hiện trên các tạp chí thời trang toàn cầu.",
            "Kỹ năng nấu nướng tuyệt vời nên thường nấu ăn cho các thành viên và được gọi là 'Đầu bếp của SEVENTEEN'.",
            "Là một biểu tượng thời trang đã nhiều lần xuất hiện trên bìa các tạp chí thời trang nổi tiếng thế giới như GQ và Vogue.",
            "Sự khác biệt rõ rệt giữa vẻ lôi cuốn trên sân khấu và sự đáng yêu hàng ngày khiến anh được yêu mến với biệt danh 'Mingyu gap moe'.",
            "Ngoại hình trước khi ra mắt khá khác so với hiện tại nên từng có tin đồn phẫu thuật thẩm mỹ, nhưng điều này đã được làm rõ qua quá trình trưởng thành từ khi là thực tập sinh."
          ],
          ru: [
            "С ростом 187 см он является официальным вижуалом SEVENTEEN и регулярно появляется на обложках мировых журналов мод.",
            "Прекрасно готовит и часто радует участников своими блюдами, за что получил прозвище «Шеф SEVENTEEN».",
            "Неоднократно украшал обложки известных международных журналов мод, таких как GQ и Vogue.",
            "Контраст между харизмой на сцене и милым поведением в жизни настолько велик, что фанаты обожают его как «гэп моэ Мингю».",
            "Его внешность до дебюта заметно отличалась, что породило слухи о пластике, но история его взросления со времен стажировки развеяла их."
          ]
        },
        socials: {}
      },
      {
        id: "dk",
        name: { ko: "도겸", en: "DK", ja: "ドギョム", zh: "道兼", es: "DK", id: "DK", fr: "DK", hi: "डीके (DK)", pt: "DK", ar: "دوكيوم (DK)", th: "โดกยอม", vi: "DK", ru: "Дикей" },
        role: { ko: "보컬팀, 메인 보컬", en: "Vocal Unit, Main Vocal", ja: "ボーカルチーム、メインボーカル", zh: "主唱队, 主唱", es: "Unidad Vocal, Vocalista Principal", id: "Unit Vokal, Vokal Utama", fr: "Unité Vocale, Vocaliste Principal", hi: "वोकल्स यूनिट, मुख्य गायक", pt: "Unidade Vocal, Vocalista Principal", ar: "وحدة الصوت، مغني رئيسي", th: "โวคอลทีม, นักร้องหลัก", vi: "Nhóm Vocal, Ca sĩ chính", ru: "Вокальная группа, Главный вокалист" },
        birth: "1997.02.18",
        bloodType: "O",
        mbti: "ENFP",
        height: "178cm",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ (Aquarius)", pt: "Aquário", ar: "برج الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+DK+Lee+Seokmin+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "뮤지컬 '그리스' 주연을 맡은 세븐틴 메인 보컬. '세븐틴의 해'라는 별명처럼 태양처럼 밝은 에너지로 팀에 활력을 불어넣는 긍정 에너지의 화신이다.",
          en: "SEVENTEEN's main vocal who starred in the musical 'Grease'. Nicknamed 'the sun of SEVENTEEN' for his endless positive energy — widely recognized as the most consistently upbeat member.",
          ja: "ミュージカル「グリース」で主演を務めたSEVENTEENのメインボーカル。「SEVENTEENの太陽」という別名のように、太陽のように明るいエネルギーでチームに活力を与える、ポジティブエネルギーの化身です。",
          zh: "曾担任音乐剧《油脂》主演的SEVENTEEN主唱。正如他的绰号“SEVENTEEN的太阳”一样，他以阳光般开朗的力量为团队注入活力，是正能量的化身。",
          es: "Vocalista principal de SEVENTEEN que protagonizó el musical 'Grease'. Apodado 'el sol de SEVENTEEN' por su energía positiva infinita, es ampliamente reconocido como el miembro más alegre de forma constante.",
          id: "Vokal utama SEVENTEEN yang membintangi musikal 'Grease'. Dijuluki 'matahari SEVENTEEN' karena energi positifnya yang tak ada habisnya — secara luas diakui sebagai anggota yang paling ceria.",
          fr: "Vocaliste principal de SEVENTEEN qui a joué dans la comédie musicale 'Grease'. Surnommé 'le soleil de SEVENTEEN' pour son énergie positive sans fin, il est largement reconnu comme le membre le plus joyeux.",
          hi: "सेवेनटीन के मुख्य गायक जिन्होंने संगीत नाटक 'Grease' में अभिनय किया। अपनी असीम सकारात्मक ऊर्जा के कारण उन्हें 'सेवेनटीन का सूर्य' कहा जाता है — उन्हें समूह के सबसे खुशमिजाज सदस्य के रूप में जाना जाता है।",
          pt: "Vocalista principal do SEVENTEEN que estrelou o musical 'Grease'. Apelidado de 'o sol do SEVENTEEN' por sua energia positiva infinita — amplamente reconhecido como o integrante mais alegre.",
          ar: "المغني الرئيسي في سيفنتين الذي لعب دور البطولة في المسرحية الموسيقية 'Grease'. يلقب بـ 'شمس سيفنتين' نظراً لطاقته الإيجابية المشرقة كالشمس، وهو تجسيد للتفاؤل الذي يبعث الحيوية في الفريق.",
          th: "นักร้องหลักของ SEVENTEEN ที่เคยรับบทนำในละครเวทีเรื่อง 'Grease' มีฉายาว่า 'ดวงอาทิตย์ของ SEVENTEEN' เพราะมีพลังงานที่สดใสเหมือนแสงอาทิตย์ เป็นสัญลักษณ์ของพลังบวกที่คอยเติมพลังให้สมาชิกในวง",
          vi: "Giọng ca chính của SEVENTEEN, người từng đóng vai chính trong vở nhạc kịch 'Grease'. Đúng như biệt danh 'Mặt trời của SEVENTEEN', anh là hiện thân của năng lượng tích cực, truyền sức sống cho nhóm bằng năng lượng tỏa sáng như mặt trời.",
          ru: "Главный вокалист SEVENTEEN, исполнивший главную роль в мюзикле «Бриолин». Благодаря своему прозвищу «Солнце SEVENTEEN», он заряжает группу позитивной энергией и бодростью."
        },
        tmi: {
          ko: [
            "세븐틴 메인 보컬로, 뮤지컬 '그리스'에 주연으로 캐스팅될 정도로 뛰어난 보컬 실력을 인정받는다.",
            "웃음이 태양처럼 밝고 에너지 넘쳐 '세븐틴 해'라는 별명이 있다.",
            "단 한 번도 기분 나쁜 표정을 보인 적이 없다는 게 팬들 사이에서 정설이 될 만큼 긍정적인 성격이다.",
            "뮤지컬과 콘서트를 넘나들며 활발히 활동해 '만능 엔터테이너'라는 평가를 받는다.",
            "자신의 목소리가 컸을 때 연습실에서 울다가 그것이 강점이 됐다는 일화가 팬들에게 큰 감동을 줬다."
          ],
          en: [
            "SEVENTEEN's main vocal — talented enough to be cast as lead in the musical 'Grease'.",
            "His smile is as bright as the sun — nicknamed 'the sun of SEVENTEEN'.",
            "Fans widely agree he has never once shown a bad mood — his positivity is almost legendary.",
            "Active across musicals and concerts — called a 'complete entertainer'.",
            "A story of him crying in the practice room over his loud voice, then turning it into a strength, deeply moved fans."
          ],
          ja: [
            "SEVENTEENのメインボーカルで、ミュージカル「グリース」に主演でキャスティングされるほど優れた歌唱力が認められています。",
            "笑顔が太陽のように明るくエネルギーに溢れているため、「SEVENTEENの太陽」という別名があります。",
            "一度も不機嫌な顔を見せたことがないというのがファンの間で定説になるほど、ポジティブな性格です。",
            "ミュージカルやコンサートなど幅広く活動し、「万能エンターテイナー」との評価を受けています。",
            "自分の声が大きすぎて練習室で泣いたことがあるが、それが強みになったというエピソードがファンに感動を与えました。"
          ],
          zh: [
            "作为SEVENTEEN的主唱，他的歌唱实力得到了认可，甚至被选为音乐剧《油脂》的主演。",
            "笑容像太阳一样灿烂且充满活力，因此有“SEVENTEEN的太阳”之称。",
            "粉丝们公认他从未表现出任何不悦的神情，性格极其开朗乐观。",
            "活跃在音乐剧、演唱会等多个领域，被评价为“全能艺人”。",
            "曾经因为自己的嗓音太大在练习室哭泣，后来却将其转化为了自己的优势，这段往事令粉丝们深受感动。"
          ],
          es: [
            "Vocalista principal de SEVENTEEN; su talento vocal es tan reconocido que fue elegido como protagonista en el musical 'Grease'.",
            "Su sonrisa es tan brillante como el sol; de ahí su apodo, 'el sol de SEVENTEEN'.",
            "Los fans coinciden en que nunca ha mostrado mal humor; su positividad es casi legendaria.",
            "Activo tanto en musicales como en conciertos; es llamado un 'artista completo'.",
            "La historia de él llorando en la sala de ensayo por su voz fuerte, y luego convirtiéndola en una fortaleza, conmovió profundamente a los fans."
          ],
          id: [
            "Vokal utama SEVENTEEN — cukup berbakat untuk terpilih sebagai peran utama dalam musikal 'Grease'.",
            "Senyumnya secerah matahari — dijuluki 'matahari SEVENTEEN'.",
            "Penggemar setuju bahwa dia tidak pernah sekalipun menunjukkan suasana hati yang buruk — kepositifannya hampir legendaris.",
            "Aktif di berbagai musikal dan konser — disebut sebagai 'penghibur lengkap'.",
            "Kisah dia menangis di ruang latihan karena suaranya yang keras, lalu mengubahnya menjadi kekuatan, sangat menyentuh hati penggemar."
          ],
          fr: [
            "Vocaliste principal de SEVENTEEN, son talent vocal est tel qu'il a été choisi pour le rôle principal de la comédie musicale 'Grease'.",
            "Son sourire est aussi radieux que le soleil, d'où son surnom de 'Soleil de SEVENTEEN'.",
            "Les fans s'accordent à dire qu'il n'a jamais montré de mauvaise humeur, sa positivité est presque légendaire.",
            "Actif à la fois dans les comédies musicales et les concerts, il est considéré comme un 'artiste complet'.",
            "L'histoire de ses pleurs dans la salle d'entraînement à cause de sa voix forte, avant d'en faire une force, a profondément ému les fans."
          ],
          hi: [
            "सेवेनटीन के मुख्य गायक — इतने प्रतिभाशाली कि उन्हें संगीत नाटक 'Grease' में मुख्य भूमिका के लिए चुना गया।",
            "उनकी मुस्कान सूरज की तरह उज्ज्वल है — उन्हें 'सेवेनटीन का सूर्य' उपनाम दिया गया है।",
            "प्रशंसक मानते हैं कि उन्होंने कभी भी खराब मूड नहीं दिखाया — उनकी सकारात्मकता लगभग पौराणिक है।",
            "म्यूजिकल और कॉन्सर्ट दोनों में सक्रिय — उन्हें एक 'पूर्ण मनोरंजनकर्ता' कहा जाता है।",
            "उनके अभ्यास कक्ष में अपनी तेज़ आवाज़ पर रोने और फिर उसे अपनी ताकत में बदलने की कहानी ने प्रशंसकों को गहराई से प्रभावित किया।"
          ],
          pt: [
            "Vocalista principal do SEVENTEEN — talentoso o suficiente para ser escalado como protagonista no musical 'Grease'.",
            "Seu sorriso é tão brilhante quanto o sol — apelidado de 'o sol do SEVENTEEN'.",
            "Os fãs concordam que ele nunca mostrou mau humor — sua positividade é quase lendária.",
            "Ativo em musicais e shows — chamado de 'artista completo'.",
            "A história dele chorando na sala de ensaio por causa de sua voz alta e depois transformando-a em uma força comoveu profundamente os fãs."
          ],
          ar: [
            "المغني الرئيسي في سيفنتين، معترف بمهاراته الصوتية لدرجة أنه تم اختياره كبطل للمسرحية الموسيقية 'Grease'.",
            "ابتسامته مشرقة ومليئة بالطاقة كالشمس، ولهذا يلقب بـ 'شمس سيفنتين'.",
            "يتمتع بشخصية إيجابية للغاية لدرجة أن المعجبين يقولون إنه لم يظهر تعبيرات تدل على ضيق قط.",
            "ينشط في المسرحيات الموسيقية والحفلات، ويحظى بتقدير كونه 'فناناً شاملاً'.",
            "أثرت قصته عن بكائه في غرفة التدريب لأن صوته كان عالياً جداً ثم تحويل ذلك إلى نقطة قوة في المعجبين بشكل كبير."
          ],
          th: [
            "เป็นนักร้องหลักของ SEVENTEEN ซึ่งได้รับการยอมรับเรื่องทักษะการร้องเพลงที่ยอดเยี่ยมถึงขั้นได้รับบทนำในละครเวทีเรื่อง 'Grease'",
            "มีรอยยิ้มที่สดใสและมีพลังเหมือนแสงอาทิตย์ จนได้รับฉายาว่า 'พระอาทิตย์ประจำวง'",
            "เป็นคนที่มีทัศนคติบวกมากจนแฟนๆ ต่างพูดเป็นเสียงเดียวกันว่าไม่เคยเห็นเขาทำหน้าตาบูดบึ้งเลยแม้แต่ครั้งเดียว",
            "ทำกิจกรรมอย่างต่อเนื่องทั้งละครเวทีและคอนเสิร์ต จนได้รับการประเมินว่าเป็น 'เอนเตอร์เทนเนอร์ผู้ครบเครื่อง'",
            "เรื่องราวที่เขาเคยร้องไห้ในห้องซ้อมเพราะเสียงตัวเองดังเกินไป แต่กลับเปลี่ยนจุดนั้นให้กลายเป็นจุดแข็งได้ สร้างความประทับใจให้กับแฟนๆ อย่างมาก"
          ],
          vi: [
            "Giọng ca chính của SEVENTEEN, tài năng âm nhạc của anh đã được công nhận khi anh được chọn vào vai chính trong vở nhạc kịch 'Grease'.",
            "Nụ cười rạng rỡ như mặt trời và đầy năng lượng nên anh có biệt danh là 'Mặt trời của SEVENTEEN'.",
            "Anh có tính cách tích cực đến mức người hâm mộ tin rằng anh chưa bao giờ thể hiện vẻ mặt khó chịu.",
            "Hoạt động tích cực trong cả nhạc kịch và hòa nhạc nên được đánh giá là một 'nghệ sĩ giải trí đa năng'.",
            "Câu chuyện anh từng khóc trong phòng tập vì giọng hát của mình quá lớn, sau đó biến nó thành thế mạnh đã gây xúc động lớn cho người hâm mộ."
          ],
          ru: [
            "Главный вокалист SEVENTEEN; его вокальные данные настолько признаны, что он был выбран на главную роль в мюзикле «Бриолин».",
            "Его улыбка такая же яркая и энергичная, как солнце, за что он получил прозвище «Солнце SEVENTEEN».",
            "Настолько позитивный человек, что среди фанатов бытует мнение, будто он ни разу в жизни не был в плохом настроении.",
            "Активно выступает как в мюзиклах, так и на концертах, за что его называют «универсальным артистом».",
            "История о том, как он плакал в репетиционном зале из-за слишком громкого голоса, а затем превратил его в свое преимущество, очень тронула фанатов."
          ]
        },
        socials: {}
      },
      {
        id: "seungkwan",
        name: { ko: "승관", en: "Seungkwan", ja: "スングァン", zh: "胜宽", es: "Seungkwan", id: "Seungkwan", fr: "Seungkwan", hi: "सेंगक्वान (Seungkwan)", pt: "Seungkwan", ar: "سونغكوان (Seungkwan)", th: "ซึงกวาน", vi: "Seungkwan", ru: "Сынган" },
        role: { ko: "보컬팀, 메인 보컬", en: "Vocal Unit, Main Vocal", ja: "ボーカルチーム、メインボーカル", zh: "主唱队, 主唱", es: "Unidad Vocal, Vocalista Principal", id: "Unit Vokal, Vokal Utama", fr: "Unité Vocale, Vocaliste Principal", hi: "वोकल्स यूनिट, मुख्य गायक", pt: "Unidade Vocal, Vocalista Principal", ar: "وحدة الصوت، مغني رئيسي", th: "โวคอล팀, นักร้องหลัก", vi: "Nhóm Vocal, Ca sĩ chính", ru: "Вокальная группа, Главный вокалист" },
        birth: "1998.01.16",
        bloodType: "A",
        mbti: "ESFJ",
        height: "173cm",
        zodiac: { ko: "염소자리", en: "Capricorn", ja: "やぎ座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर (Capricorn)", pt: "Capricórnio", ar: "برج الجدي", th: "ราศีมังกร", vi: "Ma Kết", ru: "Козерог" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Seungkwan+Boo+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "제주도 출신의 세븐틴 예능 능력치 1위. 어머니 사랑이 각별한 효자이며, 각종 시상식 MC로 자주 초청받는 세븐틴의 분위기 메이커다.",
          en: "Jeju Island-born and rated #1 in variety talent in SEVENTEEN. A devoted mother's boy and sought-after awards MC — the ultimate mood-maker who never fails to light up any situation.",
          ja: "済州島出身でSEVENTEENのバラエティ能力No.1。母親への愛が特別な親孝行息子であり、各種授賞式のMCとしても頻繁に招待されるSEVENTEENのムードメーカーです。",
          zh: "来自济州岛的SEVENTEEN综艺担当第1名。他是非常孝顺的儿子，对母亲有着特别的爱。同时也是经常受邀担任各类颁奖典礼主持人的SEVENTEEN气氛制造者。",
          es: "Nacido en la isla de Jeju y calificado como el número 1 en talento para variedades en SEVENTEEN. Un hijo devoto y un codiciado maestro de ceremonias para premios: el creador de ambiente definitivo que nunca falla en iluminar cualquier situación.",
          id: "Lahir di Pulau Jeju dan menempati posisi #1 dalam bakat variety di SEVENTEEN. Seorang anak yang berbakti pada ibunya dan MC penghargaan yang banyak dicari — pembuat suasana terbaik yang selalu menceriakan suasana.",
          fr: "Né sur l'île de Jeju et classé n°1 pour son talent dans les émissions de variétés de SEVENTEEN. Un fils dévoué à sa mère et un maître de cérémonie très prisé pour les remises de prix — le créateur d'ambiance ultime qui illumine chaque situation.",
          hi: "जेजू द्वीप में जन्मे और सेवेनटीन में वैरायटी टैलेंट में नंबर 1 पर रेटेड। अपनी माँ के प्रति समर्पित बेटे और लोकप्रिय पुरस्कार समारोहों के होस्ट (MC) — वे समूह के प्रमुख मूड-मेकर हैं जो किसी भी स्थिति को खुशनुमा बना देते हैं।",
          pt: "Nascido na Ilha de Jeju e classificado como o nº 1 em talento para variedades no SEVENTEEN. Um filho dedicado à sua mãe e um mestre de cerimônias cobiçado para premiações — o criador de atmosfera definitivo que ilumina qualquer situação.",
          ar: "ولد في جزيرة جيجو ويحتل المرتبة الأولى في مهارات البرامج الترفيهية في سيفنتين. هو ابن بار لديه حب خاص لوالدته، وصانع أجواء الفرقة الذي يُدعى غالباً لتقديم مختلف حفلات الجوائز.",
          th: "เกิดที่เกาะเชจูและเป็นอันดับ 1 ด้านความสามารถในรายการวาไรตี้ของ SEVENTEEN เป็นลูกกตัญญูที่รักแม่มาก และเป็นผู้สร้างบรรยากาศประจำวงที่ได้รับเชิญให้เป็นพิธีกรในงานประกาศรางวัลต่างๆ อยู่เสมอ",
          vi: "Đến từ đảo Jeju và đứng số 1 về khả năng giải trí trong SEVENTEEN. Là một người con hiếu thảo với tình yêu đặc biệt dành cho mẹ, anh cũng là người tạo bầu không khí của nhóm, thường xuyên được mời làm MC cho các lễ trao giải.",
          ru: "Уроженец острова Чеджу и обладатель первого места по таланту в развлекательных шоу среди SEVENTEEN. Очень любящий сын и востребованный ведущий различных премий — настоящий создатель атмосферы в группе."
        },
        tmi: {
          ko: [
            "제주도 출신으로 독특한 제주 사투리를 구사해 예능에서 큰 사랑을 받는다.",
            "세븐틴 예능 능력치 1위로 꼽히며, 어떤 상황에서도 분위기를 살리는 '예능인 승관'으로 유명하다.",
            "어머니를 극진히 사랑하는 효자 아들로 알려져 있어 팬들에게 '엄마 바보'라는 애칭으로 불린다.",
            "팬 사인회에서 팬들이 우울하다고 하면 그 자리에서 즉석 노래를 불러주는 것으로 유명하다.",
            "세븐틴 내에서 MC 능력이 가장 뛰어나 각종 시상식 MC로 자주 초청된다."
          ],
          en: [
            "From Jeju Island — uses unique Jeju dialect that makes him an instant variety show favorite.",
            "Rated #1 in variety talent within SEVENTEEN — always lifts the mood regardless of circumstances.",
            "Known as an extremely devoted son who adores his mother — fans call him 'mom's boy' affectionately.",
            "Famous for spontaneously singing to fans at sign events when they say they're feeling down.",
            "Best MC in SEVENTEEN — regularly invited to host major award ceremonies."
          ],
          ja: [
            "済州島出身で独特の済州島の方言を使い、バラエティ番組で大きな人気を集めています。",
            "SEVENTEENのバラエティ能力No.1に挙げられ、どんな状況でも雰囲気を盛り上げる「芸能人スングァン」として有名です。",
            "母親を極端に愛する親孝行息子として知られており、ファンから「お母さん大好きっ子」という愛称で呼ばれています。",
            "ファンサイン会でファンが落ち込んでいると言うと、その場で即興で歌を歌ってくれることで有名です。",
            "SEVENTEEN内でMC能力が最も優れており、各種授賞式のMCとして頻繁に招待されます。"
          ],
          zh: [
            "来自济州岛，他使用的济州岛方言在综艺节目中深受喜爱。",
            "被公认为SEVENTEEN的综艺担当第一名，以在任何情况下都能活跃气氛的“综艺人胜宽”而闻名。",
            "以极其孝顺母亲而闻名，被粉丝们亲切地称为“妈妈傻瓜”。",
            "在粉丝签名会上，如果粉丝说感到郁郁寡欢，他会当场即兴演唱歌曲，以此闻名。",
            "他是SEVENTEEN中主持能力最出色的，因此经常受邀担任各类颁奖典礼的主持人。"
          ],
          es: [
            "De la isla de Jeju; usa un dialecto único de Jeju que lo convierte en un favorito instantáneo de los programas de variedades.",
            "Calificado como el número 1 en talento para variedades dentro de SEVENTEEN; siempre anima el ambiente sin importar las circunstancias.",
            "Conocido como un hijo extremadamente devoto que adora a su madre; los fans lo llaman cariñosamente 'el niño de mamá'.",
            "Famoso por cantar espontáneamente a los fans en eventos de firmas cuando dicen que se sienten deprimidos.",
            "El mejor MC de SEVENTEEN; invitado regularmente a presentar importantes ceremonias de premios."
          ],
          id: [
            "Berasal dari Pulau Jeju — menggunakan dialek Jeju yang unik yang menjadikannya favorit di acara variety.",
            "Menempati posisi #1 dalam bakat variety di SEVENTEEN — selalu menceriakan suasana terlepas dari keadaan.",
            "Dikenal sebagai anak yang sangat berbakti yang sangat menyayangi ibunya — penggemar memanggilnya 'anak mama' dengan penuh kasih sayang.",
            "Terkenal karena menyanyi secara spontan untuk penggemar di acara tanda tangan ketika mereka mengatakan sedang merasa sedih.",
            "MC terbaik di SEVENTEEN — sering diundang untuk memandu berbagai upacara penghargaan besar."
          ],
          fr: [
            "Originaire de l'île de Jeju, il utilise un dialecte unique de Jeju qui en fait un favori instantané des émissions de variétés.",
            "Classé n°1 pour son talent dans les émissions de variétés au sein de SEVENTEEN, il remonte toujours le moral quelle que soit la situation.",
            "Connu comme un fils extrêmement dévoué qui adore sa mère, les fans l'appellent affectueusement 'le fils à maman'.",
            "Célèbre pour chanter spontanément pour les fans lors de séances de dédicaces lorsqu'ils disent ne pas avoir le moral.",
            "Meilleur MC de SEVENTEEN, il est régulièrement invité à animer de grandes cérémonies de remise de prix."
          ],
          hi: [
            "जेजू द्वीप से — जेजू की अनूठी बोली का उपयोग करते हैं जो उन्हें वैरायटी शो में सबका पसंदीदा बनाती है।",
            "सेवेनटीन के भीतर वैरायटी टैलेंट में नंबर 1 पर रेटेड — परिस्थितियों की परवाह किए बिना हमेशा माहौल को खुशनुमा बना देते हैं।",
            "एक बेहद समर्पित बेटे के रूप में जाने जाते हैं जो अपनी माँ से बहुत प्यार करते हैं — प्रशंसक उन्हें प्यार से 'माँ का लाडला' (mom's boy) कहते हैं।",
            "फैन साइन इवेंट्स में प्रशंसकों के उदास महसूस करने पर उनके लिए सहज रूप से गाना गाने के लिए प्रसिद्ध हैं।",
            "सेवेनटीन के सबसे अच्छे होस्ट (MC) — उन्हें प्रमुख पुरस्कार समारोहों की मेजबानी के लिए नियमित रूप से आमंत्रित किया जाता है।"
          ],
          pt: [
            "Da Ilha de Jeju — usa um dialeto único de Jeju que o torna um favorito instantâneo em programas de variedades.",
            "Classificado como o nº 1 em talento para variedades no SEVENTEEN — sempre anima o ambiente independentemente das circunstâncias.",
            "Conhecido como um filho extremamente dedicado que adora sua mãe — os fãs o chamam carinhosamente de 'filhinho da mamãe'.",
            "Famoso por cantar espontaneamente para os fãs em eventos de autógrafos quando dizem que estão se sentindo tristes.",
            "Melhor mestre de cerimônias do SEVENTEEN — convidado regularmente para apresentar grandes cerimônias de premiação."
          ],
          ar: [
            "من جزيرة جيجو، ويستخدم لهجة جيجو الفريدة التي تجعله محبوباً جداً في البرامج الترفيهية.",
            "يُعتبر رقم 1 في مهارات البرامج الترفيهية في سيفنتين، ويشتهر بكونه 'سونغكوان الفنان الترفيهي' الذي يحيي الأجواء في أي موقف.",
            "يُعرف بكونه ابناً باراً يحب والدته بشدة، ويلقبه المعجبون بـ 'مجنون بحب أمه'.",
            "يشتهر بالغناء العفوي للمعجبين في حفلات توقيع المعجبين إذا قالوا إنهم يشعرون بالاكتئاب.",
            "يمتلك أفضل مهارات التقديم في سيفنتين، ويُدعى بانتظام لتقديم مختلف حفلات الجوائز."
          ],
          th: [
            "มาจากเกาะเชจูและใช้ภาษาถิ่นเชจูที่มีเอกลักษณ์จนได้รับความรักอย่างมากในรายการวาไรตี้",
            "ถูกยกให้เป็นอันดับ 1 ด้านความสามารถในรายการวาไรตี้ของวง มีชื่อเสียงในฐานะ 'คนบันเทิงซึงกวาน' ที่สร้างบรรยากาศได้ทุกสถานการณ์",
            "เป็นที่รู้จักในฐานะลูกกตัญญูที่รักแม่มาก แฟนๆ จึงตั้งฉายาให้ว่า 'คนติดแม่'",
            "มีชื่อเสียงเรื่องการร้องเพลงให้แฟนๆ ฟังทันทีในงานแจกลายเซ็น หากแฟนคลับบอกว่ารู้สึกหดหู่",
            "เป็นคนที่มีความสามารถในการเป็นพิธีกรดีที่สุดในวง จึงได้รับเชิญให้เป็นพิธีกรในงานประกาศรางวัลต่างๆ บ่อยครั้ง"
          ],
          vi: [
            "Đến từ đảo Jeju và sử dụng phương ngữ Jeju độc đáo nên anh rất được yêu thích trong các chương trình giải trí.",
            "Được xếp hạng nhất về khả năng giải trí trong SEVENTEEN, nổi tiếng với danh hiệu 'Nghệ sĩ giải trí Seungkwan' luôn làm sôi động bầu không khí trong bất kỳ tình huống nào.",
            "Được biết đến là một người con hiếu thảo hết mực yêu thương mẹ, anh được người hâm mộ gọi thân mật là 'chàng trai của mẹ'.",
            "Nổi tiếng với việc hát ngẫu hứng cho người hâm mộ tại các buổi ký tặng nếu họ nói rằng đang cảm thấy buồn.",
            "Anh là người có kỹ năng làm MC tốt nhất trong SEVENTEEN và thường xuyên được mời làm MC cho các lễ trao giải khác nhau."
          ],
          ru: [
            "Уроженец острова Чеджу, он использует уникальный диалект Чеджу, который делает его любимцем развлекательных шоу.",
            "Занимает первое место по таланту в шоу среди SEVENTEEN; он известен как «артист Сынгван», способный оживить любую атмосферу.",
            "Известен как очень любящий сын, который обожает свою мать; фанаты ласково называют его «маминым сыночком».",
            "Знаменит тем, что спонтанно поет для фанатов на автограф-сессиях, если они говорят, что им грустно.",
            "Лучший ведущий в SEVENTEEN; его регулярно приглашают вести крупные церемонии награждения."
          ]
        },
        socials: {}
      },
      {
        id: "vernon",
        name: { ko: "버논", en: "Vernon", ja: "バーノン", zh: "崔瀚率", es: "Vernon", id: "Vernon", fr: "Vernon", hi: "वरनोन", pt: "Vernon", ar: "فيرنون", th: "เวอร์นอน", vi: "Vernon", ru: "Вернон" },
        role: { ko: "힙합팀, 래퍼", en: "Hip-hop Unit, Rapper", ja: "ヒップホップチーム、ラッパー", zh: "嘻哈分队，说唱手", es: "Unidad de Hip-hop, Rapero", id: "Unit Hip-hop, Rapper", fr: "Unité Hip-hop, Rappeur", hi: "हिप-हॉप यूनिट, रैपर", pt: "Unidade Hip-hop, Rapper", ar: "وحدة الهيب هوب، رابر", th: "ทีมฮิปฮอป, แร็ปเปอร์", vi: "Nhóm Hip-hop, Rapper", ru: "Хип-хоп группа, рэпер" },
        birth: "1998.02.18",
        bloodType: "O",
        mbti: "INFP",
        height: "180cm",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Vernon+Chwe+Hansol+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "뉴욕 출신 한미 혼혈 래퍼. GQ 커버 장식 후 명품 브랜드 러브콜이 쏟아지는 패션 아이콘이며 '버논 한국어' 밈으로도 글로벌 인지도가 높다.",
          en: "Half-Korean, half-American rapper from New York. A fashion icon after his GQ cover appearance, and globally recognized for the 'Vernon Korean' pronunciation meme that's charmed fans worldwide.",
          ja: "ニューヨーク出身の米韓ハーフのラッパー。GQの表紙を飾った後、高級ブランドからのオファーが絶えないファッションアイコンであり、「バーノン韓国語」というミームでも世界的に有名です。",
          zh: "出身纽约的美韩混血说唱手。登上GQ封面后，各大名牌纷纷伸出橄榄枝，成为时尚宠儿，并因其独特的“韩语发音”在全网走红。",
          es: "Rapero de ascendencia coreano-estadounidense nacido en Nueva York. Es un icono de la moda que recibe constantes ofertas de marcas de lujo tras aparecer en la portada de GQ, y es reconocido mundialmente por el meme de su peculiar forma de hablar coreano.",
          id: "Rapper keturunan Korea-Amerika asal New York. Menjadi ikon fesyen yang diburu merek mewah setelah menghiasi sampul GQ, dan dikenal secara global melalui meme pengucapan bahasa Koreanya yang unik.",
          fr: "Rappeur américano-coréen né à New York. Icône de la mode très sollicitée par les marques de luxe après sa couverture de GQ, il est aussi mondialement connu pour le mème sur sa prononciation du coréen.",
          hi: "न्यूयॉर्क के रहने वाले आधा-कोरियाई, आधा-अमेरिकी रैपर। GQ के कवर पर आने के बाद से वे एक फैशन आइकन बन गए हैं, और प्रशंसक उनके 'वरनोन कोरियन' उच्चारण वाले मीम्स को बहुत पसंद करते हैं।",
          pt: "Rapper coreano-americano de Nova York. Um ícone da moda muito requisitado por marcas de luxo após estampar a capa da GQ, sendo reconhecido globalmente pelo meme de sua pronúncia única em coreano.",
          ar: "رابر كوري-أمريكي من نيويورك. أصبح أيقونة في عالم الموضة وتلقى عروضاً من أفخم الماركات العالمية بعد ظهوره على غلاف مجلة GQ، ويشتهر عالمياً بميم 'فيرنون يتحدث الكورية' الذي يعشقه المعجبون.",
          th: "แร็ปเปอร์ลูกครึ่งเกาหลี-อเมริกันจากนิวยอร์ก เป็นไอคอนด้านแฟชั่นที่แบรนด์หรูต่างรุมจีบหลังจากขึ้นปกนิตยสาร GQ และเป็นที่รู้จักไปทั่วโลกจากมีมการออกเสียงภาษาเกาหลีที่เป็นเอกลักษณ์",
          vi: "Rapper mang hai dòng máu Hàn - Mỹ đến từ New York. Một biểu tượng thời trang nhận được vô số lời mời từ các thương hiệu xa xỉ sau khi xuất hiện trên bìa tạp chí GQ, và nổi tiếng toàn cầu với meme về cách phát âm tiếng Hàn độc đáo.",
          ru: "Корейско-американский рэпер из Нью-Йорка. Икона моды, востребованная люксовыми брендами после появления на обложке GQ, широко известный в мире благодаря мемам о его уникальном корейском произношении."
        },
        tmi: {
          ko: [
            "미국 뉴욕 출신 한미 혼혈로, 영어와 한국어를 모두 완벽하게 구사한다.",
            "어린 시절 오디션 영상이 공개됐을 때 이미 완성형 퍼포머였다는 사실이 밝혀져 화제가 됐다.",
            "말이 적고 철학적인 성격으로 팬들 사이에서 '세븐틴 철학자'라는 별명을 얻었다.",
            "GQ 잡지 커버 장식 후 글로벌 패션 아이콘으로 주목받기 시작해 명품 브랜드 러브콜이 이어지고 있다.",
            "한국어 발음이 독특해 '버논 한국어'가 팬들 사이에서 밈(meme)이 됐다."
          ],
          en: [
            "Half Korean, half American from New York City — speaks both English and Korean perfectly.",
            "His childhood audition footage showed he was already a complete performer even then — fans were amazed.",
            "Rarely speaks but is deeply philosophical — known as 'SEVENTEEN's philosopher' in the fandom.",
            "After gracing GQ's cover, luxury brand calls poured in — now a recognized global fashion icon.",
            "His unique Korean pronunciation became a fan meme — 'Vernon Korean' is its own inside joke."
          ],
          ja: [
            "ニューヨーク出身の米韓ハーフで、英語と韓国語の両方を完璧に話せます。",
            "子供の頃のオーディション映像が公開された際、すでに完成されたパフォーマーだったことが判明し、話題になりました。",
            "口数は少ないですが哲学的で、ファンの間では「SEVENTEENの哲学者」というあだ名があります。",
            "GQのカバーを飾った後、高級ブランドからのラブコールが相次ぎ、現在は世界的なファッションアイコンとして注目されています。",
            "韓国語の発音が独特なため、「バーノン韓国語」という言葉がファンの間でミームになりました。"
          ],
          zh: [
            "出身纽约的美韩混血，英语和韩语都说得非常流利。",
            "小时候的试镜视频公开后，粉丝们发现他当时就已经是实力完整的表演者，引起了热议。",
            "性格文静且富有哲思，在粉丝中被亲切地称为“SEVENTEEN的哲学家”。",
            "登上GQ封面后，各大名牌纷纷邀约，如今已是公认的全球时尚偶像。",
            "韩语发音非常独特，“瀚率式韩语”在粉丝中成为了一个有趣的梗。"
          ],
          es: [
            "Nacido en Nueva York de ascendencia coreano-estadounidense, habla perfectamente tanto inglés como coreano.",
            "Cuando se revelaron sus videos de audición de la infancia, se convirtió en tendencia porque ya era un artista completo en ese entonces.",
            "Es de pocas palabras pero muy filosófico, lo que le ha valido el apodo de 'el filósofo de SEVENTEEN' entre los fans.",
            "Tras aparecer en la portada de GQ, recibió numerosas ofertas de marcas de lujo y ahora es un reconocido icono de la moda mundial.",
            "Su pronunciación única del coreano se convirtió en un meme entre los fans — el 'coreano de Vernon' es una broma interna muy popular."
          ],
          id: [
            "Keturunan Korea-Amerika asal New York, menguasai bahasa Inggris dan Korea dengan sempurna.",
            "Video audisi masa kecilnya sempat viral karena menunjukkan bahwa dia sudah menjadi penampil yang matang bahkan saat itu.",
            "Pendiam namun memiliki kepribadian yang filosofis, hingga dijuluki 'filsuf SEVENTEEN' oleh para penggemar.",
            "Setelah menghiasi sampul GQ, berbagai tawaran dari merek mewah terus berdatangan — kini ia diakui sebagai ikon fesyen global.",
            "Pengucapan bahasa Koreanya yang unik menjadi meme di kalangan penggemar — 'Vernon Korean' menjadi candaan internal mereka."
          ],
          fr: [
            "D'origine américano-coréenne et né à New York, il parle parfaitement l'anglais et le coréen.",
            "Ses vidéos d'audition d'enfance ont révélé qu'il était déjà un artiste complet à l'époque, ce qui a beaucoup impressionné les fans.",
            "Peu bavard mais très philosophique, il est surnommé 'le philosophe de SEVENTEEN' par les fans.",
            "Après avoir fait la couverture de GQ, les marques de luxe se l'arrachent — il est désormais une icône de la mode mondiale reconnue.",
            "Sa prononciation unique du coréen est devenue un mème chez les fans — le 'Vernon Korean' est une blague récurrente dans le fandom."
          ],
          hi: [
            "न्यूयॉर्क के रहने वाले आधा-कोरियाई, आधा-अमेरिकी, वे अंग्रेजी और कोरियन दोनों पूरी तरह से धाराप्रवाह बोलते हैं।",
            "उनके बचपन के ऑडिशन फुटेज ने दिखाया कि वे उस समय भी एक पूर्ण कलाकार थे — प्रशंसक यह देखकर दंग रह गए।",
            "वे कम बोलते हैं लेकिन बहुत दार्शनिक हैं — प्रशंसकों के बीच उन्हें 'SEVENTEEN के दार्शनिक' के रूप में जाना जाता है।",
            "GQ के कवर पर आने के बाद, लग्जरी ब्रांडों की ओर से ढेरों प्रस्ताव आए — अब वे एक मान्यता प्राप्त वैश्विक फैशन आइकन हैं।",
            "उनका कोरियन बोलने का अनोखा तरीका प्रशंसकों के बीच एक मीम बन गया — 'वरनोन कोरियन' उनका अपना एक इनसाइड जोक है।"
          ],
          pt: [
            "Coreano-americano de Nova York, fala perfeitamente tanto inglês quanto coreano.",
            "Suas imagens de audição de infância mostraram que ele já era um artista completo naquela época — os fãs ficaram maravilhados.",
            "Fala pouco, mas é profundamente filosófico — conhecido como o 'filósofo do SEVENTEEN' no fandom.",
            "Depois de estampar a capa da GQ, convites de marcas de luxo não pararam de chegar — hoje ele é um ícone da moda global.",
            "Sua pronúncia única em coreano se tornou um meme entre os fãs — o 'Vernon Korean' é uma piada interna constante."
          ],
          ar: [
            "كوري-أمريكي من نيويورك، يتحدث الإنجليزية والكورية بطلاقة تامة.",
            "أظهرت لقطات تجربة أدائه في طفولته أنه كان فناناً متكاملاً حتى في ذلك الوقت، مما أذهل المعجبين.",
            "قليل الكلام ولكنه ذو شخصية فلسفية، ويُلقب بـ 'فيلسوف سفنتين' بين المعجبين.",
            "بعد ظهوره على غلاف مجلة GQ، تهافتت عليه عروض الماركات العالمية، وهو الآن أيقونة موضة عالمية معترف بها.",
            "أصبح نطقه الفريد للكورية ميم منتشر بين المعجبين، وتُعتبر 'كورية فيرنون' مزحة خاصة داخل الفاندوم."
          ],
          th: [
            "ลูกครึ่งเกาหลี-อเมริกันจากนิวยอร์ก สามารถพูดทั้งภาษาอังกฤษและภาษาเกาหลีได้อย่างสมบูรณ์แบบ",
            "วิดีโอออดิชั่นในวัยเด็กของเขาแสดงให้เห็นว่าเขาเป็นนักแสดงที่สมบูรณ์แบบตั้งแต่ตอนนั้น ซึ่งสร้างความประหลาดใจให้กับแฟนๆ มาก",
            "เป็นคนพูดน้อยแต่มีความคิดที่เป็นปรัชญา จนได้รับฉายาจากแฟนๆ ว่า 'นักปรัชญาแห่ง SEVENTEEN'",
            "หลังจากขึ้นปกนิตยสาร GQ แบรนด์หรูก็ส่งคำเชิญมามากมาย ปัจจุบันเขาได้รับการยอมรับในฐานะไอคอนแฟชั่นระดับโลก",
            "การออกเสียงภาษาเกาหลีที่เป็นเอกลักษณ์ของเขาได้กลายเป็นมีมในหมู่แฟนๆ 'ภาษาเกาหลีแบบเวอร์นอน' จึงกลายเป็นมุกตลกที่รู้กันเฉพาะในกลุ่ม"
          ],
          vi: [
            "Mang hai dòng máu Hàn - Mỹ đến từ New York, anh có thể nói thành thạo cả tiếng Anh và tiếng Hàn.",
            "Đoạn video thử giọng từ thời thơ ấu của anh đã cho thấy anh vốn đã là một người biểu diễn thực thụ ngay từ lúc đó.",
            "Ít nói và có tính cách triết học, anh được người hâm mộ đặt biệt danh là 'triết gia của SEVENTEEN'.",
            "Sau khi xuất hiện trên bìa GQ, anh nhận được vô số lời mời từ các thương hiệu xa xỉ và hiện là một biểu tượng thời trang toàn cầu.",
            "Cách phát âm tiếng Hàn độc đáo của anh đã trở thành một meme trong cộng đồng người hâm mộ — 'Vernon Korean' là một trò đùa nội bộ phổ biến."
          ],
          ru: [
            "Корейско-американского происхождения из Нью-Йорка, он в совершенстве владеет английским и корейским языками.",
            "Видео с его детского прослушивания показало, что он уже тогда был сформировавшимся артистом, что поразило фанатов.",
            "Немногословен, но склонен к философии, за что получил прозвище «философ SEVENTEEN» среди фанатов.",
            "После появления на обложке GQ он получил множество предложений от люксовых брендов и теперь признан мировой иконой моды.",
            "Его уникальное корейское произношение стало фанатским мемом — «корейский Вернона» стал популярной шуткой внутри фандома."
          ]
        },
        socials: {}
      },
      {
        id: "dino",
        name: { ko: "디노", en: "Dino", ja: "ディノ", zh: "李灿", es: "Dino", id: "Dino", fr: "Dino", hi: "डिनो", pt: "Dino", ar: "دينو", th: "ดีโน่", vi: "Dino", ru: "Дино" },
        role: { ko: "퍼포먼스팀, 댄서, 막내", en: "Performance Unit, Dancer, Maknae", ja: "パフォーマンスチーム、ダンサー、末っ子", zh: "表演分队，舞者，忙内", es: "Unidad de Desempeño, Bailarín, Maknae", id: "Unit Performa, Penari, Anggota Termuda (Maknae)", fr: "Unité Performance, Danseur, Maknae", hi: "परफॉर्मेंス यूनिट, डांसर, मकाने (सबसे छोटा सदस्य)", pt: "Unidade de Performance, Dançarino, Maknae", ar: "وحدة الأداء، راقص، الماكني (أصغر عضو)", th: "ทีมเพอร์ฟอร์แมนซ์, แดนเซอร์, น้องเล็ก (มักเน่)", vi: "Nhóm Performance, Vũ công, Em út", ru: "Перформанс-группа, танцор, макнэ" },
        birth: "1999.02.11",
        bloodType: "B",
        mbti: "ISFP",
        height: "173cm",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Dino+Lee+Chan+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: {
          ko: "마이클 잭슨을 롤모델로 삼은 세븐틴 막내 댄서. 6년 연습 끝에 데뷔한 성실함과 '막내 같지 않은 막내'의 성숙한 퍼포먼스가 트레이드마크다.",
          en: "SEVENTEEN's youngest dancer with Michael Jackson as his role model. Six years of training before debut — and a performance maturity so remarkable he's called 'the maknae who doesn't act like a maknae'.",
          ja: "マイケル・ジャクソンをロールモデルとするSEVENTEENの末っ子ダンサー。6年の練習生生活を経てデビューした誠実さと、「末っ子らしくない末っ子」と呼ばれる成熟したパフォーマンスが特徴です。",
          zh: "以迈克尔·杰克逊为榜样的SEVENTEEN忙内舞者。历经6年练习生涯，凭着诚恳的态度和“完全不像忙内”的成熟表演，深得粉丝喜爱。",
          es: "El bailarín más joven de SEVENTEEN que tiene a Michael Jackson como modelo a seguir. Su dedicación tras 6 años de entrenamiento y su madurez en el escenario le han valido el apodo de 'el maknae que no parece un maknae'.",
          id: "Penari termuda SEVENTEEN yang menjadikan Michael Jackson sebagai panutannya. Kegigihan melalui masa pelatihan 6 tahun dan kedewasaan performanya membuatnya dijuluki 'maknae yang tidak seperti maknae'.",
          fr: "Le plus jeune danseur de SEVENTEEN, avec Michael Jackson pour modèle. Sa persévérance après 6 ans d'entraînement et la maturité de ses performances lui valent d'être surnommé 'le maknae qui n'agit pas comme un maknae'.",
          hi: "माइकल जैक्सन को अपना आदर्श मानने वाले SEVENTEEN के सबसे युवा डांसर। 6 साल के कड़े अभ्यास के बाद उन्होंने डेब्यू किया, और उनके परिपक्व प्रदर्शन के कारण उन्हें 'ऐसा मकाने जो सबसे छोटा नहीं लगता' कहा जाता है।",
          pt: "O dançarino mais jovem do SEVENTEEN, tendo Michael Jackson como modelo. Sua dedicação após 6 anos de treinamento e a maturidade de sua performance lhe renderam o apelido de 'o maknae que não parece um maknae'.",
          ar: "أصغر راقص في سفنتين، يتخذ من مايكل جاكسون قدوة له. يتميز باجتهاده بعد 6 سنوات من التدريب وبأدائه الناضج الذي جعل الجميع يلقبه بـ 'الماكني الذي لا يبدو كالماكني'.",
          th: "นักเต้นน้องเล็กของ SEVENTEEN ที่มีไมเคิล แจ็กสันเป็นต้นแบบ ความมุ่งมั่นจากการเป็นเด็กฝึกถึง 6 ปีก่อนเดบิวต์ และการแสดงที่ดูเป็นผู้ใหญ่จนได้รับฉายาว่า 'น้องเล็กที่ไม่เหมือนน้องเล็ก'",
          vi: "Vũ công ít tuổi nhất của SEVENTEEN với hình mẫu lý tưởng là Michael Jackson. Sự kiên trì sau 6 năm thực tập và phong cách trình diễn trưởng thành khiến anh được gọi là 'em út nhưng không giống em út'.",
          ru: "Самый молодой танцор SEVENTEEN, для которого Майкл Джексон является кумиром. Его усердие после 6 лет стажировки и зрелое исполнение принесли ему прозвище «макнэ, который не ведет себя как макнэ»."
        },
        tmi: {
          ko: [
            "세븐틴 막내이지만 데뷔 때부터 '막내 같지 않은 막내'로 성숙한 퍼포먼스를 선보여 왔다.",
            "마이클 잭슨을 롤모델로 삼아 댄스 스타일에도 MJ 영향이 강하게 드러나는 것으로 유명하다.",
            "직접 안무를 짜고 멤버들과 공유하는 창작 욕구가 강한 퍼포머다.",
            "세븐틴에서 가장 오랫동안 연습생 생활을 한 멤버로, 데뷔까지 6년을 기다렸다.",
            "팬들에게 항상 성실하고 겸손한 태도를 유지하는 '모범생 디노'로 사랑받는다."
          ],
          en: [
            "SEVENTEEN's youngest, but never acted like it — his mature performances have impressed since debut.",
            "Michael Jackson is his role model — MJ's influence is clearly visible in his dance style.",
            "A creative performer who composes choreography and shares it with members.",
            "Waited 6 years as a trainee before debuting — the longest trainee period in SEVENTEEN.",
            "Consistently maintains a humble and diligent attitude — fans adore him as 'model student Dino'."
          ],
          ja: [
            "SEVENTEENの末っ子ですが、デビュー当時から「末っ子らしくない末っ子」として成熟したパフォーマンスを披露してきました。",
            "マイケル・ジャクソン을ロールモデルにしており、ダンススタイルにもMJの影響が強く表れていることで有名です。",
            "自ら振り付けを考え、メンバーと共有する創作意欲の高いパフォーマーです。",
            "SEVENTEENの中で最も練習生期間が長く、デビューまで6年待ちました。",
            "常に誠実で謙虚な態度を崩사ず、ファンからは「模範生ディノ」として愛されています。"
          ],
          zh: [
            "虽然是SEVENTEEN的忙内，但从出道起就展现出成熟的表演，被称为“最不像忙内的忙内”。",
            "以迈克尔·杰克逊为榜样，他的舞蹈风格中也能明显看到迈克尔的影子。",
            "是一位创作欲望强烈的表演者，经常亲自编舞并与成员们分享。",
            "是SEVENTEEN中练习生时间最长的成员，为出道等待了整整6年。",
            "始终保持谦逊勤奋的态度，被粉丝们亲切地称为“模範生李灿”。"
          ],
          es: [
            "Es el más joven de SEVENTEEN, pero nunca actuó como tal; sus actuaciones maduras han impresionado desde su debut.",
            "Michael Jackson es su modelo a seguir, y su influencia es claramente visible en su estilo de baile.",
            "Es un artista creativo que compone coreografías y las comparte con los demás miembros.",
            "Fue el miembro con el periodo de entrenamiento más largo en SEVENTEEN, esperando 6 años para debutar.",
            "Mantiene constantemente una actitud humilde y diligente; los fans lo adoran como el 'estudiante modelo Dino'."
          ],
          id: [
            "Meskipun anggota termuda, ia tidak pernah bersikap seperti itu — performanya yang matang telah memukau sejak debut.",
            "Michael Jackson adalah panutannya — pengaruh MJ terlihat jelas dalam gaya menarinya.",
            "Penampil kreatif yang menyusun koreografi dan membagikannya kepada anggota lainnya.",
            "Menjalani masa pelatihan terlama di SEVENTEEN, ia menunggu selama 6 tahun sebelum akhirnya debut.",
            "Selalu menjaga sikap rendah hati dan rajin — penggemar memujanya sebagai 'siswa teladan Dino'."
          ],
          fr: [
            "C'est le plus jeune de SEVENTEEN, mais il n'a jamais agi comme tel — ses performances matures impressionnent depuis ses débuts.",
            "Michael Jackson est son modèle — l'influence de MJ est clairement visible dans son style de danse.",
            "C'est un artiste créatif qui compose des chorégraphies et les partage avec les autres membres.",
            "Il a eu la plus longue période d'entraînement de SEVENTEEN, attendant 6 ans avant de débuter.",
            "Il garde toujours une attitude humble et appliquée — les fans l'adorent et le surnomment 'l'élève modèle Dino'."
          ],
          hi: [
            "वे SEVENTEEN के सबसे छोटे सदस्य हैं, लेकिन उन्होंने कभी ऐसा व्यवहार नहीं किया — उनके परिपक्व प्रदर्शन ने डेब्यू के समय से ही सबको प्रभावित किया है।",
            "माइकल जैक्सन उनके आदर्श हैं — उनके डांस स्टाइल में एमजे का प्रभाव स्पष्ट रूप से दिखाई देता है।",
            "वे एक रचनात्मक कलाकार हैं जो कोरियोग्राफी तैयार करते हैं और उसे सदस्यों के साथ साझा करते हैं।",
            "डेब्यू करने से पहले उन्होंने 6 साल तक प्रशिक्षु (trainee) के रूप में इंतजार किया — यह SEVENTEEN में सबसे लंबी प्रशिक्षु अवधि है।",
            "वे हमेशा विनम्र और मेहनती रवैया बनाए रखते हैं — प्रशंसक उन्हें 'आदर्श छात्र डिनो' के रूप में प्यार करते हैं।"
          ],
          pt: [
            "O mais novo do SEVENTEEN, mas nunca agiu como tal — suas performances maduras impressionam desde o debut.",
            "Michael Jackson é seu modelo — a influência de MJ é claramente visível em seu estilo de dança.",
            "Um artista criativo que compõe coreografias e as compartilha com os membros.",
            "Esperou 6 anos como trainee antes de debutar — o período de treinamento mais longo do SEVENTEEN.",
            "Mantém constantemente uma atitude humilde e diligente — os fãs o adoram como o 'aluno modelo Dino'."
          ],
          ar: [
            "أصغر عضو في سفنتين، لكنه لم يتصرف كذلك أبداً؛ أدائه الناضج أبهر الجميع منذ ترسيمه.",
            "مايكل جاكسون هو قدوته، وتأثير مايكل يظهر بوضوح في أسلوب رقصه.",
            "فنان مبدع يقوم بتصميم الرقصات ويشاركها مع الأعضاء.",
            "قضى أطول فترة تدريب في سفنتين، حيث انتظر 6 سنوات قبل ترسيمه.",
            "يحافظ دائماً على تواضعه واجتهاده، ويعشقه المعجبون ويلقبونه بـ 'الطالب المثالي دينو'."
          ],
          th: [
            "เป็นน้องเล็กของ SEVENTEEN แต่ไม่เคยทำตัวเหมือนน้องเล็ก การแสดงที่ดูเป็นผู้ใหญ่ของเขาสร้างความประทับใจมาตั้งแต่เดบิวต์",
            "ไมเคิล แจ็กสันคือต้นแบบของเขา อิทธิพลของ MJ จึงปรากฏให้เห็นอย่างชัดเจนในสไตล์การเต้นของเขา",
            "เป็นนักแสดงที่มีความสร้างสรรค์ ชอบคิดท่าเต้นเองและแบ่งปันกับสมาชิกในวง",
            "เป็นสมาชิกที่ใช้เวลาเป็นเด็กฝึกนานที่สุดใน SEVENTEEN โดยรอคอยการเดบิวต์นานถึง 6 ปี",
            "รักษาทัศนคติที่อ่อนน้อมและขยันหมั่นเพียรอยู่เสมอ แฟนๆ ต่างรักเขาในฐานะ 'นักเรียนตัวอย่างดีโน่'"
          ],
          vi: [
            "Là em út của SEVENTEEN nhưng từ khi ra mắt, anh đã luôn thể hiện những màn trình diễn trưởng thành, không giống một em út.",
            "Lấy Michael Jackson làm hình mẫu lý tưởng, ảnh hưởng của MJ thể hiện rất rõ trong phong cách nhảy của anh.",
            "Một nghệ sĩ có khao khát sáng tạo mãnh liệt, anh thường tự biên đạo các điệu nhảy và chia sẻ with các thành viên.",
            "Là thành viên có thời gian thực tập lâu nhất trong SEVENTEEN, anh đã chờ đợi 6 năm để được ra mắt.",
            "Luôn giữ thái độ khiêm tốn và chăm chỉ, anh được người hâm mộ yêu mến gọi là 'học sinh gương mẫu Dino'."
          ],
          ru: [
            "Самый младший в SEVENTEEN, но никогда не вел себя как макнэ — его зрелые выступления впечатляют с самого дебюта.",
            "Майкл Джексон — его кумир, и его влияние отчетливо заметно в стиле танца Дино.",
            "Творческий исполнитель, который сам ставит хореографию и делится ею с участниками группы.",
            "Стажировался дольше всех в SEVENTEEN, прождав дебюта 6 лет.",
            "Всегда сохраняет скромность и усердие, за что фанаты обожают его и называют «образцовым учеником Дино»."
          ]
        },
        socials: {}
      }
    ]
  },

  // ==================== ENHYPEN ====================
  {
    id: "enhypen",
    name: { ko: "엔하이픈", en: "ENHYPEN", ja: "エンハイフン", zh: "ENHYPEN", es: "ENHYPEN", id: "ENHYPEN", fr: "ENHYPEN", hi: "एनहाइफन", pt: "ENHYPEN", ar: "إنهايفن", th: "เอนไฮเฟน", vi: "ENHYPEN", ru: "ENHYPEN" },
    description: {
      ko: "HYBE·빌리프랩 소속 7인조 보이그룹. 글로벌 오디션 프로그램 'I-LAND'를 통해 결성됐으며, 2025 Spotify K-Pop 9위로 4세대 보이그룹 중 최상위권에 위치한 그룹.",
      en: "7-member boy group under HYBE·Belift Lab. Formed through global audition show 'I-LAND', ranked #9 on Spotify 2025 K-Pop — one of the highest positions for a 4th gen boy group.",
      ja: "HYBE・ビリーフラボ所属の7人組ボーイズグループ。グローバルオーディション番組「I-LAND」を通じて結成され、Spotify 2025 K-Pop 9位を獲得した4世代ボーイグループのトップ。",
      zh: "HYBE·Belift Lab旗下7人男团。通过全球选秀节目'I-LAND'组建，2025年Spotify K-Pop排名第9，是第四代男团中最高排名之一。",
      es: "Grupo masculino de 7 miembros bajo HYBE·Belift Lab. Formado a través del programa de audiciones global 'I-LAND', clasificado #9 en Spotify K-Pop 2025.",
      id: "Grup pria 7 anggota di bawah HYBE·Belift Lab. Dibentuk melalui program audisi global 'I-LAND', meraih posisi #9 di Spotify K-Pop 2025.",
      fr: "Groupe masculin de 7 membres sous HYBE·Belift Lab. Formé via le programme d'audition mondial 'I-LAND', classé #9 sur Spotify K-Pop 2025.",
      hi: "HYBE·Belift Lab के तहत 7 सदस्यीय बॉय ग्रुप। 'I-LAND' ग्लोबल ऑडिशन शो से बना, Spotify 2025 K-Pop में #9।",
      pt: "Grupo masculino de 7 membros sob HYBE·Belift Lab. Formado através do programa de audição global 'I-LAND', classificado em #9 no Spotify K-Pop 2025.",
      ar: "مجموعة فتيان من 7 أعضاء تحت HYBE·Belift Lab. تشكلت عبر برنامج التصفيات العالمي 'I-LAND'، في المرتبة 9 على Spotify K-Pop 2025.",
      th: "กลุ่มชาย 7 คนภายใต้ HYBE·Belift Lab ก่อตั้งผ่านรายการออดิชัน 'I-LAND' อันดับ 9 Spotify K-Pop 2025",
      vi: "Nhóm nhạc nam 7 thành viên thuộc HYBE·Belift Lab. Thành lập qua chương trình I-LAND, xếp hạng #9 Spotify K-Pop 2025.",
      ru: "Мужская группа из 7 участников под HYBE·Belift Lab. Основана через глобальное шоу I-LAND, заняла #9 в Spotify K-Pop 2025."
    },
    fandom: { ko: "엔진 (ENGENE)", en: "ENGENE", ja: "エンジン (ENGENE)", zh: "ENGENE", es: "ENGENE", id: "ENGENE", fr: "ENGENE", hi: "ENGENE", pt: "ENGENE", ar: "إنجين (ENGENE)", th: "เอนจิน (ENGENE)", vi: "ENGENE", ru: "ENGENE" },
    debut: "2020.11.30",
    accentColor: "#9d00ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+group+kpop+2024+official&w=500&h=500&c=7&rs=1&p=0",
    wiki: {
      ko: "엔하이픈(ENHYPEN)은 HYBE·빌리프랩 소속의 7인조 보이그룹입니다. 2020년 Mnet 글로벌 오디션 프로그램 'I-LAND'를 통해 결성됐으며 같은 해 11월 데뷔했습니다. 하이픈(-)처럼 사람과 사람, 세계와 세계를 연결한다는 그룹명의 의미처럼, 한국·일본·미국·호주 출신의 다국적 멤버 구성으로 글로벌 팬덤을 보유하고 있습니다. 2025 Spotify K-Pop 9위를 기록한 4세대 대표 보이그룹입니다.",
      en: "ENHYPEN is a 7-member boy group under HYBE·Belift Lab, formed through Mnet's global audition show 'I-LAND' in 2020 and debuting the same November. Like a hyphen connecting people and worlds, their multinational lineup (Korea, Japan, USA, Australia) reflects their global identity. They rank #9 on Spotify K-Pop 2025 — one of the top 4th generation boy groups worldwide."
    },
    company: "HYBE · Belift Lab",
    tmi: {
      ko: [
        "그룹명 ENHYPEN의 의미는 '하이픈(-)처럼 서로를 연결하고 새로운 것을 만들어 가는 그룹'이다.",
        "글로벌 오디션 'I-LAND'에서 전 세계 팬들의 투표로 최종 멤버가 결정됐다.",
        "데뷔 1주년 만에 빌보드 200 진입, K-Pop 신인 역사를 새로 썼다.",
        "뱀파이어·달빛·어둠 등 신비로운 세계관을 중심으로 스토리텔링 앨범을 제작한다.",
        "멤버 전원이 평균 나이 20대 초반의 젊은 구성으로 '4세대 최강 자리' 경쟁 중이다.",
        "일본 데뷔 앨범이 오리콘 1위를 기록해 한일 양국에서 동시에 사랑받는 그룹이다.",
        "BTS와 같은 레이블 HYBE 소속이라는 점이 데뷔 초부터 전 세계 주목을 받는 원동력이 됐다.",
        "2025년 발매한 'ROMANCE : UNTOLD' 시리즈가 팬들 사이에서 역대급 앨범으로 평가받는다.",
        "멤버 모두가 다양한 국적(한국·일본·미국·호주)을 보유한 글로벌 구성이다.",
        "Spotify 2025 K-Pop 9위로, 4세대 보이그룹 중 스트레이 키즈 다음으로 높은 순위를 기록했다."
      ],
      en: [
        "The name ENHYPEN means 'connected by a hyphen — connecting people and creating something new'.",
        "Final members were chosen by global fan votes during 'I-LAND' — truly built by the fans.",
        "Entered the Billboard 200 within their first year — rewriting K-pop rookie history.",
        "Their albums are built around a rich narrative universe involving vampires, moonlight, and mystery.",
        "All members are in their early 20s — fiercely competing for the '4th gen #1' crown.",
        "Their Japanese debut album topped Oricon, making them beloved in both Korea and Japan.",
        "Being under HYBE (same label as BTS) drew global spotlight from day one of their debut.",
        "The 2025 'ROMANCE : UNTOLD' series is considered their best album to date by fans.",
        "Members come from diverse nationalities — Korea, Japan, the US, Australia — a global lineup.",
        "Ranked #9 on Spotify K-Pop 2025 — the highest-charting 4th gen boy group after Stray Kids."
      ]
    },
    news: [
      { title: { ko: "엔하이픈, Spotify 2025 K-Pop Wrapped 9위", en: "ENHYPEN ranks #9 on Spotify 2025 K-Pop Wrapped" }, date: "2025.11.20", summary: { ko: "4세대 보이그룹 최상위권으로 글로벌 팬덤 확인", en: "Confirmed as top 4th gen boy group with a global fanbase" }, url: "#" },
      { title: { ko: "'ROMANCE : UNTOLD' 스포티파이 글로벌 200 진입", en: "'ROMANCE : UNTOLD' enters Spotify Global 200" }, date: "2025.07.12", summary: { ko: "발매 24시간 만에 스포티파이 글로벌 200 차트 진입", en: "Entered Spotify Global 200 chart within 24 hours of release" }, url: "#" },
      { title: { ko: "월드투어 'FATE PLUS' 전석 매진", en: "World tour 'FATE PLUS' sells out" }, date: "2025.03.15", summary: { ko: "북미·유럽·아시아 전 회차 전석 매진 달성", en: "All shows across North America, Europe and Asia sold out" }, url: "#" },
      { title: { ko: "일본 돔 투어 성공적 마무리", en: "Japan dome tour successfully completed" }, date: "2025.02.01", summary: { ko: "도쿄돔·오사카돔 연속 공연으로 일본 팬덤 결집", en: "Tokyo Dome and Osaka Dome back-to-back performances" }, url: "#" },
      { title: { ko: "성훈, Burberry 글로벌 앰배서더 발탁", en: "Sunghoon named Burberry global ambassador" }, date: "2024.09.10", summary: { ko: "글로벌 패션 브랜드 Burberry의 공식 앰배서더로 선정", en: "Selected as official ambassador for global fashion brand Burberry" }, url: "#" },
    ],
    members: [
      {
        id: "jungwon",
        name: { ko: "정원", en: "Jungwon", ja: "ジョンウォン", zh: "梁祯元", es: "Jungwon", id: "Jungwon", fr: "Jungwon", hi: "जुंगवोन (Jungwon)", pt: "Jungwon", ar: "جونغوون (Jungwon)", th: "จองวอน", vi: "Jungwon", ru: "Чонвон" },
        role: { ko: "리더, 보컬", en: "Leader, Vocalist", ja: "リーダー、ボーカル", zh: "队长、声乐", es: "Líder, Vocalista", id: "Pemimpin, Vokalis", fr: "Leader, Vocaliste", hi: "लीडर, वोकलिस्ट", pt: "Líder, Vocalista", ar: "قائد، مغني", th: "ลีดเดอร์, นักร้อง", vi: "Trưởng nhóm, Ca sĩ", ru: "Лидер, Вокалист" },
        birth: "2004.02.09",
        bloodType: "O",
        mbti: "ISFJ",
        height: "174cm",
        zodiac: { ko: "물병자리", en: "Aquarius", ja: "みずがめ座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ (Aquarius)", pt: "Aquário", ar: "برج الدلو", th: "ราศีกุมภ์", vi: "Bảo Bình", ru: "Водолей" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jungwon+Yang+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "엔하이픈의 리더로 뛰어난 리더십과 음악적 감성을 겸비한 보컬리스트.", en: "The leader of ENHYPEN, a vocalist who combines exceptional leadership with musical sensibility.", ja: "ENHYPENのリーダー。優れたリーダーシップと音楽적感性を兼ね備えたボーカリスト。", zh: "ENHYPEN的队长，是一位兼具卓越领导力和音乐感性的主唱。", es: "El líder de ENHYPEN, un vocalista que combina un liderazgo excepcional con sensibilidad musical.", id: "Pemimpin ENHYPEN, seorang vokalis yang menggabungkan kepemimpinan luar biasa dengan sensibilitas musik.", fr: "Le leader d'ENHYPEN, un chanteur qui allie un leadership exceptionnel à une sensibilité musicale.", hi: "ENHYPEN के लीडर, एक गायक जो संगीत की समझ के साथ उत्कृष्ट नेतृत्व कौशल का मेल हैं।", pt: "O líder do ENHYPEN, um vocalista que combina uma liderança excepcional com sensibilidade musical.", ar: "قائد فرقة ENHYPEN، مغني يجمع بين القيادة الاستثنائية والحس الموسيقي العميق.", th: "ลีดเดอร์ของ ENHYPEN นักร้องที่มีทั้งความเป็นผู้นำที่ยอดเยี่ยมและความรู้สึกทางดนตรีที่ลึกซึ้ง", vi: "Trưởng nhóm của ENHYPEN, một ca sĩ kết hợp giữa khả năng lãnh đạo xuất sắc và cảm nhận âm nhạc sâu sắc.", ru: "Лидер ENHYPEN, вокалист, сочетающий в себе исключительные лидерские качества и музыкальную чуткость." },
        tmi: {
          ko: [
            "엔하이픈 막내급 나이임에도 리더로 선발돼 7명을 이끄는 남다른 리더십을 인정받는다.",
            "고양이를 너무 좋아해 팬들 사이에서 '고양이 인간'이라는 별명이 있다.",
            "뛰어난 음악적 감수성으로 작사에 참여하며 자체 제작 능력을 키워가고 있다.",
            "평소 말이 많지 않지만 무대에서는 강렬한 눈빛으로 팬들을 압도하는 '무대 체인지' 캐릭터다.",
            "I-LAND 시절부터 리더 후보 1순위로 꼽혔으며, 실제로 팀 결성 후 리더가 됐다."
          ],
          en: [
            "Despite being one of the youngest members, he was selected as leader and is recognized for his exceptional leadership.",
            "He loves cats so much that fans nicknamed him 'Cat Human'.",
            "He participates in lyric writing with his musical sensibility and is developing his producing skills.",
            "He is usually quiet, but on stage, he overwhelms fans with his intense gaze, showing a 'stage switch' character.",
            "He was considered the top candidate for leader since I-LAND and officially became the leader after the group was formed."
          ],
          ja: [
            "ENHYPENの末っ子ラインでありながらリーダーに選ばれ、7人を率いる並外れたリーダーシップが認められています。",
            "猫が大好きで、ファンの間では「猫人間」というあだ名があります。",
            "優れた音楽的感性で製作に参加し、セルフプロデュース能力を磨いています。",
            "普段は口数が少ない方ですが、ステージでは強烈な眼差しでファンを圧倒するギャップの持ち主です。",
            "I-LAND時代からリーダー候補の1位に挙げられており、実際にチーム結成後にリーダーとなりました。"
          ],
          zh: [
            "尽管是ENHYPEN中年纪较小的成员，但被选为队长，其带领7位成员的卓越领导力得到了认可。",
            "非常喜欢猫，被粉丝们亲切地称为“猫系少年”。",
            "凭借出色的音乐感性参与作词，不断提升自制能力。",
            "平时话不多，但在舞台上以强烈的眼神压倒全场，展现出“舞台切换”的魅力。",
            "从I-LAND时期起就是队长候选人的第一人选，团队组建后正式担任队长。"
          ],
          es: [
            "A pesar de ser uno de los miembros más jóvenes, fue seleccionado como líder y es reconocido por su excepcional capacidad de liderazgo.",
            "Le gustan tanto los gatos que los fans lo apodan 'Humano Gato'.",
            "Participa en la escritura de letras con su sensibilidad musical y está desarrollando sus habilidades de producción.",
            "Suele ser reservado, pero en el escenario abruma a los fans con su mirada intensa, mostrando una personalidad de 'cambio en el escenario'.",
            "Fue considerado el principal candidato a líder desde I-LAND y se convirtió oficialmente en líder tras la formación del grupo."
          ],
          id: [
            "Meskipun merupakan salah satu anggota termuda, ia terpilih sebagai pemimpin dan diakui karena kepemimpinannya yang luar biasa.",
            "Ia sangat menyukai kucing sehingga penggemar menjulukinya 'Manusia Kucing'.",
            "Ia berpartisipasi dalam penulisan lirik dengan sensibilitas musiknya dan terus mengembangkan kemampuan memproduksi musik.",
            "Biasanya ia pendiam, tetapi di atas panggung, ia memukau penggemar dengan tatapan intensnya, menunjukkan karakter 'stage switch'.",
            "Ia dianggap sebagai kandidat utama pemimpin sejak era I-LAND dan resmi menjadi pemimpin setelah grup terbentuk."
          ],
          fr: [
            "Bien qu'étant l'un des plus jeunes membres, il a été choisi comme leader et est reconnu pour son leadership exceptionnel.",
            "Il aime tellement les chats que les fans l'ont surnommé 'l'humain chat'.",
            "Il participe à l'écriture des paroles grâce à sa sensibilité musicale et développe ses capacités de production.",
            "Il est habituellement calme, mais sur scène, il impressionne les fans avec son regard intense, montrant un véritable 'switch' de personnalité.",
            "Il était considéré comme le candidat numéro un pour le poste de leader dès I-LAND et l'est officiellement devenu après la formation du groupe."
          ],
          hi: [
            "सबसे कम उम्र के सदस्यों में से एक होने के बावजूद, उन्हें लीडर के रूप में चुना गया और उनके उत्कृष्ट नेतृत्व के लिए पहचाना जाता है।",
            "वे बिल्लियों से इतना प्यार करते हैं कि प्रशंसकों ने उन्हें 'कैट ह्यूमन' उपनाम दिया है।",
            "वे अपनी संगीत की समझ के साथ गीत लिखने में भाग लेते हैं और अपनी प्रोडक्शन क्षमताओं को विकसित कर रहे हैं।",
            "वे आमतौर पर शांत रहते हैं, लेकिन मंच पर अपनी तीव्र दृष्टि से प्रशंसकों को मंत्रमुग्ध कर देते हैं।",
            "वे I-LAND के समय से ही लीडर पद के शीर्ष उम्मीदवार थे और समूह बनने के बाद आधिकारिक तौर पर लीडर बने।"
          ],
          pt: [
            "Apesar de ser um dos membros mais jovens, foi selecionado como líder e é reconhecido por sua liderança excepcional ao guiar os 7 membros.",
            "Ele gosta tanto de gatos que os fãs o apelidaram de 'Humano Gato'.",
            "Participa na escrita de letras com sua sensibilidade musical e está desenvolvendo suas habilidades de produção.",
            "Geralmente é quieto, mas no palco domina os fãs com seu olhar intenso, mostrando uma personalidade de 'mudança de palco'.",
            "Foi considerado o principal candidato a líder desde o I-LAND e tornou-se oficialmente o líder após a formação do grupo."
          ],
          ar: [
            "على الرغم من كونه أحد أصغر الأعضاء سناً، فقد تم اختياره كقائد وهو معروف بقيادته الاستثنائية في توجيه الأعضاء السبعة.",
            "يحب القطط كثيراً لدرجة أن المعجبين لقبوه بـ 'الإنسان القط'.",
            "يشارك في كتابة الكلمات بحسه الموسيقي العالي ويطور قدراته في الإنتاج الذاتي.",
            "عادة ما يكون هادئاً، لكنه على المسرح يذهل المعجبين بنظراته الحادة، مظهراً شخصية مغايرة تماماً.",
            "كان المرشح الأول لمنصب القائد منذ أيام I-LAND، وأصبح رسمياً القائد بعد تشكيل الفرقة."
          ],
          th: [
            "แม้จะเป็นหนึ่งในสมาชิกที่อายุน้อยที่สุด แต่เขาได้รับเลือกให้เป็นลีดเดอร์และได้รับการยอมรับในความเป็นผู้นำที่ยอดเยี่ยมในการดูแลสมาชิกทั้ง 7 คน",
            "เขาชอบแมวมากจนแฟนๆ ตั้งฉายาให้ว่า 'มนุษย์แมว'",
            "เขามีส่วนร่วมในการเขียนเนื้อเพลงด้วยความรู้สึกทางดนตรีที่ยอดเยี่ยม และกำลังพัฒนาทักษะการโปรดิวซ์เพลงด้วยตัวเอง",
            "ปกติเขาจะเป็นคนพูดน้อย แต่บนเวทีเขาจะสะกดแฟนๆ ด้วยสายตาที่ทรงพลัง แสดงให้เห็นถึงเสน่ห์ที่แตกต่างอย่างสิ้นเชิง",
            "เขาถูกยกให้เป็นผู้สมัครอันดับ 1 สำหรับตำแหน่งลีดเดอร์ตั้งแต่สมัย I-LAND และได้เป็นลีดเดอร์อย่างเป็นทางการหลังจากตั้งวง"
          ],
          vi: [
            "Mặc dù là một trong những thành viên nhỏ tuổi nhất, anh vẫn được chọn làm trưởng nhóm và được công nhận vì khả năng lãnh đạo xuất sắc.",
            "Anh rất yêu mèo nên người hâm mộ đã đặt biệt danh cho anh là 'người mèo'.",
            "Anh tham gia viết lời bài hát với cảm nhận âm nhạc nhạy bén và đang phát triển khả năng tự sản xuất của mình.",
            "Bình thường anh khá trầm tính, nhưng trên sân khấu, anh áp đảo người hâm mộ bằng ánh nhìn sắc sạo, thể hiện sức hút 'biến hóa' trên sân khấu.",
            "Anh đã được coi là ứng cử viên số 1 cho vị trí trưởng nhóm từ thời I-LAND và chính thức trở thành trưởng nhóm sau khi nhóm được thành lập."
          ],
          ru: [
            "Несмотря на то, что он один из самых младших участников, он был выбран лидером и признан за свои исключительные лидерские качества.",
            "Он так сильно любит кошек, что фанаты прозвали его «человеком-котом».",
            "Он участвует в написании текстов, используя свою музыкальную чуткость, и развивает навыки продюсирования.",
            "Обычно он немногословен, но на сцене он поражает фанатов своим интенсивным взглядом, демонстрируя смену образа.",
            "Он считался главным кандидатом в лидеры еще со времен I-LAND и официально стал им после формирования группы."
          ]
        },
        socials: {}
      },
      {
        id: "heeseung",
        name: { ko: "희승", en: "Heeseung", ja: "ヒスン", zh: "李羲承", es: "Heeseung", id: "Heeseung", fr: "Heeseung", hi: "हीसंग (Heeseung)", pt: "Heeseung", ar: "هيسونغ (Heeseung)", th: "ฮีซึง", vi: "Heeseung", ru: "Хисын" },
        role: { ko: "보컬, 댄서, 래퍼", en: "Vocalist, Dancer, Rapper", ja: "ボーカル、ダンサー、ラッパー", zh: "声乐、舞者、说唱", es: "Vocalista, Bailarín, Rapero", id: "Vokalis, Penari, Rapper", fr: "Vocaliste, Danseur, Rappeur", hi: "वोकलिस्ट, डांसर, रैपर", pt: "Vocalista, Dançarino, Rapper", ar: "مغني، راقص، رابر", th: "นักร้อง, นักเต้น, แแร็ปเปอร์", vi: "Ca sĩ, Vũ công, Rapper", ru: "Вокалист, Танцор, Рэпер" },
        birth: "2001.10.15",
        bloodType: "O",
        mbti: "ENFP",
        height: "185cm",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "てんびん座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला (Libra)", pt: "Libra", ar: "برج الميزان", th: "ราศีตุลย์", vi: "Thiên Bình", ru: "Весы" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Heeseung+Lee+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "보컬·댄스·랩 모두 소화하는 엔하이픈의 올라운더. I-LAND 전체 1위 출신 에이스.", en: "ENHYPEN's all-rounder who handles vocals, dance, and rap. The ace who finished #1 overall on I-LAND.", ja: "ボーカル、ダンス、ラップをすべてこなすENHYPENのオールラウンダー。I-LAND全体1位出身のエース。", zh: "ENHYPEN的全能成员，精通声乐、舞蹈和说唱。是I-LAND总排名第一的王牌选手。", es: "El todoterreno de ENHYPEN que maneja voz, baile y rap. El as que terminó en el puesto #1 general en I-LAND.", id: "Anggota serbabisa ENHYPEN yang menguasai vokal, tari, dan rap. Ace yang menempati peringkat #1 di I-LAND.", fr: "L'atout polyvalent d'ENHYPEN qui gère le chant, la danse et le rap. L'as qui a terminé n°1 au classement général d'I-LAND.", hi: "ENHYPEN के ऑल-राउंडर जो गायन, नृत्य और रैप तीनों में माहिर हैं। I-LAND में समग्र रूप से #1 स्थान हासिल करने वाले ऐस।", pt: "O 'all-rounder' do ENHYPEN que domina vocal, dança e rap. O ás que terminou em 1º lugar geral no I-LAND.", ar: "العضو المتكامل في ENHYPEN الذي يتقن الغناء والرقص والراب. الآس الذي حقق المركز الأول في برنامج I-LAND.", th: "ออลราวด์เดอร์ของ ENHYPEN ที่เก่งทั้งร้อง เเต้น และแร็ป เป็น 'ตัวตึง' ที่ได้อันดับ 1 จากรายการ I-LAND", vi: "Thành viên đa năng của ENHYPEN, đảm nhiệm tốt cả hát, nhảy và rap. Át chủ bài từng đứng vị trí số 1 tại I-LAND.", ru: "Универсальный участник ENHYPEN, владеющий вокалом, танцами и рэпом. Ас, занявший первое место в общем зачете I-LAND." },
        tmi: {
          ko: [
            "보컬·댄서·래퍼 모두 가능한 완벽한 올라운더로, 'I-LAND 전체 1등' 출신이다.",
            "피아노·기타·드럼 등 다양한 악기를 연주할 수 있는 뮤지션 기질을 타고났다.",
            "185cm의 장신에 뛰어난 외모로 데뷔 전부터 '차세대 에이스' 타이틀을 달았다.",
            "BTS 정국을 롤모델로 꼽으며 연습 열정이 남다르다고 알려져 있다.",
            "게임 실력이 출중해 팬들과 직접 게임을 즐기는 라이브 방송이 인기다."
          ],
          en: [
            "A perfect all-rounder in vocals, dance, and rap, and the winner of 'I-LAND'.",
            "A naturally gifted musician who can play various instruments like piano, guitar, and drums.",
            "With his height of 185cm and outstanding visuals, he was dubbed the 'next-gen ace' even before debut.",
            "He cites BTS's Jungkook as his role model and is known for his extraordinary passion for practice.",
            "He is an expert gamer, and his live broadcasts of gaming with fans are very popular."
          ],
          ja: [
            "ボーカル、ダンス、ラップをすべてこなす完璧なオールラウンダーで、「I-LAND全体1位」出身です。",
            "ピアノ、ギター、ドラムなど、様々な楽器を演奏できる音楽的才能を持っています。",
            "185cmの高身長と優れたビジュアルで、デビュー前から「次世代エース」と呼ばれていました。",
            "BTSのジョングクをロールモデルに挙げており、練習への情熱が人一倍強いことで知られています。",
            "ゲームの実力が非常に高く、ファンと一緒にゲームを楽しむライブ配信が人気です。"
          ],
          zh: [
            "声乐、舞蹈、说唱样样精通的全能型选手，是“I-LAND总冠军”出身。",
            "拥有与生俱来的音乐天赋，能演奏钢琴、吉他、架子鼓等多种乐器。",
            "拥有185cm的身高和出众的外貌，出道前就被冠以“次世代王牌”的称号。",
            "以BTS的柾国为榜样，以对练习的超乎寻常的热情而闻名。",
            "游戏实力出众，与粉丝一起玩游戏的直播非常受欢迎。"
          ],
          es: [
            "Un todoterreno perfecto en voz, baile y rap, y el ganador de 'I-LAND'.",
            "Un músico nato que puede tocar varios instrumentos como el piano, la guitarra y la batería.",
            "Con su altura de 185 cm y visuales sobresalientes, fue apodado el 'as de la próxima generación' incluso antes del debut.",
            "Cita a Jungkook de BTS como su modelo a seguir y es conocido por su extraordinaria pasión por la práctica.",
            "Es un experto en videojuegos, y sus transmisiones en vivo jugando con fans son muy populares."
          ],
          id: [
            "Seorang serbabisa yang sempurna dalam vokal, tari, dan rap, serta pemenang 'I-LAND'.",
            "Musisi berbakat alami yang bisa memainkan berbagai instrumen seperti piano, gitar, dan drum.",
            "Dengan tinggi badan 185cm dan visual yang luar biasa, ia dijuluki 'next-gen ace' bahkan sebelum debut.",
            "Ia menjadikan Jungkook BTS sebagai panutan dan dikenal karena semangat latihannya yang luar biasa.",
            "Ia adalah gamer ahli, dan siaran langsung saat ia bermain game bersama penggemar sangat populer."
          ],
          fr: [
            "Un talent polyvalent parfait en chant, danse et rap, et le grand gagnant d'I-LAND.",
            "Un musicien né capable de jouer de plusieurs instruments comme le piano, la guitare et la batterie.",
            "Avec sa taille de 185 cm et son visuel exceptionnel, il était surnommé 'l'as de la prochaine génération' dès avant ses débuts.",
            "Il cite Jungkook de BTS comme modèle et est connu pour sa passion extraordinaire lors des entraînements.",
            "C'est un expert en jeux vidéo, et ses lives où il joue avec ses fans sont très populaires."
          ],
          hi: [
            "गायन, नृत्य और रैप में एक पूर्ण ऑल-राउंडर और 'I-LAND' के विजेता।",
            "एक स्वभाविक रूप से प्रतिभाशाली संगीतकार जो पियानो, गिटार और ड्रम जैसे विभिन्न वाद्ययंत्र बजा सकते हैं।",
            "185 सेमी की लंबाई और शानदार लुक्स के साथ, उन्हें डेब्यू से पहले ही 'अगली पीढ़ी का ऐस' कहा गया था।",
            "वे बीटीएस के जंकुक को अपना रोल मॉडल मानते हैं और अभ्यास के लिए अपने असाधारण जुनून के लिए जाने जाते हैं।",
            "वे एक विशेषज्ञ गेमर हैं और प्रशंसकों के साथ गेम खेलने के उनके लाइव प्रसारण बहुत लोकप्रिय हैं।"
          ],
          pt: [
            "Um 'all-rounder' perfeito em vocal, dança e rap, sendo o grande vencedor do 'I-LAND'.",
            "Um músico talentoso que consegue tocar vários instrumentos como piano, guitarra e bateria.",
            "Com 185cm de altura e um visual marcante, foi apelidado de 'ás da próxima geração' antes mesmo da estreia.",
            "Ele cita Jungkook do BTS como seu modelo e é conhecido por sua paixão extraordinária pelos ensaios.",
            "É um gamer experiente, e suas transmissões ao vivo jogando com os fãs são muito populares."
          ],
          ar: [
            "عضو متكامل ومثالي في الغناء والرقص والراب، وهو الفائز بالمركز الأول في برنامج I-LAND.",
            "موسيقي موهوب بالفطرة يمكنه عزف آلات متنوعة مثل البيانو والجيتار والطبول.",
            "بطوله البالغ 185 سم ومظهره المتميز، لُقب بـ 'آس الجيل القادم' حتى قبل ظهوره الأول.",
            "يعتبر جونغكوك من فرقة BTS قدوته، ويُعرف بشغفه الاستثنائي في التدريب.",
            "خبير في الألعاب الإلكترونية، وتحظى بثوثه المباشرة التي يلعب فيها مع المعجبين بشعبية كبيرة."
          ],
          th: [
            "ออลราวด์เดอร์ที่สมบูรณ์แบบทั้งการร้อง เต้น และแร็ป และเป็นผู้ชนะอันดับ 1 จากรายการ I-LAND",
            "เป็นนักดนตรีที่มีพรสวรรค์มาตั้งแต่เกิด สามารถเล่นเครื่องดนตรีได้หลากหลาย เช่น เปียโน กีตาร์ และกลอง",
            "ด้วยส่วนสูง 185 ซม. และวิชวลที่โดดเด่น เขาได้รับฉายาว่า 'Next-gen Ace' ตั้งแต่ก่อนเดบิวต์",
            "เขามีจองกุก BTS เป็นโรลโมเดล และขึ้นชื่อเรื่องความทุ่มเทในการฝึกซ้อมที่เหนือกว่าใคร",
            "เขามีทักษะการเล่นเกมที่ยอดเยี่ยม และการไลฟ์สดเล่นเกมกับแฟนๆ ก็ได้รับความนิยมมาก"
          ],
          vi: [
            "Một thành viên đa năng hoàn hảo ở cả hát, nhảy và rap, và là người chiến thắng tại 'I-LAND'.",
            "Một nhạc sĩ bẩm sinh có thể chơi nhiều loại nhạc cụ như piano, guitar và trống.",
            "Với chiều cao 185cm và ngoại hình nổi bật, anh đã được mệnh danh là 'át chủ bài thế hệ tiếp theo' ngay từ trước khi ra mắt.",
            "Anh coi Jungkook của BTS là hình mẫu lý tưởng và nổi tiếng với niềm đam mê luyện tập phi thường.",
            "Anh là một game thủ điêu luyện và những buổi phát sóng trực tiếp chơi game cùng người hâm mộ của anh rất được yêu thích."]
          ,
          ru: [
            "Идеальный универсал в вокале, танцах и рэпе, а также победитель шоу I-LAND.",
            "Прирожденный музыкант, умеющий играть на различных инструментах, таких как фортепиано, гитара и барабаны.",
            "Благодаря росту 185 см и выдающейся внешности его называли «асом следующего поколения» еще до дебюта.",
            "Он считает Чонгука из BTS своим образцом для подражания и известен своей необычайной страстью к тренировкам.",
            "Он опытный геймер, и его прямые трансляции игр с фанатами очень популярны."
          ]
        },
        socials: {}
      },
      {
        id: "jay",
        name: { ko: "제이", en: "Jay", ja: "ジェイ", zh: "朴综星", es: "Jay", id: "Jay", fr: "Jay", hi: "जे (Jay)", pt: "Jay", ar: "جاي (Jay)", th: "เจย์", vi: "Jay", ru: "Джей" },
        role: { ko: "보컬, 래퍼", en: "Vocalist, Rapper", ja: "ボーカル、ラッパー", zh: "声乐、说唱", es: "Vocalista, Rapero", id: "Vokalis, Rapper", fr: "Vocaliste, Rappeur", hi: "वोकलिस्ट, रैपर", pt: "Vocalista, Rapper", ar: "مغني، رابر", th: "นักร้อง, แร็ปเปอร์", vi: "Ca sĩ, Rapper", ru: "Вокалист, Рэпер" },
        birth: "2002.04.20",
        bloodType: "O",
        mbti: "ENTJ",
        height: "180cm",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "おうし座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ (Taurus)", pt: "Touro", ar: "برج الثور", th: "ราศีพฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jay+Park+Jongseong+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "미국 시애틀 출신 한미 혼혈 보컬리스트. 4개국어를 구사하는 언어 천재이자 패션 아이콘.", en: "A Korean-American vocalist from Seattle. A language genius fluent in 4 languages and a fashion icon.", ja: "アメリカ・シアトル出身の韓国系アメリカ人ボーカリスト。4カ国語を操る語学の天才であり、ファッションアイコン。", zh: "出身美国西雅图的韩美混血主唱学。精通四国语言的语言天才，同时也是时尚标杆。", es: "Un vocalista coreano-estadounidense de Seattle. Un genio de los idiomas que habla 4 lenguas y un ícono de la moda.", id: "Vokalis keturunan Korea-Amerika dari Seattle. Seorang jenius bahasa yang fasih dalam 4 bahasa dan ikon mode.", fr: "Un chanteur coréano-américain originaire de Seattle. Un génie des langues parlant couramment 4 langues et une icône de la mode.", hi: "सिएटल के एक कोरियाई-अमेरिकी गायक। 4 भाषाओं में पारंगत एक भाषा प्रतिभाशाली और फैशन आइकन।", pt: "Um vocalista coreano-americano de Seattle. Um gênio dos idiomas fluente em 4 línguas e um ícone da moda.", ar: "مغني كوري أمريكي من سياتل. عبقري لغات يتقن 4 لغات وأيقونة في الموضة.", th: "นักร้องลูกครึ่งเกาหลี-อเมริกันจากซีแอตเทิล เป็นอัจฉริยะด้านภาษาที่พูดได้ถึง 4 ภาษา และเป็นแฟชั่นไอคอน", vi: "Ca sĩ người Mỹ gốc Hàn đến từ Seattle. Một thiên tài ngôn ngữ thông thạo 4 thứ tiếng và là một biểu tượng thời trang.", ru: "Корейско-американский вокалист из Сиэтла. Лингвистический гений, владеющий 4 языками, и икона моды." },
        tmi: {
          ko: [
            "미국 시애틀 출신 한미 혼혈로, 영어·한국어·일본어·스페인어까지 구사하는 언어 천재다.",
            "가장 솔직하고 직설적인 성격으로 팬들에게 '팩폭 제이'라는 애칭을 얻었다.",
            "패션 감각이 독보적으로 뛰어나 음악 활동 외에도 패션 브랜드 콜라보 제안이 꾸준히 들어온다.",
            "요리를 즐겨 '제이의 쿠킹 클래스' 같은 콘텐츠가 팬들에게 인기 있다.",
            "공부도 잘해 미국에서 학교를 다닐 때 우등생이었으며, 아이돌이 되지 않았다면 의사가 됐을 것이라고 밝혔다."
          ],
          en: [
            "Born in Seattle, he is a language genius who speaks English, Korean, Japanese, and Spanish.",
            "With his honest and direct personality, he earned the nickname 'Fact-Bomb Jay' from fans.",
            "He has an outstanding sense of fashion and receives constant collaboration offers from various brands.",
            "He enjoys cooking, and content like 'Jay's Cooking Class' is very popular among fans.",
            "He was an honor student in the US and mentioned that he would have become a doctor if he hadn't become an idol."
          ],
          ja: [
            "シアトル出身の韓国系アメリカ人で、英語、韓国語、日本語、スペイン語まで操る語学の天才です。",
            "非常に正直で直球な性格から、ファンの間では「ファクト爆撃機（パックポッ）ジェ이」という愛称で呼ばれています。",
            "ファッションセンスが抜群で、音楽活動以外にもファッションブランドからのコラボ提案が絶えません。",
            "料理が趣味で、「ジェイのクッキングクラス」などのコンテンツがファンに人気です。",
            "学업も優秀で、アメリカにいた頃は優等生でした。アイドルになっていなければ医者になっていただろうと語っています。"
          ],
          zh: [
            "出身美国西雅图的韩美混血儿，是精通英语、韩语、日语和西班牙语的语言天才。",
            "性格非常坦率直爽，被粉丝们亲切地称为“事实暴击（补刀）者朴综星”。",
            "时尚感卓越，除了音乐活动外，还经常收到时尚品牌的合作邀约。",
            "喜欢做饭，“综星的烹饪课”等内容非常受粉丝欢迎。",
            "学业优秀，在美国上学时是优等生，他曾表示如果不当偶像可能会成为医生。"
          ],
          es: [
            "Nacido en Seattle, es un genio de los idiomas que habla inglés, coreano, japonés y español.",
            "Con su personalidad honesta y directa, se ganó el apodo de 'Jay, el de las verdades' (Fact-Bomb Jay) entre los fans.",
            "Tiene un sentido de la moda excepcional y recibe constantes ofertas de colaboración de diversas marcas.",
            "Le gusta cocinar, y contenidos como 'La clase de cocina de Jay' son muy populares entre los fans.",
            "Era un estudiante de honor en los EE. UU. y mencionó que se habría convertido en médico si no fuera ídolo."
          ],
          id: [
            "Lahir di Seattle, ia adalah jenius bahasa yang menguasai bahasa Inggris, Korea, Jepang, dan Spanyol.",
            "Dengan kepribadiannya yang jujur dan terus terang, ia mendapat julukan 'Fact-Bomb Jay' dari penggemar.",
            "Ia memiliki selera mode yang luar biasa dan terus menerima tawaran kolaborasi dari berbagai merek fesyen.",
            "Ia senang memasak, dan konten seperti 'Kelas Memasak Jay' sangat populer di kalangan penggemar.",
            "Ia adalah siswa berprestasi di AS dan menyatakan bahwa ia mungkin akan menjadi dokter jika tidak menjadi idola."
          ],
          fr: [
            "Né à Seattle, c'est un génie des langues qui parle anglais, coréen, japonais et espagnol.",
            "Avec sa personnalité honnête et directe, il a gagné le surnom de 'Jay le franc-parler' (Fact-Bomb Jay) auprès des fans.",
            "Il a un sens de la mode exceptionnel et reçoit constamment des offres de collaboration de diverses marques.",
            "Il aime cuisiner, et les contenus comme 'Le cours de cuisine de Jay' sont très populaires parmi les fans.",
            "C'était un excellent élève aux États-Unis et il a déclaré qu'il serait devenu médecin s'il n'était pas devenu idole."
          ],
          hi: [
            "सिएटल में जन्मे, वे एक भाषा प्रतिभाशाली हैं जो अंग्रेजी, कोरियाई, जापानी और स्पेनिश बोलते हैं।",
            "अपने ईमानदार और स्पष्ट व्यक्तित्व के कारण, उन्होंने प्रशंसकों से 'फैक्ट-बॉम्ब जे' उपनाम अर्जित किया।",
            "उनकी फैशन की समझ उत्कृष्ट है और उन्हें विभिन्न ब्रांडों से निरंतर सहयोग के प्रस्ताव मिलते हैं।",
            "उन्हें खाना बनाना पसंद है, और 'जे की कुकिंग क्लास' जैसी सामग्री प्रशंसकों के बीच बहुत लोकप्रिय है।",
            "वे अमेरिका में एक मेधावी छात्र थे और उन्होंने उल्लेख किया कि यदि वे आइडल नहीं बनते तो डॉक्टर बन जाते।"
          ],
          pt: [
            "Nacido em Seattle, é um gênio dos idiomas que fala inglês, coreano, japonês e espanhol.",
            "Com sua personalidade honesta e direta, ganhou o apelido de 'Jay Sincero' (Fact-Bomb Jay) dos fãs.",
            "Ele tem um senso de moda excepcional e recebe constantes ofertas de colaboração de várias marcas.",
            "Ele gosta de cozinhar, e conteúdos como 'Aula de Culinária do Jay' são muito populares entre os fãs.",
            "Era um aluno de honra nos EUA e mencionou que teria se tornado médico se não tivesse se tornado um ídolo."
          ],
          ar: [
            "وُلد في سياتل، وهو عبقري لغات يتحدث الإنجليزية والكورية واليابانية والإسبانية.",
            "بشخصيته الصريحة والمباشرة، حصل على لقب 'جاي قاصف الجبهات' من قبل المعجبين.",
            "يمتلك حساً متميزاً في الموضة ويتلقى عروض تعاون مستمرة من علامات تجارية متنوعة.",
            "يستمتع بالطبخ، وتحظى محتويات مثل 'فصل جاي للطبخ' بشعبية كبيرة بين المعجبين.",
            "كان طالباً متفوقاً في الولايات المتحدة، وذكر أنه كان سيصبح طبيباً لو لم يصبح آيدول."
          ],
          th: [
            "เกิดที่ซีแอตเทิล เป็นอัจฉริยะด้านภาษาที่สามารถพูดได้ทั้งภาษาอังกฤษ เกาหลี ญี่ปุ่น และสเปน",
            "ด้วยบุคลิกที่เป็นคนตรงไปตรงมาและซื่อสัตย์ เขาจึงได้รับฉายาจากแฟนๆ ว่า 'Fact-Bomb Jay' (เจย์ผู้พูดแต่ความจริง)",
            "เขามีเซนส์ด้านแฟชั่นที่โดดเด่นมาก และได้รับข้อเสนอให้ร่วมงานกับแบรนด์แฟชั่นต่างๆ อย่างต่อเนื่อง",
            "เขาชอบทำอาหารมาก และคอนเทนต์อย่าง 'คลาสทำอาหารของเจย์' ก็เป็นที่นิยมมากในหมู่แฟนๆ",
            "เขาเป็นนักเรียนดีเด่นสมัยเรียนที่อเมริกา และเคยบอกว่าถ้าไม่ได้เป็นไอดอลก็คงจะไปเป็นหมอ"
          ],
          vi: [
            "Sinh ra tại Seattle, anh là một thiên tài ngôn ngữ có thể nói tiếng Anh, tiếng Hàn, tiếng Nhật và tiếng Tây Ban Nha.",
            "Với tính cách trung thực và thẳng thắn, anh đã được người hâm mộ đặt biệt danh là 'Jay phũ phàng' (Fact-Bomb Jay).",
            "Anh có gu thời trang nổi bật và thường xuyên nhận được lời mời hợp tác từ các thương hiệu thời trang.",
            "Anh thích nấu ăn và các nội dung như 'Lớp học nấu ăn của Jay' rất được người hâm mộ yêu thích.",
            "Anh từng là một học sinh ưu tú tại Mỹ và chia sẻ rằng anh sẽ trở thành bác sĩ nếu không làm thần tượng."
          ],
          ru: [
            "Родившийся в Сиэтле, он является лингвистическим гением, говорящим на английском, корейском, японском и испанском языках.",
            "Благодаря своей честности и прямолинейности он получил от фанатов прозвище «Джей, режущий правду-матку».",
            "У него исключительное чувство моды, и он постоянно получает предложения о сотрудничестве от различных брендов.",
            "Он любит готовить, и такой контент, как «Кулинарный класс Джея», очень популярен среди фанатов.",
            "В США он был отличником и упоминал, что стал бы врачом, если бы не стал айдолом."
          ]
        },
        socials: {}
      },
      {
        id: "jake",
        name: { ko: "제이크", en: "Jake", ja: "ジェイク", zh: "载伦", es: "Jake", id: "Jake", fr: "Jake", hi: "जेक (Jake)", pt: "Jake", ar: "جيك (Jake)", th: "เจค", vi: "Jake", ru: "Джейк" },
        role: { ko: "보컬", en: "Vocalist", ja: "ボーカル", zh: "声乐", es: "Vocalista", id: "Vokalis", fr: "Vocaliste", hi: "वोकलिस्ट", pt: "Vocalista", ar: "مغني", th: "นักร้อง", vi: "Ca sĩ", ru: "Вокалист" },
        birth: "2002.11.15",
        bloodType: "AB",
        mbti: "ENFP",
        height: "174cm",
        zodiac: { ko: "전갈자리", en: "Scorpio", ja: "さそり座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक (Scorpio)", pt: "Escorpião", ar: "برج العقرب", th: "ราศีพิจิก", vi: "Bọ Cạp", ru: "Скорпион" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jake+Sim+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "호주 브리즈번 출신 보컬리스트. 따뜻한 음색과 사진 실력으로 팬들의 깊은 사랑을 받는다.", en: "Vocalist from Brisbane, Australia. Loved by fans for his warm vocal tone and outstanding photography.", ja: "オーストラリア・ブリスベン出身のボーカリスト。温かい歌声と写真の実力でファンから深く愛されている。", zh: "来自澳大利亚布里斯班的主唱。凭借温暖的音色和出色的摄影实力深受粉丝喜爱。", es: "Vocalista de Brisbane, Australia. Amado por los fans por su cálido tono vocal y su destacada fotografía.", id: "Vokalis dari Brisbane, Australia. Dicintai penggemar karena nada vokal yang hangat dan kemampuan fotografi yang luar biasa.", fr: "Chanteur originaire de Brisbane, en Australie. Apprécié des fans pour son timbre de voix chaleureux et ses talents de photographe.", hi: "ब्रिस्बेन, ऑस्ट्रेलिया के एक गायक। उनके मधुर स्वर और उत्कृष्ट फोटोग्राफी कौशल के लिए प्रशंसक उन्हें बहुत पसंद करते हैं।", pt: "Vocalista de Brisbane, Austrália. Amado pelos fãs por seu tom vocal caloroso e fotografia excepcional.", ar: "مغني من بريزبان، أستراليا. محبوب من قبل المعجبين لنبرة صوته الدافئة ومهاراته المتميزة في التصوير الفوتوغرافي.", th: "นักร้องจากบริสเบน ประเทศออสเตรเลีย ได้รับความรักอย่างมากจากแฟนๆ ด้วยน้ำเสียงที่อบอุ่นและทักษะการถ่ายภาพที่ยอดเยี่ยม", vi: "Ca sĩ đến từ Brisbane, Úc. Được người hâm mộ yêu mến nồng nhiệt bởi chất giọng ấm áp và khả năng nhiếp ảnh xuất sắc.", ru: "Вокалист из Брисбена, Австралия. Любим фанатами за теплый тембр голоса и выдающиеся способности к фотографии." },
        tmi: {
          ko: [
            "호주 브리즈번 출신으로, 엔하이픈 최초의 호주인 멤버다.",
            "인스타그램에 직접 찍은 사진을 꾸준히 올리는 사진 덕후로, '아이돌 중 사진 실력 최고'라는 평을 받는다.",
            "처음엔 한국어가 서툴렀지만 1년 만에 유창하게 구사해 '언어 스폰지'라는 별명을 얻었다.",
            "강아지를 너무 좋아해 팬들 사이에서 '강아지 닮은 강아지 좋아하는 사람'으로 유명하다.",
            "호주에서 I-LAND 오디션 지원 소식을 혼자 접하고 부모님을 설득해 한국에 온 결단력 있는 청년이다."
          ],
          en: [
            "From Brisbane, Australia — the first Australian member in ENHYPEN.",
            "A photography enthusiast who regularly shares self-taken shots on Instagram — rated 'best photographer among idols'.",
            "Struggled with Korean initially but became fluent within a year — earning the nickname 'language sponge'.",
            "Loves dogs deeply — fans describe him as 'a dog-like person who loves dogs'.",
            "Found out about I-LAND auditions alone in Australia and convinced his parents to let him come to Korea — showing remarkable determination."
          ],
          ja: [
            "オーストラリアのブリスベン出身で、ENHYPEN初のオーストラリア人メンバーです。",
            "インスタグラムに自ら撮った写真を投稿し続ける写真愛好家で、「アイドルの中で写真の実力が最高」と評価されています。",
            "最初は韓国語が苦手でしたが、1年で流暢に話せるようになり、「言語のスポンジ」というあだ名がつきました。",
            "犬が大好きで、ファンの間では「犬に似ていて犬が好きな人」として有名です。",
            "オーストラリアで一人でI-LANDのオーディション情報を知り、両親を説得して韓国に来た決단力のある青年です。"
          ],
          zh: [
            "出身澳大利亚布里斯班，是ENHYPEN首位澳大利亚成员。",
            "是一个摄影迷，经常在Instagram上发布自己拍摄的照片，被评价为“偶像中摄影实力最强的”。",
            "起初韩语并不熟练，但在一年内就能流利表达，获得了“语言海绵”的称号。",
            "非常喜欢狗，在粉丝中以“长得像狗且喜欢狗的人”而闻名。",
            "在澳大利亚独自看到I-LAND海选消息后说服父母来到韩国，是一个非常有果断力的青年。"
          ],
          es: [
            "De Brisbane, Australia — el primer miembro australiano en ENHYPEN.",
            "Un entusiasta de la fotografía que comparte regularmente fotos tomadas por él mismo en Instagram; calificado como el 'mejor fotógrafo entre los ídolos'.",
            "Al principio le costaba el coreano, pero se volvió fluido en un año, ganándose el apodo de 'esponja de idiomas'.",
            "Ama profundamente a los perros; los fans lo describen como 'una persona con cara de perrito que ama a los perros'.",
            "Se enteró de las audiciones de I-LAND solo en Australia y convenció a sus padres para que lo dejaran venir a Corea, mostrando una determinación notable."
          ],
          id: [
            "Berasal dari Brisbane, Australia — anggota Australia pertama di ENHYPEN.",
            "Seorang penggemar fotografi yang secara rutin membagikan hasil jepretannya di Instagram — dinilai sebagai 'fotografer terbaik di antara idola'.",
            "Awalnya kesulitan dengan bahasa Korea tetapi menjadi fasih dalam setahun — mendapat julukan 'spons bahasa'.",
            "Sangat menyukai anjing — penggemar menggambarkannya sebagai 'orang yang mirip anjing dan menyukai anjing'.",
            "Mengetahui tentang audisi I-LAND sendirian di Australia dan meyakinkan orang tuanya untuk mengizinkannya datang ke Korea — menunjukkan tekad yang luar biasa."
          ],
          fr: [
            "Originaire de Brisbane, en Australie — le premier membre australien d'ENHYPEN.",
            "Un passionné de photographie qui partage régulièrement ses propres clichés sur Instagram — considéré comme le 'meilleur photographe parmi les idoles'.",
            "Il a eu du mal avec le coréen au début, mais il est devenu courant en un an — gagnant le surnom d''éponge linguistique'.",
            "Il adore les chiens — les fans le décrivent comme 'une personne ressemblant à un chien qui aime les chiens'.",
            "Il a découvert seul les auditions d'I-LAND en Australie et a convaincu ses parents de le laisser venir en Corée — faisant preuve d'une détermination remarquable."
          ],
          hi: [
            "ब्रिस्बेन, ऑस्ट्रेलिया से - एनहाइफन के पहले ऑस्ट्रेलियाई सदस्य।",
            "एक फोटोग्राफी उत्साही जो नियमित रूप से इंस्टाग्राम पर खुद के द्वारा ली गई तस्वीरें साझा करते हैं - 'आइडल्स के बीच सर्वश्रेष्ठ फोटोग्राफर' के रूप में रेटेड।",
            "शुरुआत में कोरियाई भाषा के साथ संघर्ष किया लेकिन एक साल के भीतर धाराप्रवाह हो गए - 'लैंग्वेज स्पंज' उपनाम अर्जित किया।",
            "कुत्तों से गहरा प्यार करते हैं - प्रशंसक उन्हें 'कुत्ते जैसा दिखने वाला व्यक्ति जो कुत्तों से प्यार करता है' के रूप में वर्णित करते हैं।",
            "ऑस्ट्रेलिया में अकेले I-LAND ऑडिशन के बारे में पता चला और अपने माता-पिता को कोरिया आने देने के लिए राजी किया - उल्लेखनीय दृढ़ संकल्प दिखाते हुए।"
          ],
          pt: [
            "De Brisbane, Austrália — o primeiro membro australiano no ENHYPEN.",
            "Um entusiasta da fotografia que compartilha regularmente fotos tiradas por ele mesmo no Instagram — classificado como o 'melhor fotógrafo entre os ídolos'.",
            "Teve dificuldades com o coreano inicialmente, mas tornou-se fluente em um ano — ganhando o apelido de 'esponja de idiomas'.",
            "Ama profundamente cães — os fãs o descrevem como 'uma pessoa que parece um cachorrinho e que ama cachorros'.",
            "Descobriu sobre as audições do I-LAND sozinho na Austrália e convenceu seus pais a deixá-lo vir para a Coreia — mostrando uma determinação notável."
          ],
          ar: [
            "من بريزبان، أستراليا - أول عضو أسترالي في فرقة ENHYPEN.",
            "عاشق للتصوير الفوتوغرافي يشارك بانتظام الصور التي يلتقطها بنفسه على إنستغرام - يُصنف كـ 'أفضل مصور بين الآيدولز'.",
            "واجه صعوبة في اللغة الكورية في البداية لكنه أصبح طليقاً فيها خلال عام واحد - مما أكسبه لقب 'إسفنجة اللغات'.",
            "يحب الكلاب بشدة - يصفه المعجبون بأنه 'شخص يشبه الجرو ويحب الجراء'.",
            "علم بمفرده عن تجارب أداء I-LAND في أستراليا وأقنع والديه بالسماح له بالمجيء إلى كوريا - مما أظهر تصميماً ملحوظاً."
          ],
          th: [
            "มาจากบริสเบน ประเทศออสเตรเลีย เป็นสมาชิกชาวออสเตรเลียคนแรกของ ENHYPEN",
            "เป็นคนที่คลั่งไคล้การถ่ายภาพและมักจะแชร์รูปที่ถ่ายเองลงใน Instagram อย่างต่อเนื่อง จนได้รับคำชมว่าเป็น 'ไอดอลที่ถ่ายรูปเก่งที่สุด'",
            "ในช่วงแรกภาษาเกาหลีของเขายังไม่แข็งแรง แต่สามารถพูดได้อย่างคล่องแคล่วภายในเวลาเพียงหนึ่งปี จนได้รับฉายาว่า 'ฟองน้ำดูดซับภาษา'",
            "ชอบสุนัขมากจนเป็นที่รู้จักในหมู่แฟนๆ ว่าเป็น 'คนที่หน้าเหมือนลูกหมาและรักหมามาก'",
            "เขารู้ข่าวการเปิดออดิชั่น I-LAND ในออสเตรเลียด้วยตัวเองและพยายามเกลี้ยกล่อมพ่อแม่จนได้มาเกาหลี แสดงให้เห็นถึงความมุ่งมั่นที่แรงกล้า"
          ],
          vi: [
            "Đến từ Brisbane, Úc - thành viên người Úc đầu tiên của ENHYPEN.",
            "Một người đam mê nhiếp ảnh thường xuyên chia sẻ những bức ảnh tự chụp trên Instagram - được đánh giá là 'người chụp ảnh giỏi nhất trong số các thần tượng'.",
            "Ban đầu gặp khó khăn với tiếng Hàn nhưng đã thành thạo chỉ sau một năm - nhận được biệt danh 'miếng bọt biển ngôn ngữ'.",
            "Rất yêu chó - người hâm mộ mô tả anh là 'người giống cún con và rất yêu cún'.",
            "Anh đã tự mình tìm hiểu về buổi thử giọng I-LAND tại Úc và thuyết phục cha mẹ cho phép đến Hàn Quốc - thể hiện sự quyết tâm đáng nể."
          ],
          ru: [
            "Из Брисбена, Австралия — первый австралийский участник в ENHYPEN.",
            "Энтузиаст фотографии, который регулярно делится своими снимками в Instagram — признан «лучшим фотографом среди айдолов».",
            "Поначалу испытывал трудности с корейским языком, но за год стал свободно им владеть, за что получил прозвище «языковая губка».",
            "Очень любит собак — фанаты описывают его как «человека, похожего на щенка, который обожает собак».",
            "Сам узнал об отборе в I-LAND, находясь в Австралии, и убедил родителей отпустить его в Корею, проявив незаурядную решимость."
          ]
        },
        socials: {}
      },
      {
        id: "sunghoon",
        name: { ko: "성훈", en: "Sunghoon", ja: "ソンフン", zh: "朴成训", es: "Sunghoon", id: "Sunghoon", fr: "Sunghoon", hi: "सूनघून (Sunghoon)", pt: "Sunghoon", ar: "سونغهون (Sunghoon)", th: "ซองฮุน", vi: "Sunghoon", ru: "Сонхун" },
        role: { ko: "보컬, 비주얼", en: "Vocalist, Visual", ja: "ボーカル、ビジュアル", zh: "声乐、视觉", es: "Vocalista, Visual", id: "Vokalis, Visual", fr: "Vocaliste, Visuel", hi: "वोकलिस्ट, विजुअल", pt: "Vocalista, Visual", ar: "مغني، فيجوال", th: "นักร้อง, วิชวล", vi: "Ca sĩ, Visual", ru: "Вокалист, Визуал" },
        birth: "2002.12.08",
        bloodType: "A",
        mbti: "ISTJ",
        height: "180cm",
        zodiac: { ko: "사수자리", en: "Sagittarius", ja: "いて座", zh: "射手座", es: "Sagitario", id: "Sagitarius", fr: "Sagittaire", hi: "धनु (Sagittarius)", pt: "Sagitário", ar: "برج القوس", th: "ราศีธนู", vi: "Nhân Mã", ru: "Стрелец" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Sunghoon+Park+figure+skater+face+closeup+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "국가대표급 피겨 스케이팅 선수 출신 비주얼 보컬. Burberry 글로벌 앰배서더로 활약 중.", en: "Visual vocalist with national-level figure skating background. Active as a global Burberry brand ambassador.", ja: "国家代表級のフィギュアスケート選手出身のビジュアルボーカル。Burberryのグローバルアンバサダーとして活躍中。", zh: "国家队级花样滑冰选手出身的视觉主唱。目前担任Burberry全球大使。", es: "Vocalista visual con antecedentes en el patinaje artístico a nivel nacional. Activo como embajador global de la marca Burberry.", id: "Vokalis visual dengan latar belakang atlet seluncur indah tingkat nasional. Aktif sebagai duta global merek Burberry.", fr: "Chanteur et visuel issu du patinage artistique de niveau national. Actif en tant qu'ambassadeur mondial de la marque Burberry.", hi: "राष्ट्रीय स्तर के फिगर स्केटिंग बैकग्राउंड वाले विजुअल वोकलिस्ट। वर्तमान में बरबरी (Burberry) के वैश्विक राजदूत के रूप में सक्रिय।", pt: "Vocalista visual com experiência em patinação artística de nível nacional. Ativo como embaixador global da marca Burberry.", ar: "مغني وفيجوال بخلفية في التزلج الفني على الجليد على المستوى الوطني. نشط كسفير عالمي لعلامة بربري (Burberry).", th: "วิชวลนักร้องที่เคยเป็นนักกีฬาฟิกเกอร์สเก็ตระดับทีมชาติ ปัจจุบันทำหน้าที่เป็น Global Ambassador ของ Burberry", vi: "Vocalist sở hữu visual nổi bật, từng là vận động viên trượt băng nghệ thuật cấp quốc gia. Đang hoạt động với tư cách là đại sứ toàn cầu của Burberry.", ru: "Визуальный вокалист с опытом фигурного катания на национальном уровне. Глобальный амбассадор бренда Burberry." },
        tmi: {
          ko: [
            "국가대표급 피겨 스케이팅 선수 출신으로, I-LAND에서 이 경력이 알려지며 '피겨 왕자'로 불렸다.",
            "Burberry 글로벌 앰배서더로 활동하며 패션계에서도 탄탄한 입지를 다지고 있다.",
            "완벽주의 성향으로 무대 준비에 특히 철저한 것으로 알려져 있다.",
            "조용하고 신중한 성격이지만 팬들 앞에서는 수줍은 미소로 무장해제를 시키는 매력이 있다.",
            "피겨 선수 시절 각종 대회에서 입상한 실력파로, 그 훈련 덕분에 무대 매너가 남다르다."
          ],
          en: [
            "Former competitive figure skater with national-level skills — earned the 'ice prince' title when revealed on I-LAND.",
            "Active as a global brand ambassador for Burberry, building a solid fashion industry presence.",
            "A perfectionist who is especially thorough in stage preparation.",
            "Quiet and careful in daily life, but his shy smile completely disarms fans.",
            "Won multiple figure skating competitions — that training gave him exceptional stage poise and elegance."
          ],
          ja: [
            "国家代表級の元フィギュアスケート選手で、I-LANDでその経歴が知られ「フィギュア王子」と呼ばれました。",
            "Burberryのグローバルアンバサダーとして活動し、ファッション界でも確固たる地位を築いています。",
            "完璧主義な性格で、ステージの準備には特に徹底していることで知られています。",
            "静かで慎重な性格ですが、ファンの前で見せるはにかんだ笑顔が魅力です。",
            "フィギュア選手時代に様々な大会で入賞した実力派で、その訓練のおかげでステージマナーが卓越しています。"
          ],
          zh: [
            "出身国家队级花样滑冰选手，在I-LAND中这段经历公开后被粉丝称为“滑冰王子”。",
            "担任Burberry全球大使，在时尚界也拥有稳固的地位。",
            "由于追求完美的性格，在舞台准备方面表现得尤为彻底。",
            "性格安静稳重，但在粉丝面前展现出的羞涩微笑极具魅力。",
            "曾是滑冰时期的实力派，在各大比赛中屡次获奖，得益于那段训练，其舞台风度与众不同。"
          ],
          es: [
            "Ex patinador artístico de competición con habilidades de nivel nacional; se ganó el título de 'príncipe del hielo' cuando se reveló en I-LAND.",
            "Activo como embajador global de la marca Burberry, construyendo una sólida presencia en la industria de la moda.",
            "Un perfeccionista que es especialmente minucioso en la preparación de sus actuaciones.",
            "Tranquilo y cuidadoso en la vida diaria, pero su sonrisa tímida desarma por completo a los fans.",
            "Ganó múltiples competiciones de patinaje artístico; ese entrenamiento le dio un porte y una elegancia excepcionales en el escenario."
          ],
          id: [
            "Mantan atlet seluncur indah dengan kemampuan tingkat nasional — mendapat gelar 'pangeran es' saat terungkap di I-LAND.",
            "Aktif sebagai duta global untuk Burberry, membangun kehadiran yang kuat di industri mode.",
            "Seorang perfeksionis yang sangat teliti dalam persiapan panggung.",
            "Pendiam dan berhati-hati dalam kehidupan sehari-hari, tetapi senyum malunya benar-benar meluluhkan hati penggemar.",
            "Memenangkan berbagai kompetisi seluncur indah — latihan itu memberinya ketenangan dan keanggunan panggung yang luar biasa."
          ],
          fr: [
            "Ancien patineur artistique de compétition de niveau national — il a gagné le titre de 'prince de la glace' lors d'I-LAND.",
            "Actif en tant qu'ambassadeur mondial de Burberry, il s'est forgé une solide présence dans le monde de la mode.",
            "Un perfectionniste particulièrement minutieux dans la préparation de ses performances.",
            "Calme et réservé au quotidien, son sourire timide désarme totalement les fans.",
            "Il a remporté de nombreuses compétitions de patinage artistique — cet entraînement lui a donné une aisance et une élégance exceptionnelles sur scène."
          ],
          hi: [
            "पूर्व प्रतिस्पर्धी फिगर स्केटर - I-LAND में इस करियर के खुलासे के बाद उन्हें 'आइस प्रिंस' कहा गया।",
            "बरबरी (Burberry) के वैश्विक राजदूत के रूप में सक्रिय, फैशन उद्योग में अपनी मजबूत पकड़ बना रहे हैं।",
            "एक पूर्णतावादी (perfectionist) जो विशेष रूप से मंच की तैयारी में बहुत गहन रहते हैं।",
            "दैनिक जीवन में शांत और सावधान, लेकिन उनकी शर्मीली मुस्कान प्रशंसकों का दिल जीत लेती है।",
            "फिगर स्केटिंग के दौरान कई प्रतियोगिताओं में जीत हासिल की - उस प्रशिक्षण ने उन्हें मंच पर असाधारण शालीनता और गरिमा दी।"
          ],
          pt: [
            "Ex-patinador artístico de competição com habilidades de nível nacional — ganhou o título de 'príncipe do gelo' quando sua carreira foi revelada no I-LAND.",
            "Ativo como embaixador global da Burberry, construindo uma sólida presença na indústria da moda.",
            "Um perfeccionista que é especialmente minucioso na preparação para o palco.",
            "Quieto e cuidadoso no dia a dia, mas seu sorriso tímido desarma completamente os fãs.",
            "Ganhou várias competições de patinação artística — esse treinamento deu a ele uma postura e elegância excepcionais no palco."
          ],
          ar: [
            "متزلج فني سابق على الجليد بمستوى وطني - نال لقب 'أمير الجليد' عندما كُشف عن تاريخه الرياضي في I-LAND.",
            "نشط كسفير عالمي لعلامة بربري (Burberry)، مما يبني له حضوراً قوياً في صناعة الموضة.",
            "يتميز بشخصية مثالية وهو دقيق للغاية في التحضير للمسرح.",
            "هادئ وحذر في حياته اليومية، لكن ابتسامته الخجولة تجذب المعجبين تماماً.",
            "فاز بالعديد من مسابقات التزلج الفني - وقد منحه ذلك التدريب اتزاناً وأناقة استثنائية على المسرح."
          ],
          th: [
            "อดีตนักกีฬาฟิกเกอร์สเก็ตระดับทีมชาติ จนได้รับฉายา 'เจ้าชายน้ำแข็ง' เมื่อประวัติของเขาถูกเปิดเผยในรายการ I-LAND",
            "ทำหน้าที่เป็น Global Ambassador ของ Burberry และมีอิทธิพลอย่างมากในวงการแฟชั่น",
            "เป็นคนรักความสมบูรณ์แบบ (Perfectionist) ซึ่งมีความละเอียดรอบคอบเป็นพิเศษในการเตรียมตัวขึ้นโชว์",
            "เป็นคนเงียบขรึมและสุขุม แต่รอยยิ้มที่ขี้อายของเขามักจะทำให้แฟนๆ ใจละลายได้เสมอ",
            "เคยคว้ารางวัลจากรายการแข่งขันต่างๆ ในฐานะนักกีฬาฟิกเกอร์สเก็ต ซึ่งการฝึกฝนนั้นทำให้เขามีท่วงท่าที่สง่างามบนเวที"
          ],
          vi: [
            "Từng là vận động viên trượt băng nghệ thuật cấp quốc gia - được gọi là 'hoàng tử băng' khi sự nghiệp này được tiết lộ tại I-LAND.",
            "Hoạt động với tư cách là đại sứ toàn cầu của Burberry, xây dựng vị thế vững chắc trong ngành thời trang.",
            "Một người theo chủ nghĩa hoàn hảo, đặc biệt kỹ lưỡng trong việc chuẩn bị cho sân khấu.",
            "Trầm tính và thận trọng trong cuộc sống hàng ngày, nhưng nụ cười bẽn lẽn của anh hoàn toàn chinh phục người hâm mộ.",
            "Đã giành giải tại nhiều cuộc thi trượt băng nghệ thuật - quá trình đào tạo đó đã mang lại cho anh phong thái và sự thanh lịch đặc biệt trên sân khấu."
          ],
          ru: [
            "Из Брисбена, Австралия — первый австралийский участник в ENHYPEN.",
            "Энтузиаст фотографии, который регулярно делится своими снимками в Instagram — признан «лучшим фотографом среди айдолов».",
            "Поначалу испытывал трудности с корейским языком, но за год стал свободно им владеть, за что получил прозвище «языковая губка».",
            "Очень любит собак — фанаты описывают его как «человека, похожего на щенка, который обожает собак».",
            "Сам узнал об отборе в I-LAND, находясь в Австралии, и убедил родителей отпустить его в Корею, проявив незаурядную решимость."
          ]
        },
        socials: {}
      },
      {
        id: "sunoo",
        name: { ko: "선우", en: "Sunoo", ja: "ソヌ", zh: "金善禹", es: "Sunoo", id: "Sunoo", fr: "Sunoo", hi: "सूनू (Sunoo)", pt: "Sunoo", ar: "سونو (Sunoo)", th: "ซอนอู", vi: "Sunoo", ru: "Сону" },
        role: { ko: "보컬", en: "Vocalist", ja: "ボーカル", zh: "声乐", es: "Vocalista", id: "Vokalis", fr: "Vocaliste", hi: "वोकलिस्ट", pt: "Vocalista", ar: "مغني", th: "นักร้อง", vi: "Ca sĩ", ru: "Вокалист" },
        birth: "2003.06.24",
        bloodType: "O",
        mbti: "ENFP",
        height: "170cm",
        zodiac: { ko: "게자리", en: "Cancer", ja: "かに座", zh: "巨蟹座", es: "Cáncer", id: "Cancer", fr: "Cancer", hi: "कर्क (Cancer)", pt: "Câncer", ar: "برج السرطان", th: "ราศีกรกฎ", vi: "Cự Giải", ru: "Рак" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Sunoo+Kim+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "반달 눈웃음이 트레이드마크인 엔하이픈의 분위기 메이커 보컬리스트.", en: "ENHYPEN's mood-maker vocalist, famous for his crescent-moon eye-smile that lights up every room.", ja: "三日月のような笑顔がトレードマークの、ENHYPENのムードメーカー的なボーカリスト。", zh: "标志性月牙形笑眼，是ENHYPEN的氛围担当主唱。", es: "Vocalista y animador de ENHYPEN, famoso por su sonrisa de ojos en forma de media luna que ilumina cualquier habitación.", id: "Vokalis pembangun suasana ENHYPEN, terkenal dengan senyum matanya yang berbentuk bulan sabit yang mencerahkan setiap ruangan.", fr: "Chanteur et créateur d'ambiance d'ENHYPEN, célèbre pour son sourire aux yeux en forme de croissant de lune qui illumine chaque pièce.", hi: "ENHYPEN के मूड-मेकर गायक, जो अपनी अर्धचंद्राकार मुस्कान के लिए प्रसिद्ध हैं जो हर कमरे को रोशन कर देती है।", pt: "Vocalista e animador do ENHYPEN, famoso pelo seu sorriso com olhos em forma de lua crescente que ilumina qualquer lugar.", ar: "مغني فرقة ENHYPEN وصانع الأجواء، مشهور بابتسامة عينيه التي تشبه الهلال والتي تضيء أي مكان يتواجد فيه.", th: "นักร้องที่เป็นตัวสร้างบรรยากาศของ ENHYPEN โด่งดังด้วยรอยยิ้มรูปพระจันทร์เสี้ยวที่ทำให้โลกสดใส", vi: "Vocalist - người tạo bầu không khí của ENHYPEN, nổi tiếng with nụ cười mắt híp hình trăng khuyết đặc trưng.", ru: "Вокалист и душа компании в ENHYPEN, знаменитый своей улыбкой глазами в форме полумесяца, которая озаряет всё вокруг." },
        tmi: {
          ko: [
            "눈이 반달 모양으로 휘는 미소가 트레이드마크로, '세상에서 가장 행복한 미소'를 가진 아이돌로 불린다.",
            "엔하이픈 분위기 메이커이자 예능 능력자로, 어떤 상황도 웃음으로 바꾸는 능력이 있다.",
            "I-LAND에서 시청자 투표 1위로 선발돼 사실상 '국민이 뽑은 멤버'라는 타이틀을 갖고 있다.",
            "수줍음을 많이 타는 면이 있지만 카메라 앞에서는 완전히 다른 에너지를 발산한다.",
            "식욕이 왕성하기로 멤버들 사이에서 유명해 '선우 먹방'이 팬들 사이에서 인기 콘텐츠다."
          ],
          en: [
            "His crescent-moon smile is his trademark — called 'the idol with the happiest smile in the world'.",
            "ENHYPEN's mood-maker and variety talent — capable of turning any situation into laughter.",
            "Received the highest viewer votes on I-LAND — essentially 'the member chosen by the public'.",
            "Shy in private but radiates completely different energy in front of cameras.",
            "Famous among members for his massive appetite — 'Sunoo mukbang' is a beloved fan content genre."
          ],
          ja: [
            "目が三日月型になる笑顔がトレードマークで、「世界で最も幸せな笑顔」を持つアイドルと呼ばれています。",
            "ENHYPENのムードメーカーでありバラエティ担当で、どんな状況も笑いに変える能力があります。",
            "I-LANDで視聴者投票1位に選ばれ、事実上「国民が選んだメンバー」というタイトルを持っています。",
            "人見知りな面もありますが、カメラの前では全く違うエネルギーを発散します。",
            "食欲旺盛なことでメンバーの間で有名で、「ソヌのモッパン（食べる放送）」はファンの間で人気のコンテンツです。"
          ],
          zh: [
            "月牙形的笑脸是其标志，被誉为拥有“世上最幸福微笑”的偶像。",
            "是ENHYPEN的氛围担当和综艺才子，拥有将任何情况都转化为笑声的能力。",
            "在I-LAND中获得了观众投票第一名，实际上拥有“国民选出的成员”这一称号。",
            "虽然性格有些害羞，但在镜头前会散发出完全不同的能量。",
            "以食欲旺盛在成员中闻名，“善禹吃播”是粉丝们非常喜爱的节目内容。"
          ],
          es: [
            "Su sonrisa de ojos en forma de media luna es su marca registrada; es llamado 'el ídolo con la sonrisa más feliz del mundo'.",
            "El animador y talento para el entretenimiento de ENHYPEN; capaz de convertir cualquier situación en risas.",
            "Recibió la mayor cantidad de votos de los espectadores en I-LAND; esencialmente 'el miembro elegido por el público'.",
            "Tímido en privado, pero irradia una energía completamente diferente frente a las cámaras.",
            "Famoso entre los miembros por su gran apetito; el 'Sunoo mukbang' (videos comiendo) es un género de contenido muy querido por los fans."
          ],
          id: [
            "Senyum mata bulan sabitnya adalah ciri khasnya — disebut sebagai 'idola dengan senyum paling bahagia di dunia'.",
            "Pembangun suasana dan talenta variety ENHYPEN — mampu mengubah situasi apa pun menjadi tawa.",
            "Menerima suara penonton tertinggi di I-LAND — pada dasarnya adalah 'anggota yang dipilih oleh publik'.",
            "Pemalu secara pribadi tetapi memancarkan energi yang sama sekali berbeda di depan kamera.",
            "Terkenal di antara anggota karena nafsu makannya yang besar — 'Sunoo mukbang' adalah konten yang sangat disukai penggemar."
          ],
          fr: [
            "Son sourire aux yeux en forme de croissant de lune est sa signature — on l'appelle 'l'idole au sourire le plus heureux du monde'.",
            "Le créateur d'ambiance et le talent de variété d'ENHYPEN — capable de transformer n'importe quelle situation en rire.",
            "Il a reçu le plus grand nombre de votes des téléspectateurs sur I-LAND — ce qui en fait 'le membre choisi par le public'.",
            "Timide en privé, il dégage une énergie totalement différente devant les caméras.",
            "Célèbre parmi les membres pour son gros appétit — les 'Sunoo mukbang' sont un genre de contenu très apprécié des fans."
          ],
          hi: [
            "उनकी अर्धचंद्राकार मुस्कान उनकी पहचान है - उन्हें 'दुनिया की सबसे खुश मुस्कान वाला आइडल' कहा जाता है।",
            "एनहाइफन के मूड-मेकर और वैराइटी प्रतिभा - किसी भी स्थिति को हंसी में बदलने में सक्षम।",
            "I-LAND में दर्शकों के सबसे अधिक वोट प्राप्त किए - अनिवार्य रूप से 'जनता द्वारा चुना गया सदस्य'।",
            "निजी तौर पर शर्मीले हैं लेकिन कैमरों के सामने बिल्कुल अलग ऊर्जा बिखेरते हैं।",
            "अपनी जबरदस्त भूख के लिए सदस्यों के बीच प्रसिद्ध - 'सूनू मुकबांग' एक प्रिय प्रशंसक सामग्री है।"
          ],
          pt: [
            "Seu sorriso com olhos em forma de lua crescente é sua marca registrada — chamado de 'o ídolo com o sorriso mais feliz do mundo'.",
            "O animador e talento em variedades do ENHYPEN — capaz de transformar qualquer situação em risos.",
            "Recebeu o maior número de votos do público no I-LAND — essencialmente 'o membro escolhido pelo povo'.",
            "Tímido na vida privada, mas irradia uma energia completamente diferente diante das câmeras.",
            "Famoso entre os membros por seu apetite voraz — o 'Sunoo mukbang' é um tipo de conteúdo muito amado pelos fãs."
          ],
          ar: [
            "ابتسامته التي تشبه الهلال هي علامته المميزة - يُلقب بـ 'الآيدول صاحب الابتسامة الأكثر سعادة في العالم'.",
            "صانع الأجواء وموهبة البرامج الترفيهية في ENHYPEN - قادر على تحويل أي موقف إلى ضحك.",
            "حصل على أعلى أصوات المشاهدين في برنامج I-LAND - مما يجعله 'العضو الذي اختاره الجمهور'.",
            "خجول في حياته الخاصة لكنه يشع طاقة مختلفة تماماً أمام الكاميرات.",
            "مشهور بين الأعضاء بشهيته الكبيرة - وتعد فيديوهات 'سونو موكبانغ' نوعاً محبوباً من المحتوى لدى المعجبين."
          ],
          th: [
            "รอยยิ้มรูปพระจันทร์เสี้ยวคือเครื่องหมายการค้าของเขา จนได้รับฉายาว่า 'ไอดอลที่มีรอยยิ้มที่สดใสที่สุดในโลก'",
            "เป็นตัวสร้างบรรยากาศของวงและมีความสามารถด้านวาไรตี้ สามารถเปลี่ยนทุกสถานการณ์ให้เป็นเรื่องตลกได้",
            "ได้รับคะแนนโหวตจากผู้ชมเป็นอันดับ 1 ในรายการ I-LAND จนได้ฉายาว่าเป็น 'สมาชิกที่ประชาชนเลือก'",
            "เป็นคนขี้อายในชีวิตส่วนตัว แต่เมื่ออยู่หน้ากล้องจะแผ่พลังที่ต่างออกไปอย่างสิ้นเชิง",
            "เป็นที่รู้กันดีในหมู่สมาชิกว่าเป็นคนกินเก่งมาก จนคอนเทนต์ 'ซอนอูม็อกบัง' เป็นที่นิยมมากในหมู่แฟนๆ"
          ],
          vi: [
            "Nụ cười mắt híp hình trăng khuyết là thương hiệu của anh - được gọi là 'thần tượng có nụ cười hạnh phúc nhất thế giới'.",
            "Người tạo bầu không khí và tài năng giải trí của ENHYPEN - có khả năng biến mọi tình huống thành tiếng cười.",
            "Nhận được số phiếu bình chọn của khán giả cao nhất tại I-LAND - về cơ bản là 'thành viên do công chúng lựa chọn'.",
            "Khá nhút nhát ở ngoài đời nhưng lại tỏa ra năng lượng hoàn toàn khác trước ống kính.",
            "Nổi tiếng trong số các thành viên vì sự ăn uống ngon miệng - 'Sunoo mukbang' là một loại nội dung được người hâm mộ yêu thích."
          ],
          ru: [
            "Его улыбка глазами в форме полумесяца — его визитная карточка; его называют «айдолом с самой счастливой улыбкой в мире».",
            "Душа компании и мастер развлекательных шоу в ENHYPEN — способен превратить любую ситуацию в шутку.",
            "Получил наибольшее количество голосов зрителей в I-LAND, став «участником, выбранным народом».",
            "Застенчив в личной жизни, но излучает совершенно иную энергию перед камерами.",
            "Знаменит среди участников своим отменным аппетитом — «мукбанг Сону» стал любимым контентом фанатов."
          ]
        },
        socials: {}
      },
      {
        id: "niki",
        name: { ko: "니키", en: "Ni-ki", ja: "ニキ", zh: "西村力", es: "Ni-ki", id: "Ni-ki", fr: "Ni-ki", hi: "निकी (Ni-ki)", pt: "Ni-ki", ar: "ني-كي (Ni-ki)", th: "นิคิ", vi: "Ni-ki", ru: "Ни-ки" },
        role: { ko: "댄서, 막내", en: "Dancer, Maknae", ja: "ダンサー、末っ子", zh: "舞者、最小成员", es: "Bailarín, Maknae", id: "Penari, Maknae", fr: "Danseur, Maknae", hi: "डांसर, मैकने", pt: "Dançarino, Maknae", ar: "راقص، المدلل الصغير", th: "นักเต้น, มักแน", vi: "Vũ công, Maknae", ru: "Танцор, Макне" },
        birth: "2005.12.09",
        bloodType: "A",
        mbti: "ISTP",
        height: "180cm",
        zodiac: { ko: "사수자리", en: "Sagittarius", ja: "いて座", zh: "射手座", es: "Sagitario", id: "Sagitarius", fr: "Sagittaire", hi: "धनु (Sagittarius)", pt: "Sagitário", ar: "برج القوس", th: "ราศีธนู", vi: "Nhân Mã", ru: "Стрелец" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Ni-ki+Nishimura+Riki+face+closeup+official+portrait+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "일본 출신 엔하이픈 막내이자 메인 댄서. 10대 나이에 천재 퍼포머로 인정받는 퍼포먼스 전문가.", en: "Japanese-born ENHYPEN maknae and main dancer. Recognized as a genius performer while still in his teens.", ja: "日本出身のENHYPENの末っ子でありメインダンサー. 10代にして天才パフォーマーと認められるパフォーマンスのスペシャリスト。", zh: "出身日本的ENHYPEN最小成员兼主舞. 在十几岁时就被公认为天才表演者的表演专家。", es: "Miembro más joven y bailarín principal de ENHYPEN, nacido en Japón. Reconocido como un artista genio siendo aún un adolescente.", id: "Anggota termuda dan penari utama ENHYPEN yang lahir di Jepang. Diakui sebagai penampil jenius meskipun masih remaja.", fr: "Membre benjamin et danseur principal d'ENHYPEN, né au Japon. Reconnu comme un performeur de génie dès son adolescence.", hi: "जापान में जन्मे एनहाइफन के सबसे छोटे सदस्य और मुख्य नर्तक। किशोर उम्र में ही एक प्रतिभाशाली प्रदर्शनकर्ता के रूप में पहचाने गए।", pt: "Membro mais jovem e dançarino principal do ENHYPEN, nascido no Japão. Reconhecido como um performer genial ainda na adolescência.", ar: "أصغر أعضاء فرقة ENHYPEN والراقص الرئيسي، ولد في اليابان. معترف به كؤدي عبقري وهو لا يزال في سن المراهقة.", th: "น้องเล็กและนักเต้นหลักของ ENHYPEN จากประเทศญี่ปุ่น ได้รับการยอมรับว่าเป็นอัจฉริยะด้านการแสดงตั้งแต่วัยรุ่น", vi: "Em út và là vũ công chính của ENHYPEN đến từ Nhật Bản. Chuyên gia biểu diễn được công nhận là một nghệ sĩ thiên tài khi còn ở độ tuổi thiếu niên.", ru: "Японский участник, макнэ и главный танцор ENHYPEN. Признан гениальным исполнителем еще в подростковом возрасте." },
        tmi: {
          ko: [
            "일본 출신 막내로, 데뷔 당시 만 15세였으며 이미 일본 최고 수준의 댄서로 인정받고 있었다.",
            "팝핀·힙합·SM댄스 등 다양한 장르를 섭렵한 댄서로 퍼포먼스팀의 핵심 역할을 한다.",
            "나이에 비해 굉장히 성숙한 퍼포먼스로 데뷔 초부터 '천재 무용수'라는 칭호를 얻었다.",
            "평소에는 장난끼 많은 막내이지만 무대에서는 완전히 다른 카리스마를 발산한다.",
            "일본어·한국어를 모두 유창하게 구사해 양국 팬들과 자유롭게 소통할 수 있다."
          ],
          en: [
            "Japanese-born youngest member — debuted at 15 and was already recognized as one of Japan's top dancers.",
            "Covers popping, hip-hop, and SM dance styles — a versatile dancer who is the performance team's cornerstone.",
            "Earned the title 'genius dancer' from debut for performances mature far beyond his age.",
            "The classic mischievous youngest off-stage, but radiates completely different charisma on stage.",
            "Fluent in both Japanese and Korean — freely communicates with fans from both countries."
          ],
          ja: [
            "日本出身の末っ子で、デビュー当時15歳でしたが、すでに日本最高水準のダンサーとして認められていました。",
            "ポッピン、ヒップホップ、SMダンスなど多様なジャンルをこなすダンサーで、パフォーマンスチームの核心的な役割を担っています。",
            "年齢に似合わず非常に成熟したパフォーマンスで、デビュー当初から「天才舞踊家」という称号を得ました。",
            "普段はいたずら好きな末っ子ですが、ステージでは全く違うカリスマ性を放ちます。",
            "日本語と韓国語の両方を流暢に話し、両国のファンと自由なコミュニケーションが可能です。"
          ],
          zh: [
            "出身日本的最小成员，出道时年仅15岁，当时已被公认为日本最高水平的舞者之一。",
            "精通震感舞、嘻哈等多种流派，是表演团队的核心力量。",
            "凭借超乎年龄的成熟表演，出道初期就获得了“天才舞者”的称号。",
            "平时是调皮捣蛋的小老弟，但在舞台上会散发出完全不同的魅力。",
            "韩语和日语都非常流利，能够与两国的粉丝自如地交流。"
          ],
          es: [
            "Miembro más joven nacido en Japón; debutó a los 15 años y ya era reconocido como uno de los mejores bailarines de Japón.",
            "Domina estilos como popping, hip-hop y más; un bailarín versátil que es la piedra angular del equipo de rendimiento.",
            "Se ganó el título de 'bailarín genio' desde su debut por actuaciones que muestran una madurez mucho más allá de su edad.",
            "El clásico maknae travieso fuera del escenario, pero irradia una carisma completamente diferente en el escenario.",
            "Fluido tanto en japonés como en coreano; se comunica libremente con los fans de ambos países."
          ],
          id: [
            "Anggota termuda kelahiran Jepang — debut pada usia 15 tahun dan sudah diakui sebagai salah satu penari top Jepang.",
            "Menguasai gaya popping, hip-hop, dan tari SM — penari serbabisa yang merupakan tulang punggung tim performa.",
            "Mendapat julukan 'penari jenius' sejak debut karena penampilan yang jauh lebih dewasa dari usianya.",
            "Maknae nakal yang khas di luar panggung, tetapi memancarkan karisma yang sangat berbeda di atas panggung.",
            "Fasih dalam bahasa Jepang dan Korea — berkomunikasi dengan bebas dengan penggemar dari kedua negara."
          ],
          fr: [
            "Le plus jeune membre né au Japon — il a débuté à 15 ans et était déjà reconnu comme l'un des meilleurs danseurs du Japon.",
            "Maîtrise le popping, le hip-hop et les styles de danse SM — un danseur polyvalent qui est le pilier de l'équipe de performance.",
            "Il a gagné le titre de 'danseur de génie' dès ses débuts pour des performances d'une maturité bien au-delà de son âge.",
            "Le benjamin espiègle classique hors scène, mais il dégage un charisme totalement différent sur scène.",
            "Parle couramment japonais et coréen — communique librement avec les fans des deux pays."
          ],
          hi: [
            "जापान में जन्मे सबसे छोटे सदस्य - 15 साल की उम्र में डेब्यू किया और पहले से ही जापान के शीर्ष नर्तकों में से एक के रूप में पहचाने जाते थे।",
            "पॉपिंग, हिप-हॉप और एसएम नृत्य शैलियों में माहिर - एक बहुमुखी नर्तक जो प्रदर्शन टीम का आधार है।",
            "अपनी उम्र से कहीं अधिक परिपक्व प्रदर्शन के लिए डेब्यू से ही 'प्रतिभाशाली नर्तक' का खिताब अर्जित किया।",
            "मंच के बाहर क्लासिक शरारती छोटे सदस्य, लेकिन मंच पर बिल्कुल अलग करिश्मा बिखेरते हैं।",
            "जापानी और कोरियाई दोनों में धाराप्रवाह - दोनों देशों के प्रशंसकों के साथ खुलकर संवाद करते हैं।"
          ],
          pt: [
            "Membro mais jovem nascido no Japão — estreou aos 15 anos e já era reconhecido como um dos melhores dançarinos do Japão.",
            "Domina estilos como popping, hip-hop e dança SM — um dançarino versátil que é a base da equipe de performance.",
            "Ganhou o título de 'dançarino genial' desde a estreia por performances com maturidade muito além de sua idade.",
            "O clássico caçula travesso fora do palco, mas irradia um carisma completamente diferente no palco.",
            "Fluente em japonês e coreano — comunica-se livremente com os fã de ambos os países."
          ],
          ar: [
            "أصغر عضو ولد في اليابان - ظهر لأول مرة في سن 15 عاماً وكان معترفاً به بالفعل كواحد من أفضل الراقصين في اليابان.",
            "يتقن أساليب البوبينغ والهيب هوب ورقص SM - وهو راقص متعدد المواهب يمثل الركيزة الأساسية لفريق الأداء.",
            "نال لقب 'الراقص العبقري' منذ ظهوره الأول بفضل عروضه التي تظهر نضجاً يفوق عمره بكثير.",
            "هو 'الماكني' المشاكس الكلاسيكي خارج المسرح، لكنه يشع بكاريزما مختلفة تماماً على المسرح.",
            "طليق في اللغتين اليابانية والكورية - يتواصل بحرية مع المعجبين من كلا البلدين."
          ],
          th: [
            "น้องเล็กจากญี่ปุ่น เดบิวต์ตอนอายุ 15 ปี และได้รับการยอมรับว่าเป็นหนึ่งในนักเต้นระดับแนวหน้าของญี่ปุ่นอยู่แล้ว",
            "เชี่ยวชาญการเต้นหลายสไตล์ทั้ง Popping, Hip-hop และ SM dance เป็นหัวใจสำคัญของทีมเพอร์ฟอร์แมนซ์",
            "ได้รับฉายา 'นักเต้นอัจฉริยะ' ตั้งแต่เดบิวต์ ด้วยการแสดงที่ดูเป็นผู้ใหญ่เกินวัยไปมาก",
            "ในชีวิตปกติจะเป็นน้องเล็กที่ขี้เล่นและซุกซน แต่บนเวทีจะแผ่คาริสม่าที่ต่างออกไปอย่างสิ้นเชิง",
            "สามารถพูดได้คล่องทั้งภาษาญี่ปุ่นและเกาหลี ทำให้สื่อสารกับแฟนๆ ทั้งสองประเทศได้อย่างอิสระ"
          ],
          vi: [
            "Em út người Nhật Bản - ra mắt năm 15 tuổi và đã được công nhận là một trong những vũ công hàng đầu Nhật Bản.",
            "Thông thạo các phong cách nhảy popping, hip-hop và SM - một vũ công đa năng, là trụ cột của đội ngũ biểu diễn.",
            "Được mệnh danh là 'vũ công thiên tài' ngay từ khi ra mắt với những màn trình diễn trưởng thành vượt xa độ tuổi.",
            "Là em út tinh nghịch ngoài đời, nhưng lại tỏa ra sức hút hoàn toàn khác biệt trên sân khấu.",
            "Nói lưu loát cả tiếng Nhật và tiếng Hàn - tự do giao tiếp với người hâm mộ từ cả hai quốc gia."
          ],
          ru: [
            "Японский участник и макнэ — дебютировал в 15 лет и уже тогда считался одним из лучших танцоров Японии.",
            "Владеет паппингом, хип-хопом и стилями SM — универсальный танцор, являющийся опорой перформанс-команды.",
            "С самого дебюта получил титул «гениального танцора» за выступления, зрелость которых намного превосходит его возраст.",
            "Классический озорной макнэ вне сцены, но на сцене он излучает совершенно иную харизму.",
            "Свободно говорит на японском и корейском языках, легко общаясь с фанатами обеих стран."
          ]
        },
        socials: {}
      }
    ]
  },
  {
    id: "iu",
    name: { ko: "아이유", en: "IU", ja: "アイユー (IU)", zh: "李知恩 (IU)", es: "IU", id: "IU", fr: "IU", hi: "आईयू (IU)", pt: "IU", ar: "آيو (IU)", th: "ไอยู (IU)", vi: "IU", ru: "Айю (IU)" },
    officialSite: "https://edam-ent.com/artist/iu",
    company: "EDAM Entertainment",
    accentColor: "#a366ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=IU+Celebrity+Pink+Dress+Official+Photo+High+Res&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/dlwlrma/", twitter: "https://twitter.com/_IUofficial", youtube: "https://www.youtube.com/@dlwlrma", tiktok: "https://www.tiktok.com/@iu_official" },
    fandom: { ko: "유애나 (UAENA)", en: "UAENA", ja: "ユエナ (UAENA)", zh: "UAENA", es: "UAENA", id: "UAENA", fr: "UAENA", hi: "UAENA", pt: "UAENA", ar: "يوينا (UAENA)", th: "ยูแอนา (UAENA)", vi: "UAENA", ru: "UAENA" },
    debut: "2008.09.18",
    wiki: { ko: "아이유(IU)는 대한민국의 가수이자 배우로, '국민 여동생'에서 독보적인 싱어송라이터로 성장한 대한민국 최고의 솔로 아티스트입니다.", en: "IU is a South Korean singer-songwriter and actress, widely considered the most successful solo artist in K-pop history." },
    description: { ko: "대한민국 가요계의 아이콘이자 전설적인 싱어송라이터. 독보적인 음색과 깊은 감성으로 전 세대의 사랑을 받는 아티스트입니다.", en: "The iconic singer-songwriter representing South Korea, loved by all generations for her unique voice and deep emotions." },
    summary: { ko: "대한민국 가요계의 아이콘이자 전설적인 솔로 아티스트. '좋은 날', '밤편지' 등 수많은 히트곡을 보유한 싱어송라이터이자 배우입니다.", en: "The iconic solo artist and singer-songwriter who represents the Korean music industry, with numerous hits and a successful acting career." },
    news: [
      { title: { ko: "아이유, 여성 솔로 최초 잠실 주경기장 입성… 골든 아워 콘서트 성료", en: "IU Becomes First Female Soloist to Headline Seoul Olympic Stadium" }, date: "2022.09.18", summary: { ko: "여성 아티스트 최초로 국내 최대 규모 공연장인 주경기장에서 단독 콘서트를 개최하며 '공연 퀸'의 위상을 증명했습니다.", en: "She made history as the first female soloist to perform at the nation's largest stadium, proving her status as the 'Queen of Performance'." }, url: "#" },
      { title: { ko: "아이유 '밤편지', 스포티파이 1억 스트리밍 돌파", en: "IU's 'Through the Night' Surpasses 100M Streams on Spotify" }, date: "2023.11.10", summary: { ko: "2017년 발표된 메가 히트곡 '밤편지'가 글로벌 팬들의 꾸준한 사랑을 받으며 1억 스트리밍을 달성했습니다.", en: "The 2017 mega-hit 'Through the Night' continues to receive global love, surpassing 100 million streams on Spotify." }, url: "#" },
      { title: { ko: "아이유, 미니 6집 'The Winning' 발매 직후 차트 올킬", en: "IU's 6th Mini Album 'The Winning' Achieves Chart All-Kill" }, date: "2024.02.20", summary: { ko: "타이틀곡 'Love wins all'을 포함한 전 수록곡이 주요 음원 차트 최상위권을 점령하며 아이유의 저력을 보여줬습니다.", en: "All tracks from the new album, including 'Love wins all', dominated major music charts immediately upon release." }, url: "#" },
      { title: { ko: "아이유, 첫 번째 월드투어 'HEREH' 아시아·유럽 투어 성료", en: "IU Successfully Completes First World Tour 'HEREH'" }, date: "2024.08.30", summary: { ko: "서울을 시작으로 전 세계 주요 도시를 순회한 첫 번째 월드투어를 성공적으로 마무리하며 글로벌 팬덤을 확인했습니다.", en: "Successfully concluded her first world tour across major global cities, confirming her massive international fanbase." }, url: "#" },
      { title: { ko: "아이유, 데뷔 17주년 기념 대규모 기부 활동", en: "IU Makes Massive Donation to Celebrate 17th Debut Anniversary" }, date: "2025.09.18", summary: { ko: "데뷔 17주년을 맞아 소외계층을 위해 거액을 기부하며 다시 한번 '기부 천사'의 면모를 보여주었습니다.", en: "Celebrating her 17th anniversary, she made a significant donation to underprivileged groups, once again showing her 'Donation Angel' side." }, url: "#" }
    ],
    tmi: {
      ko: [
        "팬덤 이름 '유애나'는 '유(You) + 애(愛) + 나'의 합성어로 '너와 내가 사랑한다'는 뜻을 가지고 있습니다.",
        "데뷔 당시 중학생이었으며, 초창기에는 기타를 치며 노래하는 소녀 이미지로 큰 사랑을 받았습니다.",
        "대한민국 연예계의 대표적인 '기부 천사'로, 데뷔 기념일이나 특별한 날마다 거액의 기부를 이어오고 있습니다.",
        "음악뿐만 아니라 '나의 아저씨', '호텔 델루나' 등 다수의 작품에서 주연을 맡아 배우로서도 정점에 올랐습니다.",
        "어쿠스틱, 발라드, 댄스, 재즈 등 장르를 가리지 않는 넓은 음악적 스펙트럼과 깊은 작사 능력을 보유하고 있습니다.",
        "가장 좋아하는 색깔은 보라색이며, 가사나 앨범 이미지에 자주 활용합니다.",
        "잠이 오지 않을 때 가사를 쓰는 습관이 있어 수많은 명곡들을 탄생시켰습니다.",
        "민트초코를 좋아하는 것으로 알려져 있으며, 이와 관련된 인터뷰가 팬들 사이에서 큰 화제가 된 적이 있습니다.",
        "'좋은 날'의 3단 고음은 당시 대한민국 가요계에 엄청난 충격을 주었으며, 아이유를 '국민 여동생' 반열에 올린 결정적 계기가 되었습니다.",
        "동료 아티스트나 스태프들에게 이어폰, 간식 등이 담긴 '아이유 선물 세트'를 돌리는 따뜻한 마음씨로 유명합니다."
      ],
      en: [
        "The fandom name 'UAENA' is a combination of 'U (You)', 'AE (Love in Sino-Korean)', and 'NA (Me)', meaning 'You and I love each other'.",
        "Debuted as a middle school student in 2008, starting with an acoustic guitar-playing girl image.",
        "Widely known as a 'Donation Angel' in Korea, consistently donating large sums on debut anniversaries and special occasions.",
        "A top-tier actress who starred in critically acclaimed dramas like 'My Mister' and 'Hotel Del Luna'.",
        "Possesses a vast musical spectrum across folk, ballad, dance, and jazz, with exceptional songwriting skills.",
        "Her favorite color is purple, which she often incorporates into her lyrics and album art.",
        "She has a habit of writing lyrics when she can't sleep, which led to the creation of many hit songs.",
        "She is a well-known fan of Mint Chocolate, and her interview about it became a hot topic among fans.",
        "The iconic '3-octave high note' in 'Good Day' was a pivotal moment that cemented her status as the 'Nation's Little Sister'.",
        "She is famous for her generosity, often giving 'IU Gift Sets' (headphones, snacks, etc.) to junior artists and staff."
      ]
    },
    members: [
      {
        id: "iu_member",
        name: { ko: "아이유", en: "IU", ja: "アイユー (IU)", zh: "李知恩 (IU)", es: "IU", id: "IU", fr: "IU", hi: "आईयू (IU)", pt: "IU", ar: "آيو (IU)", th: "ไอยู (IU)", vi: "IU", ru: "Айю (IU)" },
        birth: "1993.05.16",
        height: "162cm",
        bloodType: "A",
        mbti: "INFJ",
        imageUrl: "https://tse1.mm.bing.net/th?q=IU+Official+Profile+Photo+High+Res",
        tmi: {
          ko: [
            "가장 좋아하는 색깔은 보라색이며, 가사나 앨범 이미지에 자주 활용합니다.",
            "잠이 오지 않을 때 가사를 쓰는 습관이 있어 수많은 명곡들을 탄생시켰습니다.",
            "팬들과 소통할 때 '친구' 같은 편안한 관계를 유지하는 것으로 유명합니다.",
            "민트초코를 좋아하는 '민초파'로 알려져 있습니다.",
            "작업할 때 완벽주의적인 면모를 보여주며, 본인의 곡 대부분을 직접 작사합니다."
          ],
          en: [
            "Her favorite color is purple, which she often incorporates into her lyrics and album art.",
            "She has a habit of writing lyrics when she can't sleep, leading to many hit songs.",
            "Famous for maintaining a comfortable, friend-like relationship with her fans.",
            "Known as a 'Mint Choco' lover.",
            "A perfectionist during production, she writes the lyrics for almost all of her songs."
          ]
        },
        socials: {}
      }
    ]
  },
  {
    id: "jungkook",
    name: { ko: "정국", en: "Jungkook", ja: "ジョングク (Jungkook)", zh: "田柾國 (Jungkook)", es: "Jungkook", id: "Jungkook", fr: "Jungkook", hi: "जंगकुक (Jungkook)", pt: "Jungkook", ar: "جونغكوك (Jungkook)", th: "จองกุก (Jungkook)", vi: "Jungkook", ru: "Чонгук (Jungkook)" },
    officialSite: "https://ibighit.com/bts/kor/profile/",
    company: "BIGHIT MUSIC",
    accentColor: "#ffcc00",
    imageUrl: "https://tse1.mm.bing.net/th?q=Jungkook+GOLDEN+Concept+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/bts.bighitofficial/", twitter: "https://twitter.com/bts_bighit", youtube: "https://www.youtube.com/@BTS", tiktok: "https://www.tiktok.com/@bts_official_bighit" },
    fandom: { ko: "아미 (ARMY)", en: "ARMY", ja: "アーミー (ARMY)", zh: "ARMY", es: "ARMY", id: "ARMY", fr: "ARMY", hi: "ARMY", pt: "ARMY", ar: "آرمي (ARMY)", th: "อาร์มี่ (ARMY)", vi: "ARMY", ru: "АРМИ (ARMY)" },
    debut: "2013.06.13",
    wiki: { ko: "정국(Jungkook)은 방탄소년단(BTS)의 멤버이자 글로벌 팝스타로, 2023년 솔로 앨범 'GOLDEN'을 통해 전 세계 차트를 휩쓸며 독보적인 솔로 아티스트로서의 입지를 굳혔습니다.", en: "Jungkook is a member of BTS and a global pop star who dominated world charts with his 2023 solo album 'GOLDEN'." },
    description: { ko: "방탄소년단의 '황금 막내'이자 글로벌 팝 아이콘. 빌보드 Hot 100 1위를 기록하며 전 세계를 사로잡은 아티스트입니다.", en: "The 'Golden Maknae' of BTS and a global pop icon. A history-making artist who topped the Billboard Hot 100." },
    summary: { ko: "방탄소년단의 '황금 막내'에서 글로벌 팝 아이콘으로. 빌보드 Hot 100 1위를 기록한 'Seven'을 비롯해 전 세계적인 인기를 누리는 아티스트입니다.", en: "From BTS's 'Golden Maknae' to a global pop icon. A record-breaking artist whose hits like 'Seven' topped the Billboard Hot 100." },
    news: [
      { title: { ko: "정국 'Seven', 빌보드 Hot 100 1위 데뷔 신기록", en: "Jungkook's 'Seven' Debuts at No.1 on Billboard Hot 100" }, date: "2023.07.24", summary: { ko: "솔로 싱글 'Seven'이 발매와 동시에 빌보드 메인 싱글 차트 1위에 오르며 글로벌 팝스타로서의 저력을 과시했습니다.", en: "His solo single 'Seven' debuted at the top of the Billboard Hot 100, proving his immense global power." }, url: "#" },
      { title: { ko: "정국 솔로 앨범 'GOLDEN', 영국 오피셜 차트 역대 최고 순위", en: "Jungkook's 'GOLDEN' Sets Highest Record on UK Official Charts" }, date: "2023.11.10", summary: { ko: "첫 솔로 정규 앨범 'GOLDEN'이 영국 오피셜 앨범 차트 상위권에 진입하며 K-팝 솔로 아티스트 신기록을 세웠습니다.", en: "His first solo LP 'GOLDEN' entered the UK Official Album Chart at a record high for a K-pop soloist." }, url: "#" }
    ],
    tmi: {
      ko: [
        "별명 '황금 막내'는 노래, 춤, 랩, 그림, 운동 등 못하는 게 없어서 붙여진 이름입니다.",
        "카타르 월드컵 공식 주제가 'Dreamers'를 가창하며 한국 가수 최초로 월드컵 개막식 무대를 장식했습니다.",
        "그림 실력이 매우 뛰어나며, 본인의 굿즈나 콘텐츠 디자인에 참여하기도 합니다.",
        "복싱과 웨이트 트레이닝을 즐기는 운동 마니아로 알려져 있습니다.",
        "완벽주의적인 성격으로 녹음할 때 본인이 만족할 때까지 수없이 반복하는 것으로 유명합니다."
      ],
      en: [
        "His nickname 'Golden Maknae' was given because he excels in everything: singing, dancing, rapping, art, and sports.",
        "Performed 'Dreamers', the official FIFA World Cup Qatar 2022 soundtrack, as the first Korean artist to perform at a World Cup opening ceremony.",
        "An incredibly talented artist who often participates in designing his own merchandise and content.",
        "A fitness enthusiast who enjoys boxing and weight training.",
        "Known for his perfectionism, often repeating recordings countless times until he is fully satisfied."
      ]
    },
    members: [
      {
        id: "jungkook_member",
        name: { ko: "정국", en: "Jungkook", ja: "ジョングク (Jungkook)", zh: "田柾國 (Jungkook)", es: "Jungkook", id: "Jungkook", fr: "Jungkook", hi: "जंगकुक (Jungkook)", pt: "Jungkook", ar: "جونغكوك (Jungkook)", th: "จองกุก (Jungkook)", vi: "Jungkook", ru: "Чон구к (Jungkook)" },
        birth: "1997.09.01",
        height: "179cm",
        bloodType: "A",
        mbti: "ISFP",
        imageUrl: "https://tse1.mm.bing.net/th?q=Jungkook+Official+Profile+Photo+2024+High+Res",
        tmi: {
          ko: [
            "가장 좋아하는 숫자는 1입니다.",
            "삼겹살과 고기를 매우 좋아하며, 요리 실력도 수준급입니다.",
            "향기에 민감하여 향수나 섬유유연제를 고르는 데 공을 많이 들인다고 합니다.",
            "잠이 많기로 유명하며, 어디서든 잘 자는 모습을 보여줍니다.",
            "본인의 음악적 성장을 위해 꾸준히 팝 아티스트들의 곡을 커버하며 연습합니다."
          ],
          en: [
            "His favorite number is 1.",
            "A huge meat lover, especially Samgyeopsal (pork belly), and is a skilled cook.",
            "Very sensitive to scents and takes great care in choosing perfumes and fabric softeners.",
            "Famous for being a deep sleeper who can nap almost anywhere.",
            "Consistently covers pop artists' songs to study and grow musically."
          ]
        },
        socials: {}
      }
    ]
  },
  {
    id: "lisa",
    name: { ko: "리사", en: "LISA", ja: "リサ (LISA)", zh: "LISA", es: "LISA", id: "LISA", fr: "LISA", hi: "लिसा (LISA)", pt: "LISA", ar: "ليسا (LISA)", th: "ลิซ่า (LISA)", vi: "LISA", ru: "Лиса (LISA)" },
    officialSite: "https://www.lloud.com/",
    company: "LLOUD / RCA Records",
    accentColor: "#ffff00",
    imageUrl: "https://tse1.mm.bing.net/th?q=LISA+ROCKSTAR+Concept+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/lalalalisa_m/", twitter: "https://twitter.com/wearelloud", youtube: "https://www.youtube.com/@lalalalisa_m", tiktok: "https://www.tiktok.com/@lisalarissa.official" },
    fandom: { ko: "릴리즈 (Lilies)", en: "Lilies", ja: "리리즈 (Lilies)", zh: "Lilies", es: "Lilies", id: "Lilies", fr: "Lilies", hi: "Lilies", pt: "Lilies", ar: "ليليز (Lilies)", th: "ลิลลี่ (Lilies)", vi: "Lilies", ru: "Лилиз (Lilies)" },
    debut: "2016.08.08",
    wiki: { ko: "리사(LISA)는 블랙핑크(BLACKPINK)의 멤버이자 글로벌 팝스타로, 2021년 솔로 데뷔 이후 'LALISA', 'MONEY', 'ROCKSTAR' 등을 통해 전 세계적인 신드롬을 일으키고 있는 아티스트입니다.", en: "LISA is a member of BLACKPINK and a global pop icon who has created global syndromes with hits like 'LALISA', 'MONEY', and 'ROCKSTAR'." },
    description: { ko: "글로벌 팝 아이콘이자 퍼포먼스 퀸. 기네스 세계 기록을 다수 보유하며 전 세계 패션과 음악계에 막강한 영향력을 발휘합니다.", en: "Global pop icon and performance queen. Holds multiple Guinness World Records and exerts massive influence in fashion and music." },
    summary: { ko: "글로벌 패션 및 음악 아이콘. 기네스 세계 기록을 다수 보유한 솔로 아티스트이자 전 세계에서 가장 영향력 있는 K-팝 스타 중 한 명입니다.", en: "A global fashion and music icon. A Guinness World Record-holding solo artist and one of the most influential K-pop stars in the world." },
    news: [
      { title: { ko: "리사 'ROCKSTAR', 빌보드 글로벌 200 최상위권 점령", en: "LISA's 'ROCKSTAR' Dominates Billboard Global 200 Charts" }, date: "2024.06.28", summary: { ko: "새로운 레이블 LLOUD 설립 후 발표한 'ROCKSTAR'가 전 세계 음원 차트를 휩쓸며 성공적인 독자 행보를 알렸습니다.", en: "Her first release under new label LLOUD, 'ROCKSTAR', swept global charts, marking a successful solo path." }, url: "#" },
      { title: { ko: "리사, K-팝 솔로 최초 'VMA' 2회 수상 신기록", en: "LISA Becomes First K-pop Soloist to Win Twice at MTV VMAs" }, date: "2024.09.12", summary: { ko: "'Best K-Pop' 부문에서 두 차례 수상하며 글로벌 음악 시장에서 독보적인 존재감을 다시 한번 입증했습니다.", en: "She won 'Best K-Pop' for the second time, proving her unrivaled presence in the global music market." }, url: "#" }
    ],
    tmi: {
      ko: [
        "고향인 태국에서 '태국의 보물'로 불리며 국가적인 사랑과 존경을 받고 있습니다.",
        "K-팝 아티스트 중 인스타그램 팔로워 수 압도적 1위를 기록하고 있는 글로벌 SNS 퀸입니다.",
        "글로벌 럭셔리 브랜드의 앰버서더로 활동하며 패션계에서도 막강한 영향력을 발휘합니다.",
        "다섯 마리의 고양이를 키우는 열혈 '집사'로 알려져 있으며, 고양이들의 이름은 모두 'L'로 시작합니다.",
        "어린 시절부터 댄스 크루 활동을 하며 실력을 쌓았고, 현재는 세계 최고의 여성 댄서 중 한 명으로 꼽힙니다."
      ],
      en: [
        "Known as 'Thailand's Pride' in her home country, receiving national-level love and respect.",
        "The most followed K-pop artist on Instagram, holding the title of global SNS Queen.",
        "A powerhouse in the fashion industry, serving as a global ambassador for top luxury brands.",
        "A dedicated cat lover who owns five cats, all with names starting with the letter 'L'.",
        "Started dancing in a crew from a young age and is now widely regarded as one of the world's best female dancers."
      ]
    },
    members: [
      {
        id: "lisa_member",
        name: { ko: "리사", en: "LISA", ja: "リ사 (LISA)", zh: "LISA", es: "LISA", id: "LISA", fr: "LISA", hi: "लिसा (LISA)", pt: "LISA", ar: "ليسا (LISA)", th: "ลิซ่า (LISA)", vi: "LISA", ru: "Лиса (LISA)" },
        birth: "1997.03.27",
        height: "167cm",
        bloodType: "O",
        mbti: "ESFJ",
        imageUrl: "https://tse1.mm.bing.net/th?q=LISA+LLOUD+Official+Profile+Photo+High+Res",
        tmi: {
          ko: [
            "가장 좋아하는 음식은 감자탕과 태국 요리입니다.",
            "사진 촬영이 취미이며, 고가의 카메라 장비를 다수 보유하고 있습니다.",
            "한국어, 태국어, 영어, 일본어 등 4개 국어에 능통한 언어 천재입니다.",
            "무대 위에서는 카리스마 넘치지만, 일상에서는 장난기 가득한 성격입니다.",
            "연습생 시절부터 남다른 춤선과 습득력으로 주목받았습니다."
          ],
          en: [
            "Her favorite foods include Gamja-tang (pork bone soup) and Thai cuisine.",
            "An avid photographer who owns a vast collection of professional camera equipment.",
            "A linguistic genius fluent in Korean, Thai, English, and Japanese.",
            "While charismatic on stage, she is known for her playful and mischievous personality off-stage.",
            "Was highly recognized during her trainee days for her exceptional dance lines and quick learning ability."
          ]
        },
        socials: {}
      }
    ]
  },
  {
    id: "babymonster",
    name: { ko: "베이비몬스터", en: "BABYMONSTER", ja: "ベイビーモンスター (BABYMONSTER)", zh: "BABYMONSTER", es: "BABYMONSTER", id: "BABYMONSTER", fr: "BABYMONSTER", hi: "बेबीमॉन्स्टर (BABYMONSTER)", pt: "BABYMONSTER", ar: "بيبي مونستر (BABYMONSTER)", th: "เบบี้มอนสเตอร์ (BABYMONSTER)", vi: "BABYMONSTER", ru: "BABYMONSTER" },
    officialSite: "https://yg-babymonster.com/",
    company: "YG Entertainment",
    accentColor: "#ff0000",
    imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+DRIP+Group+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/babymonster_ygofficial/", twitter: "https://twitter.com/ygbabymonster_", youtube: "https://www.youtube.com/@BABYMONSTER", tiktok: "https://www.tiktok.com/@babymonster_yg_official" },
    fandom: { ko: "몬스트리즈 (MONSTIEZ)", en: "MONSTIEZ", ja: "モンストリーズ (MONSTIEZ)", zh: "MONSTIEZ", es: "MONSTIEZ", id: "MONSTIEZ", fr: "MONSTIEZ", hi: "MONSTIEZ", pt: "MONSTIEZ", ar: "مونستريز (MONSTIEZ)", th: "มอนสตรีซ (MONSTIEZ)", vi: "MONSTIEZ", ru: "MONSTIEZ" },
    debut: "2024.04.01",
    wiki: { ko: "베이비몬스터(BABYMONSTER)는 YG 엔터테인먼트 소속의 7인조 다국적 걸그룹입니다. 보컬, 댄스, 랩 실력을 두루 갖춘 '올라운더' 멤버들로 구성되어 데뷔 전부터 전 세계적인 주목을 받았습니다.", en: "BABYMONSTER is a 7-member multinational girl group under YG Entertainment, known for their exceptional 'all-rounder' skills in vocal, dance, and rap." },
    description: { ko: "YG의 차세대 '괴물 신인'. 압도적인 실력과 당당한 카리스마로 전 세계 팝 시장에 새로운 충격을 던지고 있습니다.", en: "YG's next-generation 'monster rookies' shaking up the global pop market with overwhelming talent and charisma." },
    summary: { ko: "YG의 차세대 괴물 신인. 압도적인 실력과 당당한 카리스마로 전 세계 팝 시장에 새로운 충격을 던지고 있는 그룹입니다.", en: "YG's next-generation 'monster rookies'. A group that is shaking up the global pop market with their overwhelming talent and charisma." },
    news: [
      { title: { ko: "베이비몬스터 'SHEESH' 뮤직비디오, K-팝 걸그룹 데뷔곡 최단 기간 1억 뷰", en: "BABYMONSTER's 'SHEESH' MV Hits 100M Views in Record Time for K-pop Girl Group Debut" }, date: "2024.04.11", summary: { ko: "공식 데뷔곡 'SHEESH'가 공개 10일 만에 유튜브 조회수 1억 회를 돌파하며 폭발적인 글로벌 인기를 입증했습니다.", en: "Their official debut song 'SHEESH' surpassed 100 million views on YouTube just 10 days after release." }, url: "#" },
      { title: { ko: "베이비몬스터, 첫 정규 앨범 'DRIP'으로 빌보드 차트 강타", en: "BABYMONSTER Hits Billboard Charts with 1st Full Album 'DRIP'" }, date: "2024.11.01", summary: { ko: "첫 정규 앨범 'DRIP'이 발매와 동시에 다수의 글로벌 차트 상위권에 진입하며 강력한 존재감을 과시했습니다.", en: "Their first full album 'DRIP' entered top global charts immediately upon release, showing their strong market presence." }, url: "#" }
    ],
    tmi: {
      ko: [
        "멤버 전원이 보컬, 댄스, 랩 능력을 모두 갖춘 '올라운더'를 지향하며, 라이브 실력이 매우 뛰어난 것으로 유명합니다.",
        "한국, 태국, 일본 국적의 멤버들로 구성된 다국적 그룹으로 글로벌 소통 능력이 탁월합니다.",
        "데뷔 전 서바이벌 프로그램을 통해 멤버들의 선발 과정과 연습생 시절이 전 세계 팬들에게 공개되었습니다.",
        "팬덤 이름 'MONSTIEZ'는 그룹 이름의 'MONSTER'와 유대감을 뜻하는 'TIES'의 합성어입니다.",
        "YG 특유의 힙합 아이덴티티를 계승하면서도 멤버들 각각의 개성 있는 보컬 컬러가 돋보입니다."
      ],
      en: [
        "Every member aims to be an 'all-rounder' with top-tier vocal, dance, and rap skills, and they are famous for their stable live performances.",
        "A multinational group with members from Korea, Thailand, and Japan, possessing excellent global communication skills.",
        "Their selection process and trainee days were shared with global fans through a pre-debut survival program.",
        "The fandom name 'MONSTIEZ' is a combination of 'MONSTER' and 'TIES', representing the strong bond between the group and fans.",
        "They inherit YG's signature hip-hop identity while showcasing each member's unique vocal colors."
      ]
    },
    members: [
      { id: "ruka", name: { ko: "루카", en: "RUKA", ja: "ルカ", zh: "RUKA" }, birth: "2002.03.20", height: "164cm", bloodType: "O", mbti: "ISFP", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Ruka+Profile", socials: {}, tmi: { ko: ["일본 출신 멤버로, YG 역사상 가장 오래 연습한 여성 연습생 중 한 명입니다."], en: ["A member from Japan, she is one of the longest-trained female trainees in YG history."] } },
      { id: "pharita", name: { ko: "파리타", en: "PHARITA", ja: "パリタ", zh: "PHARITA" }, birth: "2005.08.26", height: "171cm", bloodType: "A", mbti: "ENFJ", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Pharita+Profile", socials: {}, tmi: { ko: ["태국 출신 멤버로, 디즈니 애니메이션 주인공 같은 비주얼과 맑은 음색이 특징입니다."], en: ["A member from Thailand, known for her Disney-like visuals and clear vocal tone."] } },
      { id: "asa", name: { ko: "아사", en: "ASA", ja: "アサ", zh: "ASA" }, birth: "2006.04.17", height: "166cm", bloodType: "O", mbti: "ENFP", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Asa+Profile", socials: {}, tmi: { ko: ["일본 출신 멤버로, 매우 빠르고 정확한 딕션의 랩 실력을 보유하고 있습니다."], en: ["A member from Japan, she possesses incredibly fast and precise rap delivery."] } },
      { id: "ahyeon", name: { ko: "아현", en: "AHYEON", ja: "アヒョン", zh: "AHYEON" }, birth: "2007.04.11", height: "163cm", bloodType: "A", mbti: "ESTP", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Ahyeon+Profile", socials: {}, tmi: { ko: ["보컬, 랩, 댄스 모두 최정상급 실력을 갖춰 '확신의 센터'로 불립니다."], en: ["Known as the 'sure-fire center' with top-tier skills in vocal, rap, and dance."] } },
      { id: "rami", name: { ko: "라미", en: "RAMI", ja: "ラミ", zh: "RAMI" }, birth: "2007.10.17", height: "172cm", bloodType: "O", mbti: "INFJ", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Rami+Profile", socials: {}, tmi: { ko: ["독보적인 소울풀한 보컬과 파워풀한 가창력을 가진 메인 보컬입니다."], en: ["The main vocal with a unique soulful voice and powerful vocal range."] } },
      { id: "rora", name: { ko: "로라", en: "RORA", ja: "ローラ", zh: "RORA" }, birth: "2008.08.14", height: "168cm", bloodType: "A", mbti: "INTP", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Rora+Profile", socials: {}, tmi: { ko: ["우아한 분위기와 중저음의 매력적인 보컬 톤을 가지고 있습니다."], en: ["Known for her elegant aura and attractive mid-to-low vocal tones."] } },
      { id: "chiquita", name: { ko: "치키타", en: "CHIQUITA", ja: "チキータ", zh: "CHIQUITA" }, birth: "2009.02.17", height: "165cm", bloodType: "O", mbti: "ENFP", imageUrl: "https://tse1.mm.bing.net/th?q=BABYMONSTER+Chiquita+Profile", socials: {}, tmi: { ko: ["태국 출신 막내로, 타고난 스타성과 성장 속도로 '천재 신인'이라 불립니다."], en: ["The Thai maknae, called a 'genius rookie' for her natural star quality and fast growth."] } }
    ]
  },
  {
    id: "riize",
    name: { ko: "라이즈", en: "RIIZE", ja: "ライズ (RIIZE)", zh: "RIIZE", es: "RIIZE", id: "RIIZE", fr: "RIIZE", hi: "राइज़ (RIIZE)", pt: "RIIZE", ar: "رايز (RIIZE)", th: "ไรซ์ (RIIZE)", vi: "RIIZE", ru: "RIIZE" },
    officialSite: "https://www.smtown.com/artist/profile/10123",
    company: "SM Entertainment",
    accentColor: "#0066ff",
    imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Boom+Boom+Bass+Group+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/riize_official/", twitter: "https://twitter.com/riize_official", youtube: "https://www.youtube.com/@RIIZE_official", tiktok: "https://www.tiktok.com/@riize_official" },
    fandom: { ko: "브리즈 (BRIIZE)", en: "BRIIZE", ja: "ブリーズ (BRIIZE)", zh: "BRIIZE", es: "BRIIZE", id: "BRIIZE", fr: "BRIIZE", hi: "BRIIZE", pt: "BRIIZE", ar: "بريز (BRIIZE)", th: "บรีซ (BRIIZE)", vi: "BRIIZE", ru: "BRIIZE" },
    debut: "2023.09.04",
    wiki: { ko: "라이즈(RIIZE)는 SM 엔터테인먼트 소속의 보이그룹입니다. '함께 성장하고 꿈을 실현해 나가는 팀'이라는 의미를 담고 있으며, 독자적인 장르인 '이모셔널 팝(Emotional Pop)'을 선보입니다.", en: "RIIZE is a boy group under SM Entertainment. The name stands for 'Rise' and 'Realize', meaning a team that grows together and realizes dreams." },
    description: { ko: "5세대를 대표하는 이모셔널 팝 보이그룹. 청량한 비주얼과 압도적인 퍼포먼스로 독자적인 음악 세계를 구축하고 있습니다.", en: "A 5th-gen leading Emotional Pop boy group, building their unique musical world with refreshing visuals and powerful performances." },
    summary: { ko: "5세대를 대표하는 이모셔널 팝의 선두주자. 청량한 비주얼과 압도적인 퍼포먼스로 데뷔와 동시에 글로벌 차트를 휩쓸고 있는 그룹입니다.", en: "Leaders of 5th-gen Emotional Pop. A group dominating global charts with their refreshing visuals and powerful performances since debut." },
    news: [
      { title: { ko: "라이즈 'Get A Guitar', 데뷔와 동시에 밀리언셀러 등극", en: "RIIZE's 'Get A Guitar' Becomes Million Seller Upon Debut" }, date: "2023.09.11", summary: { ko: "데뷔 싱글 'Get A Guitar'가 발매 일주일 만에 판매량 100만 장을 돌파하며 역대급 신인 탄생을 알렸습니다.", en: "Their debut single 'Get A Guitar' surpassed 1 million sales in just one week." }, url: "#" },
      { title: { ko: "라이즈, 첫 미니앨범 'RIIZING'으로 글로벌 차트 석권", en: "RIIZE Sweeps Global Charts with 1st Mini Album 'RIIZING'" }, date: "2024.06.17", summary: { ko: "타이틀곡 'Boom Boom Bass'가 국내외 주요 음원 차트 최상위권에 오르며 대세 입지를 굳혔습니다.", en: "The title track 'Boom Boom Bass' topped major charts, solidifying their status as a top-tier group." }, url: "#" }
    ],
    tmi: {
      ko: [
        "그룹명은 '성장하다(Rise)'와 '실현하다(Realize)'를 결합한 것으로, 함께 성장하고 꿈을 실현한다는 뜻입니다.",
        "멤버들의 일상을 공유하는 인스타그램 계정이 데뷔 전부터 폭발적인 팔로워를 기록하며 화제가 되었습니다.",
        "독자적인 음악 장르인 '이모셔널 팝'은 멤버들의 다양한 감정을 음악에 담아 전달하는 것을 목표로 합니다.",
        "루이비통(Louis Vuitton)의 하우스 앰버서더로 발탁되는 등 패션계에서도 주목받는 아이콘입니다.",
        "탄탄한 기본기를 바탕으로 한 고난도의 퍼포먼스와 멤버들 간의 완벽한 합이 강점입니다."
      ],
      en: [
        "The group name combines 'Rise' and 'Realize', symbolizing a team that grows together and achieves dreams.",
        "Their Instagram account sharing daily lives became a hot topic with massive followers even before debut.",
        "'Emotional Pop' is their unique genre that aims to express and share various emotions through music.",
        "Recognized as fashion icons, serving as House Ambassadors for Louis Vuitton.",
        "Known for their high-difficulty performances and perfect teamwork built on strong fundamental skills."
      ]
    },
    members: [
      { id: "shotaro", name: { ko: "쇼타로", en: "SHOTARO", ja: "ショウタロウ" }, birth: "2000.11.25", height: "178cm", bloodType: "A", mbti: "ESFP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Shotaro+Profile", socials: {}, tmi: { ko: ["일본 출신으로, 압도적인 춤 실력과 귀여운 눈웃음이 매력 포인트입니다."], en: ["From Japan, known for his overwhelming dance skills and charming eye smile."] } },
      { id: "eunseok", name: { ko: "은석", en: "EUNSEOK", ja: "ウンソク" }, birth: "2001.03.19", height: "180cm", bloodType: "AB", mbti: "ISTP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Eunseok+Profile", socials: {}, tmi: { ko: ["차분하고 시크한 매력의 소유자로, 중저음의 매력적인 보이스를 가졌습니다."], en: ["Possesses a calm and chic charm with an attractive mid-to-low vocal tone."] } },
      { id: "sungchan", name: { ko: "성찬", en: "SUNGCHAN", ja: "ソンチャン" }, birth: "2001.09.13", height: "185cm", bloodType: "A", mbti: "ESTP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Sungchan+Profile", socials: {}, tmi: { ko: ["큰 키와 뚜렷한 이목구비의 비주얼, 그리고 파워풀한 랩 실력이 특징입니다."], en: ["Known for his tall stature, distinct facial features, and powerful rap skills."] } },
      { id: "wonbin", name: { ko: "원빈", en: "WONBIN", ja: "WONBIN" }, birth: "2002.03.02", height: "176cm", bloodType: "AB", mbti: "ISTP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Wonbin+Profile", socials: {}, tmi: { ko: ["독보적인 비주얼과 뛰어난 댄스, 기타 연주 실력까지 겸비한 센터입니다."], en: ["A center who possesses unrivaled visuals, excellent dance, and guitar skills."] } },
      { id: "sohee", name: { ko: "소희", en: "SOHEE", ja: "SOHEE" }, birth: "2003.11.21", height: "174cm", bloodType: "A", mbti: "ISTP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Sohee+Profile", socials: {}, tmi: { ko: ["맑고 파워풀한 고음을 소화하는 팀의 핵심 메인 보컬입니다."], en: ["The team's key main vocal who delivers clear and powerful high notes."] } },
      { id: "anton", name: { ko: "앤톤", en: "ANTON", ja: "ANTON" }, birth: "2004.03.21", height: "184cm", bloodType: "O", mbti: "INTP", imageUrl: "https://tse1.mm.bing.net/th?q=RIIZE+Anton+Profile", socials: {}, tmi: { ko: ["음악가 윤상의 아들로, 뛰어난 첼로 연주와 작곡 능력을 갖춘 막내입니다."], en: ["Son of musician Yoon Sang, the maknae is skilled in cello and music production."] } }
    ]
  },
  {
    id: "txt",
    name: { ko: "투모로우바이투게더", en: "TXT", ja: "トゥモローバイトゥギャザー (TXT)", zh: "TXT", es: "TXT", id: "TXT", fr: "TXT", hi: "TXT", pt: "TXT", ar: "تي إكس تي (TXT)", th: "ทีเอ็กซ์ที (TXT)", vi: "TXT", ru: "TXT" },
    officialSite: "https://ibighit.com/txt/kor/",
    company: "BIGHIT MUSIC",
    accentColor: "#ccff00",
    imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Group+Concept+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/txt_bighit/", twitter: "https://twitter.com/TXT_bighit", youtube: "https://www.youtube.com/@TXT_bighit", tiktok: "https://www.tiktok.com/@txt.bighitent" },
    fandom: { ko: "모아 (MOA)", en: "MOA", ja: "モア (MOA)", zh: "MOA", es: "MOA", id: "MOA", fr: "MOA", hi: "MOA", pt: "MOA", ar: "موا (MOA)", th: "โมอา (MOA)", vi: "MOA", ru: "MOA" },
    debut: "2019.03.04",
    wiki: { ko: "투모로우바이투게더(TXT)는 빅히트 뮤직 소속의 5인조 보이그룹입니다. '서로 다른 너와 내가 하나의 꿈으로 모여 내일을 함께 만들어간다'는 의미를 담고 있으며 4세대를 대표하는 글로벌 그룹입니다.", en: "TOMORROW X TOGETHER (TXT) is a 5-member boy group under Big Hit Music, representing the 4th generation of K-pop globally." },
    description: { ko: "4세대 K-팝의 대표주자이자 글로벌 스토리텔러. 독창적인 판타지 세계관과 감각적인 음악으로 전 세계를 사로잡았습니다.", en: "A representative 4th-gen K-pop group and global storytellers, capturing the world with their unique fantasy lore and sensory music." },
    summary: { ko: "Z세대를 대변하는 4세대 K-팝의 선두주자. 독창적인 판타지 세계관과 뛰어난 스토리텔링으로 글로벌 팬덤의 열광적인 지지를 받고 있습니다.", en: "Leaders of 4th-gen K-pop representing Gen Z. They receive enthusiastic global support for their unique fantasy lore and storytelling." },
    news: [
      { title: { ko: "TXT, 미니 6집으로 빌보드 200 3위 진입", en: "TXT Enters Billboard 200 at No.3 with 6th Mini Album" }, date: "2024.04.14", summary: { ko: "미니 6집 'minisode 3: TOMORROW'가 미국 빌보드 메인 앨범 차트에 최상위권으로 진입하며 흔들림 없는 글로벌 위상을 입증했습니다.", en: "Their 6th mini album entered the top of the Billboard main album chart, proving their solid global status." }, url: "#" }
    ],
    tmi: {
      ko: [
        "그룹명은 너무 길어서 국내외 팬들 모두 '투바투' 또는 'TXT'로 줄여 부릅니다.",
        "방탄소년단의 직속 후배 그룹으로 데뷔 당시부터 엄청난 스포트라이트를 받았습니다.",
        "멤버 5명 모두가 센터급 비주얼과 실력을 갖췄다는 평가를 받습니다."
      ],
      en: [
        "The group name is often shortened to 'TXT' globally due to its length.",
        "They debuted under massive spotlight as the direct junior group to BTS.",
        "All 5 members are praised for having 'center-level' visuals and skills."
      ]
    },
    members: [
      { id: "yeonjun", name: { ko: "연준", en: "YEONJUN", ja: "ヨンジュン" }, birth: "1999.09.13", height: "181cm", bloodType: "A", mbti: "ENFP", imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Yeonjun+Profile", socials: {}, tmi: { ko: ["빅히트 전설의 연습생으로 불리며 랩, 댄스, 보컬 모두 뛰어납니다."], en: ["Known as Big Hit's legendary trainee, excelling in rap, dance, and vocals."] } },
      { id: "soobin", name: { ko: "수빈", en: "SOOBIN", ja: "スビン" }, birth: "2000.12.05", height: "185cm", bloodType: "A", mbti: "ISFP", imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Soobin+Profile", socials: {}, tmi: { ko: ["팀의 리더이자 최장신으로, 청량하고 부드러운 매력을 가졌습니다."], en: ["The leader and tallest member, known for his refreshing and gentle charm."] } },
      { id: "beomgyu", name: { ko: "범규", en: "BEOMGYU", ja: "ボムギュ" }, birth: "2001.03.13", height: "180cm", bloodType: "AB", mbti: "ENFJ", imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Beomgyu+Profile", socials: {}, tmi: { ko: ["팀의 무드 메이커이며, 기타 연주와 작곡 실력을 보유하고 있습니다."], en: ["The mood maker of the team, skilled in playing guitar and composing."] } },
      { id: "taehyun", name: { ko: "태현", en: "TAEHYUN", ja: "テヒョン" }, birth: "2002.02.05", height: "177cm", bloodType: "A", mbti: "ESTP", imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Taehyun+Profile", socials: {}, tmi: { ko: ["시원한 고음을 자랑하는 핵심 보컬이자 팀의 브레인입니다."], en: ["A core vocal boasting refreshing high notes and the brain of the team."] } },
      { id: "hueningkai", name: { ko: "휴닝카이", en: "HUENINGKAI", ja: "ヒュニンカイ" }, birth: "2002.08.14", height: "183cm", bloodType: "A", mbti: "ISTP", imageUrl: "https://tse1.mm.bing.net/th?q=TXT+Hueningkai+Profile", socials: {}, tmi: { ko: ["미국 국적의 막내로 여러 악기를 다루는 다재다능한 음악 천재입니다."], en: ["The American maknae and a versatile musical genius who plays multiple instruments."] } }
    ]
  },
  {
    id: "jennie",
    name: { ko: "제니", en: "JENNIE", ja: "ジェニー (JENNIE)", zh: "JENNIE", es: "JENNIE", id: "JENNIE", fr: "JENNIE", hi: "जेनी (JENNIE)", pt: "JENNIE", ar: "جيني (JENNIE)", th: "เจนนี่ (JENNIE)", vi: "JENNIE", ru: "Дженни (JENNIE)" },
    officialSite: "https://www.oddatelier.net/",
    company: "OA (ODD ATELIER) / Columbia Records",
    accentColor: "#000000",
    imageUrl: "https://tse1.mm.bing.net/th?q=JENNIE+Mantra+Concept+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/jennierubyjane/", twitter: "https://twitter.com/oddatelier", youtube: "https://www.youtube.com/@jennierubyjane", tiktok: "https://www.tiktok.com/@jennierubyjane" },
    fandom: { ko: "루비즈 (Rubies)", en: "Rubies", ja: "ルビーズ (Rubies)", zh: "Rubies", es: "Rubies", id: "Rubies", fr: "Rubies", hi: "Rubies", pt: "Rubies", ar: "روبيز (Rubies)", th: "รูบี้ส์ (Rubies)", vi: "Rubies", ru: "Rubies" },
    debut: "2016.08.08",
    wiki: { ko: "제니(JENNIE)는 블랙핑크(BLACKPINK)의 멤버이자 글로벌 패션·음악 아이콘입니다. 'SOLO'부터 최근 'Mantra'까지 내는 곡마다 글로벌 히트를 기록 중입니다.", en: "JENNIE is a member of BLACKPINK and a global fashion/music icon, known for solo hits ranging from 'SOLO' to 'Mantra'." },
    description: { ko: "독보적인 아우라를 가진 글로벌 'It Girl'. 샤넬의 앰버서더이자 패션과 음악 트렌드를 주도하는 최정상 솔로 아티스트입니다.", en: "A global 'It Girl' with an unrivaled aura. A Chanel ambassador and top-tier soloist leading fashion and music trends." },
    summary: { ko: "K-팝을 넘어선 전 세계적인 'It Girl'. 샤넬의 글로벌 앰버서더이자 본인만의 독보적인 트렌드를 만들어내는 솔로 아티스트입니다.", en: "A global 'It Girl' beyond K-pop. A global ambassador for Chanel and a solo artist who sets her own unrivaled trends." },
    news: [
      { title: { ko: "제니, 신곡 'Mantra'로 美 빌보드 Hot 100 진입 성공", en: "JENNIE Enters Billboard Hot 100 with New Song 'Mantra'" }, date: "2024.10.22", summary: { ko: "새 싱글 'Mantra'가 발매 첫 주 만에 빌보드 메인 차트에 진입하며 솔로 아티스트로서의 막강한 글로벌 저력을 뽐냈습니다.", en: "Her new single 'Mantra' entered the Billboard main chart in its first week, showing her immense global power as a soloist." }, url: "#" }
    ],
    tmi: {
      ko: [
        "'인간 샤넬'이라는 수식어가 있을 정도로 패션계에 미치는 영향력이 어마어마합니다.",
        "자신만의 레이블 '오드 아틀리에(OA)'를 설립하여 독자적인 활동을 펼치고 있습니다.",
        "차갑고 도도해 보이는 외모와 달리 일상에서는 매우 귀엽고 애교 많은 성격입니다."
      ],
      en: [
        "Her influence in the fashion industry is so massive that she is nicknamed 'Human Chanel'.",
        "She established her own label 'ODD ATELIER (OA)' to pursue her independent activities.",
        "Despite her chic appearance, she is known to have a very cute and affectionate personality off-stage."
      ]
    },
    members: [
      {
        id: "jennie_member",
        name: { ko: "제니", en: "JENNIE", ja: "ジェニー", zh: "JENNIE" },
        birth: "1996.01.16",
        height: "163cm",
        bloodType: "B",
        mbti: "INFP",
        imageUrl: "https://tse1.mm.bing.net/th?q=JENNIE+Official+Profile+Photo+High+Res",
        tmi: { ko: ["필라테스를 꾸준히 하며 자기 관리가 철저한 것으로 유명합니다."], en: ["Famous for her strict self-management, consistently doing pilates."] },
        socials: {}
      }
    ]
  },
  {
    id: "illit",
    name: { ko: "아일릿", en: "ILLIT", ja: "アイリット (ILLIT)", zh: "ILLIT", es: "ILLIT", id: "ILLIT", fr: "ILLIT", hi: "ILLIT", pt: "ILLIT", ar: "آيليت (ILLIT)", th: "ไอลิท (ILLIT)", vi: "ILLIT", ru: "ILLIT" },
    officialSite: "https://beliftlab.com/artist/profile/ILLIT",
    company: "BELIFT LAB (HYBE)",
    accentColor: "#ff99cc",
    imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Magnetic+Group+Photo+High+Res",
    socials: { instagram: "https://www.instagram.com/illit_official/", twitter: "https://twitter.com/ILLIT_official", youtube: "https://www.youtube.com/@ILLIT_official", tiktok: "https://www.tiktok.com/@illit_official" },
    fandom: { ko: "글릿 (GLLIT)", en: "GLLIT", ja: "グリット (GLLIT)", zh: "GLLIT", es: "GLLIT", id: "GLLIT", fr: "GLLIT", hi: "GLLIT", pt: "GLLIT", ar: "غليت (GLLIT)", th: "กลิท (GLLIT)", vi: "GLLIT", ru: "GLLIT" },
    debut: "2024.03.25",
    wiki: { ko: "아일릿(ILLIT)은 빌리프랩 소속의 5인조 다국적 걸그룹입니다. 데뷔곡 'Magnetic'으로 K-팝 데뷔곡 역사상 가장 빠른 속도로 빌보드 Hot 100에 진입하는 신기록을 세웠습니다.", en: "ILLIT is a 5-member multinational girl group under Belift Lab. Their debut song 'Magnetic' set a record as the fastest K-pop debut track to enter the Billboard Hot 100." },
    description: { ko: "전 세계를 강타한 'Magnetic' 신드롬의 주인공. 엉뚱 발랄한 10대의 리얼함을 무기로 5세대를 이끌어갈 슈퍼 루키입니다.", en: "The protagonists of the global 'Magnetic' syndrome. Super rookies leading the 5th generation with their quirky and realistic teenage charm." },
    summary: { ko: "전 세계를 강타한 'Magnetic' 신드롬의 주인공. 엉뚱 발랄한 10대의 리얼함을 무기로 5세대를 이끌어갈 슈퍼 루키입니다.", en: "The protagonists of the global 'Magnetic' syndrome. Super rookies leading the 5th generation with their quirky and realistic teenage charm." },
    news: [
      { title: { ko: "아일릿 'Magnetic', K-팝 데뷔곡 최초 美 빌보드 Hot 100 진입", en: "ILLIT's 'Magnetic' Becomes First K-pop Debut Song to Enter Billboard Hot 100" }, date: "2024.04.16", summary: { ko: "데뷔곡 'Magnetic'이 발매 한 달도 안 되어 미국 빌보드 메인 차트에 오르는 기적적인 성과를 달성했습니다.", en: "Their debut song 'Magnetic' achieved a miraculous feat by entering the US Billboard main chart in less than a month." }, url: "#" }
    ],
    tmi: {
      ko: [
        "서바이벌 프로그램 'R U Next?'를 통해 결성된 그룹입니다.",
        "그룹명 'ILLIT'은 진취적인 의지(I will)와 특별한 무언가(It)를 결합한 뜻입니다.",
        "중독성 있는 후렴구와 손가락을 이용한 '마그네틱 댄스'가 전 세계 숏폼 플랫폼을 점령했습니다."
      ],
      en: [
        "The group was formed through the survival show 'R U Next?'.",
        "The name 'ILLIT' combines 'I will' and 'It', meaning they have the potential to become anything.",
        "Their addictive chorus and 'Magnetic dance' dominated global short-form platforms."
      ]
    },
    members: [
      { id: "yunah", name: { ko: "윤아", en: "YUNAH", ja: "ユナ" }, birth: "2004.01.15", height: "170cm", bloodType: "A", mbti: "ENFP", imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Yunah+Profile", socials: {}, tmi: { ko: ["팀의 맏언니로 서늘한 냉미녀 비주얼과 달리 털털한 반전 매력을 가졌습니다."], en: ["The oldest member, contrasting her cool visuals with an easygoing personality."] } },
      { id: "minju", name: { ko: "민주", en: "MINJU", ja: "ミンジュ" }, birth: "2004.05.11", height: "166cm", bloodType: "O", mbti: "ISTP", imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Minju+Profile", socials: {}, tmi: { ko: ["투명하고 매력적인 음색을 가진 팀의 핵심 보컬입니다."], en: ["The core vocal of the team with a clear and attractive tone."] } },
      { id: "moka", name: { ko: "모카", en: "MOKA", ja: "モカ" }, birth: "2004.10.08", height: "163cm", bloodType: "B", mbti: "ISFP", imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Moka+Profile", socials: {}, tmi: { ko: ["일본 출신으로 무대 위 완벽한 표정 연기로 '직캠 장인'이라 불립니다."], en: ["From Japan, called a 'fancam master' for her perfect facial expressions on stage."] } },
      { id: "wonhee", name: { ko: "원희", en: "WONHEE", ja: "ウォンヒ" }, birth: "2007.06.26", height: "163cm", bloodType: "A", mbti: "ISFP", imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Wonhee+Profile", socials: {}, tmi: { ko: ["사랑스러운 비주얼과 특유의 통통 튀는 매력으로 입덕을 담당합니다."], en: ["In charge of attracting fans with her lovely visuals and bouncy charm."] } },
      { id: "iroha", name: { ko: "이로하", en: "IROHA", ja: "イロハ" }, birth: "2008.02.04", height: "162cm", bloodType: "A", mbti: "ISFP", imageUrl: "https://tse1.mm.bing.net/th?q=ILLIT+Iroha+Profile", socials: {}, tmi: { ko: ["일본 출신 막내지만 파워풀하고 그루비한 춤 실력을 가진 메인 댄서입니다."], en: ["The Japanese maknae and main dancer with powerful and groovy dance skills."] } }
    ]
  }
];
