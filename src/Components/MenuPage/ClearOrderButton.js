import React from "react";
import { Button } from "react-bootstrap";
import "../../App.css";

export const ClearOrderButton = ({ setOrderCleared }) => {
  const handleClearOrder = async () => {
    try {
      await fetch("/api/clearSelectedItems", {
        method: "POST",
      });
      console.log("Файл успешно очищен.");
      // Добавляем таймер перед вызовом setOrderCleared(true)
      setTimeout(() => {
        setOrderCleared(true);
      }, 500); // Устанавливаем задержку в 500 миллисекунд
    } catch (error) {
      console.error("Ошибка при очистке файла:", error);
    }
  };

  return (
    <div className="menu-page__item-counter d-flex justify-content-center">
      <Button
        className="menu-page__item-add-button"
        variant="primary"
        size="sm"
        onClick={handleClearOrder}
      >
        ClearOrder
      </Button>
    </div>
  );
};
