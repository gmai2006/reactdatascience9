import React from "react";
import { Link } from "react-router-dom";

const BusinessRule = props => {
  return (
    <React.Fragment>
      {/* Page Content */}
      <div className="divide10" />
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Business Rules Extractions (BREX)
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header  datascience9-header">
                Business Rules Extractions (BREX)
              </div>
              <div className="card-body">
                <p className=" color_3">
                  In 2016, 70% of data transaction systems were written in
                  COBOL. Maintaining these those legacy applications is not only
                  costly, but is it’s hard to keep the system up-to-date and is
                  even harder to find qualified COBOL Cobol programmers
                  nowadays.
                </p>

                <p className=" color_3">
                  Modernizing these large systems is not trivial, because most
                  of the functional specifications do not exist or are no longer
                  available. Business rules extraction helps to recover the
                  business rules that are buried in the source codes.
                </p>
                <p className=" color_3">
                  Our firm has developed an open architecture for extracting
                  business rules is based on different disciplines from Backus-
                  Naur form, to compiling to, data mining and to machince
                  learning. This framework utilizes uses various open
                  open-source tool sets like such as ANTLR4, StringTemplates,
                  NumPy, and Apache Sparks.
                </p>

                <p className=" color_3">
                  The BREX process comprises of multiple phases as shown in
                  Figure 1.
                </p>
                <ul>
                  <li className="datascience9-list-item  color_3">Variable classNameification</li>
                  <li className="datascience9-list-item  color_3">Business Rule Identification</li>
                  <li className="datascience9-list-item  color_3">Domain Model Extraction</li>
                </ul>

                <p className=" color_3">
                  <img
                    src="images/business-rules.png"
                    className="card-img-bottom"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header  datascience9-header">
                <h3>Technology</h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="datascience9-list-item  color_3">ANTLR4</li>
                  <li className="datascience9-list-item  color_3">NumPi</li>
                  <li className="datascience9-list-item  color_3">ML</li>
                  <li className="datascience9-list-item  color_3">Apache Sparks</li>
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

export default BusinessRule;
