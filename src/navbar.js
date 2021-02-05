import React from "react";
import { Link } from "react-router-dom";


export const NavBar = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-faded">
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/home">
            <img src="favicon-32x32.png" alt="" />
            DataScience9
          </Link>
          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto nav navbar-right datascience9-nav-font">
              <li className="nav-item active">
                <Link to="home" className="nav-link datascience9-nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link datascience9-nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link datascience9-nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="#">
                  Services
                  </Link>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <Link to="datamining" className="dropdown-item">
                      Data Mining
                    </Link>
                  </li>
                  <li>
                    <Link to="datamigration" className="dropdown-item">
                      Data Migration
                    </Link>
                  </li>
                  <li>
                    <Link to="datatransformation" className="dropdown-item">
                      Data Transformation
                    </Link>
                  </li>
                  <li>
                    <Link to="/document" className="dropdown-item">
                      Document Conversion
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/it" className="dropdown-item">
                      Legacy Modernization Services
                    </Link>
                  </li> */}
                 
                  <li>
                    <Link to="/webdevelopment" className="dropdown-item">
                      Custom Web Development
                    </Link>
                  </li>

                   <li>
                    <Link to="/enterprise" className="dropdown-item">
                      Enterprise Software Solution
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link  dropdown-toggle datascience9-nav-link"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  to="#"
                >
                  Products
                </Link>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <Link to="microservices" className="dropdown-item">
                      Automated Generation of Microservices
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/portfolio" className="nav-link datascience9-nav-link">Portfolios</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link datascience9-nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
