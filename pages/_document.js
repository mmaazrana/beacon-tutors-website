import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <Script
                strategy = "afterInteractive"
                dangerouslySetInnerHTML = {{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6Q2KQK');`,
                }}
            />
            <noscript
                dangerouslySetInnerHTML = {{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6Q2KQK"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
            />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id={'globalLoader'}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
          <Main /> <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
