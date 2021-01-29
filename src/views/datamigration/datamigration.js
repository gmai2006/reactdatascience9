import React from "react";
import { Link } from "react-router-dom";

const DataMigration = props => {
  return (
    <React.Fragment>
      <div className="divide10" />
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Database Migrations
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header datascience9-header">
                Database Migration and Microservices Generation
              </div>
              <div className="card-body">
                <p className=" color_3">
                  Datascience9 can help to generate microservices directly from
                  your legacy database. The solution is 100% automated. The
                  generated micro services can be customized based on client
                  requirements.
                </p>

                <p className=" color_3">
                  The generator supports different frameworks, such as RESTEasy,
                  Hibernate JPA, Apache, and Open JPA.
                </p>

                <p className=" color_3">
                  The core functionality of this framework will be released as
                  an open source to GitHub
                </p>
                <p className=" color_3">
                  <img
                    src="images/datamigration.png"
                    className="img-fluid"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header datascience9-header">Technology</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="datascience9-list-item  color_3">ANTLR4</li>
                  <li className="datascience9-list-item  color_3">
                    SpringTemplate
                  </li>
                  <li className="datascience9-list-item  color_3">
                    Apache Open JPA
                  </li>
                  <li className="datascience9-list-item  color_3">XML</li>
                  <li className="datascience9-list-item  color_3">JDBC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataMigration;
