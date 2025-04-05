import Layout from "../components/Layout";
import TopHeroSection from "../components/AboutPage/TopSectionHero";
import TopMidSection from "../components/AboutPage/TopSectionMid";
import MiddleSection from "../components/AboutPage/MiddleSection";
import MiddleBottomSection from "../components/AboutPage/MiddleBottomSection";
import BottomSection from "../components/AboutPage/BottomSection";
import Head from 'next/head';

const AboutPage = () => (
  <>
    {/* <Head>
      <title>About | Cloghala</title>
      <meta name="description" content="Learn more about Cloghala, our mission, and our team." />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About",
          "url": "https://cloghala.ie/about"
        })}
      </script>
    </Head> */}

    <Layout title="About | Cloghala">
      <TopHeroSection />
      <TopMidSection />
      <MiddleSection />
      <MiddleBottomSection />
      <BottomSection />
    </Layout>
  </>
);

export default AboutPage;
