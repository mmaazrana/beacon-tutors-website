import styles from './Reviews.module.css';
import Review from '../Review/Review';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal/Modal';
import {Check, Plus} from 'lucide-react';
import formStyles from "../AdminForms/AdminForms.module.css";
import {customSelectStyles, imagesOptions, ratingOptions} from "../AdminForms/AdminForms";
import Select from "react-select";
import {useState} from "react";

export default function Reviews(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState();
    const [username, setUsername] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");

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

    const updateHandler = async (e) => {
        e.preventDefault();
        setIsOpen(false);
    };

    return (<>
        <Slider {...settings} className = {styles.reviews}>

            {props.data.map((review, index) => (<Review
                key = {index}
                image = {review.image}
                username = {review.username}
                rating = {review.rating}
                description = {review.description}
            />))}
        </Slider>
        <div className = {styles.wrapper}>
            <button className = {styles.button} onClick={openModal} >
                <Plus className = {styles.icon}/> Submit your review
            </button>
        </div>

        <Modal title = "Edit Review" isOpen = {isOpen} closeModal = {closeModal}>
            <form onSubmit = {updateHandler}>
                <div className = {formStyles.row}>
                    {imagesOptions.map((image, index) => (<label key = {index}> <input
                        type = "radio"
                        name = "image"
                        value = {image.value}
                        key = {index}// defaultChecked={image.value === image ? true : false}
                        onChange = {(e) => setImage(e.target.value)}
                    />
                        <div className = {formStyles.image}>
                            {image.label} <Check className = {formStyles.check}/>
                        </div>
                    </label>))}
                </div>

                <input
                    className = "adminInput"
                    type = "text"
                    name = "username"
                    placeholder = "Name"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />

                <textarea
                    className = "adminInput"
                    placeholder = "Description"
                    name = "description"
                    rows = "4"
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                />

                <div className = {formStyles.inputsRow}>
                    <Select
                        className = "adminInput"
                        onChange = {setRating}
                        options = {ratingOptions}
                        styles = {customSelectStyles}
                        defaultValue = {{value: rating, label: rating}}
                        placeholder = "Rating"
                    />
                </div>

                <button type = "submit" className = "adminButton">
                    Update Review
                </button>
            </form>
        </Modal>

    </>)
}
