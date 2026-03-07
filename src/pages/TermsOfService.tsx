import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const content = {
    ko: {
      title: '이용약관',
      lastUpdated: '마지막 업데이트: 2026년 3월 4일',
      sections: [
        {
          title: '1. 서비스의 목적',
          body: 'K-POP STUDIO(이하 "본 서비스")는 사용자가 업로드한 이미지를 분석하여 가장 닮은 K-POP 스타를 찾아주는 엔터테인먼트 목적의 무료 웹 애플리케이션입니다.'
        },
        {
          title: '2. 이용자의 의무',
          body: '사용자는 타인의 사진이나 저작권, 초상권 등 타인의 권리를 침해하는 이미지를 업로드해서는 안 됩니다. 또한, 불법적이거나 불건전한 이미지를 사용하여 서비스를 악용해서는 안 됩니다. 이를 위반하여 발생하는 모든 책임은 전적으로 사용자에게 있습니다.'
        },
        {
          title: '3. 서비스의 한계',
          body: '본 서비스에서 제공하는 닮은꼴 분석 결과는 AI 모델에 기반한 것으로 정확성을 보장하지 않으며, 전적으로 엔터테인먼트 목적으로만 제공됩니다.'
        },
        {
          title: '4. 저작권',
          body: '서비스 내의 UI/UX 디자인, 로고, 소스코드 등에 대한 저작권은 서비스 제공자에게 있습니다. 분석 결과에 표시되는 아이돌의 이미지 및 정보는 각 소속사 또는 원저작자에게 권리가 있습니다.'
        },
        {
          title: '5. 서비스의 변경 및 중단',
          body: '서비스 제공자는 사전 공지 없이 서비스의 일부 또는 전체를 변경하거나 중단할 수 있습니다.'
        },
        {
          title: '6. 문의 및 기타',
          body: '본 약관이나 서비스 이용과 관련된 문의는 아래 이메일로 연락 주시기 바랍니다.\n이메일: support@kpopstudio.ai'
        }
      ]
    },
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: March 4, 2026',
      sections: [
        { title: '1. Purpose of Service', body: 'K-POP STUDIO (hereinafter "the Service") is a free web application for entertainment purposes that analyzes user-uploaded images to find the most resembling K-POP star.' },
        { title: '2. User Obligations', body: 'Users must not upload photos of others or images that infringe on the rights of others, including copyrights and portrait rights. Furthermore, users must not misuse the Service by using illegal or inappropriate images. The user bears all responsibility for any issues arising from violations of these terms.' },
        { title: '3. Service Limitations', body: 'The lookalike analysis results provided by the Service are based on an AI model and do not guarantee accuracy. They are provided strictly for entertainment purposes only.' },
        { title: '4. Copyright', body: 'The copyrights for the UI/UX design, logos, and source code within the Service belong to the service provider. The rights to the images and information of the idols displayed in the results belong to their respective agencies or original creators.' },
        { title: '5. Modification and Suspension of Service', body: 'The service provider may modify or suspend parts or all of the Service without prior notice.' },
        { title: '6. Contact Information', body: 'If you have any questions regarding these Terms of Service, please contact us at:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ja: {
      title: '利用規約',
      lastUpdated: '最終更新日：2026年3月4日',
      sections: [
        { title: '1. サービスの目的', body: 'K-POP STUDIO（以下「本サービス」）は、ユーザーがアップロードした画像を分析して最も似ているK-POPスターを見つけるエンターテインメント目的の無料Webアプリケーションです。' },
        { title: '2. ユーザーの義務', body: '他人の写真や著作権、肖像権などの権利を侵害する画像をアップロードしてはなりません。また、違法または不適切な画像を使用してサービスを悪用してはなりません。これらの違反から生じるすべての責任はユーザーが負います。' },
        { title: '3. サービスの制限', body: '本サービスが提供する似顔絵分析の結果はAIモデルに基づくものであり、正確性を保証するものではありません。完全にエンターテインメント目的のみで提供されます。' },
        { title: '4. 著作権', body: 'サービス内のUI/UXデザイン、ロゴ、ソースコードなどの著作権はサービス提供者に帰属します。分析結果に表示されるアイドルの画像および情報の権利は各所属事務所または原著作者に帰属します。' },
        { title: '5. サービスの変更および停止', body: 'サービス提供者は事前の通知なしにサービスの一部または全部を変更または停止する場合があります。' },
        { title: '6. お問い合わせ', body: '本規約に関するご質問は下記までお問い合わせください。\nメール：support@kpopstudio.ai' }
      ]
    },
    zh: {
      title: '服务条款',
      lastUpdated: '最后更新：2026年3月4日',
      sections: [
        { title: '1. 服务目的', body: 'K-POP STUDIO（以下简称"本服务"）是一款以娱乐为目的的免费网络应用程序，通过分析用户上传的图像来找到最相似的K-POP明星。' },
        { title: '2. 用户义务', body: '用户不得上传他人照片或侵犯他人版权、肖像权等权利的图像，也不得使用违法或不当图像滥用本服务。因违反上述规定而产生的一切责任由用户自行承担。' },
        { title: '3. 服务限制', body: '本服务提供的相似度分析结果基于AI模型，不保证准确性，仅供娱乐目的使用。' },
        { title: '4. 版权', body: '本服务内的UI/UX设计、标志和源代码的版权归服务提供方所有。分析结果中显示的偶像图像及信息的权利归各所属公司或原创作者所有。' },
        { title: '5. 服务变更及中止', body: '服务提供方可在不事先通知的情况下变更或中止部分或全部服务。' },
        { title: '6. 联系方式', body: '如对本条款有任何疑问，请通过以下方式联系我们：\n邮箱：support@kpopstudio.ai' }
      ]
    },
    es: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 4 de marzo de 2026',
      sections: [
        { title: '1. Propósito del servicio', body: 'K-POP STUDIO (en adelante "el Servicio") es una aplicación web gratuita con fines de entretenimiento que analiza imágenes subidas por los usuarios para encontrar la estrella K-POP más parecida.' },
        { title: '2. Obligaciones del usuario', body: 'Los usuarios no deben subir fotos de otras personas o imágenes que infrinjan derechos de terceros, incluyendo derechos de autor y derechos de imagen. Tampoco deben hacer un uso indebido del Servicio con imágenes ilegales o inapropiadas. El usuario asume toda responsabilidad por incumplimientos.' },
        { title: '3. Limitaciones del servicio', body: 'Los resultados del análisis de parecido proporcionados por el Servicio se basan en un modelo de IA y no garantizan precisión. Se ofrecen únicamente con fines de entretenimiento.' },
        { title: '4. Derechos de autor', body: 'Los derechos de autor del diseño UI/UX, logotipos y código fuente del Servicio pertenecen al proveedor del servicio. Los derechos sobre las imágenes e información de los ídolos mostrados en los resultados pertenecen a sus respectivas agencias o creadores originales.' },
        { title: '5. Modificación y suspensión del servicio', body: 'El proveedor del servicio puede modificar o suspender partes o la totalidad del Servicio sin previo aviso.' },
        { title: '6. Información de contacto', body: 'Si tienes preguntas sobre estos Términos de Servicio, contáctanos en:\nEmail: support@kpopstudio.ai' }
      ]
    },
    id: {
      title: 'Syarat dan Ketentuan',
      lastUpdated: 'Terakhir Diperbarui: 4 Maret 2026',
      sections: [
        { title: '1. Tujuan Layanan', body: 'K-POP STUDIO (selanjutnya disebut "Layanan") adalah aplikasi web gratis untuk tujuan hiburan yang menganalisis gambar yang diunggah pengguna untuk menemukan bintang K-POP yang paling mirip.' },
        { title: '2. Kewajiban Pengguna', body: 'Pengguna tidak boleh mengunggah foto orang lain atau gambar yang melanggar hak orang lain, termasuk hak cipta dan hak potret. Pengguna juga tidak boleh menyalahgunakan Layanan dengan gambar ilegal atau tidak pantas. Pengguna menanggung semua tanggung jawab atas pelanggaran ketentuan ini.' },
        { title: '3. Batasan Layanan', body: 'Hasil analisis kemiripan yang disediakan Layanan didasarkan pada model AI dan tidak menjamin akurasi. Disediakan semata-mata untuk tujuan hiburan.' },
        { title: '4. Hak Cipta', body: 'Hak cipta atas desain UI/UX, logo, dan kode sumber dalam Layanan menjadi milik penyedia layanan. Hak atas gambar dan informasi idol yang ditampilkan dalam hasil menjadi milik agensi masing-masing atau pencipta aslinya.' },
        { title: '5. Perubahan dan Penghentian Layanan', body: 'Penyedia layanan dapat mengubah atau menghentikan sebagian atau seluruh Layanan tanpa pemberitahuan sebelumnya.' },
        { title: '6. Informasi Kontak', body: 'Jika ada pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami di:\nEmail: support@kpopstudio.ai' }
      ]
    },
    fr: {
      title: 'Conditions d\'utilisation',
      lastUpdated: 'Dernière mise à jour : 4 mars 2026',
      sections: [
        { title: '1. Objectif du service', body: 'K-POP STUDIO (ci-après "le Service") est une application web gratuite à des fins de divertissement qui analyse les images téléchargées par les utilisateurs pour trouver la star K-POP la plus ressemblante.' },
        { title: '2. Obligations de l\'utilisateur', body: 'Les utilisateurs ne doivent pas télécharger des photos d\'autres personnes ou des images portant atteinte aux droits de tiers, y compris les droits d\'auteur et les droits à l\'image. Ils ne doivent pas non plus détourner le Service avec des images illégales ou inappropriées. L\'utilisateur est entièrement responsable des conséquences de toute violation.' },
        { title: '3. Limites du service', body: 'Les résultats d\'analyse de ressemblance fournis par le Service sont basés sur un modèle IA et ne garantissent pas la précision. Ils sont fournis uniquement à des fins de divertissement.' },
        { title: '4. Droits d\'auteur', body: 'Les droits d\'auteur du design UI/UX, des logos et du code source du Service appartiennent au fournisseur de services. Les droits sur les images et informations des idols affichés dans les résultats appartiennent à leurs agences respectives ou créateurs originaux.' },
        { title: '5. Modification et suspension du service', body: 'Le fournisseur de services peut modifier ou suspendre tout ou partie du Service sans préavis.' },
        { title: '6. Contact', body: 'Pour toute question concernant ces Conditions d\'utilisation, contactez-nous à :\nEmail : support@kpopstudio.ai' }
      ]
    },
    hi: {
      title: 'सेवा की शर्तें',
      lastUpdated: 'अंतिम अपडेट: 4 मार्च 2026',
      sections: [
        { title: '1. सेवा का उद्देश्य', body: 'K-POP STUDIO (इसके बाद "सेवा") एक निःशुल्क वेब एप्लिकेशन है जो मनोरंजन उद्देश्यों के लिए उपयोगकर्ता द्वारा अपलोड की गई छवियों का विश्लेषण करके सबसे मिलती-जुलती K-POP स्टार खोजता है।' },
        { title: '2. उपयोगकर्ता की जिम्मेदारियां', body: 'उपयोगकर्ता किसी अन्य व्यक्ति की तस्वीरें या कॉपीराइट और पोर्ट्रेट अधिकारों सहित अन्य के अधिकारों का उल्लंघन करने वाली छवियाँ अपलोड नहीं कर सकते। अवैध या अनुचित छवियों से सेवा का दुरुपयोग भी निषिद्ध है। उल्लंघन से उत्पन्न सभी जिम्मेदारी उपयोगकर्ता की होगी।' },
        { title: '3. सेवा की सीमाएं', body: 'सेवा द्वारा प्रदान किए गए समानता विश्लेषण परिणाम AI मॉडल पर आधारित हैं और सटीकता की गारंटी नहीं देते। ये केवल मनोरंजन उद्देश्यों के लिए प्रदान किए जाते हैं।' },
        { title: '4. कॉपीराइट', body: 'सेवा के UI/UX डिज़ाइन, लोगो और सोर्स कोड का कॉपीराइट सेवा प्रदाता का है। परिणामों में प्रदर्शित आइडल की छवियों और जानकारी के अधिकार उनकी संबंधित एजेंसियों या मूल रचनाकारों के पास हैं।' },
        { title: '5. सेवा में बदलाव और निलंबन', body: 'सेवा प्रदाता बिना पूर्व सूचना के सेवा के किसी हिस्से या पूरी सेवा को बदल या निलंबित कर सकता है।' },
        { title: '6. संपर्क जानकारी', body: 'इन सेवा शर्तों के बारे में प्रश्नों के लिए संपर्क करें:\nईमेल: support@kpopstudio.ai' }
      ]
    },
    pt: {
      title: 'Termos de Serviço',
      lastUpdated: 'Última atualização: 4 de março de 2026',
      sections: [
        { title: '1. Propósito do serviço', body: 'K-POP STUDIO (doravante "o Serviço") é um aplicativo web gratuito para fins de entretenimento que analisa imagens enviadas pelos usuários para encontrar a estrela K-POP mais parecida.' },
        { title: '2. Obrigações do usuário', body: 'Os usuários não devem enviar fotos de terceiros ou imagens que infrinjam direitos alheios, incluindo direitos autorais e direitos de imagem. Tampouco devem usar imagens ilegais ou inapropriadas para fazer mau uso do Serviço. O usuário assume total responsabilidade por qualquer violação.' },
        { title: '3. Limitações do serviço', body: 'Os resultados de análise de semelhança fornecidos pelo Serviço são baseados em um modelo de IA e não garantem precisão. São fornecidos estritamente para fins de entretenimento.' },
        { title: '4. Direitos autorais', body: 'Os direitos autorais do design UI/UX, logotipos e código-fonte do Serviço pertencem ao provedor de serviços. Os direitos sobre imagens e informações dos ídolos exibidos nos resultados pertencem às suas respectivas agências ou criadores originais.' },
        { title: '5. Modificação e suspensão do serviço', body: 'O provedor de serviços pode modificar ou suspender partes ou a totalidade do Serviço sem aviso prévio.' },
        { title: '6. Informações de contato', body: 'Se tiver dúvidas sobre estes Termos de Serviço, entre em contato:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: 4 مارس 2026',
      sections: [
        { title: '1. الغرض من الخدمة', body: 'K-POP STUDIO (يُشار إليه بـ"الخدمة") هو تطبيق ويب مجاني لأغراض ترفيهية يحلل الصور التي يرفعها المستخدمون للعثور على نجم K-POP الأكثر تشابهًا.' },
        { title: '2. التزامات المستخدم', body: 'لا يجوز للمستخدمين رفع صور لأشخاص آخرين أو صور تنتهك حقوق الآخرين بما فيها حقوق الملكية الفكرية وحقوق الصورة. كما لا يجوز إساءة استخدام الخدمة بصور غير قانونية أو غير لائقة. يتحمل المستخدم كامل المسؤولية عن أي انتهاكات.' },
        { title: '3. قيود الخدمة', body: 'نتائج تحليل التشابه المقدمة من الخدمة مبنية على نموذج ذكاء اصطناعي ولا تضمن الدقة، وتُقدَّم للأغراض الترفيهية فحسب.' },
        { title: '4. حقوق الملكية الفكرية', body: 'تعود حقوق الملكية الفكرية لتصميم واجهة المستخدم والشعارات والكود المصدري إلى مزود الخدمة. تعود حقوق صور ومعلومات الأيدول المعروضة في النتائج إلى وكالاتهم المعنية أو المبدعين الأصليين.' },
        { title: '5. تعديل الخدمة وتعليقها', body: 'يجوز لمزود الخدمة تعديل أو تعليق جزء أو كل الخدمة دون إشعار مسبق.' },
        { title: '6. معلومات الاتصال', body: 'لأي استفسارات حول هذه الشروط، تواصل معنا:\nالبريد الإلكتروني: support@kpopstudio.ai' }
      ]
    },
    th: {
      title: 'ข้อกำหนดในการให้บริการ',
      lastUpdated: 'อัปเดตล่าสุด: 4 มีนาคม 2026',
      sections: [
        { title: '1. วัตถุประสงค์ของบริการ', body: 'K-POP STUDIO (ต่อไปนี้เรียกว่า "บริการ") เป็นเว็บแอปพลิเคชันฟรีเพื่อความบันเทิงที่วิเคราะห์ภาพที่ผู้ใช้อัปโหลดเพื่อค้นหาศิลปิน K-POP ที่หน้าตาคล้ายที่สุด' },
        { title: '2. หน้าที่ของผู้ใช้', body: 'ผู้ใช้ต้องไม่อัปโหลดรูปถ่ายของผู้อื่นหรือภาพที่ละเมิดสิทธิ์ของผู้อื่น รวมถึงลิขสิทธิ์และสิทธิ์ภาพเหมือน รวมถึงต้องไม่ใช้ภาพที่ผิดกฎหมายหรือไม่เหมาะสมในทางที่ผิด ผู้ใช้รับผิดชอบต่อผลที่เกิดจากการละเมิดข้อกำหนดเหล่านี้' },
        { title: '3. ข้อจำกัดของบริการ', body: 'ผลการวิเคราะห์ความคล้ายคลึงที่บริการให้ไว้นั้นอ้างอิงจากโมเดล AI และไม่รับประกันความแม่นยำ ให้บริการเพื่อความบันเทิงเท่านั้น' },
        { title: '4. ลิขสิทธิ์', body: 'ลิขสิทธิ์ในการออกแบบ UI/UX โลโก้ และซอร์สโค้ดของบริการเป็นของผู้ให้บริการ สิทธิ์ในภาพและข้อมูลของไอดอลที่แสดงในผลลัพธ์เป็นของต้นสังกัดหรือผู้สร้างต้นฉบับ' },
        { title: '5. การแก้ไขและการระงับบริการ', body: 'ผู้ให้บริการอาจแก้ไขหรือระงับส่วนหนึ่งหรือทั้งหมดของบริการโดยไม่แจ้งล่วงหน้า' },
        { title: '6. ข้อมูลการติดต่อ', body: 'หากมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้ โปรดติดต่อเรา:\nอีเมล: support@kpopstudio.ai' }
      ]
    },
    vi: {
      title: 'Điều khoản Dịch vụ',
      lastUpdated: 'Cập nhật lần cuối: 4 tháng 3, 2026',
      sections: [
        { title: '1. Mục đích dịch vụ', body: 'K-POP STUDIO (sau đây gọi là "Dịch vụ") là ứng dụng web miễn phí với mục đích giải trí, phân tích hình ảnh người dùng tải lên để tìm ngôi sao K-POP giống nhất.' },
        { title: '2. Nghĩa vụ của người dùng', body: 'Người dùng không được tải lên ảnh của người khác hoặc hình ảnh vi phạm quyền của người khác, bao gồm bản quyền và quyền hình ảnh. Không được lạm dụng Dịch vụ bằng hình ảnh bất hợp pháp hoặc không phù hợp. Người dùng chịu toàn bộ trách nhiệm đối với mọi vi phạm.' },
        { title: '3. Giới hạn của dịch vụ', body: 'Kết quả phân tích điểm giống nhau do Dịch vụ cung cấp dựa trên mô hình AI và không đảm bảo độ chính xác. Chỉ được cung cấp cho mục đích giải trí.' },
        { title: '4. Bản quyền', body: 'Bản quyền đối với thiết kế UI/UX, logo và mã nguồn của Dịch vụ thuộc về nhà cung cấp dịch vụ. Quyền đối với hình ảnh và thông tin của các idol hiển thị trong kết quả thuộc về các công ty quản lý hoặc người tạo ra tương ứng.' },
        { title: '5. Sửa đổi và đình chỉ dịch vụ', body: 'Nhà cung cấp dịch vụ có thể sửa đổi hoặc đình chỉ một phần hoặc toàn bộ Dịch vụ mà không cần thông báo trước.' },
        { title: '6. Thông tin liên hệ', body: 'Nếu có câu hỏi về Điều khoản này, vui lòng liên hệ:\nEmail: support@kpopstudio.ai' }
      ]
    },
    ru: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление: 4 марта 2026 г.',
      sections: [
        { title: '1. Цель сервиса', body: 'K-POP STUDIO (далее «Сервис») — бесплатное веб-приложение для развлечений, которое анализирует загружаемые пользователями изображения для поиска наиболее похожей звезды K-POP.' },
        { title: '2. Обязанности пользователя', body: 'Пользователям запрещено загружать фотографии других людей или изображения, нарушающие права третьих лиц, включая авторские и смежные права. Также запрещено злоупотреблять Сервисом с использованием незаконных или неприемлемых материалов. Пользователь несёт полную ответственность за любые нарушения.' },
        { title: '3. Ограничения сервиса', body: 'Результаты анализа сходства, предоставляемые Сервисом, основаны на модели ИИ и не гарантируют точности. Они предоставляются исключительно в развлекательных целях.' },
        { title: '4. Авторские права', body: 'Авторские права на дизайн UI/UX, логотипы и исходный код Сервиса принадлежат поставщику услуг. Права на изображения и информацию об айдолах, отображаемые в результатах, принадлежат их соответствующим агентствам или первоначальным авторам.' },
        { title: '5. Изменение и приостановка сервиса', body: 'Поставщик услуг вправе изменить или приостановить часть или весь Сервис без предварительного уведомления.' },
        { title: '6. Контактная информация', body: 'По вопросам, связанным с настоящими Условиями, обращайтесь:\nEmail: support@kpopstudio.ai' }
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

        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-orange">
          {data.title}
        </h1>
        <p className="text-slate-400 font-mono text-sm mb-12">{data.lastUpdated}</p>

        <div className="space-y-8">
          {data.sections.map((section: { title: string, body: string }, index: number) => (
            <div key={index}>
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-blue inline-block"></span>
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

export default TermsOfService;
