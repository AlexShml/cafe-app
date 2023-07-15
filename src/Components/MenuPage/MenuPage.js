import React from "react";
import { Container } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import EqualHeightRow from "./EqualHeightRow";
import MenuItem from "./MenuItem";

import "../../App.css";

function MenuPage({ handleAddToOrder }) {
  return (
    <div className="menu-page">
      <Header />
      <div>
        <Container>
          <EqualHeightRow className="menu-page__content">
            {menuData.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                menuItem={menuItem}
                handleAddToOrder={handleAddToOrder}
              />
            ))}
          </EqualHeightRow>
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
