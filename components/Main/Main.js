import React from 'react';
import Lottie from "lottie-react";

export default function Main(props) {
    return (
        <div>
            <div>
                <h1>
                    {props.heading}
                </h1>
                <h4>
                    {props.description}
                </h4>
            </div>
            <Lottie animationData={props.lottie} loop={true} autoplay={true} />
        </div>
    );
}

