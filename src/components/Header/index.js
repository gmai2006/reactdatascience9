import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
// import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar expand='lg' className='justify-content-center' id='topHeader'>
                <Nav className='header-link'>
                    <Nav.Item>
                        <Nav.Link href='tel:425-770-6899' className='header-text'><FontAwesomeIcon icon={faPhone} /> Any questions? Call us: (425) 770-6899</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='mailto:paul.mai@datascience9.com' className='header-text'><FontAwesomeIcon icon={faEnvelope} /> Mail us: paul.mai@datascience9.com</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}

export default Header;
