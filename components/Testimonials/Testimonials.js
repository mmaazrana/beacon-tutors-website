import styles from './Testimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials(props) {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    // swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
  };

  return (
      <Slider {...settings} className={styles.testimonials}>

      {props.testimonials.map((testimonial, index) => (
        <Testimonial
          image={testimonial.image}
          username={testimonial.username}
          rating={testimonial.rating}
          description={testimonial.description}
        />
      ))}
      </Slider>
  );
}
