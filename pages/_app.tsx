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