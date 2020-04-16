import React, { useState } from 'react';
import { Container} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'

export function Banner() {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };


    return (
        <Container className="mb-10">

            <Carousel activeIndex={ index } onSelect={ handleSelect } >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="../images/5.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <img
                        className="d-block w-100"
                        src="../images/1.jpg"
                        alt="Second slide"

                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );


}

export default Banner