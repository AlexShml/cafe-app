import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import OrderPage from "./Components/MenuPage/OrderPage";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToOrder = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = [...prevSelectedItems, itemId];
      console.log("newSelectedItems>>>", newSelectedItems);

      return newSelectedItems;
    });
  };

  console.log("selectedItems>>>", selectedItems);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/menu"
          element={<MenuPage handleAddToOrder={handleAddToOrder} />}
        />
        <Route
          path="/order"
          element={<OrderPage selectedItems={selectedItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
