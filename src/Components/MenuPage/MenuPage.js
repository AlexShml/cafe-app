import React from "react";
import { Container, Row } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import MenuItem from "./MenuItem";
import "../../App.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Header />
      <div className="menu-page__content">
        <Container>
          <Row>
            {menuData.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
