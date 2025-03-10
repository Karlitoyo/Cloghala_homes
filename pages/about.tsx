import Layout from "../components/Layout";
import TopHeroSection from "../components/AboutPage/TopSectionHero";
import TopMidSection from "../components/AboutPage/TopSectionMid";
import MiddleSection from "../components/AboutPage/MiddleSection";
import MiddleBottomSection from "../components/AboutPage/MiddleBottomSection";
import BottomSection from "../components/AboutPage/BottomSection";

const AboutPage = () => (
  <Layout title="About | Cloghala">
    <TopHeroSection />
    <TopMidSection />
    <MiddleSection />
    <MiddleBottomSection />
    <BottomSection />
  </Layout>
);

export default AboutPage;
