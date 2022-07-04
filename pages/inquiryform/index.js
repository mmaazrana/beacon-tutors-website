import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/InquiryForm.module.css'
import Separator from "../../components/Separator/Separator";
import Select from "react-select";
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import fadeAnimationStyles from "../../styles/Animations/FadeAnimations.module.css";
import {CSSTransition} from 'react-transition-group';
import toast from "react-hot-toast";
import {addDoc, collection, doc, serverTimestamp} from "firebase/firestore";
import {db} from "../../firebase";
import {useRouter} from "next/router";
import {isMobile} from 'react-device-detect';

export default function InquiryForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [service, setService] = useState("");
    const [comments, setComments] = useState("");

    const router = useRouter()
    const data = router.query;

    const customSelectStyles = {
        control: (provided, state) => ({
            ...provided,
            border: '4px solid rgba(161, 190, 219, 0.75)',
            background: ' rgba(161, 190, 219, 0.25) ',
            borderRadius: '8px',
            fontSize: '18px',
            lineHeight: '19px',
            padding: '6px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }),

        placeholder: (provided, state) => ({
            ...provided,
            color: '#1C1C1C',
            fontWeight: '500',
            fontSize: '1.1rem',
            lineHeight: '1.11rem',
            marginLeft: '40px',
        }),

        singleValue: (provided, state) => ({
            ...provided,
            color: '#3d6b98',
            fontWeight: '500',
            fontSize: '1.1rem',
            lineHeight: '1.11rem',
            marginLeft: '40px',
        }),

        indicatorSeparator: (provided, state) => ({
            ...provided, display: 'none',
        }),

        dropdownIndicator: (provided, state) => ({
            ...provided, color: '#a1bedb', '&:hover': {color: '#3d6b98'}
        }),
    };

    const locationOptions = [{
        value: 'lahore', label: 'Lahore',
    }, {
        value: 'islamabad', label: 'Islamabad',
    }, {
        value: 'rawalpindi', label: 'Rawalpindi',
    }, {
        value: 'karachi', label: 'Karachi',
    }, {
        value: 'other', label: 'Other',
    },];

    const descriptionOptions = [{
        value: 'student', label: 'Student/Parent',
    }, {
        value: 'teacher', label: 'Teacher',
    },];

    const serviceOptions = [{
        value: 'online', label: 'Online Tutoring',
    }, {
        value: 'home', label: 'Home Tutoring',
    }, {
        value: 'content', label: 'Content Writing',
    },];

    const isValid = () => {
        if(firstName==="") {
            toast.error("Kindly enter your first name")
            return false
        }
        if(lastName==="") {
            toast.error("Kindly enter your last name")
            return false
        }
        if(description==="") {
            toast.error("Kindly enter your description")
            return false
        }
        if(contact==="") {
            toast.error("Kindly enter your phone number")
            return false
        }
        if(!isValidPhoneNumber(contact)) {
            toast.error("Kindly provide a valid phone number")
            return false
        }
        if(whatsapp==="") {
            toast.error("Kindly enter your Whatsapp contact number")
            return false
        }
        if(!isValidPhoneNumber(whatsapp)) {
            toast.error("Kindly provide a valid Whatsapp contact number")
            return false
        }
        if(email==="") {
            toast.error("Kindly enter your email")
            return false
        }
        if(location==="") {
            toast.error("Kindly select your location")
            return false
        }
        return true;
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if(service==='content')
        {
            if(isMobile){
                await router.replace("https://wa.me/923148142090")
            } else{
                await router.replace("/")
            }
        }
        else if(isValid()){
            try {
            await toast.promise(
                addDoc(collection(db, 'inquiries'), {
                    name: firstName+' '+lastName,
                    description,
                    email,
                    contact,
                    whatsappNumber:whatsapp,
                    city:location,
                    service,
                    comments,
                    isViewed: false,
                    timestamp: serverTimestamp(),
                }).then(() => {
                    if(description==="teacher" && data.user === "teacher"){
                        router.replace("/tutorconv")
                    }else if (service === "home"){
                        router.replace("/stdhomeconv")
                    }else if (service === "online"){
                        router.replace("/stdonlineconv")
                    }
                }),
                {
                    loading: 'Submitting inquiry...',
                    success: 'Inquiry Submitted successfully',
                    error: 'Error submitting inquiry',
                }
            );
        } catch (error) {
            console.log(error.code, error.message);
        }
        }
    }


    return (<div className = {styles.main}>
        <Separator text = {"Submit Inquiry"}/>
        <form onSubmit = {submitHandler}>
            <div className = {styles.wrapper}>
                <div className = {styles.column}>
                    <div className = {styles.entry}>
                        <p> Name </p>
                        <div className = {styles.name}>
                            <input
                                size = "6"
                                className = {styles.input}
                                type = "text"
                                name = "firstName"
                                placeholder = "First Name"
                                value = {firstName}
                                onChange = {(e) => setFirstName(e.target.value)}
                            /> <input
                            size = "6"
                            className = {styles.input}
                            type = "text"
                            name = "lastName"
                            placeholder = "Last Name"
                            value = {lastName}
                            onChange = {(e) => setLastName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = {styles.entry}>
                        <p> Email </p>

                        <input
                            className = {styles.input}
                            size = "14"
                            type = "email"
                            name = "email"
                            placeholder = "Enter a valid Email"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className = {styles.entry}>

                        <p> Contact </p>
                        <PhoneInput
                            size = "12"
                            className = {styles.input}
                            international
                            defaultCountry = "PK"
                            placeholder = "Enter Contact Number"
                            value = {contact}
                            onChange = {setContact}
                        />
                    </div>
                    <div className = {styles.entry}>

                        <p> Whatsapp Contact </p>
                        <PhoneInput
                            size = "12"
                            className = {styles.input}
                            international
                            defaultCountry = "PK"
                            placeholder = "Enter Contact Number"
                            value = {whatsapp}
                            onChange = {setWhatsapp}
                        /> {/** {whatsapp ? (isValidPhoneNumber(whatsapp) ? undefined : 'Invalid phone number') : 'Phone number required'} **/}
                    </div>
                    <div className = {styles.entry}>
                        <p>Location</p>
                        <Select
                            onChange = {(value) => setLocation(value.value)}
                            options = {locationOptions}
                            styles = {customSelectStyles}
                            defaultValue = {{
                                value: "", label: "Select Location",
                            }}
                            placeholder = "Select Location"
                        />
                    </div>
                </div>
                <div className = {`${styles.column} ${styles.spaceBetween}`}>
                    <div className = {styles.column}>

                        <div className = {styles.entry}>
                            <p>Who are you?</p>
                            <Select
                                onChange = {(value) => setDescription(value.value)}
                                options = {descriptionOptions}
                                styles = {customSelectStyles}
                                defaultValue = {{
                                    value: "", label: "Select Description",
                                }}
                                placeholder = "Select Description"
                            />
                        </div>
                        {
                            (description === 'student' || description === 'teacher') &&
                            <CSSTransition
                                in = {true}
                                appear = {true}
                                timeout = {500}
                                classNames = {fadeAnimationStyles}>
                                <div className = {styles.entry}>
                                    {description === "student" ? <p>You want to hire?</p> : <p>You want to Work as?</p>}

                                    <Select
                                        onChange = {(value) => {
                                            setService(value.value)
                                            setComments("")
                                        }}
                                        options = {serviceOptions}
                                        styles = {customSelectStyles}
                                        defaultValue = {{
                                            value: "days", label: "Select Service",
                                        }}
                                        placeholder = "Select Service"
                                    />

                                </div>
                            </CSSTransition>
                        }
                        {description === "student" &&
                        <CSSTransition
                            in = {true}
                            appear = {true}
                            timeout = {500}
                            classNames = {fadeAnimationStyles}>
                            <div className = {styles.entry}>
                                <p>Comments</p>
                                <textarea
                                    className = {styles.input}
                                    placeholder = "Enter any suggestions/comments here"
                                    name = "comments"
                                    rows = "7"
                                    value = {comments}
                                    onChange = {(e) => setComments(e.target.value)}
                                />
                            </div>
                        </CSSTransition>
                    }

                    </div>
                    {(service === 'home' || service === 'online' || service === 'content')  &&
                        <CSSTransition
                            in = {true}
                            appear = {true}
                            timeout = {500}
                            classNames = {fadeAnimationStyles}>
                        <button className = {styles.button} type = {"submit"}> { service==='content'?"Contact Us":"Submit"}</button>
                        </CSSTransition>
                    }
                    {

                    }
                </div>
            </div>
        </form>

    </div>);
}

InquiryForm.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};