import React from 'react';
import ThankYou from "../../components/ThankYou/ThankYou";
import Layout from "../../components/Layouts/Layout";

export default function StdOnlineConv(props) {
    return (
        <>
            <ThankYou text={"Thankyou for submitting your inquiry. One of our agent will get back to you very soon. "}/>
        </>
    );
}

StdOnlineConv.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
