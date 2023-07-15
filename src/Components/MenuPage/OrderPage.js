import React, { useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Header from "../Header";
import menuData from "./menuData.json";

function OrderPage({ selectedItems }) {
  console.log("selectedItems in OrderPage:", selectedItems);

  useEffect(() => {
    console.log("selectedItems:", selectedItems);
    console.log("menuData:", menuData);
  }, [selectedItems]);

  // Фильтруем элементы меню на основе выбранных элементов
  const orderedItems = menuData.filter((menuItem) =>
    selectedItems.includes(menuItem.id)
  );

  return (
    <div>
      <Header />
      <Container>
        <h1>Your Order</h1>
        {orderedItems.length > 0 ? (
          <Row>
            {orderedItems.map((menuItem) => (
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
