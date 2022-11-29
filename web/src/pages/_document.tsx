import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
                            <body className="bg-black-900">
                                <Main />
                                <NextScript />
                            </body>
                        </Head>
                    </Html>
                    )
}