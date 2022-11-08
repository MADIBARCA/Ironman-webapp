import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import VerificationPage from "./pages/verification-page/VerificationPage";

import "./App.css";
import AssetPage from "./pages/asset-page/AssetPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/verification" element={<VerificationPage />} />
      <Route path={`/asset/:assetId`} element={<AssetPage />} />
    </Routes>
  );
};

export default App;
