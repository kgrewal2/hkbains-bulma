import { Html, Head, Main, NextScript } from 'next/document'
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Navigation />
            <Main />
            <NextScript />
            <Footer/>
            </body>
        </Html>
    )
}