import React from 'react';
import Layout from "../../components/Layouts/Layout";
import styles from '../../styles/SubmitInquiry.module.css'
import LinkButton from "../../components/Buttons/LinkButton";
import {ReactComponent as OneOnOneTutoring} from "../../assets/Advantages/Home/OneOnOneTutoring.svg";
import {ReactComponent as MaleAndFemaleTutors} from "../../assets/Advantages/Home/MaleAndFemaleTutors.svg";

export default function SubmitInquiry(props) {
    return (<div className = {styles.wrapper}>

        <h1 className = {styles.question}>
            Who are you?
        </h1>
        <div className = {styles.lottieRow}>
            <OneOnOneTutoring />
            <MaleAndFemaleTutors />
        </div>
        <div className = {styles.row}>
            <div className = {styles.columnLeft}>
                <LinkButton className = {styles.studentButton} text = {"Student/Parent"} link = {"/submitinquiry/inquiryform"} primary = {true}/>
                <OneOnOneTutoring className = {styles.studentLottie}/>
            </div>
            <div className = {styles.columnRight}>
                <LinkButton className = {styles.teacherButton} text = {"Teacher"} link = {"/submitinquiry/inquiryform"} primary = {true}/>
                <MaleAndFemaleTutors className = {styles.teacherLottie}/>
            </div>
        </div>

    </div>);
}

SubmitInquiry.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
