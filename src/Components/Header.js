import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

function Header() {
  return (
    <header className="Header">
      <Navbar>
        <Container className="justify-content-center">
          <Nav className="mr-auto bold-large-text">
            <Nav.Link href="/menu">Меню</Nav.Link>
            <Nav.Link href="/#about-section">О нас</Nav.Link>
            <Nav.Link href="/#contact-section">Контакты</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
