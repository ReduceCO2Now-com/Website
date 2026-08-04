import { Route, Routes, useParams } from "react-router-dom"
import { supportedLngs } from "./i18n";
import { useTranslation } from "react-i18next";
import { Home } from "./pages/home";
import { NavigationBar } from "./components/Navigationbar";
import { useEffect } from "react";

export const LanguageWrapper = () => {
    const { lang } = useParams();
    const finalLang = supportedLngs.includes(lang!) ? lang! : "en";
    const { i18n } = useTranslation();
    
    useEffect(() => {
        i18n.changeLanguage(finalLang);
    },[finalLang])

    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}