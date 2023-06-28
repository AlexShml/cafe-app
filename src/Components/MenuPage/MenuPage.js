import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import MenuItem from "./MenuItem";
import "../../App.css";

function MenuPage() {
  const [itemsCount, setItemsCount] = useState({});

  const handleIncrement = (itemId) => {
    setItemsCount((prevItemsCount) => ({
      ...prevItemsCount,
      [itemId]: (prevItemsCount[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setItemsCount((prevItemsCount) => ({
      ...prevItemsCount,
      [itemId]: Math.max((prevItemsCount[itemId] || 0) - 1, 0),
    }));
  };

  const handleAddToOrder = (itemId) => {
    const count = itemsCount[itemId] || 0;
    console.log(`Item ${itemId} added to order with quantity ${count}`);
  };

  return (
    <div className="menu-page">
      <Header />
      <div className="menu-page__content">
        <Container>
          <Row>
            {menuData.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleAddToOrder={handleAddToOrder}
                itemCount={itemsCount}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
