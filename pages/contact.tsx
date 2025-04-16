import Layout from "../components/Layout";
import TopSection from "components/Contact/TopSection";
import Script from 'next/script'
import Head from 'next/head';

const ContactPage = () => (
  <>
      <Head>
        <title>Contact | Cloghala</title>
        <meta name="description" content="Get in touch with us at Cloghala." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact",
            "url": "https://cloghala.ie/contact"
          })}
        </script>
      </Head>

    <Layout title="Contact | Cloghala">
      <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
      <TopSection />
    </Layout>
  </>
);

export default ContactPage;
