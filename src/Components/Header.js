import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";

function Header() {
  return (
    <header className="Header">
      <Navbar>
        <Container className="justify-content-center">
          <Nav className="mr-auto bold-large-text">
            <Nav.Link href="/menu">
              <span>Menu</span>
            </Nav.Link>
            <Nav.Link href="/#about-section">
              <span>About us</span>
            </Nav.Link>
            <Nav.Link href="/#contact-section">
              <span>Contacts</span>
            </Nav.Link>
            <Nav.Link href="/order">
              <span>Your Order</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
