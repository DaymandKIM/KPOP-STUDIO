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
        role: { ko: "리더/보컬", en: "Leader/Vocalist", ja: "リーダー/ボーカル", zh: "队长/声乐", es: "Líder/Vocalista", id: "Pemimpin/Vokalis", fr: "Leader/Vocaliste", hi: "लीडर/वोकलिस्ट", pt: "Líder/Vocalista", ar: "القائدة/مغنية", th: "ลีดเดอร์/นักร้อง", vi: "Trưởng nhóm/Ca sĩ", ru: "Лидер/Вокалист" },
        birth: "2003.09.01", mbti: "ISTP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "A",
        description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader.", ja: "バラエティの天才とカリスマリーダーを行き来する万能メンバー。", zh: "在综艺天才和魅力队长之间自如切换的全能成员。", es: "Miembro completo que alterna entre genio del variety show y líder carismático.", id: "Anggota serbabisa yang berganti peran antara bintang variety dan pemimpin karismatik.", fr: "Membre polyvalent oscillant entre génie de la variété et leader charismatique.", hi: "वैरायटी जीनियस और करिश्माई लीडर के बीच स्विच करने वाले ऑल-राउंडर सदस्य।", pt: "Membro completo que alterna entre gênio do variety e líder carismático.", ar: "عضو متكاملة تتنقل بين عبقرية البرامج والقيادة الكاريزمية.", th: "สมาชิกรอบด้านที่สลับระหว่างอัจฉริยะวาไรตี้และลีดเดอร์ผู้มีเสน่ห์", vi: "Thành viên toàn diện chuyển đổi giữa tài năng variety và lãnh đạo đầy sức hút.", ru: "Разносторонняя участница, сочетающая таланты ведущей шоу и харизматичного лидера." },
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
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist", ja: "ラッパー/ボーカル", zh: "说唱/声乐", es: "Rapera/Vocalista", id: "Rapper/Vokalis", fr: "Rappeuse/Vocaliste", hi: "रैपर/वोकलिस्ट", pt: "Rapper/Vocalista", ar: "مغنية راب/مغنية", th: "แรปเปอร์/นักร้อง", vi: "Rapper/Ca sĩ", ru: "Рэпер/Вокалист" },
        birth: "2002.09.24", mbti: "ISTJ",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "164cm", bloodType: "B",
        description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone.", ja: "チームの最年長メンバーで、魅力的なラップトーンの持ち主。", zh: "团队最年长的姐姐，拥有迷人的说唱音色。", es: "La mayor del equipo con un tono de rap muy atractivo.", id: "Anggota tertua tim yang memiliki nada rap yang memikat.", fr: "La doyenne de l'équipe avec un ton de rap captivant.", hi: "टीम की सबसे बड़ी सदस्य और आकर्षक रैप टोन वाली मेंबर।", pt: "A mais velha da equipe com um tom de rap atraente.", ar: "الأكبر سناً في الفريق بنبرة راب جذابة.", th: "สมาชิกอาวุโสสุดของทีมที่มีน้ำเสียงแรปน่าหลงใหล", vi: "Thành viên lớn tuổi nhất của nhóm với giọng rap hấp dẫn.", ru: "Старшая участница группы с привлекательным рэп-голосом." },
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
        role: { ko: "래퍼/보컬", en: "Rapper/Vocalist", ja: "ラッパー/ボーカル", zh: "说唱/声乐", es: "Rapera/Vocalista", id: "Rapper/Vokalis", fr: "Rappeuse/Vocaliste", hi: "रैपर/वोकलिस्ट", pt: "Rapper/Vocalista", ar: "مغنية راب/مغنية", th: "แรปเปอร์/นักร้อง", vi: "Rapper/Ca sĩ", ru: "Рэпер/Вокалист" },
        birth: "2004.02.03", mbti: "INFJ",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "169cm", bloodType: "A",
        description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills.", ja: "ユニークな感性とラップスキルを持つ日本人メンバー。", zh: "拥有独特感性和说唱实力的日本成员。", es: "Miembro japonesa con sensibilidad única y habilidades de rap.", id: "Anggota Jepang dengan sensibilitas unik dan kemampuan rap.", fr: "Membre japonaise avec une sensibilité unique et des talents de rap.", hi: "अनोखी संवेदनशीलता और रैप कौशल वाली जापानी सदस्य।", pt: "Membro japonesa com sensibilidade única e habilidades de rap.", ar: "عضو يابانية بحساسية فريدة ومهارات راب.", th: "สมาชิกชาวญี่ปุ่นที่มีความรู้สึกเฉพาะตัวและทักษะแรป", vi: "Thành viên người Nhật với cảm nhận độc đáo và kỹ năng rap.", ru: "Японская участница с уникальным чутьём и навыками рэпа." },
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
        role: { ko: "센터/보컬", en: "Center/Vocalist", ja: "センター/ボーカル", zh: "中心/声乐", es: "Centro/Vocalista", id: "Center/Vokalis", fr: "Centre/Vocaliste", hi: "सेंटर/वोकलिस्ट", pt: "Centro/Vocalista", ar: "المركز/مغنية", th: "เซ็นเตอร์/นักร้อง", vi: "Trung tâm/Ca sĩ", ru: "Центр/Вокалист" },
        birth: "2004.08.31", mbti: "ENFP",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        height: "173cm", bloodType: "O",
        description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP.", ja: "4世代K-POPを象徴するウォンビーアイコンでありビジュアルセンター。", zh: "代表4代K-POP的梦想图标和视觉中心。", es: "Icono wannabe y centro visual que representa el K-POP de 4ª generación.", id: "Ikon wannabe dan pusat visual yang mewakili K-POP generasi ke-4.", fr: "L'icône wannabe et le centre visuel représentant le K-POP de 4ème génération.", hi: "4वीं पीढ़ी के K-POP का प्रतिनिधित्व करने वाला wannabe आइकन और विजुअल सेंटर।", pt: "O ícone wannabe e centro visual representando o K-POP da 4ª geração.", ar: "أيقونة أحلام ومركز بصري يمثل K-POP من الجيل الرابع.", th: "ไอคอน wannabe และเซ็นเตอร์วิชวลที่เป็นตัวแทนของ K-POP เจน 4", vi: "Biểu tượng wannabe và trung tâm visual đại diện cho K-POP thế hệ 4.", ru: "Желанная икона и визуальный центр, представляющий K-POP 4-го поколения." },
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
        role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Vocaliste Principale", hi: "मेन वोकलिस्ट", pt: "Vocalista Principal", ar: "المغنية الرئيسية", th: "นักร้องหลัก", vi: "Giọng ca chính", ru: "Главный вокалист" },
        birth: "2004.11.21", mbti: "ISFP",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "170cm", bloodType: "AB",
        description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals.", ja: "明るいえくぼと伸びやかな歌唱力を持つメインボーカル級メンバー。", zh: "拥有清澈酒窝和强力歌唱实力的主唱级成员。", es: "Miembro de nivel vocalista principal con hoyuelos claros y poderosa voz.", id: "Anggota level main vocal dengan lesung pipit yang cerah dan suara yang kuat.", fr: "Membre de niveau vocaliste principal avec des fossettes claires et une voix puissante.", hi: "स्पष्ट डिम्पल और शक्तिशाली गायन वाली मेन वोकल-स्तर की सदस्य।", pt: "Membro de nível vocalista principal com covinhas claras e voz poderosa.", ar: "عضو بمستوى المغنية الرئيسية بغمازات واضحة وصوت قوي.", th: "สมาชิกระดับนักร้องหลักที่มีลักยิ้มสดใสและเสียงร้องอันทรงพลัง", vi: "Thành viên cấp độ main vocal với lúm đồng tiền rõ ràng và giọng hát mạnh mẽ.", ru: "Участница уровня главного вокалиста с ямочками и мощным голосом." },
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
        role: { ko: "보컬/막내", en: "Vocalist/Maknae", ja: "ボーカル/末っ子", zh: "声乐/最小成员", es: "Vocalista/Maknae", id: "Vokalis/Maknae", fr: "Vocaliste/Maknae", hi: "वोकलिस्ट/मैकने", pt: "Vocalista/Maknae", ar: "مغنية/المدللة الصغيرة", th: "นักร้อง/มักแน", vi: "Ca sĩ/Maknae", ru: "Вокалист/Макне" },
        birth: "2007.02.21", mbti: "ENFP",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        height: "166cm", bloodType: "O",
        description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age.", ja: "年齢に見合わないステージ掌握力を発揮するチームの末っ子。", zh: "展现出超乎年龄的舞台掌控力的团队最小成员。", es: "La más joven del equipo con un dominio del escenario impropio de su edad.", id: "Anggota termuda yang menunjukkan penguasaan panggung melebihi usianya.", fr: "La benjamine de l'équipe montrant une maîtrise scénique au-delà de son âge.", hi: "अपनी उम्र से परे स्टेज प्रेजेंस दिखाने वाली टीम की सबसे छोटी सदस्य।", pt: "A mais jovem da equipe com domínio de palco além de sua idade.", ar: "أصغر أعضاء الفريق التي تُظهر سيطرة على المسرح تفوق عمرها.", th: "สมาชิกอายุน้อยที่สุดที่แสดงการครองเวทีเกินวัย", vi: "Thành viên nhỏ tuổi nhất của nhóm thể hiện sự làm chủ sân khấu vượt tuổi.", ru: "Младшая участница группы, демонстрирующая владение сценой, несвойственное её возрасту." },
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
        role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper", ja: "リーダー/メインダンサー/ラッパー", zh: "队长/主要舞者/说唱", es: "Líder/Bailarina Principal/Rapera", id: "Pemimpin/Penari Utama/Rapper", fr: "Leader/Danseuse Principale/Rappeuse", hi: "लीडर/मेन डांसर/रैपर", pt: "Líder/Dançarina Principal/Rapper", ar: "القائدة/الراقصة الرئيسية/مغنية الراب", th: "ลีดเดอร์/นักเต้นหลัก/แรปเปอร์", vi: "Trưởng nhóm/Vũ công chính/Rapper", ru: "Лидер/Главный танцор/Рэпер" },
        birth: "2000.04.11", mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries" },
        height: "168cm", bloodType: "B",
        description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself, a charismatic leader anchoring the team.", ja: "AIよりもAIらしいビジュアルで有名な、チームを引き締めるカリスマリーダー。", zh: "以比AI更像AI的外貌著称，是稳定团队的魅力队长。", es: "Famosa por sus visuales que parecen más IA que la IA misma, una líder carismática que ancla al equipo.", id: "Terkenal dengan visualnya yang tampak lebih AI dari AI itu sendiri, pemimpin karismatik yang menjadi tulang punggung tim.", fr: "Célèbre pour ses visuels plus 'IA' que l'IA elle-même, une leader charismatique qui ancre l'équipe.", hi: "AI से भी ज़्यादा AI जैसे विज़ुअल के लिए प्रसिद्ध, टीम को एकजुट रखने वाली करिश्माई लीडर।", pt: "Famosa por seus visuais que parecem mais IA do que a própria IA, uma líder carismática que ancora a equipe.", ar: "مشهورة بمظهرها الذي يبدو أكثر من الذكاء الاصطناعي، قائدة كاريزمية تُثبّت الفريق.", th: "โด่งดังด้วยวิชวลที่ดูเหมือน AI มากกว่า AI เอง เป็นลีดเดอร์ผู้มีเสน่ห์ที่เป็นหลักของทีม", vi: "Nổi tiếng với visual trông giống AI hơn cả AI, lãnh đạo đầy sức hút là trụ cột của nhóm.", ru: "Знаменита визуалом, похожим на ИИ больше самого ИИ, харизматичный лидер, скрепляющий команду." },
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
        role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarina Líder", id: "Vokalis Utama/Penari Utama", fr: "Vocaliste Principale/Danseuse Leader", hi: "मेन वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarina Líder", ar: "المغنية الرئيسية/الراقصة القائدة", th: "นักร้องหลัก/นักเต้นลีด", vi: "Giọng ca chính/Vũ công dẫn đầu", ru: "Главный вокалист/Ведущий танцор" },
        birth: "2001.01.01", mbti: "INTJ",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        height: "163cm", bloodType: "A",
        description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버입니다.", en: "A member with a clear, pure voice and powerful performance skills.", ja: "澄んで清らかな音色と力強いパフォーマンスを兼ね備えたメンバー。", zh: "兼具清澈纯净音色和有力表演的成员。", es: "Una miembro con una voz clara y pura combinada con poderosas habilidades de actuación.", id: "Anggota dengan suara yang jernih dan murni serta kemampuan performa yang kuat.", fr: "Un membre avec une voix claire et pure combinée à des compétences de performance puissantes.", hi: "स्वच्छ और मधुर आवाज़ और शक्तिशाली परफॉर्मेंस कौशल वाली सदस्य।", pt: "Uma membro com uma voz clara e pura combinada com poderosas habilidades de performance.", ar: "عضو بصوت نقي وصافٍ مع مهارات أداء قوية.", th: "สมาชิกที่มีน้ำเสียงใสบริสุทธิ์ผสานกับทักษะการแสดงอันทรงพลัง", vi: "Thành viên với giọng hát trong trẻo thuần khiết kết hợp kỹ năng biểu diễn mạnh mẽ.", ru: "Участница с чистым, прозрачным голосом и мощными навыками выступления." },
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
        role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist", ja: "メインラッパー/サブボーカル", zh: "主要说唱/副唱", es: "Rapera Principal/Sub Vocalista", id: "Rapper Utama/Sub Vokalis", fr: "Rappeuse Principale/Sous-Vocaliste", hi: "मेन रैपर/सब वोकलिस्ट", pt: "Rapper Principal/Sub Vocalista", ar: "مغنية الراب الرئيسية/مغنية مساعدة", th: "แรปเปอร์หลัก/นักร้องรอง", vi: "Rapper chính/Ca sĩ phụ", ru: "Главный рэпер/Второй вокалист" },
        birth: "2000.10.30", mbti: "INFJ",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        height: "164cm", bloodType: "O",
        description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 멤버입니다.", en: "A multilingual intellectual fluent in three languages with solid rap skills.", ja: "3ヶ国語に堪能な知性派で、確かなラップスキルを持つメンバー。", zh: "精通三国语言的才女，拥有扎实的说唱实力。", es: "Una intelectual multilingüe fluida en tres idiomas con sólidas habilidades de rap.", id: "Intelektual multibahasa yang fasih dalam tiga bahasa dengan kemampuan rap yang kuat.", fr: "Une intellectuelle multilingue parlant couramment trois langues avec de solides compétences en rap.", hi: "तीन भाषाओं में पारंगत बहुभाषी बुद्धिजीवी और ठोस रैप कौशल वाली सदस्य।", pt: "Uma intelectual multilíngue fluente em três idiomas com sólidas habilidades de rap.", ar: "مثقفة متعددة اللغات طليقة في ثلاث لغات بمهارات راب قوية.", th: "นักปัญญาชนหลายภาษาที่คล่องสามภาษาด้วยทักษะแรปที่แข็งแกร่ง", vi: "Trí thức đa ngôn ngữ thành thạo ba ngôn ngữ với kỹ năng rap vững chắc.", ru: "Полиглот, свободно владеющая тремя языками, с отличными навыками рэпа." },
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
        role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Vocaliste Principale", hi: "मेन वोकलिस्ट", pt: "Vocalista Principal", ar: "المغنية الرئيسية", th: "นักร้องหลัก", vi: "Giọng ca chính", ru: "Главный вокалист" },
        birth: "2002.10.23", mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra" },
        height: "161cm", bloodType: "O",
        description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내입니다.", en: "The youngest member boasting explosive high notes and soulful vocals.", ja: "爆発的な高音とソウルフルな歌唱力を誇るチームの末っ子。", zh: "拥有爆发性高音和充满灵魂的歌唱实力的团队最小成员。", es: "La más joven del equipo con explosivos agudos y una voz llena de soul.", id: "Anggota termuda dengan nada tinggi yang eksplosif dan vokal yang penuh jiwa.", fr: "La plus jeune du groupe avec des aigus explosifs et une voix pleine d'âme.", hi: "विस्फोटक हाई नोट्स और सोलफुल वोकल्स वाली टीम की सबसे छोटी सदस्य।", pt: "A mais jovem do grupo com agudos explosivos e vocais cheios de alma.", ar: "أصغر أعضاء الفريق بنوتات عالية متفجرة وصوت ممتلئ بالروح.", th: "สมาชิกอายุน้อยที่สุดที่มีโน้ตสูงระเบิดพลังและเสียงร้องเต็มอารมณ์", vi: "Thành viên nhỏ tuổi nhất với những nốt cao bùng nổ và giọng hát đầy cảm xúc.", ru: "Младшая участница группы со взрывными верхними нотами и душевным вокалом." },
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
    name: { ko: "방탄소년단", en: "BTS", ja: "防弾少年団 (BTS)", zh: "防弹少年团 (BTS)", es: "BTS", id: "BTS", fr: "BTS", hi: "बीटीएस (BTS)", pt: "BTS", ar: "بي تي إس (BTS)", th: "บีทีเอส (BTS)", vi: "BTS", ru: "BTS" },
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
      en: "Stray Kids is an 8-member boy group under JYP Entertainment, formed through Mnet's 2017 survival show 'Stray Kids' and officially debuted in March 2018. Centered around self-producing unit 3RACHA (Bang Chan, Changbin, Han), they built a distinctive sound blending hip-hop, EDM, and rock. Global achievements include headlining Coachella 2025, 6 Billboard 200 #1 albums, and ranking #2 on Spotify K-Pop Wrapped 2025."
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
      ]
    },
    news: [
      { title: { ko: "스트레이 키즈, 2025 코첼라 단독 헤드라이너 — K-Pop 보이그룹 최초", en: "Stray Kids Headline Coachella 2025 — First K-Pop Boy Group Ever" }, date: "2025.04.12", summary: { ko: "스트레이 키즈가 K-Pop 보이그룹 최초로 코첼라 단독 헤드라이너로 무대에 올라 전 세계 음악 팬들의 이목을 집중시켰습니다.", en: "Stray Kids took the Coachella main stage as headliners — a historic first for any K-pop boy group." }, url: "#" },
      { title: { ko: "Spotify 2025 K-Pop Wrapped 2위 — BTS에 이어 역대급 성적", en: "Spotify 2025 K-Pop Wrapped: Stray Kids Ranked #2 Behind BTS" }, date: "2025.12.04", summary: { ko: "Spotify가 발표한 2025 K-Pop Wrapped에서 스트레이 키즈가 BTS에 이어 2위를 기록하며 글로벌 영향력을 입증했습니다.", en: "Spotify's 2025 K-Pop Wrapped placed Stray Kids at #2 behind BTS, confirming their global dominance." }, url: "#" },
      { title: { ko: "정규 5집 'ATE' 빌보드 200 1위 — 통산 6번째 정상", en: "5th Album 'ATE' Tops Billboard 200 — Their 6th #1" }, date: "2024.07.19", summary: { ko: "정규 5집 'ATE'가 빌보드 200에서 1위를 기록해 스트레이 키즈가 통산 6번째 빌보드 200 정상에 올랐습니다.", en: "'ATE' debuted at #1 on the Billboard 200, making it Stray Kids' 6th chart-topping album." }, url: "#" },
      { title: { ko: "월드투어 'dominATE' 50개 도시 전석 매진", en: "World Tour 'dominATE' Sells Out 50 Cities Worldwide" }, date: "2025.02.01", summary: { ko: "북미·유럽·아시아 50개 도시에서 진행된 월드투어 'dominATE'가 전 회차 매진을 기록했습니다.", en: "The 'dominATE' world tour sold out across 50 cities in North America, Europe, and Asia." }, url: "#" },
      { title: { ko: "방찬, 2025 그래미 시상식 참석해 글로벌 주목", en: "Bang Chan Attends 2025 Grammy Awards, Draws Global Attention" }, date: "2025.02.02", summary: { ko: "방찬이 2025 그래미 시상식에 참석해 K-Pop의 미국 주류 음악 시장 진출을 상징적으로 보여줬습니다.", en: "Bang Chan's attendance at the 2025 Grammy Awards symbolized K-pop's growing presence in the US mainstream music market." }, url: "#" },
      { title: { ko: "'Miroh' 발매 6주년 역주행 차트 진입", en: "'Miroh' Re-Enters Charts on Its 6th Anniversary" }, date: "2025.03.25", summary: { ko: "2019년 발매된 'Miroh'가 데뷔 6주년을 맞아 역주행 차트 진입에 성공해 팬들의 열띤 응원이 화제가 됐습니다.", en: "'Miroh', released in 2019, re-entered the charts on its 6th anniversary thanks to a massive fan streaming project." }, url: "#" },
      { title: { ko: "Felix, Dior 글로벌 앰배서더 공식 발탁", en: "Felix Named Dior Global Brand Ambassador" }, date: "2024.09.10", summary: { ko: "스트레이 키즈 Felix가 세계적인 명품 브랜드 Dior의 글로벌 앰배서더로 공식 발탁돼 패션계에서도 K-Pop의 위상이 높아졌습니다.", en: "Stray Kids' Felix was officially named a global brand ambassador for Dior, elevating K-pop's presence in the fashion world." }, url: "#" },
      { title: { ko: "현진, 미술 전시회 'HJ Art' 성황리에 마무리", en: "Hyunjin's Art Exhibition 'HJ Art' Concludes Successfully" }, date: "2025.05.20", summary: { ko: "현진이 개최한 개인 미술 전시회 'HJ Art'가 전 세계 팬들의 큰 호응을 받으며 성황리에 마무리됐습니다.", en: "Hyunjin's solo art exhibition 'HJ Art' concluded to massive acclaim from fans worldwide." }, url: "#" },
      { title: { ko: "'2025 K-Pop 글로벌 대사' 수상", en: "Awarded '2025 K-Pop Global Ambassador'" }, date: "2025.10.09", summary: { ko: "한국 문화체육관광부가 선정한 '2025 K-Pop 글로벌 대사'에 스트레이 키즈가 선정됐습니다.", en: "Stray Kids was selected as '2025 K-Pop Global Ambassador' by Korea's Ministry of Culture, Sports and Tourism." }, url: "#" },
      { title: { ko: "팬덤 STAY, 글로벌 규모 1500만 돌파", en: "Fandom STAY Surpasses 15 Million Global Members" }, date: "2025.11.15", summary: { ko: "스트레이 키즈의 공식 팬덤 STAY가 글로벌 팬덤 규모 1500만 명을 돌파했습니다.", en: "Stray Kids' official fandom STAY surpassed 15 million members globally." }, url: "#" }
    ],
    members: [
      {
        id: "bangchan",
        name: { ko: "방찬", en: "Bang Chan" },
        role: { ko: "리더, 보컬, 래퍼, 프로듀서", en: "Leader, Vocal, Rapper, Producer" },
        birth: "2000.10.03",
        bloodType: "A",
        mbti: "INFJ",
        height: "171cm",
        zodiac: { ko: "천칭자리", en: "Libra" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Bang+Chan+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "호주 출신의 스트레이 키즈 리더이자 자체 제작 유닛 3RACHA의 핵심. 팀 음악 대부분을 직접 프로듀싱하며 매주 'Chan's Room' 라이브로 팬들과 소통한다.", en: "Leader of Stray Kids and core of self-producing unit 3RACHA. He produces most of the team's music and connects with fans weekly through 'Chan's Room' live streams." },
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
          ]
        },
        socials: {}
      },
      {
        id: "leeknow",
        name: { ko: "리노", en: "Lee Know" },
        role: { ko: "댄서, 보컬", en: "Dancer, Vocal" },
        birth: "1998.10.25",
        bloodType: "AB",
        mbti: "ISTP",
        height: "171cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Lee+Know+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "BTS 'DNA' 백댄서 출신의 스트레이 키즈 메인 댄서. 고양이 3마리를 키우는 집사로, 압도적인 댄스 실력으로 'JYP의 춤의 신'이라 불린다.", en: "Former BTS 'DNA' backup dancer turned Stray Kids main dancer. A devoted cat dad to 3 cats, he is called 'JYP's god of dance' for his overwhelming skill." },
        tmi: {
          ko: [
            "BTS 'DNA' 뮤직비디오 백댄서로 출연한 경력이 있어 데뷔 전부터 이미 유명했다.",
            "고양이 3마리를 키우는 집사로, 반려묘 '소름·비스킷·도도'는 팬들에게 셀럽급 인기를 누린다.",
            "원래 다른 그룹으로 데뷔할 예정이었으나 해체 후 재오디션을 거쳐 스트레이 키즈에 합류했다.",
            "춤 실력이 워낙 뛰어나 JYP 내부에서도 '춤의 신'이라는 별명으로 불렸다.",
            "이름 '리노(Lee Know)'는 본명 이민호에서 따왔으며, 영어로 'Lee · Know' 즉 '이 알아'라는 말장난 의미도 있다."
          ],
          en: [
            "Appeared as a backup dancer in BTS's 'DNA' music video — making him recognizable even before debut.",
            "Has three cats (Soeum, Biscuit, Dori) who are practically celebrities in the STAY fandom.",
            "Originally set to debut with a different group under JYP but joined Stray Kids after a re-audition.",
            "Known internally at JYP as 'god of dance' for his exceptional technical ability.",
            "His stage name 'Lee Know' is a play on his real surname Lee Min-ho — a pun on 'I know'."
          ]
        },
        socials: {}
      },
      {
        id: "changbin",
        name: { ko: "창빈", en: "Changbin" },
        role: { ko: "래퍼", en: "Rapper" },
        birth: "1999.08.11",
        bloodType: "O",
        mbti: "INFP",
        height: "169cm",
        zodiac: { ko: "사자자리", en: "Leo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Changbin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "3RACHA의 핵심 래퍼이자 작사가. 특유의 저음 래핑 스타일 '군함'으로 유명하며 일본어를 독학으로 마스터한 언어 재능도 가졌다.", en: "Core rapper and lyricist of 3RACHA, nicknamed 'Battleship' for his deep powerful rap style. Also self-taught Japanese, showcasing his linguistic talent." },
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
          ]
        },
        socials: {}
      },
      {
        id: "hyunjin",
        name: { ko: "현진", en: "Hyunjin" },
        role: { ko: "댄서, 보컬, 비주얼", en: "Dancer, Vocal, Visual" },
        birth: "2000.03.20",
        bloodType: "A",
        mbti: "INFP",
        height: "179cm",
        zodiac: { ko: "물고기자리", en: "Pisces" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Hyunjin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "화가이자 발레 출신 댄서. Versace·Valentino 글로벌 앰배서더로 활동하며 리노와 함께 스트레이 키즈 '춤 양대 산맥'으로 불린다.", en: "A painter and ballet-trained dancer. Global ambassador for Versace and Valentino, dubbed one of Stray Kids' two dance pillars alongside Lee Know." },
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
          ]
        },
        socials: {}
      },
      {
        id: "han",
        name: { ko: "한", en: "Han" },
        role: { ko: "래퍼, 보컬, 프로듀서", en: "Rapper, Vocal, Producer" },
        birth: "2000.09.14",
        bloodType: "A",
        mbti: "INFP",
        height: "168cm",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Han+Jisung+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "말레이시아 출신의 3RACHA 감성 래퍼·프로듀서. 스트레이 키즈 최다 작사 멤버로, 새벽 감성의 시적인 가사로 팬들의 깊은 공감을 얻는다.", en: "Malaysian-raised 3RACHA rapper and producer. The most prolific lyricist in Stray Kids, known for poetic, late-night-inspired lyrics that deeply resonate with fans." },
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
          ]
        },
        socials: {}
      },
      {
        id: "felix",
        name: { ko: "필릭스", en: "Felix" },
        role: { ko: "댄서, 래퍼, 보컬", en: "Dancer, Rapper, Vocal" },
        birth: "2000.09.15",
        bloodType: "O",
        mbti: "ENFJ",
        height: "174cm",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Felix+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "호주 출신의 Dior 글로벌 앰배서더. 주근깨 트레이드마크와 '목소리 깡패'로 불리는 저음 보이스, 한국어를 처음 배우며 흘린 눈물이 팬들의 마음을 사로잡았다.", en: "Australian-born Dior global ambassador. His trademark freckles, unexpectedly deep 'voice gangster' voice, and tears learning Korean from scratch have captured fans' hearts." },
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
          ]
        },
        socials: {}
      },
      {
        id: "seungmin",
        name: { ko: "승민", en: "Seungmin" },
        role: { ko: "보컬", en: "Vocal" },
        birth: "2000.09.22",
        bloodType: "A",
        mbti: "ISFP",
        height: "176cm",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+Seungmin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "야구를 사랑하는 스트레이 키즈 최강 보컬. 초승달처럼 휘는 눈 웃음으로 유명하며 BTS 정국과 절친한 사이로도 알려져 있다.", en: "Baseball-loving main vocalist of Stray Kids. Famous for his crescent-moon eye smile and close friendship with BTS's Jungkook." },
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
          ]
        },
        socials: {}
      },
      {
        id: "in",
        name: { ko: "아이엔", en: "I.N" },
        role: { ko: "보컬, 막내", en: "Vocal, Maknae" },
        birth: "2001.02.08",
        bloodType: "A",
        mbti: "ISFP",
        height: "173cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=Stray+Kids+IN+Yang+Jeongin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "서바이벌 탈락 후 최종 합류한 '반전 막내'. 만 16세 데뷔 후 변성기를 거쳐 깊고 매력적인 음색으로 변신했으며, '귀여운 노인'이라는 별명이 있다.", en: "The 'plot-twist maknae' who was eliminated then added back. Debuted at 16, and after his voice changed, surprised fans with a deep, charming tone — nicknamed 'cute old man'." },
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
          ]
        },
        socials: {}
      }
    ]
  },

  // ==================== TWICE ====================
  {
    id: "twice",
    name: { ko: "트와이스", en: "TWICE", ja: "トゥワイス", zh: "TWICE", es: "TWICE", id: "TWICE", fr: "TWICE", hi: "ट्वाइस", pt: "TWICE", ar: "توايس", th: "ทไวซ์", vi: "TWICE", ru: "TWICE" },
    description: {
      ko: "JYP엔터테인먼트 소속의 9인조 걸그룹. 한국·일본·대만 멤버로 구성된 다국적 그룹으로 Spotify 2,560만 월간 리스너를 보유하며 일본 시장을 석권한 '국민 걸그룹'.",
      en: "9-member girl group under JYP Entertainment. A multinational group of Korean, Japanese, and Taiwanese members with 25.6M Spotify monthly listeners — dubbed 'Nation's Girl Group' and dominant in Japan.",
      ja: "JYPエンターテインメント所属の9人組ガールズグループ。韓国・日本・台湾メンバーで構成された多国籍グループで、Spotify月間リスナー2560万人を誇る「国民ガールズグループ」。",
      zh: "JYP娱乐旗下9人女团。由韩国、日本、台湾成员组成的跨国团体，Spotify月活听众2560万，被誉为'国民女团'，在日本市场表现强劲。",
      es: "Grupo femenino de 9 miembros bajo JYP Entertainment. Grupo multinacional con oyentes mensuales de 25,6M en Spotify, conocido como el 'Grupo de chicas de la nación', dominante en Japón.",
      id: "Grup wanita 9 anggota di bawah JYP Entertainment. Grup multinasional dengan 25,6 juta pendengar bulanan Spotify, disebut 'Girl Group Nasional', mendominasi pasar Jepang.",
      fr: "Groupe féminin de 9 membres sous JYP Entertainment. Groupe multinational avec 25,6 millions d'auditeurs mensuels sur Spotify, surnommé 'Girl Group de la nation', dominant au Japon.",
      hi: "JYP एंटरटेनमेंट के तहत 9 सदस्यीय गर्ल ग्रुप। Spotify पर 25.6M मासिक श्रोताओं के साथ 'राष्ट्रीय गर्ल ग्रुप' का खिताब।",
      pt: "Grupo feminino de 9 membros sob a JYP Entertainment. Grupo multinacional com 25,6M ouvintes mensais no Spotify, chamado de 'Girl Group da Nação', dominante no Japão.",
      ar: "مجموعة فتيات من 9 أعضاء تحت JYP Entertainment. مجموعة متعددة الجنسيات مع 25.6 مليون مستمع شهري على Spotify، تُعرف بـ'فرقة البنات الوطنية'.",
      th: "กลุ่มสาว 9 คนภายใต้ JYP Entertainment กลุ่มข้ามชาติมีผู้ฟังรายเดือน 25.6M บน Spotify ได้รับฉายา 'National Girl Group' และครองตลาดญี่ปุ่น",
      vi: "Nhóm nhạc nữ 9 thành viên thuộc JYP Entertainment. Nhóm đa quốc tịch với 25,6M người nghe hàng tháng trên Spotify, mệnh danh 'Girl Group quốc dân'.",
      ru: "Женская группа из 9 участниц под JYP Entertainment. Многонациональная группа с 25,6M месячных слушателей на Spotify, называемая 'Национальной женской группой'."
    },
    fandom: { ko: "원스 (ONCE)", en: "ONCE", ja: "ワンス (ONCE)", zh: "ONCE", es: "ONCE", id: "ONCE", fr: "ONCE", hi: "ONCE", pt: "ONCE", ar: "وانس (ONCE)", th: "วันซ์ (ONCE)", vi: "ONCE", ru: "ONCE" },
    debut: "2015.10.20",
    accentColor: "#ff69b4",
    imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+group+kpop+2024+official&w=500&h=500&c=7&rs=1&p=0",
    wiki: {
      ko: "트와이스(TWICE)는 JYP엔터테인먼트 소속의 9인조 걸그룹입니다. 2015년 Mnet 서바이벌 프로그램 'SIXTEEN'을 통해 결성됐으며 같은 해 10월 정식 데뷔했습니다. 한국인 5명, 일본인 3명, 대만인 1명으로 구성된 다국적 그룹으로 Spotify 월간 리스너 2560만 명을 보유합니다. '국민 걸그룹'으로 불리며 일본에서 외국 여성 아티스트 최초로 5회 연속 돔 투어를 성공시켰습니다.",
      en: "TWICE is a 9-member girl group under JYP Entertainment, formed through Mnet's 2015 survival show 'SIXTEEN' and debuting the same October. Consisting of 5 Koreans, 3 Japanese, and 1 Taiwanese, they hold 25.6M monthly Spotify listeners. Known as 'Nation's Girl Group', they became the first foreign female artists to complete 5 consecutive dome tours in Japan."
    },
    company: "JYP Entertainment",
    tmi: {
      ko: [
        "JYP 서바이벌 프로그램 'SIXTEEN'을 통해 결성된 그룹으로, 처음에는 7명이 될 예정이었으나 9명으로 확정됐다.",
        "그룹명 TWICE는 '음악과 퍼포먼스로 눈과 귀, 두 번 감동을 주겠다'는 의미다.",
        "일본에서 외국 아티스트 중 가장 많은 음반 판매량을 기록한 그룹 중 하나다.",
        "'CHEER UP'은 멜론 차트에서 역대 최장 1위 기록을 세우며 '국민 걸그룹' 칭호를 얻었다.",
        "멤버 9명 중 한국인 5명, 일본인 3명, 대만인 1명으로 구성된 진정한 다국적 그룹이다.",
        "미나는 무대 공포증을 극복하며 컴백한 사실이 알려져 전 세계 팬들에게 큰 감동을 줬다.",
        "2023년 이후 성숙하고 세련된 콘셉트로 전환하며 '제2의 전성기'를 맞이하고 있다.",
        "일본에서 외국 여성 아티스트 최초로 3년 연속 돔 투어를 성공시킨 그룹이다.",
        "나연은 걸그룹 리드 보컬 중 최다 음원 판매량을 자랑하는 솔로 아티스트이기도 하다.",
        "9명의 멤버가 각기 다른 포지션을 담당해 무대에서 완벽한 밸런스를 보여준다."
      ],
      en: [
        "Formed through JYP's survival show 'SIXTEEN' — originally set to have 7 members but finalized with 9.",
        "The name TWICE means 'touching fans twice — once through eyes, once through ears'.",
        "One of the highest-selling foreign artists in Japan, consistently breaking records there.",
        "'CHEER UP' set a record for the longest #1 run on Melon chart, earning them the 'Nation's Girl Group' title.",
        "Among 9 members: 5 Korean, 3 Japanese, 1 Taiwanese — a true multinational lineup.",
        "Mina's return to the stage after overcoming stage fright moved fans worldwide and became an iconic K-pop moment.",
        "Since 2023, transitioning to a more mature, sophisticated concept — many call it their 'second peak'.",
        "First foreign female artist to complete three consecutive dome tours in Japan.",
        "Nayeon is also a successful solo artist with the highest individual music sales among girl group lead vocalists.",
        "All 9 members cover distinct performance roles, creating a perfectly balanced stage presence."
      ]
    },
    news: [
      { title: { ko: "트와이스, 월드투어 'READY TO BE' 북미·아시아 전석 매진", en: "TWICE World Tour 'READY TO BE' Sells Out North America and Asia" }, date: "2025.03.10", summary: { ko: "트와이스의 2025 월드투어 'READY TO BE'가 북미와 아시아 전 공연장에서 전석 매진을 기록했습니다.", en: "TWICE's 2025 world tour 'READY TO BE' sold out every venue across North America and Asia." }, url: "#" },
      { title: { ko: "Spotify 2025 K-Pop Wrapped 6위 — 2560만 월간 리스너", en: "Spotify 2025 K-Pop Wrapped: TWICE Ranked #6 with 25.6M Monthly Listeners" }, date: "2025.12.04", summary: { ko: "트와이스가 Spotify 2025 K-Pop Wrapped에서 6위를 기록하며 2560만 월간 리스너를 보유한 것으로 확인됐습니다.", en: "TWICE ranked #6 on Spotify 2025 K-Pop Wrapped, confirmed to have 25.6M monthly listeners." }, url: "#" },
      { title: { ko: "일본 5회 연속 돔 투어 완료 — 외국 아티스트 신기록", en: "TWICE Complete 5 Consecutive Japan Dome Tours — New Record for Foreign Artists" }, date: "2025.01.20", summary: { ko: "트와이스가 일본 돔 투어를 5회 연속 성공하며 외국 여성 아티스트 최초 기록을 세웠습니다.", en: "TWICE completed their 5th consecutive dome tour in Japan, setting a new record for foreign female artists." }, url: "#" },
      { title: { ko: "정규 15집 'WITH YOU-th' 빌보드 200 3위 진입", en: "15th Album 'WITH YOU-th' Enters Billboard 200 at #3" }, date: "2024.04.12", summary: { ko: "트와이스의 정규 15집 'WITH YOU-th'가 빌보드 200 차트 3위에 진입했습니다.", en: "TWICE's 15th album 'WITH YOU-th' entered the Billboard 200 at #3." }, url: "#" },
      { title: { ko: "나연, 솔로 2집으로 멜론·지니 실시간 차트 석권", en: "Nayeon Dominates Melon and Genie Charts with 2nd Solo Album" }, date: "2024.11.01", summary: { ko: "나연이 솔로 2집을 발매하며 멜론·지니 실시간 차트를 동시에 장악했습니다.", en: "Nayeon dominated Melon and Genie real-time charts simultaneously with the release of her 2nd solo album." }, url: "#" },
      { title: { ko: "모모·사나·미나, 일본 패션 매거진 커버 동시 장식", en: "Momo, Sana, and Mina Simultaneously Cover Japanese Fashion Magazines" }, date: "2025.06.01", summary: { ko: "트와이스의 일본인 멤버 모모·사나·미나가 같은 달 일본 주요 패션 매거진 표지를 동시에 장식했습니다.", en: "TWICE's Japanese members Momo, Sana, and Mina simultaneously graced the covers of major Japanese fashion magazines in the same month." }, url: "#" },
      { title: { ko: "지효, 2025 MAMA '올해의 여자가수' 수상", en: "Jihyo Wins 'Female Artist of the Year' at 2025 MAMA Awards" }, date: "2025.11.22", summary: { ko: "지효가 2025 MAMA 어워즈에서 '올해의 여자가수'상을 수상하며 트와이스 리더로서의 위상을 높였습니다.", en: "Jihyo won 'Female Artist of the Year' at the 2025 MAMA Awards, reaffirming her status as TWICE's leader." }, url: "#" },
      { title: { ko: "쯔위, 대만 음악 시상식 특별 공로상 수상", en: "Tzuyu Receives Special Contribution Award at Taiwan's Top Music Ceremony" }, date: "2025.08.15", summary: { ko: "쯔위가 대만 최고 권위 음악 시상식에서 특별 공로상을 수상하며 고향에서도 큰 인정을 받았습니다.", en: "Tzuyu received a special contribution award at Taiwan's most prestigious music ceremony, earning recognition in her home country." }, url: "#" },
      { title: { ko: "팬덤 ONCE, 글로벌 규모 2000만 돌파", en: "Fandom ONCE Surpasses 20 Million Global Members" }, date: "2025.10.20", summary: { ko: "트와이스의 공식 팬덤 ONCE가 글로벌 팬덤 규모 2000만 명을 돌파했습니다.", en: "TWICE's official fandom ONCE surpassed 20 million members globally." }, url: "#" },
      { title: { ko: "데뷔 10주년 스페셜 앨범 발매 예정 발표", en: "10th Anniversary Special Album Announced" }, date: "2025.10.20", summary: { ko: "트와이스가 데뷔 10주년을 맞아 스페셜 앨범 발매 계획을 공식 발표했습니다.", en: "TWICE officially announced plans for a special album to celebrate their 10th debut anniversary." }, url: "#" }
    ],
    members: [
      {
        id: "nayeon",
        name: { ko: "나연", en: "Nayeon" },
        role: { ko: "리드 보컬, 센터", en: "Lead Vocal, Center" },
        birth: "1995.09.22",
        bloodType: "A",
        mbti: "ENFJ",
        height: "163cm",
        zodiac: { ko: "처녀자리", en: "Virgo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Nayeon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "트와이스 최연장자이자 첫 솔로 데뷔 멤버. 빌보드 200에 진입한 솔로 앨범과 '토순이' 별명으로 유명하며 특유의 에너지로 팀 분위기를 이끈다.", en: "Oldest member and first TWICE soloist. Her Billboard 200-charting solo album and 'bunny' nickname are iconic — her infectious energy keeps the team lively." },
        tmi: {
          ko: [
            "트와이스 최연장자이자 첫 번째로 솔로 데뷔를 한 멤버로, 솔로 앨범 'IM NAYEON'이 빌보드 200에 진입했다.",
            "토끼를 너무 좋아해 팬덤 내에서 '토순이'라는 별명이 있으며, 앞니가 귀여운 토끼 같다는 이유다.",
            "어린 시절 YG 연습생 경력도 있었으며, JYP로 이적 후 7년 만에 데뷔했다.",
            "매우 활발하고 에너지 넘치는 성격으로 트와이스 분위기 메이커 역할을 한다.",
            "독특한 '나연 춤' 리액션 짤이 전 세계 SNS에서 밈(meme)으로 퍼지며 글로벌 인지도를 높였다."
          ],
          en: [
            "The oldest in TWICE and first to make a solo debut — 'IM NAYEON' entered the Billboard 200.",
            "Nicknamed 'rabbit' by fans for her fondness of bunnies and her adorable bunny-like front teeth.",
            "Was a YG trainee as a child before moving to JYP — debuted 7 years after joining the agency.",
            "Known as the mood-maker of TWICE with her bubbly, high-energy personality.",
            "Her unique 'Nayeon dance reaction' clips went viral globally as memes, boosting her international fame."
          ]
        },
        socials: {}
      },
      {
        id: "jeongyeon",
        name: { ko: "정연", en: "Jeongyeon" },
        role: { ko: "보컬", en: "Vocal" },
        birth: "1996.11.01",
        bloodType: "O",
        mbti: "ISTP",
        height: "167cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Jeongyeon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "배우 엄정화의 조카로 트와이스 내 '팩폭 담당'. 건강 문제 극복 후 복귀해 팬들에게 감동을 선사했으며, 단발 트레이드마크로 사랑받는다.", en: "Niece of actress Uhm Jung-hwa, known as TWICE's 'blunt truth-teller'. Her health comeback deeply moved fans, and her signature short hair is beloved." },
        tmi: {
          ko: [
            "배우 엄정화의 조카로, 연예계 혈통을 이어받은 셈이지만 자신만의 길을 개척했다.",
            "건강 문제로 활동을 잠시 중단했다가 복귀하며 팬들에게 큰 감동을 선사했다.",
            "단발 머리 트레이드마크로 유명하며, 장발보다 단발이 훨씬 더 잘 어울린다는 평을 받는다.",
            "트와이스 멤버 중 가장 솔직하고 직설적인 성격으로 '팩트폭격' 캐릭터로 사랑받는다.",
            "언니 유이는 배우로 활동 중이며, 자매가 모두 연예계에서 성공한 드문 사례다."
          ],
          en: [
            "Niece of renowned actress Uhm Jung-hwa — carrying entertainment industry DNA, but forging her own path.",
            "Temporarily stepped away from activities due to health issues, and her comeback deeply moved fans.",
            "Famous for her signature short hair — widely considered to suit her better than long hair.",
            "Known as the most blunt and honest member of TWICE — fans love her 'fact bomb' personality.",
            "Her sister Yui is also an actress, making them a rare siblings-both-successful-in-entertainment case."
          ]
        },
        socials: {}
      },
      {
        id: "momo",
        name: { ko: "모모", en: "Momo" },
        role: { ko: "댄서, 보컬", en: "Dancer, Vocal" },
        birth: "1996.11.09",
        bloodType: "B",
        mbti: "ESFP",
        height: "163cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Momo+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "오사카 출신의 트와이스 메인 댄서. SIXTEEN 탈락 후 긴급 합류한 '기적의 멤버'로, E-girls 댄서들과 어깨를 나란히 하는 압도적 댄스 실력의 소유자.", en: "Osaka-born main dancer of TWICE. A 'miracle member' added back after elimination from SIXTEEN, her dancing is on par with Japan's elite E-girls performers." },
        tmi: {
          ko: [
            "일본 오사카 출신으로, SIXTEEN 서바이벌 당시 탈락했다가 긴급 합류한 '기적의 멤버'다.",
            "트와이스 메인 댄서로, 춤 실력 하나로 일본 스타 집단 E-girls 출신 댄서들과 어깨를 나란히 한다는 평을 받는다.",
            "한국에 온 첫 해 언어 장벽 극복을 위해 하루 종일 한국 TV를 보며 언어를 독학했다.",
            "먹방 콘텐츠가 인기 있는 멤버로, 엄청난 식욕과 귀여운 먹는 모습으로 유명하다.",
            "연습생 시절 1주일 동안 밥 한 공기만 먹으며 체중을 감량한 일화가 화제가 된 적 있다."
          ],
          en: [
            "From Osaka, Japan — was eliminated from SIXTEEN but urgently added back, becoming a 'miracle member'.",
            "TWICE's main dancer, often compared favorably to professional dancers from Japan's elite group E-girls.",
            "In her first year in Korea, she learned Korean entirely by watching TV all day to overcome the language barrier.",
            "Famous for her massive appetite and adorable eating habits — her 'mukbang moments' are fan favorites.",
            "During trainee days, reportedly survived on a single bowl of rice for a week to lose weight before debut — a story that shocked fans."
          ]
        },
        socials: {}
      },
      {
        id: "sana",
        name: { ko: "사나", en: "Sana" },
        role: { ko: "보컬", en: "Vocal" },
        birth: "1996.12.29",
        bloodType: "A",
        mbti: "ESFJ",
        height: "163cm",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Sana+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "오사카 출신의 '사나 말투' 장인. 'shy shy shy' 밈으로 전 세계에서 유명하며 트와이스 내 인스타 팔로워 1위, '국민 첫사랑' 이미지의 주인공.", en: "Osaka-born queen of the 'Sana dialect'. Famous globally for the 'shy shy shy' meme, she has the most Instagram followers in TWICE and a 'nation's first love' image." },
        tmi: {
          ko: [
            "일본 오사카 출신으로, '사나 말투'라고 불리는 독특한 한국어 억양이 트레이드마크가 됐다.",
            "'shy shy shy' 등 귀여운 멘트가 밈(meme)이 될 정도로 전 세계적으로 유명하다.",
            "한국 예능에서 보여준 솔직하고 귀여운 모습으로 '국민 첫사랑' 이미지를 굳혔다.",
            "SNS에서 인스타그램 팔로워 수가 트와이스 멤버 중 가장 많다.",
            "사실 한국행을 결정하기 전까지 아이돌이 될 생각이 없었으며, 우연히 JYP 오디션 소식을 듣고 도전했다."
          ],
          en: [
            "From Osaka, Japan — her unique Korean accent, called the 'Sana dialect', became a beloved trademark.",
            "Her 'shy shy shy' moment became a global meme — one of K-pop's most recognizable viral clips.",
            "Solidified a 'nation's first love' image in Korea through her candid, adorable variety show appearances.",
            "Has the most Instagram followers among all TWICE members.",
            "Didn't plan to become an idol before deciding to come to Korea — heard about the JYP audition by chance."
          ]
        },
        socials: {}
      },
      {
        id: "jihyo",
        name: { ko: "지효", en: "Jihyo" },
        role: { ko: "리더, 메인 보컬", en: "Leader, Main Vocal" },
        birth: "1997.02.01",
        bloodType: "A",
        mbti: "ESFJ",
        height: "160cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Jihyo+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "JYP 10년 연습생 출신의 트와이스 리더이자 메인 보컬. '박신이'라는 극찬을 받는 보컬 실력과 9명을 하나로 묶는 리더십으로 팀의 중심이다.", en: "Leader and main vocal of TWICE with a legendary 10-year JYP trainee period. Praised as 'Park Shin-i' (Park sent by God), she is the unifying center of all 9 members." },
        tmi: {
          ko: [
            "JYP 연습생 기간이 무려 10년(2008~2018)으로, K-Pop 역사상 가장 긴 연습 기간을 거친 아이돌 중 하나다.",
            "트와이스 리더이자 메인 보컬로, 팀의 정서적 지주 역할을 한다.",
            "솔로 데뷔 앨범 'ZONE'이 발매되자마자 각종 차트 상위권에 진입했다.",
            "팬들 사이에서 '박신이(신이 보낸 박 씨)'라는 별명이 있을 정도로 보컬 실력이 뛰어나다.",
            "리더로서 9명의 멤버가 각자 목소리를 낼 수 있도록 항상 앞장서서 소통을 이끈다."
          ],
          en: [
            "Was a JYP trainee for 10 years (2008–2018) — one of the longest training periods in K-pop history.",
            "Leader and main vocal of TWICE, serving as the emotional anchor of the group.",
            "Her solo debut album 'ZONE' immediately charted high across multiple platforms.",
            "Fan nickname 'Park Shin-i' (Park sent by God) reflects how fans regard her vocal as divinely gifted.",
            "As leader, she consistently facilitates open communication so all 9 members can voice their opinions."
          ]
        },
        socials: {}
      },
      {
        id: "mina",
        name: { ko: "미나", en: "Mina" },
        role: { ko: "댄서, 보컬", en: "Dancer, Vocal" },
        birth: "1997.03.24",
        bloodType: "A",
        mbti: "ISFP",
        height: "163cm",
        zodiac: { ko: "양자리", en: "Aries" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Mina+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "텍사스 출신·일본 성장의 발레 댄서. 불안 장애 극복 후 무대 복귀로 팬들에게 큰 용기를 줬으며, '블랙 스완'이라는 별명처럼 가장 우아한 무대를 선보인다.", en: "Texas-born, Japan-raised ballet dancer. Her courageous return to stage after anxiety disorder moved fans worldwide — her graceful presence earns her the nickname 'Black Swan'." },
        tmi: {
          ko: [
            "미국 텍사스 출신이지만 일본에서 성장했으며, 발레 경력이 트와이스 퍼포먼스에 큰 기여를 한다.",
            "불안 장애 진단을 받아 활동을 중단했다가 복귀한 스토리가 전 세계 팬들에게 큰 위로와 용기를 줬다.",
            "트와이스 멤버 중 가장 우아하고 고풍스러운 이미지로 '블랙 스완'이라는 별명을 갖고 있다.",
            "패션 감각이 뛰어나 일본 럭셔리 패션 잡지의 단골 표지 모델이다.",
            "JYP 연습생 시절 일본어로만 소통하다가 한국어를 늦게 습득했음에도 현재는 유창하게 구사한다."
          ],
          en: [
            "Born in Texas, USA but grew up in Japan — her ballet background greatly enhances TWICE's performance quality.",
            "Her journey of taking a hiatus due to anxiety disorder, then returning, moved fans worldwide and became a symbol of courage.",
            "Has the most elegant, classical image in TWICE — nicknamed 'Black Swan' for her graceful stage presence.",
            "A regular cover model for Japanese luxury fashion magazines for her impeccable sense of style.",
            "Learned Korean relatively late while communicating mainly in Japanese as a trainee, but now speaks fluently."
          ]
        },
        socials: {}
      },
      {
        id: "dahyun",
        name: { ko: "다현", en: "Dahyun" },
        role: { ko: "래퍼, 보컬", en: "Rapper, Vocal" },
        birth: "1998.05.28",
        bloodType: "A",
        mbti: "ENFP",
        height: "163cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Dahyun+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "학예회 영상 바이럴로 길거리 캐스팅된 트와이스 유머 담당. '꼬마 유령', '두부미녀'로 불리는 독특한 매력과 자칭 '닌텐도 천재'로 팬들에게 사랑받는다.", en: "Street-cast after a school talent show video went viral. Beloved as TWICE's comedian, nicknamed 'mini ghost' and 'tofu beauty' — also the self-proclaimed Nintendo champion of the group." },
        tmi: {
          ko: [
            "학예회에서 'CHU~♡'를 부른 영상이 화제가 돼 길거리 캐스팅으로 JYP에 입사한 독특한 이력이 있다.",
            "눈이 매우 하얗고 눈동자가 작아 '꼬마 유령', '두부미녀' 등 다양한 별명을 갖고 있다.",
            "기독교 신앙을 공개적으로 밝힌 멤버로, 매주 교회에 출석하는 것으로 알려져 있다.",
            "트와이스 공식 유머 담당으로, 엉뚱한 말과 행동으로 멤버들을 항상 웃게 만든다.",
            "'닌텐도 게임 실력이 멤버 중 최강'이라고 스스로 공언하는 게임 애호가다."
          ],
          en: [
            "Was street-cast after a video of her performing 'CHU~♡' at a school talent show went viral — a uniquely accidental path to JYP.",
            "Known for her bright white eyes and small pupils — nicknamed 'mini ghost' and 'tofu beauty'.",
            "Openly practices Christianity and is known to attend church every week.",
            "Official comedian of TWICE — her random remarks and antics constantly make members burst out laughing.",
            "Self-proclaimed 'best Nintendo gamer in TWICE', a passionate gaming enthusiast."
          ]
        },
        socials: {}
      },
      {
        id: "chaeyoung",
        name: { ko: "채영", en: "Chaeyoung" },
        role: { ko: "래퍼, 보컬", en: "Rapper, Vocal" },
        birth: "1999.04.23",
        bloodType: "A",
        mbti: "INFP",
        height: "159cm",
        zodiac: { ko: "황소자리", en: "Taurus" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Chaeyoung+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "자체 작사와 타투로 트와이스 내 가장 '엣지' 있는 이미지. 미술 참여와 힙합 패션으로 독보적인 개성을 드러내며 가장 작은 키로도 무대 장악력은 최강이다.", en: "The edgiest image in TWICE, with self-written lyrics and tattoos. Her art involvement, hip-hop fashion, and commanding stage presence make her the group's unique rebel voice." },
        tmi: {
          ko: [
            "직접 가사를 쓰는 자체 제작 능력을 갖춘 멤버로, 작사에 대한 열정이 남다르다.",
            "타투를 여러 개 갖고 있는 트와이스 멤버 중 가장 '강렬한' 이미지로 변신에 성공했다.",
            "미술을 좋아해 앨범 아트나 개인 굿즈 디자인에 직접 참여하기도 한다.",
            "TWICE에서 키가 가장 작지만 무대 장악력은 누구 못지않다는 평을 받는다.",
            "스트리트 패션을 즐기며, 힙합·그런지 무드의 패션을 선호해 트와이스 내 독보적 패션 피플로 꼽힌다."
          ],
          en: [
            "A self-producing member who writes her own lyrics — her passion for songwriting sets her apart within TWICE.",
            "Has multiple tattoos and successfully transformed her image to the most 'edgy' look in TWICE.",
            "Loves visual art and has participated in album artwork and personal merchandise design.",
            "The shortest member of TWICE, but her stage presence is second to none.",
            "Prefers hip-hop and grunge fashion — considered the unique fashion icon within the group."
          ]
        },
        socials: {}
      },
      {
        id: "tzuyu",
        name: { ko: "쯔위", en: "Tzuyu" },
        role: { ko: "보컬, 비주얼, 막내", en: "Vocal, Visual, Maknae" },
        birth: "1999.06.14",
        bloodType: "A",
        mbti: "ISFP",
        height: "172cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        imageUrl: "https://tse1.mm.bing.net/th?q=TWICE+Tzuyu+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "대만 출신의 '인간 비율 표준'. 172cm 완벽한 비율과 한국어·대만어·광둥어·일본어 구사 능력, 활 쏘기 실력까지 갖춘 트와이스의 글로벌 비주얼이다.", en: "Taiwan-born 'human body standard'. With her 172cm perfect proportions, fluency in 4 languages, and archery skills, she is TWICE's ultimate global visual." },
        tmi: {
          ko: [
            "대만 타이난 출신으로, 데뷔 당시 16세였다. 비율이 완벽하다는 평을 받으며 '인간 비율 표준'이라 불린다.",
            "2015~2016년 '쯔위 사태'라 불리는 대만 국기 논란으로 공개 사과 영상을 올린 아픈 기억이 있다.",
            "활 쏘기를 좋아해 국가대표급 실력을 갖췄다는 루머가 있을 정도로 진지하게 수련했다.",
            "과거 몇 년간 트와이스 멤버 중 가장 많은 인스타그램 팔로워를 보유했던 적이 있다.",
            "한국어·대만어·광둥어·일본어를 구사하는 언어 재능이 뛰어난 멀티링구얼이다."
          ],
          en: [
            "From Tainan, Taiwan — debuted at 16. Her proportions are so praised she's called a 'human body standard'.",
            "Was at the center of the 2015–2016 'Tzuyu incident' involving a Taiwan flag controversy, leading to a public apology video — a painful early career moment.",
            "Practices archery seriously enough that rumors spread of her having near-national-level skill.",
            "Once held the most Instagram followers among all TWICE members for several years.",
            "Speaks Korean, Taiwanese, Cantonese, and Japanese — a remarkably gifted multilingual."
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
        name: { ko: "에스쿱스", en: "S.Coups" },
        role: { ko: "리더, 힙합팀 리더, 래퍼", en: "Leader, Hip-hop Unit Leader, Rapper" },
        birth: "1995.08.08",
        bloodType: "O",
        mbti: "ESTP",
        height: "178cm",
        zodiac: { ko: "사자자리", en: "Leo" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+S.Coups+Choi+Seungcheol+face+closeup+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "13명을 하나로 묶는 세븐틴의 든든한 리더. 힙합팀을 이끌며 군 복무 중 부상 후 완벽히 복귀해 팬들에게 감동을 선사했다.", en: "The unifying leader who holds 13 members together. Led the hip-hop team and moved fans with a full comeback after a military service injury." },
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
          ]
        },
        socials: {}
      },
      {
        id: "jeonghan",
        name: { ko: "정한", en: "Jeonghan" },
        role: { ko: "보컬팀, 보컬", en: "Vocal Unit, Vocal" },
        birth: "1995.10.04",
        bloodType: "B",
        mbti: "INFJ",
        height: "175cm",
        zodiac: { ko: "천칭자리", en: "Libra" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Jeonghan+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "성별을 초월한 외모로 세계 미남 차트 단골인 보컬팀 멤버. 군 복귀 후 달라진 분위기로 팬들을 사로잡으며 '정한식 장난'으로도 유명하다.", en: "A regular on global 'most handsome' charts for his transcendent beauty. After military service, his transformed vibe captivated fans — and his signature pranks keep members on their toes." },
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
          ]
        },
        socials: {}
      },
      {
        id: "joshua",
        name: { ko: "조슈아", en: "Joshua" },
        role: { ko: "보컬팀, 보컬", en: "Vocal Unit, Vocal" },
        birth: "1995.12.30",
        bloodType: "O",
        mbti: "ISFJ",
        height: "176cm",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Joshua+Hong+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "LA 출신의 세븐틴 공식 영어 통역사. 기타를 직접 연주하는 뮤지션이자 '인간 비타민'이라는 별명처럼 항상 밝고 긍정적인 에너지를 발산한다.", en: "LA-born official English interpreter of SEVENTEEN. A guitarist-musician and 'human vitamin' who radiates constant positive energy to the team and fans alike." },
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
          ]
        },
        socials: {}
      },
      {
        id: "jun",
        name: { ko: "준", en: "Jun" },
        role: { ko: "퍼포먼스팀, 댄서, 보컬", en: "Performance Unit, Dancer, Vocal" },
        birth: "1996.06.10",
        bloodType: "O",
        mbti: "ISTP",
        height: "180cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Jun+Wen+Junhui+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "광저우 출신의 중국 아역 배우 출신 퍼포먼스팀. 비보잉과 무술을 결합한 독특한 퍼포먼스로 중화권 팬덤을 주도하며 조용한 일상과 강렬한 무대의 갭이 매력이다.", en: "Guangzhou-born former Chinese child actor in SEVENTEEN's Performance Team. Known for fusing B-boying and martial arts, he leads the Chinese fanbase with an off-stage/on-stage contrast that is pure magnetism." },
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
          ]
        },
        socials: {}
      },
      {
        id: "hoshi",
        name: { ko: "호시", en: "Hoshi" },
        role: { ko: "퍼포먼스팀 리더, 댄서", en: "Performance Unit Leader, Dancer" },
        birth: "1996.06.15",
        bloodType: "O",
        mbti: "ENFP",
        height: "177cm",
        zodiac: { ko: "쌍둥이자리", en: "Gemini" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Hoshi+Kwon+Soonyoung+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "세븐틴 안무 대부분을 만드는 퍼포먼스팀 리더. 베스트 안무상 3회 수상의 '안무의 신'으로, 고양이 눈매와 무한한 에너지가 트레이드마크다.", en: "Performance Team leader who creates most of SEVENTEEN's choreography. A three-time Best Choreography Award winner — nicknamed 'god of dance' for his limitless energy and tiger-like eyes." },
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
          ]
        },
        socials: {}
      },
      {
        id: "wonwoo",
        name: { ko: "원우", en: "Wonwoo" },
        role: { ko: "힙합팀, 래퍼", en: "Hip-hop Unit, Rapper" },
        birth: "1996.07.17",
        bloodType: "A",
        mbti: "INFP",
        height: "182cm",
        zodiac: { ko: "게자리", en: "Cancer" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Wonwoo+Jeon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "세븐틴 최장신의 독서광 래퍼. 저음 보이스 ASMR이 폭발적 반응을 얻었으며, '책 원우'라는 별명처럼 팬 사인회에서도 책을 놓지 않는다.", en: "SEVENTEEN's tallest member and bookworm rapper. His deep-voice ASMR sparked massive fan reactions — and as 'book Wonwoo', he literally brings books to fan sign events." },
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
          ]
        },
        socials: {}
      },
      {
        id: "woozi",
        name: { ko: "우지", en: "Woozi" },
        role: { ko: "보컬팀 리더, 메인 보컬, 프로듀서", en: "Vocal Unit Leader, Main Vocal, Producer" },
        birth: "1996.11.22",
        bloodType: "A",
        mbti: "INTJ",
        height: "164cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Woozi+Lee+Jihoon+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "세븐틴 음악 80%를 직접 만드는 보컬팀 리더이자 천재 프로듀서. 164cm로 팬들을 놀라게 하지만 무대 위 존재감은 누구보다 압도적이다.", en: "Vocal Team leader and genius producer behind 80%+ of SEVENTEEN's music. His 164cm stature surprises newcomers, but his stage presence completely overpowers anyone around him." },
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
          ]
        },
        socials: {}
      },
      {
        id: "the8",
        name: { ko: "디에잇", en: "The8" },
        role: { ko: "퍼포먼스팀, 댄서, 보컬", en: "Performance Unit, Dancer, Vocal" },
        birth: "1996.11.07",
        bloodType: "O",
        mbti: "INFP",
        height: "177cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+The8+Xu+Minghao+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "비보잉 선수 출신의 퍼포먼스팀 댄서. 자체 안무 유튜브 1억 뷰를 달성했으며 중국 럭셔리 패션 앰배서더로도 활발히 활동하는 멀티 아티스트다.", en: "Performance Team dancer with a competitive B-boy background. His self-choreographed YouTube content surpassed 100M views, and he's an active ambassador for Chinese luxury fashion brands." },
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
          ]
        },
        socials: {}
      },
      {
        id: "mingyu",
        name: { ko: "민규", en: "Mingyu" },
        role: { ko: "힙합팀, 래퍼, 비주얼", en: "Hip-hop Unit, Rapper, Visual" },
        birth: "1997.04.06",
        bloodType: "A",
        mbti: "ENFP",
        height: "187cm",
        zodiac: { ko: "양자리", en: "Aries" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Mingyu+Kim+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "187cm의 세븐틴 공식 비주얼이자 팀의 쉐프. GQ·Vogue 커버 단골이며 무대 위 카리스마와 일상의 귀여움 갭이 극명한 '갭 모에' 캐릭터다.", en: "SEVENTEEN's 187cm official visual and team chef. A regular on GQ and Vogue covers, his dramatic gap between on-stage charisma and off-stage cuteness makes him the group's ultimate 'gap moe' figure." },
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
          ]
        },
        socials: {}
      },
      {
        id: "dk",
        name: { ko: "도겸", en: "DK" },
        role: { ko: "보컬팀, 메인 보컬", en: "Vocal Unit, Main Vocal" },
        birth: "1997.02.18",
        bloodType: "O",
        mbti: "ENFP",
        height: "178cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+DK+Lee+Seokmin+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "뮤지컬 '그리스' 주연을 맡은 세븐틴 메인 보컬. '세븐틴의 해'라는 별명처럼 태양처럼 밝은 에너지로 팀에 활력을 불어넣는 긍정 에너지의 화신이다.", en: "SEVENTEEN's main vocal who starred in the musical 'Grease'. Nicknamed 'the sun of SEVENTEEN' for his endless positive energy — widely recognized as the most consistently upbeat member." },
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
          ]
        },
        socials: {}
      },
      {
        id: "seungkwan",
        name: { ko: "승관", en: "Seungkwan" },
        role: { ko: "보컬팀, 메인 보컬", en: "Vocal Unit, Main Vocal" },
        birth: "1998.01.16",
        bloodType: "A",
        mbti: "ESFJ",
        height: "173cm",
        zodiac: { ko: "염소자리", en: "Capricorn" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Seungkwan+Boo+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "제주도 출신의 세븐틴 예능 능력치 1위. 어머니 사랑이 각별한 효자이며, 각종 시상식 MC로 자주 초청받는 세븐틴의 분위기 메이커다.", en: "Jeju Island-born and rated #1 in variety talent in SEVENTEEN. A devoted mother's boy and sought-after awards MC — the ultimate mood-maker who never fails to light up any situation." },
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
          ]
        },
        socials: {}
      },
      {
        id: "vernon",
        name: { ko: "버논", en: "Vernon" },
        role: { ko: "힙합팀, 래퍼", en: "Hip-hop Unit, Rapper" },
        birth: "1998.02.18",
        bloodType: "O",
        mbti: "INFP",
        height: "180cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Vernon+Chwe+Hansol+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "뉴욕 출신 한미 혼혈 래퍼. GQ 커버 장식 후 명품 브랜드 러브콜이 쏟아지는 패션 아이콘이며 '버논 한국어' 밈으로도 글로벌 인지도가 높다.", en: "Half-Korean, half-American rapper from New York. A fashion icon after his GQ cover appearance, and globally recognized for the 'Vernon Korean' pronunciation meme that's charmed fans worldwide." },
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
          ]
        },
        socials: {}
      },
      {
        id: "dino",
        name: { ko: "디노", en: "Dino" },
        role: { ko: "퍼포먼스팀, 댄서, 막내", en: "Performance Unit, Dancer, Maknae" },
        birth: "1999.02.11",
        bloodType: "B",
        mbti: "ISFP",
        height: "173cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=SEVENTEEN+Dino+Lee+Chan+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "마이클 잭슨을 롤모델로 삼은 세븐틴 막내 댄서. 6년 연습 끝에 데뷔한 성실함과 '막내 같지 않은 막내'의 성숙한 퍼포먼스가 트레이드마크다.", en: "SEVENTEEN's youngest dancer with Michael Jackson as his role model. Six years of training before debut — and a performance maturity so remarkable he's called 'the maknae who doesn't act like a maknae'." },
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
        name: { ko: "정원", en: "Jungwon" },
        role: { ko: "리더, 보컬", en: "Leader, Vocal" },
        birth: "2004.02.09",
        bloodType: "O",
        mbti: "ISFJ",
        height: "174cm",
        zodiac: { ko: "물병자리", en: "Aquarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jungwon+Yang+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "엔하이픈의 리더로 뛰어난 리더십과 음악적 감성을 겸비한 보컬리스트.", en: "ENHYPEN's leader — a vocalist combining exceptional leadership with deep musical sensibility." },
        tmi: {
          ko: [
            "엔하이픈 막내급 나이임에도 리더로 선발돼 7명을 이끄는 남다른 리더십을 인정받는다.",
            "고양이를 너무 좋아해 팬들 사이에서 '고양이 인간'이라는 별명이 있다.",
            "뛰어난 음악적 감수성으로 작사에 참여하며 자체 제작 능력을 키워가고 있다.",
            "평소 말이 많지 않지만 무대에서는 강렬한 눈빛으로 팬들을 압도하는 '무대 체인지' 캐릭터다.",
            "I-LAND 시절부터 리더 후보 1순위로 꼽혔으며, 실제로 팀 결성 후 리더가 됐다."
          ],
          en: [
            "Selected as leader despite being one of the youngest — his leadership capabilities were recognized from the start.",
            "Nicknamed 'cat human' by fans for his deep love of cats and feline-like facial expressions.",
            "Growing as a self-producing artist, participating in lyric writing with strong musical sensibility.",
            "Quiet in daily life but transforms with an intense gaze on stage — a 'stage switch' personality.",
            "Was the top leader candidate throughout I-LAND — became leader when the team officially formed."
          ]
        },
        socials: {}
      },
      {
        id: "heeseung",
        name: { ko: "희승", en: "Heeseung" },
        role: { ko: "보컬, 댄서, 래퍼 (멀티 포지션)", en: "Vocal, Dancer, Rapper (Multi-position)" },
        birth: "2001.10.15",
        bloodType: "O",
        mbti: "ENFP",
        height: "185cm",
        zodiac: { ko: "천칭자리", en: "Libra" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Heeseung+Lee+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "보컬·댄스·랩 모두 소화하는 엔하이픈의 올라운더. I-LAND 전체 1위 출신 에이스.", en: "ENHYPEN's all-rounder handling vocals, dance, and rap. The ace who finished #1 overall on I-LAND." },
        tmi: {
          ko: [
            "보컬·댄서·래퍼 모두 가능한 완벽한 올라운더로, 'I-LAND 전체 1등' 출신이다.",
            "피아노·기타·드럼 등 다양한 악기를 연주할 수 있는 뮤지션 기질을 타고났다.",
            "185cm의 장신에 뛰어난 외모로 데뷔 전부터 '차세대 에이스' 타이틀을 달았다.",
            "BTS 정국을 롤모델로 꼽으며 연습 열정이 남다르다고 알려져 있다.",
            "게임 실력이 출중해 팬들과 직접 게임을 즐기는 라이브 방송이 인기다."
          ],
          en: [
            "A perfect all-rounder in vocals, dance, and rap — finished #1 overall on I-LAND.",
            "Can play piano, guitar, and drums — a naturally gifted musician.",
            "At 185cm with exceptional looks, he was called 'next-gen ace' even before debut.",
            "Cites BTS's Jungkook as his role model — known for his extraordinary practice ethic.",
            "An accomplished gamer who hosts popular live streams playing games with fans."
          ]
        },
        socials: {}
      },
      {
        id: "jay",
        name: { ko: "제이", en: "Jay" },
        role: { ko: "보컬, 래퍼", en: "Vocal, Rapper" },
        birth: "2002.04.20",
        bloodType: "O",
        mbti: "ENTJ",
        height: "180cm",
        zodiac: { ko: "황소자리", en: "Taurus" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jay+Park+Jongseong+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "미국 시애틀 출신 한미 혼혈 보컬리스트. 4개국어를 구사하는 언어 천재이자 패션 아이콘.", en: "Half-Korean, half-American vocalist from Seattle. A language genius fluent in 4 languages and a fashion icon." },
        tmi: {
          ko: [
            "미국 시애틀 출신 한미 혼혈로, 영어·한국어·일본어·스페인어까지 구사하는 언어 천재다.",
            "가장 솔직하고 직설적인 성격으로 팬들에게 '팩폭 제이'라는 애칭을 얻었다.",
            "패션 감각이 독보적으로 뛰어나 음악 활동 외에도 패션 브랜드 콜라보 제안이 꾸준히 들어온다.",
            "요리를 즐겨 '제이의 쿠킹 클래스' 같은 콘텐츠가 팬들에게 인기 있다.",
            "공부도 잘해 미국에서 학교를 다닐 때 우등생이었으며, 아이돌이 되지 않았다면 의사가 됐을 것이라고 밝혔다."
          ],
          en: [
            "Half Korean, half American from Seattle — speaks English, Korean, Japanese, and Spanish, making him a language genius.",
            "The most blunt and direct member — fans affectionately call him 'fact-bomb Jay'.",
            "Unmatched fashion sense — receives regular fashion brand collaboration offers beyond music activities.",
            "Loves cooking — 'Jay's Cooking Class' style content is popular with fans.",
            "Was an honors student in the US — says if not an idol, he would have become a doctor."
          ]
        },
        socials: {}
      },
      {
        id: "jake",
        name: { ko: "제이크", en: "Jake" },
        role: { ko: "보컬", en: "Vocal" },
        birth: "2002.11.15",
        bloodType: "AB",
        mbti: "ENFP",
        height: "174cm",
        zodiac: { ko: "전갈자리", en: "Scorpio" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Jake+Sim+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "호주 브리즈번 출신 보컬리스트. 따뜻한 음색과 사진 실력으로 팬들의 깊은 사랑을 받는다.", en: "Vocalist from Brisbane, Australia. Loved by fans for his warm vocal tone and outstanding photography." },
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
          ]
        },
        socials: {}
      },
      {
        id: "sunghoon",
        name: { ko: "성훈", en: "Sunghoon" },
        role: { ko: "보컬, 비주얼", en: "Vocal, Visual" },
        birth: "2002.12.08",
        bloodType: "A",
        mbti: "ISTJ",
        height: "180cm",
        zodiac: { ko: "사수자리", en: "Sagittarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Sunghoon+Park+figure+skater+face+closeup+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "국가대표급 피겨 스케이팅 선수 출신 비주얼 보컬. Burberry 글로벌 앰배서더로 활약 중.", en: "Visual vocalist with national-level figure skating background. Active as a global Burberry brand ambassador." },
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
          ]
        },
        socials: {}
      },
      {
        id: "sunoo",
        name: { ko: "선우", en: "Sunoo" },
        role: { ko: "보컬", en: "Vocal" },
        birth: "2003.06.24",
        bloodType: "O",
        mbti: "ENFP",
        height: "170cm",
        zodiac: { ko: "게자리", en: "Cancer" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Sunoo+Kim+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "반달 눈웃음이 트레이드마크인 엔하이픈의 분위기 메이커 보컬리스트.", en: "ENHYPEN's mood-maker vocalist, famous for his crescent-moon eye-smile that lights up every room." },
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
          ]
        },
        socials: {}
      },
      {
        id: "niki",
        name: { ko: "니키", en: "Ni-ki" },
        role: { ko: "댄서, 막내", en: "Dancer, Maknae" },
        birth: "2005.12.09",
        bloodType: "A",
        mbti: "ISTP",
        height: "180cm",
        zodiac: { ko: "사수자리", en: "Sagittarius" },
        imageUrl: "https://tse1.mm.bing.net/th?q=ENHYPEN+Ni-ki+Nishimura+Riki+face+closeup+fancam+2024&w=500&h=500&c=7&rs=1&p=0",
        description: { ko: "일본 출신 엔하이픈 막내이자 메인 댄서. 10대 나이에 천재 퍼포머로 인정받는 퍼포먼스 전문가.", en: "Japanese-born ENHYPEN maknae and main dancer. Recognized as a genius performer while still in his teens." },
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
          ]
        },
        socials: {}
      }
    ]
  }
];
