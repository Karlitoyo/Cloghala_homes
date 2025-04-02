import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Cloghala Homes" />
        <meta property="og:description" content="A trusted name in plumbing and mechanical services, Cloghala Homes brings the same commitment of quality, innovation, and reliability to the building sector." />
        <meta property="og:image" content="/images/homePage/Logo/logo.jpg" />
        <meta property="og:url" content="https://www.cloghala.ie/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Built on the strong foundation of HPC, a trusted name in plumbing and mechanical services, Cloghala Homes brings the same commitment to quality, innovation, and reliability to the building sector." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Add stylesheets here instead of next/head */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
