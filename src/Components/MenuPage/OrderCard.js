import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import "../../App.css";

export const OrderCard = ({ menuItem }) => {
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

  return (
    <Col key={menuItem.id} xs={12} sm={6} md={4} lg={3}>
      <Card className="order-page__item mb-3 ">
        <Card.Body>
          <Card.Title className="text-center">{menuItem.name}</Card.Title>
          <Card.Text className="text-center">{menuItem.description}</Card.Text>
          <div className="d-flex justify-content-center">
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
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
