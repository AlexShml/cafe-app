import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function MenuSection() {
  return (
    <section className="menu-section" id="menu-section">
      <Container>
        <h2 className="text-center">
          <span>Наше меню</span>
        </h2>
        <Row className="d-flex justify-content-center">
          <Col className="text-center">
            <ul>
              <li>
                <span>Фирменная шаурма - 100 руб.</span>
              </li>
              <li>
                <span>Рыбка - 50 руб.</span>
              </li>
              <li>
                <span>Булка - 80 руб.</span>
              </li>
              <li>
                <span>Кола - 100 руб.</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MenuSection;
