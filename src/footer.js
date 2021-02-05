import React from "react";
import { Link } from "react-router-dom";


export const Footer = props => {
  return (
		<React.Fragment>
			<footer className="footer footer-standard pt50 pb10">
				<div className='container'>
					<div className="row">
						<div className="col-lg-5 col-md-5 mb10">
							<ul className="list-unstyled footer-list-item">
								<li>
									<Link to="datamining" className="nav-link datascience9-nav-link"> Data Mining </Link>
								</li>
								<li>
									<Link to="datamigration" className="nav-link datascience9-nav-link"> Data Migration </Link>
								</li>
								<li>
									<Link to="datatransformation" className="nav-link datascience9-nav-link"> Data Transformation </Link>
								</li>
								<li>
									<Link to="microservices" className="nav-link datascience9-nav-link"> Automated Generation of Microservices </Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-4 mb10">
							<ul className="list-unstyled footer-list-item">
								<li>
									<Link to="document" className="nav-link datascience9-nav-link"> Document Transformation </Link>
								</li>
								<li>
									<Link to="webdevelopment" className="nav-link datascience9-nav-link"> Web Development </Link>
								</li>
								<li>
									<Link to="datamining" className="nav-link datascience9-nav-link"> Machine Learning </Link>
								</li>
								<li>
									<Link to="datamining" className="nav-link datascience9-nav-link"> Data science </Link>
								</li>
							</ul>
						</div>
						<div className="col-lg-2 col-md-2 mb10">
							<ul className="list-unstyled footer-list-item">
								<li>
									<Link to="about" className="nav-link datascience9-nav-link">About</Link>
								</li>
								<li>
									<Link to="contact" className="nav-link datascience9-nav-link">Contact </Link>
								</li>
							</ul>
						</div>
						</div>
				</div>
			</footer>
		</React.Fragment>
  );
};
export default Footer;
