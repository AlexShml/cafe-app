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

{
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
}

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
