import React from 'react';
import Editor from 'react-medium-editor-2';
import { Link } from "react-router-dom";
export const Datascience9Editor = props => {
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

        <div className="row mb20">
        <div className="col-md-12">
          <div className="card">
              <div className="card-header datascience9-header">
                Editor
              </div>
              <div className="card-body">
                <Editor className="unique_and_mandatory_class_name"/>
              </div>
            </div>
          </div>
        </div>
        <div className="divide30" />
      </div>
    </React.Fragment>
  )
}