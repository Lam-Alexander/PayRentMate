import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/hero/HeroSection";
import PricingSection from "../../components/price/PricingSection";

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
        <section id="pricing">
          <PricingSection />
        </section>
      </main>
    </Layout>
  );
};
export default Home;
