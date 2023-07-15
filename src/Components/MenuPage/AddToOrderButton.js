import React from "react";
import { Button } from "react-bootstrap";
import "../../App.css";

function AddToOrderButton({ menuItem, handleAddToOrder }) {
  return (
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
  );
}

export default AddToOrderButton;
