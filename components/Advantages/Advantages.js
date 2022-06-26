import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Advantage from '../Advantage/Advantage';
import styles from './Advantages.module.css';

export default function Advantages(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
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
      <Slider {...settings} className={styles.main}>
        {props.data?.map((advantage, index) => (
          <Advantage
            key={index}
            index={index}
            heading={advantage.heading}
            description={advantage.description}
            image={advantage.image}
          />
        ))}
      </Slider>
    </>
  );
}
