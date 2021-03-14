import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import puzzleImage from '../../assets/images/puzzle.png';
import './style.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faCircle} from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col xs={7}>
                        <Container className='text-center'>
                            <span className='fa-layers fa-fw'>
                                <FontAwesomeIcon icon={faCircle} size="5x" className='circle-icon' />
                                <FontAwesomeIcon icon={faUser} size="2x" style={{color: 'white', marginLeft: '25px'}}/>
                            </span>
                            <h4 className='about-header mt-5 ml-5'>About Us</h4>
                            <p className='about-text mt-4 ml-5'>
                            We are a specialized software transformation and automation firm. 
                            Recognizing advantages and disadvantages from the existing solutions, our company 
                            developed a new improved technique that helps to automatically migrate legacy
                            applications to modern architecture.  Software transformation is like solving
                            a puzzle that some pieces are from the legacy and others are from the to-be architecture.
                            </p>
                        </Container>
                    </Col>
                    <Col xs={5}>
                        <Image src={puzzleImage} className='img-fluid mb-5' />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default About;
