import React, {useState} from 'react';
import {Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './style.css';

import navbarLogo from '../../assets/images/logos/favicon-32x32.png';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <Container>
                <Navbar collapseOnSelect expanded={expanded} expand='lg' id='navigationBar' sticky='top'>
                <Navbar.Brand href='#home'>
                    <img
                        alt=''
                        src={navbarLogo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />{' '}
                    DataScience9
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expanded ? false : 'expanded')}/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='nav ml-auto'>
                            <Nav.Link as={NavLink} to='/home' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/about' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>About</Nav.Link>
                            <Dropdown id='dropdownButton' className='mt-1'>
                                <Dropdown.Toggle variant='link' className='shadow-none' id='dropdown-basic'>
                                    Services
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/services/datamining' activeStyle={{ 
                                    color: '#3483DE'
                                }}
                                    onClick={() => setExpanded(false)}>Data Mining</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/services/datamigration' activeStyle={{ 
                                    color: '#3483DE'
                                }} 
                                    onClick={() => setExpanded(false)}>Data Migration</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/services/datatransformation' activeStyle={{ 
                                    color: '#3483DE'
                                }} 
                                    onClick={() => setExpanded(false)}>Data Transformation</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/services/documentconversion' activeStyle={{ 
                                    color: '#3483DE'
                                }} 
                                    onClick={() => setExpanded(false)}>Document Conversion</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/services/webdevelopment' activeStyle={{ 
                                    color: '#3483DE'
                                }} 
                                    onClick={() => setExpanded(false)}>Custom Web Development</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/services/enterprise' activeStyle={{ 
                                    color: '#3483DE'
                                }} 
                                    onClick={() => setExpanded(false)}>Enterprise Software Solution</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown id='dropdownButton' className='mt-1'>
                                <Dropdown.Toggle variant='link' className='shadow-none' id='dropdown-basic'>
                                    Products
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/products/microservices' activeStyle={{ 
                                    color: '#3483DE'
                                }}  
                                    onClick={() => setExpanded(false)}>Automated Generation of Microservices</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <NavDropdown title="Services" id="dropdownButton" alignRight activeStyle={{
                                color: '#3483DE'
                            }}>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/datamining' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent',
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Data Mining
                                </NavDropdown.Item>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/datamigration' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Data Migration
                                </NavDropdown.Item>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/datatransformation' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Data Transformation
                                </NavDropdown.Item>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/documentconversion' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Document Conversion
                                </NavDropdown.Item>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/webdevelopment' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Custom Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/services/enterprise' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }} 
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Enterprise Software Solution
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Products" id="dropdownButton" >
                                <NavDropdown.Item id='dropdown-item' as={NavLink} to='/products/microservices' 
                                    style={{
                                        fontFamily: "'Open Sans', sans-serif",
                                        fontWeight: '400',
                                        fontSize: '13.6px',
                                        color: '#A1B1BC',
                                        textTransform: 'capitalize',
                                        backgroundColor: 'transparent'
                                    }}
                                    activeStyle={{ 
                                        color: '#3483DE'
                                    }}
                                    onClick={() => setExpanded(false)}>
                                    Automated Generation of Microservices
                                </NavDropdown.Item>                
                            </NavDropdown> */}
                            <Nav.Link as={NavLink} to='/portfolio' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
                            <Nav.Link as={NavLink} to='/contact' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>Contact</Nav.Link>
                            {/* <Nav.Link as={NavLink} to='/blogs' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to='/editor' activeStyle={{
                                color: '#3483DE'
                            }} onClick={() => setExpanded(false)}>Editor</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </React.Fragment>
    )
}

export default NavigationBar;
