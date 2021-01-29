import React from "react";
import { Link } from "react-router-dom";

export const RecentWorks = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="center-heading">
            <h3 className="header_1 wrap_3 color_3">Web Development</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <img
            src="images/tomcat.png"
            className="img-thumbnail rounded"
            alt=""
          />
          <Link to="tomcat-hosting-service.xhtml">Tomcat hosting service</Link>
          <p>Tomcat Hosting</p>
        </div>
        <div className="col">
          <img src="images/exam.png" className="img-thumbnail rounded" alt="" />
          <Link to="ecommerce.xhtml">E-commerce</Link>
          <p>J2EE application development</p>
        </div>
        <div className="col">
          <img
            src="images/rest-webapplication.png"
            className="img-thumbnail rounded"
            alt=""
          />
          <Link to="dispatcher.xhtml">Dispatcher Management System</Link>
          <p>
            A responsive web application that was developed to manage a fleet of
            snow trucks
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="center-heading">
            <h3 className="header_1 wrap_3 color_3">Data Mining</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <img
            src="images/qualitysmith.jpg"
            className="img-fluid rounded"
            alt=""
          />
          <div>
            <Link to="tomcat-hosting-service.xhtml">
              Useful Data Extraction
            </Link>
            <p>Extract useful information from the Internet</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="center-heading">
            <h3 className="header_1 wrap_3 color_3">IT as Service</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <img src="images/censeo.png" className="img-fluid rounded" alt="" />
          <div>
            <Link to="tomcat-hosting-service.xhtml">
              IT service for Censeo Inc.
            </Link>
            <p>Angular and Microservices Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
