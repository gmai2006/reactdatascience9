import React from 'react';
import {Container, CardDeck, Card} from 'react-bootstrap';
import './style.css';

import tomcatImage from '../../assets/images/portfolio/tomcat.png';
import eCommerceImage from '../../assets/images/portfolio/exam.png';
import dispatcherImage from '../../assets/images/portfolio/rest-webapplication.png';
import qualitySmith from '../../assets/images/portfolio/qualitysmith.jpg';
import censeoImage from '../../assets/images/portfolio/censeo.png';

const Portfolio = () => {
    return (
        <React.Fragment>
            <Container>
                <h3 className='portfolio-header mt-4 mb-3'>Web Development</h3>
                <CardDeck>
                    <Card className='portfolio-card'>
                        <Card.Img src={tomcatImage} />
                        <Card.Body>
                            <Card.Link href="#">Tomcat Hosting Service</Card.Link>
                            <Card.Text>Tomcat Hosting</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-card'>                    
                        <Card.Img src={eCommerceImage} />
                        <Card.Body>
                            <Card.Link href="#">E-Commerce</Card.Link>
                            <Card.Text>J2EE Application Development</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='portfolio-card'>    
                        <Card.Img src={dispatcherImage} />
                        <Card.Body>
                            <Card.Link href="#">Dispatcher Management System</Card.Link>
                            <Card.Text>A responsive web application that was developed to manage a fleet of snow trucks</Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            <Container>
                <h3 className='portfolio-header mt-4 mb-3'>Data Mining</h3>
                <Card className='portfolio-card' style={{ width: '28rem' }}>
                    <Card.Img src={qualitySmith} />
                    <Card.Body>
                        <Card.Link href="#">Tomcat Hosting Service</Card.Link>
                        <Card.Text>Tomcat Hosting</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <h3 className='portfolio-header mt-4 mb-3'>IT as Service</h3>
                <Card className='portfolio-card' style={{ width: '28rem' }}>
                    <Card.Img src={censeoImage} />
                    <Card.Body>
                        <Card.Link href="#">IT Service for Censeo Inc.</Card.Link>
                        <Card.Text>Angular and Microservices Development</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default Portfolio;
