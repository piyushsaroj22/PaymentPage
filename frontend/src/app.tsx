import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import HistoryPage from "./pages/HistoryPage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
