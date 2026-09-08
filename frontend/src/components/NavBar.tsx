import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../services/services";
import { NavBarOption } from "./NavBarOptions";
import type { Language } from "../services/util";

const NavBar = () => {
  const languageList = useQuery({
    queryKey: ["languages"],
    queryFn: async () => {
      const res = await axios.get(`${API}/i18n/locales`);
      return res.data;
    },
  });
  const location = useLocation();
  if (languageList.isLoading) {
    return <Loader>Loading navbar...</Loader>;
  }

  const handleChange = (lang: string) => {
    const segments = location.pathname.split("/");
    segments[1] = lang;
    window.location.href = segments.join("/");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link
          to={`/${location.pathname.split("/")[1] || "en"}`}
          className="logo"
        >
          <img src="/assets/ReduceCO2Nowlogo.png" alt="ReduceCO2Now home" />
        </Link>
        <Routes>
          <Route path="/en/*" element={<NavBarOption locale="en" />} />
          <Route path="/es/*" element={<NavBarOption locale="es" />} />
        </Routes>
        {!languageList.isLoading && (
          <select
            onChange={({ target }) => handleChange(target.value)}
            defaultValue={location.pathname.split("/")[1]}
          >
            {(languageList.data ?? []).map((language: Language) => {
              return (
                <option key={language.id} value={language.code}>
                  {language.name}
                </option>
              );
            })}
          </select>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
