import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <Html> <Head>
                <link
                    rel = "stylesheet"
                    href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
                />
                <link
                    href = "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel = "stylesheet"
                />
            </Head>
                <body>
                <div id = {'globalLoader'}>
                    <div className = "loader">
                        <div/>
                        <div/>
                    </div>
                </div>
                <Main/> <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
