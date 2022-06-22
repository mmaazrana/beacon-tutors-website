import styles from './Reviews.module.css';
import Review from '../Review/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Reviews(props) {
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
      <Slider {...settings} className={styles.reviews}>

      {props.data.map((review, index) => (
        <Review
          key={ index}
          image={review.image}
          username={review.username}
          rating={review.rating}
          description={review.description}
        />
      ))}
      </Slider>
  );
}
