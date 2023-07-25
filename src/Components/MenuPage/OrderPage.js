import React, { useEffect, useState } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Header from "../Header";
import "../../App.css";

function OrderPage() {
  const [menuData, setMenuData] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    fetch("/api/menu") // Отправляем GET-запрос на API для получения меню
      .then((response) => response.json())
      .then((respJson) => setMenuData(respJson))
      .catch((error) => console.error("Ошибка при загрузке меню:", error));

    fetch("/api/getSelectedItems") // Отправляем GET-запрос на API для получения выбранных элементов
      .then((response) => response.json())
      .then((respJson) => setOrderedItems(respJson))
      .catch((error) =>
        console.error("Ошибка при загрузке выбранных элементов:", error)
      );
  }, []);

  // Фильтруем элементы меню на основе выбранных элементов
  const order = menuData.filter((menuItem) =>
    orderedItems.includes(menuItem.id)
  );

  return (
    <div>
      <Header />
      <Container>
        <h1>Your Order</h1>
        {order.length > 0 ? (
          <Row>
            {order.map((menuItem) => (
              <Col key={menuItem.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title>{menuItem.name}</Card.Title>
                    <Card.Text>{menuItem.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No menu items selected</p>
        )}
      </Container>
    </div>
  );
}

export default OrderPage;

/* <Button
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
          </Button> */

// const [itemsCount, setItemsCount] = useState({});

// const handleIncrement = (itemId) => {
//   setItemsCount((prevItemsCount) => {
//     const newItemsCount = {
//       ...prevItemsCount,
//       [itemId]: (prevItemsCount[itemId] || 0) + 1,
//     };
//     console.log(newItemsCount);
//     localStorage.setItem("itemsCount", JSON.stringify(newItemsCount));
//     return newItemsCount;
//   });
// };

// const handleDecrement = (itemId) => {
//   setItemsCount((prevItemsCount) => ({
//     ...prevItemsCount,
//     [itemId]: Math.max((prevItemsCount[itemId] || 0) - 1, 0),
//   }));
// };
