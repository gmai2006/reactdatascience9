import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const BannerCarousel = (Props) => {
    return (
        
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 datascience9-carousel-width"
                    src="images/header-bg.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className="datascience9-carousel-caption datascience9-carousel-caption-header">
                    <h3> Automated Microservices Generation</h3>
                    <p>100% automated microservices generation from a database schema.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100  datascience9-carousel-width"
                    src="images/header-bg.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className="datascience9-carousel-caption datascience9-carousel-caption-header">
                    <h3>Custom Web Development</h3>
                    <p>Develop custom web applications using that meet customer requirements.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100  datascience9-carousel-width"
                    src="images/header-bg.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className="datascience9-carousel-caption datascience9-carousel-caption-header">
                    <h3>Data Migration and Transformation</h3>
                    <p>Transform data from one medium to another.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            
    )
}

export default BannerCarousel;