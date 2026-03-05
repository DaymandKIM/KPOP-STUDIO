import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as 'ko' | 'en';

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
        {
          title: '1. Information We Collect',
          body: 'K-POP STUDIO (hereinafter "the Service") uses images uploaded or captured via camera from the user\'s device for facial recognition features. These images are processed strictly within the user\'s browser and are NEVER transmitted to or stored on any server.'
        },
        {
          title: '2. Use of Information',
          body: 'The uploaded images are used solely for one-time AI model analysis (via Teachable Machine) to find the most resembling K-POP star.'
        },
        {
          title: '3. Third-Party Disclosure',
          body: 'The Service does not provide, sell, or share user images or personal information with any third parties.'
        },
        {
          title: '4. Cookies and Advertising (Google AdSense)',
          body: 'The Service uses Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to our website or other websites. Users may opt out of personalized advertising by visiting Google Ads Settings.'
        },
        {
          title: '5. Data Security',
          body: 'Since the Service does not store images on servers, there is no risk of data breaches regarding your photos. All processing happens in your local environment (browser).'
        },
        {
          title: '6. Contact Us',
          body: 'If you have any questions regarding this Privacy Policy, please contact us at:\nEmail: support@kpopstudio.ai'
        }
      ]
    }
  };

  const data = content[currentLang] || content.en;

  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans p-6 md:p-12 relative overflow-hidden flex justify-center">
      <div className="scanlines"></div>
      
      <div className="max-w-4xl w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono uppercase text-sm mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          {currentLang === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
        </button>

        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
          {data.title}
        </h1>
        <p className="text-slate-400 font-mono text-sm mb-12">{data.lastUpdated}</p>

        <div className="space-y-8">
          {data.sections.map((section, index) => (
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
