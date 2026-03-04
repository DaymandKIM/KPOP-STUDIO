import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "app_title": "KPOP STUDIO",
      "app_subtitle": "Star Lookalike Analysis",
      "upload_instruction": "Upload your photo to find your K-pop star lookalike through AI analysis.",
      "upload_btn": "Start Analysis",
      "camera_btn": "Use Camera",
      "analyzing": "Analyzing facial features...",
      "match_found": "Analysis Complete!",
      "similarity": "Similarity",
      "try_again": "Try Again",
      "error_model": "System error: AI model offline.",
      "error_image": "Data error: Image processing failed.",
      "loading_model": "Booting Analysis Engine...",
      "nav_identification": "Find Lookalike",
      "nav_encyclopedia": "Idol Encyclopedia",
      "search_placeholder": "Search K-pop Stars...",
      "class": "Position",
      "element": "Vibe",
      "vanguard": "Center",
      "scout": "Visual",
      "striker": "Main Vocal",
      "supporter": "Main Dancer",
      "fire": "Energetic",
      "water": "Cool",
      "electric": "Charismatic",
      "dark": "Chic",
      "light": "Pure",
      "hunter_details": "Star Profile"
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
      "match_found": "매칭 완료!",
      "similarity": "일치율",
      "try_again": "다시 하기",
      "error_model": "시스템 오류: AI 모델을 불러올 수 없습니다.",
      "error_image": "데이터 오류: 이미지 처리에 실패했습니다.",
      "loading_model": "분석 엔진 가동 중...",
      "nav_identification": "닮은꼴 찾기",
      "nav_encyclopedia": "아이돌 백과사전",
      "search_placeholder": "아이돌 검색...",
      "class": "포지션",
      "element": "분위기",
      "vanguard": "센터",
      "scout": "비주얼",
      "striker": "메인 보컬",
      "supporter": "메인 댄서",
      "fire": "에너지",
      "water": "쿨",
      "electric": "카리스마",
      "dark": "시크",
      "light": "청순",
      "hunter_details": "스타 프로필"
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
