import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Head from 'next/head';
import dotenv from 'dotenv';

// Initialize dotenv to load environment variables from .env file
dotenv.config();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-dark'>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeIuAQrAAAAAJinmxQ4L_QLoHlxWPf87Vfc8iiV"
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
  );
}

export default MyApp;