import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import "../../App.css";

function MenuItem({ menuItem }) {
  const [itemsCount, setItemsCount] = useState({});

  const handleIncrement = (itemId) => {
    setItemsCount((prevItemsCount) => {
      const newItemsCount = {
        ...prevItemsCount,
        [itemId]: (prevItemsCount[itemId] || 0) + 1,
      };
      console.log(newItemsCount);
      localStorage.setItem("itemsCount", JSON.stringify(newItemsCount));
      return newItemsCount;
    });
  };

  const handleDecrement = (itemId) => {
    setItemsCount((prevItemsCount) => ({
      ...prevItemsCount,
      [itemId]: Math.max((prevItemsCount[itemId] || 0) - 1, 0),
    }));
  };

  const handleAddToOrder = (itemId) => {
    console.log(`itemsCount>>>`, JSON.stringify(itemsCount));
    const orderItems = JSON.parse(localStorage.getItem("orderItems")) || {};
    const updatedOrderItems = {
      ...orderItems,
      ...itemsCount,
    };
    localStorage.setItem("orderItems", JSON.stringify(updatedOrderItems));
  };

  return (
    <Col key={menuItem.id} sm={6} md={4} lg={3}>
      <div className="menu-page__item">
        <img
          className="menu-page__item-image"
          src={menuItem.image}
          alt={menuItem.name}
        />
        <h3 className="menu-page__item-title">{menuItem.name}</h3>
        <p className="menu-page__item-description">{menuItem.description}</p>
        <div className="menu-page__item-counter">
          <Button
            className="menu-page__item-minus-button "
            variant="outline-primary"
            size="sm"
            onClick={() => handleDecrement(menuItem.id)}
          >
            -
          </Button>
          <span className="menu-page__item-count">
            {itemsCount[menuItem.id] || 0}
          </span>
          <Button
            className="menu-page__item-plus-button"
            variant="outline-primary"
            size="sm"
            onClick={() => handleIncrement(menuItem.id)}
          >
            +
          </Button>
          <Button
            className="menu-page__item-add-button"
            variant="primary"
            size="sm"
            onClick={() => handleAddToOrder(menuItem.id)}
          >
            Добавить
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default MenuItem;
