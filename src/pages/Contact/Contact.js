import React from 'react';
import {Container, Card, Image} from 'react-bootstrap';
import './style.css';

import locationImage from '../../assets/images/location.png';

const Contact = () => {
    return (
        <React.Fragment>
            <Container>
                <Card className="contact-card text-center mt-5">
                    <Image src={locationImage} className='location-image ml-auto mr-auto'/>
                    <Card.Body>
                        <Card.Title className='contact-text'>22722 29th Drive SE, Suite 100 Bothell, Washington, 98021</Card.Title>
                        <Card.Link href='mailto:paul.mai@datascience9.com'>paul.mai@datascience9.com</Card.Link>
                        <Card.Link href='tel:425-770-6899'>(425)-770-6899</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default Contact;
