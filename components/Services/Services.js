import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Service from '../Service/Service';
import { useState } from 'react';

export default function Services(props) {
  const [play, setPlay] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: play,
    arrows: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
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
          <Service
            key={index}
            heading={service.heading}
            description={service.description}
            image={service.image}
            onclick={() => {
              setPlay(false);
            }}
          />
        ))}
      </Slider>
    </>
  );
}
