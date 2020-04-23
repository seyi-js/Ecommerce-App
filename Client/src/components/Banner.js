import React, { useState } from 'react';
import { Container} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export function Banner() {
    const [ index, setIndex ] = useState( 0 );

    const handleSelect = ( selectedIndex, e ) => {
        setIndex( selectedIndex );
    };


    return (
        <Container className="mb-10 banner" style={{maxWidth: '700px'}}>

            <Carousel activeIndex={ index } onSelect={ handleSelect } >
                <Carousel.Item >
                    <img
                        className="d-block w-100 img-responsive"
                        src="../images/Huawei-P20-Pro.jpg"
                        alt="Huawei P20 Pro"
                        
                    />
                    <Carousel.Caption>
                        <h3><strong>Huawei P20 Pro</strong></h3>
                        <p style={{color: 'black'}}>A Mobile Phone With Distict Features.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  >
                    <img
                        className="d-block w-100 img-responsive"
                        src="../images/Pixel-2-XL-front-diagonal.jpg"
                        alt="Pixel-2 XL"
                        

                    />

                    <Carousel.Caption>
                        <h3><strong>Pixel-2 XL</strong></h3>
                        <p style={{color: 'black'}}>A Mobile Phone With Distict Features.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-responsive"
                        src="../images/Samsung-Galaxy-Note-9.jpg"
                        alt="Samsung-Galaxy-Note 9"
                    />

                    <Carousel.Caption>
                        <h3><strong>Samsung-Galaxy-Note 9</strong></h3>
                        <p style={{color: 'black'}}>
                        A Mobile Phone With Distict Features.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );


}

export default Banner