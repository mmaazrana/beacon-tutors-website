import React from 'react';
import ThankYou from "../../components/ThankYou/ThankYou";
import Layout from "../../components/Layouts/Layout";

export default function StdOnlineConv(props) {
    return (
        <>
            <ThankYou/>
        </>
    );
}

StdOnlineConv.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
