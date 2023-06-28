import React from "react";
import { Col, Button } from "react-bootstrap";
import "../../App.css";

function MenuItem({
  menuItem,
  handleIncrement,
  handleDecrement,
  handleAddToOrder,
  itemCount,
}) {
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
            {itemCount[menuItem.id] || 0}
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
