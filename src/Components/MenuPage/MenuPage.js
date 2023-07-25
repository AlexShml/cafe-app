import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import EqualHeightRow from "./EqualHeightRow";
import MenuItem from "./MenuItem";
import "../../App.css";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("/api/menu") // Отправляем GET-запрос на API для получения меню
      .then((response) => response.json())
      .then((respJson) => setMenuData(respJson))
      .catch((error) => console.error("Ошибка при загрузке меню:", error));
  }, []);

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
