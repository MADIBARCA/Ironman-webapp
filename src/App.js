import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import VerificationPage from "./pages/verification-page/VerificationPage";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/verification" element={<VerificationPage />} />
    </Routes>
  );
};

export default App;
