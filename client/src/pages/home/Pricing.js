import PricingSection from "../../components/Home/price/PricingSection";
import Layout from "../../components/layout/Layout";
/**
 * Pricing Page
 *
 * This component renders the pricing page layout, which includes:
 * - A Layout component that provides the Header component and a Footer component for the page.
 * - A section displaying the available pricing plans, provided by the PricingSection component.
 */

const Pricing = () => {
  return (
    <Layout>
      <div className="pricing-page-background-colour">
        <PricingSection />
      </div>
    </Layout>
  );
};
export default Pricing;
