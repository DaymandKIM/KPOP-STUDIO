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
    }
  };

  const data = (content as any)[i18n.language] || content.en;

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
