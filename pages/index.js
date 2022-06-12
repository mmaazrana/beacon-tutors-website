// beacontutorspk.com

import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/Head";
import React from "react";
import LinkButton from "../components/Buttons/LinkButton";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import Nav from "../components/Nav/Nav";

export default function Home() {

    const router = useRouter()


    return (
        <>
            <Head>
                <title>Beacon Tutors Pakistan - Home</title>
                <meta name="description" content="Meta description for the Home page" />
            </Head>
            <Nav/>
            <h1>Beacon Tutors Official Website</h1>
            <p>Let's do this!</p>
            <LinkButton link={'/online-tutoring'} text={'Online tutoring'}/>
            <LinkButton link={'/home-tutoring'} text={'Home Tutoring'}/>
            <LinkButton link={'/writing-service'} text={'Writing Service'}/>
            <LinkButton link={'/become-a-tutor'} text={'Become A Tutor'}/>
        </>
    )
}
