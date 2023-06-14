import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsENUS from "../locale/enUS.json";
import translationsPTBR from "../locale/ptBR.json";

i18n.use(initReactI18next).init({
  resources: {
    enUS: {
      translation: translationsENUS,
    },
    ptBR: {
      translation: translationsPTBR,
    },
  },
  lng: "ptBR",
  fallbackLng: "enUS",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
