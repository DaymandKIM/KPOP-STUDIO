import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language as 'ko' | 'en';

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
        {
          title: '1. Purpose of Service',
          body: 'K-POP STUDIO (hereinafter "the Service") is a free web application for entertainment purposes that analyzes user-uploaded images to find the most resembling K-POP star.'
        },
        {
          title: '2. User Obligations',
          body: 'Users must not upload photos of others or images that infringe on the rights of others, including copyrights and portrait rights. Furthermore, users must not misuse the Service by using illegal or inappropriate images. The user bears all responsibility for any issues arising from violations of these terms.'
        },
        {
          title: '3. Service Limitations',
          body: 'The lookalike analysis results provided by the Service are based on an AI model and do not guarantee accuracy. They are provided strictly for entertainment purposes only.'
        },
        {
          title: '4. Copyright',
          body: 'The copyrights for the UI/UX design, logos, and source code within the Service belong to the service provider. The rights to the images and information of the idols displayed in the results belong to their respective agencies or original creators.'
        },
        {
          title: '5. Modification and Suspension of Service',
          body: 'The service provider may modify or suspend parts or all of the Service without prior notice.'
        },
        {
          title: '6. Contact Information',
          body: 'If you have any questions regarding these Terms of Service, please contact us at:\nEmail: support@kpopstudio.ai'
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

        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-orange">
          {data.title}
        </h1>
        <p className="text-slate-400 font-mono text-sm mb-12">{data.lastUpdated}</p>

        <div className="space-y-8">
          {data.sections.map((section, index) => (
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
