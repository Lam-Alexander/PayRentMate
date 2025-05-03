import PricingCard from "./PricingCard";

const PricingSection = () => {
    const plans = [
        {
          title: "FREE",
          pricing: "0 CAD/month",
          features: {
            "Free access for tenant":true,
            "View lease details": true,
            "Manage maintenance requests": true,
            "Automated rent collection": false,
            "Access monthly statements": false
          },
          Highlight: false
        },
        {
          title: "LITE",
          pricing: "20 CAD/month",
          features: {
            "Free access for tenant":true,
            "View lease details": true,
            "Manage maintenance requests": true,
            "Automated rent collection": "1 property / month",
            "Access monthly statements": true
          },
          Highlight: false
        },
        {
          title: "PRO",
          pricing: "40 CAD/month",
          features: {
            "Free access for tenant":true,
            "View lease details": true,
            "Manage maintenance requests": true,
            "Automated rent collection": "Up to 3 properties / month",
            "Access monthly statements": true
          },
          Highlight: false
        }
      ];

      return (
      
<div className="block2">
  <div className="pricing-header">
    <h1 className="pricing-page-title">Choose a pricing plan</h1>
    <p>Meet PayRentMate – designed to make renting easier for everyone.</p>
  </div>
  {plans.map((plan, idx) => (
    <PricingCard key={idx} {...plan} />
  ))}
</div>

        
      );
}
export default PricingSection