import React from "react";
import { Link } from "react-router-dom";
import RecentWorks from "../../components/recentworks/recentworks";

export const Portfolio = props => {
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
              Portfolios
            </li>
          </ol>
        </nav>

        <RecentWorks />
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
