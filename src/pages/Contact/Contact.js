import React from "react";
import { Container, Card, Image, Row, Col } from "react-bootstrap";
import "./style.css";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import locationImage from "../../assets/images/location.png";

const Contact = () => {
  return (
    <React.Fragment>
      <Container className="mt-5">
        <Row>
          <Col xs={7}>
            <Container>
                <h1>Address</h1>
              <Card id="card">
               
                <Card.Body>
                  <Card.Title >
                  22722 29th Drive SE, 
                  Suite 100 Bothell, 
                  Washington, 98021
                </Card.Title>
                <Card.Link href="mailto:paul.mai@datascience9.com">
                  paul.mai@datascience9.com
                </Card.Link>
                <Card.Link href="tel:425-770-6899">(425)-770-6899</Card.Link>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col xs={5}>
            <Image src={locationImage} className="img-fluid mb-5" />
          </Col>
        </Row>
      </Container>

      
    </React.Fragment>
  );
};

export default Contact;
