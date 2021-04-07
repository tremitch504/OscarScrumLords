import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// const Image =require('./styles/images/allwaysLounge.png'

// import Logo from “./logo.png”;
// <img src={Logo}/>

const RotatingCarousel = () => {
    return (
        <Carousel >
            <div>
                <img src="https://gonola.com/images/royal-street-biking-900x600.jpg" />
            </div>
            <div>
                <img src="https://momentummag.com/wp-content/uploads/2015/06/Advocacy_NBC_Walter_Griffin.jpg" />
            </div>
            <div>
                <img src="https://momentummag.com/wp-content/uploads/2016/09/nola.jpg" />
            </div>
            <div>
                <img src="https://news.tulane.edu/sites/news/files/images/102914_nola-social-ride_8474_730_rr.jpg" />
            </div>
            <div>
                <img src="http://nebula.wsimg.com/e87d7d1502655c67fbaaca63bfd57d5f?AccessKeyId=DB439B909D1F4945E31A&disposition=0&alloworigin=1" />
            </div>
        </Carousel>
    );
};

export default RotatingCarousel