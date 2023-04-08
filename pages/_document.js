import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <link
                href="https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,500&family=Manrope:wght@300;400;500;600;700;800&family=Pacifico&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&family=Roboto+Slab:wght@400;600;900&display=swap"
                rel="stylesheet"
            ></link>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
