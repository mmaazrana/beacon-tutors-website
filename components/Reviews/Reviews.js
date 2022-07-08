import styles from './Reviews.module.css';
import Review from '../Review/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal/Modal';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import NewReview from '../../components/NewReview/NewReview';
import scaleAnimationStyles from "../../styles/Animations/ScaleFadeAnimations.module.css";
import {Waypoint} from 'react-waypoint';
import {CSSTransition} from 'react-transition-group';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Reviews(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollIn, setScrollIn] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
        <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            direction={'vertical'}
            grabCursor={true}
            disableOnInteraction={false}
            loop={true}
            loopedSlides={3}
            speed={500}
            height={500}
            createElements={true}
            autoHeight={true}
            slideToClickedSlide={true}
            autoplay={
              {
                delay:"2500",
                pauseOnMouseEnter: true,
              }
            }
            className={styles.swiper}
        >
        {props.data.map((review) => (
            <SwiperSlide>
              <Review
                key={review.id}
                image={review.image}
                username={review.username}
                rating={review.rating}
                description={review.description}
              />
            </SwiperSlide>
        ))}
        </Swiper>
      <div className={styles.wrapper}>
        <Waypoint
            scrollableAncestor = {"window"}
            onEnter = {() => {
              setScrollIn(true)
            }}
            onLeave = {() => {
              setScrollIn(false)
            }}
        >

          <div>
            <CSSTransition
                in = {scrollIn}
                appear = {scrollIn}
                timeout = {250}
                classNames = {scaleAnimationStyles}>
              <div>
        <button className={styles.button} onClick={openModal}>
          <Plus className={styles.icon} /> Your Cut
        </button>
              </div>

            </CSSTransition>
          </div>
        </Waypoint>
      </div>

      <Modal title="Add Review" isOpen={isOpen} closeModal={closeModal}>
        <NewReview closeModal={closeModal} />
      </Modal>
    </>
  );
}
