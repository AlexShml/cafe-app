import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function MenuSection() {
  return (
    <section className="menu-section" id="menu-section">
      <Container>
        <h2 className="text-center">
          <span>our special dishes</span>
        </h2>
        <Row className="d-flex justify-content-center">
          <Col className="text-center">
            <ul>
              <li>
                <span>shawarma with chicken - 8 lari.</span>
              </li>
              <li>
                <span>shawarma with beef - 12 lari.</span>
              </li>
              <li>
                <span>shawarma from the chef - 15 lari.</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MenuSection;
