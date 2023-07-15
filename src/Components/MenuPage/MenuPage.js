import React from "react";
import { Container, Button } from "react-bootstrap";
import menuData from "./menuData.json";
import Header from "../Header";
import MemoizedEqualHeightRow from "./MemoizedEqualHeightRow";
import "../../App.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Header />
      <div>
        <Container>
          <MemoizedEqualHeightRow menuData={menuData} />
        </Container>
      </div>
    </div>
  );
}

export default MenuPage;
