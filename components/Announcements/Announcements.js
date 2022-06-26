import Announcement from '../Announcement/Announcement';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Announcements(props) {

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
        centerPadding: '150px',
        useTransform: true,
        useCss: true,
        cssEase: 'ease-in-out',
        // swipeToSlide: true,
        focusOnSelect: true,
        centerMode: true,
    }

    return (
        <Slider {...settings} >
            {props.data?.map((announcement, index) => (
                <Announcement key = {index} announcement = {announcement}/>))}
        </Slider>
    )
}
