import Announcement from '../Announcement/Announcement';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../Reviews/Reviews.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function Announcements(props) {


    return (
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
        {props.data?.map((announcement,index) => (
            <SwiperSlide key={announcement.id} >
            <Announcement
            keyword={props.keyword}
            key={announcement.id}
            announcement={announcement}
            />
            </SwiperSlide>
        ))}
        </Swiper>
    );
}
