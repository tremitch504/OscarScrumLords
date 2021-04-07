import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import styled from 'styled-components';

const Div = styled.div`
    max-height: 700px;
    overflow: hidden;
`
const Img = styled.img`
    width: auto;
    height: 500px;
    max-height: 500px;
`
// const Carousel = styled.div`
// .carousel {
//   max-height: 700px;
//   overflow: hidden;

//   .item img {
//     width: 100%;
//     height: auto;
//   }
// }
// `

const RotatingCarousel = () => {
    return (
        <Div>

            <Carousel >
                <Carousel.Item >
                    <Img
                        className="rounded mx-auto d-block w-100"
                        src="https://momentummag.com/wp-content/uploads/2016/09/lights.jpg"
                        alt="Responsive image"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <Img
                        className="rounded mx-auto d-block w-100"
                        src="https://momentummag.com/wp-content/uploads/2016/09/nola.jpg"
                        alt="Responsive image"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <Img
                        className="rounded mx-auto d-block w-100"
                        src="https://news.tulane.edu/sites/news/files/images/102914_nola-social-ride_8474_730_rr.jpg"
                        alt="Responsive image"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <Img
                        className="rounded mx-auto d-block w-100"
                        src="http://nebula.wsimg.com/393a8a96d21e7cf69fe9258a38a223d7?AccessKeyId=DB439B909D1F4945E31A&disposition=0&alloworigin=1"
                        alt="Responsive image"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <Img
                        className="rounded mx-auto d-block w-100"
                        src="https://static.wixstatic.com/media/9c2fed_2f60f198422c47b5b7680fd5faea3812~mv2_d_4032_3024_s_4_2.jpg/v1/crop/x_4,y_0,w_4023,h_3024/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01/bike%20party.webp"
                    />
                </Carousel.Item>
            </Carousel>
        </Div>
    );
};

export default RotatingCarousel