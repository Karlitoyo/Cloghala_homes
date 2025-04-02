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
        <meta property="og:image" content="https://ik.imagekit.io/yaugjs8a5/WhatsApp%20Image%202025-01-10%20at%2008.28.24_85d5578c.jpeg?updatedAt=1743619299283" />
        <meta property="og:url" content="https://www.cloghala.ie/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="A trusted name in plumbing and mechanical services, Cloghala Homes provides quality, innovation, and reliability to the building sector." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
    </>
  );
}

export default MyApp;