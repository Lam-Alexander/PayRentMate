import './PricingCard.css'


const PricingCard = ({title, pricing,features}) => {

    const getTitleClass = (title) => {
        switch (title) {
          case "LITE":
            return "lite-gradient";
          case "PRO":
            return "pro-gradient";
          case "FREE":
            return "free-gradient";
          default:
            return "";
        }
      };

      const CheckIcon = () => (
        <svg width="30" height="16" fill="#28a745" viewBox="0 0 16 16">
          <path d="M13.485 1.929L6 9.414 2.515 5.929l-1.414 1.414L6 12.243l9.899-9.899-1.414-1.415z" />
        </svg>
      );
      
      const CrossIcon = () => (
        <svg width="30" height="30" fill="#dc3545" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      );
      
    return (
        <div className="pricing-card">
            <h2 className={getTitleClass(title)}>{title}</h2>
            <p className="price">
            <span className="currency-symbol">$</span>
  <span className="price-value">{pricing.split(' ')[0]}</span>
  <span className="currency-info">{pricing.split(' ')[1]}</span>
            </p>
            <button className='pricing-card-get-started-button'>Get Started</button>
            <ul>
  {Object.entries(features).map(([feature, value], idx) => (
    <li key={idx}>
  <span className="feature-icon">
    {value === true && <CheckIcon />}
    {typeof value === "string" && <CheckIcon />}
    {value === false && <CrossIcon />}
  </span>
  {typeof value === "string" ? value : ""} {feature}
</li>

  
  ))}
</ul>
            
        </div>
    )

};

export default PricingCard;