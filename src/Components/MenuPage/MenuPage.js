import React from "react";
import { Container, Row } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import MenuItem from "./MenuItem";
import EqualHeightRow from "./EqualHeightRow";
import "../../App.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Header />
      <div>
        <Container>
          <EqualHeightRow className="menu-page__content">
            {menuData.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          </EqualHeightRow>
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
