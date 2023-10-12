interface TranslationData {
  [key: string]: any;
}

const locales: { [key: string]: () => Promise<TranslationData> } = {
  en: () => import("../en.json").then((r) => r.default),
  pt: () => import("../pt.json").then((r) => r.default)
};

export const getTranslation = (lang: string): Promise<TranslationData> => {
  const selectedLang = locales[lang] ? locales[lang] : locales.pt;
  return Promise.resolve(selectedLang());
}
