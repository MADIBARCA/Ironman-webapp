import { Route, Routes, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import "./App.css";

import HomePage from "./pages/home-page/HomePage";
import VerificationPage from "./pages/verification-page/VerificationPage";
import AssetPage from "./pages/asset-page/AssetPage";
import PurchasePage from "./pages/purchase-page/PurchasePage";

const App = () => {
  const token = useSelector((state) => state.verification.accessToken);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {token ? (
        <>
          <Route path={`/asset`} element={<AssetPage />} />
          <Route path={`/purchase`} element={<PurchasePage />}/>
          <Route path="/verification" element={<Navigate to="/asset" />} />
        </>
      ) : (
        <>
          <Route path="/verification" element={<VerificationPage />} />
          <Route path={`/purchase`} element={<Navigate to="/verification" />}/>
          <Route path={`/asset`} element={<Navigate to="/verification" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
