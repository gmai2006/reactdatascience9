import React from 'react';
import {Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import './style.css';

import datamigrationImage from '../../assets/images/datamigration.png';

const DataMigration = () => {
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
                            <Card.Header className='services-header'>Technologies</Card.Header>
                            <ListGroup variant='flush' className='services-list-group'>
                                <ListGroup.Item>ANTLR 4</ListGroup.Item>
                                <ListGroup.Item>StringTemplate</ListGroup.Item>
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

export default DataMigration;
