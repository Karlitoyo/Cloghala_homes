import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='bg-dark'><Component {...pageProps} />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
  </div>;
}

export default MyApp;