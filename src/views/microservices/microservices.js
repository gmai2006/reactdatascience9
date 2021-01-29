import React from "react";
import { Link } from "react-router-dom";

const MicroServices = props => {
  return (
    <React.Fragment>
      <div className="divide20" />
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Automated Generation of Microservices
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                Database Migration and Microservices Generation
              </div>
              <div className="card-body">
                <p className="color_3">
                  Datascience9 can help to generate microservices directly from
                  your legacy database. The solution is 100% automated. The
                  generated micro-services can be customized based on customer
                  requirements.
                </p>
                <p className="color_3">
                  The generator supports different frameworks such as RestEasy,
                  Hibernate JPA, Apache Open JPA,
                </p>
                <p className="color_3">
                  The core functionality of this framework will be released as
                  an open source to GitHub
                </p>
                <p className="color_3">
                  <img
                    src="images/datamigration.png"
                    className="card-img-bottom"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header">
                User Case 1 - Open Cart Application
              </div>
              <div className="card-body">
                <p className="color_3">In this project, we ran our auto generated micro service tool
                against the OpenCart application, which is an open source
                shopping cart written in Php. The result of the code generation
                is in <Link to="https://github.com/gmai2006/opencart">GitHub.</Link>
                </p>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">User Case 2 - FHIR</div>
              <div className="card-body">
              <p className="color_3">In this project, we ran our auto-generated tool against the Fast
                Healthcare Interoperability Resources (FHIR) specifications in
                JSON format. The result of the code generation is published in
                <Link to="https://github.com/gmai2006/fhir">GitHub.</Link> <br />
                <br />
                This is a RESTful service with a relational database backend.
                This application can run in any standard servlet container like
                Jetty, and Tomcat etc. <br />
                <br />
                We are also creating a docker image so developers can download
                and run the RESTful service in a docker container.
                </p>

              </div>
            </div>
            <div className="card ">
              <div className="card-header">Technology</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                 <li className="datascience9-list-item  color_3">ANTLR4</li>
                 <li className="datascience9-list-item  color_3">SpringTemplate 4</li>
                 <li className="datascience9-list-item  color_3">Apache Open JPA</li>
                 <li className="datascience9-list-item  color_3">XML</li>
                 <li className="datascience9-list-item  color_3">JDBC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide20" />
    </React.Fragment>
  );
};

export default MicroServices;
