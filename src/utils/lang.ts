export const getLangText = (obj: Record<string, string | undefined> | undefined | null, lang: string): string => {
  if (!obj) return '';
  return obj[lang] || obj['en'] || obj['ko'] || '';
};

export const getLangArray = (arrObj: Record<string, string[] | undefined> | undefined | null, lang: string): string[] => {
  if (!arrObj) return [];
  return arrObj[lang] || arrObj['en'] || arrObj['ko'] || [];
};
