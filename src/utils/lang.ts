export const getLangText = (obj: any, lang: string): string => {
  if (!obj) return '';
  return obj[lang] || obj['en'] || obj['ko'] || '';
};

export const getLangArray = (arrObj: any, lang: string): string[] => {
  if (!arrObj) return [];
  return arrObj[lang] || arrObj['en'] || arrObj['ko'] || [];
};
