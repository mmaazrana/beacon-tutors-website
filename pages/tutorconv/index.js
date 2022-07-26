import React from 'react';
import ThankYou from "../../components/ThankYou/ThankYou";
import Layout from "../../components/Layouts/Layout";

export default function TutorConv(props) {
    return (
        <>
            <ThankYou text={"Thankyou for submitting your inquiry. It is requested to click on the button below to talk with one of our agent. "}/>
        </>
    );
}

TutorConv.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
