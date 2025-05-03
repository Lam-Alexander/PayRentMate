import PricingCard from "./PricingCard";

const PricingSection = () => {
    const plans = [
        {
          title: "FREE",
          pricing: "0.00 CAD/month",
          features: {
            "View lease details": true,
            "Submit maintenance requests": true,
            "Automated rent collection": false,
            "Access monthly statements": false
          },
          Highlight: false
        },
        {
          title: "LITE",
          pricing: "19.99 CAD/month",
          features: {
            "View lease details": true,
            "Submit maintenance requests": true,
            "Automated rent collection": "1 property / month",
            "Access monthly statements": true
          },
          Highlight: false
        },
        {
          title: "PRO",
          pricing: "39.99 CAD/month",
          features: {
            "View lease details": true,
            "Submit maintenance requests": true,
            "Automated rent collection": "Up to 3 properties / month",
            "Access monthly statements": true
          },
          Highlight: false
        }
      ];

      return (
        <div className="block2">
            {plans.map((plan, idx) => 
            <PricingCard key={idx} {...plan}/>
            )}
        </div>
      );
}
export default PricingSection