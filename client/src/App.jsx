import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home";
import { NotFound } from "@/pages/404";
import { LanguageProvider } from "@/assets/translations/languageProvider";
import { PrivacyPolicy } from "@/pages/privacy-policy";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
