import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, Star, Cpu, Shield, Mail, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const content = {
    ko: {
      title: 'KPOP STUDIO 소개',
      subtitle: 'K-POP 팬덤과 최첨단 AI 기술의 만남',
      missionTitle: '우리의 미션',
      missionDesc: 'KPOP STUDIO는 전 세계 K-POP 팬들에게 창의적이고 즐거운 디지털 경험을 제공하는 것을 목표로 합니다. 우리는 단순한 정보 제공을 넘어, 인공지능 기술을 통해 팬들이 아티스트와 더욱 가깝게 연결될 수 있는 혁신적인 플랫폼을 구축하고 있습니다.',
      techTitle: '사용된 기술',
      techDesc: '본 서비스는 고도의 얼굴 인식 알고리즘(Face-api.js)을 활용하여 사용자의 특징점을 분석합니다. 모든 분석은 서버로 이미지를 전송하지 않고 사용자의 브라우저에서 로컬로 처리되어, 보안과 성능을 동시에 확보했습니다.',
      contactTitle: '문의하기',
      contactDesc: '서비스 이용 중 불편한 점이나 제휴 문의가 있으시면 언제든 연락주세요. 여러분의 소중한 피드백은 KPOP STUDIO를 성장시키는 큰 힘이 됩니다.',
      email: 'support@kpopstudio.ai',
      location: '대한민국 서울특별시'
    },
    en: {
      title: 'About KPOP STUDIO',
      subtitle: 'Where K-pop Fandom Meets Cutting-Edge AI',
      missionTitle: 'Our Mission',
      missionDesc: 'KPOP STUDIO aims to provide creative and enjoyable digital experiences to K-pop fans worldwide. Beyond providing information, we are building an innovative platform where fans can connect more closely with artists through artificial intelligence technology.',
      techTitle: 'Technology',
      techDesc: 'This service utilizes advanced facial recognition algorithms (Face-api.js) to analyze user features. All analysis is processed locally in the user\'s browser without transmitting images to a server, ensuring both security and performance.',
      contactTitle: 'Contact Us',
      contactDesc: 'If you have any inconveniences or partnership inquiries, please feel free to contact us. Your valuable feedback is a great strength in growing KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'Seoul, Republic of Korea'
    },
    ja: {
      title: 'KPOP STUDIOについて',
      subtitle: 'K-POPファンダムと最先端AIの出会い',
      missionTitle: '私たちのミッション',
      missionDesc: 'KPOP STUDIOは、世界中のK-POPファンにクリエイティブで楽しいデジタル体験を提供することを目指しています。単なる情報提供にとどまらず、AI技術を通じてファンがアーティストとより深くつながれる革新的なプラットフォームを構築しています。',
      techTitle: '使用技術',
      techDesc: '本サービスは高度な顔認識アルゴリズム（Face-api.js）を使用して、ユーザーの特徴を分析します。すべての分析はサーバーに画像を送信せずユーザーのブラウザ上でローカルに処理されるため、セキュリティとパフォーマンスの両立を実現しています。',
      contactTitle: 'お問い合わせ',
      contactDesc: 'ご不明な点やパートナーシップのお問い合わせはお気軽にご連絡ください。皆様の貴重なフィードバックがKPOP STUDIOの成長を支えています。',
      email: 'support@kpopstudio.ai',
      location: '大韓民国ソウル特別市'
    },
    zh: {
      title: '关于KPOP STUDIO',
      subtitle: 'K-POP粉丝圈与前沿AI的相遇',
      missionTitle: '我们的使命',
      missionDesc: 'KPOP STUDIO致力于为全球K-POP粉丝提供富有创意且愉快的数字体验。我们不仅仅是提供信息，更是借助人工智能技术，打造一个让粉丝与艺人更紧密相连的创新平台。',
      techTitle: '技术介绍',
      techDesc: '本服务利用先进的人脸识别算法（Face-api.js）分析用户特征。所有分析均在用户浏览器本地处理，不向任何服务器传输图像，确保安全与性能兼顾。',
      contactTitle: '联系我们',
      contactDesc: '如有使用问题或合作咨询，欢迎随时联系我们。您宝贵的反馈是KPOP STUDIO成长的重要动力。',
      email: 'support@kpopstudio.ai',
      location: '大韩民国首尔特别市'
    },
    es: {
      title: 'Acerca de KPOP STUDIO',
      subtitle: 'Donde el fandom de K-pop se encuentra con la IA de vanguardia',
      missionTitle: 'Nuestra misión',
      missionDesc: 'KPOP STUDIO tiene como objetivo proporcionar experiencias digitales creativas y agradables a los fans de K-pop de todo el mundo. Más allá de brindar información, estamos construyendo una plataforma innovadora donde los fans puedan conectarse más estrechamente con los artistas a través de la inteligencia artificial.',
      techTitle: 'Tecnología',
      techDesc: 'Este servicio utiliza algoritmos avanzados de reconocimiento facial (Face-api.js) para analizar las características del usuario. Todo el análisis se procesa localmente en el navegador sin transmitir imágenes a ningún servidor, garantizando seguridad y rendimiento.',
      contactTitle: 'Contáctanos',
      contactDesc: 'Si tienes alguna inconveniencia o consulta de asociación, no dudes en contactarnos. Tu valioso feedback es una gran fuerza para hacer crecer KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'Seúl, República de Corea'
    },
    id: {
      title: 'Tentang KPOP STUDIO',
      subtitle: 'Di Mana Fandom K-pop Bertemu dengan AI Mutakhir',
      missionTitle: 'Misi Kami',
      missionDesc: 'KPOP STUDIO bertujuan memberikan pengalaman digital yang kreatif dan menyenangkan kepada penggemar K-pop di seluruh dunia. Lebih dari sekadar menyediakan informasi, kami membangun platform inovatif di mana para penggemar dapat terhubung lebih erat dengan artis melalui teknologi kecerdasan buatan.',
      techTitle: 'Teknologi',
      techDesc: 'Layanan ini menggunakan algoritma pengenalan wajah canggih (Face-api.js) untuk menganalisis fitur pengguna. Semua analisis diproses secara lokal di browser pengguna tanpa mengirimkan gambar ke server, memastikan keamanan dan kinerja.',
      contactTitle: 'Hubungi Kami',
      contactDesc: 'Jika ada pertanyaan atau kerja sama, jangan ragu untuk menghubungi kami. Masukan Anda sangat berarti bagi pertumbuhan KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'Seoul, Republik Korea'
    },
    fr: {
      title: 'À propos de KPOP STUDIO',
      subtitle: 'Là où le fandom K-pop rencontre l\'IA de pointe',
      missionTitle: 'Notre mission',
      missionDesc: 'KPOP STUDIO vise à offrir des expériences numériques créatives et agréables aux fans de K-pop du monde entier. Au-delà de la simple fourniture d\'informations, nous construisons une plateforme innovante permettant aux fans de se connecter plus étroitement avec les artistes grâce à l\'intelligence artificielle.',
      techTitle: 'Technologie',
      techDesc: 'Ce service utilise des algorithmes avancés de reconnaissance faciale (Face-api.js) pour analyser les caractéristiques de l\'utilisateur. Toutes les analyses sont traitées localement dans le navigateur sans transmettre d\'images à un serveur, garantissant sécurité et performance.',
      contactTitle: 'Nous contacter',
      contactDesc: 'Si vous avez des questions ou des demandes de partenariat, n\'hésitez pas à nous contacter. Vos précieux retours sont une grande force pour faire grandir KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'Séoul, République de Corée'
    },
    hi: {
      title: 'KPOP STUDIO के बारे में',
      subtitle: 'जहाँ K-POP फैनडम मिलता है अत्याधुनिक AI से',
      missionTitle: 'हमारा मिशन',
      missionDesc: 'KPOP STUDIO का लक्ष्य दुनिया भर के K-POP प्रशंसकों को रचनात्मक और आनंददायक डिजिटल अनुभव प्रदान करना है। केवल जानकारी देने से परे, हम एक ऐसा अभिनव मंच बना रहे हैं जहाँ प्रशंसक कृत्रिम बुद्धिमत्ता के माध्यम से कलाकारों से और अधिक जुड़ सकें।',
      techTitle: 'तकनीक',
      techDesc: 'यह सेवा उपयोगकर्ता की विशेषताओं का विश्लेषण करने के लिए उन्नत चेहरा पहचान एल्गोरिदम (Face-api.js) का उपयोग करती है। सभी विश्लेषण किसी सर्वर पर छवियाँ भेजे बिना उपयोगकर्ता के ब्राउज़र में स्थानीय रूप से संसाधित किए जाते हैं।',
      contactTitle: 'संपर्क करें',
      contactDesc: 'यदि आपको कोई असुविधा हो या साझेदारी की जानकारी चाहिए तो कभी भी संपर्क करें। आपकी बहुमूल्य प्रतिक्रिया KPOP STUDIO को बढ़ाने में बड़ी शक्ति है।',
      email: 'support@kpopstudio.ai',
      location: 'सियोल, कोरिया गणराज्य'
    },
    pt: {
      title: 'Sobre o KPOP STUDIO',
      subtitle: 'Onde o fandom de K-pop encontra a IA de ponta',
      missionTitle: 'Nossa missão',
      missionDesc: 'O KPOP STUDIO tem como objetivo fornecer experiências digitais criativas e agradáveis aos fãs de K-pop em todo o mundo. Além de fornecer informações, estamos construindo uma plataforma inovadora onde os fãs podem se conectar mais de perto com os artistas por meio da inteligência artificial.',
      techTitle: 'Tecnologia',
      techDesc: 'Este serviço utiliza algoritmos avançados de reconhecimento facial (Face-api.js) para analisar as características do usuário. Toda a análise é processada localmente no navegador do usuário sem transmitir imagens para um servidor, garantindo segurança e desempenho.',
      contactTitle: 'Fale conosco',
      contactDesc: 'Se tiver alguma dúvida ou consulta de parceria, entre em contato conosco. Seu valioso feedback é uma grande força para fazer o KPOP STUDIO crescer.',
      email: 'support@kpopstudio.ai',
      location: 'Seul, República da Coreia'
    },
    ar: {
      title: 'حول KPOP STUDIO',
      subtitle: 'حيث يلتقي فانداموم K-pop بالذكاء الاصطناعي المتطور',
      missionTitle: 'مهمتنا',
      missionDesc: 'يهدف KPOP STUDIO إلى تقديم تجارب رقمية إبداعية وممتعة لمحبي K-pop حول العالم. نتجاوز مجرد توفير المعلومات لنبني منصة مبتكرة تتيح للمعجبين التواصل بشكل أوثق مع الفنانين من خلال تقنية الذكاء الاصطناعي.',
      techTitle: 'التقنية',
      techDesc: 'تستخدم هذه الخدمة خوارزميات متقدمة للتعرف على الوجه (Face-api.js) لتحليل ملامح المستخدم. تتم معالجة جميع التحليلات محليًا في متصفح المستخدم دون إرسال الصور إلى أي خادم.',
      contactTitle: 'تواصل معنا',
      contactDesc: 'إذا كان لديك أي استفسار أو اقتراح شراكة، لا تتردد في التواصل معنا. ملاحظاتك القيّمة هي قوة كبيرة لتنمية KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'سيول، جمهورية كوريا'
    },
    th: {
      title: 'เกี่ยวกับ KPOP STUDIO',
      subtitle: 'ที่ที่แฟนดอม K-pop พบกับ AI ล้ำสมัย',
      missionTitle: 'พันธกิจของเรา',
      missionDesc: 'KPOP STUDIO มุ่งมั่นมอบประสบการณ์ดิจิทัลที่สร้างสรรค์และสนุกสนานแก่แฟน K-pop ทั่วโลก นอกจากการให้ข้อมูล เรายังสร้างแพลตฟอร์มนวัตกรรมที่ช่วยให้แฟนๆ เชื่อมต่อกับศิลปินได้ใกล้ชิดยิ่งขึ้นผ่านเทคโนโลยี AI',
      techTitle: 'เทคโนโลยี',
      techDesc: 'บริการนี้ใช้อัลกอริทึมการจดจำใบหน้าขั้นสูง (Face-api.js) เพื่อวิเคราะห์ลักษณะเฉพาะของผู้ใช้ การวิเคราะห์ทั้งหมดประมวลผลในเบราว์เซอร์ของผู้ใช้โดยไม่ส่งภาพไปยังเซิร์ฟเวอร์ใด',
      contactTitle: 'ติดต่อเรา',
      contactDesc: 'หากมีข้อสงสัยหรือต้องการสอบถามเรื่องความร่วมมือ โปรดติดต่อเราได้เสมอ ความคิดเห็นอันมีค่าของคุณคือแรงผลักดันสำคัญในการพัฒนา KPOP STUDIO',
      email: 'support@kpopstudio.ai',
      location: 'กรุงโซล สาธารณรัฐเกาหลี'
    },
    vi: {
      title: 'Giới thiệu KPOP STUDIO',
      subtitle: 'Nơi fandom K-pop gặp gỡ AI tiên tiến',
      missionTitle: 'Sứ mệnh của chúng tôi',
      missionDesc: 'KPOP STUDIO hướng đến việc cung cấp trải nghiệm kỹ thuật số sáng tạo và thú vị cho người hâm mộ K-pop trên toàn thế giới. Không chỉ cung cấp thông tin, chúng tôi đang xây dựng nền tảng đổi mới giúp người hâm mộ kết nối gần hơn với nghệ sĩ thông qua công nghệ trí tuệ nhân tạo.',
      techTitle: 'Công nghệ',
      techDesc: 'Dịch vụ này sử dụng thuật toán nhận diện khuôn mặt tiên tiến (Face-api.js) để phân tích đặc điểm của người dùng. Tất cả phân tích được xử lý cục bộ trên trình duyệt mà không gửi hình ảnh lên máy chủ, đảm bảo bảo mật và hiệu suất.',
      contactTitle: 'Liên hệ chúng tôi',
      contactDesc: 'Nếu bạn có bất kỳ thắc mắc hay yêu cầu hợp tác nào, hãy liên hệ với chúng tôi bất cứ lúc nào. Phản hồi quý giá của bạn là động lực lớn để KPOP STUDIO phát triển.',
      email: 'support@kpopstudio.ai',
      location: 'Seoul, Hàn Quốc'
    },
    ru: {
      title: 'О KPOP STUDIO',
      subtitle: 'Где фандом K-pop встречается с передовым ИИ',
      missionTitle: 'Наша миссия',
      missionDesc: 'KPOP STUDIO стремится предоставлять творческие и увлекательные цифровые впечатления поклонникам K-pop по всему миру. Помимо предоставления информации, мы создаём инновационную платформу, где фанаты могут ещё теснее общаться с артистами с помощью технологий искусственного интеллекта.',
      techTitle: 'Технология',
      techDesc: 'Сервис использует передовые алгоритмы распознавания лиц (Face-api.js) для анализа черт пользователя. Весь анализ выполняется локально в браузере пользователя без передачи изображений на сервер, обеспечивая безопасность и производительность.',
      contactTitle: 'Связаться с нами',
      contactDesc: 'Если у вас есть вопросы или предложения о сотрудничестве, свяжитесь с нами в любое время. Ваши ценные отзывы — большая сила для развития KPOP STUDIO.',
      email: 'support@kpopstudio.ai',
      location: 'Сеул, Республика Корея'
    },
  };

  const data = (content as Record<string, typeof content.en>)[i18n.language] || content.en;

  return (
    <div className="min-h-screen text-slate-50 font-sans p-6 md:p-12 relative overflow-hidden flex justify-center">
      <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-md relative z-10 animate-fade-in-up">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono uppercase text-sm mb-12"
        >
          <ChevronLeft className="w-5 h-5" />
          {t('back_to_home')}
        </button>

        <header className="mb-16">
          <div className="w-16 h-16 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-2xl flex items-center justify-center mb-6 neon-shadow-blue">
            <Star className="w-8 h-8 text-white fill-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4 text-white uppercase">
            {data.title}
          </h1>
          <p className="text-neon-blue font-mono text-lg uppercase tracking-widest">{data.subtitle}</p>
        </header>

        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-black italic text-white flex items-center gap-3">
                <Globe className="w-6 h-6 text-neon-pink" />
                {data.missionTitle}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {data.missionDesc}
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-black italic text-white flex items-center gap-3">
                <Cpu className="w-6 h-6 text-neon-green" />
                {data.techTitle}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {data.techDesc}
              </p>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black italic text-white uppercase">{data.contactTitle}</h2>
              <p className="text-slate-400 max-w-xl mx-auto">{data.contactDesc}</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center gap-4 bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center border border-neon-blue/30">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email Support</p>
                  <p className="text-white font-bold">{data.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/40 p-6 rounded-2xl border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center border border-neon-pink/30">
                  <Shield className="w-6 h-6 text-neon-pink" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">{data.location}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
