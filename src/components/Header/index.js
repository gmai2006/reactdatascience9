import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="nav ml-auto">
        <Nav className="header-link" id="leftmargin">
          <Nav.Item>
            <Nav.Link
              href="tel:425-770-6899"
              className="header-text"
              id="leftmargin"
            >
              <FontAwesomeIcon icon={faPhone} /> Any questions? Call us: (425)
              770-6899
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="mailto:paul.mai@datascience9.com"
              className="header-text"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Mail us:
              paul.mai@datascience9.com
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
