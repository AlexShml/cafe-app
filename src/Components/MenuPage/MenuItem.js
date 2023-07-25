import React from "react";
import { Col } from "react-bootstrap";
import "../../App.css";
import AddToOrderButton from "./AddToOrderButton";

function MenuItem({ menuItem }) {
  return (
    <Col className="equal-height-column" key={menuItem.id} sm={6} md={4} lg={3}>
      <div className="menu-page__item">
        <img
          className="menu-page__item-image"
          src={menuItem.image}
          alt={menuItem.name}
        />
        <h3 className="menu-page__item-title">{menuItem.name}</h3>
        <p className="menu-page__item-description">{menuItem.description}</p>
        <AddToOrderButton menuItem={menuItem} />
      </div>
    </Col>
  );
}

export default MenuItem;
