import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "app_title": "KPOP STUDIO",
      "app_subtitle": "Find Your K-pop Lookalike",
      "upload_instruction": "Upload your photo to find which K-pop star you look like the most using AI analysis.",
      "upload_btn": "Start Analysis",
      "camera_btn": "Use Camera",
      "analyzing": "Analyzing facial features...",
      "match_found": "Analysis Complete!",
      "similarity": "Similarity",
      "try_again": "Try Another Photo",
      "error_model": "System error: AI model offline.",
      "error_image": "Data error: Image processing failed.",
      "loading_model": "Booting Analysis Engine...",
      "nav_identification": "Find Lookalike",
      "nav_encyclopedia": "Idol Encyclopedia",
      "search_placeholder": "Search K-pop Stars...",
      "class": "Position",
      "element": "Company",
      "vanguard": "Center",
      "scout": "Visual",
      "striker": "Main Vocal",
      "supporter": "Main Dancer",
      "fire": "Energetic",
      "water": "Cool",
      "electric": "Charismatic",
      "dark": "Chic",
      "light": "Pure",
      "hunter_details": "Star Profile",
      "about_title": "Welcome to KPOP STUDIO",
      "about_desc": "KPOP STUDIO is your ultimate digital playground where K-pop fandom meets cutting-edge AI. Ever wondered which idol you'd be in a group? Our AI-powered lookalike finder connects you with the stars, while our growing archive keeps you updated on everything you love about the scene.",
      "feature_1_title": "Find Your Idol Twin",
      "feature_1_desc": "Curious about your K-pop counterpart? Our AI analyzes your unique features to find the idol who shares your vibe and visual energy. Discover your 'destiny' match in seconds!",
      "feature_2_title": "The Ultimate Stan Guide",
      "feature_2_desc": "Dive deep into the world of your favorite artists. From debut behind-the-scenes to the latest viral news and member profiles, we've gathered everything to fuel your fandom.",
      "feature_3_title": "Hidden TMIs & Facts",
      "feature_3_desc": "Go beyond the stage! Explore fun facts, MBTI types, and those precious TMI details about idols that only true fans know. It's the perfect place to learn more about your bias."
    }
  },
  ko: {
    translation: {
      "app_title": "KPOP 스튜디오",
      "app_subtitle": "나와 닮은 K-POP 스타 찾기",
      "upload_instruction": "사진을 업로드하여 AI가 분석한 당신과 가장 닮은 K-POP 스타를 찾아보세요.",
      "upload_btn": "분석 시작",
      "camera_btn": "카메라 촬영",
      "analyzing": "얼굴 특징 분석 중...",
      "match_found": "분석 완료!",
      "similarity": "유사도",
      "try_again": "다른 사진으로 시도",
      "error_model": "시스템 오류: AI 모델을 불러올 수 없습니다.",
      "error_image": "데이터 오류: 이미지 처리에 실패했습니다.",
      "loading_model": "분석 엔진 가동 중...",
      "nav_identification": "닮은꼴 찾기",
      "nav_encyclopedia": "아이돌 백과사전",
      "search_placeholder": "아이돌 또는 그룹 검색...",
      "class": "포지션",
      "element": "소속사",
      "vanguard": "센터",
      "scout": "비주얼",
      "striker": "메인 보컬",
      "supporter": "메인 댄서",
      "fire": "에너지",
      "water": "쿨",
      "electric": "카리스마",
      "dark": "시크",
      "light": "청순",
      "hunter_details": "스타 프로필",
      "about_title": "KPOP 스튜디오에 오신 것을 환영합니다!",
      "about_desc": "KPOP 스튜디오는 인공지능 기술과 K-POP 팬덤 문화가 만나는 여러분만의 디지털 놀이터입니다. '내가 아이돌 멤버라면 누구와 가장 닮았을까?'라는 궁금증을 최첨단 AI로 풀어보세요. 닮은꼴 찾기는 물론, 최애 그룹의 깊은 정보까지 한곳에서 즐길 수 있습니다.",
      "feature_1_title": "나의 아이돌 도플갱어 찾기",
      "feature_1_desc": "수천 명의 아티스트 데이터를 학습한 AI가 여러분의 안면 특징을 분석해 가장 닮은 아이돌을 찾아줍니다. 나와 비슷한 분위기를 가진 '운명의 멤버'는 누구일까요?",
      "feature_2_title": "덕질 지수를 높여줄 가이드",
      "feature_2_desc": "좋아하는 그룹의 데뷔 비하인드부터 최근 핫한 뉴스까지! 입덕을 도와줄 상세한 프로필과 최신 소식들을 놓치지 말고 확인하세요.",
      "feature_3_title": "깨알 같은 TMI와 비하인드",
      "feature_3_desc": "무대 위 모습뿐만 아니라 MBTI, 취미, 습관 등 팬들이라면 궁금해할 소소하고 소중한 TMI 정보들을 가득 담았습니다. 최애에 대해 더 깊이 알아가는 시간을 가져보세요!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
