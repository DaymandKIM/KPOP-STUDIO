import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      "app_title": "K-POP STUDIO",
      "app_subtitle": "Find your K-pop Star Lookalike",
      "upload_instruction": "Upload or take a photo to see which K-pop star you resemble most!",
      "upload_btn": "Upload Photo",
      "camera_btn": "Use Camera",
      "analyzing": "Analyzing facial features...",
      "match_found": "Match Found!",
      "similarity": "Similarity",
      "try_again": "Try Again",
      "error_model": "Failed to load the AI model.",
      "error_image": "Failed to process the image.",
      "loading_model": "Loading AI Model...",
    }
  },
  ko: {
    translation: {
      "app_title": "K-POP 스튜디오",
      "app_subtitle": "나와 닮은 K-pop 스타 찾기",
      "upload_instruction": "사진을 업로드하거나 촬영하여 어떤 K-pop 스타와 가장 닮았는지 확인해 보세요!",
      "upload_btn": "사진 업로드",
      "camera_btn": "카메라 사용",
      "analyzing": "얼굴 특징 분석 중...",
      "match_found": "매칭 완료!",
      "similarity": "일치율",
      "try_again": "다시 하기",
      "error_model": "AI 모델을 불러오는데 실패했습니다.",
      "error_image": "이미지를 처리하는데 실패했습니다.",
      "loading_model": "AI 모델 로딩 중...",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
