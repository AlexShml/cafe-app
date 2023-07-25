import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import "../../App.css";

function AddToOrderButton({ menuItem }) {
  const selectedItemsRef = useRef([]);

  const handleAddToOrder = (itemId) => {
    selectedItemsRef.current.push(itemId);
  };

  // Функция для отправки данных на бэкенд
  const handleSaveSelectedItems = async () => {
    try {
      await handleAddToOrder(menuItem.id);
      await fetch("api/saveSelectedItems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: selectedItemsRef.current }),
      });
      console.log("Выбранные элементы сохранены на бэкенде.");
    } catch (error) {
      console.error(
        "Ошибка при сохранении выбранных элементов на бэкенде:",
        error
      );
    }
  };

  return (
    <div className="menu-page__item-counter d-flex justify-content-center">
      <Button
        className="menu-page__item-add-button"
        variant="primary"
        size="sm"
        onClick={handleSaveSelectedItems}
      >
        Add
      </Button>
    </div>
  );
}

export default AddToOrderButton;
