import PricingCard from "./PricingCard";

const PricingSection = () => {
    const plans = [
        {
          title: "FREE",
          pricing: "0 CAD/month",
          features: [
            {label: "Free access for tenant", value: true},
            {label: "View lease details", value: true},
            {label: "Manage maintenance requests", value: true},
            {label: "Automated rent collection", value: false},
            {label: "Access monthly statements", value: false}
          ],
          Highlight: false
        },
        {
          title: "LITE",
          pricing: "20 CAD/month",
          features: [
            {label: "Free access for tenant", value: true},
            {label: "View lease details", value: true},
            {label: "Manage maintenance requests", value: true},
            {label: "1 property / month with Automated rent collection", value: true},
            {label: "Access monthly statements", value: true}
          ],
          Highlight: false
        },
        {
          title: "PRO",
          pricing: "40 CAD/month",
          features: [
            {label: "Free access for tenant", value: true},
            {label: "View lease details", value: true},
            {label: "Manage maintenance requests", value: true},
            {label: "Up to 3 properties / month with Automated rent collection", value: true},
            {label: "Access monthly statements", value: true}
          ],
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
    <PricingCard 
      key={idx}
      title={plan.title}
      pricing={plan.pricing}
      features={plan.features}
      />
  ))}
</div>

        
      );
}
export default PricingSection