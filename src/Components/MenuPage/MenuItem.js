import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import "../../App.css";

function MenuItem({ menuItem }) {
  const handleAddToOrder = (itemId) => {};

  return (
    <Col className="equal-height-column" key={menuItem.id} sm={6} md={4} lg={3}>
      <div className="menu-page__item">
        <img
          className="menu-page__item-image"
          src={menuItem.image}
          alt={menuItem.name}
        />
        <h3 className="menu-page__item-title">{menuItem.name}</h3>
        <p className="menu-page__item-description">{menuItem.description}</p>
        <div className="menu-page__item-counter d-flex justify-content-center">
          <Button
            className="menu-page__item-add-button"
            variant="primary"
            size="sm"
            onClick={() => handleAddToOrder(menuItem.id)}
          >
            Add
          </Button>
        </div>
      </div>
    </Col>
  );
}

export default MenuItem;
