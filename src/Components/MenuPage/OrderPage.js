import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ClearOrderButton } from "./ClearOrderButton";
import Header from "../Header";
import { OrderCard } from "./OrderCard";

import "../../App.css";

function OrderPage() {
  const [menuData, setMenuData] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderCleared, setOrderCleared] = useState(false); // Добавляем состояние для отслеживания очистки заказа
  console.log("orderCleared>>>", orderCleared);

  useEffect(() => {
    fetch("/api/menu") // Отправляем GET-запрос на API для получения меню
      .then((response) => response.json())
      .then((respJson) => setMenuData(respJson))
      .catch((error) => console.error("Ошибка при загрузке меню:", error));

    fetch("/api/getSelectedItems") // Отправляем GET-запрос на API для получения выбранных элементов
      .then((response) => response.json())
      .then((respJson) => {
        setOrderedItems(respJson);
      })
      .catch((error) =>
        console.error("Ошибка при загрузке выбранных элементов:", error)
      );
    console.log("useeff orderCleared>>>", orderCleared);
  }, [orderCleared]);

  // Фильтруем элементы меню на основе выбранных элементов
  const order = menuData.filter((menuItem) =>
    orderedItems.includes(menuItem.id)
  );

  // Функция для принудительной перерисовки компонента
  const forceUpdate = () => orderCleared((prev) => !prev);

  return (
    <div>
      <Header />
      <Container>
        <h1 className="text-center">
          <span>Your Order</span>
        </h1>
        {order.length > 0 ? (
          <Row className="d-flex flex-column align-items-center">
            {order.map((menuItem) => (
              <OrderCard key={menuItem.id} menuItem={menuItem} />
            ))}
          </Row>
        ) : (
          <p className="text-center">No menu items selected</p>
        )}
      </Container>
      <ClearOrderButton setOrderCleared={setOrderCleared} />
    </div>
  );
}

export default OrderPage;
