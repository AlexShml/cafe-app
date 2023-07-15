import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import OrderPage from "./Components/MenuPage/OrderPage";
import { MenuContext } from "./Components/MenuPage/MenuContext";

function App() {
  const { selectedItems } = useContext(MenuContext);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route
          path="/order"
          element={<OrderPage selectedItems={selectedItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
