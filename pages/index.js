// beacontutorspk.com

import Head from "next/Head";
import React from "react";
import LinkButton from "../components/Buttons/LinkButton";
import Nav from "../components/Nav/Nav";

export default function Home() {



    return (
        <>
            <Head>
                <title>Beacon Tutors Pakistan - Home</title>
                <meta name="description" content="Meta description for the Home page" />
            </Head>
            <Nav/>
            <h1>Beacon Tutors Official Website</h1>
            <p>Let's do this!</p>
            <LinkButton primary={true} link={'/online-tutoring'} text={'Online tutoring'}/>
            <LinkButton primary={true} link={'/home-tutoring'} text={'Home Tutoring'}/>
            <LinkButton primary={true} link={'/writing-service'} text={'Writing Service'}/>
            <LinkButton primary={true} link={'/become-a-tutor'} text={'Become A Tutor'}/>
        </>
    )
}
