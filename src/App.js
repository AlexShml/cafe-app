import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MenuPage from "./Components/MenuPage/MenuPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
