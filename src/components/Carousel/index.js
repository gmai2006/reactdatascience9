import React from 'react';
import {Carousel} from 'react-bootstrap';
import './style.css';

import carouselBackground from '../../assets/images/header-bg.jpg';

const Slider = () => {
    return (
        <React.Fragment>
            <Carousel className='slider'>
                <Carousel.Item>
                    <img
                    className='d-block w-100 datascience9-carousel-width'
                    src={carouselBackground}
                    alt='First slide'
                    />
                    <Carousel.Caption className='datascience9-carousel-caption datascience9-carousel-caption-header'>
                    <h3>Automated Microservices Generation</h3>
                    <p>100% automated microservices generation from a database schema</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100  datascience9-carousel-width'
                    src={carouselBackground}
                    alt='Second slide'
                    />

                    <Carousel.Caption className='datascience9-carousel-caption datascience9-carousel-caption-header'>
                    <h3>Custom Web Development</h3>
                    <p>Develop custom web applications using that meet customer requirements</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className='d-block w-100  datascience9-carousel-width'
                    src={carouselBackground}
                    alt='Third slide'
                    />

                    <Carousel.Caption className='datascience9-carousel-caption datascience9-carousel-caption-header'>
                    <h3>Data Migration and Transformation</h3>
                    <p>Transform data from one medium to another</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export default Slider;
