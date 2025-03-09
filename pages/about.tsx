import Layout from "../components/Layout";
import TopHeroSection from "../components/AboutPage/TopSectionHero";
import TopMidSection from "../components/AboutPage/TopSectionMid";
import MiddleSection from "../components/AboutPage/MiddleSection";
import MiddleBottomSection from "../components/AboutPage/MiddleBottomSection";

const AboutPage = () => (
  <Layout title="About | Cloghala">
    <TopHeroSection />
    <TopMidSection />
    <MiddleSection />
    <MiddleBottomSection />
  </Layout>
);

export default AboutPage;
