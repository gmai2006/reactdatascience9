import React from "react";
import { Link } from "react-router-dom";

export const DataTransformation = props => {
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
              Data Transformation and Database Migration
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header  datascience9-header">
                Data Transformation
              </div>
              <div className="card-body">
                <p className=" color_3">
                  Advances in hardware and data storage have enabled, more and
                  more data are to be collected constantly. For useful data
                  analysis, data needs be transformed to a standard format. With
                  more than 15 years' experience in data transformation, our
                  firm can assist clients to transform data from one or many
                  sources to a target medium for analysis.
                </p>
                <p className=" color_3">
                  With programming and hacking skills, our technical staff can
                  transform complex unstructured data into semi-structured or
                  structured data automatically.
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
                  <li className="datascience9-list-item  color_3">Cassandra</li>
                  <li className="datascience9-list-item  color_3">MSSQL</li>
                  <li className="datascience9-list-item  color_3">Oracle</li>
                  <li className="datascience9-list-item  color_3">DB2</li>
                  <li className="datascience9-list-item  color_3">MySQL</li>
                  <li className="datascience9-list-item  color_3">MongoDB</li>
                  <li className="datascience9-list-item  color_3">Apache</li>
                  <li className="datascience9-list-item  color_3">Gradle / Maven</li>
                  <li className="datascience9-list-item  color_3">Ant</li>
                  <li className="datascience9-list-item  color_3">Java</li>
                  <li className="datascience9-list-item  color_3">Python</li>
                  <li className="datascience9-list-item  color_3">Linux scripts</li>
                  <li className="datascience9-list-item  color_3">Programming hacking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataTransformation;
