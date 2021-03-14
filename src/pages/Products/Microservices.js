import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

import datamigrationImage from '../../assets/images/datamigration.png';

const Microservices = () => {
    return (
        <React.Fragment>
            <Container className='mt-5'>
                <Row>
                    <Col xs={8}>
                        <Card>
                            <Card.Header className='services-header'>Database Migration and Microservices Generation</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                Datascience9 can help to generate microservices directly from your legacy database. The solution is 100% automated. The
                                generated micro services can be customized based on client requirements.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                The generator supports different frameworks, such as RESTEasy, Hibernate JPA, Apache, and Open JPA.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                The core functionality of this framework will be released as an open source to GitHub.
                                </Card.Text>
                            </Card.Body>
                            <Container className='mb-4'>
                                <Card.Img variant='bottom' src={datamigrationImage} className='img-fluid' />
                            </Container>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card>
                            <Card.Header className='services-header'>User Case 1 - Open Cart Application</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                In this project, we ran our auto generated micro service tool against the OpenCart application, which is an open source 
                                shopping cart written in Php. The result of the code generation is in GitHub.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className='services-header'>User Case 2 - FHIR</Card.Header>
                            <Card.Body>
                                <Card.Text className='services-text'>
                                In this project, we ran our auto-generated tool against the Fast Healthcare Interoperability Resources (FHIR) specifications 
                                in JSON format. The result of the code generation is published inGitHub.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                This is a RESTful service with a relational database backend. This application can run in any standard servlet container 
                                like Jetty, and Tomcat etc.
                                </Card.Text>
                                <Card.Text className='services-text'>
                                We are also creating a docker image so developers can download and run the RESTful service in a docker container.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>ANTLR 4</ListGroup.Item>
                                <ListGroup.Item>SpringTemplate 4</ListGroup.Item>
                                <ListGroup.Item>Apache Open JPA</ListGroup.Item>
                                <ListGroup.Item>XML</ListGroup.Item>
                                <ListGroup.Item>JDBC</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Microservices;
