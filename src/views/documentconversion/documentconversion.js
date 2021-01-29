import React from "react";
import { Link } from "react-router-dom";

export const DocumentConversion = props => {
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
              Document Conversion
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-8 ">
            <div className="card">
              <div className="card-header  datascience9-header">
                Conversion of Legacy MS Word /PDF to XML
              </div>
              <div className="card-body">
                <p className=" color_3">
                  Our firm has developed an open source tool, which
                  automatically converts legacy MS Word, PDF documents to XML.
                  The tool can also generate PDF from generated XML if
                  applicable.
                </p>
                <p className=" color_3">
                  The conversion process is shown in Figure 1
                </p>
                <p>
                  <img
                    src="images/word-conversion.png"
                    className="card-img-bottom"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Case Study</div>
              <div className="card-body">
                This project automatically converts DSP documents from ASSIST in
                Word format to XML and also generates the PDF according to the
                original layout
              </div>
            </div>
            <div className="card ">
              <div className="card-header">Questions</div>
              <div className="card-body">
                If you have any questions about the conversion process or need
                to migrate the legacy Word documents to XML or relational data
                models, please contact us.
              </div>
            </div>
            <div className="card ">
              <div className="card-header">Technology</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="datascience9-list-item  color_3">ANTLR 4</li> <li className="datascience9-list-item  color_3">SpringTemplate 4</li> <li className="datascience9-list-item  color_3">PDFBox</li>
                  <li className="datascience9-list-item  color_3">iText 2.7.1</li> <li className="datascience9-list-item  color_3">Jsoup</li> <li className="datascience9-list-item  color_3">dom4j</li>
                  <li className="datascience9-list-item  color_3">Gradle</li>
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

export default DocumentConversion;
