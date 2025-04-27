import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables from .env file
dotenv.config();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Cloghala Homes" />
        <meta property="og:description" content="A trusted name in plumbing and mechanical services, Cloghala Homes provides quality, innovation, and reliability to the building sector." />
        <meta property="og:image" content="https://ik.imagekit.io/yaugjs8a5/CloghalaHomes_Logo-01.png?updatedAt=1745791650592" />
        <meta property="og:url" content="https://www.cloghala.ie/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="A trusted name in plumbing and mechanical services, Cloghala Homes provides quality, innovation, and reliability to the building sector." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
      </Head>
      <div className='bg-dark'>
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      </div>
    </>
  );
}

export default MyApp;