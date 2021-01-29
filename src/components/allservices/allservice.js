import React from "react";
import { Link } from "react-router-dom";

export const AllServices = props => {
  return (
    <React.Fragment>
      <div className="bg-faded">
        <div className="container pb60">
          <div className="datascience9-carousel-title mb40">
            <h2>Our Services</h2>
          </div>

          <div className="row">
            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary far fa-file icon-hover-default" />
                <h4>Word Document Conversion to XML</h4>
                <p>
                  We provide a unique solution to convert legacy Word documents
                  to semi-structure XML and regenerate the same Word document in
                  a PDF format.
                </p>
                <div className="text-right">
                  <Link to="document" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fas fa-exchange-alt icon-hover-default" />
                <h4>Data Transformations</h4>
                <p>
                  We provide a complete solution for transforming data from one
                  medium to another. The work includes, but is not limited to,
                  mapping data schema, transforming data if applicable, and
                  writing custom procedures for exceptions.
                </p>
                <div className="text-right">
                  <Link to="datatransformation" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fa fa-database icon-hover-default" />
                <h4>Database Migrations</h4>
                <p>
                  Automated data migration from one database to another database
                  using open-source toolsets like ANTLR4 and SpringTemplate.
                </p>
                <div className="text-right">
                  <Link to="datamigration" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="datascience9-carousel-div-20" />

          <div className="row">
            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fab fa-angular icon-hover-default" />
                <h4>Web Development</h4>
                <p>
                  Provide full services for developing scalable responsive web
                  applications using Angular, React, Bootstrap, HTML5, and Typescript.
                </p>
                <div className="text-right">
                  <Link to="webdevelopment" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            

            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fa fa-database icon-hover-default" />
                <h4>Data Mining</h4>
                <p>
                  Provide full services data mining services and build
                  predictive models including data munging and data wrangling.
                </p>
                <div className="text-right">
                  <Link to="datamining" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="icon-box icon-box-center">
                <i className="icon-hover-1 bg-primary fa fa-database icon-hover-default" />
                <h4>Enterprise Software Solution</h4>
                <p>
                  If an off-the-shelf product does not suite your business
                  requirements, our firm can work with your company to design
                  and build a customized application that satisfies your
                  requirements at an affordable cost..
                </p>
                <div className="text-right">
                  <Link to="enterprise" className="btn btn-sm btn-outline-secondary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllServices;
