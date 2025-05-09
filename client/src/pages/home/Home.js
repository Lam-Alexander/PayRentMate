import "./Home.css";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/Home/hero/HeroSection";
import PricingSection from "../../components/Home/price/PriceSection";

/**
 * Home Page Component
 *
 * This page contains
 *
 */

const Home = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <PricingSection />
      </main>
    </Layout>
  );
};
export default Home;
