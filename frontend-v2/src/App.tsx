import { Navigate, Route, Routes } from "react-router-dom"
import "./theme.scss";
import { LanguageWrapper } from "./LanguageWrapper";


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang/*" element={<LanguageWrapper />} />
      </Routes>
    </>
  )
}

export default App
