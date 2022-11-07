import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage";

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
