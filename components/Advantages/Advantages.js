import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Advantage from "../Advantage/Advantage";
import styles from "./Advantages.module.css"
export default function Advantages(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
    };

    return (
        <>
            <Slider {...settings} className={styles.main}>
                {/* working objects passed as prop will be used here*/}
                {props.data.map((value, index) => (
                    //here if key can be accessed inside working component, then index prop is not needed
                    <Advantage key={index} index={index} heading={value.heading} description={value.description}
                               image={value.image}/>
                ))}

            </Slider>
        </>
    );
}

