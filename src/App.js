import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import OrderPage from "./Components/MenuPage/OrderPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
