import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";
import RefundPolicyPage from "./pages/RefundPolicyPage.tsx";
import TermsPage from "./pages/TermsPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
