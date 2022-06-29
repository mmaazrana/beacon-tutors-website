import styles from './Reviews.module.css';
import Review from '../Review/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal/Modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import NewReview from '../../components/NewReview/NewReview';

export default function Reviews(props) {
  const [isOpen, setIsOpen] = useState(false);

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
    arrows: false,
    centerPadding: '150px', // fade: true,
    // swipeToSlide: true,
    useTransform: true,
    useCss: true,
    cssEase: 'ease-in-out',
    focusOnSelect: true,
    centerMode: true,
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Slider {...settings} className={styles.reviews}>
        {props.data.map((review) => (
          <Review
            // uncomment key after firebase integration
            // key={review.id}
            image={review.image}
            username={review.username}
            rating={review.rating}
            description={review.description}
          />
        ))}
      </Slider>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={openModal}>
          <Plus className={styles.icon} /> Submit your review
        </button>
      </div>

      <Modal title="Add Review" isOpen={isOpen} closeModal={closeModal}>
        <NewReview closeModal={closeModal} />
      </Modal>
    </>
  );
}
