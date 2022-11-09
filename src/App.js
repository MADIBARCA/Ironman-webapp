import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";
import VerificationPage from "./pages/verification-page/VerificationPage";

import "./App.css";
import AssetPage from "./pages/asset-page/AssetPage";
import { useSelector } from "react-redux";

const App = () => {
  const token = useSelector((state) => state.verification.accessToken);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {token ? (
        <>
          <Route path={`/asset/:assetId`} element={<AssetPage />} />

          <Route
            path="/verification"
            element={<Navigate to="/asset/:assetId" />}
          />
        </>
      ) : (
        <>
          <Route path="/verification" element={<VerificationPage />} />
          <Route
            path={`/asset/:assetId`}
            element={<Navigate to="/verification" />}
          />
        </>
      )}
    </Routes>
  );
};

export default App;
