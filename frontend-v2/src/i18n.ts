import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  HttpBackend  from "i18next-http-backend";

export const supportedLngs = ["en", "es", "fr", "de", "it"];

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs,
        debug: true,
        interpolation :{
            escapeValue: false
        }
    });

export default i18n;