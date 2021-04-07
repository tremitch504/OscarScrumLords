import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import styled from 'styled-components';
import carousel1 from './assets/carousel1.jpeg'
import carousel2 from './assets/carousel2.jpeg'
import carousel3 from './assets/carousel3.jpeg'
import carousel4 from './assets/carousel4.jpeg'
import carousel5 from './assets/carousel5.jpeg'


const Img = styled.img`
    display: flex;
`

const RotatingCarousel = () => {
    return (
        <Carousel >
            <Carousel.Item >
                <Img
                    className="rounded mx-auto d-block w-100"
                    src={carousel1}
                    alt="Responsive image"
                />
            </Carousel.Item>
            <Carousel.Item >
                <Img
                    className="rounded mx-auto d-block w-100"
                    src={carousel2}
                    alt="Responsive image"
                />
            </Carousel.Item>
            <Carousel.Item >
                <Img
                    className="rounded mx-auto d-block w-100"
                    src={carousel3}
                    alt="Responsive image"
                />
            </Carousel.Item>
            <Carousel.Item >
                <Img
                    className="rounded mx-auto d-block w-100"
                    src={carousel4}
                    alt="Responsive image"
                />
            </Carousel.Item>
            <Carousel.Item >
                <Img
                    className="rounded mx-auto d-block w-100"
                    src={carousel5}
                    alt="Responsive image"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default RotatingCarousel