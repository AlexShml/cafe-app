import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import "../../App.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Header />
      <div className="menu-page__content">
        <Container>
          <Row>
            {menuData.map((menuItem) => (
              <Col key={menuItem.id} sm={6} md={4} lg={3}>
                <div className="menu-page__item">
                  <img
                    className="menu-page__item-image"
                    src={menuItem.image}
                    alt={menuItem.name}
                  />
                  <h3 className="menu-page__item-title">{menuItem.name}</h3>
                  <p className="menu-page__item-description">
                    {menuItem.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
