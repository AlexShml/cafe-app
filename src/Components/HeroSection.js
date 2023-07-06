import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../App.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <Container /* className="justify-content-center" */>
        <Row>
          <Col className="text-center">
            <div className="hero-content">
              <h1>
                <span>Cafe name</span>
              </h1>
              <p>
                <span>
                  Here you will find the most delicious shawarma in town.
                </span>
              </p>
              <Link to="/menu">
                <Button className="HeroSection__Button" variant="primary">
                  Order
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
