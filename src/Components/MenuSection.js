import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function MenuSection() {
  return (
    <section className="menu-section" id="menu-section">
      <Container>
        <h2 className="text-center">Наше меню</h2>
        <Row className="d-flex justify-content-center">
          <Col className="text-center">
            <ul>
              <li>
                <span>Фирменная шаурма</span> - 100 руб.
              </li>
              <li>
                <span>Рыбка</span> - 50 руб.
              </li>
              <li>
                <span>Булка</span> - 80 руб.
              </li>
              <li>
                <span>Кола</span> - 100 руб.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MenuSection;
