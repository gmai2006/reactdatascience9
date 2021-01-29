import React from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};


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
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="row mb0">
          <div className="col-md-6">
            <h2>Address</h2>
            <address>
              22722 29th Drive SE, Suite 100
              <br />
              Bothell, Washington, 98021 <br />
              <div className="divide20" />
              <h4 className="text-uppercase">Email</h4>
                    
              <a href="mailto:paul.mai@datascience9.com">
                paul.mai@datascience9.com
              </a>
              <br />
              <h4 className="text-uppercase">Phone</h4>
              <a href="tel:+14257706899">(425) 770-6899</a>
            </address>
          </div>

          <div className="col-md-6">
            <img
                src="images/location.png"
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
