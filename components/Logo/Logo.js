import React from 'react';
import Image from 'next/image'
import logo from '../../assets/beacon-tutors.svg'
export default function Logo(props) {
    return (
        <>
            <Image src={logo}  />
        </>
    );
}

