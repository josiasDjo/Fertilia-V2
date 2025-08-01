import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationFR from "./fr.json";
import translationEN from "./en.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "fr",
        resources: {
        fr: { translation: translationFR },
        en: { translation: translationEN },
        },
        interpolation: {
        escapeValue: false,
        },
    });

export default i18n;
