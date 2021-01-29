import React from "react";
import { Link } from "react-router-dom";

const DataMining = props => {
  return (
    <React.Fragment>
      {/* Page Content */}
      <div className="divide10" />
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data Mining and Machine Learning
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header  datascience9-header">
                Data Mining and Machine Learning
              </div>
              <div className="card-body">
                <p className=" color_3">
                  As a massive amount of data is collected every second, mining
                  it for useful information is key for businesses to engage
                  closely with customers. Our firm provides a full service of
                  data munging, wrangling, and data discovery, including
                  building predictive models or clusters of interesting
                  information using open-source data mining and machine learning
                  algorithms.
                </p>
                <p className=" color_3">
                  To ensure our models do not suffer overfitting issues we
                  employ an ensemble method that uses multiple learning
                  algorithms to cross-check results, preventing overfitting and
                  avoiding high bias. We also use A cross-validation technique.
                </p>
                <p className=" color_3">
                  Our firm is actively and continually learning new approaches
                  in machine learning and applying those improved techniques in
                  new projects
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
                  <li className="datascience9-list-item  color_3">MongoDB</li>
                  <li className="datascience9-list-item  color_3">Cassandra</li>
                  <li className="datascience9-list-item  color_3">Numpy Python</li>
                  <li className="datascience9-list-item  color_3">Scipy Python</li>
                  <li className="datascience9-list-item  color_3">Anaconda Scientific Python Distribution</li>
                  <li className="datascience9-list-item  color_3">Linux</li>
                  <li className="datascience9-list-item  color_3">R language</li>
                  <li className="datascience9-list-item  color_3">Gradle / Maven</li>
                  <li className="datascience9-list-item  color_3">Hadoop</li>
                  <li className="datascience9-list-item  color_3">Java</li>
                  <li className="datascience9-list-item  color_3">Python</li>
                  <li className="datascience9-list-item  color_3">Apache Spark</li>
                  <li className="datascience9-list-item  color_3">Map Reduce</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataMining;
