import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { MenuContext } from "./MenuContext";
import "../../App.css";

function AddToOrderButton({ menuItem }) {
  // const [selectedItems, setSelectedItems] = useState([]);
  // const handleAddToOrder = (itemId) => {
  //   setSelectedItems((prevSelectedItems) => {
  //     const newSelectedItems = [...prevSelectedItems, itemId];
  //     return newSelectedItems;
  //   });
  // };

  const { AddToOrder } = useContext(MenuContext);

  const handleAddToOrder = (itemId) => {
    AddToOrder(itemId);
  };

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
