import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Announcement from "../Announcement/Announcement";
import Service from "../Service/Service";

export default function Services(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        useTransform: true,
        useCss: true,
        cssEase: 'ease-in-out',
        centerMode: true,
    };

    return (
        <>
            <Slider {...settings} className={'services'}>
                {props.data?.map((service, index) => (
                    <Service key = {index} heading={service.heading}
                             description={ service.description }
                             image={service.image}
                    />
                ))}
            </Slider>
        </>
    );
}

