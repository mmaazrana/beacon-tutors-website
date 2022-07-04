import React from 'react';
import ThankYou from "../../components/ThankYou/ThankYou";
import Layout from "../../components/Layouts/Layout";

export default function StdHomeConv(props) {
    return (
        <>
            <ThankYou/>
        </>
    );
}

StdHomeConv.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};