import React from "react";
import { Link } from "react-router-dom";

export const About = props => {
  return (
    <React.Fragment>
      <div className="divide20" />
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <div className="row mb0">
          <div className="col-md-6 mb40">
          <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fas fa-user icon-hover-default" />
                <h4>About Us</h4>
                <p>
                We are a specialized software transformation and automation firm. 
                  Recognizing advantages and disadvantages from the existing solutions, our company 
                  developed a new improved technique that helps to automatically migrate legacy
                  applications to modern architecture.  Software transformation is like solving
                  a puzzle that some pieces are from the legacy and others are from the to-be architecture.
                </p>
               
              </div>

            
          </div>
          <div className="col-md-6 mb40">
          <img
                    src="images/puzzle.png"
                    className="img-fluid"
                    alt=""
                  />
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default About;
