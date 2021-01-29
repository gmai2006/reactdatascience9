import React from "react";
import { Link } from "react-router-dom";

const WebDevelopment = props => {
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
              Web Development
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header  datascience9-header">
                Web Development
              </div>
              <div className="card-body">
                <p className=" color_3">
                  Software designed for the web is ideally suited for custom
                  business applications that streamline processes, enable a
                  competitive advantage, or connect with consumers and business
                  partners in unique ways. We build new applications and also
                  enhance and add funtionality to your legacy applications.
                </p>
                <p className=" color_3">
                  Our firm builds reliable, secure, and richly featured web
                  applications. Using modern web technologies, we can build
                  robust applications with rich user interfaces and complex
                  business functionality, that are always available, online.
                </p>
                <p className=" color_3">
                  A web application also improves for enterprise readiness and
                  affordability. The languages, frameworks, and architecture
                  lend themselves to rapid application development. And relative
                  to other software architectures, web apps offer easier
                  deployment and maintenance.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header  datascience9-header">Technology</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="datascience9-list-item  color_3">AngularJS</li>
                  <li className="datascience9-list-item  color_3">React</li>
                  <li className="datascience9-list-item  color_3">
                    Google Guice
                  </li>
                  <li className="datascience9-list-item  color_3">
                    Hibernate JPA
                  </li>
                  <li className="datascience9-list-item  color_3">
                    Spring security
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WebDevelopment;
