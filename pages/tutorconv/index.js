import React from 'react';
import ThankYou from "../../components/ThankYou/ThankYou";
import Layout from "../../components/Layouts/Layout";
import ThankYouAlt from "../../components/ThankYou/ThankYouAlt";

export default function TutorConv(props) {
    return (
        <>
            <ThankYouAlt/>
        </>
    );
}

TutorConv.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
