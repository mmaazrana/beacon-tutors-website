import styles from './Reviews.module.css';
import Review from '../Review/Review';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal/Modal';
import {Plus} from 'lucide-react';
import {useState} from 'react';
import NewReview from '../../components/NewReview/NewReview';
import scaleAnimationStyles from "../../styles/Animations/ScaleFadeAnimations.module.css";
import {Waypoint} from 'react-waypoint';
import {CSSTransition} from 'react-transition-group';
import {Swiper, SwiperSlide} from 'swiper/react';
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

    const staticReviews = [
        {
            id: 1,
            image: 'm1',
            username: 'Ashar Abbas Bukhari',
            rating: 5,
            description: 'It was a great experience to have your service. Thankyou for being so supportive.',
        },
        {
            id: 2,
            image: 'f1',
            username: 'Suleha Azam',
            rating: 5,
            description: 'Took 4 demo sessions and it was kinda hectic to decide and finalize the teacher but I must appreciate the support from your end and thanks for being always available to listen to my words.',
        },
        {
            id: 3,
            image: 'f2',
            username: 'Noor ul Huda',
            rating: 4.5,
            description: 'Hired a teacher for the third time from this company and every time you people tried your best to fulfill my requirements. I think you should introduce some strict policies for teachers as well so they can teach kids for a longer period of time since changing a teacher every 2nd or 3rd month is disturbing.',
        },
    ]

    const data = props.data.length > 0 ? props.data : staticReviews


    return (
        <>
            <Swiper
                slidesPerView = {"auto"}
                centeredSlides = {true}
                direction = {'vertical'}
                grabCursor = {true}
                disableOnInteraction = {false}
                draggable={true}
                loop = {true}
                loopedSlides = {3}
                speed = {500}
                height = {500}
                createElements = {true}
                autoHeight = {true}
                slideToClickedSlide = {true}
                autoplay = {
                    {
                        delay: "2500",
                        pauseOnMouseEnter: true,
                    }
                }
                className = {styles.swiper}
            >
                {data.map((review) => (
                    <SwiperSlide key = {review.id}> <Review
                        key = {review.id}
                        image = {review.image}
                        username = {review.username}
                        rating = {review.rating}
                        description = {review.description}
                    /> </SwiperSlide>
                ))}
            </Swiper>
            <div className = {styles.wrapper}>
                <Waypoint
                    scrollableAncestor = {"window"}
                    onEnter = {() => {
                        setScrollIn(true)
                    }}
                >

                    <div>
                        <CSSTransition
                            mountOnEnter
                            in = {scrollIn}
                            appear = {scrollIn}
                            timeout = {750}
                            classNames = {scaleAnimationStyles}>
                            <div>
                                <button className = {styles.button} onClick = {openModal}>
                                    <Plus className = {styles.icon}/> Submit Review
                                </button>
                            </div>

                        </CSSTransition>
                    </div>
                </Waypoint>
            </div>

            <Modal title = "Add Review" isOpen = {isOpen} closeModal = {closeModal}> <NewReview
                closeModal = {closeModal}/> </Modal>
        </>
    );
}
