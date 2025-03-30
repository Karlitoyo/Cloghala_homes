import Layout from "../components/Layout";
import TopSection from "components/Contact/TopSection";
import Script from 'next/script'

const ContactPage = () => (
    <Layout title="Contact | Cloghala">
      <Script src="https://www.google.com/recaptcha/api.js?render=6LeIuAQrAAAAAJinmxQ4L_QLoHlxWPf87Vfc8iiV" />
      <TopSection />
    </Layout>

);

export default ContactPage;
