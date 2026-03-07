import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const content = {
    ko: {
      title: '개인정보처리방침',
      lastUpdated: '마지막 업데이트: 2026년 3월 4일',
      sections: [
        {
          title: '1. 수집하는 개인정보',
          body: 'K-POP STUDIO(이하 "본 서비스")는 얼굴 인식 기능을 위해 사용자의 기기에서 이미지를 업로드하거나 카메라를 사용합니다. 이러한 이미지는 오직 사용자의 브라우저 내에서만 처리되며, 어떠한 서버로도 전송되거나 저장되지 않습니다.'
        },
        {
          title: '2. 개인정보의 이용',
          body: '업로드된 이미지는 가장 닮은 K-POP 스타를 찾기 위한 AI 모델 분석(Teachable Machine) 용도로만 일회성으로 사용됩니다.'
        },
        {
          title: '3. 제3자 제공',
          body: '본 서비스는 사용자의 이미지나 개인정보를 제3자에게 제공, 판매, 공유하지 않습니다.'
        },
        {
          title: '4. 쿠키 및 광고 (Google AdSense)',
          body: '본 서비스는 Google AdSense를 사용하여 광고를 게재합니다. Google을 포함한 제3자 공급업체는 쿠키를 사용하여 사용자가 당사 웹사이트 또는 다른 웹사이트를 이전에 방문한 내역을 기반으로 광고를 게재합니다. 사용자는 Google 광고 설정에서 맞춤설정 광고를 선택 해제할 수 있습니다.'
        },
        {
          title: '5. 데이터 보안',
          body: '본 서비스는 이미지를 서버에 저장하지 않으므로 데이터 유출의 위험이 없습니다. 모든 처리는 사용자의 로컬 환경(브라우저)에서 이루어집니다.'
        },
        {
          title: '6. 문의처',
          body: '개인정보처리방침과 관련된 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.\n이메일: support@kpopstudio.ai'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: March 4, 2026',
      sections: [
        { title: '1. Information We Collect', body: 'K-POP STUDIO (hereinafter "the Service") uses images uploaded or captured via camera from the user\'s device for facial recognition features. These images are processed strictly within the user\'s browser and are NEVER transmitted to or stored on any server.' },
        { title: '2. Use of Information', body: 'The uploaded images are used solely for one-time AI model analysis (via Teachable Machine) to find the most resembling K-POP star.' },
        { title: '3. Third-Party Disclosure', body: 'The Service does not provide, sell, or share user images or personal information with any third parties.' },
        { title: '4. Cookies and Advertising (Google AdSense)', body: 'The Service uses Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to our website or other websites. Users may opt out of personalized advertising by visiting Google Ads Settings.' },
        { title: '5. Data Security', body: 'Since the Service does not store images on servers, there is no risk of data breaches regarding your photos. All processing happens in your local environment (browser).' },
        { title: '6. Contact Us', body: 'If you have any questions regarding this Privacy Policy, please contact us at:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ja: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新日：2026年3月4日',
      sections: [
        { title: '1. 収集する情報', body: 'K-POP STUDIO（以下「本サービス」）は、顔認識機能のためユーザーのデバイスから画像をアップロードまたはカメラで撮影します。これらの画像はユーザーのブラウザ内のみで処理され、いかなるサーバーにも送信・保存されません。' },
        { title: '2. 情報の利用', body: 'アップロードされた画像は、最も似ているK-POPスターを見つけるためのAIモデル分析（Teachable Machine）にのみ一回限り使用されます。' },
        { title: '3. 第三者への提供', body: '本サービスは、ユーザーの画像や個人情報を第三者に提供、販売、共有することはありません。' },
        { title: '4. クッキーおよび広告（Google AdSense）', body: '本サービスはGoogle AdSenseを使用して広告を表示します。Googleを含む第三者は、ユーザーの過去の訪問履歴に基づいてクッキーを利用し広告を配信します。Google広告設定からパーソナライズ広告をオプトアウトできます。' },
        { title: '5. データセキュリティ', body: '本サービスはサーバーに画像を保存しないため、写真に関するデータ漏洩のリスクはありません。すべての処理はローカル環境（ブラウザ）内で行われます。' },
        { title: '6. お問い合わせ', body: 'プライバシーポリシーに関するご質問は下記までお問い合わせください。\nメール：support@kpopstudio.ai' }
      ]
    },
    zh: {
      title: '隐私政策',
      lastUpdated: '最后更新：2026年3月4日',
      sections: [
        { title: '1. 收集的信息', body: 'K-POP STUDIO（以下简称"本服务"）为实现人脸识别功能，会使用用户设备上传的图像或摄像头拍摄的照片。这些图像仅在用户浏览器内处理，绝不会传输或存储到任何服务器。' },
        { title: '2. 信息的使用', body: '上传的图像仅用于一次性AI模型分析（Teachable Machine），以找到最相似的K-POP明星。' },
        { title: '3. 第三方披露', body: '本服务不会向任何第三方提供、出售或共享用户图像或个人信息。' },
        { title: '4. Cookie及广告（Google AdSense）', body: '本服务使用Google AdSense展示广告。包括Google在内的第三方供应商会使用Cookie，根据用户对本网站或其他网站的历史访问记录投放广告。用户可在Google广告设置中关闭个性化广告。' },
        { title: '5. 数据安全', body: '由于本服务不在服务器上存储图像，您的照片不存在数据泄露风险。所有处理均在本地环境（浏览器）中进行。' },
        { title: '6. 联系我们', body: '如对本隐私政策有任何疑问，请通过以下方式联系我们：\n邮箱：support@kpopstudio.ai' }
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 4 de marzo de 2026',
      sections: [
        { title: '1. Información que recopilamos', body: 'K-POP STUDIO (en adelante "el Servicio") utiliza imágenes cargadas o capturadas mediante cámara desde el dispositivo del usuario para funciones de reconocimiento facial. Estas imágenes se procesan estrictamente en el navegador del usuario y NUNCA se transmiten ni almacenan en ningún servidor.' },
        { title: '2. Uso de la información', body: 'Las imágenes cargadas se utilizan únicamente para un análisis único del modelo de IA (Teachable Machine) para encontrar la estrella de K-POP más parecida.' },
        { title: '3. Divulgación a terceros', body: 'El Servicio no proporciona, vende ni comparte imágenes de usuarios ni información personal con terceros.' },
        { title: '4. Cookies y publicidad (Google AdSense)', body: 'El Servicio utiliza Google AdSense para mostrar anuncios. Los proveedores externos, incluido Google, usan cookies para mostrar anuncios según visitas anteriores del usuario. Puedes desactivar la publicidad personalizada en la Configuración de Anuncios de Google.' },
        { title: '5. Seguridad de datos', body: 'Como el Servicio no almacena imágenes en servidores, no hay riesgo de filtración de datos respecto a tus fotos. Todo el procesamiento ocurre en tu entorno local (navegador).' },
        { title: '6. Contacto', body: 'Si tienes preguntas sobre esta Política de Privacidad, contáctanos en:\nEmail: support@kpopstudio.ai' }
      ]
    },
    id: {
      title: 'Kebijakan Privasi',
      lastUpdated: 'Terakhir Diperbarui: 4 Maret 2026',
      sections: [
        { title: '1. Informasi yang Kami Kumpulkan', body: 'K-POP STUDIO (selanjutnya disebut "Layanan") menggunakan gambar yang diunggah atau diambil melalui kamera dari perangkat pengguna untuk fitur pengenalan wajah. Gambar-gambar ini diproses secara ketat di dalam browser pengguna dan TIDAK PERNAH dikirim atau disimpan ke server mana pun.' },
        { title: '2. Penggunaan Informasi', body: 'Gambar yang diunggah hanya digunakan sekali untuk analisis model AI (Teachable Machine) guna menemukan bintang K-POP yang paling mirip.' },
        { title: '3. Pengungkapan kepada Pihak Ketiga', body: 'Layanan tidak menyediakan, menjual, atau berbagi gambar pengguna atau informasi pribadi kepada pihak ketiga mana pun.' },
        { title: '4. Cookie dan Iklan (Google AdSense)', body: 'Layanan menggunakan Google AdSense untuk menampilkan iklan. Vendor pihak ketiga, termasuk Google, menggunakan cookie untuk menayangkan iklan berdasarkan kunjungan sebelumnya pengguna. Pengguna dapat menonaktifkan iklan yang dipersonalisasi melalui Setelan Iklan Google.' },
        { title: '5. Keamanan Data', body: 'Karena Layanan tidak menyimpan gambar di server, tidak ada risiko kebocoran data terkait foto Anda. Semua pemrosesan terjadi di lingkungan lokal (browser) Anda.' },
        { title: '6. Hubungi Kami', body: 'Jika ada pertanyaan tentang Kebijakan Privasi ini, hubungi kami di:\nEmail: support@kpopstudio.ai' }
      ]
    },
    fr: {
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour : 4 mars 2026',
      sections: [
        { title: '1. Informations collectées', body: 'K-POP STUDIO (ci-après "le Service") utilise des images téléchargées ou capturées via la caméra depuis l\'appareil de l\'utilisateur pour les fonctionnalités de reconnaissance faciale. Ces images sont traitées exclusivement dans le navigateur de l\'utilisateur et ne sont JAMAIS transmises ni stockées sur aucun serveur.' },
        { title: '2. Utilisation des informations', body: 'Les images téléchargées sont utilisées uniquement pour une analyse ponctuelle du modèle IA (Teachable Machine) afin de trouver la star K-POP la plus ressemblante.' },
        { title: '3. Divulgation à des tiers', body: 'Le Service ne fournit, ne vend ni ne partage les images des utilisateurs ou informations personnelles à des tiers.' },
        { title: '4. Cookies et publicité (Google AdSense)', body: 'Le Service utilise Google AdSense pour afficher des publicités. Les fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction des visites précédentes de l\'utilisateur. Vous pouvez désactiver la publicité personnalisée dans les Paramètres des annonces Google.' },
        { title: '5. Sécurité des données', body: 'Le Service ne stockant pas les images sur des serveurs, il n\'y a aucun risque de violation de données concernant vos photos. Tout le traitement s\'effectue dans votre environnement local (navigateur).' },
        { title: '6. Contact', body: 'Pour toute question concernant cette politique de confidentialité, contactez-nous à :\nEmail : support@kpopstudio.ai' }
      ]
    },
    hi: {
      title: 'गोपनीयता नीति',
      lastUpdated: 'अंतिम अपडेट: 4 मार्च 2026',
      sections: [
        { title: '1. हम क्या जानकारी एकत्र करते हैं', body: 'K-POP STUDIO (इसके बाद "सेवा") चेहरा पहचान सुविधाओं के लिए उपयोगकर्ता के डिवाइस से अपलोड की गई या कैमरे से ली गई छवियों का उपयोग करता है। ये छवियाँ केवल उपयोगकर्ता के ब्राउज़र में संसाधित होती हैं और किसी भी सर्वर पर कभी भेजी या संग्रहीत नहीं की जाती हैं।' },
        { title: '2. जानकारी का उपयोग', body: 'अपलोड की गई छवियाँ केवल एक बार AI मॉडल विश्लेषण (Teachable Machine) के लिए उपयोग की जाती हैं ताकि सबसे मिलती-जुलती K-POP स्टार मिल सके।' },
        { title: '3. तृतीय पक्ष को प्रकटीकरण', body: 'सेवा उपयोगकर्ता की छवियाँ या व्यक्तिगत जानकारी किसी भी तृतीय पक्ष को प्रदान, बेचती या साझा नहीं करती।' },
        { title: '4. कुकीज़ और विज्ञापन (Google AdSense)', body: 'सेवा विज्ञापन दिखाने के लिए Google AdSense का उपयोग करती है। Google सहित तृतीय-पक्ष विक्रेता पिछली यात्राओं के आधार पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करते हैं। Google विज्ञापन सेटिंग से वैयक्तिकृत विज्ञापन बंद किए जा सकते हैं।' },
        { title: '5. डेटा सुरक्षा', body: 'सेवा सर्वर पर छवियाँ संग्रहीत नहीं करती, इसलिए आपकी फ़ोटो के संबंध में डेटा उल्लंघन का कोई जोखिम नहीं है। सभी प्रसंस्करण आपके स्थानीय वातावरण (ब्राउज़र) में होता है।' },
        { title: '6. संपर्क करें', body: 'इस गोपनीयता नीति के बारे में कोई प्रश्न हो तो हमसे संपर्क करें:\nईमेल: support@kpopstudio.ai' }
      ]
    },
    pt: {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 4 de março de 2026',
      sections: [
        { title: '1. Informações que coletamos', body: 'K-POP STUDIO (doravante "o Serviço") usa imagens enviadas ou capturadas via câmera do dispositivo do usuário para recursos de reconhecimento facial. Essas imagens são processadas estritamente no navegador do usuário e NUNCA são transmitidas ou armazenadas em qualquer servidor.' },
        { title: '2. Uso das informações', body: 'As imagens enviadas são usadas exclusivamente para análise única do modelo de IA (Teachable Machine) para encontrar a estrela K-POP mais parecida.' },
        { title: '3. Divulgação a terceiros', body: 'O Serviço não fornece, vende ou compartilha imagens de usuários ou informações pessoais com terceiros.' },
        { title: '4. Cookies e publicidade (Google AdSense)', body: 'O Serviço usa o Google AdSense para exibir anúncios. Fornecedores terceiros, incluindo o Google, usam cookies para veicular anúncios com base em visitas anteriores do usuário. Você pode desativar anúncios personalizados nas Configurações de Anúncios do Google.' },
        { title: '5. Segurança de dados', body: 'Como o Serviço não armazena imagens em servidores, não há risco de violação de dados com relação às suas fotos. Todo o processamento ocorre no seu ambiente local (navegador).' },
        { title: '6. Contato', body: 'Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: 4 مارس 2026',
      sections: [
        { title: '1. المعلومات التي نجمعها', body: 'يستخدم K-POP STUDIO (يُشار إليه بـ"الخدمة") الصور المُرفَعة أو الملتقطة بالكاميرا من جهاز المستخدم لميزات التعرف على الوجه. تتم معالجة هذه الصور حصريًا في متصفح المستخدم ولا تُرسَل أو تُخزَّن على أي خادم إطلاقًا.' },
        { title: '2. استخدام المعلومات', body: 'تُستخدم الصور المُرفَعة مرة واحدة فقط لتحليل نموذج الذكاء الاصطناعي (Teachable Machine) للعثور على نجم K-POP الأكثر تشابهًا.' },
        { title: '3. الإفصاح لأطراف ثالثة', body: 'لا تقوم الخدمة بتوفير أو بيع أو مشاركة صور المستخدمين أو معلوماتهم الشخصية مع أي طرف ثالث.' },
        { title: '4. ملفات تعريف الارتباط والإعلانات (Google AdSense)', body: 'تستخدم الخدمة Google AdSense لعرض الإعلانات. يستخدم موردو الجهات الخارجية، بما فيهم Google، ملفات تعريف الارتباط لعرض إعلانات بناءً على زيارات المستخدم السابقة. يمكن إلغاء تفعيل الإعلانات المخصصة من خلال إعدادات إعلانات Google.' },
        { title: '5. أمان البيانات', body: 'نظرًا لأن الخدمة لا تخزن الصور على الخوادم، فلا يوجد خطر لاختراق البيانات المتعلقة بصورك. تتم جميع المعالجات في بيئتك المحلية (المتصفح).' },
        { title: '6. تواصل معنا', body: 'لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا:\nالبريد الإلكتروني: support@kpopstudio.ai' }
      ]
    },
    th: {
      title: 'นโยบายความเป็นส่วนตัว',
      lastUpdated: 'อัปเดตล่าสุด: 4 มีนาคม 2026',
      sections: [
        { title: '1. ข้อมูลที่เราเก็บรวบรวม', body: 'K-POP STUDIO (ต่อไปนี้เรียกว่า "บริการ") ใช้ภาพที่อัปโหลดหรือถ่ายจากกล้องของอุปกรณ์ผู้ใช้เพื่อฟีเจอร์จดจำใบหน้า รูปภาพเหล่านี้ประมวลผลเฉพาะในเบราว์เซอร์ของผู้ใช้เท่านั้น และไม่มีการส่งหรือจัดเก็บบนเซิร์ฟเวอร์ใดๆ ทั้งสิ้น' },
        { title: '2. การใช้ข้อมูล', body: 'รูปภาพที่อัปโหลดถูกใช้ครั้งเดียวเพื่อการวิเคราะห์โมเดล AI (Teachable Machine) เพื่อค้นหาศิลปิน K-POP ที่หน้าคล้ายที่สุดเท่านั้น' },
        { title: '3. การเปิดเผยข้อมูลแก่บุคคลที่สาม', body: 'บริการไม่มีการให้ ขาย หรือแบ่งปันรูปภาพหรือข้อมูลส่วนบุคคลของผู้ใช้แก่บุคคลที่สามใดๆ' },
        { title: '4. คุกกี้และโฆษณา (Google AdSense)', body: 'บริการใช้ Google AdSense เพื่อแสดงโฆษณา ผู้ให้บริการบุคคลที่สาม รวมถึง Google ใช้คุกกี้เพื่อแสดงโฆษณาตามประวัติการเยี่ยมชมของผู้ใช้ สามารถปิดโฆษณาที่ปรับแต่งเองได้จากการตั้งค่าโฆษณา Google' },
        { title: '5. ความปลอดภัยของข้อมูล', body: 'เนื่องจากบริการไม่จัดเก็บรูปภาพบนเซิร์ฟเวอร์ จึงไม่มีความเสี่ยงในการรั่วไหลของข้อมูล การประมวลผลทั้งหมดเกิดขึ้นในสภาพแวดล้อมท้องถิ่นของคุณ (เบราว์เซอร์)' },
        { title: '6. ติดต่อเรา', body: 'หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ โปรดติดต่อเรา:\nอีเมล: support@kpopstudio.ai' }
      ]
    },
    vi: {
      title: 'Chính sách Bảo mật',
      lastUpdated: 'Cập nhật lần cuối: 4 tháng 3, 2026',
      sections: [
        { title: '1. Thông tin chúng tôi thu thập', body: 'K-POP STUDIO (sau đây gọi là "Dịch vụ") sử dụng hình ảnh được tải lên hoặc chụp qua camera từ thiết bị của người dùng cho tính năng nhận diện khuôn mặt. Các hình ảnh này được xử lý hoàn toàn trong trình duyệt của người dùng và KHÔNG BAO GIỜ được truyền hoặc lưu trữ trên bất kỳ máy chủ nào.' },
        { title: '2. Sử dụng thông tin', body: 'Hình ảnh được tải lên chỉ được sử dụng một lần cho phân tích mô hình AI (Teachable Machine) để tìm ngôi sao K-POP giống nhất.' },
        { title: '3. Tiết lộ cho bên thứ ba', body: 'Dịch vụ không cung cấp, bán hoặc chia sẻ hình ảnh người dùng hoặc thông tin cá nhân với bất kỳ bên thứ ba nào.' },
        { title: '4. Cookie và Quảng cáo (Google AdSense)', body: 'Dịch vụ sử dụng Google AdSense để hiển thị quảng cáo. Các nhà cung cấp bên thứ ba, bao gồm Google, sử dụng cookie để phân phối quảng cáo dựa trên lịch sử truy cập. Bạn có thể tắt quảng cáo cá nhân hóa trong Cài đặt quảng cáo Google.' },
        { title: '5. Bảo mật dữ liệu', body: 'Vì Dịch vụ không lưu trữ hình ảnh trên máy chủ, không có rủi ro vi phạm dữ liệu liên quan đến ảnh của bạn. Tất cả xử lý diễn ra trong môi trường cục bộ (trình duyệt) của bạn.' },
        { title: '6. Liên hệ', body: 'Nếu có câu hỏi về Chính sách Bảo mật này, vui lòng liên hệ:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ru: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление: 4 марта 2026 г.',
      sections: [
        { title: '1. Собираемая информация', body: 'K-POP STUDIO (далее «Сервис») использует изображения, загружаемые или снятые с камеры устройства пользователя, для функций распознавания лиц. Эти изображения обрабатываются исключительно в браузере пользователя и НИКОГДА не передаются и не хранятся ни на каком сервере.' },
        { title: '2. Использование информации', body: 'Загружаемые изображения используются единовременно исключительно для анализа моделью ИИ (Teachable Machine) с целью поиска наиболее похожей звезды K-POP.' },
        { title: '3. Раскрытие третьим лицам', body: 'Сервис не предоставляет, не продаёт и не передаёт изображения пользователей или их личные данные третьим лицам.' },
        { title: '4. Файлы cookie и реклама (Google AdSense)', body: 'Сервис использует Google AdSense для показа рекламы. Сторонние поставщики, включая Google, используют файлы cookie для показа рекламы на основе предыдущих посещений пользователя. Вы можете отключить персонализированную рекламу в настройках Google Реклама.' },
        { title: '5. Безопасность данных', body: 'Поскольку Сервис не хранит изображения на серверах, риск утечки данных отсутствует. Все операции выполняются в локальной среде (браузере) пользователя.' },
        { title: '6. Контакты', body: 'Если у вас есть вопросы по данной политике конфиденциальности, свяжитесь с нами:\nEmail: support@kpopstudio.ai' }
      ]
    },
  };

  const data = (content as Record<string, typeof content.en>)[i18n.language] || content.en;

  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans p-6 md:p-12 relative overflow-hidden flex justify-center">
      <div className="scanlines"></div>
      
      <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono uppercase text-sm mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          {t('back_to_home')}
        </button>

        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
          {data.title}
        </h1>
        <p className="text-slate-400 font-mono text-sm mb-12">{data.lastUpdated}</p>

        <div className="space-y-8">
          {data.sections.map((section: { title: string, body: string }, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-pink inline-block"></span>
                {section.title}
              </h2>
              <p className="text-slate-300 leading-relaxed pl-5 whitespace-pre-wrap">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
