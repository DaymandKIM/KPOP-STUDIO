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
      en: "NewJeans is a 5-member multinational girl group under ADOR, with the ambition to become icons of the times like everyday jeans. Produced by Min Hee-jin, they sparked the 'Y2K' and 'easy-listening' trends in K-pop. By modernly reinterpreting the nostalgia of the late 90s to early 00s and emphasizing natural teenage vibes, they created a massive syndrome upon debut.",
      ja: "NewJeans（ニュージーンズ）は、ジーンズのように日常のアイコンになるという抱負と「New Genes（新しい遺伝子）」になるという覚悟を込めた、ADOR所属の5人組多国籍ガールズグループです。ミン・ヒジン前代表が総括プロデュースを務め、K-POP市場に「Y2K」と「イージーリスニング」旋風を巻き起こしました。1990年代後半から2000年代初頭の郷愁を現代的に再解釈した独創的なコンセプト、過度なメイクやキルヒールを排除した10代の少女特有の自然さを強調し、デビューと同時に巨大なシンドロームを巻き起こしました。",
      zh: "NewJeans 是 ADOR 旗下的 5 人跨国女子组合，带着成为像牛仔裤一样日常偶像的抱负和成为“New Genes（新基因）”的决心。由前代表闵熙珍担任总制作人，在 K-POP 市场掀起了“Y2K”和“轻音乐”的热潮。通过现代方式重新诠释 90 年代末到 2000 年代初的怀旧风情，摒弃过度浓妆和恨天高，强调 10 代少女特有的自然美，出道即引发了巨大的综合症。",
      es: "NewJeans es un grupo de chicas multinacional de 5 miembros bajo ADOR, con la ambición de convertirse en iconos de la época como los jeans de todos los días. Producidas por Min Hee-jin, provocaron las tendencias 'Y2K' y 'easy-listening' en el K-pop. Al reinterpretar modernamente la nostalgia de finales de los 90 a principios de los 00 y enfatizar las vibraciones naturales de las adolescentes, crearon un síndrome masivo al debutar.",
      id: "NewJeans adalah grup wanita multinasional beranggotakan 5 orang di bawah naungan ADOR, dengan ambisi untuk menjadi ikon zaman seperti celana jeans sehari-hari. Diproduseri oleh Min Hee-jin, mereka memicu tren 'Y2K' dan 'easy-listening' di K-pop. Dengan menafsirkan ulang nostalgia akhir 90-an hingga awal 00-an secara modern dan menekankan getaran remaja yang alami, mereka menciptakan sindrom besar saat debut.",
      fr: "NewJeans est un groupe de filles multinational de 5 membres sous ADOR, avec l'ambition de devenir des icônes de l'époque comme les jeans de tous les jours. Produites par Min Hee-jin, elles ont déclenché les tendances 'Y2K' et 'easy-listening' dans la K-pop. En réinterprétant de manière moderne la nostalgie de la fin des années 90 au début des années 00 et en mettant l'accent sur les ondes naturelles des adolescentes, elles ont créé un syndrome massif dès leurs débuts.",
      hi: "न्यूजींस ADOR के तहत 5-सदस्यीय बहुराष्ट्रीय गर्ल ग्रुप है, जिसका लक्ष्य रोज़मर्रा के जींस की तरह समय का आइकन बनना है। मिन ही-जिन द्वारा निर्मित, उन्होंने के-पॉप में 'Y2K' और 'ईज़ी-लिस्निंग' ट्रेंड को जन्म दिया। 90 के दशक के अंत से 00 के दशक की शुरुआत की पुरानी यादों को आधुनिक रूप से फिर से पेश करके और प्राकृतिक किशोर वाइब्स पर ज़ोर देकर, उन्होंने डेब्यू के साथ ही एक विशाल सिंड्रोम पैदा कर दिया।",
      pt: "NewJeans é um girl group multinacional de 5 membros da ADOR, com a ambição de se tornarem ícones da época como os jeans do dia a dia. Produzidas por Min Hee-jin, elas desencadearam as tendências 'Y2K' e 'easy-listening' no K-pop. Ao reinterpretar de forma moderna a nostalgia do final dos anos 90 e início dos anos 2000 e enfatizar as vibrações naturais das adolescentes, elas criaram um grande síndrome logo na estreia.",
      ar: "نيوجينز (NewJeans) هي فرقة فتيات متعددة الجنسيات مكونة من 5 عضوات تحت وكالة ADOR، مع طموح لأن يصبحن أيقونات العصر مثل الجينز اليومي. بإنتاج مين هي-جين، أشعلن تريند 'Y2K' و 'الاستماع السهل' في الكيبوب. من خلال إعادة تفسير حنين أواخر التسعينيات وأوائل الألفية بشكل حديث والتأكيد على الأجواء الطبيعية للفتيات المراهقات، خلقن متلازمة ضخمة عند الترسيم.",
      th: "NewJeans เป็นเกิร์ลกรุ๊ปข้ามชาติ 5 คนภายใต้สังกัด ADOR โดยมีความทะเยอทะยานที่จะกลายเป็นไอคอนแห่งยุคเหมือนกางเกงยีนส์ที่ใส่ได้ทุกวัน ผลิตโดยมินฮีจิน พวกเธอจุดประกายเทรนด์ 'Y2K' และ 'easy-listening' ในวงการ K-pop ด้วยการตีความความหลังในช่วงปลายยุค 90 ถึงต้นยุค 00 ขึ้นมาใหม่ในรูปแบบที่ทันสมัย และเน้นย้ำถึงความเป็นธรรมชาติของวัยรุ่น พวกเธอได้สร้างปรากฏการณ์ครั้งใหญ่ตั้งแต่เดบิวต์",
      vi: "NewJeans là nhóm nhạc nữ đa quốc gia gồm 5 thành viên trực thuộc ADOR, với tham vọng trở thành biểu tượng của thời đại giống như những chiếc quần jeans mặc hàng ngày. Được sản xuất bởi Min Hee-jin, họ đã châm ngòi cho xu hướng 'Y2K' và 'easy-listening' trong K-pop. Bằng cách tái hiện lại sự hoài cổ của cuối thập niên 90 đến đầu những năm 00 một cách hiện đại và nhấn mạnh vào sự tự nhiên của lứa tuổi thiếu niên, họ đã tạo ra một hội chứng lớn ngay khi ra mắt.",
      ru: "NewJeans — это многонациональная женская группа из 5 участниц под крылом ADOR, стремящаяся стать иконой времени, как повседневные джинсы. Продюсируемые Мин Хи Джин, они породили тренды 'Y2K' и 'easy-listening' в K-pop. Современным переосмыслением ностальгии конца 90-х - начала 00-х и акцентом на естественной подростковой атмосфере они создали масштабный синдром сразу после дебюта."
    },
    description: {
      ko: "Y2K 신드롬의 주역, 꾸밈없는 자연스러운 매력과 트렌디한 이지리스닝 음악으로 전 세계를 사로잡은 4세대 대표 아이콘입니다.",
      en: "The pioneers of the Y2K syndrome, representing the 4th generation with their unpretentious natural charm and trendy easy-listening music.",
      ja: "Y2Kシンドロームの主役。飾らない自然な魅力とトレンディなイージーリスニング音楽で全世界を魅了した第4世代を代表するアイコンです。",
      zh: "Y2K 综合症的主力军，以毫不做作的自然魅力和时尚的轻音乐风靡全球的第 4 代代表偶像。",
      es: "Las pioneras del síndrome Y2K, representando a la 4ta generación con su encanto natural sin pretensiones y su música de moda fácil de escuchar.",
      id: "Pelopor sindrom Y2K, mewakili generasi ke-4 dengan pesona alami mereka yang bersahaja dan musik easy-listening yang trendi.",
      fr: "Les pionnières du syndrome Y2K, représentant la 4ème génération avec leur charme naturel sans prétention et leur musique tendance facile à écouter.",
      hi: "Y2K सिंड्रोम के अग्रदूत, जो अपने सरल प्राकृतिक आकर्षण और ट्रेंडी आसान-सुनने वाले संगीत के साथ चौथी पीढ़ी का प्रतिनिधित्व करते हैं।",
      pt: "As pioneiras do síndrome Y2K, representando a 4ª geração com o seu charme natural sem pretensões e música fácil de ouvir e moderna.",
      ar: "رائدات متلازمة Y2K، يمثلن الجيل الرابع بسحرهن الطبيعي غير المتكلف وموسيقاهن العصرية سهلة الاستماع.",
      th: "ผู้บุกเบิกเทรนด์ Y2K ซึ่งเป็นตัวแทนของเกิร์ลกรุ๊ปเจน 4 ด้วยเสน่ห์ที่เป็นธรรมชาติไร้การปรุงแต่งและเพลงฟังสบายๆ ที่ทันสมัย",
      vi: "Những người tiên phong của hội chứng Y2K, đại diện cho thế hệ thứ 4 với sức hấp dẫn tự nhiên không phô trương và âm nhạc easy-listening thời thượng.",
      ru: "Пионеры синдрома Y2K, представляющие 4-е поколение с их неприхотливым естественным очарованием и модной музыкой easy-listening."
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
      ],
      ja: [
        "メンバーたちは宿舎でお互いを呼ぶとき、本名の代わりに「赤ちゃん」や「お姫様」といった甘い愛称を使うことがあります。",
        "ヘリンはたまに猫のように窓の外をぼんやり見つめる癖があり、メンバーから「本当に猫なのでは？」と疑われています。",
        "ミンジはカルグクス（韓国のうどん）を一度も食べたことがないと言って、国民に向けて謝罪（？）したことがあります。",
        "ハニは韓国の「辛味」に中毒になっており、暇さえあればプルダックポックンミョンを探します。",
        "ダニエルの笑いのツボはゼロに等しく、メンバーのほんの小さな冗談でも大爆笑します。"
      ],
      zh: [
        "成员们在宿舍里互相称呼时，有时会用“宝宝”、“公主”这样肉麻的爱称代替本名。",
        "Haerin 有时会有像猫一样发呆看着窗外的习惯，成员们怀疑她“是不是真的是只猫”。",
        "Minji 曾因为说自己一次也没吃过刀削面而向国民道歉（？）。",
        "Hanni 对韩国的“辣味”上瘾，一有机会就找火鸡面吃。",
        "Danielle 的笑点几乎为零，成员们很小的玩笑都能让她大笑不止。"
      ],
      es: [
        "Las miembros usan apodos cursis como 'Bebé' o 'Princesa' en su dormitorio.",
        "Se sospecha que Haerin es un gato real porque mira fijamente por las ventanas en silencio.",
        "Minji tuvo que disculparse con la nación por nunca probar el Kalguksu (fideos cortados a cuchillo).",
        "Hanni es adicta a los fideos picantes Buldak y los busca constantemente.",
        "El umbral de risa de Danielle es básicamente cero; se ríe de todo."
      ],
      id: [
        "Para anggota menggunakan julukan menggelikan seperti 'Bayi' atau 'Putri' di asrama mereka.",
        "Haerin dicurigai sebagai kucing sungguhan karena dia sering menatap ke luar jendela dalam diam.",
        "Minji harus meminta maaf kepada publik karena belum pernah mencoba Kalguksu (mi potong pisau).",
        "Hanni kecanduan mi Buldak pedas dan terus-menerus mencarinya.",
        "Ambang batas tawa Danielle pada dasarnya nol; dia menertawakan segalanya."
      ],
      fr: [
        "Les membres utilisent des surnoms ringards comme 'Bébé' ou 'Princesse' dans leur dortoir.",
        "On soupçonne Haerin d'être un vrai chat parce qu'elle regarde par la fenêtre en silence.",
        "Minji a dû s'excuser auprès de la nation pour n'avoir jamais goûté au Kalguksu (nouilles coupées au couteau).",
        "Hanni est accro aux nouilles Buldak épicées et les cherche constamment.",
        "Le seuil de rire de Danielle est fondamentalement de zéro ; elle rit de tout."
      ],
      hi: [
        "सदस्य अपने छात्रावास में 'बेबी' या 'प्रिंसेस' जैसे अजीब उपनामों का उपयोग करते हैं।",
        "हैरीन पर एक असली बिल्ली होने का संदेह है क्योंकि वह चुपचाप खिड़कियों से बाहर देखती है।",
        "मिंजी को कभी भी कलगुक्सू (चाकू से कटे हुए नूडल्स) की कोशिश न करने के लिए राष्ट्र से माफी मांगनी पड़ी थी।",
        "हन्नी को मसालेदार बुल्डाक नूडल्स की लत है और वह उन्हें लगातार ढूंढती रहती है।",
        "डेनिएल की हँसी की सीमा मूल रूप से शून्य है; वह हर बात पर हंसती है।"
      ],
      pt: [
        "As integrantes usam apelidos cafonas como 'Bebê' ou 'Princesa' no dormitório.",
        "Suspeita-se que Haerin seja um gato de verdade porque ela fica olhando pela janela em silêncio.",
        "Minji teve que se desculpar com a nação por nunca ter provado Kalguksu (macarrão cortado à faca).",
        "Hanni é viciada no macarrão picante Buldak e o procura constantemente.",
        "O limite de riso de Danielle é basicamente zero; ela ri de tudo."
      ],
      ar: [
        "تستخدم العضوات ألقابًا محرجة مثل 'طفلة' أو 'أميرة' في سكنهن.",
        "يُشتبه في أن هيرين قطة حقيقية لأنها تحدق من النوافذ بصمت.",
        "اضطرت مينجي للاعتذار للأمة لعدم تجربتها الكالغوكسو (المعكرونة المقطعة بالسكين) أبدًا.",
        "هاني مدمنة على معكرونة بولداك الحارة وتبحث عنها باستمرار.",
        "عتبة ضحك دانييل هي صفر أساسًا؛ إنها تضحك على كل شيء."
      ],
      th: [
        "สมาชิกใช้ชื่อเล่นสุดเลี่ยนอย่าง 'เบบี้' หรือ 'เจ้าหญิง' ในหอพัก",
        "แฮรินถูกสงสัยว่าเป็นแมวตัวจริงเพราะเธอชอบเหม่อมองออกไปนอกหน้าต่างเงียบๆ",
        "มินจีเคยต้องออกมาขอโทษระดับชาติเพราะไม่เคยกินคัลกุกซู (ก๋วยเตี๋ยวเกาหลี) เลย",
        "ฮันนี่เสพติดความเผ็ดแบบเกาหลีและมักจะมองหามาม่าเผ็ดบุลดักอยู่เสมอ",
        "แดเนียลมีเส้นความตื้นที่ต่ำมาก เธอสามารถหัวเราะกับมุกตลกเล็กๆ น้อยๆ ของสมาชิกได้เสมอ"
      ],
      vi: [
        "Các thành viên sử dụng những biệt danh sến súa như 'Bé cưng' hoặc 'Công chúa' tại ký túc xá của họ.",
        "Haerin bị nghi ngờ là một con mèo thực sự vì cô ấy thường im lặng nhìn ra ngoài cửa sổ.",
        "Minji đã phải xin lỗi quốc dân vì chưa từng thử Kalguksu (mì cắt).",
        "Hanni bị nghiện mì Buldak cay và liên tục tìm kiếm chúng.",
        "Ngưỡng cười của Danielle cơ bản là bằng không; cô ấy cười với mọi thứ."
      ],
      ru: [
        "Участницы используют в общежитии такие приторные прозвища, как 'Малышка' или 'Принцесса'.",
        "Подозревают, что Хэрин - настоящая кошка, потому что она молча смотрит в окно.",
        "Минджи пришлось извиняться перед нацией за то, что она никогда не пробовала калькуксу (лапшу, нарезанную ножом).",
        "Ханни зависима от острой лапши Бульдак и постоянно ее ищет.",
        "Порог смеха Даниэль в принципе равен нулю; она смеется над всем."
      ]
    },
    news: [
      {
        title: { ko: "뉴진스, 소속사 어도어와 전속계약 해지 통보", en: "NewJeans Notifies ADOR of Contract Termination", ja: "NewJeans、所属事務所ADORに専属契約解除を通知", zh: "NewJeans 宣布与所属公司 ADOR 解除专属合约", es: "NewJeans Notifica a ADOR la Terminación del Contrato", id: "NewJeans Beritahu ADOR Tentang Pemutusan Kontrak", fr: "NewJeans Notifie à ADOR la Résiliation du Contrat", hi: "न्यूजींस ने ADOR को अनुबंध समाप्ति की सूचना दी", pt: "NewJeans Notifica a ADOR sobre Rescisão de Contrato", ar: "نيوجينز تخطر ADOR بإنهاء العقد", th: "NewJeans แจ้งขอยกเลิกสัญญากับค่าย ADOR", vi: "NewJeans thông báo chấm dứt hợp đồng với ADOR", ru: "NewJeans уведомляет ADOR о расторжении контракта" },
        date: "2026.03.05",
        summary: { ko: "뉴진스 멤버들이 기자회견을 통해 소속사 어도어에 전속계약 해지를 전격 통보하며 독립적인 활동을 선언했습니다.", en: "NewJeans members announced the termination of their exclusive contract with ADOR through a press conference, declaring independent activities.", ja: "NewJeansのメンバーが記者会見を通じて所属事務所ADORに専属契約解除を電撃通知し、独立した活動を宣言しました。", zh: "NewJeans 成员通过新闻发布会突然通知所属公司 ADOR 解除专属合约，并宣布将进行独立活动。", es: "Las miembros de NewJeans anunciaron la terminación de su contrato exclusivo con ADOR a través de una conferencia de prensa, declarando actividades independientes.", id: "Anggota NewJeans mengumumkan penghentian kontrak eksklusif mereka dengan ADOR melalui konferensi pers, dan mendeklarasikan aktivitas independen.", fr: "Les membres de NewJeans ont annoncé la résiliation de leur contrat exclusif avec ADOR lors d'une conférence de presse, déclarant des activités indépendantes.", hi: "न्यूजींस के सदस्यों ने एक प्रेस कॉन्फ्रेंस के माध्यम से ADOR के साथ अपने विशेष अनुबंध को समाप्त करने की घोषणा की, और स्वतंत्र गतिविधियों की घोषणा की。", pt: "As integrantes do NewJeans anunciaram a rescisão do seu contrato exclusivo com a ADOR através de uma conferência de imprensa, declarando atividades independentes.", ar: "أعلنت عضوات نيوجينز إنهاء عقدهن الحصري مع ADOR من خلال مؤتمر صحفي، معلنات عن أنشطة مستقلة.", th: "สมาชิก NewJeans ประกาศขอยกเลิกสัญญาผูกขาดกับค่าย ADOR ผ่านงานแถลงข่าว และประกาศทำกิจกรรมอิสระ", vi: "Các thành viên NewJeans đã công bố chấm dứt hợp đồng độc quyền với ADOR thông qua một cuộc họp báo, tuyên bố hoạt động độc lập.", ru: "Участницы NewJeans объявили о расторжении эксклюзивного контракта с ADOR через пресс-конференцию, заявив о независимой деятельности." },
        url: "#"
      }
    ],
    members: [
      {
        id: "minji",
        name: { ko: "민지", en: "Minji", ja: "ミンジ", zh: "Minji (敏智)", es: "Minji", id: "Minji", fr: "Minji", hi: "मिंजी", pt: "Minji", ar: "مينجي", th: "มินจี", vi: "Minji", ru: "Минджи" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "歌手/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Chanteuse/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "โวคอล/แดนเซอร์", vi: "Hát/Nhảy", ru: "Вокалист/Танцор" },
        birth: "2004.05.07",
        mbti: "ESTJ",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "牡牛座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ", pt: "Touro", ar: "الثور", th: "พฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "169cm",
        bloodType: "A",
        description: { ko: "고전적인 미인형으로 '국민 첫사랑' 이미지를 가졌으며 책임감이 강한 성격입니다.", en: "A classic beauty with a 'Nation's First Love' image and a strong sense of responsibility.", ja: "古典的な美人顔で「国民の初恋」のイメージを持ち、責任感の強い性格です。", zh: "古典美人类型，拥有“国民初恋”的形象，性格充满责任感。", es: "Una belleza clásica con la imagen de 'Primer Amor de la Nación' y un fuerte sentido de responsabilidad.", id: "Kecantikan klasik dengan citra 'Cinta Pertama Bangsa' dan rasa tanggung jawab yang kuat.", fr: "Une beauté classique avec l'image du 'Premier Amour de la Nation' et un fort sens des responsabilités.", hi: "'नेशन फर्स्ट लव' छवि और जिम्मेदारी की एक मजबूत भावना के साथ एक क्लासिक सुंदरता।", pt: "Uma beleza clássica com a imagem do 'Primeiro Amor da Nação' e um forte senso de responsabilidade.", ar: "جمال كلاسيكي بصورة 'الحب الأول للأمة' وشعور قوي بالمسؤولية.", th: "มีความสวยแบบคลาสสิกด้วยภาพลักษณ์ 'รักแรกแห่งชาติ' และมีนิสัยที่มีความรับผิดชอบสูง", vi: "Vẻ đẹp cổ điển với hình tượng 'Tình đầu quốc dân' và tinh thần trách nhiệm cao.", ru: "Классическая красота с имиджем 'Первой любви нации' и сильным чувством ответственности." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%AF%BC%EC%A7%80%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "hanni",
        name: { ko: "하니", en: "Hanni", ja: "ハニ", zh: "Hanni (玉欣)", es: "Hanni", id: "Hanni", fr: "Hanni", hi: "हन्नी", pt: "Hanni", ar: "هاني", th: "ฮันนี่", vi: "Hanni", ru: "Ханни" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "歌手/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Chanteuse/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "โวคอล/แดนเซอร์", vi: "Hát/Nhảy", ru: "Вокалист/Танцор" },
        birth: "2004.10.06",
        mbti: "INFP",
        zodiac: { ko: "천칭자리", en: "Libra", ja: "天秤座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ตุลย์", vi: "Thiên Bình", ru: "Весы" },
        height: "161.7cm",
        bloodType: "O",
        description: { ko: "베트남계 호주인. 독보적인 음색과 리듬감을 가졌으며, 무대 위 카리스마가 대단합니다.", en: "Vietnamese-Australian. Has a unique voice and rhythm, showing immense charisma on stage.", ja: "ベトナム系オーストラリア人。独特の音色とリズム感の持ち主で、ステージ上でのカリスマ性が凄まじいです。", zh: "越裔澳大利亚人。拥有独特的音色和节奏感，在舞台上极具魅力。", es: "Vietnamita-Australiana. Tiene una voz y ritmo únicos, mostrando un inmenso carisma en el escenario.", id: "Keturunan Vietnam-Australia. Memiliki suara dan ritme yang unik, menunjukkan karisma yang luar biasa di atas panggung.", fr: "Vietnamo-Australienne. Possède une voix et un rythme uniques, montrant un immense charisme sur scène.", hi: "वियतनामी-ऑस्ट्रेलियाई। एक अनूठी आवाज़ और लय है, मंच पर अपार करिश्मा दिखाती है。", pt: "Vietnamita-Australiana. Tem uma voz e ritmo únicos, mostrando imenso carisma no palco.", ar: "فيتنامية-أسترالية. تمتلك صوتًا وإيقاعًا فريدين، وتظهر كاريزما هائلة على المسرح.", th: "ชาวออสเตรเลียเชื้อสายเวียดนาม มีน้ำเสียงและจังหวะที่เป็นเอกลักษณ์ และมีเสน่ห์ดึงดูดอย่างมากบนเวที", vi: "Người Úc gốc Việt. Có chất giọng và nhịp điệu độc đáo, thể hiện sức hút to lớn trên sân khấu.", ru: "Вьетнамка австралийского происхождения. Обладает уникальным голосом и ритмом, демонстрируя невероятную харизму на сцене." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%98%EB%8B%88%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "danielle",
        name: { ko: "다니엘", en: "Danielle", ja: "ダニエル", zh: "Danielle (丹妮尔)", es: "Danielle", id: "Danielle", fr: "Danielle", hi: "डेनिएल", pt: "Danielle", ar: "دانييل", th: "แดเนียล", vi: "Danielle", ru: "Даниэль" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "歌手/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Chanteuse/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "โวคอล/แดนเซอร์", vi: "Hát/Nhảy", ru: "Вокалист/Танцор" },
        birth: "2005.04.11",
        mbti: "ENFP",
        zodiac: { ko: "양자리", en: "Aries", ja: "牡羊座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष", pt: "Áries", ar: "الحمل", th: "เมษ", vi: "Bạch Dương", ru: "Овен" },
        height: "165cm",
        bloodType: "AB",
        description: { ko: "햇살 같은 에너지를 가진 비타민 같은 멤버. 디즈니 공주 같은 비주얼로 유명합니다.", en: "A vitamin-like member with sunny energy. Famous for her Disney princess visuals.", ja: "太陽のようなエネルギーを持つビタミンのようなメンバー。ディズニープリンセスのようなビジュアルで有名です。", zh: "像阳光一样充满活力的维他命成员。以像迪士尼公主一样的外貌而闻名。", es: "Una miembro con energía soleada como una vitamina. Famosa por sus visuales de princesa de Disney.", id: "Anggota seperti vitamin dengan energi cerah. Terkenal karena visual putri Disney-nya.", fr: "Une membre comme une vitamine avec une énergie solaire. Célèbre pour ses visuels de princesse Disney.", hi: "सनी ऊर्जा वाले विटामिन जैसे सदस्य। अपने डिज़नी राजकुमारी दृश्यों के लिए प्रसिद्ध。", pt: "Uma integrante semelhante a uma vitamina com energia solar. Famosa por seus visuais de princesa da Disney.", ar: "عضوة تشبه الفيتامين بطاقة مشمسة. مشهورة بمظهرها الذي يشبه أميرات ديزني.", th: "สมาชิกที่เป็นเหมือนวิตามินที่มีพลังงานสดใส มีชื่อเสียงจากรูปร่างหน้าตาที่เหมือนเจ้าหญิงดิสนีย์", vi: "Thành viên như vitamin với năng lượng tỏa nắng. Nổi tiếng với vẻ đẹp như công chúa Disney.", ru: "Участница-витаминка с солнечной энергией. Известна своей внешностью диснеевской принцессы." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%EB%8B%A4%EB%8B%88%EC%97%98%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "haerin",
        name: { ko: "해린", en: "Haerin", ja: "ヘリン", zh: "Haerin (谐潾)", es: "Haerin", id: "Haerin", fr: "Haerin", hi: "हैरीन", pt: "Haerin", ar: "هيرين", th: "แฮริน", vi: "Haerin", ru: "Хэрин" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "歌手/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Chanteuse/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "โวคอล/แดนเซอร์", vi: "Hát/Nhảy", ru: "Вокалист/Танцор" },
        birth: "2006.05.15",
        mbti: "ISTP",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "牡牛座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ", pt: "Touro", ar: "الثور", th: "พฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "164.5cm",
        bloodType: "B",
        description: { ko: "고양이 상의 대표 주자. 엉뚱하고 조용한 매력이 있으며 무대에서는 폭발적인 댄스 실력을 보여줍니다.", en: "The representative of cat-like features. Has a quirky, quiet charm but explosive dance skills.", ja: "猫顔の代表格。風変わりで物静かな魅力があり、ステージでは爆発的なダンスの実力を見せます。", zh: "猫系长相的代表人物。有着古灵精怪且安静的魅力，但在舞台上却能展现出爆发性的舞蹈实力。", es: "La representante de los rasgos felinos. Tiene un encanto peculiar y tranquilo, pero habilidades de baile explosivas.", id: "Perwakilan dari fitur seperti kucing. Memiliki pesona yang unik dan pendiam, tetapi keterampilan menari yang eksplosif.", fr: "La représentante des traits de chat. A un charme excentrique et silencieux mais des compétences de danse explosives.", hi: "बिल्ली जैसी विशेषताओं का प्रतिनिधि। एक विचित्र, शांत आकर्षण लेकिन विस्फोटक नृत्य कौशल है。", pt: "A representante de traços felinos. Tem um charme peculiar e tranquilo, mas habilidades de dança explosivas.", ar: "الممثلة للملامح الشبيهة بالقطط. تتمتع بسحر غريب وهادئ ولكن بمهارات رقص متفجرة.", th: "ตัวแทนของใบหน้าที่เหมือนแมว มีเสน่ห์ที่เงียบขรึมและแปลกตา แต่มีทักษะการเต้นที่ระเบิดพลัง", vi: "Đại diện cho những đường nét giống mèo. Có nét quyến rũ kỳ quặc, trầm lặng nhưng kỹ năng nhảy bùng nổ.", ru: "Представительница кошачьих черт. Обладает причудливым, тихим обаянием, но взрывными танцевальными навыками." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%95%B4%EB%A6%B0%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      },
      {
        id: "hyein",
        name: { ko: "혜인", en: "Hyein", ja: "ヘイン", zh: "Hyein (惠仁)", es: "Hyein", id: "Hyein", fr: "Hyein", hi: "हेइन", pt: "Hyein", ar: "هيين", th: "ฮเยอิน", vi: "Hyein", ru: "Хеин" },
        role: { ko: "보컬/댄서", en: "Vocalist/Dancer", ja: "ボーカル/ダンサー", zh: "歌手/舞者", es: "Vocalista/Bailarina", id: "Vokalis/Penari", fr: "Chanteuse/Danseuse", hi: "वोकलिस्ट/डांसर", pt: "Vocalista/Dançarina", ar: "مغنية/راقصة", th: "โวคอล/แดนเซอร์", vi: "Hát/Nhảy", ru: "Вокалист/Танцор" },
        birth: "2008.04.21",
        mbti: "INFP",
        zodiac: { ko: "황소자리", en: "Taurus", ja: "牡牛座", zh: "金牛座", es: "Tauro", id: "Taurus", fr: "Taureau", hi: "वृषभ", pt: "Touro", ar: "الثور", th: "พฤษภ", vi: "Kim Ngưu", ru: "Телец" },
        height: "170cm",
        bloodType: "O",
        description: { ko: "팀의 막내지만 모델 같은 피지컬을 자랑합니다. 시크한 마스크와 성숙한 목소리가 매력 포인트입니다.", en: "The youngest but boasts model-like proportions. Her chic mask and mature voice are charming.", ja: "グループの末っ子ですが、モデルのような体型を誇ります。シックなマスクと成熟した声が魅力ポイントです。", zh: "虽然是队里的老幺，但拥有模特般的身材。高冷的面容和成熟的嗓音是她的魅力点。", es: "La más joven pero presume de proporciones de modelo. Su máscara chic y su voz madura son encantadoras.", id: "Termuda namun membanggakan proporsi seperti model. Topengnya yang apik dan suaranya yang dewasa sangat menawan.", fr: "La plus jeune mais se vante de proportions de mannequin. Son masque chic et sa voix mature sont charmants.", hi: "सबसे कम उम्र की लेकिन मॉडल जैसे अनुपात का दावा करती है। उसका ठाठ मुखौटा और परिपक्व आवाज़ आकर्षक हैं。", pt: "A mais jovem, mas possui proporções de modelo. Sua máscara chique e voz madura são encantadoras.", ar: "الأصغر لكنها تفتخر بنسب تشبه عارضات الأزياء. قناعها الأنيق وصوتها الناضج ساحران.", th: "น้องเล็กของวงแต่มีสัดส่วนที่เหมือนนางแบบ มีเสน่ห์ที่ใบหน้าสุดชิคและเสียงที่เป็นผู้ใหญ่", vi: "Trẻ tuổi nhất nhưng tự hào có tỷ lệ cơ thể như người mẫu. Khuôn mặt sang chảnh và giọng hát trưởng thành của cô ấy rất quyến rũ.", ru: "Самая младшая, но может похвастаться модельными пропорциями. Ее шикарная маска и зрелый голос очаровательны." },
        imageUrl: "https://tse1.mm.bing.net/th?q=%EB%89%B4%EC%A7%84%EC%8A%A4%20%ED%98%9C%EC%9D%B8%20%EC%A7%81%EC%BA%A0%20%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&c=7&rs=1&p=0"
      }
    ]
  },
  {
    id: "ive",
    name: { ko: "아이브", en: "IVE", ja: "アイヴ", zh: "IVE", es: "IVE", id: "IVE", fr: "IVE", hi: "IVE", pt: "IVE", ar: "آيف (IVE)", th: "ไอฟ์ (IVE)", vi: "IVE", ru: "IVE" },
    officialSite: "http://www.starship-ent.com/profile/musician/ive.php",
    company: "Starship",
    debut: "2021.12.01",
    fandom: { ko: "다이브 (DIVE)", en: "DIVE", ja: "ダイヴ (DIVE)", zh: "DIVE", es: "DIVE", id: "DIVE", fr: "DIVE", hi: "डाइव (DIVE)", pt: "DIVE", ar: "دايف (DIVE)", th: "ไดฟ์ (DIVE)", vi: "DIVE", ru: "DIVE" },
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
      en: "IVE is a 6-member girl group under Starship Entertainment. The name stands for 'I HAVE', reflecting their confidence in showing what they have.",
      ja: "IVE（アイヴ）はSTARSHIPエンターテインメント所属の6人組ガールズグループです。「I HAVE」の略で、自分たちが持っているものを堂々と見せるという抱負が込められています。",
      zh: "IVE 是 Starship 娱乐旗下的 6 人女子组合。名字是“I HAVE”的缩写，包含了她们堂堂正正地展现自己所拥有的一切的抱负。",
      es: "IVE es un grupo de chicas de 6 miembros bajo Starship Entertainment. El nombre significa 'I HAVE', reflejando su confianza en mostrar lo que tienen.",
      id: "IVE adalah grup idola wanita beranggotakan 6 orang di bawah naungan Starship Entertainment. Namanya merupakan singkatan dari 'I HAVE', yang mencerminkan kepercayaan diri mereka dalam menunjukkan apa yang mereka miliki.",
      fr: "IVE est un groupe de filles de 6 membres sous Starship Entertainment. Le nom signifie 'I HAVE', reflétant leur confiance à montrer ce qu'elles ont.",
      hi: "IVE स्टारशिप एंटरटेनमेंट के तहत 6-सदस्यीय गर्ल ग्रुप है। नाम का अर्थ है 'आई हैव', जो उनके पास जो कुछ भी है उसे दिखाने में उनके विश्वास को दर्शाता है。",
      pt: "IVE é um girl group de 6 membros da Starship Entertainment. O nome significa 'I HAVE', refletindo a sua confiança em mostrar o que têm.",
      ar: "آيف (IVE) هي فرقة فتيات مكونة من 6 عضوات تحت وكالة Starship Entertainment. الاسم يرمز إلى 'I HAVE'، مما يعكس ثقتهن في إظهار ما لديهن.",
      th: "IVE เป็นเกิร์ลกรุ๊ป 6 คนภายใต้สังกัด Starship Entertainment ชื่อนี้ย่อมาจาก 'I HAVE' ซึ่งสะท้อนถึงความมั่นใจในการแสดงสิ่งที่พวกเธอมี",
      vi: "IVE là nhóm nhạc nữ 6 thành viên trực thuộc Starship Entertainment. Tên nhóm là viết tắt của 'I HAVE', thể hiện sự tự tin trong việc cho thấy những gì họ có.",
      ru: "IVE — это женская группа из 6 участниц под крылом Starship Entertainment. Название расшифровывается как 'I HAVE', отражая их уверенность в том, что они могут показать то, что у них есть."
    },
    description: {
      ko: "주체적인 '자기애'를 노래하는 4세대 완성형 걸그룹, 눈부신 비주얼과 우아한 퍼포먼스를 자랑합니다.",
      en: "The complete 4th-gen girl group singing about independent 'self-love', boasting dazzling visuals and elegant performances.",
      ja: "主体的な「自己愛」を歌う第4世代の完成形ガールズグループ。眩しいビジュアルとエレガントなパフォーマンスを誇ります。",
      zh: "歌唱主导性“自爱”的第 4 代完成型女团，以耀眼的外貌和优雅的表演引以为傲。",
      es: "El grupo de chicas completo de la 4ta generación que canta sobre el 'amor propio' independiente, con visuales deslumbrantes y actuaciones elegantes.",
      id: "Grup wanita generasi ke-4 yang lengkap menyanyikan tentang 'cinta diri' yang independen, membanggakan visual yang mempesona dan pertunjukan yang elegan.",
      fr: "Le groupe de filles complet de la 4ème génération chantant sur l''amour-propre' indépendant, se vantant de visuels éblouissants et de performances élégantes.",
      hi: "स्वतंत्र 'आत्म-प्रेम' के बारे में गाने वाला पूरा 4th-जनरेशन गर्ल ग्रुप, जो चमकदार दृश्यों और सुरुचिपूर्ण प्रदर्शन का दावा करता है。",
      pt: "O girl group completo da 4ª geração a cantar sobre 'amor-próprio' independente, com visuais deslumbrantes e atuações elegantes.",
      ar: "فرقة الفتيات الكاملة من الجيل الرابع التي تغني عن 'حب الذات' المستقل، وتتفاخر بمرئيات مبهرة وعروض أنيقة.",
      th: "เกิร์ลกรุ๊ปเจน 4 ที่สมบูรณ์แบบซึ่งร้องเพลงเกี่ยวกับ 'ความรักตัวเอง' ที่เป็นอิสระ มีภาพลักษณ์ที่ตระการตาและการแสดงที่สง่างาม",
      vi: "Nhóm nhạc nữ thế hệ thứ 4 hoàn thiện hát về sự 'tự yêu bản thân' độc lập, tự hào với hình ảnh rực rỡ và những màn trình diễn thanh lịch.",
      ru: "Полностью сформированная женская группа 4-го поколения, поющая о независимой 'любви к себе', хвастающаяся ослепительными визуальными эффектами и элегантными выступлениями."
    },
    tmi: {
      ko: [
        "아이브 멤버들은 평균 키가 169cm로 매우 커서 '장신 그룹'으로 불립니다.",
        "장원영은 본인의 다리가 너무 길어서 가끔 사진 보정으로 다리 길이를 줄인다고 합니다."
      ],
      en: [
        "The members are very tall with an average height of 169cm.",
        "Jang Wonyoung sometimes shortens her legs in photos because they look too long."
      ],
      ja: [
        "IVEのメンバーは平均身長が169cmと非常に高く、「長身グループ」と呼ばれています。",
        "チャン・ウォニョンは足が長すぎるため、時々写真の補正で足の長さを短くしているそうです。"
      ],
      zh: [
        "IVE 成员们的平均身高为 169 厘米，非常高，被称为“长腿组合”。",
        "张员瑛的腿太长了，有时在修图时甚至需要把腿修短一点。"
      ],
      es: [
        "Las miembros son muy altas con una altura promedio de 169 cm.",
        "Jang Wonyoung a veces acorta sus piernas en las fotos porque se ven demasiado largas."
      ],
      id: [
        "Para anggota sangat tinggi dengan tinggi rata-rata 169cm.",
        "Jang Wonyoung kadang-kadang memendekkan kakinya di foto karena terlihat terlalu panjang."
      ],
      fr: [
        "Les membres sont très grandes avec une taille moyenne de 169 cm.",
        "Jang Wonyoung raccourcit parfois ses jambes sur les photos parce qu'elles ont l'air trop longues."
      ],
      hi: [
        "सदस्य 169 सेमी की औसत ऊंचाई के साथ बहुत लंबे हैं।",
        "जंग वोनयॉन्ग कभी-कभी तस्वीरों में अपने पैरों को छोटा कर लेती हैं क्योंकि वे बहुत लंबे लगते हैं।"
      ],
      pt: [
        "As integrantes são muito altas, com uma altura média de 169 cm.",
        "Jang Wonyoung às vezes encurta as pernas nas fotos porque parecem muito longas."
      ],
      ar: [
        "العضوات طويلات جدًا بمتوسط طول 169 سم.",
        "جانغ وونيونغ تقصر ساقيها أحيانًا في الصور لأنهما تبدوان طويلتين جدًا."
      ],
      th: [
        "สมาชิกในวงมีความสูงเฉลี่ย 169 ซม. ซึ่งถือว่าสูงมากจนได้รับฉายาว่า 'วงนางแบบ'",
        "จางวอนยองบางครั้งต้องแต่งรูปลดความยาวของขาตัวเอง เพราะขาของเธอยาวเกินไป"
      ],
      vi: [
        "Các thành viên rất cao với chiều cao trung bình là 169cm.",
        "Jang Wonyoung đôi khi thu ngắn đôi chân của mình trong ảnh vì chúng trông quá dài."
      ],
      ru: [
        "Участницы очень высокие, средний рост составляет 169 см.",
        "Чан Вонён иногда укорачивает ноги на фотографиях, потому что они кажутся слишком длинными."
      ]
    },
    news: [
      { title: { ko: "아이브, 두 번째 정규 앨범 발매 임박", en: "IVE to Release 2nd Full Album Soon", ja: "IVE、2ndフルアルバムの発売間近", zh: "IVE，第二张正规专辑即将发行", es: "IVE Lanzará Pronto su 2do Álbum Completo", id: "IVE Segera Rilis Full Album ke-2", fr: "IVE Sortira Bientôt son 2ème Album Complet", hi: "IVE जल्द ही दूसरा पूर्ण एल्बम जारी करेगा", pt: "IVE Lançará 2º Álbum Completo em Breve", ar: "آيف ستصدر الألبوم الكامل الثاني قريبًا", th: "IVE เตรียมปล่อยอัลบั้มเต็มชุดที่ 2 เร็วๆ นี้", vi: "IVE sắp phát hành Album phòng thu thứ 2", ru: "IVE скоро выпустит 2-й полноформатный альбом" }, date: "2026.03.05", summary: { ko: "아이브가 올 여름 정규 앨범으로 컴백을 예고하며 전 세계 팬들의 기대를 모으고 있습니다.", en: "IVE teased a summer comeback with a full album, gathering global fan anticipation.", ja: "IVEが今夏、フルアルバムでのカムバックを予告し、全世界のファンの期待を集めています。", zh: "IVE 预告今年夏天携正规专辑回归，令全球粉丝充满期待。", es: "IVE adelantó un regreso de verano con un álbum completo, reuniendo la anticipación global de los fans.", id: "IVE menggoda comeback musim panas dengan album penuh, mengumpulkan antisipasi penggemar global.", fr: "IVE a teasé un retour estival avec un album complet, rassemblant l'anticipation des fans mondiaux.", hi: "IVE ने एक पूर्ण एल्बम के साथ ग्रीष्मकालीन वापसी को छेड़ा, वैश्विक प्रशंसक प्रत्याशा एकत्र की。", pt: "O IVE sugeriu um comeback de verão com um álbum completo, reunindo a expectativa dos fãs globais.", ar: "ألمحت فرقة آيف إلى عودة صيفية بألبوم كامل، مما أثار ترقب المعجبين حول العالم.", th: "IVE แย้มการคัมแบ็กในช่วงฤดูร้อนด้วยอัลบั้มเต็ม ซึ่งรวบรวมความคาดหวังจากแฟนๆ ทั่วโลก", vi: "IVE đã tiết lộ màn trở lại vào mùa hè với một album đầy đủ, thu hút sự mong đợi của người hâm mộ toàn cầu.", ru: "IVE подразнили летним камбэком с полноформатным альбомом, собрав ожидания фанатов по всему миру." }, url: "#" }
    ],
    members: [
      { id: "anyujin", name: { ko: "안유진", en: "An Yujin", ja: "アン・ユジン", zh: "安俞真", es: "An Yujin", id: "An Yujin", fr: "An Yujin", hi: "एन युजिन", pt: "An Yujin", ar: "آن يوجين", th: "อัน ยูจิน", vi: "An Yujin", ru: "Ан Юджин" }, role: { ko: "리더/보컬", en: "Leader/Vocal", ja: "リーダー/ボーカル", zh: "队长/歌手", es: "Líder/Vocalista", id: "Pemimpin/Vokal", fr: "Leader/Chanteuse", hi: "लीडर/वोकलिस्ट", pt: "Líder/Vocalista", ar: "القائدة/مغنية", th: "ลีดเดอร์/โวคอล", vi: "Trưởng nhóm/Hát", ru: "Лидер/Вокал" }, birth: "2003.09.01", mbti: "ISTP", zodiac: { ko: "처녀자리", en: "Virgo", ja: "乙女座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "กันย์", vi: "Xử Nữ", ru: "Дева" }, height: "173cm", bloodType: "A", description: { ko: "예능 치트키와 카리스마 리더를 오가는 육각형 멤버입니다.", en: "An all-rounder alternating between variety genius and charismatic leader.", ja: "バラエティの天才とカリスマリーダーを行き来するオールラウンダーなメンバーです。", zh: "在综艺天才和充满魅力的队长之间自由切换的全能型成员。", es: "Una todoterreno que alterna entre el genio de las variedades y la líder carismática.", id: "Serba bisa yang bergantian antara jenius variety dan pemimpin yang karismatik.", fr: "Une touche-à-tout alternant entre génie des variétés et leader charismatique.", hi: "एक ऑल-राउंडर जो वैरायटी जीनियस और करिश्माई लीडर के बीच बारी-बारी से आती है。", pt: "Uma integrante versátil que alterna entre gênio de variedades e líder carismática.", ar: "عضوة شاملة تتناوب بين عبقرية البرامج المتنوعة والقائدة الكاريزمية.", th: "สมาชิกที่เก่งรอบด้าน สลับไปมาระหว่างอัจฉริยะด้านวาไรตี้และลีดเดอร์ผู้มีเสน่ห์", vi: "Một thành viên toàn năng luân phiên giữa thiên tài tạp kỹ và một nhà lãnh đạo đầy lôi cuốn.", ru: "Универсал, чередующийся между гением развлекательных шоу и харизматичным лидером." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+An+Yujin", socials: { instagram: "https://www.instagram.com/_yujin_an/" } },
      { id: "gaeul", name: { ko: "가을", en: "Gaeul", ja: "ガウル", zh: "秋天 (Gaeul)", es: "Gaeul", id: "Gaeul", fr: "Gaeul", hi: "गैल", pt: "Gaeul", ar: "غاول", th: "กาอึล", vi: "Gaeul", ru: "Гаыль" }, role: { ko: "래퍼", en: "Rapper", ja: "ラッパー", zh: "Rapper", es: "Rapera", id: "Rapper", fr: "Rappeuse", hi: "रैपर", pt: "Rapper", ar: "مغنية راب", th: "แร็ปเปอร์", vi: "Rapper", ru: "Рэпер" }, birth: "2002.09.24", mbti: "ISTJ", zodiac: { ko: "천칭자리", en: "Libra", ja: "天秤座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ตุลย์", vi: "Thiên Bình", ru: "Весы" }, height: "164cm", bloodType: "B", description: { ko: "팀의 맏언니이자 매력적인 랩 톤을 가진 멤버입니다.", en: "The oldest and a member with an attractive rap tone.", ja: "グループの最年長であり、魅力的なラップトーンを持つメンバーです。", zh: "队里的大姐，拥有充满魅力的说唱音色。", es: "La mayor y una miembro con un tono de rap atractivo.", id: "Anggota tertua dan anggota dengan nada rap yang menarik.", fr: "La plus âgée et une membre avec un ton de rap attrayant.", hi: "सबसे पुरानी और एक आकर्षक रैप टोन वाली सदस्य।", pt: "A mais velha e uma integrante com um tom de rap atraente.", ar: "الأكبر سنًا وعضوة تتمتع بنبرة راب جذابة.", th: "พี่ใหญ่ของวงและสมาชิกที่มีเสียงแร็ปที่มีเสน่ห์", vi: "Thành viên lớn tuổi nhất và có giọng rap cuốn hút.", ru: "Самая старшая участница с привлекательным тоном рэпа." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Gaeul", socials: { instagram: "https://www.instagram.com/gaeul_reall/" } },
      { id: "rei", name: { ko: "레이", en: "Rei", ja: "レイ", zh: "Rei (怜)", es: "Rei", id: "Rei", fr: "Rei", hi: "री", pt: "Rei", ar: "ري", th: "เรย์", vi: "Rei", ru: "Рэй" }, role: { ko: "래퍼", en: "Rapper", ja: "ラッパー", zh: "Rapper", es: "Rapera", id: "Rapper", fr: "Rappeuse", hi: "रैपर", pt: "Rapper", ar: "مغنية راب", th: "แร็ปเปอร์", vi: "Rapper", ru: "Рэпер" }, birth: "2004.02.03", mbti: "INFJ", zodiac: { ko: "물병자리", en: "Aquarius", ja: "水瓶座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "กุมภ์", vi: "Bảo Bình", ru: "Водолей" }, height: "169cm", bloodType: "A", description: { ko: "유니크한 감성과 랩 실력을 가진 일본인 멤버입니다.", en: "Japanese member with unique vibes and rap skills.", ja: "ユニークな感性とラップの実力を持つ日本人メンバーです。", zh: "拥有独特感性和说唱实力的日本成员。", es: "Miembro japonesa con vibraciones únicas y habilidades de rap.", id: "Anggota Jepang dengan getaran unik dan keterampilan rap.", fr: "Membre japonaise avec des ondes uniques et des compétences en rap.", hi: "अद्वितीय वाइब्स और रैप कौशल वाली जापानी सदस्य।", pt: "Integrante japonesa com vibrações únicas e habilidades de rap.", ar: "عضوة يابانية ذات مشاعر فريدة ومهارات في الراب.", th: "สมาชิกชาวญี่ปุ่นที่มีเสน่ห์อันเป็นเอกลักษณ์และทักษะการแร็ป", vi: "Thành viên người Nhật mang khí chất độc đáo và kỹ năng rap.", ru: "Японская участница с уникальным вайбом и навыками рэпа." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Rei", socials: { instagram: "https://www.instagram.com/reiny_heart/" } },
      { id: "jangwonyoung", name: { ko: "장원영", en: "Jang Wonyoung", ja: "チャン・ウォニョン", zh: "张员瑛", es: "Jang Wonyoung", id: "Jang Wonyoung", fr: "Jang Wonyoung", hi: "जंग वोनयॉन्ग", pt: "Jang Wonyoung", ar: "جانغ وونيونغ", th: "จาง วอนยอง", vi: "Jang Wonyoung", ru: "Чан Вонён" }, role: { ko: "보컬", en: "Vocal", ja: "ボーカル", zh: "歌手", es: "Vocalista", id: "Vokal", fr: "Chanteuse", hi: "वोकलिस्ट", pt: "Vocalista", ar: "مغنية", th: "โวคอล", vi: "Hát", ru: "Вокал" }, birth: "2004.08.31", mbti: "ENFP", zodiac: { ko: "처녀자리", en: "Virgo", ja: "乙女座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "กันย์", vi: "Xử Nữ", ru: "Дева" }, height: "173cm", bloodType: "O", description: { ko: "K-POP 4세대를 상징하는 워너비 아이콘이자 비주얼 센터입니다.", en: "The wannabe icon and visual center representing 4th-gen K-POP.", ja: "K-POP第4世代を象徴するワナビーアイコンであり、ビジュアルセンターです。", zh: "象征 K-POP 第 4 代的标志性人物和视觉中心。", es: "El ícono que todos quieren ser y el centro visual que representa a la 4ta generación del K-POP.", id: "Ikon dambaan dan pusat visual yang mewakili K-POP generasi ke-4.", fr: "L'icône que tout le monde veut être et le centre visuel représentant la 4ème génération de K-POP.", hi: "4th-जनरेशन K-POP का प्रतिनिधित्व करने वाली वानाबी आइकन और दृश्य केंद्र।", pt: "O ícone inspirador e o centro visual que representa o K-POP da 4ª geração.", ar: "الأيقونة التي يطمح الجميع لأن يكونوا مثلها والمركز البصري الذي يمثل الجيل الرابع من الكيبوب.", th: "ไอคอนที่ใครๆ ก็อยากเป็นและศูนย์กลางภาพลักษณ์ที่เป็นตัวแทนของ K-POP เจน 4", vi: "Biểu tượng thần tượng và trung tâm hình ảnh đại diện cho K-POP thế hệ thứ 4.", ru: "Икона для подражания и визуальный центр, представляющий 4-е поколение K-POP." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Jang+Wonyoung", socials: { instagram: "https://www.instagram.com/for_everyoung10/" } },
      { id: "liz", name: { ko: "리즈", en: "Liz", ja: "リズ", zh: "Liz (丽兹)", es: "Liz", id: "Liz", fr: "Liz", hi: "लिज़", pt: "Liz", ar: "ليز", th: "ลิซ", vi: "Liz", ru: "Лиз" }, role: { ko: "보컬", en: "Vocal", ja: "ボーカル", zh: "歌手", es: "Vocalista", id: "Vokal", fr: "Chanteuse", hi: "वोकलिस्ट", pt: "Vocalista", ar: "مغنية", th: "โวคอล", vi: "Hát", ru: "Вокал" }, birth: "2004.11.21", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio", ja: "蠍座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "พิจิก", vi: "Bọ Cạp", ru: "Скорпион" }, height: "170cm", bloodType: "AB", description: { ko: "맑은 보조개와 시원한 가창력을 가진 메인 보컬급 멤버입니다.", en: "A main vocal-tier member with clear dimples and powerful vocals.", ja: "綺麗なえくぼと爽快な歌唱力を持つメインボーカル級のメンバーです。", zh: "拥有清新酒窝和清爽唱功的主唱级成员。", es: "Una miembro de nivel vocal principal con hoyuelos claros y voces poderosas.", id: "Anggota tingkat vokal utama dengan lesung pipi yang jelas dan vokal yang kuat.", fr: "Une membre de niveau vocal principal avec des fossettes claires et une voix puissante.", hi: "स्पष्ट डिंपल और शक्तिशाली स्वरों वाली एक मुख्य मुखर-स्तरीय सदस्य।", pt: "Uma integrante de nível vocal principal com covinhas claras e vocais poderosos.", ar: "عضوة بمستوى المغنية الرئيسية مع غمازات واضحة وغناء قوي.", th: "สมาชิกที่มีระดับโวคอลหลักที่มีรอยยิ้มลักยิ้มที่สดใสและเสียงร้องที่ทรงพลัง", vi: "Thành viên có giọng hát cấp độ hát chính với lúm đồng tiền rõ nét và giọng hát nội lực.", ru: "Участница уровня главного вокалиста с четкими ямочками на щеках и мощным вокалом." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Liz", socials: { instagram: "https://www.instagram.com/liz.yeyo/" } },
      { id: "leeseo", name: { ko: "이서", en: "Leeseo", ja: "이소", zh: "李瑞", es: "Leeseo", id: "Leeseo", fr: "Leeseo", hi: "लीसो", pt: "Leeseo", ar: "ليسو", th: "อีซอ", vi: "Leeseo", ru: "Лисо" }, role: { ko: "보컬", en: "Vocal", ja: "ボーカル", zh: "歌手", es: "Vocalista", id: "Vokal", fr: "Chanteuse", hi: "वोकलिस्ट", pt: "Vocalista", ar: "مغنية", th: "โวคอล", vi: "Hát", ru: "Вокал" }, birth: "2007.02.21", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius", ja: "水瓶座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "กุมภ์", vi: "Bảo Bình", ru: "Водолей" }, height: "166cm", bloodType: "O", description: { ko: "나이답지 않은 무대 장악력을 보여주는 팀의 막내입니다.", en: "The youngest showing stage presence unbefitting her age.", ja: "年齢に似合わないステージ掌握力を見せるグループの末っ子です。", zh: "展现出与年龄不符的舞台掌控力的队内老幺。", es: "La más joven mostrando una presencia en el escenario que no corresponde a su edad.", id: "Yang termuda menunjukkan kehadiran panggung yang tidak sesuai dengan usianya.", fr: "La plus jeune montrant une présence sur scène qui ne correspond pas à son âge.", hi: "सबसे कम उम्र की अपनी उम्र के हिसाब से मंच पर उपस्थिति दिखाती है।", pt: "A mais jovem mostrando uma presença de palco incompatível com a sua idade.", ar: "الأصغر سنًا وتظهر حضورًا على المسرح لا يتناسب مع عمرها.", th: "น้องเล็กที่แสดงให้เห็นถึงการครอบงำบนเวทีที่ไม่สมกับอายุของเธอ", vi: "Thành viên nhỏ tuổi nhất thể hiện khả năng làm chủ sân khấu không phù hợp với lứa tuổi.", ru: "Самая младшая участница, демонстрирующая присутствие на сцене, не соответствующее ее возрасту." }, imageUrl: "https://tse1.mm.bing.net/th?q=IVE+Leeseo", socials: { instagram: "https://www.instagram.com/eeseoo_/" } }
    ]
  },
  {
    id: "aespa",
    name: { ko: "에스파", en: "aespa", ja: "エスパ", zh: "aespa", es: "aespa", id: "aespa", fr: "aespa", hi: "aespa", pt: "aespa", ar: "إيسبا (aespa)", th: "เอสป้า (aespa)", vi: "aespa", ru: "aespa" },
    officialSite: "https://aespa.com/",
    company: "SM Entertainment",
    debut: "2020.11.17",
    fandom: { ko: "마이 (MY)", en: "MY", ja: "マイ (MY)", zh: "MY", es: "MY", id: "MY", fr: "MY", hi: "MY", pt: "MY", ar: "ماي (MY)", th: "มาย (MY)", vi: "MY", ru: "MY" },
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
      en: "aespa is a 4-member girl group under SM Entertainment. They opened a new horizon for K-pop with their unique metaverse worldview.",
      ja: "aespa（エスパ）はSMエンターテインメント所属の4人組ガールズグループです。独創的なメタバースの世界観でK-POPの新たな地平を切り開きました。",
      zh: "aespa 是 SM 娱乐旗下的 4 人女子组合。凭借独特的元宇宙世界观开创了 K-POP 的新视野。",
      es: "aespa es un grupo de chicas de 4 miembros bajo SM Entertainment. Abrieron un nuevo horizonte para el K-pop con su visión del mundo del metaverso única.",
      id: "aespa adalah girl grup beranggotakan 4 orang di bawah SM Entertainment. Mereka membuka cakrawala baru untuk K-pop dengan pandangan dunia metaverse mereka yang unik.",
      fr: "aespa est un groupe de filles de 4 membres sous SM Entertainment. Elles ont ouvert un nouvel horizon pour la K-pop avec leur vision unique du monde du métavers.",
      hi: "aespa SM एंटरटेनमेंट के तहत 4-सदस्यीय गर्ल ग्रुप है। उन्होंने अपने अनोखे मेटावर्स विश्वदृष्टि के साथ के-पॉप के लिए एक नया क्षितिज खोला。",
      pt: "aespa é um girl group de 4 membros da SM Entertainment. Elas abriram um novo horizonte para o K-pop com a sua visão de mundo única do metaverso.",
      ar: "إيسبا (aespa) هي فرقة فتيات مكونة من 4 عضوات تحت وكالة SM Entertainment. لقد فتحن أفقًا جديدًا للكيبوب برؤيتهن الفريدة لعالم الميتافيرس.",
      th: "aespa เป็นเกิร์ลกรุ๊ป 4 คนภายใต้สังกัด SM Entertainment พวกเธอเปิดขอบฟ้าใหม่ให้กับ K-pop ด้วยโลกทัศน์ของเมตาเวิร์สที่ไม่เหมือนใคร",
      vi: "aespa là một nhóm nhạc nữ 4 thành viên trực thuộc SM Entertainment. Họ đã mở ra một chân trời mới cho K-pop với thế giới quan metaverse độc đáo của mình.",
      ru: "aespa — это женская группа из 4 участниц под крылом SM Entertainment. Они открыли новые горизонты для K-pop со своим уникальным мировоззрением метавселенной."
    },
    description: {
      ko: "메타버스 세계관의 선구자, 독보적인 컨셉과 압도적인 퍼포먼스를 자랑합니다.",
      en: "The pioneers of the metaverse concept, boasting dazzling visuals and elegant performances.",
      ja: "メタバース世界観の先駆者。圧倒的なパフォーマンスと独創的なコンセプトを誇ります。",
      zh: "元宇宙世界观的先驱，以独特概念和压倒性的表演引以为傲。",
      es: "Las pioneras del concepto del metaverso, presumiendo visuales deslumbrantes y actuaciones elegantes.",
      id: "Pelopor konsep metaverse, membanggakan visual yang mempesona dan pertunjukan yang elegan.",
      fr: "Les pionnières du concept de métavers, se vantant de visuels éblouissants et de performances élégantes.",
      hi: "मेटावर्स अवधारणा के अग्रदूत, जो चमकदार दृश्यों और सुरुचिपूर्ण प्रदर्शन का दावा करते हैं。",
      pt: "As pioneiras do conceito de metaverso, ostentando visuais deslumbrantes e performances elegantes.",
      ar: "رائدات مفهوم الميتافيرس، يفتخرن بمرئيات مبهرة وعروض أنيقة.",
      th: "ผู้บุกเบิกแนวคิดเมตาเวิร์ส มีภาพลักษณ์ที่น่าตื่นตาตื่นใจและการแสดงที่สง่างาม",
      vi: "Những người tiên phong của khái niệm metaverse, tự hào với hình ảnh rực rỡ và màn trình diễn thanh lịch.",
      ru: "Пионеры концепции метавселенной, хвастающиеся ослепительными визуальными эффектами и элегантными выступлениями."
    },
    tmi: {
      ko: [
        "멤버들은 서로의 아바타인 'ae-에스파'를 처음 봤을 때, 생각보다 너무 예뻐서 긴장했다고 합니다."
      ],
      en: [
        "When they first saw their 'ae' avatars, they were so pretty that the members felt pressured."
      ],
      ja: [
        "メンバーたちはお互いのアバターである「ae-aespa」を初めて見たとき、予想以上に可愛くて緊張したそうです。"
      ],
      zh: [
        "成员们第一次看到彼此的虚拟化身“ae-aespa”时，觉得比想象中更漂亮，甚至感到有些紧张。"
      ],
      es: [
        "Cuando vieron por primera vez sus avatares 'ae', eran tan bonitos que las miembros se sintieron presionadas."
      ],
      id: [
        "Saat mereka pertama kali melihat avatar 'ae' mereka, mereka sangat cantik sehingga para anggota merasa tertekan."
      ],
      fr: [
        "Quand elles ont vu leurs avatars 'ae' pour la première fois, ils étaient si jolis que les membres se sont senties sous pression."
      ],
      hi: [
        "जब उन्होंने पहली बार अपने 'ae' अवतारों को देखा, तो वे इतने सुंदर थे कि सदस्यों ने दबाव महसूस किया।"
      ],
      pt: [
        "Quando viram pela primeira vez os seus avatares 'ae', eram tão bonitos que as integrantes se sentiram pressionadas."
      ],
      ar: [
        "عندما رأوا تجسيدات 'ae' الخاصة بهم لأول مرة، كانوا جميلين لدرجة أن العضوات شعرن بالضغط."
      ],
      th: [
        "เมื่อพวกเธอเห็นอวตาร 'ae' ของพวกเธอครั้งแรก พวกมันสวยมากจนสมาชิกในวงรู้สึกกดดัน"
      ],
      vi: [
        "Khi lần đầu tiên nhìn thấy hình đại diện 'ae' của mình, chúng đẹp đến mức các thành viên cảm thấy áp lực."
      ],
      ru: [
        "Когда они впервые увидели свои аватары 'ae', они были такими красивыми, что участницы почувствовали давление."
      ]
    },
    news: [
      { title: { ko: "에스파, 'Supernova' 11주 연속 1위 대기록", en: "aespa's 'Supernova' Achieves 11 Consecutive Weeks at #1", ja: "aespa、「Supernova」11週連続1位の大記録", zh: "aespa《Supernova》达成连续11周第一的重大纪录", es: "'Supernova' de aespa Logra 11 Semanas Consecutivas en el #1", id: "'Supernova' aespa Raih 11 Minggu Berturut-turut di #1", fr: "'Supernova' d'aespa Atteint 11 Semaines Consécutives #1", hi: "aespa का 'Supernova' #1 पर लगातार 11 सप्ताह प्राप्त करता है", pt: "'Supernova' da aespa Alcança 11 Semanas Consecutivas em 1º Lugar", ar: "أغنية 'Supernova' لفرقة إيسبا تحقق 11 أسبوعًا متتاليًا في المركز الأول", th: "'Supernova' ของ aespa คว้าอันดับ 1 ติดต่อกัน 11 สัปดาห์", vi: "'Supernova' của aespa đạt 11 tuần liên tiếp ở vị trí số 1", ru: "Песня aespa 'Supernova' удерживает 1-е место 11 недель подряд" }, date: "2024.08.12", summary: { ko: "역대 최장 기간 1위 기록을 갱신하며 올해 최고의 히트곡으로 등극했습니다.", en: "Broke the record for the longest-running #1 on major charts.", ja: "歴代最長期間の1位記録を更新し、今年最高のヒット曲となりました。", zh: "刷新了主要榜单的最长连冠纪录，成为今年最火的流行歌曲。", es: "Rompió el récord del #1 de mayor duración en las listas principales.", id: "Memecahkan rekor untuk #1 terlama di tangga lagu utama.", fr: "A battu le record du #1 le plus long sur les principaux classements.", hi: "प्रमुख चार्ट पर सबसे लंबे समय तक चलने वाले #1 का रिकॉर्ड तोड़ा。", pt: "Quebrou o recorde de número 1 mais longo nas principais paradas.", ar: "حطمت الرقم القياسي لأطول مدة في المركز الأول على المخططات الرئيسية.", th: "ทำลายสถิติอันดับ 1 ที่ยาวนานที่สุดในชาร์ตหลัก", vi: "Phá vỡ kỷ lục bài hát đạt vị trí số 1 lâu nhất trên các bảng xếp hạng chính.", ru: "Побили рекорд по продолжительности пребывания на 1-м месте в главных чартах." }, url: "#" }
    ],
    members: [
      { id: "karina", name: { ko: "카리나", en: "Karina", ja: "カリナ", zh: "Karina (柳智敏)", es: "Karina", id: "Karina", fr: "Karina", hi: "करीना", pt: "Karina", ar: "كارينا", th: "คาริน่า", vi: "Karina", ru: "Карина" }, role: { ko: "리더/메인댄서/래퍼", en: "Leader/Main Dancer/Rapper", ja: "リーダー/メインダンサー/ラッパー", zh: "队长/主舞/Rapper", es: "Líder/Bailarina Principal/Rapera", id: "Pemimpin/Penari Utama/Rapper", fr: "Leader/Danseuse Principale/Rappeuse", hi: "लीडर/मुख्य डांसर/रैपर", pt: "Líder/Dançarina Principal/Rapper", ar: "القائدة/الراقصة الرئيسية/مغنية راب", th: "ลีดเดอร์/เมนแดนซ์/แร็ปเปอร์", vi: "Trưởng nhóm/Nhảy chính/Rapper", ru: "Лидер/Главный танцор/Рэпер" }, birth: "2000.04.11", mbti: "ENFP", zodiac: { ko: "양자리", en: "Aries", ja: "牡羊座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष", pt: "Áries", ar: "الحمل", th: "เมษ", vi: "Bạch Dương", ru: "Овен" }, height: "168cm", bloodType: "B", description: { ko: "AI보다 더 AI 같은 비주얼로 유명하며, 팀의 중심을 잡아주는 카리스마 리더입니다.", en: "Famous for her visuals that look more AI than AI itself.", ja: "AIよりもAIらしいビジュアルで有名で、グループの中心を担うカリスマリーダーです。", zh: "以比 AI 更像 AI 的惊艳外貌闻名，是稳定团队重心的充满魅力的队长。", es: "Famosa por sus visuales que parecen más de IA que de IA misma.", id: "Terkenal karena visualnya yang terlihat lebih AI dari AI itu sendiri.", fr: "Célèbre pour ses visuels qui ressemblent plus à l'IA qu'à l'IA elle-même.", hi: "अपने दृश्यों के लिए प्रसिद्ध जो AI से भी ज़्यादा AI लगते हैं。", pt: "Famosa pelos seus visuais que parecem mais IA do que a própria IA.", ar: "مشهورة بمرئياتها التي تبدو وكأنها ذكاء اصطناعي أكثر من الذكاء الاصطناعي نفسه.", th: "มีชื่อเสียงในด้านภาพลักษณ์ที่ดูเป็น AI มากกว่า AI เสียอีก เป็นลีดเดอร์ที่มีเสน่ห์ดึงดูดใจซึ่งเป็นศูนย์กลางของทีม", vi: "Nổi tiếng với vẻ ngoài trông còn giống AI hơn cả chính AI.", ru: "Известна своей внешностью, которая выглядит более как ИИ, чем сам ИИ." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Karina+High+Res+Photo", socials: { instagram: "https://www.instagram.com/katarinabluu/" } },
      { id: "winter", name: { ko: "윈터", en: "Winter", ja: "ウィンター", zh: "Winter (金旼炡)", es: "Winter", id: "Winter", fr: "Winter", hi: "विंटर", pt: "Winter", ar: "وينتر", th: "วินเทอร์", vi: "Winter", ru: "Винтер" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarina Principal", id: "Vokalis Utama/Penari Utama", fr: "Chanteuse Principale/Danseuse Principale", hi: "मुख्य वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarina Principal", ar: "المغنية الرئيسية/الراقصة القائدة", th: "เมนโวคอล/ลีดแดนซ์", vi: "Hát chính/Nhảy dẫn", ru: "Главный вокалист/Ведущий танцор" }, birth: "2001.01.01", mbti: "INTJ", zodiac: { ko: "염소자리", en: "Capricorn", ja: "山羊座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "มังกร", vi: "Ma Kết", ru: "Козерог" }, height: "163cm", bloodType: "A", description: { ko: "맑고 깨끗한 음색과 강력한 퍼포먼스를 겸비한 멤버입니다.", en: "A member with a clear, pure voice and powerful performance skills.", ja: "澄んだ綺麗な音色とパワフルなパフォーマンスを兼ね備えたメンバーです。", zh: "兼具清澈纯净的音色和强劲表演实力的成员。", es: "Una miembro con una voz clara y pura y habilidades de actuación poderosas.", id: "Anggota dengan suara yang jernih dan murni serta keterampilan pertunjukan yang kuat.", fr: "Une membre avec une voix claire et pure et de puissantes compétences de performance.", hi: "स्पष्ट, शुद्ध आवाज़ और शक्तिशाली प्रदर्शन कौशल वाली एक सदस्य。", pt: "Uma integrante com uma voz clara e pura e habilidades de performance poderosas.", ar: "عضوة بصوت نقي وصافي ومهارات أداء قوية.", th: "สมาชิกที่มีน้ำเสียงที่ชัดเจนและบริสุทธิ์พร้อมทักษะการแสดงที่ทรงพลัง", vi: "Thành viên có giọng hát trong trẻo, thuần khiết cùng kỹ năng biểu diễn mạnh mẽ.", ru: "Участница с чистым голосом и мощными навыками выступления." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Winter+High+Res+Photo", socials: { instagram: "https://www.instagram.com/imwinter/" } },
      { id: "giselle", name: { ko: "지젤", en: "Giselle", ja: "ジゼル", zh: "Giselle (内永枝利)", es: "Giselle", id: "Giselle", fr: "Giselle", hi: "गिसेल", pt: "Giselle", ar: "جيزيل", th: "จีเซล", vi: "Giselle", ru: "Жизель" }, role: { ko: "메인래퍼/서브보컬", en: "Main Rapper/Sub Vocalist", ja: "メインラッパー/サブボーカル", zh: "主 Rapper/副唱", es: "Rapera Principal/Sub Vocalista", id: "Rapper Utama/Sub Vokalis", fr: "Rappeuse Principale/Sub Chanteuse", hi: "मुख्य रैपर/सब वोकलिस्ट", pt: "Rapper Principal/Sub Vocalista", ar: "مغنية الراب الرئيسية/مغنية فرعية", th: "เมนแร็ปเปอร์/ซับโวคอล", vi: "Rapper chính/Hát phụ", ru: "Главный рэпер/Саб-вокалист" }, birth: "2000.10.30", mbti: "INFJ", zodiac: { ko: "전갈자리", en: "Scorpio", ja: "蠍座", zh: "天蝎座", es: "Escorpio", id: "Scorpio", fr: "Scorpion", hi: "वृश्चिक", pt: "Escorpião", ar: "العقرب", th: "พิจิก", vi: "Bọ Cạp", ru: "Скорпион" }, height: "164cm", bloodType: "O", description: { ko: "3개국어에 능통한 뇌섹녀이자 탄탄한 랩 실력을 가진 멤버입니다.", en: "A multilingual intellectual fluent in three languages.", ja: "3ヶ国語に堪能なインテリであり、確かなラップの実力を持つメンバーです。", zh: "精通三国语言的才女，同时拥有扎实的说唱实力。", es: "Una intelectual multilingüe que domina tres idiomas.", id: "Seorang intelektual multibahasa yang fasih dalam tiga bahasa.", fr: "Une intellectuelle multilingue parlant couramment trois langues.", hi: "तीन भाषाओं में धाराप्रवाह एक बहुभाषी बुद्धिजीवी。", pt: "Uma intelectual multilingue fluente em três línguas.", ar: "مثقفة متعددة اللغات تتقن ثلاث لغات.", th: "ปัญญาชนผู้เชี่ยวชาญหลายภาษา สามารถพูดได้ 3 ภาษาอย่างคล่องแคล่ว และมีทักษะการแร็ปที่แข็งแกร่ง", vi: "Trí thức đa ngôn ngữ thông thạo 3 thứ tiếng.", ru: "Многоязычная интеллектуалка, свободно владеющая тремя языками." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Giselle+High+Res+Photo", socials: { instagram: "https://www.instagram.com/aerichandesu/" } },
      { id: "ningning", name: { ko: "닝닝", en: "Ningning", ja: "ニンニン", zh: "Ningning (宁艺卓)", es: "Ningning", id: "Ningning", fr: "Ningning", hi: "निंगनिंग", pt: "Ningning", ar: "نينقنينق", th: "หนิงหนิง", vi: "Ningning", ru: "Ниннин" }, role: { ko: "메인보컬", en: "Main Vocalist", ja: "メインボーカル", zh: "主唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Chanteuse Principale", hi: "मुख्य वोकलिस्ट", pt: "Vocalista Principal", ar: "المغنية الرئيسية", th: "เมนโวคอล", vi: "Hát chính", ru: "Главный вокалист" }, birth: "2002.10.23", mbti: "INFP", zodiac: { ko: "천칭자리", en: "Libra", ja: "天秤座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ตุลย์", vi: "Thiên Bình", ru: "Весы" }, height: "161cm", bloodType: "O", description: { ko: "폭발적인 고음과 소울풀한 가창력을 자랑하는 팀의 막내입니다.", en: "The youngest member boasting explosive high notes.", ja: "爆発的な高音とソウルフルな歌唱力を誇るグループの末っ子です。", zh: "队内的老幺，以极具爆发力的高音和深情的唱功自豪。", es: "La miembro más joven presumiendo notas altas explosivas.", id: "Anggota termuda yang membanggakan nada tinggi eksplosif.", fr: "La plus jeune membre se vantant de notes aiguës explosives.", hi: "विस्फोटक उच्च स्वरों का दावा करने वाली सबसे कम उम्र की सदस्य。", pt: "A integrante mais jovem ostentando notas altas explosivas.", ar: "أصغر عضوة تفتخر بنوتات عالية متفجرة.", th: "น้องเล็กของวงที่มีเสียงสูงที่ทรงพลังและมีทักษะการร้องเพลงที่เต็มไปด้วยจิตวิญญาณ", vi: "Thành viên trẻ nhất tự hào với những nốt cao bùng nổ.", ru: "Самая младшая участница, хвастающаяся взрывными высокими нотами." }, imageUrl: "https://tse1.mm.bing.net/th?q=aespa+Ningning+High+Res+Photo", socials: { instagram: "https://www.instagram.com/imnotningning/" } }
    ]
  },
  {
    id: "bts",
    name: { ko: "방탄소년단", en: "BTS", ja: "BTS", zh: "防弹少年团", es: "BTS", id: "BTS", fr: "BTS", hi: "BTS", pt: "BTS", ar: "بي تي أس (BTS)", th: "บีทีเอส (BTS)", vi: "BTS", ru: "BTS" },
    company: "BIGHIT MUSIC",
    debut: "2013.06.13",
    fandom: { ko: "아미 (ARMY)", en: "ARMY", ja: "アーミー (ARMY)", zh: "ARMY", es: "ARMY", id: "ARMY", fr: "ARMY", hi: "आर्मी (ARMY)", pt: "ARMY", ar: "آرمي (ARMY)", th: "อาร์มี่ (ARMY)", vi: "ARMY", ru: "ARMY" },
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
      en: "BTS is a 7-member boy group. They became global pop icons beyond K-POP.",
      ja: "BTS（防弾少年団）は7人組のボーイズグループです。全世界にメッセージを発信し、ビルボードHOT100で1位を獲得するなど、グローバルポップのアイコンとなりました。",
      zh: "防弹少年团 (BTS) 是一支 7 人男子组合。他们不仅传达了具有全球意义的信息，还多次荣登 Billboard Hot 100 榜首，成为了全球流行音乐的象征。",
      es: "BTS es un grupo de chicos de 7 miembros. Se convirtieron en iconos del pop mundial más allá del K-POP.",
      id: "BTS adalah boy grup beranggotakan 7 orang. Mereka menjadi ikon pop global di luar K-POP.",
      fr: "BTS est un groupe de garçons de 7 membres. Ils sont devenus des icônes de la pop mondiale au-delà de la K-POP.",
      hi: "BTS 7-सदस्यीय बॉय ग्रुप है। वे के-पॉप से परे वैश्विक पॉप आइकन बन गए हैं。",
      pt: "BTS é um boy group de 7 membros. Eles tornaram-se ícones do pop global muito além do K-POP.",
      ar: "بي تي أس (BTS) هي فرقة فتيان مكونة من 7 أعضاء. لقد أصبحوا أيقونات بوب عالمية تتجاوز الكيبوب.",
      th: "BTS เป็นบอยกรุ๊ปที่มีสมาชิก 7 คน พวกเขากลายเป็นไอคอนป๊อประดับโลกที่เหนือกว่า K-POP",
      vi: "BTS là nhóm nhạc nam gồm 7 thành viên. Họ đã trở thành biểu tượng nhạc pop toàn cầu vượt xa K-POP.",
      ru: "BTS — это мужская группа из 7 участников. Они стали глобальными поп-иконами за пределами K-POP."
    },
    description: {
      ko: "21세기 팝 아이콘, 전 세계를 보랏빛으로 물들인 글로벌 슈퍼스타입니다.",
      en: "21st-century pop icons, global superstars who have dyed the world purple.",
      ja: "21世紀のポップアイコン。世界中を紫色に染めたグローバルスーパースターです。",
      zh: "21世纪的流行音乐标志，用紫色席卷全球的世界级超级巨星。",
      es: "Iconos del pop del siglo XXI, superestrellas mundiales que han teñido el mundo de púrpura.",
      id: "Ikon pop abad ke-21, superstar global yang telah mewarnai dunia menjadi ungu.",
      fr: "Icônes de la pop du 21e siècle, des superstars mondiales qui ont teint le monde en violet.",
      hi: "21वीं सदी के पॉप आइकन, वैश्विक सुपरस्टार जिन्होंने दुनिया को बैंगनी रंग में रंगा है。",
      pt: "Ícones pop do século 21, superestrelas globais que tingiram o mundo de roxo.",
      ar: "أيقونات البوب في القرن الحادي والعشرين، نجوم عالميون صبغوا العالم باللون الأرجواني.",
      th: "ไอคอนป๊อปแห่งศตวรรษที่ 21 ซูเปอร์สตาร์ระดับโลกที่แต่งแต้มโลกให้เป็นสีม่วง",
      vi: "Biểu tượng nhạc pop thế kỷ 21, siêu sao toàn cầu đã nhuộm tím thế giới.",
      ru: "Поп-иконы 21-го века, мировые суперзвезды, которые окрасили мир в фиолетовый цвет."
    },
    tmi: {
      ko: [ "진은 주방 가위로 본인의 앞머리를 직접 자르다가 '레전드 흑역사'를 만든 적이 있습니다." ],
      en: [ "Jin once tried to cut his own bangs with kitchen scissors and created a legendary fail." ],
      ja: [ "ジンはキッチンバサミで自分の前髪を直接切ろうとして「伝説の黒歴史」を作ったことがあります。" ],
      zh: [ "Jin 曾经尝试用厨房剪刀自己剪刘海，结果留下了一段“传奇黑历史”。" ],
      es: [ "Jin una vez trató de cortarse el flequillo con tijeras de cocina y creó un fallo legendario." ],
      id: [ "Jin pernah mencoba memotong poninya sendiri dengan gunting dapur dan menciptakan kegagalan yang legendaris." ],
      fr: [ "Jin a un jour essayé de se couper la frange avec des ciseaux de cuisine et a créé un raté légendaire." ],
      hi: [ "जिन ने एक बार किचन की कैंची से अपनी खुद की बैंग्स काटने की कोशिश की थी और एक लेजेंडरी फेल बनाया था।" ],
      pt: [ "O Jin uma vez tentou cortar a sua própria franja com uma tesoura de cozinha e criou um falhanço lendário." ],
      ar: [ "حاول جين ذات مرة قص غرته بمقص المطبخ وصنع فشلًا أسطوريًا." ],
      th: [ "จินเคยพยายามตัดผมหน้าม้าของตัวเองด้วยกรรไกรทำครัวและได้สร้างความผิดพลาดระดับตำนาน" ],
      vi: [ "Jin đã từng cố gắng tự cắt tóc mái bằng kéo nhà bếp và tạo ra một thất bại huyền thoại." ],
      ru: [ "Джин однажды попытался отрезать себе челку кухонными ножницами и совершил легендарный провал." ]
    },
    news: [
      { "title": { "ko": "BTS 전원 전역 완료, 2025년 완전체 활동 예고", "en": "All BTS Members Complete Military Service", "ja": "BTS全員除隊完了、2025年完全体での活動予告", "zh": "BTS 成员全部退伍，预告 2025 年以完整体活动", "es": "Todos los Miembros de BTS Completan el Servicio Militar", "id": "Semua Anggota BTS Menyelesaikan Wajib Militer", "fr": "Tous les Membres de BTS Terminent leur Service Militaire", "hi": "सभी BTS सदस्यों ने सैन्य सेवा पूरी की", "pt": "Todos os Membros do BTS Concluem o Serviço Militar", "ar": "جميع أعضاء BTS يكملون الخدمة العسكرية", "th": "สมาชิก BTS ทุกคนทำภารกิจทหารเสร็จสิ้น", "vi": "Tất cả các thành viên BTS hoàn thành nghĩa vụ quân sự", "ru": "Все участники BTS завершили военную службу" }, "date": "2025.06.13", "summary": { "ko": "방탄소년단 멤버들이 국방의 의무를 모두 마쳤습니다.", "en": "All BTS members have completed their military service.", "ja": "BTSのメンバーが全員国防の義務を終えました。", "zh": "防弹少年团的所有成员都已完成兵役。", "es": "Todos los miembros de BTS han completado su servicio militar.", "id": "Semua anggota BTS telah menyelesaikan wajib militer mereka.", "fr": "Tous les membres de BTS ont terminé leur service militaire.", "hi": "सभी BTS सदस्यों ने अपनी सैन्य सेवा पूरी कर ली है।", "pt": "Todos os membros do BTS concluíram o seu serviço militar.", "ar": "أكمل جميع أعضاء BTS خدمتهم العسكرية.", "th": "สมาชิก BTS ทุกคนทำภารกิจทหารเสร็จสิ้นแล้ว", "vi": "Tất cả các thành viên BTS đã hoàn thành nghĩa vụ quân sự của mình.", "ru": "Все участники BTS завершили свою военную службу." }, "url": "#" }
    ],
    members: [
      { id: "rm", name: { ko: "RM", en: "RM", ja: "RM", zh: "RM (金南俊)", es: "RM", id: "RM", fr: "RM", hi: "RM", pt: "RM", ar: "آر إم (RM)", th: "อาร์เอ็ม (RM)", vi: "RM", ru: "RM" }, role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper", ja: "リーダー/メインラッパー", zh: "队长/主 Rapper", es: "Líder/Rapero Principal", id: "Pemimpin/Rapper Utama", fr: "Leader/Rappeur Principal", hi: "लीडर/मुख्य रैपर", pt: "Líder/Rapper Principal", ar: "القائد/مغني الراب الرئيسي", th: "ลีดเดอร์/เมนแร็ปเปอร์", vi: "Trưởng nhóm/Rapper chính", ru: "Лидер/Главный рэпер" }, birth: "1994.09.12", mbti: "ENFP", zodiac: { ko: "처녀자리", en: "Virgo", ja: "乙女座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "กันย์", vi: "Xử Nữ", ru: "Дева" }, height: "181cm", bloodType: "A", description: { ko: "팀의 든든한 리더이자 뇌섹남.", en: "The reliable leader and intellectual pillar.", ja: "グループの頼もしいリーダーでありインテリ。", zh: "团队的坚强后盾，同时也是性感的智性男。", es: "El líder confiable y pilar intelectual.", id: "Pemimpin yang dapat diandalkan dan pilar intelektual.", fr: "Le leader fiable et pilier intellectuel.", hi: "विश्वसनीय लीडर और बौद्धिक स्तंभ।", pt: "O líder fiável e pilar intelectual.", ar: "القائد الموثوق والركيزة الفكرية.", th: "ผู้นำที่เชื่อถือได้และเสาหลักทางปัญญา", vi: "Người lãnh đạo đáng tin cậy và là trụ cột trí tuệ.", ru: "Надежный лидер и интеллектуальная опора." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+RM+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/rkive/" } },
      { id: "jin", name: { ko: "진", en: "Jin", ja: "ジン", zh: "Jin (金硕珍)", es: "Jin", id: "Jin", fr: "Jin", hi: "जिन", pt: "Jin", ar: "جين", th: "จิน", vi: "Jin", ru: "Джин" }, role: { ko: "서브보컬", en: "Sub Vocalist", ja: "サブボーカル", zh: "副唱", es: "Sub Vocalista", id: "Sub Vokalis", fr: "Sous-Chanteur", hi: "सब वोकलिस्ट", pt: "Sub Vocalista", ar: "مغني فرعي", th: "ซับโวคอล", vi: "Hát phụ", ru: "Саб-вокалист" }, birth: "1992.12.04", mbti: "INTP", zodiac: { ko: "사수자리", en: "Sagittarius", ja: "射手座", zh: "射手座", es: "Sagitario", id: "Sagittarius", fr: "Sagittaire", hi: "धनु", pt: "Sagitário", ar: "القوس", th: "ธนู", vi: "Nhân Mã", ru: "Стрелец" }, height: "179cm", bloodType: "O", description: { ko: "자타공인 '월드와이드 핸섬'.", en: "Self-proclaimed 'Worldwide Handsome'.", ja: "自他共に認める「ワールドワイドハンサム」。", zh: "公认的“Worldwide Handsome (全球大帅哥)”。", es: "El autoproclamado 'Worldwide Handsome'.", id: "Memproklamirkan diri sebagai 'Worldwide Handsome'.", fr: "L'autoproclamé 'Worldwide Handsome'.", hi: "स्व-घोषित 'वर्ल्डवाइड हैंडसम'。", pt: "O autoproclamado 'Worldwide Handsome'.", ar: "الوسيم العالمي المزعوم.", th: "ชายหนุ่มที่ประกาศตัวว่าเป็น 'Worldwide Handsome'", vi: "Tự xưng là 'Đẹp trai toàn cầu'.", ru: "Самопровозглашенный 'Всемирный красавчик'." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jin+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/jin/" } },
      { id: "suga", name: { ko: "슈가", en: "Suga", ja: "シュガ", zh: "Suga (闵玧其)", es: "Suga", id: "Suga", fr: "Suga", hi: "सुगा", pt: "Suga", ar: "شوقا", th: "ชูก้า", vi: "Suga", ru: "Шуга" }, role: { ko: "리드래퍼", en: "Lead Rapper", ja: "リードラッパー", zh: "领 Rapper", es: "Rapero Principal", id: "Rapper Utama", fr: "Rappeur Principal", hi: "लीड रैपर", pt: "Rapper Líder", ar: "مغني راب قائد", th: "ลีดแร็ปเปอร์", vi: "Rapper dẫn", ru: "Ведущий рэпер" }, birth: "1993.03.09", mbti: "ISTP", zodiac: { ko: "물고기자리", en: "Pisces", ja: "魚座", zh: "双鱼座", es: "Piscis", id: "Pisces", fr: "Poissons", hi: "मीन", pt: "Peixes", ar: "الحوت", th: "มีน", vi: "Song Ngư", ru: "Рыбы" }, height: "174cm", bloodType: "O", description: { ko: "천재적인 프로듀싱 능력의 소유자.", en: "Possesses genius producing skills.", ja: "天才的なプロデュース能力の持ち主。", zh: "拥有天才般音乐制作能力的创作者。", es: "Posee habilidades geniales de producción.", id: "Memiliki keterampilan memproduksi jenius.", fr: "Possède des compétences de production géniales.", hi: "प्रतिभाशाली निर्माण कौशल के धनी।", pt: "Possui habilidades geniais de produção.", ar: "يمتلك مهارات إنتاج عبقرية.", th: "ครอบครองทักษะการเป็นโปรดิวเซอร์ที่อัจฉริยะ", vi: "Sở hữu kỹ năng sản xuất thiên tài.", ru: "Обладает гениальными навыками продюсирования." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Suga+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/agustd/" } },
      { id: "j-hope", name: { ko: "제이홉", en: "J-Hope", ja: "ジェイホープ", zh: "J-Hope (郑号锡)", es: "J-Hope", id: "J-Hope", fr: "J-Hope", hi: "जे-होप", pt: "J-Hope", ar: "جيهوب", th: "เจโฮป", vi: "J-Hope", ru: "Джей-Хоуп" }, role: { ko: "메인댄서/래퍼", en: "Main Dancer/Rapper", ja: "メインダンサー/ラッパー", zh: "主舞/Rapper", es: "Bailarín Principal/Rapero", id: "Penari Utama/Rapper", fr: "Danseur Principal/Rappeur", hi: "मुख्य डांसर/रैपर", pt: "Dançarino Principal/Rapper", ar: "راقص رئيسي/مغني راب", th: "เมนแดนซ์/แร็ปเปอร์", vi: "Nhảy chính/Rapper", ru: "Главный танцор/Рэпер" }, birth: "1994.02.18", mbti: "INFJ", zodiac: { ko: "물병자리", en: "Aquarius", ja: "水瓶座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "กุมภ์", vi: "Bảo Bình", ru: "Водолей" }, height: "177cm", bloodType: "A", description: { ko: "팀의 안무 팀장이자 희망.", en: "The choreography leader and the 'Hope' of the group.", ja: "グループの振り付けチーム長であり希望。", zh: "团队的编舞队长，同时也是大家的“希望”。", es: "El líder de la coreografía y la 'Esperanza' del grupo.", id: "Pemimpin koreografi dan 'Harapan' grup.", fr: "Le chef de la chorégraphie et l''Espoir' du groupe.", hi: "कोरियोग्राफी लीडर और ग्रुप की 'उम्मीद'。", pt: "O líder da coreografia e a 'Esperança' do grupo.", ar: "قائد الكوريغرافيا و 'أمل' الفرقة.", th: "หัวหน้าฝ่ายออกแบบท่าเต้นและ 'ความหวัง' ของวง", vi: "Đội trưởng biên đạo và là niềm 'Hy vọng' của nhóm.", ru: "Лидер хореографии и 'Надежда' группы." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+J-Hope+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/uarmyhope/" } },
      { id: "jimin", name: { ko: "지민", en: "Jimin", ja: "ジミン", zh: "Jimin (朴智旻)", es: "Jimin", id: "Jimin", fr: "Jimin", hi: "जिमिन", pt: "Jimin", ar: "جيمين", th: "จีมิน", vi: "Jimin", ru: "Чимин" }, role: { ko: "메인댄서/리드보컬", en: "Main Dancer/Lead Vocalist", ja: "メインダンサー/リードボーカル", zh: "主舞/领唱", es: "Bailarín Principal/Vocalista Principal", id: "Penari Utama/Vokalis Utama", fr: "Danseur Principal/Chanteur Principal", hi: "मुख्य डांसर/लीड वोकलिस्ट", pt: "Dançarino Principal/Vocalista Líder", ar: "راقص رئيسي/مغني قائد", th: "เมนแดนซ์/ลีดโวคอล", vi: "Nhảy chính/Hát dẫn", ru: "Главный танцор/Ведущий вокалист" }, birth: "1995.10.13", mbti: "ESTP", zodiac: { ko: "천칭자리", en: "Libra", ja: "天秤座", zh: "天秤座", es: "Libra", id: "Libra", fr: "Balance", hi: "तुला", pt: "Libra", ar: "الميزان", th: "ตุลย์", vi: "Thiên Bình", ru: "Весы" }, height: "174cm", bloodType: "A", description: { ko: "매혹적인 음색과 예술적인 퍼포먼스.", en: "Enchanting vocals and artistic performance.", ja: "魅惑的な音色と芸術的なパフォーマンス。", zh: "拥有迷人音色和充满艺术气息的表演舞台。", es: "Voces encantadoras y actuación artística.", id: "Vokal yang mempesona dan pertunjukan artistik.", fr: "Des voix enchanteresses et une performance artistique.", hi: "मनमोहक स्वर और कलात्मक प्रदर्शन।", pt: "Vocais encantadores e performance artística.", ar: "غناء ساحر وأداء فني.", th: "เสียงร้องที่มีเสน่ห์และการแสดงที่มีศิลปะ", vi: "Giọng hát đầy mê hoặc và màn trình diễn đầy nghệ thuật.", ru: "Очаровательный вокал и артистичное исполнение." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jimin+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/j.m/" } },
      { id: "v", name: { ko: "뷔", en: "V", ja: "ヴィ", zh: "V (金泰亨)", es: "V", id: "V", fr: "V", hi: "वी", pt: "V", ar: "في (V)", th: "วี (V)", vi: "V", ru: "Ви" }, role: { ko: "서브보컬/리드댄서", en: "Sub Vocalist/Lead Dancer", ja: "サブボーカル/リードダンサー", zh: "副唱/领舞", es: "Sub Vocalista/Bailarín Principal", id: "Sub Vokalis/Penari Utama", fr: "Sous-Chanteur/Danseur Principal", hi: "सब वोकलिस्ट/लीड डांसर", pt: "Sub Vocalista/Dançarino Líder", ar: "مغني فرعي/راقص قائد", th: "ซับโวคอล/ลีดแดนซ์", vi: "Hát phụ/Nhảy dẫn", ru: "Саб-вокалист/Ведущий танцор" }, birth: "1995.12.30", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn", ja: "山羊座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "มังกร", vi: "Ma Kết", ru: "Козерог" }, height: "179cm", bloodType: "AB", description: { ko: "깊은 저음의 소울풀한 목소리와 CG 같은 비주얼.", en: "Deep soulful voice and CG-like visuals.", ja: "深い低音のソウルフルな声とCGのようなビジュアル。", zh: "深沉的灵魂嗓音以及犹如 CG 特效般的面容。", es: "Voz profunda y conmovedora y visuales como de CG.", id: "Suara penuh perasaan yang dalam dan visual seperti CG.", fr: "Voix profonde et pleine d'âme et visuels semblables à des CG.", hi: "गहरी भावपूर्ण आवाज़ और सीजी जैसे दृश्य।", pt: "Voz profunda e cheia de alma e visuais semelhantes a CG.", ar: "صوت عميق مفعم بالإحساس ومرئيات تشبه الرسوميات الحاسوبية.", th: "เสียงที่ลึกซึ้งและมีจิตวิญญาณ และภาพลักษณ์ที่เหมือน CG", vi: "Giọng hát trầm ấm đầy nội lực và hình ảnh như CG.", ru: "Глубокий проникновенный голос и внешность, похожая на компьютерную графику." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+V+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/thv/" } },
      { id: "jungkook", name: { ko: "정국", en: "Jungkook", ja: "ジョングク", zh: "Jungkook (田柾国)", es: "Jungkook", id: "Jungkook", fr: "Jungkook", hi: "जंगकुक", pt: "Jungkook", ar: "جونقكوك", th: "จองกุก", vi: "Jungkook", ru: "Чонгук" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarín Principal", id: "Vokalis Utama/Penari Utama", fr: "Chanteur Principal/Danseur Principal", hi: "मुख्य वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarino Líder", ar: "مغني رئيسي/راقص قائد", th: "เมนโวคอล/ลีดแดนซ์", vi: "Hát chính/Nhảy dẫn", ru: "Главный вокалист/Ведущий танцор" }, birth: "1997.09.01", mbti: "ISFP", zodiac: { ko: "처녀자리", en: "Virgo", ja: "乙女座", zh: "处女座", es: "Virgo", id: "Virgo", fr: "Vierge", hi: "कन्या", pt: "Virgem", ar: "العذراء", th: "กันย์", vi: "Xử Nữ", ru: "Дева" }, height: "179cm", bloodType: "A", description: { ko: "못하는 게 없는 '황금 막내'.", en: "The 'Golden Maknae' who can do everything.", ja: "何でもできる「黄金マンネ（末っ子）」。", zh: "无所不能的“黄金忙内”。", es: "El 'Maknae Dorado' que puede hacer todo.", id: "'Maknae Emas' yang bisa melakukan segalanya.", fr: "Le 'Maknae d'Or' qui peut tout faire.", hi: "'गोल्डन मकाने' जो सब कुछ कर सकता है।", pt: "O 'Maknae de Ouro' que consegue fazer tudo.", ar: "'الماكني الذهبي' الذي يمكنه فعل كل شيء.", th: "'มักเน่ทองคำ' ที่ทำได้ทุกอย่าง", vi: "'Út Vàng' có thể làm mọi thứ.", ru: "'Золотой макнэ', который умеет всё." }, imageUrl: "https://tse1.mm.bing.net/th?q=BTS+Jungkook+High+Resolution+Photo", socials: { instagram: "https://www.instagram.com/jungkook_bighitentertainment/" } }
    ]
  },
  {
    id: "blackpink",
    name: { ko: "블랙핑크", en: "BLACKPINK", ja: "BLACKPINK", zh: "BLACKPINK", es: "BLACKPINK", id: "BLACKPINK", fr: "BLACKPINK", hi: "BLACKPINK", pt: "BLACKPINK", ar: "بلاك بينك (BLACKPINK)", th: "แบล็กพิงก์ (BLACKPINK)", vi: "BLACKPINK", ru: "BLACKPINK" },
    officialSite: "https://www.blackpinkofficial.com/",
    company: "YG Entertainment",
    debut: "2016.08.08",
    fandom: { ko: "블링크 (BLINK)", en: "BLINK", ja: "ブリンク (BLINK)", zh: "BLINK", es: "BLINK", id: "BLINK", fr: "BLINK", hi: "ब्लिंक (BLINK)", pt: "BLINK", ar: "بلينك (BLINK)", th: "บลิ๊งก์ (BLINK)", vi: "BLINK", ru: "BLINK" },
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
      en: "BLACKPINK is a 4-member girl group under YG Entertainment. They are the most influential girl group in the world.",
      ja: "BLACKPINKはYGエンターテインメント所属の4人組ガールズグループです。世界で最も影響力のある女性グループとして位置づけられています。",
      zh: "BLACKPINK 是 YG 娱乐旗下的 4 人女子组合，目前被公认为全球最具影响力的女子组合之一。",
      es: "BLACKPINK es un grupo de chicas de 4 miembros bajo YG Entertainment. Son el grupo de chicas más influyente del mundo.",
      id: "BLACKPINK adalah grup wanita beranggotakan 4 orang di bawah YG Entertainment. Mereka adalah grup wanita paling berpengaruh di dunia.",
      fr: "BLACKPINK est un groupe de filles de 4 membres sous YG Entertainment. C'est le groupe de filles le plus influent au monde.",
      hi: "BLACKPINK YG एंटरटेनमेंट के तहत 4-सदस्यीय गर्ल ग्रुप है। वे दुनिया का सबसे प्रभावशाली गर्ल ग्रुप हैं。",
      pt: "BLACKPINK é um girl group de 4 membros da YG Entertainment. Elas são o girl group mais influente do mundo.",
      ar: "بلاك بينك (BLACKPINK) هي فرقة فتيات مكونة من 4 عضوات تحت وكالة YG Entertainment. إنها فرقة الفتيات الأكثر تأثيرًا في العالم.",
      th: "BLACKPINK เป็นเกิร์ลกรุ๊ป 4 คนภายใต้สังกัด YG Entertainment พวกเธอเป็นเกิร์ลกรุ๊ปที่ทรงอิทธิพลที่สุดในโลก",
      vi: "BLACKPINK là nhóm nhạc nữ 4 thành viên trực thuộc YG Entertainment. Họ là nhóm nhạc nữ có sức ảnh hưởng nhất trên thế giới.",
      ru: "BLACKPINK — это женская группа из 4 участниц под крылом YG Entertainment. Они являются самой влиятельной женской группой в мире."
    },
    description: {
      ko: "전 세계를 사로잡은 'Pink'와 'Black'의 조화, 글로벌 팝의 아이콘입니다.",
      en: "The perfect harmony of 'Pink' and 'Black' that captivated the world.",
      ja: "世界中を魅了した「Pink」と「Black」の調和。グローバルポップのアイコンです。",
      zh: "风靡全球的“粉色 (Pink)”与“黑色 (Black)”的完美融合，全球流行音乐的偶像。",
      es: "La armonía perfecta de 'Pink' y 'Black' que cautivó al mundo.",
      id: "Harmoni sempurna antara 'Pink' dan 'Black' yang memikat dunia.",
      fr: "L'harmonie parfaite de 'Pink' et 'Black' qui a captivé le monde.",
      hi: "'पिंक' और 'ब्लैक' का सही सामंजस्य जिसने दुनिया को मंत्रमुग्ध कर दिया。",
      pt: "A harmonia perfeita de 'Pink' e 'Black' que cativou o mundo.",
      ar: "التناغم المثالي بين 'الوردي' و 'الأسود' الذي أسر العالم.",
      th: "ความกลมกลืนที่สมบูรณ์แบบของ 'สีชมพู' และ 'สีดำ' ที่ดึงดูดใจคนทั่วโลก",
      vi: "Sự hòa quyện hoàn hảo giữa 'Hồng' và 'Đen' đã làm say đắm thế giới.",
      ru: "Идеальная гармония 'Pink' и 'Black', покорившая весь мир."
    },
    tmi: {
      ko: [ "멤버들은 식사 메뉴를 정할 때 결정 장애가 오면 사다리 타기나 룰렛 앱을 사용합니다." ],
      en: [ "They use a roulette app or ladder climbing game whenever they can't decide what to eat." ],
      ja: [ "メンバーたちは食事のメニューを決める時に迷うと、あみだくじやルーレットアプリを使います。" ],
      zh: [ "当成员们对吃什么犹豫不决时，经常会使用抽签或轮盘应用程序来决定。" ],
      es: [ "Usan una aplicación de ruleta o un juego de escalera siempre que no pueden decidir qué comer." ],
      id: [ "Mereka menggunakan aplikasi rolet atau permainan panjat tangga setiap kali mereka tidak bisa memutuskan apa yang akan dimakan." ],
      fr: [ "Elles utilisent une application de roulette ou un jeu d'échelle chaque fois qu'elles n'arrivent pas à décider quoi manger." ],
      hi: [ "जब भी वे यह तय नहीं कर पाती हैं कि क्या खाना है तो वे रूले ऐप या सीढ़ी चढ़ने वाले गेम का उपयोग करती हैं।" ],
      pt: [ "Elas usam uma aplicação de roleta ou um jogo de escada sempre que não conseguem decidir o que comer." ],
      ar: [ "يستخدمن تطبيق الروليت أو لعبة السلم كلما عجزن عن اتخاذ قرار بشأن ما يأكلنه." ],
      th: [ "พวกเธอใช้แอปพลิเคชั่นรูเล็ตหรือเกมบันไดงูทุกครั้งที่ไม่สามารถตัดสินใจได้ว่าจะกินอะไร" ],
      vi: [ "Họ sử dụng ứng dụng cò quay hoặc trò chơi leo thang mỗi khi không thể quyết định ăn gì." ],
      ru: [ "Они используют приложение-рулетку или игру 'лестница', когда не могут решить, что поесть." ]
    },
    news: [
      { title: { ko: "블랙핑크, 그룹 활동 전격 재계약 체결", en: "BLACKPINK Renews Contract", ja: "BLACKPINK、グループ活動の電撃再契約締結", zh: "BLACKPINK 全员续约团体活动", es: "BLACKPINK Renueva Contrato", id: "BLACKPINK Perbarui Kontrak", fr: "BLACKPINK Renouvelle son Contrat", hi: "BLACKPINK ने अनुबंध का नवीनीकरण किया", pt: "BLACKPINK Renova Contrato", ar: "بلاك بينك تجدد عقدها", th: "BLACKPINK ต่อสัญญาแล้ว", vi: "BLACKPINK gia hạn hợp đồng", ru: "BLACKPINK продлевают контракт" }, date: "2023.12.06", summary: { ko: "YG 엔터테인먼트와 그룹 활동 전속계약을 체결했습니다.", en: "Signed an exclusive contract with YG Entertainment.", ja: "YGエンターテインメントとグループ活動の専属契約を締結しました。", zh: "与 YG 娱乐正式签订了团体活动的专属合约。", es: "Firmó un contrato exclusivo con YG Entertainment.", id: "Menandatangani kontrak eksklusif dengan YG Entertainment.", fr: "A signé un contrat exclusif avec YG Entertainment.", hi: "YG एंटरटेनमेंट के साथ एक विशेष अनुबंध पर हस्ताक्षर किए。", pt: "Assinou um contrato exclusivo com a YG Entertainment.", ar: "وقعت عقدًا حصريًا مع وكالة YG Entertainment.", th: "เซ็นสัญญาพิเศษกับ YG Entertainment", vi: "Đã ký hợp đồng độc quyền với YG Entertainment.", ru: "Подписали эксклюзивный контракт с YG Entertainment." }, url: "#" }
    ],
    members: [
      { id: "jisoo", name: { ko: "지수", en: "Jisoo", ja: "ジス", zh: "Jisoo (金智秀)", es: "Jisoo", id: "Jisoo", fr: "Jisoo", hi: "जिसू", pt: "Jisoo", ar: "جيسو", th: "จีซู", vi: "Jisoo", ru: "Джису" }, role: { ko: "리드보컬", en: "Lead Vocalist", ja: "リードボーカル", zh: "领唱", es: "Vocalista Principal", id: "Vokalis Utama", fr: "Chanteuse Principale", hi: "लीड वोकलिस्ट", pt: "Vocalista Líder", ar: "مغنية قائدة", th: "ลีดโวคอล", vi: "Hát dẫn", ru: "Ведущий вокалист" }, birth: "1995.01.03", mbti: "ISTP", zodiac: { ko: "염소자리", en: "Capricorn", ja: "山羊座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "มังกร", vi: "Ma Kết", ru: "Козерог" }, height: "162cm", bloodType: "A", description: { ko: "팀의 맏언니이자 비주얼 센터.", en: "The oldest and visual center.", ja: "グループの最年長でありビジュアルセンター。", zh: "队内的大姐及视觉门面担当。", es: "La mayor y centro visual.", id: "Yang tertua dan pusat visual.", fr: "La plus âgée et le centre visuel.", hi: "सबसे पुरानी और दृश्य केंद्र。", pt: "A mais velha e centro visual.", ar: "الأكبر سنًا والمركز البصري.", th: "พี่ใหญ่และศูนย์กลางภาพลักษณ์", vi: "Thành viên lớn tuổi nhất và là trung tâm hình ảnh.", ru: "Самая старшая и визуальный центр." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jisoo+Official+Portrait", socials: { instagram: "https://www.instagram.com/sooyaaa__/" } },
      { id: "jennie", name: { ko: "제니", en: "Jennie", ja: "ジェニ", zh: "Jennie (金珍妮)", es: "Jennie", id: "Jennie", fr: "Jennie", hi: "जेनी", pt: "Jennie", ar: "جيني", th: "เจนนี่", vi: "Jennie", ru: "Дженни" }, role: { ko: "메인래퍼/리드보컬", en: "Main Rapper/Lead Vocalist", ja: "メインラッパー/リードボーカル", zh: "主 Rapper/领唱", es: "Rapera Principal/Vocalista Principal", id: "Rapper Utama/Vokalis Utama", fr: "Rappeuse Principale/Chanteuse Principale", hi: "मुख्य रैपर/लीड वोकलिस्ट", pt: "Rapper Principal/Vocalista Líder", ar: "مغنية راب رئيسية/مغنية قائدة", th: "เมนแร็ปเปอร์/ลีดโวคอล", vi: "Rapper chính/Hát dẫn", ru: "Главный рэпер/Ведущий вокалист" }, birth: "1996.01.16", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn", ja: "山羊座", zh: "摩羯座", es: "Capricornio", id: "Capricorn", fr: "Capricorne", hi: "मकर", pt: "Capricórnio", ar: "الجدي", th: "มังกร", vi: "Ma Kết", ru: "Козерог" }, height: "163cm", bloodType: "B", description: { ko: "팀의 메인 래퍼로 독보적인 아우라를 가졌습니다.", en: "The main rapper with a unique aura.", ja: "グループのメインラッパーで独創的なオーラを持っています。", zh: "队内的主 Rapper，拥有独一无二的气场。", es: "La rapera principal con un aura única.", id: "Rapper utama dengan aura yang unik.", fr: "La rappeuse principale avec une aura unique.", hi: "एक अद्वितीय आभा वाली मुख्य रैपर。", pt: "A rapper principal com uma aura única.", ar: "مغنية الراب الرئيسية ذات الهالة الفريدة.", th: "แร็ปเปอร์หลักที่มีออร่าอันเป็นเอกลักษณ์", vi: "Rapper chính có khí chất độc đáo.", ru: "Главный рэпер с уникальной аурой." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Jennie+Official+Portrait", socials: { instagram: "https://www.instagram.com/jennierubyjane/" } },
      { id: "lisa", name: { ko: "리사", en: "Lisa", ja: "リサ", zh: "Lisa (拉莉莎)", es: "Lisa", id: "Lisa", fr: "Lisa", hi: "लिसा", pt: "Lisa", ar: "ليسا", th: "ลิซ่า", vi: "Lisa", ru: "Лиса" }, role: { ko: "메인댄서/리드래퍼", en: "Main Dancer/Lead Rapper", ja: "メインダンサー/リードラッパー", zh: "主舞/领 Rapper", es: "Bailarina Principal/Rapera Principal", id: "Penari Utama/Rapper Utama", fr: "Danseuse Principale/Rappeuse Principale", hi: "मुख्य डांसर/लीड रैपर", pt: "Dançarina Principal/Rapper Líder", ar: "راقصة رئيسية/مغنية راب قائدة", th: "เมนแดนซ์/ลีดแร็ปเปอร์", vi: "Nhảy chính/Rapper dẫn", ru: "Главный танцор/Ведущий рэпер" }, birth: "1997.03.27", mbti: "ESFJ", zodiac: { ko: "양자리", en: "Aries", ja: "牡羊座", zh: "白羊座", es: "Aries", id: "Aries", fr: "Bélier", hi: "मेष", pt: "Áries", ar: "الحمل", th: "เมษ", vi: "Bạch Dương", ru: "Овен" }, height: "167cm", bloodType: "O", description: { ko: "압도적인 춤 실력과 비율을 가진 팀의 메인 댄서.", en: "The main dancer with overwhelming dance skills.", ja: "圧倒的なダンスの実力とスタイルを持つグループのメインダンサー。", zh: "拥有惊人舞蹈实力和极佳身材比例的主舞担当。", es: "La bailarina principal con habilidades de baile abrumadoras.", id: "Penari utama dengan keterampilan menari yang luar biasa.", fr: "La danseuse principale avec des compétences de danse écrasantes.", hi: "अत्यधिक नृत्य कौशल वाली मुख्य डांसर。", pt: "A dançarina principal com habilidades de dança esmagadoras.", ar: "الراقصة الرئيسية بمهارات رقص ساحقة.", th: "นักเต้นหลักที่มีทักษะการเต้นที่ยอดเยี่ยม", vi: "Vũ công chính với kỹ năng nhảy tuyệt đỉnh.", ru: "Главный танцор с потрясающими танцевальными навыками." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Lisa+Official+Portrait", socials: { instagram: "https://www.instagram.com/lalalalisa_m/" } },
      { id: "rose", name: { ko: "로제", en: "Rosé", ja: "ロゼ", zh: "Rosé (朴彩英)", es: "Rosé", id: "Rosé", fr: "Rosé", hi: "रोज़े", pt: "Rosé", ar: "روزي", th: "โรเซ่", vi: "Rosé", ru: "Розэ" }, role: { ko: "메인보컬/리드댄서", en: "Main Vocalist/Lead Dancer", ja: "メインボーカル/リードダンサー", zh: "主唱/领舞", es: "Vocalista Principal/Bailarina Principal", id: "Vokalis Utama/Penari Utama", fr: "Chanteuse Principale/Danseuse Principale", hi: "मुख्य वोकलिस्ट/लीड डांसर", pt: "Vocalista Principal/Dançarina Líder", ar: "مغنية رئيسية/راقصة قائدة", th: "เมนโวคอล/ลีดแดนซ์", vi: "Hát chính/Nhảy dẫn", ru: "Главный вокалист/Ведущий танцор" }, birth: "1997.02.11", mbti: "ENFP", zodiac: { ko: "물병자리", en: "Aquarius", ja: "水瓶座", zh: "水瓶座", es: "Acuario", id: "Aquarius", fr: "Verseau", hi: "कुंभ", pt: "Aquário", ar: "الدلو", th: "กุมภ์", vi: "Bảo Bình", ru: "Водолей" }, height: "168cm", bloodType: "B", description: { ko: "유니크한 음색을 가진 메인 보컬.", en: "The main vocalist with a unique tone.", ja: "ユニークな音色を持つメインボーカル。", zh: "拥有独特音色的主唱成员。", es: "La vocalista principal con un tono único.", id: "Vokalis utama dengan nada yang unik.", fr: "La chanteuse principale avec un ton unique.", hi: "एक अद्वितीय स्वर वाली मुख्य वोकलिस्ट。", pt: "A vocalista principal com um tom único.", ar: "المغنية الرئيسية ذات نبرة الصوت الفريدة.", th: "นักร้องหลักที่มีน้ำเสียงที่เป็นเอกลักษณ์", vi: "Giọng hát chính với âm sắc độc đáo.", ru: "Главный вокалист с уникальным тоном." }, imageUrl: "https://tse1.mm.bing.net/th?q=BLACKPINK+Rose+Official+Portrait", socials: { instagram: "https://www.instagram.com/roses_are_rosie/" } }
    ]
  },
  {
    id: "lesserafim",
    name: { ko: "르세라핌", en: "LE SSERAFIM", ja: "ル・セラフィム", zh: "LE SSERAFIM", es: "LE SSERAFIM", id: "LE SSERAFIM", fr: "LE SSERAFIM", hi: "ले सेराफिम", pt: "LE SSERAFIM", ar: "لو سيرافيم", th: "เล เซราฟิม", vi: "LE SSERAFIM", ru: "LE SSERAFIM" },
    officialSite: "https://lesserafim.com/",
    company: "HYBE / Source Music",
    debut: "2022.05.02",
    fandom: { ko: "피어나 (FEARNOT)", en: "FEARNOT", ja: "フィオナ (FEARNOT)", zh: "FEARNOT", es: "FEARNOT", id: "FEARNOT", fr: "FEARNOT", hi: "FEARNOT", pt: "FEARNOT", ar: "فيرنوت (FEARNOT)", th: "FEARNOT", vi: "FEARNOT", ru: "FEARNOT" },
    accentColor: "#c8a97e",
    imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/le_sserafim/", twitter: "https://twitter.com/le_sserafim", youtube: "https://www.youtube.com/@LESSERAFIM_official" },
    wiki: { ko: "르세라핌(LE SSERAFIM)은 HYBE 산하 쏘스뮤직 소속 5인조 걸그룹입니다. 그룹명은 'I AM FEARLESS'의 애너그램으로, 두려움 없이 나아가겠다는 의지를 담고 있습니다.", en: "LE SSERAFIM is a 5-member girl group under HYBE's Source Music. The name is an anagram of 'I AM FEARLESS'." },
    description: { ko: "두려움 없이 무대를 장악하는 4세대 대표 걸그룹. 파워풀한 퍼포먼스와 강렬한 비주얼로 전 세계를 사로잡았습니다.", en: "The defining 4th-gen girl group that dominates stages fearlessly with powerful performances and intense visuals." },
    tmi: {
      ko: [
        "그룹명 LE SSERAFIM은 'I AM FEARLESS'의 애너그램으로, 멤버들이 직접 그 의미를 고안했습니다.",
        "카즈하는 데뷔 전 일본에서 프로 발레리나로 활동했으며, 이 배경이 우아한 무대 퍼포먼스에 큰 영향을 줬습니다.",
        "사쿠라는 IZ*ONE 출신으로, 두 번의 걸그룹 데뷔라는 독특한 이력을 갖고 있습니다.",
        "멤버들은 연습생 시절 서로 '언제쯤 데뷔할 수 있을까'라는 불안을 나눴다고 합니다."
      ],
      en: [
        "The name LE SSERAFIM is an anagram of 'I AM FEARLESS', a meaning the members personally devised.",
        "Kazuha was a professional ballerina in Japan before her K-pop debut, which greatly influences her elegant stage performances.",
        "Sakura is a former IZ*ONE member, making her K-pop journey uniquely spanning two successful girl groups.",
        "During trainee days, members shared their anxieties about when they would finally debut."
      ]
    },
    news: [
      { title: { ko: "르세라핌, 글로벌 투어 성료", en: "LE SSERAFIM Completes Global Tour" }, date: "2025.12.01", summary: { ko: "르세라핌이 아시아·북미·유럽을 아우르는 대규모 월드투어를 성황리에 마쳤습니다.", en: "LE SSERAFIM successfully completed a large-scale world tour spanning Asia, North America, and Europe." }, url: "#" }
    ],
    members: [
      { id: "chaewon", name: { ko: "김채원", en: "Kim Chaewon", ja: "キム・チェウォン", zh: "金彩源" }, role: { ko: "리더/메인보컬", en: "Leader/Main Vocalist" }, birth: "2000.08.05", mbti: "INFJ", zodiac: { ko: "사자자리", en: "Leo" }, height: "163cm", bloodType: "A", description: { ko: "IZ*ONE 출신의 리더로, 섬세한 감성과 강한 리더십을 겸비했습니다.", en: "Former IZ*ONE member and leader with delicate emotion and strong leadership." }, imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kim+Chaewon+%EA%B9%80%EC%B1%84%EC%9B%90+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/chaewo.n/" } },
      { id: "sakura", name: { ko: "사쿠라", en: "Sakura", ja: "宮脇咲良", zh: "宫胁咲良" }, role: { ko: "보컬", en: "Vocalist" }, birth: "1998.03.19", mbti: "ISTP", zodiac: { ko: "물고기자리", en: "Pisces" }, height: "164cm", bloodType: "AB", description: { ko: "HKT48·IZ*ONE를 거쳐 르세라핌까지, 독보적인 K-팝·J-팝 커리어를 보유한 멤버입니다.", en: "From HKT48 to IZ*ONE to LE SSERAFIM, she has an unrivaled cross-genre idol career." }, imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Sakura+%EC%82%AC%EC%BF%A0%EB%9D%BC+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/39saku_chan/" } },
      { id: "yunjin", name: { ko: "허윤진", en: "Huh Yunjin", ja: "ホ・ユンジン", zh: "许允祯" }, role: { ko: "리드보컬/리드댄서", en: "Lead Vocalist/Lead Dancer" }, birth: "2001.10.08", mbti: "ENFJ", zodiac: { ko: "천칭자리", en: "Libra" }, height: "167cm", bloodType: "A", description: { ko: "미국에서 성장한 글로벌 감성을 가진 솔로 싱어송라이터이자 멤버입니다.", en: "A solo singer-songwriter raised in the US with a global sensibility." }, imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Huh+Yunjin+%ED%97%88%EC%9C%A4%EC%A7%84+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/yunjin_huh/" } },
      { id: "kazuha", name: { ko: "카즈하", en: "Kazuha", ja: "中村羽咲", zh: "中村羽咲" }, role: { ko: "댄서/보컬", en: "Dancer/Vocalist" }, birth: "2003.08.09", mbti: "ISFP", zodiac: { ko: "사자자리", en: "Leo" }, height: "170cm", bloodType: "O", description: { ko: "일본 발레리나 출신으로, 우아한 발레 무브먼트를 케이팝 퍼포먼스에 접목한 독보적인 댄서입니다.", en: "A former Japanese professional ballerina who uniquely fuses elegant ballet movement into K-pop performances." }, imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Kazuha+%EC%B9%B4%EC%A6%88%ED%95%98+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/kazuha.official_/" } },
      { id: "eunchae", name: { ko: "홍은채", en: "Hong Eunchae", ja: "ホン・ウンチェ", zh: "洪恩彩" }, role: { ko: "막내/보컬", en: "Maknae/Vocalist" }, birth: "2004.11.10", mbti: "ISFP", zodiac: { ko: "전갈자리", en: "Scorpio" }, height: "163cm", bloodType: "O", description: { ko: "막내지만 무대에서는 언니들 못지않은 존재감을 뿜어내는 팀의 에너지 충전기입니다.", en: "The youngest but packs just as much stage presence as her unnies — the team's energy charger." }, imageUrl: "https://tse1.mm.bing.net/th?q=LE+SSERAFIM+Hong+Eunchae+%ED%99%8D%EC%9D%80%EC%B1%84+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/eunchae.official_/" } }
    ]
  },
  {
    id: "gidle",
    name: { ko: "(여자)아이들", en: "(G)I-DLE", ja: "(G)I-DLE", zh: "(G)I-DLE", es: "(G)I-DLE", id: "(G)I-DLE", fr: "(G)I-DLE", hi: "(G)I-DLE", pt: "(G)I-DLE", ar: "(G)I-DLE", th: "(G)I-DLE", vi: "(G)I-DLE", ru: "(G)I-DLE" },
    officialSite: "https://cube-gidle.com/",
    company: "Cube Entertainment",
    debut: "2018.05.02",
    fandom: { ko: "네버랜드 (NEVERLAND)", en: "NEVERLAND", ja: "ネバーランド", zh: "NEVERLAND", es: "NEVERLAND", id: "NEVERLAND", fr: "NEVERLAND", hi: "नेवरलैंड", pt: "NEVERLAND", ar: "نيفرلاند", th: "NEVERLAND", vi: "NEVERLAND", ru: "NEVERLAND" },
    accentColor: "#9c59d1",
    imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+group+official+photo+2024&w=600&h=600&rs=1",
    socials: { instagram: "https://www.instagram.com/official_g_i_dle/", twitter: "https://twitter.com/G_I_DLE", youtube: "https://www.youtube.com/@GIDLE" },
    wiki: { ko: "(여자)아이들은 큐브 엔터테인먼트 소속의 5인조 걸그룹입니다. 멤버 소연이 직접 작곡·작사에 참여하는 자체 제작 걸그룹으로, 강렬한 콘셉트와 높은 음악적 완성도를 자랑합니다.", en: "(G)I-DLE is a 5-member self-producing girl group under Cube Entertainment, where member Soyeon leads production." },
    description: { ko: "소연이 직접 곡을 쓰고 이끄는 자체 제작 걸그룹. 강렬하고 실험적인 음악으로 독보적인 위치를 굳혔습니다.", en: "A self-producing girl group led by Soyeon's songwriting with intense, experimental music." },
    tmi: {
      ko: [
        "소연은 YG 연습생 출신으로, JYP·YG·큐브를 거치는 특이한 이력을 갖고 있습니다.",
        "민니는 태국 유명 가수의 딸로, 태국에서 이미 연예인 집안 출신으로 알려져 있습니다.",
        "슈화는 대만 출신으로, 처음에는 한국어를 전혀 몰랐지만 연습생 기간에 빠르게 습득했습니다.",
        "멤버들은 컴백할 때마다 소연이 새로운 장르에 도전하는 것을 보며 '이번엔 또 뭐지?'라며 기대한다고 합니다."
      ],
      en: [
        "Soyeon is a former YG trainee who uniquely passed through JYP, YG, and Cube before debuting.",
        "Minnie is the daughter of a famous Thai singer, making her from an entertainment family in Thailand.",
        "Shuhua is from Taiwan and initially knew no Korean at all, but picked it up rapidly during her trainee period.",
        "Members say they always look forward to comebacks thinking 'what genre will Soyeon try this time?'"
      ]
    },
    news: [
      { title: { ko: "(여자)아이들, 5주년 단독 콘서트 성료", en: "(G)I-DLE Completes 5th Anniversary Concert" }, date: "2023.05.02", summary: { ko: "(여자)아이들이 데뷔 5주년을 기념한 단독 콘서트를 성황리에 마쳤습니다.", en: "(G)I-DLE successfully held their 5th anniversary solo concert." }, url: "#" }
    ],
    members: [
      { id: "miyeon", name: { ko: "미연", en: "Miyeon", ja: "ミヨン", zh: "米延" }, role: { ko: "메인보컬", en: "Main Vocalist" }, birth: "1997.01.31", mbti: "INFP", zodiac: { ko: "물병자리", en: "Aquarius" }, height: "163cm", bloodType: "O", description: { ko: "순수하고 맑은 보이스로 팀의 감성을 책임지는 메인 보컬입니다.", en: "The main vocalist responsible for the team's emotional touch with a pure, clear voice." }, imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Miyeon+%EB%AF%B8%EC%97%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/miyeon__dlwlrma/" } },
      { id: "minnie", name: { ko: "민니", en: "Minnie", ja: "ミンニ", zh: "敏妮" }, role: { ko: "리드보컬", en: "Lead Vocalist" }, birth: "1997.10.23", mbti: "ENFP", zodiac: { ko: "천칭자리", en: "Libra" }, height: "163cm", bloodType: "B", description: { ko: "태국 출신의 리드 보컬로, 뛰어난 어학 실력과 감성적인 무대를 선보입니다.", en: "Thai lead vocalist with outstanding linguistic ability and emotional stage presence." }, imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Minnie+%EB%AF%BC%EB%8B%88+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/minniecandy1023/" } },
      { id: "soyeon", name: { ko: "소연", en: "Soyeon", ja: "ソヨン", zh: "素妍" }, role: { ko: "리더/메인래퍼", en: "Leader/Main Rapper" }, birth: "1998.08.26", mbti: "ENTJ", zodiac: { ko: "처녀자리", en: "Virgo" }, height: "158cm", bloodType: "O", description: { ko: "직접 작사·작곡·프로듀싱까지 맡는 천재 래퍼이자 팀의 핵심 크리에이터입니다.", en: "A genius rapper who personally handles lyrics, composition, and producing — the team's creative core." }, imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Soyeon+%EC%86%8C%EC%97%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/soyeon_dlwlrma/" } },
      { id: "yuqi", name: { ko: "우기", en: "Yuqi", ja: "ウギ", zh: "宋雨琦" }, role: { ko: "리드보컬/댄서", en: "Lead Vocalist/Dancer" }, birth: "1999.09.23", mbti: "ESTP", zodiac: { ko: "천칭자리", en: "Libra" }, height: "163cm", bloodType: "O", description: { ko: "중국 출신으로 솔직 담백한 성격과 폭발적인 에너지로 멤버들의 시선을 끄는 팀의 분위기 메이커입니다.", en: "Chinese member whose frank personality and explosive energy makes her the team's mood maker." }, imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Yuqi+%EC%9A%B0%EA%B8%B0+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/yuqi_dlwlrma/" } },
      { id: "shuhua", name: { ko: "슈화", en: "Shuhua", ja: "シュファ", zh: "叶舒华" }, role: { ko: "보컬", en: "Vocalist" }, birth: "2000.01.06", mbti: "INFP", zodiac: { ko: "염소자리", en: "Capricorn" }, height: "165cm", bloodType: "AB", description: { ko: "대만 출신의 막내로, 솔직한 반응과 독특한 매력으로 팬들의 큰 사랑을 받고 있습니다.", en: "Taiwanese maknae loved by fans for her honest reactions and unique charm." }, imageUrl: "https://tse1.mm.bing.net/th?q=(G)I-DLE+Shuhua+%EC%8A%88%ED%99%94+%EC%A7%81%EC%BA%A0+%EA%B3%A0%ED%99%94%EC%A7%88&w=600&h=600&rs=1", socials: { instagram: "https://www.instagram.com/shuhua_dlwlrma/" } }
    ]
  }
];