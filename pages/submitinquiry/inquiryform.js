import React, {useState} from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/InquiryForm.module.css'
import Separator from "../../components/Separator/Separator";
import Select from "react-select";
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'

export default function InquiryForm(props) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [location, setLocation] = useState();
    const [description, setDescription] = useState();
    const [service, setService] = useState();
    const [comments, setComments] = useState();

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
            ...provided, color: '#1C1C1C', fontWeight: '500', fontSize: '1.1rem', lineHeight: '1.11rem', marginLeft: '40px',
        }),

        singleValue: (provided, state) => ({
            ...provided, color: '#3d6b98', fontWeight: '500', fontSize: '1.1rem', lineHeight: '1.11rem', marginLeft: '40px',
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

    const submitHandler = async (e) => {
        e.preventDefault();
    };

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
                                required
                            /> <input
                            size = "6"
                            className = {styles.input}
                            type = "text"
                            name = "lastName"
                            placeholder = "Last Name"
                            value = {lastName}
                            onChange = {(e) => setLastName(e.target.value)}
                            required
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
                            required
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
                        {/** {contact ? (isValidPhoneNumber(contact) ? undefined : 'Invalid phone number') : 'Phone number required'} **/}
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
                        />
                        {/** {whatsapp ? (isValidPhoneNumber(whatsapp) ? undefined : 'Invalid phone number') : 'Phone number required'} **/}
                    </div>
                    <div className = {styles.entry}>
                        <p>Location</p>
                        <Select
                            onChange = {(value) => setLocation(value.value)}
                            options = {locationOptions}
                            styles = {customSelectStyles}
                            defaultValue = {{
                                value: "", label: "Select Location", // label: `${"days"}-${"days" == 1 ? 'Day' : 'Days'}/Week`,
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
                                    value: "", label: "Select Description", // label: `${"days"}-${"days" == 1 ? 'Day' : 'Days'}/Week`,
                                }}
                                placeholder = "Select Description"
                            />
                        </div>
                        {(description === 'student' || description === 'teacher') && <div className = {styles.entry}>
                            {description === "student" ? <p>You want to hire?</p> : <p>You want to Work as?</p>}

                            <Select
                                onChange = {(value) => setService(value.value)}
                                options = {serviceOptions}
                                styles = {customSelectStyles}
                                defaultValue = {{
                                    value: "days", label: "Select Service", // label: `${"days"}-${"days" == 1 ? 'Day' : 'Days'}/Week`,
                                }}
                                placeholder = "Select Service"
                            />

                        </div>} {description === "student" && <div className = {styles.entry}>
                        <p>Comments</p>
                        <textarea
                            className = {styles.input}
                            placeholder = "Enter any suggestions/comments here"
                            name = "comments"
                            rows = "7"
                            value = {comments}
                            onChange = {(e) => setComments(e.target.value)}
                        />
                    </div>}

                    </div>
                    {(service === 'home' || service === 'online' || service === 'content') &&
                        <button className = {styles.button} type = {"submit"}> Submit</button>}
                </div>
            </div>
        </form>

    </div>);
}

InquiryForm.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};