import React from "react";
import { Link } from "react-router-dom";

export const Interprise = props => {
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
              Enterprise Software Solution
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header  datascience9-header">
                Enterprise Software Solution
              </div>
              <div className="card-body">
                <p className=" color_3">
                  If an off-the-shelf product does not suite your business
                  requirements, our firm can work with your company to design
                  and build a customized application that satisfies your
                  requirements at an affordable cost.{" "}
                </p>
                <p className=" color_3">
                  Building on top of well-known open-source frameworks we can
                  rapidly develop an application based on your requirements
                </p>
                <p className=" color_3">
                  Using agile methodology our staff engage continually with
                  client constantly during the development cycle to ensure we
                  meet all customer requirements
                </p>
                <p className=" color_3">
                  With our expertise in database modeling, network setup, server
                  configurations, security mechanisms, and open source
                  frameworks our firm can provide a full service from conceptual
                  design to development, and set up an infrastructure or connect
                  to cloud services such as Amazon EC2 or Google Cloud.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header  datascience9-header">
                Technologies
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="datascience9-list-item  color_3">
                    Google Guice
                  </li>
                  <li className="datascience9-list-item  color_3">JEE7</li>
                  <li className="datascience9-list-item  color_3">
                    Hibernate JPA
                  </li>
                  
                  <li className="datascience9-list-item  color_3">MySQL</li>
                  <li className="datascience9-list-item  color_3">Oracle</li>
                  <li className="datascience9-list-item  color_3">Linux</li>
                  <li className="datascience9-list-item  color_3">Apache</li>
                  <li className="datascience9-list-item  color_3">
                    Gradle / Maven
                  </li>
                  <li className="datascience9-list-item  color_3">Ant</li>
                  <li className="datascience9-list-item  color_3">Java</li>
                  <li className="datascience9-list-item  color_3">Python</li>
                  <li className="datascience9-list-item  color_3">DNS</li>
                  <li className="datascience9-list-item  color_3">Firewall</li>
                  <li className="datascience9-list-item  color_3">LDAP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Interprise;
