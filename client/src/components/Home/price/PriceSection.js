import PricingCard from "./PricingCard";
/**
 * PricingSection Component
 *
 * Renders a section that displays available pricing plans use the PricingCard Component.
 * Each plan includes a title, price and list of features. Data is stored locally in an array.
 *
 * This section is intended for users to compare and select the appropriate subscription tier.
 *
 */

const PricingSection = () => {
  // Defines available pricing plan with associated features
  const plans = [
    {
      title: "FREE",
      pricing: "0 CAD/month",
      features: [
        { label: "Complimentary Tenant Portal Access", value: true },
        { label: "View Lease Details", value: true },
        { label: "Manage Maintenance Requests", value: true },
        { label: "Automated Rent Collection", value: false },
        { label: "Access Monthly Statements", value: false },
      ],
      Highlight: false,
    },
    {
      title: "LITE",
      pricing: "20 CAD/month",
      features: [
        { label: "Complimentary Tenant Portal Access", value: true },
        { label: "View Lease Details", value: true },
        { label: "Manage Maintenance Requests", value: true },
        {
          label: "1 Property / Month with Automated Rent Collection",
          value: true,
        },
        { label: "Access Monthly Statements", value: true },
      ],
      Highlight: false,
    },
    {
      title: "PRO",
      pricing: "40 CAD/month",
      features: [
        { label: "Complimentary Tenant Portal Access", value: true },
        { label: "View Lease Details", value: true },
        { label: "Manage Maintenance Requests", value: true },
        {
          label: "Up to 3 Properties / Month with Automated Rent Collection",
          value: true,
        },
        { label: "Access Monthly Statements", value: true },
      ],
      Highlight: false,
    },
  ];

  return (
    <div className="pricing-page-section">
      {/* <div className="pricing-page-header">
        <h1 className="pricing-page-title">Choose a pricing plan</h1>
        <p>Meet PayRentMate – designed to make renting easier for everyone.</p>
      </div> */}
    
  <div className="pricing-page-header">
    <p className="pricing-subheading">Flexible plans for tenants and landlords</p>
    <h1 className="pricing-page-title">Choose a pricing plan</h1>
    <p className="pricing-page-description">
      Meet PayRentMate – designed to make renting easier for everyone.
    </p>
  </div>



      {/* Render each plan using the PricingCard component */}
      {plans.map((plan, idx) => (
        <PricingCard
          key={idx}
          title={plan.title}
          pricing={plan.pricing}
          features={plan.features}
        />
      ))}
    </div>
  );
};
export default PricingSection;
