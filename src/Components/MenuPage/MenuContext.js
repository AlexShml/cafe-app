import React, { createContext, useState } from "react";
import menuData from "./menuData.json";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const AddToOrder = (itemId) => {
    if (!selectedItems.includes(itemId)) {
      setSelectedItems((prevSelectedItems) => {
        const newSelectedItems = [...prevSelectedItems, itemId];
        console.log("selectedItems>>>", selectedItems);
        return newSelectedItems;
      });
    }
  };
  return (
    <MenuContext.Provider
      value={{ selectedItems, setSelectedItems, AddToOrder, menuData }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
