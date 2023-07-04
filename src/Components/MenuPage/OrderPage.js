import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

function OrderPage() {
  const itemsCount = JSON.parse(localStorage.getItem("orderItems")) || {};

  // Фильтруем элементы меню, у которых количество больше 0
  const orderedItems = Object.keys(itemsCount).filter(
    (itemId) => itemsCount[itemId] > 0
  );

  return (
    <Container>
      <h1>Страница заказа</h1>
      {orderedItems.length > 0 ? (
        <Row>
          {orderedItems.map((itemId) => (
            <Col key={itemId} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{`Item ID: ${itemId}`}</Card.Title>
                  <Card.Text>{`Amount: ${itemsCount[itemId]}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Нет выбранных элементов меню</p>
      )}
    </Container>
  );
}

export default OrderPage;
