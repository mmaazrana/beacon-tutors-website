import React from 'react';
import Layout from "../../components/Layouts/Layout";
import ThankYouAlt from "../../components/ThankYou/ThankYouAlt";

export default function TutorConversion(props) {
    return (
        <>
            <ThankYouAlt/>
        </>
    );
}

TutorConversion.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
