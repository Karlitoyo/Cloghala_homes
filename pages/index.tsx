import Layout from "../components/Layout";
import HeroSection from "../components/HomePage/HeroSection";
import MiddleSection from "../components/HomePage/MiddleSection";
import BottomSection from "../components/HomePage/BottomSection";

const IndexPage = () => (
  <Layout title="Home | Cloghala Homes">
    <HeroSection />
    <MiddleSection />
    <BottomSection />
  </Layout>
);

export default IndexPage;
